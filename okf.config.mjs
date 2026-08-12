// Configuración OKF para la plantilla de ejemplo CERN IT Governance
// Este fichero define el vocabulario del dominio (nodos, colores, relaciones y modos de exploración).

export const branding = {
  site: "CERN IT Governance & Identity",
  bundleTitle: "Grafo de Gobernanza de TI y Arquitectura de Identidad del CERN",
  indexTitle: "CERN IT Governance · Knowledge Graph",
}

export const profile = {
  types: [
    "comite",      // Órganos de gobierno supremo, auditoría y finanzas
    "direccion",   // Direcciones sectoriales y roles ejecutivos (CIO)
    "servicio",    // Servicios informáticos e infraestructuras operativas (Keycloak, GMS, WLCG IAM)
    "protocolo",   // Protocolos y especificaciones técnicas (OIDC, SAML, JWT, OAuth2)
    "politica",    // Circulares operativas y normativas institucionales (OC5, Open Science)
    "estandar",    // Marcos de auditoría, seguridad y modelos (CIS v8, Zero Trust)
    "plataforma",  // Repositorios de datos y publicaciones (InvenioRDM, Zenodo)
  ],
  edgeLabels: [
    "Gobierna",    // Relación directiva o de supervisión
    "Ejecuta",     // Implementación operativa
    "Autentica",   // Validación de identidad
    "Autoriza",    // Control de accesos / roles / capacidades
    "Cumple",      // Adhesión a norma o política
    "Integra",     // Acoplamiento de software o infraestructura
    "Publica",     // Difusión de datos o código
  ],
  inverseLabels: {
    "Gobierna": "Supervisado por",
    "Ejecuta": "Ejecutado por",
    "Autentica": "Autenticado por",
    "Autoriza": "Autorizado por",
    "Cumple": "Aplica a",
    "Integra": "Integrado en",
    "Publica": "Publicado por",
  },
  propertyGroups: [
    {
      id: "ambito",
      label: "Ámbito Operativo",
      rule: "ambito-valido",
      appliesTo: ["comite", "direccion", "servicio", "protocolo", "politica", "estandar", "plataforma"],
      fields: [
        { source: "entorno", graphPath: ["entorno"], type: "string", enum: ["corporativo", "cientifico-grid", "transversal"] },
      ],
    },
  ],
  ruleLevels: {},
}

export const explorer = {
  title: "Grafo de Gobernanza de TI & Identidad (CERN)",
  backTo: { href: "/", label: "portal" },
  knowledgeTypes: ["comite", "direccion", "servicio", "protocolo", "politica", "estandar", "plataforma"],
  typeColors: {
    comite: "#3b82f6",     // Azul cian
    direccion: "#a855f7",  // Púrpura
    servicio: "#10b981",   // Verde esmeralda
    protocolo: "#f97316",  // Naranja
    politica: "#ef4444",   // Rojo
    estandar: "#eab308",   // Amarillo oro
    plataforma: "#14b8a6", // Teal
  },
  typeLabels: {
    comite: "Comité de Gobierno",
    direccion: "Dirección / Ejecutivo",
    servicio: "Servicio / Sistema",
    protocolo: "Protocolo / Especificación",
    politica: "Política / Circular",
    estandar: "Estándar / Marco",
    plataforma: "Plataforma de Datos",
  },
  typeOrder: ["comite", "direccion", "servicio", "protocolo", "politica", "estandar", "plataforma"],
  tooltip: {
    servicio: "{indeg|integración|integraciones}",
    protocolo: "{indeg|servicio que lo usa|servicios que lo usan}",
    "*": "{indeg|conexión entrante|conexiones entrantes}",
  },
  layout: {
    charge: -40,
    gravity: 0.02,
    link: {
      "*": { distance: 35, strength: 0.15 },
      Gobierna: { distance: 45, strength: 0.2 },
      Autentica: { distance: 30, strength: 0.25 },
    },
    radial: {
      strength: 0.85,
      byType: {
        comite: 0,
        direccion: 0.2,
        servicio: 0.5,
        protocolo: 0.7,
        politica: 0.4,
        estandar: 0.6,
        plataforma: 0.85,
      },
    },
  },
  modes: [
    {
      id: "full",
      label: "Vista completa",
      desc: "<b>Grafo global de arquitectura de TI en el CERN.</b> Muestra la interacción completa entre comités de gobierno, direcciones sectoriales, infraestructura de identidad, seguridad y la red WLCG IAM.",
      edges: "*",
    },
    {
      id: "identidad",
      label: "Identidad & Accesos (SSO / OIDC)",
      desc: "<b>Infraestructura de Autenticación y Autorización (IAA).</b> Filtra el grafo para mostrar únicamente la topología de Keycloak, OIDC, GMS y WLCG IAM.",
      edges: ["Autentica", "Autoriza", "Integra"],
      sizeBy: { indegree: true },
    },
    {
      id: "gobernanza-seguridad",
      label: "Gobernanza & Ciberseguridad",
      desc: "<b>Plano de control ejecutivo y normativo.</b> Muestra cómo los comités, el CIO y la circular OC5 supervisan los estándares CIS v8 y Zero Trust.",
      edges: ["Gobierna", "Ejecuta", "Cumple"],
      sizeBy: { indegree: true },
    },
  ],
}
