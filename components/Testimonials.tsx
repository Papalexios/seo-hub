
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-nexus-black border-y border-white/5 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nexus-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <div className="text-[10px] font-mono text-nexus-accent uppercase tracking-widest mb-4">Telemetry Data</div>
                <h2 className="display-heading text-4xl md:text-6xl text-white">USER INTEL</h2>
            </div>
            <p className="text-nexus-muted max-w-sm text-right mt-4 md:mt-0 font-light">
                Results from enterprise teams deploying Nexus OS in production environments.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="group p-8 bg-nexus-panel/30 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between h-full">
                
                <div className="mb-8">
                     <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(s => (
                            <svg key={s} className="w-3 h-3 text-nexus-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        ))}
                     </div>
                     <p className="text-lg text-nexus-text font-light leading-relaxed">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="relative">
                        <img 
                            src={testimonial.avatarUrl} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-nexus-accent transition-colors grayscale group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-nexus-black rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-nexus-accent rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-nexus-accent transition-colors">{testimonial.name}</div>
                        <div className="text-[10px] font-mono text-nexus-muted uppercase">{testimonial.title}</div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
