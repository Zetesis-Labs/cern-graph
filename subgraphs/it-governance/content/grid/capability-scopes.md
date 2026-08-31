---
title: "Capability-based authorization"
type: concept
entorno: scientific-grid
tags: [grid, authorization]
description: "The token carries what you may do, not who you are — and unauthorized scopes vanish silently."
---

# Capability-based authorization

Permissions are **scopes**, not identities: `storage.read`, `storage.create`,
`storage.modify`, `compute.create`, `compute.cancel`… each token carries the maximum
it allows, following least privilege. IAM policy gates them by group — storage scopes
for `wlcg/xfers`, compute scopes for `wlcg/pilots` — and a request for a scope you
are not entitled to does not fail: the server silently issues the token without it.

---

# Topology

* **Part of**: [[grid-federation]]
* **About**: [[wlcg-token-profile]]
* **Cites**: [[wlcg-jwt-profile]] — the scope definitions.
* **Cites**: [[osg-requesting-tokens]] — the group-gating policy in practice.
* **Cites**: [[openid-connect-core]] — the standard underlying capability-based scopes.
