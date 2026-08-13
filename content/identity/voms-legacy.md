---
title: "VOMS Legacy"
type: service
entorno: scientific-grid
status: current
description: "Legacy X.509-based VO attribute authority retained during the token transition."
---

# VOMS Legacy

The Virtual Organization Membership Service (VOMS) provides X.509 attribute
assertions for VO roles and groups. WLCG is moving towards token-based authorization,
but CERN's current IAM FAQ says VOMS proxies are still provided while needed; VOMS
is therefore modelled as legacy but not yet superseded.

---

# Topology

* **Part of**: [[grid-federation]]
* **Cites**: [[x509-to-tokens-paper]]
* **Cites**: [[wlcg-jwt-profile]]
* **Cites**: [[cern-iam-services-faq]]
