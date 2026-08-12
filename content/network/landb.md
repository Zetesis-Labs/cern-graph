---
title: "LanDB"
type: service
entorno: corporate
status: current
tags: [network]
description: "Every device on the network is registered — and that database is the control point."
---

# LanDB

The central networking database. **Every device connected to the CERN network must be
registered in LanDB**: it is not an inventory kept for tidiness, it is the authority
that addressing, DNS and firewall rules are derived from. Its **sets** group hosts so
that a firewall opening can be granted to a service rather than to a list of addresses
that rots. Registration is what makes it possible to hold ~200,000 devices accountable.

---

# Topology

* **Part of**: [[networks]]
* **Governs**: [[cern-firewall-service]] — openings are granted against LanDB entries.
* **Cites**: [[landb-docs]] — registration and sets.
* **Cites**: [[it-communication-systems]] — LanDB and the network portal.
