---
title: "IT Governance and Identity Architecture (CERN)"
type: topic
entorno: cross-cutting
description: "An atomic, source-grounded knowledge graph on technology governance, cybersecurity and identity at CERN."
---

# IT Governance and Identity Architecture at CERN

A **zettelkasten-style knowledge graph** on how the European Organization for Nuclear Research governs its information technology: atomic notes — one idea each — densely linked with typed relationships, and every claim anchored to a **primary source** that lives in the graph as a first-class node.

> [!tip] Explore it as a graph
> Open the **<a href="/static/explorer" data-router-ignore>interactive graph</a>** and switch modes: the chain of authority, the identity stack, what is still in force, the compliance map — or *Primary sources*, which shows exactly which documents this corpus stands on.

---

## 🗺️ Map of content

Thirteen topic hubs organize the corpus. Enter through any of them:

**Who decides**

* [[governance-structure]] — from the **Council of 25 Member States** through the 2026–2030 five-sector structure to the first-ever **CIO** and the IT department.
* [[wlcg-governance]] — the grid's *own* constitution: the **MoU**, the Collaboration, Overview and Management Boards, and the Grid Deployment Board that wound up in 2024.
* [[resource-funding]] — how computing capacity is requested, scrutinised by the **CRSG**, decided by the **C-RRB** and budgeted through the **Medium-Term Plan**.

**What binds**

* [[security-governance]] — **OC5** and its subsidiary rules, the CSO and the Security Board, and the **CIS v8 audit** that ended implicit trust.
* [[data-privacy]] — **OC11** (revised February 2026), the Office of Data Privacy, the independent **Data Protection Commission** and the DPIA procedure.

**What is built**

* [[storage-and-data]] — **EOS**, the tape archive **CTA** (and the **CASTOR** it replaced), **CERNBox**, and the software and data movers: **CVMFS**, **FTS**, **Rucio**.
* [[compute-platforms]] — the **OpenStack** private cloud under 90% of the data centre, the **HTCondor** batch pool that replaced LSF, the **OpenShift** PaaS, **GitLab**, **SWAN** and the Linux estate that moved to **AlmaLinux**.
* [[networks]] — **LHCOPN** and **LHCONE** outward; inward the **campus** and **technical** networks, the **LanDB** registry every device must sit in, the perimeter firewall, and **White Rabbit**, the sub-nanosecond timing network that became an IEEE standard.
* [[identity-architecture]] — the **Keycloak SSO**, the C#/.NET Authorization Service, dynamic groups (**GMS**), OIDC integration and the token claims — plus the three decisions that shaped them.
* [[grid-federation]] — the **WLCG IAM**, VO-centred transitive trust, the Common JWT Profile, capability scopes, lifetime-based security and the **Sirtfi** and **AARC** trust frameworks.

* [[service-management]] — **ServiceNow** since 2011 for the *whole* organisation (lightbulbs included), the SE/FE catalogue with its A/B/C/X criticality, the Service Desk at 77777, the status boards — and **GGUS**, the grid's own helpdesk, bridged in.

**What is shared**

* [[open-science]] — the 2022 **Open Science Policy** and the Invenio family: InvenioRDM, Zenodo, and the CDS migration.
* [[open-collaboration]] — **MALT** and its outcomes and migration plans (**Mattermost**, the planned **Kopano** mail migration, **CERNphone** with its own SIP backend), plus **CERN openlab**, **SCOAP3**, the **CERN Open Hardware Licence** and the **Quantum Technology Initiative**.

## 📚 Primary sources

Verified factual notes declare `Cites` edges to the documents that anchor them:
CERN official announcements, Council documents, WLCG terms of reference, service
documentation, standards and peer-reviewed papers — **118 sources** under
`sources/`, each with its URL and the specific claims it supports. Notes tagged
`needs-primary-source` are retained as research leads and display an explicit
warning; their unverified details must not be read as established facts.

## 🧩 How this corpus is built

Each note is atomic (one idea), typed (19 node types), and linked through a closed set of 20 relationship labels declared under a `# Topology` heading. Nodes carry a **lifecycle status**, so retired arrangements — ADFS, e-groups, the Grid Deployment Board, the v1.0 token lifetimes — stay in the graph as history rather than being silently presented as current. The graph you explore is generated from those declarations, never from incidental prose links. This repository doubles as the **reference template** for [quartz-okf](https://github.com/Zetesis-Labs/quartz-okf).

---

[![Zetesis — systems architecture, AI and complex problem solving](/static/zetesis-wordmark.svg)](https://zetesis.xyz)

*A project by [Zetesis](https://zetesis.xyz) — systems architecture, AI and complex problem solving in production.*
