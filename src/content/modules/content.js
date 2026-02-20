// Module content - volledige tekst per module
export const moduleContent = {
  "1.1": {
    title: "Hoe werkt de Nederlandse zorg?",
    summary: "De Nederlandse gezondheidszorg is een van de best georganiseerde ter wereld, gebaseerd op gereguleerde marktwerking met universele toegang.",
    content: `
## In het kort

De Nederlandse zorg is georganiseerd rond drie pijlers: curatieve zorg (genezing), langdurige zorg en publieke gezondheidszorg. Het systeem combineert marktwerking met sterke overheidsregulering om kwaliteit en toegankelijkheid te waarborgen.

## Het Nederlandse zorgstelsel

Nederland kent een uniek zorgstelsel dat in 2006 fundamenteel is hervormd. De kern is **gereguleerde marktwerking**: private partijen (verzekeraars, zorgaanbieders) opereren in een markt met stevige overheidsregels.

### De drie compartimenten

1. **Curatieve zorg (Zvw)** - Gefinancierd via de Zorgverzekeringswet. Denk aan huisarts, ziekenhuis, apotheek.

2. **Langdurige zorg (Wlz)** - Via de Wet langdurige zorg. Voor mensen die blijvend 24-uurs zorg nodig hebben.

3. **Maatschappelijke ondersteuning (Wmo)** - Uitgevoerd door gemeenten. Hulp bij zelfredzaamheid en participatie.

## Waarom is dit relevant voor jou als adviseur?

Als zorgtechnologie-adviseur moet je begrijpen hoe geldstromen lopen en wie welke beslissingen neemt. Een ziekenhuis-CIO heeft andere zorgen dan een huisarts of een Wlz-instelling.

## Veelgemaakte misvattingen

- **"De overheid betaalt de zorg"** - Nee, zorgverzekeraars betalen de curatieve zorg, gefinancierd door premies.
- **"Ziekenhuizen zijn van de overheid"** - De meeste zijn private stichtingen zonder winstoogmerk.

## Kernbegrippen

- **Zvw**: Zorgverzekeringswet - de verplichte basisverzekering
- **Wlz**: Wet langdurige zorg - voor blijvende intensieve zorg
- **Wmo**: Wet maatschappelijke ondersteuning - gemeentelijke ondersteuning
    `,
    sources: [
      { name: "Rijksoverheid - Zorgstelsel", url: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering" },
      { name: "Zorginstituut Nederland", url: "https://www.zorginstituutnederland.nl" }
    ]
  },

  "1.2": {
    title: "Zorgverzekeringswet & financieringsstromen",
    summary: "De Zvw regelt de verplichte basisverzekering. Zorgverzekeraars ontvangen premies en risicoverevening, en contracteren zorgaanbieders.",
    content: `
## In het kort

Elke Nederlander is verplicht verzekerd via de Zorgverzekeringswet (Zvw). Verzekeraars hebben acceptatieplicht en bieden een wettelijk vastgesteld basispakket. De financiering loopt via premies, eigen risico en rijksbijdragen.

## Hoe werkt de financiering?

### Inkomstenbronnen verzekeraars

1. **Nominale premie** - Wat je maandelijks betaalt aan je verzekeraar (gemiddeld ~€140/maand)
2. **Inkomensafhankelijke bijdrage** - Via je werkgever/uitkering afgedragen
3. **Rijksbijdrage** - Overheid betaalt mee voor kinderen onder 18
4. **Eigen risico** - €385 per jaar (2024), eerst zelf betalen

### Risicoverevening

Om te voorkomen dat verzekeraars alleen gezonde mensen willen, is er **risicoverevening**: verzekeraars met relatief zieke verzekerden krijgen compensatie uit een centraal fonds.

## Zorginkoop

Verzekeraars kopen zorg in bij zorgaanbieders. Dit gebeurt via contracten waarin prijs, volume en kwaliteit worden afgesproken. Niet-gecontracteerde zorg wordt vaak maar deels vergoed.

## Waarom is dit relevant voor jou als adviseur?

De druk op kosten bepaalt veel IT-beslissingen. Verzekeraars eisen steeds meer data over kwaliteit en uitkomsten. Dit drijft digitalisering.

## Kernbegrippen

- **Basispakket**: Wettelijk vastgestelde zorg die elke verzekeraar moet dekken
- **Risicoverevening**: Financiële compensatie voor verzekeraars met ongezonde populatie
- **Zorginkoop**: Proces waarbij verzekeraars contracten sluiten met zorgaanbieders
    `,
    sources: [
      { name: "Zorginstituut - Zvw", url: "https://www.zorginstituutnederland.nl" },
      { name: "NZa - Zorgverzekeringswet", url: "https://www.nza.nl" }
    ]
  },

  "1.3": {
    title: "Belangrijkste spelers: ziekenhuizen, huisartsen, VVT",
    summary: "De Nederlandse zorg kent diverse typen aanbieders: ziekenhuizen, huisartsen, VVT-instellingen (verpleging, verzorging, thuiszorg) en GGZ.",
    content: `
## In het kort

De zorg wordt geleverd door duizenden organisaties, van eenmanspraktijken tot grote concerns. Elk type aanbieder heeft eigen bekostiging, regelgeving en IT-uitdagingen.

## Ziekenhuizen

Nederland telt zo'n 70 ziekenhuizen, onderverdeeld in:

- **Academische ziekenhuizen (UMC's)** - 7 stuks, verbonden aan universiteiten
- **Topklinische ziekenhuizen (STZ)** - Complexe zorg, vaak ook opleiding
- **Algemene ziekenhuizen** - Basiszorg en veel voorkomende specialismen
- **Categorale ziekenhuizen** - Gespecialiseerd (bijv. oogziekenhuis, kankercentrum)

## Huisartsen

De huisarts is de poortwachter van het zorgstelsel. Ongeveer 13.000 huisartsen werken solo, in duo's of in gezondheidscentra. Belangrijke trend: **huisartsenposten (HAP's)** voor avond/nacht/weekend.

## VVT: Verpleging, Verzorging en Thuiszorg

Een grote sector met:
- Verpleeghuizen (Wlz-gefinancierd)
- Thuiszorgorganisaties
- Wijkverpleging (Zvw-gefinancierd)

## GGZ

Geestelijke gezondheidszorg, opgedeeld in:
- Basis-GGZ (lichtere problematiek)
- Specialistische GGZ (complexere behandeling)

## Kernbegrippen

- **UMC**: Universitair Medisch Centrum
- **VVT**: Verpleging, Verzorging en Thuiszorg
- **HAP**: Huisartsenpost
    `,
    sources: [
      { name: "NVZ - Nederlandse Vereniging van Ziekenhuizen", url: "https://www.nvz-ziekenhuizen.nl" },
      { name: "LHV - Landelijke Huisartsen Vereniging", url: "https://www.lhv.nl" }
    ]
  },

  "1.4": {
    title: "Toezichthouders: NZa, IGJ, AP",
    summary: "Drie belangrijke toezichthouders bewaken kwaliteit, toegankelijkheid en privacy in de zorg: NZa, IGJ en de Autoriteit Persoonsgegevens.",
    content: `
## In het kort

De Nederlandse zorg kent meerdere toezichthouders die elk vanuit een eigen perspectief toezien op het zorgstelsel. Als adviseur krijg je hier regelmatig mee te maken.

## Nederlandse Zorgautoriteit (NZa)

De NZa houdt toezicht op **markten en bekostiging**:

- Stelt tarieven en prestatiebeschrijvingen vast
- Houdt toezicht op verzekeraars en zorgaanbieders
- Bewaakt toegankelijkheid van zorg
- Beheert de DBC-systematiek

## Inspectie Gezondheidszorg en Jeugd (IGJ)

De IGJ richt zich op **kwaliteit en veiligheid**:

- Inspecteert zorgaanbieders
- Onderzoekt calamiteiten en incidenten
- Handhaaft wet- en regelgeving
- Geeft verbetermaatregelen of sluit instellingen

## Autoriteit Persoonsgegevens (AP)

De AP houdt toezicht op **privacy en gegevensbescherming**:

- Handhaaft de AVG
- Onderzoekt datalekken
- Kan boetes opleggen bij overtredingen
- Geeft richtlijnen voor gegevensverwerking

## Waarom is dit relevant voor jou als adviseur?

Elk IT-project in de zorg raakt aan regelgeving van deze toezichthouders. Je moet weten welke eisen gelden en hoe je hieraan voldoet.

## Kernbegrippen

- **NZa**: Nederlandse Zorgautoriteit - markttoezicht en bekostiging
- **IGJ**: Inspectie Gezondheidszorg en Jeugd - kwaliteitstoezicht
- **AP**: Autoriteit Persoonsgegevens - privacytoezicht
    `,
    sources: [
      { name: "NZa", url: "https://www.nza.nl" },
      { name: "IGJ", url: "https://www.igj.nl" },
      { name: "Autoriteit Persoonsgegevens", url: "https://autoriteitpersoonsgegevens.nl" }
    ]
  },

  "3.1": {
    title: "Overzicht: LSP, Twiin, VZVZ, Mitz",
    summary: "Nederland kent verschillende infrastructuren voor zorgdata-uitwisseling. De belangrijkste zijn het LSP, Twiin, en Mitz.",
    content: `
## In het kort

De Nederlandse zorg werkt aan een ecosysteem van infrastructuren om zorgdata veilig uit te wisselen. Dit is complex omdat privacy centraal staat en er geen centrale database is.

## Het landschap

### LSP (Landelijk Schakelpunt)

Het oudste en meest gebruikte netwerk, beheerd door VZVZ. Primair voor:
- Huisartswaarneming (huisartsenposten)
- Medicatiegegevens (apotheken, huisartsen)

### Twiin

Een nieuwer vertrouwensnetwerk voor:
- Beelduitwisseling tussen ziekenhuizen
- Verwijzingen en uitslagen
- Bredere gegevensuitwisseling

### Mitz

De nationale toestemmingsvoorziening waar burgers kunnen aangeven:
- Welke zorgverleners hun gegevens mogen inzien
- Welke uitwisselingen zijn toegestaan

### VZVZ

Vereniging van Zorgaanbieders voor Zorgcommunicatie - beheert het LSP en werkt aan Mitz.

## Hoe hangen ze samen?

Het idee is dat Mitz de toestemmingen beheert, en netwerken als LSP en Twiin deze raadplegen voordat ze gegevens uitwisselen.

## Kernbegrippen

- **LSP**: Landelijk Schakelpunt - netwerk voor medicatie en huisartsinformatie
- **Twiin**: Vertrouwensnetwerk voor bredere uitwisseling
- **Mitz**: Toestemmingsvoorziening voor burgers
- **VZVZ**: Beheerorganisatie
    `,
    sources: [
      { name: "VZVZ", url: "https://www.vzvz.nl" },
      { name: "Twiin", url: "https://www.twiin.nl" },
      { name: "Mitz", url: "https://www.mitz.nl" }
    ]
  },

  "3.2": {
    title: "LSP: Landelijk Schakelpunt in detail",
    summary: "Het LSP is het meest gebruikte netwerk voor medicatiegegevens en huisartswaarneming. Werkt op basis van opt-in toestemming.",
    content: `
## In het kort

Het Landelijk Schakelpunt (LSP) verbindt huisartsen, apothekers en huisartsenposten. Het maakt het mogelijk om actuele medicatiegegevens en huisartsinformatie te raadplegen bij waarneming.

## Hoe werkt het LSP?

### Het principe

Het LSP is geen centrale database. Het is een **verwijsindex**: het weet welke zorgverlener gegevens over welke patiënt heeft, en faciliteert de uitwisseling op het moment dat dat nodig is.

### Proces

1. **Patiënt geeft toestemming** (opt-in) bij huisarts of apotheek
2. **Verwijzing wordt geregistreerd** in het LSP
3. Bij waarneming: **zorgverlener vraagt gegevens op**
4. LSP routeert verzoek naar bronhouder
5. Bronhouder stuurt gegevens terug

### Aangesloten partijen

- Vrijwel alle huisartsenpraktijken
- De meeste apotheken
- Alle huisartsenposten
- Steeds meer ziekenhuizen (medicatieverificatie)

## Governance

Het LSP wordt beheerd door VZVZ. Aansluiting vereist:
- Gekwalificeerde software
- UZI-certificaten
- Naleving van het LSP-afsprakenstelsel

## Kernbegrippen

- **Opt-in**: Patiënt moet actief toestemming geven
- **Verwijsindex**: LSP slaat zelf geen medische gegevens op
- **UZI**: Unieke Zorgverlener Identificatie - certificaat voor authenticatie
    `,
    sources: [
      { name: "VZVZ - Zo werkt het LSP", url: "https://www.vzvz.nl/over-het-lsp/zo-werkt-het-lsp" }
    ]
  },

  "3.3": {
    title: "Twiin: Vertrouwensnetwerk en usecases",
    summary: "Twiin is een modern vertrouwensnetwerk voor bredere gegevensuitwisseling, inclusief beelden en documenten tussen ziekenhuizen.",
    content: `
## In het kort

Twiin is het vertrouwensnetwerk dat de uitwisseling van zorginformatie mogelijk maakt tussen organisaties die elkaar niet persoonlijk kennen, maar wel vertrouwen.

## Wat is Twiin?

Twiin staat voor "Toegang tot en Werken met Informatie in het zorgInformatie Netwerk". Het is:

- Een **afsprakenstelsel** (regels, standaarden, governance)
- Een **vertrouwenskader** (hoe weet je dat je de ander kunt vertrouwen?)
- Ondersteund door **technische infrastructuur**

## Belangrijkste usecases

### Beelduitwisseling (XDS/XCA)

Ziekenhuizen kunnen radiologische beelden delen:
- Patiënt hoeft geen cd-rom mee te nemen
- Radioloog ziet eerdere onderzoeken
- Minder dubbele scans

### Verwijzingen en uitslagen

- Huisarts stuurt elektronische verwijzing
- Specialist stuurt uitslag terug

### Medicatieoverdracht

Naast LSP werkt Twiin aan bredere medicatie-uitwisseling.

## Hoe werkt het vertrouwen?

Deelnemers moeten voldoen aan:
- Kwalificatie-eisen (NEN 7510, etc.)
- Afspraken over gebruik
- Technische standaarden

## Kernbegrippen

- **Afsprakenstelsel**: Set van regels en standaarden waaraan deelnemers moeten voldoen
- **XDS/XCA**: Standaarden voor beelddeling (IHE profielen)
    `,
    sources: [
      { name: "Twiin", url: "https://www.twiin.nl" }
    ]
  },

  "3.4": {
    title: "Mitz: Toestemmingsvoorziening",
    summary: "Mitz is de nationale voorziening waar burgers hun toestemmingen voor gegevensuitwisseling kunnen beheren.",
    content: `
## In het kort

Mitz (voorheen onderdeel van het LSP-toestemmingsregister) wordt de centrale plek waar Nederlanders kunnen aangeven welke zorgverleners hun gegevens mogen inzien.

## Waarom Mitz?

Het huidige systeem met toestemmingen per zorgverlener is:
- Onoverzichtelijk voor burgers
- Moeilijk te beheren voor zorgverleners
- Niet geschikt voor complexe scenario's

## Hoe werkt Mitz?

### Voor burgers

- Inloggen via DigiD
- Overzicht van alle toestemmingen
- Toestemmingen geven, intrekken of aanpassen
- Zien wie gegevens heeft opgevraagd (logging)

### Voor zorgverleners

- Bij gegevensuitwisseling: Mitz raadplegen
- Toestemming ontvangen of geweigerd
- Registratie van opvragingen

## Status

Mitz is nog in ontwikkeling en wordt stapsgewijs uitgerold. Het moet uiteindelijk de centrale toestemmingsvoorziening worden voor alle zorgnetwerken.

## Kernbegrippen

- **Toestemmingsvoorziening**: Centrale plek voor consent-beheer
- **Logging**: Registratie wie wanneer welke gegevens heeft ingezien
    `,
    sources: [
      { name: "Mitz", url: "https://www.mitz.nl" },
      { name: "VZVZ - Mitz", url: "https://www.vzvz.nl/diensten/mitz" }
    ]
  },

  "3.5": {
    title: "AORTA: Basisinfrastructuur",
    summary: "AORTA is het landelijk referentiearchitectuur voor elektronische communicatie in de zorg, ontwikkeld door Nictiz.",
    content: `
## In het kort

AORTA staat voor Architectuur voor Overdracht en Referentie van Transmuraal gedeelde Applicatiegegevens. Het is de blauwdruk voor veilige gegevensuitwisseling in de Nederlandse zorg.

## Wat is AORTA?

AORTA is een **referentiearchitectuur**, geen systeem. Het beschrijft:

- Hoe zorgnetwerken moeten werken
- Welke componenten nodig zijn
- Hoe beveiliging en identificatie werken
- Welke standaarden gebruikt moeten worden

## Kerncomponenten

### Identificatie & Authenticatie

- **UZI-pas**: Identificatie van zorgverleners
- **BSN**: Identificatie van patiënten
- **Zorgadresboek**: Wie is aangesloten waar?

### Adressering

- Hoe vind je de juiste zorgverlener?
- Hoe routeer je berichten?

### Beveiliging

- Versleuteling
- Ondertekening
- Logging en auditing

## Relatie met andere netwerken

AORTA is de basis waarop netwerken als LSP zijn gebouwd. Nieuwere initiatieven zoals Twiin bouwen voort op dezelfde principes.

## Kernbegrippen

- **Referentiearchitectuur**: Blauwdruk, geen implementatie
- **Transmuraal**: Over organisatiegrenzen heen
    `,
    sources: [
      { name: "Nictiz - AORTA", url: "https://www.nictiz.nl" }
    ]
  },

  "3.6": {
    title: "Koppeltaal (GGZ), MedMij (PGO's)",
    summary: "Koppeltaal verbindt eHealth-toepassingen in de GGZ. MedMij maakt het mogelijk dat burgers hun gezondheidsdata verzamelen in een PGO.",
    content: `
## In het kort

Naast de grote infrastructuren zijn er domeinspecifieke netwerken: Koppeltaal voor GGZ-eHealth en MedMij voor persoonlijke gezondheidsomgevingen.

## Koppeltaal

### Wat is het?

Koppeltaal verbindt eHealth-modules met EPD's in de GGZ. Denk aan:
- Online behandelmodules
- Dagboek-apps
- Vragenlijsten

### Hoe werkt het?

- **FHIR-gebaseerd** berichtenverkeer
- eHealth-leverancier koppelt aan Koppeltaal
- EPD koppelt aan Koppeltaal
- Gegevens stromen tussen applicaties

### Voorbeeld

Patiënt maakt huiswerkopdracht in een app. Behandelaar ziet resultaat in het EPD.

## MedMij

### Wat is het?

MedMij is het afsprakenstelsel waarmee burgers hun gezondheidsgegevens kunnen verzamelen in een **Persoonlijke Gezondheidsomgeving (PGO)**.

### Hoe werkt het?

1. Burger kiest een PGO (app)
2. Burger geeft toestemming bij zorgaanbieder
3. Gegevens worden opgehaald naar PGO
4. Burger heeft eigen gezondheidsdossier

## Kernbegrippen

- **PGO**: Persoonlijke Gezondheidsomgeving - app voor eigen gezondheidsdata
- **eHealth**: Digitale gezondheidstools
    `,
    sources: [
      { name: "Koppeltaal", url: "https://www.koppeltaal.nl" },
      { name: "MedMij", url: "https://www.medmij.nl" }
    ]
  },

  "3.7": {
    title: "Zorgadresboek, UZI, BSN in de zorg",
    summary: "Identificatie in de zorg: het Zorgadresboek voor organisaties, UZI voor zorgverleners en BSN voor patiënten.",
    content: `
## In het kort

Betrouwbare identificatie is essentieel voor veilige gegevensuitwisseling. Nederland kent drie pijlers: het Zorgadresboek, UZI-registers en het BSN.

## Zorgadresboek

Het Zorgadresboek is de "telefoongids" van de zorg:

- Welke organisaties zijn aangesloten op welke netwerken?
- Wat zijn hun technische adressen (endpoints)?
- Welke systemen gebruiken ze?

Beheerd door VZVZ en Nictiz.

## UZI (Unieke Zorgverlener Identificatie)

### Wat is het?

Het UZI-register bevat alle bevoegde zorgverleners in Nederland:
- Artsen, verpleegkundigen, apothekers, etc.
- Uniek identificatienummer
- Koppeling aan BIG-register

### UZI-pas

Een smartcard waarmee zorgverleners:
- Inloggen op systemen
- Berichten digitaal ondertekenen
- Zich identificeren bij netwerken

## BSN in de zorg

Het Burgerservicenummer mag in de zorg worden gebruikt voor:
- Patiëntidentificatie
- Koppeling van gegevens over instellingen heen

Let op: strenge regels over wie het BSN mag verwerken!

## Kernbegrippen

- **Zorgadresboek**: Directory van zorgorganisaties
- **UZI**: Identificatiesysteem voor zorgverleners
- **BIG-register**: Bevoegdheidsregistratie voor zorgverleners
    `,
    sources: [
      { name: "UZI-register", url: "https://www.uziregister.nl" },
      { name: "BIG-register", url: "https://www.bigregister.nl" }
    ]
  },

  // TRACK 2: Bekostiging & DBC's

  "2.1": {
    title: "Wat is een DBC/DOT? Basisprincipes",
    summary: "DBC's (Diagnose Behandel Combinaties) vormen de basis van ziekenhuisbekostiging. DOT is de doorontwikkeling voor meer transparantie.",
    content: `
## In het kort

Een DBC beschrijft het complete traject van diagnose tot behandeling voor een patiënt. Het is de basis waarop ziekenhuizen betaald worden voor geleverde zorg.

## Wat is een DBC?

DBC staat voor **Diagnose Behandel Combinatie**. Het is een "product" dat:

- Begint bij de zorgvraag van de patiënt
- Alle zorgactiviteiten omvat (consulten, onderzoeken, operaties)
- Eindigt wanneer de behandeling is afgerond

### Voorbeeld

Een patiënt komt met knieklachten:
1. Eerste consult orthopeed
2. Röntgenfoto
3. MRI-scan
4. Diagnose: meniscusscheur
5. Operatie
6. Nacontroles

Al deze activiteiten vallen samen in één DBC.

## Van DBC naar DOT

**DOT** staat voor "DBC's Op weg naar Transparantie". Het is de doorontwikkeling waarbij:

- Zorgproducten automatisch worden afgeleid uit registraties
- De Grouper-software bepaalt welk product het wordt
- Meer uniformiteit tussen ziekenhuizen

## Waarom is dit relevant?

Als adviseur moet je begrijpen dat:
- IT-systemen zorgactiviteiten moeten registreren
- Deze registraties bepalen de bekostiging
- Fouten in registratie = fouten in inkomsten

## Kernbegrippen

- **DBC**: Diagnose Behandel Combinatie - het zorgproduct
- **DOT**: DBC's Op weg naar Transparantie - huidige systematiek
- **Zorgactiviteit**: Individuele handeling (consult, operatie, etc.)
    `,
    sources: [
      { name: "NZa - DBC-systematiek", url: "https://www.nza.nl" },
      { name: "DBC-onderhoud", url: "https://www.dhd.nl" }
    ]
  },

  "2.2": {
    title: "DBC-systematiek: zorgproducten, zorgactiviteiten",
    summary: "Zorgproducten worden afgeleid uit zorgactiviteiten. De registratie van activiteiten is cruciaal voor correcte bekostiging.",
    content: `
## In het kort

De DBC-systematiek kent een hiërarchie: zorgactiviteiten worden gegroepeerd tot zorgproducten, die weer worden gedeclareerd aan verzekeraars.

## Zorgactiviteiten

Zorgactiviteiten zijn de bouwstenen. Voorbeelden:

- **Polikliniekbezoek** (190007)
- **CT-scan hersenen** (080070)
- **Operatie heupprothese** (038965)

Elke activiteit heeft een unieke code en wordt geregistreerd in het EPD.

## Zorgproducten

Een zorgproduct is het declarabele eindresultaat:

- Combinatie van diagnose + behandeling
- Heeft een vaste prijs (tarief)
- Wordt bepaald door de Grouper

### Productstructuur

\`\`\`
Zorgproduct = Diagnosecode + Zorgtype + Zorgactiviteiten
\`\`\`

## De registratieketen

1. Arts registreert activiteiten in EPD
2. Systeem koppelt aan DBC-traject
3. Bij afsluiten: Grouper bepaalt zorgproduct
4. Declaratie naar verzekeraar

## Veelgemaakte fouten

- Verkeerde activiteitcodes
- Ontbrekende registraties
- Verkeerde koppeling aan DBC

## Kernbegrippen

- **Zorgactiviteit**: Kleinste registreerbare eenheid
- **Zorgproduct**: Declarabel product met tarief
- **Activiteitencode**: Unieke code per type activiteit
    `,
    sources: [
      { name: "NZa - Zorgactiviteiten", url: "https://www.nza.nl" }
    ]
  },

  "2.3": {
    title: "Grouper logica en afleiding",
    summary: "De Grouper is software die automatisch het juiste zorgproduct afleidt uit geregistreerde zorgactiviteiten.",
    content: `
## In het kort

De Grouper is het hart van de DBC-systematiek. Het is software die bepaalt welk zorgproduct gedeclareerd mag worden op basis van de geregistreerde activiteiten.

## Wat doet de Grouper?

De Grouper analyseert:

1. **Diagnose** - Welke aandoening?
2. **Zorgtype** - Regulier, spoed, intercollegiaal?
3. **Zorgactiviteiten** - Welke handelingen zijn verricht?
4. **Beslisbomen** - Welk pad in de beslislogica?

Resultaat: één zorgproduct met bijbehorend tarief.

## Afleidingsregels

De Grouper volgt strikte regels:

- **Hiërarchie**: Zwaardere ingrepen "winnen"
- **Combinaties**: Bepaalde activiteiten leiden tot specifieke producten
- **Uitsluitingen**: Sommige combinaties zijn niet toegestaan

### Voorbeeld

Patiënt met:
- Polikliniekbezoek
- CT-scan
- Operatie knie

→ Grouper kiest: "Operatief zorgproduct knie"

## Versies en updates

- Jaarlijks nieuwe Grouper-versie
- Regels kunnen veranderen
- Ziekenhuizen moeten up-to-date blijven

## IT-implicaties

- EPD moet correct registreren
- Grouper moet geïntegreerd zijn
- Controles op volledigheid nodig

## Kernbegrippen

- **Grouper**: Software voor productafleiding
- **Beslisboom**: Logica die product bepaalt
- **Afleiding**: Proces van activiteiten naar product
    `,
    sources: [
      { name: "DHD - Grouper", url: "https://www.dhd.nl" }
    ]
  },

  "2.4": {
    title: "Add-ons, overige producten, IC-bekostiging",
    summary: "Naast reguliere DBC's zijn er add-ons voor dure geneesmiddelen, overige producten en aparte IC-bekostiging.",
    content: `
## In het kort

Niet alle zorg past in standaard DBC's. Voor specifieke situaties zijn er aanvullende bekostigingsvormen.

## Add-on geneesmiddelen

Dure medicijnen worden apart bekostigd:

- **Stofnaam-add-ons**: Per medicijn apart declarabel
- **Indicatiegebonden**: Alleen bij specifieke diagnoses
- **Prijsplafonds**: Maximum vergoeding per eenheid

### Voorbeelden
- Oncologische medicatie
- Reumamedicijnen (biologicals)
- Weesgeneesmiddelen

## Overige zorgproducten (OZP's)

Voor zorg die niet in DBC's past:

- **Ondersteunende producten**: Lab, radiologie voor derden
- **Paramedische zorg**: Fysiotherapie in ziekenhuis
- **Specifieke verrichtingen**: Second opinions

## IC-bekostiging

Intensive Care heeft eigen systematiek:

- **IC-dagen**: Per opnamedag
- **Zorgzwaarte**: Classificatie naar intensiteit
- **NICE-registratie**: Landelijke kwaliteitsregistratie

## Combinatieregels

- Add-ons altijd naast een DBC
- OZP's kunnen los of gekoppeld
- IC naast reguliere DBC

## Kernbegrippen

- **Add-on**: Aanvullend declarabel product
- **OZP**: Overig Zorgproduct
- **IC-dag**: Bekostigingseenheid intensive care
    `,
    sources: [
      { name: "NZa - Add-ons", url: "https://www.nza.nl" }
    ]
  },

  "2.5": {
    title: "GGZ: DBC-GGZ vs ZPM",
    summary: "De GGZ kent eigen bekostigingssystemen: het oude DBC-GGZ en het nieuwe Zorgprestatiemodel (ZPM).",
    content: `
## In het kort

De geestelijke gezondheidszorg heeft een eigen bekostigingsgeschiedenis. Recent is overgestapt van DBC-GGZ naar het Zorgprestatiemodel.

## DBC-GGZ (oud systeem)

Het oude systeem werkte met:

- **Tijdschrijven**: Behandeltijd bepaalde het product
- **Productgroepen**: Op basis van diagnose en tijd
- **Lange trajecten**: DBC's konden maanden duren

### Problemen
- Perverse prikkels (meer tijd = meer geld)
- Ondoorzichtig voor patiënten
- Administratieve last

## Zorgprestatiemodel (ZPM)

Sinds 2022 het nieuwe model:

### Prestaties
- **Consult**: Per gesprek, ongeacht duur
- **Verblijfsdag**: Per opnamedag
- **Behandelcomponent**: Specifieke interventies

### Voordelen
- Transparanter voor patiënt
- Minder administratie
- Beter te contracteren

## Overgang

De transitie bracht uitdagingen:

- Herinrichting registratie
- Aanpassing EPD-systemen
- Nieuwe contracten met verzekeraars

## Kernbegrippen

- **DBC-GGZ**: Oud bekostigingssysteem GGZ
- **ZPM**: Zorgprestatiemodel - nieuw systeem
- **Consult**: Basisprestatie in ZPM
    `,
    sources: [
      { name: "NZa - Zorgprestatiemodel", url: "https://www.nza.nl" },
      { name: "Nederlandse ggz", url: "https://www.denederlandseggz.nl" }
    ]
  },

  "2.6": {
    title: "Huisartsenzorg: bekostiging en ketenzorg",
    summary: "Huisartsen worden bekostigd via inschrijftarieven, consulten en ketenzorg voor chronische aandoeningen.",
    content: `
## In het kort

De huisarts kent een mix van bekostigingsvormen: een vast bedrag per ingeschreven patiënt plus vergoedingen voor consulten en speciale programma's.

## Segmenten

### Segment 1: Basisvoorziening
- **Inschrijftarief**: Vast bedrag per patiënt per jaar
- **Consulttarief**: Per consult (kort, normaal, lang)
- **Visites**: Huisbezoeken

### Segment 2: Multidisciplinaire zorg
- **Ketenzorg**: Diabetes, COPD, cardiovasculair risico
- **Per patiënt per jaar**: Vast bedrag
- **Inclusief**: Praktijkondersteuner, diëtist, etc.

### Segment 3: Resultaatbeloning
- **Kwaliteitsindicatoren**: Prestatie-afspraken
- **Innovatie**: Nieuwe zorgvormen

## Ketenzorg in detail

Chronische aandoeningen georganiseerd in "ketens":

1. **Zorggroep** contracteert met verzekeraar
2. **Huisarts** is aangesloten bij zorggroep
3. **Keten-DBC**: Integrale vergoeding
4. **Onderaannemers**: POH, apotheek, lab

## IT-aspecten

- Ketenregistratie in KIS (Keten Informatie Systeem)
- Koppelingen met HIS
- Benchmarking en spiegelinformatie

## Kernbegrippen

- **Inschrijftarief**: Vast bedrag per patiënt
- **Ketenzorg**: Geïntegreerde chronische zorg
- **Zorggroep**: Samenwerkingsverband huisartsen
    `,
    sources: [
      { name: "LHV - Bekostiging", url: "https://www.lhv.nl" },
      { name: "InEen - Ketenzorg", url: "https://ineen.nl" }
    ]
  },

  // TRACK 4: Interoperabiliteit & Standaarden

  "4.1": {
    title: "HL7v2: De legacy standaard",
    summary: "HL7 versie 2 is de meest gebruikte standaard voor berichtenuitwisseling tussen zorgsystemen, ondanks zijn leeftijd.",
    content: `
## In het kort

HL7v2 is de "taal" die zorgsystemen al decennia gebruiken om te communiceren. Het is een berichtenstandaard voor het uitwisselen van patiëntgegevens.

## Wat is HL7v2?

HL7 staat voor **Health Level Seven** - een internationale standaardorganisatie. Versie 2 (v2) is:

- Ontwikkeld in de jaren '80
- Nog steeds meest gebruikte standaard
- Gebaseerd op tekstberichten

### Berichtstructuur

\`\`\`
MSH|^~\\&|EPD|ZKH|LAB|ZKH|202402101200||ADT^A01|123|P|2.4
PID|||123456^^^ZKH||Jansen^Jan||19800515|M
\`\`\`

- **Segmenten**: MSH, PID, OBR, etc.
- **Velden**: Gescheiden door |
- **Componenten**: Gescheiden door ^

## Berichttypen

- **ADT**: Admission, Discharge, Transfer (opname/ontslag)
- **ORM/ORU**: Orders en uitslagen
- **SIU**: Scheduling (afspraken)
- **MDM**: Documenten

## Voordelen

- Breed geïmplementeerd
- Bewezen technologie
- Veel kennis beschikbaar

## Nadelen

- Geen strikte validatie
- Veel variatie in implementatie
- Moeilijk uit te breiden

## Kernbegrippen

- **Segment**: Onderdeel van bericht (PID = Patient ID)
- **Trigger event**: Aanleiding voor bericht (A01 = opname)
- **Encoding**: Manier van coderen (|^~\\&)
    `,
    sources: [
      { name: "HL7 International", url: "https://www.hl7.org" },
      { name: "HL7 Nederland", url: "https://www.hl7.nl" }
    ]
  },

  "4.2": {
    title: "HL7 FHIR: Moderne zorgdata-uitwisseling",
    summary: "FHIR is de moderne HL7-standaard, gebaseerd op web-technologie en REST API's. De toekomst van zorginteroperabiliteit.",
    content: `
## In het kort

FHIR (Fast Healthcare Interoperability Resources) is de nieuwste HL7-standaard. Het combineert het beste van eerdere standaarden met moderne webtechnologie.

## Wat is FHIR?

FHIR is:

- **REST-gebaseerd**: Werkt via HTTP/HTTPS
- **Resource-georiënteerd**: Alles is een "resource"
- **JSON/XML**: Moderne dataformaten
- **Open**: Specificatie is gratis beschikbaar

## Resources

De bouwstenen van FHIR:

- **Patient**: Patiëntgegevens
- **Observation**: Metingen (bloeddruk, lab)
- **Medication**: Medicatie-informatie
- **Condition**: Diagnoses
- **Encounter**: Contactmomenten

### Voorbeeld (JSON)

\`\`\`json
{
  "resourceType": "Patient",
  "id": "123",
  "name": [{
    "family": "Jansen",
    "given": ["Jan"]
  }],
  "birthDate": "1980-05-15"
}
\`\`\`

## REST API

FHIR gebruikt standaard HTTP-operaties:

- **GET**: Ophalen van resources
- **POST**: Nieuwe resource aanmaken
- **PUT**: Resource bijwerken
- **DELETE**: Resource verwijderen

## Voordelen

- Moderne technologie
- Makkelijk te implementeren
- Goede tooling beschikbaar
- Internationale adoptie

## Kernbegrippen

- **Resource**: Basiseenheid van data
- **REST**: Architectural style voor API's
- **Bundle**: Collectie van resources
    `,
    sources: [
      { name: "HL7 FHIR", url: "https://www.hl7.org/fhir" },
      { name: "SMART on FHIR", url: "https://smarthealthit.org" }
    ]
  },

  "4.3": {
    title: "FHIR in Nederland: Nictiz, informatiestandaarden",
    summary: "Nictiz beheert de Nederlandse FHIR-profielen en informatiestandaarden. Ze zorgen voor landelijke uniformiteit.",
    content: `
## In het kort

Nederland heeft een eigen "smaak" van FHIR, beheerd door Nictiz. Dit zorgt voor uniformiteit in hoe we FHIR gebruiken.

## Rol van Nictiz

Nictiz is het nationale kennisinstituut:

- Beheert Nederlandse FHIR-profielen
- Ontwikkelt informatiestandaarden
- Coördineert implementatie
- Biedt ondersteuning

## Nederlandse profielen

FHIR-resources worden "geprofileerd" voor Nederland:

- **nl-core-Patient**: Nederlandse patiëntgegevens
- **nl-core-Observation**: Metingen volgens NL-standaard
- **nl-core-MedicationRequest**: Medicatievoorschriften

### Wat zit in een profiel?

- Welke velden verplicht zijn
- Welke waardenlijsten te gebruiken
- Nederlandse extensies
- Validatieregels

## Informatiestandaarden

Nictiz definieert complete uitwisselingsstandaarden:

- **BgZ**: Basisgegevensset Zorg (samenvatting patiëntdossier)
- **eOverdracht**: Verpleegkundige overdracht
- **Medicatieproces**: Voorschrijven en verstrekken
- **Geboortezorg**: Perinatale keten

## Implementatie

- **Simplifier.net**: Platform voor profielen
- **Kwalificatie**: Leveranciers moeten kwalificeren
- **Validator**: Controle op conformiteit

## Kernbegrippen

- **Profiel**: Nederlandse aanpassing van FHIR-resource
- **Informatiestandaard**: Complete uitwisselingsspecificatie
- **BgZ**: Basisgegevensset Zorg
    `,
    sources: [
      { name: "Nictiz - FHIR", url: "https://www.nictiz.nl" },
      { name: "Simplifier.net", url: "https://simplifier.net/nictiz" }
    ]
  },

  "4.4": {
    title: "Zibs (Zorginformatiebouwstenen)",
    summary: "Zibs zijn gestandaardiseerde definities van zorginformatie. Ze vormen de basis voor alle Nederlandse informatiestandaarden.",
    content: `
## In het kort

Zorginformatiebouwstenen (zibs) definiëren hoe we zorginformatie vastleggen. Ze zijn de "blauwdruk" voor gegevensuitwisseling.

## Wat is een zib?

Een zib beschrijft één concept uit de zorg:

- **Naam**: Bijv. "Bloeddruk"
- **Definitie**: Wat bedoelen we ermee?
- **Dataelementen**: Welke gegevens horen erbij?
- **Waardenlijsten**: Toegestane waarden

### Voorbeeld: Bloeddruk

- Systolische waarde (mmHg)
- Diastolische waarde (mmHg)
- Meetmethode (auscultatoir, oscillometrisch)
- Manchettype (standaard, groot)
- Lichaamshouding (zittend, liggend)
- Meetlocatie (linker arm, rechter arm)

## Zibs en FHIR

Zibs zijn technologie-onafhankelijk. Ze worden "vertaald" naar:

- FHIR-profielen
- HL7v3 templates
- CDA-secties

## Belangrijke zibs

- **Patient**: Identificatie en demografische gegevens
- **Medicatiegebruik**: Wat gebruikt de patiënt?
- **AllergieIntolerantie**: Overgevoeligheden
- **Probleem**: Diagnoses en aandoeningen
- **Verrichting**: Uitgevoerde ingrepen

## Governance

- Beheerd door Nictiz
- Jaarlijkse releases
- Publiek beschikbaar
- Internationale afstemming (via HL7)

## Kernbegrippen

- **Zib**: Zorginformatiebouwsteen
- **Dataelement**: Individueel gegeven binnen zib
- **Waardenlijst**: Lijst met toegestane waarden
    `,
    sources: [
      { name: "Nictiz - Zibs", url: "https://zibs.nl" }
    ]
  },

  "4.5": {
    title: "SNOMED CT, LOINC, ICD-10: Terminologie",
    summary: "Terminologiestelsels zorgen voor eenduidige codering van diagnoses, verrichtingen en labbepalingen.",
    content: `
## In het kort

Om zorginformatie uit te wisselen moet iedereen dezelfde "taal" spreken. Terminologiestelsels bieden gestandaardiseerde codes en definities.

## SNOMED CT

De meest uitgebreide medische terminologie:

- **1+ miljoen concepten**
- **Hiërarchisch**: Van algemeen naar specifiek
- **Internationale standaard**
- **Nederlandse editie** beschikbaar

### Voorbeelden
- 73211009 = Diabetes mellitus
- 38341003 = Hypertensie
- 22298006 = Myocardinfarct

## ICD-10

International Classification of Diseases:

- **WHO-standaard** voor diagnoses
- **Verplicht** voor ziekenhuisregistratie (DBC)
- **Hoofdstukken**: A00-B99 (infecties), C00-D48 (tumoren), etc.

### Voorbeelden
- I10 = Essentiële hypertensie
- E11 = Diabetes mellitus type 2
- J18 = Pneumonie

## LOINC

Logical Observation Identifiers Names and Codes:

- **Laboratoriumbepalingen**
- **Observaties en metingen**
- **Vragenlijsten**

### Voorbeelden
- 2345-7 = Glucose in bloed
- 2160-0 = Creatinine in serum
- 8480-6 = Systolische bloeddruk

## Wanneer wat gebruiken?

| Doel | Stelsel |
|------|---------|
| Diagnoses (klinisch) | SNOMED CT |
| Diagnoses (registratie) | ICD-10 |
| Labwaarden | LOINC |
| Verrichtingen | SNOMED CT of CBV |

## Kernbegrippen

- **SNOMED CT**: Uitgebreide klinische terminologie
- **ICD-10**: Classificatie voor diagnoses
- **LOINC**: Codes voor lab en observaties
    `,
    sources: [
      { name: "Nictiz - SNOMED", url: "https://www.nictiz.nl" },
      { name: "SNOMED International", url: "https://www.snomed.org" }
    ]
  },

  "4.6": {
    title: "XDS/XCA, DICOM: Beelduitwisseling",
    summary: "XDS en XCA zijn IHE-profielen voor documentuitwisseling. DICOM is de standaard voor medische beelden.",
    content: `
## In het kort

Medische beelden (röntgen, CT, MRI) vereisen speciale standaarden. DICOM definieert het formaat, XDS/XCA regelt de uitwisseling.

## DICOM

Digital Imaging and Communications in Medicine:

### Wat regelt het?
- **Beeldformaat**: Hoe worden beelden opgeslagen?
- **Metadata**: Patiënt, onderzoek, apparatuur
- **Communicatie**: Hoe verstuur je beelden?
- **Worklists**: Welke onderzoeken moeten gedaan worden?

### DICOM in de praktijk
- CT-scanner produceert DICOM-beelden
- PACS slaat ze op
- Viewer toont ze aan radioloog
- Alles via DICOM-protocol

## IHE-profielen

IHE (Integrating the Healthcare Enterprise) definieert:

### XDS (Cross-Enterprise Document Sharing)
- **Binnen een affinity domain** (regio)
- **Documenten registreren en opvragen**
- **Repository + Registry model**

### XCA (Cross-Community Access)
- **Tussen regio's onderling**
- **Federatief model**
- **Twiin gebruikt XCA**

### XDS-I (XDS for Imaging)
- **Specifiek voor beelden**
- **DICOM-manifesten**

## Beelduitwisseling in Nederland

Via Twiin:
1. Ziekenhuis A maakt CT-scan
2. Registreert in XDS-registry
3. Ziekenhuis B vraagt op via XCA
4. Ontvangt DICOM-beelden

## Kernbegrippen

- **DICOM**: Standaard voor medische beelden
- **PACS**: Picture Archiving and Communication System
- **XDS**: Documentdeling binnen regio
- **XCA**: Documentdeling tussen regio's
    `,
    sources: [
      { name: "IHE International", url: "https://www.ihe.net" },
      { name: "DICOM Standard", url: "https://www.dicomstandard.org" }
    ]
  },

  "4.7": {
    title: "CDA vs FHIR Documents",
    summary: "CDA is de traditionele standaard voor klinische documenten. FHIR Documents is het moderne alternatief.",
    content: `
## In het kort

Klinische documenten (ontslagbrieven, uitslagen) kunnen in verschillende formaten. CDA is de gevestigde standaard, FHIR Documents de opkomende.

## CDA (Clinical Document Architecture)

HL7 CDA is:

- **XML-gebaseerd**
- **Menselijk leesbaar** (narrative block)
- **Machine-verwerkbaar** (structured entries)
- **Ondertekend document**

### Structuur
\`\`\`
CDA Document
├── Header (wie, wat, wanneer)
├── Body
│   ├── Section 1 (Anamnese)
│   ├── Section 2 (Lichamelijk onderzoek)
│   └── Section 3 (Conclusie)
\`\`\`

### Gebruik in Nederland
- Specialistenbrief
- Ontslagbrief
- Laboratoriumuitslag

## FHIR Documents

FHIR kent ook documenten:

- **Bundle van type "document"**
- **Composition resource als inhoudsopgave**
- **Moderne structuur**

### Voordelen
- Consistentie met andere FHIR-resources
- Makkelijker te verwerken
- Betere tooling

## Vergelijking

| Aspect | CDA | FHIR Documents |
|--------|-----|----------------|
| Formaat | XML | JSON/XML |
| Volwassenheid | Hoog | Groeiend |
| Tooling | Legacy | Modern |
| Adoptie NL | Breed | Opkomend |

## Transitie

Nederland zit in transitie:
- Bestaande CDA's blijven werken
- Nieuwe standaarden in FHIR
- Geen "big bang" vervanging

## Kernbegrippen

- **CDA**: Clinical Document Architecture
- **Composition**: FHIR-equivalent van documentstructuur
- **Narrative**: Leesbare tekst in document
    `,
    sources: [
      { name: "HL7 CDA", url: "https://www.hl7.org/implement/standards/product_brief.cfm?product_id=7" },
      { name: "FHIR Documents", url: "https://www.hl7.org/fhir/documents.html" }
    ]
  },

  // TRACK 5: Wet- & Regelgeving

  "5.1": {
    title: "AVG/GDPR in de zorg",
    summary: "De AVG stelt strenge eisen aan verwerking van persoonsgegevens. Gezondheidsgegevens zijn extra beschermd.",
    content: `
## In het kort

De Algemene Verordening Gegevensbescherming (AVG/GDPR) regelt hoe organisaties met persoonsgegevens moeten omgaan. In de zorg gelden extra strenge regels.

## Gezondheidsgegevens

Gezondheidsgegevens zijn **bijzondere persoonsgegevens**:

- In principe verboden te verwerken
- Uitzonderingen voor zorgverlening
- Extra beveiligingseisen

## Rechtmatige grondslagen in de zorg

### Voor zorgverlening
- **Uitvoering behandelingsovereenkomst** (art. 6 + 9.2h)
- Geen toestemming nodig voor directe zorg

### Voor secundair gebruik
- **Uitdrukkelijke toestemming** vereist
- Wetenschappelijk onderzoek: aparte regels
- Kwaliteitsregistraties: wettelijke grondslag

## Rechten van betrokkenen

Patiënten hebben recht op:
- **Inzage**: Wat staat er over mij?
- **Correctie**: Fouten laten herstellen
- **Verwijdering**: Onder voorwaarden
- **Dataportabiliteit**: Gegevens meenemen

## Verplichtingen zorgaanbieder

- **Verwerkingsregister**: Documenteer alle verwerkingen
- **DPIA**: Bij hoog-risico verwerkingen
- **Datalekprotocol**: Melden binnen 72 uur
- **FG**: Functionaris Gegevensbescherming aanstellen

## Boetes

De AP kan forse boetes opleggen:
- Tot €20 miljoen
- Of 4% van wereldwijde omzet

## Kernbegrippen

- **AVG/GDPR**: Privacywetgeving
- **Bijzondere persoonsgegevens**: Extra beschermde categorie
- **Grondslag**: Juridische basis voor verwerking
    `,
    sources: [
      { name: "Autoriteit Persoonsgegevens", url: "https://autoriteitpersoonsgegevens.nl" },
      { name: "AVG-tekst", url: "https://eur-lex.europa.eu" }
    ]
  },

  "5.2": {
    title: "WGBO: Wet op de Geneeskundige Behandelingsovereenkomst",
    summary: "De WGBO regelt de rechten en plichten van patiënten en zorgverleners binnen de behandelrelatie.",
    content: `
## In het kort

De WGBO is de basis van de arts-patiëntrelatie. Het regelt informed consent, dossierplicht en geheimhouding.

## Kernrechten patiënt

### Informed consent
- Recht op **informatie** over behandeling
- Recht om **toestemming** te geven of weigeren
- Bij ingrijpende behandelingen: **schriftelijk**

### Dossierrechten
- Recht op **inzage** in eigen dossier
- Recht op **afschrift**
- Recht op **correctie** en **aanvulling**
- Beperkt recht op **vernietiging**

## Dossierplicht

Zorgverleners moeten:
- **Dossier bijhouden** van de behandeling
- **Bewaartermijn**: 20 jaar (sinds 2020)
- **Toegang beperken** tot betrokken zorgverleners

## Geheimhouding

Het medisch beroepsgeheim:
- Zorgverlener mag niet delen zonder toestemming
- Uitzonderingen: wettelijke meldplichten
- Doorbreken alleen bij conflict van plichten

## Vertegenwoordiging

Bij wilsonbekwaamheid:
- Curator of mentor
- Schriftelijk gemachtigde
- Echtgenoot/partner
- Ouder of kind

## Digitale aspecten

- Patiëntportalen vallen onder WGBO
- Logging van inzage verplicht
- Elektronische toestemming mogelijk

## Kernbegrippen

- **Informed consent**: Geïnformeerde toestemming
- **Dossierplicht**: Verplichting tot bijhouden dossier
- **Beroepsgeheim**: Geheimhoudingsplicht
    `,
    sources: [
      { name: "KNMG - WGBO", url: "https://www.knmg.nl" },
      { name: "Rijksoverheid - WGBO", url: "https://www.rijksoverheid.nl" }
    ]
  },

  "5.3": {
    title: "Wabvpz: Elektronische gegevensuitwisseling",
    summary: "De Wabvpz regelt rechten van patiënten bij elektronische uitwisseling van medische gegevens.",
    content: `
## In het kort

De Wet aanvullende bepalingen verwerking persoonsgegevens in de zorg (Wabvpz) geeft patiënten specifieke rechten bij elektronische gegevensuitwisseling.

## Kernpunten

### Toestemming vereist
- Uitwisseling via elektronisch uitwisselingssysteem
- Alleen met **uitdrukkelijke toestemming** patiënt
- Toestemming moet specifiek zijn

### Wat is een uitwisselingssysteem?
- LSP valt eronder
- Regionale netwerken
- **Niet**: directe communicatie tussen twee partijen

## Rechten onder Wabvpz

- **Gespecificeerde toestemming**: Per type gegevens
- **Inzicht in loggegevens**: Wie heeft ingekeken?
- **Intrekken toestemming**: Op elk moment mogelijk

## Logging

Verplichte logging van:
- Wie heeft gegevens ingezien?
- Wanneer?
- Welke gegevens?
- Met welk doel?

Patiënt heeft recht op inzage in deze logging.

## Relatie met andere wetten

- **AVG**: Wabvpz is aanvullend
- **WGBO**: Dossierrechten blijven gelden
- **Wegiz**: Nieuwe wet voor specifieke uitwisselingen

## In de praktijk

- Huisarts vraagt toestemming voor LSP
- Registratie bij VZVZ
- Patiënt kan inzien via Volgjezorg.nl

## Kernbegrippen

- **Wabvpz**: Wet aanvullende bepalingen verwerking persoonsgegevens zorg
- **Uitwisselingssysteem**: Infrastructuur voor gegevensdeling
- **Logging**: Registratie van inzage-acties
    `,
    sources: [
      { name: "VZVZ - Toestemming", url: "https://www.vzvz.nl" },
      { name: "Volgjezorg", url: "https://www.volgjezorg.nl" }
    ]
  },

  "5.4": {
    title: "NEN 7510, 7512, 7513: Informatiebeveiliging",
    summary: "De NEN 75xx-normen vormen het raamwerk voor informatiebeveiliging in de Nederlandse zorg.",
    content: `
## In het kort

De NEN 7510-serie is het fundament voor informatiebeveiliging in de zorg. Naleving is vaak verplicht via wetgeving of contracten.

## NEN 7510: Managementsysteem

De hoofdnorm voor informatiebeveiliging:

### Inhoud
- **Risicomanagement**: Identificeer en beheers risico's
- **Beleid**: Formeel informatiebeveiligingsbeleid
- **Organisatie**: Rollen en verantwoordelijkheden
- **Maatregelen**: Technisch en organisatorisch

### Certificering
- ISO 27001 + NEN 7510-toets
- Jaarlijkse audits
- Steeds vaker geëist door verzekeraars

## NEN 7512: Vertrouwensbasis

Voor elektronische communicatie:

- **Authenticatie**: Wie is de ander?
- **Autorisatie**: Wat mag de ander?
- **Vertrouwelijkheid**: Encryptie van transport
- **Integriteit**: Is het bericht ongewijzigd?

### Niveaus
- Laag, midden, hoog vertrouwensniveau
- Afhankelijk van type gegevens

## NEN 7513: Logging

Specifiek voor vastleggen van acties:

- **Wat loggen**: Toegang, mutaties, exports
- **Hoe lang bewaren**: Minimaal 5 jaar
- **Onweerlegbaarheid**: Logs niet te manipuleren
- **Inzage**: Patiënt kan logs opvragen

## Implementatie

1. Gap-analyse uitvoeren
2. Maatregelenplan opstellen
3. Implementeren
4. Auditen en certificeren
5. Continu verbeteren

## Kernbegrippen

- **NEN 7510**: Managementsysteem informatiebeveiliging
- **NEN 7512**: Eisen aan elektronische communicatie
- **NEN 7513**: Logging van gebeurtenissen
    `,
    sources: [
      { name: "NEN - Zorgnormen", url: "https://www.nen.nl" }
    ]
  },

  "5.5": {
    title: "Wegiz: Wet elektronische gegevensuitwisseling",
    summary: "De Wegiz maakt elektronische gegevensuitwisseling verplicht voor aangewezen situaties.",
    content: `
## In het kort

De Wet elektronische gegevensuitwisseling in de zorg (Wegiz) maakt het mogelijk om gegevensuitwisseling te verplichten via AMvB's.

## Doel van de wet

Oplossen van het "kip-ei probleem":
- Leveranciers wachten op vraag
- Zorgaanbieders wachten op aanbod
- Niemand investeert

De Wegiz doorbreekt dit door te verplichten.

## Hoe werkt het?

### Kaderwet
De Wegiz zelf verplicht niets. Het is een **kaderwet** die:
- De minister bevoegdheid geeft
- Randvoorwaarden stelt
- Toezicht regelt

### AMvB's
Per gegevensuitwisseling een Algemene Maatregel van Bestuur:
- Welke uitwisseling?
- Welke standaard?
- Per wanneer verplicht?

## Aangewezen uitwisselingen

Geprioriteerd door Meerjarenagenda:

1. **Medicatieoverdracht** - bij ontslag
2. **BgZ** - basisgegevensset bij verwijzing
3. **Verpleegkundige overdracht**
4. **Beelduitwisseling**

## Eisen aan systemen

- Voldoen aan informatiestandaard
- Gecertificeerd/gekwalificeerd
- Aansluiten op infrastructuur

## Toezicht en handhaving

- IGJ houdt toezicht
- Kan aanwijzingen geven
- Kan last onder dwangsom opleggen

## Kernbegrippen

- **Wegiz**: Kaderwet voor verplichte uitwisseling
- **AMvB**: Besluit dat specifieke uitwisseling verplicht
- **Informatiestandaard**: Technische specificatie
    `,
    sources: [
      { name: "Rijksoverheid - Wegiz", url: "https://www.rijksoverheid.nl" }
    ]
  },

  "5.6": {
    title: "NIS2 en cybersecurity in de zorg",
    summary: "NIS2 stelt nieuwe eisen aan cybersecurity voor essentiële sectoren, waaronder de zorg.",
    content: `
## In het kort

De NIS2-richtlijn verscherpt cybersecurity-eisen voor vitale sectoren. Zorginstellingen vallen hier grotendeels onder.

## Wat is NIS2?

Network and Information Security Directive 2:

- **EU-richtlijn** (moet in nationale wet)
- **Opvolger van NIS1**
- **Vanaf 2024** van kracht
- **Forse boetes** bij niet-naleving

## Wie valt eronder?

In de zorg:
- **Ziekenhuizen** (>50 medewerkers of >10M omzet)
- **Laboratoria**
- **Leveranciers van medische hulpmiddelen**
- **ICT-dienstverleners aan zorg**

## Verplichtingen

### Technisch
- Risicoanalyse en beheersmaatregelen
- Incidentafhandeling
- Business continuity
- Supply chain security
- Encryptie

### Organisatorisch
- Cybersecurity beleid op directieniveau
- Training medewerkers
- Meldplicht incidenten (24 uur!)

## Toezicht

- Rijksinspectie Digitale Infrastructuur (RDI)
- Kan audits uitvoeren
- Boetes tot €10 miljoen of 2% omzet

## Relatie met bestaande normen

NIS2 bouwt voort op:
- NEN 7510 (blijft relevant)
- ISO 27001
- Maar gaat verder (supply chain, directie-aansprakelijkheid)

## Kernbegrippen

- **NIS2**: Europese cybersecurity-richtlijn
- **Essentiële entiteit**: Organisatie die onder NIS2 valt
- **Meldplicht**: Verplichting incidenten te melden
    `,
    sources: [
      { name: "NCSC", url: "https://www.ncsc.nl" },
      { name: "EU NIS2", url: "https://digital-strategy.ec.europa.eu" }
    ]
  },

  "5.7": {
    title: "Medische hulpmiddelen: MDR en software als medical device",
    summary: "De MDR regelt wanneer software een medisch hulpmiddel is en aan welke eisen het moet voldoen.",
    content: `
## In het kort

Software kan een medisch hulpmiddel zijn. De Medical Device Regulation (MDR) stelt dan strenge eisen aan ontwikkeling en gebruik.

## Wanneer is software een medisch hulpmiddel?

Software is een Medical Device als het:

- Een **medisch doel** heeft, én
- **Informatie genereert** die klinische beslissingen beïnvloedt

### Wel medisch hulpmiddel
- Diagnose-ondersteunende AI
- Dosis-berekeningssoftware
- Monitoring met alerts

### Geen medisch hulpmiddel
- Administratieve systemen
- Communicatietools
- Generieke databases

## Risicoklassen

De MDR kent klassen:

| Klasse | Risico | Voorbeeld |
|--------|--------|-----------|
| I | Laag | Afsprakenplanner |
| IIa | Matig-laag | Symptoomchecker |
| IIb | Matig-hoog | Insulinedosering |
| III | Hoog | AI-diagnose kanker |

## Eisen

### Klasse I
- Technische documentatie
- Zelf-declaratie
- CE-markering

### Klasse IIa en hoger
- Notified Body betrokken
- Klinisch bewijs vereist
- Striktere kwaliteitssystemen

## Kwaliteitsmanagementsysteem

Verplicht voor alle klassen:
- ISO 13485 certificering
- Risicomanagement (ISO 14971)
- Post-market surveillance

## Gevolgen voor IT in de zorg

- Leveranciers moeten MDR-compliance aantonen
- Ziekenhuizen moeten inkoopeisen stellen
- Zelf ontwikkelen wordt complexer

## Kernbegrippen

- **MDR**: Medical Device Regulation
- **SaMD**: Software as a Medical Device
- **Notified Body**: Certificeringsinstantie
- **CE-markering**: Bewijs van conformiteit
    `,
    sources: [
      { name: "MDCG Guidelines", url: "https://health.ec.europa.eu" },
      { name: "Rijksoverheid - MDR", url: "https://www.rijksoverheid.nl" }
    ]
  },

  // TRACK 6: AI & Innovatie in de Zorg

  "6.1": {
    title: "AI Act: Wat betekent dit voor zorgtechnologie?",
    summary: "De EU AI Act reguleert kunstmatige intelligentie. Zorg-AI valt vaak in de hoog-risico categorie.",
    content: `
## In het kort

De AI Act is de eerste uitgebreide AI-wetgeving ter wereld. Voor zorgtechnologie heeft dit grote gevolgen vanwege de hoog-risico classificatie.

## Wat regelt de AI Act?

Een risicogebaseerde aanpak:

### Verboden AI
- Social scoring
- Manipulatie van gedrag
- Real-time biometrische identificatie (uitzonderingen)

### Hoog-risico AI
- Medische hulpmiddelen
- Kritieke infrastructuur
- Werknemersbeoordeling

### Beperkt risico
- Chatbots (transparantieverplichting)
- Deepfakes (labeling)

### Minimaal risico
- Geen specifieke eisen

## Zorg-AI = vaak hoog-risico

AI in de zorg is bijna altijd hoog-risico:

- Diagnostische AI
- Behandelingsaanbevelingen
- Risicopredictie
- Triagesystemen

## Eisen voor hoog-risico AI

1. **Risicomanagement**: Doorlopend proces
2. **Data governance**: Kwaliteit trainingsdata
3. **Transparantie**: Uitlegbaarheid beslissingen
4. **Menselijk toezicht**: Mogelijkheid tot ingrijpen
5. **Nauwkeurigheid**: Robuust en betrouwbaar
6. **Logging**: Traceerbaarheid

## Tijdlijn

- 2024: AI Act aangenomen
- 2025: Verboden praktijken van kracht
- 2026/2027: Overige bepalingen gefaseerd

## Kernbegrippen

- **AI Act**: Europese AI-verordening
- **Hoog-risico AI**: Streng gereguleerde categorie
- **Conformiteitsbeoordeling**: Bewijs van naleving
    `,
    sources: [
      { name: "EU AI Act", url: "https://artificialintelligenceact.eu" }
    ]
  },

  "6.2": {
    title: "AI classificatie: hoog-risico AI in de zorg",
    summary: "Hoe bepaal je of jouw AI-systeem hoog-risico is? Een praktische handleiding voor classificatie.",
    content: `
## In het kort

Niet alle AI in de zorg is automatisch hoog-risico. De classificatie hangt af van het beoogde doel en de impact op patiënten.

## Classificatiestappen

### Stap 1: Is het AI?

De AI Act definitie:
- Machine-gebaseerd systeem
- Ontworpen om autonoom te opereren
- Genereert output (voorspellingen, aanbevelingen, beslissingen)

### Stap 2: Valt het onder een verbod?

Check of het systeem:
- Gedrag manipuleert
- Kwetsbaarheden exploiteert
- Sociale scoring toepast

### Stap 3: Is het een medisch hulpmiddel?

Als het systeem onder de MDR valt:
- Klasse IIa en hoger = automatisch hoog-risico
- Klasse I = niet automatisch hoog-risico

### Stap 4: Andere hoog-risico categorieën

Annex III van de AI Act noemt:
- Toegang tot kritieke diensten
- Evaluatie van personen
- Wetshandhaving

## Praktijkvoorbeelden

| Systeem | Classificatie | Reden |
|---------|---------------|-------|
| AI-diagnose longfoto | Hoog-risico | MDR klasse IIa |
| Chatbot symptomen | Hangt af | Alleen info vs advies |
| Planning AI | Minimaal risico | Geen medisch doel |
| Risicoscore sepsis | Hoog-risico | Beïnvloedt behandeling |

## Grensgevallen

Bij twijfel:
- Conservatief classificeren
- Juridisch advies inwinnen
- Notified Body consulteren

## Kernbegrippen

- **Beoogd doel**: Waarvoor is het systeem ontworpen?
- **Annex III**: Lijst met hoog-risico categorieën
- **Intended purpose**: Formele doelomschrijving
    `,
    sources: [
      { name: "AI Act Annex III", url: "https://artificialintelligenceact.eu" }
    ]
  },

  "6.3": {
    title: "Klinische beslisondersteuning (CDSS)",
    summary: "Clinical Decision Support Systems helpen zorgverleners bij diagnose en behandeling. Wat zijn de mogelijkheden en risico's?",
    content: `
## In het kort

CDSS (Clinical Decision Support Systems) zijn informatiesystemen die zorgverleners ondersteunen bij klinische beslissingen. Van eenvoudige alerts tot complexe AI.

## Typen CDSS

### Kennisgebaseerd
- **Regels**: Als X dan Y
- **Alerts**: Waarschuwingen bij interacties
- **Reminders**: Herinneringen voor screenings

### Data-gedreven
- **Machine learning**: Patronen in data
- **Predictieve modellen**: Risicoscores
- **NLP**: Analyse van vrije tekst

## Voorbeelden in de praktijk

### Medicatiebewaking
- Interactiecheck bij voorschrijven
- Dubbelmedicatie-alert
- Dosiscontrolemaar nierfunctie

### Diagnostiek
- Differentiaal diagnose suggesties
- Beeldherkenning (radiologie, pathologie)
- Lab-interpretatie

### Behandeling
- Richtlijn-reminders
- Behandelprotocollen
- Risicostratificatie

## Implementatie-uitdagingen

### Alert fatigue
- Te veel waarschuwingen
- Arts gaat negeren
- Oplossing: relevantie verhogen

### Integratie
- Moet in workflow passen
- EPD-integratie essentieel
- Real-time beschikbaar

### Validatie
- Werkt het systeem correct?
- Klinische evaluatie nodig
- Continue monitoring

## Regelgeving

CDSS kan vallen onder:
- **MDR**: Als het diagnose/behandeling beïnvloedt
- **AI Act**: Als het AI bevat

## Kernbegrippen

- **CDSS**: Clinical Decision Support System
- **Alert fatigue**: Negeren van waarschuwingen door overvloed
- **CDS Hooks**: Standaard voor CDSS-integratie
    `,
    sources: [
      { name: "HL7 CDS Hooks", url: "https://cds-hooks.org" }
    ]
  },

  "6.4": {
    title: "LLMs en generatieve AI in de zorg",
    summary: "Large Language Models zoals GPT bieden nieuwe mogelijkheden in de zorg, maar ook risico's. Wat kan en mag?",
    content: `
## In het kort

Generatieve AI en Large Language Models (LLMs) veroveren de zorg. Van administratieve ontlasting tot klinische ondersteuning - de toepassingen groeien snel.

## Huidige toepassingen

### Administratief
- **Notities genereren**: Consult → samenvatting
- **Brieven schrijven**: Ontslagbrief, verwijzing
- **Coderen**: DBC-codes suggereren

### Klinisch ondersteunend
- **Literatuuronderzoek**: Sneller evidence vinden
- **Differentiaal diagnose**: Brainstormen met AI
- **Uitleg voor patiënt**: Begrijpelijke taal

### Patiëntgericht
- **Chatbots**: Eerste triage
- **Educatie**: Uitleg over aandoening
- **Voorbereiding consult**: Klachten inventariseren

## Risico's

### Hallucinaties
- LLMs kunnen onjuiste informatie verzinnen
- Bronvermelding niet altijd betrouwbaar
- Kritische beoordeling nodig

### Privacy
- Waar gaan de gegevens heen?
- Cloud vs on-premise
- Verwerkersovereenkomst nodig

### Bias
- Trainingsdata kan vooroordelen bevatten
- Kan leiden tot ongelijke zorg
- Validatie op diverse populaties

## Regelgevend kader

- **AVG**: Persoonsgegevens beschermen
- **WGBO**: Dossierplicht blijft
- **AI Act**: Mogelijk hoog-risico
- **MDR**: Als het diagnose beïnvloedt

## Implementatieadvies

1. Start met lage-risico toepassingen
2. Pilot met duidelijke evaluatiecriteria
3. Train gebruikers in mogelijkheden én beperkingen
4. Houd mens in de loop

## Kernbegrippen

- **LLM**: Large Language Model
- **Generatieve AI**: AI die nieuwe content creëert
- **Hallucinatie**: Feitelijk onjuiste output
    `,
    sources: [
      { name: "KNMG - AI in de zorg", url: "https://www.knmg.nl" }
    ]
  },

  "6.5": {
    title: "Validatie en certificering van AI-systemen",
    summary: "AI-systemen in de zorg moeten gevalideerd en vaak gecertificeerd worden. Hoe werkt dit proces?",
    content: `
## In het kort

Voordat AI-systemen in de zorg gebruikt mogen worden, moeten ze bewezen veilig en effectief zijn. Dit vereist validatie en vaak certificering.

## Validatieproces

### Technische validatie
- **Nauwkeurigheid**: Doet het systeem wat het moet doen?
- **Robuustheid**: Werkt het ook bij edge cases?
- **Reproduceerbaarheid**: Consistent gedrag?

### Klinische validatie
- **Effectiviteit**: Verbetert het de zorg?
- **Veiligheid**: Geen schade voor patiënten?
- **Bruikbaarheid**: Past het in de werkflow?

### Stappen
1. Retrospectieve studie op historische data
2. Prospectieve studie in klinische setting
3. Implementatiestudie (real-world)

## Certificering (MDR)

Als het AI-systeem onder MDR valt:

### Klasse I
- Technisch dossier opstellen
- Zelfverklaring conformiteit
- CE-markering aanbrengen

### Klasse IIa en hoger
- Notified Body beoordeling
- Kwaliteitsmanagementsysteem (ISO 13485)
- Klinisch bewijs leveren

## AI Act conformiteit

Aanvullend op MDR:

- Risicomanagement documenteren
- Data governance aantonen
- Transparantie-eisen invullen
- Post-market monitoring opzetten

## Continue monitoring

Na implementatie:
- **Prestatiemonitoring**: Werkt het nog?
- **Drift detectie**: Verandert de data?
- **Incidentregistratie**: Wat gaat mis?
- **Gebruikersfeedback**: Ervaringen verzamelen

## Kernbegrippen

- **Validatie**: Bewijs dat systeem werkt
- **Certificering**: Formele goedkeuring
- **Post-market surveillance**: Monitoring na implementatie
    `,
    sources: [
      { name: "MDCG Guidance", url: "https://health.ec.europa.eu" },
      { name: "FDA AI/ML Guidance", url: "https://www.fda.gov" }
    ]
  },

  "6.6": {
    title: "Ethische kaders en responsible AI",
    summary: "AI in de zorg roept ethische vragen op. Hoe zorgen we voor verantwoorde inzet van AI-technologie?",
    content: `
## In het kort

Technische mogelijkheid betekent niet automatisch wenselijkheid. Ethische kaders helpen om AI verantwoord in te zetten.

## Ethische principes

### Autonomie
- Patiënt blijft zelf beslissen
- Informed consent voor AI-gebruik
- Recht op menselijke arts

### Weldoen (beneficence)
- AI moet daadwerkelijk helpen
- Bewezen effectiviteit
- Niet alleen efficiëntie

### Niet schaden (non-maleficence)
- Fouten kunnen ernstige gevolgen hebben
- Voorzichtigheidsprincipe
- Falen gracefully

### Rechtvaardigheid
- Gelijke toegang tot AI-zorg
- Geen discriminatie door bias
- Eerlijke verdeling van voordelen

## Praktische richtlijnen

### Transparantie
- Uitlegbaarheid van beslissingen
- Openheid over gebruik van AI
- Documentatie van werking

### Menselijk toezicht
- Geen volledig autonome beslissingen
- Arts blijft eindverantwoordelijk
- Override mogelijkheid

### Data-ethiek
- Representatieve trainingsdata
- Privacy by design
- Minimalisatie

## Governance

### Organisatieniveau
- AI-ethiekcommissie
- Implementatieprotocollen
- Training medewerkers

### Nationaal niveau
- Richtlijnen beroepsgroepen
- Toezicht door IGJ
- Publiek debat

## Dilemma's

- Efficiëntie vs menselijk contact
- Innovatie vs voorzichtigheid
- Individueel vs collectief belang
- Kort- vs langetermijneffecten

## Kernbegrippen

- **Responsible AI**: Verantwoorde AI-ontwikkeling
- **Uitlegbaarheid**: Kunnen begrijpen waarom AI iets besluit
- **Bias**: Systematische vertekening in AI-systemen
    `,
    sources: [
      { name: "WHO Ethics & AI", url: "https://www.who.int" },
      { name: "EU Ethics Guidelines AI", url: "https://digital-strategy.ec.europa.eu" }
    ]
  },

  // ============================================
  // EXPERT TRACK: TWIIN DEEP DIVE
  // ============================================

  "101.1": {
    title: "Twiin Architectuur & Governance",
    summary: "Diepgaande analyse van de Twiin-architectuur: het federatieve model, governance-structuur en de relatie met andere nationale infrastructuren.",
    content: `
## Architectuuroverzicht

Twiin is geen centraal systeem maar een **federatief vertrouwensnetwerk**. Het verbindt decentrale systemen via een set van afspraken, standaarden en ondersteunende diensten.

### Fundamentele architectuurprincipes

1. **Decentrale data**: Gegevens blijven bij de bron
2. **Federatieve uitwisseling**: Geen centrale database
3. **Vertrouwensketen**: Elke deelnemer is gekwalificeerd
4. **Standaarden-gedreven**: IHE-profielen als basis

## Governance-structuur

### Stichting Twiin

De juridische entiteit die het afsprakenstelsel beheert:

- **Bestuur**: Vertegenwoordigers van koepelorganisaties
- **Deelnemersraad**: Inspraak van aangesloten partijen
- **Expertgroepen**: Technisch en juridisch advies

### Rollen in het ecosysteem

| Rol | Verantwoordelijkheid |
|-----|----------------------|
| **Twiin-beheerder** | Beheert afsprakenstelsel en kwalificaties |
| **GtK-beheerder** | Beheert Goed-toegeruste-Knooppunten |
| **Deelnemer** | Aangesloten zorgaanbieder |
| **Leverancier** | Levert gekwalificeerde software |

## Relatie met andere infrastructuren

### Twiin en LSP

- LSP: Opt-in verwijsindex voor huisarts/apotheek
- Twiin: Bredere usecases, andere governance
- **Complementair**, niet concurrerend
- Toekomst: Mogelijk convergentie via Wegiz

### Twiin en Mitz

- Mitz: Centrale toestemmingsvoorziening
- Twiin: Raadpleegt Mitz voor autorisatie
- **Integratie**: Mitz-adapter in Twiin-knooppunten

### Twiin en Zorgplatform/VIPP

- Regionale samenwerkingsverbanden
- Kunnen via GtK aansluiten op Twiin
- **Opschaling**: Van regionaal naar landelijk

## Technische architectuurlagen

\`\`\`
┌─────────────────────────────────────────────────┐
│  Applicatielaag (EPD, PACS, Viewer)             │
├─────────────────────────────────────────────────┤
│  Integratie-laag (XDS/XCA Adapter)              │
├─────────────────────────────────────────────────┤
│  Twiin Knooppunt (GtK)                          │
│  - Lokalisatie & Adressering                    │
│  - Authenticatie & Autorisatie                  │
│  - Toestemmingsverificatie                      │
├─────────────────────────────────────────────────┤
│  Netwerk (mTLS, PKI)                            │
└─────────────────────────────────────────────────┘
\`\`\`

## Kernbegrippen

- **Federatief netwerk**: Geen centrale partij, gezamenlijke afspraken
- **GtK**: Goed-toegerust-Knooppunt - toegangspunt tot Twiin
- **Afsprakenstelsel**: Juridische, organisatorische en technische afspraken
    `,
    sources: [
      { name: "Twiin Architectuurdocument", url: "https://www.twiin.nl/architectuur" },
      { name: "Twiin Governance", url: "https://www.twiin.nl/governance" }
    ]
  },

  "101.2": {
    title: "Twiin Afsprakenstelsel: Juridisch & Organisatorisch",
    summary: "Het juridisch en organisatorisch raamwerk van Twiin: overeenkomsten, aansprakelijkheid, dataverwerking en verantwoordelijkheden.",
    content: `
## Juridisch raamwerk

### Deelnemersovereenkomst

Elke deelnemer tekent een overeenkomst die regelt:

- **Verplichtingen**: Wat moet je doen?
- **Rechten**: Wat mag je verwachten?
- **Aansprakelijkheid**: Wie is verantwoordelijk bij incidenten?
- **Exit**: Hoe stop je met deelname?

### Verwerkersconstructie

Cruciaal voor AVG-compliance:

\`\`\`
Zorgaanbieder A ──────> GtK A (verwerker) ──────> Twiin netwerk
       │                      │
       └── Verwerkings-      └── Subverwerkers-
           overeenkomst          overeenkomst
\`\`\`

**Let op**: De GtK-beheerder is verwerker, niet verwerkingsverantwoordelijke. De zorgaanbieder blijft verantwoordelijk.

## Aansprakelijkheidsverdeling

### Principe: Ieder draagt eigen verantwoordelijkheid

| Scenario | Verantwoordelijke |
|----------|-------------------|
| Fout in brondata | Bronhouder |
| Fout in transport | GtK-beheerder |
| Onterechte opvraging | Opvragende partij |
| Systeemuitval GtK | GtK-beheerder (SLA) |

### Escrow en continuïteit

- Software in escrow bij faillissement leverancier
- Continuïteitsplan verplicht voor GtK-beheerders
- Minimale beschikbaarheidseisen in SLA

## Dataverwerking

### Grondslag gegevensuitwisseling

Twiin faciliteert, maar de **grondslag ligt bij de zorgrelatie**:

1. Behandelrelatie (WGBO)
2. Toestemming patiënt (Wabvpz/Mitz)
3. Wettelijke verplichting (bijv. Wegiz)

### Logging en auditing

Verplichte registratie:

- Wie vraagt op?
- Welke gegevens?
- Op welk moment?
- Met welke grondslag?

Bewaartermijn: minimaal 5 jaar (NEN 7513).

## Organisatorische eisen

### Eisen aan deelnemers

- Rechtspersoon in Nederland of EU
- Zorgaanbieder of ondersteunende dienst
- NEN 7510 gecertificeerd of aantoonbaar compliant
- Getekende deelnemersovereenkomst

### Eisen aan GtK-beheerders

- ISO 27001 + NEN 7510 certificering
- 24/7 beschikbaarheid (99,5%)
- Incidentrespons binnen 4 uur
- Jaarlijkse audit

## Geschillenbeslechting

1. **Eerst**: Onderling overleg
2. **Dan**: Mediatie via Twiin
3. **Laatste**: Arbitrage of rechter

## Kernbegrippen

- **Verwerkingsverantwoordelijke**: Partij die doel en middelen bepaalt
- **Verwerker**: Partij die namens verantwoordelijke verwerkt
- **Grondslag**: Juridische basis voor gegevensverwerking
    `,
    sources: [
      { name: "Twiin Afsprakenstelsel", url: "https://www.twiin.nl/afsprakenstelsel" },
      { name: "Twiin Deelnemersovereenkomst", url: "https://www.twiin.nl/deelname" }
    ]
  },

  "101.3": {
    title: "Technische Componenten: GtK, Adressering, Lokalisatie",
    summary: "Technische deep-dive in de kerncomponenten van Twiin: het Goed-toegerust-Knooppunt, adresseringsmechanismen en lokalisatiediensten.",
    content: `
## Goed-toegerust-Knooppunt (GtK)

### Wat is een GtK?

Het GtK is het technische toegangspunt tot Twiin:

- **Gateway-functie**: Vertaalt lokale systemen naar Twiin-standaarden
- **Beveiligingslaag**: mTLS, certificaatbeheer
- **Toestemmingscheck**: Raadpleegt Mitz
- **Logging**: Registreert alle transacties

### GtK-architectuur

\`\`\`
┌─────────────────────────────────────────────┐
│                    GtK                       │
├─────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────────────┐   │
│  │ XDS/XCA     │  │ Toestemming-        │   │
│  │ Handler     │  │ verificatie         │   │
│  └─────────────┘  └─────────────────────┘   │
│  ┌─────────────┐  ┌─────────────────────┐   │
│  │ Lokalisatie │  │ Audit & Logging     │   │
│  │ Client      │  │                     │   │
│  └─────────────┘  └─────────────────────┘   │
│  ┌─────────────────────────────────────────┐│
│  │ mTLS / PKI / Certificaatbeheer          ││
│  └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
\`\`\`

### GtK-varianten

| Type | Kenmerken | Geschikt voor |
|------|-----------|---------------|
| **Lokale GtK** | Op eigen infrastructuur | Grote ziekenhuizen |
| **Shared GtK** | Gedeeld via leverancier | Kleinere instellingen |
| **Cloud GtK** | Volledig gehost | Wie geen beheer wil |

## Adresseringsmodel

### Logical Endpoint

Elke deelnemer heeft een uniek adres:

\`\`\`
urn:twiin:participant:<OID>:<organizationId>
\`\`\`

Voorbeeld:
\`\`\`
urn:twiin:participant:2.16.840.1.113883.2.4.3:1234567890
\`\`\`

### Endpoint Discovery

Hoe vind je de technische endpoint?

1. **Logisch adres** → Zorgadresboek/Twiin Registry
2. **Opzoeken** → Fysiek endpoint (URL)
3. **Certificaat** → Valideren identiteit

## Lokalisatiedienst

### Probleem

Waar zijn gegevens van patiënt X beschikbaar?

### Oplossing: Cross-Community Patient Discovery

IHE XCPD-profiel:

\`\`\`
1. GtK A stuurt: "Heeft u gegevens van BSN 123456789?"
2. Broadcast naar alle bekende communities
3. GtK B, C, D antwoorden: "Ja" of "Nee"
4. GtK A verzamelt antwoorden
\`\`\`

### Caching en performance

- **Patient Index Cache**: Lokaal bijhouden bekende relaties
- **Tijdelijke cache**: Voorkomt herhaalde lookups
- **Push-notificaties**: (Roadmap) Proactieve updates

## PKI en Certificaten

### Certificaathiërarchie

\`\`\`
Twiin Root CA
    │
    ├── Twiin Issuing CA (Organisatie-certificaten)
    │       │
    │       └── GtK-certificaat per deelnemer
    │
    └── (Optioneel) Persoons-certificaten (UZI)
\`\`\`

### Mutual TLS (mTLS)

Beide partijen authenticeren:

1. Client stuurt certificaat
2. Server valideert tegen Twiin CA
3. Server stuurt eigen certificaat
4. Client valideert
5. Beveiligde verbinding

## Kernbegrippen

- **GtK**: Goed-toegerust-Knooppunt - technisch toegangspunt
- **XCPD**: Cross-Community Patient Discovery - patiëntlokalisatie
- **mTLS**: Mutual TLS - tweezijdige authenticatie
    `,
    sources: [
      { name: "Twiin Technische Specificaties", url: "https://www.twiin.nl/techniek" },
      { name: "IHE ITI Profiles", url: "https://www.ihe.net/resources/technical_frameworks/" }
    ]
  },

  "101.4": {
    title: "XDS/XCA Implementatie in Twiin",
    summary: "Gedetailleerde implementatiegids voor XDS en XCA binnen Twiin: transacties, metadata, query's en foutafhandeling.",
    content: `
## IHE XDS/XCA Basis

### XDS (Cross-Enterprise Document Sharing)

Binnen één "affinity domain":

- **Document Source**: Publiceert documenten
- **Document Repository**: Slaat documenten op
- **Document Registry**: Index van metadata
- **Document Consumer**: Vraagt documenten op

### XCA (Cross-Community Access)

Tussen affinity domains:

- **Initiating Gateway**: Start de vraag
- **Responding Gateway**: Beantwoordt de vraag
- **Federatie**: Transparant voor eindgebruiker

## Twiin XDS/XCA Profiel

### Ondersteunde transacties

| Transactie | ITI-code | Beschrijving |
|------------|----------|--------------|
| Registry Stored Query | ITI-18 | Zoeken in registry |
| Retrieve Document Set | ITI-43 | Ophalen documenten |
| Cross Gateway Query | ITI-38 | Query naar andere community |
| Cross Gateway Retrieve | ITI-39 | Retrieve van andere community |
| Patient Identity Feed | ITI-44 | Patiëntidentificatie sync |

### Query-parameters

Verplichte Twiin-parameters:

\`\`\`xml
<AdhocQuery id="urn:uuid:14d4debf-8f97-4251-9a74-a90016b0af0d">
  <Slot name="$XDSDocumentEntryPatientId">
    <ValueList>
      <Value>'123456789^^^&amp;2.16.528.1.1007.3.1&amp;ISO'</Value>
    </ValueList>
  </Slot>
  <Slot name="$XDSDocumentEntryStatus">
    <ValueList>
      <Value>('urn:oasis:names:tc:ebxml-regrep:StatusType:Approved')</Value>
    </ValueList>
  </Slot>
</AdhocQuery>
\`\`\`

## Metadata-vereisten

### DocumentEntry attributen

| Attribuut | Verplicht | Beschrijving |
|-----------|-----------|--------------|
| uniqueId | Ja | Unieke document-ID (OID) |
| patientId | Ja | Patiënt-ID met BSN |
| classCode | Ja | Type document (bijv. radiology report) |
| typeCode | Ja | Specifiek documenttype |
| formatCode | Ja | Technisch formaat |
| creationTime | Ja | Aanmaakdatum |
| healthcareFacilityTypeCode | Ja | Type instelling |
| practiceSettingCode | Ja | Specialisme |

### Twiin-specifieke codes

\`\`\`
classCode:
  - 18748-4 (Diagnostic Imaging Report)
  - 11502-2 (Laboratory Report)
  - 18842-5 (Discharge Summary)

formatCode:
  - urn:ihe:rad:TEXT
  - urn:ihe:lab:xd-lab:2008
  - urn:nl:nictiz:2017:cda-bgz
\`\`\`

## Implementatiedetails

### SOAP Binding

Alle berichten via SOAP 1.2:

\`\`\`xml
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header>
    <wsa:Action>urn:ihe:iti:2007:RegistryStoredQuery</wsa:Action>
    <wsa:MessageID>urn:uuid:...</wsa:MessageID>
  </soap:Header>
  <soap:Body>
    <!-- Query content -->
  </soap:Body>
</soap:Envelope>
\`\`\`

### Error Handling

Standaard error-responses:

| Code | Betekenis | Actie |
|------|-----------|-------|
| XDSRegistryError | Registry niet bereikbaar | Retry met backoff |
| XDSRepositoryError | Repository niet bereikbaar | Gebruik alternatief |
| XDSUnknownPatientId | Patiënt niet gevonden | Controleer ID-formaat |
| XDSAuthorizationDenied | Geen toestemming | Check Mitz-status |

### Timeout en Retry

Twiin-configuratie:

- **Query timeout**: 30 seconden
- **Retrieve timeout**: 120 seconden (grote documenten)
- **Retry attempts**: 3x met exponential backoff
- **Circuit breaker**: Na 5 failures in 1 minuut

## Kernbegrippen

- **Affinity Domain**: Verzameling samenwerkende partijen
- **Registry**: Index van document-metadata
- **Repository**: Opslag van documenten zelf
- **Gateway**: Vertaalpunt tussen communities
    `,
    sources: [
      { name: "IHE XDS Profile", url: "https://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing" },
      { name: "IHE XCA Profile", url: "https://wiki.ihe.net/index.php/Cross-Community_Access" }
    ]
  },

  "101.5": {
    title: "Beelduitwisseling: XDS-I en DICOM in Twiin",
    summary: "Technische implementatie van beelduitwisseling via Twiin: XDS-I profielen, DICOM manifesten, WADO-RS en performance-optimalisatie.",
    content: `
## XDS-I: Imaging Document Sharing

### Verschil met standaard XDS

XDS-I is geoptimaliseerd voor medische beelden:

- **Manifesten** in plaats van volledige beelden in XDS
- **DICOM-referenties** naar beelden in PACS
- **On-demand retrieval** via WADO

### Document-types in XDS-I

| Type | Beschrijving | Formaat |
|------|--------------|---------|
| KOS (Key Object Selection) | DICOM manifest | application/dicom |
| PDF Report | Radiologie verslag | application/pdf |
| CDA Report | Gestructureerd verslag | text/xml |

## DICOM Manifest (KOS)

### Structuur

\`\`\`
Key Object Selection Document
├── Patient Module
│   └── Patient ID, Name, Birth Date
├── Study Module
│   └── Study Instance UID, Study Date
├── Series Module
│   └── Series Instance UID, Modality
└── Current Requested Procedure Evidence
    └── Referenced Series Sequence
        └── Referenced SOP Instances
\`\`\`

### Voorbeeld Reference

\`\`\`
Referenced SOP Class UID: 1.2.840.10008.5.1.4.1.1.2 (CT Image)
Referenced SOP Instance UID: 1.2.840.113619.2.55.3.123456789
Retrieve Location UID: urn:twiin:repository:12345
\`\`\`

## Retrieval Mechanismen

### WADO-RS (RESTful)

Moderne manier van ophalen:

\`\`\`
GET /studies/{studyUID}/series/{seriesUID}/instances/{instanceUID}
Accept: application/dicom; transfer-syntax=*

Response: multipart/related; type="application/dicom"
\`\`\`

### WADO-URI (Legacy)

Oudere URL-gebaseerde retrieval:

\`\`\`
GET /wado?requestType=WADO
    &studyUID=1.2.3.4.5
    &seriesUID=1.2.3.4.5.6
    &objectUID=1.2.3.4.5.6.7
    &contentType=application/dicom
\`\`\`

### Performance Tips

| Techniek | Effect |
|----------|--------|
| Transfer Syntax negotiation | Vermijd transcodering |
| Compressed transfer | Sneller transport |
| Thumbnail first | Snelle preview |
| Background prefetch | Anticipeer op viewing |

## Twiin-specifieke implementatie

### Flow: Beelden opvragen

\`\`\`
1. XCA Query naar andere community
   └─> "Welke studies voor patiënt X?"

2. Response: DocumentEntry met KOS
   └─> Bevat DICOM referenties

3. Retrieve KOS document
   └─> Manifest met instance UIDs

4. WADO-RS calls naar source PACS
   └─> Ophalen individuele beelden

5. Lokale viewing/cache
   └─> Display aan gebruiker
\`\`\`

### Cross-border beelduitwisseling

- **IHE XCA-I**: Cross-community imaging
- **Rendering**: Lokaal of via source
- **Cached copies**: Tijdelijke lokale opslag

## Viewer-integratie

### Zero Footprint Viewer

Browser-gebaseerd bekijken:

\`\`\`javascript
// Launch viewer with Twiin context
viewer.open({
  studyInstanceUID: "1.2.3.4.5",
  accessToken: twiinToken,
  wadoEndpoint: "https://gtk.example.nl/wado"
});
\`\`\`

### Lokale PACS-integratie

Via worklist of prefetch:

1. Query Twiin voor relevante studies
2. Push naar lokale PACS/cache
3. Radiologie opent vanuit bekende workflow

## Kernbegrippen

- **KOS**: Key Object Selection - DICOM manifest document
- **WADO**: Web Access to DICOM Objects
- **Transfer Syntax**: Encoding van DICOM pixels
- **Zero Footprint**: Viewer zonder installatie
    `,
    sources: [
      { name: "IHE XDS-I.b Profile", url: "https://wiki.ihe.net/index.php/XDS-I.b" },
      { name: "DICOM WADO-RS", url: "https://www.dicomstandard.org/using/dicomweb" }
    ]
  },

  "101.6": {
    title: "Toestemming & Autorisatie in Twiin",
    summary: "Implementatie van toestemmingsbeheer in Twiin: Mitz-integratie, XACML policies, consent-verificatie en uitzonderingsscenario's.",
    content: `
## Toestemmingsmodel

### Juridisch kader

De toestemmingsketen:

\`\`\`
WGBO (Behandelrelatie)
    │
    ├── Wabvpz (Elektronische uitwisseling)
    │       │
    │       └── Specifieke toestemming vereist
    │
    └── Wegiz (Verplichte uitwisseling)
            │
            └── Geen toestemming nodig (wettelijk bepaald)
\`\`\`

### Toestemmingsniveaus

| Niveau | Beschrijving | Bron |
|--------|--------------|------|
| Generiek | Algemene toestemming voor type uitwisseling | Mitz |
| Specifiek | Per zorgaanbieder/type gegeven | Mitz |
| Incidenteel | Eenmalige toestemming | Lokaal vastgelegd |
| Nood | Zonder toestemming in noodsituatie | Breaking the glass |

## Mitz-integratie

### Architectuur

\`\`\`
┌─────────────────┐     ┌─────────────────┐
│   GtK Client    │────>│  Mitz Adapter   │
└─────────────────┘     └────────┬────────┘
                                 │
                                 v
                        ┌─────────────────┐
                        │  Mitz Centraal  │
                        └─────────────────┘
\`\`\`

### Mitz Request

\`\`\`json
{
  "bsn": "123456789",
  "requestingOrganization": "urn:oid:2.16.840.1.113883.2.4.3.1234",
  "dataCategory": "medical-imaging",
  "purpose": "treatment"
}
\`\`\`

### Mitz Response

\`\`\`json
{
  "status": "CONSENT_GRANTED",
  "validUntil": "2025-12-31T23:59:59Z",
  "restrictions": [],
  "auditId": "abc123-def456"
}
\`\`\`

## XACML Policy Engine

### Policy Structure

\`\`\`xml
<Policy PolicyId="twiin-access-policy">
  <Target>
    <Resource>medical-data</Resource>
  </Target>

  <Rule RuleId="treatment-access" Effect="Permit">
    <Condition>
      <Apply FunctionId="and">
        <Apply FunctionId="treatment-relationship-exists"/>
        <Apply FunctionId="mitz-consent-valid"/>
      </Apply>
    </Condition>
  </Rule>

  <Rule RuleId="emergency-access" Effect="Permit">
    <Condition>
      <Apply FunctionId="emergency-flag-set"/>
    </Condition>
  </Rule>

  <Rule RuleId="default-deny" Effect="Deny"/>
</Policy>
\`\`\`

### Decision Flow

1. **Policy Information Point (PIP)**: Verzamelt attributen
2. **Policy Decision Point (PDP)**: Evalueert policies
3. **Policy Enforcement Point (PEP)**: Handhaaft beslissing

## Breaking the Glass (Noodprocedure)

### Wanneer toegestaan?

- Acute medische noodsituatie
- Patiënt niet in staat toestemming te geven
- Geen behandelrelatie maar wel noodzaak

### Implementatie

\`\`\`
1. Zorgverlener activeert "nood"-optie
2. Verplichte invoer: reden voor noodtoegang
3. Systeem logt uitgebreid:
   - Wie, wanneer, waarom
   - Welke gegevens ingezien
4. Achteraf: review door FG/medisch manager
5. Patiënt kan inzien via Mitz
\`\`\`

### Audit Trail

\`\`\`json
{
  "eventType": "EMERGENCY_ACCESS",
  "timestamp": "2025-02-10T15:30:00Z",
  "practitioner": {
    "uzi": "2.16.528.1.1007.3.1.1234567",
    "name": "Dr. Jansen",
    "role": "SEH-arts"
  },
  "patient": {
    "bsn": "123456789"
  },
  "justification": "Bewusteloze patiënt, onduidelijke medicatie",
  "dataAccessed": ["medication-overview", "allergies"]
}
\`\`\`

## Autorisatie voor systemen

### Rol-gebaseerde toegang

\`\`\`
Rol: Radioloog
├── Mag inzien: Alle radiologie
├── Mag inzien: Relevante medicatie
└── Mag NIET: Psychiatrische gegevens (tenzij relevant)

Rol: Huisarts
├── Mag inzien: Alles van eigen patiënten
└── Mag NIET: Patiënten zonder inschrijving
\`\`\`

### Attribute-Based Access Control (ABAC)

Moderne aanpak in Twiin:

- Niet alleen rol, maar ook context
- Welke afdeling, welk tijdstip, welke locatie
- Dynamische policy-evaluatie

## Kernbegrippen

- **Mitz**: Centrale toestemmingsvoorziening
- **Breaking the glass**: Noodtoegang zonder toestemming
- **XACML**: eXtensible Access Control Markup Language
- **ABAC**: Attribute-Based Access Control
    `,
    sources: [
      { name: "Mitz Technische Specificatie", url: "https://www.mitz.nl/techniek" },
      { name: "IHE BPPC Profile", url: "https://wiki.ihe.net/index.php/Basic_Patient_Privacy_Consents" }
    ]
  },

  "101.7": {
    title: "Certificering & Kwalificatie voor Twiin",
    summary: "Het kwalificatieproces voor Twiin-deelname: technische testen, conformiteitseisen, audits en onderhoud van kwalificatie.",
    content: `
## Kwalificatieproces

### Fasen

\`\`\`
1. Vooraanmelding
   └── Intentie tot deelname, globale check

2. Voorbereiding
   └── Technische voorbereiding, testomgeving

3. Kwalificatietesten
   └── Functionele tests, security tests

4. Audit
   └── Beoordeling door onafhankelijke auditor

5. Toetreding
   └── Ondertekening, productie-aansluiting

6. Onderhoud
   └── Jaarlijkse hercertificering
\`\`\`

### Doorlooptijd

| Fase | Indicatieve duur |
|------|------------------|
| Voorbereiding | 2-4 maanden |
| Kwalificatietesten | 1-2 maanden |
| Audit | 2-4 weken |
| Toetreding | 2 weken |
| **Totaal** | **4-8 maanden** |

## Technische Kwalificatie

### Testscenario's

De kwalificatietestset omvat:

1. **Basisconnectiviteit**
   - mTLS handshake
   - Certificaatvalidatie
   - Endpoint discovery

2. **XDS/XCA Transacties**
   - Registry Stored Query
   - Retrieve Document Set
   - Cross Gateway Query/Retrieve

3. **Beelduitwisseling**
   - XDS-I manifest handling
   - WADO retrieval
   - DICOM conformance

4. **Toestemmingsverificatie**
   - Mitz-integratie
   - Consent enforcement
   - Emergency access flow

### Testreferenties

Twiin levert:
- **Testsuite**: Geautomatiseerde testscripts
- **Referentie-implementatie**: Bekende goede responses
- **Testpatiënten**: Fictieve BSN's voor test

### Conformiteitseisen

\`\`\`
[ ] IHE XDS.b volledig conform
[ ] IHE XCA volledig conform
[ ] IHE XDS-I.b (indien beelduitwisseling)
[ ] Twiin metadata-profiel
[ ] Twiin security-profiel
[ ] NEN 7512 (transport)
[ ] NEN 7513 (logging)
\`\`\`

## Security Audit

### Scope

- **Penetratietest**: Externe partij test beveiliging
- **Code review**: Bij maatwerksoftware
- **Configuratie-audit**: Infrastructuur settings
- **Proces-audit**: Incident response, change management

### Bevindingen classificatie

| Klasse | Beschrijving | Actie |
|--------|--------------|-------|
| Kritiek | Direct exploiteerbaar | Blokkeer tot opgelost |
| Hoog | Significant risico | Oplossen binnen 2 weken |
| Midden | Beperkt risico | Oplossen binnen 3 maanden |
| Laag | Aanbeveling | Optioneel |

## Organisatorische Kwalificatie

### Eisen aan de organisatie

\`\`\`
[ ] Rechtspersoon (NL of EU)
[ ] Zorgaanbieder of ondersteunend
[ ] Bestuurlijk commitment (getekend)
[ ] Privacy officer aangewezen
[ ] Security officer aangewezen
[ ] Incidentprocedure operationeel
\`\`\`

### Eisen aan personeel

- Minimaal 2 technische beheerders getraind
- Functioneel beheerder beschikbaar
- 24/7 bereikbaarheid voor kritieke incidenten

## Onderhoud van Kwalificatie

### Jaarlijkse hercertificering

- Self-assessment formulier
- Bevestiging van compliance
- Steekproefsgewijze audit

### Wijzigingsprocedure

Bij significante wijzigingen:

1. Melden bij Twiin-beheerder
2. Impact assessment
3. Eventueel: hertest specifieke onderdelen
4. Vrijgave voor productie

### Intrekking kwalificatie

Gronden voor intrekking:
- Herhaalde non-compliance
- Beveiligingsincident zonder adequate response
- Financieel faillissement
- Eigen verzoek

## Kernbegrippen

- **Kwalificatie**: Bewijs van voldoen aan eisen
- **Conformiteit**: Technische overeenkomst met specificaties
- **Hercertificering**: Periodieke herbevestiging
    `,
    sources: [
      { name: "Twiin Kwalificatiehandboek", url: "https://www.twiin.nl/kwalificatie" },
      { name: "IHE Connectathon", url: "https://www.ihe.net/participate/connectathon/" }
    ]
  },

  "101.8": {
    title: "Twiin Implementatietraject: Van Ontwerp tot Productie",
    summary: "Praktische gids voor het implementeren van Twiin: projectfasering, technische architectuurkeuzes, integratie met bestaande systemen en go-live.",
    content: `
## Projectfasering

### Fase 1: Initiatie (4-6 weken)

**Doelen:**
- Stakeholder alignment
- Scope definitie
- Business case

**Activiteiten:**
\`\`\`
[ ] Identificeer usecases (beelden, documenten, medicatie)
[ ] Inventariseer huidige systemen (EPD, PACS, etc.)
[ ] Bepaal GtK-strategie (lokaal, shared, cloud)
[ ] Stel projectteam samen
[ ] Maak globale planning
\`\`\`

### Fase 2: Ontwerp (6-8 weken)

**Doelen:**
- Technische architectuur
- Integratiestrategie
- Security design

**Deliverables:**
- Solution Architecture Document (SAD)
- Integratie-ontwerp per bronsysteem
- Security & Privacy Impact Assessment

### Fase 3: Realisatie (12-16 weken)

**Doelen:**
- Implementatie GtK
- Integratie met bronsystemen
- Testomgeving operationeel

**Parallelle workstreams:**
\`\`\`
Workstream 1: GtK Setup
├── Infrastructuur provisioning
├── GtK software installatie
├── Certificaatbeheer inrichten
└── Connectiviteit met Twiin

Workstream 2: Bronsysteem Integratie
├── EPD/ZIS integratie
├── PACS/RIS integratie
├── Document repository
└── Metadata mapping

Workstream 3: Autorisatie & Consent
├── Mitz-koppeling
├── Gebruikersautorisatie
└── Logging implementatie
\`\`\`

### Fase 4: Test & Kwalificatie (8-12 weken)

**Testlagen:**
1. Unit tests (component level)
2. Integratie tests (end-to-end flows)
3. Kwalificatietesten (Twiin testset)
4. User Acceptance Test (klinische scenario's)
5. Security test (pentest)

### Fase 5: Pilot & Rollout (4-8 weken)

**Gefaseerde uitrol:**
\`\`\`
Week 1-2: Pilot met beperkte gebruikersgroep
Week 3-4: Evaluatie en bijsturing
Week 5-6: Uitrol naar alle gebruikers
Week 7-8: Hypercare en overdracht naar beheer
\`\`\`

## Technische Architectuurkeuzes

### GtK Deployment Opties

**Optie A: On-premise GtK**
\`\`\`
Voordelen:
+ Volledige controle
+ Geen cloud-afhankelijkheid
+ Mogelijk lagere latency

Nadelen:
- Eigen beheer nodig
- Hogere initiële investering
- Zelf verantwoordelijk voor updates
\`\`\`

**Optie B: Leverancier-hosted GtK**
\`\`\`
Voordelen:
+ Beheer uitbesteed
+ Snellere implementatie
+ Gedeelde kosten

Nadelen:
- Afhankelijkheid van leverancier
- Minder controle
- Mogelijk vendor lock-in
\`\`\`

### Integratie-patronen

**Patroon 1: Directe EPD-integratie**
\`\`\`
EPD ──> XDS Adapter ──> GtK ──> Twiin

Beste voor: Grote instellingen met technische capaciteit
\`\`\`

**Patroon 2: Via Integration Engine**
\`\`\`
EPD ──> Mirth/Rhapsody ──> XDS Adapter ──> GtK

Beste voor: Complexe omgevingen met meerdere bronnen
\`\`\`

**Patroon 3: Vendor-native**
\`\`\`
EPD (met ingebouwde XDS) ──> GtK

Beste voor: Als leverancier dit ondersteunt
\`\`\`

## Integratie met Bestaande Systemen

### EPD/ZIS Integratie

Key integration points:
- **Patient context**: Lanceer Twiin vanuit patiëntdossier
- **Document feed**: Push nieuwe documenten naar Twiin
- **Query results**: Toon externe documenten in EPD

### PACS Integratie

\`\`\`
Scenario: Radioloog wil externe beelden zien

1. EPD toont "Externe beelden beschikbaar"
2. Klik opent Twiin query
3. KOS-manifest wordt opgehaald
4. WADO retrieval naar viewer
5. Beelden getoond in bekende viewer
\`\`\`

### Viewer Strategie

| Optie | Voordeel | Nadeel |
|-------|----------|--------|
| Bestaande PACS viewer | Bekende workflow | Complexe integratie |
| Zero-footprint viewer | Eenvoudig te deployen | Extra tool voor gebruiker |
| Hybrid | Flexibiliteit | Meer onderhoud |

## Go-Live Checklist

\`\`\`
Technisch:
[ ] Alle kwalificatietesten geslaagd
[ ] Productie-certificaten geïnstalleerd
[ ] Monitoring operationeel
[ ] Backup & recovery getest

Organisatorisch:
[ ] Gebruikers getraind
[ ] Helpdesk voorbereid
[ ] Incidentprocedure getest
[ ] Go/no-go beslissing genomen

Juridisch:
[ ] Deelnemersovereenkomst getekend
[ ] DPIA afgerond
[ ] Verwerkersovereenkomsten compleet
\`\`\`

## Valkuilen en Lessons Learned

### Veelvoorkomende issues

1. **Metadata mapping onderschat**
   - Plan extra tijd voor mapping
   - Test met echte data

2. **Toestemmingsflow complex**
   - Begin vroeg met Mitz-integratie
   - Test edge cases

3. **Performance bij grote datasets**
   - Implementeer caching
   - Overweeg prefetching

4. **Gebruikersadoptie**
   - Betrek eindgebruikers vroeg
   - Maak workflow intuïtief

## Kernbegrippen

- **SAD**: Solution Architecture Document
- **Hypercare**: Intensieve ondersteuning na go-live
- **Prefetching**: Proactief ophalen van data
    `,
    sources: [
      { name: "Twiin Implementatiehandleiding", url: "https://www.twiin.nl/implementatie" },
      { name: "IHE Implementation Guide", url: "https://www.ihe.net/resources/implementation_resources/" }
    ]
  },

  // ==========================================
  // TRACK 102: DATABRICKS IN DE ZORG
  // ==========================================

  "102.1": {
    title: "Databricks Fundamentals voor de Zorg",
    summary: "Introductie tot het Databricks platform en de relevantie voor data-gedreven zorginstellingen.",
    content: `
## In het kort

Databricks is een unified analytics platform dat Apache Spark combineert met een lakehouse-architectuur. Voor zorginstellingen biedt het een krachtige basis voor het combineren van data warehousing en data science op één platform.

## Wat is Databricks?

Databricks is opgericht door de makers van Apache Spark en combineert:

- **Data Engineering** - ETL/ELT pipelines voor grote datasets
- **Data Science** - Notebooks voor analyse en ML
- **Data Warehousing** - SQL analytics op Delta Lake
- **Machine Learning** - MLflow voor model lifecycle

### Het Lakehouse Paradigma

Databricks pioniert het **lakehouse** concept: de flexibiliteit van een data lake met de structuur en performance van een data warehouse.

\`\`\`
Traditioneel:
Data Lake (ongestructureerd) ←→ Data Warehouse (gestructureerd)
              ↓ duplicatie, complexiteit

Lakehouse:
Delta Lake (beide paradigma's in één laag)
              ↓ single source of truth
\`\`\`

## Waarom Databricks in de Zorg?

### Typische zorgtoepassingen

1. **Population Health Analytics** - Analyse van patiëntpopulaties
2. **Clinical Research** - Verwerking van grote datasets voor onderzoek
3. **Operational Analytics** - Capaciteitsplanning, doorlooptijden
4. **Predictive Models** - Heropname-risico, sepsis-detectie

### Voordelen voor zorginstellingen

- **Schaal** - Van gigabytes tot petabytes aan zorgdata
- **Unified** - Eén platform voor data engineers en data scientists
- **Open** - Delta Lake is open source, geen vendor lock-in
- **Cloud-native** - Beschikbaar op Azure, AWS en GCP

## Databricks op Azure vs AWS vs GCP

| Aspect | Azure Databricks | AWS Databricks | GCP Databricks |
|--------|------------------|----------------|----------------|
| Integratie | Azure Synapse, ADLS | S3, Glue, Redshift | BigQuery, GCS |
| Healthcare | Azure Health APIs | AWS HealthLake | Cloud Healthcare API |
| Populariteit NL | Zeer hoog | Gemiddeld | Laag |

In Nederland is **Azure Databricks** dominant vanwege Microsoft-partnerships in de zorg.

## Kernbegrippen

- **Lakehouse**: Combinatie van data lake en data warehouse
- **Delta Lake**: Open-source storage layer met ACID-transacties
- **Workspace**: De Databricks omgeving met notebooks, jobs, clusters
- **Unity Catalog**: Governance-laag voor data assets
    `,
    sources: [
      { name: "Databricks Documentation", url: "https://docs.databricks.com" },
      { name: "Delta Lake", url: "https://delta.io" }
    ]
  },

  "102.2": {
    title: "Data Lakehouse Architectuur in Healthcare",
    summary: "Deep dive in de lakehouse-architectuur met Delta Lake en de medallion-structuur voor zorgdata.",
    content: `
## In het kort

De lakehouse-architectuur combineert de schaalbaarheid van data lakes met de betrouwbaarheid van data warehouses. Delta Lake vormt de kern met ACID-transacties en schema-enforcement op cloudopslag.

## Delta Lake: De Kern van het Lakehouse

### Wat maakt Delta Lake uniek?

Delta Lake is een open-source storage format dat Parquet-bestanden verrijkt met:

- **ACID Transacties** - Atomic, Consistent, Isolated, Durable writes
- **Schema Enforcement** - Voorkomt corrupte data
- **Time Travel** - Query data op elk punt in de tijd
- **Audit History** - Volledige wijzigingsgeschiedenis

### Delta vs Parquet vs Iceberg

\`\`\`
Parquet: Kolomgebaseerd bestandsformaat (geen transacties)
Delta Lake: Parquet + transactie-log + optimalisaties
Apache Iceberg: Alternatief table format (Netflix)
Apache Hudi: Alternatief (Uber)
\`\`\`

## De Medallion Architectuur

### Bronze-Silver-Gold Model

De standaard architectuur voor data lakes met toenemende datakwaliteit:

**Bronze (Raw)**
- Ruwe data zoals aangeleverd
- Minimale transformaties
- Behoud van originele data voor audit

**Silver (Cleansed)**
- Gestandaardiseerde schemas
- Gevalideerde en gecleansde data
- Business-ready datasets

**Gold (Aggregated)**
- Business-level aggregaties
- Klaar voor rapportage en ML
- Dimensionele modellen

### Healthcare Voorbeeld

\`\`\`
Bronze:
├── hl7_messages/          (ruwe HL7v2 berichten)
├── fhir_bundles/          (FHIR JSON)
├── dicom_metadata/        (DICOM tags)
└── epic_extracts/         (EPD exports)

Silver:
├── patients/              (gestandaardiseerde patiëntdata)
├── encounters/            (opnames, consulten)
├── observations/          (labs, vitals)
└── medications/           (medicatie-orders)

Gold:
├── patient_360/           (compleet patiëntbeeld)
├── quality_metrics/       (kwaliteitsindicatoren)
└── ml_features/           (features voor ML-modellen)
\`\`\`

## Zorgdata Architectuur Patterns

### Pattern 1: Centralized Lakehouse

Alle data in één lakehouse met strikte governance:
- Geschikt voor: Eén groot ziekenhuis
- Voordeel: Consistentie, minder complexiteit
- Nadeel: Single point of failure

### Pattern 2: Domain-Oriented Lakehouse

Meerdere lakehouses per domein (Data Mesh principes):
- Geschikt voor: Ziekenhuisgroepen, netwerken
- Voordeel: Autonomie per domein
- Nadeel: Meer governance-overhead

## Performance Optimalisatie

### Z-Ordering en Liquid Clustering

\`\`\`sql
-- Z-Order voor snelle queries op patient_id en encounter_date
OPTIMIZE silver.encounters
ZORDER BY (patient_id, encounter_date)

-- Liquid Clustering (nieuwer, automatischer)
ALTER TABLE silver.encounters
CLUSTER BY (patient_id)
\`\`\`

### Partitionering voor Zorgdata

\`\`\`sql
-- Partition op datum voor tijdreeksanalyse
CREATE TABLE gold.daily_admissions
PARTITIONED BY (admission_date)
AS SELECT ...
\`\`\`

## Kernbegrippen

- **ACID**: Atomicity, Consistency, Isolation, Durability
- **Medallion**: Bronze-Silver-Gold architectuur
- **Time Travel**: Query historische versies van data
- **Z-Ordering**: Data-layout optimalisatie voor queries
    `,
    sources: [
      { name: "Delta Lake Documentation", url: "https://docs.delta.io" },
      { name: "Databricks Lakehouse Architecture", url: "https://www.databricks.com/blog/2020/01/30/what-is-a-data-lakehouse.html" }
    ]
  },

  "102.3": {
    title: "Zorgdata Ingestie: HL7, FHIR en DICOM naar Delta Lake",
    summary: "Praktische aanpak voor het inladen van zorgstandaarden zoals HL7v2, FHIR en DICOM in het lakehouse.",
    content: `
## In het kort

Zorginstellingen werken met specifieke dataformaten: HL7v2 berichten, FHIR resources en DICOM beelden. Het inladen hiervan in Delta Lake vereist specifieke parsing en transformatie.

## HL7v2 Ingestie

### HL7v2 Structuur

HL7v2 berichten zijn pipe-delimited tekstbestanden:

\`\`\`
MSH|^~\\&|EPD|HOSPITAL|LAB|HOSPITAL|202401151030||ADT^A01|MSG001|P|2.5
PID|1||12345^^^HOSPITAL^MR||Jansen^Jan||19800115|M|||Hoofdstraat 1^^Amsterdam
\`\`\`

### Parsing in PySpark

\`\`\`python
from pyspark.sql.functions import *

def parse_hl7v2(message):
    segments = message.split('\\r')
    parsed = {}
    for segment in segments:
        fields = segment.split('|')
        segment_type = fields[0]
        parsed[segment_type] = fields
    return parsed

# Streaming ingestie van HL7v2
hl7_stream = (spark.readStream
    .format("cloudFiles")
    .option("cloudFiles.format", "text")
    .load("/mnt/bronze/hl7_messages/")
)

# Parse naar structured data
parsed_df = hl7_stream.withColumn(
    "parsed",
    udf(parse_hl7v2)("value")
)
\`\`\`

## FHIR Ingestie

### FHIR Bundles Verwerken

FHIR data komt typisch als JSON bundles:

\`\`\`python
from pyspark.sql.types import *

# Schema voor FHIR Patient resource
patient_schema = StructType([
    StructField("resourceType", StringType()),
    StructField("id", StringType()),
    StructField("name", ArrayType(StructType([
        StructField("family", StringType()),
        StructField("given", ArrayType(StringType()))
    ]))),
    StructField("birthDate", StringType()),
    StructField("gender", StringType())
])

# Lees FHIR bundles
fhir_df = (spark.read
    .format("json")
    .schema(patient_schema)
    .load("/mnt/bronze/fhir/Patient/")
)

# Flatten naar tabular format
patients_silver = fhir_df.select(
    col("id").alias("patient_id"),
    col("name")[0]["family"].alias("family_name"),
    col("name")[0]["given"][0].alias("given_name"),
    col("birthDate").alias("birth_date"),
    col("gender")
)
\`\`\`

### FHIR Libraries

- **FHIR-PySpark**: Community library voor FHIR in Spark
- **Pathling**: FHIR analytics server met Spark backend
- **Azure FHIR Connector**: Native connector voor Azure Health Data Services

## DICOM Metadata Ingestie

### DICOM Tags Extraheren

DICOM bestanden bevatten metadata in tags:

\`\`\`python
import pydicom
from pyspark.sql.functions import pandas_udf

@pandas_udf("struct<patient_id:string, study_date:string, modality:string>")
def extract_dicom_metadata(file_paths):
    results = []
    for path in file_paths:
        dcm = pydicom.dcmread(path)
        results.append({
            "patient_id": str(dcm.PatientID),
            "study_date": str(dcm.StudyDate),
            "modality": str(dcm.Modality)
        })
    return pd.DataFrame(results)

# Verwerk DICOM files
dicom_metadata = (spark.read
    .format("binaryFile")
    .load("/mnt/bronze/dicom/")
    .select(extract_dicom_metadata("path").alias("metadata"))
)
\`\`\`

## Auto Loader voor Continue Ingestie

### Incrementele Data Loading

\`\`\`python
# Auto Loader voor continue ingestie
(spark.readStream
    .format("cloudFiles")
    .option("cloudFiles.format", "json")
    .option("cloudFiles.schemaLocation", "/mnt/checkpoints/fhir_schema")
    .option("cloudFiles.inferColumnTypes", "true")
    .load("/mnt/bronze/fhir/")
    .writeStream
    .format("delta")
    .option("checkpointLocation", "/mnt/checkpoints/fhir")
    .option("mergeSchema", "true")
    .trigger(availableNow=True)
    .toTable("silver.fhir_resources")
)
\`\`\`

## Data Quality Checks

### Expectations met Delta Live Tables

\`\`\`python
import dlt
from dlt.expectations import *

@dlt.table(
    name="silver_patients",
    comment="Gevalideerde patiëntdata"
)
@dlt.expect_or_drop("valid_bsn", "length(bsn) = 9")
@dlt.expect_or_fail("has_name", "family_name IS NOT NULL")
def silver_patients():
    return spark.table("bronze.patients")
\`\`\`

## Kernbegrippen

- **Auto Loader**: Incrementele file ingestie met schema inference
- **cloudFiles**: Databricks format voor streaming file ingestie
- **Delta Live Tables (DLT)**: Declaratieve ETL met data quality
- **FHIR Flattening**: Transformatie van hiërarchische FHIR naar tabular
    `,
    sources: [
      { name: "Databricks Auto Loader", url: "https://docs.databricks.com/ingestion/auto-loader/index.html" },
      { name: "HL7 International", url: "https://www.hl7.org" }
    ]
  },

  "102.4": {
    title: "Unity Catalog: Governance en Compliance voor Zorgdata",
    summary: "Implementatie van data governance met Unity Catalog voor AVG-compliance en audit in zorginstellingen.",
    content: `
## In het kort

Unity Catalog is de governance-laag van Databricks die centrale controle biedt over data assets, toegangsrechten en lineage. Voor zorginstellingen is dit essentieel voor AVG-compliance en audit.

## Unity Catalog Architectuur

### Hiërarchie

\`\`\`
Metastore (organisatieniveau)
└── Catalog (bijv. per ziekenhuis)
    └── Schema (bijv. bronze, silver, gold)
        └── Tables / Views / Functions
            └── Columns (met tags en masking)
\`\`\`

### Voorbeeld Setup voor Ziekenhuis

\`\`\`sql
-- Maak catalogs per omgeving
CREATE CATALOG IF NOT EXISTS hospital_prod;
CREATE CATALOG IF NOT EXISTS hospital_dev;

-- Schema's volgens medallion
CREATE SCHEMA IF NOT EXISTS hospital_prod.bronze;
CREATE SCHEMA IF NOT EXISTS hospital_prod.silver;
CREATE SCHEMA IF NOT EXISTS hospital_prod.gold;

-- Grant permissions
GRANT USE CATALOG ON CATALOG hospital_prod TO data_engineers;
GRANT SELECT ON SCHEMA hospital_prod.gold TO data_analysts;
\`\`\`

## Access Control voor Zorgdata

### Principe van Least Privilege

\`\`\`sql
-- Groep voor onderzoekers: alleen geanonimiseerde data
CREATE GROUP researchers;
GRANT SELECT ON TABLE gold.anonymized_patients TO researchers;
DENY SELECT ON TABLE silver.patients TO researchers;

-- Groep voor data stewards: volledige toegang
CREATE GROUP data_stewards;
GRANT ALL PRIVILEGES ON SCHEMA silver TO data_stewards;
\`\`\`

### Row-Level Security

\`\`\`sql
-- Alleen data van eigen afdeling zichtbaar
CREATE FUNCTION row_filter(department STRING)
RETURN CASE
    WHEN is_member('admin') THEN TRUE
    WHEN current_user() LIKE '%' || department || '%' THEN TRUE
    ELSE FALSE
END;

ALTER TABLE silver.encounters
SET ROW FILTER row_filter ON (department);
\`\`\`

### Column Masking voor PII

\`\`\`sql
-- BSN maskeren voor niet-geautoriseerde gebruikers
CREATE FUNCTION mask_bsn(bsn STRING)
RETURN CASE
    WHEN is_member('pii_access') THEN bsn
    ELSE CONCAT('***', RIGHT(bsn, 3))
END;

ALTER TABLE silver.patients
ALTER COLUMN bsn SET MASK mask_bsn;
\`\`\`

## Data Classification en Tagging

### Tags voor Gevoeligheid

\`\`\`sql
-- Classificeer kolommen
ALTER TABLE silver.patients
ALTER COLUMN bsn SET TAGS ('pii' = 'true', 'sensitivity' = 'high');

ALTER TABLE silver.patients
ALTER COLUMN birth_date SET TAGS ('pii' = 'true', 'sensitivity' = 'medium');

-- Query tagged columns
SELECT * FROM system.information_schema.column_tags
WHERE tag_name = 'pii' AND tag_value = 'true';
\`\`\`

## Data Lineage

### Automatische Lineage Tracking

Unity Catalog trackt automatisch:
- Welke tabellen een tabel voeden (upstream)
- Welke tabellen afhankelijk zijn (downstream)
- Welke transformaties zijn toegepast

### Lineage voor Audit

\`\`\`sql
-- Bekijk lineage van een tabel
SELECT * FROM system.access.table_lineage
WHERE target_table_full_name = 'gold.patient_360';

-- Wie heeft welke data benaderd?
SELECT * FROM system.access.audit
WHERE action_name = 'getTable'
AND request_params.full_name_arg LIKE '%patient%';
\`\`\`

## AVG Compliance

### Recht op Inzage

\`\`\`sql
-- Overzicht van alle data over een patiënt
SELECT
    'silver.patients' as source,
    *
FROM silver.patients
WHERE bsn = '123456789'

UNION ALL

SELECT
    'silver.encounters' as source,
    *
FROM silver.encounters
WHERE patient_id = (
    SELECT patient_id FROM silver.patients WHERE bsn = '123456789'
);
\`\`\`

### Recht op Verwijdering (met Delta Lake)

\`\`\`sql
-- Verwijder patiëntdata
DELETE FROM silver.patients WHERE bsn = '123456789';
DELETE FROM silver.encounters WHERE patient_id = 'P12345';

-- Verwijder ook uit history (VACUUM)
VACUUM silver.patients RETAIN 0 HOURS;
\`\`\`

## Monitoring en Alerting

### System Tables voor Audit

\`\`\`sql
-- Toegangspogingen monitoren
SELECT
    event_time,
    user_identity.email,
    action_name,
    request_params
FROM system.access.audit
WHERE event_date >= current_date() - 7
AND action_name IN ('getTable', 'commandSubmit')
ORDER BY event_time DESC;
\`\`\`

## Kernbegrippen

- **Unity Catalog**: Centralized governance voor Databricks
- **Row-Level Security**: Toegangscontrole op rijniveau
- **Column Masking**: Automatisch maskeren van gevoelige kolommen
- **Data Lineage**: Herkomst en afhankelijkheden van data
- **System Tables**: Ingebouwde audit logging
    `,
    sources: [
      { name: "Unity Catalog Documentation", url: "https://docs.databricks.com/data-governance/unity-catalog/index.html" },
      { name: "Databricks Security Guide", url: "https://docs.databricks.com/security/index.html" }
    ]
  },

  "102.5": {
    title: "Healthcare Analytics met Databricks SQL",
    summary: "SQL-gebaseerde analytics voor zorgtoepassingen: KPIs, dashboards en ad-hoc analyse.",
    content: `
## In het kort

Databricks SQL (voorheen SQL Analytics) biedt een SQL-native interface voor data analyse. Voor zorginstellingen ideaal voor KPI-dashboards, ad-hoc queries en BI-tools integratie.

## Databricks SQL Fundamentals

### SQL Warehouses

SQL Warehouses zijn compute-clusters specifiek voor SQL workloads:

\`\`\`
Types:
- Classic: Traditionele clusters
- Pro: Betere caching, Photon engine
- Serverless: Automatisch schalen, pay-per-query
\`\`\`

### Photon Engine

Photon is Databricks' native vectorized query engine:
- 2-8x sneller dan Spark SQL
- Automatisch geactiveerd in Pro/Serverless
- Vooral effectief voor aggregaties

## Healthcare KPIs in SQL

### Operationele Metrics

\`\`\`sql
-- Gemiddelde ligduur per specialisme
CREATE OR REPLACE VIEW gold.avg_length_of_stay AS
SELECT
    specialty,
    AVG(DATEDIFF(discharge_date, admission_date)) as avg_los,
    COUNT(*) as patient_count
FROM silver.admissions
WHERE discharge_date IS NOT NULL
AND admission_date >= DATE_SUB(CURRENT_DATE(), 365)
GROUP BY specialty;

-- Bezettingsgraad per dag
CREATE OR REPLACE VIEW gold.daily_occupancy AS
SELECT
    date,
    ward,
    SUM(occupied_beds) as occupied,
    SUM(total_beds) as capacity,
    ROUND(SUM(occupied_beds) / SUM(total_beds) * 100, 1) as occupancy_pct
FROM silver.bed_census
GROUP BY date, ward;
\`\`\`

### Kwaliteitsindicatoren

\`\`\`sql
-- Heropname binnen 30 dagen
CREATE OR REPLACE VIEW gold.readmission_30d AS
WITH admissions_with_next AS (
    SELECT
        patient_id,
        admission_date,
        discharge_date,
        LEAD(admission_date) OVER (
            PARTITION BY patient_id
            ORDER BY admission_date
        ) as next_admission
    FROM silver.admissions
    WHERE admission_type = 'inpatient'
)
SELECT
    DATE_TRUNC('month', discharge_date) as month,
    COUNT(*) as total_discharges,
    SUM(CASE
        WHEN DATEDIFF(next_admission, discharge_date) <= 30
        THEN 1 ELSE 0
    END) as readmissions,
    ROUND(
        SUM(CASE WHEN DATEDIFF(next_admission, discharge_date) <= 30 THEN 1 ELSE 0 END)
        / COUNT(*) * 100, 2
    ) as readmission_rate
FROM admissions_with_next
WHERE discharge_date >= DATE_SUB(CURRENT_DATE(), 365)
GROUP BY DATE_TRUNC('month', discharge_date);
\`\`\`

### Financiële Analytics

\`\`\`sql
-- DBC-productie per specialisme
CREATE OR REPLACE VIEW gold.dbc_production AS
SELECT
    specialty,
    dbc_code,
    dbc_description,
    COUNT(*) as volume,
    SUM(declared_amount) as total_revenue,
    AVG(declared_amount) as avg_revenue
FROM silver.dbc_declarations
WHERE declaration_year = YEAR(CURRENT_DATE())
GROUP BY specialty, dbc_code, dbc_description
ORDER BY total_revenue DESC;
\`\`\`

## Dashboards en Visualisatie

### Databricks SQL Dashboards

Ingebouwde dashboarding met:
- Queries als data source
- Diverse chart types
- Automatische refresh
- Alerting bij drempelwaarden

### BI Tool Connectiviteit

\`\`\`
Ondersteunde tools:
- Power BI (native connector)
- Tableau (Databricks connector)
- Looker (JDBC)
- Qlik (ODBC)
\`\`\`

### Power BI Integratie

\`\`\`
1. Installeer Databricks connector in Power BI
2. Connect met SQL Warehouse endpoint
3. Direct Query of Import mode
4. Gebruik Unity Catalog voor row-level security
\`\`\`

## Query Optimalisatie

### Best Practices

\`\`\`sql
-- Gebruik ZORDER voor veelgebruikte filters
OPTIMIZE silver.encounters ZORDER BY (patient_id, encounter_date);

-- Materialized views voor complexe aggregaties
CREATE MATERIALIZED VIEW gold.patient_summary AS
SELECT
    patient_id,
    COUNT(DISTINCT encounter_id) as total_encounters,
    MAX(encounter_date) as last_visit,
    SUM(total_charges) as lifetime_value
FROM silver.encounters
GROUP BY patient_id;

-- Query caching
SET spark.sql.execution.arrow.pyspark.enabled = true;
\`\`\`

## Alerts en Monitoring

### SQL Alerts

\`\`\`sql
-- Alert wanneer wachttijd te hoog wordt
SELECT
    department,
    AVG(wait_time_minutes) as avg_wait
FROM silver.ed_visits
WHERE visit_date = CURRENT_DATE()
GROUP BY department
HAVING AVG(wait_time_minutes) > 60;
\`\`\`

## Kernbegrippen

- **SQL Warehouse**: Dedicated compute voor SQL workloads
- **Photon**: Vectorized query engine voor performance
- **Materialized View**: Voorberekende view voor snelle queries
- **Direct Query**: Real-time data in BI tools
    `,
    sources: [
      { name: "Databricks SQL Documentation", url: "https://docs.databricks.com/sql/index.html" },
      { name: "Databricks SQL Best Practices", url: "https://docs.databricks.com/sql/admin/sql-execution-tutorial.html" }
    ]
  },

  "102.6": {
    title: "Machine Learning voor Zorgvoorspellingen",
    summary: "MLflow en Databricks ML voor predictive analytics in de zorg: van experiment tot productie.",
    content: `
## In het kort

Databricks biedt een complete ML-omgeving met MLflow voor experiment tracking, model registry en deployment. Voor zorgtoepassingen zoals heropname-voorspelling en sepsis-detectie.

## MLflow Fundamentals

### Componenten

- **Tracking**: Log experimenten, parameters, metrics
- **Projects**: Reproduceerbare ML code
- **Models**: Model packaging en deployment
- **Registry**: Versioning en lifecycle management

## Healthcare ML Use Cases

### Typische Toepassingen

1. **Heropname-risico** - Welke patiënten komen binnen 30 dagen terug?
2. **Sepsis Early Warning** - Vroegtijdige detectie op basis van vitals
3. **No-show Prediction** - Welke patiënten missen hun afspraak?
4. **Length of Stay** - Voorspelling verblijfsduur voor planning
5. **Deterioration Score** - Verslechtering van patiënttoestand

## Feature Engineering voor Zorgdata

### Feature Store

\`\`\`python
from databricks.feature_store import FeatureStoreClient

fs = FeatureStoreClient()

# Definieer feature table
patient_features = spark.sql("""
    SELECT
        patient_id,
        age,
        COUNT(DISTINCT diagnosis_code) as comorbidity_count,
        SUM(CASE WHEN admission_type = 'emergency' THEN 1 ELSE 0 END) as ed_visits_1y,
        AVG(length_of_stay) as avg_los,
        MAX(admission_date) as last_admission
    FROM silver.admissions
    WHERE admission_date >= DATE_SUB(CURRENT_DATE(), 365)
    GROUP BY patient_id, age
""")

# Registreer in Feature Store
fs.create_table(
    name="healthcare.patient_features",
    primary_keys=["patient_id"],
    df=patient_features,
    description="Patient features voor ML modellen"
)
\`\`\`

## Model Development

### Experiment Tracking

\`\`\`python
import mlflow
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Start experiment
mlflow.set_experiment("/healthcare/readmission_prediction")

with mlflow.start_run(run_name="rf_baseline"):
    # Load features
    training_data = fs.read_table("healthcare.patient_features")

    X = training_data.drop(columns=['readmitted_30d'])
    y = training_data['readmitted_30d']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # Train model
    model = RandomForestClassifier(n_estimators=100, max_depth=10)
    model.fit(X_train, y_train)

    # Log parameters
    mlflow.log_param("n_estimators", 100)
    mlflow.log_param("max_depth", 10)

    # Log metrics
    accuracy = model.score(X_test, y_test)
    mlflow.log_metric("accuracy", accuracy)

    # Log model
    mlflow.sklearn.log_model(model, "readmission_model")
\`\`\`

### AutoML voor Snelle Experimenten

\`\`\`python
from databricks import automl

# AutoML voor classificatie
summary = automl.classify(
    dataset=training_df,
    target_col="readmitted_30d",
    timeout_minutes=60,
    max_trials=20
)

# Beste model automatisch geregistreerd
print(f"Best model: {summary.best_trial.model_description}")
print(f"Best metric: {summary.best_trial.metrics}")
\`\`\`

## Model Validation voor Healthcare

### Clinical Validation

\`\`\`python
# Validatie op klinisch relevante subgroepen
def validate_clinical_subgroups(model, X_test, y_test):
    subgroups = ['elderly', 'pediatric', 'cardiac', 'oncology']

    for subgroup in subgroups:
        mask = X_test['patient_type'] == subgroup
        X_sub = X_test[mask]
        y_sub = y_test[mask]

        if len(X_sub) > 0:
            score = model.score(X_sub, y_sub)
            mlflow.log_metric(f"accuracy_{subgroup}", score)
\`\`\`

### Fairness Metrics

\`\`\`python
# Check voor bias in voorspellingen
from fairlearn.metrics import demographic_parity_difference

dpd = demographic_parity_difference(
    y_test,
    model.predict(X_test),
    sensitive_features=X_test['ethnicity']
)
mlflow.log_metric("demographic_parity_diff", dpd)
\`\`\`

## Model Deployment

### Model Registry

\`\`\`python
# Registreer model voor productie
model_uri = f"runs:/{run_id}/readmission_model"
mv = mlflow.register_model(model_uri, "readmission_predictor")

# Transition naar productie
client = mlflow.tracking.MlflowClient()
client.transition_model_version_stage(
    name="readmission_predictor",
    version=mv.version,
    stage="Production"
)
\`\`\`

### Real-time Serving

\`\`\`python
# Model serving endpoint
import requests

endpoint = "https://xxx.databricks.com/serving-endpoints/readmission/invocations"
headers = {"Authorization": f"Bearer {token}"}

patient_data = {
    "dataframe_records": [{
        "age": 75,
        "comorbidity_count": 4,
        "ed_visits_1y": 2,
        "avg_los": 5.2
    }]
}

response = requests.post(endpoint, headers=headers, json=patient_data)
prediction = response.json()
\`\`\`

## Kernbegrippen

- **MLflow**: Open-source ML lifecycle platform
- **Feature Store**: Centrale opslag voor ML features
- **Model Registry**: Versioning en staging van modellen
- **AutoML**: Automatische model selectie en tuning
- **Model Serving**: Real-time inference endpoints
    `,
    sources: [
      { name: "MLflow Documentation", url: "https://mlflow.org/docs/latest/index.html" },
      { name: "Databricks ML", url: "https://docs.databricks.com/machine-learning/index.html" }
    ]
  },

  "102.7": {
    title: "Real-time Streaming voor Zorgmonitoring",
    summary: "Structured Streaming en Delta Lake voor real-time verwerking van patiëntmonitoring en alerts.",
    content: `
## In het kort

Real-time data verwerking is cruciaal voor kritische zorgtoepassingen zoals patiëntmonitoring, sepsis-detectie en bed management. Databricks Structured Streaming met Delta Lake biedt een unified batch en streaming platform.

## Structured Streaming Basics

### Streaming vs Batch

\`\`\`
Batch Processing:
[Data opgeslagen] → [Periodieke verwerking] → [Resultaten]
             ↓
Latency: minuten tot uren

Streaming Processing:
[Continue datastroom] → [Real-time verwerking] → [Instant resultaten]
             ↓
Latency: seconden tot milliseconden
\`\`\`

### Streaming Sources in de Zorg

- **Kafka** - Berichten van EPD, monitoring devices
- **Event Hubs** - Azure event streaming
- **Kinesis** - AWS streaming (voor AWS Databricks)
- **Auto Loader** - File-based streaming

## Healthcare Streaming Use Cases

### Patiënt Monitoring Pipeline

\`\`\`python
from pyspark.sql.functions import *
from pyspark.sql.types import *

# Schema voor vitale signalen
vitals_schema = StructType([
    StructField("patient_id", StringType()),
    StructField("timestamp", TimestampType()),
    StructField("heart_rate", IntegerType()),
    StructField("blood_pressure_sys", IntegerType()),
    StructField("blood_pressure_dia", IntegerType()),
    StructField("spo2", IntegerType()),
    StructField("temperature", DoubleType())
])

# Lees van Kafka
vitals_stream = (spark
    .readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", "kafka:9092")
    .option("subscribe", "patient_vitals")
    .load()
    .select(from_json(col("value").cast("string"), vitals_schema).alias("data"))
    .select("data.*")
)
\`\`\`

### Early Warning Score (EWS) Berekening

\`\`\`python
def calculate_ews(df):
    """Bereken Modified Early Warning Score"""
    return df.withColumn("ews_score",
        # Heart rate scoring
        when(col("heart_rate") < 40, 2)
        .when(col("heart_rate").between(40, 50), 1)
        .when(col("heart_rate").between(51, 100), 0)
        .when(col("heart_rate").between(101, 110), 1)
        .when(col("heart_rate").between(111, 129), 2)
        .when(col("heart_rate") >= 130, 3)
        +
        # SpO2 scoring
        when(col("spo2") < 92, 3)
        .when(col("spo2").between(92, 93), 2)
        .when(col("spo2").between(94, 95), 1)
        .otherwise(0)
        +
        # Temperature scoring
        when(col("temperature") < 35.0, 3)
        .when(col("temperature").between(35.0, 36.0), 1)
        .when(col("temperature").between(36.1, 38.0), 0)
        .when(col("temperature").between(38.1, 39.0), 1)
        .when(col("temperature") >= 39.0, 2)
    )

# Apply EWS calculation
ews_stream = calculate_ews(vitals_stream)
\`\`\`

### Alerting Pipeline

\`\`\`python
# Filter voor hoge EWS scores
alerts_stream = ews_stream.filter(col("ews_score") >= 5)

# Schrijf alerts naar Delta table voor dashboards
(alerts_stream
    .writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "/checkpoints/ews_alerts")
    .trigger(processingTime="10 seconds")
    .toTable("streaming.ews_alerts")
)

# Stuur ook naar notification system
(alerts_stream
    .writeStream
    .foreach(send_alert_notification)
    .outputMode("append")
    .start()
)
\`\`\`

## Windowed Aggregations

### Sliding Window voor Trends

\`\`\`python
# Gemiddelde vitals over sliding window van 15 minuten
windowed_vitals = (vitals_stream
    .withWatermark("timestamp", "5 minutes")
    .groupBy(
        col("patient_id"),
        window(col("timestamp"), "15 minutes", "5 minutes")
    )
    .agg(
        avg("heart_rate").alias("avg_hr"),
        avg("spo2").alias("avg_spo2"),
        min("blood_pressure_sys").alias("min_bp_sys"),
        max("blood_pressure_sys").alias("max_bp_sys")
    )
)
\`\`\`

### Anomaly Detection

\`\`\`python
# Detecteer afwijkingen van baseline
def detect_anomalies(df):
    return df.withColumn("hr_anomaly",
        when(
            abs(col("heart_rate") - col("baseline_hr")) > (2 * col("baseline_hr_std")),
            True
        ).otherwise(False)
    )
\`\`\`

## Delta Lake voor Streaming

### Exactly-Once Processing

\`\`\`python
# Delta als sink garandeert exactly-once semantics
(vitals_stream
    .writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "/checkpoints/vitals")
    .option("mergeSchema", "true")
    .toTable("silver.patient_vitals")
)
\`\`\`

### Stream-Static Joins

\`\`\`python
# Join streaming data met statische patient info
patient_info = spark.table("silver.patients")

enriched_vitals = vitals_stream.join(
    patient_info,
    vitals_stream.patient_id == patient_info.patient_id,
    "left"
).select(
    vitals_stream["*"],
    patient_info["ward"],
    patient_info["attending_physician"]
)
\`\`\`

## Monitoring en Operations

### Streaming Query Monitoring

\`\`\`python
# Check streaming query status
for query in spark.streams.active:
    print(f"Query: {query.name}")
    print(f"Status: {query.status}")
    print(f"Progress: {query.lastProgress}")
\`\`\`

## Kernbegrippen

- **Structured Streaming**: Unified batch/streaming API
- **Watermark**: Handling van late data
- **Checkpoint**: Recovery point voor fault tolerance
- **Trigger**: Wanneer te verwerken (continuous, micro-batch)
- **Output Mode**: append, complete, update
    `,
    sources: [
      { name: "Structured Streaming", url: "https://docs.databricks.com/structured-streaming/index.html" },
      { name: "Delta Lake Streaming", url: "https://docs.delta.io/latest/delta-streaming.html" }
    ]
  },

  "102.8": {
    title: "Databricks Implementatie in Zorginstellingen",
    summary: "Praktische aanpak voor Databricks implementatie: architectuur, security en change management.",
    content: `
## In het kort

Een succesvolle Databricks implementatie in de zorg vereist aandacht voor security, compliance, integratie met bestaande systemen en change management. Deze module behandelt de praktische aspecten.

## Implementatie Stappenplan

### Fase 1: Foundation (Maand 1-2)

**Infrastructuur Setup**
1. Azure/AWS account configuratie
2. Databricks workspace provisioning
3. Netwerk setup (VNet injection, Private Link)
4. Unity Catalog configuratie
5. Identity provider integratie (Azure AD/Okta)

**Security Baseline**
- Encryption at rest en in transit
- Customer-managed keys (CMK)
- IP access lists
- Audit logging

### Fase 2: Data Platform (Maand 2-4)

**Data Architecture**
1. Landing zone voor brondata
2. Bronze/Silver/Gold schema's
3. Auto Loader pipelines
4. Data quality framework

**Governance Setup**
- Data classificatie
- Access policies
- Column masking voor PII
- Lineage tracking

### Fase 3: Use Cases (Maand 4-6)

**Pilot Use Cases**
1. Eén analytische use case
2. Eén ML use case
3. Dashboard integratie

## Azure Databricks Security Architecture

### Network Security

\`\`\`
                    ┌─────────────────────────────────────┐
                    │          Azure Subscription          │
                    │                                      │
Internet ──────► [Azure Firewall] ◄──────────────────────│
                    │         │                           │
                    │         ▼                           │
                    │   [Private Endpoint]                │
                    │         │                           │
                    │         ▼                           │
                    │   ┌───────────┐     ┌───────────┐  │
                    │   │ Databricks│ ←─► │   ADLS    │  │
                    │   │ Workspace │     │  Gen2     │  │
                    │   └───────────┘     └───────────┘  │
                    │         │                           │
                    │         ▼                           │
                    │   [Unity Catalog Metastore]         │
                    └─────────────────────────────────────┘
\`\`\`

### Private Link Setup

\`\`\`bash
# Databricks Private Link configuratie
az databricks workspace create \\
  --name "healthcare-dbricks" \\
  --resource-group "rg-healthcare" \\
  --location "westeurope" \\
  --sku premium \\
  --enable-no-public-ip \\
  --private-subnet "/subscriptions/.../databricks-private" \\
  --public-subnet "/subscriptions/.../databricks-public"
\`\`\`

## Identity en Access Management

### Azure AD Integratie

\`\`\`
Azure AD Groups         →    Databricks Groups    →    Unity Catalog Grants
─────────────────           ──────────────────         ─────────────────────
SG-DataEngineers       →    data_engineers       →    CREATE TABLE on bronze
SG-DataScientists      →    data_scientists      →    SELECT on silver
SG-DataAnalysts        →    data_analysts        →    SELECT on gold
SG-DataStewards        →    data_stewards        →    ALL PRIVILEGES
\`\`\`

### Service Principals voor Automation

\`\`\`python
# Databricks SDK met Service Principal
from databricks.sdk import WorkspaceClient

w = WorkspaceClient(
    host="https://xxx.azuredatabricks.net",
    azure_client_id="xxx",
    azure_client_secret="xxx",
    azure_tenant_id="xxx"
)

# Automate job creation
job = w.jobs.create(
    name="daily_etl",
    tasks=[{
        "task_key": "bronze_to_silver",
        "notebook_task": {"notebook_path": "/ETL/bronze_to_silver"}
    }]
)
\`\`\`

## Integratie met Zorgsystemen

### EPD Integratie (Epic, HiX, Chipsoft)

\`\`\`
Pattern: Extract via JDBC/API → Land in Bronze → Transform naar Silver

Epic Clarity:
- JDBC connector naar Clarity database
- Incrementele extractie via timestamps
- Map naar FHIR-achtig model in Silver

HiX:
- Data export via HiX Connect
- Parquet/CSV landing
- Mirth Connect voor HL7v2 → Kafka
\`\`\`

### Data Extractie Pattern

\`\`\`python
# JDBC extractie met watermark
watermark = spark.sql("""
    SELECT MAX(last_modified) as watermark
    FROM bronze.epic_patients
""").collect()[0]['watermark']

new_data = (spark.read
    .format("jdbc")
    .option("url", epic_jdbc_url)
    .option("dbtable", f"(SELECT * FROM patients WHERE last_modified > '{watermark}')")
    .option("user", dbutils.secrets.get("epic", "user"))
    .option("password", dbutils.secrets.get("epic", "password"))
    .load()
)
\`\`\`

## Change Management

### Training en Enablement

**Rollen en Training Tracks**

| Rol | Training | Duur |
|-----|----------|------|
| Data Engineer | Databricks Associate + Delta Lake | 2 weken |
| Data Scientist | ML Associate + MLflow | 2 weken |
| Data Analyst | SQL Associate | 1 week |
| Platform Admin | Workspace Administration | 1 week |

### CoE (Center of Excellence) Model

\`\`\`
Central Platform Team
├── Infrastructure & Security
├── Governance & Standards
└── Enablement & Support

Domain Teams (gedecentraliseerd)
├── Finance Analytics
├── Clinical Analytics
├── Operations Analytics
└── Research
\`\`\`

## Cost Management

### Compute Optimalisatie

\`\`\`python
# Auto-termination voor cost savings
cluster_config = {
    "autotermination_minutes": 30,
    "autoscale": {
        "min_workers": 1,
        "max_workers": 10
    },
    "spot_instances": True  # Gebruik spot voor non-critical workloads
}
\`\`\`

### Monitoring Kosten

\`\`\`sql
-- Query system tables voor usage
SELECT
    workspace_id,
    sku_name,
    usage_date,
    usage_quantity,
    usage_unit
FROM system.billing.usage
WHERE usage_date >= DATE_SUB(CURRENT_DATE(), 30)
ORDER BY usage_quantity DESC;
\`\`\`

## Kernbegrippen

- **VNet Injection**: Databricks in eigen virtual network
- **Private Link**: Private connectivity zonder public IP
- **CMK**: Customer-Managed Keys voor encryption
- **CoE**: Center of Excellence
- **Spot Instances**: Goedkopere compute voor fault-tolerant workloads
    `,
    sources: [
      { name: "Databricks on Azure Architecture", url: "https://docs.databricks.com/administration-guide/cloud-configurations/azure/index.html" },
      { name: "Databricks Security Best Practices", url: "https://docs.databricks.com/security/index.html" }
    ]
  },

  // ==========================================
  // TRACK 103: MICROSOFT FABRIC IN DE ZORG
  // ==========================================

  "103.1": {
    title: "Microsoft Fabric Fundamentals voor de Zorg",
    summary: "Introductie tot Microsoft Fabric als unified analytics platform voor zorginstellingen.",
    content: `
## In het kort

Microsoft Fabric is Microsoft's unified analytics platform dat data engineering, data science, real-time analytics en business intelligence combineert. Voor zorginstellingen biedt het naadloze integratie met het Microsoft ecosysteem.

## Wat is Microsoft Fabric?

Fabric combineert meerdere Azure services in één platform:

- **OneLake** - Unified storage layer (één data lake)
- **Data Factory** - Data integratie en pipelines
- **Synapse Data Engineering** - Spark-based data engineering
- **Synapse Data Warehouse** - T-SQL data warehousing
- **Power BI** - Business intelligence en dashboards
- **Real-Time Intelligence** - Streaming en event processing

### Fabric vs Azure Synapse vs Power BI

\`\`\`
Vóór Fabric:
┌─────────────┐  ┌──────────────┐  ┌─────────────┐
│ Azure Data  │  │    Azure     │  │   Power BI  │
│   Factory   │  │   Synapse    │  │   Service   │
└─────────────┘  └──────────────┘  └─────────────┘
      │                 │                 │
      └────────── Aparte services ────────┘

Met Fabric:
┌─────────────────────────────────────────────────┐
│              Microsoft Fabric                    │
│  ┌──────┐ ┌────────┐ ┌───────┐ ┌──────────┐    │
│  │ DF   │ │ Spark  │ │  DW   │ │ Power BI │    │
│  └──────┘ └────────┘ └───────┘ └──────────┘    │
│            │                                     │
│            ▼                                     │
│       [ OneLake - Unified Storage ]             │
└─────────────────────────────────────────────────┘
\`\`\`

## Waarom Fabric voor de Zorg?

### Microsoft Cloud for Healthcare

Fabric integreert met Microsoft Cloud for Healthcare:

- **Azure Health Data Services** - FHIR, DICOM APIs
- **Microsoft 365** - Teams, Viva voor zorgmedewerkers
- **Dynamics 365** - CRM voor patiëntrelaties
- **Power Platform** - Low-code apps voor zorg

### Voordelen voor Zorginstellingen

1. **Unified Platform** - Eén platform voor alle data workloads
2. **Microsoft Integratie** - Naadloos met Teams, SharePoint, Office
3. **Power BI Native** - BI volledig geïntegreerd
4. **Governance** - Purview integratie voor compliance
5. **Familiar Tools** - T-SQL, Excel, Power BI zijn bekend

## Fabric Capacities en Licensing

### Capacity Units (CU)

\`\`\`
F2   - Development/Test
F4   - Small workloads
F8   - Medium workloads
F16  - Large analytics
F32  - Enterprise
F64+ - Large scale
\`\`\`

### Licensing Model

- **Capacity-based** - Betaal voor compute capacity
- **Per-user** - Power BI Pro/Premium per user
- **Pay-as-you-go** - Azure consumption model

## Fabric Workspaces

### Workspace Structuur

\`\`\`
Healthcare Fabric Tenant
├── Workspace: Healthcare-Production
│   ├── Lakehouse: clinical_data
│   ├── Warehouse: analytics_dw
│   ├── Dataflow: patient_etl
│   └── Reports: clinical_dashboards
│
├── Workspace: Healthcare-Development
│   └── (development items)
│
└── Workspace: Healthcare-Research
    └── (research notebooks)
\`\`\`

## OneLake: De Foundation

### Unified Storage

OneLake is de single storage layer:

- **Delta Lake format** - Parquet met transactie-log
- **Shortcuts** - Virtuele links naar externe data
- **Cross-workspace** - Data delen tussen workspaces
- **Security** - Integrated met Azure AD

### Shortcuts voor Bestaande Data

\`\`\`
OneLake Shortcuts:
├── ADLS Gen2 → Bestaande data lakes
├── Amazon S3 → AWS data
├── GCS → Google Cloud data
└── Dataverse → Dynamics 365 data
\`\`\`

## Kernbegrippen

- **Fabric Capacity**: Compute resources voor Fabric workloads
- **OneLake**: Unified storage layer
- **Workspace**: Container voor Fabric items
- **Lakehouse**: Combinatie van lake en warehouse
- **Shortcuts**: Virtuele links naar externe data
    `,
    sources: [
      { name: "Microsoft Fabric Documentation", url: "https://learn.microsoft.com/en-us/fabric/" },
      { name: "Microsoft Cloud for Healthcare", url: "https://www.microsoft.com/en-us/industry/health/microsoft-cloud-for-healthcare" }
    ]
  },

  "103.2": {
    title: "OneLake en Lakehouse Architectuur",
    summary: "Deep dive in OneLake storage en lakehouse architectuur voor zorgdata.",
    content: `
## In het kort

OneLake is de fundatie van Microsoft Fabric - een single, unified storage layer voor alle data. Lakehouses in OneLake combineren de flexibiliteit van data lakes met de structuur van data warehouses.

## OneLake Architectuur

### Hiërarchie

\`\`\`
Fabric Tenant (organisatie)
└── Capacity (compute resources)
    └── Workspace (project/team)
        └── Lakehouse (data container)
            ├── Tables/ (managed Delta tables)
            └── Files/ (unmanaged files)
\`\`\`

### OneLake vs ADLS Gen2

| Aspect | ADLS Gen2 | OneLake |
|--------|-----------|---------|
| Scope | Per storage account | Tenant-wide |
| Format | Vrij | Delta Lake standaard |
| Governance | Handmatig | Automatisch via Fabric |
| Shortcuts | Nee | Ja |

## Lakehouse Aanmaken

### Via UI

1. Ga naar Workspace
2. New → Lakehouse
3. Geef naam: bijv. "clinical_lakehouse"
4. Automatisch: Tables en Files folders

### Via Spark

\`\`\`python
# Notebook in Fabric
from pyspark.sql import SparkSession

# Lakehouse is automatisch gemount
spark.sql("CREATE DATABASE IF NOT EXISTS clinical")

# Maak managed table
df = spark.read.json("/Files/raw/patients.json")
df.write.format("delta").saveAsTable("clinical.patients")
\`\`\`

## Medallion Architectuur in Fabric

### Bronze Lakehouse

\`\`\`python
# Ruwe data inladen
raw_hl7 = spark.read.text("/Files/landing/hl7/")

# Opslaan als Bronze table
raw_hl7.write.format("delta").mode("append").saveAsTable("bronze.hl7_messages")
\`\`\`

### Silver Lakehouse

\`\`\`python
# Transformatie naar Silver
bronze_df = spark.table("bronze.hl7_messages")

# Parse en clean
silver_df = (bronze_df
    .withColumn("parsed", parse_hl7_udf("value"))
    .select("parsed.*")
    .filter(col("patient_id").isNotNull())
)

silver_df.write.format("delta").mode("overwrite").saveAsTable("silver.patients")
\`\`\`

### Gold Lakehouse

\`\`\`python
# Aggregaties voor analytics
gold_df = spark.sql("""
    SELECT
        DATE_TRUNC('month', admission_date) as month,
        department,
        COUNT(*) as admissions,
        AVG(length_of_stay) as avg_los
    FROM silver.admissions
    GROUP BY 1, 2
""")

gold_df.write.format("delta").mode("overwrite").saveAsTable("gold.monthly_admissions")
\`\`\`

## Shortcuts

### Externe Data Linken

\`\`\`
Shortcut Types:
1. OneLake Shortcuts
   - Link naar andere lakehouse in tenant
   - Cross-workspace data sharing

2. External Shortcuts
   - ADLS Gen2 (Azure)
   - Amazon S3 (AWS)
   - Google Cloud Storage (GCP)
   - Dataverse (Dynamics 365)
\`\`\`

### ADLS Shortcut Aanmaken

\`\`\`
1. Lakehouse → Files → New Shortcut
2. Kies "Azure Data Lake Storage Gen2"
3. Vul connection details in
4. Selecteer container/folder
5. Geef shortcut naam
\`\`\`

### Healthcare Use Case

\`\`\`
clinical_lakehouse
├── Tables/
│   ├── patients (managed Delta)
│   └── encounters (managed Delta)
└── Files/
    ├── raw_data/          (lokale files)
    └── epic_extracts/     ← Shortcut naar ADLS met Epic data
\`\`\`

## Data Sharing

### Cross-Workspace Sharing

\`\`\`
Workspace: Clinical-Production
└── Lakehouse: clinical_data
    └── Tables/patients

Workspace: Research
└── Lakehouse: research_data
    └── Shortcuts/
        └── clinical_patients → clinical_data/Tables/patients
\`\`\`

### Semantic Model voor Sharing

\`\`\`
Lakehouse Tables → Semantic Model → Power BI Reports
                          ↓
              Gedeeld via Workspace permissions
\`\`\`

## Table Formats en Optimalisatie

### V-Order Optimalisatie

Fabric past automatisch V-Order toe voor snellere reads:

\`\`\`python
# V-Order is automatisch bij Delta writes in Fabric
df.write.format("delta").saveAsTable("optimized_table")
\`\`\`

### Table Maintenance

\`\`\`sql
-- Optimize table
OPTIMIZE clinical.patients

-- Vacuum oude versies
VACUUM clinical.patients RETAIN 168 HOURS
\`\`\`

## Kernbegrippen

- **OneLake**: Single storage layer voor alle Fabric data
- **Lakehouse**: Data lake + warehouse capabilities
- **Managed Tables**: Delta tables in Tables/ folder
- **Shortcuts**: Virtuele pointers naar externe data
- **V-Order**: Fabric-specifieke storage optimalisatie
    `,
    sources: [
      { name: "OneLake Documentation", url: "https://learn.microsoft.com/en-us/fabric/onelake/" },
      { name: "Lakehouse Documentation", url: "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-overview" }
    ]
  },

  "103.3": {
    title: "Data Factory voor Zorgdata Integratie",
    summary: "Data integratie met Data Factory in Fabric: pipelines, dataflows en connectors voor zorgsystemen.",
    content: `
## In het kort

Data Factory in Fabric biedt krachtige data integratie capabilities voor het inladen van data uit zorgsystemen. Het ondersteunt 150+ connectors en zowel code-free als code-first ontwikkeling.

## Data Factory Components

### Pipelines vs Dataflows

\`\`\`
Pipelines:
- Orchestratie van activiteiten
- Copy activities, notebooks, stored procedures
- Scheduling en monitoring

Dataflows Gen2:
- Visuele data transformatie
- Power Query M-language
- Low-code ETL
\`\`\`

## Pipelines voor Zorg ETL

### Copy Activity voor EPD Data

\`\`\`json
{
  "name": "Copy_Epic_Patients",
  "type": "Copy",
  "source": {
    "type": "SqlServerSource",
    "sqlReaderQuery": "SELECT * FROM patients WHERE modified_date > @{pipeline().parameters.watermark}"
  },
  "sink": {
    "type": "LakehouseTable",
    "tableName": "bronze_patients"
  }
}
\`\`\`

### Incremental Load Pattern

\`\`\`
Pipeline: IncrementalLoad_Patients
├── Lookup: Get_Watermark (laatste load timestamp)
├── Copy: Extract_New_Records (records na watermark)
├── Stored Procedure: Update_Watermark
└── Notebook: Transform_To_Silver
\`\`\`

### Pipeline Parameters

\`\`\`json
{
  "parameters": {
    "source_system": { "type": "string", "defaultValue": "epic" },
    "table_name": { "type": "string" },
    "watermark_column": { "type": "string", "defaultValue": "modified_date" }
  }
}
\`\`\`

## Dataflows Gen2

### Visuele Transformatie

\`\`\`
Dataflow: Transform_Patient_Data

[SQL Server] → [Select Columns] → [Filter Rows] → [Rename Columns] → [Lakehouse]
                      │                  │                │
                   patient_id         active=true     standaard namen
                   name
                   birth_date
\`\`\`

### Power Query M Code

\`\`\`powerquery
let
    Source = Sql.Database("epic-server", "clarity"),
    Patients = Source{[Schema="dbo", Item="PATIENT"]}[Data],
    FilterActive = Table.SelectRows(Patients, each [ACTIVE_STATUS] = "Y"),
    RenameColumns = Table.RenameColumns(FilterActive, {
        {"PAT_ID", "patient_id"},
        {"PAT_NAME", "patient_name"},
        {"BIRTH_DATE", "birth_date"}
    }),
    SelectColumns = Table.SelectColumns(RenameColumns, {
        "patient_id", "patient_name", "birth_date"
    })
in
    SelectColumns
\`\`\`

## Connectors voor Zorgsystemen

### Beschikbare Connectors

| Systeem | Connector | Type |
|---------|-----------|------|
| Epic Clarity | SQL Server | JDBC |
| Cerner | Oracle | JDBC |
| FHIR Server | REST API | HTTP |
| HL7 (via Mirth) | Kafka | Streaming |
| SAP IS-H | SAP | Native |
| Excel/CSV | File | Batch |

### REST API Connector voor FHIR

\`\`\`json
{
  "name": "FHIR_Patient_Source",
  "type": "RestSource",
  "baseUrl": "https://fhir-server.hospital.nl/fhir",
  "httpRequestTimeout": "00:01:40",
  "requestMethod": "GET",
  "relativeUrl": "Patient?_count=1000",
  "authenticationType": "OAuth2ClientCredential"
}
\`\`\`

## Error Handling

### Retry en Fault Tolerance

\`\`\`json
{
  "policy": {
    "retry": 3,
    "retryIntervalInSeconds": 30,
    "secureOutput": false,
    "timeout": "01:00:00"
  }
}
\`\`\`

### Logging naar Lakehouse

\`\`\`python
# Na elke pipeline run
log_entry = {
    "pipeline_name": pipeline_name,
    "run_id": run_id,
    "status": status,
    "rows_copied": rows_copied,
    "timestamp": datetime.now()
}

# Schrijf naar audit table
spark.createDataFrame([log_entry]).write.mode("append").saveAsTable("audit.pipeline_runs")
\`\`\`

## Scheduling

### Triggers

\`\`\`
Trigger Types:
1. Schedule Trigger
   - Cron-based (bijv. dagelijks 6:00)

2. Event Trigger
   - File arrival in storage
   - Nieuwe data in source

3. Manual Trigger
   - Ad-hoc execution
\`\`\`

### Healthcare Schedule

\`\`\`
Pipeline: Daily_EPD_Extract
Schedule: 0 5 * * * (dagelijks 5:00)

Pipeline: Hourly_Vitals_Stream
Schedule: 0 * * * * (elk uur)

Pipeline: Weekly_Analytics_Refresh
Schedule: 0 2 * * 0 (zondag 2:00)
\`\`\`

## Data Quality in Pipelines

### Validation Activity

\`\`\`json
{
  "name": "Validate_Patient_Data",
  "type": "Validation",
  "dataset": "bronze_patients",
  "validationRules": [
    { "column": "patient_id", "rule": "NotNull" },
    { "column": "birth_date", "rule": "ValidDate" }
  ]
}
\`\`\`

## Kernbegrippen

- **Pipeline**: Orchestratie van data movement en transformatie
- **Dataflow Gen2**: Visuele ETL met Power Query
- **Copy Activity**: High-performance data copy
- **Incremental Load**: Alleen nieuwe/gewijzigde data laden
- **Trigger**: Scheduled of event-based pipeline execution
    `,
    sources: [
      { name: "Data Factory in Fabric", url: "https://learn.microsoft.com/en-us/fabric/data-factory/" },
      { name: "Dataflows Gen2", url: "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-overview" }
    ]
  },

  "103.4": {
    title: "Healthcare Data Solutions met FHIR en DICOM",
    summary: "Integratie van Azure Health Data Services met Fabric voor FHIR en DICOM workloads.",
    content: `
## In het kort

Azure Health Data Services biedt managed FHIR en DICOM APIs die naadloos integreren met Microsoft Fabric. Dit maakt het mogelijk om zorgdata te combineren met analytics en AI.

## Azure Health Data Services

### Componenten

\`\`\`
Azure Health Data Services
├── FHIR Service
│   - FHIR R4 API
│   - $export voor bulk data
│   - SMART on FHIR authenticatie
│
├── DICOM Service
│   - DICOMweb APIs
│   - STOW-RS, WADO-RS, QIDO-RS
│   - Integratie met imaging workflows
│
└── MedTech Service
    - Device data ingestion
    - IoMT FHIR Connector
    - Wearables, monitors
\`\`\`

## FHIR naar Fabric Pipeline

### FHIR $export naar Lakehouse

\`\`\`
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│  FHIR Service   │────►│    ADLS      │────►│  Lakehouse  │
│   $export       │     │  (ndjson)    │     │   (Delta)   │
└─────────────────┘     └──────────────┘     └─────────────┘
\`\`\`

### Export Triggeren

\`\`\`python
import requests

# Trigger FHIR $export
export_url = "https://fhir-service.fhir.azurehealthcareapis.com/$export"
headers = {
    "Authorization": f"Bearer {access_token}",
    "Accept": "application/fhir+json",
    "Prefer": "respond-async"
}

params = {
    "_type": "Patient,Encounter,Observation",
    "_since": "2024-01-01T00:00:00Z"
}

response = requests.get(export_url, headers=headers, params=params)
content_location = response.headers["Content-Location"]
\`\`\`

### FHIR NDJSON naar Delta Lake

\`\`\`python
# Lees FHIR export (NDJSON format)
fhir_patients = spark.read.json("/Files/fhir_export/Patient/*.ndjson")

# Flatten FHIR resource naar tabular
patients_flat = fhir_patients.select(
    col("id").alias("patient_id"),
    col("name")[0]["family"].alias("family_name"),
    col("name")[0]["given")[0].alias("given_name"),
    col("birthDate").alias("birth_date"),
    col("gender"),
    col("address")[0]["city"].alias("city"),
    col("address")[0]["postalCode"].alias("postal_code")
)

# Schrijf naar Lakehouse
patients_flat.write.format("delta").mode("overwrite").saveAsTable("silver.patients")
\`\`\`

## DICOM naar Fabric

### DICOM Service Setup

\`\`\`
DICOM Service endpoints:
- STOW-RS: Store images
- WADO-RS: Retrieve images
- QIDO-RS: Query metadata
\`\`\`

### DICOM Metadata naar Lakehouse

\`\`\`python
# Query DICOM studies via QIDO-RS
import requests

qido_url = "https://dicom-service.dicom.azurehealthcareapis.com/v1/studies"
params = {
    "StudyDate": "20240101-20240131",
    "ModalitiesInStudy": "CT,MR"
}

response = requests.get(qido_url, headers=headers, params=params)
studies = response.json()

# Converteer naar DataFrame
studies_df = spark.createDataFrame(studies)
studies_df.write.format("delta").mode("append").saveAsTable("bronze.dicom_studies")
\`\`\`

### DICOM + Clinical Data Combineren

\`\`\`sql
-- Combineer imaging met clinical data
SELECT
    s.study_id,
    s.study_date,
    s.modality,
    p.patient_name,
    e.diagnosis_code,
    e.attending_physician
FROM silver.dicom_studies s
JOIN silver.patients p ON s.patient_id = p.patient_id
JOIN silver.encounters e ON s.accession_number = e.imaging_order_id
\`\`\`

## MedTech en IoMT

### Device Data Ingestion

\`\`\`
Patient Monitors ──► Event Hub ──► MedTech Service ──► FHIR ──► Fabric
    │                                    │
 HL7v2/JSON                        FHIR Observation
\`\`\`

### Vitals naar FHIR Observation

\`\`\`json
{
  "resourceType": "Observation",
  "status": "final",
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "8867-4",
      "display": "Heart rate"
    }]
  },
  "subject": { "reference": "Patient/12345" },
  "valueQuantity": {
    "value": 72,
    "unit": "beats/minute"
  },
  "effectiveDateTime": "2024-01-15T10:30:00Z"
}
\`\`\`

## Healthcare Data Model

### OMOP CDM in Fabric

\`\`\`
OMOP Common Data Model:
├── Person (patiënten)
├── Visit_Occurrence (encounters)
├── Condition_Occurrence (diagnoses)
├── Drug_Exposure (medicatie)
├── Procedure_Occurrence (procedures)
├── Measurement (labs, vitals)
└── Observation (overige observaties)
\`\`\`

### FHIR naar OMOP Mapping

\`\`\`python
# Map FHIR Patient naar OMOP Person
omop_person = fhir_patients.select(
    col("id").cast("long").alias("person_id"),
    when(col("gender") == "male", 8507)
        .when(col("gender") == "female", 8532)
        .otherwise(0).alias("gender_concept_id"),
    year(col("birthDate")).alias("year_of_birth"),
    month(col("birthDate")).alias("month_of_birth"),
    dayofmonth(col("birthDate")).alias("day_of_birth")
)

omop_person.write.format("delta").saveAsTable("omop.person")
\`\`\`

## Kernbegrippen

- **FHIR Service**: Managed FHIR R4 API
- **DICOM Service**: Medical imaging API
- **MedTech Service**: Device/IoMT data ingestion
- **$export**: Bulk FHIR data export
- **OMOP CDM**: Gestandaardiseerd healthcare data model
    `,
    sources: [
      { name: "Azure Health Data Services", url: "https://learn.microsoft.com/en-us/azure/healthcare-apis/" },
      { name: "FHIR Analytics with Fabric", url: "https://learn.microsoft.com/en-us/azure/healthcare-apis/fhir/fhir-service-analytics-fabric" }
    ]
  },

  "103.5": {
    title: "Power BI in Fabric voor Zorginzichten",
    summary: "Geïntegreerde Power BI voor healthcare dashboards en self-service analytics.",
    content: `
## In het kort

Power BI is volledig geïntegreerd in Microsoft Fabric en biedt krachtige visualisatie en self-service analytics. Voor zorginstellingen betekent dit snelle inzichten uit lakehouse data.

## Power BI in Fabric

### Integratie Voordelen

\`\`\`
Fabric Integratie:
├── Direct Lake Mode
│   - Query Delta tables direct
│   - Geen data duplicatie
│   - Automatische refresh
│
├── Semantic Models
│   - Gedeelde definities
│   - Row-level security
│   - Berekende maten
│
└── Reports & Dashboards
    - Embedded in Fabric portal
    - Delen via workspaces
\`\`\`

### Direct Lake vs Import vs DirectQuery

| Mode | Data Locatie | Performance | Actualiteit |
|------|--------------|-------------|-------------|
| Import | In-memory | Zeer snel | Scheduled refresh |
| DirectQuery | Bron | Langzamer | Real-time |
| Direct Lake | OneLake | Snel | Near real-time |

## Semantic Model voor Zorg

### Model Aanmaken

\`\`\`
Lakehouse: clinical_lakehouse
└── Tables/
    ├── dim_patients
    ├── dim_providers
    ├── dim_departments
    ├── fact_encounters
    └── fact_observations

           ↓ Create Semantic Model

Semantic Model: Healthcare Analytics
├── Tables (auto-detected)
├── Relationships (defined)
├── Measures (DAX)
└── Hierarchies
\`\`\`

### DAX Measures voor Healthcare KPIs

\`\`\`dax
// Gemiddelde ligduur
Average Length of Stay =
AVERAGEX(
    fact_encounters,
    DATEDIFF(fact_encounters[admission_date], fact_encounters[discharge_date], DAY)
)

// Heropname percentage
Readmission Rate =
VAR TotalDischarges = COUNTROWS(fact_encounters)
VAR Readmissions = CALCULATE(
    COUNTROWS(fact_encounters),
    FILTER(
        fact_encounters,
        fact_encounters[is_readmission] = TRUE
    )
)
RETURN DIVIDE(Readmissions, TotalDischarges, 0)

// Bed bezetting
Bed Occupancy Rate =
DIVIDE(
    SUM(fact_bed_census[occupied_beds]),
    SUM(fact_bed_census[total_beds]),
    0
)
\`\`\`

## Healthcare Dashboards

### Executive Dashboard

\`\`\`
┌────────────────────────────────────────────────────────────┐
│                   Healthcare Executive Dashboard            │
├──────────────┬──────────────┬──────────────┬───────────────┤
│   Opnames    │   Ligduur    │  Bezetting   │  Heropname    │
│    1,234     │   4.2 dagen  │    87%       │    8.5%       │
│   ▲ 5%       │   ▼ 0.3      │   ▲ 2%       │   ▼ 0.5%      │
├──────────────┴──────────────┴──────────────┴───────────────┤
│                                                             │
│  [Line Chart: Opnames per dag - trend over tijd]           │
│                                                             │
├─────────────────────────────────┬───────────────────────────┤
│ [Bar Chart: Ligduur per        │ [Donut: Opnames per       │
│  specialisme]                  │  opnametype]               │
└─────────────────────────────────┴───────────────────────────┘
\`\`\`

### Operationeel Dashboard

\`\`\`
┌────────────────────────────────────────────────────────────┐
│               Operationeel Dashboard - SEH                  │
├──────────────┬──────────────┬──────────────┬───────────────┤
│  Wachtenden  │  Gem. Wacht  │  In Behndlng │   Vertrokken  │
│      12      │   45 min     │      8       │     67        │
├──────────────┴──────────────┴──────────────┴───────────────┤
│                                                             │
│  [Real-time: Patiënten per triage categorie]               │
│  ████████████ Groen (42)                                   │
│  ████████ Geel (28)                                        │
│  ███ Oranje (12)                                           │
│  █ Rood (3)                                                │
│                                                             │
└────────────────────────────────────────────────────────────┘
\`\`\`

## Row-Level Security

### RLS voor Afdelingen

\`\`\`dax
// RLS filter op department
[Department] = USERPRINCIPALNAME()

// Of via lookup table
VAR UserDept = LOOKUPVALUE(
    dim_user_departments[department],
    dim_user_departments[email],
    USERPRINCIPALNAME()
)
RETURN [department] = UserDept
\`\`\`

### RLS Testen

\`\`\`
1. Modeling → Manage Roles
2. Voeg filter toe op tabel
3. View as Role om te testen
4. Publish en assign users to roles
\`\`\`

## Embedded Analytics

### Power BI Embedded voor Patiëntportaal

\`\`\`javascript
// Embed report in web applicatie
const embedConfig = {
    type: 'report',
    id: reportId,
    embedUrl: embedUrl,
    accessToken: accessToken,
    settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
    }
};

powerbi.embed(container, embedConfig);
\`\`\`

## Paginated Reports

### Gebruik in Zorg

- **Patiëntoverzichten** - Gedetailleerde rapporten per patiënt
- **Facturatie** - DBC overzichten, declaraties
- **Compliance** - Audit reports, kwaliteitsindicatoren
- **Brieven** - Ontslagbrieven, verwijzingen

## Kernbegrippen

- **Direct Lake**: Query lakehouse tables zonder import
- **Semantic Model**: Gedeelde data definities en measures
- **DAX**: Data Analysis Expressions voor berekeningen
- **Row-Level Security**: Data filtering per gebruiker
- **Paginated Reports**: Pixel-perfect reports voor print
    `,
    sources: [
      { name: "Power BI in Fabric", url: "https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial" },
      { name: "Direct Lake Mode", url: "https://learn.microsoft.com/en-us/power-bi/enterprise/directlake-overview" }
    ]
  },

  "103.6": {
    title: "Real-Time Intelligence voor Patiëntmonitoring",
    summary: "Streaming analytics met Eventhouse en KQL voor real-time zorgmonitoring.",
    content: `
## In het kort

Real-Time Intelligence in Fabric biedt streaming analytics voor tijdkritische zorgdata. Met Eventhouse en KQL kunnen vitale signalen real-time worden gemonitord en alerts gegenereerd.

## Real-Time Intelligence Componenten

### Architectuur

\`\`\`
Event Sources          Real-Time Intelligence           Outputs
─────────────          ──────────────────────          ───────
Patient Monitors ──┐                                   ┌── Power BI Real-time
                   │   ┌────────────────────┐         │
Wearables ─────────┼──►│    Eventstream     │────┬───►┼── Alerts
                   │   └─────────┬──────────┘    │    │
Medical Devices ───┘             │               │    └── Lakehouse
                                 ▼               │
                        ┌────────────────┐       │
                        │   Eventhouse   │───────┘
                        │    (KQL DB)    │
                        └────────────────┘
\`\`\`

### Eventhouse vs Lakehouse

| Aspect | Eventhouse | Lakehouse |
|--------|------------|-----------|
| Optimized for | Time-series, logs | Structured analytics |
| Query Language | KQL | SQL/Spark |
| Latency | Seconds | Minutes |
| Retention | Hot/warm/cold | Unlimited |

## Eventstream Setup

### Patient Vitals Stream

\`\`\`
1. Create Eventstream: "patient_vitals_stream"
2. Add Source: Azure Event Hub
   - Connection: eventhub-patient-monitors
   - Consumer group: fabric-consumer
3. Add Destination: Eventhouse
   - Database: clinical_realtime
   - Table: vitals_raw
\`\`\`

### Event Schema

\`\`\`json
{
  "patient_id": "P12345",
  "timestamp": "2024-01-15T10:30:00Z",
  "device_id": "MON-001",
  "measurements": {
    "heart_rate": 72,
    "spo2": 98,
    "bp_systolic": 120,
    "bp_diastolic": 80,
    "temperature": 36.8,
    "respiratory_rate": 16
  }
}
\`\`\`

## KQL voor Healthcare Analytics

### Basis Queries

\`\`\`kusto
// Laatste vitals per patiënt
vitals_raw
| summarize arg_max(timestamp, *) by patient_id
| project patient_id, timestamp, heart_rate, spo2, bp_systolic

// Gemiddelde over laatste uur per patiënt
vitals_raw
| where timestamp > ago(1h)
| summarize
    avg_hr = avg(heart_rate),
    avg_spo2 = avg(spo2),
    min_spo2 = min(spo2)
by patient_id
\`\`\`

### Early Warning Score (EWS)

\`\`\`kusto
// Bereken Modified Early Warning Score
vitals_raw
| where timestamp > ago(5m)
| summarize arg_max(timestamp, *) by patient_id
| extend ews_hr = case(
    heart_rate < 40, 2,
    heart_rate between (40 .. 50), 1,
    heart_rate between (51 .. 100), 0,
    heart_rate between (101 .. 110), 1,
    heart_rate between (111 .. 129), 2,
    heart_rate >= 130, 3,
    0)
| extend ews_spo2 = case(
    spo2 < 92, 3,
    spo2 between (92 .. 93), 2,
    spo2 between (94 .. 95), 1,
    0)
| extend ews_total = ews_hr + ews_spo2
| where ews_total >= 4
| project patient_id, timestamp, ews_total, heart_rate, spo2
\`\`\`

### Anomaly Detection

\`\`\`kusto
// Detecteer afwijkingen van baseline
let baseline = vitals_raw
| where timestamp between (ago(7d) .. ago(1d))
| summarize
    baseline_hr = avg(heart_rate),
    std_hr = stdev(heart_rate)
by patient_id;

vitals_raw
| where timestamp > ago(1h)
| join kind=inner baseline on patient_id
| extend zscore = (heart_rate - baseline_hr) / std_hr
| where abs(zscore) > 2
| project patient_id, timestamp, heart_rate, baseline_hr, zscore
\`\`\`

## Real-Time Dashboards

### KQL Dashboard

\`\`\`kusto
// Real-time patient overview
vitals_raw
| where timestamp > ago(5m)
| summarize
    last_hr = arg_max(timestamp, heart_rate),
    last_spo2 = arg_max(timestamp, spo2)
by patient_id, ward
| join kind=leftouter (
    alerts
    | where timestamp > ago(1h)
    | summarize alert_count = count() by patient_id
) on patient_id
| project ward, patient_id, last_hr, last_spo2, alert_count
| order by alert_count desc
\`\`\`

### Power BI Real-Time

\`\`\`
1. Create KQL Query Set
2. Connect to Eventhouse
3. Pin query to Power BI dashboard
4. Set auto-refresh interval (30 sec)
\`\`\`

## Alerting

### Data Activator

\`\`\`
Reflex Trigger: High EWS Alert
├── Data Source: vitals_eventhouse
├── Condition: ews_total >= 5
├── Action: Send Teams notification
└── Throttle: Max 1 per 15 min per patient
\`\`\`

### Alert naar Teams

\`\`\`json
{
  "type": "message",
  "attachments": [{
    "contentType": "application/vnd.microsoft.card.adaptive",
    "content": {
      "type": "AdaptiveCard",
      "body": [{
        "type": "TextBlock",
        "text": "⚠️ High EWS Alert",
        "weight": "bolder"
      }, {
        "type": "FactSet",
        "facts": [
          { "title": "Patient", "value": "\${patient_id}" },
          { "title": "Ward", "value": "\${ward}" },
          { "title": "EWS Score", "value": "\${ews_total}" }
        ]
      }]
    }
  }]
}
\`\`\`

## Data Retention

### Hot/Warm/Cold Tiers

\`\`\`kusto
// Retention policy
.alter table vitals_raw policy retention
\`\`\`
{
  "SoftDeletePeriod": "365.00:00:00",  // 1 jaar
  "Recoverability": "Enabled"
}
\`\`\`

// Caching policy (hot data)
.alter table vitals_raw policy caching
\`\`\`
{
  "DataHotSpan": "7.00:00:00"  // 7 dagen hot
}
\`\`\`
\`\`\`

## Kernbegrippen

- **Eventstream**: Managed streaming ingestion
- **Eventhouse**: Time-series database met KQL
- **KQL**: Kusto Query Language voor log analytics
- **Data Activator**: No-code alerting
- **Hot/Warm/Cold**: Data tiering voor cost optimization
    `,
    sources: [
      { name: "Real-Time Intelligence", url: "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/" },
      { name: "KQL Reference", url: "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/" }
    ]
  },

  "103.7": {
    title: "Data Governance en Purview Integratie",
    summary: "Microsoft Purview integratie voor data governance, catalogus en compliance in Fabric.",
    content: `
## In het kort

Microsoft Purview integreert naadloos met Fabric voor enterprise data governance. Het biedt data catalogus, lineage tracking, classificatie en compliance management voor zorgdata.

## Purview en Fabric Integratie

### Automatische Integratie

\`\`\`
Fabric Workspace
├── Lakehouse
│   └── Tables → Automatisch in Purview Catalog
├── Warehouse
│   └── Tables → Automatisch in Purview Catalog
└── Semantic Models
    └── Datasets → Automatisch geregistreerd
\`\`\`

### Purview Componenten

- **Data Catalog** - Zoek en ontdek data assets
- **Data Map** - Scan en classificeer data bronnen
- **Data Lineage** - Visualiseer datastromen
- **Data Estate Insights** - Governance analytics

## Data Catalogus

### Assets Zoeken

\`\`\`
Purview Portal → Data Catalog → Browse

Filters:
├── Source Type: Fabric Lakehouse
├── Classification: PII, PHI
├── Glossary Term: Patient Data
└── Collection: Healthcare
\`\`\`

### Glossary Terms voor Zorg

\`\`\`
Healthcare Glossary
├── Patient Demographics
│   ├── BSN - Burgerservicenummer
│   ├── Patient Name
│   └── Date of Birth
├── Clinical Data
│   ├── Diagnosis Code
│   ├── Procedure Code
│   └── Medication
└── Financial
    ├── DBC Code
    └── Declaration
\`\`\`

### Term Toewijzen

\`\`\`
1. Open asset (bijv. silver.patients)
2. Schema tab → Column "bsn"
3. Assign glossary term: "BSN"
4. Save
\`\`\`

## Data Classificatie

### Sensitivity Labels

\`\`\`
Classification Types:
├── PII (Personally Identifiable Information)
│   - Names, addresses, phone numbers
├── PHI (Protected Health Information)
│   - Medical records, diagnoses, treatments
├── Financial
│   - Insurance, billing
└── Confidential
    - Internal business data
\`\`\`

### Automatische Classificatie

\`\`\`
Purview scant automatisch voor:
├── BSN patterns (9 digits)
├── Credit card numbers
├── Email addresses
├── Medical terminology (ICD, SNOMED)
└── Custom patterns (regex)
\`\`\`

### Custom Classification Rules

\`\`\`json
{
  "name": "Dutch_BSN",
  "description": "Dutch citizen service number",
  "pattern": "\\b[0-9]{9}\\b",
  "minimumPercentageMatch": 60,
  "classification": "PII"
}
\`\`\`

## Data Lineage

### Automatische Lineage

\`\`\`
Fabric tracked automatisch:

[Epic Extract] → [Bronze Table] → [Silver Table] → [Gold Table] → [Power BI Report]
      │              │                │                │               │
   Pipeline      Notebook         Notebook         Dataflow        Dataset
\`\`\`

### Lineage Visualisatie

\`\`\`
View in Purview:
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ epic_extract│────►│bronze.patients│────►│silver.patients│
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                    ┌─────────────┐            │
                    │gold.patient_│◄───────────┘
                    │360          │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │ Patient 360 │
                    │  Dashboard  │
                    └─────────────┘
\`\`\`

## Compliance Management

### Information Protection

\`\`\`
Sensitivity Labels in Fabric:
├── Public
├── Internal
├── Confidential
│   └── Auto-encrypt downloads
└── Highly Confidential
    └── Restrict sharing
\`\`\`

### Label Inheritance

\`\`\`
Als bron data label "PHI" heeft:
1. Downstream tables erven label
2. Reports tonen label
3. Exports worden beperkt
\`\`\`

## Access Reviews

### Periodieke Reviews

\`\`\`
Access Review Setup:
├── Scope: Healthcare workspace
├── Reviewers: Data Stewards
├── Frequency: Quarterly
└── Actions:
    ├── Remove stale access
    └── Verify business need
\`\`\`

## Audit en Compliance Reports

### Activity Logs

\`\`\`kusto
// Query Purview audit logs
AuditLogs
| where TimeGenerated > ago(7d)
| where OperationName contains "DataAccess"
| where TargetResources contains "patient"
| project TimeGenerated, Identity, OperationName, Result
\`\`\`

### Compliance Dashboard

\`\`\`
┌────────────────────────────────────────────────────────────┐
│                   Data Governance Dashboard                 │
├──────────────┬──────────────┬──────────────┬───────────────┤
│  Assets      │  Classified  │  With Terms  │   Lineage     │
│   1,234      │    87%       │     65%      │    92%        │
├──────────────┴──────────────┴──────────────┴───────────────┤
│                                                             │
│  [Chart: Classification coverage over time]                │
│                                                             │
├─────────────────────────────────┬───────────────────────────┤
│  Data by Sensitivity           │  Top Data Stewards        │
│  ████ PHI (340)               │  1. Jan de Vries (234)    │
│  ███ PII (180)                │  2. Lisa Bakker (198)     │
│  ██ Confidential (89)         │  3. Mark Jansen (156)     │
└─────────────────────────────────┴───────────────────────────┘
\`\`\`

## Kernbegrippen

- **Data Catalog**: Doorzoekbare inventaris van data assets
- **Data Map**: Geautomatiseerde scanning en classificatie
- **Glossary**: Gestandaardiseerde business termen
- **Lineage**: End-to-end data flow visualisatie
- **Sensitivity Labels**: Data classificatie met enforcement
    `,
    sources: [
      { name: "Microsoft Purview", url: "https://learn.microsoft.com/en-us/purview/" },
      { name: "Purview and Fabric", url: "https://learn.microsoft.com/en-us/fabric/governance/use-microsoft-purview-hub" }
    ]
  },

  "103.8": {
    title: "Fabric Implementatie en Microsoft Cloud for Healthcare",
    summary: "Implementatieaanpak voor Fabric in zorginstellingen met Microsoft Cloud for Healthcare.",
    content: `
## In het kort

Een succesvolle Fabric implementatie in de zorg combineert het Fabric platform met Microsoft Cloud for Healthcare componenten. Deze module behandelt de implementatieaanpak en integratie.

## Microsoft Cloud for Healthcare

### Componenten

\`\`\`
Microsoft Cloud for Healthcare
├── Azure Health Data Services
│   ├── FHIR Service
│   ├── DICOM Service
│   └── MedTech Service
│
├── Microsoft Fabric
│   ├── Healthcare data solutions
│   └── Analytics & AI
│
├── Dynamics 365
│   ├── Patient Access Portal
│   ├── Care Management
│   └── Home Health
│
├── Microsoft 365
│   ├── Teams for Healthcare
│   ├── Virtual Visits
│   └── Shifts
│
└── Power Platform
    ├── Patient Outreach (Marketing)
    └── Care Coordination apps
\`\`\`

## Implementatie Stappenplan

### Fase 1: Assessment (Week 1-4)

**Huidige Staat**
- Inventariseer databronnen (EPD, PACS, labs)
- Beoordeel huidige BI-tooling
- Identificeer stakeholders
- Review compliance requirements

**Doelarchitectuur**
\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    Microsoft Cloud                          │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │ Azure Health     │  │  Microsoft       │                │
│  │ Data Services    │  │  Fabric          │                │
│  │                  │  │                  │                │
│  │ FHIR ────────────┼──┼─► Lakehouse      │                │
│  │ DICOM ───────────┼──┼─► Analytics      │                │
│  │ MedTech ─────────┼──┼─► Power BI       │                │
│  └──────────────────┘  └──────────────────┘                │
│           │                     │                           │
│           ▼                     ▼                           │
│  ┌──────────────────────────────────────────┐              │
│  │            Microsoft Purview              │              │
│  │         (Governance & Compliance)         │              │
│  └──────────────────────────────────────────┘              │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Fase 2: Foundation (Week 5-10)

**Azure Setup**
1. Azure subscription en resource groups
2. Azure Health Data Services provisioning
3. Fabric capacity provisioning
4. Netwerk (Private endpoints, Express Route)

**Identity & Security**
- Azure AD configuratie
- Conditional Access policies
- Privileged Identity Management
- Security groups voor Fabric

### Fase 3: Data Platform (Week 11-18)

**Fabric Workspace Structuur**

\`\`\`
Tenant: ZiekenhuisX
├── Capacity: Prod-F64
│   ├── Workspace: Clinical-Production
│   │   ├── Lakehouse: clinical_data
│   │   ├── Warehouse: analytics_dw
│   │   └── Reports: clinical_dashboards
│   │
│   └── Workspace: Finance-Production
│       └── ...
│
└── Capacity: Dev-F8
    └── Workspace: Development
        └── ...
\`\`\`

**Data Integratie**
1. FHIR Service → Fabric Lakehouse pipeline
2. EPD extractie via Data Factory
3. Real-time vitals via Eventstream

### Fase 4: Use Cases (Week 19-26)

**Pilot Use Cases**

| Use Case | Data | Output |
|----------|------|--------|
| Patient 360 | FHIR, EPD | Power BI Dashboard |
| Bed Management | ADT, Census | Real-time Dashboard |
| Quality Metrics | Clinical data | Paginated Reports |

## Security Configuration

### Network Security

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    Virtual Network                          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐     ┌─────────────────┐               │
│  │ Private Endpoint│     │ Private Endpoint│               │
│  │ (Fabric)        │     │ (Health Services)│              │
│  └────────┬────────┘     └────────┬────────┘               │
│           │                       │                         │
│           └───────────┬───────────┘                         │
│                       │                                     │
│              ┌────────▼────────┐                           │
│              │  On-premises    │                           │
│              │  (via ExpressRoute)                         │
│              └─────────────────┘                           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Encryption

\`\`\`
Encryption at Rest:
├── OneLake: Microsoft-managed keys (default)
├── Customer-managed keys (CMK) option
└── Azure Health Data Services: CMK supported

Encryption in Transit:
├── TLS 1.2+ enforced
└── Private Link for internal traffic
\`\`\`

## Governance Setup

### Data Stewardship Model

\`\`\`
Central Team:
├── Data Platform Team
│   └── Fabric administration, security
├── Data Governance Team
│   └── Purview, compliance, policies
└── Analytics CoE
    └── Power BI standards, training

Domain Teams:
├── Clinical Analytics
│   └── Clinical data stewards
├── Finance Analytics
│   └── Finance data stewards
└── Operations Analytics
    └── Ops data stewards
\`\`\`

### Workspace Governance

\`\`\`
Workspace Naming: {Domain}-{Environment}
├── Clinical-Production
├── Clinical-Development
├── Finance-Production
└── Research-Sandbox

Lakehouse Naming: {domain}_{layer}_lakehouse
├── clinical_bronze_lakehouse
├── clinical_silver_lakehouse
└── clinical_gold_lakehouse
\`\`\`

## Change Management

### Training Plan

| Rol | Training | Certificering |
|-----|----------|---------------|
| Data Engineer | DP-600 Fabric Analytics | Optional |
| Data Analyst | PL-300 Power BI | Recommended |
| Data Steward | SC-400 Information Protection | Recommended |
| Admin | Fabric Admin workshop | - |

### Adoption Metrics

\`\`\`
Track:
├── Active users per week
├── Reports viewed
├── Queries executed
├── Data freshness
└── User satisfaction (surveys)
\`\`\`

## Cost Management

### Capacity Planning

\`\`\`
Workload Estimation:
├── Daily data volume: 50 GB
├── Concurrent users: 200
├── Complex reports: 50
├── ML workloads: 10 jobs/day
    ↓
Recommended: F32 capacity
\`\`\`

### Cost Monitoring

\`\`\`
Azure Cost Management:
├── Set budgets per workspace
├── Alerts at 80%, 100%
├── Monthly review meetings
└── Chargeback to departments
\`\`\`

## Kernbegrippen

- **Microsoft Cloud for Healthcare**: Verticale cloud oplossing
- **Fabric Capacity**: Compute resources voor Fabric
- **Private Endpoints**: Private network connectivity
- **Data Stewardship**: Gedecentraliseerd data eigenaarschap
- **CoE**: Center of Excellence voor best practices
    `,
    sources: [
      { name: "Microsoft Cloud for Healthcare", url: "https://www.microsoft.com/en-us/industry/health/microsoft-cloud-for-healthcare" },
      { name: "Fabric Implementation Guide", url: "https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial" }
    ]
  },

  // ==========================================
  // TRACK 104: SAS & SAS ON AZURE IN DE ZORG
  // ==========================================

  "104.1": {
    title: "SAS Platform Fundamentals voor de Zorg",
    summary: "Introductie tot het SAS platform en de historische rol in healthcare analytics.",
    content: `
## In het kort

SAS is een van de langstlopende analytics platforms met diepe wortels in de zorgsector. Van klinische trials tot population health - SAS heeft decennialange expertise in healthcare analytics.

## SAS in Perspectief

### Geschiedenis

\`\`\`
1976: SAS opgericht (Statistical Analysis System)
1980s: Eerste healthcare toepassingen (FDA, pharma)
1990s: SAS Institute groeit, healthcare focus
2000s: Data mining, predictive analytics
2010s: SAS Viya, cloud transitie
2020s: SAS on Azure, hybrid cloud
\`\`\`

### SAS Market Positie

- **Sterk in**: Pharma, klinische trials, verzekeraars, overheid
- **Legacy**: Veel zorginstellingen hebben jarenlange SAS-investeringen
- **Uitdaging**: Modernisering naar cloud, concurrentie van open source

## SAS Platform Componenten

### SAS 9.4 (Legacy)

\`\`\`
SAS 9.4 Architecture:
├── Base SAS
│   └── Data manipulation, procedures
├── SAS/STAT
│   └── Statistische analyses
├── SAS/GRAPH
│   └── Visualisatie
├── SAS Enterprise Guide
│   └── GUI voor analisten
└── SAS Enterprise Miner
    └── Data mining, ML
\`\`\`

### SAS Viya (Modern)

\`\`\`
SAS Viya Architecture:
├── Cloud-native (Kubernetes)
├── In-memory analytics (CAS)
├── Open APIs (REST)
├── Python/R integratie
└── Visual interfaces
    ├── SAS Visual Analytics
    ├── SAS Visual Data Mining
    └── SAS Model Studio
\`\`\`

## SAS voor Healthcare

### Healthcare-specifieke Oplossingen

| Oplossing | Doel |
|-----------|------|
| SAS Health | Population health, care management |
| SAS Clinical | Klinische trials, FDA submissions |
| SAS Fraud | Fraudedetectie verzekeraars |
| SAS Risk | Risicomanagement |

### Typische Zorgtoepassingen

1. **Klinische Trials** - Data management, statistical analysis
2. **FDA Submissions** - CDISC-compliant outputs
3. **Population Health** - Risicostratificatie
4. **Claims Analytics** - Fraudedetectie
5. **Quality Reporting** - HEDIS, CAHPS metrics

## SAS vs Moderne Platforms

### Vergelijking

| Aspect | SAS | Databricks/Fabric |
|--------|-----|-------------------|
| Leercurve | Steep (SAS language) | Varies (SQL, Python) |
| Kosten | Hoog (licenties) | Consumption-based |
| Schaalbaarheid | Beperkt | Cloud-native |
| Open Source | Nee | Ja (Spark, Delta) |
| Healthcare | Diep geïntegreerd | Groeiend |
| Statistiek | Gouden standaard | Goed (maar anders) |

### Wanneer SAS?

\`\`\`
SAS is sterk wanneer:
├── FDA-gereguleerde omgeving (validated systems)
├── Legacy SAS code base aanwezig
├── Complexe statistische analyses vereist
├── CDISC standaarden (klinische trials)
└── Bestaande SAS-expertise in team
\`\`\`

## SAS Language Basics

### Data Step

\`\`\`sas
/* Lees en transformeer data */
data patients_clean;
    set raw.patients;
    where age >= 18;
    length full_name $100;
    full_name = catx(' ', first_name, last_name);
    bmi = weight / (height/100)**2;
run;
\`\`\`

### Procedures

\`\`\`sas
/* Frequentietabel */
proc freq data=patients_clean;
    tables gender diagnosis / chisq;
run;

/* Regressie analyse */
proc reg data=patients_clean;
    model outcome = age gender bmi;
run;
\`\`\`

### SQL in SAS

\`\`\`sas
proc sql;
    create table patient_summary as
    select
        department,
        count(*) as patient_count,
        mean(los) as avg_los
    from hospital.admissions
    group by department;
quit;
\`\`\`

## Kernbegrippen

- **Base SAS**: Core data manipulation en procedures
- **SAS Viya**: Cloud-native analytics platform
- **CAS**: Cloud Analytic Services (in-memory engine)
- **Data Step**: SAS programming voor data manipulatie
- **PROC**: Procedure calls voor analyses
    `,
    sources: [
      { name: "SAS Documentation", url: "https://documentation.sas.com" },
      { name: "SAS for Healthcare", url: "https://www.sas.com/en_us/industry/health-care.html" }
    ]
  },

  "104.2": {
    title: "SAS Viya Architectuur en Cloud Opties",
    summary: "Deep dive in SAS Viya architectuur en de verschillende cloud deployment opties.",
    content: `
## In het kort

SAS Viya is de moderne, cloud-native versie van SAS. Het draait op Kubernetes en biedt integratie met cloud platforms zoals Azure, AWS en GCP.

## SAS Viya Architectuur

### High-Level Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      SAS Viya Platform                       │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │ Visual        │  │ Model         │  │ Data          │   │
│  │ Analytics     │  │ Studio        │  │ Studio        │   │
│  └───────────────┘  └───────────────┘  └───────────────┘   │
│                            │                                 │
│                            ▼                                 │
│  ┌───────────────────────────────────────────────────────┐ │
│  │            Microservices Layer (REST APIs)             │ │
│  └───────────────────────────────────────────────────────┘ │
│                            │                                 │
│                            ▼                                 │
│  ┌───────────────────────────────────────────────────────┐ │
│  │     CAS - Cloud Analytic Services (In-Memory)         │ │
│  └───────────────────────────────────────────────────────┘ │
│                            │                                 │
│                            ▼                                 │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              Kubernetes Infrastructure                  │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### CAS (Cloud Analytic Services)

CAS is de in-memory engine van Viya:

\`\`\`
CAS Architecture:
├── Controller Node
│   └── Coördinatie, metadata
├── Worker Nodes
│   └── Parallelle verwerking
├── CAS Libraries
│   └── Data in-memory
└── CAS Actions
    └── Analytics operaties
\`\`\`

## Deployment Opties

### SAS Viya Deployment Models

| Model | Beheer | Locatie | Use Case |
|-------|--------|---------|----------|
| SAS Cloud | SAS | SAS Hosted | Quick start |
| Customer Cloud | Klant | Azure/AWS/GCP | Enterprise |
| On-Premises | Klant | Datacenter | Regulated |
| Hybrid | Beide | Mixed | Transitie |

### SAS Cloud (Managed)

\`\`\`
Voordelen:
├── Geen infrastructuur beheer
├── Automatische updates
├── SAS support
└── Snelle start

Nadelen:
├── Minder controle
├── Data sovereignty vragen
└── Integratie complexiteit
\`\`\`

### Customer-Managed Cloud

\`\`\`
Voordelen:
├── Volledige controle
├── Integratie met cloud services
├── Data in eigen tenant
└── Flexibele configuratie

Nadelen:
├── Kubernetes expertise nodig
├── Onderhoud verantwoordelijkheid
└── Hogere operationele last
\`\`\`

## SAS Viya op Kubernetes

### Kubernetes Requirements

\`\`\`yaml
# Minimum cluster sizing
nodes:
  - type: system
    count: 3
    cpu: 4
    memory: 16GB

  - type: cas
    count: 3
    cpu: 16
    memory: 128GB

  - type: compute
    count: 2
    cpu: 8
    memory: 32GB
\`\`\`

### Deployment met Viya Deployment Operator

\`\`\`bash
# Install SAS Viya Deployment Operator
kubectl apply -f sas-bases/overlays/deployment-operator

# Apply Viya deployment
kubectl apply -f site-config/

# Monitor deployment
kubectl get pods -n sas-viya
\`\`\`

## Data Connectiviteit

### Data Sources

\`\`\`
Ondersteunde bronnen:
├── Databases
│   ├── Oracle, SQL Server, PostgreSQL
│   ├── Teradata, Snowflake
│   └── Azure SQL, Amazon Redshift
├── Cloud Storage
│   ├── Azure Blob/ADLS
│   ├── Amazon S3
│   └── Google Cloud Storage
├── Big Data
│   ├── Hadoop HDFS
│   ├── Spark
│   └── Databricks
└── Files
    ├── CSV, Excel
    ├── Parquet
    └── SAS datasets (.sas7bdat)
\`\`\`

### CAS Data Loading

\`\`\`sas
/* Load data into CAS */
cas mysession;

proc casutil;
    load data=work.patients
    outcaslib="casuser"
    casout="patients_cas";
run;

/* Query in CAS */
proc cas;
    simple.summary /
        table={caslib="casuser", name="patients_cas"}
        inputs={"age", "bmi"};
run;
\`\`\`

## SAS Viya APIs

### REST API Voorbeeld

\`\`\`python
import requests

# Authenticate
auth_url = "https://viya.company.com/SASLogon/oauth/token"
response = requests.post(auth_url, data={
    "grant_type": "password",
    "username": "user",
    "password": "pass"
})
token = response.json()["access_token"]

# Execute SAS code
headers = {"Authorization": f"Bearer {token}"}
code_url = "https://viya.company.com/compute/sessions/{session}/jobs"
response = requests.post(code_url, headers=headers, json={
    "code": ["proc means data=sashelp.cars; run;"]
})
\`\`\`

## Kernbegrippen

- **SAS Viya**: Cloud-native SAS platform
- **CAS**: In-memory analytics engine
- **Kubernetes**: Container orchestration voor Viya
- **SAS Deployment Operator**: Kubernetes operator voor Viya
- **CASLIB**: Library voor CAS data access
    `,
    sources: [
      { name: "SAS Viya Documentation", url: "https://documentation.sas.com/doc/en/sasadmincdc/default/itopswn/titlepage.htm" },
      { name: "SAS Viya Architecture", url: "https://documentation.sas.com/doc/en/sasadmincdc/default/calchkadm/n08000viyaserv000000admin.htm" }
    ]
  },

  "104.3": {
    title: "SAS on Azure: Deployment en Integratie",
    summary: "Implementatie van SAS Viya op Azure met integratie in het Azure ecosysteem.",
    content: `
## In het kort

SAS on Azure combineert de kracht van SAS analytics met de schaalbaarheid van Azure. De integratie met Azure-native services maakt moderne data architecturen mogelijk.

## SAS on Azure Opties

### Deployment Models

\`\`\`
1. SAS Viya on Azure Kubernetes Service (AKS)
   - Volledige SAS Viya op managed Kubernetes
   - Meeste flexibiliteit

2. SAS Viya on Azure Red Hat OpenShift (ARO)
   - Enterprise Kubernetes met Red Hat support
   - Stricter security model

3. Azure Marketplace Quick Start
   - Pre-configured templates
   - Snelle proof of concept
\`\`\`

## AKS Deployment

### Azure Resources

\`\`\`
Resource Group: rg-sas-viya
├── AKS Cluster
│   ├── System Node Pool (3x Standard_D8s_v5)
│   ├── CAS Node Pool (3x Standard_E32s_v5)
│   └── Compute Node Pool (2x Standard_D16s_v5)
├── Azure Files (Premium)
│   └── Persistent storage voor SAS
├── Azure Database for PostgreSQL
│   └── SAS metadata database
├── Azure Container Registry
│   └── SAS container images
└── Virtual Network
    └── Private networking
\`\`\`

### Infrastructure as Code

\`\`\`hcl
# Terraform voor SAS on Azure
resource "azurerm_kubernetes_cluster" "sas_viya" {
  name                = "aks-sas-viya"
  location            = azurerm_resource_group.sas.location
  resource_group_name = azurerm_resource_group.sas.name
  dns_prefix          = "sasviya"

  default_node_pool {
    name       = "system"
    node_count = 3
    vm_size    = "Standard_D8s_v5"
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin = "azure"
    network_policy = "calico"
  }
}

resource "azurerm_kubernetes_cluster_node_pool" "cas" {
  name                  = "cas"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.sas_viya.id
  vm_size              = "Standard_E32s_v5"
  node_count           = 3

  node_labels = {
    "workload.sas.com/class" = "cas"
  }
}
\`\`\`

## Azure Integratie

### Data Lake Integratie

\`\`\`
Azure Data Lake Gen2
        │
        ▼
┌───────────────┐
│ SAS Viya      │
│ ┌───────────┐ │
│ │ CAS       │ │
│ │           │ │
│ │ ADLS      │ │──► Lees/schrijf Parquet, CSV
│ │ CASLIB    │ │
│ └───────────┘ │
└───────────────┘
\`\`\`

### ADLS CASLIB Configuratie

\`\`\`sas
/* Definieer ADLS caslib */
caslib adls_data datasource=(
    srctype="adls",
    accountName="storagesasviya",
    filesystem="data",
    applicationId="<app-id>",
    tenantId="<tenant-id>",
    secretKey="<secret>"
);

/* Laad data uit ADLS */
proc casutil;
    load casdata="patients.parquet"
    incaslib="adls_data"
    outcaslib="casuser"
    casout="patients";
run;
\`\`\`

### Azure SQL Integratie

\`\`\`sas
/* Libname naar Azure SQL */
libname azuresql odbc
    datasrc="AzureSQLDS"
    user="sas_user"
    password="{SAS002}encrypted_pw"
    schema="dbo";

/* Query Azure SQL */
proc sql;
    select * from azuresql.patients
    where admission_date >= '2024-01-01';
quit;
\`\`\`

## Security Configuration

### Azure AD Integratie

\`\`\`yaml
# sas-viya configuration
sas.identities.providers.azure:
  enabled: true
  tenantId: "<azure-tenant-id>"
  clientId: "<app-registration-id>"
  clientSecret: "<secret>"
\`\`\`

### Private Networking

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      Azure Virtual Network                   │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐     ┌─────────────────┐               │
│  │ AKS Subnet      │     │ Private Endpoint│               │
│  │ (SAS Viya)      │     │ Subnet          │               │
│  └────────┬────────┘     └────────┬────────┘               │
│           │                       │                         │
│           │    ┌──────────────────┼──────────────────┐     │
│           │    │                  │                  │     │
│           ▼    ▼                  ▼                  ▼     │
│      ┌─────────────┐    ┌─────────────┐    ┌─────────────┐│
│      │   ADLS      │    │  Azure SQL  │    │   Key Vault ││
│      └─────────────┘    └─────────────┘    └─────────────┘│
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Monitoring en Operations

### Azure Monitor Integratie

\`\`\`yaml
# Container Insights configuratie
azure:
  monitor:
    enabled: true
    workspaceId: "<log-analytics-workspace-id>"
    workspaceKey: "<workspace-key>"
\`\`\`

### SAS Metrics naar Azure

\`\`\`
Beschikbare metrics:
├── CAS memory utilization
├── CAS CPU usage
├── Active sessions
├── Job queue depth
├── Data transfer rates
└── Error counts
\`\`\`

## Hybrid Architectuur

### SAS 9.4 + Viya + Azure

\`\`\`
┌─────────────────┐     ┌─────────────────┐     ┌─────────────┐
│  On-Premises    │     │   SAS Viya      │     │   Azure     │
│  SAS 9.4        │────►│   on AKS        │────►│   Services  │
│                 │     │                 │     │             │
│  Legacy Code    │     │  Modern         │     │  ADLS       │
│  Production     │     │  Analytics      │     │  Synapse    │
└─────────────────┘     └─────────────────┘     └─────────────┘
        │                       │
        └───────────────────────┘
          Migration path
\`\`\`

## Kernbegrippen

- **AKS**: Azure Kubernetes Service
- **CASLIB**: CAS library definitie voor data access
- **Private Endpoint**: Private connectivity naar Azure services
- **Container Insights**: Azure monitoring voor containers
- **Managed Identity**: Azure AD identity voor AKS workloads
    `,
    sources: [
      { name: "SAS on Azure", url: "https://www.sas.com/en_us/partners/find-a-partner/alliance-partners/microsoft.html" },
      { name: "SAS Viya on AKS", url: "https://documentation.sas.com/doc/en/itopscdc/default/dplyml0phy0dkr/titlepage.htm" }
    ]
  },

  "104.4": {
    title: "Healthcare Analytics met SAS",
    summary: "SAS procedures en technieken voor healthcare analytics en klinische statistiek.",
    content: `
## In het kort

SAS heeft een rijke historie in healthcare analytics, van klinische trials tot population health. De statistische procedures zijn de gouden standaard voor veel medisch onderzoek.

## Klinische Trial Analytics

### CDISC Standaarden

\`\`\`
CDISC Data Standards:
├── SDTM (Study Data Tabulation Model)
│   └── Gestandaardiseerde study data
├── ADaM (Analysis Data Model)
│   └── Analysis-ready datasets
└── Define-XML
    └── Metadata beschrijving
\`\`\`

### SDTM Dataset Creatie

\`\`\`sas
/* Maak SDTM Demographics (DM) dataset */
data sdtm.dm;
    set raw.patients;

    /* SDTM variabelen */
    STUDYID = "STUDY001";
    DOMAIN = "DM";
    USUBJID = catx("-", STUDYID, subject_id);
    SUBJID = subject_id;
    RFSTDTC = put(enrollment_date, e8601da.);
    BRTHDTC = put(birth_date, e8601da.);
    AGE = intck('year', birth_date, enrollment_date);
    AGEU = "YEARS";
    SEX = ifc(gender='M', 'M', 'F');
    RACE = race;
    ETHNIC = ethnicity;
run;
\`\`\`

### Survival Analysis

\`\`\`sas
/* Kaplan-Meier survival curves */
proc lifetest data=trial.adtte
    plots=survival(atrisk);
    time aval * cnsr(1);
    strata trt01p;
run;

/* Cox proportional hazards */
proc phreg data=trial.adtte;
    class trt01p (ref="Placebo") sex;
    model aval * cnsr(1) = trt01p age sex bmi;
    hazardratio trt01p;
run;
\`\`\`

## Population Health Analytics

### Risicostratificatie

\`\`\`sas
/* Predictief model voor heropname */
proc hplogistic data=health.patients;
    class gender region insurance_type;
    model readmit_30d(event='1') =
        age gender region
        comorbidity_count
        prior_admissions
        insurance_type
        / selection=stepwise;
    score out=health.scored_patients;
run;

/* Risico categorieën */
data health.risk_stratified;
    set health.scored_patients;
    if p_readmit_30d >= 0.3 then risk_tier = 'High';
    else if p_readmit_30d >= 0.15 then risk_tier = 'Medium';
    else risk_tier = 'Low';
run;
\`\`\`

### Quality Metrics (HEDIS)

\`\`\`sas
/* HEDIS: Colorectal Cancer Screening */
proc sql;
    create table hedis.col as
    select
        member_id,
        /* Denominator: 50-75 jaar, continuous enrollment */
        case when age between 50 and 75
             and continuous_enrollment = 1
             then 1 else 0 end as denominator,
        /* Numerator: colonoscopie of FOBT */
        case when colonoscopy_date is not null
              or fobt_date is not null
             then 1 else 0 end as numerator
    from health.members
    where measurement_year = 2024;
quit;

/* Calculate rate */
proc means data=hedis.col sum;
    var denominator numerator;
    output out=hedis.col_rate
        sum(denominator)=denom
        sum(numerator)=numer;
run;
\`\`\`

## Statistische Analyses

### Mixed Models voor Repeated Measures

\`\`\`sas
/* Longitudinale analyse van bloeddruk */
proc mixed data=clinical.bp_measurements;
    class patient_id visit treatment;
    model systolic = treatment visit treatment*visit
                     age baseline_sbp
        / solution;
    repeated visit / subject=patient_id type=un;
    lsmeans treatment*visit / diff;
run;
\`\`\`

### Propensity Score Matching

\`\`\`sas
/* Bereken propensity scores */
proc logistic data=study.patients;
    class smoking diabetes hypertension;
    model treatment(event='1') =
        age bmi smoking diabetes hypertension;
    output out=study.ps_scores pred=propensity;
run;

/* Match treated/control */
proc psmatch data=study.ps_scores;
    class treatment;
    psmodel treatment(treated='1') =
        age bmi smoking diabetes hypertension;
    match method=greedy(k=1) caliper=0.2;
    output out=study.matched matchid=_MatchID;
run;
\`\`\`

## Fraudedetectie

### Claims Anomaly Detection

\`\`\`sas
/* Identificeer outlier providers */
proc stdize data=claims.provider_summary
    out=claims.standardized
    method=std;
    var claims_per_patient avg_claim_amount denial_rate;
run;

/* Cluster anomalous patterns */
proc fastclus data=claims.standardized
    maxclusters=5 out=claims.clustered;
    var claims_per_patient avg_claim_amount denial_rate;
run;
\`\`\`

## SAS Visual Analytics

### Healthcare Dashboard

\`\`\`
VA Dashboard Components:
├── KPI Tiles
│   ├── Total Patients
│   ├── Average LOS
│   └── Readmission Rate
├── Trend Charts
│   └── Admissions over time
├── Geographic Maps
│   └── Patient distribution
└── Drill-down Tables
    └── Department details
\`\`\`

## Kernbegrippen

- **CDISC**: Clinical Data Interchange Standards Consortium
- **SDTM**: Study Data Tabulation Model
- **ADaM**: Analysis Data Model
- **HEDIS**: Healthcare Effectiveness Data and Information Set
- **Propensity Score**: Waarschijnlijkheid van behandeling
    `,
    sources: [
      { name: "SAS/STAT Documentation", url: "https://documentation.sas.com/doc/en/statcdc/14.3/statug/titlepage.htm" },
      { name: "SAS Clinical Standards Toolkit", url: "https://documentation.sas.com/doc/en/pgmmvacdc/v_018/cstug/titlepage.htm" }
    ]
  },

  "104.5": {
    title: "SAS Data Management voor Zorgdata",
    summary: "Data integratie, ETL en data quality met SAS Data Management tools.",
    content: `
## In het kort

SAS biedt uitgebreide data management capabilities voor het integreren en opschonen van zorgdata. Van ETL tot data quality - SAS heeft volwassen tools voor enterprise data management.

## SAS Data Management Tools

### Component Overzicht

\`\`\`
SAS Data Management:
├── SAS Data Integration Studio
│   └── Visual ETL development
├── SAS Data Quality
│   └── Profiling, cleansing, matching
├── SAS Master Data Management
│   └── Golden record management
└── SAS Data Loader for Hadoop
    └── Big data integratie
\`\`\`

## ETL met SAS

### Data Step ETL

\`\`\`sas
/* Extract */
libname epic odbc datasrc="EPIC_CLARITY";

/* Transform */
data work.patients_clean;
    set epic.patient (keep=pat_id pat_name birth_date gender);

    /* Standaardiseer gender */
    if upcase(gender) in ('M', 'MALE', 'MAN') then gender_std = 'M';
    else if upcase(gender) in ('F', 'FEMALE', 'VROUW') then gender_std = 'F';
    else gender_std = 'U';

    /* Bereken leeftijd */
    age = intck('year', birth_date, today());

    /* Parse naam */
    last_name = scan(pat_name, 1, ',');
    first_name = scan(pat_name, 2, ',');

    drop gender pat_name;
    rename gender_std = gender;
run;

/* Load */
proc append base=dwh.dim_patient data=work.patients_clean force;
run;
\`\`\`

### SAS Data Integration Studio

\`\`\`
Visual ETL Flow:
[Source] → [Transform] → [Lookup] → [Target]

Jobs:
├── Extract_Epic_Daily
│   └── Scheduled: 06:00
├── Transform_Clinical
│   └── Dependencies: Extract_Epic_Daily
└── Load_DWH
    └── Dependencies: Transform_Clinical
\`\`\`

## Data Quality

### Data Profiling

\`\`\`sas
/* Profile patient data */
proc dqscheme data=raw.patients
    out=work.patient_scheme;
    var bsn gender birth_date postal_code;
run;

/* Analyze results */
proc dqanalyze data=raw.patients
    scheme=work.patient_scheme
    out=work.profile_results;
    var _all_;
run;
\`\`\`

### Data Cleansing

\`\`\`sas
/* Standaardiseer adressen */
proc dqcase data=raw.patients out=work.patients_cased;
    locale='NLNLD';
    casetype=proper;
    var first_name last_name city;
run;

/* Parse en standaardiseer */
proc dqparse data=work.patients_cased out=work.patients_parsed;
    locale='NLNLD';
    var postal_code / type=postalcode;
    var phone / type=phone;
run;
\`\`\`

### Match/Merge (MDM)

\`\`\`sas
/* Definieer match regels */
proc dqmatch data=raw.patients
    out=work.matched_patients;

    /* Match criteria */
    criteria
        gender = exact
        birth_date = exact
        last_name = fuzzy(sensitivity=85)
        first_name = fuzzy(sensitivity=80);

    /* Clustering */
    cluster entitytype=patient
        clusterid=cluster_id
        matchflag=match_flag;
run;

/* Survivorship - kies beste record */
proc dqsurvivor data=work.matched_patients
    out=work.golden_patients;
    by cluster_id;
    survivorship rule=mostpopulated(bsn)
                 rule=mostrecent(address, date_modified);
run;
\`\`\`

## Data Governance

### Metadata Management

\`\`\`
SAS Metadata Server:
├── Data Definitions
│   ├── Tables, columns, relationships
│   └── Business glossary terms
├── Lineage
│   └── Source to target mapping
├── Impact Analysis
│   └── Change propagation
└── Security
    └── Row/column level access
\`\`\`

### Business Glossary

\`\`\`sas
/* Annoteer met business termen */
proc metalib;
    omrlib "Foundation/SAS Data" (libref=dwh);
    update_rule=(noadd);
    report;
run;

/* Link naar glossary */
/* Via SAS Information Map Studio */
\`\`\`

## Change Data Capture

### Incremental Loading

\`\`\`sas
/* Haal laatst geladen timestamp */
proc sql noprint;
    select max(load_timestamp) into :last_load
    from dwh.patient_audit;
quit;

/* Extract alleen nieuwe/gewijzigde records */
data work.patient_changes;
    set epic.patient;
    where modified_date > "&last_load"dt;
run;

/* Merge changes */
proc sql;
    /* Update existing */
    update dwh.dim_patient as t
    set /* columns */
    where exists (
        select 1 from work.patient_changes as s
        where t.patient_id = s.patient_id
    );

    /* Insert new */
    insert into dwh.dim_patient
    select * from work.patient_changes
    where patient_id not in (
        select patient_id from dwh.dim_patient
    );
quit;
\`\`\`

### SCD Type 2

\`\`\`sas
/* Slowly Changing Dimension Type 2 */
proc sql;
    /* Close old records */
    update dwh.dim_patient
    set valid_to = datetime(),
        current_flag = 'N'
    where patient_id in (select patient_id from work.changes)
    and current_flag = 'Y';

    /* Insert new versions */
    insert into dwh.dim_patient
    select
        patient_id,
        /* other columns */
        datetime() as valid_from,
        '31DEC9999:23:59:59'dt as valid_to,
        'Y' as current_flag
    from work.changes;
quit;
\`\`\`

## Kernbegrippen

- **Data Step**: SAS programming voor data manipulatie
- **PROC DQMATCH**: Data deduplicatie en matching
- **Change Data Capture**: Incrementele data loading
- **SCD Type 2**: Historische dimensie tracking
- **Metadata Server**: Centrale metadata repository
    `,
    sources: [
      { name: "SAS Data Quality", url: "https://documentation.sas.com/doc/en/dqcdc/3.3/dqclref/titlepage.htm" },
      { name: "SAS Data Integration", url: "https://documentation.sas.com/doc/en/etls/3.2/etlref/titlepage.htm" }
    ]
  },

  "104.6": {
    title: "Machine Learning en AI met SAS Viya",
    summary: "Machine learning capabilities in SAS Viya met Model Studio en Model Manager.",
    content: `
## In het kort

SAS Viya biedt enterprise-grade machine learning met visuele tools (Model Studio) en governance (Model Manager). Voor zorginstellingen betekent dit validated ML met audit trails.

## SAS Viya ML Components

### Platform Overzicht

\`\`\`
SAS Viya ML:
├── Model Studio
│   └── Visual ML development
├── SAS Studio
│   └── Code-based development
├── Model Manager
│   └── Model deployment & monitoring
└── Model Repository
    └── Version control & governance
\`\`\`

## Model Studio

### Visual Pipeline Builder

\`\`\`
Pipeline Structure:
[Data Source] → [Data Preparation] → [Feature Engineering] → [Model Training] → [Assessment]

Nodes Available:
├── Transformations
│   ├── Imputation
│   ├── Binning
│   └── Standardization
├── Feature Selection
│   ├── Variable Selection
│   └── Principal Components
├── Models
│   ├── Decision Tree
│   ├── Random Forest
│   ├── Gradient Boosting
│   ├── Neural Network
│   └── Logistic Regression
└── Assessment
    ├── Model Comparison
    └── Lift Charts
\`\`\`

### AutoML in Model Studio

\`\`\`
AutoML Pipeline:
1. Selecteer target variabele
2. Model Studio genereert automatisch:
   ├── Feature engineering
   ├── Multiple algorithms
   └── Hyperparameter tuning
3. Champion model selectie
\`\`\`

## SAS Code voor ML

### Gradient Boosting

\`\`\`sas
/* Healthcare readmission prediction */
proc gradboost data=mycaslib.patients
    outmodel=mycaslib.readmit_model;

    target readmit_30d / level=nominal;
    input age los prior_admits comorbidity_score / level=interval;
    input gender insurance_type / level=nominal;

    /* Hyperparameters */
    ntrees=100;
    maxdepth=5;
    learningrate=0.1;
    subsamplerate=0.8;

    /* Cross-validation */
    partition fraction(validate=0.2 test=0.1);

    /* Output */
    output out=mycaslib.scored copyvars=(_all_);
run;
\`\`\`

### Neural Networks

\`\`\`sas
/* Deep learning voor clinical outcomes */
proc nnet data=mycaslib.clinical_data
    standardize=std;

    target outcome / level=nominal;
    input age bmi blood_pressure cholesterol / level=interval;
    input gender smoking_status / level=nominal;

    /* Architecture */
    hidden 50 / act=tanh;
    hidden 25 / act=tanh;

    /* Training */
    optimization algorithm=adam learningrate=0.01;
    train numtries=5 maxiter=500;
run;
\`\`\`

## Model Interpretability

### Variable Importance

\`\`\`sas
/* Extract feature importance */
proc gradboost data=mycaslib.patients;
    target readmit_30d;
    input age los prior_admits / level=interval;
    ods output VariableImportance=work.importance;
run;
\`\`\`

### Partial Dependence Plots

\`\`\`sas
/* Begrijp effect van variabelen */
proc plm restore=mycaslib.readmit_model;
    effectplot slicefit(x=age sliceby=insurance_type);
run;
\`\`\`

## Model Manager

### Model Governance Workflow

\`\`\`
Development → Testing → Production
     │           │           │
     ▼           ▼           ▼
  Model       Champion    Deployed
 Repository   Selection   Monitoring
\`\`\`

### Model Registration

\`\`\`python
# Python via SAS Viya API
from sasctl import Session, register_model

with Session("viya.company.com", "user", "pass"):
    register_model(
        model=model_object,
        name="readmission_predictor_v2",
        project="Healthcare Analytics",
        version="2.0",
        score_code=score_code,
        input_variables=input_vars,
        output_variables=output_vars
    )
\`\`\`

### Model Monitoring

\`\`\`
Monitoring Capabilities:
├── Performance Drift
│   └── Track accuracy over time
├── Data Drift
│   └── Input distribution changes
├── Stability
│   └── Prediction stability
└── Alerts
    └── Threshold breaches
\`\`\`

## Model Deployment

### REST API Scoring

\`\`\`python
import requests

# Score new patient
score_url = "https://viya.company.com/microanalyticScore/modules/readmission_model/steps/score"
headers = {"Authorization": f"Bearer {token}"}

patient_data = {
    "inputs": [{
        "name": "age", "value": 75
    }, {
        "name": "los", "value": 5
    }, {
        "name": "prior_admits", "value": 2
    }]
}

response = requests.post(score_url, headers=headers, json=patient_data)
prediction = response.json()["outputs"][0]["value"]
\`\`\`

### Batch Scoring

\`\`\`sas
/* Score batch in CAS */
proc astore;
    score data=mycaslib.new_patients
          rstore=mycaslib.readmit_model
          out=mycaslib.scored_patients;
run;
\`\`\`

## FDA Validation

### 21 CFR Part 11 Compliance

\`\`\`
Compliance Features:
├── Audit Trails
│   └── All model changes logged
├── Electronic Signatures
│   └── Model approval workflow
├── Access Controls
│   └── Role-based permissions
└── Data Integrity
    └── Version control, immutable history
\`\`\`

## Kernbegrippen

- **Model Studio**: Visual ML development environment
- **Model Manager**: Deployment en monitoring
- **ASTORE**: Analytic store voor scoring
- **Champion Model**: Best performing model
- **Model Drift**: Degradatie van model performance
    `,
    sources: [
      { name: "SAS Viya ML Documentation", url: "https://documentation.sas.com/doc/en/capcdc/default/capmlovw/titlepage.htm" },
      { name: "SAS Model Manager", url: "https://documentation.sas.com/doc/en/mdlmgrcdc/default/mdlmgrug/titlepage.htm" }
    ]
  },

  "104.7": {
    title: "SAS Visual Analytics voor Zorginzichten",
    summary: "Self-service analytics en dashboards met SAS Visual Analytics.",
    content: `
## In het kort

SAS Visual Analytics (VA) biedt krachtige self-service BI capabilities voor zorginstellingen. Het combineert in-memory analytics met interactieve visualisaties.

## SAS Visual Analytics Overview

### Componenten

\`\`\`
SAS Visual Analytics:
├── VA Designer
│   └── Report en dashboard creatie
├── VA Viewer
│   └── Consumptie van reports
├── VA Explorer
│   └── Self-service data verkenning
└── VA Mobile
    └── iOS/Android apps
\`\`\`

### Architectuur

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    SAS Visual Analytics                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Designer   │  │   Viewer    │  │  Explorer   │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
│         │                │                 │                 │
│         └────────────────┼─────────────────┘                 │
│                          │                                   │
│                          ▼                                   │
│         ┌────────────────────────────────┐                  │
│         │    LASR Analytic Server        │                  │
│         │    (In-Memory Analytics)        │                  │
│         └────────────────────────────────┘                  │
│                          │                                   │
│                          ▼                                   │
│         ┌────────────────────────────────┐                  │
│         │      Data Sources              │                  │
│         │  (CAS, SAS Datasets, DBs)      │                  │
│         └────────────────────────────────┘                  │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Healthcare Dashboards

### Executive Dashboard

\`\`\`
┌────────────────────────────────────────────────────────────┐
│              Healthcare Executive Dashboard                  │
├─────────────────────┬──────────────────────────────────────┤
│  KPI Indicators     │                                       │
│  ┌─────┐ ┌─────┐   │  Admissions Trend                     │
│  │ 487 │ │ 4.2 │   │  ────────────────────────────────     │
│  │Admit│ │ LOS │   │  ╱╲    ╱╲                             │
│  └─────┘ └─────┘   │ ╱  ╲  ╱  ╲    ╱╲                      │
│  ┌─────┐ ┌─────┐   │╱    ╲╱    ╲  ╱  ╲                     │
│  │ 87% │ │ 8.2%│   │           ╲╱                          │
│  │ Occ │ │Read│   │  Jan  Feb  Mar  Apr  May               │
│  └─────┘ └─────┘   │                                       │
├─────────────────────┼──────────────────────────────────────┤
│  Department         │  Patient Mix                          │
│  Performance        │  [Pie Chart]                          │
│  [Bar Chart]        │  ● Emergency 35%                      │
│  ████ Surgery       │  ● Planned 45%                        │
│  ███ Cardio         │  ● Day Care 20%                       │
│  ██ Oncology        │                                       │
└─────────────────────┴──────────────────────────────────────┘
\`\`\`

### Operationeel Dashboard

\`\`\`
┌────────────────────────────────────────────────────────────┐
│                    Real-time Bed Management                 │
├────────────────────────────────────────────────────────────┤
│  Floor 3 - Cardiology                                       │
│  ┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐       │
│  │ 🟢 │ 🔴 │ 🟢 │ 🟡 │ 🔴 │ 🟢 │ 🟢 │ 🔴 │ 🟡 │ 🟢 │       │
│  │301 │302 │303 │304 │305 │306 │307 │308 │309 │310 │       │
│  └────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘       │
│                                                             │
│  Legend: 🟢 Available  🔴 Occupied  🟡 Pending Discharge    │
│                                                             │
│  Occupancy: 70%    Expected Discharges Today: 3             │
└────────────────────────────────────────────────────────────┘
\`\`\`

## Berekende Items

### Calculated Fields

\`\`\`sas
/* In VA Designer */
/* Length of Stay */
LOS = datdif(admission_date, discharge_date, 'actual');

/* Readmission Flag */
Readmit_30d = ifn(
    datdif(prior_discharge, admission_date, 'actual') <= 30,
    1, 0
);

/* Risk Score Category */
Risk_Category = ifc(
    risk_score >= 0.7, 'High',
    ifc(risk_score >= 0.4, 'Medium', 'Low')
);
\`\`\`

### Aggregations

\`\`\`sas
/* Custom aggregations */
/* Rolling 30-day average */
Rolling_Avg_Admits = rollingavg(admissions, 30);

/* Year-over-year comparison */
YoY_Change = (current_year_admissions - prior_year_admissions)
             / prior_year_admissions * 100;
\`\`\`

## Interactivity

### Actions

\`\`\`
Available Actions:
├── Filter
│   └── Click to filter related visuals
├── Drill
│   └── Navigate to detail level
├── Link
│   └── Open related report
└── External URL
    └── Open external application
\`\`\`

### Parameters

\`\`\`
Parameter: Selected_Department
Type: Character
Prompt: "Select Department"
Values: [Dynamic from data]

Usage in Filter:
WHERE department = &Selected_Department
\`\`\`

## Report Distribution

### Scheduling

\`\`\`
Schedule Options:
├── Frequency
│   ├── Daily, Weekly, Monthly
│   └── Event-based (data refresh)
├── Format
│   ├── PDF
│   ├── Excel
│   └── Image
└── Distribution
    ├── Email
    ├── File system
    └── SharePoint
\`\`\`

### Mobile Access

\`\`\`
SAS Visual Analytics App:
├── iOS (iPad, iPhone)
├── Android (Tablet, Phone)
└── Features
    ├── Offline access
    ├── Touch interactions
    └── Push notifications
\`\`\`

## Data Security

### Row-Level Security

\`\`\`sas
/* Data-level security via metadata */
proc metalib;
    omrlib "Foundation/Data Sources";
    select (hospital_data);
    run;

    /* Apply row-level permission */
    row permission hospital_data
        where department in (
            select department from user_permissions
            where user_id = &_username
        );
run;
\`\`\`

## Kernbegrippen

- **VA Designer**: Tool voor report creatie
- **LASR**: In-memory analytic server
- **Calculated Item**: Berekende velden in reports
- **Action**: Interactieve navigatie
- **Parameters**: Dynamische filters
    `,
    sources: [
      { name: "SAS Visual Analytics", url: "https://documentation.sas.com/doc/en/vacdc/default/vaov/titlepage.htm" },
      { name: "VA Designer Guide", url: "https://documentation.sas.com/doc/en/vacdc/default/vareportdata/titlepage.htm" }
    ]
  },

  "104.8": {
    title: "Migratie naar SAS on Azure: Strategie en Uitvoering",
    summary: "Migratiestrategieën voor het verplaatsen van SAS workloads naar Azure.",
    content: `
## In het kort

Veel zorginstellingen hebben legacy SAS 9.4 implementaties die migratie naar cloud vereisen. Deze module behandelt strategieën voor migratie naar SAS Viya on Azure.

## Migratie Drivers

### Waarom Migreren?

\`\`\`
Business Drivers:
├── Schaalbaarheid
│   └── Elastische compute resources
├── Kosten
│   └── Pay-as-you-go vs perpetual licenses
├── Innovatie
│   └── Cloud-native features, AI/ML
├── Integratie
│   └── Azure ecosysteem
└── Onderhoud
    └── Verminder operationele last
\`\`\`

### Migratie Uitdagingen

\`\`\`
Challenges:
├── Legacy Code
│   └── SAS 9.4 code compatibiliteit
├── Data Movement
│   └── Grote datasets naar cloud
├── Integraties
│   └── Bestaande ETL, reporting
├── Skills
│   └── Team training nodig
└── Governance
    └── Compliance in cloud
\`\`\`

## Migratie Strategieën

### Strategie 1: Lift & Shift

\`\`\`
On-Premises SAS 9.4 → SAS 9.4 on Azure VMs

Voordelen:
├── Snelste pad naar cloud
├── Minimale code changes
└── Bekende omgeving

Nadelen:
├── Niet cloud-native
├── Beperkte schaalvoordelen
└── Legacy architectuur
\`\`\`

### Strategie 2: Hybrid Transitie

\`\`\`
Phase 1: Keep SAS 9.4 on-prem
         Deploy Viya on Azure

Phase 2: Migrate workloads gradually
         SAS 9.4 → Viya

Phase 3: Decommission on-prem
         Full cloud
\`\`\`

### Strategie 3: Full Modernization

\`\`\`
On-Premises SAS 9.4 → SAS Viya on Azure (Kubernetes)

Voordelen:
├── Cloud-native benefits
├── Modern architecture
├── Best scalability
└── Latest features

Nadelen:
├── Langste migratie
├── Code refactoring nodig
└── Hoogste investering
\`\`\`

## Migratie Planning

### Assessment Fase

\`\`\`
Inventory:
├── Code Inventory
│   ├── Number of programs
│   ├── Lines of code
│   └── Complexity analysis
├── Data Inventory
│   ├── Dataset sizes
│   ├── Data sources
│   └── Refresh frequencies
├── User Inventory
│   ├── User types
│   ├── Access patterns
│   └── Skills assessment
└── Integration Inventory
    ├── Upstream sources
    ├── Downstream consumers
    └── APIs/interfaces
\`\`\`

### Compatibility Assessment

\`\`\`sas
/* Tool: SAS Migration Assessment */
proc migrate;
    analyze programs="C:\\SAS\\Programs"
            outdata=work.compatibility;
    report outfile="migration_report.html";
run;

/* Check results */
proc freq data=work.compatibility;
    tables compatibility_status / missing;
run;
\`\`\`

## Code Migratie

### Compatibiliteit SAS 9.4 → Viya

\`\`\`
Compatibel:
├── Base SAS procedures
├── Macro language
├── SQL procedure
└── Most DATA steps

Requires Changes:
├── Enterprise Miner → Model Studio
├── DI Studio → Data Studio
├── Metadata Server → SAS Viya APIs
└── Some I/O methods
\`\`\`

### Code Refactoring

\`\`\`sas
/* SAS 9.4 Code */
libname mydata "C:\\Data\\Healthcare";
proc means data=mydata.patients;
    var age los;
run;

/* SAS Viya Code */
cas mysession;
caslib mycas datasource=(srctype="path")
    path="/data/healthcare";
proc casutil;
    load data=mycas.patients outcaslib="casuser";
run;
proc mdsummary data=casuser.patients;
    var age los;
run;
\`\`\`

## Data Migratie

### Data Movement Strategieën

\`\`\`
Options:
├── Bulk Transfer
│   └── Azure Data Box voor grote volumes
├── Incremental Sync
│   └── AzCopy voor ongoing sync
├── Hybrid Access
│   └── Shortcuts naar on-prem
└── Full Migration
    └── Convert en upload
\`\`\`

### Data Transfer

\`\`\`bash
# AzCopy voor data transfer
azcopy copy "C:\\SASData\\*" \\
    "https://storagesasviya.blob.core.windows.net/data" \\
    --recursive

# Estimate transfer time
# 1 TB @ 100 Mbps ≈ 24 hours
\`\`\`

## Validation

### Parallel Running

\`\`\`
Validation Approach:
├── Run jobs on both platforms
├── Compare outputs
│   ├── Row counts
│   ├── Checksums
│   └── Sample records
├── Performance comparison
└── User acceptance testing
\`\`\`

### Validation Script

\`\`\`sas
/* Compare outputs */
proc compare base=prod.patients
             compare=viya.patients
             out=work.diff;
run;

proc print data=work.diff (obs=10);
    where _type_ = 'DIF';
run;
\`\`\`

## Change Management

### Training Plan

\`\`\`
Training Tracks:
├── End Users
│   └── SAS Studio, Visual Analytics
├── Developers
│   └── Viya programming, CAS
├── Data Engineers
│   └── Data Studio, ETL
└── Administrators
    └── Viya admin, Kubernetes
\`\`\`

### Rollout Phases

\`\`\`
Phase 1: Pilot (Week 1-4)
├── Select pilot team
├── Migrate pilot workloads
└── Gather feedback

Phase 2: Expansion (Week 5-12)
├── Department by department
├── Training execution
└── Issue resolution

Phase 3: Full Production (Week 13-16)
├── Final migration
├── Decommission old system
└── Hypercare support
\`\`\`

## Kernbegrippen

- **Lift & Shift**: Verplaatsen zonder wijzigingen
- **Hybrid**: Geleidelijke transitie
- **Code Compatibility**: Mate van herbruikbaarheid
- **Parallel Running**: Validatie door vergelijking
- **Hypercare**: Intensieve post-migratie support
    `,
    sources: [
      { name: "SAS Migration Guide", url: "https://documentation.sas.com/doc/en/itopscdc/default/itopswn/p1h8znx0g7e0r0n1h5zz1qrkcvhx.htm" },
      { name: "SAS to Viya Migration", url: "https://communities.sas.com/t5/SAS-Communities-Library/Migrating-to-SAS-Viya/ta-p/726441" }
    ]
  },

  // ==========================================
  // TRACK 105: PLATFORM VERGELIJKING
  // ==========================================

  "105.1": {
    title: "Data Platform Landschap in de Zorg",
    summary: "Overzicht van het data platform landschap en de positionering van Databricks, Fabric en SAS.",
    content: `
## In het kort

Zorginstellingen staan voor een strategische keuze in data platforms. Deze module geeft een overzicht van het landschap en de positionering van de drie hoofdplatforms.

## Het Veranderende Landschap

### Van Legacy naar Modern

\`\`\`
2010s:                          2020s:
┌─────────────────┐            ┌─────────────────┐
│ Traditional DWH │            │   Lakehouse     │
│ + SAS/SPSS      │    →       │ + Cloud ML      │
│ + Cognos/BO     │            │ + Self-Service  │
└─────────────────┘            └─────────────────┘

Drivers:
├── Data volumes (10x groei)
├── Real-time requirements
├── AI/ML adoption
├── Cloud-first strategie
└── Skill availability
\`\`\`

## Platform Positionering

### De Drie Platforms

\`\`\`
                    Enterprise ←───────────────────→ Modern/Agile
                         │
                    ┌────┴────┐
                    │   SAS   │
                    │  Viya   │ Legacy strength
                    └─────────┘ Healthcare expertise
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   ┌────┴────┐     ┌────┴────┐     ┌────┴────┐
   │Microsoft│     │         │     │  Data   │
   │ Fabric  │     │  Hybrid │     │  bricks │
   └─────────┘     │  Multi- │     └─────────┘
   MS ecosystem    │ platform│     Open source
   Unified         │         │     ML-first
                   └─────────┘
\`\`\`

### Platform Karakteristieken

| Platform | Kern Identiteit | Sterkte |
|----------|-----------------|---------|
| Databricks | Data + AI Company | Open, ML-first |
| Microsoft Fabric | Unified Analytics | MS Integration |
| SAS | Analytics Leader | Statistics, Pharma |

## Marktontwikkelingen

### Convergentie Trends

\`\`\`
Alle platforms bewegen naar:
├── Lakehouse architectuur
│   └── Databricks: Delta Lake (origin)
│   └── Fabric: OneLake (Delta)
│   └── SAS: Cloud storage support
├── Cloud-native
│   └── Kubernetes, serverless
├── Open formats
│   └── Delta, Iceberg, Parquet
└── AI/ML Integration
    └── LLMs, GenAI features
\`\`\`

### Healthcare-specifieke Trends

\`\`\`
Zorg-specifieke requirements:
├── FHIR/DICOM ondersteuning
├── Regulatory compliance (FDA, CE)
├── Clinical validation
├── Privacy (AVG, HIPAA)
└── Interoperability
\`\`\`

## Platform in Nederlandse Zorg

### Huidige Adoptie

\`\`\`
Nederlandse Zorginstellingen:
├── SAS
│   └── Zorgverzekeraars (VGZ, CZ, Menzis)
│   └── Academische centra (research)
│   └── Farmaceutische industrie
├── Databricks
│   └── UMC's (data science)
│   └── Grote ziekenhuisgroepen
│   └── Health tech startups
└── Microsoft Fabric
    └── Ziekenhuizen met M365
    └── VVT-sector
    └── Huisartsen (via leveranciers)
\`\`\`

### Typische Scenario's

\`\`\`
Scenario 1: Academisch Ziekenhuis
├── Research: SAS (FDA compliance)
├── Operations: Fabric (M365)
└── Data Science: Databricks

Scenario 2: Regionaal Ziekenhuis
├── BI: Power BI / Fabric
├── EPD Analytics: Databricks
└── Legacy: Migrate from SAS

Scenario 3: Zorgverzekeraar
├── Claims: SAS (fraud, risk)
├── Customer: Fabric (D365)
└── Advanced: Databricks (ML)
\`\`\`

## Beslissingsframework

### Evaluatiecriteria

\`\`\`
├── 1. Business Requirements
│   └── Use cases, complexity
├── 2. Technical Fit
│   └── Data volumes, real-time needs
├── 3. Skills Availability
│   └── Team expertise, hiring market
├── 4. Total Cost of Ownership
│   └── Licenses, infrastructure, people
├── 5. Vendor Strategy
│   └── Cloud provider, existing contracts
└── 6. Regulatory Requirements
    └── Compliance, validation
\`\`\`

### Quick Assessment

\`\`\`
Kies SAS als:
├── FDA/clinical trials centraal
├── Bestaande SAS investering groot
└── Complexe statistiek requirement

Kies Fabric als:
├── Microsoft-first strategie
├── Unified platform gewenst
└── Power BI als BI-standaard

Kies Databricks als:
├── Data engineering zwaar
├── ML/AI als kern competentie
└── Multi-cloud of open source focus
\`\`\`

## Kernbegrippen

- **Lakehouse**: Unified data architecture
- **Multi-platform**: Gebruik van meerdere platforms
- **TCO**: Total Cost of Ownership
- **Platform Fit**: Match tussen platform en requirements
    `,
    sources: [
      { name: "Gartner Data Analytics Platforms", url: "https://www.gartner.com/reviews/market/analytics-business-intelligence-platforms" },
      { name: "Forrester Wave Analytics", url: "https://www.forrester.com/report/the-forrester-wave-enterprise-data-fabric-q2-2023" }
    ]
  },

  "105.2": {
    title: "Architectuurvergelijking: Lakehouse vs SAS",
    summary: "Technische vergelijking van lakehouse architecturen (Databricks, Fabric) met SAS.",
    content: `
## In het kort

De lakehouse architectuur van Databricks en Fabric verschilt fundamenteel van de traditionele SAS architectuur. Deze module vergelijkt de technische benaderingen.

## Architectuurparadigma's

### Lakehouse (Databricks/Fabric)

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                     LAKEHOUSE                                │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Query/Compute Layer                     │   │
│  │     (Spark, SQL Engine, Python/R)                   │   │
│  └────────────────────────┬────────────────────────────┘   │
│                           │                                  │
│  ┌────────────────────────▼────────────────────────────┐   │
│  │           Delta Lake / Table Format                  │   │
│  │  (ACID transactions, schema, time travel)           │   │
│  └────────────────────────┬────────────────────────────┘   │
│                           │                                  │
│  ┌────────────────────────▼────────────────────────────┐   │
│  │              Cloud Object Storage                    │   │
│  │        (ADLS, S3, GCS - Parquet files)              │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### SAS Viya

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      SAS VIYA                                │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │           Application Layer                          │   │
│  │  (Visual Analytics, Model Studio, SAS Studio)       │   │
│  └────────────────────────┬────────────────────────────┘   │
│                           │                                  │
│  ┌────────────────────────▼────────────────────────────┐   │
│  │              CAS (In-Memory Engine)                  │   │
│  │    (Cloud Analytic Services, distributed)           │   │
│  └────────────────────────┬────────────────────────────┘   │
│                           │                                  │
│  ┌────────────────────────▼────────────────────────────┐   │
│  │              Data Sources                            │   │
│  │   (SAS datasets, databases, cloud storage)          │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Gedetailleerde Vergelijking

### Storage Layer

| Aspect | Lakehouse | SAS |
|--------|-----------|-----|
| Format | Parquet/Delta (open) | SAS7BDAT (proprietary) |
| Storage | Cloud object storage | CAS libraries |
| Cost | €0.02/GB/month | Memory-based |
| Scaling | Unlimited | CAS cluster size |

### Compute Layer

| Aspect | Databricks | Fabric | SAS Viya |
|--------|------------|--------|----------|
| Engine | Spark | Spark/SQL | CAS |
| Scaling | Auto-scale clusters | Capacity-based | Node pools |
| Languages | SQL, Python, R, Scala | SQL, Python, Spark | SAS, Python, R |
| Serverless | Yes | Yes | Limited |

### Data Management

\`\`\`
Lakehouse:
├── Schema-on-read + Schema-on-write
├── Delta Lake transactions
├── Time travel (versioning)
└── Open formats (vendor neutral)

SAS:
├── Strong typing
├── Metadata-driven
├── Librefs & CASLIBs
└── Proprietary formats (mostly)
\`\`\`

## Performance Vergelijking

### Query Performance

\`\`\`
Test: 1 TB healthcare data aggregation

Databricks SQL Serverless:
├── Cold start: 15 seconds
├── Query time: 45 seconds
└── Cost: ~€2 per query

Fabric DW:
├── Cold start: 5 seconds
├── Query time: 50 seconds
└── Cost: Capacity-based

SAS Viya CAS:
├── Load to memory: 2 minutes
├── Query time: 30 seconds (in-memory)
└── Cost: Node-hours
\`\`\`

### ETL Performance

\`\`\`
Test: Daily ETL 100 GB increment

Databricks:
├── Auto Loader + DLT
├── Time: 15 minutes
└── Cluster: Auto-scale

Fabric:
├── Data Factory + Spark
├── Time: 20 minutes
└── Capacity: F16

SAS:
├── Data Integration Studio
├── Time: 25 minutes
└── Resources: CAS workers
\`\`\`

## Governance Vergelijking

### Data Governance

| Feature | Databricks | Fabric | SAS |
|---------|------------|--------|-----|
| Catalog | Unity Catalog | Purview | Metadata Server |
| Lineage | Automatic | Automatic | Manual |
| Access Control | Fine-grained | Row/Column | Role-based |
| Classification | Tags | Sensitivity labels | Limited |

### Compliance

\`\`\`
FDA 21 CFR Part 11:
├── SAS: Strong (decades of validation)
├── Databricks: Growing (MLflow)
├── Fabric: Via Azure compliance

AVG/HIPAA:
├── All: Supported
├── SAS: Built-in features
├── Lakehouse: Requires config
\`\`\`

## Integration Architecture

### Databricks Integration

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    Databricks                                │
├─────────────────────────────────────────────────────────────┤
│  Sources:           │  Outputs:                              │
│  ├── JDBC/ODBC     │  ├── BI Tools (JDBC)                  │
│  ├── Cloud Storage │  ├── ML Serving (REST)                │
│  ├── Kafka/Kinesis │  ├── Reverse ETL                      │
│  └── REST APIs     │  └── Cloud Storage                    │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Fabric Integration

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    Microsoft Fabric                          │
├─────────────────────────────────────────────────────────────┤
│  Sources:           │  Outputs:                              │
│  ├── 150+ connectors│  ├── Power BI (native)               │
│  ├── Dataverse     │  ├── Excel/Teams                      │
│  ├── OneLake shortcuts│├── ML endpoints                     │
│  └── Event streams │  └── Purview                          │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Kernbegrippen

- **CAS**: SAS in-memory compute engine
- **Delta Lake**: Open table format met ACID
- **OneLake**: Fabric unified storage
- **Schema-on-read**: Schema bepaald bij query
- **Proprietary Format**: Vendor-specifiek dataformaat
    `,
    sources: [
      { name: "Databricks Architecture", url: "https://docs.databricks.com/en/lakehouse-architecture/index.html" },
      { name: "Fabric Architecture", url: "https://learn.microsoft.com/en-us/fabric/get-started/microsoft-fabric-overview" }
    ]
  },

  "105.3": {
    title: "Healthcare Data Capabilities Vergeleken",
    summary: "Vergelijking van FHIR, DICOM en healthcare-specifieke features per platform.",
    content: `
## In het kort

Healthcare heeft specifieke data requirements: FHIR voor klinische data, DICOM voor beelden, en compliance voor regulatory. Deze module vergelijkt hoe elk platform deze adresseert.

## FHIR Ondersteuning

### Native FHIR Capabilities

| Feature | Databricks | Fabric | SAS |
|---------|------------|--------|-----|
| FHIR Server | Via Azure/partners | Azure Health Data Services | Niet native |
| FHIR Parsing | Libraries (Python) | Native connectors | Custom code |
| FHIR Analytics | SQL op JSON | Direct Lake | PROC JSON |
| FHIR Export | Delta Lake | OneLake | SAS datasets |

### FHIR Verwerking

\`\`\`
Databricks:
from fhir.resources import Patient
# Parse FHIR JSON, flatten, write Delta

Fabric:
Azure FHIR Service → $export → ADLS → OneLake shortcut

SAS:
proc json parse (fhir.json);
data work.patients; set json_output; ...
\`\`\`

## DICOM Ondersteuning

### Imaging Integration

| Feature | Databricks | Fabric | SAS |
|---------|------------|--------|-----|
| DICOM Server | Partners (Arterys) | Azure DICOM Service | Niet native |
| Metadata | PyDICOM libraries | Native connectors | Limited |
| Pixel Data | Spark ML pipelines | Via Azure | Not typical |
| AI/ML | MLflow, deep learning | Azure ML | Model Studio |

### DICOM Workflows

\`\`\`
Databricks:
PACS → DICOM files → PyDICOM extraction → Delta Lake → ML

Fabric:
PACS → Azure DICOM → Metadata export → OneLake

SAS:
DICOM metadata only (niet core competentie)
\`\`\`

## Healthcare Analytics

### Clinical Analytics

| Use Case | Databricks | Fabric | SAS |
|----------|------------|--------|-----|
| Population Health | ✓ Spark ML | ✓ Power BI | ✓ SAS Health |
| Quality Metrics | ✓ SQL/Python | ✓ Dataflows | ✓ Procedures |
| Clinical Research | ✓ MLflow | ✓ Notebooks | ✓✓ Gold standard |
| Real-time Monitoring | ✓ Streaming | ✓ Real-Time Intelligence | △ Limited |

### Regulatory Compliance

\`\`\`
FDA 21 CFR Part 11:
├── SAS: Validated systems, decades track record
│   └── Clinical Standards Toolkit
│   └── Audit trails native
│
├── Databricks: Growing
│   └── MLflow tracking
│   └── Unity Catalog audit
│   └── Partner solutions
│
└── Fabric: Via Azure
    └── Purview compliance
    └── Microsoft compliance center
    └── Less pharma-specific

Winner: SAS (voor FDA-regulated omgevingen)
\`\`\`

### CDISC Standards

\`\`\`
CDISC Support:
├── SAS
│   └── Native Clinical Standards Toolkit
│   └── SDTM, ADaM, Define-XML
│   └── FDA submission packages
│   └── Industrie standaard
│
├── Databricks
│   └── Partner solutions (Veeva, Medidata)
│   └── Custom development
│   └── OMOP via community
│
└── Fabric
    └── Healthcare Data Solutions
    └── OMOP mapping tools
    └── Growing ecosystem
\`\`\`

## Healthcare Data Models

### OMOP CDM Support

| Platform | OMOP Support | Implementation |
|----------|--------------|----------------|
| Databricks | Community packages | Delta tables |
| Fabric | Microsoft templates | Lakehouse |
| SAS | Custom | SAS datasets |

### Proprietary Models

\`\`\`
Databricks:
├── Open - geen proprietary model
├── Gebruik community standaarden
└── Partner solutions (Health Catalyst)

Fabric:
├── Microsoft Healthcare Data Model
├── Common Data Model integratie
└── Dynamics 365 healthcare

SAS:
├── SAS Health Information Framework
├── Claims data models
└── Population health models
\`\`\`

## Security & Privacy

### AVG/HIPAA Features

| Feature | Databricks | Fabric | SAS |
|---------|------------|--------|-----|
| Encryption at rest | ✓ CMK | ✓ CMK | ✓ |
| Encryption in transit | ✓ TLS 1.2+ | ✓ TLS 1.2+ | ✓ |
| Column-level masking | ✓ Unity | ✓ Purview | ✓ Metadata |
| Row-level security | ✓ Dynamic | ✓ Power BI | ✓ |
| Audit logging | ✓ System tables | ✓ Purview | ✓ |
| De-identification | Partner/custom | Custom | ✓ Native |

### PHI Handling

\`\`\`
Best PHI Support:
1. SAS - native healthcare focus, validation
2. Fabric - Purview integration, enterprise
3. Databricks - flexible but requires config
\`\`\`

## Partner Ecosystemen

### Healthcare Partners

\`\`\`
Databricks:
├── Health Catalyst
├── Innovaccer
├── Komodo Health
└── Veracyte

Fabric:
├── Nuance (DAX Copilot)
├── Epic (integration)
├── Teladoc
└── Philips

SAS:
├── IQVIA
├── Medidata
├── Parexel
└── PPD
\`\`\`

## Kernbegrippen

- **FHIR**: Fast Healthcare Interoperability Resources
- **DICOM**: Digital Imaging and Communications in Medicine
- **CDISC**: Clinical Data Interchange Standards
- **OMOP**: Observational Medical Outcomes Partnership
- **PHI**: Protected Health Information
    `,
    sources: [
      { name: "Azure Health Data Services", url: "https://learn.microsoft.com/en-us/azure/healthcare-apis/" },
      { name: "OHDSI OMOP", url: "https://www.ohdsi.org/data-standardization/" }
    ]
  },

  "105.4": {
    title: "Analytics en BI: Databricks SQL vs Power BI vs SAS VA",
    summary: "Vergelijking van analytics en BI capabilities: SQL interfaces, visualisatie en self-service.",
    content: `
## In het kort

Business Intelligence is cruciaal voor zorginstellingen. Deze module vergelijkt de analytics en BI capabilities van de drie platforms.

## BI Tools Overview

### Native BI Tools

\`\`\`
Databricks:
└── Databricks SQL (queries + dashboards)

Microsoft Fabric:
└── Power BI (volledig geïntegreerd)

SAS:
└── SAS Visual Analytics
\`\`\`

## SQL Capabilities

### SQL Engines

| Feature | Databricks SQL | Fabric DW | SAS SQL |
|---------|----------------|-----------|---------|
| ANSI SQL | ✓ Spark SQL | ✓ T-SQL | ✓ PROC SQL |
| Performance | Photon engine | Direct Lake | CAS |
| Concurrency | High (serverless) | Capacity-based | Node-based |
| Cost Model | Per-query | Capacity | License |

### Healthcare SQL Examples

\`\`\`sql
-- Databricks SQL
SELECT
    department,
    AVG(length_of_stay) as avg_los,
    COUNT(*) / COUNT(DISTINCT DATE(admission_date)) as daily_avg
FROM gold.admissions
WHERE admission_date >= DATE_SUB(CURRENT_DATE(), 30)
GROUP BY department;

-- Fabric T-SQL
SELECT
    department,
    AVG(DATEDIFF(day, admission_date, discharge_date)) as avg_los,
    COUNT(*) * 1.0 / COUNT(DISTINCT CAST(admission_date as DATE)) as daily_avg
FROM gold.admissions
WHERE admission_date >= DATEADD(day, -30, GETDATE())
GROUP BY department;

-- SAS SQL
PROC SQL;
SELECT
    department,
    MEAN(intck('day', admission_date, discharge_date)) as avg_los,
    COUNT(*) / COUNT(DISTINCT datepart(admission_date)) as daily_avg
FROM gold.admissions
WHERE admission_date >= intnx('day', today(), -30)
GROUP BY department;
QUIT;
\`\`\`

## Visualisatie Vergelijking

### Dashboard Capabilities

| Feature | Databricks | Power BI | SAS VA |
|---------|------------|----------|--------|
| Chart types | Basic | Extensive | Extensive |
| Interactivity | Filters, drill | Full | Full |
| Mobile | Limited | Native apps | Native apps |
| Embedding | iframes | Native SDK | Web parts |
| Real-time | ~1 min | DirectQuery | LASR |

### Healthcare Dashboard

\`\`\`
Functionaliteit vergelijking:

Executive Dashboard:
├── Databricks: SQL queries + simple charts
├── Power BI: Rich visuals, KPIs, custom visuals
├── SAS VA: Statistical visuals, gauges

Operationeel:
├── Databricks: Basic, needs BI tool
├── Power BI: Streaming tiles, auto-refresh
├── SAS VA: In-memory refresh, geo maps

Klinisch:
├── Databricks: Partner tools needed
├── Power BI: Custom visuals, R/Python
├── SAS VA: Statistical controls, forecasting
\`\`\`

## Self-Service Analytics

### End-User Experience

\`\`\`
Databricks:
├── SQL Editor (analysts)
├── Notebooks (data scientists)
├── Genie (natural language - preview)
└── Learning curve: Medium-High

Power BI:
├── Power BI Desktop (drag-drop)
├── Power BI Service (web)
├── Copilot (AI-assisted)
└── Learning curve: Low-Medium

SAS VA:
├── VA Explorer (drag-drop)
├── VA Designer (advanced)
├── SAS Studio (coding)
└── Learning curve: Medium
\`\`\`

### Citizen Data Scientist Support

| Feature | Databricks | Power BI | SAS VA |
|---------|------------|----------|--------|
| No-code analytics | Limited | Excellent | Good |
| AutoML | ✓ | ✓ (basic) | ✓ |
| Natural language | Genie (preview) | Q&A, Copilot | Limited |
| Data prep | Moderate | Power Query | Good |

## Integration met Platforms

### BI Tool Connectivity

\`\`\`
Databricks lakehouse:
├── Native: Databricks SQL dashboards
├── Power BI: Partner connector
├── Tableau: Partner connector
├── Looker: JDBC

Fabric OneLake:
├── Native: Power BI Direct Lake
├── Tableau: JDBC/ODBC
├── Other: Limited

SAS Viya:
├── Native: SAS Visual Analytics
├── Power BI: ODBC connector
├── Tableau: ODBC connector
\`\`\`

## Advanced Analytics in BI

### Statistical Features

| Feature | Databricks | Power BI | SAS VA |
|---------|------------|----------|--------|
| Forecasting | Basic | Built-in | Advanced |
| Clustering | Via ML | Built-in | Built-in |
| What-if | Limited | Parameters | Scenarios |
| R/Python visuals | Via notebooks | ✓ | ✓ |

### Healthcare Analytics

\`\`\`
Quality Metrics:
├── Power BI: Best for operational KPIs
├── SAS VA: Best for statistical analysis
├── Databricks: Best for complex calculations

Clinical Research:
├── SAS VA: Native statistical procedures
├── Databricks: Custom notebooks
├── Power BI: Needs R/Python visuals
\`\`\`

## Collaboration

### Sharing & Collaboration

| Feature | Databricks | Power BI | SAS VA |
|---------|------------|----------|--------|
| Sharing | Links, embed | Workspaces, apps | Reports, links |
| Comments | Limited | ✓ | ✓ |
| Subscriptions | Alerts | Email, Teams | Email |
| Versioning | Git | Deployment pipelines | Folders |

## Kernbegrippen

- **Direct Lake**: Power BI mode voor OneLake
- **Photon**: Databricks query engine
- **LASR**: SAS in-memory analytic server
- **Citizen Data Scientist**: Business user die analytics doet
- **Self-Service BI**: Gebruikers maken eigen reports
    `,
    sources: [
      { name: "Databricks SQL", url: "https://docs.databricks.com/sql/index.html" },
      { name: "Power BI Documentation", url: "https://learn.microsoft.com/en-us/power-bi/" }
    ]
  },

  "105.5": {
    title: "Machine Learning Platforms Vergeleken",
    summary: "Vergelijking van ML capabilities: MLflow vs Azure ML vs SAS Model Manager.",
    content: `
## In het kort

Machine Learning is steeds belangrijker in de zorg. Deze module vergelijkt de ML platforms en hun geschiktheid voor healthcare use cases.

## ML Platform Overview

### Native ML Tools

\`\`\`
Databricks:
├── MLflow (open source, origin)
├── Feature Store
├── Model Serving
└── AutoML

Microsoft Fabric:
├── Azure ML integration
├── Synapse ML
├── MLflow (compatible)
└── Model deployment

SAS Viya:
├── Model Studio (visual)
├── SAS Studio (code)
├── Model Manager (governance)
└── Model Repository
\`\`\`

## ML Development

### Development Experience

| Aspect | Databricks | Fabric/Azure ML | SAS Viya |
|--------|------------|-----------------|----------|
| Primary interface | Notebooks | Studio + Notebooks | Model Studio |
| Languages | Python, R, Scala | Python, R | SAS, Python, R |
| AutoML | ✓ Extensive | ✓ | ✓ |
| Feature Store | ✓ Native | ✓ | Limited |
| Experiment tracking | MLflow | MLflow/Azure ML | Built-in |

### Healthcare ML Development

\`\`\`python
# Databricks - Readmission prediction
import mlflow
from sklearn.ensemble import GradientBoostingClassifier

with mlflow.start_run():
    model = GradientBoostingClassifier(n_estimators=100)
    model.fit(X_train, y_train)

    mlflow.log_metric("auc", roc_auc_score(y_test, model.predict_proba(X_test)[:,1]))
    mlflow.sklearn.log_model(model, "readmission_model")
\`\`\`

\`\`\`python
# Azure ML / Fabric
from azure.ai.ml import MLClient
from sklearn.ensemble import GradientBoostingClassifier

# Similar sklearn code, different tracking
mlflow.autolog()
model = GradientBoostingClassifier()
model.fit(X_train, y_train)
\`\`\`

\`\`\`sas
/* SAS Viya - Model Studio pipeline of code */
proc gradboost data=mycaslib.patients;
    target readmit_30d;
    input age los comorbidities / level=interval;
    savestate rstore=mycaslib.readmit_model;
run;
\`\`\`

## Model Governance

### MLOps Capabilities

| Feature | Databricks | Azure ML | SAS Model Manager |
|---------|------------|----------|-------------------|
| Model Registry | MLflow | Azure ML | Native |
| Versioning | ✓ | ✓ | ✓ |
| Staging (dev/prod) | ✓ | ✓ | ✓ |
| A/B Testing | ✓ | ✓ | Limited |
| Monitoring | ✓ | ✓ | ✓ |
| Drift detection | ✓ | ✓ | ✓ |
| Audit trail | ✓ | ✓ | ✓✓ (FDA) |

### Model Validation

\`\`\`
Validation Requirements:

Clinical/FDA:
├── SAS: Best - decades of validation experience
│   └── IQ/OQ/PQ documentation
│   └── Audit trails native
│   └── 21 CFR Part 11 compliant
│
├── Databricks: Growing
│   └── MLflow tracking
│   └── Custom validation frameworks
│   └── Partner solutions
│
└── Azure ML: Good
    └── Responsible AI dashboard
    └── Model cards
    └── Azure compliance
\`\`\`

## Model Deployment

### Deployment Options

| Option | Databricks | Fabric | SAS |
|--------|------------|--------|-----|
| REST API | Model Serving | Azure ML endpoints | MAS |
| Batch scoring | Jobs | Pipelines | Batch jobs |
| Edge/embedded | ONNX export | ONNX | SAS Micro Analytic Service |
| Real-time | Serverless | Managed endpoints | CAS |

### Healthcare Deployment

\`\`\`
Use Case: Real-time risk scoring

Databricks:
├── Model Serving endpoint
├── Latency: ~100ms
├── Scaling: Auto
└── Integration: REST API

Fabric/Azure ML:
├── Managed online endpoint
├── Latency: ~150ms
├── Scaling: Auto
└── Integration: REST API

SAS:
├── MAS (Micro Analytic Service)
├── Latency: ~50ms (in-memory)
├── Scaling: Container-based
└── Integration: REST API
\`\`\`

## Specialty: Healthcare ML

### Clinical ML Support

| Feature | Databricks | Azure ML | SAS |
|---------|------------|----------|-----|
| Survival analysis | Libraries | Libraries | Native PROC |
| Clinical trials | Partners | Partners | Native toolkit |
| Fairness/bias | Fairlearn | RAI Dashboard | Built-in |
| Explainability | SHAP, LIME | InterpretML | Built-in |
| FDA validation | Custom | Custom | Native |

### Deep Learning

| Feature | Databricks | Azure ML | SAS |
|---------|------------|----------|-----|
| Frameworks | PyTorch, TF | PyTorch, TF | DL procedures |
| GPU support | ✓ | ✓ | ✓ |
| Distributed | ✓ Horovod | ✓ | ✓ |
| Medical imaging | ✓ | ✓ MONAI | Limited |

## Cost Comparison

### ML Workload Costs

\`\`\`
Training 10 models, 1TB data:

Databricks:
├── Cluster: 4x Standard_E8s_v5
├── Time: 4 hours
├── Cost: ~€150

Azure ML:
├── Compute: Standard_E8s_v5
├── Time: 5 hours
├── Cost: ~€120

SAS Viya:
├── CAS: 4 workers
├── Time: 3 hours
├── Cost: License-based (varies)
\`\`\`

## Kernbegrippen

- **MLflow**: Open-source ML lifecycle platform
- **Feature Store**: Centrale opslag voor ML features
- **Model Registry**: Versioning en staging van modellen
- **MLOps**: DevOps voor Machine Learning
- **Model Drift**: Degradatie van model performance over tijd
    `,
    sources: [
      { name: "MLflow Documentation", url: "https://mlflow.org/docs/latest/index.html" },
      { name: "Azure ML", url: "https://learn.microsoft.com/en-us/azure/machine-learning/" }
    ]
  },

  "105.6": {
    title: "Governance en Compliance Vergelijking",
    summary: "Vergelijking van data governance, compliance en security features.",
    content: `
## In het kort

Governance en compliance zijn kritisch in de zorg. Deze module vergelijkt hoe elk platform data governance, security en regulatory compliance adresseert.

## Governance Frameworks

### Platform Governance Tools

\`\`\`
Databricks:
└── Unity Catalog
    ├── Centralized metastore
    ├── Fine-grained access control
    ├── Data lineage
    └── Audit logging

Microsoft Fabric:
└── Microsoft Purview
    ├── Data catalog
    ├── Sensitivity labels
    ├── Lineage
    └── Compliance center

SAS:
└── SAS Information Governance
    ├── Metadata Server
    ├── Business glossary
    ├── Data quality
    └── Access management
\`\`\`

## Access Control

### Authorization Models

| Feature | Unity Catalog | Purview | SAS |
|---------|---------------|---------|-----|
| Table-level | ✓ | ✓ | ✓ |
| Column-level | ✓ | ✓ | ✓ |
| Row-level | ✓ Dynamic | ✓ Power BI | ✓ |
| Attribute-based | Limited | ✓ | Limited |
| Just-in-time | Via AD | PIM | Custom |

### Healthcare Access Patterns

\`\`\`
Scenario: Afdeling-based toegang

Databricks (Unity Catalog):
CREATE FUNCTION dept_filter(dept STRING)
RETURN current_user() LIKE '%' || dept || '%';
ALTER TABLE patients SET ROW FILTER dept_filter ON (department);

Fabric (Power BI RLS):
[Department] = LOOKUPVALUE(
    UserDepartments[Dept],
    UserDepartments[Email],
    USERPRINCIPALNAME()
)

SAS:
proc metalib;
    where department in (
        select dept from user_access where user=&_username
    );
run;
\`\`\`

## Data Lineage

### Lineage Capabilities

| Feature | Databricks | Fabric | SAS |
|---------|------------|--------|-----|
| Auto-capture | ✓ Unity | ✓ Purview | Manual |
| Cross-platform | Limited | ✓ (Azure) | Limited |
| Impact analysis | ✓ | ✓ | ✓ |
| Visual lineage | ✓ | ✓ | ✓ |

### Healthcare Lineage

\`\`\`
Tracking data from source to report:

Epic EMR → Bronze Table → Silver Table → Gold Table → Dashboard
    │           │              │              │           │
    └───────────┴──────────────┴──────────────┴───────────┘
                         Lineage tracked

Best: Fabric (Purview enterprise lineage)
Good: Databricks (Unity within workspace)
Limited: SAS (metadata server, less visual)
\`\`\`

## Compliance

### Regulatory Compliance

| Regulation | Databricks | Fabric | SAS |
|------------|------------|--------|-----|
| AVG/GDPR | ✓ | ✓✓ | ✓ |
| HIPAA | ✓ BAA | ✓ BAA | ✓ |
| FDA 21 CFR 11 | Partners | Partners | ✓✓ Native |
| SOC 2 | ✓ | ✓ | ✓ |
| ISO 27001 | ✓ | ✓ | ✓ |
| NEN 7510 | Via config | Via config | Via config |

### FDA Compliance Detail

\`\`\`
FDA 21 CFR Part 11 Requirements:

Electronic Signatures:
├── SAS: Native support, validated
├── Databricks: Custom implementation
├── Fabric: Via Azure AD + custom

Audit Trails:
├── SAS: Comprehensive, FDA-proven
├── Databricks: Unity system tables
├── Fabric: Purview + custom

System Validation:
├── SAS: IQ/OQ/PQ templates, decades experience
├── Databricks: Partner solutions, growing
├── Fabric: Azure compliance, less pharma-specific
\`\`\`

## Security

### Security Features

| Feature | Databricks | Fabric | SAS |
|---------|------------|--------|-----|
| Encryption at rest | ✓ CMK | ✓ CMK | ✓ |
| Encryption in transit | ✓ TLS | ✓ TLS | ✓ |
| Private networking | Private Link | Private endpoints | VPC |
| SSO | SAML, SCIM | Azure AD | SAML |
| MFA | Via IdP | ✓ Native | Via IdP |
| Secret management | DBricks Secrets | Key Vault | Vault |

### Data Classification

\`\`\`
Automatic PII/PHI Detection:

Fabric + Purview:
├── Auto-classification
├── Sensitivity labels
├── Data loss prevention
├── Information protection
└── Best for enterprise classification

Databricks + Unity:
├── Tags (manual/auto)
├── Column masking
├── Limited auto-detection
└── Good for data engineering

SAS:
├── Data quality rules
├── Manual classification
├── Metadata-driven
└── Less automated
\`\`\`

## Audit & Monitoring

### Audit Capabilities

| Feature | Databricks | Fabric | SAS |
|---------|------------|--------|-----|
| Query logging | System tables | Purview | Metadata server |
| Data access logs | ✓ | ✓ | ✓ |
| Admin actions | ✓ | ✓ | ✓ |
| Retention | Configurable | 90 days + archive | Configurable |
| Export | SQL query | Export to storage | Reports |

### Healthcare Audit Requirements

\`\`\`
NEN 7513 Logging (Dutch Healthcare):

Who: User identity
├── All platforms: ✓

What: Data accessed
├── All platforms: ✓

When: Timestamp
├── All platforms: ✓

Why: Purpose/ground
├── SAS: Can be configured
├── Others: Requires custom implementation

Winner for NEN 7513: Requires custom work on all platforms
\`\`\`

## Kernbegrippen

- **Unity Catalog**: Databricks governance layer
- **Purview**: Microsoft data governance platform
- **Row-Level Security**: Data filtering per user
- **CMK**: Customer-Managed Keys
- **21 CFR Part 11**: FDA electronic records regulation
    `,
    sources: [
      { name: "Unity Catalog Security", url: "https://docs.databricks.com/data-governance/unity-catalog/index.html" },
      { name: "Microsoft Purview Compliance", url: "https://learn.microsoft.com/en-us/purview/purview" }
    ]
  },

  "105.7": {
    title: "TCO en Licensing Modellen",
    summary: "Total Cost of Ownership vergelijking en licensing modellen van de drie platforms.",
    content: `
## In het kort

De kosten van data platforms zijn complex en omvatten meer dan alleen licenties. Deze module vergelijkt de TCO en licensing modellen.

## Licensing Modellen

### Model Overview

\`\`\`
Databricks:
├── Consumption-based (DBU)
├── Per workload type (SQL, ML, etc.)
├── Commitment discounts available
└── Cloud infrastructure separate

Microsoft Fabric:
├── Capacity-based (CU)
├── All-inclusive (compute + storage)
├── Per-user voor Power BI
└── Reservations for discount

SAS:
├── Named user licenses
├── Server-based licenses
├── Annual subscription
└── Perpetual + maintenance options
\`\`\`

## Cost Components

### Databricks Costs

\`\`\`
DBU Rates (Azure, approximate):
├── Jobs Light: €0.15/DBU
├── Jobs: €0.30/DBU
├── SQL Serverless: €0.55/DBU
├── SQL Pro: €0.35/DBU
├── ML Runtime: €0.40/DBU
└── Photon: Premium pricing

Example Monthly:
├── 10 users, moderate usage
├── Data engineering: 5000 DBU × €0.30 = €1,500
├── SQL analytics: 2000 DBU × €0.35 = €700
├── ML: 1000 DBU × €0.40 = €400
├── Azure infra: ~€1,000
├── Total: ~€3,600/month
\`\`\`

### Microsoft Fabric Costs

\`\`\`
Capacity Units (approximate):
├── F2: ~€250/month (dev)
├── F4: ~€500/month
├── F8: ~€1,000/month
├── F16: ~€2,000/month
├── F32: ~€4,000/month
├── F64: ~€8,000/month

Power BI licensing:
├── Pro: €9.40/user/month
├── Premium Per User: €18.70/user/month

Example Monthly:
├── 50 users, F16 capacity
├── Fabric F16: €2,000
├── Power BI Pro (50): €470
├── Storage (5TB): ~€100
├── Total: ~€2,570/month
\`\`\`

### SAS Costs

\`\`\`
SAS Licensing (indicative):
├── SAS Viya: €200-500K/year base
├── Per named user: €1,000-5,000/year
├── Server cores: €10,000-50,000/core/year
├── Maintenance: 20-25% of license/year

Example Annual:
├── 20 analysts, mid-size
├── Viya base: €300,000
├── Users (20): €60,000
├── Maintenance: €90,000
├── Infrastructure: €50,000
├── Total: ~€500,000/year (~€42K/month)
\`\`\`

## TCO Comparison

### 3-Year TCO Model

\`\`\`
Scenario: Mid-size ziekenhuis, 50 analytics users

┌─────────────────┬────────────┬────────────┬────────────┐
│ Component       │ Databricks │   Fabric   │    SAS     │
├─────────────────┼────────────┼────────────┼────────────┤
│ Year 1          │            │            │            │
│ - Licenses      │    €0      │   €28K     │   €400K    │
│ - Compute       │   €45K     │   €24K     │   incl     │
│ - Storage       │    €5K     │    €5K     │    €10K    │
│ - Implementation│   €80K     │   €60K     │   €120K    │
│ - Training      │   €30K     │   €20K     │    €40K    │
│ Subtotal Y1     │  €160K     │  €137K     │   €570K    │
├─────────────────┼────────────┼────────────┼────────────┤
│ Year 2-3        │            │            │            │
│ - Annual ops    │   €50K     │   €30K     │    €50K    │
│ - Compute/lic   │   €90K     │   €56K     │   €800K    │
│ Subtotal Y2-3   │  €140K     │   €86K     │   €850K    │
├─────────────────┼────────────┼────────────┼────────────┤
│ 3-Year Total    │  €440K     │  €309K     │  €1,990K   │
│ Per user/year   │   €2.9K    │   €2.1K    │   €13.3K   │
└─────────────────┴────────────┴────────────┴────────────┘

Note: SAS includes premium features/support
\`\`\`

## Hidden Costs

### Vaak Vergeten Kosten

\`\`\`
Databricks:
├── Cloud egress charges
├── Cluster idle time
├── Premium support (10-20% extra)
├── Unity Catalog (premium tier)
└── Third-party tools

Fabric:
├── Additional Power BI licenses
├── Premium capacity for features
├── Purview licensing (governance)
├── Azure Monitor (logging)
└── Disaster recovery capacity

SAS:
├── Additional modules (separate)
├── Upgrade/migration costs
├── Specialized training
├── Consulting (high rates)
└── Infrastructure maintenance
\`\`\`

## Cost Optimization

### Optimization Strategies

\`\`\`
Databricks:
├── Use spot instances (60-90% savings)
├── Auto-termination clusters
├── Serverless SQL for ad-hoc
├── Reserved capacity (1-3 year)
└── Right-size clusters

Fabric:
├── Pause capacity during off-hours
├── Use appropriate capacity tier
├── Optimize DirectQuery vs Import
├── Reserved capacity discount
└── Consolidate workspaces

SAS:
├── Negotiate multi-year deals
├── Remove unused modules
├── Optimize user licensing
├── Cloud vs on-prem analysis
└── Consider SAS Cloud
\`\`\`

## ROI Considerations

### Value Drivers

\`\`\`
Platform value beyond cost:

Databricks:
├── Data engineering efficiency: +30%
├── ML time-to-production: -50%
├── Open/portable: reduced lock-in

Fabric:
├── M365 productivity gains
├── Unified platform: -20% tooling
├── Self-service adoption: +40%

SAS:
├── Regulatory compliance: priceless
├── Statistical accuracy: critical
├── Existing skills: reduced training
\`\`\`

## Kernbegrippen

- **DBU**: Databricks Unit (consumption metric)
- **CU**: Capacity Unit (Fabric metric)
- **TCO**: Total Cost of Ownership
- **Spot Instances**: Discounted compute
- **Reserved Capacity**: Commitment discount
    `,
    sources: [
      { name: "Databricks Pricing", url: "https://www.databricks.com/product/pricing" },
      { name: "Microsoft Fabric Pricing", url: "https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/" }
    ]
  },

  "105.8": {
    title: "Platform Selectie Framework voor Zorginstellingen",
    summary: "Praktisch framework voor platform selectie met beslisboom en aanbevelingen.",
    content: `
## In het kort

Het kiezen van het juiste data platform is een strategische beslissing. Deze module biedt een praktisch framework voor platform selectie in zorginstellingen.

## Selectie Framework

### Stap 1: Requirements Assessment

\`\`\`
Dimensies te beoordelen:

1. Business Requirements
   ├── Use cases (operations, research, clinical)
   ├── User types (analysts, data scientists, executives)
   └── Urgency en priorities

2. Technical Requirements
   ├── Data volumes en groei
   ├── Real-time needs
   ├── Integration requirements
   └── Existing architecture

3. Organizational Factors
   ├── Skills en expertise
   ├── Change readiness
   └── IT maturity

4. Compliance Requirements
   ├── Regulatory (FDA, NEN, AVG)
   ├── Audit needs
   └── Data sovereignty

5. Financial Constraints
   ├── Budget (CAPEX/OPEX)
   ├── TCO horizon
   └── Funding model
\`\`\`

### Stap 2: Platform Fit Score

\`\`\`
Score matrix (1-5 per criterium):

                    Databricks  Fabric    SAS
────────────────────────────────────────────────
Data Engineering        5         4        3
ML/AI                   5         4        4
Self-Service BI         3         5        4
Statistical Analysis    3         3        5
Real-time Analytics     4         5        3
Microsoft Integration   3         5        2
Regulatory Compliance   3         4        5
Healthcare Specific     3         4        5
Cost Efficiency         4         4        2
Open/Portable           5         3        2
────────────────────────────────────────────────
\`\`\`

## Beslisboom

### Primaire Use Case

\`\`\`
Start: Wat is de primaire driver?

├── "We doen klinische trials / FDA submissions"
│   └── → SAS (regulatory expertise)
│
├── "We willen ML/AI op schaal"
│   └── → Databricks (ML-first platform)
│
├── "We zijn Microsoft-shop, willen unified platform"
│   └── → Fabric (M365 integratie)
│
├── "We hebben bestaande SAS investering"
│   ├── Moderniseren op Azure?
│   │   └── → SAS on Azure
│   └── Migreren naar modern platform?
│       └── → Databricks of Fabric
│
└── "We starten greenfield"
    └── → Fabric (lowest barrier) of Databricks (most capable)
\`\`\`

### Organisatie Type

\`\`\`
Organisatie Type:

Academisch Ziekenhuis / UMC:
├── Research heavy → SAS + Databricks
├── Operations → Fabric
└── Recommendation: Multi-platform

Groot Ziekenhuis (non-academic):
├── Operational focus → Fabric
├── Data science ambitions → Databricks
└── Recommendation: Fabric primary, Databricks for ML

Regionaal Ziekenhuis:
├── Limited resources → Fabric
├── M365 existing → Fabric
└── Recommendation: Fabric

Zorgverzekeraar:
├── Claims/fraud → SAS
├── Customer analytics → Fabric
├── Advanced analytics → Databricks
└── Recommendation: SAS + Fabric

VVT / Thuiszorg:
├── Simple needs → Fabric
├── Budget constrained → Fabric
└── Recommendation: Fabric
\`\`\`

## Scenario Aanbevelingen

### Scenario 1: Data-Driven Transformation

\`\`\`
Situatie:
- Groot ziekenhuis, M365 gebruiker
- Wil data-driven worden
- Beperkte data science resources
- Budget bewust

Aanbeveling: Microsoft Fabric
├── Unified platform, lower complexity
├── Power BI already adopted
├── Good starting point
├── Can add Databricks later for ML
\`\`\`

### Scenario 2: ML/AI Ambitions

\`\`\`
Situatie:
- UMC met research focus
- Significant data science team
- Complex ML use cases
- Existing Spark/Python skills

Aanbeveling: Databricks
├── Best ML/AI platform
├── Open source ecosystem
├── Scale for research
├── Unity Catalog for governance
\`\`\`

### Scenario 3: Regulatory Heavy

\`\`\`
Situatie:
- Farmaceutische partner
- Clinical trial analytics
- FDA submission requirements
- Existing SAS skills

Aanbeveling: SAS Viya on Azure
├── Regulatory compliance proven
├── CDISC native support
├── Leverage existing investment
├── Cloud benefits on Azure
\`\`\`

### Scenario 4: Hybrid Approach

\`\`\`
Situatie:
- Large healthcare system
- Diverse requirements
- Multiple user types
- Budget available

Aanbeveling: Multi-platform
├── Fabric: BI, self-service, M365 users
├── Databricks: Data engineering, ML
├── SAS: Where regulatory required
├── Integration via Delta Lake / OneLake
\`\`\`

## Implementation Roadmap

### Phased Approach

\`\`\`
Phase 1: Foundation (Month 1-3)
├── Platform setup
├── Governance framework
├── Initial data ingestion
└── Pilot use case

Phase 2: Expansion (Month 4-6)
├── Additional use cases
├── User training
├── Integration expansion
└── Performance tuning

Phase 3: Optimization (Month 7-12)
├── Advanced use cases
├── ML/AI implementation
├── Cost optimization
└── Center of Excellence

Phase 4: Scale (Year 2+)
├── Enterprise rollout
├── Multi-platform integration
├── Innovation initiatives
└── Continuous improvement
\`\`\`

## Success Factors

### Critical Success Factors

\`\`\`
1. Executive Sponsorship
   └── Budget, priority, change leadership

2. Clear Use Cases
   └── Start with value, not technology

3. Skills Development
   └── Training, hiring, partnerships

4. Governance First
   └── Data quality, security, compliance

5. Iterative Approach
   └── Pilot, learn, scale
\`\`\`

## Kernbegrippen

- **Platform Fit**: Match tussen platform en requirements
- **Multi-platform**: Strategisch gebruik van meerdere platforms
- **Greenfield**: Nieuwe implementatie zonder legacy
- **CoE**: Center of Excellence
- **Phased Implementation**: Gefaseerde uitrol
    `,
    sources: [
      { name: "Gartner Healthcare Analytics", url: "https://www.gartner.com/en/industries/healthcare-providers" },
      { name: "KLAS Research", url: "https://klasresearch.com" }
    ]
  }
}

export const getModuleContent = (moduleId) => {
  return moduleContent[moduleId] || null
}
