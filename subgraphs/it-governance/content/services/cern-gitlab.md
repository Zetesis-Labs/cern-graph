---
title: "GitLab at CERN"
type: service
entorno: cross-cutting
status: current
tags: [compute, sdlc]
description: "Self-hosted code and CI for ~2,500 developers."
---

# GitLab at CERN

CERN's self-hosted code platform: around **2,500 active developers**, and an adoption
curve that outran every previous code hosting service at the laboratory. Its CI runners
live on Kubernetes and scale from zero to a hundred pods on demand. It is also where
the SAST/DAST controls demanded by the [[cis-v8-audit]] are enforced — the audit's
pipeline requirements land here, not in the abstract.

---

# Topology

* **Part of**: [[compute-platforms]]
* **Runs on**: [[cern-cloud]]
* **Cites**: [[gitlab-at-cern]] — scale and adoption.
* **Cites**: [[gitlab-runners-k8s]] — the CI runners on Kubernetes.
* **Cites**: [[security-audited-for-the-better]] — the SAST/DAST recommendation.
