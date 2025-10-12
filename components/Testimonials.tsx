
import React from 'react';
import { TESTIMONIALS } from '../constants';

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" width={104} height={78} {...props}><path d="M25.08,78H0V46.64h15.2V23.28H0V0H30.48V46.64H15.28V78Zm78,0H78.08V46.64h15.2V23.28H78.08V0h30.48V46.64H93.28V78Z" fill="currentColor" fillOpacity="0.1" /></svg>
);


const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">Real Results from the Unfair Advantage</h2>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
                Hear from operators who stopped buying tools and started deploying a system.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.id} className="relative rounded-2xl bg-[var(--bg-card)] p-8 backdrop-blur-variable ring-1 ring-[var(--border-card)] transition-colors duration-500">
              <QuoteIcon className="absolute top-6 left-6 w-16 h-12 text-[var(--quote-icon-color)]" />
              <blockquote className="relative z-10 text-[var(--text-main)]">
                <p>{`“${testimonial.quote}”`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-slate-200 ring-2 ring-white/50" src={testimonial.avatarUrl} alt={testimonial.name} />
                <div>
                  <div className="font-semibold text-[var(--text-heading)]">{testimonial.name}</div>
                  <div className="text-[var(--text-muted)]">{testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
