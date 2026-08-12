---
title: "Group Management System (GMS) and Authorization Service API"
type: service
entorno: corporate
description: "Decoupled authorization control plane and dynamic group computation at CERN."
---

# Group Management System (GMS) and Authorization Service API

To avoid the rigidity and tight coupling of the past, CERN's identity architecture separates **authentication** (handled by [[cern-sso-keycloak]]) from **authorization** (handled by GMS and the Authorization Service API).

---

## 🏗️ The Two Pillars of Authorization

### 1. Authorization Service API
* Developed in **C# / .NET Core** as a RESTful microservice.
* Acts as a control plane for registering applications, defining roles, and associating permissions.
* **Key advantage**: If the SSO engine is ever replaced in the future, the authorization business logic remains intact.

### 2. Group Management System (GMS)
* Replaces the legacy *Egroups* system, which became read-only in Q2 2026 and is being retired over the course of the year. Existing groups were migrated automatically between July and September 2025, and since Q4 2025 GMS has been the primary source of group information.
* It is the **authoritative source** for memberships and computing groups (*Computing Groups*), both for access control and for mailing lists.
* **Dynamic Membership**: instead of static lists, dynamic groups are computed from criteria evaluated against an ElasticSearch index fed from the Human Resources database. Criteria are combined with AND, and access to sensitive ones (for example, age) is restricted.
* Synchronizes to the SSO, the residual Active Directory, and the systems that depend on the Authorization Service API.

---

# Topology

* **Authorizes**: [[oidc-jwt-cern]] — its roles are the ones carried in `resource_access`.
* **Integrates**: [[cern-sso-keycloak]] — synchronizes memberships to the SSO and the residual AD.
* **Complies with**: [[oc5-constitucion-digital]] — the IAA rules govern who can read which memberships.
