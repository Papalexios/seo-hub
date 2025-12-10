
import React from 'react';
import type { Project, Feature, Testimonial, Resource } from './types';

// --- Icons ---
// Re-using the same SVG paths but treating them as 'Module Icons' in the UI
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
export const ClipboardDocumentListIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 6.75 6H9" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5" /></svg>
);
export const GlobeAltIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
);
export const ArrowsRightLeftIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
);
export const ShoppingCartIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
);
export const ArrowPathRoundedSquareIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" /></svg>
);
export const LightningBoltIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${className || ''}`} {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
);


export const PROJECTS: Project[] = [
  // --- RANK 1: FOUNDATION (Audit & Map) ---
  {
    id: 'serpquantum-ai',
    name: 'SerpQuantum AI',
    description: "SerpQuantum AI is an autonomous, enterprise-grade SEO engine designed to mass-optimize WordPress websites using advanced AI agents. Crawls & Maps: Instantly scans a website (via URL, Sitemap, or File Upload) to discover pages and flag technical SEO issues (missing/duplicate meta tags). Clusters Topics: Automatically groups pages into semantic 'Topic Clusters' to identify site structure and internal linking opportunities (Graph RAG). Deep AI Analysis: Uses self-correcting AI agents (Reflexion Loop) to analyze content depth, search intent, and SERP competition, generating 'State-of-the-Art' meta titles and descriptions. Bulk Syncs to WordPress: Allows you to review AI suggestions and push approved optimizations directly to your WordPress site (supporting Yoast, RankMath, and AIOSEO) in one click.",
    liveUrls: [{ name: 'Initialize Quantum Core', url: 'https://serpquantum-ai.affiliatemarketingforsuccess.com' }],
    icon: <GlobeAltIcon />,
    isFeatured: true,
    statValue: '2ms',
    statLabel: 'Latency',
    version: 'v4.0.1',
    status: 'active'
  },
  
  // --- RANK 2: PLAN (Strategy) ---
  {
    id: 'seo-orchestrator',
    name: 'SEO Orchestrator',
    description: "Build an impenetrable fortress of topical authority. Plan content clusters that make your rankings resilient and your traffic predictable.",
    liveUrls: [{ name: 'Launch Orchestrator', url: 'https://seo-orchestrator.affiliatemarketingforsuccess.com' }],
    icon: <DocumentChartBarIcon />,
    statValue: '24/7',
    statLabel: 'Uptime',
    isFeatured: true
  },

  // --- RANK 3: RESTORE (Fix Decay) ---
  {
    id: 'amz-neuralmesh',
    name: 'NeuralMesh',
    description: "NeuralMesh is an Autonomous AI Agent for SEO Restoration that connects to a WordPress site, identifies 'decayed' (old/low-quality) blog posts, and uses advanced AI (Gemini/OpenAI) to rewrite them into State-of-the-Art (SOTA), affiliate-optimized articles. Diagnosis: Scans your sitemap to score posts based on age, word count, and 'information gain' metrics. Ghost Protocol: Automatically detects obsolete products (e.g., 'iPhone 13') and researches their modern successors (e.g., 'iPhone 16') to update the review while keeping the URL. Revenue Engine: Integrates with Amazon PA-API to inject real-time prices, images, and affiliate links. Neural Mesh: Builds a semantic map of your site to intelligently insert 6-12 accurate internal links.",
    liveUrls: [{ name: 'Activate NeuralMesh', url: 'https://amz-neuralmesh.affiliatemarketingforsuccess.com' }],
    icon: <ArrowPathRoundedSquareIcon />,
    isFeatured: true,
    statValue: 'AUTO',
    statLabel: 'Restoration',
    version: 'v2.1',
    status: 'active'
  },

  // --- RANK 4: CREATE (Production) ---
  {
    id: 'god-mode-seo',
    name: 'God Mode 2.0',
    description: "Transform Your Content Into Ranking Machines. AI-powered SEO optimization that adapts to Google's algorithm in real-time. God Mode 2.0: Autonomous content optimization that never sleeps. Set it and forget it while your content climbs the rankings. SOTA Analysis: State-of-the-art content analysis using NLP, entity extraction, and competitor insights. Bulk Publishing: Generate and publish hundreds of optimized articles with one click. Rank Guardian: Real-time monitoring and automatic fixes for content health.",
    liveUrls: [{ name: 'Launch God Mode', url: 'https://sota-god-mode.affiliatemarketingforsuccess.com/' }],
    icon: <LightningBoltIcon />,
    isFeatured: true,
    statValue: 'GOD MODE',
    statLabel: 'Status',
    version: 'v2.0',
    status: 'active'
  },
  {
    id: 'content-engine-ai',
    name: 'Content Engine AI',
    description: "Achieve 100x content output. Dominate entire niches in weeks by generating high-quality, undetectable content clusters that signal massive topical authority to Google.",
    liveUrls: [
      { name: 'Launch Content Engine', url: 'https://ai-content-optimizer.affiliatemarketingforsuccess.com/' },
      { name: 'Content Engine Pro', url: 'https://ai-content-optimizer-pro.affiliatemarketingforsuccess.com/' }
    ],
    icon: <CubeTransparentIcon />,
    isFeatured: true,
    statValue: '10M+',
    statLabel: 'Words Gen',
    status: 'active'
  },

  // --- RANK 5: CONNECT (Internal Linking) ---
  {
    id: 'neurolinker-ai',
    name: 'NeuroLinker AI',
    description: "This is a sophisticated AI-powered SEO Internal Linking Automation tool for WordPress called 'NeuroLinker.AI'. Scans & Maps: It connects to your WordPress site via API to download all posts and map your site's topology (visualizing incoming/outgoing links per post). Semantic Analysis: It generates vector embeddings for your content to understand the meaning behind your text. Finds Opportunities: It automatically identifies where internal links are missing using 'Hybrid Search' (Vector + Keyword). AI Writing: It uses LLMs to rewrite specific paragraphs in your content to insert these links naturally. One-Click Publishing: It allows you to review the AI suggestions and publish the changes directly to your live WordPress site.",
    liveUrls: [{ name: 'Start Linking Agent', url: 'https://neurolinker-ai.affiliatemarketingforsuccess.com' }],
    icon: <ArrowsRightLeftIcon />,
    isFeatured: true,
    statValue: '1536d',
    statLabel: 'Vector Dim',
    version: 'v3.5',
    status: 'active'
  },

  // --- RANK 6: MONETIZE (Revenue) ---
  {
    id: 'amzpilot-ai',
    name: 'AmzPilot AI',
    description: "AmzPilot AI is a Client-Side Enterprise React Application designed to fully automate the monetization of WordPress blogs using the Amazon Affiliate program. Scans & Audits: It fetches your WordPress XML sitemap, scans every post, and visually flags 'Opportunities'. AI Intelligence: It uses Multi-Provider AI (Gemini, OpenAI, Claude) to read your post content and write high-conversion sales copy. SOTA Generation: It constructs a 'Theme-Proof' HTML Product Box using aggressive inline CSS, featuring a 'Glassmorphism' design. SEO Injection: It automatically generates and embeds invisible JSON-LD Schema Markup (Product & Review). Autonomous Publishing: It connects directly to your WordPress REST API to surgically insert the product box.",
    liveUrls: [{ name: 'Engage Autopilot', url: 'https://amzpilot-ai.affiliatemarketingforsuccess.com' }],
    icon: <ShoppingCartIcon />,
    isFeatured: true,
    statValue: '$0.00',
    statLabel: 'Op Cost',
    version: 'v1.0',
    status: 'active'
  },
  
  // --- UTILS & OTHERS ---
  {
    id: 'goal-forge-ai',
    name: 'GoalForge AI',
    description: "Your ambitious ideas lack a clear roadmap. GoalForge transforms abstract goals into detailed, Gemini 2.5-powered execution plans, bridging the gap between vision and reality.",
    liveUrls: [{ name: 'Forge Plan', url: 'https://goal-forge-ai.affiliatemarketingforsuccess.com/' }],
    icon: <ClipboardDocumentListIcon />,
    statValue: '99.8%',
    statLabel: 'Success Rate',
    status: 'active'
  },
  {
    id: 'affiliate-monetization-analyzer',
    name: 'Monetization Analyzer',
    description: "Identify and exploit the most lucrative opportunities on your site. Stop leaving money on the table with unoptimized affiliate content.",
    liveUrls: [{ name: 'Analyze Revenue', url: 'https://monetization-analyzer.affiliatemarketingforsuccess.com' }],
    icon: <CurrencyDollarIcon />,
    statValue: '$$$',
    statLabel: 'Revenue'
  },
  {
    id: 'content-optimizer-pro',
    name: 'Content Optimizer Pro',
    description: "Mathematically tune your content to outperform top results. Hit 'publish' with total confidence knowing your on-page SEO is perfect.",
    liveUrls: [
      { name: 'Launch Optimizer', url: 'https://content-optimizer-pro.affiliatemarketingforsuccess.com' }
    ],
    icon: <WrenchScrewdriverIcon />,
    statValue: 'TOP 10',
    statLabel: 'Target'
  },
  {
    id: 'html-snippet-ai',
    name: 'HTML Snippet AI',
    description: 'Transform static articles into interactive assets (calculators, quizzes) that generate backlinks and capture leads.',
    liveUrls: [{ name: 'Create Widget', url: 'https://html-snippet.affiliatemarketingforsuccess.com' }],
    icon: <SparklesIcon />,
    statValue: 'HTML5',
    statLabel: 'Format'
  },
  {
    id: 'ai-image-engine',
    name: 'AI Image Engine',
    description: "A fully autonomous visual content pipeline. Source and generate high-quality, relevant images for your articles instantly.",
    liveUrls: [{ name: 'Launch Image Engine', url: 'https://ai-image-engine.affiliatemarketingforsuccess.com/' }],
    icon: <PhotoIcon />,
    statValue: '4K',
    statLabel: 'Resolution'
  },
  {
    id: 'sota-prompt-transformer',
    name: 'SOTA Prompt Transformer',
    description: "Transform basic inputs into State-of-the-Art prompts. It's like having a senior prompt engineer on staff.",
    liveUrls: [{ name: 'Transform Prompts', url: 'https://prompt-transformer.affiliatemarketingforsuccess.com' }],
    icon: <BrainCircuitIcon />,
    statValue: 'GPT-4o',
    statLabel: 'Compatible'
  },
  {
    id: 'schema-generator-pro',
    name: 'Schema Generator Pro',
    description: "Generate flawless JSON-LD to win rich snippets and increase CTR.",
    liveUrls: [{ name: 'Generate Schema', url: 'https://g.co/gemini/share/64f819ace8f5' }],
    icon: <CodeBracketIcon />,
    statValue: 'JSON-LD',
    statLabel: 'Standard'
  },
  {
    id: 'sitemap-indexer-pro',
    name: 'Sitemap Indexer Pro',
    description: "Command Google's attention. Get your most important pages crawled and ranked faster via the official API.",
    liveUrls: [{ name: 'Index Now', url: 'https://g.co/gemini/share/3f65c95789e0' }],
    icon: <PaperAirplaneIcon />,
    statValue: 'API',
    statLabel: 'Direct'
  },
  {
    id: 'quiz-forge-ai',
    name: 'QuizForge AI',
    description: 'Create active learning experiences that double time-on-page and position your brand as the definitive educator.',
    liveUrls: [{ name: 'Forge Quiz', url: 'https://quiz-forge.affiliatemarketingforsuccess.com/' }],
    icon: <QuestionMarkCircleIcon />,
    statValue: '+200%',
    statLabel: 'Dwell Time'
  },
  {
    id: 'ai-slug-optimizer',
    name: 'AI Slug Optimizer',
    description: 'Perfect your URL structure effortlessly. Signal maximum relevance to Google from the instant you publish.',
    liveUrls: [{ name: 'Optimize Slugs', url: 'https://slug-optimizer.affiliatemarketingforsuccess.com' }],
    icon: <LinkIcon />,
    statValue: 'SEO',
    statLabel: 'Optimized'
  },
  {
    id: 'wp-seo-optimizer-ai',
    name: 'WP SEO Optimizer',
    description: 'Enterprise-level SEO audit and content strategy generator without the enterprise price tag.',
    liveUrls: [{ name: 'Launch Optimizer', url: 'https://title-seo-optimizer.affiliatemarketingforsuccess.com' }],
    icon: <ShieldCheckIcon />,
    statValue: '100',
    statLabel: 'Score'
  },
  {
    id: 'ai-copilot',
    name: 'Social Media Co-Pilot',
    description: 'Transform articles into strategic, multi-platform campaigns that drive targeted traffic.',
    liveUrls: [{ name: 'Launch Co-Pilot', url: 'https://viral-post.affiliatemarketingforsuccess.com' }],
    icon: <CpuChipIcon />,
    statValue: 'VIRAL',
    statLabel: 'Potential'
  },
];


export const FEATURES: Feature[] = [
    {
        id: 'feature-1',
        name: 'Autonomous Agents',
        description: "We don't just give you a hammer; we give you a carpenter. Apps like NeuralMesh and SerpQuantum act as autonomous agents that find, fix, and optimize your site while you sleep.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>,
    },
    {
        id: 'feature-2',
        name: 'Battle-Tested Strategy',
        description: "These tools weren't developed in a vacuum. They are the direct result of years of in-the-trenches SEO and affiliate marketing. You're not getting generic software; you're getting a methodology.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>,
    },
    {
        id: 'feature-3',
        name: 'Zero Marginal Cost',
        description: "Your single biggest advantage is leverage. While competitors sink hundreds monthly into their tool stack, you get a superior, integrated system for free, allowing you to reinvest that capital into growth.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.768 11 12 11c-.768 0-1.536.21-2.121.659L9 12.036m-1.215-1.956L9 9.036m2.121-2.121L12 6.036" /></svg>,
    }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "SerpQuantum AI is actually scary. It mapped my entire site, found 300 technical errors, and fixed my meta tags in 5 minutes. My traffic jumped 40% in two weeks.",
    name: 'Marcus V.',
    title: 'CTO, ScaleUp Media',
    avatarUrl: 'https://i.pravatar.cc/100?u=marcus',
  },
  {
    id: 'testimonial-2',
    quote: "NeuroLinker is the tool I've been waiting 10 years for. It reads my content and inserts relevant links automatically. It saved my team hundreds of hours of manual work.",
    name: 'Sarah L.',
    title: 'Founder, Growth Hackers Weekly',
    avatarUrl: 'https://i.pravatar.cc/100?u=sarah',
  },
  {
    id: 'testimonial-3',
    quote: "I used AmzPilot on a neglected blog. It auto-generated product boxes and sales copy for 50 posts. My Amazon revenue went from $200 to $1,500/mo without me writing a single word.",
    name: 'Elena G.',
    title: 'Digital Marketing Director',
    avatarUrl: 'https://i.pravatar.cc/100?u=elena',
  },
  {
    id: 'testimonial-4',
    quote: "NeuralMesh revived my 'dead' articles. It updated the products to the 2025 versions and rewrote the content. It's like having a restoration team on autopilot.",
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
