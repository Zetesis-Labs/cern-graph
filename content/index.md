---
title: "IT Governance and Identity Architecture (CERN)"
type: portal
description: "An atomic, source-grounded knowledge graph on technology governance, cybersecurity and identity at CERN."
---

# IT Governance and Identity Architecture at CERN

A **zettelkasten-style knowledge graph** on how the European Organization for Nuclear Research governs its information technology: atomic notes — one idea each — densely linked with typed relationships, and every claim anchored to a **primary source** that lives in the graph as a first-class node.

> [!tip] Explore it as a graph
> Open the **[interactive graph](/static/explorer)** and switch modes: the full topology, the identity stack, the compliance map, the note structure — or the *Primary sources* view, which shows exactly which documents this corpus stands on.

---

## 🗺️ Map of content

Five topic hubs organize the corpus. Enter through any of them:

* [[governance-structure]] — from the **Council of 25 Member States** through the 2026–2030 five-sector structure to the first-ever **CIO** and the IT department.
* [[identity-architecture]] — the **Keycloak SSO**, the C#/.NET **Authorization Service**, dynamic groups (**GMS**), OIDC integration and the token claims — plus the three decisions that shaped them.
* [[security-governance]] — **OC5** and its subsidiary rules, the CSO and the Security Board, and the **CIS v8 audit** that ended implicit trust.
* [[grid-federation]] — the **WLCG IAM**, VO-centred transitive trust, the Common JWT Profile, capability scopes and lifetime-based security.
* [[open-science]] — the 2022 **Open Science Policy** and the Invenio family: InvenioRDM, Zenodo, and the CDS migration.

## 📚 Primary sources

Every factual note declares `Cites` edges to the documents that anchor it: CERN official announcements, Council documents, service documentation, standards and peer-reviewed papers — **26 sources** under `sources/`, each with its URL and the specific claims it supports.

## 🧩 How this corpus is built

Each note is atomic (one idea), typed (11 node types), and linked through a closed set of 12 relationship labels declared under a `# Topology` heading. The graph you can explore is generated from those declarations — never from incidental prose links. This repository doubles as the **reference template** for [quartz-okf](https://github.com/Zetesis-Labs/quartz-okf).
