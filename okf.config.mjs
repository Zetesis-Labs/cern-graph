// OKF configuration for the CERN umbrella graph: the organisation, who governs it and
// the domains large enough to be graphs of their own. The engine knows nothing about
// CERN — it draws whatever this profile declares.

export const branding = {
  site: "CERN",
  bundleTitle: "CERN organisation graph",
  indexTitle: "CERN · Knowledge Graph",
}

export const profile = {
  types: [
    "organisation", // The laboratory itself
    "committee",    // Collegiate bodies: Council, SPC, Finance Committee
    "role",         // Executive posts held by a person: Director-General
    "unit",         // Sectors and departments
    "programme",    // Initiatives with their own governance
    "graph",        // A portal: a domain published as its own knowledge graph
    "topic",        // Structure note: the hub that maps one area
    "source",       // Primary source on the public internet
  ],
  edgeLabels: [
    "Governs", "Supervised by",
    "Advises", "Advised by",
    "Runs", "Run by",
    "Funds", "Funded by",
    "Part of", "Contains",
    "About",
    "Cites",
  ],
  inverseLabels: {
    "Governs": "Supervised by", "Supervised by": "Governs",
    "Advises": "Advised by", "Advised by": "Advises",
    "Runs": "Run by", "Run by": "Runs",
    "Funds": "Funded by", "Funded by": "Funds",
    "Part of": "Contains", "Contains": "Part of",
  },
  propertyGroups: [
    {
      id: "provenance",
      label: "Provenance",
      rule: "provenance-valid",
      appliesTo: ["source"],
      fields: [
        { source: "url", graphPath: ["url"], type: "string" },
        { source: "kind", graphPath: ["kind"], type: "string",
          enum: ["governance-document", "official-announcement", "technical-docs", "press-article"] },
      ],
    },
  ],
  ruleLevels: { "provenance-valid": "error" },
}

export const explorer = {
  title: "CERN graph",
  backTo: { href: "/", label: "portal" },
  knowledgeTypes: ["unit", "graph", "programme"],
  typeColors: {
    organisation: "#0f172a",
    committee: "#3b82f6",
    role: "#d946ef",
    unit: "#a855f7",
    programme: "#22d3ee",
    graph: "#0ea5e9",
    topic: "#b58b6a",
    source: "#8a8a8a",
  },
  typeLabels: {
    organisation: "Organisation",
    committee: "Committee / Board",
    role: "Executive role",
    unit: "Sector / Department",
    programme: "Programme",
    graph: "Linked graph",
    topic: "Topic hub",
    source: "Primary source",
  },
  typeOrder: ["organisation", "graph", "topic", "committee", "role", "unit", "programme", "source"],
  edgeColors: {
    "Governs": "#ef4444", "Supervised by": "#ef4444",
    "Advises": "#f59e0b", "Advised by": "#f59e0b",
    "Runs": "#a855f7", "Run by": "#a855f7",
    "Funds": "#84cc16", "Funded by": "#84cc16",
    "Part of": "#9a6fbf", "Contains": "#9a6fbf",
    "About": "#7f93ad",
    "Cites": "#8a8a8a",
  },
  // A portal is big because it stands for a whole graph, not because of its in-degree.
  radius: { byType: { organisation: 12, graph: 11 } },
  tooltip: {
    graph: "{subgraph.notes|note|notes} · {subgraph.previewed} previewed",
    source: "{indeg|note cites it|notes cite it}",
    "*": "{indeg|incoming connection|incoming connections}",
  },
  layout: {
    charge: -60,
    gravity: 0.03,
    link: {
      "*": { distance: 45, strength: 0.2 },
      Contains: { distance: 40, strength: 0.35 },
      Cites: { distance: 80, strength: 0.03 },
    },
  },
  modes: [
    {
      id: "full",
      label: "Full view",
      desc: "<b>The organisation and its linked graphs.</b> Every note and every typed relationship. Double-ringed nodes are portals to other graphs: open one and enter it.",
      edges: "*",
    },
    {
      id: "authority",
      label: "Chain of authority",
      desc: "<b>Who rules, who advises, who runs.</b> <code>Governs</code> is binding, <code>Advises</code> is not, <code>Runs</code> is the executive line.",
      edges: ["Governs", "Advises", "Runs", "Part of"],
      sizeBy: { indegree: true },
    },
  ],
}

// Domains published as their own graphs. Each portal note names a corpus — here a
// directory of this repository (`path`); a corpus that moves to a repository of its own
// switches to `repo` + `ref` and nothing else changes. The build exports it with the
// toolkit and mounts it under /<id>/. Only the notes marked `visibility: open` are
// previewed around the portal.
export const federation = {
  subgraphs: [
    {
      node: "topics/it-governance",
      path: "subgraphs/it-governance",
      preview: { property: "visibility", equals: "open" },
      edge: "Contains",
    },
  ],
}

// This corpus's half of the build; the recipe itself belongs to the toolkit.
export const build = {
  hooks: {
    postBuild: [
      // The IT notes used to live at the site root; Pages redirects the old paths.
      'cp "$OKF_ROOT/okf/_redirects" "$OKF_PUBLIC/_redirects"',
      'python3 "$OKF_ROOT/okf/inject-cern-logo.py"',
    ],
  },
  // Floors that tell a whole site from a degraded one, not growth marks.
  verify: { minNodes: 20, minEdges: 60, pages: [{ glob: "it-governance/**", min: 200 }] },
}
