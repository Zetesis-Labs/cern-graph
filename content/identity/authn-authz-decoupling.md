---
title: "Authentication and authorization are separate engines"
type: concept
entorno: corporate
tags: [identity, architecture]
description: "The load-bearing idea of CERN's identity architecture."
---

# Authentication and authorization are separate engines

Keycloak authenticates; the [[authorization-service-api]] and [[gms]] authorize. The
coupling between them is thin enough that either side can be replaced without touching
the other — the design was chosen explicitly so that a future SSO migration would not
repeat the ADFS trap, where identity logic and vendor product had fused.

---

# Topology

* **Part of**: [[identity-architecture]]
* **About**: [[cern-sso]]
* **About**: [[authorization-service-api]]
* **Cites**: [[iam-journey-chep2020]] — the loosely-coupled architecture rationale.
