/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import NetworkGraph from './components/NetworkGraph';
import DetailsPanel from './components/DetailsPanel';
import { characters, relationships, literatureList, Character, Relationship } from './data/marvel_data';
import { Activity, Shield, Users, Info, BookOpen, Search, Filter, BarChart3, HelpCircle, Network, Flame, MessageSquare } from 'lucide-react';

type ActiveTab = 'network' | 'clusters' | 'analytics' | 'literature';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('network');
  const [selectedNode, setSelectedNode] = useState<Character | null>(null);
  const [selectedLink, setSelectedLink] = useState<Relationship | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClusterFilter, setSelectedClusterFilter] = useState<string>('');

  const handleNodeClick = (char: Character) => {
    setSelectedLink(null);
    setSelectedNode(char);
  };

  const handleLinkClick = (rel: Relationship) => {
    setSelectedNode(null);
    setSelectedLink(rel);
  };

  // Pretraga i filtriranje čvorova
  const filteredCharacters = useMemo(() => {
    return characters.filter(char => {
      const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            char.alias.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCluster = selectedClusterFilter ? char.cluster === selectedClusterFilter : true;
      return matchesSearch && matchesCluster;
    });
  }, [searchQuery, selectedClusterFilter]);

  // Izračun statistike komunikacije (Tko najviše komunicira)
  const communicationStats = useMemo(() => {
    return characters.map(char => {
      const relevantRels = relationships.filter(r => r.source === char.id || r.target === char.id);
      const totalScore = relevantRels.reduce((sum, r) => sum + (r.communicationStrength || 3), 0);
      return {
        ...char,
        totalScore,
        connectionCount: relevantRels.length,
        relations: relevantRels
      };
    }).sort((a, b) => b.totalScore - a.totalScore);
  }, []);

  const clustersInfo = {
    'Sci-Tech': {
      title: 'Znanost i Tehnologija (Sci-Tech)',
      tagline: 'Futurizam, preventivna kontrola, racionalizam pod svaku cijenu i suočavanje s vlastitim kreacijama.',
      color: '#E62429',
      coreDynamics: 'Glavni pokretači su Stark i Banner (Science Bros). Dinamika im je obilježena visokom razinom uzajamnog razumijevanja, no s stalnim rizikom od nesagledivih eksternalija (nepredviđenih situacija koje proizlaze iz tehnoloških eksperimenata poput Ultrona). Njihov je odnos obilježen intelektualnim suparništvom i dubokim suosjećanjem zbog spoznaje da su im kreacije ujedno i nesreća.'
    },
    'Military-Espionage': {
      title: 'Vojna struktura i Špijunaža (Military-Espionage)',
      tagline: 'Integritet, dužnost, moralna načela, sjene prošlosti i cijena iskupljenja.',
      color: '#003399',
      coreDynamics: 'Čine je Rogers, Romanoff, Barton i Bucky Barnes. Njihova dinamika je stup i moralna kralježnica cijelog svemira. Dok Rogers pruža nepokolebljiv stup svjetla, Romanoff i Barton djeluju iz sjene s fokusom na iskupljenje i "čišćenje duga" iz prošlosti. Bucky predstavlja tešku borbu s gubitkom autonomije i mentalnim programiranjem, tražeći utočište u preostalim simbolima povjerenja.'
    },
    'Mystic-Cosmic': {
      title: 'Mistične i Kozmičke Sile (Mystic-Cosmic)',
      tagline: 'Manipulacija stvarnošću, magijske zakrivljenosti, obiteljske sudbine i kršenje zakona biologije.',
      color: '#D4AF37',
      coreDynamics: 'Loki, Thor, Wanda i Strange su nositelji ove skupine. Njihove interakcije su često nabijene epskim tragedijama. Dok Thor i Strange navigiraju očuvanjem tkiva svemira kroz razum i dužnost, Wanda i Loki se stalno bore s ekstremnim emocionalnim nestabilnostima rođenim iz osjećaja odbačenosti ili teških obiteljskih gubitaka, čineći ih najnestabilnijim silama u mreži.'
    },
    'Street-Level': {
      title: 'Ulični Heroji (Street-Level)',
      tagline: 'Čuvari susjedstva, ravnoteža između običnog čovjeka i super-odgovornosti.',
      color: '#00AEEF',
      coreDynamics: 'Predstavnik Peter Parker, koji djeluje kao most između malih ljudi i najviših visina tehnološkog vodstva. Dinamika ove skupine je definirana dokazivanjem, potragom za očinskim odobravanjem te iznimno izraženim nagonom za preuzimanjem prevelike odgovornosti koja kognitivno opterećuje mladu psihu.'
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* Header */}
      <header className="h-20 border-b border-[#1a1a1a] bg-[#0a0a0a] px-8 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-[#E62429] rounded">
            <Shield size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase italic flex items-center gap-2">
              Marvel Mind Network <span className="text-xs font-mono font-normal not-italic px-1.5 py-0.5 bg-zinc-800 text-zinc-400 rounded">v3.0</span>
            </h1>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">S.H.I.E.L.D. Psychological Analysis Division</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-[#111] p-1 rounded-lg border border-[#222]">
          <button 
            onClick={() => { setActiveTab('network'); setSelectedNode(null); setSelectedLink(null); }}
            className={`px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'network' ? 'bg-[#E62429] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Network size={14} /> Grafiku Mreže
          </button>
          <button 
            onClick={() => { setActiveTab('clusters'); setSelectedNode(null); setSelectedLink(null); }}
            className={`px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'clusters' ? 'bg-[#E62429] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Filter size={14} /> Psiho Klasteri
          </button>
          <button 
            onClick={() => { setActiveTab('analytics'); setSelectedNode(null); setSelectedLink(null); }}
            className={`px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'analytics' ? 'bg-[#E62429] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <BarChart3 size={14} /> Analiza Komunikacije
          </button>
          <button 
            onClick={() => { setActiveTab('literature'); setSelectedNode(null); setSelectedLink(null); }}
            className={`px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'literature' ? 'bg-[#E62429] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <BookOpen size={14} /> Literatura
          </button>
        </div>

        <div className="flex items-center gap-8 hidden lg:flex">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-gray-600 uppercase">Subjekata</span>
            <span className="text-base font-bold text-[#E62429]">{characters.length} Čvorova</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-gray-600 uppercase">Veze</span>
            <span className="text-base font-bold text-blue-500">{relationships.length} Relacija</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex">
        {activeTab === 'network' && (
          <>
            {/* Sidebar search & quick filters */}
            <div className="w-80 bg-[#090909] border-r border-[#1a1a1a] p-6 flex flex-col gap-6 overflow-y-auto shrink-0">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Search size={12} /> Traži Subjekta
                </label>
                <input 
                  type="text"
                  placeholder="Unesite alias ili ime..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-[#121212] border border-[#222] rounded text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E62429] font-mono"
                />
              </div>

              {/* Group filter selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Filter size={12} /> Grupiranje / Klastiranje
                </label>
                <div className="flex flex-col gap-1">
                  <button 
                    onClick={() => setSelectedClusterFilter('')}
                    className={`px-3 py-1.5 rounded text-left text-xs font-mono transition-colors flex items-center justify-between ${
                      selectedClusterFilter === '' ? 'bg-[#1b1b1b] border-l-2 border-[#E62429] text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    📌 Prikaži sve grupe
                  </button>
                  <button 
                    onClick={() => setSelectedClusterFilter('Sci-Tech')}
                    className={`px-3 py-1.5 rounded text-left text-xs font-mono transition-colors flex items-center justify-between ${
                      selectedClusterFilter === 'Sci-Tech' ? 'bg-[#1b1b1b] border-l-2 border-[#E62429] text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    🛠️ Znanost i Tehnologija
                  </button>
                  <button 
                    onClick={() => setSelectedClusterFilter('Military-Espionage')}
                    className={`px-3 py-1.5 rounded text-left text-xs font-mono transition-colors flex items-center justify-between ${
                      selectedClusterFilter === 'Military-Espionage' ? 'bg-[#1b1b1b] border-l-2 border-[#E62429] text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    🛡️ Vojna i Špijunska
                  </button>
                  <button 
                    onClick={() => setSelectedClusterFilter('Mystic-Cosmic')}
                    className={`px-3 py-1.5 rounded text-left text-xs font-mono transition-colors flex items-center justify-between ${
                      selectedClusterFilter === 'Mystic-Cosmic' ? 'bg-[#1b1b1b] border-l-2 border-[#E62429] text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    🔮 Mistična i Kozmička
                  </button>
                  <button 
                    onClick={() => setSelectedClusterFilter('Street-Level')}
                    className={`px-3 py-1.5 rounded text-left text-xs font-mono transition-colors flex items-center justify-between ${
                      selectedClusterFilter === 'Street-Level' ? 'bg-[#1b1b1b] border-l-2 border-[#E62429] text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    🕸️ Ulični Heroji
                  </button>
                </div>
              </div>

              {/* Quick List */}
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Lista Subjekata ({filteredCharacters.length})</span>
                <div className="space-y-1 overflow-y-auto flex-1 pr-2">
                  {filteredCharacters.map(char => (
                    <button
                      key={char.id}
                      onClick={() => handleNodeClick(char)}
                      className={`w-full px-3 py-2 rounded text-left text-xs flex items-center justify-between transition-colors border border-transparent ${
                        selectedNode?.id === char.id ? 'bg-[#1a1a1a] border-[#333]' : 'hover:bg-[#111]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: char.color }} />
                        <span className="font-semibold text-gray-200">{char.alias}</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-500">{char.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Network Graph */}
            <div className="flex-1 h-full">
              <NetworkGraph 
                characters={filteredCharacters} 
                relationships={relationships} 
                onNodeClick={handleNodeClick}
                onLinkClick={handleLinkClick}
                selectedNodeId={selectedNode?.id}
                selectedClusterId={selectedClusterFilter || undefined}
              />
            </div>

            {/* Details Panel */}
            <DetailsPanel 
              selectedNode={selectedNode} 
              selectedLink={selectedLink}
              onClose={() => {
                setSelectedNode(null);
                setSelectedLink(null);
              }}
            />

            {/* Legend / Info Overlay */}
            <div className="absolute bottom-6 left-86 p-6 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#222] rounded-lg max-w-xs space-y-4 z-10">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Info size={14} />
                <span className="text-[10px] font-mono uppercase tracking-widest">Upute</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Interaktivni graf se može pomicati (drag) i zumirati (scroll). 
                <br /><br />
                Kliknite na <span className="text-white font-semibold">krug heroja</span> za psihološki S.H.I.E.L.D dosje ili kliknite na <span className="text-white font-semibold">veznu liniju</span> kako biste analizirali dinamiku sukoba.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-[#1a1a1a]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#dc2626]" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Rivalstvo / Sukob trauma</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#eab308]" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Tenzija / Povijesni dug</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#3b82f6]" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Mentorstvo / Očinstvo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#10b981]" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Obitelj / Bratski kaos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#6b7280]" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Duboko Prijateljstvo</span>
                </div>
              </div>
            </div>

            {/* Global Activity Ticker */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#000]/60 px-4 py-2 rounded-full border border-[#222] z-10 pointer-events-none">
              <Activity size={14} className="text-[#E62429]" />
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">Sustav spreman. Korelacija komunikacijskih tokova stabilna</span>
            </div>
          </>
        )}

        {/* Tab 2: Clusters description */}
        {activeTab === 'clusters' && (
          <div className="flex-1 overflow-y-auto p-12 bg-[#050505] space-y-12">
            <header className="max-w-4xl space-y-2">
              <h2 className="text-3xl font-bold uppercase tracking-tight italic text-white flex items-center gap-2">
                📂 Psihološki Klasteri i Grupne Sinergije
              </h2>
              <p className="text-gray-400 text-sm">
                Sustavno razvrstavanje Marvelovih subjekata na temelju podudaranja njihovih traumatskih profila, radnog okruženja i načina procesiranja unutarnjih sukoba.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              {Object.entries(clustersInfo).map(([key, value]) => {
                const members = characters.filter(c => c.cluster === key);
                return (
                  <div key={key} className="p-8 bg-[#0a0a0a] border border-[#1c1c1c] rounded-lg space-y-4 hover:border-gray-800 transition-colors">
                    <header className="space-y-1">
                      <span className="px-2 py-0.5 text-[9px] font-mono rounded uppercase text-white" style={{ backgroundColor: value.color }}>
                        {key}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight mt-2 text-white">{value.title}</h3>
                      <p className="text-xs text-gray-400 italic leading-relaxed">{value.tagline}</p>
                    </header>

                    <div className="h-px bg-zinc-900" />

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Analizirana grupna dinamika:</span>
                      <p className="text-xs text-gray-300 leading-relaxed">{value.coreDynamics}</p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Subjekti unutar grupe:</span>
                      <div className="flex flex-wrap gap-2">
                        {members.map(member => (
                          <span 
                            key={member.id} 
                            style={{ borderLeftColor: member.color }}
                            className="px-3 py-1 bg-[#121212] border-l-2 border-y border-r border-[#1e1e1e] text-xs font-semibold rounded text-white"
                          >
                            🦸 {member.alias} <span className="text-[10px] opacity-50 font-mono font-normal">({member.name})</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Detailed Analytics */}
        {activeTab === 'analytics' && (
          <div className="flex-1 overflow-y-auto p-12 bg-[#050505] space-y-12">
            <header className="max-w-4xl space-y-2">
              <h2 className="text-3xl font-bold uppercase tracking-tight italic text-white flex items-center gap-2">
                📊 Kvantitativna Analiza Komunikacije i Utjecaja
              </h2>
              <p className="text-gray-400 text-sm">
                Izračun komunikacijskog utjecaja subjekata temeljen na kumulativnom zbroju svih aktivnih međuljudskih relacija i volumena komunikacije u S.H.I.E.L.D. bazi.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
              {/* Kolona 1: Rang lista po intenzitetu komunikacije */}
              <div className="lg:col-span-2 p-8 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">Najaktivniji Komunikacijski Akteri</h3>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Sortirano po kumulativnom indeksu komunikacije</span>
                </div>

                <div className="space-y-4">
                  {communicationStats.map((stat, idx) => {
                    const pct = Math.min(100, (stat.totalScore / 19) * 100); // 19 is approx max possible score in current relationships
                    return (
                      <div key={stat.id} className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-[#E62429] font-bold">#{idx + 1}</span>
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stat.color }} />
                            <span className="font-bold text-gray-100">{stat.alias}</span>
                            <span className="text-gray-500 font-mono">({stat.name})</span>
                          </div>
                          <div className="font-mono text-gray-400">
                            Komunikacijski indeks: <span className="font-bold text-amber-500">{stat.totalScore}</span> ({stat.connectionCount} relacije)
                          </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-2 bg-[#121212] border border-[#222] rounded overflow-hidden">
                          <div 
                            className="h-full transition-all duration-500" 
                            style={{ 
                              width: `${pct}%`,
                              backgroundColor: stat.color
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Kolona 2: Najčešće teme i kognitivni zaključak */}
              <div className="p-8 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">Dominantne Tematske Preklapanja</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-[#111] border border-[#222] rounded space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-amber-500 font-bold uppercase">100% slaganja</span>
                        <span className="px-2 py-0.5 text-[8px] font-mono bg-red-950/20 text-red-400 border border-red-900/30 rounded">CRITIČNO</span>
                      </div>
                      <h4 className="text-sm font-semibold">Moralna Odgovornost kreatora</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Prisutno kod Tonyja Starka, Brucea Bannera, Wande Maximoff i Doctora Strangea. Vječni sukob između potrebe za napretkom i straha od vlastitih razornih tvorevina.
                      </p>
                    </div>

                    <div className="p-4 bg-[#111] border border-[#222] rounded space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-blue-400 font-bold uppercase">75% slaganja</span>
                        <span className="px-2 py-0.5 text-[8px] font-mono bg-blue-950/20 text-blue-400 border border-blue-900/30 rounded">VISOKO</span>
                      </div>
                      <h4 className="text-sm font-semibold">Tugovanje i integracija gubitka</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Ključna tema koja povezuje Wandu, Thora, Peter Parkera, Buckyja Barnesa i Clint Bartona. Gubitak obitelji gura subjekte prema ekstremnim akcijama rehabilitacije ili eskapizma.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-950 border-l-2 border-[#E62429] rounded text-xs text-gray-400 leading-relaxed italic">
                  "Analiza komunikacije dokazuje da bez obzira na epske bitke, cjelokupni Marvelov svemir počiva na rješavanju interpersonalne obiteljske tjeskobe i potrebe za iskupljenjem."
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Literature & References (APA standard aligned) */}
        {activeTab === 'literature' && (
          <div className="flex-1 overflow-y-auto p-12 bg-[#050505] space-y-12">
            <header className="max-w-4xl space-y-2">
              <h2 className="text-3xl font-bold uppercase tracking-tight italic text-white flex items-center gap-2">
                📖 Preporučena Literatura i Akademske Reference
              </h2>
              <p className="text-gray-400 text-sm">
                Znanstvena i stručna literatura koja vam može pomoći da dublje analizirate i razumijete narativnu psihologiju, arhetipove superheroja i sociosemantičko ponašanje likova unutar fikcije.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              {literatureList.map((lit, index) => (
                <div key={index} className="p-8 bg-[#0a0a0a] border border-[#1b1b1b] rounded-lg flex flex-col justify-between space-y-6 hover:border-zinc-800 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-500">
                      <BookOpen size={16} />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Znanstvena Referenca #{index + 1}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-tight text-white leading-snug">{lit.title}</h3>
                      <p className="text-xs font-mono text-zinc-500">
                        {lit.author} ({lit.year})
                      </p>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {lit.description}
                    </p>
                  </div>

                  <div className="p-4 bg-gray-950 border border-zinc-900 rounded space-y-1">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block">Relevancija za Marvel mrežu:</span>
                    <p className="text-xs text-gray-300 italic">
                      "{lit.relevance}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on APA Style */}
            <div className="max-w-xl p-6 bg-[#000] border border-[#1a1a1a] rounded text-xs text-gray-500 leading-relaxed font-mono">
              💡 **Savjet za pisanje seminarskih/znanstvenih radova:**  
              Ako koristite analizu iz ove aplikacije u svojim akademskim radovima, formatirajte je prema APA 7 standardu.  
              <br /><br />
              **Primjer citiranja baze podataka:**  
              *S.H.I.E.L.D. Division of Psychology. (2026). S.H.I.E.L.D. Character Database Analysis [Digital Network Data]. Marvel Mind Network System v3.0.*
            </div>
          </div>
        )}
      </main>

      {/* Footer / Status Bar */}
      <footer className="h-8 bg-[#0a0a0a] border-t border-[#1a1a1a] px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-1">
            <Users size={10} /> {characters.length} Čvorova u bazi
          </span>
          <span className="text-[9px] font-mono text-gray-700">|</span>
          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-1">
            <Flame size={10} /> {relationships.length} Aktivnih parova
          </span>
          <span className="text-[9px] font-mono text-gray-700">|</span>
          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest shadow-emerald-500">Svemir: MCU Earth-616</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] font-mono text-blue-900 uppercase">Šifrirana S.H.I.E.L.D. Veza: Aktivna</span>
        </div>
      </footer>
    </div>
  );
}
