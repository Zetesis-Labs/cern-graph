---
title: "WLCG IAM"
type: service
entorno: scientific-grid
status: current
tags: [grid, identity]
aliases: [indigo-iam]
description: "The INDIGO IAM instances for the LHC experiments, hosted by CERN IT."
---

# WLCG IAM

The token issuers of the grid: **INDIGO IAM** instances (software by INFN) for ALICE,
ATLAS, CMS, LHCb and other CERN-based VOs, hosted by CERN IT on OpenShift. They manage
VO membership, issue WLCG tokens for user and service workflows, and still provide
VOMS proxies while the long tail needs them. Users reach them through the CERN SSO,
eduGAIN or institutional identity providers.

---

# Topology

* **Part of**: [[grid-federation]]
* **Cites**: [[cern-iam-services-faq]] — what the instances are and do.
