---
title: "Protocolo OpenID Connect (OIDC) y Tokens JWT"
type: protocolo
entorno: transversal
description: "Estándar de autenticación OIDC y especificación semántica de reclamaciones (claims) en tokens JWT en el CERN."
---

# Protocolo OpenID Connect (OIDC) y Tokens JWT

El CERN ha estandarizado la integración de software y microservicios mediante **OpenID Connect (OIDC)** y **OAuth 2.0**, eliminando integraciones propietarias legadas.

---

## 🛠️ Endpoint de Descubrimiento y Reclamaciones (Claims)

Cualquier aplicación o servicio registrado en el CERN consume el punto de descubrimiento del realm, que cuelga de la ruta del realm y **no** de la raíz del dominio:

`https://auth.cern.ch/auth/realms/cern/.well-known/openid-configuration`

De ahí salen los endpoints de autorización, token, introspección, *userinfo* y cierre de sesión, todos bajo `…/protocol/openid-connect/`.

### Reclamaciones (Claims) Estandarizadas en el JWT
Los **JSON Web Tokens (JWT)** emitidos por [[cern-sso-keycloak]] incorporan las siguientes propiedades semánticas:

* **`cern_upn`**: User Principal Name (ej. `mcurie`). La documentación lo garantiza **único**, que no es lo mismo que inmutable.
* **`sub`**: Identificador estándar de sujeto (duplicado de `cern_upn` para compatibilidad con clientes OIDC genéricos).
* **`preferred_username`**: lo fija el proveedor de identidad y sirve solo para presentación; **no debe tratarse como identificador único**.
* **`resource_access`**: Objeto JSON —no un array— indexado por aplicación, que confina los roles validados por [[gms-authorization-api]] exclusivamente al contexto de la aplicación solicitante (`client_id`).
* **`cern_roles`**: duplicado plano de `resource_access.{aplicación}.roles`, cómodo para comprobaciones rápidas.

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

* **Integra**: [[wlcg-iam-oauth2]] — el mismo protocolo sostiene la federación científica del grid.
