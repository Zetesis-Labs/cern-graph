---
title: "Grid federation (WLCG)"
type: topic
entorno: scientific-grid
tags: [grid, wlcg]
description: "Hub: distributed authorization for the LHC computing grid."
---

# Grid federation (WLCG)

The scientific side cannot be centralized: hundreds of institutions share compute and
storage. [[wlcg-iam]] issues tokens under the [[wlcg-token-profile]], on the model of
[[vo-transitive-trust]], with permissions expressed as [[capability-scopes]] and safety
resting on [[token-lifetimes]] instead of revocation. How it got here: [[x509-to-tokens]].
