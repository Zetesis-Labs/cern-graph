#!/usr/bin/env bash
# Construye el sitio estático y el grafo de conocimiento con quartz-okf.
# Requiere Node 22 o superior.
set -euo pipefail

OKF_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(dirname "$OKF_DIR")"

# Asegurar Node 22+
if ! node -e 'process.exit(+process.versions.node.split(".")[0] >= 22 ? 0 : 1)' 2>/dev/null; then
  NVM_BIN="$(ls -d "$HOME/.nvm/versions/node"/v2[2-9]*/bin 2>/dev/null | sort -V | tail -1)"
  [ -n "$NVM_BIN" ] && PATH="$NVM_BIN:$PATH"
fi

TOOLKIT_REF="$(cat "$OKF_DIR/quartz-okf.ref")"
CACHE_ROOT="${XDG_CACHE_HOME:-$HOME/.cache}/cern-it-governance-okf"
TOOLKIT="$CACHE_ROOT/toolkit-${TOOLKIT_REF}"

export npm_config_cache="$CACHE_ROOT/npm-cache"

# 1. Toolkit fijado por SHA
if [ ! -f "$TOOLKIT/package.json" ]; then
  echo "[okf] descargando toolkit quartz-okf (${TOOLKIT_REF:0:7})..."
  mkdir -p "$TOOLKIT"
  curl -fsSL "https://github.com/Zetesis-Labs/quartz-okf/archive/${TOOLKIT_REF}.tar.gz" |
    tar xz --strip-components=1 -C "$TOOLKIT"
fi

QUARTZ_REF="$(cat "$TOOLKIT/harness/quartz.ref")"
CACHE="$CACHE_ROOT/quartz-${QUARTZ_REF}"

# 2. Base de Quartz fijada por el toolkit
if [ ! -f "$CACHE/package.json" ]; then
  echo "[okf] descargando motor Quartz (${QUARTZ_REF:0:7})..."
  mkdir -p "$CACHE"
  curl -fsSL "https://github.com/jackyzha0/quartz/archive/${QUARTZ_REF}.tar.gz" |
    tar xz --strip-components=1 -C "$CACHE"
fi
if [ ! -d "$CACHE/node_modules" ]; then
  (cd "$CACHE" && npm ci --silent)
fi

# 3. Copiar configuración, plugins y el quartz.ts propio (que inyecta okf.config.mjs)
cp "$REPO_ROOT/quartz.config.yaml" "$REPO_ROOT/okf.config.mjs" "$OKF_DIR/quartz.ts" "$CACHE/"
cp "$TOOLKIT/harness/quartz.lock.json" "$CACHE/"

rm -rf "$CACHE/lib" "$CACHE/quartz-okf" "$CACHE/quartz-okf-explorer" "$CACHE/quartz-okf-panels"
cp -R "$TOOLKIT/core/lib" "$CACHE/lib"
cp "$TOOLKIT/core/profile.js" "$CACHE/profile.js"
cp -R "$TOOLKIT/plugins/quartz-okf" "$CACHE/quartz-okf"
cp -R "$TOOLKIT/plugins/quartz-okf-explorer" "$CACHE/quartz-okf-explorer"
cp -R "$TOOLKIT/plugins/quartz-okf-panels" "$CACHE/quartz-okf-panels"

# 4. Copiar corpus (content) y estilos
rm -rf "$CACHE/content"
cp -R "$REPO_ROOT/content" "$CACHE/content"

mkdir -p "$CACHE/quartz/styles"
if [ -f "$REPO_ROOT/quartz/styles/custom.scss" ]; then
  cp "$REPO_ROOT/quartz/styles/custom.scss" "$CACHE/quartz/styles/custom.scss"
fi

# El explorador carga D3 desde /static y no lo trae el toolkit: sin esta copia el
# lienzo del grafo queda en blanco con un "d3 is not defined" en consola.
mkdir -p "$CACHE/quartz/static"
cp -R "$REPO_ROOT/quartz/static/." "$CACHE/quartz/static/" 2>/dev/null || true

# 5. Compilar sitio web estático
rm -rf "$CACHE/.quartz/plugins/quartz-okf" "$CACHE/.quartz/plugins/quartz-okf-explorer" "$CACHE/.quartz/plugins/quartz-okf-panels"
# La caché de transpilación no invalida al parchear las fuentes de los plugins.
rm -rf "$CACHE/.quartz-cache"
rm -rf "$CACHE/.quartz-cache"

(cd "$CACHE" && npx quartz plugin install --from-config --concurrency 2 && npx quartz build --concurrency 1)

# 6. Salida a public/
rm -rf "$REPO_ROOT/public"
cp -R "$CACHE/public" "$REPO_ROOT/public"
echo "✅ [okf] Sitio de grafo construido con éxito en $REPO_ROOT/public"
