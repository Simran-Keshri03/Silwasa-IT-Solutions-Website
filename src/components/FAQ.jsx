import React, { useState, useMemo } from 'react';
import { faqData } from '../data/faqData';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) return faqData;
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(trimmed) ||
        item.answer.toLowerCase().includes(trimmed) ||
        item.category.toLowerCase().includes(trimmed)
    );
  }, [searchQuery]);

  const toggleAccordion = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
              FREQUENTLY ASKED QUESTIONS
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
            Clear Answers to Technical Questions
          </h2>

          <p
            className="section-desc"
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              fontSize: '15px',
              color: 'var(--e-global-color-text)',
              lineHeight: 1.6,
            }}
          >
            Find immediate answers regarding our software engineering standards, pricing frameworks, AI integrations, data privacy compliance, and ongoing SLAs.
          </p>

          {/* Quick FAQ Search Bar */}
          <div
            style={{
              maxWidth: '460px',
              margin: '22px auto 0 auto',
              position: 'relative',
            }}
          >
            <input
              type="text"
              placeholder="Search questions (e.g. pricing, timelines, AI, HIPAA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--e-global-color-4793e6c)',
                border: '1px solid rgba(102, 51, 153, 0.5)',
                borderRadius: '30px',
                padding: '10px 18px 10px 38px',
                color: '#FFFFFF',
                fontSize: '13.5px',
                outline: 'none',
              }}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--e-global-color-accent)"
              strokeWidth="2"
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                pointerEvents: 'none',
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                backgroundColor: 'var(--e-global-color-4793e6c)',
                borderRadius: '10px',
                border: '1px dashed rgba(255, 255, 255, 0.1)',
              }}
            >
              <p style={{ color: '#FFFFFF', fontSize: '15px', marginBottom: '8px' }}>
                No FAQ matched "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="btn-primary"
                style={{ fontSize: '13px', padding: '6px 14px' }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: 'var(--e-global-color-4793e6c)',
                    borderRadius: '10px',
                    border: isOpen
                      ? '1px solid var(--e-global-color-accent)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 0 14px rgba(217, 244, 95, 0.15)' : 'none',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: 'var(--e-global-color-accent)',
                          letterSpacing: '0.6px',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        {faq.category}
                      </span>
                      <span
                        style={{
                          fontSize: '16.5px',
                          fontWeight: 600,
                          color: isOpen ? 'var(--e-global-color-accent)' : 'var(--e-global-color-secondary)',
                          lineHeight: 1.35,
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'var(--e-global-color-primary)' : 'rgba(255, 255, 255, 0.06)',
                        color: isOpen ? '#FFFFFF' : 'var(--e-global-color-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.25s ease, background-color 0.25s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      style={{
                        padding: '0 22px 20px 22px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        paddingTop: '14px',
                        animation: 'mobileAccordionFade 0.2s ease forwards',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'var(--e-global-color-text)',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Contact Callout */}
        <div
          style={{
            marginTop: '36px',
            backgroundColor: 'var(--e-global-color-4793e6c)',
            borderRadius: '12px',
            border: '1px solid var(--e-global-color-primary)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <h4 style={{ fontSize: '17px', color: '#FFFFFF', fontWeight: 600, marginBottom: '4px' }}>
              Have a specific question not covered here?
            </h4>
            <p style={{ fontSize: '13.5px', color: 'var(--e-global-color-text)', margin: 0 }}>
              Speak directly with our senior software engineers via WhatsApp, phone, or schedule a free consultation.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href="https://wa.me/917070717794"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#06FF25',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '8px 14px',
                border: '1px solid rgba(6, 255, 37, 0.4)',
                borderRadius: '4px',
              }}
            >
              WhatsApp Us
            </a>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                fontSize: '13px',
                padding: '8px 16px',
                whiteSpace: 'nowrap',
              }}
            >
              Ask Our Engineers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

