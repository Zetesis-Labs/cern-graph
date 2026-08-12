---
title: "IT Department Strategy (The 4 Pillars)"
type: directorate
entorno: corporate
description: "Pillars of the CERN IT Department Strategy (Provider, Optimiser, Pioneer, Connector)."
---

# IT Department Strategy (The 4 Pillars)

Nested under the **Research and Computing (RCS)** sector within the [[reestructuracion-2026]], the IT Department is the operational arm of CERN's computing infrastructure.

Its internal governance is articulated through a set of **IT Governance boards and entities** — whose full listing the department maintains on Indico — tasked with ensuring that the technical platforms execute the guidelines set by the [[reestructuracion-2026|CIO]]. Since 2026 the department has been led by **Simone Campana**.

---

## 🏛️ The 4 Operational Pillars (2022-2025+)

1. **The Provider**:
   * Maintains the stability of standardized corporate services with reliable SLAs and environmental sustainability.
2. **The Optimiser**:
   * Consolidation and rationalization of catalogs to eliminate redundancies and decommission technical debt.
3. **The Pioneer**:
   * Research into heterogeneous computing models for the HL-LHC and the Future Circular Collider (FCC).
4. **The Connector**:
   * Promotion of open-source collaboration (*Open Science*) through initiatives such as CERN openlab and the [[inveniordm-zenodo]] platform.

---

# Topology

* **Runs**: [[cern-sso-keycloak]] — operates the corporate authentication service.
* **Runs**: [[gms-authorization-api]] — develops and maintains the authorization plane.
* **Runs**: [[wlcg-iam-oauth2]] — hosts the IAM instances of the LHC VOs.
* **Runs**: [[cis-v8-zero-trust]] — implements the controls derived from the audit.
* **Publishes**: [[inveniordm-zenodo]] — materializes the *Connector* pillar in open repositories.
