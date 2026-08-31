---
title: "Token lifetimes instead of revocation"
type: concept
entorno: scientific-grid
tags: [grid, standard]
description: "Short expiry is the grid's security model; the v1.0 numbers still haunt the slide decks."
---

# Token lifetimes instead of revocation

There is no distributed revocation — expiry does that job. Current profile (v1.3):
access/ID tokens **1 hour** (15 min–6 h), refresh tokens **30 days** (1–400 days,
revocable server-side in the IAM database), issuer key cache refresh 6 h, cache
expiration 2 days, issuer keys 6 months. The original v1.0 (2019) said **20 minutes /
10 days** — values still widely quoted, several revisions out of date: the profile
itself notes the old limits proved too costly for critical workflows.

---

# Topology

* **Part of**: [[grid-federation]]
* **About**: [[wlcg-token-profile]]
* **Cites**: [[wlcg-jwt-profile]] — the v1.3 lifetime table.
* **Cites**: [[wlcg-jwt-profile-v1]] — the superseded v1.0 values.
