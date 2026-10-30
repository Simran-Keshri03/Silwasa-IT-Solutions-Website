import React, { useState, useEffect } from 'react';
import aboutImg from '../assets/about-us-silwasa-it-solutions-1024x683.webp';

export default function About() {
  const points = [
    'Crawlability & Indexing Fixing errors',
    'Identifying the exact terms potential',
    'Strategically linking from one page',
    'Writing articles for other industry',
  ];

  // Animated counters matching data-to-value="250" and data-to-value="5"
  const [projectCount, setProjectCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setProjectCount(Math.floor(ease * 250));
      setCountryCount(Math.floor(ease * 5));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setProjectCount(250);
        setCountryCount(5);
      }
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column / Image (elementor-element-b19cbc0 & f1543dc) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <img
                src={aboutImg}
                alt="Why Choose Silwasa IT Solutions"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>

          {/* Right Column / Content (elementor-element-ce97065) */}
          <div>
            {/* Top Subtitle Badge */}
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
              About us
            </span>

            {/* Title */}
            <h2
              style={{
                fontSize: '40px',
                fontWeight: 600,
                color: 'var(--e-global-color-secondary)',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              Why Choose Silwasa IT Solutions
            </h2>

            {/* Description Paragraph */}
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'var(--e-global-color-text)',
                marginBottom: '28px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Inner Row: Bullet Points + More About on Left, Lime Counter Box on Right */}
            <div
              className="about-inner-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              {/* Left Subsection: Points & Button (elementor-element-8231b5f) */}
              <div
                className="about-points-wrapper"
                style={{
                  flex: '1 1 50%',
                  minWidth: '240px',
                }}
              >
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '28px',
                  }}
                >
                  {points.map((pt, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--e-global-color-secondary)',
                        fontWeight: 500,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <circle cx="11.7975" cy="12.2033" r="6.50847" fill="#0A0A0A" />
                        <path
                          d="M22.5869 14.3063C22.1151 13.5725 21.6434 12.8649 21.1717 12.1311C21.0669 11.9739 21.0669 11.8691 21.1717 11.7118C21.6434 11.0042 22.0889 10.2967 22.5607 9.58907C23.111 8.75045 22.8227 7.93803 21.8793 7.59734C21.0931 7.30906 20.3069 6.99458 19.5207 6.70631C19.3634 6.65389 19.2848 6.54906 19.2848 6.36562C19.2586 5.50079 19.2062 4.63596 19.1538 3.79734C19.1013 2.8801 18.3938 2.35596 17.5027 2.59182C16.6641 2.80148 15.8255 3.03734 15.0131 3.2732C14.8296 3.32562 14.7248 3.2732 14.5938 3.14217C14.0696 2.46079 13.5193 1.80562 12.9951 1.15044C12.4186 0.416649 11.5276 0.416649 10.9248 1.15044C10.4007 1.80562 9.85031 2.46079 9.35238 3.11596C9.22135 3.29941 9.09031 3.32562 8.88066 3.2732C8.06824 3.03734 7.25583 2.82769 6.67928 2.67044C5.55238 2.40837 4.87101 2.85389 4.81859 3.79734C4.76618 4.66217 4.71376 5.527 4.68755 6.41803C4.68755 6.60148 4.60893 6.6801 4.45169 6.75872C3.63928 7.0732 2.82687 7.38768 2.01445 7.70217C1.17583 8.04286 0.913763 8.85527 1.41169 9.61527C1.88342 10.3491 2.35514 11.0567 2.82686 11.7904C2.93169 11.9477 2.93169 12.0525 2.82686 12.236C2.32893 12.9698 1.85721 13.7036 1.38548 14.4635C0.939968 15.1711 1.22824 16.0098 2.01445 16.3242C2.82686 16.6387 3.66548 16.9532 4.47789 17.2677C4.66134 17.3201 4.71376 17.4249 4.71376 17.6084C4.73996 18.447 4.84479 19.2594 4.84479 20.098C4.84479 20.9367 5.57858 21.6967 6.60065 21.3822C7.41307 21.1201 8.22548 20.9366 9.03789 20.7008C9.19514 20.6484 9.29996 20.6746 9.40479 20.8318C9.95513 21.5132 10.4793 22.1684 11.0296 22.8498C11.6324 23.5835 12.4972 23.5835 13.0738 22.8498C13.6241 22.1684 14.1482 21.5132 14.6986 20.8318C14.8034 20.7008 14.882 20.6484 15.0655 20.7008C15.9041 20.9366 16.7427 21.1463 17.5813 21.3822C18.4462 21.618 19.18 21.0939 19.2062 20.2029C19.2586 19.338 19.311 18.4732 19.3372 17.5822C19.3372 17.3725 19.442 17.2939 19.5993 17.2415C20.3855 16.9532 21.1979 16.6387 21.9841 16.3242C22.8227 15.9049 23.0848 15.0663 22.5869 14.3063ZM16.3234 10.0084L11.082 15.2498C10.951 15.3808 10.7676 15.4856 10.5841 15.5118C10.5317 15.5118 10.4531 15.538 10.4007 15.538C10.1648 15.538 9.90273 15.4332 9.71928 15.2498L7.57032 13.1008C7.20342 12.7339 7.20342 12.1311 7.57032 11.7642C7.93721 11.3973 8.53997 11.3973 8.90687 11.7642L10.3745 13.2318L14.9345 8.67182C15.3013 8.30493 15.9041 8.30493 16.271 8.67182C16.6903 9.03872 16.6903 9.64148 16.3234 10.0084Z"
                          fill="#D9F45F"
                        />
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <a
                    href="#contact"
                    className="btn-primary"
                    style={{
                      fontSize: '18px',
                      padding: '12px 24px',
                    }}
                  >
                    More About
                  </a>
                </div>
              </div>

              {/* Right Subsection: Exact Lime-Green Counter Box (elementor-element-4f77fab) */}
              <div
                className="about-counter-box"
                style={{
                  backgroundColor: 'var(--e-global-color-accent)',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  minHeight: '284px',
                  flex: '0 1 44%',
                  minWidth: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {/* Counter 1: Project Completed */}
                <div style={{ textAlign: 'start' }}>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--e-global-color-4793e6c)',
                      marginBottom: '8px',
                    }}
                  >
                    Project Completed
                  </div>
                  <div
                    style={{
                      fontSize: '44px',
                      fontWeight: 700,
                      color: 'var(--e-global-color-4793e6c)',
                      lineHeight: 1,
                    }}
                  >
                    <span>{projectCount}</span>
                    <span style={{ marginLeft: '4px' }}>+</span>
                  </div>
                </div>

                {/* Solid Divider (elementor-element-5934a77) */}
                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--e-global-color-4793e6c)',
                    margin: '22px 0',
                    width: '100%',
                    opacity: 0.25,
                  }}
                />

                {/* Counter 2: Countries in Services */}
                <div style={{ textAlign: 'start' }}>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--e-global-color-4793e6c)',
                      marginBottom: '8px',
                    }}
                  >
                    Countries in Services
                  </div>
                  <div
                    style={{
                      fontSize: '44px',
                      fontWeight: 700,
                      color: 'var(--e-global-color-4793e6c)',
                      lineHeight: 1,
                    }}
                  >
                    <span>{countryCount}</span>
                    <span style={{ marginLeft: '4px' }}>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-inner-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .about-counter-box {
            margin-top: 24px !important;
            flex: 1 1 100% !important;
            width: 100% !important;
            padding: 1.25rem !important;
          }
          .about-points-wrapper .btn-primary {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
