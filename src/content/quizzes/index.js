export const quizzes = {
  "1.1": {
    moduleId: "1.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke wet regelt de verplichte basisverzekering in Nederland?",
        options: [
          { id: "a", text: "Wet langdurige zorg (Wlz)" },
          { id: "b", text: "Zorgverzekeringswet (Zvw)" },
          { id: "c", text: "Wet maatschappelijke ondersteuning (Wmo)" },
          { id: "d", text: "Wet publieke gezondheid (Wpg)" }
        ],
        correct: "b",
        explanation: "De Zorgverzekeringswet (Zvw) regelt de verplichte basisverzekering voor curatieve zorg. De Wlz is voor langdurige zorg, de Wmo voor gemeentelijke ondersteuning."
      },
      {
        id: "q2",
        type: "true-false",
        question: "De meeste Nederlandse ziekenhuizen zijn overheidsinstelling.",
        correct: false,
        explanation: "De meeste ziekenhuizen in Nederland zijn private stichtingen zonder winstoogmerk. Ze zijn niet van de overheid, maar opereren wel binnen strenge overheidsregulering."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Welk type zorg valt NIET onder de Zorgverzekeringswet?",
        options: [
          { id: "a", text: "Huisartsenzorg" },
          { id: "b", text: "Ziekenhuiszorg" },
          { id: "c", text: "Verpleeghuiszorg voor ouderen" },
          { id: "d", text: "Apotheekzorg" }
        ],
        correct: "c",
        explanation: "Verpleeghuiszorg voor ouderen die blijvend 24-uurs zorg nodig hebben valt onder de Wet langdurige zorg (Wlz), niet onder de Zvw."
      }
    ]
  },

  "1.2": {
    moduleId: "1.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is het doel van risicoverevening in de zorg?",
        options: [
          { id: "a", text: "Het verlagen van de zorgkosten" },
          { id: "b", text: "Voorkomen dat verzekeraars alleen gezonde mensen willen" },
          { id: "c", text: "Het bepalen van het eigen risico" },
          { id: "d", text: "Het reguleren van zorginstellingen" }
        ],
        correct: "b",
        explanation: "Risicoverevening zorgt ervoor dat verzekeraars met relatief zieke verzekerden financiële compensatie krijgen. Zo blijft het aantrekkelijk om ook mensen met hogere zorgkosten te verzekeren."
      },
      {
        id: "q2",
        type: "true-false",
        question: "Niet-gecontracteerde zorg wordt altijd volledig vergoed door de zorgverzekeraar.",
        correct: false,
        explanation: "Niet-gecontracteerde zorg wordt vaak maar gedeeltelijk vergoed (vaak 70-80%). Dit is een prikkel voor verzekerden om naar gecontracteerde zorgaanbieders te gaan."
      }
    ]
  },

  "1.3": {
    moduleId: "1.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Hoeveel Universitair Medische Centra (UMC's) heeft Nederland?",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "7" },
          { id: "c", text: "10" },
          { id: "d", text: "12" }
        ],
        correct: "b",
        explanation: "Nederland heeft 7 UMC's, verbonden aan de universiteiten in Amsterdam (2x), Rotterdam, Utrecht, Leiden, Groningen, Nijmegen en Maastricht."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat betekent VVT in de zorgsector?",
        options: [
          { id: "a", text: "Vrijwillige Verpleging en Therapie" },
          { id: "b", text: "Verpleging, Verzorging en Thuiszorg" },
          { id: "c", text: "Verbeterde Verpleging en Toezicht" },
          { id: "d", text: "Versnelde Verwijzing en Triage" }
        ],
        correct: "b",
        explanation: "VVT staat voor Verpleging, Verzorging en Thuiszorg - een grote sector die onder andere verpleeghuizen en thuiszorgorganisaties omvat."
      }
    ]
  },

  "1.4": {
    moduleId: "1.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke toezichthouder is verantwoordelijk voor de DBC-tarieven?",
        options: [
          { id: "a", text: "IGJ" },
          { id: "b", text: "NZa" },
          { id: "c", text: "Autoriteit Persoonsgegevens" },
          { id: "d", text: "Zorginstituut Nederland" }
        ],
        correct: "b",
        explanation: "De Nederlandse Zorgautoriteit (NZa) stelt tarieven en prestatiebeschrijvingen vast, waaronder de DBC-systematiek."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "De IGJ houdt primair toezicht op:",
        options: [
          { id: "a", text: "Zorgverzekeraars" },
          { id: "b", text: "Kwaliteit en veiligheid van zorg" },
          { id: "c", text: "Privacy en gegevensverwerking" },
          { id: "d", text: "Zorgkosten" }
        ],
        correct: "b",
        explanation: "De Inspectie Gezondheidszorg en Jeugd (IGJ) richt zich op kwaliteit en veiligheid van zorg, inspecteert zorgaanbieders en onderzoekt incidenten."
      }
    ]
  },

  "3.1": {
    moduleId: "3.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke organisatie beheert het LSP?",
        options: [
          { id: "a", text: "Nictiz" },
          { id: "b", text: "VZVZ" },
          { id: "c", text: "VWS" },
          { id: "d", text: "NZa" }
        ],
        correct: "b",
        explanation: "VZVZ (Vereniging van Zorgaanbieders voor Zorgcommunicatie) beheert het LSP. Nictiz is verantwoordelijk voor standaarden."
      },
      {
        id: "q2",
        type: "true-false",
        question: "Mitz is de nationale voorziening waar burgers hun toestemmingen kunnen beheren.",
        correct: true,
        explanation: "Mitz is inderdaad de toestemmingsvoorziening waar burgers kunnen aangeven welke zorgverleners hun gegevens mogen inzien."
      }
    ]
  },

  "3.2": {
    moduleId: "3.2",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "Het LSP is een centrale database met alle medische gegevens van Nederlanders.",
        correct: false,
        explanation: "Het LSP is geen centrale database maar een verwijsindex. Het weet welke zorgverlener gegevens over welke patiënt heeft, maar slaat zelf geen medische gegevens op."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Op welk principe werkt het LSP qua toestemming?",
        options: [
          { id: "a", text: "Opt-out (standaard aan, tenzij bezwaar)" },
          { id: "b", text: "Opt-in (toestemming vereist)" },
          { id: "c", text: "Geen toestemming nodig" },
          { id: "d", text: "Automatisch bij inschrijving huisarts" }
        ],
        correct: "b",
        explanation: "Het LSP werkt op basis van opt-in: patiënten moeten actief toestemming geven voordat hun gegevens via het LSP kunnen worden gedeeld."
      }
    ]
  },

  "3.3": {
    moduleId: "3.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is een belangrijke usecase van Twiin?",
        options: [
          { id: "a", text: "Recepten versturen" },
          { id: "b", text: "Beelduitwisseling tussen ziekenhuizen" },
          { id: "c", text: "Vaccinatieregistratie" },
          { id: "d", text: "Zorgverzekering afsluiten" }
        ],
        correct: "b",
        explanation: "Beelduitwisseling (radiologische beelden) tussen ziekenhuizen is een van de belangrijkste usecases van Twiin."
      }
    ]
  },

  "3.4": {
    moduleId: "3.4",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "Met Mitz kunnen burgers zien wie hun medische gegevens heeft opgevraagd.",
        correct: true,
        explanation: "Mitz bevat logging-functionaliteit waarmee burgers kunnen zien wie wanneer welke gegevens heeft ingezien."
      }
    ]
  },

  "3.5": {
    moduleId: "3.5",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "AORTA is een operationeel zorgsysteem waar zorgverleners direct mee werken.",
        correct: false,
        explanation: "AORTA is een referentiearchitectuur (blauwdruk), geen operationeel systeem. Het beschrijft hoe zorgnetwerken moeten werken."
      }
    ]
  },

  "3.6": {
    moduleId: "3.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is een PGO?",
        options: [
          { id: "a", text: "Patiënt Gerichte Organisatie" },
          { id: "b", text: "Persoonlijke Gezondheidsomgeving" },
          { id: "c", text: "Praktijk Gegevens Overdracht" },
          { id: "d", text: "Primaire Gezondheidszorg Ondersteuning" }
        ],
        correct: "b",
        explanation: "PGO staat voor Persoonlijke Gezondheidsomgeving - een app waar burgers hun eigen gezondheidsgegevens kunnen verzamelen."
      }
    ]
  },

  "3.7": {
    moduleId: "3.7",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Waarvoor dient de UZI-pas?",
        options: [
          { id: "a", text: "Patiëntidentificatie" },
          { id: "b", text: "Betaling van zorgkosten" },
          { id: "c", text: "Identificatie en authenticatie van zorgverleners" },
          { id: "d", text: "Toegang tot zorgverzekeringsinformatie" }
        ],
        correct: "c",
        explanation: "De UZI-pas is een smartcard waarmee zorgverleners zich kunnen identificeren en authenticeren bij zorgsystemen en -netwerken."
      }
    ]
  },

  "2.1": {
    moduleId: "2.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Waar staat DBC voor?",
        options: [
          { id: "a", text: "Directe Behandel Code" },
          { id: "b", text: "Diagnose Behandel Combinatie" },
          { id: "c", text: "Declaratie Basis Classificatie" },
          { id: "d", text: "Diagnostisch Behandel Centrum" }
        ],
        correct: "b",
        explanation: "DBC staat voor Diagnose Behandel Combinatie - het beschrijft het complete traject van diagnose tot behandeling."
      },
      {
        id: "q2",
        type: "true-false",
        question: "DOT staat voor 'DBC's Op weg naar Transparantie'.",
        correct: true,
        explanation: "DOT is de doorontwikkeling van de DBC-systematiek met als doel meer transparantie en uniformiteit."
      }
    ]
  },

  "2.2": {
    moduleId: "2.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is het verschil tussen een zorgactiviteit en een zorgproduct?",
        options: [
          { id: "a", text: "Ze zijn hetzelfde" },
          { id: "b", text: "Zorgactiviteiten zijn de bouwstenen, zorgproducten het declarabele resultaat" },
          { id: "c", text: "Zorgproducten zijn goedkoper dan zorgactiviteiten" },
          { id: "d", text: "Alleen zorgactiviteiten worden geregistreerd" }
        ],
        correct: "b",
        explanation: "Zorgactiviteiten zijn individuele handelingen die worden gegroepeerd tot zorgproducten - het declarabele eindresultaat met een tarief."
      }
    ]
  },

  "2.3": {
    moduleId: "2.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat doet de Grouper?",
        options: [
          { id: "a", text: "Patiënten indelen in groepen" },
          { id: "b", text: "Automatisch het juiste zorgproduct afleiden uit registraties" },
          { id: "c", text: "Zorgverleners groeperen per specialisme" },
          { id: "d", text: "Factureren aan verzekeraars" }
        ],
        correct: "b",
        explanation: "De Grouper is software die op basis van geregistreerde zorgactiviteiten automatisch het juiste zorgproduct bepaalt."
      }
    ]
  },

  "2.4": {
    moduleId: "2.4",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "Add-on geneesmiddelen worden altijd samen met een DBC gedeclareerd, nooit los.",
        correct: true,
        explanation: "Add-ons zijn aanvullende declaraties die altijd naast een DBC worden gedeclareerd, niet als losstaand product."
      }
    ]
  },

  "2.5": {
    moduleId: "2.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is het Zorgprestatiemodel (ZPM)?",
        options: [
          { id: "a", text: "Een oud bekostigingssysteem voor ziekenhuizen" },
          { id: "b", text: "Het nieuwe bekostigingssysteem voor de GGZ sinds 2022" },
          { id: "c", text: "Een kwaliteitsmodel voor huisartsen" },
          { id: "d", text: "Een Europese standaard voor zorgprestaties" }
        ],
        correct: "b",
        explanation: "Het Zorgprestatiemodel (ZPM) vervangt sinds 2022 het oude DBC-GGZ systeem met transparantere prestaties per consult."
      }
    ]
  },

  "2.6": {
    moduleId: "2.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is ketenzorg?",
        options: [
          { id: "a", text: "Zorg in een ziekenhuis" },
          { id: "b", text: "Geïntegreerde zorg voor chronische aandoeningen door meerdere zorgverleners" },
          { id: "c", text: "Spoedzorg in een keten van ziekenhuizen" },
          { id: "d", text: "Zorg door vrijwilligers" }
        ],
        correct: "b",
        explanation: "Ketenzorg is geïntegreerde zorg voor chronische aandoeningen (diabetes, COPD) waarbij huisarts, POH, specialist en andere zorgverleners samenwerken."
      }
    ]
  },

  "4.1": {
    moduleId: "4.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat betekent ADT in HL7v2?",
        options: [
          { id: "a", text: "Automatic Data Transfer" },
          { id: "b", text: "Admission, Discharge, Transfer" },
          { id: "c", text: "Administrative Data Type" },
          { id: "d", text: "Advanced Diagnostic Tool" }
        ],
        correct: "b",
        explanation: "ADT staat voor Admission, Discharge, Transfer - berichten over opname, ontslag en overplaatsing van patiënten."
      },
      {
        id: "q2",
        type: "true-false",
        question: "HL7v2 is een moderne standaard die pas in 2020 is geïntroduceerd.",
        correct: false,
        explanation: "HL7v2 is ontwikkeld in de jaren '80 en is ondanks zijn leeftijd nog steeds de meest gebruikte standaard voor berichtenuitwisseling."
      }
    ]
  },

  "4.2": {
    moduleId: "4.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Waar staat FHIR voor?",
        options: [
          { id: "a", text: "Fast Health Information Resources" },
          { id: "b", text: "Fast Healthcare Interoperability Resources" },
          { id: "c", text: "Federal Health Information Registry" },
          { id: "d", text: "Formatted Healthcare Integration Records" }
        ],
        correct: "b",
        explanation: "FHIR staat voor Fast Healthcare Interoperability Resources - de moderne HL7-standaard voor zorgdata-uitwisseling."
      },
      {
        id: "q2",
        type: "true-false",
        question: "FHIR maakt gebruik van REST API's en JSON/XML formaten.",
        correct: true,
        explanation: "FHIR is gebaseerd op moderne webtechnologie met REST API's en ondersteunt zowel JSON als XML dataformaten."
      }
    ]
  },

  "4.3": {
    moduleId: "4.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is de BgZ?",
        options: [
          { id: "a", text: "Basis gezondheidsZorg" },
          { id: "b", text: "Basisgegevensset Zorg" },
          { id: "c", text: "Bescherming gegevens Ziekenhuizen" },
          { id: "d", text: "Beveiliging gezondheidsZaken" }
        ],
        correct: "b",
        explanation: "BgZ staat voor Basisgegevensset Zorg - een samenvatting van de belangrijkste patiëntgegevens voor uitwisseling."
      }
    ]
  },

  "4.4": {
    moduleId: "4.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is een zib?",
        options: [
          { id: "a", text: "Een type zorginstelling" },
          { id: "b", text: "Een zorginformatiebouwsteen - gestandaardiseerde definitie van zorginformatie" },
          { id: "c", text: "Een beveiligingsprotocol" },
          { id: "d", text: "Een type medisch hulpmiddel" }
        ],
        correct: "b",
        explanation: "Een zib (zorginformatiebouwsteen) is een gestandaardiseerde definitie van zorginformatie, zoals 'Bloeddruk' of 'Allergie'."
      }
    ]
  },

  "4.5": {
    moduleId: "4.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk codestelsel wordt primair gebruikt voor laboratoriumbepalingen?",
        options: [
          { id: "a", text: "SNOMED CT" },
          { id: "b", text: "ICD-10" },
          { id: "c", text: "LOINC" },
          { id: "d", text: "CBV" }
        ],
        correct: "c",
        explanation: "LOINC (Logical Observation Identifiers Names and Codes) is het standaard codestelsel voor laboratoriumbepalingen en observaties."
      }
    ]
  },

  "4.6": {
    moduleId: "4.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is DICOM?",
        options: [
          { id: "a", text: "Een netwerk voor gegevensuitwisseling" },
          { id: "b", text: "De standaard voor medische beelden" },
          { id: "c", text: "Een type CT-scanner" },
          { id: "d", text: "Een zorginformatiesysteem" }
        ],
        correct: "b",
        explanation: "DICOM (Digital Imaging and Communications in Medicine) is de internationale standaard voor medische beelden en hun uitwisseling."
      }
    ]
  },

  "4.7": {
    moduleId: "4.7",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "CDA-documenten zijn alleen machine-leesbaar, niet menselijk leesbaar.",
        correct: false,
        explanation: "CDA-documenten bevatten zowel een 'narrative block' (menselijk leesbaar) als structured entries (machine-verwerkbaar)."
      }
    ]
  },

  "5.1": {
    moduleId: "5.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Gezondheidsgegevens zijn volgens de AVG:",
        options: [
          { id: "a", text: "Gewone persoonsgegevens" },
          { id: "b", text: "Bijzondere persoonsgegevens met extra bescherming" },
          { id: "c", text: "Geen persoonsgegevens" },
          { id: "d", text: "Openbare gegevens" }
        ],
        correct: "b",
        explanation: "Gezondheidsgegevens zijn bijzondere persoonsgegevens die extra beschermd zijn en in principe niet verwerkt mogen worden, behalve met specifieke uitzonderingen."
      },
      {
        id: "q2",
        type: "true-false",
        question: "Voor directe zorgverlening is altijd expliciete toestemming van de patiënt nodig volgens de AVG.",
        correct: false,
        explanation: "Voor directe zorgverlening geldt de grondslag 'uitvoering behandelingsovereenkomst' - hiervoor is geen aparte toestemming nodig."
      }
    ]
  },

  "5.2": {
    moduleId: "5.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Hoe lang moeten medische dossiers minimaal bewaard worden volgens de WGBO?",
        options: [
          { id: "a", text: "10 jaar" },
          { id: "b", text: "15 jaar" },
          { id: "c", text: "20 jaar" },
          { id: "d", text: "Levenslang" }
        ],
        correct: "c",
        explanation: "Sinds 2020 geldt een bewaartermijn van 20 jaar voor medische dossiers (was eerder 15 jaar)."
      }
    ]
  },

  "5.3": {
    moduleId: "5.3",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "De Wabvpz vereist uitdrukkelijke toestemming voor gegevensuitwisseling via elektronische uitwisselingssystemen zoals het LSP.",
        correct: true,
        explanation: "De Wabvpz bepaalt dat uitwisseling via elektronische uitwisselingssystemen alleen mag met uitdrukkelijke toestemming van de patiënt."
      }
    ]
  },

  "5.4": {
    moduleId: "5.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke NEN-norm gaat specifiek over logging van gebeurtenissen in de zorg?",
        options: [
          { id: "a", text: "NEN 7510" },
          { id: "b", text: "NEN 7512" },
          { id: "c", text: "NEN 7513" },
          { id: "d", text: "NEN 7520" }
        ],
        correct: "c",
        explanation: "NEN 7513 specificeert de eisen voor logging van gebeurtenissen, zoals wie wanneer welke gegevens heeft ingezien."
      }
    ]
  },

  "5.5": {
    moduleId: "5.5",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "De Wegiz verplicht direct specifieke gegevensuitwisselingen.",
        correct: false,
        explanation: "De Wegiz is een kaderwet die de minister bevoegdheid geeft om via AMvB's specifieke uitwisselingen te verplichten. De wet zelf verplicht nog niets."
      }
    ]
  },

  "5.6": {
    moduleId: "5.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is NIS2?",
        options: [
          { id: "a", text: "Een Nederlandse informatiestandaard" },
          { id: "b", text: "Een Europese cybersecurity-richtlijn" },
          { id: "c", text: "Een type ziekenhuisinformatiesysteem" },
          { id: "d", text: "Een netwerk voor beelduitwisseling" }
        ],
        correct: "b",
        explanation: "NIS2 is de Network and Information Security Directive 2 - een EU-richtlijn die cybersecurity-eisen stelt aan vitale sectoren, waaronder de zorg."
      }
    ]
  },

  "5.7": {
    moduleId: "5.7",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wanneer is software een medisch hulpmiddel volgens de MDR?",
        options: [
          { id: "a", text: "Altijd als het in een ziekenhuis wordt gebruikt" },
          { id: "b", text: "Als het een medisch doel heeft en klinische beslissingen beïnvloedt" },
          { id: "c", text: "Alleen als het door een arts wordt gebruikt" },
          { id: "d", text: "Nooit, software is geen hulpmiddel" }
        ],
        correct: "b",
        explanation: "Software is een medisch hulpmiddel als het een medisch doel heeft én informatie genereert die klinische beslissingen beïnvloedt."
      }
    ]
  },

  "6.1": {
    moduleId: "6.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Onder welke categorie valt medische AI meestal in de AI Act?",
        options: [
          { id: "a", text: "Verboden AI" },
          { id: "b", text: "Hoog-risico AI" },
          { id: "c", text: "Beperkt risico" },
          { id: "d", text: "Minimaal risico" }
        ],
        correct: "b",
        explanation: "AI in de zorg valt bijna altijd onder hoog-risico vanwege de potentiële impact op diagnose en behandeling van patiënten."
      }
    ]
  },

  "6.2": {
    moduleId: "6.2",
    questions: [
      {
        id: "q1",
        type: "true-false",
        question: "Een AI-systeem dat onder MDR klasse IIa valt, is automatisch ook hoog-risico onder de AI Act.",
        correct: true,
        explanation: "AI-systemen die als medisch hulpmiddel klasse IIa of hoger vallen, worden automatisch als hoog-risico geclassificeerd onder de AI Act."
      }
    ]
  },

  "6.3": {
    moduleId: "6.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is 'alert fatigue'?",
        options: [
          { id: "a", text: "Vermoeidheid van patiënten door te veel medicatie" },
          { id: "b", text: "Het negeren van waarschuwingen door zorgverleners vanwege te veel alerts" },
          { id: "c", text: "Systeemuitval door overbelasting" },
          { id: "d", text: "Stress bij IT-personeel" }
        ],
        correct: "b",
        explanation: "Alert fatigue treedt op wanneer zorgverleners te veel waarschuwingen krijgen en deze gaan negeren, ook de belangrijke."
      }
    ]
  },

  "6.4": {
    moduleId: "6.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is een 'hallucinatie' in de context van LLMs?",
        options: [
          { id: "a", text: "Een visueel effect in medische beelden" },
          { id: "b", text: "Het genereren van feitelijk onjuiste informatie door de AI" },
          { id: "c", text: "Een fout in de trainingsdata" },
          { id: "d", text: "Een type cyberaanval" }
        ],
        correct: "b",
        explanation: "Een hallucinatie is wanneer een LLM overtuigend klinkende maar feitelijk onjuiste informatie genereert."
      }
    ]
  },

  "6.5": {
    moduleId: "6.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is post-market surveillance bij AI-systemen?",
        options: [
          { id: "a", text: "Marketing na productlancering" },
          { id: "b", text: "Continue monitoring van prestaties na implementatie" },
          { id: "c", text: "Verkoop aan andere ziekenhuizen" },
          { id: "d", text: "Archivering van oude systemen" }
        ],
        correct: "b",
        explanation: "Post-market surveillance is het continu monitoren van AI-systemen na implementatie om prestaties, drift en incidenten te detecteren."
      }
    ]
  },

  "6.6": {
    moduleId: "6.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk ethisch principe houdt in dat AI daadwerkelijk moet helpen en niet alleen efficiënt moet zijn?",
        options: [
          { id: "a", text: "Autonomie" },
          { id: "b", text: "Weldoen (beneficence)" },
          { id: "c", text: "Rechtvaardigheid" },
          { id: "d", text: "Transparantie" }
        ],
        correct: "b",
        explanation: "Het principe van weldoen (beneficence) houdt in dat AI daadwerkelijk moet bijdragen aan betere zorg, niet alleen aan efficiëntie."
      },
      {
        id: "q2",
        type: "true-false",
        question: "Bij responsible AI moet altijd een mens de mogelijkheid hebben om AI-beslissingen te overrulen.",
        correct: true,
        explanation: "Menselijk toezicht en de mogelijkheid tot override zijn kernprincipes van responsible AI, vooral in de zorg."
      }
    ]
  },

  // EXPERT - Twiin Deep Dive Quizzes
  "101.1": {
    moduleId: "101.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is het fundamentele architectuurprincipe van Twiin?",
        options: [
          { id: "a", text: "Centrale opslag van alle zorggegevens in een landelijke database" },
          { id: "b", text: "Federatief netwerk waarbij data decentraal blijft bij de bron" },
          { id: "c", text: "Peer-to-peer netwerk zonder governance" },
          { id: "d", text: "Cloudgebaseerde SaaS-oplossing voor zorgaanbieders" }
        ],
        correct: "b",
        explanation: "Twiin is een federatief vertrouwensnetwerk: gegevens blijven bij de bron, er is geen centrale database. De uitwisseling gebeurt via afspraken, standaarden en ondersteunende diensten."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke organisatie beheert het Twiin-afsprakenstelsel en de kwalificaties?",
        options: [
          { id: "a", text: "Nictiz" },
          { id: "b", text: "VZVZ" },
          { id: "c", text: "Stichting Twiin" },
          { id: "d", text: "Ministerie van VWS" }
        ],
        correct: "c",
        explanation: "Stichting Twiin is de juridische entiteit die het afsprakenstelsel beheert, met een bestuur van koepelorganisaties, een deelnemersraad en expertgroepen."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Wat is de relatie tussen Twiin en het LSP?",
        options: [
          { id: "a", text: "Twiin vervangt het LSP volledig" },
          { id: "b", text: "Het zijn concurrerende systemen" },
          { id: "c", text: "Complementaire systemen met verschillende usecases" },
          { id: "d", text: "LSP is een onderdeel van Twiin" }
        ],
        correct: "c",
        explanation: "LSP en Twiin zijn complementair: LSP is een opt-in verwijsindex voor huisarts/apotheek, Twiin heeft bredere usecases en andere governance. In de toekomst is convergentie via Wegiz mogelijk."
      },
      {
        id: "q4",
        type: "true-false",
        question: "In de Twiin-architectuur is het GtK (Goed-toegerust-Knooppunt) verantwoordelijk voor lokalisatie, authenticatie en toestemmingsverificatie.",
        correct: true,
        explanation: "Het GtK is de centrale technische laag die alle beveiligings- en routeringsfuncties afhandelt, inclusief integratie met Mitz voor toestemmingsverificatie."
      }
    ]
  },

  "101.2": {
    moduleId: "101.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wie is de verwerkingsverantwoordelijke voor gegevens die via Twiin worden uitgewisseld?",
        options: [
          { id: "a", text: "Stichting Twiin" },
          { id: "b", text: "De GtK-beheerder" },
          { id: "c", text: "De zorgaanbieder" },
          { id: "d", text: "De softwareleverancier" }
        ],
        correct: "c",
        explanation: "De zorgaanbieder blijft verwerkingsverantwoordelijke. De GtK-beheerder is verwerker en handelt namens de zorgaanbieder via een verwerkersovereenkomst."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de minimale bewaartermijn voor logging volgens NEN 7513 in Twiin?",
        options: [
          { id: "a", text: "1 jaar" },
          { id: "b", text: "3 jaar" },
          { id: "c", text: "5 jaar" },
          { id: "d", text: "10 jaar" }
        ],
        correct: "c",
        explanation: "Volgens NEN 7513 moet logging minimaal 5 jaar bewaard worden. Dit omvat wie, welke gegevens, wanneer en met welke grondslag heeft opgevraagd."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Welke certificering is verplicht voor GtK-beheerders?",
        options: [
          { id: "a", text: "Alleen NEN 7510" },
          { id: "b", text: "Alleen ISO 27001" },
          { id: "c", text: "ISO 27001 én NEN 7510" },
          { id: "d", text: "SOC 2 Type II" }
        ],
        correct: "c",
        explanation: "GtK-beheerders moeten zowel ISO 27001 als NEN 7510 gecertificeerd zijn, met 24/7 beschikbaarheid (99,5%), incidentrespons binnen 4 uur en jaarlijkse audits."
      },
      {
        id: "q4",
        type: "true-false",
        question: "Bij een fout in de brondata is de GtK-beheerder verantwoordelijk omdat de data via zijn systeem wordt getransporteerd.",
        correct: false,
        explanation: "Bij fouten in brondata is de bronhouder verantwoordelijk. De GtK-beheerder is alleen verantwoordelijk voor transportfouten en systeembeschikbaarheid."
      }
    ]
  },

  "101.3": {
    moduleId: "101.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk type certificaat wordt gebruikt voor machine-to-machine authenticatie tussen GtK's?",
        options: [
          { id: "a", text: "UZI-pas certificaat" },
          { id: "b", text: "PKIoverheid Private Services Server certificaat" },
          { id: "c", text: "SSL/TLS certificaat van een commerciële CA" },
          { id: "d", text: "Self-signed certificaat" }
        ],
        correct: "b",
        explanation: "Voor mTLS tussen GtK's worden PKIoverheid Private Services Server certificaten gebruikt, uitgegeven door Logius. Dit garandeert de identiteit van aangesloten organisaties."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de functie van de Twiin-lokalisatiedienst?",
        options: [
          { id: "a", text: "Het bepalen van de fysieke locatie van patiënten" },
          { id: "b", text: "Het vinden welk GtK gegevens over een patiënt kan leveren" },
          { id: "c", text: "Het routeren van netwerkverkeer" },
          { id: "d", text: "Het bijhouden van GPS-coördinaten van ziekenhuizen" }
        ],
        correct: "b",
        explanation: "De lokalisatiedienst bepaalt bij welke GtK's mogelijk gegevens over een specifieke patiënt beschikbaar zijn, zodat gericht opgevraagd kan worden."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Welk adresseringsformaat gebruikt Twiin voor het identificeren van organisaties?",
        options: [
          { id: "a", text: "IP-adressen" },
          { id: "b", text: "OID's (Object Identifiers)" },
          { id: "c", text: "E-mailadressen" },
          { id: "d", text: "URL's" }
        ],
        correct: "b",
        explanation: "Twiin gebruikt OID's (Object Identifiers) uit het Zorgadresboek voor unieke identificatie van organisaties. Dit zorgt voor consistente adressering ongeacht technische infrastructuur."
      },
      {
        id: "q4",
        type: "true-false",
        question: "Een GtK kan zowel als Initiating Gateway als Responding Gateway fungeren in IHE-transacties.",
        correct: true,
        explanation: "GtK's kunnen beide rollen vervullen: als Initiating Gateway sturen ze queries uit, als Responding Gateway beantwoorden ze queries van andere GtK's."
      }
    ]
  },

  "101.4": {
    moduleId: "101.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke IHE-transactie wordt gebruikt voor het opvragen van documenten uit een XDS Registry?",
        options: [
          { id: "a", text: "ITI-18 (Registry Stored Query)" },
          { id: "b", text: "ITI-43 (Retrieve Document Set)" },
          { id: "c", text: "ITI-41 (Provide and Register)" },
          { id: "d", text: "ITI-38 (Cross Gateway Query)" }
        ],
        correct: "a",
        explanation: "ITI-18 (Registry Stored Query) wordt gebruikt om metadata op te vragen uit de XDS Registry. ITI-43 is voor het daadwerkelijk ophalen van documenten uit de Repository."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is het verschil tussen XDS en XCA?",
        options: [
          { id: "a", text: "XDS is voor beelden, XCA voor documenten" },
          { id: "b", text: "XDS is voor lokale uitwisseling, XCA voor cross-community uitwisseling" },
          { id: "c", text: "XDS is nieuwer dan XCA" },
          { id: "d", text: "Er is geen verschil, het zijn synoniemen" }
        ],
        correct: "b",
        explanation: "XDS (Cross-Enterprise Document Sharing) is voor uitwisseling binnen een Affinity Domain. XCA (Cross-Community Access) bouwt hierop en maakt uitwisseling tussen verschillende communities mogelijk."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Welke actor in XCA fungeert als gateway naar externe communities?",
        options: [
          { id: "a", text: "Document Consumer" },
          { id: "b", text: "Document Repository" },
          { id: "c", text: "Initiating/Responding Gateway" },
          { id: "d", text: "Patient Identity Source" }
        ],
        correct: "c",
        explanation: "De Initiating Gateway en Responding Gateway zijn de XCA-actoren die communicatie tussen communities afhandelen. Het GtK vervult deze rollen in Twiin."
      },
      {
        id: "q4",
        type: "true-false",
        question: "In Twiin wordt voor elk document een SubmissionSet aangemaakt dat metadata bevat over de context van publicatie.",
        correct: true,
        explanation: "Een SubmissionSet groepeert documenten die tegelijk worden gepubliceerd en bevat metadata over de publicatiecontext, zoals auteur en tijdstip."
      }
    ]
  },

  "101.5": {
    moduleId: "101.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk IHE-profiel wordt specifiek gebruikt voor beelduitwisseling in Twiin?",
        options: [
          { id: "a", text: "XDS.b" },
          { id: "b", text: "XDS-I.b (Cross-Enterprise Document Sharing for Imaging)" },
          { id: "c", text: "PIX" },
          { id: "d", text: "ATNA" }
        ],
        correct: "b",
        explanation: "XDS-I.b is het IHE-profiel specifiek voor beelduitwisseling. Het combineert XDS-metadata met DICOM-referenties zodat beelden via de XDS-infrastructuur gevonden kunnen worden."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is een WADO-RS request in de context van beelduitwisseling?",
        options: [
          { id: "a", text: "Een request om patiënttoestemming te controleren" },
          { id: "b", text: "Een RESTful request om DICOM-objecten op te halen" },
          { id: "c", text: "Een authenticatie-request naar de IDP" },
          { id: "d", text: "Een query naar de XDS Registry" }
        ],
        correct: "b",
        explanation: "WADO-RS (Web Access to DICOM Objects - RESTful Services) is een moderne, REST-gebaseerde methode om DICOM-beelden op te halen, ondersteund in Twiin naast traditionele DICOM C-MOVE."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Welke uitdaging speelt specifiek bij beelduitwisseling vanwege de grootte van DICOM-studies?",
        options: [
          { id: "a", text: "Studies zijn te klein voor efficiënte overdracht" },
          { id: "b", text: "Bandbreedte en performance bij grote datasets (CT/MRI kunnen gigabytes zijn)" },
          { id: "c", text: "DICOM ondersteunt geen metadata" },
          { id: "d", text: "Beelden kunnen niet worden gecomprimeerd" }
        ],
        correct: "b",
        explanation: "Beeldstudies kunnen zeer groot zijn (CT/MRI studies van meerdere gigabytes). Dit vereist goede performance-optimalisatie, prefetching, en soms geselecteerde series in plaats van volledige studies."
      },
      {
        id: "q4",
        type: "true-false",
        question: "In XDS-I.b worden de DICOM-beelden zelf opgeslagen in de XDS Document Repository.",
        correct: false,
        explanation: "De DICOM-beelden blijven in een PACS/Imaging Repository. De XDS Repository bevat alleen een 'manifest' document met referenties (retrieve-URLs) naar de beelden."
      }
    ]
  },

  "101.6": {
    moduleId: "101.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Hoe integreert Twiin met Mitz voor toestemmingsverificatie?",
        options: [
          { id: "a", text: "De patiënt moet bij elke opvraging opnieuw toestemming geven" },
          { id: "b", text: "Het GtK raadpleegt Mitz via een FHIR Consent API" },
          { id: "c", text: "Toestemming wordt lokaal gecached voor 30 dagen" },
          { id: "d", text: "Mitz-integratie is optioneel in Twiin" }
        ],
        correct: "b",
        explanation: "Het GtK raadpleegt Mitz real-time via een gestandaardiseerde FHIR Consent API om te verifiëren of de patiënt toestemming heeft gegeven voor de specifieke uitwisseling."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk autorisatiemodel gebruikt Twiin voor toegangscontrole?",
        options: [
          { id: "a", text: "Alleen rol-gebaseerd (RBAC)" },
          { id: "b", text: "Alleen attribuut-gebaseerd (ABAC)" },
          { id: "c", text: "Combinatie van RBAC en behandelrelatie-verificatie" },
          { id: "d", text: "Geen autorisatie, iedereen heeft toegang" }
        ],
        correct: "c",
        explanation: "Twiin combineert RBAC (rolverificatie via UZI) met verificatie van de behandelrelatie en patiënttoestemming via Mitz. Alle drie elementen moeten aanwezig zijn."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Wat gebeurt als een Mitz-toestemmingscheck een 'deny' teruggeeft?",
        options: [
          { id: "a", text: "De opvraging wordt toch uitgevoerd met een waarschuwing" },
          { id: "b", text: "Het GtK blokkeert de opvraging en logt dit" },
          { id: "c", text: "De patiënt krijgt automatisch een notificatie" },
          { id: "d", text: "De behandelend arts moet telefonisch toestemming vragen" }
        ],
        correct: "b",
        explanation: "Bij een 'deny' blokkeert het GtK de opvraging volledig. Dit wordt gelogd conform NEN 7513 voor audit-doeleinden."
      },
      {
        id: "q4",
        type: "true-false",
        question: "In Twiin is er altijd een noodprocedure ('break-the-glass') beschikbaar waarmee de toestemmingscheck kan worden overruled in spoedsituaties.",
        correct: true,
        explanation: "Er bestaat een break-the-glass procedure voor noodsituaties. Deze moet expliciet worden geactiveerd, zwaar gelogd, en achteraf verantwoord."
      }
    ]
  },

  "101.7": {
    moduleId: "101.7",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke stappen doorloopt een softwareleverancier om Twiin-gekwalificeerd te worden?",
        options: [
          { id: "a", text: "Alleen technische tests" },
          { id: "b", text: "Aanmelding, conformiteitstoets, connectathon, certificering" },
          { id: "c", text: "Registratie bij de Kamer van Koophandel" },
          { id: "d", text: "Goedkeuring door het Ministerie van VWS" }
        ],
        correct: "b",
        explanation: "Het kwalificatietraject omvat: aanmelding, documentatie-review, technische conformiteitstoets, deelname aan connectathon, en formele certificering door Stichting Twiin."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is een 'connectathon' in de context van Twiin-certificering?",
        options: [
          { id: "a", text: "Een marketingevenement voor leveranciers" },
          { id: "b", text: "Een live interoperabiliteitstest met andere gekwalificeerde systemen" },
          { id: "c", text: "Een online cursus over Twiin" },
          { id: "d", text: "Een beveiligingsaudit" }
        ],
        correct: "b",
        explanation: "Een connectathon is een georganiseerd testevenement waar leveranciers hun systemen live testen met andere gekwalificeerde systemen om interoperabiliteit te valideren."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Hoe lang is een Twiin-kwalificatie geldig?",
        options: [
          { id: "a", text: "Onbeperkt" },
          { id: "b", text: "1 jaar, daarna hercertificering" },
          { id: "c", text: "2 jaar, met tussentijdse updates bij wijzigingen" },
          { id: "d", text: "5 jaar" }
        ],
        correct: "c",
        explanation: "Kwalificaties zijn 2 jaar geldig. Bij significante wijzigingen aan het afsprakenstelsel of de software kan tussentijdse hercertificering nodig zijn."
      },
      {
        id: "q4",
        type: "true-false",
        question: "Een zorgaanbieder kan direct aansluiten op Twiin zonder tussenkomst van een GtK-beheerder.",
        correct: false,
        explanation: "Zorgaanbieders sluiten aan via een GtK-beheerder. Ze kunnen niet direct op het Twiin-netwerk aansluiten zonder gekwalificeerde intermediair."
      }
    ]
  },

  "101.8": {
    moduleId: "101.8",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is typisch de eerste fase in een Twiin-implementatietraject?",
        options: [
          { id: "a", text: "Direct beginnen met technische integratie" },
          { id: "b", text: "Impactanalyse en stakeholder-identificatie" },
          { id: "c", text: "Inkoop van nieuwe hardware" },
          { id: "d", text: "Training van eindgebruikers" }
        ],
        correct: "b",
        explanation: "Een Twiin-implementatie begint met een impactanalyse: welke systemen zijn geraakt, welke stakeholders zijn betrokken, wat zijn de organisatorische en juridische implicaties?"
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke test-omgeving moet doorlopen worden voordat een zorgaanbieder live kan op Twiin?",
        options: [
          { id: "a", text: "Alleen lokale unit tests" },
          { id: "b", text: "Acceptatie-omgeving, ketentest, productie-validatie" },
          { id: "c", text: "Geen specifieke test-omgeving vereist" },
          { id: "d", text: "Alleen de connectathon" }
        ],
        correct: "b",
        explanation: "Het traject omvat testen in acceptatie-omgeving, ketentest met echte GtK's in testmodus, en productie-validatie voordat volledige productie-toegang wordt verleend."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Wat is een kritische succesfactor voor Twiin-implementatie in de organisatie?",
        options: [
          { id: "a", text: "Zo snel mogelijk live gaan" },
          { id: "b", text: "Betrokkenheid van zowel IT als medische staf en management" },
          { id: "c", text: "Minimale communicatie naar medewerkers" },
          { id: "d", text: "Uitsluitend focus op techniek" }
        ],
        correct: "b",
        explanation: "Twiin-implementatie raakt IT, medische workflows, privacy en organisatieprocessen. Betrokkenheid van alle stakeholders (IT, medisch, juridisch, management) is essentieel."
      },
      {
        id: "q4",
        type: "true-false",
        question: "Na go-live is het belangrijk om monitoring en incidentmanagement in te richten voor continue operatie.",
        correct: true,
        explanation: "Post-go-live vereist actieve monitoring van beschikbaarheid, performance en foutmeldingen, plus duidelijke incidentprocedures conform SLA-afspraken met de GtK-beheerder."
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Hoe lang duurt een typisch Twiin-implementatietraject voor een ziekenhuis?",
        options: [
          { id: "a", text: "2-4 weken" },
          { id: "b", text: "3-6 maanden" },
          { id: "c", text: "6-12 maanden of langer, afhankelijk van complexiteit" },
          { id: "d", text: "Altijd precies 1 jaar" }
        ],
        correct: "c",
        explanation: "Implementatietrajecten duren typisch 6-12 maanden of langer, afhankelijk van de complexiteit van bestaande systemen, organisatorische readiness en scope van de aansluiting."
      }
    ]
  }
}

export const getQuiz = (moduleId) => {
  return quizzes[moduleId] || null
}
