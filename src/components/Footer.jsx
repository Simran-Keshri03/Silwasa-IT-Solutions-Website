import React, { useState } from 'react';
import logo from '../assets/silwasa-white-logo.webp';

const FOOTER_SITEMAP = [
  {
    title: 'Company',
    links: [
      { name: 'About Silwasa', href: '#about' },
      { name: '8-Step Process', href: '#process' },
      { name: 'Trust & Quality', href: '#trust' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Contact Us', href: '#contact' },
    ],
  },
  {
    title: 'Core Development',
    links: [
      { name: 'Custom Web Dev', href: '#services' },
      { name: 'Mobile App Dev', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Custom Software', href: '#services' },
      { name: 'DevOps & Cloud', href: '#services' },
    ],
  },
  {
    title: 'AI Solutions',
    links: [
      { name: 'Autonomous Agents', href: '#ai-solutions' },
      { name: 'Predictive Analytics', href: '#ai-solutions' },
      { name: 'AI Chatbots & RAG', href: '#ai-solutions' },
      { name: 'Smart Automation', href: '#ai-solutions' },
      { name: 'Enterprise Integrations', href: '#ai-solutions' },
    ],
  },
  {
    title: 'AI Search & SEO',
    links: [
      { name: 'GEO Optimization', href: '#ai-solutions' },
      { name: 'Answer Engine (AEO)', href: '#ai-solutions' },
      { name: 'LLM SEO Visibility', href: '#ai-solutions' },
      { name: 'Organic SEO', href: '#pricing' },
      { name: 'Google Ads & PPC', href: '#pricing' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Healthcare & MedTech', href: '#industries' },
      { name: 'Education & EdTech', href: '#industries' },
      { name: 'E-Commerce & Retail', href: '#industries' },
      { name: 'FinTech & Banking', href: '#industries' },
      { name: 'Logistics & Supply', href: '#industries' },
    ],
  },
  {
    title: 'Packages',
    links: [
      { name: 'SEO Growth Plans', href: '#pricing' },
      { name: 'Local SEO Booster', href: '#pricing' },
      { name: 'E-Commerce SEO', href: '#pricing' },
      { name: 'Social Media (SMO)', href: '#pricing' },
      { name: 'PPC Management', href: '#pricing' },
    ],
  },
  {
    title: 'Portfolio & Tech',
    links: [
      { name: 'Project Gallery', href: '#portfolio' },
      { name: 'Tech Stack (37 Tools)', href: '#tech-stack' },
      { name: 'Cloud Infrastructure', href: '#tech-stack' },
      { name: 'Architecture Demos', href: '#portfolio' },
      { name: 'Verified Benchmarks', href: '#case-studies' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Tech Blog & Articles', href: '#blog' },
      { name: 'Interactive FAQs', href: '#faq' },
      { name: 'Fair Pricing Notice', href: '#pricing' },
      { name: 'Code Ownership Policy', href: '#trust' },
      { name: 'SLA Support Terms', href: '#faq' },
    ],
  },
  {
    title: 'Direct Channels',
    links: [
      { name: 'Call: +91 7070717794', href: 'tel:+917070717794' },
      { name: 'Email: info@silwasa.com', href: 'mailto:info@silwasa.com' },
      { name: 'WhatsApp Quick Chat', href: 'https://wa.me/917070717794' },
      { name: 'Rohini, New Delhi Office', href: '#contact' },
      { name: 'Book Consultation', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [newsletterNotice, setNewsletterNotice] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setNewsletterNotice({
        type: 'error',
        text: 'Please enter your email address.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setNewsletterNotice({
        type: 'error',
        text: 'Please enter a valid email address (e.g., name@domain.com).',
      });
      return;
    }

    // Transparent status disclosure per project guidelines
    console.info('Newsletter subscription email (ready for backend service):', email.trim());
    setNewsletterNotice({
      type: 'info',
      text: 'Email format verified. Notice: Running in frontend mode without an active newsletter marketing service. Connect an email API (e.g. Mailchimp, Sendgrid, or Resend) to store subscriptions.',
    });
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      aria-label="Silwasa IT Solutions Footer"
      style={{
        backgroundColor: 'var(--e-global-color-4793e6c)',
        paddingTop: '50px',
        paddingBottom: '25px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Top Section: Brand Identity & Newsletter */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '36px',
            alignItems: 'center',
            paddingBottom: '36px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '40px',
          }}
        >
          {/* Brand Intro & Channels */}
          <div>
            <div style={{ marginBottom: '14px' }}>
              <a href="#hero" aria-label="Silwasa IT Solutions Home">
                <img
                  src={logo}
                  alt="Silwasa IT Solutions"
                  style={{
                    width: '180px',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </a>
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--e-global-color-text)',
                lineHeight: 1.6,
                maxWidth: '480px',
                marginBottom: '16px',
              }}
            >
              Enterprise software engineering, custom website development, and Generative Engine Optimization (GEO). Delivering high-performance web platforms and AI automation from Rohini, New Delhi.
            </p>

            {/* Social Icons Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {[
                {
                  name: 'Facebook',
                  href: 'https://facebook.com',
                  icon: (
                    <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.7 226.4 209.3 245V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V501C413.3 482.4 504 379.8 504 256z" />
                    </svg>
                  ),
                },
                {
                  name: 'X-Twitter',
                  href: 'https://twitter.com',
                  icon: (
                    <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  ),
                },
                {
                  name: 'YouTube',
                  href: 'https://youtube.com',
                  icon: (
                    <svg viewBox="0 0 576 512" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.583V174.334l142.069 81.666-142.069 81.666z" />
                    </svg>
                  ),
                },
                {
                  name: 'Instagram',
                  href: 'https://instagram.com',
                  icon: (
                    <svg viewBox="0 0 448 512" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1z" />
                    </svg>
                  ),
                },
                {
                  name: 'LinkedIn',
                  href: 'https://linkedin.com',
                  icon: (
                    <svg viewBox="0 0 448 512" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  ),
                },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(102, 51, 153, 0.18)',
                    color: 'var(--e-global-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--e-global-color-secondary)';
                    e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--e-global-color-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(102, 51, 153, 0.18)';
                  }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription Box */}
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid #2A2B28',
              borderRadius: '10px',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ color: 'var(--e-global-color-accent)', fontSize: '15px' }}>📩</span>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--e-global-color-secondary)' }}>
                Subscribe to Engineering & SEO Insights
              </h4>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, marginBottom: '14px' }}>
              Monthly technical updates covering generative engine optimization (GEO), LLM search visibility, and web architecture. Zero spam.
            </p>

            <form onSubmit={handleSubscribe} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex' }}>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (newsletterNotice) setNewsletterNotice(null);
                  }}
                  required
                  aria-label="Email for newsletter subscription"
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid var(--e-global-color-primary)',
                    borderRadius: '6px 0 0 6px',
                    padding: '11px 14px',
                    color: 'var(--e-global-color-secondary)',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--e-global-color-primary)',
                    border: '1px solid var(--e-global-color-primary)',
                    borderRadius: '0 6px 6px 0',
                    color: '#FFFFFF',
                    padding: '11px 18px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  Subscribe
                </button>
              </div>

              {newsletterNotice && (
                <div
                  role="status"
                  aria-live="polite"
                  style={{
                    fontSize: '12px',
                    color: newsletterNotice.type === 'error' ? '#ff6b6b' : 'var(--e-global-color-accent)',
                    marginTop: '4px',
                    lineHeight: 1.4,
                  }}
                >
                  {newsletterNotice.text}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Middle Section: 9 Organized Link Columns */}
        <div
          className="footer-sitemap-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '24px 20px',
            marginBottom: '40px',
          }}
        >
          {FOOTER_SITEMAP.map((group, gIdx) => (
            <div key={gIdx}>
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--e-global-color-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '14px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '6px',
                }}
              >
                {group.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.65)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--e-global-color-accent)';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright, Compliance & Back to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
          }}
        >
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2026 <strong style={{ color: 'var(--e-global-color-secondary)' }}>Silwasa IT Solutions</strong>. All Rights Reserved. Rohini, New Delhi, India.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
            <a
              href="#about"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)')}
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#about"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)')}
            >
              Terms of Service
            </a>
            <span>•</span>
            <a
              href="#contact"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)')}
            >
              Consultation SLA
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top of page"
      >
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '16px', height: '16px' }}
          aria-hidden="true"
        >
          <path
            d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href="https://wa.me/917070717794"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating"
        aria-label="Connect with Silwasa IT on WhatsApp"
      >
        <svg viewBox="0 0 448 512" fill="currentColor" style={{ width: '26px', height: '26px' }} aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      <style>{`
        @media (max-width: 900px) {
          .footer-sitemap-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px 16px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-sitemap-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px 12px !important;
          }
        }
      `}</style>
    </footer>
  );
}
