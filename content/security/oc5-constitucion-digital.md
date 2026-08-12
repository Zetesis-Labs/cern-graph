---
title: "Operational Circular No. 5 (OC5) and Computer Security"
type: policy
entorno: corporate
description: "CERN's digital constitution, cybersecurity governance, and the Computer Security Officer."
---

# Operational Circular No. 5 (OC5) and Computer Security

**Operational Circular No. 5 (OC5)** codifies the regulatory framework and the binding rules governing the use of all of CERN's computing facilities, networks, and resources. It acts as the organization's *digital constitution*.

---

## 🛡️ Command and Enforcement Structure

1. **Computer Security Officer (CSO)**:
   * Executive appointed by the Directorate-General with full authority to oversee vulnerabilities, lead the Computer Security Incident Response Team (CSIR), and record exceptions in the *Risk Register*.
2. **Computer Security Board**:
   * Board made up of *Computer Security Liaisons* appointed as representatives of CERN's sectors, departments, units, and experiments.
   * Discusses and approves —or rejects— OC5's **Subsidiary Rules**, published by families: Identities, Authentication and Authorization (IAA), Software Restrictions (SWR), Networks (NET), Endpoints (EPT), IT Service Operations (OPS), Data Protection and Privacy (DPP), and Software Development (DEV).
3. **Mandatory Training**:
   * The Subsidiary Rules themselves make secure-development training mandatory through the **SecureFlag** platform for those who regularly touch code —developers, web administrators, and service managers— not for the community as a whole.
4. **Sanction Mechanisms**:
   * OC5 violations carry consequences ranging from bandwidth throttling to immediate service blocking.

---

# Topology

* **Governs**: [[cern-sso-keycloak]] — the IAA rules define how authentication works across the laboratory.
* **Governs**: [[gms-authorization-api]] — and how memberships are granted and audited.
* **Governs**: [[cis-v8-zero-trust]] — the audit recommendations are codified as subsidiary rules.
