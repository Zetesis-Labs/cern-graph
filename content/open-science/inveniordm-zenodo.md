---
title: "Open Science, InvenioRDM and Zenodo"
type: platform
entorno: scientific-grid
description: "InvenioRDM platform, digital preservation of scientific data and Zenodo at CERN."
---

# Open Science, InvenioRDM and Zenodo

In 2022 CERN institutionalized its **Open Science Policy**, establishing the mandate to publish the laboratory's scientific publications, primary data and source code in open access.

---

## 📦 InvenioRDM Platform

To avoid dependence on monopolistic publishers or proprietary commercial platforms (*vendor lock-in*), CERN drove **InvenioRDM** (MIT license), a turnkey repository built on the *Invenio Framework* and Zenodo's experience, capable of scaling from a handful of records to 100 million. It is developed as an open collaboration of more than twenty organizations, with CERN and Northwestern University as lead partners and sovereign deployments at institutions such as TU Wien and TU Graz.

### Institutional Use Cases
It is worth distinguishing the framework from the product: the whole ecosystem shares *Invenio*, but not everything runs on InvenioRDM.

* **Zenodo**: open digital repository for global research, funded with European funds and hosted in CERN's data center. **Runs on InvenioRDM**; it is the managed service, whereas InvenioRDM is the deployable application.
* **CERN Document Server (CDS)**: the laboratory's documentary memory, still on **Invenio v1**. Its new version at `repository.cern` **is indeed InvenioRDM**, and the migration is proceeding collection by collection since late 2024, with phases planned beyond 2026.
* **CERN Open Data**: portal that exposes petabytes of LHC collisions, built on **Invenio v3** —the framework— and not on InvenioRDM.

---

# Topology

* **Complies with**: [[consejo-cern]] — embodies the Open Science Policy that the Organization approved in 2022.
