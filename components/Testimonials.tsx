import React, { useRef, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" width={104} height={78} {...props}><path d="M25.08,78H0V46.64h15.2V23.28H0V0H30.48V46.64H15.28V78Zm78,0H78.08V46.64h15.2V23.28H78.08V0h30.48V46.64H93.28V78Z" fill="currentColor" fillOpacity="0.1" /></svg>
);

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({ testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <figure ref={cardRef} className="aurora-card rounded-2xl h-full">
      <div className="border-glow" />
      <div className="p-8 backdrop-blur-variable rounded-2xl h-full flex flex-col">
        <QuoteIcon className="absolute top-6 left-6 w-16 h-12 text-[var(--quote-icon-color)] transition-colors duration-500" />
        <blockquote className="relative z-10 text-[var(--text-main)] transition-colors duration-500 flex-grow">
          <p>{`“${testimonial.quote}”`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <img className="h-10 w-10 rounded-full bg-slate-200 ring-2 ring-white/20" src={testimonial.avatarUrl} alt={testimonial.name} />
          <div>
            <div className="font-semibold text-[var(--text-heading)] transition-colors duration-500">{testimonial.name}</div>
            <div className="text-[var(--text-muted)] transition-colors duration-500">{testimonial.title}</div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};


const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl transition-colors duration-500">Real Results from the Unfair Advantage</h2>
            <p className="mt-4 text-lg text-[var(--text-muted)] transition-colors duration-500">
                Hear from operators who stopped buying tools and started deploying a system.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;