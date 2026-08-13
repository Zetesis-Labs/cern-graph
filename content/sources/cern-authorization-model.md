---
title: "CERN Authorization Service data model"
type: source
url: "https://auth.docs.cern.ch/authzsvc/model/"
kind: technical-docs
description: "Current identity and account model, including synchronization from the HR Foundation database."
---

# CERN Authorization Service data model

CERN's public reference for identities, accounts, groups and applications in the
Authorization Service.

## What it anchors

* An identity can represent a person, service or application and can have accounts
  from CERN, eduGAIN or social providers.
* Most identity information is read-only and synchronized from HR's Foundation
  database.
* Accounts carry lifecycle-related resource categories and ownership fields.
