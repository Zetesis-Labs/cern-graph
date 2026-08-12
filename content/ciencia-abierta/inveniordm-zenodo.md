---
title: "Ciencia Abierta, InvenioRDM y Zenodo"
type: plataforma
entorno: cientifico-grid
description: "Plataforma InvenioRDM, preservación digital de datos científicos y Zenodo en el CERN."
---

# Ciencia Abierta, InvenioRDM y Zenodo

El CERN institucionalizó en 2022 su **Política de Ciencia Abierta (Open Science Policy)**, estableciendo el mandato de publicar en acceso abierto las publicaciones científicas, datos primarios y código fuente del laboratorio.

---

## 📦 Plataforma InvenioRDM

Para evitar la dependencia de editoriales monopólicas o plataformas comerciales propietarias (*vendor lock-in*), el CERN impulsó **InvenioRDM** (licencia MIT), un repositorio llave en mano construido sobre el *Invenio Framework* y la experiencia de Zenodo, capaz de escalar desde un puñado de registros hasta 100 millones. Se desarrolla como colaboración abierta de más de veinte organizaciones, con el CERN y la Universidad de Northwestern como socios principales y despliegues soberanos en instituciones como TU Wien y TU Graz.

### Casos de Uso Institucionales
Conviene distinguir el framework del producto: todo el ecosistema comparte *Invenio*, pero no todo corre sobre InvenioRDM.

* **Zenodo**: repositorio digital abierto para la investigación global, financiado con fondos europeos y alojado en el centro de datos del CERN. **Corre sobre InvenioRDM**; es el servicio gestionado, frente a InvenioRDM que es la aplicación desplegable.
* **CERN Document Server (CDS)**: memoria documental del laboratorio, todavía sobre **Invenio v1**. Su nueva versión en `repository.cern` **sí es InvenioRDM**, y la migración avanza colección a colección desde finales de 2024, con fases previstas más allá de 2026.
* **CERN Open Data**: portal que expone petabytes de colisiones del LHC, construido sobre **Invenio v3** —el framework— y no sobre InvenioRDM.

---

# Topology

* **Cumple**: [[consejo-cern]] — materializa la Política de Ciencia Abierta que la Organización aprobó en 2022.
