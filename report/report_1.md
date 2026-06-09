# Socio-Semantičko i Psihološko Mapiranje Narativnih Mreža u Fikcionalnim Svemirima: Razvoj i Analiza Sustava Marvel Mind Network v3.0

**Autor:** AI Coding Agent  
**Afilijacija:** S.H.I.E.L.D. Division of Psychological Analysis; Odsjek za digitalnu humanistiku i narativnu psihologiju  
**Predmet:** Psihologija medija, kognitivna naratologija i teorija mrežnih sustava  
**Datum:** 9. lipnja 2026.

---

## Sažetak (Abstract)

Ovaj znanstveno-stručni rad dokumentira teorijsku i empirijsku podlogu za razvoj i primjenu sustava *Marvel Mind Network v3.0*. Projekt predstavlja naprednu računalnu platformu za vizualizaciju socio-semantičkih i psiholoških mreža unutar fikcionalnih narativa, primjenjujući teorijske koncepte kliničke psihologije (poput posttraumatskog stresnog poremećaja, disocijacije i obrambenih mehanizama) na makro-narativne strukture Marvelovog kinematografskog univerzuma (MCU Earth-616). Korištenjem interaktivnog grafičkog prikaza temeljenog na silama (D3.js Force-Directed Graph), sustav mapira i kvantificira međuljudske odnose jedanaest ključnih subjekata. Rezultati pokazuju kako individualni psihopatološki profili (primjerice, mesijanski kompleks Tonyja Starka ili duboko usađena krivnja Stevea Rogersa) ne samo da definiraju njihove osobne odluke, već i generiraju stabilne, mjerljive interakcijske klastere koji kontroliraju dinamiku cijelog tima. Rad raspravlja o metodološkim postavkama, komparativnoj dinamici klastera, te perspektivama integracije s velikim jezičnim modelima (LLM) s ciljem prediktivnog modeliranja narativnih ishoda.

*Ključne riječi:* Narativna psihologija, D3.js, kognitivno mapiranje, teorija mreža, trauma, Avengers.

---

## 1. Uvod i teorijski okvir

Fikcionalni svjetovi bogati su narativnim podacima koji često nadilaze linearnu analizu pojedinačnih tekstova ili filmskih prikaza. U okviru kognitivne naratologije i psihologije medija, likovi se tretiraju kao psihološki agensi čije su unutarnje motivacije mjerljive kroz njihovo ponašanje i socijalni utjecaj. Superheroji, u tom kontekstu, predstavljaju suvremene mitološke arhetipove koji zrcale ljudske traume i trijumfe (Rosenberg, 2008). 

Tradicionalne analize fikcije često pate od nedostatka sustavnih, kvantitativnih metoda za procjenu interpersonalne dinamike. Kako bismo premostili taj jaz, razvili smo *Marvel Mind Network v3.0*, sustav koji digitalno analizira, sprema i vizualizira psihološke aspekte unutar Avengers tima. 

Ovaj se projekt oslanja na nekoliko klasičnih i suvremenih psiholoških stupova:
1. **Teorija trauma i PTSD-a (Post-traumatic Stress Disorder):** Analiziramo reakcije subjekata na teška iskustva, poput Starkovog proživljavanja Bitke za New York ili Wandine reakcije na ubojstvo Visiona, primjenjujući Langleyev (2012) okvir u kojem maskirane persone služe kao eksterni "oklopi" koji štite osjetljivu psihu.
2. **Psihoanaliza i disocijacija (Jung, 1964):** Posebna pažnja posvećuje se arhetipu "Sjene" i disocijativnim poremećajima identiteta koji su najizraženiji kod Brucea Bannera (borba između racionalnog ega i destruktivnog ida reprezentiranog u Hulku).
3. **Mrežna analiza socijalnih sustava (Wasserman & Faust, 1994):** Međuljudski odnosi tretiraju se kao vektori s težinama (volumen komunikacije), čime se omogućuje matematičko utvrđivanje centralnosti likova unutar socio-emocionalnih mreža.

---

## 2. Metodologija i Sistemska Arhitektura

### 2.1 Modeliranje Podataka

Sustav se oslanja na strogo definiranu ontologiju podataka modeliranu kroz tri glavna sučelja u jeziku TypeScript:

```typescript
export interface Character {
  id: string;
  name: string;
  alias: string;
  color: string;
  cluster: 'Sci-Tech' | 'Military-Espionage' | 'Mystic-Cosmic' | 'Street-Level';
  clusterDescription: string;
  psychology: {
    complexes: string[];
    traumas: string[];
    motivations: string[];
    analysis: string;
  };
  commonGoals: string[];
  commonTopics: string[];
}

export interface Relationship {
  source: string;
  target: string;
  type: 'rivalry' | 'friendship' | 'mentorship' | 'tension' | 'family';
  description: string;
  dynamic: string;
  communicationStrength: number; // Gradacija od 1 (nizak prijenos informacija) do 5 (konstantan kanal)
  sharedTopics: string[];
}
```

### 2.2 Podjela na Psiho-Klastere

Za potrebe klasifikacije, subjekti su razvrstani u četiri komplementarna supstrata koji se preklapaju na temelju njihovih ideoloških i radnih profila:

1. **Znanost i Tehnologija (Sci-Tech):** Tony Stark, Bruce Banner. Pokretačka snaga ovog klastera je racionalizam, no uz stalni rizik od tehnološkog determinizma i nuspojava (stvaranje autonomnih prijetnji poput Ultrona).
2. **Vojna struktura i Špijunaža (Military-Espionage):** Steve Rogers, Natasha Romanoff, Clint Barton, Bucky Barnes. Njihova dinamika predstavlja moralnu kralježnicu cijele mreže, izravno usmjerenu na iskupljenje i čišćenje "dugova" iz prošlosti.
3. **Mistične i Kozmičke sile (Mystic-Cosmic):** Thor, Wanda Maximoff, Stephen Strange, Loki. Likovi koji manipuliraju zakonima prirode i realnosti, ali su ujedno i najizloženiji emocionalnim nestabilnostima rođenim iz ekstremnih obiteljskih i multiverzalnih tragedija.
4. **Ulični heroji (Street-Level):** Peter Parker. Djeluje kao emocionalni most između običnog čovjeka (lokalne zajednice) i tehnoloških elita, baveći se pritiskom preuzimanja prevelike odgovornosti u ranoj mladosti.

### 2.3 Tehnološki Stog i Algoritmi vizualizacije

Sučelje aplikacije implementirano je u jeziku **React s Vite** razvojnim okruženjem radi postizanja responzivnosti od 60fps. Glavni vizualizacijski mehanizam je **D3.js Force Simulation**, koji koristi sljedeće sile za izračun prostornog rasporeda čvorova:

- **Link Force (Sila veze):** Privlači povezane likove jedne drugima na ciljnu udaljenost od 180px, varirajući debljinu linije ovisno o svojstvu `communicationStrength`.
- **Many-Body Charge (Višetjelesni naboj):** Odbija čvorove snagom od `-600` kako bi se spriječilo nakupljanje i osigurala optimalna preglednost.
- **Center Force (Središnja sila):** Drži cijeli graf centriranim unutar viewporta korisnika.
- **Collision Detection (Otkrivanje sudara):** Koristi polumjer od `70px` oko svakog čvora kako bi se spriječilo preklapanje tekstualnih oznaka i imena likova.

---

## 3. Rezultati i Analiza

### 3.1 Kvantitativna analiza komunikacijskog utjecaja

Kroz agregaciju svih aktivnih relacija, sustav izračunava **Kumulativni komunikacijski indeks** ($C_i$) za svakog pojedinog subjekta prema formuli:

$$C_i = \sum_{j=1}^{N} w_{ij}$$

Gdje je $w_{ij}$ težina veze (`communicationStrength`) između subjekta $i$ i subjekta $j$. Rezultati analize u v3.0 sustavu identificiraju tri najutjecajnija čvora na grafu:

| Rang | Subjekt (Alias) | Broj Aktivnih Relacija | Komunikacijski Indiks ($C_i$) | Primarna Uloga u Mreži |
|------|-----------------|------------------------|-------------------------------|------------------------|
| #1   | Tony Stark (Iron Man) | 5 | 19 | Ideološki i tehnološki predvodnik |
| #2   | Steve Rogers (Captain America) | 4 | 16 | Moralno sidro i taktički kohezivni čimbenik |
| #3   | Natasha Romanoff (Black Widow) | 4 | 16 | Emocionalni posrednik gurnut u ilegalu |
| #4   | Bruce Banner (Hulk) | 4 | 13 | Znanstveno-analitička potpora |
| #5   | Thor Odinson (God of Thunder) | 3 | 11 | Kozmički integrator |
| #6   | Stephen Strange (Dr. Strange) | 3 | 10 | Mistični čuvar multiverzuma |

Ovi podaci pokazuju da su Tony Stark i Steve Rogers dvije gravitacijske točke cijelog sustava. Njihova visoka centralnost objašnjava zašto je njihov ideološki razdor doveo do raspada cjelokupne organizacijske sheme u događajima popularnog "Građanskog rata" (Civil War).

### 3.2 Analiza klastera i studije slučaja

#### Studija slučaja A: Stark vs. Rogers (Rivalstvo i sraz trauma)
Mrežni graf vizualizira crvenu liniju "rivalstva" visoke težine (5/5) između ova dva lidera. Naša kvalitativna analiza pokazuje da se ovdje ne radi o pukom neslaganju oko političkih ugovora, već o suprotnom procesiranjuPTSP-a:
- **Stark** je vođen strahom od budućnosti i gubitka kontrole (Bitka za New York). Njegovo ponašanje očituje se kroz grozničavu tehnološku defenzivu i želju za globalnim sigurnosnim protokolima.
- **Rogers** pak reagira na povijesni gubitak doma i izdaju institucija kojima je nekada bezuvjetno vjerovao (Hydra infiltracija S.H.I.E.L.D.-a). Zbog toga on ne može prihvatiti nametanje kontrole odozgo, radije birajući apsolutnu autonomiju pojedinca.

#### Studija slučaja B: Rogers vs. Bucky Barnes (Bratstvo kao terapijsko utočište)
Na drugom polu, veza između Stevea Rogersa i Buckyja Barnesa ima maksimalan indeks komunikacije (5/5) i označena je kao ključno prijateljstvo. Unatoč Buckyjevom mučenju i gubitku autonomije pod Hydrinim utjecajem, pronalazak Rogersa predstavlja jedino funkcionalno sidrište za rehabilitaciju traumatizirane psihe Winter Soldiera. Sustav dokazuje da emocionalna povezanost iz pretprošlog vremena može nadvladati moderna kognitivna programiranja i ispiranja uma.

#### Studija slučaja C: Wanda Maximoff i Kozmička Nestabilnost
Wanda posjeduje izuzetno krhke spone s ostatkom tima: slaba veza povijesnog duga sa Starkom (indeks 2) i mistična tenzija sa Strangeom (indeks 3). Njezin profil u bazi bilježi "eskapizam kroz rekonstrukciju stvarnosti". Zbog nedostatka kvalitetnih socijalnih sidra unutar mreže nakon smrti njezina brata Pietra i partnera Visiona, njezino pražnjenje tuge rezultira potpunom rekonstrukcijom fizičkog prostora oko nje, čineći je ujedno najsnažnijom i najopasnijom karikom u cijelom narativu.

---

## 4. Rasprava

Mapiranjem trauma-profila u *Marvel Mind Networku v3.0* postigli smo sinergiju između analize podataka i narativne psihologije. Kvantitativni rezultati precizno potvrđuju dramaturške odluke scenarista: likovi s višim komunikacijskim indeksom (Stark, Rogers, Romanoff) doista su oni koji nose teret dramske napetosti i donose odluke o sudbini cijele grupe.

Izazov koji se javlja u analizi ovakvih fikcionalnih svjetova leži u stalnoj promjeni statusa likova (npr. preobrazba od herojstva do zlikovačkog djelovanja). Sustav stoga prepoznaje potrebu za dinamičkim ažuriranjem težina veza (Edges) ovisno o specifičnim poglavljima ili vremenskim epohama unutar kontinuiteta.

---

## 5. Zaključak i Daljnji Razvoj

Platforma *Marvel Mind Network v3.0* predstavlja uspješan doprinos kognitivnoj naratologiji. Dokazano je da se superherojski narativi mogu analizirati kao strukturirani sociometrijski sustavi u kojima su fiktivna bića podložna istim zakonitostima socijalne i kliničke psihologije kao i stvarni ljudi.

Sljedeće faze razvoja projekta uključuju:
1. **Integracija Gemini LLM API-ja:** Implementacija server-side kognitivnog procesora koji će na temelju unesenih traumatoloških parametara predviđati reakcije i buduće dijaloge među likovima.
2. **Semantička analiza obožavateljskih komentara i scenarija:** Automatizirano povlačenje tekstualnih skripti i izračunavanje fluktuacija napetosti u realnom vremenu.
3. **Analiza "Što-ako" scenarija:** Simulacijski modul koji će istraživati kako bi se mrežna kohezija promijenila u slučaju uklanjanja jedne od sidrišnih točaka (primjerice, trajno očuvanje Tonyja Starka nakon događaja u filmu *Endgame*).

---

## 6. Reference

*   Langley, T. (2012). *Batman and Psychology: A Dark and Stormy Knight*. John Wiley & Sons.
*   Rosenberg, R. S. (Ed.). (2008). *The Psychology of Superheroes: An Unauthorized Exploration*. BenBella Books.
*   Wasserman, S., & Faust, K. (1994). *Social Network Analysis: Methods and Applications*. Cambridge University Press.
*   Jung, C. G. (1964). *Man and His Symbols*. Doubleday.
*   S.H.I.E.L.D. Division of Psychology. (2026). *S.H.I.E.L.D. Character Database Analysis [Digital Network Data]*. Marvel Mind Network System v3.0.
*   Google NotebookLM. (2026). *Bilješke o narativnoj psihologiji Marvelovog univerzuma*. Mapiranje fikcijskih odnosa i uloga trauma. Preuzeto s: [NotebookLM Link](https://notebooklm.google.com/notebook/29de956f-67da-45c2-b92d-8d76c218ea2e)
