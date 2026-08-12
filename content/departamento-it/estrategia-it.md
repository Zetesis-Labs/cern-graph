---
title: "Estrategia del Departamento de TI (Los 4 Pilares)"
type: direccion
entorno: corporativo
description: "Pilares de la Estrategia del Departamento de TI del CERN (Provider, Optimiser, Pioneer, Connector)."
---

# Estrategia del Departamento de TI (Los 4 Pilares)

Anidado bajo el sector de **Investigación y Computación (RCS)** dentro de la [[reestructuracion-2026]], el Departamento de TI es el brazo operativo de la infraestructura computacional del CERN.

Su gobernanza interna se articula en un conjunto de **IT Governance boards and entities** —cuyo listado completo el departamento mantiene en Indico— encargadas de garantizar que las plataformas técnicas ejecuten las directrices dictadas por el [[reestructuracion-2026|CIO]]. Desde 2026 el departamento lo dirige **Simone Campana**.

---

## 🏛️ Los 4 Pilares Operativos (2022-2025+)

1. **El Proveedor (The Provider)**:
   * Mantiene la estabilidad de servicios corporativos estandarizados con SLAs fiables y sostenibilidad ambiental.
2. **El Optimizador (The Optimiser)**:
   * Consolidación y racionalización de catálogos para eliminar redundancias y desmantelar deuda técnica.
3. **El Pionero (The Pioneer)**:
   * Investigación de modelos computacionales heterogéneos para el HL-LHC y el Future Circular Collider (FCC).
4. **El Conector (The Connector)**:
   * Fomento de la colaboración en código abierto (*Open Science*) mediante iniciativas como CERN openlab y la plataforma [[inveniordm-zenodo]].

---

# Topology

* **Ejecuta**: [[cern-sso-keycloak]] — opera el servicio de autenticación corporativa.
* **Ejecuta**: [[gms-authorization-api]] — desarrolla y mantiene el plano de autorización.
* **Ejecuta**: [[wlcg-iam-oauth2]] — aloja las instancias IAM de las VOs del LHC.
* **Ejecuta**: [[cis-v8-zero-trust]] — implanta los controles derivados de la auditoría.
* **Publica**: [[inveniordm-zenodo]] — materializa el pilar *Connector* en repositorios abiertos.
