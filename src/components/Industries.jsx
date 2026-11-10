import React, { useState } from 'react';
import { industriesData } from '../data/industriesData';

// SVG Icon Helper for Industries
function getIndustryIcon(iconType) {
  switch (iconType) {
    case 'healthcare':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'education':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'retail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case 'finance':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    case 'logistics':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case 'travel':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case 'media':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    case 'businessServices':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'wellness':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'sports':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M4.93 4.93c4.2 4.2 4.2 11 0 15.14" />
          <path d="M19.07 4.93c-4.2 4.2-4.2 11 0 15.14" />
        </svg>
      );
  }
}

export default function Industries() {
  const [selectedIndustryId, setSelectedIndustryId] = useState(null);

  return (
    <section
      id="industries"
      style={{
        backgroundColor: 'var(--e-global-color-4793e6c)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-block', marginBottom: '8px' }}>
            <span
              style={{
                backgroundColor: '#2A2B28',
                padding: '6px 16px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: 'var(--e-global-color-accent)',
                letterSpacing: '0.8px',
                display: 'inline-block',
                border: '1px solid rgba(217, 244, 95, 0.25)',
              }}
            >
              SPECIALIZED DOMAIN EXPERTISE
            </span>
          </div>

          <h2
            style={{
              fontSize: '40px',
              fontWeight: 700,
              color: 'var(--e-global-color-secondary)',
              lineHeight: 1.25,
              marginBottom: '14px',
            }}
          >
            Industries We Serve
          </h2>

          <p
            className="section-desc"
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '15px',
              color: 'var(--e-global-color-text)',
              lineHeight: 1.6,
            }}
          >
            We engineer tailored digital solutions designed around industry-specific compliance standards, transactional workloads, and user behaviors across 10 vital global markets.
          </p>
        </div>

        {/* 10 Industry Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
          }}
        >
          {industriesData.map((ind) => {
            const isHovered = selectedIndustryId === ind.id;
            return (
              <div
                key={ind.id}
                onMouseEnter={() => setSelectedIndustryId(ind.id)}
                onMouseLeave={() => setSelectedIndustryId(null)}
                style={{
                  backgroundColor: 'var(--e-global-color-2dc5e2b)',
                  borderRadius: '12px',
                  border: isHovered
                    ? '2px solid var(--e-global-color-accent)'
                    : '2px solid rgba(255, 255, 255, 0.08)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isHovered
                    ? '0 0 16px rgba(217, 244, 95, 0.22), 0 8px 24px rgba(0,0,0,0.6)'
                    : '0 0 5px 0 var(--e-global-color-primary)',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-3px)' : 'none',
                }}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '10px',
                        backgroundColor: isHovered ? 'var(--e-global-color-primary)' : 'rgba(102, 51, 153, 0.2)',
                        border: '1px solid var(--e-global-color-primary)',
                        color: isHovered ? '#FFFFFF' : 'var(--e-global-color-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {getIndustryIcon(ind.icon)}
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--e-global-color-accent)',
                        backgroundColor: 'rgba(217, 244, 95, 0.1)',
                        border: '1px solid rgba(217, 244, 95, 0.25)',
                        padding: '3px 10px',
                        borderRadius: '20px',
                        letterSpacing: '0.6px',
                      }}
                    >
                      {ind.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: isHovered ? 'var(--e-global-color-accent)' : 'var(--e-global-color-secondary)',
                      lineHeight: 1.3,
                      marginBottom: '10px',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {ind.title}
                  </h3>

                  {/* Short original description */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--e-global-color-text)',
                      lineHeight: 1.55,
                      marginBottom: '18px',
                    }}
                  >
                    {ind.description}
                  </p>

                  {/* Relevant Solutions Checklist */}
                  <div style={{ marginBottom: '18px' }}>
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        color: 'rgba(255, 255, 255, 0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      Specialized Solutions:
                    </span>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {ind.solutions.map((sol, sIdx) => (
                        <li
                          key={sIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '12.5px',
                            color: 'rgba(255, 255, 255, 0.85)',
                            lineHeight: 1.4,
                          }}
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="var(--e-global-color-accent)"
                            style={{
                              width: '14px',
                              height: '14px',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Focus Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {ind.techFocus.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <a
                    href="#contact"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--e-global-color-accent)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
                  >
                    <span>{ind.ctaText}</span>
                    <span>→</span>
                  </a>

                  <a
                    href="https://wa.me/917070717794"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#06FF25',
                      fontSize: '12px',
                      textDecoration: 'none',
                    }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Industry Consultation Banner */}
        <div
          style={{
            marginTop: '40px',
            backgroundColor: 'var(--e-global-color-2dc5e2b)',
            borderRadius: '12px',
            border: '1px solid var(--e-global-color-primary)',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            <h4 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 600, marginBottom: '6px' }}>
              Operating in a niche or strictly regulated sector?
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--e-global-color-text)', margin: 0 }}>
              Our senior engineers design custom compliance-ready software architectures tailored precisely to your regulatory frameworks (HIPAA, PCI-DSS, GDPR, SOC2).
            </p>
          </div>

          <a
            href="#contact"
            className="btn-primary"
            style={{
              fontSize: '14px',
              padding: '11px 22px',
              whiteSpace: 'nowrap',
            }}
          >
            Consult Industry Architect
          </a>
        </div>
      </div>
    </section>
  );
}

