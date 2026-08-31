---
title: "How to Request Tokens (OSG)"
type: source
url: "https://osg-htc.org/technology/software/requesting-tokens/"
kind: technical-docs
description: "The operational documentation of the scope policies gating storage.* and compute.* scopes by group."
---

# How to Request Tokens (OSG)

OSG's operational guide for obtaining WLCG tokens from IAM.

## What it anchors

* Scope policy in practice: `compute.create`, `compute.read`, `compute.cancel`, `compute.modify` are granted only to members of the **`wlcg/pilots`** group; `storage.read`, `storage.modify`, `storage.create` only to members of **`wlcg/xfers`**.
* Requesting an unauthorized scope does not fail the request: the authorization server silently omits it from the issued token.
