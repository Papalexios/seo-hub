
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
                <img 
                    src="https://affiliatemarketingforsuccess.com/wp-content/uploads/2023/03/cropped-Affiliate-Marketing-for-Success-Logo-Edited.png?lm=6666FEE0" 
                    alt="Affiliate Marketing For Success Logo" 
                    className="h-24 w-auto mb-8 opacity-90 hover:opacity-100 transition-opacity" 
                />
                <h2 className="text-2xl font-display font-bold text-white mb-4">NEXUS AI</h2>
                <p className="text-nexus-muted leading-relaxed mb-8 max-w-sm">
                    This App is Created by <strong className="text-white">Alexios Papaioannou</strong>, Owner of <a href="https://affiliatemarketingforsuccess.com" className="text-white hover:text-nexus-accent underline decoration-white/20 underline-offset-4">affiliatemarketingforsuccess.com</a>.
                </p>
                <div className="flex gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                </div>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    {/* Learn More Group */}
                    <div className="col-span-2 sm:col-span-3">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4 inline-block">Learn More</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                            {[
                                { name: 'Affiliate Marketing', url: 'https://affiliatemarketingforsuccess.com/affiliate-marketing' },
                                { name: 'Artificial Intelligence', url: 'https://affiliatemarketingforsuccess.com/ai' },
                                { name: 'SEO Strategy', url: 'https://affiliatemarketingforsuccess.com/seo' },
                                { name: 'Blogging Mastery', url: 'https://affiliatemarketingforsuccess.com/blogging' },
                                { name: 'Software Reviews', url: 'https://affiliatemarketingforsuccess.com/review' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-nexus-muted hover:text-nexus-accent transition-colors">
                                        <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-nexus-accent transition-colors"></span>
                                        <span className="text-sm">{link.name}</span>
                                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-nexus-muted">
            <div>
                &copy; {new Date().getFullYear()} NEXUS AI Suite. All Rights Reserved.
            </div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">System Status</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
