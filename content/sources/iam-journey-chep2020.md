---
title: "CERN's Identity and Access Management: a journey to Open Source"
type: source
url: "https://doi.org/10.1051/epjconf/202024503012"
kind: peer-reviewed-paper
description: "The CHEP 2020 paper (EPJ Web Conf. 245, 03012) documenting the ADFS-to-Keycloak redesign."
---

# CERN's Identity and Access Management: a journey to Open Source

Peer-reviewed paper by the CERN IAM team, EPJ Web of Conferences 245, 03012 (CHEP 2020).

## What it anchors

* The previous system, dating from 2008, relied on Microsoft Active Directory and ADFS; accumulated customisations blocked transparent upgrades, and with the MALT project the decision was taken to move away.
* Scale at the time: ~60,000 users, ~15,000 online services, over 60,000 groups.
* The Authorization Service API is developed in **C# on .NET Core** (2.2, later 3.1), as a REST control plane for applications, identities, groups, roles and resources.
* The deliberate loose coupling: authentication (Keycloak) and authorization providers can be replaced independently.
