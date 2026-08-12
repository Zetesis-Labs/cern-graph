---
title: "The PaaS (OpenShift)"
type: cluster
entorno: corporate
status: current
tags: [compute]
aliases: [openshift-paas]
description: "Self-service containers for the web tier, on OKD4."
---

# The PaaS (OpenShift)

CERN's Platform-as-a-Service: containers and Kubernetes orchestration for web
applications, deployed to improve resource efficiency and integrated from the start
with source control, site management and **authentication** — you deploy an app and it
speaks to [[cern-sso]] without you building that yourself. Built on **OKD4** and fully
self-service: users administer their own namespace. It is also where the WAFs of the
[[cis-v8-audit]] sit.

---

# Topology

* **Part of**: [[compute-platforms]]
* **Runs on**: [[cern-cloud]]
* **Integrates**: [[cern-sso]] — authentication comes with the platform.
* **Complies with**: [[cis-v8-audit]] — the WAF layer runs here.
* **Cites**: [[paas-openshift-paper]] — the platform and its integrations.
* **Cites**: [[webeos-docs]] — OKD4 and the self-service model.
