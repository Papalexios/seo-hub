import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Affiliate Marketing', href: 'https://affiliatemarketingforsuccess.com/affiliate-marketing' },
    { name: 'AI', href: 'https://affiliatemarketingforsuccess.com/ai' },
    { name: 'SEO', href: 'https://affiliatemarketingforsuccess.com/seo' },
    { name: 'Blogging', href: 'https://affiliatemarketingforsuccess.com/blogging' },
    { name: 'Reviews', href: 'https://affiliatemarketingforsuccess.com/review' },
  ];

  return (
    <footer className="bg-transparent mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[var(--border-main)] py-12 flex flex-col items-center text-center">
          
          <a href="https://affiliatemarketingforsuccess.com" target="_blank" rel="noopener noreferrer" className="mb-6 block">
            <img 
              src="https://affiliatemarketingforsuccess.com/wp-content/uploads/2023/03/cropped-Affiliate-Marketing-for-Success-Logo-Edited.png?lm=6666FEE0" 
              alt="Affiliate Marketing for Success Logo" 
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>
          
          <p className="max-w-lg text-base text-[var(--text-muted)] mb-6 transition-colors duration-500">
            Nexus AI is an unfair advantage created by Alexios Papaioannou, owner of <a href="https://affiliatemarketingforsuccess.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition-colors hover:underline">affiliatemarketingforsuccess.com</a>
          </p>
          
          <nav className="mb-8" aria-label="Footer navigation">
            <p className="text-sm text-[var(--text-main)] mb-3 transition-colors duration-500">Learn more from the playbook:</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-[var(--text-link)] hover:text-[var(--text-link-hover)] hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm text-[var(--text-muted)] transition-colors duration-500">&copy; {new Date().getFullYear()} Nexus AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;