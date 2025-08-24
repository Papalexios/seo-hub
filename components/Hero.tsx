import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-40 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient" style={{ textShadow: '0 0 50px rgba(168, 85, 247, 0.2)' }}>
          Dominate Your Niche with an Unfair Advantage
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 black:text-slate-400 max-w-3xl mx-auto">
          We don't just offer tools; we deliver an integrated AI-powered ecosystem that builds lasting Topical Authority, making your content the definitive source in your field.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#tools"
            className="rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-purple-500/40 transition-all duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 animate-pulse-slow"
          >
            Explore the Tools
          </a>
          <a href="#features" className="text-base font-semibold leading-6 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors group">
            Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;