import React from 'react';

// Crisp, inline vector SVG icons for fast rendering and zero bundle overhead
export const MenuIcons = {
  // About icons
  whoWeAre: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  ourStory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  whyChooseUs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  ourTeam: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  ourProcess: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  qualityAssurance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),

  // Development icons
  webDev: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  mobileDev: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  uiux: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  customSoftware: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),

  // Solutions icons
  aiSolutions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7.003 7.003 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7.003 7.003 0 0 1 11 5.07V5a1 1 0 0 1 2 0v.07A7.003 7.003 0 0 1 18.93 11H19a1 1 0 0 1 0 2h-.07A7.003 7.003 0 0 1 13 16.93z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  apiIntegration: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),

  // Digital Marketing icons
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  aiSeo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  aeo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  geo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  llmSeo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  ),
  smm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  ppc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <line x1="12" y1="6" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="18" />
    </svg>
  ),
  aso: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
      <path d="M9 7l3 3 3-3" />
    </svg>
  ),

  // Industries icons
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  media: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  businessServices: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  wellness: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  sports: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M4.93 4.93c4.2 4.2 4.2 11 0 15.14" />
      <path d="M19.07 4.93c-4.2 4.2-4.2 11 0 15.14" />
    </svg>
  ),

  // Packages icons
  packageTier: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),

  // Portfolio & Case Study icons
  featuredPortfolio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  caseStudy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),

  // Blog icons
  latestArticles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),

  // Contact icons
  contactInquiry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.45 0 .08 5.37.08 11.98c0 2.11.55 4.17 1.6 5.98L0 24l6.21-1.63a11.94 11.94 0 0 0 5.85 1.51h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.53-8.42zm-8.46 18.37h-.01a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.76.99 1-3.66-.23-.38a9.92 9.92 0 0 1-1.52-5.21c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.02 2.91a9.88 9.88 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.57-.35z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export const megaMenuData = {
  About: {
    featureCard: {
      badge: 'ABOUT SILWASA',
      title: 'Engineering Digital Excellence',
      description: 'We are a premier IT solutions agency empowering businesses worldwide through custom web development, scalable cloud software, and strategic digital design.',
      linkText: 'Explore Our Story & Vision →',
      linkHref: '#about',
    },
    items: [
      {
        id: 'who-we-are',
        title: 'Who We Are',
        description: 'Technology partner delivering reliable and scalable enterprise web solutions.',
        href: '#about',
        icon: MenuIcons.whoWeAre,
      },
      {
        id: 'our-story',
        title: 'Our Story',
        description: 'From an ambitious tech venture to an internationally trusted engineering brand.',
        href: '#about',
        icon: MenuIcons.ourStory,
      },
      {
        id: 'why-choose-us',
        title: 'Why Choose Us',
        description: 'Proven track record, agile sprints, transparent delivery, and business ROI.',
        href: '#about',
        icon: MenuIcons.whyChooseUs,
      },
      {
        id: 'our-team',
        title: 'Our Team',
        description: 'Multidisciplinary software engineers, creative designers, and tech strategists.',
        href: '#about',
        icon: MenuIcons.ourTeam,
      },
      {
        id: 'our-work-process',
        title: '8-Step Work Process',
        description: 'Systematic 8-phase agile methodology from concept blueprint to deployment.',
        href: '#process',
        icon: MenuIcons.ourProcess,
      },
      {
        id: 'quality-assurance',
        title: 'Quality & Security',
        description: 'Enterprise code audits, automated CI/CD testing, and cybersecurity rigor.',
        href: '#about',
        icon: MenuIcons.qualityAssurance,
      },
    ],
  },

  Services: {
    featureCard: {
      badge: 'OUR SERVICES',
      title: 'End-to-End Digital Solutions',
      description: 'Comprehensive software engineering and growth marketing services tailored to accelerate revenue and give your brand a decisive market advantage.',
      linkText: 'Explore Full Service Directory →',
      linkHref: '#services',
    },
    // Organized into Development, Solutions, and Digital Marketing groups per user requirement
    groups: [
      {
        title: 'Development',
        items: [
          {
            id: 'web-development',
            title: 'Web Development',
            description: 'Custom React & Next.js web applications built for speed, SEO, and conversion.',
            href: '#services',
            icon: MenuIcons.webDev,
          },
          {
            id: 'mobile-app-development',
            title: 'Mobile Apps',
            description: 'Native & cross-platform iOS and Android apps powered by Flutter & React Native.',
            href: '#services',
            icon: MenuIcons.mobileDev,
          },
          {
            id: 'ui-ux-design',
            title: 'UI/UX Design',
            description: 'Human-centered product design, design systems, wireframes, and prototypes in Figma.',
            href: '#services',
            icon: MenuIcons.uiux,
          },
          {
            id: 'custom-software-development',
            title: 'Custom Software',
            description: 'Bespoke ERP, CRM, and cloud platforms engineered for enterprise scalability.',
            href: '#services',
            icon: MenuIcons.customSoftware,
          },
        ],
      },
      {
        title: 'Solutions',
        items: [
          {
            id: 'ai-solutions',
            title: 'AI Solutions',
            description: 'Autonomous agents, custom LLM chatbots, predictive analytics, and smart automation.',
            href: '#ai-solutions',
            icon: MenuIcons.aiSolutions,
          },
          {
            id: 'devops-cloud',
            title: 'DevOps & Cloud',
            description: 'AWS, GCP, Azure infrastructure, CI/CD pipelines, Docker, and zero downtime.',
            href: '#services',
            icon: MenuIcons.devops,
          },
          {
            id: 'api-integration',
            title: 'API Integration',
            description: 'Stripe, PayPal, CRM sync, third-party microservices, and custom REST/GraphQL.',
            href: '#services',
            icon: MenuIcons.apiIntegration,
          },
          {
            id: 'website-maintenance',
            title: 'Website Maintenance',
            description: 'Proactive 24/7 security monitoring, automated backups, speed tuning, and bug fixes.',
            href: '#services',
            icon: MenuIcons.maintenance,
          },
        ],
      },
      {
        title: 'Digital Marketing',
        items: [
          {
            id: 'seo-organic',
            title: 'SEO & Local SEO',
            description: 'Technical audits, ranking supremacy, schema markup, and Google Local Pack dominance.',
            href: '#services',
            icon: MenuIcons.seo,
          },
          {
            id: 'ai-seo',
            title: 'AI SEO & LLM SEO',
            description: 'Semantic vector clustering and entity mapping for next-generation search queries.',
            href: '#ai-solutions',
            icon: MenuIcons.aiSeo,
          },
          {
            id: 'aeo-geo',
            title: 'AEO & GEO',
            description: 'Winning answer engine summaries in ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
            href: '#ai-solutions',
            icon: MenuIcons.geo,
          },
          {
            id: 'smm-ppc',
            title: 'SMM, PPC & ASO',
            description: 'High-ROI Google Ads, paid social funnels on Meta & LinkedIn, and App Store optimization.',
            href: '#services',
            icon: MenuIcons.ppc,
          },
        ],
      },
    ],
  },

  'AI Solutions': {
    featureCard: {
      badge: 'ARTIFICIAL INTELLIGENCE',
      title: 'Autonomous & Generative AI',
      description: 'Harness the power of autonomous AI agents, fine-tuned LLMs, and Generative Engine Optimization (GEO) to dominate tomorrow’s search and operations.',
      linkText: 'Explore AI Capabilities →',
      linkHref: '#ai-solutions',
    },
    items: [
      {
        id: 'ai-business-solutions',
        title: 'AI Business Solutions',
        description: 'End-to-end intelligent systems automating mission-critical business workflows.',
        href: '#ai-solutions',
        icon: MenuIcons.aiSolutions,
      },
      {
        id: 'ai-chatbots',
        title: 'AI Chatbots & Agents',
        description: 'Conversational LLM agents with multi-turn memory and RAG private knowledge lookup.',
        href: '#ai-solutions',
        icon: MenuIcons.aiSolutions,
      },
      {
        id: 'smart-automation',
        title: 'Smart Automation',
        description: 'Zero-touch document processing, webhook pipelines, and error-free automations.',
        href: '#ai-solutions',
        icon: MenuIcons.customSoftware,
      },
      {
        id: 'geo-optimization',
        title: 'Generative Engine Opt (GEO)',
        description: 'Optimizing your brand for direct citations in Google AI Overviews and Copilot.',
        href: '#ai-solutions',
        icon: MenuIcons.geo,
      },
      {
        id: 'aeo-optimization',
        title: 'Answer Engine Opt (AEO)',
        description: 'Direct conversational Q&A positioning on Perplexity, Claude, and voice assistants.',
        href: '#ai-solutions',
        icon: MenuIcons.aeo,
      },
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description: 'Forecasting demand, customer lifetime value, and churn with custom ML models.',
        href: '#ai-solutions',
        icon: MenuIcons.seo,
      },
    ],
  },

  Industries: {
    featureCard: {
      badge: 'INDUSTRIES WE SERVE',
      title: 'Specialized Domain Expertise',
      description: 'Tailored technology solutions designed around industry-specific compliance, user behaviors, and mission-critical workflows.',
      linkText: 'Consult An Industry Specialist →',
      linkHref: '#contact',
    },
    items: [
      {
        id: 'healthcare',
        title: 'Healthcare & MedTech',
        description: 'HIPAA-compliant telemedicine, patient portals, and electronic health records.',
        href: '#industries',
        icon: MenuIcons.healthcare,
      },
      {
        id: 'education',
        title: 'Education & E-Learning',
        description: 'Interactive EdTech platforms, LMS portals, and virtual classroom software.',
        href: '#industries',
        icon: MenuIcons.education,
      },
      {
        id: 'ecommerce-retail',
        title: 'E-commerce & Retail',
        description: 'Omnichannel digital storefronts, inventory sync, and multi-currency checkout.',
        href: '#industries',
        icon: MenuIcons.retail,
      },
      {
        id: 'banking-finance',
        title: 'Banking & Finance',
        description: 'Secure fintech applications, PCI-DSS payment gateways, and encrypted vaults.',
        href: '#industries',
        icon: MenuIcons.finance,
      },
      {
        id: 'logistics',
        title: 'Logistics & Transport',
        description: 'Fleet tracking, route optimization, warehouse inventory, and automated dispatch.',
        href: '#industries',
        icon: MenuIcons.logistics,
      },
      {
        id: 'travel-hospitality',
        title: 'Travel & Hospitality',
        description: 'Direct booking engines, property management sync, and itinerary planning tools.',
        href: '#industries',
        icon: MenuIcons.travel,
      },
      {
        id: 'media-entertainment',
        title: 'Media & Entertainment',
        description: 'Content streaming, digital asset management, and creator monetization platforms.',
        href: '#industries',
        icon: MenuIcons.media,
      },
      {
        id: 'business-services',
        title: 'Business & Professional',
        description: 'Enterprise portals, CRM suites, billing automations, and client collaboration.',
        href: '#industries',
        icon: MenuIcons.businessServices,
      },
      {
        id: 'wellness-fitness',
        title: 'Wellness & Fitness',
        description: 'Membership management, workout booking engines, and health tracking apps.',
        href: '#industries',
        icon: MenuIcons.wellness,
      },
      {
        id: 'sports',
        title: 'Sports & Athletics',
        description: 'Tournament management portals, fan engagement, and athletic performance stats.',
        href: '#industries',
        icon: MenuIcons.sports,
      },
    ],
  },

  Packages: {
    featureCard: {
      badge: 'PRICING PACKAGES',
      title: 'Transparent Growth Tiers',
      description: 'Predictable, milestone-based packages tailored for startups, expanding brands, and high-volume digital enterprises with zero hidden charges.',
      linkText: 'Compare Full Packages →',
      linkHref: '#pricing',
    },
    items: [
      {
        id: 'seo-packages',
        title: 'SEO Packages',
        description: 'Technical audits, on-page optimization, backlink strategies, and monthly rank gains.',
        href: '#pricing',
        icon: MenuIcons.seo,
      },
      {
        id: 'local-seo-packages',
        title: 'Local SEO Packages',
        description: 'Google Business Profile, local NAP citations, and geo-targeted ranking dominance.',
        href: '#pricing',
        icon: MenuIcons.packageTier,
      },
      {
        id: 'ecommerce-seo-packages',
        title: 'E-commerce SEO Packages',
        description: 'Product schema markup, category page tuning, and high-buyer search conversion.',
        href: '#pricing',
        icon: MenuIcons.retail,
      },
      {
        id: 'smo-packages',
        title: 'SMO Social Packages',
        description: 'Organic content production, community engagement, and multi-channel brand presence.',
        href: '#pricing',
        icon: MenuIcons.smm,
      },
      {
        id: 'ppc-packages',
        title: 'PPC & Ad Packages',
        description: 'Google Search & Social ad management with precision ROI and lower cost-per-acquisition.',
        href: '#pricing',
        icon: MenuIcons.ppc,
      },
      {
        id: 'custom-quote',
        title: 'Custom Enterprise Quote',
        description: 'Bespoke software architecture, dedicated engineering sprints, and custom SLAs.',
        href: '#contact',
        icon: MenuIcons.customSoftware,
      },
    ],
  },

  Portfolio: {
    featureCard: {
      badge: 'FEATURED WORK',
      title: 'Our Digital Showcase',
      description: 'A curated gallery of recent client deliverables, mobile apps, and enterprise web solutions engineered with uncompromising craftsmanship.',
      linkText: 'Explore Complete Portfolio →',
      linkHref: '#portfolio',
    },
    items: [
      {
        id: 'all-projects',
        title: 'All Projects Gallery',
        description: 'Comprehensive directory of web platforms, mobile apps, and enterprise systems.',
        href: '#portfolio',
        icon: MenuIcons.featuredPortfolio,
      },
      {
        id: 'website-portfolio',
        title: 'Website Platforms',
        description: 'Responsive, lightning-fast corporate web platforms and brand headquarters.',
        href: '#portfolio',
        icon: MenuIcons.webDev,
      },
      {
        id: 'mobile-applications',
        title: 'Mobile Applications',
        description: 'Intuitive iOS & Android apps engineered for effortless daily utility.',
        href: '#portfolio',
        icon: MenuIcons.mobileDev,
      },
      {
        id: 'ecommerce-portfolio',
        title: 'E-Commerce Stores',
        description: 'High-conversion online stores with frictionless payment gateways.',
        href: '#portfolio',
        icon: MenuIcons.retail,
      },
      {
        id: 'enterprise-software',
        title: 'Enterprise Platforms',
        description: 'Scalable internal business tools, ERP portals, and custom operational software.',
        href: '#portfolio',
        icon: MenuIcons.customSoftware,
      },
      {
        id: 'recent-launches',
        title: 'Recent Client Launches',
        description: 'Freshly deployed digital products utilizing modern cloud-native tech stacks.',
        href: '#portfolio',
        icon: MenuIcons.ourProcess,
      },
    ],
  },

  'Case Studies': {
    featureCard: {
      badge: 'PROVEN SUCCESS',
      title: 'Measurable Impact & Case Studies',
      description: 'Discover how we turn complex operational challenges into scalable digital milestones, delivering measurable ROI and user satisfaction.',
      linkText: 'View All Case Studies →',
      linkHref: '#case-studies',
    },
    items: [
      {
        id: 'featured-case-studies',
        title: 'Featured Case Studies',
        description: 'Deep-dive explorations of our most impactful digital transformations.',
        href: '#case-studies',
        icon: MenuIcons.caseStudy,
      },
      {
        id: 'ecommerce-scale-modernization',
        title: 'E-Commerce Platform Scale',
        description: 'Sub-second checkout, Redis atomic locks, and high concurrency resilience.',
        href: '#case-studies',
        icon: MenuIcons.retail,
      },
      {
        id: 'telehealth-hipaa-portal',
        title: 'HIPAA Telehealth Portal',
        description: 'Encrypted WebRTC consultations, digital prescriptions, and EHR sync.',
        href: '#case-studies',
        icon: MenuIcons.healthcare,
      },
      {
        id: 'ai-search-dominance',
        title: 'AI Search Dominance (GEO)',
        description: 'Achieving #1 citation placement across ChatGPT and Google AI Overviews.',
        href: '#case-studies',
        icon: MenuIcons.geo,
      },
      {
        id: 'logistics-fleet-dispatch-system',
        title: 'Real-Time Fleet Routing',
        description: 'Dynamic GPS telematics, driver dispatch, and automated customer alerts.',
        href: '#case-studies',
        icon: MenuIcons.logistics,
      },
    ],
  },

  Blog: {
    featureCard: {
      badge: 'INSIGHTS & PERSPECTIVES',
      title: 'Tech, Strategy & Trends',
      description: 'Expert articles, architectural breakdowns, and strategic growth playbooks written by Silwasa engineers and digital strategists.',
      linkText: 'Read All Blog Articles →',
      linkHref: '#blog',
    },
    items: [
      {
        id: 'latest-articles',
        title: 'Latest Articles',
        description: 'Fresh insights on modern web development, engineering, and digital growth.',
        href: '#blog',
        icon: MenuIcons.latestArticles,
      },
      {
        id: 'ai-tech-trends',
        title: 'AI & Generative Tech',
        description: 'Navigating LLM integrations, autonomous agents, and next-gen search dynamics.',
        href: '#blog',
        icon: MenuIcons.aiSolutions,
      },
      {
        id: 'web-development-blog',
        title: 'Web Engineering',
        description: 'Deep dives into React, Vite performance, state patterns, and frontend architecture.',
        href: '#blog',
        icon: MenuIcons.webDev,
      },
      {
        id: 'seo-marketing-blog',
        title: 'SEO & Digital Growth',
        description: 'Actionable technical SEO practices to dominate competitive search rankings.',
        href: '#blog',
        icon: MenuIcons.seo,
      },
      {
        id: 'mobile-app-blog',
        title: 'Mobile Applications',
        description: 'Architecture patterns for Flutter, React Native, and native mobile development.',
        href: '#blog',
        icon: MenuIcons.mobileDev,
      },
    ],
  },

  Contact: {
    featureCard: {
      badge: 'GET IN TOUCH',
      title: 'Start Your Digital Project',
      description: 'Speak directly with our senior software engineers and technology strategists to discuss your project requirements, scope, and technical timeline.',
      linkText: 'Open Project Inquiry Form →',
      linkHref: '#contact',
    },
    items: [
      {
        id: 'project-inquiry',
        title: 'Project Inquiry Form',
        description: 'Send us your project specifications for a prompt review and proposal.',
        href: '#contact',
        icon: MenuIcons.contactInquiry,
      },
      {
        id: 'whatsapp-chat',
        title: 'WhatsApp Quick Connect',
        description: 'Direct messaging on WhatsApp (+91 7070717794) for rapid response.',
        href: 'https://wa.me/917070717794',
        icon: MenuIcons.whatsapp,
      },
      {
        id: 'free-consultation',
        title: 'Free Technical Consultation',
        description: 'Schedule a 30-minute discovery call with our solutions architects.',
        href: '#contact',
        icon: MenuIcons.whoWeAre,
      },
      {
        id: 'call-now',
        title: 'Direct Phone Line',
        description: 'Call us directly at +91 7070717794 for immediate consultation.',
        href: 'tel:+917070717794',
        icon: MenuIcons.phone,
      },
    ],
  },
};
