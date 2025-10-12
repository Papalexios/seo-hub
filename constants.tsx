
import React from 'react';
import type { Project, Feature, Testimonial, Resource } from './types';

export const AnimatedDocumentChartBarIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z" className="transition-transform duration-300 group-hover:-translate-y-1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625Z" className="transition-transform duration-300 delay-75 group-hover:translate-y-1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" className="transition-transform duration-300 delay-150 group-hover:-translate-y-1.5" />
    </svg>
);
export const AnimatedSparklesIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" className="transition-all duration-300 icon-animated-3-1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" className="transition-all duration-300 icon-animated-3-2" />
    </svg>
);
export const AnimatedLinkIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base group-hover:rotate-12 ${className || ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </svg>
);
export const AnimatedCpuChipIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25h1.5m-18 0h1.5M19.5 12h1.5m-18 0h1.5m15 3.75h1.5m-18 0h1.5M15.75 21v-1.5m-4.5-15v1.5m0 15v-1.5m-3.75-12H6m12 0h-1.5M9.75 12H6m9.75 0h-3.75m-3.75 3.75H6m9.75 0h-3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V6A2.25 2.25 0 0 0 17.25 3.75H15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5h6v9H9v-9Z" className="transition-all duration-300 group-hover:fill-cyan-400/20" />
    </svg>
);
export const AnimatedWrenchScrewdriverIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base icon-animated-2 ${className || ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.495-2.495a1.125 1.125 0 0 1 1.591 0l3.75 3.75a1.125 1.125 0 0 1 0 1.591l-2.495 2.495m-6.236 2.495L5.841 21a2.25 2.25 0 0 1-3.182-3.182l2.495-2.495L11.42 15.17Zm-6.236-2.495L5.186 12.675 2.25 9.75l-1.125 1.125a2.25 2.25 0 0 0 0 3.182l2.495 2.495Z" />
    </svg>
);
export const AnimatedPhotoIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25h.008v.008h-.008V8.25Z" className="transition-all duration-300 group-hover:fill-purple-400/30 group-hover:scale-150 origin-center" />
    </svg>
);
export const AnimatedQuestionMarkCircleIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base icon-animated-1 ${className || ''}`} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75h.008v.008H12v-.008Z" />
    </svg>
);
export const AnimatedCubeTransparentIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
        <g className="transition-transform duration-500 ease-out group-hover:rotate-[-15deg] group-hover:scale-110">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25L3 7.5v9l9 5.25 9-5.25v-9L12 2.25z" className="transition-all duration-500 opacity-20 group-hover:opacity-40" />
        </g>
    </svg>
);
export const AnimatedPaperAirplaneIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
        <g className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </g>
    </svg>
);
export const AnimatedCodeBracketIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15" className="transition-transform duration-300 group-hover:scale-110 group-hover:stroke-cyan-400"/>
    </svg>
);
export const AnimatedShieldCheckIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
        <g className="transition-transform duration-300 group-hover:scale-105">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 0A11.953 11.953 0 0 1 12 3c1.32 0 2.591.203 3.75.564m-3.75-.564c-3.196 0-6.1-1.248-8.25-3.286" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 2.25 2.25 3.75-5.25" className="transition-all duration-500 scale-0 group-hover:scale-100 origin-center opacity-0 group-hover:opacity-100" />
        </g>
    </svg>
);
export const AnimatedCurrencyDollarChartIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 icon-base ${className || ''}`} {...props}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.768 11 12 11c-.768 0-1.536.21-2.121.659L9 12.036m-1.215-1.956L9 9.036m2.121-2.121L12 6.036m0 0l2.121 2.121" className="transition-transform duration-300 group-hover:-rotate-6"/>
       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.875c0-.621.504-1.125 1.125-1.125h.375c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-.375a1.125 1.125 0 0 1-1.125-1.125v-4.5Z" className="transition-transform duration-300 group-hover:scale-y-110 origin-bottom" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M16.875 11.625c0-.621.504-1.125 1.125-1.125h.375c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-.375a1.125 1.125 0 0 1-1.125-1.125v-5.25Z" className="transition-transform duration-500 delay-100 group-hover:scale-y-125 origin-bottom" />
    </svg>
);


export const PROJECTS: Project[] = [
  {
    id: 'seo-orchestrator',
    name: 'SEO Orchestrator',
    description: "The Problem: You're creating content reactively. The Outcome: You build an impenetrable fortress of topical authority that Google can't ignore, making your rankings resilient and your traffic predictable.",
    liveUrls: [{ name: 'Launch App', url: 'https://seo-orchestrator.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedDocumentChartBarIcon />,
  },
  {
    id: 'content-optimizer-pro',
    name: 'WordPress Content Optimizer Pro',
    description: "The Problem: On-page SEO is a constant guessing game of 'is this good enough?' The Outcome: You hit 'publish' with total confidence, knowing your content is mathematically tuned to outperform the current top results.",
    liveUrls: [
      { name: 'Content Optimizer', url: 'https://ai-powered-content-pro.affiliatemarketingforsuccess.com' },
      { name: 'Optimizer Pro', url: 'https://content-optimizer-pro.affiliatemarketingforsuccess.com' }
    ],
    icon: <AnimatedWrenchScrewdriverIcon />,
  },
  {
    id: 'content-engine-ai',
    name: 'Content Engine AI',
    description: "The Problem: Manual content creation is a bottleneck that kills your growth. The Outcome: You achieve 100x the content output of your competitors without sacrificing quality, allowing you to dominate entire niches in weeks, not years.",
    liveUrls: [
      { name: 'Launch Content Engine', url: 'https://ai-powered-content.affiliatemarketingforsuccess.com/' },
      { name: 'Content Engine Pro', url: 'https://content-engine-pro.affiliatemarketingforsuccess.com/' }
    ],
    icon: <AnimatedCubeTransparentIcon />,
    isFeatured: true,
  },
  {
    id: 'html-snippet-ai',
    name: 'HTML Snippet AI',
    description: 'The Problem: Your content is static and passive. The Outcome: You transform articles into interactive assets that generate backlinks, capture leads, and send powerful engagement signals to search engines.',
    liveUrls: [{ name: 'Launch App', url: 'https://html-snippet.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedSparklesIcon />,
  },
  {
    id: 'quiz-forge-ai',
    name: 'QuizForge AI',
    description: 'The Problem: Your audience consumes your content and leaves. The Outcome: You create an active learning experience that doubles time-on-page and positions your brand as the definitive educator in your field.',
    liveUrls: [{ name: 'Launch App', url: 'https://quiz-forge.affiliatemarketingforsuccess.com/' }],
    icon: <AnimatedQuestionMarkCircleIcon />,
  },
  {
    id: 'ai-slug-optimizer',
    name: 'AI Slug Optimizer',
    description: 'The Problem: Your URLs are an afterthought, messy and unoptimized. The Outcome: You perfect a small but crucial ranking factor effortlessly, signaling maximum relevance to Google from the instant you publish.',
    liveUrls: [{ name: 'Launch App', url: 'https://slug-optimizer.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedLinkIcon />,
  },
   {
    id: 'schema-generator-pro',
    name: 'Schema Generator Pro',
    description: "The Problem: Schema is complex, and getting it wrong is worse than doing nothing. The Outcome: You generate flawless JSON-LD that helps you win rich snippets, increase CTR, and stand out on a crowded SERP.",
    liveUrls: [{ name: 'Launch App', url: 'https://g.co/gemini/share/64f819ace8f5' }],
    icon: <AnimatedCodeBracketIcon />,
    isFeatured: true,
  },
  {
    id: 'wp-seo-optimizer-ai',
    name: 'WP SEO Optimizer AI',
    description: 'The Problem: You need deep site analysis and content ideas, but expensive tools are out of reach. The Outcome: You get an enterprise-level SEO audit and content strategy generator without the enterprise price tag.',
    liveUrls: [{ name: 'Launch Optimizer', url: 'https://title-seo-optimizer.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedShieldCheckIcon />,
    isFeatured: true,
  },
  {
    id: 'affiliate-monetization-analyzer',
    name: 'Affiliate Monetization Analyzer',
    description: "The Problem: You're leaving money on the table with unoptimized affiliate content. The Outcome: You instantly identify and receive actionable strategies for the most lucrative monetization opportunities on your site.",
    liveUrls: [{ name: 'Launch Analyzer', url: 'https://monetization-analyzer.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedCurrencyDollarChartIcon />,
  },
  {
    id: 'sitemap-indexer-pro',
    name: 'Sitemap Indexer Pro',
    description: "The Problem: You publish content and wait for Google to find it, losing valuable time. The Outcome: You command Google's attention, getting your most important pages crawled and ranked faster via the official API.",
    liveUrls: [{ name: 'Launch Indexer', url: 'https://g.co/gemini/share/3f65c95789e0' }],
    icon: <AnimatedPaperAirplaneIcon />,
  },
  {
    id: 'ai-copilot',
    name: 'AI Social Media Co-Pilot',
    description: 'The Problem: Your social media is just lazy links to your blog posts. The Outcome: You transform each article into a strategic, multi-platform campaign that drives targeted traffic and builds a real brand.',
    liveUrls: [{ name: 'Launch App', url: 'https://viral-post.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedCpuChipIcon />,
  },
  {
    id: 'ai-image-engine',
    name: 'AI Image Engine',
    description: "The Problem: Sourcing relevant, high-quality images is a tedious manual bottleneck. The Outcome: You get a fully autonomous visual content pipeline that makes your articles more engaging and professional, saving you hours.",
    liveUrls: [{ name: 'Launch App', url: 'https://ai-image-engine.affiliatemarketingforsuccess.com/' }],
    icon: <AnimatedPhotoIcon />,
  },
];


export const FEATURES: Feature[] = [
    {
        id: 'feature-1',
        name: 'Stop Buying Tools. Deploy a System.',
        description: "Competitors buy features; winners deploy systems. Nexus isn't a collection of apps—it's a single, cohesive workflow where each tool amplifies the power of the others, creating an exponential effect on your results.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    },
    {
        id: 'feature-2',
        name: 'Built on Strategy, Not Theory',
        description: "These tools weren't developed in a vacuum. They are the direct result of years of in-the-trenches SEO and affiliate marketing experience. You're not getting generic software; you're getting a battle-tested methodology.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>,
    },
    {
        id: 'feature-3',
        name: 'The $0 Price Tag Advantage',
        description: "Your single biggest advantage is leverage. While your competitors sink hundreds of dollars a month into their tool stack, you get a superior, fully integrated system for free, allowing you to reinvest that capital into growth.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25m3.75 2.25l-1.994 2.184M18 18v-3.75m-7.5-10.5H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.25" /></svg>,
    }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "We were stuck in a cycle of writing one-off articles. The SEO Orchestrator forced us to think bigger. We mapped out a 50-article cluster, executed with the Content Engine, and tripled our organic traffic in 90 days. It's a fundamental shift in strategy.",
    name: 'Sarah L.',
    title: 'Founder, Growth Hackers Weekly',
    avatarUrl: 'https://i.pravatar.cc/100?u=sarah',
  },
  {
    id: 'testimonial-2',
    quote: "I used the HTML Snippet AI to turn a boring blog post about mortgage rates into an interactive calculator. That single page now accounts for 40% of our leads and ranks #1 for our main commercial keyword. The engagement signals are off the charts.",
    name: 'Mike R.',
    title: 'Head of Content, TechSavvy',
    avatarUrl: 'https://i.pravatar.cc/100?u=mike',
  },
  {
    id: 'testimonial-3',
    quote: "We cancelled our $300/mo SEO software subscription and replaced it entirely with Nexus AI. Not only are we saving $3,600 a year, but our workflow is faster and our results are better because everything is finally in one place. The ROI is infinite.",
    name: 'Elena G.',
    title: 'Digital Marketing Director',
    avatarUrl: 'https://i.pravatar.cc/100?u=elena',
  },
];

const BookOpenIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);

const ChartPieIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);

const LightBulbIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const RESOURCES: Resource[] = [
    {
        id: 'resource-1',
        title: 'The Content Strategy That Actually Wins',
        description: 'Move beyond basic blogging. This is the blueprint for creating a content ecosystem that builds a moat around your business.',
        url: 'https://affiliatemarketingforsuccess.com/blogging/winning-content-strategy/',
        icon: <BookOpenIcon />,
    },
    {
        id: 'resource-2',
        title: 'How to Build a Real SEO Strategy',
        description: "An actionable framework for sustainable, long-term traffic growth that doesn't rely on chasing algorithm updates.",
        url: 'https://affiliatemarketingforsuccess.com/seo/build-an-effective-seo-strategy/',
        icon: <ChartPieIcon />,
    },
    {
        id: 'resource-3',
        title: 'Why Your Competitors Using AI Will Crush You',
        description: 'A blunt look at the new landscape of SEO. Learn why leveraging AI isn\'t an option—it\'s a requirement for survival.',
        url: 'https://affiliatemarketingforsuccess.com/ai/ai-future-of-seo/',
        icon: <LightBulbIcon />,
    },
];