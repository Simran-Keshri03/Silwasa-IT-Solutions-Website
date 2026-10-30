import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [notice, setNotice] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (notice) setNotice(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      setNotice({
        type: 'error',
        text: 'Please fill in all required fields marked with *.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setNotice({
        type: 'error',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    const cleanedPhone = formData.phone.replace(/[\s\-()+]/g, '');
    if (!/^\d{7,15}$/.test(cleanedPhone)) {
      setNotice({
        type: 'error',
        text: 'Please enter a valid phone number (7 to 15 digits).',
      });
      return;
    }

    // Explicitly identify frontend-only validation per project guidelines without displaying fake backend success
    setNotice({
      type: 'info',
      text: 'Frontend form validation passed. Notice: Backend API integration is required to send messages.',
    });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '32px',
        paddingBottom: '32px',
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Enclosing Card Container (elementor-element-458ee66: bg #151414, border-radius 16px, padding 2rem) */}
        <div
          className="contact-card-container"
          style={{
            backgroundColor: 'var(--e-global-color-4793e6c)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Contact Info & WhatsApp Quick Connect */}
          <div>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--e-global-color-accent)',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Get In Touch
            </span>

            <h2
              style={{
                fontSize: '40px',
                fontWeight: 600,
                color: 'var(--e-global-color-secondary)',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              Lets talk about your project
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: 'var(--e-global-color-text)',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            </p>

            {/* Contact Items (Circular framed purple icons) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {/* Call Now */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '2px solid var(--e-global-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--e-global-color-primary)',
                    flexShrink: 0,
                  }}
                >
                  <svg aria-hidden="true" viewBox="0 0 512 512" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--e-global-color-text)', textTransform: 'uppercase' }}>
                    Call Now
                  </div>
                  <a
                    href="tel:+917070717794"
                    style={{ fontSize: '16px', fontWeight: 600, color: 'var(--e-global-color-secondary)', textDecoration: 'none' }}
                  >
                    +91-7070717794
                  </a>
                </div>
              </div>

              {/* Mail Us */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '2px solid var(--e-global-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--e-global-color-primary)',
                    flexShrink: 0,
                  }}
                >
                  <svg aria-hidden="true" viewBox="0 0 512 512" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path d="M502.3 190.8L327.4 330.4c-40.4 32.2-96.4 32.2-136.8 0L7.7 190.8C2.8 186.9 0 181 0 174.8V448c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V174.8c0 6.2-2.8 12.1-7.7 16zM480 96H32c-17.7 0-32 14.3-32 32 0 8.3 3.2 16.3 9 22.3l192 153.6c28.9 23.1 68.9 23.1 97.8 0l192-153.6c5.8-6 9-14 9-22.3 0-17.7-14.3-32-32-32z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--e-global-color-text)', textTransform: 'uppercase' }}>
                    Mail Us
                  </div>
                  <a
                    href="mailto:hello@silwasa.com"
                    style={{ fontSize: '16px', fontWeight: 600, color: 'var(--e-global-color-secondary)', textDecoration: 'none' }}
                  >
                    hello@silwasa.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '2px solid var(--e-global-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--e-global-color-primary)',
                    flexShrink: 0,
                  }}
                >
                  <svg aria-hidden="true" viewBox="0 0 384 512" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--e-global-color-text)', textTransform: 'uppercase' }}>
                    Location
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--e-global-color-secondary)' }}>
                    Rohini New delhi, india
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect WhatsApp Box (elementor-element-f87e530: padding 7px, border 2px solid #D9F45F, border-radius 6px) */}
            <div
              style={{
                border: '2px solid var(--e-global-color-accent)',
                borderRadius: '6px',
                padding: '7px 12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <a
                href="https://wa.me/917070717794"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--e-global-color-accent)',
                  fontSize: '17px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <svg
                  viewBox="0 0 448 512"
                  fill="#39FC4D"
                  style={{ width: '26px', height: '26px', flexShrink: 0 }}
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>Chat On whatsapp →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (elementor-element-ab99952: border-radius 10px, box-shadow 0 0 2px #663399, padding 1.5rem) */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '10px',
              boxShadow: '0 0 2px 0px #663399',
            }}
          >
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {notice && (
                <div
                  style={{
                    backgroundColor: notice.type === 'error' ? 'rgba(207, 46, 46, 0.15)' : 'rgba(102, 51, 153, 0.25)',
                    border: `1px solid ${notice.type === 'error' ? '#cf2e2e' : 'var(--e-global-color-primary)'}`,
                    color: notice.type === 'error' ? '#ff6b6b' : 'var(--e-global-color-accent)',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    fontSize: '13px',
                    lineHeight: 1.5,
                  }}
                >
                  {notice.text}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                  style={{
                    backgroundColor: 'var(--e-global-color-4793e6c)',
                    color: formData.service ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <option value="" disabled>
                    Choose Service
                  </option>
                  <option value="Web Designing">Web Designing</option>
                  <option value="Custom Web development">Custom Web development</option>
                  <option value="E-Commerce solutions">E-Commerce solutions</option>
                  <option value="SEO">SEO</option>
                  <option value="Social Media Optimization">Social Media Optimization</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '12px 20px', fontSize: '15px' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-card-container {
            padding: 1rem !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
