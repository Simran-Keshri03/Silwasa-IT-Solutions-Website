import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 512 512" fill="currentColor" style={{ width: '24px', height: '24px' }}>
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Planning',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 384 512" fill="currentColor" style={{ width: '24px', height: '24px' }}>
          <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 640 512" fill="currentColor" style={{ width: '24px', height: '24px' }}>
          <path d="M278.9 511.5l-61-61c-4.7-4.7-4.7-12.3 0-17l148.9-149.1L217.9 135.3c-4.7-4.7-4.7-12.3 0-17l61-61c4.7-4.7 12.3-4.7 17 0l218.4 218.5c4.7 4.7 4.7 12.3 0 17L295.9 511.5c-4.7 4.7-12.3 4.7-17 0zm-126.8-17l61-61c4.7-4.7 4.7-12.3 0-17L64.2 267.4l148.9-149.1c4.7-4.7 4.7-12.3 0-17l-61-61c-4.7-4.7-12.3-4.7-17 0L8.7 258.8c-4.7 4.7-4.7 12.3 0 17l218.4 218.5c4.7 4.7 12.3 4.7 17 0z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Launch & Sopport',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 512 512" fill="currentColor" style={{ width: '24px', height: '24px' }}>
          <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432c3.2-18.9-16.1-34.9-35.6-24.8z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      style={{
        backgroundColor: 'var(--e-global-color-4793e6c)',
        paddingTop: '50px',
        paddingBottom: '50px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="section-badge">Our Process</span>
          <h2 className="section-title">How we work</h2>
          <p
            className="section-desc"
            style={{
              margin: '0 auto',
              maxWidth: '720px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* 4 Cards Grid (elementor-element-b0396f4: repeat(4, 1fr) on desktop, repeat(1, 1fr) on mobile) */}
        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {steps.map((st, i) => (
            <div
              key={i}
              className="process-card"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--e-global-color-primary)',
                borderRadius: '10px',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: 'var(--e-global-color-accent)',
                      lineHeight: 1,
                    }}
                  >
                    {st.num}
                  </span>
                  <div
                    style={{
                      color: 'var(--e-global-color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {st.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--e-global-color-secondary)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {st.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--e-global-color-text)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
