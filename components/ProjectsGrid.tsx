
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardClasses = `group relative animated-border-card rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 ${project.isFeatured ? 'card-glow-permanent' : ''}`;

  return (
    <div className={cardClasses} style={{ transformStyle: 'preserve-3d' }}>
      <div className="relative flex flex-col items-center text-center p-8 h-full bg-[var(--bg-card)] backdrop-blur-variable rounded-2xl border border-[var(--border-card)] transition-colors duration-500">
        <div className="flex h-16 w-16 items-center justify-center rounded-full text-[var(--text-icon)] transition-colors duration-300 shadow-inner" style={{ background: 'var(--bg-icon-wrapper)'}}>
          {project.icon}
        </div>
        <h3 className="mt-6 text-lg font-semibold text-[var(--text-heading)]">{project.name}</h3>
        <p className="mt-2 text-sm text-[var(--text-muted)] flex-grow">{project.description}</p>
        
        {project.liveUrls && project.liveUrls.length > 0 && (
          <div className="mt-6 w-full flex flex-col items-center gap-3">
            {project.liveUrls.map((link) => (
              <a 
                key={link.url}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-md bg-[var(--bg-button-secondary)] px-4 py-2 text-sm font-medium text-[var(--text-link)] shadow-sm ring-1 ring-inset ring-[var(--border-button-secondary)] transition-all duration-200 hover:bg-[var(--bg-button-secondary-hover)] hover:text-[var(--text-link-hover)] hover:ring-cyan-500"
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
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">The Unfair Advantage Arsenal</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Each tool is a force multiplier. Together, they create an unstoppable system.
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
