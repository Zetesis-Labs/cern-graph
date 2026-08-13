---
title: "Storage and data"
type: topic
entorno: cross-cutting
tags: [storage]
description: "Hub: where CERN's data rests and how it moves."
---

# Storage and data

The physics data is the asset everything else exists to protect. The disk layer is
[[eos]]; the custodial copy lives on tape in [[cta]], which replaced [[castor]]. Around
them: [[cernbox]] for people's files, [[fts]] to move data between sites, [[rucio]] to
keep track of where it all is, and [[cvmfs]] to push software the other way. The
principle underneath: [[disk-tape-tiering]].

---

# Topology
