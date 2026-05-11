import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Character, Relationship } from '../data/marvel_data';
import { Brain, Heart, Zap, Shield, User, Link as LinkIcon, X } from 'lucide-react';

interface DetailsPanelProps {
  selectedNode: Character | null;
  selectedLink: Relationship | null;
  onClose: () => void;
}

const DetailsPanel: React.FC<DetailsPanelProps> = ({ selectedNode, selectedLink, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      {(selectedNode || selectedLink) && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute top-0 right-0 h-full w-[400px] bg-[#111] border-l border-[#222] shadow-2xl p-8 overflow-y-auto z-20"
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
                <div className="flex items-center gap-2 text-[#E62429] mb-4">
                  <User size={16} />
                  <span className="text-xs font-mono uppercase tracking-[0.2em]">Profil Subjekta</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-white">{selectedNode.name}</h2>
                <p className="text-xl font-medium" style={{ color: selectedNode.color }}>{selectedNode.alias}</p>
              </header>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Brain size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Psihološki Kompleksi</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.psychology.complexes.map((c, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-[#1a1a1a] border border-[#333] text-gray-300 text-xs rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Zap size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Traumatska Iskustva</h3>
                </div>
                <ul className="space-y-2">
                  {selectedNode.psychology.traumas.map((t, i) => (
                    <li key={i} className="text-sm text-gray-400 border-l-2 border-[#333] pl-4 py-1 italic">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
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

              <section className="space-y-4 p-6 bg-[#000] border border-[#222] rounded-lg">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Shield size={18} />
                  <h3 className="text-xs font-mono uppercase tracking-widest">Stručna Analiza</h3>
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
                <div className="flex items-center gap-4 text-white">
                  <span className="text-xl font-bold">{selectedLink.source as any}</span>
                  <span className="text-gray-600">vs</span>
                  <span className="text-xl font-bold">{selectedLink.target as any}</span>
                </div>
                <div className="inline-block px-2 py-1 bg-blue-900/30 text-blue-400 text-[10px] font-mono uppercase tracking-widest rounded border border-blue-800/50">
                  {selectedLink.type}
                </div>
              </header>

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
