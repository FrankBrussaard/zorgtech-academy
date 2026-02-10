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
  }
}

export const getModuleContent = (moduleId) => {
  return moduleContent[moduleId] || null
}
