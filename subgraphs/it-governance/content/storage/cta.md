---
title: "CERN Tape Archive (CTA)"
type: datastore
entorno: cross-cutting
status: current
tags: [storage]
description: "The tape backend to EOS: where the custodial copy actually lives."
---

# CERN Tape Archive (CTA)

Tape is not a backup at CERN, it is the **custodial copy** — the one that must survive.
CTA provides the tape backend to disk systems and, together with [[eos]], manages the
LHC experiments' data. It is the evolution of [[castor]], and its design point was
removing the need to maintain a second disk-management system just to feed the archive.

---

# Topology

* **Part of**: [[storage-and-data]]
* **Supersedes**: [[castor]]
* **Integrates**: [[eos]] — CTA is the tape tier behind the disk tier.
* **Cites**: [[cta-docs]] — its role and its relation to EOS.
* **Cites**: [[castor-legacy]] — what it replaced.
