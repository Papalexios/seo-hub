import React, { useState, useMemo, useEffect, createRef, useLayoutEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const PHASES: { [key: number]: { name: string; color: string } } = {
    1: { name: '1. Strategize', color: '#38bdf8' }, // sky-400
    2: { name: '2. Create', color: '#818cf8' }, // indigo-400
    3: { name: '3. Enhance', color: '#e879f9' }, // fuchsia-400
    4: { name: '4. Perfect', color: '#f472b6' }, // pink-400
    5: { name: '5. Amplify', color: '#34d399' }, // emerald-400
};

const workflowLayout: string[][] = [
    ['seo-orchestrator'],
    ['sota-prompt-transformer', 'content-engine-ai', 'content-optimizer-pro'],
    ['html-snippet-ai', 'ai-image-engine', 'quiz-forge-ai'],
    ['ai-slug-optimizer', 'schema-generator-pro'],
    ['ai-copilot', 'sitemap-indexer-pro'],
];

const edges = [
    { source: 'seo-orchestrator', target: 'content-engine-ai' },
    { source: 'sota-prompt-transformer', target: 'content-engine-ai' },
    { source: 'content-engine-ai', target: 'content-optimizer-pro' },
    { source: 'content-optimizer-pro', target: 'html-snippet-ai' },
    { source: 'content-optimizer-pro', target: 'ai-image-engine' },
    { source: 'content-optimizer-pro', target: 'quiz-forge-ai' },
    { source: 'content-optimizer-pro', target: 'ai-slug-optimizer' },
    { source: 'content-optimizer-pro', target: 'schema-generator-pro' },
    { source: 'schema-generator-pro', target: 'ai-copilot' },
    { source: 'ai-copilot', target: 'sitemap-indexer-pro' },
    { source: 'content-optimizer-pro', target: 'sitemap-indexer-pro' },
];

const getToolData = (id: string): Project | null => {
    return PROJECTS.find(p => p.id === id) || null;
};

const getSynergyTip = (sourceId: string, targetId: string): string => {
    const synergyMap: Record<string, Record<string, string>> = {
      'seo-orchestrator': { 'content-engine-ai': "Your strategic content plan from the Orchestrator directly feeds the Content Engine, ensuring every piece you generate builds topical authority." },
      'sota-prompt-transformer': { 'content-engine-ai': "Elevate your Content Engine's output by transforming your simple ideas into SOTA prompts, unlocking a higher level of quality and nuance." },
      'content-engine-ai': { 'content-optimizer-pro': "The raw content from the Engine is the perfect input for the Optimizer, which refines it to mathematically beat the top search results." },
      'content-optimizer-pro': {
        'html-snippet-ai': "Once optimized, use the HTML Snippet AI to turn static text into an interactive asset, boosting engagement and creating backlink opportunities.",
        'ai-image-engine': "A perfectly optimized post needs compelling visuals. The AI Image Engine creates relevant, unique images to accompany your text.",
        'quiz-forge-ai': "Increase time-on-page and user retention by embedding a quiz from QuizForge AI directly into your optimized content.",
        'ai-slug-optimizer': "Don't neglect the details. Use the Slug Optimizer to ensure your URL is as perfectly tuned as your content, signaling relevance to Google.",
        'schema-generator-pro': "With your content finalized, generate flawless schema to help search engines understand your page and award you with rich snippets.",
        'sitemap-indexer-pro': "After optimizing and publishing, immediately notify Google using the Sitemap Indexer to get your page crawled and ranked faster."
      },
      'schema-generator-pro': { 'ai-copilot': "Your rich snippet potential is fuel for social media. The AI Co-pilot can leverage your schema-enhanced content for more compelling posts." },
      'ai-copilot': { 'sitemap-indexer-pro': "After promoting your new content across social platforms, use the Sitemap Indexer to immediately notify Google of the new signals and content." }
    };
    return synergyMap[sourceId]?.[targetId] || synergyMap[targetId]?.[sourceId] || '';
};


interface ConnectorPath {
    d: string;
    key: string;
    source: string;
    target: string;
    color: string;
}

const SystemGraph: React.FC = () => {
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>('content-optimizer-pro');
    const [connectorPaths, setConnectorPaths] = useState<ConnectorPath[]>([]);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

    useMemo(() => {
        PROJECTS.forEach(p => {
            if (!nodeRefs.current[p.id]) {
                nodeRefs.current[p.id] = createRef<HTMLDivElement>();
            }
        });
    }, []);

    useLayoutEffect(() => {
        const calculatePaths = () => {
            if (!containerRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            
            const newPaths = edges.map((edge) => {
                const sourceNodeEl = nodeRefs.current[edge.source]?.current;
                const targetNodeEl = nodeRefs.current[edge.target]?.current;

                if (!sourceNodeEl || !targetNodeEl) return null;

                const sourceRect = sourceNodeEl.getBoundingClientRect();
                const targetRect = targetNodeEl.getBoundingClientRect();

                const isVerticalLayout = window.innerWidth <= 1024;
                let startX, startY, endX, endY;

                if (isVerticalLayout) { // Vertical flow
                    startX = sourceRect.left + sourceRect.width / 2 - containerRect.left;
                    startY = sourceRect.bottom - containerRect.top;
                    endX = targetRect.left + targetRect.width / 2 - containerRect.left;
                    endY = targetRect.top - containerRect.top;
                } else { // Horizontal flow
                    startX = sourceRect.right - containerRect.left;
                    startY = sourceRect.top + sourceRect.height / 2 - containerRect.top;
                    endX = targetRect.left - containerRect.left;
                    endY = targetRect.top + targetRect.height / 2 - containerRect.top;
                }
                
                const dx = endX - startX;
                const dy = endY - startY;
                const path = isVerticalLayout
                    ? `M ${startX},${startY} C ${startX},${startY + dy * 0.6} ${endX},${startY + dy * 0.4} ${endX},${endY}`
                    : `M ${startX},${startY} C ${startX + dx * 0.6},${startY} ${startX + dx * 0.4},${endY} ${endX},${endY}`;

                const sourcePhaseIndex = workflowLayout.findIndex(tools => tools.includes(edge.source));
                const color = PHASES[sourcePhaseIndex + 1]?.color || '#9ca3af';

                return { d: path, key: `${edge.source}-${edge.target}`, source: edge.source, target: edge.target, color };
            }).filter((p): p is ConnectorPath => p !== null);

            setConnectorPaths(newPaths);
        };
        
        calculatePaths();
        const observer = new ResizeObserver(calculatePaths);
        if (containerRef.current) observer.observe(containerRef.current);
        
        return () => observer.disconnect();
    }, []);
    
    const adjacencyList = useMemo(() => {
        const list: { [key: string]: string[] } = {};
        PROJECTS.forEach(p => list[p.id] = []);
        edges.forEach(e => {
            list[e.source].push(e.target);
            list[e.target].push(e.source);
        });
        return list;
    }, []);

    const selectedToolData = selectedNodeId ? getToolData(selectedNodeId) : null;
    const peers = selectedNodeId ? adjacencyList[selectedNodeId] : [];
    
    return (
        <section id="system" className="py-24 sm:py-32 section-animate">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl transition-colors duration-500">The Core Workflow: A Visualized System</h2>
                    <p className="mt-4 text-lg text-[var(--text-muted)] max-w-3xl mx-auto transition-colors duration-500">
                        This is the assembly line for market domination. Click any tool to see how it plugs into the system and amplifies the tools around it.
                    </p>
                </div>
                <div className="mt-16 relative system-graph-layout-container">
                    <div ref={containerRef} className="aurora-card rounded-3xl relative backdrop-blur-variable">
                        <div className="border-glow" />
                        <div className="system-diagram">
                            {workflowLayout.map((toolsInPhase, phaseIndex) => (
                                <div key={phaseIndex} className="phase-column">
                                    <div className="phase-header" style={{ borderColor: PHASES[phaseIndex + 1].color }}>
                                        <h3 style={{ color: PHASES[phaseIndex + 1].color }}>{PHASES[phaseIndex + 1].name}</h3>
                                    </div>
                                    {toolsInPhase.map(toolId => {
                                        const tool = getToolData(toolId);
                                        if (!tool) return null;
                                        const isSelected = selectedNodeId === toolId;
                                        const isPeer = peers.includes(toolId);
                                        const isDimmed = selectedNodeId && !isSelected && !isPeer;

                                        return (
                                            <div
                                                key={toolId}
                                                ref={nodeRefs.current[toolId]}
                                                onClick={() => setSelectedNodeId(toolId)}
                                                className={`tool-node-card ${isSelected ? 'selected' : ''} ${isPeer ? 'peer' : ''} ${isDimmed ? 'dimmed' : ''}`}
                                            >
                                                <div className="tool-node-icon-wrapper" style={isSelected || isPeer ? {backgroundColor: `color-mix(in srgb, ${PHASES[phaseIndex+1].color} 20%, transparent)`} : {}}>
                                                   {React.cloneElement(tool.icon, { className: 'w-6 h-6', strokeWidth: 1.5, color: PHASES[phaseIndex+1].color })}
                                                </div>
                                                <span className="tool-node-name">{tool.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                        <svg className="svg-connector-layer">
                            <defs>
                                {Object.values(PHASES).map(p => (
                                    <linearGradient key={p.color} id={`grad-${p.color}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor={p.color} stopOpacity="0.1" />
                                        <stop offset="100%" stopColor={p.color} stopOpacity="1" />
                                    </linearGradient>
                                ))}
                            </defs>
                            {connectorPaths.map(path => {
                                const isActive = (selectedNodeId === path.source || selectedNodeId === path.target) && peers.includes(selectedNodeId === path.source ? path.target : path.source);
                                const isVisible = selectedNodeId === path.source || selectedNodeId === path.target;
                                return (
                                    <path
                                        key={path.key}
                                        d={path.d}
                                        className={`connector-path ${isActive ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
                                        stroke={isActive ? `url(#grad-${path.color})` : path.color}
                                    />
                                );
                            })}
                        </svg>
                    </div>

                    <div className={`graph-info-panel ${!selectedToolData ? 'hidden' : ''}`}>
                      <div className="sticky top-28 aurora-card rounded-2xl">
                          <div className="border-glow" />
                          <div className="p-6 backdrop-blur-variable rounded-2xl">
                          {selectedToolData ? (
                            <div>
                               <div className="flex items-start gap-4">
                                  <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-lg text-[var(--text-icon)]" style={{ background: 'var(--bg-icon-wrapper)'}}>
                                    {React.cloneElement(selectedToolData.icon, { className: 'w-8 h-8' })}
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-bold text-[var(--text-heading)]">{selectedToolData.name}</h3>
                                  </div>
                               </div>
                               <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{selectedToolData.description}</p>
                               {peers.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-[var(--border-card)]">
                                    <h4 className="text-sm font-semibold text-[var(--accent-secondary)]">Synergy Tips:</h4>
                                    <ul className="mt-2 space-y-2">
                                        {peers.map(peerId => {
                                            const tip = getSynergyTip(selectedToolData.id, peerId);
                                            const peerTool = getToolData(peerId);
                                            if (!tip || !peerTool) return null;
                                            return (
                                                <li key={peerId} className="text-sm text-[var(--text-muted)]">
                                                   <strong className="text-[var(--text-main)]">vs. {peerTool.name}: </strong>{tip}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                               )}
                            </div>
                          ) : (
                             <div className="text-center p-8">
                                <h3 className="font-semibold text-[var(--text-heading)]">Select a Tool</h3>
                                <p className="text-sm text-[var(--text-muted)] mt-2">Click any tool to explore its function and system connections.</p>
                             </div>
                          )}
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemGraph;
