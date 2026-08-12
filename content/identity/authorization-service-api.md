---
title: "Authorization Service API"
type: service
entorno: corporate
status: current
tags: [identity]
description: "The C#/.NET Core control plane for applications, roles and resources."
---

# Authorization Service API

A REST API — **C# on .NET Core** — where application owners register their apps,
define roles and bind them to groups. It is the half of the identity system that
survives any authentication engine swap: the business logic of *who may do what*
lives here, not in Keycloak.

---

# Topology

* **Part of**: [[identity-architecture]]
* **Authorizes**: [[cern-token-claims]] — its roles are what lands in `resource_access`.
* **Cites**: [[iam-journey-chep2020]] — technology and design.
