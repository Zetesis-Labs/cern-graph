---
title: "Auditoría CIS v8, Zero Trust y Desarrollo Seguro"
type: estandar
entorno: corporativo
description: "Marco de ciberseguridad CIS v8, paradigma Zero Trust, pipelines SAST/DAST, SBOM y WAF en el CERN."
---

# Auditoría CIS v8, Zero Trust y Desarrollo Seguro

En el verano de 2023, una empresa externa especializada auditó la postura de ciberseguridad del CERN contra el estándar internacional **CIS Controls v8**, dentro del plan quinquenal de auditoría interna. El resultado fueron **82 recomendaciones, de las que el Director General aceptó 73**: 15 clasificadas como mayores, 34 medias y 24 menores, ninguna catastrófica.

A partir de ahí el laboratorio empezó a desmantelar su paradigma histórico de "confianza académica implícita" (*implicit trust network*) en favor de una postura de **Zero Trust** y **Secure-by-Design**.

---

## 🛠️ Exigencias Técnicas para Aplicaciones y Software

1. **Gobernanza de Pipeline (SAST / DAST)**:
   * Análisis Estático (SAST) y Pruebas Dinámicas (DAST) obligatorios en GitLab CI/CD antes de desplegar cualquier código a producción.
2. **Software Bill of Materials (SBOM)**:
   * Requisito de generación de Listas de Materiales de Software (SBOM) y escaneo continuo de imágenes de contenedores en el registro **Harbor**.
3. **Web Application Firewall (WAF)**:
   * Inspección mediante ModSecurity y Falco en plataformas PaaS (OpenShift). El endurecimiento de estos cortafuegos y un despliegue más granular de las protecciones anti-denegación de servicio estaban planificados **para 2026**, no consumados de raíz tras la auditoría.
4. **MFA Obligatorio**:
   * Segundo factor desplegado en el [[cern-sso-keycloak]] durante 2023 y 2024, y activado en septiembre de 2025 sobre LXPLUS (SSH, vía módulo PAM) y los Windows Terminal Services (RDP). Se admiten aplicaciones móviles, llaves hardware tipo YubiKey y lectores de huella.
5. **Higiene de Contraseñas**:
   * Alineamiento con NIST 800-63b: fuera los requisitos de complejidad, dentro un mínimo de **15 caracteres** y comprobación contra listas de contraseñas triviales y filtradas en brechas públicas.
6. **Observabilidad Centralizada (SOC)**:
   * El Centro de Operaciones de Seguridad amplió su ingesta para correlacionar los registros de Google Workspace, Microsoft Azure y el tráfico de red, sobre una segregación revisada entre las redes del centro de datos, la técnica y la de campus.

---

# Topology

* **Cumple**: [[oc5-constitucion-digital]] — sus recomendaciones se aplican por la vía normativa de la OC5.
* **Integra**: [[cern-sso-keycloak]] — el 2FA y la política de contraseñas aterrizan en el SSO.
* **Integra**: [[wlcg-iam-oauth2]] — la segregación de redes y el SOC cubren también la infraestructura del grid.
