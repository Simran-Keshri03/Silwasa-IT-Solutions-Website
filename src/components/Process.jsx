import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Consultation',
      desc: 'We initiate every engagement with a strategic technical audit, identifying commercial bottlenecks, stakeholder expectations, and system feasibility.',
      deliverables: ['Stakeholder discovery workshops', 'Commercial feasibility report', 'High-level project scope outline'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Requirement Analysis',
      desc: 'Deep-dive functional mapping, user persona formulations, and data flow modeling to establish an unambiguous specification document.',
      deliverables: ['Software Requirements Specification (SRS)', 'Database entity relationship diagram', 'API endpoints specification'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Planning & Architecture',
      desc: 'Architecting scalable cloud microservices, database schemas, security protocols, and defining two-week agile sprint milestones.',
      deliverables: ['Cloud infrastructure blueprint (AWS/GCP)', 'Sprint release calendar & milestones', 'Cybersecurity & compliance baseline'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'UI/UX Design',
      desc: 'Creating human-centered wireframes, interactive Figma prototypes, and cohesive design systems following accessibility guidelines.',
      deliverables: ['Figma design system & tokens', 'Interactive clickable mobile/web prototypes', 'Usability testing validation feedback'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Development',
      desc: 'Writing clean, modular code in two-week agile sprints. Clients receive weekly demo builds and full access to private GitHub repositories.',
      deliverables: ['Clean, tested TypeScript/React/Node code', 'Weekly staging deployment previews', 'Private GitHub repository access'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Testing & Quality Assurance',
      desc: 'Rigorous automated unit testing, end-to-end user journey simulation, security vulnerability scans, and cross-browser responsiveness tests.',
      deliverables: ['Automated CI/CD test passes (95%+ coverage)', 'Cross-browser & mobile device test reports', 'OWASP vulnerability audit certification'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      num: '07',
      title: 'Deployment & Go-Live',
      desc: 'Zero-downtime blue/green cloud production rollout, automated SSL configuration, edge CDN caching, and live traffic telemetry monitoring.',
      deliverables: ['Zero-downtime production deployment', 'SSL & DNS propagation verification', 'CloudWatch / Datadog live telemetry setup'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      num: '08',
      title: 'Training & Ongoing Support',
      desc: 'Comprehensive administrative onboarding, complete technical documentation handover, and proactive 24/7 SLA maintenance care.',
      deliverables: ['Live staff training video sessions', 'Admin handover runbook & documentation', 'Proactive 24/7 SLA maintenance care'],
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      style={{
        backgroundColor: 'var(--e-global-color-4793e6c)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
              8-STEP AGILE METHODOLOGY
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
            How We Deliver Digital Excellence
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
            A disciplined, transparent 8-phase software engineering lifecycle engineered to mitigate risk, deliver predictable sprint milestones, and build scalable digital solutions on schedule.
          </p>
        </div>

        {/* 8 Cards Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {steps.map((st, i) => (
            <div
              key={i}
              className="process-card"
              style={{
                backgroundColor: 'var(--e-global-color-2dc5e2b)',
                border: '1px solid rgba(102, 51, 153, 0.4)',
                borderRadius: '12px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(217, 244, 95, 0.2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(102, 51, 153, 0.4)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Step Number & Icon */}
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
                      fontSize: '32px',
                      fontWeight: 800,
                      color: 'var(--e-global-color-accent)',
                      lineHeight: 1,
                      letterSpacing: '-1px',
                    }}
                  >
                    {st.num}
                  </span>

                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(102, 51, 153, 0.2)',
                      border: '1px solid var(--e-global-color-primary)',
                      color: 'var(--e-global-color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {st.icon}
                  </div>
                </div>

                {/* Step Title */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--e-global-color-secondary)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {st.title}
                </h3>

                {/* Step Description */}
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--e-global-color-text)',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                  }}
                >
                  {st.desc}
                </p>

                {/* Deliverables checklist */}
                <div style={{ marginTop: 'auto' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.5)',
                      display: 'block',
                      marginBottom: '6px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Key Milestone Outputs:
                  </span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {st.deliverables.map((del, dIdx) => (
                      <li
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px',
                          fontSize: '12px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.35,
                        }}
                      >
                        <span style={{ color: 'var(--e-global-color-accent)', fontWeight: 700 }}>•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>Phase {st.num} of 08</span>
                <span style={{ color: 'var(--e-global-color-accent)' }}>Agile Sprint</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
