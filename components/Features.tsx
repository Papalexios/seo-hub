import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="specs" className="py-24 border-t border-nexus-border">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col">
                <div className="text-nexus-accent mb-6">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                <p className="text-sm text-nexus-muted leading-relaxed">
                    {feature.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;