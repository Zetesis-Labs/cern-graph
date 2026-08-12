# Plantilla de Grafo OKF: Gobernanza de TI y Arquitectura de Identidad (CERN)

Este repositorio es una **plantilla de ejemplo y punto de partida (starter kit)** para construir sitios web navegables interactivos con grafos de conocimiento estructurados utilizando el motor [**`quartz-okf`**](https://github.com/Zetesis-Labs/quartz-okf).

El caso de uso de este ejemplo desglosa la **Gobernanza de TI, Arquitectura de Identidad (Keycloak/OIDC), Seguridad (CIS v8/Zero Trust) y el WLCG IAM Grid del CERN**, demostrando cómo organizar un dominio técnico complejo en un grafo navegable.

---

## 📁 Estructura del Repositorio

```text
cern-it-governance-graph/
├── content/               # 📝 Tus notas y documentos en Markdown (el corpus)
│   ├── index.md           # Página principal / Portal de entrada
│   ├── gobierno/          # Notas sobre comités y direcciones
│   ├── identidad/         # Notas sobre SSO, Keycloak, OIDC y GMS
│   ├── seguridad/         # Notas sobre OC5, CIS v8 y Zero Trust
│   ├── grid/              # Notas sobre WLCG IAM y OAuth2 Tokens
│   └── ciencia-abierta/   # Notas sobre InvenioRDM y Zenodo
├── okf.config.mjs         # ⚙️ Definición del dominio: tipos de nodos, relaciones y cromo
├── quartz.config.yaml     # 🎨 Configuración neutra del motor Quartz
├── quartz/styles/         # 💅 Estilos SCSS propios (opcional)
└── okf/
    ├── quartz-okf.ref     # 📌 Commit SHA fijado del toolkit quartz-okf
    └── build-site.sh      # 🚀 Script de compilación del sitio web estático
```

---

## 🚀 Inicio Rápido

### Requisitos Previos
* **Node.js ≥ 20**
* **Bash**, **curl** y **tar**

### 1. Previsualizar / Compilar el Sitio

Para generar el sitio estático y el grafo de conocimiento en `public/`:

```bash
chmod +x okf/build-site.sh
./okf/build-site.sh
```

El script:
1. Descargará automáticamente el toolkit `quartz-okf` fijado por SHA (`okf/quartz-okf.ref`).
2. Validará las notas y la coherencia del modelo.
3. Compilará el sitio estático en la carpeta `public/`.

Para servirlo localmente:
```bash
npx serve public
```

---

## 💡 Cómo adaptar esta plantilla a tu propio proyecto

1. **Reemplaza o edita las notas en `content/`**:
   * Escribe tus notas en formato Markdown.
   * Añade en el encabezado (YAML Frontmatter) el tipo de nodo (`type: tu_tipo`):
     ```markdown
     ---
     title: "Mi Entidad"
     type: servicio
     ---
     ```
   * Declara las **relaciones tipadas** en una sección `# Topology`, con la etiqueta en negrita seguida de dos puntos. Ese es el único formato que el motor convierte en aristas del grafo; un wikilink suelto en la prosa es solo un enlace:
     ```markdown
     # Topology

     * **Gobierna**: [[nota-destino]] — comentario opcional.
     ```
   * Las etiquetas deben ser una de las declaradas en `edgeLabels`. Las inversas (`inverseLabels`) las deriva el motor solo: no se declaran a mano.

2. **Personaliza el dominio en `okf.config.mjs`**:
   * Define tus propios tipos de nodos (`nodeTypes`), sus colores para el visor de grafos y las relaciones tipadas entre ellos.

3. **Compila de nuevo**:
   * Ejecuta `./okf/build-site.sh`.

---

## 🚀 Despliegue

`.github/workflows/deploy.yaml` compila el sitio y lo publica en **Cloudflare Pages** en cada push a `main`. Requiere los secrets `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` en el repositorio.

---

## 📜 Licencia

El contenido de ejemplo se publica bajo licencia [MIT](LICENSE). El motor de construcción utiliza [quartz-okf](https://github.com/Zetesis-Labs/quartz-okf) (MIT) y [Quartz](https://github.com/jackyzha0/quartz) (MIT).
