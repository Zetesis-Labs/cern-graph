---
title: "IT Governance and Identity Architecture (CERN)"
type: portal
description: "Structured knowledge graph on technology governance, cybersecurity, and identity at CERN."
---

# IT Governance and Identity Architecture at CERN

Welcome to the knowledge graph on the Information Technology architecture of the **European Organization for Nuclear Research (CERN)**.

This knowledge base breaks down how an intergovernmental institution manages executive governance, the transition to **Identity and Access architectures (Keycloak / OpenID Connect)**, **cybersecurity frameworks (CIS v8 / Zero Trust)**, and the distributed federation of the **Worldwide LHC Computing Grid (WLCG IAM)**.

> [!tip] Explore it as a graph
> Every note declares typed relationships. Open the **[interactive graph](/static/explorer)** to navigate them: seven node types and seven relationship kinds, filterable by view — full, identity and access, or governance and security.

---

## 🗺️ Domain Map

### 🏛️ Corporate Governance and Executive Leadership
* [[consejo-cern]]: The supreme governing body, the audit committee (SACA), and evaluation committees.
* [[reestructuracion-2026]]: The 2026-2030 executive restructuring and the institutionalization of the **CIO** role.
* [[estrategia-it]]: The 4 operational pillars of the IT Department (*Provider, Optimiser, Pioneer, Connector*).

### 🔑 Identity, Authentication and Authorization (IAA)
* [[cern-sso-keycloak]]: The migration of traditional SSO from ADFS to **Keycloak** on-premises on Kubernetes.
* [[oidc-jwt-cern]]: **OpenID Connect (OIDC)** protocol and claims specification in JWT tokens (`cern_upn`, `resource_access`).
* [[gms-authorization-api]]: The decoupling of authorization with **Group Management System (GMS)** and **Authorization Service API**.

### 🛡️ Cybersecurity and Regulations
* [[oc5-constitucion-digital]]: **Operational Circular No. 5 (OC5)** and the **Computer Security Officer (CSO)**.
* [[cis-v8-zero-trust]]: **CIS v8** audit, **Zero Trust** model, SAST/DAST pipelines, SBOM, and WAF.

### 🌐 Distributed Computing and Open Science
* [[wlcg-iam-oauth2]]: **WLCG IAM** service, capability-based authorization (*scopes*), and short-lived JWT tokens.
* [[inveniordm-zenodo]]: Open Science policy, the **InvenioRDM** platform, and the global **Zenodo** repository.
