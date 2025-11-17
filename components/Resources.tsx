import React, { useRef, useEffect } from 'react';
import { RESOURCES } from '../constants';
import type { Resource } from '../types';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

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
    <a 
      ref={cardRef}
      href={resource.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group aurora-card block rounded-2xl h-full"
    >
      <div className="border-glow" />
      <div className="relative flex flex-col h-full rounded-2xl backdrop-blur-variable p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--bg-button-secondary)] border border-[var(--border-button-secondary)] text-[var(--text-link)]">
          {resource.icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold text-[var(--text-heading)] transition-colors duration-500">{resource.title}</h3>
        <p className="mt-2 text-sm text-[var(--text-muted)] flex-grow transition-colors duration-500">{resource.description}</p>
        <span className="mt-6 text-sm font-medium text-[var(--text-link)] group-hover:text-[var(--text-link-hover)] transition-colors">
          Read The Playbook <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </a>
  );
};

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 sm:py-32 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl transition-colors duration-500">From the Playbook</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)] transition-colors duration-500">
            The tools are the weapons. This is the strategic intelligence you need to wield them.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;