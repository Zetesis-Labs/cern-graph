---
title: "CERN Single Sign-On (SSO) y Keycloak"
type: servicio
entorno: corporativo
description: "Servicio de Autenticación Unificada (SSO) del CERN basado en Keycloak on-premise."
---

# CERN Single Sign-On (SSO) y Keycloak

El servicio **Single Sign-On (SSO)** del CERN es el componente central de la infraestructura de Identidad, Autenticación y Autorización (IAA). Administra el acceso a más de **15.000 aplicaciones web**, plataformas científicas y sistemas financieros para **150.000 identidades de usuario**.

---

## 🔄 La Migración desde ADFS hacia Keycloak

Históricamente, el CERN dependía de Active Directory Federation Services (ADFS). Debido a la acumulación de código personalizado y en línea con el proyecto corporativo **MALT** (reducción de dependencia de software propietario de grandes proveedores), el laboratorio migró su SSO hacia **Keycloak** (incubado en CNCF).

### Motivos para rechazar un SSO en la Nube Comercial
1. **Soberanía y Neutralidad Geopolítica**: Evitar que decisiones de proveedores SaaS comerciales extranjeros bloqueen el acceso de investigadores por restricciones de IP o embargos internacionales.
2. **Topología de Redes Aisladas**: La red técnica de control de aceleradores debe poder autenticar usuarios sin salir a la internet pública.
3. **Control sobre los Ciclos de Despliegue**: Alineación estricta de paradas y mantenimientos con los paros técnicos de los colisionadores (*Long Shutdowns*).
4. **Integraciones Propietarias**: Funcionalidades específicas del laboratorio que ningún proveedor comercial ofrece, como invocar el segundo factor durante un inicio de sesión SSH.

---

## ⚡ Arquitectura Técnica e Infraestructura

* **Despliegue On-Premise**: Keycloak opera sobre clústeres nativos de **Kubernetes**, migrado desde VMs CentOS tradicionales en el tercer trimestre de 2023.
* **Rendimiento**: en horario laboral el servicio recibe unos 100 inicios de sesión por minuto. Las pruebas de estrés inyectaron **50 autenticaciones por segundo durante ventanas de 10 minutos** y revelaron que las personalizaciones heredadas sobre Keycloak 15 introducían latencias severas; retirarlas, externalizar la caché de sesión y saltar a Keycloak 19/20 redujo drásticamente el consumo de memoria y red.
* **Desacoplamiento**: Keycloak se encarga exclusivamente de la autenticación, delegando la autorización a la [[gms-authorization-api]].
* **Protocolos**: Expone puntos de enlace estandarizados bajo el protocolo [[oidc-jwt-cern]].

---

# Topology

* **Integra**: [[oidc-jwt-cern]] — expone los endpoints estándar del realm y emite los tokens.
* **Integra**: [[gms-authorization-api]] — consume las membresías calculadas para inyectar roles.
* **Autentica**: [[wlcg-iam-oauth2]] — actúa como proveedor de identidad de las instancias IAM del grid.
* **Cumple**: [[oc5-constitucion-digital]] — sujeto a las reglas subsidiarias de identidades (IAA).
* **Cumple**: [[cis-v8-zero-trust]] — vehículo del segundo factor obligatorio.
