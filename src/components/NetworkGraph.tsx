import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Character, Relationship } from '../data/marvel_data';

interface GraphNode extends Character, d3.SimulationNodeDatum {}
interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  type: string;
  description: string;
  dynamic: string;
  communicationStrength?: number;
}

interface NetworkGraphProps {
  characters: Character[];
  relationships: Relationship[];
  onNodeClick: (char: Character) => void;
  onLinkClick: (rel: Relationship) => void;
  selectedNodeId?: string;
  selectedClusterId?: string;
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ 
  characters, 
  relationships, 
  onNodeClick, 
  onLinkClick,
  selectedNodeId,
  selectedClusterId
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Prepare data
    const nodes: GraphNode[] = characters.map(d => ({ ...d }));
    const links: GraphLink[] = relationships.map(d => ({ ...d }));

    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(links)
        .id(d => d.id)
        .distance(180))
      .force('charge', d3.forceManyBody().strength(-600))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(70));

    // Links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', d => {
        if (d.type === 'rivalry') return '#dc2626'; // Red
        if (d.type === 'tension') return '#eab308'; // Amber
        if (d.type === 'mentorship') return '#3b82f6'; // Blue
        if (d.type === 'family') return '#10b981'; // Emerald
        return '#6b7280'; // Gray (friendship)
      })
      .attr('stroke-width', d => d.communicationStrength ? d.communicationStrength * 1.5 : 2)
      .attr('stroke-opacity', d => {
        if (!selectedClusterId) return 0.7;
        
        // If cluster is selected, check if both endpoints belong to it or at least one
        const s = typeof d.source === 'object' ? (d.source as GraphNode).cluster : characters.find(c => c.id === d.source)?.cluster;
        const t = typeof d.target === 'object' ? (d.target as GraphNode).cluster : characters.find(c => c.id === d.target)?.cluster;
        
        return (s === selectedClusterId && t === selectedClusterId) ? 0.9 : 0.1;
      })
      .attr('cursor', 'pointer')
      .on('click', (event, d) => onLinkClick(d as unknown as Relationship));

    // Nodes
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .enter().append('g')
      .attr('cursor', 'pointer')
      .attr('class', 'node-group')
      .style('opacity', d => {
        if (!selectedClusterId) return 1;
        return d.cluster === selectedClusterId ? 1 : 0.2;
      })
      .call(d3.drag<any, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      .on('click', (event, d) => onNodeClick(d as Character));

    node.append('circle')
      .attr('r', 28)
      .attr('fill', d => d.color)
      .attr('stroke', d => d.id === selectedNodeId ? '#fff' : 'rgba(255,255,255,0.2)')
      .attr('stroke-width', d => d.id === selectedNodeId ? 4 : 2);

    node.append('text')
      .text(d => d.alias)
      .attr('dy', 45)
      .attr('text-anchor', 'middle')
      .attr('fill', '#fff')
      .attr('font-size', '12px')
      .attr('font-weight', '500')
      .attr('font-family', 'Space Grotesk, sans-serif')
      .style('text-shadow', '0 2px 4px rgba(0,0,0,0.8)');

    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as GraphNode).x!)
        .attr('y1', d => (d.source as GraphNode).y!)
        .attr('x2', d => (d.target as GraphNode).x!)
        .attr('y2', d => (d.target as GraphNode).y!);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [characters, relationships, onNodeClick, onLinkClick, selectedNodeId, selectedClusterId]);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#050505] overflow-hidden relative border border-[#1a1a1a]">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-1">Status Sustava</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">Analiza Aktivna</span>
        </div>
      </div>
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default NetworkGraph;
