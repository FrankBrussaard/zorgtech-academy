export const glossary = {
  terms: [
    {
      term: "LSP",
      fullName: "Landelijk Schakelpunt",
      definition: "Landelijke infrastructuur voor het uitwisselen van medische gegevens tussen zorgverleners. Werkt als verwijsindex, niet als centrale database.",
      category: "infrastructuur",
      relatedTerms: ["VZVZ", "AORTA", "Twiin"]
    },
    {
      term: "DBC",
      fullName: "Diagnose Behandel Combinatie",
      definition: "Een DBC beschrijft het geheel van activiteiten en verrichtingen van een zorgaanbieder voortvloeiend uit de zorgvraag van een patiënt. Basis voor bekostiging in ziekenhuizen.",
      category: "bekostiging",
      relatedTerms: ["DOT", "Zorgproduct", "Grouper"]
    },
    {
      term: "DOT",
      fullName: "DBC's Op weg naar Transparantie",
      definition: "Herontwerp van de DBC-systematiek met als doel meer transparantie en minder administratieve lasten. Zorgproducten worden afgeleid uit registraties.",
      category: "bekostiging",
      relatedTerms: ["DBC", "Grouper"]
    },
    {
      term: "Zvw",
      fullName: "Zorgverzekeringswet",
      definition: "De wet die de verplichte basisverzekering voor curatieve zorg regelt. Elke Nederlander moet verzekerd zijn.",
      category: "wetgeving",
      relatedTerms: ["Wlz", "Wmo"]
    },
    {
      term: "Wlz",
      fullName: "Wet langdurige zorg",
      definition: "Wet voor mensen die blijvend 24-uurs zorg of toezicht nodig hebben, zoals verpleeghuisbewoners.",
      category: "wetgeving",
      relatedTerms: ["Zvw", "Wmo"]
    },
    {
      term: "Wmo",
      fullName: "Wet maatschappelijke ondersteuning",
      definition: "Wet die gemeenten verantwoordelijk maakt voor ondersteuning van burgers bij zelfredzaamheid en participatie.",
      category: "wetgeving",
      relatedTerms: ["Zvw", "Wlz"]
    },
    {
      term: "FHIR",
      fullName: "Fast Healthcare Interoperability Resources",
      definition: "Moderne HL7-standaard voor uitwisseling van zorginformatie via web-API's (REST). Gebaseerd op resources zoals Patient, Observation, Medication.",
      category: "standaarden",
      relatedTerms: ["HL7", "Zibs"]
    },
    {
      term: "Zibs",
      fullName: "Zorginformatiebouwstenen",
      definition: "Gestandaardiseerde definities van zorginformatie (bijv. bloeddruk, allergie). Beheerd door Nictiz. Basis voor informatiestandaarden.",
      category: "standaarden",
      relatedTerms: ["FHIR", "Nictiz"]
    },
    {
      term: "NZa",
      fullName: "Nederlandse Zorgautoriteit",
      definition: "Toezichthouder die waakt over markten en bekostiging in de zorg. Stelt tarieven vast en houdt toezicht op verzekeraars.",
      category: "toezicht",
      relatedTerms: ["IGJ", "AP"]
    },
    {
      term: "IGJ",
      fullName: "Inspectie Gezondheidszorg en Jeugd",
      definition: "Toezichthouder die waakt over kwaliteit en veiligheid van zorg. Inspecteert zorgaanbieders en onderzoekt incidenten.",
      category: "toezicht",
      relatedTerms: ["NZa", "AP"]
    },
    {
      term: "AP",
      fullName: "Autoriteit Persoonsgegevens",
      definition: "Toezichthouder op privacy en gegevensbescherming. Handhaaft de AVG en onderzoekt datalekken.",
      category: "toezicht",
      relatedTerms: ["AVG", "NZa", "IGJ"]
    },
    {
      term: "AVG",
      fullName: "Algemene Verordening Gegevensbescherming",
      definition: "Europese privacywetgeving (GDPR) die regelt hoe persoonsgegevens verwerkt mogen worden. Strenge regels voor gezondheidsgegevens.",
      category: "wetgeving",
      relatedTerms: ["AP", "NEN 7510"]
    },
    {
      term: "UZI",
      fullName: "Unieke Zorgverlener Identificatie",
      definition: "Systeem voor identificatie en authenticatie van zorgverleners. UZI-pas is een smartcard voor veilig inloggen.",
      category: "infrastructuur",
      relatedTerms: ["BIG-register", "Zorgadresboek"]
    },
    {
      term: "VZVZ",
      fullName: "Vereniging van Zorgaanbieders voor Zorgcommunicatie",
      definition: "Organisatie die het LSP beheert en werkt aan Mitz. Coöperatie van zorgaanbieders.",
      category: "infrastructuur",
      relatedTerms: ["LSP", "Mitz"]
    },
    {
      term: "Twiin",
      fullName: "Toegang tot en Werken met Informatie in het zorgInformatie Netwerk",
      definition: "Vertrouwensnetwerk voor uitwisseling van zorginformatie. Maakt beelduitwisseling tussen ziekenhuizen mogelijk.",
      category: "infrastructuur",
      relatedTerms: ["LSP", "XDS"]
    },
    {
      term: "Mitz",
      fullName: "Mitz Toestemmingsvoorziening",
      definition: "Nationale voorziening waar burgers hun toestemmingen voor gegevensuitwisseling kunnen beheren.",
      category: "infrastructuur",
      relatedTerms: ["VZVZ", "LSP"]
    },
    {
      term: "NEN 7510",
      fullName: "NEN 7510 - Informatiebeveiliging in de zorg",
      definition: "Nederlandse norm voor informatiebeveiliging specifiek voor de zorgsector. Basis voor veel beveiligingseisen.",
      category: "standaarden",
      relatedTerms: ["NEN 7512", "NEN 7513", "AVG"]
    },
    {
      term: "Grouper",
      fullName: "DBC Grouper",
      definition: "Software die op basis van geregistreerde zorgactiviteiten automatisch het juiste zorgproduct afleidt.",
      category: "bekostiging",
      relatedTerms: ["DBC", "DOT", "Zorgproduct"]
    },
    {
      term: "HL7",
      fullName: "Health Level Seven International",
      definition: "Internationale standaardorganisatie voor zorginformatie-uitwisseling. Bekende standaarden: HL7v2, HL7 FHIR, HL7 CDA.",
      category: "standaarden",
      relatedTerms: ["FHIR", "CDA"]
    },
    {
      term: "Nictiz",
      fullName: "Nationaal ICT Instituut in de Zorg",
      definition: "Kennisorganisatie voor digitale informatie-uitwisseling in de zorg. Beheert standaarden en architecturen.",
      category: "infrastructuur",
      relatedTerms: ["AORTA", "Zibs", "FHIR"]
    },
    {
      term: "PGO",
      fullName: "Persoonlijke Gezondheidsomgeving",
      definition: "App of platform waar burgers hun eigen gezondheidsgegevens kunnen verzamelen en beheren. Via MedMij gekoppeld aan zorgaanbieders.",
      category: "infrastructuur",
      relatedTerms: ["MedMij"]
    },
    {
      term: "VVT",
      fullName: "Verpleging, Verzorging en Thuiszorg",
      definition: "Sector die verpleeghuizen, verzorgingshuizen en thuiszorgorganisaties omvat.",
      category: "zorglandschap",
      relatedTerms: ["Wlz", "Wijkverpleging"]
    },
    {
      term: "UMC",
      fullName: "Universitair Medisch Centrum",
      definition: "Academisch ziekenhuis verbonden aan een universiteit. Nederland heeft 7 UMC's die complexe zorg leveren en onderzoek doen.",
      category: "zorglandschap",
      relatedTerms: ["STZ"]
    }
  ]
}

export const getGlossaryTerm = (term) => {
  return glossary.terms.find(t => t.term.toLowerCase() === term.toLowerCase())
}

export const getGlossaryByCategory = (category) => {
  return glossary.terms.filter(t => t.category === category)
}
