---
title: "Disk and tape are different jobs"
type: concept
entorno: cross-cutting
tags: [storage, architecture]
description: "Why an exabyte archive still needs a disk layer in front of it."
---

# Disk and tape are different jobs

The split is not about cost alone. **Disk** ([[eos]]) serves what is being analysed
right now: random access, high concurrency, thousands of jobs reading at once.
**Tape** ([[cta]]) holds the custodial copy: sequential, cheap per byte, and — the part
that matters — offline by default, which makes it resistant to the failure modes that
take out online systems. Getting the boundary right is what keeps the archive
affordable and the analysis fast.

---

# Topology

* **Part of**: [[storage-and-data]]
* **About**: [[eos]]
* **About**: [[cta]]
* **Cites**: [[eos-run3-storage]] — the division of labour between the two layers.
