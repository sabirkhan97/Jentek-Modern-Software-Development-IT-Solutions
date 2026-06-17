'use client'

import { useState } from 'react'

type Step = {
  num: string
  title: string
  tag: string
  tagBg: string
  tagColor: string
  desc: string
  deliverables: string[]
}

const defaultSteps: Step[] = [
  {
    num: '01',
    title: 'Consult',
    tag: 'Discovery',
    tagBg: 'rgba(6,182,212,.12)',
    tagColor: '#22D3EE',
    desc: 'Align on goals, risks, constraints, and scope. We ask the hard questions before writing a line of code.',
    deliverables: ['Project brief & scope doc', 'Risk register', 'Tech stack recommendation'],
  },
  {
    num: '02',
    title: 'Design & Plan',
    tag: 'Architecture',
    tagBg: 'rgba(192,132,252,.12)',
    tagColor: '#C084FC',
    desc: 'System architecture, UX wireframes, and a sprint-by-sprint delivery roadmap you can hold us to.',
    deliverables: ['Architecture diagram', 'UI wireframes', 'Sprint roadmap'],
  },
  {
    num: '03',
    title: 'Build',
    tag: 'Engineering',
    tagBg: 'rgba(59,130,246,.12)',
    tagColor: '#60A5FA',
    desc: 'Iterative development with pull request reviews, automated testing, and weekly demos. No black boxes.',
    deliverables: ['Tested, reviewed PRs', 'Weekly demo sessions', 'QA reports'],
  },
  {
    num: '04',
    title: 'Deploy',
    tag: 'Launch',
    tagBg: 'rgba(52,211,153,.12)',
    tagColor: '#34D399',
    desc: 'CI/CD pipeline, cloud infrastructure, monitoring setup, and a smooth handoff with full documentation.',
    deliverables: ['Live deployment', 'Runbook & docs', '30-day support window'],
  },
]

function CheckIcon({ done }: { done: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        width: 14,
        height: 14,
        flexShrink: 0,
        marginTop: 1,
        opacity: done ? 1 : 0.4,
        color: done ? '#34D399' : 'inherit',
      }}
      aria-hidden="true"
    >
      <path d="M3 8l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ProcessTimeline({ steps = defaultSteps }: { steps?: Step[] }) {
  const [current, setCurrent] = useState(0)

  const progressPct = ((current + 1) / steps.length) * 100

  return (
    <section
      id="process"
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

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
          How we work
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
          A process built for{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #60A5FA, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            clarity
          </span>
        </h2>

        <p
          style={{
            fontSize: '.9375rem',
            color: 'rgba(240,244,255,.45)',
            maxWidth: 480,
            lineHeight: 1.75,
            marginBottom: '3.5rem',
          }}
        >
          Four phases that reduce uncertainty and keep your team in the loop at every milestone.
        </p>

        {/* Progress bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span
            style={{ fontSize: '.75rem', fontWeight: 600, color: 'rgba(240,244,255,.35)', whiteSpace: 'nowrap' }}
          >
            Phase {current + 1} of {steps.length}
          </span>
          <div
            style={{
              flex: 1,
              height: 3,
              background: 'rgba(255,255,255,.06)',
              borderRadius: 100,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progressPct}%`,
                background: 'linear-gradient(90deg, #3B82F6, #06B6D4, #34D399)',
                borderRadius: 100,
                transition: 'width .8s ease',
              }}
            />
          </div>
        </div>

        {/* Steps grid */}
        <ol
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            position: 'relative',
            listStyle: 'none',
          }}
        >
          {steps.map((s, i) => {
            const isDone = i < current
            const isActive = i === current

            return (
              <li key={s.title} style={{ position: 'relative', padding: '0 1rem' }}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 22,
                      left: 'calc(50% + 22px)',
                      right: 'calc(-50% + 22px)',
                      height: 1,
                      background: 'rgba(255,255,255,.08)',
                      zIndex: 0,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: isDone ? '100%' : '0%',
                        background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                        transition: 'width 1s ease',
                        borderRadius: 1,
                      }}
                    />
                  </div>
                )}

                {/* Step number bubble */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '.75rem',
                      fontWeight: 800,
                      letterSpacing: '.04em',
                      transition: 'all .3s',
                      ...(isActive
                        ? {
                            background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                            border: '1px solid transparent',
                            color: '#fff',
                            boxShadow: '0 0 20px rgba(59,130,246,.4)',
                          }
                        : isDone
                        ? {
                            background: 'rgba(52,211,153,.15)',
                            border: '1px solid rgba(52,211,153,.3)',
                            color: '#34D399',
                          }
                        : {
                            background: 'rgba(255,255,255,.04)',
                            border: '1px solid rgba(255,255,255,.1)',
                            color: 'rgba(240,244,255,.35)',
                          }),
                    }}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {isDone ? '✓' : s.num}
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    background: isActive
                      ? 'rgba(59,130,246,.05)'
                      : isDone
                      ? 'rgba(52,211,153,.04)'
                      : 'rgba(255,255,255,.03)',
                    border: `1px solid ${
                      isActive
                        ? 'rgba(59,130,246,.3)'
                        : isDone
                        ? 'rgba(52,211,153,.2)'
                        : 'rgba(255,255,255,.07)'
                    }`,
                    borderRadius: 16,
                    padding: '1.375rem',
                    transition: 'all .3s',
                    minHeight: 160,
                  }}
                >
                  {/* Tag */}
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '.07em',
                      textTransform: 'uppercase',
                      padding: '3px 9px',
                      borderRadius: 100,
                      marginBottom: '.75rem',
                      background: s.tagBg,
                      color: s.tagColor,
                    }}
                  >
                    {s.tag}
                  </span>

                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#F0F4FF',
                      marginBottom: '.5rem',
                      letterSpacing: '-.01em',
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '.8125rem',
                      color: 'rgba(240,244,255,.45)',
                      lineHeight: 1.65,
                      marginBottom: '1rem',
                    }}
                  >
                    {s.desc}
                  </p>

                  {/* Deliverables */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {s.deliverables.map((d) => (
                      <div
                        key={d}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 6,
                          fontSize: '.75rem',
                          color: isDone || isActive ? '#34D399' : 'rgba(240,244,255,.3)',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckIcon done={isDone || isActive} />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        {/* Navigation controls */}
        <div style={{ display: 'flex', gap: '.75rem', marginTop: '2.5rem', justifyContent: 'center' }}>
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            style={{
              padding: '.5rem 1.25rem',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,.1)',
              background: 'rgba(255,255,255,.04)',
              color: 'rgba(240,244,255,.6)',
              fontSize: '.8125rem',
              fontWeight: 600,
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              opacity: current === 0 ? 0.3 : 1,
              transition: 'all .2s',
              fontFamily: 'inherit',
            }}
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
            disabled={current === steps.length - 1}
            style={{
              padding: '.5rem 1.25rem',
              borderRadius: 8,
              border: '1px solid transparent',
              background:
                current === steps.length - 1 ? 'rgba(52,211,153,.15)' : 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              color: current === steps.length - 1 ? '#34D399' : '#fff',
              fontSize: '.8125rem',
              fontWeight: 600,
              cursor: current === steps.length - 1 ? 'default' : 'pointer',
              transition: 'all .2s',
              fontFamily: 'inherit',
            }}
          >
            {current === steps.length - 1 ? '✓ All phases complete' : 'Next phase →'}
          </button>
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