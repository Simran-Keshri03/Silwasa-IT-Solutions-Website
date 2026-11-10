import React, { useState } from 'react';

const SERVICE_OPTIONS = [
  'AI-Powered Solutions & Autonomous Agents',
  'Generative Engine Optimization (GEO, AEO & LLM SEO)',
  'Custom Website Development & E-Commerce',
  'Mobile App Development (iOS, Android, Cross-Platform)',
  'UI/UX Design & Rapid Prototyping',
  'Custom Software & Enterprise ERP/CRM Systems',
  'DevOps Automation & Cloud Infrastructure',
  'API Integration & Middleware Engineering',
  'Website Maintenance, Security & SLA Support',
  'Digital Marketing, SEO & Performance Advertising',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [notice, setNotice] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (notice) setNotice(null);
  };

  const handleSelectService = (serviceName) => {
    setFormData((prev) => ({ ...prev, service: serviceName }));
    if (notice) setNotice(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Required fields validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      setNotice({
        type: 'error',
        title: 'Missing Required Fields',
        text: 'Please fill in all mandatory fields marked with an asterisk (*).',
      });
      setIsSubmitting(false);
      return;
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setNotice({
        type: 'error',
        title: 'Invalid Email Address',
        text: 'Please enter a valid business email address (e.g., name@company.com).',
      });
      setIsSubmitting(false);
      return;
    }

    // 3. Phone format validation (7 to 15 digits)
    const cleanedPhone = formData.phone.replace(/[\s\-()+]/g, '');
    if (!/^\d{7,15}$/.test(cleanedPhone)) {
      setNotice({
        type: 'error',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid contact phone number with country/area code (7 to 15 digits).',
      });
      setIsSubmitting(false);
      return;
    }

    // 4. Honest, transparent status feedback:
    // Do NOT claim the message was emailed or delivered when running as a frontend-only client.
    const inquiryPayload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      companyName: formData.companyName.trim() || 'Not specified',
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      service: formData.service || 'General Inquiry',
      message: formData.message.trim() || 'No additional message provided',
      submittedAt: new Date().toISOString(),
    };

    // Log payload for developer debugging / future backend webhook wiring
    console.info('Silwasa Contact Form — Validated Payload (Ready for Backend API):', inquiryPayload);

    setNotice({
      type: 'success',
      title: 'Frontend Validation Passed',
      text: 'Form data verified successfully! Notice: This website is running in frontend mode without an active email backend API. To submit live, integrate an API endpoint (e.g. Node/Express, Cloud Functions, or Resend). For immediate inquiries, please reach us directly via WhatsApp or phone.',
    });

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Silwasa IT Solutions"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Enclosing Card Container */}
        <div
          className="contact-card-container"
          style={{
            backgroundColor: 'var(--e-global-color-4793e6c)',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.25fr',
            gap: '48px',
            alignItems: 'start',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          {/* Left Column: Contact Channels, Office Info & Consultation CTA */}
          <div>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--e-global-color-accent)',
                display: 'inline-block',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px',
              }}
            >
              Get In Touch
            </span>

            <h2
              style={{
                fontSize: '38px',
                fontWeight: 700,
                color: 'var(--e-global-color-secondary)',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              Let&apos;s engineer your next digital solution
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: 'var(--e-global-color-text)',
                lineHeight: 1.65,
                marginBottom: '28px',
              }}
            >
              Have a web application to build, a mobile app to launch, or want to audit your Generative Engine Visibility? Connect directly with our engineering leads in Rohini, New Delhi.
            </p>

            {/* Direct Contact Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
              {/* Call Channel */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '2px solid var(--e-global-color-primary)',
                    backgroundColor: 'rgba(102, 51, 153, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--e-global-color-accent)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '17px', height: '17px' }}>
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Direct Telephone
                  </div>
                  <a
                    href="tel:+917070717794"
                    style={{ fontSize: '16px', fontWeight: 600, color: 'var(--e-global-color-secondary)', textDecoration: 'none' }}
                  >
                    +91-7070717794
                  </a>
                </div>
              </div>

              {/* Email Channel */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '2px solid var(--e-global-color-primary)',
                    backgroundColor: 'rgba(102, 51, 153, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--e-global-color-accent)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '17px', height: '17px' }}>
                    <path d="M502.3 190.8L327.4 330.4c-40.4 32.2-96.4 32.2-136.8 0L7.7 190.8C2.8 186.9 0 181 0 174.8V448c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V174.8c0 6.2-2.8 12.1-7.7 16zM480 96H32c-17.7 0-32 14.3-32 32 0 8.3 3.2 16.3 9 22.3l192 153.6c28.9 23.1 68.9 23.1 97.8 0l192-153.6c5.8-6 9-14 9-22.3 0-17.7-14.3-32-32-32z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Email Inquiries
                  </div>
                  <a
                    href="mailto:info@silwasa.com"
                    style={{ fontSize: '16px', fontWeight: 600, color: 'var(--e-global-color-secondary)', textDecoration: 'none' }}
                  >
                    info@silwasa.com
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '2px solid var(--e-global-color-primary)',
                    backgroundColor: 'rgba(102, 51, 153, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--e-global-color-accent)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '17px', height: '17px' }}>
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Headquarters
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--e-global-color-secondary)' }}>
                    Rohini, New Delhi, India
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Booking CTA Card */}
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid #2A2B28',
                borderRadius: '10px',
                padding: '18px 20px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--e-global-color-accent)', fontSize: '14px' }}>⚡</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--e-global-color-secondary)' }}>
                  Book a Technical Discovery Consultation
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, marginBottom: '14px' }}>
                Schedule a 1-on-1 architecture call with our technical team to discuss project requirements, tech stack recommendations, and delivery timelines.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/917070717794?text=Hello%20Silwasa%20IT%2C%20I%20would%20like%20to%20book%20a%20technical%20discovery%20consultation%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '8px 16px',
                    fontSize: '13px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>WhatsApp Direct Consult</span>
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="mailto:info@silwasa.com?subject=Technical%20Discovery%20Consultation%20Request"
                  style={{
                    padding: '8px 16px',
                    fontSize: '13px',
                    color: 'var(--e-global-color-accent)',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--e-global-color-accent)',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--e-global-color-accent)';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--e-global-color-accent)';
                  }}
                >
                  <span>Email Appointment</span>
                </a>
              </div>
            </div>

            {/* Quick Response Guarantee Note */}
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--e-global-color-accent)' }}></span>
              <span>Average engineering response time: under 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              borderRadius: '12px',
              boxShadow: '0 0 2px 0px #663399',
              border: '1px solid rgba(102, 51, 153, 0.3)',
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--e-global-color-secondary)', marginBottom: '4px' }}>
                Request Project Quotation
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>
                Fill out the specifications below. Our solutions architects will review your scope and provide a structured proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Status / Notice Banner */}
              {notice && (
                <div
                  role="alert"
                  aria-live="polite"
                  style={{
                    backgroundColor: notice.type === 'error' ? 'rgba(207, 46, 46, 0.15)' : 'rgba(102, 51, 153, 0.25)',
                    border: `1px solid ${notice.type === 'error' ? '#cf2e2e' : 'var(--e-global-color-accent)'}`,
                    color: notice.type === 'error' ? '#ff6b6b' : 'var(--e-global-color-secondary)',
                    padding: '14px 16px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: '4px', color: notice.type === 'error' ? '#ff6b6b' : 'var(--e-global-color-accent)' }}>
                    {notice.title}
                  </div>
                  <div>{notice.text}</div>
                </div>
              )}

              {/* Row 1: Name fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                <div>
                  <label htmlFor="contact-first-name" style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                    First Name <span style={{ color: 'var(--e-global-color-accent)' }}>*</span>
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    name="firstName"
                    placeholder="e.g. Alex"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                    Last Name <span style={{ color: 'var(--e-global-color-accent)' }}>*</span>
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    name="lastName"
                    placeholder="e.g. Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Row 2: Company Name (New) */}
              <div>
                <label htmlFor="contact-company-name" style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                  Company / Organization Name <span style={{ color: 'rgba(255,255,255,0.4)' }}>(Optional)</span>
                </label>
                <input
                  id="contact-company-name"
                  type="text"
                  name="companyName"
                  placeholder="e.g. Acme Corporation or Startup Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Row 3: Phone & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                <div>
                  <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                    Phone Number <span style={{ color: 'var(--e-global-color-accent)' }}>*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                    Business Email <span style={{ color: 'var(--e-global-color-accent)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Row 4: Service Selector (All 10 Service Pillars) */}
              <div>
                <label htmlFor="contact-service" style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                  Interested Service Pillar
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                  style={{
                    backgroundColor: 'var(--e-global-color-4793e6c)',
                    color: formData.service ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  <option value="" disabled>
                    Select a Service Category...
                  </option>
                  {SERVICE_OPTIONS.map((srv, idx) => (
                    <option key={idx} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>

                {/* Quick-select pills for popular topics */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', alignSelf: 'center' }}>Popular:</span>
                  {[
                    'AI-Powered Solutions & Autonomous Agents',
                    'Generative Engine Optimization (GEO, AEO & LLM SEO)',
                    'Custom Website Development & E-Commerce',
                  ].map((pop, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectService(pop)}
                      style={{
                        background: formData.service === pop ? 'var(--e-global-color-primary)' : '#2A2B28',
                        color: formData.service === pop ? '#FFFFFF' : 'var(--e-global-color-accent)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '3px 8px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {idx === 0 ? 'AI Solutions' : idx === 1 ? 'GEO / LLM SEO' : 'Custom Web'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Project Scope Message */}
              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                  Project Description & Requirements
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project goals, estimated timeline, required features, or target launch date..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button & Disclaimer */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '13px 20px',
                    fontSize: '15px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? 'Validating...' : 'Submit Inquiry / Request Quote'}
                </button>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', textAlign: 'center', marginTop: '10px' }}>
                  🔒 We respect client privacy. Zero unsolicited communication or third-party sharing.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-card-container {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .contact-card-container {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
