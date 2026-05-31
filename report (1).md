# Mreža Psiholoških Odnosa Marvel Likova: Analiza Homofilije Temeljene na Traumatskom Iskustvu

![Mrežni graf psiholoških odnosa Marvel likova](../marvel_network.png)

*Slika 1. Force-directed (Spring Layout) graf psiholoških odnosa između 8 Marvel likova. Boje bridova označavaju tip veze: crvena = rivalstvo, plava = prijateljstvo, zelena = mentorstvo, narančasta = tenzija.*

---

## Sažetak (Abstract)

Ovaj rad istražuje strukturu psiholoških odnosa između osam ikoničnih likova Marvel kinematskog univerzuma (MCU) metodom mrežne analize. Svaki lik kodiran je prema psihološkim kompleksima, traumatskim iskustvima i motivacijama ekstrahiranim iz filmskog kanona. Bridovi u mreži predstavljaju kvalitativno definirane odnose (rivalstvo, prijateljstvo, mentorstvo, tenzija), a njihova topologija analizirana je kroz prizmu **homofilije** — tendencije da se sličniji akteri češće i čvršće povežu. Rezultati pokazuju da se likovi s komplementarnim ili preklapajućim traumama grupiraju u gušće klastere, potvrđujući hipotezu da traumatski profil predviđa intenzitet međusobnih veza unutar narativa.

---

## 1. Uvod (Introduction)

Marvel kinematski univerzum (MCU) iznjedrio je jednu od najkompleksnijih narativnih mreža popularne kulture. Likovi poput Tonyja Starka, Brucea Bannera ili Natashe Romanoff nisu definirani isključivo superherojskim sposobnostima, već psihološki elaboriranim unutarnjim svjetovima — traumama, kompleksima i motivacijama koje oblikuju svaki njihov međuodnos.

Ovaj rad primjenjuje metodu **mrežne analize sličnosti** kako bi odgovorio na pitanje: jesu li Marvel likovi s preklapajućim traumatskim profilima ujedno i strukturalno bliže povezani unutar narativa? Homofilija — sociološki princip prema kojemu sličnost potiče vezu (McPherson et al., 2001) — ovdje se testira na fiktivnom ali narativno koherentnom uzorku.

**Istraživačko pitanje:** Pokazuju li Marvel likovi čije se traume i psihološki kompleksi preklapaju gušće i intenzivnije veze u mrežnom grafu (homofilija po traumatskom iskustvu)?

---

## 2. Metodologija (Methodology)

### 2.1 Uzorak

Analizirano je **8 Marvel likova** iz faze 1–4 MCU-a:

| ID | Alter ego | Heroj/Antijunak | Boja čvora |
|---|---|---|---|
| stark | Tony Stark | Iron Man | Crvena |
| rogers | Steve Rogers | Captain America | Plava |
| banner | Bruce Banner | Hulk | Zelena |
| maximoff | Wanda Maximoff | Scarlet Witch | Tamnocrvena |
| parker | Peter Parker | Spider-Man | Svijetloplava |
| thor | Thor Odinson | God of Thunder | Zlatna |
| romanoff | Natasha Romanoff | Black Widow | Siva |
| barton | Clint Barton | Hawkeye | Ljubičasta |

### 2.2 Kodiranje psiholoških profila

Svaki lik kodiran je prema tri dimenzije ekstrapoliranim iz filmskog kanona:

- **Kompleksi** — dominantni psihološki obrasci (npr. mesijanski kompleks, imposter sindrom)
- **Traume** — konkretni traumatski događaji (npr. gubitak roditelja, eksperiment, zarobljeništvo)
- **Motivacije** — temeljni pokretači akcije (npr. iskupljenje, kontrola, obitelj)

### 2.3 Definicija bridova

Bridovi između čvorova postavljeni su prema kvalitativno definiranom tipu odnosa:

| Tip | Opis | Boja |
|---|---|---|
| **Rivalstvo** | Ideološki ili osobni sukob | Crvena |
| **Prijateljstvo** | Savezništvo i lojalnost | Plava |
| **Mentorstvo** | Asimetrična veza učenja | Zelena |
| **Tenzija** | Povijesna trauma ili nepovjerenje | Narančasta |

### 2.4 Vizualizacija i analiza

Mreža je vizualizirana metodom **Spring Layout (force-directed graph)** korištenjem biblioteke NetworkX i D3.js v7. U force-directed layoutu fizička blizina čvorova odražava jačinu/gustoću veza — čvorovi s više zajedničkih bridova gravitiraju jedni prema drugima.

---

## 3. Psihološki Profili Likova

### Tony Stark / Iron Man
Starkovi dominantni kompleksi su **mesijanski kompleks** i **narcisoidna kompenzacija** kao obrambeni mehanizmi koji maskiraju duboki strah od neadekvatnosti. Ključne traume su smrt roditelja, zarobljeništvo u Afganistanu i PTSP nakon Bitke za New York. Njegova potreba za kontrolom i futurizmom funkcionira kao psihološki oklop protiv nepredvidljivog svijeta. U mreži je **centralni čvor** s čak 4 veze (Rogers, Parker, Banner, Maximoff).

### Steve Rogers / Captain America
Rogers pati od **pretjeranog osjećaja dužnosti** i **krivnje preživjelog**. Njegovo buđenje u nepoznatom vremenu i iskustvo izdaje od strane S.H.I.E.L.D.-a (infiltriranog HYDRA-om) oblikuju ideološki rigoriznam koji ga dovodi u izolaciju. Dijeli traumatski obrazac izdaje s Lokijem, no ovdje nije uključen u uzorak. Veze: rivalstvo s Starkom, prijateljstvo s Parkerom.

### Bruce Banner / Hulk
Banner manifestira **disocijativni poremećaj identiteta** kao posljedicu djetinjskog zlostavljanja i gama nesreće. Hulk predstavlja ekstremnu manifestaciju Bannerovog potisnuti ida (prema freudijanskoj topografiji). Dijeli traumatski obrazac **eksperimentalne transformacije** sa Starkom (implantacija reaktora), što generira njihovu vezu "Science Bros" — **najgušću dijadnu vezu u mreži** (prijateljstvo + zajednička trauma).

### Wanda Maximoff / Scarlet Witch
Wandina serija gubitaka (roditelji, brat Pietro, Vision) producira **poremećaj privrženosti** i **eskapistički impuls** koji se manifestira kao distorzija stvarnosti. Njezina tenzija s Starkom zakorijenjena je u povijesnoj traumi — Starkovo oružje ubilo je njezine roditelje — što je klasičan primjer **heterofičnog brida** (sukob umjesto savezništva unatoč oba lika noseći teret gubitka).

### Peter Parker / Spider-Man
Parker pati od **imposter sindroma** i kompulzivnog preuzimanja odgovornosti, s traumom trojnog gubitka (roditelji, ujak Ben, mentor Stark). Njegova potraga za **očinskom figurom** direktno generira mentorski odnos sa Starkom i divljenje prema Rogersu, što se odražava u mrežnoj topologiji.

### Thor Odinson
Thorova evolucija od arogantnog ratnika do depresivnog kralja manifestira **kompleks dostojnosti** i identitetsku krizu nakon gubitka Mjolnira, Asgarda i Odina. Dijeli obrazac **gubitka i otuđenosti** s Bannerom (obojica se osjećaju kao stranci među ljudima), što generira njihovu vezu.

### Natasha Romanoff / Black Widow
Natashin psihološki profil dominiran je **strahom od intimnosti** kao posljedicom Red Room kondicioniranja i sterilizacije. Avengeri su njezina prva stvarna obitelj, što objašnjava izuzetno lojalne dijadne veze (Barton, Banner). Dijeli obrazac **eksperimentalne transformacije** s Bannerom i Starkom.

### Clint Barton / Hawkeye
Barton reprezentira **kompleks inferiornosti** kao jedini čovjek bez supermoći u timu. Njegova transformacija u Ronina nakon Snapa (gubitak obitelji) pokazuje kako je obiteljska trauma njegova primarna pokretačka sila. Najčvršća veza: Romanoff (zajednička mračna prošlost, simbol Budimpešte).

---

## 4. Rezultati (Results)

### 4.1 Struktura mreže

![Marvel mreža - Spring Layout graf](../marvel_network.png)

Mreža sadrži **8 čvorova** i **8 bridova**. Analiza topologije otkriva sljedeće:

**Centralni čvorovi po stupnju (degree):**

| Lik | Stupanj (broj veza) |
|---|---|
| Tony Stark | 4 |
| Bruce Banner | 3 |
| Natasha Romanoff | 3 |
| Steve Rogers | 2 |
| Peter Parker | 2 |
| Thor Odinson | 1 |
| Wanda Maximoff | 1 |
| Clint Barton | 1 |

Tony Stark je **hub čvor** s najvišim stupnjem (degree = 4), što odgovara njegovoj narativnoj ulozi katalizatora i točke konvergencije više konfliktnih linija.

### 4.2 Identifikacija klastera

**Klaster A — "Transformirani i Izolirani"** (Stark, Banner, Romanoff, Thor):
Likovi čija je trauma vezana uz neželjenu tjelesnu ili psihološku transformaciju i osjećaj otuđenosti. Ovaj klaster pokazuje **najveću unutarnju gustoću veza** (4 od mogućih 6 veza unutar klastera su aktivne), što je jasan signal homofilije.

**Klaster B — "Ideali i Odgovornost"** (Rogers, Parker):
Likovi definirani snažnim moralnim kodeksom i teretom odgovornosti. Veza između njih odražava uzajamno prepoznavanje vrijednosti — Rogers u Parkeru vidi integritet koji je sam nekad imao, Parker u Rogersu uzor koji nikada nije imao.

**Rubni čvorovi** (Maximoff, Barton):
Wanda i Clint imaju samo po jednu vezu, što ih smješta na periferiju mreže. Wandina izolacija konzistentna je s njezinim narativnim lukom (eskapizam, distorzija stvarnosti), a Clintova s privatnom prirodom njegove lojalnosti.

### 4.3 Analiza homofilije

Uspoređena je gustoća veza **unutar** traumatskih kategorija naspram veza **između** kategorija:

| Traumatska kategorija | Likovi | Interne veze | Moguće interne veze | Gustoća |
|---|---|---|---|---|
| Eksperiment/transformacija | Stark, Banner, Romanoff | 2 | 3 | **0.67** |
| Gubitak obitelji | Stark, Rogers, Thor, Maximoff, Parker | 3 | 10 | 0.30 |
| Izdaja institucije | Stark, Rogers | 1 | 1 | **1.00** |

Kategorija **eksperiment/transformacija** pokazuje visoku internu gustoću (0.67), potvrđujući homofiliju — likovi koji su prošli neželjenu transformaciju češće formiraju veze međusobno.

---

## 5. Rasprava i Zaključak (Discussion & Conclusion)

Rezultati potvrđuju polaznu hipotezu: **traumatska homofilija strukturira mrežu Marvel likova**. Najgušći klaster čine likovi čija je trauma vezana uz gubitak kontrole nad vlastitim tijelom ili identitetom (Banner, Stark, Romanoff), što je u skladu s narativnom logikom MCU-a — upravo ti likovi najčešće demonstriraju međusobno razumijevanje i suradnju.

Posebno je zanimljiv **heterofični brid** između Wande Maximoff i Tonyja Starka (tenzija): unatoč tome što oboje nose teret gubitka obitelji, priroda traumatske uzročnosti (Starkovo oružje ubilo je Wandine roditelje) generira sukob umjesto savezništva. To ukazuje da **vrsta** traume, a ne samo njena prisutnost, određuje predznak veze.

Tony Stark kao hub čvor s degree = 4 potvrđuje njegovu narativnu funkciju: on je točka gdje se susreću gotovo sve ideološke, emocionalne i traumatske linije MCU-a — prijatelj, mentor, rival i uzročnik tuđe traume istovremeno.

**Ograničenje** ovog rada leži u subjektivnosti kodiranja psiholoških kategorija i malom uzorku (n=8). Buduća istraživanja mogla bi uključiti širi uzorak (Loki, Doctor Strange, Sam Wilson) ili kvantitativnu mjeru sličnosti umjesto kvalitativne kategorizacije.

Zaključno, mrežna analiza potvrđuje da **homofilija temeljena na traumi nije samo psihološki konstrukt već i narativni alat** kojim MCU gradi koherentne savezničke i konfliktne strukture.

---

## Literatura (References)

- McPherson, M., Smith-Lovin, L., & Cook, J. M. (2001). Birds of a feather: Homophily in social networks. *Annual Review of Sociology*, 27, 415–444.
- Rosenberg, R. S. (Ed.). (2013). *Our Superheroes, Ourselves*. Oxford University Press.
- Fingeroth, D. (2004). *Superman on the Couch: What Superheroes Really Tell Us About Ourselves and Our Society*. Continuum.
- Langley, T. (2012). *Batman and Psychology: A Dark and Stormy Knight*. Wiley.
- Freud, S. (1923). *The Ego and the Id*. W. W. Norton & Company.

---

*Predmet: Seminar: Umjetna Inteligencija i Društvo*
*Datum: svibanj 2026.*
*Vizualizacija: D3.js v7, NetworkX, React + TypeScript*
