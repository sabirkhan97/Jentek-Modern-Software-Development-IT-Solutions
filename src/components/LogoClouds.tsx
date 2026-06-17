import { type ReactNode } from 'react'

type LogoItem = {
  name: string
  icon: ReactNode
  iconBg?: string
}

const defaultRow1: LogoItem[] = [
  { name: 'React', icon: '⚛️', iconBg: 'rgba(97,218,251,.12)' },
  { name: 'Next.js', icon: '▲', iconBg: 'rgba(255,255,255,.08)' },
  { name: 'TypeScript', icon: 'TS', iconBg: 'rgba(49,120,198,.15)' },
  { name: 'Node.js', icon: '🟢', iconBg: 'rgba(83,158,87,.12)' },
  { name: 'AWS', icon: '☁️', iconBg: 'rgba(255,153,0,.12)' },
  { name: 'PostgreSQL', icon: '🐘', iconBg: 'rgba(50,103,145,.15)' },
  { name: 'Docker', icon: '🐳', iconBg: 'rgba(13,183,237,.12)' },
  { name: 'GraphQL', icon: '◈', iconBg: 'rgba(229,53,171,.12)' },
  { name: 'Terraform', icon: '⬡', iconBg: 'rgba(96,64,181,.12)' },
  { name: 'Redis', icon: '⚡', iconBg: 'rgba(208,62,47,.12)' },
]

const defaultRow2: LogoItem[] = [
  { name: 'React Native', icon: '📱', iconBg: 'rgba(97,218,251,.10)' },
  { name: 'Python', icon: '🐍', iconBg: 'rgba(55,118,171,.12)' },
  { name: 'Kubernetes', icon: '☸️', iconBg: 'rgba(50,108,229,.12)' },
  { name: 'OpenAI', icon: '🤖', iconBg: 'rgba(16,163,127,.12)' },
  { name: 'Tailwind CSS', icon: '🎨', iconBg: 'rgba(56,189,248,.10)' },
  { name: 'MongoDB', icon: '🍃', iconBg: 'rgba(71,162,72,.12)' },
  { name: 'GitHub Actions', icon: '⚙️', iconBg: 'rgba(255,255,255,.07)' },
  { name: 'Stripe', icon: '💳', iconBg: 'rgba(99,91,255,.12)' },
  { name: 'Pinecone', icon: '🌲', iconBg: 'rgba(52,211,153,.10)' },
  { name: 'Vercel', icon: '▲', iconBg: 'rgba(255,255,255,.07)' },
]

const categories = [
  'Frontend',
  'Backend',
  'Cloud & DevOps',
  'Mobile',
  'AI / ML',
  'Databases',
  'Testing',
]

function MarqueeRow({ items, reverse = false }: { items: LogoItem[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '1rem',
      }}
    >
      {/* Fade masks */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(90deg, #0A0F1E, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(270deg, #0A0F1E, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          width: 'max-content',
          animation: `marqueeScroll ${reverse ? '34s' : '28s'} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {doubled.map((item, i) => (
          <LogoPill key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

function LogoPill({ item }: { item: LogoItem }) {
  return (
    <div
      role="img"
      aria-label={item.name}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '.75rem 1.375rem',
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,.07)',
        background: 'rgba(255,255,255,.03)',
        whiteSpace: 'nowrap',
        transition: 'all .25s',
        flexShrink: 0,
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(59,130,246,.35)'
        el.style.background = 'rgba(59,130,246,.07)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(255,255,255,.07)'
        el.style.background = 'rgba(255,255,255,.03)'
        el.style.transform = 'none'
      }}
    >
      <span className="sr-only">{item.name}</span>

      {/* Icon */}
      <div
        aria-hidden="true"
        style={{
          width: 28,
          height: 28,
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 15,
          background: item.iconBg ?? 'rgba(59,130,246,.12)',
          flexShrink: 0,
          fontWeight: 700,
          color: 'rgba(240,244,255,.9)',
        }}
      >
        {item.icon}
      </div>

      <span
        style={{
          fontSize: '.8125rem',
          fontWeight: 600,
          color: 'rgba(240,244,255,.65)',
          letterSpacing: '.01em',
        }}
      >
        {item.name}
      </span>
    </div>
  )
}

export function LogoClouds({
  row1 = defaultRow1,
  row2 = defaultRow2,
}: {
  row1?: LogoItem[]
  row2?: LogoItem[]
}) {
  return (
    <section
      id="logos"
      style={{ background: '#0A0F1E', color: '#F0F4FF', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}
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
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
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
            Our tech stack
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 800,
              letterSpacing: '-.03em',
              lineHeight: 1.1,
              marginBottom: '.75rem',
            }}
          >
            Trusted{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              building blocks
            </span>
          </h2>

          <p
            style={{
              fontSize: '.9375rem',
              color: 'rgba(240,244,255,.45)',
              maxWidth: 440,
              lineHeight: 1.7,
            }}
          >
            A sample of the technologies, frameworks, and platforms we use to ship production-grade software.
          </p>
        </div>

        {/* Marquee rows */}
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />

        {/* Category pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.625rem', marginTop: '2.5rem' }}>
          {categories.map((cat) => (
            <span
              key={cat}
              style={{
                padding: '.375rem .875rem',
                borderRadius: 100,
                border: '1px solid rgba(255,255,255,.08)',
                fontSize: '.75rem',
                fontWeight: 600,
                color: 'rgba(240,244,255,.4)',
                transition: 'all .2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(59,130,246,.35)'
                el.style.color = '#60A5FA'
                el.style.background = 'rgba(59,130,246,.07)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,.08)'
                el.style.color = 'rgba(240,244,255,.4)'
                el.style.background = 'transparent'
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}