---
title: "CERN IT Monitoring Guide (MONIT)"
type: source
url: "https://monit.docs.cern.ch/"
kind: technical-docs
description: "The monitoring infrastructure for the data centres and the WLCG."
---

# CERN IT Monitoring Guide (MONIT)

The MONIT service documentation.

## What it anchors

* MONIT covers the whole monitoring workflow — collecting and validating metrics and logs, then serving dashboards, reports and alarms — built on Collectd, **Kafka** as the transport layer decoupling producers from consumers, Spark, Elasticsearch, InfluxDB and **Grafana**.
* Scale: metrics and logs from **over 40,000 machines**, more than **3 TB of data per day**.
* A central Grafana instance is open to anyone with a lightweight account.
