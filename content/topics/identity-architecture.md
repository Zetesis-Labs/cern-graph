---
title: "Identity architecture"
type: topic
visibility: open
entorno: corporate
tags: [identity]
description: "Hub: authentication and authorization for the CERN campus."
---

# Identity architecture

One SSO for ~150,000 identities and thousands of applications. The pieces: [[cern-sso]]
authenticates, the [[authorization-service-api]] and [[gms]] decide what you are allowed
to do, and [[oidc-integration]] carries the result to every application as [[cern-token-claims]].
The shape of the system is explained by three decisions: [[decision-leave-adfs]],
[[decision-onprem-sso]] and [[sso-performance-hardening]], held together by
[[authn-authz-decoupling]].

---

# Topology
