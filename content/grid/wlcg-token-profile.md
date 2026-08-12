---
title: "The WLCG Common JWT Profile"
type: standard
entorno: scientific-grid
tags: [grid, standard]
description: "The token contract every issuer and relying party in the grid implements — v1.3."
---

# The WLCG Common JWT Profile

The interoperability contract, currently **v1.3 (17 June 2026)**. Every token declares
`wlcg.ver`; the universal audience is `https://wlcg.cern.ch/jwt/v1/any`; and VOMS
lineage survives in `wlcg.groups`, an ordered JSON array of UNIX-path group names like
`["/atlas", "/atlas/pilots"]`. Heterogeneous storage and batch systems interoperate
because they all parse the same claims the same way.

---

# Topology

* **Part of**: [[grid-federation]]
* **Governs**: [[wlcg-iam]] — issuers implement the profile.
* **Cites**: [[wlcg-jwt-profile]] — the current specification.
