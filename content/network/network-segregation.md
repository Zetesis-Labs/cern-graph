---
title: "Network segregation"
type: concept
entorno: corporate
tags: [network, security]
description: "The accelerator's network is not the campus network, and neither is the data centre's."
---

# Network segregation

CERN runs distinct network zones — the **technical network** that controls the
accelerators, the **campus network** where people work, and the **data centre**
networks — and the segregation between them was one of the areas the
[[cis-v8-audit]] put under review. It is also the constraint that shaped
[[decision-onprem-sso]]: a system that cannot be reached from an isolated network is a
system the accelerator cannot authenticate against.

---

# Topology

* **Part of**: [[networks]]
* **About**: [[decision-onprem-sso]]
* **Cites**: [[security-audited-for-the-better]] — the segregation review.
