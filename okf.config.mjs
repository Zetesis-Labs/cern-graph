// OKF configuration for the CERN IT Governance knowledge graph.
// This file defines the domain vocabulary: node types, typed relationships,
// frontmatter constraints and the questions the graph explorer can answer.
// The engine knows nothing about CERN — it draws whatever this profile declares.

export const branding = {
  site: "CERN IT Governance & Identity",
  bundleTitle: "CERN IT Governance and Identity Architecture Graph",
  indexTitle: "CERN IT Governance · Knowledge Graph",
}

export const profile = {
  types: [
    // — Who decides —
    "committee",   // Collegiate bodies: Council, SPC, SACA, WLCG boards, CRSG
    "role",        // Executive posts held by a person: CIO, CSO, Data Privacy Adviser
    "unit",        // Organisational units: sectors, departments, offices
    // — What binds —
    "policy",      // Internal norms: operational circulars, institutional policies
    "standard",    // External frameworks measured against: CIS v8, WLCG token profile
    "agreement",   // Instruments between parties: MoUs, licences, consortium agreements
    // — What is built —
    "service",     // Running systems: SSO, GMS, WLCG IAM
    "platform",    // Data and publication repositories: InvenioRDM, Zenodo
    "facility",    // Physical infrastructure: data centres, grid tiers
    "protocol",    // Technical specifications: OIDC, OAuth2
    "programme",   // Initiatives with their own governance: openlab, MALT, QTI, SCOAP3
    // — What is thought —
    "concept",     // One architectural idea, atomically stated
    "decision",    // One choice with its rationale, atomically stated
    "topic",       // Structure note: the hub that maps one domain area
    "source",      // Primary source on the public internet: every claim cites one
  ],
  edgeLabels: [
    "Governs",       // Governing or supervisory authority
    "Advises",       // Advisory relationship — counsel without binding power
    "Funds",         // Provides or approves the resources
    "Runs",          // Operational implementation
    "Authenticates", // Identity validation
    "Authorizes",    // Access control / roles / capabilities
    "Complies with", // Adherence to a standard, policy or agreement
    "Integrates",    // Software or infrastructure coupling
    "Publishes",     // Data or code dissemination
    "Supersedes",    // Replaced something that came before
    "Part of",       // Belongs to a topic hub or a larger unit
    "Contains",      // Mirror of Part of
    "Depends on",    // Presupposes another note's idea
    "About",         // Knowledge relation: this note is about that thing
    "Cites",         // Grounding: note → primary source that anchors its claims
  ],
  // Domain relations are mirrored so both panels read naturally. Following the
  // Typed Topology base profile, "Depends on", "About" and "Cites" have no
  // mirror: they surface on the target through inbound-edge views instead.
  inverseLabels: {
    "Governs": "Supervised by",
    "Advises": "Advised by",
    "Funds": "Funded by",
    "Runs": "Run by",
    "Authenticates": "Authenticated by",
    "Authorizes": "Authorized by",
    "Complies with": "Applies to",
    "Integrates": "Integrated into",
    "Publishes": "Published by",
    "Supersedes": "Superseded by",
    "Part of": "Contains",
    "Contains": "Part of",
  },
  propertyGroups: [
    // Which of the two worlds a node belongs to: the centralized corporate
    // campus or the federated scientific grid.
    {
      id: "scope",
      label: "Operational Scope",
      rule: "scope-valid",
      appliesTo: ["committee", "role", "unit", "policy", "standard", "agreement", "service",
                  "platform", "facility", "protocol", "programme", "concept", "decision", "topic"],
      fields: [
        { source: "entorno", graphPath: ["entorno"], type: "string",
          enum: ["corporate", "scientific-grid", "cross-cutting"] },
      ],
    },
    // Whether a node describes something in force. Without this the graph reads
    // as an eternal present and quietly presents retired arrangements — the GDB,
    // ADFS, e-groups, the v1.0 token lifetimes — as if they still applied.
    {
      id: "lifecycle",
      label: "Lifecycle",
      rule: "lifecycle-valid",
      appliesTo: ["committee", "role", "unit", "policy", "standard", "agreement", "service",
                  "platform", "facility", "protocol", "programme"],
      fields: [
        { source: "status", graphPath: ["status"], type: "string",
          enum: ["current", "superseded", "planned"] },
      ],
    },
    // Provenance of a source note: the URL is the identity of the source, and the
    // kind separates what the institution decrees from what its teams document.
    {
      id: "provenance",
      label: "Provenance",
      rule: "provenance-valid",
      appliesTo: ["source"],
      fields: [
        { source: "url", graphPath: ["url"], type: "string" },
        { source: "kind", graphPath: ["kind"], type: "string",
          enum: ["governance-document", "official-announcement", "technical-docs",
                 "standard-spec", "peer-reviewed-paper", "policy-document"] },
      ],
    },
  ],
  ruleLevels: {},
}

export const explorer = {
  title: "IT Governance & Identity Graph (CERN)",
  backTo: { href: "/", label: "portal" },
  // The subjects of compliance: the only types tinted by countEdge-based modes.
  // Governing bodies and the norms themselves keep their type color there.
  knowledgeTypes: ["service", "platform", "facility"],
  typeColors: {
    committee: "#3b82f6",   // Blue — collegiate bodies
    role: "#d946ef",        // Fuchsia — a post held by a person
    unit: "#a855f7",        // Purple — organisational units
    policy: "#ef4444",      // Red — internal norms
    standard: "#eab308",    // Gold — external frameworks
    agreement: "#d97706",   // Amber — instruments between parties
    service: "#10b981",     // Emerald — running systems
    platform: "#14b8a6",    // Teal — repositories
    facility: "#64748b",    // Slate — physical infrastructure
    protocol: "#f97316",    // Orange — specifications
    programme: "#22d3ee",   // Cyan — initiatives
    concept: "#6366f1",     // Indigo — one idea per node
    decision: "#ec4899",    // Pink — one choice with its rationale
    topic: "#b58b6a",       // Brown — the structure notes
    source: "#8a8a8a",      // Gray — the substrate
  },
  typeLabels: {
    committee: "Committee / Board",
    role: "Executive role",
    unit: "Organisational unit",
    policy: "Policy / Circular",
    standard: "Standard / Framework",
    agreement: "Agreement / Licence",
    service: "Service / System",
    platform: "Data platform",
    facility: "Facility",
    protocol: "Protocol / Specification",
    programme: "Programme / Initiative",
    concept: "Concept",
    decision: "Decision",
    topic: "Topic hub",
    source: "Primary source",
  },
  typeOrder: ["topic", "decision", "concept", "committee", "role", "unit", "policy",
              "agreement", "standard", "programme", "service", "protocol", "platform",
              "facility", "source"],
  // One color per relationship, shared with its inverse: the exporter materializes
  // both directions ("Governs" and "Supervised by" are the same fact read both ways),
  // so leaving the inverses unmapped would render two-tone pairs.
  edgeColors: {
    "Governs": "#ef4444", "Supervised by": "#ef4444",
    "Advises": "#f59e0b", "Advised by": "#f59e0b",
    "Funds": "#84cc16", "Funded by": "#84cc16",
    "Runs": "#a855f7", "Run by": "#a855f7",
    "Authenticates": "#3b82f6", "Authenticated by": "#3b82f6",
    "Authorizes": "#6366f1", "Authorized by": "#6366f1",
    "Complies with": "#eab308", "Applies to": "#eab308",
    "Integrates": "#10b981", "Integrated into": "#10b981",
    "Publishes": "#14b8a6", "Published by": "#14b8a6",
    "Supersedes": "#f43f5e", "Superseded by": "#f43f5e",
    "Part of": "#9a6fbf", "Contains": "#9a6fbf",
    "Depends on": "#c2544d",
    "About": "#7f93ad",
    "Cites": "#8a8a8a",
  },
  tooltip: {
    service: "{indeg|integration|integrations}",
    protocol: "{indeg|service using it|services using it}",
    source: "{indeg|note cites it|notes cite it}",
    "*": "{counts.Cites|source|sources} · {indeg|incoming connection|incoming connections}",
  },
  layout: {
    charge: -40,
    gravity: 0.02,
    link: {
      "*": { distance: 35, strength: 0.15 },
      Governs: { distance: 45, strength: 0.2 },
      Authenticates: { distance: 30, strength: 0.25 },
      // Citations cross every ring: long and loose, or they'd drag the sources inward.
      Cites: { distance: 70, strength: 0.03 },
    },
    // Rings from the inside out: the topic hubs at the centre, then who decides,
    // then what binds, then what is built, with the sources as outer substrate.
    radial: {
      strength: 0.85,
      byType: {
        topic: 0,
        committee: 0.1,
        role: 0.18,
        unit: 0.26,
        agreement: 0.34,
        policy: 0.4,
        decision: 0.46,
        standard: 0.52,
        programme: 0.58,
        concept: 0.64,
        service: 0.72,
        protocol: 0.78,
        platform: 0.84,
        facility: 0.9,
        source: 1,
      },
    },
  },
  modes: [
    {
      id: "full",
      label: "Full view",
      desc: "<b>The whole graph, with its typed relationships.</b> Every note and every edge declared under a <code>Topology</code> heading, each relation in its own color. Filter by node type and relation type to isolate a layer — drop the primary sources and what remains is the architecture itself.",
      edges: "*",
    },
    {
      id: "authority",
      label: "Chain of authority",
      desc: "<b>Who rules, who advises, who pays.</b> The three faces of institutional power kept apart: <code>Governs</code> is binding, <code>Advises</code> is not, and <code>Funds</code> is what actually moves. From the Council down to the data centre, this is the path a decision travels.",
      edges: ["Governs", "Advises", "Funds", "Part of"],
      sizeBy: { indegree: true },
    },
    {
      id: "identity",
      label: "Identity & Access (SSO / OIDC)",
      desc: "<b>Authentication and Authorization Infrastructure (AAI).</b> Filters the graph to show only the Keycloak, OIDC, GMS and WLCG IAM topology.",
      edges: ["Authenticates", "Authorizes", "Integrates"],
      sizeBy: { indegree: true },
    },
    {
      id: "governance-security",
      label: "Governance & Cybersecurity",
      desc: "<b>Executive and regulatory control plane.</b> Shows how committees, the CIO and the OC5 circular oversee the CIS v8 and Zero Trust standards.",
      edges: ["Governs", "Runs", "Complies with"],
      sizeBy: { indegree: true },
    },
    // colorBy.property: tint every node by a frontmatter property exported through
    // a propertyGroup (graphPath). The map keys are the enum values; fallback covers
    // nodes the classification does not reach.
    {
      id: "scope",
      label: "Corporate vs grid",
      legendTitle: "Operational scope",
      desc: "<b>The two worlds of CERN IT.</b> Every node tinted by its <code>entorno</code> property: the strongly centralized corporate campus, the federated scientific grid, and the cross-cutting pieces both share. This is the dual architecture the corpus describes — and the mode that makes the property group visible.",
      edges: "*",
      colorBy: {
        property: "entorno",
        map: {
          "corporate": { color: "#3b82f6", label: "Corporate campus" },
          "scientific-grid": { color: "#10b981", label: "Scientific grid" },
          "cross-cutting": { color: "#f97316", label: "Cross-cutting" },
        },
        fallback: "#3f4550",
      },
    },
    // The temporal axis: what still applies and what the corpus keeps only as
    // history. Pair it with the Supersedes edges to read the successions.
    {
      id: "lifecycle",
      label: "What is still in force",
      legendTitle: "Lifecycle",
      desc: "<b>The corpus is not an eternal present.</b> Nodes tinted by <code>status</code>, with the <code>Supersedes</code> edges drawn in: what is current, what has been replaced — ADFS, e-groups, the Grid Deployment Board, the v1.0 token lifetimes — and what is announced but not yet running. Read the red edges to follow each succession.",
      edges: ["Supersedes", "Part of"],
      colorBy: {
        property: "status",
        map: {
          "current": { color: "#3fa34d", label: "In force" },
          "superseded": { color: "#8a8a8a", label: "Superseded" },
          "planned": { color: "#4c7ecf", label: "Planned" },
        },
        fallback: "#3f4550",
      },
    },
    // colorBy.countEdge: tint by how many edges of one label a node declares.
    // Only the types in knowledgeTypes are tinted — everything else keeps its
    // type color, so the norms don't get scored for not complying with themselves.
    {
      id: "compliance",
      label: "Compliance declared",
      legendTitle: "Frameworks declared",
      desc: "<b>How grounded is each running system?</b> Services, platforms and facilities tinted by how many normative frameworks they declare (<code>Complies with</code>). Green is well anchored; red declares none — either a gap in the corpus or a gap in the governance.",
      edges: ["Complies with", "Governs"],
      colorBy: {
        countEdge: "Complies with",
        scale: [
          { max: 0, color: "#c2544d", label: "none declared" },
          { max: 1, color: "#e0a03c", label: "one framework" },
          { max: 99, color: "#3fa34d", label: "two or more" },
        ],
      },
    },
    // targetType keeps only the edges that land on one node type; sizeBy.countEdge
    // sizes each node by the edges of one label it declares. Together they answer
    // a directed question: of everything in the graph, who acts on the services?
    {
      id: "control",
      label: "Service control",
      desc: "<b>Who runs and who rules each service.</b> Only the edges that land on a service survive: the IT department operates them (<code>Runs</code>) and OC5 rules them (<code>Governs</code>). Node size is how many things a node governs — the bigger, the heavier its regulatory hand.",
      edges: ["Runs", "Governs"],
      targetType: "service",
      sizeBy: { countEdge: "Governs" },
    },
    // The grounding view: every claim in the corpus traces to a primary source on
    // the public internet, and this mode shows which sources carry the weight.
    {
      id: "sources",
      label: "Primary sources",
      desc: "<b>What the corpus stands on.</b> Only the <code>Cites</code> edges: each note tied to the primary sources that anchor its claims — CERN official documents, technical docs, standards and papers. A source's size is how many notes rest on it; a note far from every source is a note taking someone's word for it.",
      edges: ["Cites"],
      sizeBy: { indegree: true },
    },
    // The zettelkasten skeleton: how the atomic notes hang from their topic hubs
    // and from each other, without the domain relations or the sources.
    {
      id: "structure",
      label: "Note structure",
      desc: "<b>The shape of the corpus itself.</b> Only the structural relations: which topic hub each atomic note belongs to (<code>Part of</code>), which notes presuppose which (<code>Depends on</code>) and which system each idea is about (<code>About</code>). A hub's size is how many notes it holds.",
      edges: ["Part of", "Depends on", "About"],
      sizeBy: { indegree: true },
    },
  ],
}
