---
title: "WLCG token profile v1.0 (2019)"
type: standard
entorno: scientific-grid
status: superseded
tags: [grid, standard]
description: "The first profile — and the lifetimes that still circulate wrongly."
---

# WLCG token profile v1.0 (2019)

Published 25 September 2019, it fixed the claims and the capability model the grid
still uses. Its **lifetime table** — access tokens 20 minutes, refresh tokens 10 days —
is the part that aged: superseded by [[wlcg-token-profile]] v1.3, which raised them to
1 hour and 30 days after operational experience showed the originals too costly for
critical workflows. The old numbers survive in slide decks and summaries.

---

# Topology

* **Part of**: [[grid-federation]]
* **Cites**: [[wlcg-jwt-profile-v1]] — the original lifetime table.
* **Cites**: [[wlcg-jwt-profile]] — the current profile's account of why it changed.
