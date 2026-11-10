import React, { useEffect, useRef } from 'react';

export default function BlogModal({ article, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
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
          maxWidth: '800px',
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
          aria-label="Close article reading view"
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
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
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
            {article.category}
          </span>
          <span
            style={{
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.6)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '4px 10px',
              borderRadius: '20px',
            }}
          >
            ✦ {article.badge}
          </span>
          <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
            • {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2
          id="blog-modal-title"
          style={{
            fontSize: '26px',
            fontWeight: 700,
            lineHeight: 1.35,
            marginBottom: '12px',
            color: '#FFFFFF',
            paddingRight: '40px',
          }}
        >
          {article.title}
        </h2>

        {/* Metadata */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        {/* Article Body */}
        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontSize: '15px', color: '#E0E0E0', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic', borderLeft: '3px solid var(--e-global-color-accent)', paddingLeft: '14px' }}>
            {article.fullContent.intro}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {article.fullContent.keyPoints.map((pt, pIdx) => (
              <div key={pIdx}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--e-global-color-accent)', marginBottom: '6px' }}>
                  {pt.heading}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--e-global-color-text)', lineHeight: 1.6, margin: 0 }}>
                  {pt.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', padding: '16px', backgroundColor: 'rgba(102, 51, 153, 0.15)', borderRadius: '8px', border: '1px solid rgba(102, 51, 153, 0.35)' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--e-global-color-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Strategic Takeaways:
            </span>
            <p style={{ fontSize: '13.5px', color: '#FFFFFF', lineHeight: 1.55, margin: 0 }}>
              {article.fullContent.takeaways}
            </p>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '20px' }}>
          <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)', fontStyle: 'italic' }}>
            Notice: Sample article prepared as an illustrative demonstration of technical insights coverage.
          </span>
        </div>

        {/* Modal Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              padding: '8px 18px',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            Close Article
          </button>

          <a
            href="#contact"
            className="btn-primary"
            onClick={() => onClose()}
            style={{
              fontSize: '13.5px',
              padding: '8px 18px',
            }}
          >
            Discuss This Strategy With Our Team
          </a>
        </div>
      </div>
    </div>
  );
}

