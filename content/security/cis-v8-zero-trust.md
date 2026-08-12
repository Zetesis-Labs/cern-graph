---
title: "CIS v8 Audit, Zero Trust and Secure Development"
type: standard
entorno: corporate
description: "CIS v8 cybersecurity framework, Zero Trust paradigm, SAST/DAST pipelines, SBOM and WAF at CERN."
---

# CIS v8 Audit, Zero Trust and Secure Development

In the summer of 2023, a specialized external company audited CERN's cybersecurity posture against the international **CIS Controls v8** standard, as part of the five-year internal audit plan. The outcome was **82 recommendations, of which the Director-General accepted 73**: 15 classified as major, 34 medium and 24 minor, none catastrophic.

From there, the laboratory began dismantling its historical paradigm of "implicit academic trust" (*implicit trust network*) in favor of a **Zero Trust** and **Secure-by-Design** posture.

---

## 🛠️ Technical Requirements for Applications and Software

1. **Pipeline Governance (SAST / DAST)**:
   * Mandatory Static Analysis (SAST) and Dynamic Testing (DAST) in GitLab CI/CD before deploying any code to production.
2. **Software Bill of Materials (SBOM)**:
   * Requirement to generate Software Bills of Materials (SBOM) and continuous scanning of container images in the **Harbor** registry.
3. **Web Application Firewall (WAF)**:
   * Inspection via ModSecurity and Falco on PaaS platforms (OpenShift). The hardening of these firewalls and a more granular deployment of anti-denial-of-service protections were planned **for 2026**, not fully implemented right after the audit.
4. **Mandatory MFA**:
   * Second factor rolled out on [[cern-sso-keycloak]] during 2023 and 2024, and enabled in September 2025 on LXPLUS (SSH, via PAM module) and the Windows Terminal Services (RDP). Mobile apps, hardware keys such as YubiKey, and fingerprint readers are supported.
5. **Password Hygiene**:
   * Alignment with NIST 800-63b: complexity requirements dropped, a minimum of **15 characters** introduced, along with checks against lists of trivial passwords and passwords leaked in public breaches.
6. **Centralized Observability (SOC)**:
   * The Security Operations Center expanded its ingestion to correlate logs from Google Workspace, Microsoft Azure and network traffic, on top of a revised segregation between the data center, technical, and campus networks.

---

# Topology

* **Complies with**: [[oc5-constitucion-digital]] — its recommendations are enforced through the regulatory channel of OC5.
* **Integrates**: [[cern-sso-keycloak]] — the 2FA and password policy land in the SSO.
* **Integrates**: [[wlcg-iam-oauth2]] — network segregation and the SOC also cover the grid infrastructure.
