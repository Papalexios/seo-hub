import React, { useContext } from 'react';
import { ThemeContext } from '../types';

const SunIcon = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.95-4.243-1.591 1.591M5.25 12H3m4.243-4.95-1.591-1.591M12 12a4.5 4.5 0 0 1 9 0 4.5 4.5 0 0 1-9 0Z" />
  </svg>
);

const MoonIcon = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

const StarIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 21.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  const ThemeIcon = theme === 'light' ? MoonIcon : theme === 'dark' ? StarIcon : SunIcon;

  return (
    <header className="sticky top-0 z-50">
       <div className="absolute inset-0 bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-main)] transition-colors duration-500"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-[var(--accent-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-[var(--text-heading)] transition-colors duration-500">Nexus AI</span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#tools"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--text-link)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[var(--bg-main)]"
            >
              Explore The Arsenal
            </a>
            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-all duration-300 border border-[var(--border-main)]"
              aria-label="Toggle theme"
            >
              <ThemeIcon className="w-5 h-5 transition-all duration-300 transform scale-100 rotate-0" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;