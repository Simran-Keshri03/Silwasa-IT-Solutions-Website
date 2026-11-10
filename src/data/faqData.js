// FAQ Data for Silwasa IT Solutions
// Covering all 10 requested areas with authoritative original answers

export const faqData = [
  {
    id: 'faq-web-dev',
    category: 'Website Development',
    question: 'What modern web frameworks do you build with, and how do you guarantee sub-second performance?',
    answer: 'We architect websites primarily using modern React, Next.js, and Vite paired with lightweight utility styling rather than bloated multi-megabyte visual builder themes. We implement automated WebP/AVIF image compression pipelines, critical CSS inlining, code-splitting, and edge CDN caching with Stale-While-Revalidate headers to consistently achieve sub-second Largest Contentful Paint (LCP) and 90+ Core Web Vitals scores across mobile and desktop devices.',
  },
  {
    id: 'faq-mobile-dev',
    category: 'Mobile App Development',
    question: 'Should our business build a native app (Swift/Kotlin) or a cross-platform app (Flutter/React Native)?',
    answer: 'For 90% of commercial applications, modern cross-platform frameworks like Google Flutter or React Native deliver indistinguishable 60–120Hz native performance while reducing delivery timelines and maintenance costs by up to 40% through a shared single codebase. If your application requires deep hardware sensor access, high-frequency Bluetooth BLE processing, or specialized Apple Metal graphics acceleration, we recommend pure native Swift (iOS) and Kotlin (Android). We assess your technical requirements during discovery to prescribe the ideal architecture.',
  },
  {
    id: 'faq-ai-solutions',
    category: 'AI Solutions',
    question: 'How do your enterprise AI chatbots and autonomous agents safeguard proprietary business data?',
    answer: 'Data privacy is our foundational architecture principle. We deploy Retrieval-Augmented Generation (RAG) using private vector databases (such as Pinecone or Qdrant) and dedicated enterprise API endpoints with zero-data-retention agreements. Your proprietary customer records, financial ledgers, and confidential contracts are never transmitted to public LLM training corpuses or third-party web crawlers. All data in transit and at rest is protected with AES-256 encryption.',
  },
  {
    id: 'faq-seo-ai-seo',
    category: 'SEO & AI Search Optimization',
    question: 'What is Generative Engine Optimization (GEO/AEO) and how does it differ from traditional SEO?',
    answer: 'Traditional SEO focuses on keyword density and backlink quantity to earn clicks on blue search engine links. In contrast, Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) structure fact-dense entity triples, schema markup, and authoritative knowledge consensus so AI models like ChatGPT, Perplexity, and Google AI Overviews cite your brand directly in synthesized conversational answers. We combine both disciplines to capture both traditional clicks and generative AI citations.',
  },
  {
    id: 'faq-pricing',
    category: 'Pricing & Quotations',
    question: 'How are your custom development projects and marketing packages priced?',
    answer: 'We provide itemized, milestone-based proposals tailored strictly to your technical scope, database concurrency requirements, and design specifications. We avoid arbitrary fixed pricing models because enterprise requirements vary widely. Following an initial 30-minute discovery consultation, our solution architects provide a transparent, fixed-price or dedicated sprint proposal with clearly defined deliverables and zero surprise charges.',
  },
  {
    id: 'faq-timelines',
    category: 'Project Timelines',
    question: 'What is the typical turnaround timeline for a custom website or mobile application build?',
    answer: 'Typical timelines depend on scope complexity: high-conversion custom landing pages and corporate websites generally take 2 to 4 weeks; specialized e-commerce storefronts require 4 to 6 weeks; while complex cross-platform mobile apps and custom enterprise SaaS platforms span 8 to 14 weeks. We work in disciplined two-week agile sprints, providing working staging demo builds at the conclusion of every sprint.',
  },
  {
    id: 'faq-maintenance',
    category: 'Website Maintenance & Security',
    question: 'What is included in your ongoing website maintenance and security support plans?',
    answer: 'Our maintenance service provides proactive, continuous care including automated daily encrypted cloud backups, Web Application Firewall (WAF) rule tuning, Core Web Vitals performance audits, dependency security patches, zero-downtime uptime monitoring, and guaranteed priority response times (SLAs) for technical bugs and layout updates.',
  },
  {
    id: 'faq-cms-updates',
    category: 'CMS & Content Updates',
    question: 'Can our non-technical marketing team easily update website copy, banners, and blog posts?',
    answer: 'Yes. We architect intuitive content management backends (such as Headless CMS, Strapi, or customized WordPress block systems) that allow marketing and editorial personnel to add blog posts, swap banners, and update landing page copy with zero coding knowledge. We also conduct live video training sessions and supply comprehensive documentation handbooks.',
  },
  {
    id: 'faq-custom-software',
    category: 'Custom Software Architecture',
    question: 'Do we retain complete legal ownership of the source code and intellectual property?',
    answer: 'Yes, 100%. Upon completion of contractual milestones, all intellectual property, design assets, and private GitHub/GitLab repositories are transferred to your organization with full, unrestricted ownership. We never use proprietary vendor lock-in code or claim recurring licensing royalties on software engineered for your company.',
  },
  {
    id: 'faq-support-consultation',
    category: 'Support & Ongoing Consultation',
    question: 'How do we communicate with your engineering team during development and after launch?',
    answer: 'We believe in transparent, frictionless communication. Every project is assigned a dedicated senior project lead. You receive direct access to our team through private Slack or WhatsApp channels, bi-weekly video sprint demonstrations, and a transparent project management board (Jira/Trello) tracking every task and ticket in real time.',
  },
];

