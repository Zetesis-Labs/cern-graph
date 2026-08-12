---
title: "File Transfer Service (FTS)"
type: technology
entorno: scientific-grid
status: current
tags: [storage, grid]
description: "The service that moves petabytes a month between grid sites."
---

# File Transfer Service (FTS)

Reliable file transfer across sites, including third-party transfers, with queuing,
scheduling, checksums and retries. Developed at CERN, it distributes the **majority of
LHC data** across the WLCG — up to petabytes per month. It is the piece that turns
"170 data centres" into something data can actually flow through.

---

# Topology

* **Part of**: [[storage-and-data]]
* **Reached via**: [[lhcopn]] — the dedicated network its Tier-0/Tier-1 traffic rides.
* **Cites**: [[fts-service]] — function and scale.
