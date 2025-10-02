
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import RiskReversal from './components/RiskReversal';
import Resources from './components/Resources';
import Footer from './components/Footer';
import { ThemeContext, Theme } from './types';
import { PROJECTS } from './constants';

// --- ICONS for new components ---
const CheckCircleIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
);
const XCircleIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg>
);
const ArrowDownIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>
);


// --- NEW COMPONENT: Workflow ---
const Workflow: React.FC = () => {
    const workflowPhases = [
        {
            phase: 1,
            title: "Strategize & Architect",
            description: "Lay the unshakable foundation for market dominance. Map content ecosystems and ensure your core structure is primed for Google's crawlers from day one.",
            tools: ["seo-orchestrator", "sitemap-indexer-pro"],
        },
        {
            phase: 2,
            title: "Create & Optimize",
            description: "Shift into high-gear production. Generate entire articles with Content Engine AI, then perfect every on-page element directly in WordPress for guaranteed ranking potential.",
            tools: ["content-engine-ai", "content-optimizer-pro"],
        },
        {
            phase: 3,
            title: "Enhance & Engage",
            description: "Transform static content into captivating, interactive experiences. Automatically generate images, quizzes, and web tools to maximize user engagement.",
            tools: ["ai-image-engine", "html-snippet-ai", "quiz-forge-ai"],
        },
        {
            phase: 4,
            title: "Perfect & Publish",
            description: "Finalize every technical detail for a flawless launch. Optimize URLs for clarity and signal deep context to search engines with enterprise-grade structured data.",
            tools: ["ai-slug-optimizer", "schema-generator-pro"],
        },
        {
            phase: 5,
            title: "Amplify & Dominate",
            description: "Unleash your content. Architect viral social media campaigns that drive targeted traffic back to your perfectly optimized, authoritative content hub.",
            tools: ["ai-copilot"],
        },
    ];

    const getToolData = (id: string) => {
        const project = PROJECTS.find(p => p.id === id);
        if (!project) return null;
        return {
            name: project.name,
            icon: React.cloneElement(project.icon, { className: 'w-6 h-6' }),
        };
    };

    return (
        <section id="workflow" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center section-animate">
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">From Idea to Authority: The Nexus Workflow</h2>
                    <p className="mt-4 text-lg text-[var(--text-muted)]">
                        A proven, repeatable process for turning content into a competitive advantage.
                    </p>
                </div>
            </div>
            <div className="relative mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" aria-hidden="true" />
                
                {workflowPhases.map((phase, index) => {
                    const isLeft = index % 2 !== 0;
                    return (
                        <div key={phase.phase} className="relative group/item mb-12">
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -top-1 w-8 h-8 rounded-full bg-[var(--bg-main)] border-2 border-purple-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover/item:scale-125 group-hover/item:border-cyan-400">
                                <span className="font-bold text-sm text-purple-500 transition-colors duration-300 group-hover/item:text-cyan-400">{phase.phase}</span>
                            </div>

                            <div className={`flex flex-col items-start ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                                <div className={`w-full md:w-1/2 ${isLeft ? 'md:text-right' : ''} ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-12`}>
                                    <div className="section-animate" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="p-6 rounded-2xl bg-[var(--bg-card)] backdrop-blur-variable border border-[var(--border-card)] shadow-lg transform transition-all duration-500 group-hover/item:scale-[1.02] group-hover/item:shadow-2xl group-hover/item:shadow-purple-500/20">
                                            <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">{phase.title}</h3>
                                            <p className="text-[var(--text-muted)] mb-4">{phase.description}</p>
                                            <div className={`flex items-center gap-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'} flex-wrap`}>
                                                <span className="text-sm font-medium text-[var(--text-muted)]">Tools:</span>
                                                <div className="flex gap-2 text-[var(--text-icon)] flex-wrap">
                                                    {phase.tools.map(toolId => {
                                                        const tool = getToolData(toolId);
                                                        return tool ? (
                                                            <div key={toolId} className="relative group/tool">
                                                                <div className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 transform group-hover/tool:scale-110" style={{ background: 'var(--bg-icon-wrapper)'}}>
                                                                    {tool.icon}
                                                                </div>
                                                                <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 text-sm font-semibold text-white bg-slate-800 rounded-md shadow-lg opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300 pointer-events-none left-1/2 -translate-x-1/2">
                                                                    {tool.name}
                                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800" />
                                                                </div>
                                                            </div>
                                                        ) : null;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

// --- NEW COMPONENT: Comparison ---
const Comparison: React.FC = () => {
    const comparisonData = [
        { feature: 'Workflow', nexus: 'Fully Integrated Ecosystem', others: 'Scattered, Fragmented Tools' },
        { feature: 'Strategy Focus', nexus: 'Builds Lasting Topical Authority', others: 'Basic Keyword Stuffing' },
        { feature: 'Cost', nexus: 'Completely Free, Forever', others: 'Multiple Expensive Subscriptions' },
        { feature: 'User Experience', nexus: 'Unified, Cohesive Interface', others: 'Juggling Multiple Logins & UIs' },
        { feature: 'Development', nexus: 'Built on Proven, Real-World SEO', others: 'Generic, One-Size-Fits-All Logic' }
    ];
    return (
        <section id="comparison" className="py-24 sm:py-32 section-animate">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">The Old Way vs. The Nexus Way</h2>
                    <p className="mt-4 text-lg text-[var(--text-muted)]">
                        See why an integrated ecosystem delivers exponentially better results.
                    </p>
                </div>
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="rounded-2xl bg-[var(--bg-card)] backdrop-blur-variable border border-[var(--border-card)] overflow-hidden">
                        <table className="w-full text-left divide-y divide-[var(--border-card)]">
                            <thead className="bg-white/5 dark:bg-black/5">
                                <tr>
                                    <th scope="col" className="py-4 px-6 text-lg font-semibold text-[var(--text-heading)]">Feature</th>
                                    <th scope="col" className="py-4 px-6 text-lg font-semibold text-[var(--text-heading)]">Nexus AI (Your Unfair Advantage)</th>
                                    <th scope="col" className="py-4 px-6 text-lg font-semibold text-[var(--text-heading)]">Other Tools</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--border-card)]">
                                {comparisonData.map(item => (
                                    <tr key={item.feature}>
                                        <td className="py-4 px-6 font-medium text-[var(--text-heading)]">{item.feature}</td>
                                        <td className="py-4 px-6 text-[var(--text-main)]">
                                            <div className="flex items-center gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                                <span>{item.nexus}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-[var(--text-muted)]">
                                             <div className="flex items-center gap-2">
                                                <XCircleIcon className="w-5 h-5 text-pink-500/70 flex-shrink-0" />
                                                <span>{item.others}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Helper to draw constellation, now reading colors from CSS variables
const drawConstellation = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const style = getComputedStyle(document.documentElement);
    const colors = {
        point: style.getPropertyValue('--constellation-point').trim(),
        line: style.getPropertyValue('--constellation-line').trim()
    };

    let points: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const maxPoints = 99;
    const connectDistance = 150;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        points = [];
        for (let i = 0; i < maxPoints; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.random() * 0.4 - 0.2,
                vy: Math.random() * 0.4 - 0.2,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        points.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = colors.point;
            ctx.fill();
        });

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.sqrt(Math.pow(points[i].x - points[j].x, 2) + Math.pow(points[i].y - points[j].y, 2));
                if (dist < connectDistance) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.strokeStyle = colors.line;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        
        animationFrameId = requestAnimationFrame(animate);
    };

    let animationFrameId = requestAnimationFrame(animate);

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resizeCanvas);
    };
};


const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) setIsVisible(true);
        else setIsVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-purple-600/80 transition-all duration-300 ease-in-out transform hover:scale-110 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`}
            aria-label="Go to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
        </button>
    );
};


const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) setTheme(savedTheme);
    else if (prefersDark) setTheme('dark');
    else setTheme('light');
    
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.className = ''; // Clear all classes
    html.classList.add(theme); // Add only the current theme class
    localStorage.setItem('theme', theme);
    
    const canvas = document.getElementById('constellation-canvas') as HTMLCanvasElement | null;
    if (canvas) {
        const cleanup = drawConstellation(canvas);
        return cleanup;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'black';
      return 'light';
    });
  };

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className="antialiased selection:bg-purple-500/70 selection:text-white transition-colors duration-500">
        <div className="relative isolate min-h-screen overflow-x-hidden">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <ProjectsGrid />
            <Workflow />
            <Features />
            <Comparison />
            <Testimonials />
            <RiskReversal />
            <Resources />
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;