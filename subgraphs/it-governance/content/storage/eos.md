---
title: "EOS"
type: datastore
entorno: cross-cutting
status: current
tags: [storage]
description: "The exabyte-scale disk layer, built at CERN and deployed far beyond it."
---

# EOS

CERN's open-source disk storage system and the floor under almost everything else.
Built on the **XRootD** framework for remote access, with a namespace held as an
in-memory cache backed by **QuarkDB** — a redesign that removed the old ceiling, where
the metadata service could hold no more than fitted in one machine's RAM. Reachable
through FUSE, HTTPS/WebDAV, XRootD, gRPC, S3 and SMB, and running on commodity
hardware with disks in JBOD.

---

# Topology

* **Part of**: [[storage-and-data]]
* **Supersedes**: [[afs]]
* **Uses**: [[xrootd]] — its remote access protocol.
* **Cites**: [[afs-phaseout-paper]] — it absorbed AFS's live-data role.
* **Cites**: [[eos-docs]] — architecture and access methods.
* **Cites**: [[eos-run3-storage]] — the capacity behind Run 3.
