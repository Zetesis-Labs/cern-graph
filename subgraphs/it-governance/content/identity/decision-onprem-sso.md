---
title: "Decision: on-premise over cloud SSO"
type: decision
entorno: corporate
tags: [identity, decision]
description: "The four reasons CERN's SSO cannot live in a commercial cloud."
---

# Decision: on-premise over cloud SSO

Formally evaluated and rejected. **(1) Geopolitical inclusivity**: a commercial
provider's IP blocks or embargoes could lock out researchers by nationality, breaking
CERN's founding mission. **(2) Isolated networks**: the accelerator control network
must authenticate without touching the public internet. **(3) Upgrade sovereignty**:
maintenance aligns with the accelerator's technical stops, not a vendor's calendar.
**(4) Native integrations**: things like 2FA prompts inside SSH logins exist nowhere
off the shelf.

---

# Topology

* **Part of**: [[identity-architecture]]
* **About**: [[cern-sso]]
* **Depends on**: [[decision-leave-adfs]] — the question only arose once ADFS was out.
* **Cites**: [[why-keycloak]] — the four reasons, verbatim.
