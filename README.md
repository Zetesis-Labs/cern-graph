# CERN · Knowledge Graph

The graph of CERN as an organisation, built with the
[`quartz-okf`](https://github.com/Zetesis-Labs/quartz-okf) toolkit: the Council and its
committees, the Director-General, the sectors and departments — and, as **portals**, the
domains large enough to be graphs of their own. One repository composes them all.

The first portal is [IT governance & identity](https://cern.zetesis.xyz/it-governance/):
a corpus of its own under `subgraphs/it-governance/`, with its own vocabulary, colours
and view modes. Its notes marked `visibility: open` are previewed in the umbrella graph
around the portal node; the whole corpus is mounted under `/it-governance/` and the
explorer enters its graph in place.

## Build

```bash
./okf/build-site.sh        # downloads the toolkit pinned in okf/quartz-okf.ref, builds public/
python3 serve.py           # serves public/ locally
```

The build mounts each subgraph declared in `okf.config.mjs` (`federation.subgraphs[]`)
before Quartz runs: a corpus in this repository is named by `path`; a corpus that lives
in a repository of its own would be named by `repo` + `ref`. Either way its notes become
pages under `/<id>/` and its graph is republished same-origin, so the site is
self-sufficient.

Deploys to Cloudflare Pages on push to `main` (`.github/workflows/deploy.yaml`). The IT
notes used to live at the site root; `okf/_redirects` sends their old paths to
`/it-governance/…`.

## Layout

```text
content/                    the umbrella corpus: cern.md, governance/, units/, topics/ (portals), sources/
okf.config.mjs              vocabulary, explorer modes and the `federation` block
subgraphs/it-governance/    the IT governance corpus: its content/, okf.config.mjs and README
okf/                        build script, quartz.ts, toolkit pin, _redirects
quartz/                     styles and static assets (D3, logos)
```

MIT.
