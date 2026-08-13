#!/usr/bin/env python3
"""Inserta el badge del logo del CERN al final del menú lateral izquierdo.

Se ejecuta como paso post-build (ver okf/build-site.sh): recorre los HTML
generados en public/ y añade el enlace justo antes de que cierre
`<div class="left sidebar">`, es decir, antes de `</div><div class="center"`.
"""
import pathlib
import sys

PUBLIC = pathlib.Path(__file__).resolve().parent.parent / "public"
MARKER = '</div><div class="center"'
BADGE = (
    '<a class="cern-badge" href="https://home.cern" target="_blank" '
    'rel="noopener" title="CERN"><img src="/static/cern-logo.png" '
    'alt="CERN logo"/></a>'
)

count = 0
for html_file in PUBLIC.rglob("*.html"):
    text = html_file.read_text(encoding="utf-8")
    if MARKER not in text or "cern-badge" in text:
        continue
    text = text.replace(MARKER, BADGE + MARKER, 1)
    html_file.write_text(text, encoding="utf-8")
    count += 1

print(f"[okf] badge CERN insertado en {count} páginas", file=sys.stderr)
