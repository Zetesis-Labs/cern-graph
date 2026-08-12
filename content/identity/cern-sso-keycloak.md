---
title: "CERN Single Sign-On (SSO) and Keycloak"
type: service
entorno: corporate
description: "CERN's Unified Authentication Service (SSO) based on on-premise Keycloak."
---

# CERN Single Sign-On (SSO) and Keycloak

CERN's **Single Sign-On (SSO)** service is the central component of the Identity, Authentication and Authorization (IAA) infrastructure. It manages access to more than **15,000 web applications**, scientific platforms and financial systems for **150,000 user identities**.

---

## 🔄 The Migration from ADFS to Keycloak

Historically, CERN relied on Active Directory Federation Services (ADFS). Due to the accumulation of custom code and in line with the corporate **MALT** project (reducing dependence on proprietary software from large vendors), the laboratory migrated its SSO to **Keycloak** (CNCF incubated).

### Reasons for Rejecting a Commercial Cloud SSO
1. **Sovereignty and Geopolitical Neutrality**: Preventing commercial foreign SaaS vendors' decisions from blocking researchers' access due to IP restrictions or international embargoes.
2. **Isolated Network Topology**: The accelerator control technical network must be able to authenticate users without going out to the public internet.
3. **Control over Deployment Cycles**: Strict alignment of outages and maintenance windows with the colliders' technical stops (*Long Shutdowns*).
4. **Proprietary Integrations**: Laboratory-specific features that no commercial vendor offers, such as invoking the second factor during an SSH login.

---

## ⚡ Technical Architecture and Infrastructure

* **On-Premise Deployment**: Keycloak runs on native **Kubernetes** clusters, migrated from traditional CentOS VMs in the third quarter of 2023.
* **Performance**: during working hours the service receives about 100 logins per minute. Stress tests injected **50 authentications per second over 10-minute windows** and revealed that legacy customizations on top of Keycloak 15 introduced severe latencies; removing them, externalizing the session cache, and jumping to Keycloak 19/20 drastically reduced memory and network consumption.
* **Decoupling**: Keycloak is exclusively responsible for authentication, delegating authorization to the [[gms-authorization-api]].
* **Protocols**: It exposes standardized endpoints under the [[oidc-jwt-cern]] protocol.

---

# Topology

* **Integrates**: [[oidc-jwt-cern]] — exposes the realm's standard endpoints and issues the tokens.
* **Integrates**: [[gms-authorization-api]] — consumes the computed memberships to inject roles.
* **Authenticates**: [[wlcg-iam-oauth2]] — acts as identity provider for the grid IAM instances.
* **Complies with**: [[oc5-constitucion-digital]] — subject to the subsidiary identity rules (IAA).
* **Complies with**: [[cis-v8-zero-trust]] — vehicle for the mandatory second factor.
