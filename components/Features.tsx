import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">What Makes Us Different</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Exclusive advantages you won't find anywhere else.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3" style={{ perspective: '1000px' }}>
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group relative animated-border-card rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative flex flex-col items-center text-center p-8 h-full bg-white/60 dark:bg-slate-900/70 black:bg-black/70 backdrop-blur-2xl rounded-2xl border border-slate-900/10 dark:border-white/10 transition-colors duration-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-900/70 dark:to-purple-900/70 black:from-cyan-950/70 black:to-purple-950/70 text-cyan-600 dark:text-cyan-300 transition-colors duration-300 shadow-inner dark:shadow-none">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;