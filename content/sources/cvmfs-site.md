---
title: "CernVM File System"
type: source
url: "https://cernvm.cern.ch/fs/"
kind: technical-docs
description: "The read-only filesystem that distributes HEP software worldwide."
---

# CernVM File System

The CernVM-FS project site.

## What it anchors

* CVMFS provides a scalable, low-maintenance **software distribution service**, built to deploy software across the worldwide distributed computing infrastructure.
* Implemented as a POSIX **read-only filesystem in user space** (FUSE), with files hosted on standard web servers and mounted under `/cvmfs`.
* It uses **outgoing HTTP connections only** — sidestepping the firewall problems of network filesystems — and verifies integrity with cryptographic hashes.
