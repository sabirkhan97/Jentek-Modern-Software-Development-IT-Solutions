export type Testimonial = {
  quote: string
  author: string
  role: string
  avatarUrl?: string
  /** Gradient for the avatar fallback, e.g. 'linear-gradient(135deg,#3B82F6,#06B6D4)' */
  avatarGradient?: string
  tag?: string
  tagVariant?: 'blue' | 'green' | 'purple'
  /** Whether to visually feature this card (top border glow) */
  featured?: boolean
}

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  blue:   { bg: 'rgba(59,130,246,.12)',   color: '#60A5FA' },
  green:  { bg: 'rgba(52,211,153,.12)',   color: '#34D399' },
  purple: { bg: 'rgba(192,132,252,.12)',  color: '#C084FC' },
}

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #3B82F6, #06B6D4)',
  'linear-gradient(135deg, #34D399, #06B6D4)',
  'linear-gradient(135deg, #C084FC, #60A5FA)',
]

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#FBBF24', fontSize: 13 }} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export function Testimonials({
  testimonials,
  ctaHref = '#contact',
}: {
  testimonials: Testimonial[]
  ctaHref?: string
}) {
  return (
    <section
      id="testimonials"
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
      {[
        { top: -100, left: -100, bg: 'rgba(59,130,246,0.07)' },
        { bottom: -100, right: -100, bg: 'rgba(6,182,212,0.06)' },
      ].map((g, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            background: g.bg,
            ...(g.top !== undefined ? { top: g.top } : {}),
            ...(g.bottom !== undefined ? { bottom: (g as any).bottom } : {}),
            ...(g.left !== undefined ? { left: g.left } : {}),
            ...(g.right !== undefined ? { right: (g as any).right } : {}),
          }}
        />
      ))}

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header row */}
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
            {/* Eyebrow */}
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
              Client stories
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
              What clients{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                say about us
              </span>
            </h2>

            <p
              style={{
                fontSize: '.9375rem',
                color: 'rgba(240,244,255,.45)',
                maxWidth: 480,
                lineHeight: 1.75,
              }}
            >
              Reliable delivery, clear communication, and quality outcomes — every time.
            </p>
          </div>

          {/* Aggregate rating */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} aria-hidden="true" style={{ color: '#FBBF24', fontSize: 16 }}>★</span>
              ))}
            </div>
            <span style={{ fontSize: '.75rem', color: 'rgba(240,244,255,.35)', whiteSpace: 'nowrap' }}>
              4.9 / 5.0 · 40+ reviews
            </span>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          {testimonials.map((t, idx) => {
            const tagStyle = TAG_STYLES[t.tagVariant ?? 'blue']
            const avatarGrad = t.avatarGradient ?? AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length]

            return (
              <figure
                key={t.author}
                style={{
                  background: t.featured ? 'rgba(59,130,246,.06)' : 'rgba(255,255,255,.03)',
                  border: `1px solid ${t.featured ? 'rgba(59,130,246,.25)' : 'rgba(255,255,255,.07)'}`,
                  borderRadius: 18,
                  padding: '1.75rem',
                  margin: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all .3s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(59,130,246,.25)'
                  el.style.background = 'rgba(59,130,246,.06)'
                  el.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = t.featured ? 'rgba(59,130,246,.25)' : 'rgba(255,255,255,.07)'
                  el.style.background = t.featured ? 'rgba(59,130,246,.06)' : 'rgba(255,255,255,.03)'
                  el.style.transform = 'none'
                }}
              >
                {/* Top shimmer */}
                {t.featured && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background:
                        'linear-gradient(90deg, transparent, rgba(59,130,246,.4), rgba(6,182,212,.4), transparent)',
                    }}
                  />
                )}

                {/* Card top: stars + tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Stars />
                  {t.tag && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        padding: '3px 9px',
                        borderRadius: 100,
                        background: tagStyle.bg,
                        color: tagStyle.color,
                      }}
                    >
                      {t.tag}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <div>
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: '3.5rem',
                      lineHeight: 0.7,
                      color: 'rgba(59,130,246,.2)',
                      fontFamily: 'Georgia, serif',
                      marginBottom: '-.5rem',
                    }}
                  >
                    "
                  </div>
                  <blockquote
                    style={{
                      fontSize: '.9375rem',
                      color: 'rgba(240,244,255,.7)',
                      lineHeight: 1.75,
                      fontStyle: 'italic',
                    }}
                  >
                    {t.quote}
                  </blockquote>
                </div>

                {/* Figcaption */}
                <figcaption
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.75rem',
                    paddingTop: '1.125rem',
                    borderTop: '1px solid rgba(255,255,255,.06)',
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      flexShrink: 0,
                      overflow: 'hidden',
                      background: avatarGrad,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '.875rem',
                      fontWeight: 800,
                      color: '#fff',
                    }}
                  >
                    {t.avatarUrl ? (
                      <img
                        src={t.avatarUrl}
                        alt={`Avatar of ${t.author}`}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      t.author.charAt(0)
                    )}
                  </div>

                  <div>
                    <div style={{ fontSize: '.875rem', fontWeight: 700, color: '#F0F4FF' }}>{t.author}</div>
                    <div style={{ fontSize: '.75rem', color: 'rgba(240,244,255,.4)', marginTop: 1 }}>{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>

        {/* Bottom stats strip */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {[
              { num: '150+', label: 'Projects delivered' },
              { num: '98%',  label: 'On-time rate' },
              { num: '4.9★', label: 'Avg. rating' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    letterSpacing: '-.02em',
                    background: 'linear-gradient(135deg, #F0F4FF, rgba(240,244,255,.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: '.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '.06em',
                    color: 'rgba(240,244,255,.35)',
                    marginTop: 2,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <a
            href={ctaHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '.625rem 1.375rem',
              borderRadius: 9,
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              color: '#fff',
              fontSize: '.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all .2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '.9'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'none'
            }}
          >
            Read all reviews →
          </a>
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