---
title: "Gobernanza de TI y Arquitectura de Identidad (CERN)"
type: portal
description: "Grafo de conocimiento estructurado sobre la gobernanza tecnológica, ciberseguridad e identidad en el CERN."
---

# Gobernanza de TI y Arquitectura de Identidad en el CERN

Bienvenido al grafo de conocimiento sobre la arquitectura de Tecnologías de la Información de la **Organización Europea para la Investigación Nuclear (CERN)**.

Esta base de conocimiento desglosa cómo una institución intergubernamental gestiona la gobernanza directiva, la transición a arquitecturas de **Identidad y Acceso (Keycloak / OpenID Connect)**, los marcos de **ciberseguridad (CIS v8 / Zero Trust)** y la federación distribuida del **Worldwide LHC Computing Grid (WLCG IAM)**.

---

## 🗺️ Mapa de Dominio

### 🏛️ Gobierno Corporativo y Directiva
* [[consejo-cern]]: El órgano supremo de gobierno, el comité de auditoría (SACA) y comités evaluadores.
* [[reestructuracion-2026]]: La reestructuración directiva 2026-2030 y la institucionalización de la figura del **CIO**.
* [[estrategia-it]]: Los 4 pilares operativos del Departamento de TI (*Provider, Optimiser, Pioneer, Connector*).

### 🔑 Identidad, Autenticación y Autorización (IAA)
* [[cern-sso-keycloak]]: La migración del SSO tradicional desde ADFS hacia **Keycloak** on-premise en Kubernetes.
* [[oidc-jwt-cern]]: Protocolo **OpenID Connect (OIDC)** y especificación de claims en tokens JWT (`cern_upn`, `resource_access`).
* [[gms-authorization-api]]: El desacoplamiento de autorización con **Group Management System (GMS)** y **Authorization Service API**.

### 🛡️ Ciberseguridad y Normativa
* [[oc5-constitucion-digital]]: La **Circular Operativa No. 5 (OC5)** y el **Computer Security Officer (CSO)**.
* [[cis-v8-zero-trust]]: Auditoría **CIS v8**, modelo **Zero Trust**, canalizaciones SAST/DAST, SBOM y WAF.

### 🌐 Computación Distribuida y Ciencia Abierta
* [[wlcg-iam-oauth2]]: Servicio **WLCG IAM**, autorización basada en capacidades (*scopes*) y tokens JWT de vida corta.
* [[inveniordm-zenodo]]: Política de Ciencia Abierta, la plataforma **InvenioRDM** y el repositorio global **Zenodo**.
