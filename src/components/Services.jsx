import React from 'react';

export default function Services() {
  const servicesData = [
    {
      title: 'Web Development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: '42px', height: '42px' }}>
          <path d="M16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm6.313,21.636c.375-1.703,.602-3.6,.66-5.636h5.986c-.193,2.515-1.105,4.829-2.53,6.741-1.349-.461-2.724-.829-4.116-1.105Zm-16.742,1.105c-1.425-1.912-2.337-4.226-2.53-6.741h5.986c.058,2.036,.285,3.933,.66,5.636-1.391,.276-2.767,.644-4.116,1.104Zm4.115-14.371c-.374,1.701-.601,3.597-.659,5.63H3.041c.193-2.515,1.104-4.829,2.53-6.741,1.351,.462,2.724,.832,4.115,1.11Zm1.973,.338c1.433,.194,2.882,.292,4.341,.292s2.908-.098,4.341-.292c.351,1.559,.578,3.343,.638,5.292H11.021c.06-1.949,.287-3.733,.638-5.292Zm-.638,7.292h9.957c-.06,1.953-.287,3.739-.639,5.3-2.877-.388-5.8-.387-8.678,0-.352-1.561-.58-3.348-.639-5.3Zm11.951-2c-.057-2.033-.284-3.929-.659-5.63,1.391-.278,2.765-.648,4.115-1.11,1.425,1.912,2.337,4.226,2.53,6.74h-5.986Zm2.008-8.371c-1.044,.324-2.103,.59-3.173,.797-.465-1.474-1.049-2.748-1.731-3.761,1.855,.615,3.522,1.642,4.903,2.964Zm-8.981-3.629c1.363,0,2.813,1.78,3.799,4.749-2.521,.317-5.076,.317-7.598,0,.986-2.969,2.436-4.749,3.799-4.749Zm-5.809,4.426c-1.069-.208-2.128-.473-3.173-.797,1.381-1.322,3.048-2.349,4.903-2.964-.682,1.013-1.266,2.287-1.731,3.761Zm-3.172,17.946c1.044-.324,2.103-.589,3.172-.797,.464,1.474,1.049,2.747,1.73,3.76-1.855-.615-3.521-1.642-4.902-2.963Zm8.981,3.628c-1.363,0-2.813-1.78-3.799-4.748,2.522-.317,5.077-.317,7.598,0-.986,2.969-2.436,4.749-3.799,4.749Zm5.809-4.426c1.069,.208,2.128,.474,3.173,.797-1.381,1.322-3.048,2.349-4.903,2.964,.682-1.013,1.266-2.287,1.731-3.761Z" fill="var(--e-global-color-primary)" />
        </svg>
      ),
    },
    {
      title: 'eCommerce solutions',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style={{ width: '42px', height: '42px' }}>
          <path d="M63.2 161h164.7c-9.6-7.3-19.3-14.7-28.9-22 4.8 14.6 9.6 29.2 14.4 43.9 11.6 35.1 23.1 70.2 34.7 105.3C262 330.4 276 372.7 289.9 415c12.1 36.7 24.2 73.4 36.2 110.1 5.9 17.8 11.5 35.7 17.6 53.4.1.3.2.5.3.8 4.9 14.9 21 26.1 36.9 21 14.8-4.8 26.2-20.9 21-36.9-4.8-14.6-9.6-29.2-14.4-43.9-11.6-35.1-23.1-70.2-34.7-105.3-13.9-42.3-27.8-84.6-41.8-126.9-12.1-36.7-24.2-73.4-36.2-110.1-5.9-17.8-11.4-35.7-17.6-53.4-.1-.3-.2-.5-.3-.8-4.2-12.6-15.3-22-28.9-22H63.3c-15.7 0-30.7 13.8-30 30 .6 16.3 13.1 30 29.9 30z" fill="var(--e-global-color-primary)" />
          <path d="M347 556.1c-16.2 28.9-32.5 57.7-48.7 86.6-2.3 4.2-4.7 8.3-7 12.5-11.1 19.7 2.9 45.1 25.9 45.1h458c21.1 0 42.3.4 63.5 0h.9c15.7 0 30.7-13.8 30-30-.7-16.3-13.2-30-30-30h-458c-21.1 0-42.4-.6-63.5 0h-.9c8.6 15 17.3 30.1 25.9 45.1 16.2-28.9 32.5-57.7 48.7-86.6 2.3-4.2 4.7-8.3 7-12.5 7.7-13.7 3.7-33.4-10.8-41-14.2-7.4-32.8-3.8-41 10.8z" fill="var(--e-global-color-primary)" />
          <circle cx="746.5" cy="824.9" r="68.1" fill="var(--e-global-color-primary)" />
          <circle cx="401.8" cy="824.9" r="68.1" fill="var(--e-global-color-primary)" />
          <path d="M960.8 258 839.4 571H372.9L269.7 258z" fill="var(--e-global-color-primary)" />
        </svg>
      ),
    },
    {
      title: 'Custom Web development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: '42px', height: '42px' }}>
          <path fill="var(--e-global-color-primary)" d="M41,42H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H41a1,1,0,0,1,1,1V41A1,1,0,0,1,41,42ZM8,40H40V8H8Z" />
          <circle cx="11" cy="11" r="1" fill="var(--e-global-color-primary)" />
          <circle cx="15" cy="11" r="1" fill="var(--e-global-color-primary)" />
          <circle cx="19" cy="11" r="1" fill="var(--e-global-color-primary)" />
          <path fill="var(--e-global-color-primary)" d="M21 16H7a1 1 0 0 1 0-2H20.59l3.7-3.71A1 1 0 0 1 25 10H41a1 1 0 0 1 0 2H25.41l-3.7 3.71A1 1 0 0 1 21 16zM16.59 32a1 1 0 0 1-.71-.29l-4-4a1 1 0 0 1 0-1.42l4-4a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L14 27l3.29 3.29a1 1 0 0 1-.7 1.71zM31.59 32a1 1 0 0 1-.71-1.71L34.17 27l-3.29-3.29a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 31.59 32zM22 32a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34l4-8a1 1 0 1 1 1.78.9l-4 8A1 1 0 0 1 22 32z" />
        </svg>
      ),
    },
    {
      title: 'SEO',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{ width: '42px', height: '42px' }}>
          <polygon fill="#8537d4" points="14.21 62.75 3.6 62.75 3.6 46.75 8.98 43.16 14.21 46.75" />
          <polygon fill="#6d4398" points="30.66 62.75 20.27 62.75 20.27 33.44 25.61 29.63 30.66 33.44" />
          <polygon fill="#663399" points="47.4 62.74 36.87 62.74 36.87 28.18 42.17 24.55 47.4 28.18" />
          <polygon fill="#d9f45f" points="64 62.72 53.46 62.72 53.46 21.44 58.84 17.67 64 21.44" />
          <polygon fill="#7a01f3" points="46.8 1.25 46.8 3.8 51.7 3.8 40.76 14.17 34.67 7.79 20.74 21.41 14.23 15.04 0 28.95 1.54 30.46 14.23 18.04 20.74 24.41 34.61 10.85 40.68 17.21 53.32 5.23 53.32 9.75 55.92 9.75 55.92 1.25" />
        </svg>
      ),
    },
    {
      title: 'Social Media Optimization',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '42px', height: '42px' }}>
          <rect width="201.278" height="152.434" x="10.826" y="1.649" fill="#8135ce" rx="17.298" />
          <path fill="#caccc2" d="M142.019,71.265,94.878,44.048a8.551,8.551,0,0,0-12.826,7.405v54.434a8.551,8.551,0,0,0,12.826,7.4l47.141-27.217A8.55,8.55,0,0,0,142.019,71.265Z" />
          <path fill="#663399" d="M435.814,188.362H94.271A21.167,21.167,0,0,0,73.1,209.529V392.515a21.167,21.167,0,0,0,21.167,21.167H232.477L408.158,509.2a9.1,9.1,0,0,0,12.291-12.439l-46.46-83.077h40.658a21.167,21.167,0,0,0,21.167-21.167Z" />
          <path fill="#8135ce" d="M350.794,67.193a297.934,297.934,0,0,0,66.98-26.82l60.35-33.15a15.562,15.562,0,0,1,23.05,13.64v250.12a15.559,15.559,0,0,1-23.05,13.64l-60.35-33.15a297.934,297.934,0,0,0-66.98-26.82Z" />
          <path fill="#d9f45f" d="M308.754,192.738V365.723a10.206,10.206,0,0,0,10.21,10.2h21.62a10.206,10.206,0,0,0,10.21-10.2V213.149Z" />
          <path fill="#d9f45f" d="M350.794,224.653V67.193c-.8.22-1.59.43-2.39.63a297.521,297.521,0,0,1-74.03,9.35,15.558,15.558,0,0,0-15.56,15.56v106.38a15.569,15.569,0,0,0,15.56,15.57A297.994,297.994,0,0,1,350.794,224.653Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '35px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Header (Exact styles: 13px uppercase #D9F45F + 40px white title) */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: 'var(--e-global-color-accent)',
              letterSpacing: '0.5px',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            What we offer
          </span>
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 600,
              color: 'var(--e-global-color-secondary)',
            }}
          >
            Our Core Services
          </h2>
        </div>

        {/* 5-Column Grid (repeat(5, 1fr) on desktop) */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
          }}
        >
          {servicesData.map((svc, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--e-global-color-4793e6c)',
                borderRadius: '10px',
                boxShadow: '1px 1px 5px 0px #663399',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              <div>
                <div style={{ marginBottom: '12px' }}>
                  {svc.icon}
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--e-global-color-secondary)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--e-global-color-text)',
                    lineHeight: 1.5,
                    marginBottom: '14px',
                  }}
                >
                  {svc.desc}
                </p>
              </div>

              {/* Learn more (row-reverse: text first, arrow second; color: #D9F45F) */}
              <div>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--e-global-color-accent)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span>Learn more</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 448 512"
                    fill="var(--e-global-color-accent)"
                    style={{ width: '12px', height: '12px' }}
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
