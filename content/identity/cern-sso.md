---
title: "CERN SSO"
type: service
entorno: corporate
status: current
tags: [identity]
aliases: [keycloak-sso]
description: "The Keycloak-based Single Sign-On: one login for the whole campus."
---

# CERN SSO

The corporate authentication service: **Keycloak on Kubernetes**, on-premise, serving
~9,000 applications and ~150,000 potential identities at ~100 logins per minute.
It authenticates; it deliberately does not decide permissions — that belongs to
[[gms]] and the [[authorization-service-api]].

---

# Topology

* **Part of**: [[identity-architecture]]
* **Integrates**: [[oidc-integration]] — exposes the realm's standard endpoints.
* **Integrates**: [[gms]] — consumes computed memberships to inject roles.
* **Authenticates**: [[wlcg-iam]] — acts as identity provider for the grid IAM instances.
* **Complies with**: [[oc5]] — subject to the IAA subsidiary rules.
* **Supersedes**: [[adfs-legacy]] — replaced the 2008-era federation service.
* **Cites**: [[why-keycloak]] — scale figures and architecture.
