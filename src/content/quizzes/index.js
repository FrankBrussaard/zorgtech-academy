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
  }
}

export const getQuiz = (moduleId) => {
  return quizzes[moduleId] || null
}
