---
title: "Decision: leave ADFS"
type: decision
entorno: corporate
tags: [identity, decision]
description: "Why CERN abandoned Active Directory Federation Services after a decade."
---

# Decision: leave ADFS

The 2008-era SSO was ADFS plus years of custom code — and the customisations made
transparent upgrades impossible. Combined with the MALT project's push to reduce
dependency on proprietary vendors, the decision fell: rebuild identity on open
standards. At the time the system served ~60,000 users, ~15,000 services and
60,000+ groups, so the migration was rebuilding an aircraft mid-flight.

---

# Topology

* **Part of**: [[identity-architecture]]
* **About**: [[cern-sso]] — the service this decision produced.
* **Cites**: [[iam-journey-chep2020]] — the team's own account.
