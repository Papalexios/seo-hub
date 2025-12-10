
import React from 'react';

// Icons for specific phases
const ScanIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
);
const RefreshIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
);
const StrategyIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
);
const LightningIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
);
const LinkIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
);
const MoneyIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.768 11 12 11c-.768 0-1.536.21-2.121.659L9 12.036m-1.215-1.956a2.25 2.25 0 013.3-3.376m0 0L12 6.036" /></svg>
);


// A single step in the vertical pipeline
const PipelineStep = ({ 
    number, 
    title, 
    desc, 
    tool,
    url,
    icon,
    align = 'left' 
}: { 
    number: string; 
    title: string; 
    desc: string; 
    tool?: string;
    url?: string;
    icon?: React.ReactNode;
    align?: 'left' | 'right'; 
}) => {
    return (
        <div className={`relative flex items-center w-full mb-20 ${align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
            
            {/* Center Node */}
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-nexus-black border border-white/20 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                <div className="w-2 h-2 bg-nexus-accent rounded-full animate-pulse-slow"></div>
            </div>
            
            {/* Connector Line (Invisible spacer to push content to side) */}
            <div className="w-1/2 hidden md:block"></div>
            
            {/* Content Card */}
            <div className={`w-full md:w-1/2 ${align === 'right' ? 'md:pr-16 pl-4' : 'md:pl-16 pr-4'}`}>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`group relative block p-6 bg-nexus-panel border border-white/5 rounded-xl transition-all duration-300 hover:border-nexus-accent hover:bg-white/5 hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${!url ? 'pointer-events-none' : ''}`}
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-nexus-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                    <div className={`flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] font-mono text-nexus-muted tracking-widest uppercase bg-white/5 px-2 py-1 rounded border border-white/5">
                                Phase {number}
                            </span>
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                                {title}
                            </span>
                        </div>
                        
                        {tool && (
                            <div className="flex items-center gap-3 mb-2">
                                {icon && <div className={`text-nexus-accent ${align === 'right' ? 'md:order-2' : ''}`}>{icon}</div>}
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-nexus-accent transition-colors">
                                    {tool}
                                </h3>
                            </div>
                        )}
                        
                        <p className="text-sm text-nexus-muted leading-relaxed max-w-sm mb-4">
                            {desc}
                        </p>

                        {url && (
                             <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase text-white group-hover:text-nexus-accent transition-colors">
                                <span>Launch System</span>
                                <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                             </div>
                        )}
                    </div>
                </a>
            </div>
        </div>
    );
};

const SystemGraph: React.FC = () => {
    return (
        <section id="architecture" className="py-32 bg-nexus-black relative overflow-hidden">
             
             {/* Background Tech Lines */}
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
                 <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
             </div>

             <div className="max-w-[1200px] mx-auto px-4 relative z-10">
                <div className="text-center mb-32">
                    <h2 className="display-heading text-5xl md:text-7xl text-white mb-6">
                        LOGIC FLOW
                    </h2>
                    <p className="text-nexus-muted max-w-lg mx-auto font-mono text-sm tracking-wide">
                        VISUALIZING THE AUTONOMOUS REVENUE PIPELINE
                    </p>
                </div>

                {/* The Timeline Container */}
                <div className="relative">
                    {/* The Central Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10 h-full"></div>
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-nexus-accent/50 h-[30%] bg-gradient-to-b from-nexus-accent via-purple-500 to-transparent shadow-[0_0_15px_rgba(255,68,0,0.5)]"></div>

                    <div className="pl-12 md:pl-0">
                         {/* Step 1: Input */}
                         <PipelineStep 
                            number="00" 
                            title="INITIALIZATION" 
                            desc="We ingest your Sitemap, raw URLs, and competitor data to build a knowledge graph."
                            tool="Your Data Source"
                            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
                            align="left"
                         />

                         {/* Step 2: Audit */}
                         <PipelineStep 
                            number="01" 
                            title="DEEP SCAN & AUDIT" 
                            desc="Crawls every URL to map topics and identify technical debt or SEO gaps."
                            tool="SerpQuantum AI"
                            url="https://serpquantum-ai.affiliatemarketingforsuccess.com"
                            icon={<ScanIcon />}
                            align="right"
                         />

                         {/* Step 3: Restore */}
                         <PipelineStep 
                            number="02" 
                            title="CONTENT RESTORATION" 
                            desc="Identifies decayed content and updates it with 2025 information."
                            tool="NeuralMesh"
                            url="https://amz-neuralmesh.affiliatemarketingforsuccess.com"
                            icon={<RefreshIcon />}
                            align="left"
                         />

                         {/* Step 4: Strategy */}
                         <PipelineStep 
                            number="03" 
                            title="STRATEGIC PLANNING" 
                            desc="Calculates the perfect content clusters to build topical authority."
                            tool="SEO Orchestrator"
                            url="https://seo-orchestrator.affiliatemarketingforsuccess.com"
                            icon={<StrategyIcon />}
                            align="right"
                         />

                         {/* Step 5: Create */}
                         <PipelineStep 
                            number="04" 
                            title="PRODUCTION ENGINE" 
                            desc="Generates undetectable, high-ranking content at scale."
                            tool="God Mode 2.0"
                            url="https://sota-god-mode.affiliatemarketingforsuccess.com/"
                            icon={<LightningIcon />}
                            align="left"
                         />

                         {/* Step 6: Link */}
                         <PipelineStep 
                            number="05" 
                            title="SEMANTIC CONNECTIVITY" 
                            desc="Injects semantic internal links to distribute PageRank."
                            tool="NeuroLinker AI"
                            url="https://neurolinker-ai.affiliatemarketingforsuccess.com"
                            icon={<LinkIcon />}
                            align="right"
                         />

                         {/* Step 7: Monetize */}
                         <PipelineStep 
                            number="06" 
                            title="MONETIZATION" 
                            desc="Auto-embeds high-conversion product tables and affiliate links."
                            tool="AmzPilot AI"
                            url="https://amzpilot-ai.affiliatemarketingforsuccess.com"
                            icon={<MoneyIcon />}
                            align="left"
                         />

                         {/* Step 8: Revenue */}
                         <div className="relative flex justify-center mt-32 md:ml-0 -ml-8">
                             <div className="relative group cursor-default">
                                <div className="absolute inset-0 bg-nexus-accent blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="relative bg-nexus-accent text-black font-black text-2xl md:text-4xl px-12 py-6 rounded-2xl shadow-[0_0_50px_rgba(255,68,0,0.4)] z-20 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                                    REVENUE GENERATED
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default SystemGraph;
