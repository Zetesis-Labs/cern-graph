---
title: "SWAN"
type: service
entorno: cross-cutting
status: current
tags: [compute, analysis]
description: "A notebook in the browser wired into every layer underneath."
---

# SWAN

Interactive analysis on Jupyter notebooks, and a good map of the whole stack in one
service: **[[cernbox]] is your home directory**, **[[cvmfs]] delivers the software
environments**, and when the laptop-sized problem stops fitting, the same notebook
scales out to Spark or to the [[batch-service]] through Dask. It also reaches
[[rucio]] to browse distributed datasets.

---

# Topology

* **Part of**: [[compute-platforms]]
* **Uses**: [[cernbox]] — notebook home directories.
* **Uses**: [[cvmfs]] — software environments.
* **Uses**: [[batch-service]] — scale-out through Dask/HTCondor.
* **Uses**: [[rucio]] — dataset discovery.
* **Cites**: [[swan-docs]] — the integrations.
