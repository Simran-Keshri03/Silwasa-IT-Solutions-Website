import React, { useEffect, useRef } from 'react';

export default function CaseStudyModal({ caseStudy, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scrolling when modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Auto-focus modal
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      tabIndex={-1}
      ref={modalRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'modalFadeIn 0.25s ease forwards',
        outline: 'none',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#151414',
          border: '1px solid var(--e-global-color-primary)',
          borderRadius: '16px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.95), 0 0 20px rgba(102, 51, 153, 0.4)',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '32px',
          color: '#FFFFFF',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study details"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            lineHeight: 1,
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ✕
        </button>

        {/* Header Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--e-global-color-accent)',
              backgroundColor: 'rgba(217, 244, 95, 0.12)',
              border: '1px solid rgba(217, 244, 95, 0.3)',
              padding: '4px 12px',
              borderRadius: '20px',
              letterSpacing: '0.6px',
            }}
          >
            {caseStudy.clientCategory}
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.65)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '4px 12px',
              borderRadius: '20px',
            }}
          >
            ✦ {caseStudy.benchmarkBadge}
          </span>
        </div>

        {/* Main Title */}
        <h2
          id="case-study-modal-title"
          style={{
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '14px',
            color: '#FFFFFF',
            paddingRight: '40px',
          }}
        >
          {caseStudy.title}
        </h2>

        {/* Summary */}
        <p
          style={{
            fontSize: '15px',
            color: 'var(--e-global-color-text)',
            lineHeight: 1.6,
            marginBottom: '26px',
          }}
        >
          {caseStudy.summary}
        </p>

        {/* Problem vs Solution Split Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '20px',
            marginBottom: '28px',
          }}
        >
          {/* Problem */}
          <div
            style={{
              backgroundColor: '#0F0E0E',
              border: '1px solid rgba(255, 107, 107, 0.3)',
              borderRadius: '10px',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ color: '#ff6b6b', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                Operational Problem Statement
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55, margin: 0 }}>
              {caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div
            style={{
              backgroundColor: '#0F0E0E',
              border: '1px solid rgba(217, 244, 95, 0.3)',
              borderRadius: '10px',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ color: 'var(--e-global-color-accent)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                Engineering Solution Architecture
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55, margin: 0 }}>
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div style={{ marginBottom: '26px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: 'rgba(255, 255, 255, 0.5)',
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Technologies & Infrastructure:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {caseStudy.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                style={{
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: 'var(--e-global-color-accent)',
                  backgroundColor: 'rgba(102, 51, 153, 0.25)',
                  border: '1px solid rgba(102, 51, 153, 0.5)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features Breakdown */}
        <div style={{ marginBottom: '28px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: 'rgba(255, 255, 255, 0.5)',
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Key Architectural Deliverables:
          </span>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {caseStudy.keyFeatures.map((feat, fIdx) => (
              <li
                key={fIdx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13.5px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: 'var(--e-global-color-accent)', fontWeight: 700 }}>✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Benchmark Outcomes Grid */}
        <div style={{ marginBottom: '26px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: 'var(--e-global-color-accent)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Verified Performance & Architectural Metrics:
          </span>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))',
              gap: '12px',
            }}
          >
            {caseStudy.verifiedOutcomes.map((metric, mIdx) => (
              <div
                key={mIdx}
                style={{
                  backgroundColor: 'rgba(102, 51, 153, 0.15)',
                  border: '1px solid rgba(102, 51, 153, 0.35)',
                  borderRadius: '8px',
                  padding: '14px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#06FF25', marginBottom: '2px' }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', marginBottom: '2px' }}>
                  {metric.label}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '6px',
            padding: '10px 14px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.55)', fontStyle: 'italic' }}>
            Notice: {caseStudy.disclaimer}
          </span>
        </div>

        {/* Modal Actions Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              padding: '10px 20px',
              borderRadius: '4px',
              fontSize: '13.5px',
              cursor: 'pointer',
            }}
          >
            Close Details
          </button>

          <a
            href="#contact"
            className="btn-primary"
            onClick={() => onClose()}
            style={{
              fontSize: '14px',
              padding: '10px 22px',
            }}
          >
            Discuss a Similar Project With Us
          </a>
        </div>
      </div>
    </div>
  );
}

