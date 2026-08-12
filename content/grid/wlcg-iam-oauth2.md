---
title: "Worldwide LHC Computing Grid (WLCG IAM) and OAuth2 Tokens"
type: service
entorno: scientific-grid
description: "WLCG IAM service, short-lived JWT tokens, scopes and OAuth2 federation for the LHC Grid."
---

# Worldwide LHC Computing Grid (WLCG IAM) and OAuth2 Tokens

While the corporate infrastructure ([[cern-sso-keycloak]]) serves the CERN campus, the massive physics data processing on the **Worldwide LHC Computing Grid (WLCG)** operates on a globally distributed federated architecture.

---

## 🚀 Transition from X.509 Certificates to the WLCG Common JWT Profile

The Grid migrated from legacy X.509 proxy certificates and VOMS to a modern paradigm based on **OAuth 2.0 / OIDC** and **INDIGO IAM**, software developed and maintained by **INFN**. CERN IT hosts on its **OpenShift** infrastructure the IAM instances of the LHC VOs (ALICE, ATLAS, CMS and LHCb) along with other CERN-based VOs; the cross-cutting `wlcg` VO is operated by INFN-CNAF.

The reference profile is the **WLCG Common JWT Profile**, whose current version is **1.3 (17 June 2026)**.

### Key Concept: Transitive Trust by VO
The scientist authenticates against their **Virtual Organization (VO)** server (such as ATLAS, CMS, ALICE or LHCb). The VO acts as the Authorization Server and issues a cryptographically signed **JWT** token that is accepted by data centres around the world without querying centralised databases.

Every valid token carries the **`wlcg.ver`** claim (the profile version the resource server must understand) and an `aud` audience, which for tokens valid before any relying party takes the universal value `https://wlcg.cern.ch/jwt/v1/any`. The VOMS lineage is preserved in **`wlcg.groups`**, a JSON array that models memberships as UNIX filesystem paths (`["/atlas", "/atlas/pilots"]`).

### Capability-Based Authorisation (*Scopes*)
Tokens do not grant permissions by identity, but by explicit capabilities (*scopes*):
* `storage.read:/`, `storage.modify:/`: Restricted to identities in the transfers group (`wlcg/xfers`).
* `compute.create`, `compute.cancel`: Restricted to the job execution group (`wlcg/pilots`).

### Token Lifecycle

Without a distributed revocation mechanism, security rests on short expiry times. These are the values of the **v1.3** profile:

| Credential or cache | Recommended | Minimum | Maximum |
|---|---|---|---|
| Access Token and ID Token | 1 hour | 15 minutes | 6 hours |
| Refresh Token | 30 days | 1 day | 400 days |
| Public key cache refresh | 6 hours | 1 hour | 6 hours |
| Public key cache expiry | 2 days | 1 day | 4 days |
| Issuer public key | 6 months | 2 days | 12 months |

* **Access tokens** are deliberately ephemeral: distributed revocation is not planned, and their lifetime marks the maximum tolerable unavailability of the authorization server.
* **Refresh tokens** sustain automated scientific workflows on a human timescale. Unlike access tokens, they are **not necessarily signed** nor tied to the lifetime of the issuer's public key: they are stored and **are revocable** in the central INDIGO IAM database.

> [!warning] Values inherited from v1.0
> The first version of the profile (September 2019) recommended **20 minutes** for access tokens (5 min–6 h) and **10 days** for refresh tokens (1–30 days). Those figures still circulate in presentations and summaries, but they are several revisions out of date: the profile itself explains that, in the years since v1.0, certain critical workflows proved too costly to implement within those limits.

---

# Topology

* **Integrates**: [[oidc-jwt-cern]] — OIDC flows and JWTs are the common substrate with the corporate world.

The reverse direction is provided by [[cern-sso-keycloak]], which acts as an identity provider for these IAM instances alongside eduGAIN and institutional SSOs.
