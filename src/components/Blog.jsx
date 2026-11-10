import React, { useState, useMemo } from 'react';
import { blogCategories, blogArticles } from '../data/blogData';
import BlogModal from './modals/BlogModal';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [readingArticle, setReadingArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return blogArticles;
    return blogArticles.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCarouselIndex(0);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, totalPages - 1)));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleArticles = useMemo(() => {
    const start = carouselIndex * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [filteredArticles, carouselIndex, itemsPerPage]);

  return (
    <section
      id="blog"
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
              INSIGHTS & PERSPECTIVES
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
            Technology, AI & Strategy Insights
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
            Explore technical deep dives, architectural breakdowns, and strategic playbooks authored by our solutions architects and growth engineers.
          </p>
        </div>

        {/* 5 Categories Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '36px',
          }}
        >
          {blogCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'All' ? blogArticles.length : blogArticles.filter((a) => a.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                style={{
                  backgroundColor: isActive ? 'var(--e-global-color-primary)' : 'var(--e-global-color-2dc5e2b)',
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

        {/* Blog Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
            minHeight: '440px',
          }}
        >
          {visibleArticles.map((article) => (
            <div
              key={article.id}
              style={{
                backgroundColor: 'var(--e-global-color-2dc5e2b)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid var(--e-global-color-2dc5e2b)',
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
                e.currentTarget.style.borderColor = 'var(--e-global-color-2dc5e2b)';
                e.currentTarget.style.boxShadow = '0 0 5px 0 var(--e-global-color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image Container with Badges */}
              <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)',
                  }}
                />

                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--e-global-color-accent)',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(217, 244, 95, 0.3)',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {article.category}
                </span>

                <span
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '12px',
                    fontSize: '10.5px',
                    color: 'rgba(255, 255, 255, 0.65)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  ✦ {article.badge}
                </span>
              </div>

              {/* Info Container */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '8px', display: 'flex', gap: '8px' }}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '10px',
                      lineHeight: 1.35,
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--e-global-color-text)',
                      lineHeight: 1.55,
                      marginBottom: '18px',
                    }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setReadingArticle(article)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--e-global-color-accent)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0,
                    }}
                  >
                    <span>Read Full Article</span>
                    <span>→</span>
                  </button>

                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>
                    By {article.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls if multiple pages */}
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
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous articles page"
              style={{
                backgroundColor: 'var(--e-global-color-2dc5e2b)',
                border: '1px solid var(--e-global-color-primary)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
              }}
            >
              ←
            </button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {Array.from({ length: totalPages }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCarouselIndex(dotIdx)}
                  aria-label={`Go to article page ${dotIdx + 1}`}
                  style={{
                    width: carouselIndex === dotIdx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: carouselIndex === dotIdx ? 'var(--e-global-color-accent)' : 'rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next articles page"
              style={{
                backgroundColor: 'var(--e-global-color-2dc5e2b)',
                border: '1px solid var(--e-global-color-primary)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
              }}
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Reading Modal */}
      <BlogModal
        article={readingArticle}
        isOpen={Boolean(readingArticle)}
        onClose={() => setReadingArticle(null)}
      />
    </section>
  );
}

