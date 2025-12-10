import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const BentoCard: React.FC<{ project: Project; className?: string }> = ({ project, className }) => {
  return (
    <div className={`bento-card group ${className || ''}`}>
       {/* Background Glow on Hover */}
       <div className="absolute inset-0 bg-gradient-to-br from-nexus-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
       
       <div className="relative z-10 flex flex-col h-full justify-between">
           <div>
               <div className="flex justify-between items-start mb-6">
                   <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white group-hover:bg-nexus-accent group-hover:text-black transition-colors duration-300">
                       {React.cloneElement(project.icon, { className: 'w-6 h-6' })}
                   </div>
                   {project.statValue && (
                       <div className="text-right">
                           <div className="font-mono text-xs text-nexus-accent">{project.statLabel}</div>
                           <div className="font-bold text-white">{project.statValue}</div>
                       </div>
                   )}
               </div>
               
               <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{project.name}</h3>
               <p className="text-nexus-muted text-sm leading-relaxed mb-6">
                   {project.description}
               </p>
           </div>

           <div>
              {project.liveUrls && (
                <div className="flex flex-wrap gap-2">
                    {project.liveUrls.map(url => (
                        <a 
                            key={url.url}
                            href={url.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black border border-nexus-border rounded text-[10px] font-mono uppercase tracking-widest text-white hover:border-nexus-accent hover:text-nexus-accent transition-all"
                        >
                            Launch_App
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    ))}
                </div>
              )}
           </div>
       </div>
    </div>
  );
};

const ProjectsGrid: React.FC = () => {
  // Re-organize projects for Bento Layout visuals
  // Highlighting the "Big 4" (Quantum, Mesh, Mode, Pilot)
  
  return (
    <section id="tools" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 border-b border-nexus-border pb-8 flex flex-col md:flex-row justify-between items-end">
          <h2 className="display-heading text-4xl md:text-6xl text-white">
            MODULES
          </h2>
          <div className="text-right font-mono text-xs text-nexus-muted">
            <p>SYSTEM STATUS: OPTIMAL</p>
            <p>AVAILABLE AGENTS: {PROJECTS.length}</p>
          </div>
      </div>

      <div className="bento-grid">
        {PROJECTS.map((project, idx) => {
            // Logic to make certain cards span 2 columns for visual interest
            // e.g. First item, and items at index 3, 6
            const isWide = idx === 0 || idx === 3 || idx === 6; 
            const spanClass = isWide ? 'bento-span-2' : '';
            
            return (
                <BentoCard key={project.id} project={project} className={spanClass} />
            );
        })}
      </div>
    </section>
  );
};

export default ProjectsGrid;