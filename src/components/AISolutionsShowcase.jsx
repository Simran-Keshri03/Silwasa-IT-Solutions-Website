import React, { useState } from 'react';

export default function AISolutionsShowcase() {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);

  const aiSolutionsData = [
    {
      id: 'autonomous-agents',
      title: 'Autonomous Agentic Workflows',
      badge: 'Agentic AI',
      desc: 'Self-directed AI agents engineered to execute multi-step business logic, evaluate intermediate results, call APIs, and complete complex operational workflows with zero human intervention.',
      metrics: '85% Faster Task Completion',
      capabilities: [
        'Multi-agent collaborative orchestration',
        'Dynamic tool & database execution',
        'Self-correcting error recovery loops',
        'Granular human-in-the-loop audit gates',
      ],
      interactiveDemo: {
        agentGoal: 'Automate weekly client billing & transaction reconciliation across Stripe and QuickBooks',
        steps: [
          'Agent extracts 142 unbilled ledger entries from database',
          'Generates itemized invoices adhering to client-specific discount tiers',
          'Validates tax compliance and executes Stripe payment captures',
          'Dispatches branded receipts & logs reconciled ledger into QuickBooks',
        ],
        status: 'Completed with 100% mathematical accuracy',
      },
    },
    {
      id: 'rag-chatbots',
      title: 'Enterprise RAG Chatbots',
      badge: 'Private LLM',
      desc: 'Context-aware conversational assistants trained on your proprietary enterprise documentation, contracts, and knowledge bases using dense vector embeddings for hallucinations-free responses.',
      metrics: '99.4% Retrieval Accuracy',
      capabilities: [
        'Private vector database ingestion (Pinecone / Qdrant)',
        'Zero training on public LLM corpuses (Data privacy)',
        'Omnichannel deployment (Web, WhatsApp, Slack)',
        'Direct footnote source citations on every answer',
      ],
      interactiveDemo: {
        agentGoal: 'Query 500-page internal corporate policy & technical architecture documentation',
        steps: [
          'User queries: "What is our disaster recovery RPO for the primary database?"',
          'Vector similarity search matches Section 4.2 in Architecture Runbook',
          'LLM synthesizes response: "Our maximum RPO is 15 minutes with automated multi-region snapshotting."',
          'Returns clickable verification link to source documentation',
        ],
        status: 'Sub-second response with verified source citations',
      },
    },
    {
      id: 'smart-automation',
      title: 'Smart Process Automation',
      badge: 'Intelligent RPA',
      desc: 'Replacing tedious manual data entry with cognitive machine vision, optical character recognition (OCR), and structured JSON transformation pipelines that integrate with legacy ERPs.',
      metrics: '70% Cost Reduction',
      capabilities: [
        'Multimodal invoice & PDF extraction',
        'Cross-platform webhook synchronizers',
        'Automated discrepancy & anomaly flags',
        'High-throughput bulk batch processing',
      ],
      interactiveDemo: {
        agentGoal: 'Extract supplier invoices received via email and sync into SAP inventory ledger',
        steps: [
          'Inbound email attachment detected and OCR parsed',
          'Extracts PO number, line items, unit costs, and tax IDs',
          'Cross-checks with existing purchase order in SAP',
          'Discrepancy < 0.01% - triggers auto-approval and payment queue',
        ],
        status: 'Zero manual touchpoints required',
      },
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics & Forecasting',
      badge: 'Machine Learning',
      desc: 'Custom supervised and unsupervised machine learning algorithms analyzing historical metrics to accurately predict customer churn, demand surges, and inventory thresholds.',
      metrics: '94% Forecast Accuracy',
      capabilities: [
        'Time-series demand forecasting',
        'Customer lifetime value & churn scoring',
        'Dynamic algorithmic pricing engines',
        'Real-time anomaly & fraud detection alerts',
      ],
      interactiveDemo: {
        agentGoal: 'Predict customer churn risk and trigger personalized retention actions',
        steps: [
          'Ingests 90 days of user session duration and login frequencies',
          'Flags 28 enterprise accounts exhibiting 40%+ drop in platform activity',
          'Generates tailored retention playbooks based on feature usage drop-offs',
          'Alerts account executives in Slack with 1-click meeting outreach',
        ],
        status: 'Proactive retention triggered 30 days before renewal',
      },
    },
  ];

  const aiSearchData = [
    {
      id: 'geo',
      title: 'Generative Engine Optimization (GEO)',
      engine: 'Google AI Overviews & Microsoft Copilot',
      tagline: 'Engineering content to be synthesized directly into generative AI summaries.',
      description: 'Unlike traditional SEO that solely optimizes for blue link clicks, GEO optimizes for generative AI synthesis. We structure fact-dense entity blocks, semantic schema graphs, and expert consensus that AI models select as their primary knowledge base source.',
      corePillars: [
        'Fact-Dense Modular Knowledge: Structured data tables and high-information-gain statistics',
        'Entity Authority Graphs: Clear Wikidata and Knowledge Graph mapping for your brand',
        'Consensus Alignment: Cross-referencing industry consensus so AI models deem your claims verified',
        'AI Summary Inclusion Tracking: Continuous monitoring of Google AI Overview appearances',
      ],
      impact: 'Up to 3.8x higher brand recall in generative search over competitors relying solely on legacy SEO.',
    },
    {
      id: 'aeo',
      title: 'Answer Engine Optimization (AEO)',
      engine: 'Perplexity AI & Claude Search',
      tagline: 'Winning direct answer placement on conversational search engines.',
      description: 'Perplexity, ChatGPT Search, and voice assistants operate on direct question-and-answer retrieval. We formulate your digital assets to answer user questions concisely with verified citations, ensuring your brand is the cited authority.',
      corePillars: [
        'Direct Q&A Schema Formats: Exact question matching paired with direct, authoritative answers',
        'Conversational Query Mapping: Capturing natural language long-tail conversational prompts',
        'Citation Footprint Seeding: Generating credible external citations that answer engines index',
        'Microdata Architecture: JSON-LD Speakable & FAQPage schemas for instant voice engine ingestion',
      ],
      impact: '#1 cited source on Perplexity AI for target high-value industry queries.',
    },
    {
      id: 'llm-seo',
      title: 'ChatGPT & LLM Search Optimization',
      engine: 'ChatGPT Search & Large Language Models',
      tagline: 'Ensuring your brand is recommended when users ask LLMs for solutions.',
      description: 'When potential buyers ask ChatGPT "Which company should I hire for enterprise web engineering in 2026?", LLM SEO ensures your business is prominently cited, recommended, and framed as an established market leader.',
      corePillars: [
        'Vector Context Association: Establishing strong semantic proximity between your brand and core services',
        'Digital PR & Authoritative Co-citations: Getting listed on platforms and databases LLMs crawl',
        'Brand Narrative Calibration: Ensuring AI sentiment towards your company is overwhelmingly positive',
        'Multi-Model Presence Audits: Tracking recommendations across GPT-4o, Claude 3.5, and Gemini Pro',
      ],
      impact: 'Consistent brand inclusion across leading LLM recommendation prompts.',
    },
  ];

  const activeDemo = aiSolutionsData[selectedDemoIndex];

  return (
    <section
      id="ai-solutions"
      style={{
        backgroundColor: 'var(--e-global-color-2dc5e2b)',
        paddingTop: '60px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient purple background glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(102, 51, 153, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(217, 244, 95, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                border: '1px solid rgba(217, 244, 95, 0.3)',
              }}
            >
              NEXT-GENERATION ARTIFICIAL INTELLIGENCE
            </span>
          </div>

          <h2
            style={{
              fontSize: '40px',
              fontWeight: 700,
              color: 'var(--e-global-color-secondary)',
              lineHeight: 1.25,
              marginBottom: '16px',
            }}
          >
            AI Solutions & Generative Search Dominance
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
            Supercharge your business with autonomous agentic workflows, fine-tuned enterprise LLMs, and position your brand as the primary cited authority across ChatGPT, Perplexity, and Google AI Overviews.
          </p>

          {/* Interactive Dual Pillar Switcher */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'var(--e-global-color-4793e6c)',
              borderRadius: '40px',
              padding: '6px',
              marginTop: '28px',
              border: '1px solid rgba(102, 51, 153, 0.5)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('ai-solutions')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-main)',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                backgroundColor: activeTab === 'ai-solutions' ? 'var(--e-global-color-primary)' : 'transparent',
                color: activeTab === 'ai-solutions' ? '#FFFFFF' : 'var(--e-global-color-text)',
                boxShadow: activeTab === 'ai-solutions' ? '0 0 14px rgba(102, 51, 153, 0.6)' : 'none',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>AI-Powered Business Solutions</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ai-search')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-main)',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                backgroundColor: activeTab === 'ai-search' ? 'var(--e-global-color-primary)' : 'transparent',
                color: activeTab === 'ai-search' ? '#FFFFFF' : 'var(--e-global-color-text)',
                boxShadow: activeTab === 'ai-search' ? '0 0 14px rgba(102, 51, 153, 0.6)' : 'none',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>AI Search Optimization (GEO / AEO / LLM)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: AI-POWERED SOLUTIONS SHOWCASE */}
        {activeTab === 'ai-solutions' && (
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px',
                marginBottom: '32px',
              }}
            >
              {aiSolutionsData.map((item, index) => {
                const isSelected = selectedDemoIndex === index;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDemoIndex(index)}
                    style={{
                      backgroundColor: 'var(--e-global-color-4793e6c)',
                      border: isSelected
                        ? '2px solid var(--e-global-color-accent)'
                        : '2px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isSelected
                        ? '0 0 18px rgba(217, 244, 95, 0.25), 0 8px 24px rgba(0,0,0,0.5)'
                        : '0 4px 12px rgba(0,0,0,0.4)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.6px',
                            color: 'var(--e-global-color-accent)',
                            backgroundColor: 'rgba(217, 244, 95, 0.1)',
                            border: '1px solid rgba(217, 244, 95, 0.25)',
                            padding: '3px 10px',
                            borderRadius: '12px',
                          }}
                        >
                          {item.badge}
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#06FF25',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          ● {item.metrics}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '19px',
                          fontWeight: 700,
                          color: isSelected ? 'var(--e-global-color-accent)' : 'var(--e-global-color-secondary)',
                          marginBottom: '10px',
                          lineHeight: 1.3,
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '13.5px',
                          color: 'var(--e-global-color-text)',
                          lineHeight: 1.55,
                          marginBottom: '18px',
                        }}
                      >
                        {item.desc}
                      </p>

                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.capabilities.map((cap, cIdx) => (
                          <li
                            key={cIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '12.5px',
                              color: 'rgba(255, 255, 255, 0.85)',
                            }}
                          >
                            <svg viewBox="0 0 20 20" fill="var(--e-global-color-accent)" style={{ width: '15px', height: '15px', flexShrink: 0, marginTop: '2px' }}>
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '12px', color: isSelected ? 'var(--e-global-color-accent)' : 'var(--e-global-color-text)' }}>
                        {isSelected ? '✦ Live Architecture Active' : 'Click to inspect execution'}
                      </span>
                      <span style={{ fontSize: '13px', color: 'var(--e-global-color-accent)' }}>→</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Agent Execution Sandbox Card */}
            {activeDemo && (
              <div
                style={{
                  backgroundColor: '#0F0E0E',
                  borderRadius: '12px',
                  border: '1px solid var(--e-global-color-primary)',
                  boxShadow: '0 0 25px rgba(102, 51, 153, 0.35)',
                  padding: '24px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#06FF25', boxShadow: '0 0 8px #06FF25' }} />
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.5px' }}>
                      SILWASA AGENT ENGINE — {activeDemo.title.toUpperCase()}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--e-global-color-accent)', backgroundColor: 'rgba(217, 244, 95, 0.1)', padding: '4px 12px', borderRadius: '20px' }}>
                    Status: {activeDemo.interactiveDemo.status}
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>
                    Operational Objective
                  </span>
                  <div style={{ fontSize: '15px', color: 'var(--e-global-color-secondary)', fontWeight: 600 }}>
                    "{activeDemo.interactiveDemo.agentGoal}"
                  </div>
                </div>

                {/* Step-by-step reasoning log */}
                <div style={{ backgroundColor: '#070707', borderRadius: '8px', padding: '16px 20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ fontSize: '11px', color: 'var(--e-global-color-accent)', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '10px' }}>
                    Automated Execution Pipeline Log:
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {activeDemo.interactiveDemo.steps.map((step, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <span style={{ color: 'var(--e-global-color-primary)', fontWeight: 700, fontSize: '12px', fontFamily: 'monospace' }}>
                          [{String(sIdx + 1).padStart(2, '0')}]
                        </span>
                        <span style={{ color: '#E0E0E0', fontSize: '13.5px', lineHeight: 1.45 }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: AI SEARCH OPTIMIZATION (GEO / AEO / LLM) */}
        {activeTab === 'ai-search' && (
          <div>
            {/* Paradigm Comparison Banner */}
            <div
              style={{
                backgroundColor: 'var(--e-global-color-4793e6c)',
                borderRadius: '12px',
                border: '1px solid rgba(102, 51, 153, 0.4)',
                padding: '24px 28px',
                marginBottom: '32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px',
              }}
            >
              <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.08)', paddingRight: '20px' }}>
                <span style={{ fontSize: '11px', color: '#ff6b6b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', display: 'block', marginBottom: '6px' }}>
                  The Old Paradigm (Losing Visibility)
                </span>
                <h4 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '8px' }}>
                  Traditional 2015-Era SEO
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--e-global-color-text)', lineHeight: 1.5 }}>
                  Over-reliance on backlink counts and keyword repetition. Zero-click generative engines answer user queries instantly without the user ever clicking your website link.
                </p>
              </div>

              <div>
                <span style={{ fontSize: '11px', color: 'var(--e-global-color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', display: 'block', marginBottom: '6px' }}>
                  The Silwasa Advantage (Dominating Tomorrow)
                </span>
                <h4 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '8px' }}>
                  Generative & Answer Engine Optimization (GEO/AEO)
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--e-global-color-text)', lineHeight: 1.5 }}>
                  Engineering entity consensus, dense semantic facts, and vector knowledge structures so Google AI Overviews, Perplexity, and ChatGPT recommend your brand as the definitive industry answer.
                </p>
              </div>
            </div>

            {/* 3 Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
                gap: '24px',
              }}
            >
              {aiSearchData.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--e-global-color-4793e6c)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--e-global-color-accent)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(217, 244, 95, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          color: 'var(--e-global-color-accent)',
                          backgroundColor: 'rgba(217, 244, 95, 0.12)',
                          padding: '3px 8px',
                          borderRadius: '10px',
                        }}
                      >
                        {item.engine}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '13px', color: 'var(--e-global-color-accent)', fontWeight: 600, marginBottom: '12px' }}>
                      {item.tagline}
                    </p>

                    <p style={{ fontSize: '13.5px', color: 'var(--e-global-color-text)', lineHeight: 1.55, marginBottom: '20px' }}>
                      {item.description}
                    </p>

                    <div style={{ marginBottom: '20px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '10px' }}>
                        Strategic Pillars:
                      </span>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.corePillars.map((pillar, pIdx) => (
                          <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.8)' }}>
                            <span style={{ color: 'var(--e-global-color-accent)', fontWeight: 700 }}>✓</span>
                            <span>{pillar}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    style={{
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: 'rgba(102, 51, 153, 0.1)',
                      borderRadius: '6px',
                      padding: '12px 14px',
                      marginTop: '16px',
                    }}
                  >
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)', display: 'block', marginBottom: '2px' }}>
                      Demonstrated Impact:
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--e-global-color-accent)' }}>
                      {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Action Banner */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            backgroundColor: 'var(--e-global-color-4793e6c)',
            borderRadius: '12px',
            border: '1px solid var(--e-global-color-primary)',
            padding: '24px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ textAlign: 'left', maxWidth: '680px' }}>
            <h4 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 600, marginBottom: '6px' }}>
              Want to deploy autonomous agents or audit your AI search visibility?
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--e-global-color-text)', margin: 0 }}>
              Speak directly with our senior AI engineers to evaluate feasibility, data privacy protocols, and expected business ROI.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-primary"
            style={{
              fontSize: '15px',
              padding: '12px 24px',
              whiteSpace: 'nowrap',
            }}
          >
            Schedule AI Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

