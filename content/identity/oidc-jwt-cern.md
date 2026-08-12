---
title: "OpenID Connect (OIDC) Protocol and JWT Tokens"
type: protocol
entorno: cross-cutting
description: "OIDC authentication standard and semantic specification of claims in JWT tokens at CERN."
---

# OpenID Connect (OIDC) Protocol and JWT Tokens

CERN has standardized software and microservice integration through **OpenID Connect (OIDC)** and **OAuth 2.0**, eliminating legacy proprietary integrations.

---

## 🛠️ Discovery Endpoint and Claims

Any application or service registered at CERN consumes the realm's discovery endpoint, which hangs off the realm path and **not** the domain root:

`https://auth.cern.ch/auth/realms/cern/.well-known/openid-configuration`

From there you get the authorization, token, introspection, *userinfo*, and logout endpoints, all under `…/protocol/openid-connect/`.

### Standardized Claims in the JWT
The **JSON Web Tokens (JWT)** issued by [[cern-sso-keycloak]] include the following semantic properties:

* **`cern_upn`**: User Principal Name (e.g. `mcurie`). The documentation guarantees it is **unique**, which is not the same as immutable.
* **`sub`**: Standard subject identifier (duplicate of `cern_upn` for compatibility with generic OIDC clients).
* **`preferred_username`**: set by the identity provider and intended only for display; **it must not be treated as a unique identifier**.
* **`resource_access`**: JSON object —not an array— indexed by application, which confines the roles validated by [[gms-authorization-api]] exclusively to the context of the requesting application (`client_id`).
* **`cern_roles`**: flat duplicate of `resource_access.{application}.roles`, convenient for quick checks.

```json
{
  "sub": "mcurie",
  "cern_upn": "mcurie",
  "iss": "https://auth.cern.ch/auth/realms/cern",
  "resource_access": {
    "mi-aplicacion-web": {
      "roles": ["admin-sistema", "operador-red"]
    }
  },
  "cern_roles": ["admin-sistema", "operador-red"]
}
```

---

# Topology

* **Integrates**: [[wlcg-iam-oauth2]] — the same protocol underpins the grid's scientific federation.
