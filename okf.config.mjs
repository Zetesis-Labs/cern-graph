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
  ],
  edgeLabels: [
    "Governs",       // Governing or supervisory relationship
    "Runs",          // Operational implementation
    "Authenticates", // Identity validation
    "Authorizes",    // Access control / roles / capabilities
    "Complies with", // Adherence to a standard or policy
    "Integrates",    // Software or infrastructure coupling
    "Publishes",     // Data or code dissemination
  ],
  inverseLabels: {
    "Governs": "Supervised by",
    "Runs": "Run by",
    "Authenticates": "Authenticated by",
    "Authorizes": "Authorized by",
    "Complies with": "Applies to",
    "Integrates": "Integrated into",
    "Publishes": "Published by",
  },
  propertyGroups: [
    {
      id: "ambito",
      label: "Operational Scope",
      rule: "ambito-valido",
      appliesTo: ["committee", "directorate", "service", "protocol", "policy", "standard", "platform"],
      fields: [
        { source: "entorno", graphPath: ["entorno"], type: "string", enum: ["corporate", "scientific-grid", "cross-cutting"] },
      ],
    },
  ],
  ruleLevels: {},
}

export const explorer = {
  title: "IT Governance & Identity Graph (CERN)",
  backTo: { href: "/", label: "portal" },
  knowledgeTypes: ["committee", "directorate", "service", "protocol", "policy", "standard", "platform"],
  typeColors: {
    committee: "#3b82f6",   // Cyan blue
    directorate: "#a855f7", // Purple
    service: "#10b981",     // Emerald green
    protocol: "#f97316",    // Orange
    policy: "#ef4444",      // Red
    standard: "#eab308",    // Gold yellow
    platform: "#14b8a6",    // Teal
  },
  typeLabels: {
    committee: "Governing Committee",
    directorate: "Directorate / Executive",
    service: "Service / System",
    protocol: "Protocol / Specification",
    policy: "Policy / Circular",
    standard: "Standard / Framework",
    platform: "Data Platform",
  },
  typeOrder: ["committee", "directorate", "service", "protocol", "policy", "standard", "platform"],
  tooltip: {
    service: "{indeg|integration|integrations}",
    protocol: "{indeg|service using it|services using it}",
    "*": "{indeg|incoming connection|incoming connections}",
  },
  layout: {
    charge: -40,
    gravity: 0.02,
    link: {
      "*": { distance: 35, strength: 0.15 },
      Governs: { distance: 45, strength: 0.2 },
      Authenticates: { distance: 30, strength: 0.25 },
    },
    radial: {
      strength: 0.85,
      byType: {
        committee: 0,
        directorate: 0.2,
        service: 0.5,
        protocol: 0.7,
        policy: 0.4,
        standard: 0.6,
        platform: 0.85,
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
  ],
}
