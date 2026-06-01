# Mreža psiholoških odnosa Marvel likova: analiza načela sličnosti

**Autor:** Lea Selihar
**Datum:** 11. svibnja 2026.  

---

## Sažetak (Abstract)

Ovaj izvještaj dokumentira razvoj i teorijsku podlogu aplikacije *Marvel Mind Network*. Projekt koristi napredne metode vizualizacije podataka (D3.js) kako bi mapirao kompleksne psihološke profile likova unutar Marvelovog kinematografskog univerzuma (MCU). Fokus analize nije na fizičkim moćima subjekata, već na njihovim unutarnjim konfliktima, traumama i motivacijama. Rezultat je interaktivna mreža koja omogućuje istraživanje kako individualne patopsihološke crte (poput PTSP-a ili mesijanskog kompleksa) diktiraju interpersonalnu dinamiku i makro-narative unutar tima Osvetnika (Avengers).

---

## Uvod

Marvelov univerzum je desetljećima služio kao poligon za istraživanje ljudske psihe kroz arhetipove superheroja. Međutim, linearno praćenje njihovih odnosa često zanemaruje dublje psihološke uzroke sukoba. Cilj *Marvel Mind Networka* je transformirati statične biografije u dinamički graf odnosa. Korištenjem teorija poput Adlerovog kompleksa manje vrijednosti, Freudovog koncepta "Ida" (prikazanog kroz Hulka) i suvremene psihologije traume (PTSP), aplikacija nudi novi uvid u narativnu strukturu.

---

## Teorijski okvir i metodologija

### 1. Modeliranje podataka
Podaci su strukturirani u dva primarna entiteta:
- **Čvorovi (Nodes/Characters):** Svaki čvor sadrži kvantitativne i kvalitativne podatke o psihološkom stanju subjekta (kompleksi, traume, analiza).
- **Veze (Edges/Relationships):** Linije povezivanja definirane su tipom interakcije (rivalstvo, mentorstvo, tenzija) i dubinskom analizom dinamike.

### 2. Tehnološki stog (Tech Stack)
- **Vizualizacija:** D3.js (Force-directed graph) omogućuje simulaciju fizike u realnom vremenu, gdje čvorovi s jačim "nabojem" (većom psihološkom težinom) utječu na raspored cijele mreže.
- **Frontend:** React 19 pruža reaktivno sučelje koje trenutačno ažurira panele s detaljima pri interakciji s grafom.
- **Tipizacija:** TypeScript osigurava integritet podataka, sprječavajući greške u mapiranju relacija.

---

## Rezultati: Analiza ključnih dinamika

### Studija slučaja: Stark vs. Rogers
Analiza prikazuje da njihov sukob nije čisto politička nesuglasica (Sokovijski sporazum), već sudar trauma. 
- **Stark:** Vođen strahom od budućnosti i PTSP-om nakon Bitke za New York, teži totalnoj kontroli.
- **Rogers:** Vođen traumom izdaje sustava, teži apsolutnoj individualnoj slobodi.
Aplikacija vizualizira ovu vezu kao "rivalstvo" kroz koju se prelamaju svi ostali članovi tima, prisiljavajući ih na svrstavanje na temelju vlastitih psiholoških afiniteta.

### Rezultat vizualizacije
Grafički prikaz uspješno locira "izolirane" subjekte (poput Wande Maximoff u ranim stadijima) i "sidrišne" članove (poput Clinta Bartona), čime se potvrđuje hipoteza da su emocionalno stabilniji članovi ključni za koheziju tima unatoč manjku "super-moći".
<img width="1371" height="744" alt="image" src="https://github.com/user-attachments/assets/74fb3d0b-7d86-406a-95fa-ca656d22501d" />

---

## Rasprava i daljnji razvoj

*Marvel Mind Network* trenutno služi kao obrazovni i istraživački alat. Međutim, mogućnosti proširenja su ogromne:
1. **Integracija Gemini AI:** Umjesto statičnih analiza, sustav bi mogao koristiti LLM (Large Language Models) za generiranje predviđanja budućih sukoba na temelju trenutnih mentalnih stanja likova.
2. **Analiza sentimenta:** Povlačenje podataka iz skripti filmova u realnom vremenu kako bi se ažurirala "napetost" na grafu.
3. **Prediktivno modeliranje:** Simulacija "što ako" scenarija (npr. kako bi se mreža promijenila da je Tony Stark preživio događaje u *Endgameu*).

---

## Zaključak

Ovaj projekt dokazuje da se digitalni alati za vizualizaciju podataka mogu učinkovito primijeniti na pop-kulturne fenomene radi dubljeg razumijevanja ljudske prirode. Marvelovi likovi su više od akcijskih junaka; oni su kompleksni portreti ljudskih slabosti, a *Marvel Mind Network* te slabosti čini vidljivima i mjerljivima.

---

## Reference

1. Google NotebookLM (2024). *Zapis o narativnoj psihologiji Marvelovog univerzuma.* Preuzeto s: [NotebookLM Link](https://notebooklm.google.com/notebook/29de956f-67da-45c2-b92d-8d76c218ea2e)
2. American Psychological Association (2022). *APA Publication Manual (7th ed.).*
3. Bostock, M. (2023). *D3.js Force Layout Documentation.*
4. Marvel Studios (2008-2024). *Cinematic Universe Character Profiles.*
