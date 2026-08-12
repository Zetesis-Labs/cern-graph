---
title: "The perimeter firewall"
type: service
entorno: corporate
status: current
tags: [network, security]
description: "Default-closed at the border, with openings tied to registered devices."
---

# The perimeter firewall

The filter between CERN and the internet: closed by default, with openings requested
per registered device or LanDB set. The [[soc]] watches what passes through it, and
the [[cis-v8-audit]] pushed for both finer denial-of-service protection and a more
capable replacement able to inspect far higher traffic volumes.

---

# Topology

* **Part of**: [[networks]]
* **Complies with**: [[cis-v8-audit]]
* **Cites**: [[cern-firewall]] — the service description.
* **Cites**: [[security-audited-for-the-better]] — the planned upgrades.
