#!/usr/bin/env python3
"""Deja indexable solo la raíz del sitio: el resto del grafo sale del índice.

Se ejecuta como hook del seam `postBuild` de `okf build`: marca cada página con
`noindex`, reduce el sitemap a la raíz y publica un robots.txt.

El rastreo se deja abierto a propósito. Un `Disallow` en robots.txt no
desindexa: impide entrar, y con ello impide leer la propia etiqueta que ordena
salir del índice.

La raíz lleva canonical porque el sitio responde también en su dominio de
Cloudflare Pages, y esa copia sería un duplicado de la única página indexable.

Ese mismo razonamiento se aplica al sitemap, y por eso se publica además
`sitemap-retirada.xml` con las páginas que salen. Google necesita rastrear una
página para leer su `noindex`, y sacarla del sitemap a la vez que se le pone la
etiqueta retira la señal que traería al rastreador a leerla. El sitemap de
retirada declara esas URLs con la fecha en que cambió su directiva, que es lo
que Google recomienda para bajas masivas.

Es temporal y no se anuncia en robots.txt: se da de alta a mano en Search
Console, y cuando las páginas hayan salido del índice se borra allí y se quita
`RETIREMENT_SITEMAP` de este hook. robots.txt declara la superficie indexable
del sitio, que sigue siendo solo la raíz.
"""
import os
import pathlib
import re
import sys

ROBOTS_META = '<meta name="robots" content="noindex, follow"/>'
FALLBACK_ORIGIN = "https://cern.zetesis.xyz"
NOINDEX_SINCE = "2026-09-11"


def with_noindex(html):
    if 'name="robots"' in html or "<head>" not in html:
        return None
    return html.replace("<head>", "<head>" + ROBOTS_META, 1)


def with_canonical(html, origin):
    if 'rel="canonical"' in html or "<head>" not in html:
        return None
    return html.replace("<head>", f'<head><link rel="canonical" href="{origin}/"/>', 1)


def site_origin(sitemap_xml, fallback):
    match = re.search(r"<loc>(https?://[^/<]+)", sitemap_xml)
    return match.group(1) if match else fallback


def url_entries(sitemap_xml):
    return re.findall(r"<url>.*?</url>", sitemap_xml, re.DOTALL)


def is_root(entry, origin):
    return f"<loc>{origin}/</loc>" in entry


def with_lastmod(entry, lastmod):
    if "<lastmod>" in entry:
        return re.sub(r"<lastmod>[^<]*</lastmod>", f"<lastmod>{lastmod}</lastmod>", entry)
    return entry.replace("</url>", f"<lastmod>{lastmod}</lastmod></url>", 1)


def urlset(entries):
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(entries)
        + "\n</urlset>\n"
    )


def root_only_sitemap(sitemap_xml, origin):
    root = next(
        (e for e in url_entries(sitemap_xml) if is_root(e, origin)),
        f"<url><loc>{origin}/</loc></url>",
    )
    return urlset([root])


def retirement_sitemap(sitemap_xml, origin, lastmod):
    leaving = [e for e in url_entries(sitemap_xml) if not is_root(e, origin)]
    return urlset([with_lastmod(e, lastmod) for e in leaving]), len(leaving)


def robots_txt(origin):
    return f"User-agent: *\nAllow: /\n\nSitemap: {origin}/sitemap.xml\n"


PUBLIC = pathlib.Path(
    sys.argv[1] if len(sys.argv) > 1 else os.environ.get("OKF_PUBLIC")
    or pathlib.Path(__file__).resolve().parent.parent / "public"
)
ROOT_PAGE = PUBLIC / "index.html"
SITEMAP = PUBLIC / "sitemap.xml"
RETIREMENT_SITEMAP = PUBLIC / "sitemap-retirada.xml"

origin = site_origin(SITEMAP.read_text(encoding="utf-8"), FALLBACK_ORIGIN) if SITEMAP.exists() else FALLBACK_ORIGIN

marked = 0
for html_file in PUBLIC.rglob("*.html"):
    if html_file == ROOT_PAGE:
        continue
    updated = with_noindex(html_file.read_text(encoding="utf-8"))
    if updated is None:
        continue
    html_file.write_text(updated, encoding="utf-8")
    marked += 1

if ROOT_PAGE.exists():
    canonical = with_canonical(ROOT_PAGE.read_text(encoding="utf-8"), origin)
    if canonical is not None:
        ROOT_PAGE.write_text(canonical, encoding="utf-8")

retiring = 0
if SITEMAP.exists():
    published = SITEMAP.read_text(encoding="utf-8")
    retirement, retiring = retirement_sitemap(published, origin, NOINDEX_SINCE)
    if retiring:
        RETIREMENT_SITEMAP.write_text(retirement, encoding="utf-8")
    SITEMAP.write_text(root_only_sitemap(published, origin), encoding="utf-8")

(PUBLIC / "robots.txt").write_text(robots_txt(origin), encoding="utf-8")

print(
    f"[okf] noindex en {marked} páginas; raíz canónica en {origin}/; "
    f"{retiring} URLs en sitemap-retirada.xml con lastmod {NOINDEX_SINCE}",
    file=sys.stderr,
)
