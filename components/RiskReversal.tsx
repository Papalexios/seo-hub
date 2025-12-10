
import React from 'react';

const RiskReversal: React.FC = () => {
  return (
    <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-1 border border-[var(--accent-core)] mb-8">
                <div className="bg-[var(--accent-core)] text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    Authorized Access
                </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                System Access is <span className="text-[var(--accent-core)]">Unrestricted</span>.
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-2xl mx-auto">
                No paywalls. No subscription tokens. Full enterprise capability unlocked for immediate deployment.
            </p>
        </div>
    </section>
  );
};

export default RiskReversal;
