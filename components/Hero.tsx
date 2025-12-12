import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-nexus-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className={`relative z-10 transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center text-center">
            
            {/* Version Badge */}
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-nexus-accent/50 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-accent"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-nexus-muted">System Operational // v4.5.2</span>
            </div>
            
            {/* Massive Typography */}
            <h1 className="display-heading text-6xl sm:text-8xl lg:text-[11rem] text-white leading-[0.85] tracking-tighter mb-8 select-none">
              NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10">AI</span>
            </h1>
            
            <p className="text-lg sm:text-2xl text-nexus-muted max-w-3xl font-light leading-relaxed mb-16 mx-auto">
              The unfair advantage for modern SEOs. An <span className="text-white font-medium">autonomous enterprise suite</span> that audits, restores, links, and monetizes your content empire while you sleep.
            </p>

            {/* SOTA CTA Button */}
            <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
                <a 
                  href="https://seo-hub.affiliatemarketingforsuccess.com/" 
                  className="group relative inline-flex items-center justify-center px-8 py-5 sm:px-12 sm:py-6 bg-white text-black overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,68,0,0.6)]"
                >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <div className="flex flex-col items-center relative z-10">
                        <span className="text-sm sm:text-lg font-black uppercase tracking-wide">Dominate Your Niche</span>
                        <span className="text-[10px] sm:text-xs font-mono text-gray-600 uppercase tracking-widest group-hover:text-nexus-accent transition-colors">Unlock Your Complete AI-Powered SEO Arsenal</span>
                    </div>
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </div>
                </a>
                
                <div className="flex items-center gap-6 text-[10px] font-mono text-nexus-muted uppercase tracking-widest">
                   <span className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-nexus-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      Instant Access
                   </span>
                   <span className="w-px h-3 bg-white/10"></span>
                   <span className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-nexus-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      Enterprise Grade
                   </span>
                </div>
            </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className={`mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         {[
            { label: 'Latency', value: '2ms', sub: 'Global Edge' },
            { label: 'Agents', value: '12', sub: 'Autonomous' },
            { label: 'Uptime', value: '99.9%', sub: 'Guaranteed' },
            { label: 'Revenue', value: '+124%', sub: 'MoM Growth' }
         ].map((stat, i) => (
             <div key={i} className="group bg-nexus-panel/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                 <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                 <div className="text-[10px] font-mono text-nexus-muted uppercase tracking-[0.2em]">{stat.label}</div>
             </div>
         ))}
      </div>

    </section>
  );
};

export default Hero;