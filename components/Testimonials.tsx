import React from 'react';
import { TESTIMONIALS } from '../constants';

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" width={104} height={78} {...props}><path d="M25.08,78H0V46.64h15.2V23.28H0V0H30.48V46.64H15.28V78Zm78,0H78.08V46.64h15.2V23.28H78.08V0h30.48V46.64H93.28V78Z" fill="currentColor" fillOpacity="0.1" /></svg>
);


const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by Industry Leaders</h2>
            <p className="mt-4 text-lg text-slate-400">
                See why professionals choose us over the competition.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.id} className="relative rounded-2xl bg-slate-900/60 p-8 backdrop-blur-md ring-1 ring-white/10">
              <QuoteIcon className="absolute top-6 left-6 w-16 h-12 text-slate-600" />
              <blockquote className="relative z-10 text-slate-300">
                <p>{`“${testimonial.quote}”`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-slate-700" src={testimonial.avatarUrl} alt={testimonial.name} />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400">{testimonial.title}</div>
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