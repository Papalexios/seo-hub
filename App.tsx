
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import RiskReversal from './components/RiskReversal';
import Resources from './components/Resources';
import Footer from './components/Footer';
import SystemGraph from './components/SystemGraph';
import NexusTerminal from './components/NexusTerminal';
import { ThemeContext, Theme } from './types';


const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) setIsVisible(true);
        else setIsVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[var(--bg-panel-highlight)] border border-[var(--border-active)] text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-[var(--accent-core)] transition-all duration-300 ease-in-out transform hover:scale-110 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' }`}
            aria-label="Go to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
        </button>
    );
};


const App: React.FC = () => {
  // Lock to dark theme for the "SOTA Dashboard" look
  const theme: Theme = 'dark';
  const toggleTheme = () => {}; 

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className="antialiased selection:bg-orange-500/30 selection:text-orange-100 min-h-screen text-[var(--text-primary)]">
        <div className="relative isolate min-h-screen">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32">
            <Hero />
            <ProjectsGrid />
            <SystemGraph />
            <Features />
            <Testimonials />
            <RiskReversal />
            <Resources />
          </main>
          <Footer />
          <NexusTerminal />
          <BackToTopButton />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
