import React from 'react';
import type { Project, Feature, Testimonial, Resource } from './types';

// New Sleek, Modern, Line-art Icons (Heroicons v2)
export const DocumentChartBarIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V5.25A2.25 2.25 0 0 0 18 3H6A2.25 2.25 0 0 0 3.75 3ZM3.75 14.25v4.5A2.25 2.25 0 0 0 6 21h12a2.25 2.25 0 0 0 2.25-2.25v-4.5m-16.5-4.5h16.5" /></svg>
);
export const SparklesIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
);
export const LinkIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
);
export const CpuChipIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25h1.5m-18 0h1.5M19.5 12h1.5m-18 0h1.5m15 3.75h1.5m-18 0h1.5M15.75 21v-1.5m-4.5-15v1.5m0 15v-1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.75A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V6A2.25 2.25 0 0 0 17.25 3.75H15M9 7.5h6v9H9v-9Z" /></svg>
);
export const WrenchScrewdriverIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.39.44 1.02.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.11v1.093c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.108 1.204l.527.738c.32.43.27.96-.12 1.45l-.773.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.78.93l-.15.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527a1.125 1.125 0 0 1-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.893-.15c-.543-.09-.94-.56-.94-1.11v-1.093c0 .55.397-1.02.94-1.11l.893-.149c.425-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.449-.12l.738.527c.35.25.806.272 1.203.107.397-.165.71-.505.78-.93l.15-.894Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
);
export const PhotoIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" /></svg>
);
export const QuestionMarkCircleIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 10.5h.008v.008H12v-.008Z" /></svg>
);
export const CubeTransparentIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
);
export const PaperAirplaneIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
);
export const CodeBracketIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15" /></svg>
);
export const ShieldCheckIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);
export const ChartPieIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>
);
export const CurrencyDollarIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.768 11 12 11c-.768 0-1.536.21-2.121.659L9 12.036Zm-1.215-1.956L9 9.036m2.121-2.121L12 6.036" /></svg>
);
export const BrainCircuitIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118v-.054c-.426-.042-1.584-.21-2.386-.271a2.25 2.25 0 0 1-2.135-2.135c-.061-.802-.23-1.96-.271-2.386v-.054a2.25 2.25 0 0 1 2.118-2.47 3 3 0 0 0 1.128-5.78 3 3 0 0 0-1.128-5.78 2.25 2.25 0 0 1-2.118-2.47v-.054c.042-.426.21-1.584.271-2.386a2.25 2.25 0 0 1 2.135-2.135c.802-.061 1.96-.23 2.386-.271v-.054a2.25 2.25 0 0 1 2.47 2.118 3 3 0 0 0 5.78 1.128 3 3 0 0 0 5.78-1.128 2.25 2.25 0 0 1 2.47-2.118v.054c.426.042 1.584.21 2.386.271a2.25 2.25 0 0 1 2.135 2.135c.061.802.23 1.96.271 2.386v.054a2.25 2.25 0 0 1-2.118 2.47 3 3 0 0 0-1.128 5.78 3 3 0 0 0 1.128 5.78 2.25 2.25 0 0 1 2.118 2.47v.054c-.042.426-.21 1.584-.271 2.386a2.25 2.25 0 0 1-2.135 2.135c-.802-.061-1.96-.23-2.386-.271v.054a2.25 2.25 0 0 1-2.47-2.118 3 3 0 0 0-5.78-1.128Z" /></svg>
);


export const PROJECTS: Project[] = [
  {
    id: 'seo-orchestrator',
    name: 'SEO Orchestrator',
    description: "The Problem: You're creating content reactively. The Outcome: You build an impenetrable fortress of topical authority that Google can't ignore, making your rankings resilient and your traffic predictable.",
    liveUrls: [{ name: 'Launch App', url: 'https://seo-orchestrator.affiliatemarketingforsuccess.com' }],
    icon: <DocumentChartBarIcon />,
  },
  {
    id: 'content-optimizer-pro',
    name: 'WordPress Content Optimizer Pro',
    description: "The Problem: On-page SEO is a constant guessing game of 'is this good enough?' The Outcome: You hit 'publish' with total confidence, knowing your content is mathematically tuned to outperform the current top results.",
    liveUrls: [
      { name: 'Content Optimizer', url: 'https://ai-powered-content-pro.affiliatemarketingforsuccess.com' },
      { name: 'Optimizer Pro', url: 'https://content-optimizer-pro.affiliatemarketingforsuccess.com' }
    ],
    icon: <WrenchScrewdriverIcon />,
  },
  {
    id: 'content-engine-ai',
    name: 'Content Engine AI',
    description: "The Problem: Manual content creation is a bottleneck that kills your growth. The Outcome: You achieve 100x the content output of your competitors without sacrificing quality, allowing you to dominate entire niches in weeks, not years.",
    liveUrls: [
      { name: 'Launch Content Engine', url: 'https://ai-content-optimizer.affiliatemarketingforsuccess.com/' },
      { name: 'Content Engine Pro', url: 'https://ai-content-optimizer-pro.affiliatemarketingforsuccess.com/' }
    ],
    icon: <CubeTransparentIcon />,
    isFeatured: true,
  },
  {
    id: 'html-snippet-ai',
    name: 'HTML Snippet AI',
    description: 'The Problem: Your content is static and passive. The Outcome: You transform articles into interactive assets that generate backlinks, capture leads, and send powerful engagement signals to search engines.',
    liveUrls: [{ name: 'Launch App', url: 'https://html-snippet.affiliatemarketingforsuccess.com' }],
    icon: <SparklesIcon />,
  },
  {
    id: 'quiz-forge-ai',
    name: 'QuizForge AI',
    description: 'The Problem: Your audience consumes your content and leaves. The Outcome: You create an active learning experience that doubles time-on-page and positions your brand as the definitive educator in your field.',
    liveUrls: [{ name: 'Launch App', url: 'https://quiz-forge.affiliatemarketingforsuccess.com/' }],
    icon: <QuestionMarkCircleIcon />,
  },
  {
    id: 'ai-slug-optimizer',
    name: 'AI Slug Optimizer',
    description: 'The Problem: Your URLs are an afterthought, messy and unoptimized. The Outcome: You perfect a small but crucial ranking factor effortlessly, signaling maximum relevance to Google from the instant you publish.',
    liveUrls: [{ name: 'Launch App', url: 'https://slug-optimizer.affiliatemarketingforsuccess.com' }],
    icon: <LinkIcon />,
  },
   {
    id: 'sota-prompt-transformer',
    name: 'SOTA Prompt Transformer',
    description: "The Problem: Your prompts are simple, but your goals are ambitious. The Outcome: You bridge the gap between idea and execution, transforming basic inputs into State-of-the-Art prompts that extract maximum value from any AI.",
    liveUrls: [{ name: 'Launch App', url: 'https://prompt-transformer.affiliatemarketingforsuccess.com' }],
    icon: <BrainCircuitIcon />,
    isFeatured: true,
  },
  {
    id: 'schema-generator-pro',
    name: 'Schema Generator Pro',
    description: "The Problem: Schema is complex, and getting it wrong is worse than doing nothing. The Outcome: You generate flawless JSON-LD that helps you win rich snippets, increase CTR, and stand out on a crowded SERP.",
    liveUrls: [{ name: 'Launch App', url: 'https://g.co/gemini/share/64f819ace8f5' }],
    icon: <CodeBracketIcon />,
    isFeatured: true,
  },
  {
    id: 'wp-seo-optimizer-ai',
    name: 'WP SEO Optimizer AI',
    description: 'The Problem: You need deep site analysis and content ideas, but expensive tools are out of reach. The Outcome: You get an enterprise-level SEO audit and content strategy generator without the enterprise price tag.',
    liveUrls: [{ name: 'Launch Optimizer', url: 'https://title-seo-optimizer.affiliatemarketingforsuccess.com' }],
    icon: <ShieldCheckIcon />,
    isFeatured: true,
  },
  {
    id: 'affiliate-monetization-analyzer',
    name: 'Affiliate Monetization Analyzer',
    description: "The Problem: You're leaving money on the table with unoptimized affiliate content. The Outcome: You instantly identify and receive actionable strategies for the most lucrative monetization opportunities on your site.",
    liveUrls: [{ name: 'Launch Analyzer', url: 'https://monetization-analyzer.affiliatemarketingforsuccess.com' }],
    icon: <CurrencyDollarIcon />,
  },
  {
    id: 'sitemap-indexer-pro',
    name: 'Sitemap Indexer Pro',
    description: "The Problem: You publish content and wait for Google to find it, losing valuable time. The Outcome: You command Google's attention, getting your most important pages crawled and ranked faster via the official API.",
    liveUrls: [{ name: 'Launch Indexer', url: 'https://g.co/gemini/share/3f65c95789e0' }],
    icon: <PaperAirplaneIcon />,
  },
  {
    id: 'ai-copilot',
    name: 'AI Social Media Co-Pilot',
    description: 'The Problem: Your social media is just lazy links to your blog posts. The Outcome: You transform each article into a strategic, multi-platform campaign that drives targeted traffic and builds a real brand.',
    liveUrls: [{ name: 'Launch App', url: 'https://viral-post.affiliatemarketingforsuccess.com' }],
    icon: <CpuChipIcon />,
  },
  {
    id: 'ai-image-engine',
    name: 'AI Image Engine',
    description: "The Problem: Sourcing relevant, high-quality images is a tedious manual bottleneck. The Outcome: You get a fully autonomous visual content pipeline that makes your articles more engaging and professional, saving you hours.",
    liveUrls: [{ name: 'Launch App', url: 'https://ai-image-engine.affiliatemarketingforsuccess.com/' }],
    icon: <PhotoIcon />,
  },
];


export const FEATURES: Feature[] = [
    {
        id: 'feature-1',
        name: 'System Over Software',
        description: "Competitors buy features; winners deploy systems. Nexus isn't a collection of apps—it's a cohesive workflow where each tool amplifies the others, creating an exponential effect on your results.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>,
    },
    {
        id: 'feature-2',
        name: 'Strategy Over Theory',
        description: "These tools weren't developed in a vacuum. They are the direct result of years of in-the-trenches SEO and affiliate marketing. You're not getting generic software; you're getting a battle-tested methodology.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>,
    },
    {
        id: 'feature-3',
        name: 'Leverage Over Cost',
        description: "Your single biggest advantage is leverage. While competitors sink hundreds monthly into their tool stack, you get a superior, integrated system for free, allowing you to reinvest that capital into actual growth.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.768 11 12 11c-.768 0-1.536.21-2.121.659L9 12.036m-1.215-1.956L9 9.036m2.121-2.121L12 6.036" /></svg>,
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
  {
    id: 'testimonial-4',
    quote: "The SOTA Prompt Transformer is a beast. I'm getting AI outputs that are leagues ahead of what I could produce before. It's like having a senior prompt engineer on staff, for free.",
    name: 'David Chen',
    title: 'AI Consultant',
    avatarUrl: 'https://i.pravatar.cc/100?u=david',
  },
   {
    id: 'testimonial-5',
    quote: "The interconnectedness is the magic. Planning in the Orchestrator, creating in the Engine, optimizing, and then generating schema... it's a seamless workflow that just makes sense. My productivity has skyrocketed.",
    name: 'Isabella Rossi',
    title: 'SEO Manager, E-com Brands',
    avatarUrl: 'https://i.pravatar.cc/100?u=isabella',
  },
  {
    id: 'testimonial-6',
    quote: "This isn't just a toolset, it's a paradigm shift. The system-based approach helped us dominate a niche we thought was saturated. The arsenal is aptly named; it truly is an unfair advantage.",
    name: 'Kenji Tanaka',
    title: 'Founder, NichePursuits.io',
    avatarUrl: 'https://i.pravatar.cc/100?u=kenji',
  },
];

const BookOpenIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);

const LightBulbIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c-1.42 0-2.8 1.49-2.8 4.5v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75c0-3.01 1.38-4.5 2.8-4.5a7.5 7.5 0 0 1 7.5 0c1.42 0 2.8 1.49 2.8 4.5v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75c0-3.01-1.38-4.5-2.8-4.5Z" />
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