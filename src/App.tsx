/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import NetworkGraph from './components/NetworkGraph';
import DetailsPanel from './components/DetailsPanel';
import { characters, relationships, Character, Relationship } from './data/marvel_data';
import { Activity, Shield, Users, Info } from 'lucide-react';

export default function App() {
  const [selectedNode, setSelectedNode] = useState<Character | null>(null);
  const [selectedLink, setSelectedLink] = useState<Relationship | null>(null);

  const handleNodeClick = (char: Character) => {
    setSelectedLink(null);
    setSelectedNode(char);
  };

  const handleLinkClick = (rel: Relationship) => {
    setSelectedNode(null);
    setSelectedLink(rel);
  };

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* Header */}
      <header className="h-20 border-bottom border-[#1a1a1a] bg-[#0a0a0a] px-8 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-[#E62429] rounded">
            <Shield size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase italic">Marvel Mind Network</h1>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">S.H.I.E.L.D. Psychological Analysis Division v2.4</p>
          </div>
        </div>

        <div className="flex items-center gap-8 hidden md:flex">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-gray-600 uppercase">Analizirani Subjekti</span>
            <span className="text-lg font-bold text-[#E62429]">{characters.length}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-gray-600 uppercase">Aktivne Veze</span>
            <span className="text-lg font-bold text-blue-500">{relationships.length}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative flex">
        {/* Network Graph */}
        <div className="flex-1 h-full">
          <NetworkGraph 
            characters={characters} 
            relationships={relationships} 
            onNodeClick={handleNodeClick}
            onLinkClick={handleLinkClick}
            selectedNodeId={selectedNode?.id}
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
        <div className="absolute bottom-6 left-6 p-6 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#222] rounded-lg max-w-xs space-y-4 z-10 pointer-events-none">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <Info size={14} />
            <span className="text-[10px] font-mono uppercase tracking-widest">Upute i Legenda</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Kliknite na ikonu lika za detaljnu psihološku analizu. Kliknite na vezu (liniju) za analizu njihove dinamike.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-0.5 bg-[#4b5563]" />
              <span className="text-[10px] font-mono text-gray-500 uppercase">Interakcija</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border-2 border-white" />
              <span className="text-[10px] font-mono text-gray-500 uppercase">Odabran Subjekt</span>
            </div>
          </div>
        </div>

        {/* Global Activity Ticker */}
        <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#000]/50 px-4 py-2 rounded-full border border-[#333] z-10">
          <Activity size={14} className="text-[#E62429]" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">Sustav spreman za upit... korelacija podataka u tijeku</span>
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="h-8 bg-[#0a0a0a] border-t border-[#1a1a1a] px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-1">
            <Users size={10} /> 30+ Čvorova u bazi
          </span>
          <span className="text-[9px] font-mono text-gray-700">|</span>
          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Lokalna Vrijeme: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] font-mono text-blue-900 uppercase">Šifrirana Veza: Aktivna</span>
        </div>
      </footer>
    </div>
  );
}

