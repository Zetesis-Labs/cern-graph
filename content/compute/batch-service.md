---
title: "The batch service"
type: cluster
entorno: cross-cutting
status: current
tags: [compute]
aliases: [htcondor-pool]
description: "High-throughput computing on HTCondor, entered through lxplus."
---

# The batch service

Where physics jobs actually run: a high-throughput pool based on **HTCondor**, entered
by submitting from **lxplus**. It replaced [[lsf]], whose architecture had run into
hard limits at CERN's scale. Much of the pool is provisioned on top of [[cern-cloud]] —
the batch farm is not separate iron, it is a tenant.

---

# Topology

* **Part of**: [[compute-platforms]]
* **Runs on**: [[cern-cloud]]
* **Supersedes**: [[lsf]]
* **Cites**: [[batch-docs]] — HTCondor and the lxplus entry point.
