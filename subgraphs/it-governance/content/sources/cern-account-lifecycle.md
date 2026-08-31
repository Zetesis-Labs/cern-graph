---
title: "CERN account lifecycle"
type: source
url: "https://auth.docs.cern.ch/user-documentation/account-lifecycle/"
kind: technical-docs
description: "Current account types and lifecycle rules from CERN Authentication and Authorization Services."
---

# CERN account lifecycle

CERN Authentication and Authorization Services documentation for account types
and departure handling.

## What it anchors

* Primary, Secondary and Service accounts for users with a CERN affiliation.
* Guest and externally provided identities for users without an affiliation.
* Personal accounts are blocked and later deleted after departure; Service
  accounts can be transferred to the owner's supervisor.
* LDAP exposes an active-status attribute, while the Authorization Service API is
  the recommended programmatic interface.
