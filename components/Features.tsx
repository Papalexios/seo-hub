import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">What Makes Us Different</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Exclusive advantages you won't find anywhere else.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3" style={{ perspective: '1000px' }}>
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group relative animated-border-card rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative flex flex-col items-center text-center p-8 h-full bg-[var(--bg-card)] backdrop-blur-variable rounded-2xl border border-[var(--border-card)] transition-colors duration-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-full text-[var(--text-icon)] transition-colors duration-300 shadow-inner" style={{ background: 'var(--bg-icon-wrapper)'}}>
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[var(--text-heading)]">{feature.name}</h3>
                <p className="mt-2 text-base text-[var(--text-muted)]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;