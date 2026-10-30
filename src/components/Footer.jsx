import React, { useState } from 'react';
import logo from '../assets/silwasa-white-logo.webp';

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
        text: 'Please enter a valid email address.',
      });
      return;
    }

    setNewsletterNotice({
      type: 'info',
      text: 'Frontend validation passed. Backend service required to process subscription.',
    });
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: 'var(--e-global-color-4793e6c)',
        paddingTop: '40px',
        paddingBottom: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Columns Grid */}
        <div
          className="footer-columns-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.3fr',
            gap: '32px',
            marginBottom: '50px',
          }}
        >
          {/* Column 1: Logo & Newsletter */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <img
                src={logo}
                alt="Silwasa Logo"
                style={{
                  width: '45%',
                  minWidth: '130px',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--e-global-color-text)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Newsletter Inline Form (Exact Elementor styles: input border-radius 6px 0 0 6px, btn 0 6px 6px 0) */}
            <form onSubmit={handleSubscribe} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex' }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (newsletterNotice) setNewsletterNotice(null);
                  }}
                  required
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--e-global-color-4793e6c)',
                    border: '1px solid var(--e-global-color-primary)',
                    borderRadius: '6px 0 0 6px',
                    padding: '10px 14px',
                    color: 'var(--e-global-color-secondary)',
                    fontSize: '14px',
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
                    padding: '10px 18px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  Subscribe
                </button>
              </div>

              {newsletterNotice && (
                <div
                  className="newsletter-notice"
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

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--e-global-color-secondary)',
                marginBottom: '18px',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Industries', href: '#services' },
                { name: 'Case Studies', href: '#portfolio' },
                { name: 'Contact', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'var(--e-global-color-text)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-secondary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--e-global-color-text)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--e-global-color-secondary)',
                marginBottom: '18px',
              }}
            >
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Case Study', href: '#portfolio' },
                { name: 'Industries', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Blog', href: '#footer' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'var(--e-global-color-text)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-secondary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--e-global-color-text)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--e-global-color-secondary)',
                marginBottom: '18px',
              }}
            >
              Support
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'Blog', href: '#footer' },
                { name: 'FAQ', href: '#footer' },
                { name: 'Terms of Services', href: '#footer' },
                { name: 'Terms and Conditions', href: '#footer' },
                { name: 'Privacy Policy', href: '#footer' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'var(--e-global-color-text)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-secondary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--e-global-color-text)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Get in Touch & Map */}
          <div>
            <h4
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--e-global-color-secondary)',
                marginBottom: '18px',
              }}
            >
              Get in Touch
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--e-global-color-text)' }}>
                <svg aria-hidden="true" viewBox="0 0 512 512" fill="var(--e-global-color-accent)" style={{ width: '14px', height: '14px', flexShrink: 0 }}>
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
                <a href="tel:+917070717794" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7070717794</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--e-global-color-text)' }}>
                <svg aria-hidden="true" viewBox="0 0 512 512" fill="var(--e-global-color-accent)" style={{ width: '14px', height: '14px', flexShrink: 0 }}>
                  <path d="M502.3 190.8L327.4 330.4c-40.4 32.2-96.4 32.2-136.8 0L7.7 190.8C2.8 186.9 0 181 0 174.8V448c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V174.8c0 6.2-2.8 12.1-7.7 16zM480 96H32c-17.7 0-32 14.3-32 32 0 8.3 3.2 16.3 9 22.3l192 153.6c28.9 23.1 68.9 23.1 97.8 0l192-153.6c5.8-6 9-14 9-22.3 0-17.7-14.3-32-32-32z" />
                </svg>
                <a href="mailto:info@silwasa.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@silwasa.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--e-global-color-text)' }}>
                <svg aria-hidden="true" viewBox="0 0 384 512" fill="var(--e-global-color-accent)" style={{ width: '14px', height: '14px', flexShrink: 0 }}>
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                <span>Rohini New delhi, india</span>
              </li>
            </ul>

            {/* Google Map iframe */}
            <div style={{ borderRadius: '6px', overflow: 'hidden', height: '100px' }}>
              <iframe
                title="Rohini Google Map"
                src="https://maps.google.com/maps?q=Rohini%20New%20Delhi%2C%20India&t=m&z=12&output=embed&iwloc=near"
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Sitemap */}
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
          <div style={{ fontSize: '13px', fontWeight: 300, color: 'var(--e-global-color-text)' }}>
            © 2026 Silwasa IT Solutions. All Rights Reserved.
          </div>

          {/* Social Icons (Exact styles from post-235.css .elementor-element-a3894ab) */}
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
                title={soc.name}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  backgroundColor: '#66339921',
                  color: 'var(--e-global-color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--e-global-color-secondary)';
                  e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--e-global-color-primary)';
                  e.currentTarget.style.backgroundColor = '#66339921';
                }}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          <div>
            <a
              href="#footer"
              style={{
                fontSize: '13px',
                color: 'var(--e-global-color-text)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--e-global-color-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--e-global-color-text)')}
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '16px', height: '16px' }}
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
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 448 512" fill="currentColor" style={{ width: '26px', height: '26px' }}>
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      <style>{`
        @media (max-width: 1024px) {
          .footer-columns-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 767px) {
          .footer-columns-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
