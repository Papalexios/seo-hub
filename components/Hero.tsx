import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-28 sm:py-40 text-center">
      <div className="max-w-4xl mx-auto">
        <div style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient" style={{ textShadow: '0 0 50px rgba(168, 85, 247, 0.2)' }}>
              Dominate Your Niche with an Unfair Advantage
            </h1>
        </div>
        <div style={{ transform: `translateY(${offsetY * 0.05}px)` }}>
            <p className="mt-6 text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
              Stop juggling scattered, expensive tools. Nexus AI is your unified, zero-cost command center for building unbreakable Topical Authority and dominating search rankings.
            </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#tools"
            className="rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-purple-500/40 transition-all duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 animate-pulse-slow"
          >
            Get Your Unfair Advantage
          </a>
          <a href="#workflow" className="text-base font-semibold leading-6 text-[var(--text-main)] hover:text-[var(--text-link-hover)] transition-colors group">
            See the Workflow <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;