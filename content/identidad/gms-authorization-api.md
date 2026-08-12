---
title: "Group Management System (GMS) y Authorization Service API"
type: servicio
entorno: corporativo
description: "Plano de control de autorización desacoplado y cálculo dinámico de grupos en el CERN."
---

# Group Management System (GMS) y Authorization Service API

Para evitar la rigidez y el acoplamiento del pasado, la arquitectura de identidad del CERN separa la **autenticación** (gestionada por [[cern-sso-keycloak]]) de la **autorización** (gestionada por GMS y la Authorization Service API).

---

## 🏗️ Los Dos Pilares de la Autorización

### 1. Authorization Service API
* Desarrollada en **C# / .NET Core** como microservicio RESTful.
* Actúa como plano de control para registrar aplicaciones, definir roles y asociar permisos.
* **Ventaja clave**: Si en el futuro se reemplaza el motor de SSO, la lógica de negocio de autorización permanece intacta.

### 2. Group Management System (GMS)
* Reemplaza al sistema antiguo *Egroups*, que quedó en solo lectura en el segundo trimestre de 2026 y se retira a lo largo del año. Los grupos existentes se trasladaron automáticamente entre julio y septiembre de 2025, y desde el último trimestre de 2025 el GMS es la fuente primaria de información de grupos.
* Es la **fuente de referencia** para membresías y grupos informáticos (*Computing Groups*), tanto para control de acceso como para listas de correo.
* **Dynamic Membership**: en lugar de listas estáticas, los grupos dinámicos se calculan por criterios evaluados contra un índice ElasticSearch alimentado desde la base de datos de Recursos Humanos. Los criterios se combinan con AND y el acceso a los sensibles (por ejemplo, la edad) está restringido.
* Sincroniza hacia el SSO, el Active Directory residual y los sistemas que dependen de la Authorization Service API.

---

# Topology

* **Autoriza**: [[oidc-jwt-cern]] — sus roles son los que viajan en `resource_access`.
* **Integra**: [[cern-sso-keycloak]] — sincroniza membresías hacia el SSO y el AD residual.
* **Cumple**: [[oc5-constitucion-digital]] — las reglas IAA gobiernan quién puede leer qué membresías.
