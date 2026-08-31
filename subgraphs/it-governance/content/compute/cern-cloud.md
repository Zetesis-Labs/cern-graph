---
title: "The CERN OpenStack cloud"
type: cluster
entorno: corporate
status: current
tags: [compute]
aliases: [openstack-cloud]
description: "Over 90% of the data centre, provisioned as self-service infrastructure."
---

# The CERN OpenStack cloud

CERN's private Infrastructure-as-a-Service layer, which provisions **more than 90% of
the infrastructure in the computer centre**. Kubernetes clusters come from **OpenStack
Magnum** as a self-service resource, and bare metal from **OpenStack Ironic** — which
matters for performance-sensitive workloads where the virtualisation tax is not worth
paying. It is the substrate the rest of this layer runs on.

---

# Topology

* **Part of**: [[compute-platforms]]
* **Runs on**: [[meyrin-data-centre]]
* **Runs on**: [[prevessin-computing-centre]] — the cloud spans both centres.
* **Uses**: [[landb]] — network provisioning goes through it.
* **Cites**: [[cern-cloud-docs]] — the IaaS model, Magnum and Ironic.
* **Cites**: [[openstack-docs]] — the technical documentation for the cloud operating system.
