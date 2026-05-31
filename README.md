# Mreža psiholoških odnosa Marvel likova: analiza načela sličnosti

---

## Sažetak

Ovaj rad istražuje kako su Marvel likovi međusobno psihološki povezani metodom mrežne analize. Svaki lik je opisan prema traumama, kompleksima i motivacijama koje nosi, a veze između likova postavljene su prema vrsti odnosa koji dijele unutar filmskog kanona. Središnja ideja rada je da **likovi koji dijele slična traumatska iskustva češće grade čvršće i pozitivnije veze** — što u sociologiji nazivamo *načelom sličnosti* (eng. homophily). Analiza pokazuje da je Tony Stark centralni čvor mreže s najviše veza, a da likovi koji su prošli kroz neželjenu transformaciju (Banner, Stark, Romanoff) tvore najgušći klaster prijatelja.

---

## 1. Uvod

Likovi Marvelovog kinematskog svemira (MCU) nisu samo superjunaci — svaki nosi kompleksan psihološki profil oblikovan gubitcima, eksperimentima i izdajama. Upravo ta unutarnja dimenzija čini MCU posebnim: savezništva i sukobi između likova gotovo uvijek imaju psihološko uporište, a ne samo narativnu logiku.

Ovaj rad koristi **mrežnu analizu** kako bi odgovorio na pitanje: jesu li likovi koji dijele slična traumatska iskustva ujedno i bliže međusobno povezani? Ako jest — to potvrđuje načelo sličnosti kao temeljni strukturalni princip MCU narativa.

**Istraživačko pitanje:** Tvore li Marvel likovi s preklapajućim psihološkim profilima gušće savezničke klastere u mreži?

---

## 2. Metoda

### 2.1 Uzorak

Analizirano je **8 likova** iz faza 1–4 MCU-a:

| Lik | Alias | Boja čvora |
|---|---|---|
| Tony Stark | Iron Man | Crvena |
| Steve Rogers | Captain America | Plava |
| Bruce Banner | Hulk | Zelena |
| Wanda Maximoff | Scarlet Witch | Ljubičasta |
| Peter Parker | Spider-Man | Svijetloplava |
| Thor Odinson | Thor | Zlatna |
| Natasha Romanoff | Black Widow | Siva |
| Clint Barton | Hawkeye | Tamnolijubičasta |

### 2.2 Psihološko kodiranje

Svaki lik opisan je prema tri kategorije, izvučenim iz filmskog kanona:

- **Psihološki kompleksi** — dominantni obrasci ponašanja (npr. mesijanski kompleks, imposter sindrom)
- **Traume** — konkretni traumatski događaji (npr. gubitak roditelja, prisilna tjelesna transformacija)
- **Motivacije** — što pokreće lika (npr. iskupljenje, zaštita obitelji, kontrola)

### 2.3 Definicija veza

Veza između dva lika postavlja se prema vrsti odnosa u filmovima:

| Vrsta veze | Opis | Boja |
|---|---|---|
| Rivalstvo | Ideološki ili osobni sukob | Crvena |
| Prijateljstvo | Savezništvo i lojalnost | Plava |
| Mentorstvo | Asimetrična veza — jedan uči drugog | Zelena |
| Tenzija | Nepovjerenje ili povijesna zamjerka | Narančasta |

### 2.4 Vizualizacija

Mreža je vizualizirana **Spring Layout** metodom (force-directed graf) pomoću knjižnica D3.js v7 i NetworkX. U ovakvom grafu, čvorovi s više zajedničkih veza gravitiraju jedni prema drugima — fizička blizina u grafu odgovara jačini veze.

---

## 3. Psihološki profili likova

### Tony Stark / Iron Man
Dominiraju **mesijanski kompleks** i narcisoidna kompenzacija kao zaštita od dubokog osjećaja neadekvatnosti. Ključne traume: smrt roditelja, zarobljeništvo u Afganistanu, PTSP nakon Bitke za New York. Njegova potreba za kontrolom i predviđanjem budućnosti direktna je posljedica traume nepredvidivosti. **Centralni čvor mreže — 4 veze.**

### Steve Rogers / Captain America
Pati od **pretjeranog osjećaja dužnosti** i krivnje preživjelog. Buđenje u tuđem vremenu i otkrivanje HYDRA infiltracije unutar S.H.I.E.L.D.-a obilježavaju ga kao lika koji je uvijek "kasnio" — u vremenu, u povjerenju, u odnosima. Veze: rivalstvo sa Starkom, prijateljstvo s Parkerom.

### Bruce Banner / Hulk
Manifestira **rascjep identiteta** kao posljedicu djetinjskog zlostavljanja i gama transformacije bez pristanka. Hulk je u freudijanskom smislu Bannerov potisnuti id — sve ono što Banner ne smije biti. Dijeli traumatski obrazac prisilne transformacije sa Starkom i Romanoff. **Drugi čvor po broju veza — 3.**

### Wanda Maximoff / Scarlet Witch
Serija gubitaka (roditelji, brat Pietro, Vision) producira **poremećaj privrženosti** i eskapistički impuls koji se manifestira kao doslovna distorzija stvarnosti. Njena tenzija sa Starkom ima konkretno traumatsko porijeklo: Starkovo oružje ubilo je njezine roditelje.

### Peter Parker / Spider-Man
Pati od **imposter sindroma** i kompulzivnog preuzimanja odgovornosti. Trostruki gubitak (roditelji, ujak Ben, mentor Stark) tjera ga u stalnu potragu za očinskom figurom — što direktno objašnjava mentorski odnos sa Starkom i divljenje prema Rogersu.

### Thor Odinson
Evolucija od arogantnog ratnika do depresivnog kralja koji ne zna tko je bez titule. Dijeli osjećaj **otuđenosti i neuklapanja** s Bannerom — obojica se osjećaju kao stranci (jedan na Zemlji, drugi u vlastitom tijelu), što gradi njihovo prijateljstvo.

### Natasha Romanoff / Black Widow
Profil dominiran **strahom od intimnosti** kao posljedicom Red Room kondicioniranja. Avengeri su njezina prva stvarna obitelj — zbog čega su njene veze (Barton, Banner) iznimno lojalne i duboke, usprkos emocionalnoj distanci na površini.

### Clint Barton / Hawkeye
Jedini "obični čovjek" u timu, što generira **kompleks manje vrijednosti**. Obiteljski gubitak (Snap) ga pretvara u Ronina — brutalnu, emocionalnu inverziju tko je bio. Najdublja veza: Romanoff, temeljena na zajedničkoj mračnoj prošlosti i međusobnom spašavanju.

---

## 4. Rezultati

### 4.1 Mrežna struktura

Mreža sadrži **8 čvorova** i **8 bridova**. Stupanj čvora (broj veza po liku):

| Lik | Stupanj |
|---|---|
| Tony Stark | **4** |
| Bruce Banner | 3 |
| Natasha Romanoff | 3 |
| Steve Rogers | 2 |
| Peter Parker | 2 |
| Thor Odinson | 1 |
| Wanda Maximoff | 1 |
| Clint Barton | 1 |

![Graf mreže psiholoških odnosa Marvel likova]([https://raw.githubusercontent.com/leaselihar-oss/Marvel-mind-in-network/main/marvel_network.png](https://github.com/leaselihar-oss/Marvel-mind-in-network/blob/main/marvel_network%20(1).png))

*Slika 1. Force-directed (Spring Layout) graf psiholoških odnosa između 8 Marvel likova. Boje bridova: crvena = rivalstvo, plava = prijateljstvo, zelena = mentorstvo, narančasta = tenzija.*

Tony Stark je **čvorište mreže** (hub) s najvećim stupnjem. To je u skladu s njegovom narativnom ulogom — on je katalizator gotovo svake važne konfliktne linije MCU-a (Avengers inicijativa, Civil War, Ultron, Endgame žrtva).

### 4.2 Klasteri

**Klaster A — "Transformirani"** (Stark, Banner, Romanoff, Thor):
Likovi čija trauma uključuje gubitak kontrole nad vlastitim tijelom ili identitetom. Unutar ovog klastera aktivne su 4 od 6 mogućih veza — što je gustoća od **0.67**, znatno iznad prosjeka mreže. Ovo je najjasniji signal načela sličnosti u cijeloj mreži.

**Klaster B — "Vrijednosti i odgovornost"** (Rogers, Parker):
Likovi definirani snažnim moralnim kodeksom. Rogers u Parkeru vidi sebe iz mladosti, Parker u Rogersu uzor koji traži. Veza je temeljena na međusobnom prepoznavanju vrijednosti, ne traume.

**Rubni čvorovi** (Maximoff, Barton, Thor):
Wanda, Clint i Thor imaju samo po jednu vezu svaki. Wandina izolacija odgovara njenom narativnom luku (eskapizam, distorzija stvarnosti). Clintova je posljedica privatne prirode njegovih lojalnosti. Thorova reflektira situiranost izvan centra zemaljske mreže odnosa.

### 4.3 Načelo sličnosti u mreži

Gledajući mrežu u cjelini, vidljivo je da likovi koji dijele sličan tip traume češće imaju pozitivne veze međusobno. Banner, Stark i Romanoff — sva trojica su prošli kroz neželjenu transformaciju (tjelesnu ili psihološku) — međusobno su prijatelji. Rogers i Stark, obojica obilježeni iskustvom izdaje, dijele najintenzivniju vezu u mreži (rivalstvo), ali i međusobno razumijevanje koje se provlači kroz cijeli Civil War. Wanda i Stark su jedini izuzetak: oboje nose teret gubitka, ali Starkovo oružje je uzrok njezine traume — što objašnjava tenziju umjesto savezništva. Dakle, nije dovoljno da likovi dijele istu vrstu boli; važno je i tko je tu bol prouzrokovao.

---

## 5. Rasprava i zaključak

Rezultati potvrđuju polaznu pretpostavku: **likovi s preklapajućim traumatskim iskustvima češće grade čvršće i pozitivnije veze**, što odgovara načelu sličnosti.

Najgušći klaster čine likovi koji su izgubili kontrolu nad vlastitim tijelom ili identitetom (Banner, Stark, Romanoff). Upravo oni su jedni drugima "razumljivi" na razini kojoj drugi likovi nemaju pristup — što se direktno odražava u narativu (Banner i Stark kao "Science Bros", Romanoff kao Bannerova jedina emocionalna blizina).

Posebno je zanimljiv slučaj Wande Maximoff i Tonyja Starka kao "negativnog primjera" načela sličnosti: oboje su izgubili obitelj, oboje nose krivnju — ali uzrok Wandine traume je Starkovo oružje. Vrsta traumatske uzročnosti, a ne samo prisutnost traume, određuje predznak veze.

**Ograničenje:** kodiranje psiholoških kategorija je subjektivno i temelji se na interpretaciji filmskog kanona. Buduća istraživanja mogla bi uključiti kvantitativne mjere sličnosti ili širi uzorak likova.

**Zaključak:** Načelo sličnosti — tendencija da se povežu oni koji su si slični — nije samo sociološki pojam, nego i narativni alat koji MCU koristi za izgradnju koherentnih savezničkih struktura. Trauma predviđa savezništvo.

---
---

## Literatura

- McPherson, M., Smith-Lovin, L., & Cook, J. M. (2001). Birds of a feather: Homophily in social networks. *Annual Review of Sociology*, 27, 415–444.
- Rosenberg, R. S. (ur.). (2013). *Our Superheroes, Ourselves*. Oxford University Press.
- Fingeroth, D. (2004). *Superman on the Couch*. Continuum.
- Freud, S. (1923). *The Ego and the Id*. W. W. Norton & Company.

---

*Predmet: Seminar: Umjetna inteligencija i društvo*
*Datum: svibanj 2026.*
*Alat za vizualizaciju: D3.js v7, NetworkX, React + TypeScript*
