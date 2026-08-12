# OKF Graph Template: IT Governance and Identity Architecture (CERN)

This repository is a **sample template and starting point (starter kit)** for building interactive navigable websites with structured knowledge graphs using the [**`quartz-okf`**](https://github.com/Zetesis-Labs/quartz-okf) engine.

The use case in this example breaks down **CERN's IT Governance, Identity Architecture (Keycloak/OIDC), Security (CIS v8/Zero Trust) and the WLCG IAM Grid**, demonstrating how to organize a complex technical domain into a navigable graph.

---

## 📁 Repository Structure

```text
cern-it-governance-graph/
├── content/               # 📝 Your notes and documents in Markdown (the corpus)
│   ├── index.md           # Main page / Entry portal
│   ├── governance/        # Notes on committees and directorates
│   ├── it-department/     # Notes on the IT Department strategy
│   ├── identity/          # Notes on SSO, Keycloak, OIDC and GMS
│   ├── security/          # Notes on OC5, CIS v8 and Zero Trust
│   ├── grid/              # Notes on WLCG IAM and OAuth2 Tokens
│   └── open-science/      # Notes on InvenioRDM and Zenodo
├── okf.config.mjs         # ⚙️ Domain definition: node types, relationships and colors
├── quartz.config.yaml     # 🎨 Neutral configuration for the Quartz engine
├── quartz/styles/         # 💅 Custom SCSS styles (optional)
└── okf/
    ├── quartz-okf.ref     # 📌 Pinned commit SHA of the quartz-okf toolkit
    └── build-site.sh      # 🚀 Static website build script
```

---

## 🚀 Quick Start

### Prerequisites
* **Node.js ≥ 20**
* **Bash**, **curl** and **tar**

### 1. Preview / Build the Site

To generate the static site and the knowledge graph in `public/`:

```bash
chmod +x okf/build-site.sh
./okf/build-site.sh
```

The script will:
1. Automatically download the `quartz-okf` toolkit pinned by SHA (`okf/quartz-okf.ref`).
2. Validate the notes and the model's consistency.
3. Build the static site into the `public/` folder.

To serve it locally:
```bash
npx serve public
```

---

## 💡 How to adapt this template to your own project

1. **Replace or edit the notes in `content/`**:
   * Write your notes in Markdown format.
   * Add the node type in the header (YAML Frontmatter) (`type: your_type`):
     ```markdown
     ---
     title: "My Entity"
     type: service
     ---
     ```
   * Declare the **typed relationships** in a `# Topology` section, with the label in bold followed by a colon. That is the only format the engine converts into graph edges; a lone wikilink in the prose is just a link:
     ```markdown
     # Topology

     * **Governs**: [[destination-note]] — optional comment.
     ```
   * Labels must be one of those declared in `edgeLabels`. Inverse labels (`inverseLabels`) are derived by the engine on its own: they are not declared by hand.

2. **Customize the domain in `okf.config.mjs`**:
   * Define your own node types (`nodeTypes`), their colors for the graph viewer, and the typed relationships between them.

3. **Rebuild**:
   * Run `./okf/build-site.sh`.

---

## 🚀 Deployment

`.github/workflows/deploy.yaml` builds the site and publishes it to **Cloudflare Pages** on every push to `main`. It requires the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets in the repository.

---

## 📜 License

The sample content is published under the [MIT](LICENSE) license. The build engine uses [quartz-okf](https://github.com/Zetesis-Labs/quartz-okf) (MIT) and [Quartz](https://github.com/jackyzha0/quartz) (MIT).
