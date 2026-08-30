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
    // The infrastructure vocabulary is the Typed Topology base profile's: a
    // datastore, a cluster and a network are not interchangeable with "service",
    // and collapsing them loses what the operational layer is actually about.
    "service",     // User-facing running systems: SSO, GMS, batch, CERNBox
    "datastore",   // Where data rests: EOS, CTA, CASTOR
    "cluster",     // Pooled compute: the OpenStack cloud, the HTCondor pool, the PaaS
    "network",     // Dedicated connectivity: LHCOPN, LHCONE
    "technology",  // Software products, deployed by many: CVMFS, Rucio, FTS, XRootD
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
    // Infrastructure relations from the Typed Topology base profile. Without
    // them every coupling was an "Integrates", which said nothing about which
    // side holds the other up.
    "Runs on",       // Deployed on top of: a service on a cluster
    "Uses",          // Consumes the capability of another component
    "Backed by",     // Persists its data in a datastore
    "Reached via",   // Traffic travels over this network
    "Catalogued in", // Registered as an entry of the institutional service catalogue
    "Supersedes",    // Replaced something that came before
    "Part of",       // Belongs to a topic hub or a larger unit
    "Contains",      // Mirror of Part of
    "Depends on",    // Presupposes another note's idea
    "About",         // Knowledge relation: this note is about that thing
    "Cites",         // Grounding: note → primary source that anchors its claims
  ],
  // Domain relations are mirrored so both panels read naturally. Following the
  // Typed Topology base profile, knowledge relations and a few directional
  // infrastructure relations have no mirror: targets expose them as inbound edges.
  inverseLabels: {
    "Governs": "Supervised by",
    "Supervised by": "Governs",
    "Advises": "Advised by",
    "Advised by": "Advises",
    "Funds": "Funded by",
    "Funded by": "Funds",
    "Runs": "Run by",
    "Run by": "Runs",
    "Authenticates": "Authenticated by",
    "Authenticated by": "Authenticates",
    "Authorizes": "Authorized by",
    "Authorized by": "Authorizes",
    "Complies with": "Applies to",
    "Applies to": "Complies with",
    "Integrates": "Integrated into",
    "Integrated into": "Integrates",
    "Publishes": "Published by",
    "Published by": "Publishes",
    "Catalogued in": "Catalogues",
    "Catalogues": "Catalogued in",
    "Supersedes": "Superseded by",
    "Superseded by": "Supersedes",
    "Part of": "Contains",
    "Contains": "Part of",
    "Runs on": "Hosts",
    "Hosts": "Runs on",
    "Uses": "Consumed by",
    "Consumed by": "Uses",
  },
  propertyGroups: [
    // Which of the two worlds a node belongs to: the centralized corporate
    // campus or the federated scientific grid.
    {
      id: "scope",
      label: "Operational Scope",
      rule: "scope-valid",
      appliesTo: ["committee", "role", "unit", "policy", "standard", "agreement", "service",
                  "datastore", "cluster", "network", "technology", "platform", "facility",
                  "protocol", "programme", "concept", "decision", "topic"],
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
                  "datastore", "cluster", "network", "technology", "platform", "facility",
                  "protocol", "programme"],
      fields: [
        { source: "status", graphPath: ["status"], type: "string",
          enum: ["current", "superseded", "planned"] },
      ],
    },
    // What a broader CERN graph may preview of this one. A parent site federates only
    // the notes marked open; everything else stays reachable but not previewed.
    {
      id: "visibility",
      label: "Visibility",
      rule: "visibility-valid",
      appliesTo: ["committee", "role", "unit", "policy", "standard", "agreement", "service",
                  "datastore", "cluster", "network", "technology", "platform", "facility",
                  "protocol", "programme", "concept", "decision", "topic"],
      fields: [
        { source: "visibility", graphPath: ["visibility"], type: "string",
          enum: ["open", "internal"] },
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
                 "standard-spec", "peer-reviewed-paper", "policy-document", "press-article"] },
      ],
    },
  ],
  ruleLevels: { "visibility-valid": "error" },
}

export const explorer = {
  title: "IT Governance & Identity Graph (CERN)",
  backTo: { href: "/", label: "portal" },
  // The subjects of compliance: the only types tinted by countEdge-based modes.
  // Governing bodies and the norms themselves keep their type color there.
  knowledgeTypes: ["service", "datastore", "cluster", "network", "platform", "facility"],
  typeColors: {
    committee: "#3b82f6",   // Blue — collegiate bodies
    role: "#d946ef",        // Fuchsia — a post held by a person
    unit: "#a855f7",        // Purple — organisational units
    policy: "#ef4444",      // Red — internal norms
    standard: "#eab308",    // Gold — external frameworks
    agreement: "#d97706",   // Amber — instruments between parties
    service: "#10b981",     // Emerald — running systems
    datastore: "#0ea5e9",   // Sky — where the data rests
    cluster: "#8b5cf6",     // Violet — pooled compute
    network: "#f43f5e",     // Rose — dedicated connectivity
    technology: "#84cc16",  // Lime — software products
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
    datastore: "Datastore",
    cluster: "Compute cluster",
    network: "Network",
    technology: "Technology / Software",
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
              "agreement", "standard", "programme", "service", "technology", "protocol",
              "platform", "datastore", "cluster", "network", "facility", "source"],
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
    "Runs on": "#8b5cf6", "Hosts": "#8b5cf6",
    "Uses": "#84cc16", "Consumed by": "#84cc16",
    "Backed by": "#0ea5e9",
    "Reached via": "#f43f5e",
    "Supersedes": "#f43f5e", "Superseded by": "#f43f5e",
    "Catalogued in": "#22d3ee", "Catalogues": "#22d3ee",
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
        service: 0.7,
        technology: 0.74,
        protocol: 0.78,
        platform: 0.82,
        datastore: 0.86,
        cluster: 0.9,
        network: 0.93,
        facility: 0.96,
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
    // The operational layer on its own terms: what holds up what. Only the
    // infrastructure relations, so the governance plane drops away entirely.
    {
      id: "stack",
      label: "The stack",
      desc: "<b>What holds up what.</b> Only the infrastructure relations — <code>Runs on</code>, <code>Backed by</code>, <code>Uses</code>, <code>Reached via</code> — with the governance plane removed. Read it downwards: a notebook rests on a sync service, which rests on the disk system, which rests on a protocol; the batch pool rests on the private cloud, which rests on a data centre.",
      edges: ["Runs on", "Backed by", "Uses", "Reached via", "Integrates"],
      sizeBy: { indegree: true },
    },
    // How the institution keeps track of its own services: the catalogue, the
    // processes around it, and the systems that feed it.
    {
      id: "service-management",
      label: "Service management",
      desc: "<b>How CERN administers its own services.</b> The ITIL layer that sits over everything: the two-dimensional catalogue (<code>Service Element</code> as the user meets it, <code>Functional Element</code> as somebody maintains it), the processes that route a ticket, and the boards that publish what is broken. Follow the cyan edges to see which systems in this graph have an entry in the institutional catalogue.",
      edges: ["Catalogued in", "Integrates", "Runs"],
      sizeBy: { indegree: true },
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
