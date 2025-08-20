import React from 'react';
import { RESOURCES } from '../constants';
import type { Resource } from '../types';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <a 
      href={resource.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative block rounded-2xl p-px transition-all duration-300"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70"></div>
      <div className="relative flex flex-col h-full rounded-[15px] bg-slate-900/60 backdrop-blur-md p-6 border border-white/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 border border-slate-700 text-cyan-400">
          {resource.icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold text-white">{resource.title}</h3>
        <p className="mt-2 text-sm text-slate-400 flex-grow">{resource.description}</p>
        <span className="mt-6 text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">
          Read Article <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </a>
  );
};

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the Knowledge Hub</h2>
          <p className="mt-4 text-lg text-slate-400">
            Actionable insights to complement your new AI toolkit.
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