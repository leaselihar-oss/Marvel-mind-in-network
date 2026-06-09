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
  communicationStrength: number; // 1 to 5 (volume of communications)
  sharedTopics: string[];
}

export interface Literature {
  title: string;
  author: string;
  year: string;
  description: string;
  relevance: string;
}

export const characters: Character[] = [
  {
    id: 'stark',
    name: 'Tony Stark',
    alias: 'Iron Man',
    color: '#E62429',
    cluster: 'Sci-Tech',
    clusterDescription: 'Znanstveno-tehnološki klaster: Likovi usmjereni na inovacije, racionalizam i preventivnu obranu kroz tehnologiju.',
    psychology: {
      complexes: ['Mesijanski kompleks', 'Narkisoidni poremećaj (kompenzacija)', 'Strah od neadekvatnosti'],
      traumas: ['Smrt roditelja (Howard i Maria)', 'Zarobljeništvo u Afganistanu', 'Bitka za New York (PTSP)'],
      motivations: ['Ostavština', 'Iskupljenje za prošlost Stark Industries', 'Apsolutna kontrola'],
      analysis: 'Starkova potreba za futurizmom zapravo je obrambeni mehanizam protiv nepredvidljivosti svijeta. Njegov visoki intelekt služi kao oklop koji štiti duboko ranjiv ego.'
    },
    commonGoals: ['Preventivna zaštita Zemlje', 'Tehnološki progres', 'Kontrola rizika'],
    commonTopics: ['Odgovornost kreatora', 'Strah od nepoznatih prijetnji', 'Naslijeđe obitelji']
  },
  {
    id: 'rogers',
    name: 'Steve Rogers',
    alias: 'Captain America',
    color: '#003399',
    cluster: 'Military-Espionage',
    clusterDescription: 'Vojno-špijunski klaster: Likovi s izraženim moralnim kodeksom, obukom i tradicijom discipline koji se bore s modernim sustavima moći.',
    psychology: {
      complexes: ['Pretjerani osjećaj dužnosti', 'Krivnja preživjelog', 'Ideološki rigoriznam'],
      traumas: ['Gubitak Buckyja i Peggy', 'Buđenje u nepoznatom vremenu nakon 70 godina zamrznutosti', 'Spoznaja o infiltraciji Hydre u S.H.I.E.L.D.'],
      motivations: ['Integritet', 'Sloboda pojedinca', 'Zaštita slabijih'],
      analysis: 'Rogers je arhetip moralnog kompasa, ali njegova nemogućnost prilagodbe sivoj zoni modernog morala često ga dovodi u izolaciju. Njegova snaga je i njegova slabost.'
    },
    commonGoals: ['Sloboda pojedinca', 'Transparentnost moći', 'Očuvanje temeljnih vrijednosti'],
    commonTopics: ['Slobodna volja', 'Izdaja institucija', 'Gubitak doma i vremena']
  },
  {
    id: 'banner',
    name: 'Bruce Banner',
    alias: 'Hulk',
    color: '#2BB033',
    cluster: 'Sci-Tech',
    clusterDescription: 'Znanstveno-tehnološki klaster: Likovi usmjereni na inovacije, racionalizam i preventivnu obranu kroz tehnologiju.',
    psychology: {
      complexes: ['Disocijativni poremećaj identiteta', 'Strah od samoga sebe', 'Intelektualna izolacija'],
      traumas: ['Zlostavljanje u djetinjstvu', 'Gama nesreća koja je stvorila Hulka', 'Godine skrivanja i progona'],
      motivations: ['Unutarnji mir', 'Kontrola bijesa', 'Znanstveni doprinos čovječanstvu'],
      analysis: 'Hulk predstavlja Bannerove potisnute emocije i dječji bijes. Njihov odnos je ekstremna manifestacija vječne psihoanalitičke borbe između racionalnog ega (Banner) i destrukcijskog ida (Hulk).'
    },
    commonGoals: ['Stabilnost uma', 'Korištenje znanosti za liječenje', 'Samoizolacija radi sigurnosti drugih'],
    commonTopics: ['Dvostruka priroda', 'Gubitak kontrole', 'Destrukcija i iskupljenje']
  },
  {
    id: 'maximoff',
    name: 'Wanda Maximoff',
    alias: 'Scarlet Witch',
    color: '#8A0303',
    cluster: 'Mystic-Cosmic',
    clusterDescription: 'Kozmičko-mistični klaster: Likovi koji manipuliraju osnovnim zakonima prirode, magijom, sudbinom ili kozmičkim silama.',
    psychology: {
      complexes: ['Poremećaj privrženosti', 'Mesijanski vs. Destruktivni impuls', 'Eskapizam kroz distorziju stvarnosti'],
      traumas: ['Gubitak roditelja pod bombama', 'Smrt brata blizanca Pietra', 'Nasilna smrt partnera Visiona'],
      motivations: ['Ponovno stvaranje obitelji', 'Emocionalna pripadnost', 'Moć nad vlastitom nestabilnom stvarnosti'],
      analysis: 'Wanda procesira neizmjernu tugu kroz magijsku rekonstrukciju stvarnosti. Njezina krajnja moć je direktno vezana uz njezinu nemogućnost integriranja proživljenih trauma.'
    },
    commonGoals: ['Ljubav i obitelj', 'Pronalaženje sigurnog zaklona', 'Ovladavanje mističnim silama'],
    commonTopics: ['Gubitak voljenih', 'Stvoren svijet vs Realnost', 'Strah od osude javnosti']
  },
  {
    id: 'parker',
    name: 'Peter Parker',
    alias: 'Spider-Man',
    color: '#00AEEF',
    cluster: 'Street-Level',
    clusterDescription: 'Ulični klaster: Humanitarni junaci bliski običnim ljudima, usmjereni na lokalnu zajednicu i rješavanje kriznih situacija u mikrookruženju.',
    psychology: {
      complexes: ['Imposter sindrom', 'Preuzimanje prevelike odgovornosti', 'Potraga za mentorskom očinskom figurom'],
      traumas: ['Smrt ujaka Bena pod njegovom krivnjom', 'Prvotni gubitak roditelja', 'Gubitak mentora i uzora Tonyja Starka'],
      motivations: ['Moralna dužnost ("s velikom moći dolazi velika odgovornost")', 'Dokazivanje i validacija', 'Zaštita susjedstva'],
      analysis: 'Parkerova borba s identitetom normalnog tinejdžera i legendarnog heroja stvara stalni kognitivni pritisak. Njegov humor i brbljanje su zapravo mehanizmi suočavanja sa strahom od smrti.'
    },
    commonGoals: ['Očuvanje tajnog identiteta', 'Ravnoteža privatnog života i dužnosti', 'Lokalna pravda'],
    commonTopics: ['Životni izbori', 'Dvosjekli mač tajni', 'Pritisak javnosti i medija']
  },
  {
    id: 'thor',
    name: 'Thor Odinson',
    alias: 'God of Thunder',
    color: '#D4AF37',
    cluster: 'Mystic-Cosmic',
    clusterDescription: 'Kozmičko-mistični klaster: Likovi koji manipuliraju osnovnim zakonima prirode, magijom, sudbinom ili kozmičkim silama.',
    psychology: {
      complexes: ['Kompleks dostojnosti prema obiteljskom imenu', 'Intergeneracijski teret Asgarda', 'Gubitak kozmičkog identiteta'],
      traumas: ['Ubojstvo majke Frigge i oca Odina', 'Uništenje rodnog Asgarda', 'Krivnja što nije ciljao glavu Thanoša ("Snap" trauma)'],
      motivations: ['Čast i zaštita Devet svjetova', 'Ponovno otkrivanje svrhe', 'Njegovanje savezništva'],
      analysis: 'Thorova evolucija ide od arogantnog ratničkog princa do depresivnog, traumatiziranog kralja koji traži duhovnu svrhu izvan svoje titule i Mjolnira.'
    },
    commonGoals: ['Očuvanje svemirske ravnoteže', 'Preživljavanje vlastitog naroda', 'Prihvaćanje nesavršenosti'],
    commonTopics: ['Očeva očekivanja', 'Sudbina i tragedija', 'Vrijednost iskrenog prijateljstva']
  },
  {
    id: 'romanoff',
    name: 'Natasha Romanoff',
    alias: 'Black Widow',
    color: '#FF3333',
    cluster: 'Military-Espionage',
    clusterDescription: 'Vojno-špijunski klaster: Likovi s izraženim moralnim kodeksom, obukom i tradicijom discipline koji se bore s modernim sustavima moći.',
    psychology: {
      complexes: ['Strah od istinske bliskosti i ranjivosti', 'Kompleks "crvene tinte" u bazi podataka', 'Identitet kao puki instrument obmane'],
      traumas: ['Surovo odrastanje i prisilna sterilizacija u Red Room-u', 'Godine izvršavanja ubojstava za krive svrhe', 'Raspad prve stabilne obitelji (Avengers)'],
      motivations: ['Iskupljenje (čišćenje duga)', 'Bezuvjetna lojalnost', 'Zaštita onih bez glasa'],
      analysis: 'Natasha koristi visoko kontroliranu emocionalnu distancu kao alat preživljavanja. Njezina potraga za iskupljenjem je motor koji pokreće njezinu lojalnost Avengersima, koje smatra svojom prvom stvarnom obitelji.'
    },
    commonGoals: ['Ispravljanje povijesnih nepravdi', 'Zaštita nevinih', 'Očuvanje saveza po svaku cijenu'],
    commonTopics: ['Nedjela iz prošlosti', 'Mehanizmi preživljavanja', 'Lojalnost naspram ugovora']
  },
  {
    id: 'barton',
    name: 'Clint Barton',
    alias: 'Hawkeye',
    color: '#4B0082',
    cluster: 'Military-Espionage',
    clusterDescription: 'Vojno-špijunski klaster: Likovi s izraženim moralnim kodeksom, obukom i tradicijom discipline koji se bore s modernim sustavima moći.',
    psychology: {
      complexes: ['Kompleks inferiornosti (običan čovjek s lukom među bogovima)', 'Podijeljena i ugrožena lojalnost', 'Represija teških emocija'],
      traumas: ['Ispiranje mozga od strane Lokija na početku', 'Gubitak cijele supruge i djece u trenu (Snap)', 'Destruktivna transformacija i ubojstva u ulozi Ronina'],
      motivations: ['Zaštita nuklearne obitelji', 'Mentorstvo mlađim generacijama', 'Pravda iz sjene bez potrebe za slavom'],
      analysis: 'Clint je moralni i ljudski sidrišni član tima. Njegova normalnost ga čini najprizemnijim, ali i najosjetljivijim na nagle emocionalne lomove, što je evidentno u njegovoj tragičnoj Ronin fazi.'
    },
    commonGoals: ['Očuvanje privatnosti', 'Zaštita mlađih nasljednika', 'Samoizlječenje od krivnje'],
    commonTopics: ['Normalan obiteljski život', 'Ograničenja ljudskog tijela', 'Koleteralna žrtva']
  },
  {
    id: 'loki',
    name: 'Loki Laufeyson',
    alias: 'God of Mischief',
    color: '#009688',
    cluster: 'Mystic-Cosmic',
    clusterDescription: 'Kozmičko-mistični klaster: Likovi koji manipuliraju osnovnim zakonima prirode, magijom, sudbinom ili kozmičkim silama.',
    psychology: {
      complexes: ['Kompleks usvajanja (druga violina kraljevstva)', 'Kriza identiteta (Asgardijac ili Frost Giant)', 'Izraženi narcisoidni krik za pažnjom'],
      traumas: ['Otkriće da je usvojen i odbačen od pravog oca Laufeyja', 'Konstantno osjećanje inferiornosti uz Thora', 'Mučenje od strane Thanosa i trauma propasti'],
      motivations: ['Dokazivanje vlastite vrijednosti i sjaja', 'Sloboda od unaprijed zacrtane sudbine zlikovca', 'Prihvaćenost od strane obitelji'],
      analysis: 'Loki koristi manipulaciju i kaos da bi sakrio duboku tjeskobu i strah od napuštenosti. Njegovo djelovanje je često destrukcija radi vapaja za ljubavlju i uvažavanjem.'
    },
    commonGoals: ['Rastranost između moći i iskupljenja', 'Opstanak pod svaku cijenu', 'Kontrola vlastite sudbine'],
    commonTopics: ['Usvajanje i obmanutost', 'Sjena starijeg brata', 'Mogućnost promjene karaktera']
  },
  {
    id: 'strange',
    name: 'Stephen Strange',
    alias: 'Doctor Strange',
    color: '#800000',
    cluster: 'Mystic-Cosmic',
    clusterDescription: 'Kozmičko-mistični klaster: Likovi koji manipuliraju osnovnim zakonima prirode, magijom, sudbinom ili kozmičkim silama.',
    psychology: {
      complexes: ['Kompleks boga (kirurška nepogrešivost)', 'Intelektualni elitizam', 'Ovisnost o apsolutnoj racionalnoj kontroli'],
      traumas: ['Gubitak pokretljivosti ruku u nesreći', 'Smrt mentorice Ancient One', 'Gledanje 14 milijuna potencijalnih verzija propasti svemira'],
      motivations: ['Čuvanje tkiva stvarnosti od mističnih prijetnji', 'Znanje i mudrost', 'Iskupljenje arogancije iz prošlosti'],
      analysis: 'Strange je transformirao egoistični nagon kontroliranja života u duhovnu odgovornost zaštite kozmosa. Njegov najveći izazov je prihvatiti da ne može kontrolirati sve ishode.'
    },
    commonGoals: ['Multiverzalna zaštita', 'Očuvanje zakona prirode i vremena', 'Suočavanje s mističnim entropijama'],
    commonTopics: ['Cijena znanja', 'Arogancija inteligencije', 'Prepuštanje kontrole sudbini']
  },
  {
    id: 'bucky',
    name: 'Bucky Barnes',
    alias: 'Winter Soldier',
    color: '#708090',
    cluster: 'Military-Espionage',
    clusterDescription: 'Vojno-špijunski klaster: Likovi s izraženim moralnim kodeksom, obukom i tradicijom discipline koji se bore s modernim sustavima moći.',
    psychology: {
      complexes: ['Gubitak autonomije (robotski nagoni)', 'Podijeljena svijest', 'Teška krivnja zbog nametnutih ubojstava'],
      traumas: ['Ispiranje mozga i mučenje od Hydre preko 70 godina', 'Amputacija i brutalna kibernetizacija lijeve ruke', 'Spoznaja o bezbrojnim nevinim žrtvama koje je uklonio'],
      motivations: ['Ponovno preuzimanje kontrole nad vlastitim umom', 'Isprika obiteljima žrtava', 'Odana zaštita Stevea Rogersa'],
      analysis: 'Bucky je tragični predložak uništene autonomije. Njegov oporavak je spor proces integracije sjećanja hladnog ubojice i prijeratnog humanog prijatelja iz Brooklyna.'
    },
    commonGoals: ['Mentalna higijena i mir', 'Sustavna amnestija', 'Zaštita preostalih simbola dobrote'],
    commonTopics: ['Prisilna kontrola uma', 'Terapija i oporavak', 'Bratstvo iz djetinjstva']
  }
];

export const relationships: Relationship[] = [
  {
    source: 'stark',
    target: 'rogers',
    type: 'rivalry',
    description: 'Ideološki sukob: Sigurnost kroz kontrolu vs Sloboda kroz integritet.',
    dynamic: 'Stark vidi Rogersa kao naivnog moralizatora iz prošlosti koji ne razumije hladne prijetnje budućnosti, dok Rogers vidi Starka kao arogantnog i potencijalno tiranijskog kreatora koji ugrožava slobodnu volju ljudi. "Civil War" predstavlja vrhunac nemogućnosti dijaloga uslijed dubokih neprocesuiranih trauma oba subjekta.',
    communicationStrength: 5,
    sharedTopics: ['Državni nadzor', 'Kolektivna odgovornost', 'Ostavština prošlosti']
  },
  {
    source: 'romanoff',
    target: 'barton',
    type: 'friendship',
    description: 'Najdublja lojalnost utemeljena na zajedničkoj mračnoj špijunskoj prošlosti.',
    dynamic: 'Njihov zajednički kodni naziv "Budimpešta" simbolizira duboko međusobno povjerenje.Oni su jedno drugom jedino istinsko moralno sidro u svijetu u kojem su tretirani isključivo kao hladno oružje za jednokratnu upotrebu.',
    communicationStrength: 5,
    sharedTopics: ['Iskupljenje', 'Tajne operacije', 'Zaštita nevinih']
  },
  {
    source: 'romanoff',
    target: 'banner',
    type: 'friendship',
    description: 'Romantična i duboka tenzija rođena iz obostranog osjećaja "čudovišnosti".',
    dynamic: 'Natasha vidi u Banneru osobu koja je, kao i ona (zbog mučenja u Red Room-u), lišena prava na toplu, normalnu ljudsku obitelj. Njihova veza je krhka zbog Bannerovog stalnog straha da ne povrijedi ljude do kojih mu je stalo.',
    communicationStrength: 3,
    sharedTopics: ['Potisnuti bijes', 'Surova sterilizacija i biologija', 'Snovi o bijegu']
  },
  {
    source: 'stark',
    target: 'parker',
    type: 'mentorship',
    description: 'Zamjensko očinstvo i tehnološko mentorstvo.',
    dynamic: 'Stark grozničavo pokušava spriječiti Parkera da napravi iste životne i moralne pogreške koje su njega dovele do emotivnog izgaranja. Parkerova mladenačka potraga za očinskim odobravanjem često nadvladava Starkov logičan oprez.',
    communicationStrength: 4,
    sharedTopics: ['Tehnološka poboljšanja', 'Odgovornost i herojstvo', 'Trauma gubitka roditelja']
  },
  {
    source: 'banner',
    target: 'stark',
    type: 'friendship',
    description: 'Kolegijalni "Science Bros" odnos s dubokim intelektualnim poštovanjem.',
    dynamic: 'Oba subjekta dijele intenzivan strah od vlastitih moćnih kreacija (Ultron, Hulk). Stark se divi Bannerovom mirnom intelektu i oprezu, dok Banner u Starku cijeni slobodu od straha pred biološkim i fizikalnim anomalijama.',
    communicationStrength: 4,
    sharedTopics: ['Fizika elementarnih čestica', 'Kognitivna stabilizacija umjetne inteligencije', 'Odgovornost znanstvenika']
  },
  {
    source: 'maximoff',
    target: 'stark',
    type: 'tension',
    description: 'Povijesna trauma uzrokovana oružjem koje je dizajnirala obitelj Stark.',
    dynamic: 'Wandina djetinja mržnja prema Starku zbog bombi koje su pale na njezin dom u Sokoviji duboko je oblikovala njezinu ranu destruktivnu karijeru. Iako su radili u istom timu, sjenka te povijesne osvete trajno je oštetila njihovu sposobnost povjerenja.',
    communicationStrength: 2,
    sharedTopics: ['Sokovija', 'Vojna destrukcija', 'Odgovornost za smrt civila']
  },
  {
    source: 'thor',
    target: 'banner',
    type: 'friendship',
    description: 'Uzajamno poštovanje kroz nadljudsku snagu i osjećaj kozmičke otuđenosti.',
    dynamic: 'Dva najsnažnija člana tima koji se često osjećaju kao potpuni stranci među običnim ljudima na Zemlji. Njihov odnos je često natjecateljski i glasan, no izrazito odan i pun suosjećanja u trenucima krize.',
    communicationStrength: 3,
    sharedTopics: ['Borbe u arenama', 'Izgnanstvo', 'Prihvaćanje unutrašnje zvijeri']
  },
  {
    source: 'parker',
    target: 'rogers',
    type: 'friendship',
    description: 'Uzašašće čistih ideala i bezrezervno poštovanje borbenog duha.',
    dynamic: 'Parker se duboko divi Rogersovom povijesnom integritetu i skromnosti, dok Rogers u Parkerovom dječjem idealizmu vidi onaj isti nepokolebljivi Brooklynov patriotizam koji je sam posjedovao prije nego što su ga izdale vojne institucije.',
    communicationStrength: 2,
    sharedTopics: ['Brooklyn i Queens', 'Poštenje u borbi', 'Lojalnost lokalnim ljudima']
  },
  {
    source: 'rogers',
    target: 'bucky',
    type: 'friendship',
    description: 'Snažno, neraskidivo bratstvo iz djetinjstva, temeljeno na zajedničkom preživljavanju.',
    dynamic: 'Rogers je spreman prekršiti sve globalne zakone ("Civil War") kako bi spasio i rehabilitirao Buckyja, jer u njemu vidi jedinu živu poveznicu s njegovim izvornim identitetom prije leda. Bucky u Steveu nalazi jedino sigurno sidro za svoj traumatizirani, isprani um.',
    communicationStrength: 5,
    sharedTopics: ['Prošlost u Brooklynu', 'Ratno drugarstvo', 'Očuvanje vlastite duše']
  },
  {
    source: 'strange',
    target: 'stark',
    type: 'rivalry',
    description: 'Intelektualni sukob dvaju kolosalnih, tvrdoglavih ega.',
    dynamic: 'Dijele nevjerojatnu inteligenciju i potrebu da kontroliraju ishod svake situacije. Dok Stark koristi tehnologiju, Strange koristi misticizam. Sukobljavaju se oko metode rješavanja krize, no uzajamno prepoznaju žrtvu koju onaj drugi mora podnijeti za veće dobro.',
    communicationStrength: 4,
    sharedTopics: ['Thanosova prijetnja', 'Vizualizacija budućnosti', 'Analitički proračuni']
  },
  {
    source: 'thor',
    target: 'loki',
    type: 'family',
    description: 'Vječna bratska dinamika izdaje, nadmetanja i konačne bratske ljubavi.',
    dynamic: 'Thor konstantno pati zbog Lokijevih manipulacija i izdaja, ali ga nikada u potpunosti ne napušta, uvijek vjerujući u trag dobrote u njemu. Loki pak pati od gorke ljubomore prema "savršenom" bratu, no duboko u sebi teži Thorovom uvažavanju i ponosu.',
    communicationStrength: 5,
    sharedTopics: ['Asgardsko naslijeđe', 'Očeve tajne i laži', 'Zajedničke spačke odrastanja']
  },
  {
    source: 'strange',
    target: 'maximoff',
    type: 'tension',
    description: 'Mistično-filozofsko upozorenje o opasnosti gubljenja racionalnog razuma.',
    dynamic: 'Strange prepoznaje strahovitu, razornu snagu Wandinih magijskih anomalija stvarnosti i pokušava joj ponuditi stabilizirajuće mistično vodstvo. No, njezina golema potisnuta trauma stvara nepovjerenje prema njegovim krutim kozmičkim pravilima.',
    communicationStrength: 3,
    sharedTopics: ['Multiverzalni kaos', 'Knjiga kletvi Darkhold', 'Mentalno zdravlje i tuga']
  },
  {
    source: 'rogers',
    target: 'romanoff',
    type: 'friendship',
    description: 'Vojna lojalnost i duboka emocionalna potpora u doba sloma institucija.',
    dynamic: 'Počeli su s potpunim nepovjerenjem (vojnik od časti vs. vrhunski špijun sumnjive prošlosti), ali su kroz zajedničko bježanje iskovali neraskidivo povjerenje. Natasha pomaže Steveu da navigira sivim zonama modernog svijeta, dok on njoj pruža ruku bezuvjetnog i čistog povjerenja.',
    communicationStrength: 4,
    sharedTopics: ['Sakupljanje preživjelih', 'Odlazak u ilegalu', 'Gubitak vojne strukture']
  }
];

export const literatureList: Literature[] = [
  {
    title: "Batman and Psychology: A Dark and Stormy Knight",
    author: "Travis Langley",
    year: "2012",
    description: "Referentno djelo koje koristi stvarne psihološke teorije o PTSP-u, tugovanju i mehanizmima suočavanja kako bi analizirao superherojske ličnosti.",
    relevance: "Ključno za razumijevanje trauma Starka i Rogersa, te načina na koji kostimirane persone služe kao psihološki oklop."
  },
  {
    title: "The Psychology of Superheroes: An Unauthorized Exploration",
    author: "Robin S. Rosenberg",
    year: "2008",
    description: "Zbirka eseja u kojima klinički psiholozi analiziraju superheroje kroz leću kognitivno-bihevioralne terapije, sociologije i razvojne psihologije.",
    relevance: "Izvrsno objašnjava porijeklo altruizma i potrebu za preuzimanjem odgovornosti kod Petera Parkera."
  },
  {
    title: "Suočavanje s traumom i disocijacija: Arhetipovi u pop-kulturi",
    author: "Carl Gustav Jung (primijenjena teorija)",
    year: "1964 (klasični radovi)",
    description: "Analize arhetipa Sjene, Kolektivnog nesvjesnog i podijeljenih ličnosti.",
    relevance: "Izravna teorijska podloga za analizu Bannerovog disocijativnog poremećaja (Hulk) i Wandine rekonstrukcije uma."
  },
  {
    title: "Social Network Analysis: Methods and Applications",
    author: "Stanley Wasserman, Katherine Faust",
    year: "1994",
    description: "Temeljna knjiga o matematičkoj analizi socijalnih mreža, mjerenju centralnosti čvorova i formiranju klastera unutar društvenih struktura.",
    relevance: "Korisna za tehničku stranu razumijevanja kako se formiraju grupe i savezi unutar Avengersa na temelju frekvencije komunikacije."
  }
];
