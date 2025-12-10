
import React from 'react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Documentation</h2>
            <div className="text-xs font-mono text-[var(--accent-core)]">[READ_ONLY]</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RESOURCES.map((resource) => (
            <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="p-6 bg-[var(--bg-panel)] border border-[var(--border-subtle)] group-hover:border-[var(--accent-core)] transition-colors h-full flex flex-col">
                    <div className="text-[var(--accent-dim)] group-hover:text-[var(--accent-core)] mb-4 transition-colors">{resource.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--accent-core)] transition-colors">{resource.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] font-mono flex-grow">{resource.description}</p>
                    <div className="mt-6 text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest group-hover:text-white transition-colors">Read File -&gt;</div>
                </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
