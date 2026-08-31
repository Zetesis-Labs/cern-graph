---
title: "OIDC configuration and usage — CERN SSO"
type: source
url: "https://auth.docs.cern.ch/user-documentation/oidc/config/"
kind: technical-docs
description: "The authoritative reference for CERN token claims and the realm discovery endpoint."
---

# OIDC configuration and usage — CERN SSO

The service documentation for integrating applications with the CERN SSO over OpenID Connect.

## What it anchors

* Discovery hangs off the realm, not the domain root: `https://auth.cern.ch/auth/realms/cern/.well-known/openid-configuration`.
* Claim semantics: `cern_upn` is **unique** (not documented as immutable); `sub` duplicates it; `preferred_username` is display-only and must not be treated as unique; `resource_access` is an **object keyed by application** carrying the roles; `cern_roles` is its flat duplicate.
