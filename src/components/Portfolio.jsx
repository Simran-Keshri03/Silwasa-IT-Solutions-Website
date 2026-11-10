import React, { useState, useMemo } from 'react';
import { portfolioCategories, portfolioProjects } from '../data/portfolioData';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Filter projects by selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioProjects;
    }
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Reset carousel index when category changes
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCarouselIndex(0);
  };

  // Carousel pagination
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, totalPages - 1)));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Visible items based on current page
  const visibleProjects = useMemo(() => {
    const start = carouselIndex * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, carouselIndex, itemsPerPage]);

  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header (Exact styles: 13px uppercase #D9F45F badge + 40px white title) */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
              PROJECT PORTFOLIO
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
            Our Digital Solutions Gallery
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
            Browse our curated cross-industry portfolio. Each deliverable showcases modern software design, scalable microservice architectures, and sub-second performance.
          </p>
        </div>

        {/* 12 Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '36px',
          }}
        >
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'All' ? portfolioProjects.length : portfolioProjects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                style={{
                  backgroundColor: isActive ? 'var(--e-global-color-primary)' : 'var(--e-global-color-4793e6c)',
                  color: isActive ? '#FFFFFF' : 'var(--e-global-color-text)',
                  border: isActive
                    ? '1px solid var(--e-global-color-primary)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '30px',
                  padding: '7px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
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
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: '10.5px',
                    padding: '1px 5px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'rgba(217, 244, 95, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    color: isActive ? 'var(--e-global-color-accent)' : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative' }}>
          {/* Projects Grid / Carousel Page */}
          <div
            className="portfolio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '24px',
              minHeight: '480px',
            }}
          >
            {visibleProjects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  backgroundColor: 'var(--e-global-color-4793e6c)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '2px solid var(--e-global-color-4793e6c)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 0 5px 0 var(--e-global-color-primary)',
                  transition: 'all 0.3s ease',
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
                {/* Image Container with Badges */}
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(21, 20, 20, 0.9) 100%)',
                    }}
                  />

                  {/* Badges on Image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--e-global-color-accent)',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        border: '1px solid rgba(217, 244, 95, 0.3)',
                        padding: '3px 9px',
                        borderRadius: '12px',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {proj.category}
                    </span>
                  </div>

                  <span
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '12px',
                      fontSize: '10.5px',
                      color: 'rgba(255, 255, 255, 0.65)',
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    ✦ {proj.badge}
                  </span>
                </div>

                {/* Card Info */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      style={{
                        fontSize: '19px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {proj.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '13.5px',
                        color: 'var(--e-global-color-text)',
                        lineHeight: 1.5,
                        marginBottom: '16px',
                      }}
                    >
                      {proj.description}
                    </p>

                    {/* Features checklist */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      {proj.features.slice(0, 3).map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '12px',
                            color: 'rgba(255, 255, 255, 0.85)',
                          }}
                        >
                          <span style={{ color: 'var(--e-global-color-accent)', fontWeight: 700 }}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                      {proj.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '11px',
                            color: 'rgba(255, 255, 255, 0.75)',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            padding: '2px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div
                    style={{
                      paddingTop: '14px',
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
                      }}
                    >
                      <span>Inquire About This Build</span>
                      <span>→</span>
                    </a>

                    <a
                      href="https://wa.me/917070717794"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#06FF25', fontSize: '12px', textDecoration: 'none' }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination & Arrow Controls */}
          {totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '36px',
              }}
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous portfolio page"
                style={{
                  backgroundColor: 'var(--e-global-color-4793e6c)',
                  border: '1px solid var(--e-global-color-primary)',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  fontSize: '16px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
                  e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--e-global-color-4793e6c)';
                  e.currentTarget.style.borderColor = 'var(--e-global-color-primary)';
                }}
              >
                ←
              </button>

              {/* Dot Indicators */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {Array.from({ length: totalPages }).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCarouselIndex(dotIdx)}
                    aria-label={`Go to page ${dotIdx + 1}`}
                    style={{
                      width: carouselIndex === dotIdx ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: carouselIndex === dotIdx ? 'var(--e-global-color-accent)' : 'rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next portfolio page"
                style={{
                  backgroundColor: 'var(--e-global-color-4793e6c)',
                  border: '1px solid var(--e-global-color-primary)',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  fontSize: '16px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
                  e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--e-global-color-4793e6c)';
                  e.currentTarget.style.borderColor = 'var(--e-global-color-primary)';
                }}
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
