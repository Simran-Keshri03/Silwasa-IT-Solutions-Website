import React from 'react';

export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '34px',
        paddingBottom: '34px',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundImage: 'linear-gradient(169deg, var(--e-global-color-primary) 0%, #4F0996 100%)',
            borderRadius: '16px',
            padding: '8px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Dual Color Title and Subtext */}
          <div style={{ maxWidth: '650px' }}>
            <h2
              style={{
                fontSize: '36px',
                fontWeight: 600,
                lineHeight: 1.25,
                marginBottom: '8px',
              }}
            >
              <span style={{ color: 'var(--e-global-color-secondary)' }}>Ready to grow your </span>
              <span style={{ color: 'var(--e-global-color-accent)' }}>business online ?</span>
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--e-global-color-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            </p>
          </div>

          {/* Button: background-color: var(--e-global-color-accent), color: #000 per post-125.css */}
          <div>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--e-global-color-accent)',
                color: 'var(--e-global-color-2dc5e2b)',
                fontSize: '18px',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: '3px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
