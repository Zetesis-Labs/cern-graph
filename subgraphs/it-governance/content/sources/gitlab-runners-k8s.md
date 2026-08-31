---
title: "GitLab Runners and Kubernetes at CERN"
type: source
url: "https://kubernetes.web.cern.ch/blog/2023/12/06/gitlab-runners-and-kubernetes-a-powerful-duo-for-ci/cd/"
kind: technical-docs
description: "How CERN's CI runners scale on Kubernetes."
---

# GitLab Runners and Kubernetes at CERN

The CERN Kubernetes team's post on GitLab CI.

## What it anchors

* CI runners scale **from 0 to 100 pods** on demand across more than 20 nodes, able to execute 200 concurrent jobs, using user namespaces to isolate workloads from the host.
