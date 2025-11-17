import React, { useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
        ref={cardRef} 
        id={project.id}
        className="aurora-card h-full rounded-2xl"
    >
      <div className="border-glow" />
      <div className="p-8 h-full flex flex-col items-center text-center backdrop-blur-variable rounded-2xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-full text-[var(--text-icon)] transition-colors duration-300 shadow-inner" style={{ background: 'var(--bg-icon-wrapper)'}}>
            {React.cloneElement(project.icon, { className: 'w-7 h-7' })}
          </div>
          <h3 className="mt-6 text-lg font-semibold text-[var(--text-heading)] transition-colors duration-500">{project.name}</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)] flex-grow transition-colors duration-500">{project.description}</p>
          
          {project.liveUrls && project.liveUrls.length > 0 && (
            <div className="mt-6 w-full flex flex-col items-center gap-3">
              {project.liveUrls.map((link) => (
                <a 
                  key={link.url}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-md bg-[var(--bg-button-secondary)] px-4 py-2 text-sm font-medium text-[var(--text-link)] shadow-sm ring-1 ring-inset ring-[var(--border-button-secondary)] transition-all duration-200 hover:bg-[var(--bg-button-secondary-hover)] hover:text-[var(--text-link-hover)] hover:ring-[var(--accent-secondary)]"
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
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl transition-colors duration-500">The Unfair Advantage Arsenal</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)] transition-colors duration-500">
            Each tool is a force multiplier. Together, they create an unstoppable system.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROJECTS.map((project) => (
            <div key={project.id} className={`${project.isFeatured ? 'lg:col-span-2' : ''}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;