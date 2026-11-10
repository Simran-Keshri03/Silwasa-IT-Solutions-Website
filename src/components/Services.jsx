import React, { useState, useMemo } from 'react';
import { serviceCategories } from '../data/servicesData';

// Category icon helper
function getCategoryIcon(iconName) {
  switch (iconName) {
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7.003 7.003 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7.003 7.003 0 0 1 11 5.07V5a1 1 0 0 1 2 0v.07A7.003 7.003 0 0 1 18.93 11H19a1 1 0 0 1 0 2h-.07A7.003 7.003 0 0 1 13 16.93z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'search-ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'web':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'mobile':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'design':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 'software':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case 'api':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
      );
    case 'maintenance':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'marketing':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
  }
}

export default function Services() {
  const [activeCategoryId, setActiveCategoryId] = useState('web-development');
  const [searchQuery, setSearchQuery] = useState('');

  // Active Category Data
  const currentCategory = useMemo(() => {
    return serviceCategories.find((cat) => cat.id === activeCategoryId) || serviceCategories[0];
  }, [activeCategoryId]);

  // Filtered Services (if searching across all services, otherwise shows active category services)
  const displayServices = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) {
      return {
        categoryName: currentCategory.name,
        tagline: currentCategory.tagline,
        items: currentCategory.subservices,
        isSearch: false,
      };
    }

    // Search across all 10 categories
    const results = [];
    serviceCategories.forEach((cat) => {
      cat.subservices.forEach((sub) => {
        const titleMatch = sub.title.toLowerCase().includes(trimmed);
        const descMatch = sub.description.toLowerCase().includes(trimmed);
        const featureMatch = sub.features.some((f) => f.toLowerCase().includes(trimmed));
        const categoryMatch = cat.name.toLowerCase().includes(trimmed);

        if (titleMatch || descMatch || featureMatch || categoryMatch) {
          results.push({ ...sub, parentCategory: cat.name });
        }
      });
    });

    return {
      categoryName: `Search Results for "${searchQuery}"`,
      tagline: `Found ${results.length} specialized service${results.length === 1 ? '' : 's'} matching your search`,
      items: results,
      isSearch: true,
    };
  }, [searchQuery, currentCategory]);

  return (
    <section
      id="services"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header (Exact Silwasa styles: 13px uppercase #D9F45F badge + 40px white title) */}
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
              WHAT WE OFFER
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
            End-to-End IT Solutions & Engineering
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
            Explore our 10 comprehensive service pillars encompassing over 60 specialized technical capabilities — engineered to solve complex operational challenges, accelerate growth, and deliver measurable business ROI.
          </p>

          {/* Quick Search & Filter Bar */}
          <div
            style={{
              maxWidth: '540px',
              margin: '26px auto 0 auto',
              position: 'relative',
            }}
          >
            <input
              type="text"
              placeholder="Search services (e.g. ChatGPT, Flutter, DevOps, React, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--e-global-color-4793e6c)',
                border: '1px solid rgba(102, 51, 153, 0.5)',
                borderRadius: '30px',
                padding: '12px 20px 12px 42px',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--e-global-color-accent)';
                e.target.style.boxShadow = '0 0 12px rgba(217, 244, 95, 0.25)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(102, 51, 153, 0.5)';
                e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.5)';
              }}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--e-global-color-accent)"
              strokeWidth="2"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '18px',
                height: '18px',
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
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--e-global-color-text)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: 1,
                  padding: '4px',
                }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 10 Category Tabs (hidden during active text search) */}
        {!searchQuery && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '36px',
            }}
          >
            {serviceCategories.map((category) => {
              const isActive = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  style={{
                    backgroundColor: isActive ? 'var(--e-global-color-primary)' : 'var(--e-global-color-4793e6c)',
                    color: isActive ? '#FFFFFF' : 'var(--e-global-color-text)',
                    border: isActive
                      ? '1px solid var(--e-global-color-primary)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '9px 14px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 0 12px rgba(102, 51, 153, 0.5)' : 'none',
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
                  <span style={{ color: isActive ? 'var(--e-global-color-accent)' : 'var(--e-global-color-primary)' }}>
                    {getCategoryIcon(category.iconName)}
                  </span>
                  <span>{category.name}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '1px 6px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'rgba(217, 244, 95, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? 'var(--e-global-color-accent)' : 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Category Header Banner */}
        <div
          style={{
            backgroundColor: 'var(--e-global-color-4793e6c)',
            border: '1px solid rgba(102, 51, 153, 0.35)',
            borderRadius: '12px',
            padding: '20px 24px',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--e-global-color-accent)', letterSpacing: '0.6px' }}>
                {displayServices.isSearch ? 'SEARCH FILTER' : currentCategory.badge}
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
              <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {displayServices.items.length} Specialized Deliverables
              </span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              {displayServices.categoryName}
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--e-global-color-text)', margin: 0, maxWidth: '750px' }}>
              {displayServices.tagline}
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
            Request Category Consultation
          </a>
        </div>

        {/* Services Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        {displayServices.items.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: 'var(--e-global-color-4793e6c)',
              borderRadius: '12px',
              border: '1px dashed rgba(255, 255, 255, 0.1)',
            }}
          >
            <p style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '12px' }}>
              No services matched your query "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="btn-primary"
              style={{ fontSize: '13px', padding: '8px 16px' }}
            >
              Reset Search & View All
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '24px',
            }}
          >
            {displayServices.items.map((svc) => (
              <div
                key={svc.id}
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
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(217, 244, 95, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--e-global-color-4793e6c)';
                  e.currentTarget.style.boxShadow = '0 0 5px 0 var(--e-global-color-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  {/* Top Badge & Parent Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--e-global-color-accent)',
                        backgroundColor: 'rgba(217, 244, 95, 0.1)',
                        border: '1px solid rgba(217, 244, 95, 0.25)',
                        padding: '3px 9px',
                        borderRadius: '20px',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {svc.badge}
                    </span>

                    {svc.parentCategory && (
                      <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                        {svc.parentCategory}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      color: 'var(--e-global-color-secondary)',
                      lineHeight: 1.35,
                      marginBottom: '12px',
                    }}
                  >
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--e-global-color-text)',
                      lineHeight: 1.55,
                      marginBottom: '18px',
                    }}
                  >
                    {svc.description}
                  </p>

                  {/* Key Deliverables / Features Checklist */}
                  <div style={{ marginBottom: '22px' }}>
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
                      Key Deliverables:
                    </span>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {svc.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
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
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link */}
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
                    <span>Request Quotation</span>
                    <span>→</span>
                  </a>

                  <a
                    href="https://wa.me/917070717794"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Direct WhatsApp Chat"
                    style={{
                      color: '#06FF25',
                      fontSize: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
