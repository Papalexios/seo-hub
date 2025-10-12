
import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-cyan-500 dark:text-cyan-400 flex-shrink-0">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
  </svg>
);

const RiskReversal: React.FC = () => {
  const advantages = [
    { title: "It's Free. Period.", description: "This isn't a trial or a 'freemium' version. You get the full, unrestricted arsenal. Why? Because the best strategy wins, not the biggest budget." },
    { title: "Deploy a Superior System Today.", description: "While your competition is stuck paying for and juggling inferior tools, you can deploy a more cohesive, powerful system right now." },
    { title: "Built from a Proven Playbook.", description: "This suite is the direct result of years of in-the-trenches experience from affiliatemarketingforsuccess.com. You're getting battle-tested tools, not corporate software." }
  ];

  return (
    <section className="py-24 sm:py-32 section-animate">
      <div className="relative max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 lg:p-16 ring-1 ring-[var(--border-card)] overflow-hidden bg-[var(--bg-card)] backdrop-blur-variable">
        <div 
          className="absolute left-1/2 top-0 -z-10 h-3/4 w-4/5 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#a855f7_50%,#22d3ee_100%)] opacity-[var(--risk-reversal-glow)]"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">There Is No Catch.</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">This entire system is free. Here’s why that gives you an insurmountable edge.</p>
        </div>
        <ul role="list" className="relative z-10 mt-10 space-y-6 text-sm leading-6 text-[var(--text-main)]">
          {advantages.map((adv, index) => (
            <li key={index} className="flex gap-x-3">
              <CheckIcon />
              <span className="text-left">
                <strong className="font-semibold text-[var(--text-heading)]">{adv.title}</strong> {adv.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RiskReversal;
