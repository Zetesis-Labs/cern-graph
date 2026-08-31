---
title: "Decision: strip the customisations, externalise the cache"
type: decision
entorno: corporate
tags: [identity, decision]
description: "How stress testing turned a slow Keycloak 15 into a lean Keycloak 19/20 on Kubernetes."
---

# Decision: strip the customisations, externalise the cache

Stress tests at **50 authentications per second over 10-minute windows** exposed the
cost of history: the custom code layered onto Keycloak 15 introduced severe latencies.
The fix was subtraction — remove the customisations (rework 2FA), externalise the
session cache, move from CentOS VMs to Kubernetes (Q3 2023). Keycloak 19/20 then cut
memory and network consumption drastically. The lesson the note preserves: the
slowness was self-inflicted.

---

# Topology

* **Part of**: [[identity-architecture]]
* **About**: [[cern-sso]]
* **Depends on**: [[decision-leave-adfs]] — custom code is what killed ADFS too; this time it was removed instead of accumulated.
* **Cites**: [[why-keycloak]] — test figures and remediation steps.
