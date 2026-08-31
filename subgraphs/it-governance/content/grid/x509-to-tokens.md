---
title: "Decision: from X.509 proxies to tokens"
type: decision
entorno: scientific-grid
tags: [grid, decision]
description: "Why the grid abandoned certificate proxies and VOMS for OAuth2."
---

# Decision: from X.509 proxies to tokens

X.509 proxies were user-hostile, invisible to browsers, alien to cloud-native
tooling — and authorization was all-or-nothing: holding a proxy granted broad rights
across entire clusters. The WLCG AuthZ working group chose OAuth2/OIDC with INDIGO IAM
as issuer, trading a global PKI for signed, short-lived, capability-scoped tokens.

---

# Topology

* **Part of**: [[grid-federation]]
* **About**: [[wlcg-iam]]
* **Cites**: [[x509-to-tokens-paper]] — the motivation and the selection.
