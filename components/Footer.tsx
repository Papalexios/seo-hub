
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/50 dark:bg-slate-950/40 black:bg-black/40 border-t border-slate-900/10 dark:border-white/10 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Nexus AI. All rights reserved.</p>
          <p className="mt-1">
            A free app by Alexios Papaioannou at{' '}
            <a href="https://affiliatemarketingforsuccess.com" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
              affiliatemarketingforsuccess.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;