import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative animated-border-card rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
      <div className="relative flex flex-col items-center text-center p-8 h-full bg-white/60 dark:bg-slate-900/70 black:bg-black/70 backdrop-blur-2xl rounded-2xl border border-slate-900/10 dark:border-white/10 transition-colors duration-500">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-900/70 dark:to-purple-900/70 black:from-cyan-950/70 black:to-purple-950/70 text-cyan-600 dark:text-cyan-300 transition-colors duration-300 shadow-inner dark:shadow-none">
          {project.icon}
        </div>
        <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow">{project.description}</p>
        
        {project.liveUrls && project.liveUrls.length > 0 && (
          <div className="mt-6 w-full flex flex-col items-center gap-3">
            {project.liveUrls.map((link) => (
              <a 
                key={link.url}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800/70 black:bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-700 dark:text-cyan-300 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 transition-all duration-200 hover:bg-slate-200 dark:hover:bg-slate-700/80 black:hover:bg-slate-800/80 hover:text-cyan-600 dark:hover:text-cyan-200 hover:ring-cyan-500 dark:hover:ring-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectsGrid: React.FC = () => {
  return (
    <section id="tools" className="py-24 sm:py-32 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Your Complete SEO Arsenal</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A synergistic suite of tools designed to work together, amplifying your results.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1000px' }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;