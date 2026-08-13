---
title: "Security Event Pipeline"
type: service
entorno: corporate
status: current
tags: [needs-primary-source]
description: "Security-log ingestion capability whose current platform architecture requires a primary source."
---

# Security Event Pipeline

> [!warning] Primary source needed
> CERN's audit account confirms ingestion of Google Workspace, Azure and network
> logs, but does not identify the current storage, streaming or analytics products.

This node retains the central security-event pipeline as a research lead without
asserting an Elastic/Kafka stack or additional unverified log sources.

---

# Topology

* **Part of**: [[security-governance]]
* **Integrates**: [[soc]]
* **Cites**: [[security-audited-for-the-better]] — establishes the documented log-ingestion scope.
