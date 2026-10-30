import React, { useState } from 'react';
import projectImg from '../assets/about-us-silwasa-it-solutions-1024x683.webp';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Fashion Store',
      category: 'eCommerce website',
      image: projectImg,
      link: '#',
    },
    {
      title: 'Fashion Store',
      category: 'eCommerce website',
      image: projectImg,
      link: '#',
    },
    {
      title: 'Fashion Store',
      category: 'eCommerce website',
      image: projectImg,
      link: '#',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const displayProjects = projects.map((_, i) => projects[(i + currentIndex) % projects.length]);

  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: 'var(--e-global-color-accent)',
              letterSpacing: '0.5px',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Featured projects
          </span>
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 600,
              color: 'var(--e-global-color-secondary)',
              marginBottom: '16px',
            }}
          >
            Our Recent Work
          </h2>
          <p
            className="section-desc"
            style={{
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Carousel Container with Arrows (elementor-element-5c62251) */}
        <div style={{ position: 'relative' }}>
          {/* 3 Projects Grid (responsive: 3 on desktop, 2 on tablet, 1 on mobile) */}
          <div
            className="portfolio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {displayProjects.map((proj, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--e-global-color-4793e6c)',
                  boxShadow: '1px 1px 5px 0px #663399',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Info & View Project Link (elementor-element-2b7dce5 & aaf5643) */}
                <div
                  style={{
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'var(--e-global-color-secondary)',
                        marginBottom: '4px',
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--e-global-color-text)',
                        margin: 0,
                      }}
                    >
                      {proj.category}
                    </p>
                  </div>

                  {/* Clean text link: View Project + arrow (Exact styles from elementor-element-aaf5643) */}
                  <a
                    href={proj.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'var(--e-global-color-accent)',
                      textDecoration: 'none',
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: 0,
                      transition: 'opacity 0.2s ease',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    <span>View Project</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 448 512"
                      fill="var(--e-global-color-accent)"
                      style={{ width: '13px', height: '13px' }}
                    >
                      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Chevrons (elementor-swiper-button-prev & next) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="portfolio-nav-btn prev"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--e-global-color-4793e6c)',
              border: '1px solid var(--e-global-color-primary)',
              color: 'var(--e-global-color-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              zIndex: 2,
              transition: 'background-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--e-global-color-4793e6c)';
              e.currentTarget.style.color = 'var(--e-global-color-secondary)';
            }}
          >
            <svg viewBox="0 0 1000 1000" fill="currentColor" style={{ width: '14px', height: '14px' }}>
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="portfolio-nav-btn next"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--e-global-color-4793e6c)',
              border: '1px solid var(--e-global-color-primary)',
              color: 'var(--e-global-color-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              zIndex: 2,
              transition: 'background-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--e-global-color-4793e6c)';
              e.currentTarget.style.color = 'var(--e-global-color-secondary)';
            }}
          >
            <svg viewBox="0 0 1000 1000" fill="currentColor" style={{ width: '14px', height: '14px' }}>
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .portfolio-nav-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
