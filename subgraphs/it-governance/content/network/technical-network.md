---
title: "The technical network"
type: network
entorno: corporate
status: current
tags: [network, security]
description: "The network that controls the accelerators, and why it cannot reach the internet."
---

# The technical network

A **dedicated network supporting accelerator operations**, separate from the campus,
with the experiments' control networks alongside it. Its isolation is the constraint
that shapes decisions far from it: a control system that cannot reach the public
internet cannot authenticate against a cloud identity provider — which is precisely
why [[decision-onprem-sso]] went the way it did.

---

# Topology

* **Part of**: [[networks]]
* **Uses**: [[ipv6]] — dual-stack addressing.
* **Integrates**: [[white-rabbit]]
* **About**: [[decision-onprem-sso]] — its isolation is the premise of that decision.
* **Cites**: [[it-communication-systems]] — the dedicated technical network.
* **Cites**: [[security-audited-for-the-better]] — the segregation review.
