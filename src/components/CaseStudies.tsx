export type CaseStudy = {
  title: string
  excerpt: string
  tags: string[]
  linkHref: string
  /** Short badge label, e.g. "Featured", "Case study", "AI / ML" */
  badge?: string
  badgeBg?: string
  badgeColor?: string
  /** Visual hero for the card – gradient background color pair */
  visualBg?: string
  /** Large emoji / icon shown in the card visual area */
  visualIcon?: string
  /** Accent colour used for the link and top hover shimmer */
  accentColor?: string
  /** Up to 3 key metrics shown as chips in the visual */
  metrics?: { value: string; label: string; color?: string }[]
  /** Short outcome label shown in the footer */
  outcome?: string
}

const defaultCaseStudies: CaseStudy[] = [
  {
    title: 'FinScale cloud migration',
    excerpt:
      'Migrated a legacy on-premise stack to AWS with zero downtime, cutting infrastructure costs by 40% and reducing deployment time from days to minutes via CI/CD pipelines.',
    tags: ['AWS', 'Terraform', 'CI/CD', 'Docker'],
    linkHref: '#contact',
    badge: 'Featured',
    badgeBg: 'rgba(59,130,246,.12)',
    badgeColor: '#60A5FA',
    visualBg: 'linear-gradient(135deg, rgba(59,130,246,.12), rgba(6,182,212,.08))',
    visualIcon: '☁️',
    accentColor: '#60A5FA',
    metrics: [
      { value: '0', label: 'Downtime mins', color: '#60A5FA' },
      { value: '6wk', label: 'Migration', color: '#22D3EE' },
      { value: '↓40%', label: 'Infra cost', color: '#34D399' },
    ],
    outcome: '✓ Delivered on time',
  },
  {
    title: 'TrailSync mobile app',
    excerpt:
      'Built a cross-platform React Native app from wireframe to App Store in 10 weeks. Now serves 50k daily active users with 99.9% uptime and a 4.8-star rating.',
    tags: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
    linkHref: '#contact',
    badge: 'Case study',
    badgeBg: 'rgba(52,211,153,.1)',
    badgeColor: '#34D399',
    visualBg: 'linear-gradient(135deg, rgba(52,211,153,.1), rgba(6,182,212,.07))',
    visualIcon: '📱',
    accentColor: '#34D399',
    metrics: [
      { value: '50k', label: 'Daily users', color: '#34D399' },
      { value: '10wk', label: 'To launch', color: '#22D3EE' },
      { value: '4.8★', label: 'App Store', color: '#FBBF24' },
    ],
    outcome: '✓ Delivered on time',
  },
  {
    title: 'Loopify AI support pipeline',
    excerpt:
      'Designed and shipped a RAG-based support pipeline that resolved 38% of inbound tickets autonomously, reaching positive ROI within 3 months of deployment.',
    tags: ['OpenAI', 'LangChain', 'Pinecone', 'Python'],
    linkHref: '#contact',
    badge: 'AI / ML',
    badgeBg: 'rgba(192,132,252,.1)',
    badgeColor: '#C084FC',
    visualBg: 'linear-gradient(135deg, rgba(192,132,252,.1), rgba(59,130,246,.07))',
    visualIcon: '🤖',
    accentColor: '#C084FC',
    metrics: [
      { value: '↓38%', label: 'Support tickets', color: '#C084FC' },
      { value: '3mo', label: 'To ROI', color: '#60A5FA' },
      { value: '98%', label: 'Accuracy', color: '#34D399' },
    ],
    outcome: '✓ Delivered on time',
  },
]

export function CaseStudies({
  caseStudies = defaultCaseStudies,
  ctaHref = '#contact',
}: {
  caseStudies?: CaseStudy[]
  ctaHref?: string
}) {
  return (
    <section
      id="case-studies"
      style={{
        background: '#0A0F1E',
        color: '#F0F4FF',
        padding: '5.5rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glows */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 400, height: 400, top: -100, left: -50, borderRadius: '50%', filter: 'blur(120px)', background: 'rgba(59,130,246,0.07)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 350, height: 350, bottom: -80, right: -60, borderRadius: '50%', filter: 'blur(120px)', background: 'rgba(52,211,153,0.05)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '4px 14px',
                borderRadius: 100,
                border: '1px solid rgba(6,182,212,0.25)',
                background: 'rgba(6,182,212,0.07)',
                fontSize: 11,
                fontWeight: 700,
                color: '#67E8F9',
                letterSpacing: '.07em',
                textTransform: 'uppercase',
                marginBottom: '1.125rem',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#06B6D4',
                  animation: 'blink 2s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              Our work
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-.03em',
                lineHeight: 1.1,
                marginBottom: '.75rem',
              }}
            >
              Delivery{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                examples
              </span>
            </h2>

            <p style={{ fontSize: '.9375rem', color: 'rgba(240,244,255,.45)', maxWidth: 480, lineHeight: 1.75 }}>
              A quick look at the kinds of outcomes Jentek supports — from infrastructure to product.
            </p>
          </div>

          <a
            href={ctaHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '.875rem',
              fontWeight: 600,
              color: '#60A5FA',
              textDecoration: 'none',
              padding: '.5rem 1.125rem',
              border: '1px solid rgba(59,130,246,.3)',
              borderRadius: 8,
              transition: 'all .2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(59,130,246,.1)'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,.3)'
            }}
          >
            View all projects →
          </a>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          {caseStudies.map((c) => (
            <article
              key={c.title}
              style={{
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.07)',
                borderRadius: 18,
                overflow: 'hidden',
                transition: 'all .3s',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = 'rgba(255,255,255,.14)'
                el.style.background = 'rgba(255,255,255,.05)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'none'
                el.style.borderColor = 'rgba(255,255,255,.07)'
                el.style.background = 'rgba(255,255,255,.03)'
              }}
            >
              {/* Visual hero area */}
              <div
                style={{
                  height: 140,
                  background: c.visualBg ?? 'rgba(59,130,246,.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {/* Large faded icon */}
                {c.visualIcon && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                      opacity: 0.15,
                      filter: 'blur(2px)',
                    }}
                  >
                    {c.visualIcon}
                  </div>
                )}

                {/* Metric chips */}
                {c.metrics && c.metrics.length > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      gap: '.5rem',
                    }}
                  >
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          flex: 1,
                          background: 'rgba(10,15,30,.75)',
                          border: '1px solid rgba(255,255,255,.1)',
                          borderRadius: 10,
                          padding: '.5rem .75rem',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '1rem',
                            fontWeight: 800,
                            letterSpacing: '-.02em',
                            color: m.color ?? '#60A5FA',
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          style={{
                            fontSize: '.625rem',
                            textTransform: 'uppercase',
                            letterSpacing: '.07em',
                            color: 'rgba(240,244,255,.4)',
                            marginTop: 1,
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card body */}
              <div
                style={{
                  padding: '1.375rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Title + badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem' }}>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#F0F4FF',
                      letterSpacing: '-.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    {c.title}
                  </h3>
                  {c.badge && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        padding: '3px 9px',
                        borderRadius: 100,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        background: c.badgeBg ?? 'rgba(59,130,246,.12)',
                        color: c.badgeColor ?? '#60A5FA',
                      }}
                    >
                      {c.badge}
                    </span>
                  )}
                </div>

                {/* Excerpt */}
                <p style={{ fontSize: '.8125rem', color: 'rgba(240,244,255,.5)', lineHeight: 1.7, flex: 1 }}>
                  {c.excerpt}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.375rem' }}>
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '.6875rem',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 100,
                        border: '1px solid rgba(255,255,255,.08)',
                        color: 'rgba(240,244,255,.45)',
                        background: 'rgba(255,255,255,.03)',
                        letterSpacing: '.02em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '.875rem',
                    borderTop: '1px solid rgba(255,255,255,.06)',
                  }}
                >
                  <a
                    href={c.linkHref}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: '.8125rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      color: c.accentColor ?? '#60A5FA',
                      transition: 'gap .2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '9px')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '5px')}
                  >
                    Discuss a similar project <span aria-hidden="true">→</span>
                  </a>

                  {c.outcome && (
                    <span
                      style={{
                        fontSize: '.6875rem',
                        fontWeight: 600,
                        padding: '3px 9px',
                        borderRadius: 100,
                        background: 'rgba(52,211,153,.1)',
                        color: '#34D399',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {c.outcome}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}