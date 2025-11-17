import React, { useState, useEffect, useMemo, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import RiskReversal from './components/RiskReversal';
import Resources from './components/Resources';
import Footer from './components/Footer';
import SystemGraph from './components/SystemGraph';
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
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out transform hover:scale-110 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' }`}
            aria-label="Go to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
        </button>
    );
};


const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) setTheme(savedTheme);
    else if (prefersDark) setTheme('dark');
    else setTheme('light');
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.className = ''; // Clear all classes
    html.classList.add(theme); // Add only the current theme class
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'black';
      return 'light';
    });
  };

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className="antialiased selection:bg-purple-500/70 selection:text-white transition-colors duration-500 bg-transparent">
        <div className="relative isolate min-h-screen overflow-x-hidden">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <ProjectsGrid />
            <SystemGraph />
            <Features />
            <Testimonials />
            <RiskReversal />
            <Resources />
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;