---
title: "Group Management System (GMS)"
type: service
entorno: corporate
status: current
tags: [identity]
aliases: [group-management-system]
description: "Dynamic group membership computed from HR data, replacing two decades of e-groups."
---

# Group Management System (GMS)

Groups at CERN are not lists, they are **queries**: dynamic groups evaluate criteria
against an ElasticSearch index fed from the HR database (criteria AND-combined,
sensitive ones access-controlled). GMS took over from e-groups as primary source in
Q4 2025; e-groups went read-only in Q2 2026 and is being decommissioned. Memberships
synchronise out to the SSO, the residual Active Directory and everything on the
Authorization Service API.

---

# Topology

* **Part of**: [[identity-architecture]]
* **Integrates**: [[authorization-service-api]] — groups are where roles bind.
* **Integrates**: [[cern-sso]] — memberships flow into login sessions.
* **Complies with**: [[oc5]] — the IAA rules govern who may read which memberships.
* **Supersedes**: [[egroups-legacy]] — took over as primary source of group information in Q4 2025.
* **Complies with**: [[oc11]] — memberships are personal data.
* **Catalogued in**: [[service-catalogue]]
* **Cites**: [[gms-docs]] — mechanics and migration timeline.
