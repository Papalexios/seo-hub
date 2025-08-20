
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nexus AI. All rights reserved.</p>
          <p className="mt-1">
            A free app by Alexios Papaioannou at{' '}
            <a href="https://affiliatemarketingforsuccess.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors">
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