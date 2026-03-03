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

## Meer weten?

Voor uitgebreide visualisaties en verdieping over het zorgstelsel is het platform "Zo werkt de zorg" een uitstekende bron. De app en boeken geven helder inzicht in alle aspecten van de Nederlandse zorg.

Zie ook **Track 7: Zorgdomeinen Deep Dive** voor verdieping per zorgsector.

## Kernbegrippen

- **Zvw**: Zorgverzekeringswet - de verplichte basisverzekering
- **Wlz**: Wet langdurige zorg - voor blijvende intensieve zorg
- **Wmo**: Wet maatschappelijke ondersteuning - gemeentelijke ondersteuning
    `,
    sources: [
      { name: "Rijksoverheid - Zorgstelsel", url: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering" },
      { name: "Zorginstituut Nederland", url: "https://www.zorginstituutnederland.nl" },
      { name: "Zo werkt de zorg", url: "https://www.zowerktdezorg.nl" }
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
  },

  // ============================================
  // TRACK 7: ZORGDOMEINEN DEEP DIVE
  // ============================================

  "7.1": {
    title: "Huisartsenzorg: Organisatie & Bekostiging",
    summary: "De huisarts is de spil van de Nederlandse eerstelijnszorg. Deze module behandelt praktijkvormen, ondersteuners, huisartsenposten en het bekostigingsmodel.",
    content: `
## In het kort

De huisartsenzorg is de basis van het Nederlandse zorgstelsel. Ongeveer 13.000 huisartsen zijn de 'poortwachter' en eerste aanspreekpunt voor patiënten. Het bekostigingsmodel combineert inschrijftarieven met verrichtingen en ketenzorg.

## Organisatie van de huisartsenpraktijk

### Praktijkvormen

**Overzicht praktijkvormen in Nederland:**

- **Solopraktijk** (afnemend) - Eén huisarts, eigen praktijk
- **Duopraktijk** - Twee huisartsen, gedeelde praktijk
- **Groepspraktijk** - 3+ huisartsen, vaak HOED
- **Gezondheidscentrum** - Multidisciplinair: huisarts, fysiotherapie, apotheek
- **HOED** (Huisartsen Onder Eén Dak) - Gedeelde locatie, onafhankelijke praktijken

### Praktijkondersteuners (POH)

De huisarts wordt ondersteund door:

| Functie | Takenpakket |
|---------|-------------|
| **POH-Somatiek** | Chronische zorg: diabetes, COPD, hart-vaatziekten |
| **POH-GGZ** | Psychische klachten, basis-GGZ in de praktijk |
| **POH-Ouderen** | Kwetsbare ouderen, polyfarmacie |
| **Doktersassistent** | Triage, administratie, eenvoudige verrichtingen |
| **Verpleegkundig specialist** | Zelfstandige behandeling binnen protocol |

## Huisartsenposten (HAP)

Voor spoedzorg buiten kantoortijd (ANW: Avond, Nacht, Weekend):

- Ongeveer 120 HAP's in Nederland
- Regionale samenwerking huisartsen
- Triage via NTS (Nederlands Triage Systeem)
- Urgentiecategorieën: U0-U5
- Integratie met SEH (spoedeisende hulp)

## Bekostigingsmodel

De huisarts ontvangt inkomsten uit drie segmenten:

### Segment 1: Inschrijftarieven
- Vast bedrag per ingeschreven patiënt per kwartaal
- Gedifferentieerd naar leeftijd en achterstandswijk
- Ongeveer 20-50 euro per patiënt per kwartaal

### Segment 2: Verrichtingen (consulten)
- Consulttarief kort/lang (10-35 euro)
- Visites (huisbezoek)
- Specifieke verrichtingen (bijv. spirometrie)

### Segment 3: Ketenzorg & resultaatbeloning
- Integrale bekostiging chronische zorg (DM2, COPD, VRM)
- Bundled payment via zorggroepen
- Prestatie-indicatoren

## Relevante organisaties

- **LHV**: Landelijke Huisartsen Vereniging (beroepsorganisatie)
- **NHG**: Nederlands Huisartsen Genootschap (richtlijnen, standaarden)
- **InEen**: Vereniging van zorggroepen en huisartsenposten
- **VPH**: Vereniging Praktijkhoudende Huisartsen

## Kernbegrippen

- **POH**: Praktijkondersteuner Huisarts
- **HAP**: Huisartsenpost
- **NTS**: Nederlands Triage Systeem
- **Zorggroep**: Organisatie voor ketenzorg
- **HOED**: Huisartsen Onder Eén Dak
    `,
    sources: [
      { name: "LHV - Landelijke Huisartsen Vereniging", url: "https://www.lhv.nl" },
      { name: "NHG - Nederlands Huisartsen Genootschap", url: "https://www.nhg.org" },
      { name: "Zo werkt de zorg - Huisartsenzorg", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "7.2": {
    title: "Ouderenzorg & VVT: Van Thuiszorg tot Verpleeghuis",
    summary: "De ouderenzorg omvat een breed spectrum van thuiszorg tot verpleeghuis. Deze module behandelt de organisatie, bekostiging en belangrijke spelers in de VVT-sector.",
    content: `
## In het kort

De Verpleging, Verzorging en Thuiszorg (VVT) sector verzorgt miljoenen Nederlanders. Van lichte hulp thuis tot intensieve verpleeghuiszorg - deze module legt uit hoe de sector is georganiseerd en gefinancierd.

## Het spectrum van ouderenzorg

**Van licht naar zwaar:**

| Setting | Financiering | Voorbeeld |
|---------|--------------|-----------|
| Hulp thuis | Wmo (gemeente) | Huishoudelijke hulp |
| Wijkverpleging | Zvw (verzekeraar) | Verpleging aan huis |
| Verzorgingshuis | Wlz (zorgkantoor) | Wonen met zorg |
| Verpleeghuis | Wlz (zorgkantoor) | 24-uurs verpleging |

## CIZ-indicatie en zorgprofielen

Het Centrum Indicatiestelling Zorg (CIZ) bepaalt Wlz-toegang:

**Zorgprofielen VV (Verpleging & Verzorging):**

- VV1-VV4: Beschut wonen met toenemende begeleiding/verzorging
- VV5: Beschermd wonen met intensieve dementiezorg
- VV6-VV8: Beschermd wonen met intensieve verpleging
- VV9-VV10: Herstelgerichte behandeling en palliatieve zorg

## Leveringsvormen Wlz

| Leveringsvorm | Omschrijving |
|--------------|--------------|
| **ZZP** | Verblijf in instelling, all-in tarief |
| **VPT** | Volledig Pakket Thuis - zorg als in instelling, maar thuis |
| **MPT** | Modulair Pakket Thuis - losse modules thuis |
| **PGB** | Persoonsgebonden budget, eigen regie |

## Belangrijke spelers

### Grote VVT-organisaties
Stichting Humanitas, Cordaan, Amstelring, Vivium Zorggroep, Surplus Zorg

### Brancheorganisaties
- **ActiZ**: Branchevereniging zorgondernemers (werkgevers)
- **V&VN**: Verpleegkundigen & Verzorgenden Nederland
- **LOC**: Belangenorganisatie cliënten

## Uitdagingen in de sector

- Personeelstekort (vacaturegraad meer dan 10%)
- Vergrijzing (dubbele vergrijzing)
- Kwaliteitstoezicht (IGJ)
- Wachtlijsten Wlz
- Digitalisering en domotica

## Kernbegrippen

- **VVT**: Verpleging, Verzorging en Thuiszorg
- **CIZ**: Centrum Indicatiestelling Zorg
- **Zorgkantoor**: Uitvoerder Wlz per regio
- **ZZP**: Zorgzwaartepakket
- **VPT/MPT**: Volledig/Modulair Pakket Thuis
    `,
    sources: [
      { name: "ActiZ - Branchevereniging", url: "https://www.actiz.nl" },
      { name: "CIZ - Centrum Indicatiestelling Zorg", url: "https://www.ciz.nl" },
      { name: "Zo werkt de zorg - Ouderenzorg", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "7.3": {
    title: "GGZ: Organisatie, Bekostiging & Zorgpaden",
    summary: "De geestelijke gezondheidszorg kent een complexe structuur met basis-GGZ, specialistische GGZ en forensische zorg. Deze module behandelt de organisatie en het zorgprestatiemodel.",
    content: `
## In het kort

De GGZ biedt hulp bij psychische klachten en stoornissen. Van gesprekken bij de huisarts tot langdurige klinische behandeling - de sector kent vele lagen en een nieuw bekostigingsmodel: het Zorgprestatiemodel (ZPM).

## Structuur van de GGZ

**Echelonering van licht naar zwaar:**

| Niveau | Doelgroep | Aanbieder |
|--------|-----------|-----------|
| POH-GGZ | Lichte klachten | Huisartsenpraktijk |
| Basis-GGZ | Licht tot matig | Basis-GGZ praktijken |
| Specialistische GGZ | Matig tot ernstig | GGZ-instellingen |
| Hoogspecialistisch | Zeer complex | Academische centra |

## Het Zorgprestatiemodel (ZPM)

Sinds 2022 het nieuwe bekostigingsmodel:

### Prestaties
- **Consulten**: Per 15/30/45/60 minuten, per beroep
- **Verblijfsprestaties**: Verblijf A t/m G (licht tot intensief)
- **Overige prestaties**: Acute GGZ, ECT, forensisch toezicht

### Voordelen ZPM
- Meer transparantie over geleverde zorg
- Betere vergelijkbaarheid tussen aanbieders
- Flexibeler dan DBC-traject

## Verwijsroute en wachttijden

**Treeknormen wachttijden:**
- Aanmelding tot intake: max 4 weken
- Intake tot behandeling: max 10 weken

## Belangrijke GGZ-instellingen

Parnassia Groep (grootste), GGZ inGeest, GGNet, Lentis, Pro Persona

## Branche en toezicht

- **GGZ Nederland**: Branchevereniging
- **IGJ**: Inspectie voor kwaliteit
- **NZa**: Bekostiging en marktwerking
- **Zorginstituut**: Pakketbeheer

## Kernbegrippen

- **ZPM**: Zorgprestatiemodel
- **SGGZ**: Specialistische GGZ
- **POH-GGZ**: Praktijkondersteuner GGZ bij huisarts
- **Treeknormen**: Maximale wachttijden
- **ROM**: Routine Outcome Monitoring
    `,
    sources: [
      { name: "GGZ Nederland", url: "https://www.ggznederland.nl" },
      { name: "NZa - Zorgprestatiemodel", url: "https://www.nza.nl" },
      { name: "Zo werkt de zorg - GGZ", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "7.4": {
    title: "Geneesmiddelenzorg & Farmacie",
    summary: "De farmaceutische zorg omvat de verstrekking, bewaking en advisering rond geneesmiddelen. Deze module behandelt de apotheeksector, medicatiebewaking en preferentiebeleid.",
    content: `
## In het kort

De farmacie speelt een cruciale rol in de zorgketen. Apotheken verstrekken jaarlijks meer dan 200 miljoen recepten en zorgen voor medicatiebewaking. Het preferentiebeleid bepaalt welke merken worden vergoed.

## De apotheeksector

**Typen apotheken:**
- **Openbare apotheek** - Zelfstandig of in keten
- **Ziekenhuisapotheek** - Klinische farmacie
- **Poliklinische apotheek** - Dure geneesmiddelen
- **Online apotheek** - Bezorging aan huis

### Grote apotheekketens
BENU, Alphega, Mediq, Service Apotheek

## Taken van de apotheek

| Taak | Omschrijving |
|------|--------------|
| **Ter hand stellen** | Verstrekken van geneesmiddelen |
| **Medicatiebewaking** | Controle op interacties, contra-indicaties |
| **Voorlichting** | Uitleg over gebruik en bijwerkingen |
| **Magistrale bereiding** | Op maat gemaakte medicatie |
| **Farmaceutische zorg** | Begeleiding bij therapietrouw |

## Medicatiebewaking

**Controles bij verstrekking:**
- Dubbelcheck (juiste patiënt, middel, dosis)
- Interactiecontrole (wisselwerking met andere medicatie)
- Contra-indicatiecheck (past bij ziektebeeld)
- Allergiecheck (bekende overgevoeligheden)
- Doseercheck (juiste dosering voor leeftijd/gewicht)

## Preferentiebeleid

Zorgverzekeraars bepalen welk merk bij generieke middelen wordt vergoed:
- Arts schrijft werkzame stof voor
- Apotheek levert preferent merk van verzekeraar
- Lagere kosten voor verzekeraars
- Soms wisseling van merken voor patiënt

## Relevante organisaties

- **KNMP**: Koninklijke Nederlandse Maatschappij ter bevordering der Pharmacie
- **NVZA**: Nederlandse Vereniging van Ziekenhuisapothekers
- **CBG**: College ter Beoordeling van Geneesmiddelen
- **Lareb**: Bijwerkingencentrum

## Kernbegrippen

- **Preferentiebeleid**: Verzekeraar bepaalt vergoed merk
- **Interactie**: Ongewenste wisselwerking tussen middelen
- **Generiek**: Merkloze variant na patentverloop
- **TDM**: Therapeutic Drug Monitoring
- **AIS**: Apotheekinformatiesysteem
    `,
    sources: [
      { name: "KNMP", url: "https://www.knmp.nl" },
      { name: "Zorginstituut Nederland", url: "https://www.zorginstituutnederland.nl" },
      { name: "Zo werkt de zorg - Geneesmiddelenzorg", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "7.5": {
    title: "Sociaal Domein & Wmo",
    summary: "Het sociaal domein omvat gemeentelijke taken op het gebied van maatschappelijke ondersteuning, jeugdzorg en participatie.",
    content: `
## In het kort

Sinds de decentralisaties van 2015 zijn gemeenten verantwoordelijk voor grote delen van de zorg en ondersteuning. De Wmo, Jeugdwet en Participatiewet vormen samen het 'sociaal domein'.

## De drie decentralisaties

| Wet | Domein | Voorbeelden |
|-----|--------|-------------|
| **Wmo 2015** | Maatschappelijke ondersteuning | Begeleiding, beschermd wonen |
| **Jeugdwet** | Jeugdhulp | Jeugd-GGZ, jeugdbescherming |
| **Participatiewet** | Werk en inkomen | Re-integratie, bijstand |

## Wmo-voorzieningen

| Categorie | Voorbeelden |
|-----------|-------------|
| **Huishoudelijke hulp** | Schoonmaken, boodschappen |
| **Begeleiding** | Dagbesteding, individuele begeleiding |
| **Hulpmiddelen** | Rolstoel, scootmobiel |
| **Woningaanpassingen** | Traplift, douchezit |
| **Beschermd wonen** | Wonen met begeleiding |

## Het keukentafelgesprek

**Uitgangspunten:**
1. Wat is er aan de hand?
2. Wat wilt u bereiken?
3. Wat kunt u zelf?
4. Wat kan uw netwerk?
5. Wat heeft u nodig van de gemeente?

## Uitdagingen

- **Tekorten**: Gemeenten kampen met tekorten, vooral Jeugdwet
- **Wachtlijsten**: Met name specialistische jeugdhulp
- **Administratie**: Elke gemeente eigen beleid
- **Schotten**: Afstemming Wmo/Zvw/Wlz complex

## iWmo en iJw standaarden

Voor berichtenverkeer gemeente-aanbieder:
- **iWmo**: Standaard Wmo-berichten
- **iJw**: Standaard Jeugdwet-berichten
- **GGK**: Gemeentelijk Gegevensknooppunt

## Kernbegrippen

- **Wmo**: Wet maatschappelijke ondersteuning
- **Keukentafelgesprek**: Intake door gemeente
- **Maatwerkvoorziening**: Individuele voorziening
- **Eigen bijdrage**: Via CAK
    `,
    sources: [
      { name: "VNG", url: "https://vng.nl" },
      { name: "Rijksoverheid - Wmo", url: "https://www.rijksoverheid.nl/onderwerpen/wmo-2015" },
      { name: "Zo werkt de zorg - Sociaal Domein", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "7.6": {
    title: "Gehandicaptenzorg",
    summary: "De gehandicaptenzorg biedt ondersteuning aan mensen met een verstandelijke, lichamelijke of zintuiglijke beperking.",
    content: `
## In het kort

De gehandicaptenzorg ondersteunt mensen met een blijvende beperking om zo zelfstandig mogelijk te leven. Van lichte ambulante begeleiding tot intensieve woonzorg.

## Doelgroepen

| Type | Omschrijving |
|------|--------------|
| **VG** | Verstandelijke beperking (licht/matig/ernstig) |
| **LG** | Lichamelijke beperking (aangeboren of verworven) |
| **ZG** | Zintuiglijke beperking (visueel/auditief) |
| **Meervoudig** | Combinatie van beperkingen |

## Zorgprofielen VG

| Profiel | Omschrijving |
|---------|--------------|
| VG1-VG3 | Wonen met begeleiding (toenemend) |
| VG4-VG5 | Wonen met begeleiding en verzorging |
| VG6-VG7 | Intensieve begeleiding, gedragsregulering |
| VG8 | Volledige verzorging en verpleging |

## Persoonsgebonden budget (PGB)

- Eigen regie over zorginkoop
- Budget via SVB (Sociale Verzekeringsbank)
- Trekkingsrecht: zelf zorg inkopen
- Populair in gehandicaptenzorg

## Dagbesteding

- **Ontwikkelingsgericht**: Leren, activiteiten
- **Arbeidsgericht**: Beschutte werkplek
- **Belevingsgericht**: Zintuiglijke activatie
- **Ondersteunend**: Structuur bieden

## Belangrijke organisaties

**Grote zorgaanbieders**: 's Heeren Loo, Amerpoort, Dichterbij, Philadelphia, Koraal Groep

**Branche**: VGN (Vereniging Gehandicaptenzorg Nederland)

## Kernbegrippen

- **VG/LG/ZG**: Verstandelijk/Lichamelijk/Zintuiglijk Gehandicapt
- **PGB**: Persoonsgebonden Budget
- **NAH**: Niet-Aangeboren Hersenletsel
- **Dagbesteding**: Zinvolle daginvulling
    `,
    sources: [
      { name: "VGN", url: "https://www.vgn.nl" },
      { name: "CIZ", url: "https://www.ciz.nl" },
      { name: "Zo werkt de zorg - Gehandicaptenzorg", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "7.7": {
    title: "Publieke Gezondheidszorg & GGD",
    summary: "De publieke gezondheidszorg richt zich op preventie en volksgezondheid. Deze module behandelt de GGD, infectieziektebestrijding en de Wet publieke gezondheid.",
    content: `
## In het kort

De publieke gezondheidszorg beschermt de gezondheid van de bevolking. GGD'en voeren taken uit op het gebied van infectieziektebestrijding, jeugdgezondheidszorg en gezondheidsbevordering.

## Organisatie GGD

- 25 GGD-regio's in Nederland
- Gemeenschappelijke Regeling (samenwerking gemeenten)
- RIVM als landelijke partner
- GGD GHOR Nederland als koepel

## Kerntaken GGD

### Infectieziektebestrijding
- Meldingsplicht (Wet publieke gezondheid)
- Bron- en contactonderzoek
- Vaccinatieprogramma's
- Outbreakmanagement

### Jeugdgezondheidszorg (JGZ)
- Consultatiebureau (0-4 jaar)
- Schoolgezondheid (4-18 jaar)
- Vaccinaties (RVP)
- Groei en ontwikkeling volgen

### Gezondheidsbevordering
- Leefstijlinterventies
- Lokaal gezondheidsbeleid
- Preventiecoalities

## Meldingsplichtige ziekten

| Groep | Voorbeelden | Melding |
|-------|-------------|---------|
| **A** | Pokken, polio, SARS | Direct |
| **B1** | Mazelen, tuberculose | 24 uur |
| **B2** | Legionella | 24 uur |
| **C** | Hepatitis B, SOA's | 24 uur |

## Rijksvaccinatieprogramma (RVP)

Gecoordineerd door RIVM:
- DKTP-Hib-HepB (baby's)
- BMR, MenACWY (peuters)
- HPV (10 jaar)
- DTP herhaling (4 jaar)

## Kernbegrippen

- **GGD**: Gemeentelijke Gezondheidsdienst
- **RIVM**: Rijksinstituut voor Volksgezondheid en Milieu
- **Wpg**: Wet publieke gezondheid
- **RVP**: Rijksvaccinatieprogramma
- **JGZ**: Jeugdgezondheidszorg
    `,
    sources: [
      { name: "GGD GHOR Nederland", url: "https://ggdghor.nl" },
      { name: "RIVM", url: "https://www.rivm.nl" },
      { name: "Zo werkt de zorg - Publieke Gezondheidszorg", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  // Track 106: Huisartsenzorg IT & Digitalisering
  "106.1": {
    title: "HIS Systemen & Architectuur",
    summary: "Diepgaande kennis van Huisarts Informatie Systemen, architectuur en integraties",
    content: `
# HIS Systemen & Architectuur

## Wat is een HIS?

Het Huisarts Informatie Systeem (HIS) is het centrale informatiesysteem in de huisartsenpraktijk. Het ondersteunt alle primaire processen: van patiëntregistratie tot declaratie.

## Marktoverzicht HIS-leveranciers

| Leverancier | Systeem | Marktaandeel | Kenmerken |
|-------------|---------|--------------|-----------|
| PharmaPartners | Medicom | ~35% | Cloud-native, moderne interface |
| Chipsoft | Promedico-ASP | ~25% | Integratie met ziekenhuis (HiX) |
| Calculus | Omnihis | ~15% | Modulair, flexibel |
| Topicus | VIPLive | ~10% | Innovatief, open platform |
| CGM | CGM Huisarts | ~10% | Internationaal, robuust |

## Kernfunctionaliteiten

### Patiëntendossier (EPD-functie)
- Medische voorgeschiedenis
- Actuele medicatie
- Allergieën en intoleranties
- Consultverslagen (SOEP-registratie)
- Correspondentie en labwaarden

### Agenda en Planning
- Online afsprakensysteem
- Spreekuurtypes configuratie
- Herinneringen en recalls
- Capaciteitsplanning

### Medicatiemodule
- Voorschrijven met G-Standaard
- Interactiecontrole
- Herhaalreceptuur
- eRecept naar apotheek

### Declaratie en Financiën
- Automatische S-code bepaling
- Vektis declaratiebestanden
- COD016 verrichtingenlijst
- Financiële rapportages

## Technische Architectuur

### Deployment modellen
- **On-premise**: Lokale server in praktijk (verouderd)
- **Hosted**: Server bij leverancier, remote desktop
- **Cloud/SaaS**: Volledig web-based, moderne standaard

### Integratie-interfaces
- **HL7v2**: Berichten met lab/ziekenhuis
- **HL7 FHIR**: Moderne API-standaard
- **Edifact**: Declaratieverkeer
- **OZIS**: Ketenzorg portalen

### Koppelingen

| Type | Doel | Standaard |
|------|------|-----------|
| Laboratorium | Aanvragen en uitslagen | HL7v2, LOINC |
| Apotheek | Recepten | LSP, eRecept |
| Ziekenhuis | Verwijzingen, brieven | HL7v2, ZorgMail |
| Ketenzorg | DBC-registratie | OZIS |
| Patiëntportaal | Inzage, afspraken | FHIR, MedMij |

## Datastandaarden

### ICPC-2 (International Classification of Primary Care)
- Internationaal classificatiesysteem voor huisartsgeneeskunde
- Hoofdstukindeling A-Z (orgaansystemen)
- Episode-georiënteerd registreren

### NHG-tabel 25
- Nederlandse codelijst voor huisartsen
- Diagnostische codes en verrichtingen
- Koppeling met ICPC-2

### G-Standaard
- Geneesmiddelendatabank van Z-Index
- Basis voor voorschrijven en interactiecontrole
- Bevat alle in NL geregistreerde medicatie

## Kernbegrippen

- **HIS**: Huisarts Informatie Systeem
- **SOEP**: Subjectief, Objectief, Evaluatie, Plan
- **ICPC-2**: International Classification of Primary Care
- **G-Standaard**: Geneesmiddelendatabank
- **S-code**: Segment in huisartsendeclaratie
    `,
    sources: [
      { name: "NHG - ICT in de huisartsenzorg", url: "https://www.nhg.org" },
      { name: "Nictiz - Standaarden huisartsenzorg", url: "https://www.nictiz.nl" },
      { name: "Zo werkt de zorg - Huisartsenzorg", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "106.2": {
    title: "LSP & Huisartsenposten",
    summary: "Het Landelijk Schakelpunt in de huisartsenzorg en informatieuitwisseling bij HAP's",
    content: `
# LSP & Huisartsenposten

## Het Landelijk Schakelpunt (LSP)

### Wat is het LSP?
Het LSP is de landelijke infrastructuur voor uitwisseling van medische gegevens. Het wordt beheerd door VZVZ (Vereniging van Zorgaanbieders voor Zorgcommunicatie).

### Gegevenstypen in het LSP

| Type | Inhoud | Bron |
|------|--------|------|
| Professionele Samenvatting | Actuele medicatie, allergieën, diagnoses | Huisarts |
| Waarneemgegevens | Recente consulten voor waarneming | Huisarts |
| Medicatieoverzicht | Alle verstrekte medicatie | Apotheek |
| Labwaarden | Recente laboratoriumuitslagen | Laboratorium |

### Technische werking

1. **Patiënt geeft toestemming** (opt-in)
2. **Gegevens worden geïndexeerd** bij VZVZ
3. **Opvragend zorgverlener** (met UZI-pas) vraagt gegevens op
4. **LSP routeert** naar bronhouder
5. **Gegevens worden real-time** opgehaald en getoond

### Toestemmingsregistratie
- Patiënt geeft toestemming per gegevenssoort
- Registratie via huisarts of volgjezorg.nl
- Toestemming is intrekbaar
- Zorgverlener moet behandelrelatie hebben

## Huisartsenposten (HAP)

### Organisatie
- Regionale coöperaties van huisartsen
- Diensten buiten kantooruren
- Één centraal telefoonnummer per regio
- Triage door doktersassistenten

### Informatiesystemen HAP

| Component | Functie |
|-----------|---------|
| Triagesysteem | NTS-beslisondersteuning |
| Callcentersoftware | Telefonie, wachtrijen |
| HAP-HIS | Registratie dienstcontacten |
| Autorisatie | Toegang tot patiëntgegevens |

### Nederlandse Triage Standaard (NTS)
- Gestructureerde urgentiebepaling
- Vraaggestuurde beslisbomen
- 5 urgentiecategorieën (U0-U5)
- Koppeling met ambulancezorg (ProQA)

## Gegevensuitwisseling HAP-Huisarts

### Waarneemgegevens via LSP
Huisartsenpost kan opvragen:
- Actuele medicatie
- Recente voorgeschiedenis
- Allergieën
- Relevante episoden

### Terugkoppeling naar huisarts
- Gestructureerde waarneembrief
- Automatisch in HIS van eigen huisarts
- Bevat diagnose, behandeling, medicatie
- Actie-indicatie voor follow-up

## Spoedketen

### 112 vs HAP
- **112**: Levensbedreigende situaties (A1/A2)
- **HAP-nummer**: Acute maar niet levensbedreigend

### Overdracht naar SEH
- Digitale overdracht bij verwijzing
- Medicatieoverzicht via LSP
- Verwijsbrief elektronisch

## Regionale samenwerking

### VHN (Vereniging Huisartsenposten Nederland)
- Koepelorganisatie van HAP's
- Kwaliteitsstandaarden
- Landelijke afspraken

### InEen
- Vereniging van eerstelijnsorganisaties
- Ketenzorg en anderhalvelijnszorg
- Digitalisering ondersteuning

## Kernbegrippen

- **LSP**: Landelijk Schakelpunt
- **VZVZ**: Vereniging van Zorgaanbieders voor Zorgcommunicatie
- **HAP**: Huisartsenpost
- **NTS**: Nederlandse Triage Standaard
- **UZI-pas**: Unieke Zorgverlener Identificatie
    `,
    sources: [
      { name: "VZVZ - Landelijk Schakelpunt", url: "https://www.vzvz.nl" },
      { name: "InEen - Eerstelijnsorganisaties", url: "https://ineen.nl" },
      { name: "NHG - Samenwerking huisarts en HAP", url: "https://www.nhg.org" }
    ]
  },

  "106.3": {
    title: "Ketenzorg & Registratie",
    summary: "Ketenzorg DBC's, informatiesystemen en data-uitwisseling in programmatische zorg",
    content: `
# Ketenzorg & Registratie

## Wat is Ketenzorg?

Ketenzorg is georganiseerde multidisciplinaire zorg voor chronische aandoeningen. De huisarts is hoofdbehandelaar en coördineert de zorg.

## Ketenzorgprogramma's

| Keten | Aandoening | Disciplines |
|-------|------------|-------------|
| DM2 | Diabetes Mellitus type 2 | Huisarts, POH, diëtist, podotherapeut |
| COPD | Chronische longziekte | Huisarts, POH, fysiotherapeut, longarts |
| CVRM | Cardiovasculair risico | Huisarts, POH, cardioloog |
| Astma | Luchtwegaandoening | Huisarts, POH, longarts |
| GGZ | Psychische klachten | Huisarts, POH-GGZ, psycholoog |

## Bekostiging Ketenzorg

### Keten-DBC (Diagnose Behandel Combinatie)
- Integraal tarief per patiënt per jaar
- Zorggroep declareert bij verzekeraar
- Onderlinge verdeling via Zorggroep

### Tariefopbouw
- Consultmodule huisarts
- Module diagnostiek
- Module paramedische zorg
- Overhead zorggroep

### S3-prestatie
- Specifieke segment voor ketenzorg
- Los van reguliere huisartsconsulten
- Voorkomt dubbele bekostiging

## Zorggroepen

### Wat is een Zorggroep?
- Organisatie van huisartsen voor ketenzorg
- Contracteert met zorgverzekeraars
- Coördineert multidisciplinaire zorg
- Verzorgt declaraties en rapportages

### Taken Zorggroep
- Contractering en onderhandeling
- Kwaliteitsbeleid en benchmarking
- ICT-ondersteuning en portalen
- Scholing en intervisie

## Ketenzorg Informatiesystemen

### KIS (Keten Informatie Systeem)
Gespecialiseerd systeem voor:
- Overzicht ketenpatiënten
- Protocolgestuurde controles
- Uitval- en oproepsignalering
- Kwaliteitsindicatoren

### Integratie met HIS

| Koppeling | Functie |
|-----------|---------|
| Patiëntgegevens | Synchronisatie NAW en BSN |
| Meetwaarden | Lab, bloeddruk, gewicht |
| Medicatie | Actuele medicatielijst |
| Verrichtingen | Registratie voor declaratie |

### Portalen voor Ketenzorg
- **Portavita**: Marktleider ketenzorgportaal
- **OZIS**: Open standaard voor gegevensuitwisseling
- **VitalHealth**: Digitale zorgpaden

## Registratie en Indicatoren

### Benchmark Ketenzorg
- Landelijke vergelijking zorggroepen
- Proces- en uitkomstindicatoren
- Publiek beschikbaar via InEen

### Indicatoren DM2 (voorbeeld)

| Indicator | Type | Doel |
|-----------|------|------|
| HbA1c gemeten | Proces | >90% |
| HbA1c <53 mmol/mol | Uitkomst | >50% |
| Funduscontrole | Proces | >80% |
| Voetcontrole | Proces | >85% |

### NIVEL Zorgregistraties
- Landelijke database eerstelijnszorg
- Wetenschappelijk onderzoek
- Anonieme gegevensaanlevering

## Kernbegrippen

- **Keten-DBC**: Ketenzorg Diagnose Behandel Combinatie
- **Zorggroep**: Organisatie van huisartsen voor ketenzorg
- **KIS**: Keten Informatie Systeem
- **POH**: Praktijkondersteuner Huisarts
- **OZIS**: Open Zorg Informatie Stelsel
    `,
    sources: [
      { name: "InEen - Ketenzorg", url: "https://ineen.nl" },
      { name: "NZa - Bekostiging huisartsenzorg", url: "https://www.nza.nl" },
      { name: "NIVEL - Zorgregistraties", url: "https://www.nivel.nl" }
    ]
  },

  "106.4": {
    title: "Patiëntportalen & PGO",
    summary: "Digitale patiënttoegang, Persoonlijke Gezondheidsomgevingen en MedMij",
    content: `
# Patiëntportalen & PGO

## Ontwikkeling Patiëntportalen

### Generaties portalen

| Generatie | Periode | Kenmerken |
|-----------|---------|-----------|
| 1e generatie | 2010-2015 | Alleen afspraken maken |
| 2e generatie | 2015-2020 | Inzage dossier, herhaalrecepten |
| 3e generatie | 2020+ | PGO-koppeling, zelfmetingen |

### Functionaliteiten huidige portalen
- Online afspraken maken
- Inzage medisch dossier
- Herhaalrecepten aanvragen
- Uitslagen bekijken
- Berichten met praktijk
- eConsult

## Persoonlijke Gezondheidsomgeving (PGO)

### Wat is een PGO?
Een PGO is een app of website waar burgers zelf hun gezondheidsgegevens kunnen verzamelen uit verschillende bronnen.

### Kenmerken PGO
- Patiënt is eigenaar van de gegevens
- Verzamelt data uit meerdere bronnen
- Onafhankelijk van zorgverlener
- MedMij-gecertificeerd

### MedMij

| Aspect | Beschrijving |
|--------|--------------|
| Wat | Afsprakenstelsel voor gegevensuitwisseling |
| Wie | Beheerd door Stichting MedMij |
| Hoe | Standaarden en certificering |
| Doel | Veilige uitwisseling naar PGO's |

### MedMij Gegevensdiensten
- Basisgegevens Zorg (BgZ)
- Medicatieoverzicht
- Laboratoriumuitslagen
- Huisartswaarneming
- Vaccinaties

## Technische Architectuur

### MedMij Rollen

| Rol | Functie | Voorbeeld |
|-----|---------|-----------|
| Persoon | Gebruiker van PGO | Patiënt |
| PGO | App/website voor verzamelen | Quli, Drimpy |
| Dienstverlener | Bron van gegevens | Huisartsenpraktijk |
| DVP | Dienstverlener Persoon | Maakt koppeling mogelijk |
| DVZ | Dienstverlener Zorg | Ontsluit zorgsystemen |

### Authenticatie
- DigiD voor patiëntidentificatie
- UZI-pas voor zorgverlener (bij toevoegen)
- OAuth 2.0 voor autorisatie
- BSN als identificerend kenmerk

### Technische standaarden
- HL7 FHIR voor gegevensuitwisseling
- Zibs (Zorginformatiebouwstenen)
- IHE-profielen voor interoperabiliteit

## Zelfmetingen en Thuismonitoring

### Typen zelfmetingen
- Bloeddruk
- Bloedglucose
- Gewicht
- Saturatie
- Hartritme

### Integratie met HIS

| Stap | Proces |
|------|--------|
| 1 | Patiënt meet thuis |
| 2 | Data naar PGO of app |
| 3 | Overdracht naar HIS (MedMij/FHIR) |
| 4 | Verwerking door POH/huisarts |
| 5 | Feedback naar patiënt |

### Uitdagingen
- Betrouwbaarheid apparatuur
- Meetfrequentie en alarmen
- Werkbelasting praktijk
- Vergoeding thuismonitoring

## Voorbeelden PGO's

| PGO | Kenmerken |
|-----|-----------|
| Quli | Brede functionaliteit, veel koppelingen |
| Drimpy | Gebruiksvriendelijk, focus medicatie |
| PAZIO | Regio Utrecht, geïntegreerd portaal |
| Mijn Gezondheidsplatform | UMCU, academisch |

## Kernbegrippen

- **PGO**: Persoonlijke Gezondheidsomgeving
- **MedMij**: Afsprakenstelsel voor gegevensuitwisseling
- **Zibs**: Zorginformatiebouwstenen
- **BgZ**: Basisgegevens Zorg
- **DVP/DVZ**: Dienstverlener Persoon/Zorg
    `,
    sources: [
      { name: "MedMij", url: "https://www.medmij.nl" },
      { name: "Nictiz - PGO", url: "https://www.nictiz.nl" },
      { name: "VZVZ - Patiëntportalen", url: "https://www.vzvz.nl" }
    ]
  },

  // Track 107: GGZ Zorgdata & Systemen
  "107.1": {
    title: "GGZ EPD Systemen",
    summary: "Overzicht van EPD-systemen in de GGZ en specifieke functionaliteiten",
    content: `
# GGZ EPD Systemen

## GGZ IT-landschap

De GGZ heeft een eigen IT-landschap met gespecialiseerde EPD-systemen die voldoen aan de specifieke eisen van de geestelijke gezondheidszorg.

## Marktoverzicht GGZ EPD's

| Leverancier | Systeem | Marktpositie | Segment |
|-------------|---------|--------------|---------|
| Nedap | Ons | Marktleider | GGZ breed |
| Gerimedica | Ysis | Groot | GGZ, VVT |
| Chipsoft | HiX | Groot | Academisch, GGZ |
| User | EPD | Medium | GGZ instellingen |
| Adapcare | Pluriform | Medium | GGZ, verslavingszorg |

## Kernfunctionaliteiten GGZ EPD

### Dossiervoering
- Intakeregistratie en anamnese
- Behandelplannen en doelen
- Voortgangsnotities (decursus)
- Risicotaxaties en crisisplannen

### ROM (Routine Outcome Monitoring)

| Vragenlijst | Doel | Afnamemomenten |
|-------------|------|----------------|
| OQ-45 | Algemeen functioneren | Begin, tussentijds, einde |
| BSI | Klachtenintensiteit | Idem |
| HONOS | Ernst problematiek | Bij start en evaluatie |
| SQ-48 | Screeningsinstrument | Bij intake |

### Specifieke GGZ-modules
- **Medicatiebewaking**: Psychofarmaca, interacties
- **Crisiskaart**: Wilsverklaring en voorkeuren
- **Dwangregistratie**: Wvggz/Wzd verplicht
- **Suïcidepreventie**: Signaleringssysteem

## Behandelplan en Doelen

### Structuur behandelplan
1. Probleeminventarisatie
2. DSM-5 classificatie
3. Behandeldoelen (SMART)
4. Interventies
5. Evaluatiemomenten
6. Einddoelen

### Shared Decision Making
- Gezamenlijke besluitvorming
- Keuzekaarten en keuzehulpen
- Digitale ondersteuning

## Ambulant vs Klinisch

### Ambulante GGZ
- Poliklinische afspraken
- Behandeltrajecten
- FACT-teams (outreachend)

### Klinische GGZ
- Opnameregistratie
- Verblijfsdagen
- Observatie en rapportage
- Overdrachtsmomenten

## Integraties

| Koppeling | Doel |
|-----------|------|
| AGB/Vektis | Declaraties |
| SBG | Benchmarkgegevens |
| Apotheek | Medicatieverkeer |
| Huisarts | Verwijzing en terugkoppeling |
| Laboratorium | Spiegelbepalingen |

## Privacy en Beveiliging

### Extra GGZ-eisen
- Logging van dossierinzage
- Scheiding somatiek/psychiatrie bij voorkeur patiënt
- Specifieke autorisaties (behandelteam)
- Afschermingsmogelijkheden

### Wvggz Registratie
- Zorgmachtigingen
- Crisismaatregel
- Verplichte zorg registratie
- Evaluatie en beëindiging

## Kernbegrippen

- **ROM**: Routine Outcome Monitoring
- **HONOS**: Health of the Nation Outcome Scales
- **FACT**: Flexible Assertive Community Treatment
- **Wvggz**: Wet verplichte GGZ
- **SBG**: Stichting Benchmark GGZ
    `,
    sources: [
      { name: "GGZ Nederland", url: "https://www.ggznederland.nl" },
      { name: "Akwa GGZ - Kwaliteit", url: "https://www.akwaggz.nl" },
      { name: "SBG - Benchmark GGZ", url: "https://www.sbggz.nl" }
    ]
  },

  "107.2": {
    title: "Zorgvraagtypering & Bekostiging",
    summary: "Het nieuwe bekostigingsmodel voor de GGZ met zorgvraagtypering",
    content: `
# Zorgvraagtypering & Bekostiging

## Zorgprestatiemodel (ZPM)

Sinds 2022 geldt het Zorgprestatiemodel als bekostigingsmodel voor de GGZ en FZ. Dit vervangt de oude DBC-systematiek.

## Van DBC naar ZPM

| Aspect | DBC (tot 2022) | ZPM (vanaf 2022) |
|--------|----------------|------------------|
| Basis | Tijdschrijven in minuten | Consulten en verblijf |
| Looptijd | Max 365 dagen | Geen vaste looptijd |
| Heropening | Na 365 dagen nieuw DBC | Doorlopende behandeling |
| Zorgzwaarte | Via productgroepen | Via zorgvraagtypering |

## Zorgvraagtypering

### Wat is zorgvraagtypering?
Een instrument om de zorgvraag van de patiënt te classificeren. Het bepaalt welke zorg naar verwachting nodig is.

### Het HoNOS+ Instrument

| Domein | Items |
|--------|-------|
| Gedrag | Overactief, zelfverwonding, middelengebruik |
| Beperkingen | Cognitief, lichamelijk |
| Symptomen | Hallucinaties, depressie, andere symptomen |
| Sociaal | Relaties, ADL, wonen, werk |

### Van HoNOS+ naar Zorgvraagtype

HoNOS+ score resulteert in 1 van 15 zorgvraagtypes:
- Licht: type 1-3
- Matig: type 4-8
- Zwaar: type 9-12
- Zeer zwaar: type 13-15

## Prestaties in ZPM

### Consultprestaties

| Prestatie | Setting | Duur |
|-----------|---------|------|
| Consult diagnostiek | Diagnostische fase | Variabel |
| Consult behandeling | Behandelfase | Variabel |
| Groepsconsult | Groepsbehandeling | Per sessie |

### Verblijfsprestaties

| Prestatie | Kenmerken |
|-----------|-----------|
| Verblijf A | Lichte zorg |
| Verblijf B | Gemiddelde zorg |
| Verblijf C | Intensieve zorg |
| Verblijf D | Extra intensief |
| Verblijf E | Zeer intensief |
| Verblijf HIC | High Intensive Care |

### Overige prestaties
- Electroconvulsietherapie (ECT)
- Consultatie en medebehandeling
- Crisis

## Declaratieproces

### Stappen

1. Patiënt start behandeling
2. Intake en diagnostiek
3. Zorgvraagtypering via HoNOS+
4. Behandelconsulten registreren
5. Maandelijks/periodiek declareren
6. Zorgverzekeraar betaalt

### Vereisten declaratie
- BSN patiënt
- AGB-code zorgverlener
- Zorgvraagtype
- Prestatiecode
- Setting (ambulant/klinisch)
- Beroep behandelaar

## Verwijzing

### Verwijsmodel GGZ

| Segment | Verwijzer | Behandelaar |
|---------|-----------|-------------|
| Basis-GGZ | Huisarts | Psycholoog, POH-GGZ |
| Gespecialiseerde GGZ | Huisarts | Psychiater, klinisch psycholoog |
| Hoogspecialistische GGZ | Specialist | Topklinische centra |

### Informatie in verwijzing
- Reden verwijzing
- Vermoeden stoornis
- Voorgeschiedenis
- Medicatie
- Urgentie

## Kernbegrippen

- **ZPM**: Zorgprestatiemodel
- **HoNOS+**: Instrument voor zorgvraagtypering
- **Zorgvraagtype**: Classificatie zorgzwaarte (1-15)
- **Setting**: Ambulant, klinisch, of outreachend
- **Prestatie**: Declareerbare zorgeenheid
    `,
    sources: [
      { name: "NZa - Zorgprestatiemodel", url: "https://www.nza.nl" },
      { name: "Akwa GGZ - Zorgvraagtypering", url: "https://www.akwaggz.nl" },
      { name: "Zorgprestatiemodel.nl", url: "https://www.zorgprestatiemodel.nl" }
    ]
  },

  "107.3": {
    title: "ROM & Benchmarking",
    summary: "Routine Outcome Monitoring en landelijke benchmark in de GGZ",
    content: `
# ROM & Benchmarking

## Routine Outcome Monitoring

### Definitie
ROM is het systematisch meten van behandeluitkomsten met gevalideerde vragenlijsten, op meerdere momenten tijdens de behandeling.

### Doelen ROM

| Doel | Toelichting |
|------|-------------|
| Individueel | Behandeling evalueren en bijsturen |
| Team | Reflectie op behandelresultaten |
| Organisatie | Kwaliteitsverbetering |
| Landelijk | Benchmark en transparantie |

## ROM Instrumenten

### Generieke vragenlijsten

| Instrument | Items | Meet |
|------------|-------|------|
| OQ-45 | 45 | Symptomen, relaties, sociaal |
| BSI | 53 | Psychische klachten |
| MANSA | 16 | Kwaliteit van leven |
| SQ-48 | 48 | Screening stoornissen |

### Stoornisspecifieke lijsten

| Stoornis | Instrument |
|----------|------------|
| Depressie | BDI-II, PHQ-9, IDS |
| Angst | BAI, GAD-7 |
| PTSS | PCL-5 |
| Persoonlijkheid | SIPP-118 |
| Verslaving | MATE |

### Afnamemomenten
- **Voormeting (T0)**: Bij start behandeling
- **Tussenmeting (T1-Tn)**: Elke 3-6 maanden
- **Nameting**: Bij afsluiting
- **Follow-up**: 6-12 maanden na afsluiting

## Digitale ROM

### ROM-portalen
- Embloom
- Telepsy
- QuestManager
- MindDistrict

### Integratie met EPD
- Automatische uitnodigingen
- Resultaten in dossier
- Beslisondersteuning
- Tijdlijn visualisatie

## Stichting Benchmark GGZ (SBG)

### Taken SBG
- Verzamelen ROM-data landelijk
- Analyseren en vergelijken
- Terugkoppelen naar instellingen
- Publiceren openbare benchmark

### Gegevensaanlevering

| Element | Vereist |
|---------|---------|
| Geanonimiseerde ROM-scores | Ja |
| Behandelkenmerken | Ja |
| Diagnose (DSM) | Ja |
| Start- en einddatum | Ja |
| Zorgvraagtype | Ja (sinds ZPM) |

## Benchmark Indicatoren

### Delta-T (behandeleffect)
Verandering in ROM-score:
- T0 score - T1 score = ruwe verandering
- Correctie voor beginwaarde
- Vergelijking met landelijk gemiddelde

### Respons en Remissie

| Term | Definitie |
|------|-----------|
| Respons | Klinisch relevante verbetering |
| Remissie | Score onder klinische grens |
| Herstel | Respons + remissie |
| Verslechtering | Klinisch relevante achteruitgang |

### Casemix correctie
Correctie voor:
- Ernst bij start
- Diagnose
- Comorbiditeit
- Demografische factoren

## Uitdagingen ROM

### Praktische bezwaren
- Administratieve belasting
- Vragenlijstmoeheid patiënten
- Respons (niet iedereen vult in)
- Timing van afname

### Methodologische discussies
- Selectieve non-respons
- Gaming (strategisch niet afnemen)
- Validiteit voor alle doelgroepen
- Vergelijkbaarheid instellingen

## Akwa GGZ

### Taken
- Kwaliteitsstandaarden GGZ
- Generieke module Ernstige psychische aandoeningen
- Doorontwikkeling ROM
- Patiëntperspectief

### Kwaliteitsstatuut
- Verplicht voor alle GGZ-aanbieders
- Informatie over praktijk
- Wachttijden
- Behandelaanbod

## Kernbegrippen

- **ROM**: Routine Outcome Monitoring
- **SBG**: Stichting Benchmark GGZ
- **Delta-T**: Behandeleffect score
- **Respons**: Klinisch relevante verbetering
- **Casemix**: Correctie voor patiëntkenmerken
    `,
    sources: [
      { name: "Akwa GGZ", url: "https://www.akwaggz.nl" },
      { name: "SBG - Stichting Benchmark GGZ", url: "https://www.sbggz.nl" },
      { name: "GGZ Nederland - ROM", url: "https://www.ggznederland.nl" }
    ]
  },

  "107.4": {
    title: "Dwang & Drang Registratie",
    summary: "Registratie van verplichte zorg onder de Wvggz en Wzd",
    content: `
# Dwang & Drang Registratie

## Wettelijk Kader

### Wet verplichte GGZ (Wvggz)
Geldt voor mensen met een psychische stoornis waarbij verplichte zorg nodig is om ernstig nadeel te voorkomen.

### Wet zorg en dwang (Wzd)
Geldt voor mensen met een psychogeriatrische aandoening (dementie) of verstandelijke beperking.

## Wvggz: Verplichte Zorg

### Vormen van verplichte zorg

| Vorm | Voorbeeld |
|------|-----------|
| Gedwongen medicatie | Antipsychotica bij psychose |
| Beperking bewegingsvrijheid | Gesepareerd verblijf |
| Onderzoek | Lichamelijk, bagage |
| Controles | Kamer, post |
| Beperking communicatie | Telefoon, bezoek |
| Gedwongen voeding | Bij eetstoornis |

### Zorgmachtiging

| Stap | Actor | Termijn |
|------|-------|---------|
| Melding | Burgemeester ontvangt | - |
| Verkennend onderzoek | Gemeente | 14 dagen |
| Aanvraag | Officier van Justitie | 3 weken |
| Medische verklaring | Onafhankelijk psychiater | 14 dagen |
| Zitting | Rechtbank | - |
| Beslissing | Rechter | 3 weken na aanvraag |

### Crisismaatregel
- Acute situatie
- Beslissing burgemeester
- Maximaal 3 dagen
- Kan verlengd worden via zorgmachtiging

## Registratieverplichtingen

### EPD Registratie

| Element | Vastleggen |
|---------|------------|
| Juridische titel | Zorgmachtiging, crisismaatregel |
| Type verplichte zorg | Welke vormen toegepast |
| Start en eind | Per toepassing |
| Evaluatie | Minimaal elke 3 maanden |
| Wilsbekwaamheid | Beoordeling vastleggen |

### Dwangsom
Argus-registratie:
- Landelijke database
- Anonieme gegevens
- Monitoring ontwikkelingen
- Onderzoek

## Argus Registratie

### Wat is Argus?
Landelijk registratiesysteem voor dwang en drang in de GGZ en VVT.

### Registratie-items
- Afzondering
- Separatie
- Fixatie
- Gedwongen medicatie
- Gedwongen voeding
- Beschermende interventies

### Rapportage
- Jaarlijkse rapportages per instelling
- Landelijke trends
- Benchmark met andere instellingen

## Wzd: Onvrijwillige Zorg

### Stappenplan Wzd

| Stap | Actie |
|------|-------|
| 1 | Zorgverantwoordelijke zoekt alternatieven |
| 2 | Multidisciplinair overleg |
| 3 | Wzd-arts beoordeelt noodzaak |
| 4 | Opname in zorgplan |
| 5 | Evaluatie (steeds kortere intervallen) |

### Wzd-functionaris
- Intern toezicht
- Klachtbehandeling
- Advies aan zorgverleners

## Rechten Patiënt

### Wvggz rechten
- Recht op bijstand patiëntvertrouwenspersoon (PVP)
- Recht op familielid/naaste vertrouwenspersoon
- Klachtrecht bij klachtencommissie
- Recht op eigen plan van aanpak

### Zorgkaart en Crisiskaart
- Eigen wensen en voorkeuren
- Wie te waarschuwen
- Wat helpt in crisis
- Moet in EPD opgenomen zijn

## IT Ondersteuning

### Functionaliteiten EPD

| Functie | Doel |
|--------|------|
| Workflow zorgmachtiging | Procesbewaking |
| Tijdregistratie | Start/stop verplichte zorg |
| Signalering termijnen | Evaluatie en verlenging |
| Rapportage | Argus aanlevering |
| Autorisatie | Specifieke rollen |

### Koppelingen
- DVS (Dienst Verplichte Zorg): landelijk register
- OM/Rechtbank: administratie zorgmachtigingen
- Inspectie: toezichthouder

## Kernbegrippen

- **Wvggz**: Wet verplichte geestelijke gezondheidszorg
- **Wzd**: Wet zorg en dwang
- **Zorgmachtiging**: Rechterlijke machtiging voor verplichte GGZ
- **Crisismaatregel**: Acute beslissing burgemeester
- **Argus**: Registratiesysteem dwang en drang
    `,
    sources: [
      { name: "Dwang in de zorg", url: "https://www.dwangindezorg.nl" },
      { name: "GGZ Nederland - Wvggz", url: "https://www.ggznederland.nl" },
      { name: "IGJ - Wet verplichte GGZ", url: "https://www.igj.nl" }
    ]
  },

  // Track 108: Farmacie & Medicatieketen
  "108.1": {
    title: "Apotheeksystemen & G-Standaard",
    summary: "Apotheek informatiesystemen en de rol van de G-Standaard",
    content: `
# Apotheeksystemen & G-Standaard

## Apotheekinformatiesysteem (AIS)

Het AIS is het centrale systeem in de apotheek voor medicatiebeheer, receptverwerking en patiëntenzorg.

## Marktoverzicht AIS

| Leverancier | Systeem | Type apotheek |
|-------------|---------|---------------|
| PharmaPartners | Pharmacom | Openbare apotheek |
| Mosadex | Zamicom | Openbare apotheek |
| CGM | CGM Apotheek | Openbare apotheek |
| Centric | Centrasys | Ziekenhuisapotheek |
| Chipsoft | HiX Farmacie | Ziekenhuisapotheek |

## Kernfunctionaliteiten AIS

### Receptverwerking
- Ontvangst recepten (papier, elektronisch)
- Medicatiebewaking
- Etiketteren
- Terhandstelling registratie

### Medicatiebewaking

| Controle | Bron |
|----------|------|
| Interacties | G-Standaard |
| Contra-indicaties | G-Standaard + patiëntdossier |
| Dubbelmedicatie | Patiënthistorie |
| Dosering | G-Standaard + leeftijd/gewicht |
| Allergie | Patiëntdossier |

### Patiëntendossier
- Medicatiehistorie
- Allergieën en intoleranties
- Contra-indicaties
- Afspraken (bijv. voorkeur generiek)
- Zorgverzekeringsgegevens

## G-Standaard

### Wat is de G-Standaard?
De G-Standaard is de geneesmiddelendatabank van Z-Index, onderdeel van KNMP. Het bevat alle informatie over in Nederland geregistreerde geneesmiddelen.

### Inhoud G-Standaard

| Tabel | Inhoud |
|-------|--------|
| Artikelen | Alle producten met HPK, PRK, GPK |
| Stofnamen | INN-stofnamen |
| Indicaties | Registratie-indicaties |
| Contra-indicaties | CI's met patiëntkenmerken |
| Interacties | Drug-drug interacties |
| Doseringsgegevens | Min/max doses per indicatie |

### Coderingen

| Code | Niveau | Voorbeeld |
|------|--------|-----------|
| GPK | Generiek product | Paracetamol tablet 500mg |
| PRK | Voorschrift | Paracetamol tablet 500mg, 30 stuks |
| HPK | Handelsproduct | Paracetamol CF 500mg tablet |
| ARTIKELNR | Verpakking | Specifiek EAN |

### Updates G-Standaard
- Maandelijkse release
- Tussentijdse spoedupdates
- Automatische distributie naar AIS
- Versiebeheer

## Interactiecontrole

### Interactieniveaus

| Code | Ernst | Actie |
|------|-------|-------|
| AB | Zeer ernstig | Combinatie vermijden |
| A | Ernstig | Maatregelen nemen |
| B | Matig ernstig | Monitoren |
| C | Gering | Informeren |

### Workflow bij interactie
1. AIS signaleert interactie
2. Apotheker beoordeelt relevantie
3. Actie: overleg voorschrijver of monitoring
4. Bewaking documenteren
5. Registratie in patiëntdossier

## Declaratie en Inkoop

### Declaratieproces
- UZOVI-nummer verzekeraar
- Preferentiebeleid per verzekeraar
- Clawback en bijbetalingsregelingen
- Vektis standaardberichten

### Inkoopmodule
- Bestellen bij groothandels
- Voorraadbeheer
- THT-bewaking
- Retourregistratie

## Ziekenhuisfarmacie

### Specifieke functionaliteiten

| Functie | Doel |
|--------|------|
| Bereidingen | Magistrale receptuur, cytostatica |
| Unit dose | Per patiënt verpakt |
| Voedingspompen | TPN bereiding |
| Medicatieveiligheid | Clinical rules |
| Antimicrobial stewardship | Antibioticabeleid |

## Kernbegrippen

- **AIS**: Apotheekinformatiesysteem
- **G-Standaard**: Geneesmiddelendatabank
- **GPK/PRK/HPK**: Product codeniveaus
- **Interactiecontrole**: Bewaking geneesmiddelcombinaties
- **THT**: Te Houden Tot (houdbaarheidsdatum)
    `,
    sources: [
      { name: "KNMP - Apotheek", url: "https://www.knmp.nl" },
      { name: "Z-Index - G-Standaard", url: "https://www.z-index.nl" },
      { name: "Zo werkt de zorg - Farmacie", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  "108.2": {
    title: "Medicatieoverdracht & eRecept",
    summary: "Standaarden voor medicatieoverdracht en elektronisch voorschrijven",
    content: `
# Medicatieoverdracht & eRecept

## Medicatieoverdracht

### Problematiek
Medicatiefouten door gebrekkige overdracht zijn een belangrijke oorzaak van vermijdbare schade in de zorg.

### Richtlijn Medicatieoverdracht
Veldnorm voor veilige overdracht van medicatiegegevens tussen zorgverleners.

## Medicatieproces

### Stappen in het medicatieproces

| Stap | Actor | Actie |
|------|-------|-------|
| Voorschrijven | Arts | Recept maken |
| Ter hand stellen | Apotheek | Medicatie leveren |
| Toedienen | Verpleging/patiënt | Medicatie innemen |
| Bewaken | Apotheek/arts | Effecten monitoren |

### Overgangsmomenten
- Opname in ziekenhuis
- Ontslag uit ziekenhuis
- Overplaatsing
- Consult bij specialist
- Wijziging door huisarts

## Elektronisch Recept (eRecept)

### Definitie
Het eRecept is een gestandaardiseerd elektronisch bericht van voorschrijver naar apotheek.

### eRecept inhoud

| Veld | Inhoud |
|------|--------|
| Patiënt | BSN, naam, geboortedatum |
| Voorschrijver | AGB, naam, specialisme |
| Medicatie | PRK/HPK code, dosering |
| Aantal | Stuks of dagen |
| Instructies | Gebruiksaanwijzing |
| Herhaling | Aantal herhalingen |

### Technische route
1. Arts maakt recept in EPD/HIS
2. Recept naar centrale infrastructuur (LSP)
3. Patiënt kiest apotheek
4. Apotheek haalt recept op
5. Verwerking en terhandstelling

## Actueel Medicatieoverzicht

### Medicatieoverzicht (MO)
Compleet overzicht van alle medicatie die een patiënt gebruikt.

### Componenten MO

| Component | Beschrijving |
|-----------|--------------|
| Medicatieafspraken | Wat is voorgeschreven |
| Toedienafspraken | Hoe toe te dienen |
| Medicatiegebruik | Wat patiënt daadwerkelijk gebruikt |

### Bronnen medicatiegegevens
- Huisarts (HIS)
- Apotheek (AIS)
- Ziekenhuis (EVS)
- Patiënt zelf

## MP9 Standaard

### Wat is MP9?
Medicatieproces versie 9 is de landelijke informatiestandaard voor medicatiegegevens.

### Bouwstenen MP9

| Bouwsteen | Functie |
|-----------|---------|
| Medicatieafspraak (MA) | Voorschrift door arts |
| Toedienafspraak (TA) | Afspraak over toediening |
| Medicatietoediening (MTD) | Feitelijke toediening |
| Medicatiegebruik (MGB) | Gebruik door patiënt |
| Wisselend doseerschema (WDS) | Variabele dosering |

### Implementatie MP9
- Gefaseerde invoering
- Pilots in regio's
- Conversie bestaande gegevens
- Parallelle systemen

## Medicatieveiligheid

### High Risk Medicatie

| Categorie | Voorbeelden |
|-----------|-------------|
| Antistolling | Coumarines, DOACs |
| Insulines | Alle typen |
| Cytostatica | Chemotherapie |
| Opiaten | Morfine, fentanyl |
| Methotrexaat | Lage dosis bij RA |

### Veiligheidsmaatregelen
- Dubbele controle
- LASA-waarschuwingen (Look Alike Sound Alike)
- Barcode verificatie
- Clinical decision support

## Landelijke Infrastructuur

### VZVZ en LSP
- Centrale index medicatiegegevens
- Real-time opvragen
- Toestemming patiënt vereist

### MedMij
- Medicatieoverzicht naar PGO
- Patiënt regie over gegevens
- FHIR-gebaseerd

## Kernbegrippen

- **eRecept**: Elektronisch recept
- **MO**: Medicatieoverzicht
- **MP9**: Medicatieproces standaard versie 9
- **MA/TA/MTD**: Medicatieafspraak/Toedienafspraak/Toediening
- **LASA**: Look Alike Sound Alike
    `,
    sources: [
      { name: "Nictiz - Medicatieproces", url: "https://www.nictiz.nl" },
      { name: "KNMP - Medicatieoverdracht", url: "https://www.knmp.nl" },
      { name: "VZVZ - Medicatiegegevens", url: "https://www.vzvz.nl" }
    ]
  },

  "108.3": {
    title: "Medicatieverificatie & EVS",
    summary: "Elektronisch voorschrijfsysteem en medicatieverificatie bij opname",
    content: `
# Medicatieverificatie & EVS

## Medicatieverificatie

### Definitie
Medicatieverificatie is het proces van het vaststellen van een volledig en correct medicatieoverzicht bij zorgovergang.

### Wanneer verificatie?

| Moment | Setting |
|--------|---------|
| Opname | Ziekenhuis, verpleeghuis |
| Ontslag | Terug naar huis of andere instelling |
| Overdracht | Tussen afdelingen, instellingen |
| Polikliniek | Bij specialistconsult |

## Verificatieproces

### Stappen medicatieverificatie

| Stap | Actie | Door wie |
|------|-------|---------|
| 1 | Verzamelen bronnen | Verpleegkundige/apotheker |
| 2 | Best Possible Medication History | Apotheker |
| 3 | Vergelijken met thuismedicatie | Apotheker |
| 4 | Opstellen opnamemedicatie | Arts |
| 5 | Bespreken met patiënt | Arts/apotheker |
| 6 | Vastleggen in EVS | Arts |

### Bronnen voor verificatie
- Medicatieoverzicht apotheek
- Patiëntgesprek
- LSP gegevens
- Meengebrachte medicatie
- Verwijsbrief huisarts

## Elektronisch Voorschrijfsysteem (EVS)

### Definitie
Het EVS is het systeem waarmee artsen in het ziekenhuis elektronisch medicatie voorschrijven.

### Functies EVS

| Functie | Beschrijving |
|---------|--------------|
| Voorschrijven | Selectie medicatie en dosering |
| Beslisondersteuning | Alerts en waarschuwingen |
| Uitzetten | Toedienlijsten voor verpleging |
| Autorisatie | Wie mag wat voorschrijven |
| Documentatie | Vastleggen in dossier |

## Beslisondersteuning (CDSS)

### Clinical Decision Support

| Type | Voorbeeld |
|------|-----------|
| Allergieën | Alert bij bekende allergie |
| Interacties | Waarschuwing bij combinatie |
| Dosering | Maximum overschreden |
| Nierfunctie | Dosisaanpassing bij lage eGFR |
| Leeftijd | Geriatrische waarschuwing |
| Lab | Interactie met labwaarden |

### Alertmoeheid
- Te veel alerts vermindert effectiviteit
- Optimalisatie: alleen relevante alerts
- Hard stops vs soft stops
- Feedback loop voor verbetering

## Gesloten Distributiesystemen

### Unit Dose
- Medicatie per patiënt verpakt
- Per toedienmoment gereed
- Barcode voor verificatie
- Vermindert fouten bij toediening

### Medicatiekasten (ADC)
- Automated Dispensing Cabinets
- Gecontroleerde toegang op afdeling
- Voorraadregistratie automatisch
- Integratie met EVS

## Toedienregistratie

### Barcode Medication Administration (BCMA)

| Stap | Actie |
|------|-------|
| 1 | Scan polsbandje patiënt |
| 2 | Scan medicatie |
| 3 | Verificatie: juiste patiënt, medicatie, tijd |
| 4 | Toediening |
| 5 | Registratie in dossier |

### Closed Loop Medication
Volledig gesloten keten:
- Voorschrijven (EVS)
- Klaarzetten (apotheek)
- Distribueren (robot/ADC)
- Toedienen (BCMA)
- Registreren (automatisch)

## High Risk Processen

### Cytostatica

| Aspect | Maatregel |
|--------|-----------|
| Voorschrijven | Alleen geautoriseerde arts |
| Berekening | Gebaseerd op BSA/gewicht |
| Bereiding | Isolator, 4-ogen principe |
| Toediening | Getrainde verpleegkundige |

### Parenteralia
- TPN (Totale Parenterale Nutriatie)
- Infuuspompen met drugdatabase
- Dosislimieten ingebouwd
- Spuitpompen met ID

## Kernbegrippen

- **EVS**: Elektronisch Voorschrijfsysteem
- **CDSS**: Clinical Decision Support System
- **BCMA**: Barcode Medication Administration
- **Closed Loop**: Gesloten medicatieketen
- **Unit Dose**: Per patiënt verpakte medicatie
    `,
    sources: [
      { name: "NVZA - Ziekenhuisfarmacie", url: "https://www.nvza.nl" },
      { name: "KNMP - Medicatieveiligheid", url: "https://www.knmp.nl" },
      { name: "IGJ - Veilig voorschrijven", url: "https://www.igj.nl" }
    ]
  },

  "108.4": {
    title: "Farmaceutische Ketenzorg",
    summary: "Samenwerking in de farmaceutische keten en nieuwe zorgvormen",
    content: `
# Farmaceutische Ketenzorg

## Farmaceutische Zorg

### Van product naar zorg
De apotheek ontwikkelt zich van distributeur naar zorgverlener met farmaceutische patiëntenzorg.

### Farmaceutische zorgtaken

| Taak | Beschrijving |
|------|--------------|
| Medicatiebeoordeling | Periodieke review medicatie |
| Begeleidingsgesprekken | Bij start/wijziging medicatie |
| Therapietrouw | Ondersteuning bij inname |
| Klinische farmacie | Specialistische diensten |

## Medicatiebeoordeling

### Typen medicatiebeoordelingen

| Type | Wanneer | Door wie |
|------|---------|----------|
| MBO | Bij polyfarmacie/signalen | Apotheker |
| MBO in overleg | Met huisarts | Apotheker + huisarts |
| Klinische farmaceuut | Klinische setting | Ziekenhuisapotheker |

### Indicaties voor MBO
- 5 of meer geneesmiddelen chronisch
- Verminderde nierfunctie
- Therapieontrouw signalen
- Vallen/duizeligheid
- Cognitieve achteruitgang

### STRIP Methode

| Stap | Actie |
|------|-------|
| 1 | Farmacotherapeutische anamnese |
| 2 | Farmacotherapeutische analyse |
| 3 | Overleg met arts en patiënt |
| 4 | Farmacotherapeutisch behandelplan |
| 5 | Follow-up en monitoring |

## Ketenzorg Farmacie

### Chronische aandoeningen

| Aandoening | Farmaceutische rol |
|------------|-------------------|
| Diabetes | Inhalatie-instructie, glucose monitoring |
| Astma/COPD | Inhalatietechniek |
| Cardiovasculair | Therapietrouw, bloeddruk |
| Pijnbestrijding | Opioïdenbeleid |

### FTO (Farmacotherapeutisch Overleg)
- Periodiek overleg huisarts-apotheker
- Afstemming voorschrijfbeleid
- Bespreken knelpunten
- Implementatie richtlijnen

## Thuiszorgfarmacie

### Medicatiedistributie aan huis

| Dienst | Doelgroep |
|--------|-----------|
| Baxter systeem | Chronische gebruikers |
| Weekdoseersysteem | Hulpbehoevende ouderen |
| Verpleeghuis baxteren | VVT instellingen |
| Oncologie thuis | Thuisbehandeling chemo |

### Hulpmiddelen
- Inhalators
- Injectiematerialen
- Bloedglucosemeters
- Stoma materialen

## Digitale Apotheekzorg

### Patiëntportalen apotheek
- Herhaalrecepten aanvragen
- Medicatieoverzicht inzien
- Bezorgafspraken maken
- Bijwerkingenregistratie

### Apps en monitoring

| Type | Functie |
|------|---------|
| Therapietrouw apps | Herinneringen, registratie |
| Bijwerkingen melden | Lareb |
| Digitale bijsluiter | Interactief, patiëntvriendelijk |
| Zelfzorg advies | Klachten en medicatieadvies |

## Geneesmiddelentekorten

### Oorzaken
- Productiestoringen
- Grondstoftekorten
- Economische beslissingen
- Exportverboden

### Informatiesystemen

| Systeem | Functie |
|--------|---------|
| Farmanco | Melden en opvragen tekorten |
| KNMP dashboard | Actuele tekorten |
| CBG lijst | Officiële registratie |

### Oplossingsrichtingen
- Alternatieve producten
- Magistrale bereiding
- Import buitenland (artikel 3.17)
- Rantsoenering

## Innovaties

### Gepersonaliseerde medicatie
- 3D printen medicatie
- Farmacogenetica
- Therapeutic Drug Monitoring
- Point-of-care diagnostiek

### Slimme verpakkingen
- Slimme pillendoos met sensoren
- NFC/RFID tracking
- Temperatuurloggers
- Anti-vervalsingsmaatregelen

## Kernbegrippen

- **MBO**: Medicatiebeoordeling
- **STRIP**: Systematische Tool voor medicatiebeoordeling
- **FTO**: Farmacotherapeutisch Overleg
- **Baxteren**: Medicatie in zakjes per innamemoment
- **Farmanco**: Meldpunt geneesmiddelentekorten
    `,
    sources: [
      { name: "KNMP - Farmaceutische zorg", url: "https://www.knmp.nl" },
      { name: "NHG - FTO", url: "https://www.nhg.org" },
      { name: "Zo werkt de zorg - Farmacie", url: "https://www.zowerktdezorg.nl" }
    ]
  },

  // Track 8: Zorgdata Standaarden & Modellen
  "8.1": {
    title: "Overzicht Zorgdata Standaarden",
    summary: "Introductie tot de belangrijkste zorgdata standaarden: FHIR, OpenEHR en OMOP",
    content: `
# Overzicht Zorgdata Standaarden

## Waarom Standaarden?

Zorgdata standaarden zijn essentieel voor:
- **Interoperabiliteit**: Systemen kunnen data uitwisselen
- **Herbruikbaarheid**: Data eenmalig vastleggen, meervoudig gebruiken
- **Kwaliteit**: Consistente vastlegging van medische informatie
- **Onderzoek**: Data bruikbaar voor secundair gebruik

## De Drie Grote Standaarden

| Standaard | Focus | Oorsprong | Primair gebruik |
|-----------|-------|-----------|-----------------|
| HL7 FHIR | Uitwisseling | HL7 International | API's, integratie |
| OpenEHR | Vastlegging | OpenEHR Foundation | EPD, klinische data |
| OMOP CDM | Analyse | OHDSI | Onderzoek, analytics |

## HL7 FHIR

### Kenmerken
- RESTful API-standaard
- Resources als basiseenheid
- JSON en XML formaten
- Breed geadopteerd door leveranciers

### Sterke punten
- Moderne web-technologie
- Grote community en tooling
- Snelle implementatie mogelijk
- Flexibel en uitbreidbaar

### Beperkingen
- Niet ontworpen voor opslag
- Beperkte klinische modellering
- Veel variatie in implementaties

## OpenEHR

### Kenmerken
- Two-level modeling (data en kennis apart)
- Archetypes voor klinische concepten
- Query-taal (AQL)
- Leveranciersonafhankelijk

### Sterke punten
- Klinisch rijke modellering
- Toekomstbestendig (modellen aanpasbaar)
- Clinici betrokken bij ontwerp
- Volledige medische context

### Beperkingen
- Steilere leercurve
- Minder wijdverspreid
- Complexere implementatie

## OMOP CDM

### Kenmerken
- Common Data Model voor onderzoek
- Gestandaardiseerde vocabulaires
- Wereldwijd netwerk (OHDSI)
- Focus op observationele data

### Sterke punten
- Bewezen voor grootschalig onderzoek
- Gestandaardiseerde analytics tools
- Internationale vergelijkbaarheid
- Privacy-vriendelijk (gefedereerd)

### Beperkingen
- Niet voor primaire zorg
- Transformatie (ETL) nodig
- Verlies van detail mogelijk

## Kernbegrippen

- **FHIR**: Fast Healthcare Interoperability Resources
- **OpenEHR**: Open Electronic Health Record
- **OMOP**: Observational Medical Outcomes Partnership
- **CDM**: Common Data Model
- **OHDSI**: Observational Health Data Sciences and Informatics
    `,
    sources: [
      { name: "HL7 FHIR", url: "https://www.hl7.org/fhir/" },
      { name: "OpenEHR", url: "https://www.openehr.org" },
      { name: "OHDSI", url: "https://www.ohdsi.org" }
    ]
  },

  "8.2": {
    title: "Messaging vs Documents vs Models",
    summary: "Verschillende paradigma's voor zorgdata: berichten, documenten en datamodellen",
    content: `
# Messaging vs Documents vs Models

## Drie Paradigma's

In de zorginformatica bestaan drie fundamentele benaderingen voor data-uitwisseling en -opslag.

| Paradigma | Focus | Voorbeeld |
|-----------|-------|-----------|
| Messaging | Event-driven uitwisseling | HL7v2, FHIR Messages |
| Documents | Mensleesbare documenten | CDA, FHIR Documents |
| Services/Resources | API-gebaseerde toegang | FHIR REST, OpenEHR |

## Messaging Paradigma

### Kenmerken
- Point-to-point communicatie
- Trigger events (bijv. opname, ontslag)
- Gestructureerde berichten
- Vaak asynchroon

### HL7v2 (Legacy)

| Segment | Betekenis |
|---------|-----------|
| MSH | Message Header |
| PID | Patient Identification |
| OBR | Observation Request |
| OBX | Observation Result |

### Wanneer messaging?
- Lab-uitslagen versturen
- ADT-berichten (opname/ontslag)
- Orderberichten
- Real-time notificaties

## Document Paradigma

### Kenmerken
- Mensleesbaar document
- Digitale handtekening mogelijk
- Context behouden
- Snapshot in tijd

### CDA (Clinical Document Architecture)

| Sectie | Inhoud |
|--------|--------|
| Header | Patiënt, auteur, datum |
| Body | Gestructureerde secties |
| Entries | Gecodeerde data |

### Wanneer documenten?
- Ontslagbrieven
- Specialistenbrieven
- Operatieverslagen
- Juridisch bindende informatie

## Resource/Service Paradigma

### Kenmerken
- API-gebaseerd (REST)
- Granulaire resources
- Query en search
- CRUD-operaties

### FHIR Resources
Iedere resource representeert een zorgconcept:
- Patient, Practitioner, Organization
- Condition, Observation, Procedure
- MedicationRequest, Encounter

### Wanneer resources?
- Applicatie-integratie
- Mobiele apps
- Patiëntportalen
- Real-time data toegang

## Vergelijking

| Aspect | Messaging | Documents | Resources |
|--------|-----------|-----------|-----------|
| Granulariteit | Bericht | Document | Resource |
| Leesbaar | Machine | Mens + Machine | Machine |
| Timing | Event-driven | Snapshot | On-demand |
| Context | Impliciet | Volledig | Referenties |
| Gebruik | Integratie | Communicatie | API's |

## Hybride Benaderingen

### FHIR ondersteunt alles
- FHIR Messaging (Bundles)
- FHIR Documents (Compositions)
- FHIR REST (Resources)

### Praktijk
Vaak combinatie van paradigma's:
- Documents voor overdracht
- Messaging voor events
- Resources voor apps

## Kernbegrippen

- **Messaging**: Event-gebaseerde berichtuitwisseling
- **CDA**: Clinical Document Architecture
- **REST**: Representational State Transfer
- **CRUD**: Create, Read, Update, Delete
- **ADT**: Admission, Discharge, Transfer
    `,
    sources: [
      { name: "HL7 FHIR Paradigms", url: "https://www.hl7.org/fhir/" },
      { name: "HL7 CDA", url: "https://www.hl7.org/implement/standards/product_brief.cfm?product_id=7" },
      { name: "Nictiz - Standaarden", url: "https://www.nictiz.nl" }
    ]
  },

  "8.3": {
    title: "Terminologieën: SNOMED, LOINC, ICD, ATC",
    summary: "Overzicht van medische terminologieën en codeerstelsels",
    content: `
# Terminologieën: SNOMED, LOINC, ICD, ATC

## Waarom Terminologieën?

Terminologieën zorgen voor:
- **Eenduidigheid**: Iedereen bedoelt hetzelfde
- **Doorzoekbaarheid**: Gestructureerd zoeken
- **Aggregatie**: Data groeperen voor analyse
- **Interoperabiliteit**: Systemen begrijpen elkaar

## Overzicht Terminologieën

| Terminologie | Domein | Beheerder | Gebruik |
|--------------|--------|-----------|---------|
| SNOMED CT | Klinische begrippen | SNOMED Int. | EPD, uitwisseling |
| LOINC | Lab en observaties | Regenstrief | Labwaarden, vitals |
| ICD-10 | Diagnoses | WHO | Registratie, DBC |
| ATC | Geneesmiddelen | WHO | Medicatie classificatie |
| ICPC-2 | Huisartsgeneeskunde | WONCA | Huisarts registratie |

## SNOMED CT

### Kenmerken
- Meest uitgebreide klinische terminologie
- Hiërarchische structuur
- Concept-gebaseerd met relaties
- Meertalig (inclusief Nederlands)

### Structuur
- **Concepts**: Unieke begrippen met ID
- **Descriptions**: Termen (synoniemen)
- **Relationships**: Verbanden tussen concepten

### Voorbeeld
Diabetes mellitus type 2:
- Concept ID: 44054006
- Is-a: Diabetes mellitus
- Finding site: Pancreas

### Gebruik in Nederland
- Verplicht in Basisgegevensset Zorg (BgZ)
- NL-editie door Nictiz beheerd
- Integratie in EPD's

## LOINC

### Kenmerken
- Laboratorium en klinische observaties
- Universele codes voor metingen
- Internationaal gestandaardiseerd

### Structuur (6 assen)
1. Component (wat gemeten)
2. Property (type meting)
3. Time (moment/periode)
4. System (specimen)
5. Scale (kwantitatief/kwalitatief)
6. Method (meetmethode)

### Voorbeeld
Glucose in bloed:
- LOINC: 2345-7
- Glucose, Serum/Plasma, Quantitative

## ICD-10

### Kenmerken
- Internationale classificatie van ziekten
- Basis voor registratie en statistiek
- Verplicht voor DBC-registratie

### Structuur
- Hoofdstukken (A-Z)
- Categorieën (3 karakters)
- Subcategorieën (4-5 karakters)

### ICD-10-CM vs ICD-10-PCS
- CM: Clinical Modification (diagnoses)
- PCS: Procedure Coding System (verrichtingen)

## ATC/DDD

### Kenmerken
- Anatomical Therapeutic Chemical
- Classificatie geneesmiddelen
- DDD: Defined Daily Dose

### Structuur (5 niveaus)
1. Anatomische hoofdgroep (1 letter)
2. Therapeutische subgroep (2 cijfers)
3. Farmacologische subgroep (1 letter)
4. Chemische subgroep (1 letter)
5. Chemische stof (2 cijfers)

### Voorbeeld
Metformine: A10BA02
- A: Alimentair/metabolisme
- 10: Diabetes middelen
- B: Bloedglucose verlagend
- A: Biguaniden
- 02: Metformine

## Mapping tussen Terminologieën

| Van | Naar | Doel |
|----|------|------|
| SNOMED | ICD-10 | DBC-registratie |
| LOINC | SNOMED | Klinische context |
| ICPC-2 | SNOMED | Uitwisseling |

## Kernbegrippen

- **SNOMED CT**: Systematized Nomenclature of Medicine Clinical Terms
- **LOINC**: Logical Observation Identifiers Names and Codes
- **ICD**: International Classification of Diseases
- **ATC**: Anatomical Therapeutic Chemical
- **Concept**: Uniek begrip met identifier
    `,
    sources: [
      { name: "SNOMED International", url: "https://www.snomed.org" },
      { name: "LOINC", url: "https://loinc.org" },
      { name: "WHO ICD", url: "https://www.who.int/classifications/icd" },
      { name: "Nictiz Terminologie", url: "https://www.nictiz.nl" }
    ]
  },

  "8.4": {
    title: "Wanneer welke standaard?",
    summary: "Besliskader voor de keuze tussen FHIR, OpenEHR en OMOP",
    content: `
# Wanneer welke standaard?

## Besliskader

De keuze voor een standaard hangt af van het primaire doel.

| Doel | Aanbevolen standaard |
|------|---------------------|
| Applicatie-integratie | FHIR |
| Klinische vastlegging | OpenEHR |
| Onderzoek en analytics | OMOP |
| Berichtuitwisseling | HL7v2/FHIR |
| Documentuitwisseling | CDA/FHIR Documents |

## Use Case Matrix

| Use Case | FHIR | OpenEHR | OMOP |
|----------|------|---------|------|
| EPD-integratie | +++ | ++ | - |
| Patiëntportaal | +++ | + | - |
| Klinische modellering | + | +++ | - |
| Onderzoeksdata | + | + | +++ |
| Mobiele apps | +++ | + | - |
| Rapportage | ++ | ++ | +++ |
| Langetermijn opslag | + | +++ | ++ |

## FHIR Kiezen Wanneer

### Ideale scenario's
- **API-integraties** tussen systemen
- **Patiëntgerichte apps** (PGO, portalen)
- **Snelle implementatie** nodig
- **Leveranciers** ondersteunen FHIR
- **MedMij/Twiin** uitwisseling

### Voorbeelden
- Medicatieoverzicht ophalen
- Afspraken plannen via app
- Lab-uitslagen naar PGO
- Verwijzing versturen

## OpenEHR Kiezen Wanneer

### Ideale scenario's
- **Nieuw EPD** bouwen of kiezen
- **Klinische modellering** belangrijk
- **Toekomstbestendigheid** prioriteit
- **Clinici** betrekken bij ontwerp
- **Leveranciersonafhankelijkheid** gewenst

### Voorbeelden
- Oncologie-registratie
- Intensive Care documentatie
- Multidisciplinaire dossiers
- Specialistische workflows

## OMOP Kiezen Wanneer

### Ideale scenario's
- **Observationeel onderzoek**
- **Grootschalige data-analyse**
- **Internationale vergelijking**
- **Real-world evidence**
- **Populatieonderzoek**

### Voorbeelden
- Effectiviteit medicatie onderzoeken
- Bijwerkingen monitoren
- Zorgpaden analyseren
- Predicitemodellen bouwen

## Combinaties

### FHIR + OpenEHR
- OpenEHR voor opslag
- FHIR voor uitwisseling
- Mapping tussen beiden

### FHIR + OMOP
- FHIR voor dataverzameling
- ETL naar OMOP
- Analytics met OHDSI tools

### Alle drie
- OpenEHR: Klinische opslag
- FHIR: Uitwisseling
- OMOP: Onderzoek
- Transformaties ertussen

## Beslisboom

1. **Wat is het primaire doel?**
   - Uitwisseling → FHIR
   - Opslag → OpenEHR
   - Onderzoek → OMOP

2. **Wie zijn de gebruikers?**
   - Ontwikkelaars → FHIR
   - Clinici → OpenEHR
   - Onderzoekers → OMOP

3. **Wat is de tijdshorizon?**
   - Korte termijn → FHIR
   - Lange termijn → OpenEHR/OMOP

## Kernbegrippen

- **Use case**: Specifiek gebruiksscenario
- **ETL**: Extract, Transform, Load
- **Real-world evidence**: Bewijs uit praktijkdata
- **Vendor lock-in**: Afhankelijkheid van leverancier
    `,
    sources: [
      { name: "Nictiz - Architectuur", url: "https://www.nictiz.nl" },
      { name: "OpenEHR vs FHIR", url: "https://www.openehr.org" },
      { name: "OHDSI - Use Cases", url: "https://www.ohdsi.org" }
    ]
  },

  "8.5": {
    title: "Mapping en Transformatie tussen Standaarden",
    summary: "Technieken voor het mappen en transformeren van data tussen verschillende standaarden",
    content: `
# Mapping en Transformatie tussen Standaarden

## Waarom Mapping?

In de praktijk worden meerdere standaarden gebruikt. Mapping is nodig om:
- Data te combineren uit verschillende bronnen
- Te voldoen aan verschillende eisen
- Historische data te migreren
- Onderzoeksdata te genereren

## Soorten Mapping

| Type | Beschrijving | Voorbeeld |
|------|--------------|-----------|
| Terminologie mapping | Code naar code | SNOMED → ICD-10 |
| Structuur mapping | Model naar model | FHIR → OpenEHR |
| Semantische mapping | Betekenis behouden | BgZ → OMOP |

## Terminologie Mapping

### SNOMED naar ICD-10
- Officiele mapping beschikbaar
- Niet altijd 1-op-1
- Verlies van specificiteit mogelijk

### Mapping relaties

| Relatie | Betekenis |
|---------|-----------|
| Equivalent | Exact gelijk |
| Broader | ICD breder dan SNOMED |
| Narrower | ICD specifieker |
| No match | Geen mapping mogelijk |

### Tools
- SNOMED Browser met mappings
- UMLS Metathesaurus
- Lokale mappingtabellen

## FHIR naar OpenEHR

### Uitdagingen
- Verschillende granulariteit
- FHIR: resources, OpenEHR: compositions
- Contextverlies mogelijk

### Aanpak
1. Identificeer FHIR resources
2. Vind corresponderende archetypes
3. Map velden naar dataelementen
4. Behoud referenties en context

### Voorbeeld: Patient

| FHIR Patient | OpenEHR |
|--------------|---------|
| name | DEMOGRAPHIC/person/name |
| birthDate | DEMOGRAPHIC/person/birth_data |
| gender | DEMOGRAPHIC/person/gender |
| address | DEMOGRAPHIC/person/address |

## FHIR/OpenEHR naar OMOP

### ETL Proces
1. **Extract**: Haal data uit bronsysteem
2. **Transform**: Converteer naar OMOP model
3. **Load**: Laad in OMOP database

### OMOP Tabellen

| FHIR Resource | OMOP Tabel |
|---------------|------------|
| Patient | PERSON |
| Condition | CONDITION_OCCURRENCE |
| MedicationRequest | DRUG_EXPOSURE |
| Observation | MEASUREMENT / OBSERVATION |
| Procedure | PROCEDURE_OCCURRENCE |

### Vocabulary Mapping
- Broncodes → OMOP Concept IDs
- Via ATHENA vocabulaire repository
- Standaard en source concepts

## Mapping Tools

### OHDSI Tools

| Tool | Functie |
|------|---------|
| White Rabbit | Brondata scannen |
| Rabbit-in-a-Hat | Mapping documenteren |
| Usagi | Vocabulary mapping |
| ATHENA | Vocabulaire browser |

### FHIR Mapping
- FHIR Mapping Language
- StructureMap resource
- ConceptMap voor terminologie

### OpenEHR
- Archetype mapping tools
- Template designers
- ETL frameworks

## Best Practices

### Documentatie
- Leg alle mappings vast
- Beschrijf aannames
- Versie mappings

### Kwaliteit
- Valideer transformaties
- Monitor datakwaliteit
- Test met realistische data

### Governance
- Eigenaarschap mappings
- Review proces
- Onderhoud planning

## Uitdagingen

| Uitdaging | Oplossing |
|-----------|-----------|
| Informatieverlies | Behoud brondata |
| Ambiguïteit | Duidelijke regels |
| Updates | Versiebeheer |
| Performance | Incrementele updates |

## Kernbegrippen

- **ETL**: Extract, Transform, Load
- **Mapping**: Vertaling tussen standaarden
- **Vocabulary**: Verzameling codes en termen
- **Concept**: Unieke betekeniseenheid
- **Semantic interoperability**: Betekenis behouden
    `,
    sources: [
      { name: "OHDSI - ETL", url: "https://www.ohdsi.org/data-standardization/" },
      { name: "FHIR Mapping Language", url: "https://www.hl7.org/fhir/mapping-language.html" },
      { name: "Nictiz - Terminologie", url: "https://www.nictiz.nl" }
    ]
  },

  // Track 109: HL7 FHIR Deep Dive
  "109.1": {
    title: "FHIR Architectuur & Ontwerpprincipes",
    summary: "Fundamentele architectuur en ontwerpprincipes van HL7 FHIR",
    content: `
# FHIR Architectuur & Ontwerpprincipes

## Wat is FHIR?

FHIR (Fast Healthcare Interoperability Resources) is een standaard van HL7 voor het uitwisselen van zorginformatie via moderne web-technologie.

## Ontwerpprincipes

| Principe | Betekenis |
|----------|-----------|
| 80/20 regel | Dekking van 80% use cases out-of-the-box |
| RESTful | Gebaseerd op HTTP en REST |
| Human readable | JSON/XML leesbaar voor ontwikkelaars |
| Extensibility | Uitbreidbaar waar nodig |
| Composability | Resources combineerbaar |

## FHIR Lagen

### Layer 1: Foundation
- Datatypes
- Resources basis
- Extensies framework

### Layer 2: Implementability
- RESTful API
- Search parameters
- Operations

### Layer 3: Administration
- Patient, Practitioner, Organization
- Location, Encounter
- Administratieve resources

### Layer 4: Clinical
- Condition, Observation
- MedicationRequest, Procedure
- Klinische resources

### Layer 5: Workflow
- Task, ServiceRequest
- Communication
- Workflow resources

## RESTful API

### HTTP Methods

| Method | FHIR Actie | Voorbeeld |
|--------|------------|-----------|
| GET | Read | GET /Patient/123 |
| POST | Create | POST /Patient |
| PUT | Update | PUT /Patient/123 |
| DELETE | Delete | DELETE /Patient/123 |
| PATCH | Partial update | PATCH /Patient/123 |

### Response Codes

| Code | Betekenis |
|------|-----------|
| 200 | OK (read/update) |
| 201 | Created (create) |
| 204 | No Content (delete) |
| 400 | Bad Request |
| 404 | Not Found |
| 422 | Unprocessable Entity |

## Capability Statement

Elke FHIR server publiceert een CapabilityStatement:
- Ondersteunde resources
- Ondersteunde operaties
- Search parameters
- Conformance informatie

## Versioning

### FHIR Versies

| Versie | Status | Release |
|--------|--------|---------|
| DSTU2 | Legacy | 2015 |
| STU3 | Legacy | 2017 |
| R4 | Normative | 2019 |
| R4B | Patch | 2022 |
| R5 | Current | 2023 |

### Resource versioning
- Elke resource heeft een version ID
- History via _history endpoint
- ETags voor concurrency

## Kernbegrippen

- **Resource**: Basiseenheid van informatie
- **RESTful**: Architectuurstijl met HTTP
- **CapabilityStatement**: Server capabilities
- **Normative**: Stabiel, backwards compatible
- **STU**: Standard for Trial Use
    `,
    sources: [
      { name: "HL7 FHIR", url: "https://www.hl7.org/fhir/" },
      { name: "FHIR Overview", url: "https://www.hl7.org/fhir/overview.html" }
    ]
  },

  "109.2": {
    title: "FHIR Resources & Datatypes",
    summary: "Diepgaande kennis van FHIR resources, datatypes en referenties",
    content: `
# FHIR Resources & Datatypes

## Resource Structuur

Elke FHIR resource heeft een vaste structuur:

| Element | Beschrijving |
|---------|--------------|
| resourceType | Type resource (bijv. Patient) |
| id | Logische identifier |
| meta | Metadata (version, lastUpdated) |
| text | Narrative (mensleesbaar) |
| extension | Uitbreidingen |
| [elements] | Resource-specifieke data |

## Belangrijke Resources

### Administrative

| Resource | Doel |
|----------|------|
| Patient | Patiëntgegevens |
| Practitioner | Zorgverlener |
| Organization | Zorginstelling |
| Location | Locatie |
| Encounter | Zorgcontact |

### Clinical

| Resource | Doel |
|----------|------|
| Condition | Diagnose/probleem |
| Observation | Meting/bevinding |
| Procedure | Verrichting |
| AllergyIntolerance | Allergie |
| DiagnosticReport | Onderzoeksrapport |

### Medication

| Resource | Doel |
|----------|------|
| Medication | Medicatieproduct |
| MedicationRequest | Voorschrift |
| MedicationDispense | Verstrekking |
| MedicationAdministration | Toediening |
| MedicationStatement | Gebruik |

## Datatypes

### Primitive Types

| Type | Voorbeeld |
|------|-----------|
| string | "Jan Jansen" |
| boolean | true |
| integer | 42 |
| decimal | 3.14 |
| date | "2024-01-15" |
| dateTime | "2024-01-15T10:30:00Z" |
| uri | "http://example.org" |

### Complex Types

| Type | Bevat |
|------|-------|
| HumanName | family, given, prefix |
| Address | line, city, postalCode |
| ContactPoint | system, value, use |
| Identifier | system, value |
| CodeableConcept | coding, text |
| Quantity | value, unit, system |
| Period | start, end |
| Reference | reference, type, display |

## References

### Literal Reference
- Verwijzing naar andere resource
- URL format: "Patient/123"
- Absolute of relatief

### Logical Reference
- Identifier-based
- Geen directe link
- identifier element

### Contained Resources
- Resource binnen resource
- Lokale referentie (#id)
- Geen eigen lifecycle

## CodeableConcept

Gestructureerde codering:

| Veld | Beschrijving |
|------|--------------|
| coding | Array van codes |
| coding.system | Codestelsel URI |
| coding.code | De code |
| coding.display | Leesbare tekst |
| text | Vrije tekst alternatief |

## Extensions

### Structuur

| Veld | Beschrijving |
|------|--------------|
| url | Unieke identifier |
| value[x] | Waarde (type in naam) |

### Modifier Extensions
- Veranderen betekenis element
- Moeten begrepen worden
- isModifier = true

## Kernbegrippen

- **Resource**: Atomaire eenheid van data
- **Datatype**: Type van element
- **Reference**: Verwijzing naar resource
- **CodeableConcept**: Gecodeerde waarde
- **Extension**: Uitbreiding van standaard
    `,
    sources: [
      { name: "FHIR Datatypes", url: "https://www.hl7.org/fhir/datatypes.html" },
      { name: "FHIR Resources", url: "https://www.hl7.org/fhir/resourcelist.html" }
    ]
  },

  "109.3": {
    title: "FHIR Profielen & Extensions",
    summary: "Aanpassen van FHIR met profielen, extensions en implementation guides",
    content: `
# FHIR Profielen & Extensions

## Waarom Profielen?

FHIR is bewust flexibel. Profielen maken het:
- Specifieker voor een use case
- Interoperabel binnen een context
- Valideerbaar
- Documenteerbaar

## StructureDefinition

Een profiel wordt gedefinieerd in een StructureDefinition:

| Element | Beschrijving |
|---------|--------------|
| url | Canonical URL (identifier) |
| name | Computernaam |
| title | Mensleesbare naam |
| status | draft, active, retired |
| kind | resource, datatype, logical |
| type | Base resource type |
| baseDefinition | Parent profiel |
| derivation | specialization, constraint |

## Constraints

### Cardinality

| Constraint | Betekenis |
|------------|-----------|
| 1..1 | Verplicht, exact 1 |
| 0..1 | Optioneel, max 1 |
| 1..* | Verplicht, meerdere |
| 0..* | Optioneel, meerdere |
| 0..0 | Niet toegestaan |

### Must Support
- Element moet ondersteund worden
- Betekenis context-afhankelijk
- Belangrijk voor interoperabiliteit

### Fixed Values
- Element heeft vaste waarde
- Altijd aanwezig met die waarde

### Bindings
- Verplicht codestelsel
- Strength: required, extensible, preferred

## Extensions

### Wanneer extensions?
- Informatie niet in standaard FHIR
- Lokale of nationale vereisten
- Domein-specifieke data

### Structuur

| Element | Beschrijving |
|---------|--------------|
| url | Unieke identifier |
| value[x] | Waarde met type |

### Complex Extensions
- Meerdere sub-extensions
- Geneste structuur

### Extension Registry
- HL7 extensie registry
- Nationale extensies
- Hergebruik bevorderen

## Slicing

Slicing splits een herhalend element in specifieke "slices":
- Discriminator bepaalt hoe te slicen
- Elke slice heeft eigen constraints
- Voorbeeld: identifier met BSN slice

## Implementation Guides

### Wat is een IG?
- Verzameling profielen voor use case
- Documentatie en voorbeelden
- Validatie resources

### IG Componenten

| Component | Beschrijving |
|-----------|--------------|
| Profiles | StructureDefinitions |
| Extensions | ExtensionDefinitions |
| ValueSets | Toegestane codes |
| CodeSystems | Codestelsel definities |
| Examples | Voorbeeldinstances |
| Narrative | Documentatie |

### Nederlandse IGs
- nl-core (basisprofielen)
- MedMij IGs
- Nictiz informatiestandaarden

## Validatie

### Validatie niveaus

| Niveau | Check |
|--------|-------|
| Syntax | Valide JSON/XML |
| Structure | Resource structuur |
| Cardinality | Min/max elementen |
| Terminology | Codes in ValueSets |
| Invariants | Business rules |

### Validatie tools
- Official FHIR Validator
- Simplifier.net
- Firely Terminal

## Kernbegrippen

- **Profile**: Constraints op base resource
- **Extension**: Toevoeging aan standaard
- **Slicing**: Opdelen herhalend element
- **Implementation Guide**: Verzameling profielen
- **Must Support**: Verplichte ondersteuning
    `,
    sources: [
      { name: "FHIR Profiling", url: "https://www.hl7.org/fhir/profiling.html" },
      { name: "Simplifier.net", url: "https://simplifier.net" },
      { name: "Nictiz FHIR", url: "https://www.nictiz.nl" }
    ]
  },

  "109.4": {
    title: "FHIR API's: REST, Search & Operations",
    summary: "FHIR REST API, search parameters en custom operations",
    content: `
# FHIR API's: REST, Search & Operations

## REST Interacties

### Instance Level

| Interactie | HTTP | URL |
|------------|------|-----|
| read | GET | /[type]/[id] |
| vread | GET | /[type]/[id]/_history/[vid] |
| update | PUT | /[type]/[id] |
| patch | PATCH | /[type]/[id] |
| delete | DELETE | /[type]/[id] |
| history | GET | /[type]/[id]/_history |

### Type Level

| Interactie | HTTP | URL |
|------------|------|-----|
| create | POST | /[type] |
| search | GET | /[type]?params |
| history | GET | /[type]/_history |

### System Level

| Interactie | HTTP | URL |
|------------|------|-----|
| capabilities | GET | /metadata |
| batch/transaction | POST | / |
| history | GET | /_history |
| search | GET | /?params |

## Search

### Basis syntax
GET /Patient?name=jansen&birthdate=1980-01-01

### Search Parameter Types

| Type | Voorbeeld |
|------|-----------|
| string | name=jansen |
| token | identifier=123 |
| reference | subject=Patient/123 |
| date | birthdate=1980-01-01 |
| number | value-quantity=5.4 |
| quantity | value-quantity=5.4||mg |
| uri | url=http://example.org |
| composite | code-value-quantity |

### Modifiers

| Modifier | Voorbeeld | Betekenis |
|----------|-----------|-----------|
| :exact | name:exact=Jansen | Exact match |
| :contains | name:contains=ans | Bevat |
| :not | status:not=active | Niet gelijk |
| :missing | birthdate:missing=true | Ontbreekt |
| :below | code:below=123 | Hierarchisch |

### Prefixes (date/number)

| Prefix | Betekenis |
|--------|-----------|
| eq | Gelijk (default) |
| ne | Niet gelijk |
| lt | Kleiner dan |
| le | Kleiner of gelijk |
| gt | Groter dan |
| ge | Groter of gelijk |

### Chaining
Zoeken via referenties:
- patient.name=jansen
- subject:Patient.birthdate=1980

### Reverse Chaining
Zoeken vanuit gerefereerde resource:
- _has:Observation:subject:code=1234

### Include en Revinclude
- _include=Observation:subject
- _revinclude=Observation:subject

## Operations

### Syntax
- POST /[type]/$[operation]
- POST /[type]/[id]/$[operation]
- GET /[type]/$[operation]?params

### Standaard Operations

| Operation | Doel |
|-----------|------|
| $validate | Resource valideren |
| $meta | Metadata operaties |
| $everything | Alles van patient |
| $expand | ValueSet expanderen |
| $lookup | Code opzoeken |
| $translate | Code vertalen |

### Custom Operations
- Gedefinieerd in OperationDefinition
- In of out parameters
- Synchrone of asynchrone uitvoering

## Batch en Transaction

### Batch
- Meerdere requests in één call
- Onafhankelijke verwerking
- Elke entry eigen status

### Transaction
- ACID transactie
- Alles of niets
- Referenties binnen bundle

### Bundle structuur

| Element | Beschrijving |
|---------|--------------|
| type | batch of transaction |
| entry | Array van requests |
| entry.request | HTTP details |
| entry.resource | Payload |

## Paging

- _count: aantal resultaten
- _offset: startpositie
- Link headers voor navigatie
- next, previous, self links

## Kernbegrippen

- **Search parameter**: Zoekcriterium
- **Chaining**: Zoeken via referenties
- **Include**: Gerelateerde resources ophalen
- **Operation**: Custom FHIR functie
- **Bundle**: Container voor resources
    `,
    sources: [
      { name: "FHIR RESTful API", url: "https://www.hl7.org/fhir/http.html" },
      { name: "FHIR Search", url: "https://www.hl7.org/fhir/search.html" },
      { name: "FHIR Operations", url: "https://www.hl7.org/fhir/operations.html" }
    ]
  },

  "109.5": {
    title: "FHIR Servers & Implementatie",
    summary: "FHIR server implementaties, frameworks en deployment opties",
    content: `
# FHIR Servers & Implementatie

## FHIR Server Opties

| Server | Taal | Licentie | Kenmerken |
|--------|------|----------|-----------|
| HAPI FHIR | Java | Apache 2 | Meest gebruikt, volledig |
| Firely Server | .NET | Commercial | Enterprise features |
| IBM FHIR | Java | Apache 2 | Cloud-ready |
| Microsoft FHIR | .NET | MIT | Azure geïntegreerd |
| LinuxForHealth | Python | Apache 2 | Lightweight |

## HAPI FHIR

### Kenmerken
- Open source, Java-gebaseerd
- Volledige FHIR R4/R5 ondersteuning
- JPA backend (database agnostisch)
- Uitbreidbaar met interceptors

### Architectuur

| Component | Functie |
|-----------|---------|
| HAPI Core | FHIR parsing en modellen |
| JPA Server | Persistence laag |
| REST Server | HTTP endpoints |
| Validation | Resource validatie |

### Deployment
- Standalone JAR
- WAR in container
- Docker image
- Kubernetes helm chart

## Firely Server

### Kenmerken
- .NET gebaseerd
- Enterprise ondersteuning
- Nederlandse oorsprong
- Nictiz samenwerking

### Features

| Feature | Beschrijving |
|---------|--------------|
| Vonk | Core server engine |
| Plugins | Uitbreidbaar |
| Forge | Profiel editor |
| Simplifier | Profile registry |

## Azure API for FHIR

### Kenmerken
- Managed service
- Azure Active Directory
- HIPAA compliant
- Autoscaling

### Componenten

| Service | Functie |
|---------|---------|
| FHIR Server | Kernfunctionaliteit |
| DICOM Service | Beelddata |
| MedTech | Device data |
| De-identification | Privacy |

## Implementatie Architectuur

### Standalone
- FHIR server als centrale hub
- Directe integraties
- Geschikt voor kleinere omgevingen

### Facade Pattern
- FHIR API over bestaande systemen
- Geen data migratie
- Real-time transformatie

### Repository Pattern
- FHIR als data store
- Copy van brondata
- Eigen persistence

## Performance Optimalisatie

| Aspect | Aanpak |
|--------|--------|
| Indexing | Search parameters indexeren |
| Caching | Response caching |
| Pagination | Resultaten beperken |
| Includes | Selectief gebruiken |
| Async | Bulk operaties asynchroon |

## Security

### Authenticatie
- OAuth 2.0
- SMART on FHIR
- Client credentials
- Authorization code

### Autorisatie
- Scope-based access
- Resource-level permissions
- ABAC (Attribute Based)

## Kernbegrippen

- **HAPI**: HL7 API (Java framework)
- **Facade**: API over bestaand systeem
- **Interceptor**: Hook voor processing
- **Persistence**: Data opslag laag
- **SMART**: Substitutable Medical Apps
    `,
    sources: [
      { name: "HAPI FHIR", url: "https://hapifhir.io" },
      { name: "Firely Server", url: "https://fire.ly/products/firely-server/" },
      { name: "Azure FHIR", url: "https://docs.microsoft.com/azure/healthcare-apis/" }
    ]
  },

  "109.6": {
    title: "Nederlandse FHIR Profielen & Nictiz",
    summary: "Nederlandse FHIR implementatie, nl-core profielen en Nictiz standaarden",
    content: `
# Nederlandse FHIR Profielen & Nictiz

## Nictiz en FHIR

Nictiz is het Nederlandse kenniscentrum voor digitale informatie-uitwisseling in de zorg en beheert de nationale FHIR profielen.

## nl-core Profielen

### Doel
- Nederlandse implementatie van FHIR
- Gebaseerd op Zorginformatiebouwstenen (zibs)
- Basis voor alle Nederlandse uitwisseling

### Structuur

| Laag | Beschrijving |
|------|--------------|
| International | HL7 FHIR core |
| nl-core | Nederlandse basisprofielen |
| Use case | Specifieke toepassing |
| Leverancier | Implementatie |

### Belangrijke nl-core profielen

| Profiel | Basis resource | Zib |
|---------|---------------|-----|
| nl-core-Patient | Patient | Patient |
| nl-core-HealthProfessional | Practitioner | Zorgverlener |
| nl-core-HealthcareProvider | Organization | Zorgaanbieder |
| nl-core-Problem | Condition | Probleem |
| nl-core-MedicationUse2 | MedicationStatement | MedicatieGebruik2 |

## Zorginformatiebouwstenen (zibs)

### Wat zijn zibs?
- Klinische concepten gemodelleerd
- Leveranciersonafhankelijk
- Basis voor FHIR profielen

### Zib structuur

| Element | Beschrijving |
|---------|--------------|
| Concept | Klinisch begrip |
| Definitie | Uitleg |
| DCM | Data elementen |
| ValueSets | Toegestane waarden |
| Use cases | Toepassingen |

### Voorbeelden
- Patient (identificatie, naam, adres)
- Bloeddruk (systolisch, diastolisch)
- AllergieIntolerantie (stof, reactie)

## Informatiestandaarden

### MedMij Informatiestandaarden

| Standaard | Doel |
|-----------|------|
| BgZ | Basisgegevensset Zorg |
| Medicatie | Medicatieoverzicht |
| PDF/A | Documenten |
| Vaccinaties | Vaccinatiegegevens |
| Lab | Laboratoriumresultaten |

### Keten Informatiestandaarden

| Standaard | Domein |
|-----------|--------|
| eOverdracht | Verpleegkundige overdracht |
| Geboortezorg | Perinataal |
| BgLZ | Langdurige zorg |
| Beeldbeschikbaarheid | Radiologie |

## MedMij Afsprakenstelsel

### Componenten

| Component | Functie |
|-----------|---------|
| PGO | Persoonlijke Gezondheidsomgeving |
| DVP | Dienstverlener Persoon |
| DVZ | Dienstverlener Zorg |
| Gegevensdienst | FHIR API |

### Technische eisen
- FHIR R4
- nl-core profielen
- OAuth 2.0/OpenID Connect
- DigiD authenticatie

## Simplifier.net

### Functionaliteit
- FHIR profiel registry
- Validatie service
- Documentatie
- Versiebeheer

### Nederlandse packages
- nictiz.fhir.nl.r4.nl-core
- nictiz.fhir.nl.r4.bgz
- nictiz.fhir.nl.r4.medicatieproces

## Kernbegrippen

- **Zib**: Zorginformatiebouwsteen
- **nl-core**: Nederlandse FHIR profielen
- **BgZ**: Basisgegevensset Zorg
- **MedMij**: PGO afsprakenstelsel
- **Nictiz**: Nationaal kenniscentrum
    `,
    sources: [
      { name: "Nictiz", url: "https://www.nictiz.nl" },
      { name: "Simplifier nl-core", url: "https://simplifier.net/nictiz-r4-nl-core" },
      { name: "MedMij", url: "https://www.medmij.nl" }
    ]
  },

  "109.7": {
    title: "SMART on FHIR & CDS Hooks",
    summary: "SMART app launch, OAuth scopes en Clinical Decision Support Hooks",
    content: `
# SMART on FHIR & CDS Hooks

## SMART on FHIR

### Wat is SMART?
SMART (Substitutable Medical Applications, Reusable Technologies) is een framework voor apps die integreren met EPD's via FHIR.

### Kernconcepten

| Concept | Beschrijving |
|---------|--------------|
| App Launch | App starten vanuit EPD |
| Authorization | OAuth 2.0 flow |
| Context | Patient, encounter info |
| Scopes | Toegangsrechten |

## Launch Flows

### EHR Launch
1. Gebruiker start app vanuit EPD
2. EPD stuurt launch context
3. App vraagt authorization
4. App ontvangt access token
5. App kan FHIR API gebruiken

### Standalone Launch
1. App start buiten EPD
2. Gebruiker selecteert server
3. Authorization flow
4. App vraagt patient context

## OAuth Scopes

### Patient Scopes

| Scope | Toegang |
|-------|---------|
| patient/Patient.read | Lees patient data |
| patient/Observation.read | Lees observaties |
| patient/MedicationRequest.* | Alle medicatie acties |

### User Scopes

| Scope | Toegang |
|-------|---------|
| user/Patient.read | Alle patiënten lezen |
| user/*.write | Alles schrijven |

### System Scopes
- Backend services
- Geen gebruikerscontext
- Machine-to-machine

## Launch Context

### Context parameters

| Parameter | Waarde |
|-----------|--------|
| patient | Patient ID |
| encounter | Encounter ID |
| practitioner | Practitioner ID |
| fhirContext | Extra context |

## CDS Hooks

### Wat is CDS Hooks?
Clinical Decision Support Hooks is een standaard voor het integreren van beslisondersteuning in klinische workflows.

### Hooks

| Hook | Trigger |
|------|---------|
| patient-view | Patient geopend |
| order-select | Order geselecteerd |
| order-sign | Order ondertekend |
| appointment-book | Afspraak gepland |
| encounter-start | Consult gestart |

### Architectuur

| Component | Functie |
|-----------|---------|
| CDS Client | EPD/EHR |
| CDS Service | Beslislogica |
| Hook | Trigger moment |
| Card | Response UI |

### CDS Cards

| Veld | Beschrijving |
|------|--------------|
| summary | Korte tekst |
| indicator | info, warning, critical |
| detail | Uitgebreide info |
| suggestions | Aanbevolen acties |
| links | Externe bronnen |

### Prefetch
- Data meesturen met request
- Vermijdt extra API calls
- Gedefinieerd in discovery

## Implementatie

### SMART App Development

| Stap | Actie |
|------|-------|
| 1 | Registreer app bij EPD |
| 2 | Implementeer OAuth flow |
| 3 | Parse launch context |
| 4 | Gebruik FHIR API |

### CDS Service Development

| Stap | Actie |
|------|-------|
| 1 | Implementeer discovery endpoint |
| 2 | Definieer hooks |
| 3 | Implementeer hook endpoints |
| 4 | Return CDS cards |

## Kernbegrippen

- **SMART**: App integratie framework
- **Launch context**: Patient/encounter info
- **Scope**: OAuth toegangsrecht
- **CDS Hooks**: Beslisondersteuning
- **Card**: CDS response element
    `,
    sources: [
      { name: "SMART on FHIR", url: "https://docs.smarthealthit.org" },
      { name: "CDS Hooks", url: "https://cds-hooks.org" },
      { name: "HL7 SMART App Launch", url: "https://www.hl7.org/fhir/smart-app-launch/" }
    ]
  },

  "109.8": {
    title: "FHIR voor Bulk Data & Analytics",
    summary: "FHIR Bulk Data Access, Flat FHIR en analytics toepassingen",
    content: `
# FHIR voor Bulk Data & Analytics

## Bulk Data Access

### Waarom Bulk Data?
- Reguliere REST te langzaam voor grote datasets
- Analytics vereist complete datasets
- Population health use cases
- Data export voor onderzoek

### FHIR Bulk Data Specification

| Aspect | Beschrijving |
|--------|--------------|
| Format | NDJSON (Newline Delimited JSON) |
| Transport | Async via Polling |
| Auth | SMART Backend Services |
| Scope | system/*.read |

## Bulk Export Operaties

### System Export
- GET /$export
- Alle data van server

### Group Export
- GET /Group/[id]/$export
- Specifieke populatie

### Patient Export
- GET /Patient/$export
- Alle patiënten

### Parameters

| Parameter | Beschrijving |
|-----------|--------------|
| _outputFormat | ndjson, parquet |
| _since | Sinds datum |
| _type | Resource types |
| _typeFilter | FHIR search |

## Async Pattern

### Flow

| Stap | Request | Response |
|------|---------|----------|
| 1. Kick-off | POST /$export | 202 + Content-Location |
| 2. Poll | GET [location] | 202 (processing) of 200 |
| 3. Download | GET [file-url] | NDJSON data |

### Status Response (200)

| Veld | Beschrijving |
|------|--------------|
| transactionTime | Export timestamp |
| request | Originele request |
| output | Array van files |
| error | Foutbestanden |

## Flat FHIR

### Probleem
- FHIR is hiërarchisch/genest
- Analytics tools verwachten tabulair
- Transformatie nodig

### Oplossingen

| Aanpak | Beschrijving |
|--------|--------------|
| SQL on FHIR | FHIR ViewDefinitions |
| FHIR to Parquet | Columnar format |
| Custom ETL | Eigen transformatie |

### SQL on FHIR

- ViewDefinition resource
- Declaratieve mapping
- FHIRPath expressions
- Output: tabulaire views

## Analytics Architectuur

### Data Pipeline

| Fase | Tools |
|------|-------|
| Extract | Bulk Data API |
| Transform | Spark, dbt |
| Load | Data Lake/Warehouse |
| Analyze | SQL, BI tools |

### Platforms

| Platform | FHIR Support |
|----------|--------------|
| Databricks | FHIR connectors |
| Azure Synapse | FHIR flattening |
| Google BigQuery | FHIR views |
| AWS HealthLake | Native FHIR |

## Use Cases

### Population Health
- Cohort identificatie
- Quality measures
- Risk stratificatie

### Research
- Retrospectieve studies
- Real-world evidence
- OMOP conversie

### Operations
- Capacity planning
- Resource utilization
- Cost analysis

## FHIR to OMOP

### Conversie strategie
1. Bulk export uit FHIR
2. Vocabulary mapping
3. ETL naar OMOP CDM
4. Data quality checks

### Mapping

| FHIR Resource | OMOP Table |
|---------------|------------|
| Patient | PERSON |
| Condition | CONDITION_OCCURRENCE |
| MedicationRequest | DRUG_EXPOSURE |
| Observation | MEASUREMENT |
| Procedure | PROCEDURE_OCCURRENCE |

## Kernbegrippen

- **NDJSON**: Newline Delimited JSON
- **Bulk Export**: Grote datasets exporteren
- **Flat FHIR**: Tabulaire FHIR data
- **ViewDefinition**: SQL on FHIR mapping
- **Parquet**: Columnar data format
    `,
    sources: [
      { name: "FHIR Bulk Data", url: "https://hl7.org/fhir/uv/bulkdata/" },
      { name: "SQL on FHIR", url: "https://build.fhir.org/ig/FHIR/sql-on-fhir-v2/" },
      { name: "SMART Backend Services", url: "https://www.hl7.org/fhir/smart-app-launch/backend-services.html" }
    ]
  },

  // Track 110: OpenEHR Deep Dive
  "110.1": {
    title: "OpenEHR Architectuur & Filosofie",
    summary: "Fundamentele principes en architectuur van OpenEHR",
    content: `
# OpenEHR Architectuur & Filosofie

## Wat is OpenEHR?

OpenEHR is een open standaard voor het opslaan, ophalen en uitwisselen van elektronische gezondheidsdossiers (EHR).

## Kernfilosofie

### Two-Level Modeling

| Niveau | Beschrijving |
|--------|--------------|
| Reference Model | Technisch datamodel |
| Archetypes | Klinische definities |

### Scheiding van zorgen
- **Techniek**: Stabiel reference model
- **Kliniek**: Evoluerende archetypes
- **Lokaal**: Templates voor use cases

## Ontwerpprincipes

| Principe | Betekenis |
|----------|-----------|
| Future-proof | Data blijft interpreteerbaar |
| Vendor-neutral | Geen leveranciersafhankelijkheid |
| Clinician-led | Clinici modelleren |
| Computable | Machine-leesbaar |

## OpenEHR Componenten

### Reference Model (RM)
- Stabiele kern
- Geneste structuren
- Compositions als container
- Entries voor klinische data

### Archetype Model (AM)
- Constraint-definitie
- ADL (Archetype Definition Language)
- Herbruikbaar

### Template Model
- Combinatie van archetypes
- Lokale aanpassingen
- Basis voor UI

## Structuur Hiërarchie

### Top-level containers

| Type | Beschrijving |
|------|--------------|
| EHR | Compleet dossier |
| Composition | Klinisch document |
| Section | Organisatie |
| Entry | Klinische statement |
| Cluster | Herbruikbare groep |
| Element | Atomaire waarde |

### Entry types

| Entry | Gebruik |
|-------|---------|
| OBSERVATION | Metingen, bevindingen |
| EVALUATION | Diagnoses, assessments |
| INSTRUCTION | Orders, voorschriften |
| ACTION | Uitgevoerde acties |
| ADMIN_ENTRY | Administratief |

## Versioning

### Complete versioning
- Elke wijziging = nieuwe versie
- Audit trail ingebouwd
- Attestations (ondertekening)

### Version lifecycle

| Status | Betekenis |
|--------|-----------|
| complete | Definitief |
| incomplete | In bewerking |
| deleted | Verwijderd (behouden) |

## Governance

### OpenEHR Foundation
- Beheert standaard
- Community-driven
- Internationale samenwerking

### Clinical Knowledge Manager (CKM)
- Centrale archetype repository
- Review proces
- Internationale archetypes

## Kernbegrippen

- **Two-level modeling**: Scheiding techniek en kliniek
- **Reference Model**: Technisch datamodel
- **Archetype**: Klinisch concept definitie
- **Template**: Lokale samenstelling
- **Composition**: Klinisch document
    `,
    sources: [
      { name: "OpenEHR", url: "https://www.openehr.org" },
      { name: "OpenEHR Specifications", url: "https://specifications.openehr.org" }
    ]
  },

  "110.2": {
    title: "Reference Model & Datatypes",
    summary: "OpenEHR Reference Model structuur en datatypes",
    content: `
# Reference Model & Datatypes

## Reference Model Overzicht

Het Reference Model definieert de technische structuur voor alle OpenEHR data.

## RM Packages

| Package | Inhoud |
|---------|--------|
| common | Basis types, versioning |
| data_structures | Clusters, items |
| data_types | Alle datatypes |
| composition | Document structuur |
| ehr | EHR container |
| demographic | Personen, organisaties |

## Composition Structuur

### COMPOSITION

| Element | Beschrijving |
|---------|--------------|
| uid | Unieke identifier |
| archetype_details | Archetype info |
| category | event, persistent |
| context | Setting, participanten |
| content | Secties en entries |

### EVENT_CONTEXT

| Element | Beschrijving |
|---------|--------------|
| start_time | Starttijd |
| end_time | Eindtijd |
| location | Locatie |
| setting | Zorgcontext |
| participations | Deelnemers |

## Entry Types

### OBSERVATION

| Element | Beschrijving |
|---------|--------------|
| data | Geobserveerde data |
| state | Context van observatie |
| protocol | Methode/apparaat |

### EVALUATION

| Element | Beschrijving |
|---------|--------------|
| data | Evaluatie inhoud |
| protocol | Methode |

### INSTRUCTION

| Element | Beschrijving |
|---------|--------------|
| narrative | Vrije tekst |
| activities | Geplande activiteiten |
| expiry_time | Geldigheid |

### ACTION

| Element | Beschrijving |
|---------|--------------|
| time | Uitvoertijd |
| description | Wat gedaan |
| ism_transition | Status |

## Datatypes

### Primitive types

| Type | Voorbeeld |
|------|-----------|
| DV_BOOLEAN | true/false |
| DV_TEXT | Vrije tekst |
| DV_CODED_TEXT | Gecodeerde tekst |
| DV_IDENTIFIER | Identifier |

### Quantity types

| Type | Voorbeeld |
|------|-----------|
| DV_QUANTITY | 120 mmHg |
| DV_COUNT | 42 |
| DV_PROPORTION | 0.5 (ratio) |
| DV_ORDINAL | Likert schaal |

### Date/time types

| Type | Voorbeeld |
|------|-----------|
| DV_DATE | 2024-01-15 |
| DV_TIME | 10:30:00 |
| DV_DATE_TIME | 2024-01-15T10:30:00 |
| DV_DURATION | P3D (3 dagen) |

### Interval types

| Type | Voorbeeld |
|------|-----------|
| DV_INTERVAL<DV_DATE> | Periode |
| DV_INTERVAL<DV_QUANTITY> | Bereik |

## DV_CODED_TEXT

Gestructureerde codering:

| Element | Beschrijving |
|---------|--------------|
| value | Leesbare tekst |
| defining_code | CODE_PHRASE |
| terminology_id | SNOMED, LOINC |
| code_string | De code |

## Clusters en Items

### CLUSTER
- Herbruikbare groepering
- Geneste elementen
- Basis voor archetypen

### ELEMENT
- Atomaire waarde
- value: DV_* type
- null_flavour: ontbrekende waarden

## Kernbegrippen

- **Reference Model**: Technische datastructuur
- **Composition**: Klinisch document
- **Entry**: Klinische statement
- **DV_CODED_TEXT**: Gecodeerde waarde
- **CLUSTER**: Herbruikbare groep
    `,
    sources: [
      { name: "OpenEHR RM", url: "https://specifications.openehr.org/releases/RM/latest" },
      { name: "OpenEHR Datatypes", url: "https://specifications.openehr.org/releases/RM/latest/data_types.html" }
    ]
  },

  "110.3": {
    title: "Archetypes: Ontwerp & Beheer",
    summary: "Archetype design, ADL syntax en Clinical Knowledge Manager",
    content: `
# Archetypes: Ontwerp & Beheer

## Wat zijn Archetypes?

Archetypes zijn formele definities van klinische concepten. Ze definiëren welke data vastgelegd kan worden en met welke constraints.

## Archetype Structuur

| Sectie | Inhoud |
|--------|--------|
| header | Identifier, meta |
| specialize | Parent archetype |
| language | Vertalingen |
| description | Documentatie |
| definition | Data structuur |
| rules | Business rules |
| terminology | Codes en bindings |
| annotations | Extra info |

## Archetype Identifier

Format: openEHR-EHR-[class].[concept].v[version]

| Deel | Voorbeeld |
|------|-----------|
| namespace | openEHR-EHR |
| class | OBSERVATION |
| concept | blood_pressure |
| version | v2 |

Voorbeeld: openEHR-EHR-OBSERVATION.blood_pressure.v2

## ADL Syntax

### Definition Block

| Element | Syntax |
|---------|--------|
| Cardinality | occurrences matches {0..1} |
| Mandatory | occurrences matches {1..1} |
| Multiple | occurrences matches {0..*} |
| Type constraint | DV_QUANTITY[id5] |

### Terminology Block

| Element | Functie |
|---------|---------|
| term_definitions | Termen per taal |
| constraint_definitions | Constraint termen |
| term_bindings | Binding naar SNOMED/LOINC |
| value_sets | Toegestane waarden |

## Specialisatie

### Wat is specialisatie?
- Archetype erft van parent
- Voegt constraints toe
- Kan niet verruimen

### Voorbeeld
- blood_pressure.v2 (general)
- blood_pressure-sitting.v1 (specialised)

## Clinical Knowledge Manager (CKM)

### Functionaliteit

| Feature | Beschrijving |
|---------|--------------|
| Repository | Archetype opslag |
| Review | Peer review proces |
| Translation | Meertalig beheer |
| Governance | Versiebeheer |

### Review Process

| Fase | Actie |
|------|-------|
| Draft | Initieel ontwerp |
| Team review | Interne review |
| Published | Beschikbaar voor gebruik |
| Deprecated | Niet meer aanbevolen |

### Internationale CKM
- openEHR International
- Nationale CKM's (NL, UK, AU)
- Project-specifieke CKM's

## Archetype Ontwerp Principes

### Granulariteit

| Niveau | Voorbeeld |
|--------|-----------|
| Coarse | Volledige anamnese |
| Medium | Bloeddrukmeting |
| Fine | Enkel symptoom |

### Herbruikbaarheid
- Maximaliseer hergebruik
- Slot/fill mechanisme
- Cluster archetypes

### Naming conventions
- Engels als basis
- Underscore scheiding
- Beschrijvende namen

## Tools

### Archetype Designer

| Tool | Leverancier |
|------|-------------|
| Archetype Designer | Better |
| LinkEHR | Universitat Politècnica de València |
| Ocean Archetype Editor | Ocean Informatics |
| ADL Designer | openEHR |

## Kernbegrippen

- **Archetype**: Klinisch concept definitie
- **ADL**: Archetype Definition Language
- **CKM**: Clinical Knowledge Manager
- **Specialisation**: Archetype overerving
- **Slot**: Placeholder voor andere archetypes
    `,
    sources: [
      { name: "OpenEHR CKM", url: "https://ckm.openehr.org" },
      { name: "ADL Specification", url: "https://specifications.openehr.org/releases/AM/latest" }
    ]
  },

  "110.4": {
    title: "Templates & Operational Templates",
    summary: "OpenEHR templates, OPT generatie en formulierontwerp",
    content: `
# Templates & Operational Templates

## Wat zijn Templates?

Templates combineren archetypes tot use-case specifieke datasets. Ze vormen de basis voor formulieren en API's.

## Template vs Archetype

| Aspect | Archetype | Template |
|--------|-----------|----------|
| Scope | Universeel concept | Lokale use case |
| Beheer | Internationaal | Lokaal/project |
| Hergebruik | Hoog | Laag |
| Constraints | Basis | Aanvullend |

## Template Structuur

### Componenten

| Component | Beschrijving |
|-----------|--------------|
| Root archetype | Hoofd composition |
| Filled slots | Ingevulde archetypes |
| Constraints | Extra beperkingen |
| Removed elements | Weggelaten velden |

### Template header

| Element | Waarde |
|---------|--------|
| template_id | Unieke identifier |
| name | Leesbare naam |
| archetype_id | Root archetype |
| build_uid | Versie ID |

## Slot Filling

### Slot definitie (archetype)
Slot definieert welke archetypes toegestaan:
- include: Toegestane archetypes
- exclude: Uitgesloten archetypes

### Fill (template)
Template vult slot met specifiek archetype:
- Kiest uit toegestane opties
- Voegt constraints toe

## Operational Template (OPT)

### Wat is een OPT?
- Gecompileerde template
- Alle archetypes inline
- Klaar voor implementatie

### OPT Format
- XML (OPT 1.4)
- JSON (OPT 2.0)
- Bevat volledige definitie

### OPT Gebruik

| Toepassing | Beschrijving |
|------------|--------------|
| Formulieren | UI generatie |
| Validatie | Data validatie |
| Query | AQL generatie |
| API | Schema voor REST |

## Template Ontwerp

### Best Practices

| Practice | Toelichting |
|----------|-------------|
| Minimaal | Alleen noodzakelijke velden |
| Validatie | Voeg constraints toe |
| Naamgeving | Duidelijke namen |
| Documentatie | Annotaties toevoegen |

### Constraints in Templates

| Type | Voorbeeld |
|------|-----------|
| Remove element | Veld niet tonen |
| Make mandatory | 0..1 → 1..1 |
| Restrict values | ValueSet beperken |
| Fix value | Constante waarde |

## Form Generatie

### Van OPT naar Formulier

| Stap | Tool |
|------|------|
| OPT laden | Form builder |
| Layout | Drag-drop |
| Styling | CSS/themes |
| Validatie | Automatisch |
| Preview | Live test |

### Form Builders

| Tool | Kenmerken |
|------|-----------|
| Better Form Builder | Enterprise |
| EHRbase Web Template | Open source |
| Medblocks UI | React components |

## Web Template

### Modern alternatief
- JSON formaat
- Lighter dan OPT
- Web-friendly

### Structuur

| Element | Beschrijving |
|---------|--------------|
| tree | Hiërarchie |
| inputs | Velden met types |
| annotations | Metadata |
| constraints | Validatieregels |

## Kernbegrippen

- **Template**: Lokale samenstelling archetypes
- **OPT**: Operational Template
- **Slot**: Placeholder in archetype
- **Fill**: Slot vullen met archetype
- **Web Template**: Modern JSON formaat
    `,
    sources: [
      { name: "OpenEHR Templates", url: "https://specifications.openehr.org/releases/AM/latest/OPT2.html" },
      { name: "Better Template Designer", url: "https://tools.openehr.org" }
    ]
  },

  "110.5": {
    title: "AQL: Archetype Query Language",
    summary: "Querying OpenEHR data met Archetype Query Language",
    content: `
# AQL: Archetype Query Language

## Wat is AQL?

AQL is een query-taal specifiek voor OpenEHR data. Het combineert SQL-achtige syntax met archetype-aware querying.

## AQL Kenmerken

| Kenmerk | Beschrijving |
|---------|--------------|
| Archetype-aware | Query op archetype paden |
| SQL-like | Bekende syntax |
| Portable | Onafhankelijk van storage |
| Semantic | Query op betekenis |

## Basis Syntax

### SELECT-FROM-WHERE

| Clause | Functie |
|--------|---------|
| SELECT | Welke data ophalen |
| FROM | Welke compositions |
| WHERE | Filters |
| ORDER BY | Sortering |
| LIMIT | Maximaal aantal |

## FROM Clause

### EHR en Compositions

| Variabele | Betekenis |
|-----------|-----------|
| e | EHR |
| c | COMPOSITION |
| o | OBSERVATION |
| a | ACTION |

### Voorbeeld
FROM EHR e CONTAINS COMPOSITION c[openEHR-EHR-COMPOSITION.encounter.v1]

## CONTAINS Keyword

### Nesting

| Pattern | Betekenis |
|---------|-----------|
| EHR CONTAINS COMPOSITION | Compositions in EHR |
| COMPOSITION CONTAINS OBSERVATION | Observations in Composition |
| AND | Beide aanwezig |
| OR | Een van beide |

## SELECT Clause

### Archetype Paden

| Pad | Beschrijving |
|----|--------------|
| c/name/value | Composition naam |
| o/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value | Specifieke waarde |

### Functies

| Functie | Resultaat |
|---------|-----------|
| COUNT() | Aantal |
| MAX() | Maximum |
| MIN() | Minimum |
| AVG() | Gemiddelde |

## WHERE Clause

### Operators

| Operator | Voorbeeld |
|----------|-----------|
| = | value = 120 |
| != | status != 'active' |
| > < >= <= | value > 100 |
| LIKE | name LIKE '%jan%' |
| MATCHES | code MATCHES {'at0001','at0002'} |
| EXISTS | EXISTS o/data |

### Datum functies

| Functie | Voorbeeld |
|---------|-----------|
| Now() | Huidige tijd |
| Current_date() | Vandaag |

## Voorbeelden

### Alle bloeddrukmetingen
SELECT o/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic
FROM EHR e
CONTAINS OBSERVATION o[openEHR-EHR-OBSERVATION.blood_pressure.v2]

### Metingen laatste maand
WHERE o/data[at0001]/events[at0006]/time > (Current_date() - 30d)

### Specifieke patient
WHERE e/ehr_id/value = 'abc-123'

## AQL Tools

### Query Builders

| Tool | Type |
|------|------|
| Better AQL | Visual builder |
| EHRbase Console | Command line |
| Archetype Designer | Integrated |

### Testing

| Stap | Actie |
|------|-------|
| 1 | Bouw query |
| 2 | Valideer syntax |
| 3 | Test met sample data |
| 4 | Optimaliseer performance |

## Performance

### Tips

| Tip | Effect |
|-----|--------|
| Specifieke paths | Minder data ophalen |
| Indexes | CDR configuratie |
| LIMIT | Beperk resultaten |
| Archetype filters | Minder compositions |

## Kernbegrippen

- **AQL**: Archetype Query Language
- **CONTAINS**: Navigatie door structuur
- **Archetype path**: Pad naar element
- **at-code**: Archetype term code
- **MATCHES**: Set vergelijking
    `,
    sources: [
      { name: "OpenEHR AQL", url: "https://specifications.openehr.org/releases/QUERY/latest/AQL.html" },
      { name: "AQL Examples", url: "https://www.openehr.org/downloads/AQL" }
    ]
  },

  "110.6": {
    title: "OpenEHR Platforms & CDR's",
    summary: "Clinical Data Repositories en OpenEHR platform implementaties",
    content: `
# OpenEHR Platforms & CDR's

## Wat is een CDR?

Een Clinical Data Repository is de database die OpenEHR data opslaat en ontsluit.

## CDR Functionaliteiten

| Functie | Beschrijving |
|---------|--------------|
| Storage | Composition opslag |
| Versioning | Volledige historie |
| Query | AQL ondersteuning |
| Validation | Template validatie |
| API | REST interfaces |

## OpenEHR Platforms

### EHRbase

| Aspect | Details |
|--------|---------|
| Licentie | Apache 2.0 |
| Technologie | Java, PostgreSQL |
| API | REST, openEHR REST |
| Status | Productie-ready |

### Better Platform

| Aspect | Details |
|--------|---------|
| Licentie | Commercial |
| Technologie | Java |
| Features | Form builder, Studio |
| Status | Enterprise |

### Ocean Health Systems

| Aspect | Details |
|--------|---------|
| Licentie | Commercial |
| Technologie | .NET |
| Focus | Australië, UK |
| Status | Enterprise |

### Nedap Healthcare

| Aspect | Details |
|--------|---------|
| Licentie | Commercial |
| Focus | Nederlandse zorg |
| Product | Ons EPD |

## EHRbase Architectuur

### Componenten

| Component | Functie |
|-----------|---------|
| REST API | HTTP interface |
| AQL Engine | Query processing |
| Validation | OPT validatie |
| Storage | PostgreSQL |

### API Endpoints

| Endpoint | Functie |
|----------|---------|
| /ehr | EHR management |
| /composition | CRUD compositions |
| /template | OPT upload |
| /query | AQL uitvoeren |
| /definition | Stored queries |

## REST API Standaard

### OpenEHR REST Spec

| Resource | Methods |
|----------|---------|
| EHR | GET, POST |
| COMPOSITION | GET, POST, PUT, DELETE |
| CONTRIBUTION | GET, POST |
| QUERY | GET, POST |

### Voorbeelden
- POST /ehr - Maak EHR
- GET /composition/{uid} - Haal composition
- POST /query - Voer AQL uit

## Deployment

### On-premise

| Aspect | Overwegingen |
|--------|--------------|
| Infrastructuur | Eigen servers |
| Beheer | IT afdeling |
| Data | Interne opslag |
| Compliance | Volledige controle |

### Cloud

| Provider | Opties |
|----------|--------|
| AWS | EC2, RDS |
| Azure | VMs, PostgreSQL |
| GCP | Compute, Cloud SQL |

### Container

| Tool | Gebruik |
|------|---------|
| Docker | Development |
| Kubernetes | Productie |
| Helm | Deployment |

## Integratie Patronen

### Facade
- OpenEHR als API laag
- Bestaande systemen erachter

### Repository
- OpenEHR als centrale opslag
- Systemen schrijven naar CDR

### Hybrid
- Combinatie van beide
- Per domein bepaald

## Kernbegrippen

- **CDR**: Clinical Data Repository
- **EHRbase**: Open source OpenEHR server
- **Contribution**: Commit van wijzigingen
- **Stored query**: Opgeslagen AQL
- **OpenEHR REST**: Standaard API spec
    `,
    sources: [
      { name: "EHRbase", url: "https://ehrbase.org" },
      { name: "Better Platform", url: "https://better.care/platform" },
      { name: "OpenEHR REST API", url: "https://specifications.openehr.org/releases/ITS-REST/latest" }
    ]
  },

  "110.7": {
    title: "Klinisch Modelleren met OpenEHR",
    summary: "Proces en best practices voor klinisch modelleren",
    content: `
# Klinisch Modelleren met OpenEHR

## Wat is Klinisch Modelleren?

Het formeel vastleggen van klinische concepten in archetypes, gedreven door clinici en ondersteund door informatici.

## Modelleringproces

### Stappen

| Stap | Activiteit |
|------|------------|
| 1 | Requirements verzamelen |
| 2 | Bestaande archetypes zoeken |
| 3 | Gap analyse |
| 4 | Nieuwe archetypes ontwerpen |
| 5 | Review met clinici |
| 6 | Templates samenstellen |
| 7 | Validatie en test |

## Rollen

| Rol | Verantwoordelijkheid |
|-----|---------------------|
| Clinicus | Klinische kennis |
| Modelleur | Technische vertaling |
| Reviewer | Kwaliteitscontrole |
| Governance | Standaardisatie |

## Requirements Verzamelen

### Input bronnen

| Bron | Type |
|------|------|
| Formulieren | Huidige praktijk |
| Protocollen | Standaard zorg |
| Interviews | Klinische kennis |
| Richtlijnen | Best practices |

### Output
- Lijst van concepten
- Data elementen
- Relaties
- Constraints

## Archetype Hergebruik

### CKM Zoeken

| Strategie | Methode |
|-----------|---------|
| Keyword | Zoek op term |
| Browse | Per domein |
| Similar | Vergelijkbare archetypes |

### Evaluatie

| Criterium | Vraag |
|-----------|-------|
| Completeness | Alle elementen aanwezig? |
| Constraints | Passend voor use case? |
| Status | Published of draft? |
| Translations | Nederlandse versie? |

## Nieuw Archetype Ontwerpen

### Design Principes

| Principe | Uitleg |
|----------|--------|
| Maximal dataset | Alles wat relevant kan zijn |
| Clinical focus | Niet technisch gedreven |
| Reusable | Breed inzetbaar |
| Future-proof | Extensies mogelijk |

### Naamgeving

| Element | Conventie |
|---------|-----------|
| Archetype ID | snake_case, Engels |
| Termen | Klinisch duidelijk |
| Beschrijvingen | Uitgebreid |

## Review Proces

### Review Types

| Type | Focus |
|------|-------|
| Technical | ADL correctheid |
| Clinical | Klinische juistheid |
| Editorial | Taal en stijl |
| Translation | Vertalingkwaliteit |

### Review Cycli

| Fase | Actie |
|------|-------|
| Draft | Initieel ontwerp |
| Team review | Eerste feedback |
| Public review | Bredere community |
| Published | Definitief |

## Template Design

### Samenstelling

| Stap | Actie |
|------|-------|
| 1 | Selecteer root archetype |
| 2 | Vul slots |
| 3 | Verwijder onnodige elementen |
| 4 | Voeg constraints toe |
| 5 | Definieer defaults |

### Lokale aanpassingen
- ValueSets beperken
- Velden verplicht maken
- Elementen verbergen

## Governance

### Nationaal beheer
- Centrale CKM
- Review commissie
- Versiebeheer

### Project governance
- Lokale aanpassingen
- Template beheer
- Change management

## Kernbegrippen

- **Klinisch modelleren**: Formaliseren van klinische concepten
- **Gap analyse**: Ontbrekende archetypes identificeren
- **Review**: Kwaliteitscontrole proces
- **Maximal dataset**: Complete set mogelijke data
- **Governance**: Beheer en besluitvorming
    `,
    sources: [
      { name: "OpenEHR Clinical Modeling", url: "https://www.openehr.org/programs/clinicalmodels" },
      { name: "CKM", url: "https://ckm.openehr.org" }
    ]
  },

  "110.8": {
    title: "OpenEHR & FHIR Integratie",
    summary: "Combineren van OpenEHR en FHIR voor opslag en uitwisseling",
    content: `
# OpenEHR & FHIR Integratie

## Waarom Combineren?

| OpenEHR | FHIR |
|---------|------|
| Optimaal voor opslag | Optimaal voor uitwisseling |
| Rijke klinische modellen | Brede adoptie |
| Toekomstbestendig | API-standaard |

## Integratiescenario's

### OpenEHR als Backend

| Flow | Beschrijving |
|------|--------------|
| FHIR in | Data via FHIR API |
| Transform | Naar OpenEHR formaat |
| Store | In CDR |
| FHIR out | Ophalen via FHIR |

### Parallelle Systemen

| Systeem | Rol |
|---------|-----|
| OpenEHR | Primaire opslag |
| FHIR | Externe integratie |
| Sync | Bi-directioneel |

## Mapping Strategieën

### Archetype naar FHIR Profile

| OpenEHR | FHIR |
|---------|------|
| OBSERVATION | Observation |
| EVALUATION | Condition, DiagnosticReport |
| INSTRUCTION | ServiceRequest, MedicationRequest |
| ACTION | Procedure |

### Element Mapping

| OpenEHR Element | FHIR Element |
|-----------------|--------------|
| DV_CODED_TEXT | CodeableConcept |
| DV_QUANTITY | Quantity |
| DV_DATE_TIME | dateTime |
| PARTY_IDENTIFIED | Reference |

## Mapping Tools

### OpenEHR-FHIR Transformatie

| Tool | Type |
|------|------|
| FHIR Bridge | EHRbase plugin |
| ETL scripts | Custom |
| Integration Engine | Mirth, Rhapsody |

### FHIR Bridge

| Feature | Beschrijving |
|---------|--------------|
| Profiles | Nederlandse profielen |
| Bidirectioneel | Beide richtingen |
| Configureerbaar | Mapping regels |

## Architectuur Patronen

### Pattern 1: FHIR Facade

| Component | Functie |
|-----------|---------|
| FHIR API | Externe interface |
| Translator | Mapping laag |
| CDR | OpenEHR opslag |

### Pattern 2: Dual Write

| Stap | Actie |
|------|-------|
| 1 | Data binnenkomt |
| 2 | Schrijf naar OpenEHR |
| 3 | Schrijf naar FHIR |
| 4 | Sync controle |

### Pattern 3: Event-Driven

| Event | Actie |
|-------|-------|
| Create | Publiceer event |
| Subscriber | Transformeer en store |
| Kafka/RabbitMQ | Message broker |

## Uitdagingen

| Uitdaging | Oplossing |
|-----------|-----------|
| Semantische mismatch | Expliciete mappings |
| Granulariteit | Aggregatie/decompositie |
| Terminologie | Gezamenlijke bindings |
| Updates | Versioning strategie |

## Use Cases

### Patiëntportaal
- OpenEHR: Klinische opslag
- FHIR: MedMij/PGO interface

### Onderzoek
- OpenEHR: Rijke data
- FHIR Bulk: Export

### Regionale uitwisseling
- OpenEHR: Ziekenhuis EPD
- FHIR: Twiin/LSP

## Praktijkvoorbeelden

### Better Platform
- Native OpenEHR
- FHIR facade
- Nederlandse profielen

### EHRbase
- FHIR Bridge plugin
- Open source
- Configureerbare mapping

## Kernbegrippen

- **Facade**: API laag over andere storage
- **Dual write**: Naar beide systemen schrijven
- **FHIR Bridge**: OpenEHR-FHIR translator
- **Mapping**: Vertaling tussen modellen
- **Event-driven**: Asynchrone sync
    `,
    sources: [
      { name: "EHRbase FHIR Bridge", url: "https://github.com/ehrbase/fhir-bridge" },
      { name: "OpenEHR FHIR", url: "https://www.openehr.org/programs/fhir" }
    ]
  },

  // Track 111: OMOP & OHDSI Deep Dive
  "111.1": {
    title: "OMOP Common Data Model Fundamentals",
    summary: "Basisprincipes van het OMOP Common Data Model",
    content: `
# OMOP Common Data Model Fundamentals

## Wat is OMOP CDM?

OMOP (Observational Medical Outcomes Partnership) Common Data Model is een gestandaardiseerd datamodel voor observationeel gezondheidsonderzoek.

## OHDSI Community

| Aspect | Beschrijving |
|--------|--------------|
| Naam | Observational Health Data Sciences and Informatics |
| Focus | Open science, collaborative research |
| Deelnemers | 400+ organisaties wereldwijd |
| Output | Tools, studies, standaarden |

## Ontwerpprincipes

| Principe | Uitleg |
|----------|--------|
| Person-centric | Alles gekoppeld aan persoon |
| Standardized | Uniforme vocabulaires |
| Observation period | Tijdsgebonden data |
| Analytical focus | Niet voor primaire zorg |

## CDM Tabel Categorieën

### Clinical Data

| Tabel | Inhoud |
|-------|--------|
| CONDITION_OCCURRENCE | Diagnoses |
| DRUG_EXPOSURE | Medicatie |
| PROCEDURE_OCCURRENCE | Verrichtingen |
| MEASUREMENT | Labwaarden, vitals |
| OBSERVATION | Overige bevindingen |
| DEVICE_EXPOSURE | Hulpmiddelen |

### Health System

| Tabel | Inhoud |
|-------|--------|
| PERSON | Demografische gegevens |
| OBSERVATION_PERIOD | Periode van data |
| VISIT_OCCURRENCE | Zorgcontacten |
| CARE_SITE | Zorglocaties |
| PROVIDER | Zorgverleners |

### Health Economics

| Tabel | Inhoud |
|-------|--------|
| PAYER_PLAN_PERIOD | Verzekering |
| COST | Kosten |

### Metadata

| Tabel | Inhoud |
|-------|--------|
| CDM_SOURCE | Databron info |
| METADATA | Extra metadata |

## PERSON Tabel

| Kolom | Beschrijving |
|-------|--------------|
| person_id | Unieke identifier |
| gender_concept_id | Geslacht (concept) |
| year_of_birth | Geboortejaar |
| race_concept_id | Etniciteit |
| location_id | Adres link |

## CONDITION_OCCURRENCE

| Kolom | Beschrijving |
|-------|--------------|
| condition_occurrence_id | Unieke ID |
| person_id | Link naar persoon |
| condition_concept_id | Gestandaardiseerde code |
| condition_start_date | Startdatum |
| condition_type_concept_id | Bron van diagnose |
| condition_source_value | Originele code |

## Concept IDs

### Standaardisatie
- Elke waarde heeft een concept_id
- Concepts uit standaard vocabulaires
- Mapping van bron naar standaard

### Voorbeeld
- ICD-10 code E11.9 (source)
- SNOMED 44054006 (standard concept)
- concept_id: 201826

## Observation Period

| Aspect | Betekenis |
|--------|-----------|
| Start | Eerste zichtbare data |
| End | Laatste zichtbare data |
| Coverage | Periode van compleetheid |

## Kernbegrippen

- **CDM**: Common Data Model
- **OHDSI**: Open health data community
- **Concept**: Gestandaardiseerde term met ID
- **Observation Period**: Periode van data coverage
- **Source value**: Originele waarde uit bron
    `,
    sources: [
      { name: "OHDSI", url: "https://www.ohdsi.org" },
      { name: "OMOP CDM", url: "https://ohdsi.github.io/CommonDataModel/" }
    ]
  },

  "111.2": {
    title: "OMOP Vocabularies & Concept Mapping",
    summary: "OMOP vocabulaire systeem en mapping van broncodes naar standaard concepts",
    content: `
# OMOP Vocabularies & Concept Mapping

## OMOP Vocabularies

Het OMOP vocabulaire systeem uniformeert medische codes uit verschillende bronnen.

## Vocabulary Structuur

| Tabel | Inhoud |
|-------|--------|
| CONCEPT | Alle concepts |
| VOCABULARY | Vocabulaire metadata |
| DOMAIN | Domeinen |
| CONCEPT_RELATIONSHIP | Relaties |
| CONCEPT_ANCESTOR | Hiërarchie |
| CONCEPT_SYNONYM | Synoniemen |

## CONCEPT Tabel

| Kolom | Beschrijving |
|-------|--------------|
| concept_id | Unieke identifier |
| concept_name | Leesbare naam |
| domain_id | Domein (Condition, Drug, etc.) |
| vocabulary_id | Bron vocabulaire |
| concept_class_id | Type concept |
| standard_concept | S=standaard, C=classificatie |
| concept_code | Originele code |

## Standaard Vocabulaires

### Clinical

| Vocabulaire | Domein |
|-------------|--------|
| SNOMED | Conditions, Procedures |
| LOINC | Measurements |
| RxNorm | Drugs (US) |
| RxNorm Extension | Drugs (Internationaal) |
| UCUM | Units |

### Source Vocabulaires

| Vocabulaire | Gebruik |
|-------------|---------|
| ICD10CM | Diagnoses |
| ICD10PCS | Procedures |
| ATC | Medicatie classificatie |
| NDC | Drug products |
| CPT4 | Procedures (US) |

## Mapping Proces

### Source to Standard

| Stap | Actie |
|------|-------|
| 1 | Identificeer broncode |
| 2 | Zoek in CONCEPT_RELATIONSHIP |
| 3 | Vind relationship_id = 'Maps to' |
| 4 | Gebruik target als standard_concept |

### Mapping Types

| Type | Beschrijving |
|------|--------------|
| Maps to | Standaard mapping |
| Maps to value | Voor waarde mapping |
| Is a | Hiërarchische relatie |

## Athena

### Wat is Athena?
Online vocabulaire repository en download tool.

### Functionaliteit

| Feature | Beschrijving |
|---------|--------------|
| Search | Zoek concepts |
| Download | Vocabulaires downloaden |
| Browse | Hiërarchie bekijken |
| Relationships | Relaties verkennen |

### Licenties
Sommige vocabulaires vereisen licentie:
- SNOMED: Nationaal lidmaatschap
- CPT: AMA licentie
- RxNorm: UMLS account

## Concept Mapping Tools

### Usagi

| Feature | Beschrijving |
|---------|--------------|
| Doel | Broncodes mappen |
| Input | CSV met broncodes |
| Suggesties | Automatische matching |
| Review | Handmatige controle |

### Usagi Workflow

| Stap | Actie |
|------|-------|
| 1 | Import broncodes |
| 2 | Auto-match |
| 3 | Review suggesties |
| 4 | Handmatige mapping |
| 5 | Export mapping tabel |

## Hiërarchie

### CONCEPT_ANCESTOR

| Kolom | Beschrijving |
|-------|--------------|
| ancestor_concept_id | Hoger concept |
| descendant_concept_id | Lager concept |
| min_levels_of_separation | Minimale afstand |
| max_levels_of_separation | Maximale afstand |

### Gebruik
- Cohort inclusie criteria
- Aggregatie voor analyse
- Rollup rapportages

## Best Practices

### Mapping

| Practice | Uitleg |
|----------|--------|
| Prefer standard | Altijd naar standaard |
| Document decisions | Vastleggen keuzes |
| Regular updates | Vocabulaires updaten |
| Quality checks | Unmapped controleren |

## Kernbegrippen

- **Vocabulary**: Codestelsel met concepts
- **Standard concept**: Geprefereerde term
- **Source concept**: Originele broncode
- **Athena**: OMOP vocabulaire repository
- **Usagi**: Mapping tool
    `,
    sources: [
      { name: "ATHENA", url: "https://athena.ohdsi.org" },
      { name: "Usagi", url: "https://github.com/OHDSI/Usagi" },
      { name: "OHDSI Vocabularies", url: "https://ohdsi.github.io/TheBookOfOhdsi/StandardizedVocabularies.html" }
    ]
  },

  "111.3": {
    title: "ETL naar OMOP: Strategie & Tools",
    summary: "Extract-Transform-Load proces voor OMOP conversie",
    content: `
# ETL naar OMOP: Strategie & Tools

## ETL Overzicht

ETL (Extract, Transform, Load) converteert brondata naar OMOP CDM formaat.

## ETL Fasen

| Fase | Activiteit |
|------|------------|
| Extract | Data uit bronsystemen |
| Transform | Conversie naar OMOP |
| Load | Laden in CDM database |

## OHDSI ETL Tools

### White Rabbit

| Functie | Beschrijving |
|---------|--------------|
| Doel | Brondata profilering |
| Output | Scan rapport |
| Input | Database of CSV |

### Scan Rapport

| Informatie | Details |
|------------|---------|
| Tabellen | Aantal, namen |
| Kolommen | Types, vulling |
| Waarden | Frequenties |
| Kwaliteit | Missing, invalid |

### Rabbit-in-a-Hat

| Functie | Beschrijving |
|---------|--------------|
| Doel | ETL mapping documentatie |
| Input | White Rabbit scan |
| Output | Mapping document |

### Mapping Document

| Sectie | Inhoud |
|--------|--------|
| Source tables | Brontabellen |
| Target tables | CDM tabellen |
| Field mappings | Kolom naar kolom |
| Logic | Transformatie regels |

## ETL Architectuur

### Directe ETL

| Component | Tool |
|-----------|------|
| Orchestratie | Airflow, Luigi |
| Transformatie | SQL, Python |
| Scheduling | Cron, Cloud scheduler |

### ELT Variant

| Stap | Actie |
|------|-------|
| Extract | Data naar staging |
| Load | Naar OMOP schema |
| Transform | In-database SQL |

## Transformatie Patterns

### Person Mapping

| Bron | OMOP |
|------|------|
| patient_id | person_id |
| sex | gender_concept_id |
| birth_date | year_of_birth, etc |
| address | location_id |

### Condition Mapping

| Bron | OMOP |
|------|------|
| diagnosis_code (ICD-10) | condition_source_value |
| - | condition_concept_id (via mapping) |
| diagnosis_date | condition_start_date |
| encounter_id | visit_occurrence_id |

### Drug Mapping

| Bron | OMOP |
|------|------|
| medication_code | drug_source_value |
| - | drug_concept_id (via RxNorm) |
| start_date | drug_exposure_start_date |
| quantity | quantity |
| days_supply | days_supply |

## Vocabulaire Mapping

### Mapping Tabellen

| Tabel | Gebruik |
|-------|---------|
| SOURCE_TO_CONCEPT_MAP | Lokale mappings |
| CONCEPT_RELATIONSHIP | Standaard mappings |

### SOURCE_TO_CONCEPT_MAP

| Kolom | Beschrijving |
|-------|--------------|
| source_code | Broncode |
| source_vocabulary_id | Bron vocabulaire |
| target_concept_id | OMOP concept |
| target_vocabulary_id | Target vocabulaire |

## Data Quality

### Pre-ETL Checks

| Check | Doel |
|-------|------|
| Completeness | Alle data aanwezig |
| Validity | Correcte formaten |
| Consistency | Geen conflicten |

### Post-ETL Checks

| Check | Tool |
|-------|------|
| Row counts | ETL validatie |
| ACHILLES | Data karakterisatie |
| DQD | Data Quality Dashboard |

## Best Practices

| Practice | Uitleg |
|----------|--------|
| Incremental | Alleen delta laden |
| Idempotent | Herhaalbaar |
| Audit trail | Logging |
| Rollback | Mogelijkheid terugdraaien |

## Kernbegrippen

- **ETL**: Extract, Transform, Load
- **White Rabbit**: Brondata profiler
- **Rabbit-in-a-Hat**: Mapping documentatie
- **SOURCE_TO_CONCEPT_MAP**: Lokale mappings
- **Staging**: Tussenopslag
    `,
    sources: [
      { name: "White Rabbit", url: "https://github.com/OHDSI/WhiteRabbit" },
      { name: "OHDSI ETL", url: "https://ohdsi.github.io/TheBookOfOhdsi/ExtractTransformLoad.html" }
    ]
  },

  "111.4": {
    title: "OHDSI Tools: ATLAS & Cohort Definitie",
    summary: "ATLAS platform en cohort definitie voor onderzoek",
    content: `
# OHDSI Tools: ATLAS & Cohort Definitie

## ATLAS Overzicht

ATLAS is het centrale analytics platform van OHDSI voor data exploratie en onderzoek.

## ATLAS Modules

| Module | Functie |
|--------|---------|
| Data Sources | Database connecties |
| Vocabulary Search | Concept zoeken |
| Concept Sets | Concept groepen |
| Cohort Definitions | Populatie definitie |
| Characterizations | Data beschrijving |
| Cohort Pathways | Zorgpaden analyse |
| Incidence Rates | Incidentie berekening |
| Estimation | Effect schatting |
| Prediction | Predictive modeling |

## Cohort Definitie

### Wat is een Cohort?
Een cohort is een set personen die voldoen aan specifieke criteria gedurende een bepaalde tijd.

### Cohort Structuur

| Element | Beschrijving |
|---------|--------------|
| Entry events | Hoe komt iemand in cohort |
| Inclusion criteria | Extra voorwaarden |
| Exit criteria | Wanneer eruit |
| Censoring | Observatie einde |

### Entry Events

| Type | Voorbeeld |
|------|-----------|
| Condition | Diagnose diabetes |
| Drug | Start metformine |
| Procedure | Heupvervanging |
| Measurement | Verhoogde glucose |
| Visit | Ziekenhuisopname |

## Concept Sets

### Definitie
Verzameling van concepts die samen een klinisch begrip representeren.

### Opbouw

| Actie | Beschrijving |
|-------|--------------|
| Add concepts | Selecteer concepts |
| Include descendants | Voeg kinderen toe |
| Exclude | Sluit specifieke uit |
| Map to standard | Automatisch |

### Voorbeeld: Diabetes

| Concept | ID |
|---------|-----|
| Type 2 diabetes mellitus | 201826 |
| + all descendants | auto |
| - Gestational diabetes | exclude |

## Inclusion Criteria

### Temporal Logic

| Criterium | Betekenis |
|-----------|-----------|
| Within X days before | In periode voor |
| Within X days after | In periode na |
| Having between X and Y | Aantal occurrences |
| First occurrence | Eerste keer |

### Attribute Criteria

| Attribuut | Voorbeeld |
|-----------|-----------|
| Age | Tussen 40 en 65 |
| Gender | Vrouw |
| Visit type | Inpatient |

## Cohort Generation

### Proces

| Stap | Actie |
|------|-------|
| 1 | Definieer cohort in ATLAS |
| 2 | Genereer SQL |
| 3 | Executeer tegen database |
| 4 | Resultaat in COHORT tabel |

### COHORT Tabel

| Kolom | Beschrijving |
|-------|--------------|
| cohort_definition_id | ID van definitie |
| subject_id | Person ID |
| cohort_start_date | Entry datum |
| cohort_end_date | Exit datum |

## Characterizations

### Features

| Type | Beschrijving |
|------|--------------|
| Demographics | Leeftijd, geslacht |
| Conditions | Comorbiditeiten |
| Drugs | Medicatiegebruik |
| Measurements | Lab waarden |
| Procedures | Verrichtingen |

### Output
- Prevalentie per feature
- Vergelijking cohorten
- Stratificatie

## Best Practices

| Practice | Uitleg |
|----------|--------|
| Clear entry | Eenduidige start |
| Washout | Nieuwe events |
| Adequate follow-up | Voldoende observatie |
| Validate | Klinische review |

## Kernbegrippen

- **ATLAS**: OHDSI analytics platform
- **Cohort**: Populatie met criteria
- **Concept Set**: Groep van concepts
- **Entry Event**: Cohort inclusie moment
- **Characterization**: Cohort beschrijving
    `,
    sources: [
      { name: "ATLAS", url: "https://github.com/OHDSI/Atlas" },
      { name: "OHDSI Cohorts", url: "https://ohdsi.github.io/TheBookOfOhdsi/Cohorts.html" }
    ]
  },

  "111.5": {
    title: "Observationeel Onderzoek met OHDSI",
    summary: "Population-level effect estimation en patient-level prediction",
    content: `
# Observationeel Onderzoek met OHDSI

## Typen Onderzoek

| Type | Vraag |
|------|-------|
| Characterization | Wie zijn de patiënten? |
| Population-level estimation | Wat is het effect? |
| Patient-level prediction | Wie krijgt uitkomst? |

## Population-Level Estimation (PLE)

### Vraagstelling
Wat is het causale effect van behandeling A vs B op uitkomst Y?

### Study Designs

| Design | Beschrijving |
|--------|--------------|
| Cohort | Vergelijk behandelgroepen |
| Self-controlled | Persoon als eigen controle |
| Case-control | Vanuit uitkomst terugredeneren |

### Cohort Study

| Element | Definitie |
|---------|-----------|
| Target cohort | Behandeling A |
| Comparator cohort | Behandeling B |
| Outcome | Te meten uitkomst |
| Time-at-risk | Risicoperiode |

## Confounding

### Probleem
Observationele data is niet gerandomiseerd, waardoor bias kan ontstaan.

### Oplossingen

| Methode | Aanpak |
|---------|--------|
| Propensity Score | Kans op behandeling |
| PS Matching | Vergelijkbare patiënten |
| PS Stratification | Groepen maken |
| PS Weighting | IPTW |

### Propensity Score

| Stap | Actie |
|------|-------|
| 1 | Definieer covariates |
| 2 | Fit model (logistic) |
| 3 | Bereken PS per persoon |
| 4 | Match/Stratify/Weight |
| 5 | Analyseer |

## Patient-Level Prediction (PLP)

### Vraagstelling
Welke patiënten hebben verhoogd risico op uitkomst Y?

### Prediction Framework

| Element | Beschrijving |
|---------|--------------|
| Target population | Wie predicteren |
| Outcome | Wat voorspellen |
| Time-at-risk | Wanneer |
| Features | Predictoren |
| Model | Algoritme |

### Algoritmes

| Model | Type |
|-------|------|
| Logistic Regression | Lineair |
| LASSO | Regularized |
| Random Forest | Tree-based |
| Gradient Boosting | Ensemble |
| Neural Network | Deep learning |

## OHDSI Study Packages

### Wat is een Study Package?
R package met complete studie definitie en analyse code.

### Componenten

| Component | Inhoud |
|-----------|--------|
| Cohorts | JSON definities |
| Analysis | R scripts |
| Settings | Parameters |
| Results | Output structuur |

### Reproducibility
- Zelfde code op verschillende databases
- Federated execution
- Resultaten aggregatie

## Network Studies

### Federated Model

| Stap | Locatie |
|------|---------|
| Study design | Centraal |
| Data | Lokaal |
| Analysis | Lokaal |
| Results | Geaggregeerd |

### Voordelen
- Data verlaat instelling niet
- Grotere populaties
- Internationale vergelijking

## Evidence Quality

### Diagnostics

| Diagnostic | Doel |
|------------|------|
| PS distribution | Balance check |
| Covariate balance | Confounding control |
| Negative controls | Bias detection |
| Empirical calibration | Effect correction |

### Negative Controls
- Uitkomsten zonder verwacht effect
- Detecteert systematische bias
- Calibreert resultaten

## Kernbegrippen

- **PLE**: Population-Level Estimation
- **PLP**: Patient-Level Prediction
- **Propensity Score**: Kans op behandeling
- **Confounding**: Verstorende variabelen
- **Federated**: Gedistribueerde analyse
    `,
    sources: [
      { name: "OHDSI Methods", url: "https://ohdsi.github.io/TheBookOfOhdsi/PopulationLevelEstimation.html" },
      { name: "PatientLevelPrediction", url: "https://ohdsi.github.io/PatientLevelPrediction/" }
    ]
  },

  "111.6": {
    title: "Data Quality & ACHILLES",
    summary: "Data kwaliteit bewaking met ACHILLES en Data Quality Dashboard",
    content: `
# Data Quality & ACHILLES

## Data Quality in OMOP

Kwaliteit van OMOP data is cruciaal voor betrouwbaar onderzoek.

## ACHILLES

### Wat is ACHILLES?
Automated Characterization of Health Information at Large-scale Longitudinal Evidence Systems.

### Functionaliteit

| Feature | Beschrijving |
|---------|--------------|
| Characterization | Database beschrijving |
| Quality checks | Automatische controles |
| Visualization | Dashboard |
| Benchmarking | Vergelijking |

### ACHILLES Analyses

| Categorie | Voorbeelden |
|-----------|-------------|
| Person | Leeftijdsverdeling, geslacht |
| Observation Period | Duur, overlap |
| Conditions | Prevalentie, trends |
| Drugs | Gebruik, combinaties |
| Measurements | Waardes, missing |

## ACHILLES Heel

### Quality Rules

| Categorie | Type checks |
|-----------|-------------|
| Completeness | Missing values |
| Conformance | Value formats |
| Plausibility | Logische checks |

### Rule Severities

| Level | Betekenis |
|-------|-----------|
| ERROR | Kritiek probleem |
| WARNING | Aandachtspunt |
| NOTIFICATION | Informatief |

## Data Quality Dashboard (DQD)

### Structuur

| Component | Functie |
|-----------|---------|
| Checks | Individuele controles |
| Results | Pass/fail status |
| Visualization | Overzicht |
| Reports | Documentatie |

### Check Categorieën

| Categorie | Beschrijving |
|-----------|--------------|
| Completeness | Aanwezigheid data |
| Conformance | Format correctheid |
| Plausibility | Klinische logica |
| Verification | Source vergelijking |

### Voorbeelden Checks

| Check | Type |
|-------|------|
| Person without observation period | Completeness |
| Invalid concept ID | Conformance |
| Age > 150 | Plausibility |
| Counts match source | Verification |

## Kwaliteitsdimensies

### Intrinsic Quality

| Dimensie | Vraag |
|----------|-------|
| Accuracy | Is het correct? |
| Completeness | Is alles aanwezig? |
| Consistency | Geen contradicties? |

### Contextual Quality

| Dimensie | Vraag |
|----------|-------|
| Timeliness | Actueel genoeg? |
| Relevance | Geschikt voor doel? |
| Fitness | Past bij use case? |

## Verbetering Workflow

### Iteratief Proces

| Stap | Actie |
|------|-------|
| 1 | Run ACHILLES/DQD |
| 2 | Analyseer bevindingen |
| 3 | Prioriteer issues |
| 4 | Fix in ETL |
| 5 | Herhaal |

### Documentatie

| Item | Vastleggen |
|------|------------|
| Known issues | Bekende problemen |
| Limitations | Beperkingen data |
| Coverage | Welke data aanwezig |

## Reporting

### ACHILLES Web

| View | Inhoud |
|------|--------|
| Dashboard | Overzicht metrics |
| Data Density | Vulling over tijd |
| Concept | Per domein |
| Reports | Exporteerbaar |

### DQD Report

| Sectie | Inhoud |
|--------|--------|
| Summary | Overall score |
| By category | Per check type |
| Details | Individuele fails |
| Trends | Over tijd |

## Kernbegrippen

- **ACHILLES**: Data characterization tool
- **DQD**: Data Quality Dashboard
- **Completeness**: Data aanwezigheid
- **Plausibility**: Klinische logica
- **Quality rule**: Geautomatiseerde check
    `,
    sources: [
      { name: "ACHILLES", url: "https://github.com/OHDSI/Achilles" },
      { name: "Data Quality Dashboard", url: "https://ohdsi.github.io/DataQualityDashboard/" }
    ]
  },

  "111.7": {
    title: "OMOP in de Nederlandse Zorg",
    summary: "OMOP implementaties en projecten in Nederland",
    content: `
# OMOP in de Nederlandse Zorg

## OMOP in Nederland

Nederland kent groeiende adoptie van OMOP voor onderzoek en analytics.

## Health-RI

### Wat is Health-RI?
Nationale infrastructuur voor gezondheidsonderzoek met data.

### OMOP Rol

| Aspect | Beschrijving |
|--------|--------------|
| Standaard | OMOP als data model |
| Federatie | Gedistribueerde analyse |
| Tools | OHDSI stack |

### Doelen
- Herbruikbare data
- Multicenter onderzoek
- Real-world evidence

## Nederlandse OMOP Projecten

### OHDSI Netherlands

| Aspect | Details |
|--------|---------|
| Type | Nationaal chapter |
| Focus | Kennisdeling |
| Activiteiten | Meetings, training |

### EHDEN

| Aspect | Details |
|--------|---------|
| Naam | European Health Data Evidence Network |
| Rol NL | Meerdere databronnen |
| Doel | Europese federatie |

### DARWIN EU

| Aspect | Details |
|--------|---------|
| Doel | EMA regulatory evidence |
| Data | OMOP databases |
| Analyses | Drug safety |

## Nederlandse Databronnen

### Potentiële Bronnen

| Bron | Type data |
|------|-----------|
| Ziekenhuis EPD | Klinische data |
| Huisarts HIS | Eerstelijn |
| NIVEL | Registraties |
| Apotheek | Medicatie |
| Vektis | Declaraties |

### ETL Uitdagingen NL

| Uitdaging | Specificiteit |
|-----------|---------------|
| ICD-10-NL | Nederlandse variant |
| ATC | Medicatie codering |
| CBV | Verrichtingen |
| G-Standaard | Geneesmiddelen |

## Vocabulaire Mapping NL

### Nederlandse Codes

| Code | OMOP Mapping |
|------|--------------|
| ICD-10-NL | ICD10CM/SNOMED |
| ATC | RxNorm Extension |
| NZa codes | SNOMED/Custom |
| CBV | SNOMED/CPT4 |

### G-Standaard naar RxNorm

| Niveau | Mapping |
|--------|---------|
| GPK | RxNorm Ingredient |
| PRK | RxNorm Clinical Drug |
| HPK | RxNorm Branded Drug |

## Implementatie Strategie

### Stappen

| Fase | Activiteiten |
|------|--------------|
| 1 | Bronanalyse (White Rabbit) |
| 2 | Mapping ontwerp |
| 3 | Vocabulaire mapping (Usagi) |
| 4 | ETL ontwikkeling |
| 5 | Data quality checks |
| 6 | Validatie met clinici |

### Governance

| Aspect | Aanpak |
|--------|--------|
| Privacy | AVG compliance |
| Consent | Toestemming model |
| Security | NEN 7510 |
| Access | Autorisatiemodel |

## Use Cases NL

### Klinisch Onderzoek

| Type | Voorbeeld |
|------|-----------|
| Drug safety | Bijwerkingenonderzoek |
| Effectiveness | Behandeleffecten |
| Epidemiologie | Ziektelast |

### Healthcare Analytics

| Type | Voorbeeld |
|------|-----------|
| Quality | Kwaliteitsindicatoren |
| Benchmarking | Ziekenhuisvergelijking |
| Efficiency | Zorgpadanalyse |

## Toekomst

### Trends

| Trend | Ontwikkeling |
|-------|--------------|
| Federatie | Health-RI netwerk |
| Real-time | Streaming naar OMOP |
| AI/ML | Predictive analytics |

## Kernbegrippen

- **Health-RI**: Nederlandse onderzoeksinfrastructuur
- **EHDEN**: Europees OMOP netwerk
- **G-Standaard**: Nederlandse medicatiedatabase
- **Federatie**: Gedistribueerd onderzoek
- **CBV**: Code Beheer Verrichtingen
    `,
    sources: [
      { name: "Health-RI", url: "https://www.health-ri.nl" },
      { name: "EHDEN", url: "https://www.ehden.eu" },
      { name: "OHDSI Europe", url: "https://www.ohdsi-europe.org" }
    ]
  },

  "111.8": {
    title: "OMOP, FHIR & OpenEHR: Samen Gebruiken",
    summary: "Integratie van OMOP met FHIR en OpenEHR voor complete data architectuur",
    content: `
# OMOP, FHIR & OpenEHR: Samen Gebruiken

## Complementaire Standaarden

| Standaard | Primaire rol |
|-----------|--------------|
| FHIR | Uitwisseling |
| OpenEHR | Klinische opslag |
| OMOP | Onderzoek & analytics |

## Integratie Architectuur

### Multi-Model Benadering

| Laag | Standaard |
|------|-----------|
| Operationeel | OpenEHR/FHIR |
| Uitwisseling | FHIR |
| Analytics | OMOP |
| Research | OMOP |

### Data Flow

| Stap | Flow |
|------|------|
| 1 | Data capture in EPD |
| 2 | Opslag in OpenEHR |
| 3 | Uitwisseling via FHIR |
| 4 | ETL naar OMOP |
| 5 | Onderzoek in ATLAS |

## FHIR naar OMOP

### Mapping Strategieën

| FHIR Resource | OMOP Tabel |
|---------------|------------|
| Patient | PERSON |
| Condition | CONDITION_OCCURRENCE |
| MedicationRequest | DRUG_EXPOSURE |
| Observation | MEASUREMENT/OBSERVATION |
| Procedure | PROCEDURE_OCCURRENCE |
| Encounter | VISIT_OCCURRENCE |

### ETL Tools

| Tool | Beschrijving |
|------|--------------|
| FHIR to OMOP | Open source ETL |
| Custom scripts | Python/SQL |
| Integration engines | Informatica, etc |

### Mapping Challenges

| Challenge | Oplossing |
|-----------|-----------|
| Granulariteit | Aggregatie regels |
| Vocabularies | Concept mapping |
| Temporality | Datum logica |
| References | ID mapping |

## OpenEHR naar OMOP

### Mapping Aanpak

| OpenEHR | OMOP |
|---------|------|
| OBSERVATION | MEASUREMENT |
| EVALUATION | CONDITION_OCCURRENCE |
| INSTRUCTION | DRUG_EXPOSURE |
| ACTION | PROCEDURE_OCCURRENCE |

### AQL naar SQL

| Stap | Actie |
|------|-------|
| 1 | Definieer AQL query |
| 2 | Extract naar tussenstap |
| 3 | Transform naar OMOP |
| 4 | Load in CDM |

## Unified Architecture

### Reference Architecture

| Component | Technologie |
|-----------|-------------|
| Capture | EHR, devices |
| Store | OpenEHR CDR |
| Exchange | FHIR server |
| Analytics | OMOP database |
| Research | OHDSI tools |

### Data Governance

| Aspect | Aanpak |
|--------|--------|
| Master data | Eenmalige definitie |
| Lineage | Herkomst tracking |
| Quality | Controles per laag |
| Security | Role-based access |

## Use Cases

### Clinical + Research

| Fase | Standaard |
|------|-----------|
| Zorgverlening | OpenEHR |
| Overdracht | FHIR |
| Kwaliteitsregistratie | OMOP |
| Onderzoek | OMOP |

### Real-World Evidence

| Stap | Flow |
|------|------|
| 1 | Behandeling in EPD |
| 2 | Data naar OMOP |
| 3 | Cohort definitie |
| 4 | Effectiviteitsanalyse |
| 5 | Feedback naar kliniek |

## Implementation Patterns

### Pattern 1: Sequential

| Stap | Actie |
|------|-------|
| 1 | Implementeer OpenEHR |
| 2 | Voeg FHIR facade toe |
| 3 | ETL naar OMOP |

### Pattern 2: Parallel

| System | Doel |
|--------|------|
| OpenEHR | Primair |
| FHIR | Integratie |
| OMOP | Analytics (sync) |

### Pattern 3: Hub

| Component | Rol |
|-----------|-----|
| Data lake | Centrale opslag |
| OpenEHR view | Klinisch |
| FHIR view | API |
| OMOP view | Research |

## Best Practices

| Practice | Uitleg |
|----------|--------|
| Single source | Een bron van waarheid |
| Terminology alignment | Consistente codes |
| Automated ETL | Continue sync |
| Quality gates | Checks per overgang |

## Kernbegrippen

- **Multi-model**: Meerdere standaarden samen
- **Data lineage**: Herkomst tracking
- **Unified architecture**: Geïntegreerd ontwerp
- **Real-world evidence**: Bewijs uit praktijkdata
- **Data lake**: Centrale data opslag
    `,
    sources: [
      { name: "OHDSI on FHIR", url: "https://build.fhir.org/ig/HL7/cdmh/" },
      { name: "OpenEHR OMOP", url: "https://www.openehr.org" },
      { name: "Health Data Architecture", url: "https://www.nictiz.nl" }
    ]
  }
}

export const getModuleContent = (moduleId) => {
  return moduleContent[moduleId] || null
}
