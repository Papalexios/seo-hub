import React from 'react';
import { RESOURCES } from '../constants';
import type { Resource } from '../types';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <a 
      href={resource.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative block rounded-2xl transition-transform duration-300 h-full hover:scale-105 animated-border-card"
    >
      <div className="relative flex flex-col h-full rounded-2xl bg-white/60 dark:bg-slate-900/70 black:bg-black/70 backdrop-blur-2xl p-6 border border-slate-900/10 dark:border-white/10 transition-colors duration-500">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/80 black:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400">
          {resource.icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{resource.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow">{resource.description}</p>
        <span className="mt-6 text-sm font-medium text-cyan-700 dark:text-cyan-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors">
          Read Article <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">From the Knowledge Hub</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Actionable insights to complement your new AI toolkit.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3" style={{ perspective: '1000px' }}>
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;