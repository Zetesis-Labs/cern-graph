---
title: "EOS Open Storage documentation"
type: source
url: "https://eos-docs.web.cern.ch/"
kind: technical-docs
description: "The official documentation of CERN's exabyte-scale disk storage system."
---

# EOS Open Storage documentation

The EOS project's own documentation.

## What it anchors

* EOS is CERN's open-source disk storage system, built on the **XRootD** framework as its remote access protocol.
* The namespace runs as an in-memory cache with **QuarkDB** as the external key-value store for persistence — the redesign that lifted the earlier ceiling of "as much metadata as fits in one machine's RAM".
* Access through FUSE (POSIX-like), HTTPS/WebDAV, XRootD, gRPC, S3 and SMB.
* Written mostly in C/C++, running on commodity hardware with disks in JBOD.
