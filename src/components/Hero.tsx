import { useEffect, useRef } from 'react'

export function Hero({
  title = 'Build software that',
  titleAccent = 'scales with confidence',
  subtitle = 'We engineer modern web and cloud systems — from discovery through deployment — so your team ships faster without compromising on quality.',
  ctaText = 'Request a Proposal',
  ctaHref = '#contact',
}: {
  title?: string
  titleAccent?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}) {
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    let visible = true
    const id = setInterval(() => {
      visible = !visible
      el.style.opacity = visible ? '1' : '0'
    }, 530)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: '#0A0F1E', color: '#F0F4FF' }}
    >
      {/* Animated grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridShift 20s linear infinite',
        }}
      />

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)',
          animation: 'pulse1 8s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: '-20%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 70%)',
          animation: 'pulse2 10s ease-in-out infinite',
        }}
      />

      {/* ─── Nav ─── */}
      {/* <nav
        className="relative z-10 flex items-center justify-between"
        style={{
          padding: '1.5rem 3rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span
          style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #60A5FA, #06B6D4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Jentek
        </span>

        <ul className="hidden items-center gap-8 md:flex" style={{ listStyle: 'none' }}>
          {['Services', 'Process', 'Case Studies', 'About'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.6)', textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#F0F4FF')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,244,255,0.6)')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            padding: '0.5rem 1.25rem',
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.4)',
            color: '#60A5FA',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = 'rgba(59,130,246,0.25)'
            el.style.borderColor = 'rgba(59,130,246,0.7)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = 'rgba(59,130,246,0.15)'
            el.style.borderColor = 'rgba(59,130,246,0.4)'
          }}
        >
          Get Started
        </a>
      </nav> */}

      {/* ─── Hero Body ─── */}
      <div
        className="relative z-10 mx-auto grid w-full flex-1 items-center gap-16 px-6 py-20 md:grid-cols-2"
        style={{ maxWidth: '1200px' }}
      >
        {/* Left: Copy */}
        <div style={{ animation: 'fadeSlideDown 0.7s ease both' }}>
          {/* Badge */}
          <div
            className="mb-7 inline-flex items-center gap-2"
            style={{
              padding: '0.375rem 0.875rem',
              borderRadius: '100px',
              border: '1px solid rgba(6,182,212,0.3)',
              background: 'rgba(6,182,212,0.08)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#67E8F9',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#06B6D4',
                boxShadow: '0 0 8px #06B6D4',
                animation: 'blink 2s ease-in-out infinite',
                flexShrink: 0,
              }}
            />
            End-to-end software solutions
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            {title}
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA 0%, #06B6D4 50%, #34D399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {titleAccent}
            </span>
            <span
              ref={cursorRef}
              aria-hidden="true"
              style={{
                display: 'inline-block',
                width: 3,
                height: '0.85em',
                background: '#60A5FA',
                marginLeft: 4,
                verticalAlign: 'middle',
                borderRadius: 2,
              }}
            />
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'rgba(240,244,255,0.55)',
              maxWidth: 480,
              marginBottom: '2.25rem',
            }}
          >
            {subtitle}
          </p>

          {/* CTA buttons */}
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={ctaHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8125rem 1.75rem',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                color: '#fff',
                fontSize: '0.9375rem',
                fontWeight: 600,
                borderRadius: 10,
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {ctaText}
              <span style={{ fontSize: '1rem', transition: 'transform 0.2s' }}>→</span>
            </a>

            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8125rem 1.75rem',
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(240,244,255,0.8)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                borderRadius: 10,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8"
            style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { num: '150+', label: 'Projects shipped' },
              { num: '99.9%', label: 'Uptime SLA' },
              { num: '40%', label: 'Faster delivery' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(135deg, #F0F4FF, rgba(240,244,255,0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(240,244,255,0.4)',
                    marginTop: '0.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup card */}
        <div className="relative" style={{ animation: 'fadeSlideUp 0.9s ease 0.2s both' }}>
          {/* Floating badge — top */}
          <div
            aria-hidden="true"
            className="absolute hidden md:flex"
            style={{
              top: -16,
              right: 40,
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.875rem',
              background: 'rgba(10,15,30,0.9)',
              border: '1px solid rgba(52,211,153,0.3)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#34D399',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              animation: 'float1 4s ease-in-out infinite',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#34D399',
                boxShadow: '0 0 6px #34D399',
                flexShrink: 0,
              }}
            />
            Deployment successful
          </div>

          {/* Main mockup */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '1.5rem',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top shimmer line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background:
                  'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(6,182,212,0.5), transparent)',
              }}
            />

            {/* Window chrome */}
            <div className="mb-5 flex items-center gap-2">
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56', display: 'block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F', display: 'block' }} />
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: '0.75rem',
                  color: 'rgba(240,244,255,0.3)',
                  fontFamily: 'monospace',
                }}
              >
                deploy.config.ts
              </span>
            </div>

            {/* Code block */}
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 10,
                padding: '1rem 1.25rem',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '0.8125rem',
                lineHeight: 1.7,
                marginBottom: '1rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: 2,
                  background: 'linear-gradient(180deg, #3B82F6, #06B6D4)',
                  animation: 'scanline 3s ease-in-out infinite',
                }}
              />
              <div>
                <span style={{ color: '#C084FC' }}>const</span>{' '}
                <span style={{ color: '#60A5FA' }}>pipeline</span> = {'{'}
              </div>
              <div>
                &nbsp;&nbsp;<span style={{ color: '#34D399' }}>build</span>:{' '}
                <span style={{ color: '#60A5FA' }}>runCI</span>(
                <span style={{ color: '#34D399' }}>'main'</span>),
              </div>
              <div>
                &nbsp;&nbsp;<span style={{ color: '#34D399' }}>test</span>:{' '}
                <span style={{ color: '#60A5FA' }}>coverage</span>(
                <span style={{ color: '#FB923C' }}>98.7</span>),
              </div>
              <div>
                &nbsp;&nbsp;<span style={{ color: '#34D399' }}>deploy</span>:{' '}
                <span style={{ color: '#60A5FA' }}>toCloud</span>(
                <span style={{ color: '#34D399' }}>'aws'</span>),
              </div>
              <div>
                &nbsp;&nbsp;<span style={{ color: '#34D399' }}>monitor</span>:{' '}
                <span style={{ color: '#34D399' }}>'24/7'</span>
              </div>
              <div>
                {'}'}{' '}
                <span style={{ color: 'rgba(240,244,255,0.3)' }}>// ✓ all systems go</span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Build time', value: '1.8s', color: '#60A5FA', change: '↓ 62% vs last sprint' },
                { label: 'Test coverage', value: '98.7%', color: '#34D399', change: '↑ 4.2% this week' },
                { label: 'API latency', value: '12ms', color: '#22D3EE', change: 'p99 · global avg' },
                { label: 'Uptime', value: '99.98%', color: '#FB923C', change: 'Last 90 days' },
              ].map(({ label, value, color, change }) => (
                <div
                  key={label}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12,
                    padding: '0.875rem 1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      color: 'rgba(240,244,255,0.35)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color, letterSpacing: '-0.02em' }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#34D399', marginTop: '0.25rem' }}>{change}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge — bottom */}
          <div
            aria-hidden="true"
            className="absolute hidden md:flex"
            style={{
              bottom: 20,
              left: -24,
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.875rem',
              background: 'rgba(10,15,30,0.9)',
              border: '1px solid rgba(96,165,250,0.3)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#60A5FA',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              animation: 'float2 5s ease-in-out infinite',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#60A5FA',
                boxShadow: '0 0 6px #60A5FA',
                flexShrink: 0,
              }}
            />
            Cloud-ready · Sprint-based
          </div>
        </div>
      </div>

      {/* ─── Trust bar ─── */}
      <div
        className="relative z-10 flex items-center gap-10 overflow-x-auto"
        style={{ padding: '1rem 3rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span
          style={{
            fontSize: '0.6875rem',
            color: 'rgba(240,244,255,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Trusted by teams at
        </span>
        <div className="flex items-center gap-8">
          {['Accenture', 'Deloitte', 'Infosys', 'Wipro', 'TCS', 'HCL Tech'].map((name) => (
            <span
              key={name}
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'rgba(240,244,255,0.2)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Bottom gradient line ─── */}
      <div
        aria-hidden="true"
        style={{
          height: 1,
          background: 'linear-gradient(90deg, #3B82F6, #06B6D4, #34D399, #06B6D4, #3B82F6)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 4s linear infinite',
        }}
      />

      {/* ─── Keyframe injections ─── */}
      <style>{`
        @keyframes gridShift {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        @keyframes pulse1 {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scanline {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}