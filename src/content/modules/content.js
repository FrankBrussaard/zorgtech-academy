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
  }
}

export const getModuleContent = (moduleId) => {
  return moduleContent[moduleId] || null
}
