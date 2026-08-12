---
title: "Worldwide LHC Computing Grid (WLCG IAM) y Tokens OAuth2"
type: servicio
entorno: cientifico-grid
description: "Servicio WLCG IAM, tokens JWT de vida corta, scopes y federación OAuth2 para el Grid del LHC."
---

# Worldwide LHC Computing Grid (WLCG IAM) y Tokens OAuth2

Mientras que la infraestructura corporativa ([[cern-sso-keycloak]]) atiende el campus del CERN, el procesamiento masivo de datos de física en el **Worldwide LHC Computing Grid (WLCG)** opera en una arquitectura federada distribuida globalmente.

---

## 🚀 Transición de Certificados X.509 al WLCG Common JWT Profile

El Grid migró desde los antiguos certificados proxy X.509 y VOMS hacia un paradigma moderno basado en **OAuth 2.0 / OIDC** e **INDIGO IAM**, software desarrollado y mantenido por el **INFN**. El CERN IT aloja sobre su infraestructura **OpenShift** las instancias IAM de las VOs del LHC (ALICE, ATLAS, CMS y LHCb) junto a otras VOs basadas en el CERN; la VO transversal `wlcg` la opera INFN-CNAF.

El perfil de referencia es el **WLCG Common JWT Profile**, cuya versión vigente es la **1.3 (17 de junio de 2026)**.

### Concepto Clave: Confianza Transitiva por VO
El científico se autentica contra el servidor de su **Organización Virtual (VO)** (como ATLAS, CMS, ALICE o LHCb). La VO actúa como Authorization Server y emite un token **JWT** firmado criptográficamente que es aceptado por centros de datos de todo el mundo sin necesidad de consultar bases de datos centralizadas.

Todo token válido lleva el claim **`wlcg.ver`** (versión del perfil que el servidor de recursos debe entender) y una audiencia `aud`, que para tokens válidos ante cualquier parte confiante toma el valor universal `https://wlcg.cern.ch/jwt/v1/any`. El linaje de VOMS se preserva en **`wlcg.groups`**, un array JSON que modela las membresías como rutas de un sistema de ficheros UNIX (`["/atlas", "/atlas/pilots"]`).

### Autorización Basada en Capacidades (*Scopes*)
Los tokens no otorgan permisos por identidad, sino por capacidades explícitas (*scopes*):
* `storage.read:/`, `storage.modify:/`: Confinados a identidades del grupo de transferencias (`wlcg/xfers`).
* `compute.create`, `compute.cancel`: Confinados al grupo de ejecución de trabajos (`wlcg/pilots`).

### Ciclo de Vida de Tokens

Sin un mecanismo de revocación distribuido, la seguridad descansa en tiempos de expiración cortos. Estos son los valores del perfil **v1.3**:

| Credencial o caché | Recomendado | Mínimo | Máximo |
|---|---|---|---|
| Access Token e ID Token | 1 hora | 15 minutos | 6 horas |
| Refresh Token | 30 días | 1 día | 400 días |
| Refresco de la caché de clave pública | 6 horas | 1 hora | 6 horas |
| Expiración de la caché de clave pública | 2 días | 1 día | 4 días |
| Clave pública del emisor | 6 meses | 2 días | 12 meses |

* Los **access tokens** son deliberadamente efímeros: no se prevé desplegar revocación distribuida, y su vida útil marca la máxima indisponibilidad tolerable del servidor de autorización.
* Los **refresh tokens** sostienen los flujos científicos automatizados en una escala de tiempo humana. A diferencia de los de acceso, **no están necesariamente firmados** ni atados a la vida de la clave pública del emisor: se almacenan y **sí son revocables** en la base de datos central de INDIGO IAM.

> [!warning] Valores heredados de la v1.0
> La primera versión del perfil (septiembre de 2019) recomendaba **20 minutos** de access token (5 min–6 h) y **10 días** de refresh token (1–30 días). Esas cifras circulan todavía en presentaciones y resúmenes, pero llevan varias revisiones desactualizadas: el propio perfil explica que, en los años transcurridos desde la v1.0, ciertos flujos críticos resultaron demasiado costosos de implementar con esos límites.

---

# Topology

* **Integra**: [[oidc-jwt-cern]] — los flujos OIDC y los JWT son el sustrato común con el mundo corporativo.

El sentido inverso lo aporta [[cern-sso-keycloak]], que actúa como proveedor de identidad de estas instancias IAM junto a eduGAIN y los SSO institucionales.
