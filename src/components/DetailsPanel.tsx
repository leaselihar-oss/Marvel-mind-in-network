import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Character, Relationship, characters } from '../data/marvel_data';
import { Brain, Heart, Zap, Shield, User, Link as LinkIcon, X, Target, MessageSquare, Compass, Network } from 'lucide-react';

interface DetailsPanelProps {
  selectedNode: Character | null;
  selectedLink: Relationship | null;
  onClose: () => void;
}

const DetailsPanel: React.FC<DetailsPanelProps> = ({ selectedNode, selectedLink, onClose }) => {
  const getCharacterDisplayName = (nodeVal: any): string => {
    if (!nodeVal) return '';
    if (typeof nodeVal === 'object') {
      return nodeVal.alias || nodeVal.name || nodeVal.id || '';
    }
    const found = characters.find(c => c.id === nodeVal);
    return found ? found.alias : nodeVal;
  };

  const getCharacterColor = (nodeVal: any): string => {
    if (!nodeVal) return '#fff';
    if (typeof nodeVal === 'object') {
      return nodeVal.color || '#fff';
    }
    const found = characters.find(c => c.id === nodeVal);
    return found ? found.color : '#fff';
  };

  const getCommunicationStars = (strength: number) => {
    return '⚡'.repeat(strength) + '☆'.repeat(5 - strength);
  };

  return (
    <AnimatePresence mode="wait">
      {(selectedNode || selectedLink) && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute top-0 right-0 h-full w-[420px] bg-[#0d0d0d] border-l border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 overflow-y-auto z-20"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-[#222] rounded-full transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>

          {selectedNode && (
            <div className="space-y-8">
              <header className="space-y-2">
                <div className="flex items-center gap-2 text-[#E62429] mb-3">
                  <User size={16} />
                  <span className="text-xs font-mono uppercase tracking-[0.2em]">S.H.I.E.L.D. Dosje</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-white">{selectedNode.name}</h2>
                <div className="flex items-center gap-3">
                  <p className="text-xl font-medium" style={{ color: selectedNode.color }}>{selectedNode.alias}</p>
                  <span className="px-2 py-0.5 bg-[#1b1b1b] border border-[#333] text-[10px] text-gray-400 font-mono rounded uppercase">
                    {selectedNode.cluster}
                  </span>
                </div>
              </header>

              {/* Cluster Explanation */}
              <section className="p-4 bg-gray-950 border-l-2 border-amber-500 rounded text-xs text-gray-400 leading-relaxed">
                <div className="font-bold text-amber-500 mb-1 flex items-center gap-1">
                  <Network size={12} /> {selectedNode.cluster} Grupa
                </div>
                {selectedNode.clusterDescription}
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <Brain size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Psihološki Kompleksi</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.psychology.complexes.map((c, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-[#1a1a1a] border border-[#333] text-gray-300 text-xs rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <Zap size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Traumatska Iskustva</h3>
                </div>
                <ul className="space-y-2">
                  {selectedNode.psychology.traumas.map((t, i) => (
                    <li key={i} className="text-sm text-gray-400 border-l-2 border-[#444] pl-4 py-1 italic">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <Target size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Zajednički Ciljevi</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.commonGoals.map((g, i) => (
                    <span key={i} className="px-2.5 py-1 bg-blue-950/20 border border-blue-900/30 text-blue-300 text-xs rounded">
                      🎯 {g}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <MessageSquare size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Uobičajene Teme Razgovora</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.commonTopics.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-purple-950/20 border border-purple-900/30 text-purple-300 text-xs rounded">
                      💬 {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <Heart size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Primarne Motivacije</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {selectedNode.psychology.motivations.map((m, i) => (
                    <div key={i} className="p-3 bg-[#0a0a0a] border border-[#222] rounded flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-xs text-gray-400">{m}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3 p-6 bg-[#000] border border-[#222] rounded-lg">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Shield size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Stručna Psihijatrijska Analiza</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "{selectedNode.psychology.analysis}"
                </p>
              </section>
            </div>
          )}

          {selectedLink && (
            <div className="space-y-8">
              <header className="space-y-2">
                <div className="flex items-center gap-2 text-blue-500 mb-4">
                  <LinkIcon size={16} />
                  <span className="text-xs font-mono uppercase tracking-[0.2em]">Analiza Odnosa</span>
                </div>
                <div className="flex items-center gap-4 text-white flex-wrap">
                  <span className="text-xl font-bold" style={{ color: getCharacterColor(selectedLink.source) }}>
                    {getCharacterDisplayName(selectedLink.source)}
                  </span>
                  <span className="text-gray-600 font-mono">vs</span>
                  <span className="text-xl font-bold" style={{ color: getCharacterColor(selectedLink.target) }}>
                    {getCharacterDisplayName(selectedLink.target)}
                  </span>
                </div>
                <div className="inline-block px-2 py-1 bg-blue-900/30 text-blue-400 text-[10px] font-mono uppercase tracking-widest rounded border border-blue-800/50">
                  {selectedLink.type}
                </div>
              </header>

              <section className="space-y-2 p-4 bg-gray-950 border border-[#222] rounded">
                <h4 className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Učestalost / Volumen Komunikacije</h4>
                <div className="text-sm font-bold text-amber-500 tracking-widest font-mono">
                  {getCommunicationStars(selectedLink.communicationStrength || 3)}
                  <span className="ml-2 text-xs text-gray-500 font-normal">({selectedLink.communicationStrength || 3}/5)</span>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500">Zajedničke Teme i Rasprave</h3>
                <div className="flex flex-wrap gap-2">
                  {(selectedLink.sharedTopics || []).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-[#1a1a1a] border border-[#333] text-gray-300 text-xs rounded">
                      🏷️ {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500">Opis Dinamike</h3>
                <p className="text-lg text-white font-medium italic">
                  {selectedLink.description}
                </p>
              </section>

              <section className="space-y-4 p-6 bg-blue-950/20 border border-blue-900/30 rounded-lg">
                <h3 className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-2">Psihološki Utjecaj</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedLink.dynamic}
                </p>
              </section>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailsPanel;
