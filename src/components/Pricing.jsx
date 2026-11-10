import React, { useState } from 'react';
import { packageCategories, packagesData } from '../data/packagesData';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState('seo');
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const currentPackages = packagesData[activeCategory] || [];

  return (
    <section
      id="pricing"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header (Pill badge + 40px Title) */}
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
              SPECIALIZED SERVICE PACKAGES
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
            Predictable Growth & Marketing Tiers
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
            Transparent, milestone-based packages tailored to your business scale. We provide customized quotations based strictly on your project scope, target keywords, and technical requirements with zero hidden fees.
          </p>

          {/* 5 Package Category Switcher Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '28px',
            }}
          >
            {packageCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedPlanId(null);
                  }}
                  style={{
                    backgroundColor: isActive ? 'var(--e-global-color-primary)' : 'var(--e-global-color-4793e6c)',
                    color: isActive ? '#FFFFFF' : 'var(--e-global-color-text)',
                    border: isActive
                      ? '1px solid var(--e-global-color-primary)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '30px',
                    padding: '8px 18px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 0 12px rgba(102, 51, 153, 0.6)' : 'none',
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
                      padding: '1px 6px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'rgba(217, 244, 95, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? 'var(--e-global-color-accent)' : 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Tier Grid (repeat(3, 1fr) on desktop, 1fr on mobile) */}
        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {currentPackages.map((p) => {
            const isPopular = p.isPopular;
            const isSelected = selectedPlanId === p.id;

            return (
              <div
                key={p.id}
                onClick={() => setSelectedPlanId(p.id)}
                className={`pricing-card-item ${isPopular ? 'standard-plan' : ''}`}
                style={{
                  backgroundColor: 'var(--e-global-color-4793e6c)',
                  borderRadius: '12px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: isPopular || isSelected
                    ? '2px solid var(--e-global-color-accent)'
                    : '2px solid var(--e-global-color-4793e6c)',
                  boxShadow: isPopular || isSelected
                    ? '0 0 16px rgba(217, 244, 95, 0.25), 0 8px 24px rgba(0,0,0,0.5)'
                    : '0px 0px 5px 0px var(--e-global-color-primary)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: isSelected ? 'translateY(-3px)' : 'none',
                }}
              >
                {/* POPULAR Badge for Popular Plan */}
                {isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '24px',
                      top: '0%',
                      background: 'var(--e-global-color-accent)',
                      color: '#000000',
                      padding: '4px 14px',
                      fontSize: '11px',
                      fontWeight: 700,
                      borderRadius: '0px 0px 8px 8px',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    POPULAR
                  </div>
                )}

                <div>
                  {/* Package Name */}
                  <div style={{ marginBottom: '8px' }}>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: 'var(--e-global-color-secondary)',
                        margin: 0,
                      }}
                    >
                      {p.name}
                    </h3>
                  </div>

                  {/* Target Audience */}
                  <div style={{ marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--e-global-color-accent)',
                        backgroundColor: 'rgba(217, 244, 95, 0.1)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        display: 'inline-block',
                      }}
                    >
                      Target: {p.targetAudience}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--e-global-color-text)',
                      lineHeight: 1.5,
                      marginBottom: '20px',
                    }}
                  >
                    {p.tagline}
                  </p>

                  {/* Pricing / Request a Quote Callout */}
                  <div
                    style={{
                      padding: '14px 16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.35)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', display: 'block' }}>
                        Investment
                      </span>
                      <span style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>
                        {p.price}
                      </span>
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--e-global-color-accent)', fontWeight: 600 }}>
                      Custom Scope
                    </span>
                  </div>

                  {/* Features Checklist */}
                  <div style={{ marginBottom: '28px' }}>
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.6px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        display: 'block',
                        marginBottom: '10px',
                      }}
                    >
                      Included In This Plan:
                    </span>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {p.features.map((feat, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '13px',
                            color: feat.active ? 'var(--e-global-color-secondary)' : 'rgba(255, 255, 255, 0.35)',
                            gap: '8px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {feat.active ? (
                              <svg
                                viewBox="0 0 20 20"
                                fill="var(--e-global-color-accent)"
                                style={{ width: '15px', height: '15px', flexShrink: 0 }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '13px', width: '15px', textAlign: 'center' }}>
                                ✕
                              </span>
                            )}
                            <span style={{ textDecoration: feat.active ? 'none' : 'line-through' }}>
                              {feat.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <a
                    href="#contact"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      fontSize: '14px',
                      padding: '11px 20px',
                    }}
                  >
                    Request Custom Quote
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Disclaimer */}
        <div
          style={{
            marginTop: '36px',
            textAlign: 'center',
            backgroundColor: 'var(--e-global-color-4793e6c)',
            borderRadius: '8px',
            padding: '14px 20px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <span style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.7)' }}>
            ✦ <strong>Fair & Transparent Pricing:</strong> We do not publish rigid automated prices because enterprise project scopes, tech stack requirements, and API throughput vary. Contact our solutions architects for an itemized, milestone-based proposal within 24 hours.
          </span>
        </div>
      </div>
    </section>
  );
}
