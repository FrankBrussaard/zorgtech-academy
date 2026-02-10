# ZorgTech Academy - Projectplan

## Visie & Doelstelling

Een web-based trainingsplatform voor zorgtechnologie-adviseurs in Nederland. Korte, hapklare modules die nieuwe consultants snel op snelheid brengen met de complexe wereld van Nederlandse zorginfrastructuur, wet- en regelgeving, en technologie.

**Doelgroep:** Nieuwe consultants bij adviesbureaus, IT-professionals die de zorgsector betreden

**Kernwaarde:** Van "weet niets van zorg" naar "kan een inhoudelijk gesprek voeren met klanten" in enkele weken

---

## Technische Architectuur

### Stack Keuze (GitHub Pages Compatible)

```
Frontend:     React + Vite (static build)
Styling:      Tailwind CSS
Search:       Fuse.js (client-side fuzzy search)
State:        LocalStorage (voortgang, quiz scores)
Auth:         Simpele client-side wachtwoordbeveiliging
Hosting:      GitHub Pages (gratis)
Build:        GitHub Actions (auto-deploy on push)
```

### Projectstructuur

```
zorgtech-academy/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   ├── Module/
│   │   ├── Quiz/
│   │   ├── Search/
│   │   ├── Glossary/
│   │   └── Auth/
│   ├── content/
│   │   ├── modules/           # Markdown content per module
│   │   ├── quizzes/           # Quiz vragen per module
│   │   ├── cases/             # Praktijkcases
│   │   └── glossary.json      # Begrippenlijst
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── scripts/
│   └── build-search-index.js  # Genereert search index bij build
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## Content Structuur

### Leerpad Overzicht

Het curriculum is opgebouwd in 6 hoofdtracks, elk met meerdere modules van 5-10 minuten leestijd.

```
┌─────────────────────────────────────────────────────────────────┐
│  TRACK 1: Zorglandschap Nederland (Fundament)                   │
├─────────────────────────────────────────────────────────────────┤
│  1.1 Hoe werkt de Nederlandse zorg?                             │
│  1.2 Zorgverzekeringswet & financieringsstromen                 │
│  1.3 Belangrijkste spelers: ziekenhuizen, huisartsen, VVT       │
│  1.4 Toezichthouders: NZa, IGJ, AP                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  TRACK 2: Bekostiging & DBC's                                   │
├─────────────────────────────────────────────────────────────────┤
│  2.1 Wat is een DBC/DOT? Basisprincipes                         │
│  2.2 DBC-systematiek: zorgproducten, zorgactiviteiten           │
│  2.3 Grouper logica en afleiding                                │
│  2.4 Add-ons, overige producten, IC-bekostiging                 │
│  2.5 GGZ: DBC-GGZ vs ZPM                                        │
│  2.6 Huisartsenzorg: bekostiging en ketenzorg                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  TRACK 3: Zorginfrastructuur & Afsprakenstelsels                │
├─────────────────────────────────────────────────────────────────┤
│  3.1 Overzicht: LSP, Twiin, VZVZ, Mitz                          │
│  3.2 LSP: Landelijk Schakelpunt in detail                       │
│  3.3 Twiin: Vertrouwensnetwerk en usecases                      │
│  3.4 Mitz: Toestemmingsvoorziening                              │
│  3.5 AORTA: Basisinfrastructuur                                 │
│  3.6 Koppeltaal (GGZ), MedMij (PGO's)                           │
│  3.7 Zorgadresboek, UZI, BSN in de zorg                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  TRACK 4: Interoperabiliteit & Standaarden                      │
├─────────────────────────────────────────────────────────────────┤
│  4.1 HL7v2: De legacy standaard                                 │
│  4.2 HL7 FHIR: Moderne zorgdata-uitwisseling                    │
│  4.3 FHIR in Nederland: Nictiz, informatiestandaarden           │
│  4.4 Zibs (Zorginformatiebouwstenen)                            │
│  4.5 SNOMED CT, LOINC, ICD-10: Terminologie                     │
│  4.6 XDS/XCA, DICOM: Beelduitwisseling                          │
│  4.7 CDA vs FHIR Documents                                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  TRACK 5: Wet- & Regelgeving                                    │
├─────────────────────────────────────────────────────────────────┤
│  5.1 AVG/GDPR in de zorg                                        │
│  5.2 WGBO: Wet op de Geneeskundige Behandelingsovereenkomst     │
│  5.3 Wabvpz: Elektronische gegevensuitwisseling                 │
│  5.4 NEN 7510, 7512, 7513: Informatiebeveiliging                │
│  5.5 Wegiz: Wet elektronische gegevensuitwisseling              │
│  5.6 NIS2 en cybersecurity in de zorg                           │
│  5.7 Medische hulpmiddelen: MDR en software als medical device  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  TRACK 6: AI & Innovatie in de Zorg                             │
├─────────────────────────────────────────────────────────────────┤
│  6.1 AI Act: Wat betekent dit voor zorgtechnologie?             │
│  6.2 AI classificatie: hoog-risico AI in de zorg                │
│  6.3 Klinische beslisondersteuning (CDSS)                       │
│  6.4 LLMs en generatieve AI in de zorg                          │
│  6.5 Validatie en certificering van AI-systemen                 │
│  6.6 Ethische kaders en responsible AI                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Module Template

Elke module volgt een consistente structuur:

```markdown
---
id: "3.2"
title: "LSP: Landelijk Schakelpunt in detail"
track: 3
duration: 8  # minuten
tags: ["infrastructuur", "LSP", "VZVZ", "uitwisseling"]
sources:
  - name: "VZVZ - Zo werkt het LSP"
    url: "https://www.vzvz.nl/over-het-lsp/zo-werkt-het-lsp"
  - name: "Nictiz - LSP Architectuur"
    url: "https://www.nictiz.nl/..."
prerequisites: ["3.1"]
---

## In het kort
[2-3 zinnen kernboodschap]

## Wat is het LSP?
[Uitleg in begrijpelijke taal]

## Hoe werkt het?
[Technische werking, vereenvoudigd]

## Waarom is dit relevant voor jou als adviseur?
[Praktische toepassing]

## Veelgemaakte misvattingen
[Wat mensen vaak verkeerd begrijpen]

## Kernbegrippen
- **Term 1**: Definitie
- **Term 2**: Definitie

## Bronnen & Verder lezen
[Automatisch gegenereerd uit frontmatter]
```

---

## Praktijkcases

Elke track bevat 1-2 praktijkcases gebaseerd op realistische scenario's:

### Voorbeeld Case: "Het Regionale Samenwerkingsverband"

```markdown
---
id: "case-3a"
title: "Beelduitwisseling tussen ziekenhuizen"
track: 3
difficulty: "intermediate"
duration: 15
---

## Situatie
Drie ziekenhuizen in de regio willen radiologische beelden delen. 
Ze gebruiken verschillende PACS-systemen en hebben vragen over...

## Jouw rol
Je bent ingehuurd als adviseur om een advies te schrijven over...

## Vragen om te beantwoorden
1. Welke afsprakenstelsels zijn relevant?
2. Wat zijn de juridische aandachtspunten?
3. Welke technische standaarden adviseer je?

## Discussiepunten
[Uitklapbaar: mogelijke antwoorden en overwegingen]
```

---

## Quiz Systeem

### Quiz Format

```json
{
  "moduleId": "3.2",
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Welke organisatie beheert het LSP?",
      "options": [
        { "id": "a", "text": "Nictiz" },
        { "id": "b", "text": "VZVZ" },
        { "id": "c", "text": "VWS" },
        { "id": "d", "text": "NZa" }
      ],
      "correct": "b",
      "explanation": "VZVZ (Vereniging van Zorgaanbieders voor Zorgcommunicatie) beheert het LSP. Nictiz is verantwoordelijk voor standaarden."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "Een patiënt moet altijd toestemming geven voordat gegevens via het LSP gedeeld worden.",
      "correct": true,
      "explanation": "Ja, het LSP werkt op basis van opt-in. Patiënten moeten expliciet toestemming geven."
    }
  ]
}
```

### Quiz Features
- 3-5 vragen per module
- Directe feedback met uitleg
- Voortgang wordt lokaal opgeslagen
- "Herkansing" mogelijk

---

## Glossary

Centrale begrippenlijst, doorzoekbaar en gelinkt vanuit modules:

```json
{
  "terms": [
    {
      "term": "LSP",
      "fullName": "Landelijk Schakelpunt",
      "definition": "Landelijke infrastructuur voor het uitwisselen van medische gegevens tussen zorgverleners.",
      "category": "infrastructuur",
      "relatedTerms": ["VZVZ", "AORTA", "Twiin"],
      "sources": ["https://www.vzvz.nl/over-het-lsp"]
    },
    {
      "term": "DBC",
      "fullName": "Diagnose Behandel Combinatie",
      "definition": "Een DBC beschrijft het geheel van activiteiten en verrichtingen van een zorgaanbieder...",
      "category": "bekostiging",
      "relatedTerms": ["DOT", "Zorgproduct", "Grouper"]
    }
  ]
}
```

---

## Zoekfunctionaliteit

Client-side search met Fuse.js:

```javascript
// Search indexeert:
// - Module titels en content
// - Glossary termen
// - Case titels en beschrijvingen
// - Tags

const searchOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'content', weight: 0.3 },
    { name: 'tags', weight: 0.2 },
    { name: 'terms', weight: 0.1 }
  ],
  threshold: 0.3,
  includeMatches: true
};
```

---

## Authenticatie (Simpel)

Wachtwoordbeveiliging zonder backend:

```javascript
// Simpele client-side auth
// Wachtwoord wordt gehashed opgeslagen in config
const AUTH_CONFIG = {
  passwordHash: "sha256-hash-van-wachtwoord",
  sessionDuration: 7 * 24 * 60 * 60 * 1000 // 7 dagen
};

// Bij eerste bezoek: wachtwoord prompt
// Na validatie: sessie in localStorage
// Niet waterdicht, maar voldoende voor interne training
```

---

## Bronnen per Track

### Track 1: Zorglandschap
- Rijksoverheid.nl - Zorgstelsel
- Zorginstituut Nederland
- NZa - Nederlandse Zorgautoriteit

### Track 2: Bekostiging & DBC's
- NZa - DBC-systematiek
- DBC-onderhoud (DHD)
- Vektis - Declaratiestandaarden

### Track 3: Infrastructuur
- **VZVZ**: https://www.vzvz.nl/
- **Twiin**: https://www.twiin.nl/
- **Mitz**: https://www.mitz.nl/
- **Nictiz**: https://www.nictiz.nl/

### Track 4: Standaarden
- Nictiz - Informatiestandaarden
- HL7 Nederland
- SNOMED International (NL editie)
- Nictiz - Zibs

### Track 5: Wet- & Regelgeving
- Autoriteit Persoonsgegevens
- KNMG Richtlijnen
- NEN Normen (7510, 7512, 7513)

### Track 6: AI
- EU AI Act tekst
- Rijksoverheid - AI in de zorg
- MDCG Guidelines (Medical Devices)

---

## MVP Scope

### Fase 1: MVP (2-3 weken)
**Doel:** Werkend prototype met kernfunctionaliteit

- [ ] Project setup (Vite + React + Tailwind)
- [ ] Basis layout en navigatie
- [ ] Wachtwoordbeveiliging
- [ ] 2 complete tracks met content (Track 1 + Track 3)
- [ ] Module weergave met bronvermelding
- [ ] Basis quiz functionaliteit
- [ ] GitHub Pages deployment

### Fase 2: Content Uitbreiding (2-3 weken)
- [ ] Resterende 4 tracks
- [ ] Alle quizzes
- [ ] Glossary met zoekfunctie
- [ ] 4-6 praktijkcases

### Fase 3: Polish (1-2 weken)
- [ ] Full-text zoekfunctie
- [ ] Voortgangstracking dashboard
- [ ] Responsive design optimalisatie
- [ ] Performance optimalisatie

### Fase 4: Iteratie (doorlopend)
- [ ] Feedback verwerken
- [ ] Content updates (regelgeving verandert!)
- [ ] Nieuwe modules toevoegen
- [ ] Eventueel: export naar PDF/print

---

## Development Workflow met Claude Code

### Opstarten
```bash
# Clone repo
git clone https://github.com/[username]/zorgtech-academy.git
cd zorgtech-academy

# Install dependencies
npm install

# Start development server
npm run dev
```

### Content Toevoegen
1. Maak nieuwe module in `src/content/modules/`
2. Voeg quiz toe in `src/content/quizzes/`
3. Update glossary indien nodig
4. Test lokaal
5. Commit en push → auto-deploy

### Claude Code Handover Template
Bij vol context window, gebruik dit format:

```markdown
## ZorgTech Academy - Handover Summary

### Huidige Status
- Fase: [MVP/Content/Polish]
- Laatste voltooide taak: [beschrijving]
- Volgende taak: [beschrijving]

### Technische Context
- Stack: React + Vite + Tailwind, GitHub Pages
- Repo: [url]
- Belangrijke bestanden: [lijst]

### Open Issues
1. [issue]
2. [issue]

### Content Status
- Track 1: [status]
- Track 2: [status]
- ...

### Beslissingen genomen
- [beslissing 1]
- [beslissing 2]
```

---

## Volgende Stappen

1. **Repo aanmaken** op GitHub
2. **Project scaffolding** met Vite + React + Tailwind
3. **Basis componenten** bouwen (Layout, Module, Quiz)
4. **Track 1 content** schrijven (Zorglandschap - 4 modules)
5. **Track 3 content** schrijven (Infrastructuur - 7 modules)
6. **Deployment** naar GitHub Pages
7. **Testen** met collega's
8. **Itereren** op basis van feedback

---

*Dit plan is het startpunt. Claude Code kan dit gebruiken om stap voor stap het platform te bouwen, met jou als reviewer van zowel code als content.*
