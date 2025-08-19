import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Makes Us Different</h2>
          <p className="mt-4 text-lg text-slate-400">
            Exclusive advantages you won't find anywhere else.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group relative rounded-2xl">
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center p-8 h-full bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 border border-slate-700">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;