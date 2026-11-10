import React, { useState, useMemo } from 'react';
import { techStackCategories, techStackData } from '../data/techStackData';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [techSearch, setTechSearch] = useState('');

  // Get active technologies or search across all
  const displayedTech = useMemo(() => {
    const trimmed = techSearch.trim().toLowerCase();
    if (!trimmed) {
      return techStackData[activeTab] || [];
    }

    // Search across all 9 categories
    const results = [];
    Object.keys(techStackData).forEach((catKey) => {
      techStackData[catKey].forEach((item) => {
        if (
          item.name.toLowerCase().includes(trimmed) ||
          item.description.toLowerCase().includes(trimmed) ||
          item.badge.toLowerCase().includes(trimmed) ||
          item.category.toLowerCase().includes(trimmed)
        ) {
          results.push(item);
        }
      });
    });
    return results;
  }, [activeTab, techSearch]);

  return (
    <section
      id="tech-stack"
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
              ENGINEERING TOOLKIT & CAPABILITIES
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
            Technology Stack Showcase
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
            We leverage modern, battle-tested programming languages, scalable frameworks, resilient cloud platforms, and enterprise databases to engineer reliable digital products.
          </p>

          {/* Search Bar for Technologies */}
          <div
            style={{
              maxWidth: '440px',
              margin: '22px auto 0 auto',
              position: 'relative',
            }}
          >
            <input
              type="text"
              placeholder="Filter by technology (e.g. React, Docker, AWS, Flutter)..."
              value={techSearch}
              onChange={(e) => setTechSearch(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--e-global-color-2dc5e2b)',
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
            {techSearch && (
              <button
                type="button"
                onClick={() => setTechSearch('')}
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

        {/* 9 Category Filter Tabs (hidden during active search) */}
        {!techSearch && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            {techStackCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    backgroundColor: isActive ? 'var(--e-global-color-primary)' : 'var(--e-global-color-2dc5e2b)',
                    color: isActive ? '#FFFFFF' : 'var(--e-global-color-text)',
                    border: isActive
                      ? '1px solid var(--e-global-color-primary)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 0 10px rgba(102, 51, 153, 0.5)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = 'var(--e-global-color-text)';
                    }
                  }}
                >
                  <span>{cat.name}</span>
                  <span
                    style={{
                      fontSize: '10.5px',
                      padding: '1px 5px',
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'rgba(217, 244, 95, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? 'var(--e-global-color-accent)' : 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Technologies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {displayedTech.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--e-global-color-2dc5e2b)',
                borderRadius: '10px',
                border: '2px solid var(--e-global-color-2dc5e2b)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 0 5px 0 var(--e-global-color-primary)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(217, 244, 95, 0.22)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--e-global-color-2dc5e2b)';
                e.currentTarget.style.boxShadow = '0 0 5px 0 var(--e-global-color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--e-global-color-accent)',
                      backgroundColor: 'rgba(217, 244, 95, 0.1)',
                      border: '1px solid rgba(217, 244, 95, 0.25)',
                      padding: '2px 8px',
                      borderRadius: '12px',
                    }}
                  >
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    {item.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '8px',
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--e-global-color-text)',
                    lineHeight: 1.5,
                    marginBottom: '14px',
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  Silwasa Standard:
                </span>
                <span style={{ fontSize: '11.5px', fontWeight: 600, color: 'var(--e-global-color-accent)' }}>
                  {item.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div
          style={{
            marginTop: '36px',
            backgroundColor: 'var(--e-global-color-2dc5e2b)',
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
            <h4 style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 600, marginBottom: '4px' }}>
              Unsure which technology stack fits your business scale?
            </h4>
            <p style={{ fontSize: '13.5px', color: 'var(--e-global-color-text)', margin: 0 }}>
              Our software architects evaluate your expected user concurrency, database requirements, and budget to prescribe the optimal architecture.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-primary"
            style={{
              fontSize: '13.5px',
              padding: '9px 18px',
              whiteSpace: 'nowrap',
            }}
          >
            Request Stack Feasibility Call
          </a>
        </div>
      </div>
    </section>
  );
}

