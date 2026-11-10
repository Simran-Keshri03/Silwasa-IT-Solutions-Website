import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import CaseStudyModal from './modals/CaseStudyModal';

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section
      id="case-studies"
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
              PROVEN RESULTS & ARCHITECTURAL STUDIES
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
            Featured Case Studies
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
            Deep dive into our architectural breakdowns. Discover how Silwasa software engineers resolve mission-critical bottlenecks, modernize legacy systems, and engineer sub-second digital experiences.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '24px',
          }}
        >
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              style={{
                backgroundColor: 'var(--e-global-color-4793e6c)',
                borderRadius: '12px',
                border: '2px solid var(--e-global-color-4793e6c)',
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 0 5px 0 var(--e-global-color-primary)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(217, 244, 95, 0.25)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--e-global-color-4793e6c)';
                e.currentTarget.style.boxShadow = '0 0 5px 0 var(--e-global-color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Header Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
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
                    {cs.clientCategory}
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    ✦ Benchmark Study
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.35,
                    marginBottom: '12px',
                  }}
                >
                  {cs.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--e-global-color-text)',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                  }}
                >
                  {cs.summary}
                </p>

                {/* Verified Metric Highlights */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                    marginBottom: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {cs.verifiedOutcomes.slice(0, 2).map((metric, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#06FF25' }}>
                        {metric.value}
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)' }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {cs.technologies.slice(0, 4).map((tech, tIdx) => (
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
                  {cs.technologies.length > 4 && (
                    <span style={{ fontSize: '11px', color: 'var(--e-global-color-accent)' }}>
                      +{cs.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button to Open Modal */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(cs)}
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--e-global-color-primary)',
                    borderRadius: '4px',
                    color: 'var(--e-global-color-accent)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    padding: '10px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--e-global-color-accent)';
                  }}
                >
                  <span>Inspect Full Case Study & Architecture</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}

