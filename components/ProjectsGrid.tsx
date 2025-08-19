import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative rounded-2xl">
      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="relative flex flex-col items-center text-center p-8 h-full bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-900 to-purple-900 text-cyan-300 group-hover:text-white transition-colors duration-300">
          {React.cloneElement(project.icon, { className: "w-8 h-8" })}
        </div>
        <h3 className="mt-6 text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm text-slate-400 flex-grow">{project.description}</p>
        
        {project.liveUrls && project.liveUrls.length > 0 && (
          <div className="mt-6 w-full flex flex-col items-center gap-3">
            {project.liveUrls.map((link) => (
              <a 
                key={link.url}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-cyan-300 shadow-sm ring-1 ring-inset ring-slate-700 transition-all duration-200 hover:bg-slate-700/50 hover:text-cyan-200 hover:ring-cyan-500"
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
    <section id="tools" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Your Complete SEO Arsenal</h2>
          <p className="mt-4 text-lg text-slate-400">
            A synergistic suite of tools designed to work together, amplifying your results.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;