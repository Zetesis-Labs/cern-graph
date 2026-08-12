---
title: "Circular Operativa No. 5 (OC5) y Seguridad Informática"
type: politica
entorno: corporativo
description: "La constitución digital del CERN, gobernanza de ciberseguridad y el Computer Security Officer."
---

# Circular Operativa No. 5 (OC5) y Seguridad Informática

La **Circular Operativa No. 5 (OC5)** codifica el marco normativo y las reglas vinculantes de uso de todas las instalaciones informáticas, redes y recursos del CERN. Actúa como la *constitución digital* de la organización.

---

## 🛡️ Estructura de Mando y Aplicación

1. **Computer Security Officer (CSO)**:
   * Ejecutivo designado por la Dirección General con plena autoridad para supervisar vulnerabilidades, liderar el Equipo de Respuesta a Incidentes (CSIR) y registrar excepciones en el *Risk Register*.
2. **Computer Security Board**:
   * Consejo integrado por *Computer Security Liaisons* designados como representantes de los sectores, departamentos, unidades y experimentos del CERN.
   * Discute y aprueba —o rechaza— las **Subsidiary Rules** de la OC5, publicadas por familias: Identidades, Autenticación y Autorización (IAA), Restricciones de Software (SWR), Redes (NET), Endpoints (EPT), Operaciones de Servicios de TI (OPS), Protección de Datos y Privacidad (DPP) y Desarrollo de Software (DEV).
3. **Formación Obligatoria**:
   * Las mismas Subsidiary Rules hacen obligatoria la formación en desarrollo seguro a través de la plataforma **SecureFlag** para quienes tocan código de forma habitual —desarrolladores, administradores web y gestores de servicio—, no para el conjunto de la comunidad.
4. **Mecanismos de Sanción**:
   * Las infracciones de OC5 conllevan desde la estrangulación de ancho de banda (*throttling*) hasta el bloqueo inmediato del servicio (*blocking*).

---

# Topology

* **Gobierna**: [[cern-sso-keycloak]] — las reglas IAA fijan cómo se autentica en el laboratorio.
* **Gobierna**: [[gms-authorization-api]] — y cómo se conceden y auditan las membresías.
* **Gobierna**: [[cis-v8-zero-trust]] — las recomendaciones de la auditoría se codifican como reglas subsidiarias.
