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
  },

  // ==========================================
  // TRACK 102: DATABRICKS IN DE ZORG
  // ==========================================

  "102.1": {
    moduleId: "102.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is het lakehouse paradigma dat Databricks pioniert?",
        options: [
          { id: "a", text: "Een combinatie van data lake en data warehouse in één platform" },
          { id: "b", text: "Een traditioneel data warehouse met cloud opslag" },
          { id: "c", text: "Een pure data lake zonder structuur" },
          { id: "d", text: "Een operationele database voor transacties" }
        ],
        correct: "a",
        explanation: "Het lakehouse combineert de flexibiliteit van een data lake met de structuur en performance van een data warehouse op één platform."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke cloud provider is het meest populair voor Databricks in de Nederlandse zorg?",
        options: [
          { id: "a", text: "Amazon Web Services (AWS)" },
          { id: "b", text: "Google Cloud Platform (GCP)" },
          { id: "c", text: "Microsoft Azure" },
          { id: "d", text: "IBM Cloud" }
        ],
        correct: "c",
        explanation: "Azure Databricks is dominant in Nederland vanwege bestaande Microsoft-partnerships in de zorgsector."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Delta Lake is een closed-source storage format dat alleen in Databricks werkt.",
        correct: false,
        explanation: "Delta Lake is open-source en kan ook buiten Databricks worden gebruikt, wat vendor lock-in vermindert."
      }
    ]
  },

  "102.2": {
    moduleId: "102.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is de juiste volgorde van de medallion architectuur?",
        options: [
          { id: "a", text: "Gold → Silver → Bronze" },
          { id: "b", text: "Bronze → Silver → Gold" },
          { id: "c", text: "Silver → Bronze → Gold" },
          { id: "d", text: "Raw → Clean → Report" }
        ],
        correct: "b",
        explanation: "De medallion architectuur gaat van Bronze (raw) naar Silver (cleansed) naar Gold (aggregated), met toenemende datakwaliteit."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke feature van Delta Lake maakt het mogelijk om data op een eerder tijdstip te querien?",
        options: [
          { id: "a", text: "ACID transacties" },
          { id: "b", text: "Schema enforcement" },
          { id: "c", text: "Time travel" },
          { id: "d", text: "Z-ordering" }
        ],
        correct: "c",
        explanation: "Time travel in Delta Lake maakt het mogelijk om historische versies van data te querien door de transactie-log."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Z-Ordering optimaliseert de fysieke layout van data voor snellere queries op specifieke kolommen.",
        correct: true,
        explanation: "Z-Ordering co-locateert gerelateerde data fysiek op disk, wat queries op die kolommen significant versnelt."
      }
    ]
  },

  "102.3": {
    moduleId: "102.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke Databricks feature wordt gebruikt voor continue, incrementele ingestie van files?",
        options: [
          { id: "a", text: "Batch Loader" },
          { id: "b", text: "Auto Loader" },
          { id: "c", text: "File Watcher" },
          { id: "d", text: "Stream Processor" }
        ],
        correct: "b",
        explanation: "Auto Loader is de Databricks feature voor incrementele file ingestie met automatische schema inference."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk format wordt gebruikt voor FHIR bulk export?",
        options: [
          { id: "a", text: "CSV" },
          { id: "b", text: "Parquet" },
          { id: "c", text: "NDJSON (Newline Delimited JSON)" },
          { id: "d", text: "XML" }
        ],
        correct: "c",
        explanation: "FHIR $export gebruikt NDJSON format waarbij elke regel een complete FHIR resource is."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Delta Live Tables (DLT) biedt declaratieve ETL met ingebouwde data quality expectations.",
        correct: true,
        explanation: "DLT combineert declaratieve pipeline definities met data quality checks via expectations."
      }
    ]
  },

  "102.4": {
    moduleId: "102.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is de governance laag van Databricks die centrale controle biedt over data assets?",
        options: [
          { id: "a", text: "Delta Catalog" },
          { id: "b", text: "Unity Catalog" },
          { id: "c", text: "Data Catalog" },
          { id: "d", text: "Metadata Server" }
        ],
        correct: "b",
        explanation: "Unity Catalog is de centralized governance oplossing voor Databricks met fine-grained access control en lineage."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke techniek wordt gebruikt om gevoelige kolommen automatisch te maskeren voor ongeautoriseerde gebruikers?",
        options: [
          { id: "a", text: "Row-level security" },
          { id: "b", text: "Column masking" },
          { id: "c", text: "Data encryption" },
          { id: "d", text: "Access logging" }
        ],
        correct: "b",
        explanation: "Column masking past automatisch functies toe om gevoelige data te maskeren gebaseerd op user privileges."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Unity Catalog tracked automatisch data lineage tussen tabellen.",
        correct: true,
        explanation: "Unity Catalog captured automatisch upstream en downstream dependencies tussen data assets."
      }
    ]
  },

  "102.5": {
    moduleId: "102.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is Photon in Databricks SQL?",
        options: [
          { id: "a", text: "Een visualisatie tool" },
          { id: "b", text: "Een vectorized query engine voor betere performance" },
          { id: "c", text: "Een data quality framework" },
          { id: "d", text: "Een machine learning library" }
        ],
        correct: "b",
        explanation: "Photon is Databricks' native vectorized query engine die 2-8x sneller is dan standaard Spark SQL."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk type SQL Warehouse biedt automatisch schalen en pay-per-query pricing?",
        options: [
          { id: "a", text: "Classic" },
          { id: "b", text: "Pro" },
          { id: "c", text: "Serverless" },
          { id: "d", text: "Enterprise" }
        ],
        correct: "c",
        explanation: "Serverless SQL Warehouses schalen automatisch en rekenen per query, ideaal voor variabele workloads."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Materialized views in Databricks SQL slaan voorberekende resultaten op voor snellere queries.",
        correct: true,
        explanation: "Materialized views berekenen en cachen aggregaties vooraf, wat query performance significant verbetert."
      }
    ]
  },

  "102.6": {
    moduleId: "102.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk component van MLflow wordt gebruikt voor het registreren en versionen van productie-modellen?",
        options: [
          { id: "a", text: "MLflow Tracking" },
          { id: "b", text: "MLflow Projects" },
          { id: "c", text: "MLflow Models" },
          { id: "d", text: "MLflow Registry" }
        ],
        correct: "d",
        explanation: "MLflow Registry biedt model versioning, staging (dev/staging/production) en lifecycle management."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de Feature Store in Databricks?",
        options: [
          { id: "a", text: "Een winkel voor software features" },
          { id: "b", text: "Centrale opslag voor ML features met lineage en serving" },
          { id: "c", text: "Een database voor model metadata" },
          { id: "d", text: "Een tool voor feature engineering code" }
        ],
        correct: "b",
        explanation: "De Feature Store centraliseert ML features met versioning, lineage en online/offline serving capabilities."
      },
      {
        id: "q3",
        type: "true-false",
        question: "AutoML in Databricks genereert automatisch feature engineering, model selectie en hyperparameter tuning.",
        correct: true,
        explanation: "Databricks AutoML automatiseert het complete ML experiment proces inclusief feature engineering en tuning."
      }
    ]
  },

  "102.7": {
    moduleId: "102.7",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke Spark API wordt gebruikt voor unified batch en streaming verwerking?",
        options: [
          { id: "a", text: "Spark Streaming" },
          { id: "b", text: "Structured Streaming" },
          { id: "c", text: "Kafka Streams" },
          { id: "d", text: "Flink" }
        ],
        correct: "b",
        explanation: "Structured Streaming biedt een unified API voor zowel batch als streaming met dezelfde DataFrame operaties."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de functie van een watermark in streaming?",
        options: [
          { id: "a", text: "Data encryptie" },
          { id: "b", text: "Handling van late-arriving data" },
          { id: "c", text: "Load balancing" },
          { id: "d", text: "Error logging" }
        ],
        correct: "b",
        explanation: "Watermarks definiëren hoe lang het systeem wacht op late data voordat een window wordt afgesloten."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Delta Lake als streaming sink garandeert exactly-once processing semantics.",
        correct: true,
        explanation: "Door de transactie-log van Delta Lake wordt exactly-once delivery gegarandeerd, zelfs bij failures."
      }
    ]
  },

  "102.8": {
    moduleId: "102.8",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is VNet injection in Azure Databricks?",
        options: [
          { id: "a", text: "Data injectie in een virtueel netwerk" },
          { id: "b", text: "Databricks clusters deployen in je eigen Azure Virtual Network" },
          { id: "c", text: "Virtuele machines toevoegen aan Databricks" },
          { id: "d", text: "Netwerk traffic logging" }
        ],
        correct: "b",
        explanation: "VNet injection plaatst Databricks clusters in je eigen VNet voor betere network security en private connectivity."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk type certificaat wordt aanbevolen voor machine-to-machine authenticatie naar Azure services?",
        options: [
          { id: "a", text: "SSL certificaat" },
          { id: "b", text: "User certificaat" },
          { id: "c", text: "Service Principal met Managed Identity" },
          { id: "d", text: "API key" }
        ],
        correct: "c",
        explanation: "Service Principals met Managed Identity bieden secure, keyless authenticatie naar Azure services."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Spot instances kunnen tot 90% kostenbesparing bieden voor fault-tolerant workloads.",
        correct: true,
        explanation: "Spot instances zijn significant goedkoper maar kunnen worden gepreempt, geschikt voor jobs die kunnen herstarten."
      }
    ]
  },

  // ==========================================
  // TRACK 103: MICROSOFT FABRIC IN DE ZORG
  // ==========================================

  "103.1": {
    moduleId: "103.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is OneLake in Microsoft Fabric?",
        options: [
          { id: "a", text: "Een database service" },
          { id: "b", text: "De unified storage layer voor alle Fabric data" },
          { id: "c", text: "Een data visualisatie tool" },
          { id: "d", text: "Een machine learning platform" }
        ],
        correct: "b",
        explanation: "OneLake is de single, unified storage layer waar alle Fabric workloads hun data opslaan in Delta format."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk licensing model gebruikt Microsoft Fabric?",
        options: [
          { id: "a", text: "Per-user licensing alleen" },
          { id: "b", text: "Capacity-based met Capacity Units (CU)" },
          { id: "c", text: "Per-query pricing" },
          { id: "d", text: "Perpetual licensing" }
        ],
        correct: "b",
        explanation: "Fabric gebruikt capacity-based licensing met Capacity Units (F2, F4, F8, etc.)."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Microsoft Fabric integreert met Microsoft Cloud for Healthcare voor FHIR en DICOM ondersteuning.",
        correct: true,
        explanation: "Fabric integreert naadloos met Azure Health Data Services als onderdeel van Microsoft Cloud for Healthcare."
      }
    ]
  },

  "103.2": {
    moduleId: "103.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat zijn Shortcuts in OneLake?",
        options: [
          { id: "a", text: "Keyboard shortcuts voor sneller werken" },
          { id: "b", text: "Virtuele links naar externe data zonder kopiëren" },
          { id: "c", text: "Verkorte SQL queries" },
          { id: "d", text: "Snelle navigatie in de UI" }
        ],
        correct: "b",
        explanation: "Shortcuts zijn virtuele pointers naar data in ADLS, S3, of andere OneLake locaties zonder data duplicatie."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is V-Order optimalisatie in Fabric?",
        options: [
          { id: "a", text: "Alfabetische sortering van data" },
          { id: "b", text: "Fabric-specifieke storage optimalisatie voor snellere reads" },
          { id: "c", text: "Versioning van data" },
          { id: "d", text: "Validatie van data" }
        ],
        correct: "b",
        explanation: "V-Order is een Fabric-specifieke optimalisatie die automatisch wordt toegepast voor betere read performance."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Een Lakehouse in Fabric kan zowel managed Delta tables als unmanaged files bevatten.",
        correct: true,
        explanation: "Lakehouses hebben een Tables/ folder voor managed Delta tables en Files/ voor unmanaged bestanden."
      }
    ]
  },

  "103.3": {
    moduleId: "103.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is het verschil tussen Pipelines en Dataflows Gen2 in Fabric?",
        options: [
          { id: "a", text: "Er is geen verschil" },
          { id: "b", text: "Pipelines zijn voor orchestratie, Dataflows voor visuele transformatie" },
          { id: "c", text: "Dataflows zijn sneller dan Pipelines" },
          { id: "d", text: "Pipelines werken alleen met SQL" }
        ],
        correct: "b",
        explanation: "Pipelines orchestreren activiteiten (copy, notebooks), Dataflows Gen2 bieden visuele ETL met Power Query."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Hoeveel data connectors ondersteunt Data Factory in Fabric ongeveer?",
        options: [
          { id: "a", text: "25+" },
          { id: "b", text: "50+" },
          { id: "c", text: "100+" },
          { id: "d", text: "150+" }
        ],
        correct: "d",
        explanation: "Data Factory ondersteunt 150+ connectors voor diverse bronnen van databases tot cloud services."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Incremental load patterns in Data Factory gebruiken watermarks om alleen nieuwe/gewijzigde data te laden.",
        correct: true,
        explanation: "Watermark-based incremental loading voorkomt het herladen van alle data bij elke pipeline run."
      }
    ]
  },

  "103.4": {
    moduleId: "103.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke Azure service biedt managed FHIR en DICOM APIs?",
        options: [
          { id: "a", text: "Azure Data Factory" },
          { id: "b", text: "Azure Health Data Services" },
          { id: "c", text: "Azure Synapse" },
          { id: "d", text: "Azure Databricks" }
        ],
        correct: "b",
        explanation: "Azure Health Data Services biedt managed FHIR Service, DICOM Service en MedTech Service."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de FHIR $export operatie?",
        options: [
          { id: "a", text: "Export van FHIR server configuratie" },
          { id: "b", text: "Bulk data export van FHIR resources naar storage" },
          { id: "c", text: "Export van audit logs" },
          { id: "d", text: "Backup van de FHIR database" }
        ],
        correct: "b",
        explanation: "$export is de FHIR bulk data operatie die grote datasets exporteert naar cloud storage voor analytics."
      },
      {
        id: "q3",
        type: "true-false",
        question: "OMOP CDM (Common Data Model) kan worden geïmplementeerd in Fabric Lakehouses.",
        correct: true,
        explanation: "OMOP CDM kan als Delta tables in Fabric worden geïmplementeerd voor gestandaardiseerde healthcare analytics."
      }
    ]
  },

  "103.5": {
    moduleId: "103.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is Direct Lake mode in Power BI?",
        options: [
          { id: "a", text: "Data importeren in Power BI" },
          { id: "b", text: "Direct querien van OneLake Delta tables zonder import" },
          { id: "c", text: "DirectQuery naar een database" },
          { id: "d", text: "Live connectie naar Excel" }
        ],
        correct: "b",
        explanation: "Direct Lake queriet Delta tables in OneLake direct, combineert de snelheid van import met de actualiteit van DirectQuery."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke taal wordt gebruikt voor berekeningen in Power BI Semantic Models?",
        options: [
          { id: "a", text: "SQL" },
          { id: "b", text: "Python" },
          { id: "c", text: "DAX" },
          { id: "d", text: "M" }
        ],
        correct: "c",
        explanation: "DAX (Data Analysis Expressions) is de formuletaal voor measures en berekende kolommen in Power BI."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Row-Level Security in Power BI kan gebruikers beperken tot data van hun eigen afdeling.",
        correct: true,
        explanation: "RLS filters data op basis van de identiteit van de gebruiker, ideaal voor afdeling-specifieke dashboards."
      }
    ]
  },

  "103.6": {
    moduleId: "103.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke query taal wordt gebruikt in Eventhouse?",
        options: [
          { id: "a", text: "SQL" },
          { id: "b", text: "KQL (Kusto Query Language)" },
          { id: "c", text: "Python" },
          { id: "d", text: "DAX" }
        ],
        correct: "b",
        explanation: "Eventhouse gebruikt KQL, geoptimaliseerd voor time-series en log analytics queries."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de functie van Data Activator in Fabric?",
        options: [
          { id: "a", text: "Data transformatie" },
          { id: "b", text: "No-code alerting op basis van data condities" },
          { id: "c", text: "Data catalogus" },
          { id: "d", text: "Machine learning" }
        ],
        correct: "b",
        explanation: "Data Activator (Reflex) biedt no-code triggers die alerts versturen wanneer data aan condities voldoet."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Eventstream in Fabric kan real-time data van Event Hubs direct naar Eventhouse routeren.",
        correct: true,
        explanation: "Eventstream is managed streaming ingestion die bronnen zoals Event Hubs verbindt met destinations zoals Eventhouse."
      }
    ]
  },

  "103.7": {
    moduleId: "103.7",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke Microsoft service integreert met Fabric voor enterprise data governance?",
        options: [
          { id: "a", text: "Microsoft Defender" },
          { id: "b", text: "Microsoft Purview" },
          { id: "c", text: "Microsoft Sentinel" },
          { id: "d", text: "Microsoft Intune" }
        ],
        correct: "b",
        explanation: "Microsoft Purview biedt data catalogus, classificatie, lineage en compliance management voor Fabric."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat zijn Sensitivity Labels in Fabric/Purview?",
        options: [
          { id: "a", text: "Labels voor data kwaliteit" },
          { id: "b", text: "Classificatie labels die data beschermen en access controleren" },
          { id: "c", text: "Performance labels" },
          { id: "d", text: "Cost allocation labels" }
        ],
        correct: "b",
        explanation: "Sensitivity labels classificeren data (bijv. Confidential, PHI) en kunnen automatisch encryptie en access controls afdwingen."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Purview kan automatisch PII en PHI data detecteren en classificeren in Fabric assets.",
        correct: true,
        explanation: "Purview's auto-classificatie scant data assets en detecteert automatisch gevoelige data patronen."
      }
    ]
  },

  "103.8": {
    moduleId: "103.8",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is de aanbevolen workspace structuur in Fabric?",
        options: [
          { id: "a", text: "Eén workspace voor alles" },
          { id: "b", text: "Workspace per domein en environment (bijv. Clinical-Production)" },
          { id: "c", text: "Workspace per gebruiker" },
          { id: "d", text: "Alleen default workspace gebruiken" }
        ],
        correct: "b",
        explanation: "Best practice is workspaces te structureren per domein en environment voor governance en access control."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke network security feature wordt aanbevolen voor Fabric in zorginstellingen?",
        options: [
          { id: "a", text: "Public endpoints" },
          { id: "b", text: "Private endpoints" },
          { id: "c", text: "IP whitelisting alleen" },
          { id: "d", text: "Geen specifieke configuratie" }
        ],
        correct: "b",
        explanation: "Private endpoints zorgen voor private connectivity zonder exposure naar het publieke internet."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Een Center of Excellence (CoE) model combineert centraal platform beheer met gedecentraliseerde domain teams.",
        correct: true,
        explanation: "Het CoE model balanceert centrale governance en standards met autonomie voor domain teams."
      }
    ]
  },

  // ==========================================
  // TRACK 104: SAS & SAS ON AZURE IN DE ZORG
  // ==========================================

  "104.1": {
    moduleId: "104.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "In welk jaar is SAS opgericht?",
        options: [
          { id: "a", text: "1966" },
          { id: "b", text: "1976" },
          { id: "c", text: "1986" },
          { id: "d", text: "1996" }
        ],
        correct: "b",
        explanation: "SAS (Statistical Analysis System) is opgericht in 1976 en is een van de oudste analytics platforms."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is CAS in SAS Viya?",
        options: [
          { id: "a", text: "Customer Analytics Service" },
          { id: "b", text: "Cloud Analytic Services - de in-memory engine" },
          { id: "c", text: "Central Administration Server" },
          { id: "d", text: "Compute Allocation System" }
        ],
        correct: "b",
        explanation: "CAS (Cloud Analytic Services) is de gedistribueerde in-memory analytics engine van SAS Viya."
      },
      {
        id: "q3",
        type: "true-false",
        question: "SAS heeft de langste track record voor FDA-gereguleerde omgevingen van de drie platforms.",
        correct: true,
        explanation: "SAS heeft decennia ervaring met FDA 21 CFR Part 11 compliance en clinical trial analytics."
      }
    ]
  },

  "104.2": {
    moduleId: "104.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Op welke technologie draait SAS Viya?",
        options: [
          { id: "a", text: "Virtual Machines" },
          { id: "b", text: "Kubernetes containers" },
          { id: "c", text: "Serverless functions" },
          { id: "d", text: "Mainframe" }
        ],
        correct: "b",
        explanation: "SAS Viya is cloud-native en draait op Kubernetes voor schaalbaarheid en portabiliteit."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is het voordeel van SAS Cloud (managed) ten opzichte van customer-managed?",
        options: [
          { id: "a", text: "Meer controle" },
          { id: "b", text: "Geen infrastructuur beheer nodig" },
          { id: "c", text: "Lagere kosten" },
          { id: "d", text: "Betere performance" }
        ],
        correct: "b",
        explanation: "SAS Cloud is fully managed - SAS beheert de infrastructuur, updates en support."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Een CASLIB in SAS Viya definieert hoe CAS toegang krijgt tot data bronnen.",
        correct: true,
        explanation: "CASLIBs zijn library definities die specificeren hoe CAS data leest van diverse bronnen."
      }
    ]
  },

  "104.3": {
    moduleId: "104.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke Azure service wordt gebruikt voor SAS Viya deployment?",
        options: [
          { id: "a", text: "Azure App Service" },
          { id: "b", text: "Azure Kubernetes Service (AKS)" },
          { id: "c", text: "Azure Functions" },
          { id: "d", text: "Azure Virtual Machines alleen" }
        ],
        correct: "b",
        explanation: "SAS Viya wordt typisch gedeployed op Azure Kubernetes Service (AKS) voor schaalbaarheid."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Hoe kan SAS Viya data lezen uit Azure Data Lake Storage?",
        options: [
          { id: "a", text: "Alleen via file download" },
          { id: "b", text: "Via een ADLS CASLIB configuratie" },
          { id: "c", text: "Niet mogelijk" },
          { id: "d", text: "Alleen via Azure Synapse" }
        ],
        correct: "b",
        explanation: "SAS Viya kan ADLS direct benaderen via een CASLIB met ADLS datasource configuratie."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Private Link kan worden gebruikt voor private connectivity tussen SAS Viya en Azure services.",
        correct: true,
        explanation: "Private endpoints/Link zorgen voor private network connectivity zonder public internet exposure."
      }
    ]
  },

  "104.4": {
    moduleId: "104.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is CDISC in de context van clinical trials?",
        options: [
          { id: "a", text: "Een data compression standaard" },
          { id: "b", text: "Clinical Data Interchange Standards Consortium" },
          { id: "c", text: "Een SAS procedure" },
          { id: "d", text: "Een database type" }
        ],
        correct: "b",
        explanation: "CDISC definieert standaarden zoals SDTM en ADaM voor clinical trial data, vereist voor FDA submissions."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke SAS procedure wordt gebruikt voor survival analysis?",
        options: [
          { id: "a", text: "PROC MEANS" },
          { id: "b", text: "PROC LIFETEST" },
          { id: "c", text: "PROC SQL" },
          { id: "d", text: "PROC PRINT" }
        ],
        correct: "b",
        explanation: "PROC LIFETEST voert survival analysis uit, inclusief Kaplan-Meier curves voor klinisch onderzoek."
      },
      {
        id: "q3",
        type: "true-false",
        question: "HEDIS metrics voor quality measurement kunnen berekend worden met SAS procedures.",
        correct: true,
        explanation: "SAS wordt veel gebruikt voor HEDIS en andere quality metrics berekeningen bij zorgverzekeraars."
      }
    ]
  },

  "104.5": {
    moduleId: "104.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat doet PROC DQMATCH in SAS?",
        options: [
          { id: "a", text: "Data quality rapportage" },
          { id: "b", text: "Record matching en deduplicatie" },
          { id: "c", text: "Database queries" },
          { id: "d", text: "Data import" }
        ],
        correct: "b",
        explanation: "PROC DQMATCH identificeert duplicate records via fuzzy matching voor master data management."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is Slowly Changing Dimension (SCD) Type 2?",
        options: [
          { id: "a", text: "Data wordt overschreven" },
          { id: "b", text: "Historische versies worden bewaard met valid_from/valid_to" },
          { id: "c", text: "Alleen de laatste waarde wordt bewaard" },
          { id: "d", text: "Data wordt nooit gewijzigd" }
        ],
        correct: "b",
        explanation: "SCD Type 2 bewaart volledige historie door nieuwe versies toe te voegen met geldigheidsperiodes."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Change Data Capture (CDC) in SAS maakt incrementele data loading mogelijk via watermarks.",
        correct: true,
        explanation: "CDC patterns gebruiken timestamps/watermarks om alleen nieuwe of gewijzigde records te laden."
      }
    ]
  },

  "104.6": {
    moduleId: "104.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is SAS Model Studio?",
        options: [
          { id: "a", text: "Een 3D modeling tool" },
          { id: "b", text: "Visuele machine learning development omgeving" },
          { id: "c", text: "Een code editor" },
          { id: "d", text: "Een database tool" }
        ],
        correct: "b",
        explanation: "Model Studio is de visuele drag-and-drop interface voor ML pipeline development in SAS Viya."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de functie van SAS Model Manager?",
        options: [
          { id: "a", text: "Model training" },
          { id: "b", text: "Model deployment, versioning en monitoring" },
          { id: "c", text: "Data preparation" },
          { id: "d", text: "Report generation" }
        ],
        correct: "b",
        explanation: "Model Manager beheert de model lifecycle: registratie, staging, deployment en performance monitoring."
      },
      {
        id: "q3",
        type: "true-false",
        question: "SAS heeft native ondersteuning voor FDA 21 CFR Part 11 compliance met audit trails.",
        correct: true,
        explanation: "SAS heeft decennia ervaring met FDA validation inclusief electronic signatures en audit trails."
      }
    ]
  },

  "104.7": {
    moduleId: "104.7",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is LASR in SAS Visual Analytics?",
        options: [
          { id: "a", text: "Een rapportage standaard" },
          { id: "b", text: "De in-memory analytic server voor VA" },
          { id: "c", text: "Een visualisatie type" },
          { id: "d", text: "Een data connectie" }
        ],
        correct: "b",
        explanation: "LASR (formerly) was de in-memory engine voor Visual Analytics, nu geïntegreerd in CAS."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welke SAS VA component wordt gebruikt voor self-service data exploration?",
        options: [
          { id: "a", text: "VA Designer" },
          { id: "b", text: "VA Viewer" },
          { id: "c", text: "VA Explorer" },
          { id: "d", text: "VA Mobile" }
        ],
        correct: "c",
        explanation: "VA Explorer biedt self-service data exploration met drag-and-drop visualisatie."
      },
      {
        id: "q3",
        type: "true-false",
        question: "SAS Visual Analytics reports kunnen automatisch scheduled en gedistribueerd worden via email.",
        correct: true,
        explanation: "VA ondersteunt scheduled report distribution via email, file system of SharePoint."
      }
    ]
  },

  "104.8": {
    moduleId: "104.8",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is een 'lift & shift' migratie strategie?",
        options: [
          { id: "a", text: "Complete re-write van alle code" },
          { id: "b", text: "Verplaatsen naar cloud met minimale wijzigingen" },
          { id: "c", text: "Geleidelijke migratie over jaren" },
          { id: "d", text: "Alleen nieuwe workloads in cloud" }
        ],
        correct: "b",
        explanation: "Lift & shift verplaatst workloads naar cloud met minimale wijzigingen - snelste pad maar niet cloud-native."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is een belangrijke uitdaging bij SAS migratie?",
        options: [
          { id: "a", text: "SAS code is niet portable" },
          { id: "b", text: "Legacy code compatibiliteit en data movement" },
          { id: "c", text: "SAS werkt niet in de cloud" },
          { id: "d", text: "Er zijn geen migratie tools" }
        ],
        correct: "b",
        explanation: "Grootste uitdagingen zijn legacy code compatibility, grote data volumes verplaatsen, en team training."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Parallel running - het draaien van jobs op beide platformen - is een best practice voor migratie validatie.",
        correct: true,
        explanation: "Parallel running vergelijkt outputs tussen oude en nieuwe omgeving om correctheid te valideren."
      }
    ]
  },

  // ==========================================
  // TRACK 105: PLATFORM VERGELIJKING
  // ==========================================

  "105.1": {
    moduleId: "105.1",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welke trend zien we bij alle drie de platforms?",
        options: [
          { id: "a", text: "Beweging naar on-premises" },
          { id: "b", text: "Convergentie naar lakehouse architectuur en cloud-native" },
          { id: "c", text: "Focus op alleen SQL" },
          { id: "d", text: "Abandoning van ML features" }
        ],
        correct: "b",
        explanation: "Alle platforms bewegen naar lakehouse architectuur, cloud-native deployment en open formats."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk platform is dominant bij Nederlandse zorgverzekeraars?",
        options: [
          { id: "a", text: "Databricks" },
          { id: "b", text: "Microsoft Fabric" },
          { id: "c", text: "SAS" },
          { id: "d", text: "Snowflake" }
        ],
        correct: "c",
        explanation: "SAS heeft sterke positie bij Nederlandse zorgverzekeraars voor claims analytics en fraud detection."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Een multi-platform strategie met Databricks voor ML en Fabric voor BI is een valid architectuur keuze.",
        correct: true,
        explanation: "Veel organisaties combineren platforms: bijv. Databricks voor data engineering/ML en Fabric voor BI."
      }
    ]
  },

  "105.2": {
    moduleId: "105.2",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Wat is het fundamentele verschil in storage approach tussen lakehouse en SAS?",
        options: [
          { id: "a", text: "Beide gebruiken proprietary formats" },
          { id: "b", text: "Lakehouse gebruikt open formats (Parquet/Delta), SAS proprietary (SAS7BDAT)" },
          { id: "c", text: "SAS is goedkoper" },
          { id: "d", text: "Er is geen verschil" }
        ],
        correct: "b",
        explanation: "Lakehouse platforms gebruiken open formats (Delta/Parquet), SAS heeft traditioneel proprietary formats."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk platform heeft de beste in-memory performance voor analytics?",
        options: [
          { id: "a", text: "Databricks (altijd)" },
          { id: "b", text: "Fabric (altijd)" },
          { id: "c", text: "SAS CAS (voor geladen data)" },
          { id: "d", text: "Ze zijn allemaal gelijk" }
        ],
        correct: "c",
        explanation: "SAS CAS houdt data in-memory wat zeer snelle queries oplevert, maar vereist data loading eerst."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Delta Lake en OneLake zijn beide gebaseerd op het open Delta table format.",
        correct: true,
        explanation: "Zowel Databricks (Delta Lake) als Fabric (OneLake) gebruiken het open Delta table format."
      }
    ]
  },

  "105.3": {
    moduleId: "105.3",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk platform heeft de beste native CDISC ondersteuning voor clinical trials?",
        options: [
          { id: "a", text: "Databricks" },
          { id: "b", text: "Microsoft Fabric" },
          { id: "c", text: "SAS" },
          { id: "d", text: "Alle drie gelijk" }
        ],
        correct: "c",
        explanation: "SAS heeft de Clinical Standards Toolkit met native SDTM, ADaM en Define-XML ondersteuning."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk platform integreert het beste met Azure Health Data Services (FHIR/DICOM)?",
        options: [
          { id: "a", text: "Databricks" },
          { id: "b", text: "Microsoft Fabric" },
          { id: "c", text: "SAS" },
          { id: "d", text: "Geen van alle" }
        ],
        correct: "b",
        explanation: "Fabric integreert native met Azure Health Data Services als onderdeel van Microsoft Cloud for Healthcare."
      },
      {
        id: "q3",
        type: "true-false",
        question: "OMOP Common Data Model kan op alle drie de platforms worden geïmplementeerd.",
        correct: true,
        explanation: "OMOP CDM kan als tables worden geïmplementeerd op Databricks (Delta), Fabric (Lakehouse) en SAS."
      }
    ]
  },

  "105.4": {
    moduleId: "105.4",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk platform heeft de beste native self-service BI capabilities?",
        options: [
          { id: "a", text: "Databricks" },
          { id: "b", text: "Microsoft Fabric (Power BI)" },
          { id: "c", text: "SAS Visual Analytics" },
          { id: "d", text: "Allemaal gelijk" }
        ],
        correct: "b",
        explanation: "Power BI in Fabric is marktleider voor self-service BI met de laagste learning curve."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is Direct Lake mode in Power BI?",
        options: [
          { id: "a", text: "Data importeren" },
          { id: "b", text: "DirectQuery naar databases" },
          { id: "c", text: "Direct querien van OneLake Delta tables" },
          { id: "d", text: "Export naar Excel" }
        ],
        correct: "c",
        explanation: "Direct Lake combineert import-snelheid met DirectQuery-actualiteit door Delta tables direct te querien."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Databricks SQL dashboards hebben vergelijkbare visualisatie capabilities als Power BI.",
        correct: false,
        explanation: "Databricks SQL dashboards zijn basis; voor geavanceerde visualisatie integreert men vaak met Power BI of Tableau."
      }
    ]
  },

  "105.5": {
    moduleId: "105.5",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk open-source ML lifecycle platform wordt door zowel Databricks als Fabric ondersteund?",
        options: [
          { id: "a", text: "TensorFlow" },
          { id: "b", text: "MLflow" },
          { id: "c", text: "Kubeflow" },
          { id: "d", text: "SAS Model Manager" }
        ],
        correct: "b",
        explanation: "MLflow wordt native ondersteund door Databricks en is compatible met Azure ML in Fabric."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Welk platform heeft de langste track record voor FDA-validated ML models?",
        options: [
          { id: "a", text: "Databricks" },
          { id: "b", text: "Azure ML" },
          { id: "c", text: "SAS" },
          { id: "d", text: "Allemaal nieuw" }
        ],
        correct: "c",
        explanation: "SAS heeft decennia ervaring met validated systems voor FDA-regulated ML in pharma en clinical trials."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Feature Store capabilities zijn beschikbaar op alle drie de platforms.",
        correct: true,
        explanation: "Databricks heeft native Feature Store, Azure ML heeft Feature Store, SAS heeft feature management in Model Studio."
      }
    ]
  },

  "105.6": {
    moduleId: "105.6",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk platform heeft de meest volwassen auto-classificatie van PII/PHI data?",
        options: [
          { id: "a", text: "Databricks Unity Catalog" },
          { id: "b", text: "Microsoft Purview" },
          { id: "c", text: "SAS Metadata Server" },
          { id: "d", text: "Geen van alle" }
        ],
        correct: "b",
        explanation: "Purview heeft enterprise-grade auto-classificatie met sensitivity labels en Information Protection."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is een belangrijke NEN 7513 requirement voor healthcare logging?",
        options: [
          { id: "a", text: "Alleen wie data benaderde" },
          { id: "b", text: "Wie, wat, wanneer EN met welke grondslag" },
          { id: "c", text: "Alleen timestamps" },
          { id: "d", text: "Geen logging vereist" }
        ],
        correct: "b",
        explanation: "NEN 7513 vereist logging van wie, wat, wanneer en met welke grondslag/doel data werd benaderd."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Alle drie de platforms ondersteunen row-level security voor data access control.",
        correct: true,
        explanation: "Unity Catalog, Power BI RLS, en SAS metadata security ondersteunen allemaal row-level filtering."
      }
    ]
  },

  "105.7": {
    moduleId: "105.7",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Welk platform heeft typisch de laagste 3-jarige TCO voor een mid-size zorginstelling?",
        options: [
          { id: "a", text: "Databricks" },
          { id: "b", text: "Microsoft Fabric" },
          { id: "c", text: "SAS" },
          { id: "d", text: "Hangt af van use case" }
        ],
        correct: "b",
        explanation: "Fabric heeft vaak lagere TCO door capacity-based pricing en unified platform, maar SAS kan waarde bieden via specialisatie."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is een DBU in Databricks pricing?",
        options: [
          { id: "a", text: "Database Unit" },
          { id: "b", text: "Databricks Unit - de consumption metric" },
          { id: "c", text: "Data Backup Unit" },
          { id: "d", text: "Development Build Unit" }
        ],
        correct: "b",
        explanation: "DBU (Databricks Unit) is de consumption metric waarmee Databricks workloads worden geprijsd."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Spot instances in Databricks kunnen tot 90% kostenbesparing opleveren voor fault-tolerant workloads.",
        correct: true,
        explanation: "Spot/preemptible instances zijn significant goedkoper, geschikt voor jobs die bij preemption kunnen herstarten."
      }
    ]
  },

  "105.8": {
    moduleId: "105.8",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Voor een academisch ziekenhuis met research focus en FDA requirements, welke platform combinatie is het meest geschikt?",
        options: [
          { id: "a", text: "Alleen Fabric" },
          { id: "b", text: "Alleen Databricks" },
          { id: "c", text: "SAS voor research + Databricks/Fabric voor operations" },
          { id: "d", text: "Alleen SAS" }
        ],
        correct: "c",
        explanation: "UMC's combineren vaak SAS (FDA compliance, research) met Databricks (data science) of Fabric (operations)."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Wat is de belangrijkste kritische succesfactor voor platform implementatie?",
        options: [
          { id: "a", text: "De nieuwste technologie kiezen" },
          { id: "b", text: "Executive sponsorship en clear use cases" },
          { id: "c", text: "De goedkoopste optie kiezen" },
          { id: "d", text: "Zo snel mogelijk implementeren" }
        ],
        correct: "b",
        explanation: "Executive sponsorship voor budget/priority en duidelijke use cases voor waarde zijn kritische succesfactoren."
      },
      {
        id: "q3",
        type: "true-false",
        question: "Een gefaseerde implementatie (pilot → expansion → scale) verlaagt het risico van grote platform implementaties.",
        correct: true,
        explanation: "Gefaseerde aanpak maakt learning mogelijk en reduceert risico door vroege feedback en iteratie."
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Welk type zorginstelling is het meest geschikt voor een single-platform Fabric strategie?",
        options: [
          { id: "a", text: "Academisch ziekenhuis met research" },
          { id: "b", text: "Regionaal ziekenhuis met Microsoft 365" },
          { id: "c", text: "Farmaceutisch bedrijf met FDA trials" },
          { id: "d", text: "Health tech startup met ML focus" }
        ],
        correct: "b",
        explanation: "Regionale ziekenhuizen met bestaande M365 en Power BI profiteren het meest van unified Fabric platform."
      }
    ]
  }
}

export const getQuiz = (moduleId) => {
  return quizzes[moduleId] || null
}
