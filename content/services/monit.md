---
title: "MONIT"
type: service
entorno: cross-cutting
status: current
tags: [compute, operations]
description: "40,000 machines, 3 TB of telemetry a day, on Kafka and Grafana."
---

# MONIT

The monitoring infrastructure for the data centres and the WLCG: collection and
validation of metrics and logs, then dashboards, reports and alarms. Built on Collectd,
**Kafka** as the transport layer decoupling producers from consumers, Spark,
Elasticsearch, InfluxDB and **Grafana** — whose central instance is open to anyone with
a lightweight account. Scale: **over 40,000 machines and more than 3 TB per day**.

---

# Topology

* **Part of**: [[compute-platforms]]
* **Cites**: [[monit-docs]] — the stack and its scale.
