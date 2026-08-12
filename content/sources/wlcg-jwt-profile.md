---
title: "WLCG Common JWT Profile (current)"
type: source
url: "https://github.com/WLCG-AuthZ-WG/common-jwt-profile/blob/master/profile.md"
kind: standard-spec
description: "The living token profile of the WLCG AuthZ WG — v1.3, 17 June 2026."
---

# WLCG Common JWT Profile (current)

The WLCG Authorization Working Group's token profile, maintained on GitHub. Current version: **1.3 (17 June 2026)**.

## What it anchors

* Required claims: `wlcg.ver`, `sub`, `exp`, `iss`, `aud`, `iat`, `jti`; the universal audience `https://wlcg.cern.ch/jwt/v1/any`; `wlcg.groups` as an ordered JSON array of UNIX-path-style group names — §2.
* Capability-based authorization via scopes: `storage.read`, `storage.create`, `storage.modify`, `storage.stage`, `compute.read`, `compute.create`, `compute.modify`, `compute.cancel` — §3.
* Token lifetime table (§4.3.1): access/ID token **1 h** (15 min–6 h), refresh token **30 days** (1 day–400 days), issuer public key cache refresh 6 h, cache expiration 2 days, issuer key 6 months. "Access token lifetime should be short as we do not foresee the deployment of a revocation mechanism."
