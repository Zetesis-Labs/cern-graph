---
title: "The CERN token claims"
type: concept
entorno: corporate
tags: [identity, protocol]
description: "What a CERN JWT actually says: cern_upn, resource_access, and what not to trust."
---

# The CERN token claims

The semantics, straight from the service docs: **`cern_upn`** is unique (unique, not
documented as immutable); **`sub`** duplicates it for generic OIDC clients;
**`preferred_username`** is display-only and must never be used as an identifier;
**`resource_access`** is an object keyed by application carrying the roles — scoped to
the requesting `client_id` — and **`cern_roles`** is its flat duplicate.

---

# Topology

* **Part of**: [[identity-architecture]]
* **About**: [[oidc-integration]]
* **Cites**: [[oidc-config-docs]] — the claims table.
