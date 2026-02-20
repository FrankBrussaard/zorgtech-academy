// BASICS - Introductie voor nieuwe consultants
export const basicsTracks = [
  {
    id: 1,
    title: "Zorglandschap Nederland",
    description: "Fundament: Hoe werkt de Nederlandse zorg, financiering en belangrijkste spelers",
    icon: "🏥",
    level: "basics",
    modules: [
      { id: "1.1", title: "Hoe werkt de Nederlandse zorg?", duration: 8, tags: ["zorglandschap", "basiskennis", "zorgstelsel"] },
      { id: "1.2", title: "Zorgverzekeringswet & financieringsstromen", duration: 10, tags: ["zvw", "financiering", "verzekeraars"] },
      { id: "1.3", title: "Belangrijkste spelers: ziekenhuizen, huisartsen, VVT", duration: 7, tags: ["ziekenhuizen", "huisartsen", "vvt", "ggz"] },
      { id: "1.4", title: "Toezichthouders: NZa, IGJ, AP", duration: 6, tags: ["nza", "igj", "ap", "toezicht"] }
    ]
  },
  {
    id: 2,
    title: "Bekostiging & DBC's",
    description: "DBC-systematiek, zorgproducten en bekostigingsmodellen in de zorg",
    icon: "💰",
    level: "basics",
    modules: [
      { id: "2.1", title: "Wat is een DBC/DOT? Basisprincipes", duration: 8, tags: ["dbc", "dot", "bekostiging"] },
      { id: "2.2", title: "DBC-systematiek: zorgproducten, zorgactiviteiten", duration: 10, tags: ["zorgproducten", "zorgactiviteiten", "dbc"] },
      { id: "2.3", title: "Grouper logica en afleiding", duration: 9, tags: ["grouper", "afleiding", "dbc"] },
      { id: "2.4", title: "Add-ons, overige producten, IC-bekostiging", duration: 8, tags: ["add-ons", "ic", "bekostiging"] },
      { id: "2.5", title: "GGZ: DBC-GGZ vs ZPM", duration: 10, tags: ["ggz", "zpm", "dbc-ggz"] },
      { id: "2.6", title: "Huisartsenzorg: bekostiging en ketenzorg", duration: 7, tags: ["huisarts", "ketenzorg", "bekostiging"] }
    ]
  },
  {
    id: 3,
    title: "Zorginfrastructuur & Afsprakenstelsels",
    description: "LSP, Twiin, VZVZ, Mitz en andere nationale zorgnetwerken",
    icon: "🔗",
    level: "basics",
    modules: [
      { id: "3.1", title: "Overzicht: LSP, Twiin, VZVZ, Mitz", duration: 8, tags: ["infrastructuur", "lsp", "twiin", "vzvz", "mitz"] },
      { id: "3.2", title: "LSP: Landelijk Schakelpunt in detail", duration: 10, tags: ["lsp", "vzvz", "uitwisseling"] },
      { id: "3.3", title: "Twiin: Vertrouwensnetwerk en usecases", duration: 9, tags: ["twiin", "vertrouwensnetwerk", "uitwisseling"] },
      { id: "3.4", title: "Mitz: Toestemmingsvoorziening", duration: 7, tags: ["mitz", "toestemming", "consent"] },
      { id: "3.5", title: "AORTA: Basisinfrastructuur", duration: 8, tags: ["aorta", "infrastructuur", "nictiz"] },
      { id: "3.6", title: "Koppeltaal (GGZ), MedMij (PGO's)", duration: 9, tags: ["koppeltaal", "medmij", "pgo", "ggz"] },
      { id: "3.7", title: "Zorgadresboek, UZI, BSN in de zorg", duration: 6, tags: ["zorgadresboek", "uzi", "bsn", "identificatie"] }
    ]
  },
  {
    id: 4,
    title: "Interoperabiliteit & Standaarden",
    description: "HL7, FHIR, terminologie en andere technische standaarden",
    icon: "📊",
    level: "basics",
    modules: [
      { id: "4.1", title: "HL7v2: De legacy standaard", duration: 8, tags: ["hl7v2", "standaarden", "integratie"] },
      { id: "4.2", title: "HL7 FHIR: Moderne zorgdata-uitwisseling", duration: 10, tags: ["fhir", "hl7", "api", "standaarden"] },
      { id: "4.3", title: "FHIR in Nederland: Nictiz, informatiestandaarden", duration: 9, tags: ["fhir", "nictiz", "nederland"] },
      { id: "4.4", title: "Zibs (Zorginformatiebouwstenen)", duration: 8, tags: ["zibs", "informatiestandaarden", "nictiz"] },
      { id: "4.5", title: "SNOMED CT, LOINC, ICD-10: Terminologie", duration: 10, tags: ["snomed", "loinc", "icd-10", "terminologie"] },
      { id: "4.6", title: "XDS/XCA, DICOM: Beelduitwisseling", duration: 9, tags: ["xds", "xca", "dicom", "beelduitwisseling"] },
      { id: "4.7", title: "CDA vs FHIR Documents", duration: 7, tags: ["cda", "fhir", "documenten"] }
    ]
  },
  {
    id: 5,
    title: "Wet- & Regelgeving",
    description: "AVG, NEN-normen, Wegiz en andere juridische kaders",
    icon: "⚖️",
    level: "basics",
    modules: [
      { id: "5.1", title: "AVG/GDPR in de zorg", duration: 10, tags: ["avg", "gdpr", "privacy"] },
      { id: "5.2", title: "WGBO: Wet op de Geneeskundige Behandelingsovereenkomst", duration: 8, tags: ["wgbo", "behandelovereenkomst", "patiëntrechten"] },
      { id: "5.3", title: "Wabvpz: Elektronische gegevensuitwisseling", duration: 7, tags: ["wabvpz", "uitwisseling", "wetgeving"] },
      { id: "5.4", title: "NEN 7510, 7512, 7513: Informatiebeveiliging", duration: 10, tags: ["nen7510", "nen7512", "nen7513", "beveiliging"] },
      { id: "5.5", title: "Wegiz: Wet elektronische gegevensuitwisseling", duration: 9, tags: ["wegiz", "uitwisseling", "wetgeving"] },
      { id: "5.6", title: "NIS2 en cybersecurity in de zorg", duration: 8, tags: ["nis2", "cybersecurity", "beveiliging"] },
      { id: "5.7", title: "Medische hulpmiddelen: MDR en software als medical device", duration: 10, tags: ["mdr", "samd", "medische hulpmiddelen", "ce"] }
    ]
  },
  {
    id: 6,
    title: "AI & Innovatie in de Zorg",
    description: "AI Act, klinische beslisondersteuning en verantwoorde AI",
    icon: "🤖",
    level: "basics",
    modules: [
      { id: "6.1", title: "AI Act: Wat betekent dit voor zorgtechnologie?", duration: 10, tags: ["ai-act", "eu", "regulering"] },
      { id: "6.2", title: "AI classificatie: hoog-risico AI in de zorg", duration: 8, tags: ["ai-act", "classificatie", "risico"] },
      { id: "6.3", title: "Klinische beslisondersteuning (CDSS)", duration: 9, tags: ["cdss", "beslisondersteuning", "ai"] },
      { id: "6.4", title: "LLMs en generatieve AI in de zorg", duration: 10, tags: ["llm", "generatieve-ai", "chatgpt"] },
      { id: "6.5", title: "Validatie en certificering van AI-systemen", duration: 9, tags: ["validatie", "certificering", "ai"] },
      { id: "6.6", title: "Ethische kaders en responsible AI", duration: 8, tags: ["ethiek", "responsible-ai", "bias"] }
    ]
  }
]

// EXPERT - Diepgaande kennis voor Solution Architects
export const expertTracks = [
  {
    id: 101,
    title: "Twiin Deep Dive",
    description: "Technische architectuur, implementatie en integratie van het Twiin vertrouwensnetwerk",
    icon: "🔬",
    level: "expert",
    modules: [
      { id: "101.1", title: "Twiin Architectuur & Governance", duration: 15, tags: ["twiin", "architectuur", "governance", "expert"] },
      { id: "101.2", title: "Twiin Afsprakenstelsel: Juridisch & Organisatorisch", duration: 12, tags: ["twiin", "afsprakenstelsel", "juridisch", "expert"] },
      { id: "101.3", title: "Technische Componenten: GtK, Adressering, Lokalisatie", duration: 18, tags: ["twiin", "gtk", "lokalisatie", "technisch", "expert"] },
      { id: "101.4", title: "XDS/XCA Implementatie in Twiin", duration: 20, tags: ["twiin", "xds", "xca", "ihe", "expert"] },
      { id: "101.5", title: "Beelduitwisseling: XDS-I en DICOM in Twiin", duration: 18, tags: ["twiin", "xds-i", "dicom", "beelduitwisseling", "expert"] },
      { id: "101.6", title: "Toestemming & Autorisatie in Twiin", duration: 15, tags: ["twiin", "toestemming", "mitz", "autorisatie", "expert"] },
      { id: "101.7", title: "Certificering & Kwalificatie voor Twiin", duration: 12, tags: ["twiin", "certificering", "kwalificatie", "aansluiting", "expert"] },
      { id: "101.8", title: "Twiin Implementatietraject: Van Ontwerp tot Productie", duration: 20, tags: ["twiin", "implementatie", "projectaanpak", "expert"] }
    ]
  },
  {
    id: 102,
    title: "Databricks in de Zorg",
    description: "Deep dive in Databricks voor healthcare analytics, data lakehouse en ML/AI in zorginstellingen",
    icon: "🧱",
    level: "expert",
    modules: [
      { id: "102.1", title: "Databricks Fundamentals voor de Zorg", duration: 18, tags: ["databricks", "lakehouse", "zorg", "data-platform", "expert"] },
      { id: "102.2", title: "Data Lakehouse Architectuur in Healthcare", duration: 20, tags: ["databricks", "lakehouse", "architectuur", "delta-lake", "expert"] },
      { id: "102.3", title: "Zorgdata Ingestie: HL7, FHIR en DICOM naar Delta Lake", duration: 22, tags: ["databricks", "hl7", "fhir", "dicom", "ingestie", "expert"] },
      { id: "102.4", title: "Unity Catalog: Governance en Compliance voor Zorgdata", duration: 18, tags: ["databricks", "unity-catalog", "governance", "avg", "expert"] },
      { id: "102.5", title: "Healthcare Analytics met Databricks SQL", duration: 16, tags: ["databricks", "sql", "analytics", "dashboards", "expert"] },
      { id: "102.6", title: "Machine Learning voor Zorgvoorspellingen", duration: 20, tags: ["databricks", "mlflow", "machine-learning", "predictive", "expert"] },
      { id: "102.7", title: "Real-time Streaming voor Zorgmonitoring", duration: 18, tags: ["databricks", "streaming", "spark", "real-time", "expert"] },
      { id: "102.8", title: "Databricks Implementatie in Zorginstellingen", duration: 20, tags: ["databricks", "implementatie", "azure", "aws", "expert"] }
    ]
  },
  {
    id: 103,
    title: "Microsoft Fabric in de Zorg",
    description: "Deep dive in Microsoft Fabric voor unified analytics, OneLake en AI in zorginstellingen",
    icon: "🪡",
    level: "expert",
    modules: [
      { id: "103.1", title: "Microsoft Fabric Fundamentals voor de Zorg", duration: 18, tags: ["fabric", "microsoft", "zorg", "data-platform", "expert"] },
      { id: "103.2", title: "OneLake en Lakehouse Architectuur", duration: 20, tags: ["fabric", "onelake", "lakehouse", "delta", "expert"] },
      { id: "103.3", title: "Data Factory voor Zorgdata Integratie", duration: 18, tags: ["fabric", "data-factory", "pipelines", "integratie", "expert"] },
      { id: "103.4", title: "Healthcare Data Solutions met FHIR en DICOM", duration: 22, tags: ["fabric", "fhir", "dicom", "healthcare-apis", "expert"] },
      { id: "103.5", title: "Power BI in Fabric voor Zorginzichten", duration: 16, tags: ["fabric", "power-bi", "visualisatie", "dashboards", "expert"] },
      { id: "103.6", title: "Real-Time Intelligence voor Patiëntmonitoring", duration: 18, tags: ["fabric", "real-time", "eventhouse", "kql", "expert"] },
      { id: "103.7", title: "Data Governance en Purview Integratie", duration: 18, tags: ["fabric", "purview", "governance", "compliance", "expert"] },
      { id: "103.8", title: "Fabric Implementatie en Microsoft Cloud for Healthcare", duration: 20, tags: ["fabric", "implementatie", "cloud-healthcare", "expert"] }
    ]
  },
  {
    id: 104,
    title: "SAS & SAS on Azure in de Zorg",
    description: "Deep dive in SAS Viya, SAS on Azure en de migratie naar cloud voor zorginstellingen",
    icon: "📊",
    level: "expert",
    modules: [
      { id: "104.1", title: "SAS Platform Fundamentals voor de Zorg", duration: 18, tags: ["sas", "viya", "zorg", "data-platform", "expert"] },
      { id: "104.2", title: "SAS Viya Architectuur en Cloud Opties", duration: 20, tags: ["sas", "viya", "architectuur", "cloud", "expert"] },
      { id: "104.3", title: "SAS on Azure: Deployment en Integratie", duration: 22, tags: ["sas", "azure", "deployment", "integratie", "expert"] },
      { id: "104.4", title: "Healthcare Analytics met SAS", duration: 18, tags: ["sas", "analytics", "healthcare", "statistiek", "expert"] },
      { id: "104.5", title: "SAS Data Management voor Zorgdata", duration: 16, tags: ["sas", "data-management", "etl", "kwaliteit", "expert"] },
      { id: "104.6", title: "Machine Learning en AI met SAS Viya", duration: 20, tags: ["sas", "machine-learning", "ai", "model-manager", "expert"] },
      { id: "104.7", title: "SAS Visual Analytics voor Zorginzichten", duration: 18, tags: ["sas", "visual-analytics", "dashboards", "rapportage", "expert"] },
      { id: "104.8", title: "Migratie naar SAS on Azure: Strategie en Uitvoering", duration: 20, tags: ["sas", "azure", "migratie", "hybrid", "expert"] }
    ]
  },
  {
    id: 105,
    title: "Platform Vergelijking: Databricks vs Fabric vs SAS",
    description: "Strategische vergelijking van data platforms voor zorginstellingen: capabilities, kosten en use cases",
    icon: "⚖️",
    level: "expert",
    modules: [
      { id: "105.1", title: "Data Platform Landschap in de Zorg", duration: 18, tags: ["vergelijking", "platforms", "zorg", "strategie", "expert"] },
      { id: "105.2", title: "Architectuurvergelijking: Lakehouse vs SAS", duration: 22, tags: ["vergelijking", "architectuur", "lakehouse", "sas", "expert"] },
      { id: "105.3", title: "Healthcare Data Capabilities Vergeleken", duration: 20, tags: ["vergelijking", "fhir", "dicom", "healthcare", "expert"] },
      { id: "105.4", title: "Analytics en BI: Databricks SQL vs Power BI vs SAS VA", duration: 18, tags: ["vergelijking", "analytics", "bi", "visualisatie", "expert"] },
      { id: "105.5", title: "Machine Learning Platforms Vergeleken", duration: 20, tags: ["vergelijking", "ml", "mlflow", "model-manager", "expert"] },
      { id: "105.6", title: "Governance en Compliance Vergelijking", duration: 18, tags: ["vergelijking", "governance", "avg", "compliance", "expert"] },
      { id: "105.7", title: "TCO en Licensing Modellen", duration: 16, tags: ["vergelijking", "tco", "kosten", "licensing", "expert"] },
      { id: "105.8", title: "Platform Selectie Framework voor Zorginstellingen", duration: 20, tags: ["vergelijking", "selectie", "besluitvorming", "strategie", "expert"] }
    ]
  }
]

// Gecombineerde tracks voor backwards compatibility
export const tracks = [...basicsTracks, ...expertTracks]

export const getModule = (moduleId) => {
  for (const track of tracks) {
    const module = track.modules.find(m => m.id === moduleId)
    if (module) {
      return { ...module, track }
    }
  }
  return null
}

export const getTrack = (trackId) => {
  return tracks.find(t => t.id === parseInt(trackId))
}

export const getBasicsTracks = () => basicsTracks
export const getExpertTracks = () => expertTracks
