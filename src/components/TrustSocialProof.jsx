import React from 'react';
import {
  companyStrengths,
  keyBusinessMetrics,
  illustrativeTestimonials,
  aiSearchShowcase,
} from '../data/trustData';

export default function TrustSocialProof() {
  return (
    <section
      id="trust"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
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
              TRUST & COMPANY STRENGTHS
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
            Why Serious Brands Choose Silwasa
          </h2>

          <p
            className="section-desc"
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              fontSize: '15px',
              color: 'var(--e-global-color-text)',
              lineHeight: 1.6,
            }}
          >
            We combine rigorous computer science fundamentals, modern cloud DevOps, and transparent sprint governance to deliver reliable software platforms that endure.
          </p>
        </div>

        {/* 6 Company Strengths Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {companyStrengths.map((st) => (
            <div
              key={st.id}
              style={{
                backgroundColor: 'var(--e-global-color-4793e6c)',
                borderRadius: '12px',
                border: '2px solid var(--e-global-color-4793e6c)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 0 5px 0 var(--e-global-color-primary)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(217, 244, 95, 0.22)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--e-global-color-4793e6c)';
                e.currentTarget.style.boxShadow = '0 0 5px 0 var(--e-global-color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ marginBottom: '12px' }}>
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
                    {st.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: 'var(--e-global-color-secondary)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {st.title}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--e-global-color-text)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {st.description}
                </p>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '12px', color: 'var(--e-global-color-accent)' }}>
                  ✓ Silwasa Engineering Standard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Business Milestones / Metrics Strip */}
        <div
          style={{
            backgroundColor: 'var(--e-global-color-4793e6c)',
            borderRadius: '12px',
            border: '1px solid var(--e-global-color-primary)',
            padding: '30px 24px',
            marginBottom: '48px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            {keyBusinessMetrics.map((metric, mIdx) => (
              <div key={mIdx}>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    color: 'var(--e-global-color-accent)',
                    lineHeight: 1.1,
                    marginBottom: '6px',
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--e-global-color-secondary)',
                    marginBottom: '4px',
                  }}
                >
                  {metric.label}
                </div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.55)' }}>
                  {metric.note}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '20px',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)', fontStyle: 'italic' }}>
              ✦ Transparency Note: Cumulative internal engineering benchmarks tracked across client deliverables since inception.
            </span>
          </div>
        </div>

        {/* Illustrative Partner Testimonials Strip */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--e-global-color-accent)',
                letterSpacing: '0.6px',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              CLIENT PERSPECTIVES
            </span>
            <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF' }}>
              Partner Feedback & Technical Trust
            </h3>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
              ✦ Illustrative Feedback Component (Ready for Verified Client Quotations)
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
              gap: '24px',
            }}
          >
            {illustrativeTestimonials.map((t) => (
              <div
                key={t.id}
                style={{
                  backgroundColor: 'var(--e-global-color-4793e6c)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--e-global-color-accent)', fontWeight: 600 }}>
                      {t.industry}
                    </span>
                    <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.45)', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2px 6px', borderRadius: '4px' }}>
                      {t.badge}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      marginBottom: '16px',
                    }}
                  >
                    "{t.content}"
                  </p>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF' }}>
                    {t.role}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--e-global-color-accent)', marginTop: '2px' }}>
                    ★ Outcome: {t.keyAchievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Search Visibility Showcase (GEO/AEO Demonstration) */}
        <div
          style={{
            backgroundColor: '#0F0E0E',
            borderRadius: '14px',
            border: '1px solid var(--e-global-color-primary)',
            padding: '28px 24px',
            boxShadow: '0 0 25px rgba(102, 51, 153, 0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--e-global-color-accent)',
                backgroundColor: 'rgba(217, 244, 95, 0.1)',
                padding: '4px 12px',
                borderRadius: '20px',
              }}
            >
              {aiSearchShowcase.badge}
            </span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {aiSearchShowcase.aiEnginesCovered.map((engine, eIdx) => (
                <span
                  key={eIdx}
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {engine}
                </span>
              ))}
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
            {aiSearchShowcase.title}
          </h3>

          <p style={{ fontSize: '13.5px', color: 'var(--e-global-color-text)', lineHeight: 1.55, marginBottom: '20px' }}>
            {aiSearchShowcase.description}
          </p>

          {/* Simulated Query Box */}
          <div
            style={{
              backgroundColor: '#070707',
              borderRadius: '8px',
              padding: '16px 20px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '16px',
            }}
          >
            <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
              Live Conversational Query Simulated on Perplexity / ChatGPT:
            </div>
            <div style={{ fontSize: '14.5px', color: 'var(--e-global-color-accent)', fontWeight: 600 }}>
              {aiSearchShowcase.simulatedQuery}
            </div>
          </div>

          {/* Simulated AI Answer Box */}
          <div
            style={{
              backgroundColor: '#070707',
              borderRadius: '8px',
              padding: '18px 20px',
              border: '1px solid rgba(102, 51, 153, 0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06FF25' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#06FF25', letterSpacing: '0.6px' }}>
                Generative AI Answer Synthesis (Brand Primary Citation):
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {aiSearchShowcase.simulatedAiAnswer.map((line, lIdx) => (
                <div key={lIdx} style={{ fontSize: '13px', color: '#E0E0E0', lineHeight: 1.5 }}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

