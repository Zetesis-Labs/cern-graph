#!/usr/bin/env python3
"""Deja indexable solo la raíz del sitio: el resto del grafo sale del índice.

Se ejecuta como hook del seam `postBuild` de `okf build`: marca cada página con
`noindex`, reduce el sitemap a la raíz y publica un robots.txt.

El rastreo se deja abierto a propósito. Un `Disallow` en robots.txt no
desindexa: impide entrar, y con ello impide leer la propia etiqueta que ordena
salir del índice.

La raíz lleva canonical porque el sitio responde también en su dominio de
Cloudflare Pages, y esa copia sería un duplicado de la única página indexable.
"""
import os
import pathlib
import re
import sys

ROBOTS_META = '<meta name="robots" content="noindex, follow"/>'
FALLBACK_ORIGIN = "https://cern.zetesis.xyz"


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


def root_only_sitemap(sitemap_xml, origin):
    root_loc = f"<loc>{origin}/</loc>"
    entries = re.findall(r"<url>.*?</url>", sitemap_xml, re.DOTALL)
    root = next((e for e in entries if root_loc in e), f"<url>{root_loc}</url>")
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{root}\n</urlset>\n"
    )


def robots_txt(origin):
    return f"User-agent: *\nAllow: /\n\nSitemap: {origin}/sitemap.xml\n"


PUBLIC = pathlib.Path(
    sys.argv[1] if len(sys.argv) > 1 else os.environ.get("OKF_PUBLIC")
    or pathlib.Path(__file__).resolve().parent.parent / "public"
)
ROOT_PAGE = PUBLIC / "index.html"
SITEMAP = PUBLIC / "sitemap.xml"

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

if SITEMAP.exists():
    SITEMAP.write_text(root_only_sitemap(SITEMAP.read_text(encoding="utf-8"), origin), encoding="utf-8")

(PUBLIC / "robots.txt").write_text(robots_txt(origin), encoding="utf-8")

print(f"[okf] noindex en {marked} páginas; raíz canónica en {origin}/", file=sys.stderr)
