import React, { useRef, useEffect } from 'react';
import { FEATURES } from '../constants';

const FeatureCard: React.FC<{ feature: typeof FEATURES[0] }> = ({ feature }) => {
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
    <div ref={cardRef} className="aurora-card rounded-2xl h-full">
      <div className="border-glow" />
      <div className="relative flex flex-col items-center text-center p-8 h-full backdrop-blur-variable rounded-2xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-full text-[var(--text-icon)] transition-colors duration-300 shadow-inner" style={{ background: 'var(--bg-icon-wrapper)'}}>
          {feature.icon}
        </div>
        <h3 className="mt-6 text-lg font-semibold text-[var(--text-heading)] transition-colors duration-500">{feature.name}</h3>
        <p className="mt-2 text-base text-[var(--text-muted)] transition-colors duration-500">{feature.description}</p>
      </div>
    </div>
  );
}

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl transition-colors duration-500">The Core Philosophy</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)] transition-colors duration-500">
            This isn't just software. It's a fundamentally different approach to winning.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;