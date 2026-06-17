import { type ReactNode } from 'react'

type Service = {
  title: string
  description: string
  icon: ReactNode
  tag?: string
  tagColor?: { bg: string; text: string }
  techStack?: string[]
  linkColor?: string
}

const defaultServices: Service[] = [
  {
    title: 'Full-stack web engineering',
    description:
      'React, Next.js, and Node.js applications built for speed, SEO, and long-term maintainability. API design, auth flows, and CMS integration included.',
    icon: '🌐',
    tag: 'Web development',
    tagColor: { bg: 'rgba(59,130,246,.12)', text: '#60A5FA' },
    techStack: ['React', 'Next.js', 'Node'],
    linkColor: '#60A5FA',
  },
  {
    title: 'Cloud infrastructure & CI/CD',
    description:
      'AWS, GCP, and Azure setups with IaC via Terraform. Zero-downtime pipelines, container orchestration, and monitoring built from day one.',
    icon: '☁️',
    tag: 'Cloud & DevOps',
    tagColor: { bg: 'rgba(6,182,212,.12)', text: '#22D3EE' },
    techStack: ['AWS', 'Terraform', 'Docker'],
    linkColor: '#22D3EE',
  },
  {
    title: 'Cross-platform mobile apps',
    description:
      'React Native apps that feel native on iOS and Android. Push notifications, offline mode, and app store deployment handled end-to-end.',
    icon: '📱',
    tag: 'Mobile',
    tagColor: { bg: 'rgba(52,211,153,.12)', text: '#34D399' },
    techStack: ['React Native', 'Expo'],
    linkColor: '#34D399',
  },
  {
    title: 'API & database architecture',
    description:
      'REST and GraphQL APIs designed for scale. PostgreSQL, Redis, and MongoDB with indexing strategies and query optimization baked in.',
    icon: '🗄️',
    tag: 'Backend',
    tagColor: { bg: 'rgba(192,132,252,.12)', text: '#C084FC' },
    techStack: ['PostgreSQL', 'GraphQL', 'Redis'],
    linkColor: '#C084FC',
  },
  {
    title: 'AI-powered feature development',
    description:
      'LLM integration, RAG pipelines, and embedding-based search built into your product. Practical AI features that ship, not proof-of-concepts.',
    icon: '🤖',
    tag: 'AI integration',
    tagColor: { bg: 'rgba(251,146,60,.12)', text: '#FB923C' },
    techStack: ['OpenAI', 'LangChain', 'Pinecone'],
    linkColor: '#FB923C',
  },
]

export function ServicesGrid({
  services = defaultServices,
  ctaHref = '#contact',
}: {
  services?: Service[]
  ctaHref?: string
}) {
  return (
    <section
      id="services"
      style={{ background: '#0A0F1E', color: '#F0F4FF', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}
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

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            {/* Eyebrow badge */}
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
                marginBottom: '1.25rem',
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
              What we do
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-.03em',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Services built for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                shipping
              </span>
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(240,244,255,.5)',
                maxWidth: 520,
                lineHeight: 1.75,
              }}
            >
              Full-stack delivery with a focus on maintainable architecture and real-world results.
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
              e.currentTarget.style.background = 'rgba(59,130,246,.12)'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,.3)'
            }}
          >
            All services →
          </a>
        </div>

        {/* Cards grid */}
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
            listStyle: 'none',
          }}
        >
          {services.map((s) => (
            <li key={s.title}>
              <article
                style={{
                  background: 'rgba(255,255,255,.03)',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 18,
                  padding: '1.75rem',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all .3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(59,130,246,.3)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.background = 'rgba(255,255,255,.05)'
                  const line = el.querySelector('.top-line') as HTMLElement
                  if (line) line.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,.08)'
                  el.style.transform = 'none'
                  el.style.background = 'rgba(255,255,255,.03)'
                  const line = el.querySelector('.top-line') as HTMLElement
                  if (line) line.style.opacity = '0'
                }}
              >
                {/* Top shimmer line */}
                <div
                  className="top-line"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background:
                      'linear-gradient(90deg, transparent, rgba(59,130,246,.35), rgba(6,182,212,.35), transparent)',
                    opacity: 0,
                    transition: 'opacity .3s',
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    marginBottom: '1.125rem',
                    background: s.tagColor?.bg ?? 'rgba(59,130,246,.12)',
                  }}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>

                {/* Tag */}
                {s.tag && (
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '.07em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: 100,
                      marginBottom: '.875rem',
                      background: s.tagColor?.bg ?? 'rgba(59,130,246,.12)',
                      color: s.tagColor?.text ?? '#60A5FA',
                    }}
                  >
                    {s.tag}
                  </span>
                )}

                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: '#F0F4FF',
                    marginBottom: '.625rem',
                    letterSpacing: '-.01em',
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: '.875rem',
                    color: 'rgba(240,244,255,.5)',
                    lineHeight: 1.7,
                    marginBottom: '1.375rem',
                  }}
                >
                  {s.description}
                </p>

                <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,.06)', marginBottom: '1.125rem' }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {s.techStack && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.5rem',
                        fontSize: '.75rem',
                        color: 'rgba(240,244,255,.3)',
                        flexWrap: 'wrap',
                      }}
                    >
                      {s.techStack.map((tech, i) => (
                        <span key={tech} style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                          {tech}
                          {i < s.techStack!.length - 1 && (
                            <span
                              aria-hidden="true"
                              style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(240,244,255,.2)', display: 'inline-block' }}
                            />
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={ctaHref}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: '.8125rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      color: s.linkColor ?? '#60A5FA',
                      transition: 'gap .2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '9px')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '5px')}
                  >
                    Ask us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </li>
          ))}

          {/* CTA card */}
          <li>
            <div
              style={{
                background: 'rgba(59,130,246,.05)',
                border: '1px solid rgba(59,130,246,.25)',
                borderRadius: 18,
                padding: '1.75rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#F0F4FF',
                  marginBottom: '.75rem',
                }}
              >
                Not sure what you need?
              </h3>
              <p
                style={{
                  fontSize: '.875rem',
                  color: 'rgba(240,244,255,.5)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}
              >
                Share your goals and we'll map the right approach — no sales pressure, just a straight technical answer.
              </p>
              <a
                href={ctaHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '.75rem 1.375rem',
                  background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                  color: '#fff',
                  fontSize: '.875rem',
                  fontWeight: 600,
                  borderRadius: 10,
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                  transition: 'all .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                Request a free scoping call →
              </a>
            </div>
          </li>
        </ul>
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