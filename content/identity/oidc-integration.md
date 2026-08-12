---
title: "OIDC integration at CERN"
type: protocol
entorno: cross-cutting
tags: [identity, protocol]
description: "One discovery endpoint, standard flows: how any application plugs into the SSO."
---

# OIDC integration at CERN

Integration is deliberately boring: consume the realm's discovery document at
`https://auth.cern.ch/auth/realms/cern/.well-known/openid-configuration` — note it
hangs off the **realm**, not the domain root, which 404s — and follow standard
OAuth2/OIDC flows. The same protocol substrate carries the scientific federation.

---

# Topology

* **Part of**: [[identity-architecture]]
* **Integrates**: [[wlcg-iam]] — the grid speaks the same protocol.
* **Cites**: [[oidc-config-docs]] — endpoints and configuration.
