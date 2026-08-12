---
title: "ServiceNow at CERN"
type: service
entorno: corporate
status: current
tags: [itsm]
aliases: [service-portal]
description: "The single front door: one portal for incidents and requests, since 2011."
---

# ServiceNow at CERN

CERN has run service management on **ITIL with ServiceNow since February 2011**, when
the tool and the Service Desk went live together. Two processes face the user —
**Incident Management** for things that break and **Request Fulfilment** for things you
ask for — and the whole [[service-catalogue]] hangs off it. It is wired into monitoring,
so hardware, network, OS and application alarms open incidents by themselves; and it
reaches beyond IT, covering office, laboratory and safety services too.

---

# Topology

* **Part of**: [[topics/governance-structure]]
* **Integrates**: [[monit]] — alarms become incidents automatically.
* **Cites**: [[servicenow-migration-paper]] — the 2011 go-live and the ITIL processes.
* **Cites**: [[cern-service-portal]] — the portal and the status board.
