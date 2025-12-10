
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-nexus-black/60 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-nexus-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo & Attribution Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
            <a href="#" className="flex items-center gap-3 group">
               <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-nexus-accent transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
               </div>
               <span className="text-xl font-display font-black tracking-tighter text-white">NEXUS<span className="text-nexus-accent">.AI</span></span>
            </a>
            
            <div className="hidden md:block h-4 w-px bg-white/10"></div>
            
            <a 
              href="https://affiliatemarketingforsuccess.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-nexus-muted hover:text-nexus-accent transition-colors font-mono uppercase tracking-wide flex items-center gap-1"
            >
              From the creators of <span className="underline decoration-white/20 underline-offset-2">AffiliateMarketingForSuccess.com</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
              {['Modules', 'Architecture', 'Intel'].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold text-nexus-muted hover:text-white transition-colors uppercase tracking-widest">
                      {item}
                  </a>
              ))}
               <a href="https://seo-hub.affiliatemarketingforsuccess.com/" className="text-xs font-black bg-white text-black px-6 py-3 rounded-md hover:bg-nexus-accent hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,68,0,0.5)]">
                  LAUNCH HUB
              </a>
          </nav>
        </div>
        
        {/* Mobile Attribution Line */}
        <div className="md:hidden pb-4 border-b border-white/5">
             <a 
              href="https://affiliatemarketingforsuccess.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-nexus-muted hover:text-white transition-colors font-mono"
            >
              By AffiliateMarketingForSuccess.com
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
