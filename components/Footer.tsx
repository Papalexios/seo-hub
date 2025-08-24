
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-card)] mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center text-sm text-[var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} Nexus AI. All rights reserved.</p>
          <p className="mt-1">
            A free app by Alexios Papaioannou at{' '}
            <a href="https://affiliatemarketingforsuccess.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--text-main)] hover:text-[var(--text-link-hover)] transition-colors">
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