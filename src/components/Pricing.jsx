import React, { useState } from 'react';
import tickIcon from '../assets/tick-icon.svg';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('STANDARD');

  const plans = [
    {
      id: 'BASIC',
      name: 'BASIC',
      subtitle: 'Perfect for small business',
      price: '99',
      features: [
        { name: 'Up to 5 Page Website', price: '$20', active: true },
        { name: 'Responsive Desing', price: '$20', active: true },
        { name: 'Basic SEO', price: '$20', active: true },
        { name: 'Contact Form', price: '$20', active: true },
        { name: 'Basic SEO', price: '$20', active: true },
        { name: 'Responsive Desing', price: 'X', active: false },
      ],
    },
    {
      id: 'STANDARD',
      name: 'STANDARD',
      subtitle: 'Best for growing business',
      price: '199',
      isPopular: true,
      features: [
        { name: 'Up to 5 Page Website', price: '$20', active: true },
        { name: 'Responsive Desing', price: '$20', active: true },
        { name: 'Basic SEO', price: '$20', active: true },
        { name: 'Contact Form', price: '$20', active: true },
        { name: 'Basic SEO', price: '$20', active: true },
        { name: 'Responsive Desing', price: '$20', active: true },
      ],
    },
    {
      id: 'PREMIUM',
      name: 'PREMIUM',
      subtitle: 'For large scale business',
      price: '349',
      features: [
        { name: 'Up to 5 Page Website', price: '$20', active: true },
        { name: 'Responsive Desing', price: '$20', active: true },
        { name: 'Basic SEO', price: '$20', active: true },
        { name: 'Contact Form', price: '$20', active: true },
        { name: 'Basic SEO', price: '$20', active: true },
        { name: 'Responsive Desing', price: '$20', active: true },
      ],
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Header (Pill badge + 40px Title) */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ display: 'inline-block', marginBottom: '8px' }}>
            <span
              style={{
                backgroundColor: '#2A2B28',
                padding: '6px 14px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 500,
                textTransform: 'uppercase',
                color: 'var(--e-global-color-accent)',
                letterSpacing: '0.5px',
                display: 'inline-block',
              }}
            >
              Pricing Plan
            </span>
          </div>
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 600,
              color: 'var(--e-global-color-secondary)',
            }}
          >
            Choose the perfect plan
          </h2>
        </div>

        {/* 3 Tier Grid (elementor-element-4708b14: repeat(3, 1fr) on desktop) */}
        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {plans.map((p) => {
            const isStandard = p.id === 'STANDARD';
            const isSelected = selectedPlan === p.id;

            return (
              <div
                key={p.id}
                onClick={() => setSelectedPlan(p.id)}
                data-selected={isSelected}
                data-plan={p.id}
                className={`pricing-card-item ${isStandard ? 'standard-plan' : ''} ${isSelected ? 'is-selected' : ''}`}
                style={{
                  backgroundColor: 'var(--e-global-color-4793e6c)',
                  borderRadius: '10px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: isStandard || isSelected
                    ? '2px solid var(--e-global-color-accent)'
                    : '2px solid var(--e-global-color-4793e6c)',
                  boxShadow: isStandard || isSelected
                    ? '0 0 10px rgba(217, 244, 95, 0.3)'
                    : '0px 0px 5px 0px #663399',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {/* POPULAR Badge for Standard Plan (Exact Elementor CSS: .standard-plan:after) */}
                {isStandard && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '5%',
                      top: '0%',
                      textAlign: 'center',
                      background: '#c9f45f',
                      color: '#000000',
                      width: '30%',
                      padding: '2px 0',
                      fontSize: '15px',
                      fontWeight: 600,
                      borderRadius: '0px 0px 10px 10px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    POPULAR
                  </div>
                )}

                <div>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--e-global-color-secondary)',
                      marginBottom: '4px',
                    }}
                  >
                    {p.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--e-global-color-text)',
                      marginBottom: '20px',
                    }}
                  >
                    {p.subtitle}
                  </p>

                  {/* Price */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '6px',
                      marginBottom: '24px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingBottom: '20px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '44px',
                        fontWeight: 700,
                        color: 'var(--e-global-color-secondary)',
                        lineHeight: 1,
                      }}
                    >
                      {p.price} /
                    </span>
                    <span
                      style={{
                        fontSize: '16px',
                        color: 'var(--e-global-color-text)',
                        fontWeight: 500,
                      }}
                    >
                      Month
                    </span>
                  </div>

                  {/* Price List with Dashed Separator */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    {p.features.map((feat, fi) => (
                      <li
                        key={fi}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '15px',
                        }}
                      >
                        <img
                          src={tickIcon}
                          alt="tick"
                          style={{
                            width: '14px',
                            height: '14px',
                            marginRight: '8px',
                            flexShrink: 0,
                            opacity: feat.active ? 1 : 0.3,
                          }}
                        />
                        <span style={{ color: feat.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)', whiteSpace: 'nowrap' }}>
                          {feat.name}
                        </span>
                        <div
                          style={{
                            flex: 1,
                            borderBottom: '2px dashed rgba(255, 255, 255, 0.2)',
                            margin: '0 8px',
                            minWidth: '10px',
                          }}
                        />
                        <span
                          style={{
                            color: feat.price === 'X' ? '#cf2e2e' : 'var(--e-global-color-primary)',
                            fontWeight: 600,
                            fontSize: '14px',
                          }}
                        >
                          {feat.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href="#contact"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      padding: '10px 20px',
                      fontSize: '14px',
                    }}
                  >
                    Choose  Plan
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
