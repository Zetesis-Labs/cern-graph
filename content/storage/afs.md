---
title: "AFS"
type: datastore
entorno: corporate
status: superseded
tags: [storage]
description: "The distributed filesystem whose phase-out targeted completion before Run 3."
---

# AFS

For decades AFS was where CERN's home directories and shared software lived. Its
phase-out was restarted in **January 2019** with the goal of stopping the service before
LHC Run 3, and the interesting part is how it was dismantled: use cases were **split
rather than replaced**. Live data went to [[eos]], which already had a filesystem
interface; shared software went to [[cvmfs]], already adopted by the experiments. No
single successor, because no single system should have been doing both jobs.

---

# Topology

* **Part of**: [[storage-and-data]]
* **Cites**: [[afs-phaseout-paper]] — the phase-out and where each use case went.
