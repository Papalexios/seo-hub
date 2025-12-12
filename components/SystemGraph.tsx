import React, { useState } from 'react';
import { PROJECTS } from '../constants';

// --- Types & Data ---

const PHASES = [
  {
    id: '00',
    title: 'INPUT SOURCE',
    desc: 'Raw Data Ingestion',
    color: 'text-gray-400',
    borderColor: 'border-gray-700',
    bgGradient: 'from-gray-900/50 to-gray-800/20',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    stats: { label: 'Data Points', value: 'Unlimited' },
    appIds: [] // No apps, just source
  },
  {
    id: '01',
    title: 'DEEP AUDIT',
    desc: 'Diagnostic Scan',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgGradient: 'from-cyan-950/40 to-cyan-900/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
    stats: { label: 'Detection Rate', value: '100%' },
    appIds: ['serpquantum-ai', 'wp-seo-optimizer-ai', 'sitemap-indexer-pro']
  },
  {
    id: '02',
    title: 'RESTORE',
    desc: 'Decay Reversal',
    color: 'text-orange-500', // Nexus Accent
    borderColor: 'border-orange-500/30',
    bgGradient: 'from-orange-950/40 to-orange-900/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    stats: { label: 'Content Saved', value: 'Automatic' },
    appIds: ['amz-neuralmesh']
  },
  {
    id: '03',
    title: 'STRATEGY & CREATE',
    desc: 'Generative Engine',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgGradient: 'from-emerald-950/40 to-emerald-900/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    stats: { label: 'Output Velocity', value: '100x' },
    appIds: ['seo-orchestrator', 'god-mode-seo', 'content-engine-ai', 'goal-forge-ai', 'sota-prompt-transformer']
  },
  {
    id: '04',
    title: 'LINK & OPTIMIZE',
    desc: 'Semantic Web',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgGradient: 'from-purple-950/40 to-purple-900/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    stats: { label: 'Graph Depth', value: 'Maximum' },
    appIds: ['neurolinker-ai', 'schema-generator-pro', 'ai-slug-optimizer', 'content-optimizer-pro']
  },
  {
    id: '05',
    title: 'MONETIZE',
    desc: 'Revenue Capture',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
    bgGradient: 'from-yellow-950/40 to-yellow-900/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.768 11 12 11c-.768 0-1.536.21-2.121.659L9 12.036m-1.215-1.956a2.25 2.25 0 013.3-3.376m0 0L12 6.036" />
      </svg>
    ),
    stats: { label: 'ROI Impact', value: '+124%' },
    appIds: ['amzpilot-ai', 'affiliate-monetization-analyzer', 'quiz-forge-ai', 'html-snippet-ai', 'ai-image-engine', 'ai-copilot']
  }
];

// --- Components ---

const Connector = ({ active }: { active?: boolean }) => (
    <div className="hidden md:flex items-center justify-center w-16 relative">
        {/* The static line */}
        <div className="h-1 w-full bg-white/5 rounded-full"></div>
        
        {/* The animated data pulse */}
        <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full overflow-hidden rounded-full">
                <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-nexus-accent to-transparent animate-[shimmer_1.5s_infinite] opacity-50"></div>
            </div>
        </div>
        
        {/* Arrow head */}
        <div className="absolute right-0 text-white/10">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </div>
    </div>
);

const MobileConnector = () => (
    <div className="md:hidden flex flex-col items-center h-12 relative my-2">
        <div className="w-1 h-full bg-white/5"></div>
         <div className="absolute inset-0 flex justify-center">
             <div className="w-1 h-full overflow-hidden">
                <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-nexus-accent to-transparent animate-[shimmer_1.5s_infinite] opacity-50"></div>
            </div>
         </div>
         <div className="absolute bottom-0 text-white/10 rotate-90">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
         </div>
    </div>
)

const AppChip = ({ id, phaseColor }: { id: string, phaseColor: string }) => {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return null;

    // "Tier 1" visual check - these are the big main apps
    const isTier1 = ['serpquantum-ai', 'amz-neuralmesh', 'seo-orchestrator', 'god-mode-seo', 'neurolinker-ai', 'amzpilot-ai'].includes(id);

    return (
        <a 
            href={project.liveUrls?.[0]?.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`group/app block relative overflow-hidden transition-all duration-300 ${isTier1 ? 'p-4 bg-black/40 border border-white/10 hover:border-white/30 rounded-lg' : 'p-2 py-3 bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-md'}`}
        >
            <div className="flex items-start gap-3">
                 <div className={`${isTier1 ? 'p-2 bg-white/5 rounded-md text-white' : 'text-nexus-muted scale-75'}`}>
                    {React.cloneElement(project.icon, { className: isTier1 ? 'w-5 h-5' : 'w-4 h-4' })}
                 </div>
                 <div className="flex-1 min-w-0">
                     <div className="flex items-center justify-between">
                        <span className={`block font-bold truncate ${isTier1 ? 'text-sm text-white' : 'text-xs text-nexus-text'}`}>
                            {project.name}
                        </span>
                        <svg className={`w-3 h-3 ${phaseColor} opacity-0 group-hover/app:opacity-100 transition-opacity transform -translate-x-2 group-hover/app:translate-x-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                     </div>
                     {isTier1 && (
                         <p className="text-[10px] text-nexus-muted mt-1 line-clamp-2 leading-tight">
                             {project.description}
                         </p>
                     )}
                 </div>
            </div>
        </a>
    )
}

const SystemGraph: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        
        {/* Ambient background noise/grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-nexus-accent animate-pulse"></div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-nexus-muted">Live Pipeline Visualization</span>
                </div>
                <h2 className="display-heading text-4xl md:text-6xl text-white mb-6">
                    LOGIC FLOW
                </h2>
                <p className="text-nexus-muted max-w-lg mx-auto font-mono text-sm tracking-wide">
                    FROM RAW DATA TO REVENUE • THE AUTONOMOUS CIRCUIT
                </p>
            </div>

            {/* THE PIPELINE SCROLL CONTAINER */}
            <div className="w-full overflow-x-auto pb-12 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing">
                <div className="flex flex-col md:flex-row items-stretch md:items-start min-w-full md:min-w-max px-4">
                    
                    {PHASES.map((phase, idx) => (
                        <React.Fragment key={phase.id}>
                            {/* Phase Card */}
                            <div className="flex-1 min-w-[300px] max-w-full md:max-w-[320px] group">
                                <div className={`h-full flex flex-col relative bg-nexus-panel/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]`}>
                                    
                                    {/* Top colored accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.bgGradient} opacity-50`}></div>
                                    
                                    {/* Header */}
                                    <div className="p-6 border-b border-white/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-2 rounded-lg bg-white/5 ${phase.color}`}>
                                                {phase.icon}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[10px] font-mono text-nexus-muted uppercase tracking-wider">Phase</div>
                                                <div className="text-xl font-display font-bold text-white leading-none">{phase.id}</div>
                                            </div>
                                        </div>
                                        <h3 className={`text-lg font-bold text-white mb-1 group-hover:${phase.color} transition-colors`}>{phase.title}</h3>
                                        <p className="text-xs text-nexus-muted font-mono uppercase tracking-wide">{phase.desc}</p>
                                    </div>

                                    {/* Content/Apps Area */}
                                    <div className="p-4 flex-1 bg-gradient-to-b from-transparent to-black/20 space-y-3">
                                        
                                        {phase.id === '00' ? (
                                             <div className="h-full flex flex-col items-center justify-center py-8 text-center text-nexus-muted">
                                                 <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-4">
                                                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                                 </div>
                                                 <p className="text-xs">Sitemap.xml</p>
                                                 <p className="text-xs">Competitor URLs</p>
                                                 <p className="text-xs">Keywords</p>
                                             </div>
                                        ) : (
                                            phase.appIds.map(appId => (
                                                <AppChip key={appId} id={appId} phaseColor={phase.color} />
                                            ))
                                        )}
                                        
                                    </div>

                                    {/* Footer Stats */}
                                    <div className="p-4 border-t border-white/5 bg-white/5 flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-nexus-muted uppercase">{phase.stats.label}</span>
                                        <span className={`text-xs font-bold ${phase.color}`}>{phase.stats.value}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Connector (Line) - Render only if not last item */}
                            {idx < PHASES.length - 1 && (
                                <>
                                    <Connector />
                                    <MobileConnector />
                                </>
                            )}
                        </React.Fragment>
                    ))}

                </div>
            </div>

        </div>
    </section>
  );
};

export default SystemGraph;