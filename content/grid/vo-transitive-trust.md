---
title: "VO-centred transitive trust"
type: concept
entorno: scientific-grid
tags: [grid, architecture]
description: "A data centre in Tokyo never checks who you are — it checks who signed your token."
---

# VO-centred transitive trust

The scaling trick of the federation: the researcher authenticates against their
**Virtual Organization's** IAM, the VO acts as authorization server and signs a JWT,
and every relying party on the planet validates the signature and trusts the VO's
assertions. No global identity database, no central choke point — trust flows
transitively through the VO.

---

# Topology

* **Part of**: [[grid-federation]]
* **About**: [[wlcg-iam]]
* **Depends on**: [[wlcg-token-profile]] — the shared semantics that make blind trust safe.
* **Cites**: [[x509-to-tokens-paper]] — the federation model.
* **Cites**: [[wlcg-jwt-profile]] — issuer and audience mechanics.
