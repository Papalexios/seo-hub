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


export const PROJECTS: Project[] = [
  {
    id: 'seo-orchestrator',
    name: 'SEO Orchestrator',
    description: 'The master tool to coordinate your entire SEO strategy, from keywords to content, ensuring topical authority.',
    liveUrls: [{ name: 'Launch App', url: 'https://seo-orchestrator.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedDocumentChartBarIcon />,
  },
  {
    id: 'content-optimizer-pro',
    name: 'WordPress Content Optimizer Pro',
    description: 'Directly optimize your WordPress content for higher rankings with deep semantic analysis.',
    liveUrls: [
      { name: 'Content Optimizer', url: 'https://content-optimizer.affiliatemarketingforsuccess.com' },
      { name: 'Optimizer Pro', url: 'https://content-optimizer-pro.affiliatemarketingforsuccess.com' }
    ],
    icon: <AnimatedWrenchScrewdriverIcon />,
  },
  {
    id: 'content-engine-ai',
    name: 'Content Engine AI',
    description: 'The ultimate command center for your content lifecycle. Plan, generate, and optimize SEO-driven articles at scale. Integrates with Gemini, OpenAI, and more, giving you the best AI for every task.',
    liveUrls: [
      { name: 'Launch Content Engine', url: 'https://content-engine.affiliatemarketingforsuccess.com' },
      { name: 'Content Engine Pro', url: 'https://content-engine-pro.affiliatemarketingforsuccess.com/' }
    ],
    icon: <AnimatedCubeTransparentIcon />,
    isFeatured: true,
  },
  {
    id: 'html-snippet-ai',
    name: 'HTML Snippet AI',
    description: 'Beyond Static Text: Instantly generate bespoke HTML tools from your content. Captivate readers with interactive experiences, boost engagement, and earn the rankings you deserve.',
    liveUrls: [{ name: 'Launch App', url: 'https://html-snippet.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedSparklesIcon />,
  },
  {
    id: 'quiz-forge-ai',
    name: 'QuizForge AI',
    description: 'PhD-Level Quizzes from Any Post. Transform articles into authoritative, interactive quizzes. Our AI curriculum designer crafts fact-checked questions with rich explanations to captivate your audience, boost on-page time, and build reader loyalty.',
    liveUrls: [{ name: 'Launch App', url: 'https://quiz-forge.affiliatemarketingforsuccess.com/' }],
    icon: <AnimatedQuestionMarkCircleIcon />,
  },
  {
    id: 'ai-slug-optimizer',
    name: 'AI Slug Optimizer',
    description: 'Generate perfectly optimized, keyword-rich URL slugs that search engines and users love.',
    liveUrls: [{ name: 'Launch App', url: 'https://slug-optimizer.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedLinkIcon />,
  },
  {
    id: 'sitemap-indexer-pro',
    name: 'Sitemap Indexer Pro',
    description: "Tired of the indexing lottery? Take control. Sitemap Indexer Pro gives you a direct line to Google's core via the official Indexing API. Submit your URLs with authority and watch as your content gets crawled with priority. The fastest, most effective indexing method is now at your fingertips.",
    liveUrls: [{ name: 'Launch Indexer', url: 'https://g.co/gemini/share/3f65c95789e0' }],
    icon: <AnimatedPaperAirplaneIcon />,
  },
  {
    id: 'ai-copilot',
    name: 'AI Social Media Co-Pilot',
    description: 'Architect high-impact, credible social media campaigns that actually convert.',
    liveUrls: [{ name: 'Launch App', url: 'https://viral-post.affiliatemarketingforsuccess.com' }],
    icon: <AnimatedCpuChipIcon />,
  },
  {
    id: 'ai-image-engine',
    name: 'AI Image Engine',
    description: 'Automate visual content. Connect WordPress, and our AI generates, customizes, and places high-quality images directly into your posts.',
    liveUrls: [{ name: 'Launch App', url: 'https://ai-image-engine.affiliatemarketingforsuccess.com/' }],
    icon: <AnimatedPhotoIcon />,
  },
];


export const FEATURES: Feature[] = [
    {
        id: 'feature-1',
        name: 'Unified SEO Ecosystem',
        description: 'Unlike fragmented tools, our suite provides a cohesive workflow from keyword research to final publication, ensuring consistency and maximizing impact.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    },
    {
        id: 'feature-2',
        name: 'Topical Authority Engine',
        description: "Our exclusive AI model doesn't just stuff keywords; it builds true topical authority by understanding semantic relationships and user intent.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>,
    },
    {
        id: 'feature-3',
        name: 'Real-Time SERP Analysis',
        description: 'Stay ahead of the competition with live SERP data integrated directly into our content tools, providing actionable insights instantly.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25m3.75 2.25l-1.994 2.184M18 18v-3.75m-7.5-10.5H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.25" /></svg>,
    }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "Nexus AI is the first suite that feels like a strategic partner, not just a tool. The SEO Orchestrator's focus on topical authority is unparalleled—it provided a level of strategic clarity we couldn't find anywhere else.",
    name: 'Sarah L.',
    title: 'Founder, Growth Hackers Weekly',
    avatarUrl: 'https://i.pravatar.cc/100?u=sarah',
  },
  {
    id: 'testimonial-2',
    quote: "ContentForge AI allowed us to move beyond static text. Embedding interactive tools directly into our articles skyrocketed our user engagement and time-on-page. It’s a game-changer for creating content that not only ranks but also captivates.",
    name: 'Mike R.',
    title: 'Head of Content, TechSavvy',
    avatarUrl: 'https://i.pravatar.cc/100?u=mike',
  },
  {
    id: 'testimonial-3',
    quote: "The seamless integration is what sets Nexus AI apart. We replaced three separate subscriptions with this one cohesive ecosystem. The ROI wasn't just fast—it was immediate and substantial.",
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
        title: 'Develop a Winning Content Strategy',
        description: 'Learn the foundational principles of creating content that not only ranks but also builds lasting authority in your niche.',
        url: 'https://affiliatemarketingforsuccess.com/blogging/winning-content-strategy/',
        icon: <BookOpenIcon />,
    },
    {
        id: 'resource-2',
        title: 'Build a High-Impact SEO Strategy',
        description: 'Go beyond keywords. Discover how to construct a comprehensive SEO framework that delivers sustainable, long-term results.',
        url: 'https://affiliatemarketingforsuccess.com/seo/build-an-effective-seo-strategy/',
        icon: <ChartPieIcon />,
    },
    {
        id: 'resource-3',
        title: 'Why AI is the Future of SEO',
        description: 'Understand the paradigm shift. See how leveraging AI tools is no longer an option, but a necessity for competitive SEO.',
        url: 'https://affiliatemarketingforsuccess.com/ai/ai-future-of-seo/',
        icon: <LightBulbIcon />,
    },
];