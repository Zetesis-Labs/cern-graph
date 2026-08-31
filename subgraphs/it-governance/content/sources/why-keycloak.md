---
title: "Why Keycloak — CERN Authentication and Authorization Service"
type: source
url: "https://auth.docs.cern.ch/documents/why-keycloak/"
kind: technical-docs
description: "CERN's own rationale for on-premise Keycloak over commercial cloud SSO, with scale and performance figures."
---

# Why Keycloak — CERN Authentication and Authorization Service

The Authentication and Authorization Service team's public rationale document.

## What it anchors

* Scale: ~9,000 applications protected (November 2022), ~150,000 potential users, ~100 logins per minute during working hours.
* The four reasons against a commercial cloud SSO: geopolitical inclusivity, availability across isolated networks, control over upgrade cycles aligned with technical stops, and CERN-specific integrations such as 2FA during SSH logins.
* Stress testing at **50 authentications per second over 10 minutes**; legacy customisations on Keycloak 15 caused severe latencies.
* Remediation: remove customisations, externalise the session cache, migrate from CentOS VMs to Kubernetes (Q3 2023); Keycloak 19/20 cut memory and network consumption.
