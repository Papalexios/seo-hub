import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import RiskReversal from './components/RiskReversal';
import Resources from './components/Resources';
import Footer from './components/Footer';
import { ThemeContext, Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('dark', 'light'); // Clear all theme classes
    html.classList.add(theme); // Add the current theme class
    
    if (theme === 'black') {
        html.classList.add('dark'); // Black theme inherits dark styles
    }
    
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
      <div className="bg-[#f8f9fa] text-slate-800 dark:bg-[#020617] black:bg-black dark:text-slate-200 antialiased selection:bg-purple-500/70 selection:text-white transition-colors duration-500">
        <div className="relative isolate min-h-screen overflow-x-hidden">
          
          <div className="aurora-background">
            <div className="aurora aurora-1"></div>
            <div className="aurora aurora-2"></div>
            <div className="aurora aurora-3"></div>
          </div>

          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <ProjectsGrid />
            <Features />
            <Testimonials />
            <RiskReversal />
            <Resources />
          </main>
          <Footer />

        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;