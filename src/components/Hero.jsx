import React from 'react';
import heroMan from '../assets/men.webp';
import avatarCluster from '../assets/image.webp';

export default function Hero() {
  const features = [
    'Crawlability & Indexing Fixing errors',
    'Identifying the exact terms potential',
    'Strategically linking from one page',
    'Writing articles for other industry',
  ];

  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '40px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <div>
            {/* Top Subtitle Badge (Exact styles from post-125.css .elementor-element-61f272f) */}
            <div style={{ marginBottom: '18px' }}>
              <span
                style={{
                  backgroundColor: '#2A2B28',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  color: 'var(--e-global-color-accent)',
                  display: 'inline-block',
                }}
              >
                SOLUTIONS FOR Creative Products
              </span>
            </div>

            {/* Main Title (Exact styles from post-125.css .elementor-element-bbc7734) */}
            <h1
              className="hero-main-title"
              style={{
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: '1.3em',
                color: 'var(--e-global-color-secondary)',
                marginBottom: '20px',
              }}
            >
              Sustainable SEO For Serious Brands
            </h1>

            {/* Subheading / Description */}
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--e-global-color-text)',
                marginBottom: '28px',
                maxWidth: '600px',
              }}
            >
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is
            </p>

            {/* Features Checkmark List Box (Exact styles from post-125.css .elementor-element-2fe5c63) */}
            <div
              style={{
                backgroundColor: 'var(--e-global-color-4793e6c)',
                padding: '16px 20px',
                borderRadius: '10px',
                marginBottom: '36px',
              }}
            >
              <ul
                className="hero-features-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '14px 24px',
                }}
              >
                {features.map((text, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '14px',
                      color: 'var(--e-global-color-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px',
              }}
            >
              {/* Primary Button (Exact styles from post-125.css .elementor-element-b5ad81b) */}
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  fontSize: '18px',
                  padding: '12px 24px',
                }}
              >
                Get In Touch
              </a>

              {/* Customer Proof Block (image.webp + 200K Satisfied Customers) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <img
                  src={avatarCluster}
                  alt="Customer Avatars"
                  style={{
                    width: '102px',
                    height: '50px',
                    objectFit: 'contain',
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '26px',
                      fontWeight: 600,
                      color: 'var(--e-global-color-secondary)',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    200K
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--e-global-color-text)',
                      margin: 0,
                    }}
                  >
                    Satisfied Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column / Hero Image (men.webp at 80% width per elementor-element-1b309b8) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={heroMan}
                alt="Silwasa Hero"
                style={{
                  width: '80%',
                  maxWidth: '500px',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-main-title {
            font-size: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
