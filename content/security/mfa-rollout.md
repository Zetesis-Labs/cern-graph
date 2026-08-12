---
title: "The 2FA rollout"
type: decision
entorno: corporate
tags: [security, decision]
description: "Two-factor authentication: SSO in 2023–24, SSH and RDP in September 2025."
---

# The 2FA rollout

Deployed where sessions begin: the SSO got 2FA through 2023–2024, and in
**September 2025** it reached the interactive front doors — LXPLUS over SSH (via a
PAM module) and the Windows Terminal Services over RDP. Smartphone apps, YubiKeys and
fingerprint readers all count. It closes the audit's demand that every remote path
into CERN be 2FA-protected.

---

# Topology

* **Part of**: [[security-governance]]
* **About**: [[cern-sso]] — where the factor is enrolled and enforced.
* **Cites**: [[remote-access-2fa]] — the rollout dates.
* **Cites**: [[security-audited-for-the-better]] — the audit recommendation it fulfils.
