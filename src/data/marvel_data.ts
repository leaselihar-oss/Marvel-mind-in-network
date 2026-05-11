export interface Character {
  id: string;
  name: string;
  alias: string;
  color: string;
  psychology: {
    complexes: string[];
    traumas: string[];
    motivations: string[];
    analysis: string;
  };
}

export interface Relationship {
  source: string;
  target: string;
  type: 'rivalry' | 'friendship' | 'mentorship' | 'tension' | 'family';
  description: string;
  dynamic: string;
}

export const characters: Character[] = [
  {
    id: 'stark',
    name: 'Tony Stark',
    alias: 'Iron Man',
    color: '#E62429',
    psychology: {
      complexes: ['Mesijanski kompleks', 'Narkisoidni poremećaj (kompenzacija)', 'Strah od neadekvatnosti'],
      traumas: ['Smrt roditelja', 'Zarobljeništvo u Afganistanu', 'Bitka za New York (PTSP)'],
      motivations: ['Ostavština', 'Iskupljenje (Stark Industries prošlost)', 'Kontrola'],
      analysis: 'Starkova potreba za futurizmom zapravo je obrambeni mehanizam protiv nepredvidljivosti svijeta. Njegov visoki intelekt služi kao oklop koji štiti duboko ranjiv ego.'
    }
  },
  {
    id: 'rogers',
    name: 'Steve Rogers',
    alias: 'Captain America',
    color: '#003399',
    psychology: {
      complexes: ['Pretjerani osjećaj dužnosti', 'Krivnja preživjelog', 'Ideološki rigoriznam'],
      traumas: ['Gubitak Buckyja i Peggy (prvotni)', 'Buđenje u nepoznatom vremenu', 'Izdaja principa od strane vlade'],
      motivations: ['Integritet', 'Sloboda pojedinca', 'Zaštita slabijih'],
      analysis: 'Rogers je arhetip moralnog kompasa, ali njegova nemogućnost prilagodbe sivoj zoni modernog morala često ga dovodi u izolaciju. Njegova snaga je i njegova slabost.'
    }
  },
  {
    id: 'banner',
    name: 'Bruce Banner',
    alias: 'Hulk',
    color: '#2BB033',
    psychology: {
      complexes: ['Disocijativni poremećaj identiteta', 'Strah od samoga sebe', 'Intelektualna izolacija'],
      traumas: ['Zlostavljanje u djetinjstvu', 'Gama nesreća', 'Društveni izopćenik'],
      motivations: ['Mir', 'Kontrola bijesa', 'Znanstveni doprinos'],
      analysis: 'Hulk predstavlja Bannerove potisnute emocije. Njihov odnos je ekstremna manifestacija borbe između ega (Banner) i ida (Hulk).'
    }
  },
  {
    id: 'maximoff',
    name: 'Wanda Maximoff',
    alias: 'Scarlet Witch',
    color: '#8A0303',
    psychology: {
      complexes: ['Poremećaj privrženosti', 'Mesijanski vs. Destruktivni impuls', 'Eskapizam'],
      traumas: ['Gubitak roditelja', 'Smrt brata Pietra', 'Smrt Visiona'],
      motivations: ['Obitelj', 'Pripadnost', 'Moć nad vlastitom stvarnosti'],
      analysis: 'Wanda procesira tugu kroz distorziju stvarnosti. Njezina moć je direktno povezana s njezinim emocionalnim instabilitetom, čineći je najmoćnijom i najopasnijom figurom.'
    }
  },
  {
    id: 'parker',
    name: 'Peter Parker',
    alias: 'Spider-Man',
    color: '#00AEEF',
    psychology: {
      complexes: ['Imposter sindrom', 'Preuzimanje prevelike odgovornosti', 'Potraga za očinskom figurom'],
      traumas: ['Smrt ujaka Bena', 'Gubitak roditelja', 'Smrt mentora (Stark)'],
      motivations: ['Odgovornost', 'Validacija', 'Građanska dužnost'],
      analysis: 'Parkerova borba s identitetom tinejdžera i heroja stvara stalni kognitivni pritisak. Njegova duhovitost je mehanizam suočavanja sa strahom.'
    }
  },
  {
    id: 'thor',
    name: 'Thor Odinson',
    alias: 'God of Thunder',
    color: '#FFD700',
    psychology: {
      complexes: ['Kompleks dostojnosti', 'Obiteljski teret', 'Gubitak božanskog identiteta'],
      traumas: ['Smrt Odina i Frigge', 'Uništenje Asgarda', 'Neuspjeh protiv Thanosa'],
      motivations: ['Čast', 'Zaštita devet svjetova', 'Samoaktualizacija'],
      analysis: 'Thorova evolucija ide od arogantnog ratnika do depresivnog kralja koji traži svrhu izvan svoje titule. Njegova snaga je vezana uz njegovo psihičko stanje.'
    }
  },
  {
    id: 'romanoff',
    name: 'Natasha Romanoff',
    alias: 'Black Widow',
    color: '#000000',
    psychology: {
      complexes: ['Strah od intimnosti', 'Krivnja zbog prošlosti (Red Room)', 'Identitet kao instrument'],
      traumas: ['Infiltracija i deprogramiranje', 'Sterilizacija (Red Room)', 'Gubitak obitelji (Avengers)'],
      motivations: ['Iskupljenje (Crvena tinta)', 'Lojalnost', 'Zaštita nevinih'],
      analysis: 'Natasha koristi emocionalni distancu kao alat preživljavanja. Njezina potraga za iskupljenjem je motor koji pokreće njezinu lojalnost Avengersima, koji su njezina prva stvarna obitelj.'
    }
  },
  {
    id: 'barton',
    name: 'Clint Barton',
    alias: 'Hawkeye',
    color: '#4B0082',
    psychology: {
      complexes: ['Kompleks inferiornosti (kao čovjek među bogovima)', 'Podijeljena lojalnost', 'Represija emocija'],
      traumas: ['Gubitak obitelji (Snap)', 'Period kao Ronin', 'Ispiranje mozga (Loki)'],
      motivations: ['Obitelj', 'Mentorstvo', 'Osiguravanje pravde iz sjene'],
      analysis: 'Clint je moralni sidrišni član tima. Njegova normalnost ga čini najprizemnijim, ali i najranjivijim na gubitak, što se vidjelo kroz njegovu transformaciju u Ronina.'
    }
  }
];

export const relationships: Relationship[] = [
  {
    source: 'stark',
    target: 'rogers',
    type: 'rivalry',
    description: 'Ideološki sukob: Sigurnost kroz kontrolu (Stark) vs Sloboda kroz integritet (Rogers).',
    dynamic: 'Stark vidi Rogersa kao naivnog, dok Rogers vidi Starka kao arogantnog i opasnog. Civil War je vrhunac njihove nesposobnosti da usklade svoje traume.'
  },
  {
    source: 'romanoff',
    target: 'barton',
    type: 'friendship',
    description: 'Najdublja lojalnost utemeljena na zajedničkoj mračnoj prošlosti.',
    dynamic: 'Budimpešta kao simbol njihove povezanosti. Oni su jedno drugom sidro u svijetu koji ih vidi kao alate. Njihov odnos je definiran žrtvovanjem.'
  },
  {
    source: 'romanoff',
    target: 'banner',
    type: 'friendship',
    description: 'Romantična tenzija rođena iz zajedničkog osjećaja "čudovišnosti".',
    dynamic: 'Natasha vidi u Banneru osobu koja je, kao i ona, lišena normalnog života. Njihova veza je krhka zbog Bannerovog straha da ne povrijedi one koje voli.'
  },
  {
    source: 'stark',
    target: 'parker',
    type: 'mentorship',
    description: 'Zamjensko očinstvo i mentorstvo.',
    dynamic: 'Stark pokušava spriječiti Parkera da napravi iste greške, ali Parkerova želja za validacijom često nadilazi Starkovu opreznost.'
  },
  {
    source: 'banner',
    target: 'stark',
    type: 'friendship',
    description: 'Science Bros - međusobno intelektualno poštovanje.',
    dynamic: 'Oba lika dijele strah od vlastitih kreacija. Stark se divi Bannerovom intelektu, dok Banner u Starku vidi osobu koja se ne boji čudovišta.'
  },
  {
    source: 'maximoff',
    target: 'stark',
    type: 'tension',
    description: 'Povijesna trauma uzrokovana Starkovim oružjem.',
    dynamic: 'Wandina početna mržnja prema Starku oblikovala je njezinu ranu karijeru. Iako su kasnije radili zajedno, sjenka prošlosti uvijek je prisutna.'
  },
  {
    source: 'thor',
    target: 'banner',
    type: 'friendship',
    description: 'Poštovanje kroz fizičku snagu i zajedničku otuđenost.',
    dynamic: 'Dva najjača člana tima koji se često osjećaju kao stranci među ljudima. Njihova dinamika je često kompetitivna, ali duboko lojalna.'
  },
  {
    source: 'parker',
    target: 'rogers',
    type: 'friendship',
    description: 'Uzaššće ideala i poštovanje tradicije.',
    dynamic: 'Parker se divi Rogersovim principima, dok Rogers u Parkeru vidi srce koje je nekad on imao prije nego što je svijet postao ciničan.'
  }
];
