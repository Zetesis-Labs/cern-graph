---
title: "CVMFS"
type: technology
entorno: scientific-grid
status: current
tags: [storage, grid]
aliases: [cernvm-file-system]
description: "How you install the same software on 170 data centres you do not control."
---

# CVMFS

The CernVM File System solves the mirror image of the data problem: not moving data to
the software, but software to the compute. A POSIX **read-only filesystem in user
space** (FUSE), with content on ordinary web servers, mounted under `/cvmfs`, fetched
on demand and verified with cryptographic hashes. The design decision that makes it
deployable anywhere: **outgoing HTTP connections only**, so it walks through the
firewalls that stop every other network filesystem.

---

# Topology

* **Part of**: [[storage-and-data]]
* **Cites**: [[afs-phaseout-paper]] — it absorbed AFS's software-distribution role.
* **Cites**: [[cvmfs-site]] — architecture and the HTTP-only design.
