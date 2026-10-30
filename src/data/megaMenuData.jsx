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

  // Services icons
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
  ecommerce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  digitalMarketing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),

  // Case Studies icons
  featuredCase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  webProjects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  mobileProjects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  businessSolutions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  clientSuccess: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
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
  realEstate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  startups: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),

  // Portfolio icons
  featuredPortfolio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  websitePortfolio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  mobileApps: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  recentWork: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  clientProjects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
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
  webDevBlog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  techTrends: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  digitalMarketingBlog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="12 8 8 12 12 16 16 12 12 8" />
    </svg>
  ),
  seoBlog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  tutorials: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
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
        title: 'Our Work Process',
        description: 'Systematic 4-phase agile methodology from concept blueprint to deployment.',
        href: '#process',
        icon: MenuIcons.ourProcess,
      },
    ],
  },

  Services: {
    featureCard: {
      badge: 'OUR SERVICES',
      title: 'End-to-End Digital Solutions',
      description: 'Comprehensive software engineering and growth marketing services tailored to accelerate revenue and give your brand a decisive market advantage.',
      linkText: 'Get A Free Project Quote →',
      linkHref: '#contact',
    },
    items: [
      {
        id: 'web-development',
        title: 'Web Development',
        description: 'High-performance, responsive websites built with modern web frameworks.',
        href: '#services',
        icon: MenuIcons.webDev,
      },
      {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android ecosystems.',
        href: '#services',
        icon: MenuIcons.mobileDev,
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        description: 'Intuitive, conversion-optimized user interfaces and seamless UX systems.',
        href: '#services',
        icon: MenuIcons.uiux,
      },
      {
        id: 'custom-software-development',
        title: 'Custom Software Development',
        description: 'Bespoke software architectures engineered for enterprise scale and speed.',
        href: '#services',
        icon: MenuIcons.customSoftware,
      },
      {
        id: 'ecommerce-development',
        title: 'eCommerce Development',
        description: 'Robust online storefronts with streamlined and frictionless checkouts.',
        href: '#services',
        icon: MenuIcons.ecommerce,
      },
      {
        id: 'seo-services',
        title: 'SEO Services',
        description: 'Technical audits, indexing fixes, and organic search ranking optimization.',
        href: '#services',
        icon: MenuIcons.seo,
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Data-driven campaigns that amplify market reach and brand authority.',
        href: '#services',
        icon: MenuIcons.digitalMarketing,
      },
      {
        id: 'website-maintenance',
        title: 'Website Maintenance',
        description: 'Continuous security monitoring, automated backups, and uptime care.',
        href: '#services',
        icon: MenuIcons.maintenance,
      },
    ],
  },

  'Case Studies': {
    featureCard: {
      badge: 'PROVEN SUCCESS',
      title: 'Measurable Impact & Case Studies',
      description: 'Discover how we turn complex operational challenges into scalable digital milestones, delivering measurable ROI and user satisfaction.',
      linkText: 'View All Case Studies →',
      linkHref: '#portfolio',
    },
    items: [
      {
        id: 'featured-case-studies',
        title: 'Featured Case Studies',
        description: 'Deep-dive explorations of our most impactful digital transformations.',
        href: '#portfolio',
        icon: MenuIcons.featuredCase,
      },
      {
        id: 'web-development-projects',
        title: 'Web Development Projects',
        description: 'Next-generation web applications with exceptional speed and conversion.',
        href: '#portfolio',
        icon: MenuIcons.webProjects,
      },
      {
        id: 'mobile-app-projects',
        title: 'Mobile App Projects',
        description: 'Highly rated mobile applications serving engaged users worldwide.',
        href: '#portfolio',
        icon: MenuIcons.mobileProjects,
      },
      {
        id: 'business-solutions',
        title: 'Business Solutions',
        description: 'Custom workflow automation and enterprise productivity enhancement tools.',
        href: '#portfolio',
        icon: MenuIcons.businessSolutions,
      },
      {
        id: 'client-success-stories',
        title: 'Client Success Stories',
        description: 'Real-world business outcomes, revenue growth, and lasting partnerships.',
        href: '#portfolio',
        icon: MenuIcons.clientSuccess,
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
        title: 'Healthcare',
        description: 'Compliant digital health, telehealth portals, and patient management.',
        href: '#services',
        icon: MenuIcons.healthcare,
      },
      {
        id: 'education',
        title: 'Education',
        description: 'Interactive EdTech platforms, course management systems, and LMS.',
        href: '#services',
        icon: MenuIcons.education,
      },
      {
        id: 'ecommerce-retail',
        title: 'eCommerce & Retail',
        description: 'Omnichannel commerce platforms, inventory management, and POS integrations.',
        href: '#services',
        icon: MenuIcons.retail,
      },
      {
        id: 'finance',
        title: 'Finance',
        description: 'Secure fintech applications, payment gateway integrations, and data vaults.',
        href: '#services',
        icon: MenuIcons.finance,
      },
      {
        id: 'real-estate',
        title: 'Real Estate',
        description: 'Dynamic property listing portals, virtual tours, and CRM synchronizations.',
        href: '#services',
        icon: MenuIcons.realEstate,
      },
      {
        id: 'travel-hospitality',
        title: 'Travel & Hospitality',
        description: 'Direct booking engines, itinerary management, and guest experience portals.',
        href: '#services',
        icon: MenuIcons.travel,
      },
      {
        id: 'startups-small-businesses',
        title: 'Startups & Small Businesses',
        description: 'Rapid MVP engineering and scalable foundational tech stacks for agile launch.',
        href: '#pricing',
        icon: MenuIcons.startups,
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
        id: 'featured-projects',
        title: 'Featured Projects',
        description: 'Flagship digital products recognized for visual elegance and performance.',
        href: '#portfolio',
        icon: MenuIcons.featuredPortfolio,
      },
      {
        id: 'website-portfolio',
        title: 'Website Portfolio',
        description: 'Responsive, lightning-fast corporate web platforms and brand sites.',
        href: '#portfolio',
        icon: MenuIcons.websitePortfolio,
      },
      {
        id: 'mobile-applications',
        title: 'Mobile Applications',
        description: 'Intuitive iOS & Android apps engineered for effortless daily utility.',
        href: '#portfolio',
        icon: MenuIcons.mobileApps,
      },
      {
        id: 'recent-work',
        title: 'Recent Work',
        description: 'Freshly deployed client platforms utilizing modern technology stacks.',
        href: '#portfolio',
        icon: MenuIcons.recentWork,
      },
      {
        id: 'client-projects',
        title: 'Client Projects',
        description: 'Collaborative custom deliverables built to scale alongside business goals.',
        href: '#portfolio',
        icon: MenuIcons.clientProjects,
      },
    ],
  },

  Blog: {
    featureCard: {
      badge: 'INSIGHTS & PERSPECTIVES',
      title: 'Tech, Strategy & Trends',
      description: 'Expert articles, architectural breakdowns, and strategic growth playbooks written by Silwasa engineers and digital strategists.',
      linkText: 'Read All Blog Articles →',
      linkHref: '#footer',
    },
    items: [
      {
        id: 'latest-articles',
        title: 'Latest Articles',
        description: 'Fresh insights on modern web development, engineering, and digital growth.',
        href: '#footer',
        icon: MenuIcons.latestArticles,
      },
      {
        id: 'web-development-blog',
        title: 'Web Development',
        description: 'Deep dives into React, Vite performance, state patterns, and frontend architecture.',
        href: '#footer',
        icon: MenuIcons.webDevBlog,
      },
      {
        id: 'technology-trends',
        title: 'Technology Trends',
        description: 'Navigating AI integrations, cloud solutions, and modern software paradigms.',
        href: '#footer',
        icon: MenuIcons.techTrends,
      },
      {
        id: 'digital-marketing-blog',
        title: 'Digital Marketing',
        description: 'High-leverage growth frameworks, audience retention, and campaign analytics.',
        href: '#footer',
        icon: MenuIcons.digitalMarketingBlog,
      },
      {
        id: 'seo-business-growth',
        title: 'SEO & Business Growth',
        description: 'Actionable technical SEO practices to dominate competitive search rankings.',
        href: '#footer',
        icon: MenuIcons.seoBlog,
      },
      {
        id: 'tutorials-guides',
        title: 'Tutorials & Guides',
        description: 'Step-by-step developer walkthroughs, practical code recipes, and best practices.',
        href: '#footer',
        icon: MenuIcons.tutorials,
      },
    ],
  },
};
