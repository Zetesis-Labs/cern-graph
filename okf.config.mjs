// OKF configuration for the CERN IT Governance sample template
// This file defines the domain vocabulary (nodes, colors, relationships and exploration modes).

export const branding = {
  site: "CERN IT Governance & Identity",
  bundleTitle: "CERN IT Governance and Identity Architecture Graph",
  indexTitle: "CERN IT Governance · Knowledge Graph",
}

export const profile = {
  types: [
    "committee",   // Supreme governing, audit and finance bodies
    "directorate", // Sectoral directorates and executive roles (CIO)
    "service",     // IT services and operational infrastructures (Keycloak, GMS, WLCG IAM)
    "protocol",    // Technical protocols and specifications (OIDC, SAML, JWT, OAuth2)
    "policy",      // Operational circulars and institutional regulations (OC5, Open Science)
    "standard",    // Audit, security and model frameworks (CIS v8, Zero Trust)
    "platform",    // Data and publication repositories (InvenioRDM, Zenodo)
    "concept",     // One architectural idea, atomically stated (zettel)
    "decision",    // One choice with its rationale, atomically stated (zettel)
    "topic",       // Structure note: the hub that maps one domain area
    "source",      // Primary source on the public internet: every claim in the corpus cites one
  ],
  edgeLabels: [
    "Governs",       // Governing or supervisory relationship
    "Runs",          // Operational implementation
    "Authenticates", // Identity validation
    "Authorizes",    // Access control / roles / capabilities
    "Complies with", // Adherence to a standard or policy
    "Integrates",    // Software or infrastructure coupling
    "Publishes",     // Data or code dissemination
    "Part of",       // Belongs to a topic hub or a larger unit
    "Contains",      // Mirror of Part of
    "Depends on",    // Presupposes another note's idea
    "About",         // Knowledge relation: this note is about that system
    "Cites",         // Grounding: note → primary source that anchors its claims
  ],
  // Domain relations are mirrored so both panels read naturally. Following the
  // Typed Topology base profile, "Depends on", "About" and "Cites" have no
  // mirror: they surface on the target through inbound-edge views instead.
  inverseLabels: {
    "Governs": "Supervised by",
    "Runs": "Run by",
    "Authenticates": "Authenticated by",
    "Authorizes": "Authorized by",
    "Complies with": "Applies to",
    "Integrates": "Integrated into",
    "Publishes": "Published by",
    "Part of": "Contains",
    "Contains": "Part of",
  },
  propertyGroups: [
    {
      id: "ambito",
      label: "Operational Scope",
      rule: "ambito-valido",
      appliesTo: ["committee", "directorate", "service", "protocol", "policy", "standard", "platform", "concept", "decision", "topic"],
      fields: [
        { source: "entorno", graphPath: ["entorno"], type: "string", enum: ["corporate", "scientific-grid", "cross-cutting"] },
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
          enum: ["governance-document", "official-announcement", "technical-docs", "standard-spec", "peer-reviewed-paper", "policy-document"] },
      ],
    },
  ],
  ruleLevels: {},
}

export const explorer = {
  title: "IT Governance & Identity Graph (CERN)",
  backTo: { href: "/", label: "portal" },
  // The subjects of compliance: the only types tinted by countEdge-based modes.
  // Governing bodies and the norms themselves keep their type color in those views.
  knowledgeTypes: ["service", "platform"],
  typeColors: {
    committee: "#3b82f6",   // Blue
    directorate: "#a855f7", // Purple
    service: "#10b981",     // Emerald green
    protocol: "#f97316",    // Orange
    policy: "#ef4444",      // Red
    standard: "#eab308",    // Gold yellow
    platform: "#14b8a6",    // Teal
    concept: "#6366f1",     // Indigo — one idea per node
    decision: "#ec4899",    // Pink — one choice with its rationale
    topic: "#b58b6a",       // Brown — the structure notes that map each area
    source: "#8a8a8a",      // Gray — the substrate, like books in a reading corpus
  },
  typeLabels: {
    committee: "Governing Committee",
    directorate: "Directorate / Executive",
    service: "Service / System",
    protocol: "Protocol / Specification",
    policy: "Policy / Circular",
    standard: "Standard / Framework",
    platform: "Data Platform",
    concept: "Concept",
    decision: "Decision",
    topic: "Topic hub",
    source: "Primary source",
  },
  typeOrder: ["topic", "decision", "concept", "committee", "directorate", "policy", "standard", "service", "protocol", "platform", "source"],
  // One color per relationship, shared with its inverse: the exporter materializes
  // both directions ("Governs" and "Supervised by" are the same fact read both ways),
  // so leaving the inverses unmapped would render two-tone pairs.
  edgeColors: {
    "Governs": "#ef4444", "Supervised by": "#ef4444",
    "Runs": "#a855f7", "Run by": "#a855f7",
    "Authenticates": "#3b82f6", "Authenticated by": "#3b82f6",
    "Authorizes": "#6366f1", "Authorized by": "#6366f1",
    "Complies with": "#eab308", "Applies to": "#eab308",
    "Integrates": "#10b981", "Integrated into": "#10b981",
    "Publishes": "#14b8a6", "Published by": "#14b8a6",
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
    // Rings from the inside out: the topic hubs at the centre, the governing
    // bodies and their norms next, then the ideas, then the systems they
    // describe, and the primary sources as the outermost substrate.
    radial: {
      strength: 0.85,
      byType: {
        topic: 0,
        committee: 0.14,
        directorate: 0.26,
        policy: 0.38,
        decision: 0.46,
        standard: 0.54,
        concept: 0.62,
        service: 0.7,
        protocol: 0.78,
        platform: 0.86,
        source: 1,
      },
    },
  },
  modes: [
    {
      id: "full",
      label: "Full view",
      desc: "<b>Global IT architecture graph at CERN.</b> Shows the full interaction between governing committees, sectoral directorates, identity infrastructure, security and the WLCG IAM network.",
      edges: "*",
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
    // colorBy.countEdge: tint by how many edges of one label a node declares.
    // Only the types in knowledgeTypes are tinted — everything else keeps its
    // type color, so the norms don't get scored for not complying with themselves.
    {
      id: "compliance",
      label: "Compliance declared",
      legendTitle: "Frameworks declared",
      desc: "<b>How grounded is each running system?</b> Services and platforms tinted by how many normative frameworks they declare (<code>Complies with</code>). Green is well anchored; red declares none — either a gap in the corpus or a gap in the governance.",
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
