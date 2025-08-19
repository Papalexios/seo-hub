import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] sm:w-[45rem] sm:h-[45rem] -z-10 pointer-events-none opacity-60">
        <div className="glowing-core"></div>
        <div className="light-rays"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 animate-text" style={{ textShadow: '0 0 20px rgba(167, 139, 250, 0.3)' }}>
          Dominate Your Niche with an Unfair Advantage
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          <strong>The Sizzle:</strong> We don't just offer tools; we deliver an integrated AI-powered ecosystem that builds lasting Topical Authority, making your content the definitive source in your field.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#tools"
            className="rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-purple-500/40 transition-all duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Get Your Edge Now
          </a>
          <a href="#features" className="text-sm font-semibold leading-6 text-slate-300 hover:text-cyan-300 transition-colors">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;