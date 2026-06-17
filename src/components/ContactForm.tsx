'use client'

import { useMemo, useState, useRef } from 'react'

type FormState = {
  name: string
  email: string
  service: string
  message: string
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

/* ─── Shared style tokens ─── */
const INPUT_BASE: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,.04)',
  border: '1px solid rgba(255,255,255,.09)',
  borderRadius: 11,
  padding: '.75rem 1rem',
  fontSize: '.875rem',
  color: '#F0F4FF',
  fontFamily: 'inherit',
  transition: 'all .2s',
  outline: 'none',
}

function useInputFocus() {
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(59,130,246,.5)'
    e.currentTarget.style.background = 'rgba(59,130,246,.05)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,.1)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,.09)'
    e.currentTarget.style.background = 'rgba(255,255,255,.04)'
    e.currentTarget.style.boxShadow = 'none'
  }
  return { onFocus, onBlur }
}

/* ─── Sub-components ─── */
function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        fontSize: '.8125rem',
        fontWeight: 600,
        color: 'rgba(240,244,255,.7)',
        marginBottom: '.5rem',
        letterSpacing: '.01em',
      }}
    >
      {children}
    </label>
  )
}

function TrustItem({ title, detail }: { title: string; detail: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', fontSize: '.875rem', color: 'rgba(240,244,255,.6)', lineHeight: 1.5 }}>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 7,
          background: 'rgba(52,211,153,.12)',
          border: '1px solid rgba(52,211,153,.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#34D399',
          fontSize: 11,
          fontWeight: 700,
          marginTop: 1,
        }}
        aria-hidden="true"
      >
        ✓
      </div>
      <div>
        <strong style={{ color: 'rgba(240,244,255,.85)', display: 'block' }}>{title}</strong>
        <span style={{ fontSize: '.8125rem' }}>{detail}</span>
      </div>
    </div>
  )
}

function MetaItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.875rem' }}>
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: 'rgba(59,130,246,.12)',
          border: '1px solid rgba(59,130,246,.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '.6875rem', textTransform: 'uppercase', letterSpacing: '.07em', color: 'rgba(240,244,255,.35)', marginBottom: 2 }}>
          {label}
        </div>
        <div style={{ fontSize: '.875rem', fontWeight: 600, color: 'rgba(240,244,255,.8)' }}>{value}</div>
      </div>
    </div>
  )
}

/* ─── Main component ─── */
export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const { onFocus, onBlur } = useInputFocus()

  const canSubmit = useMemo(
    () =>
      form.name.trim().length > 1 &&
      isEmail(form.email) &&
      form.service.length > 0 &&
      form.message.trim().length > 10,
    [form],
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formEl = e.currentTarget
    if (!canSubmit) {
      e.preventDefault()
      setStatus('error')
      setError('Please complete all fields with valid information.')
      return
    }
    setStatus('idle')
    setError('')
    setTimeout(() => setStatus('success'), 300)
    formEl.submit()
  }

  return (
    <section
      id="contact"
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
      <div aria-hidden="true" style={{ position: 'absolute', width: 500, height: 500, top: -150, right: -100, borderRadius: '50%', filter: 'blur(120px)', background: 'rgba(59,130,246,0.07)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 350, height: 350, bottom: -80, left: -60, borderRadius: '50%', filter: 'blur(120px)', background: 'rgba(6,182,212,0.05)', pointerEvents: 'none' }} />

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* ─── Left: copy + trust ─── */}
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
            Get in touch
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
            Let's build something{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              great together
            </span>
          </h2>

          <p style={{ fontSize: '.9375rem', color: 'rgba(240,244,255,.45)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Tell us what you're working on. We'll respond within one business day with next steps and a clear plan — no sales fluff.
          </p>

          {/* Trust list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.875rem', marginBottom: '2.5rem' }}>
            <TrustItem title="Fast discovery calls" detail="Typically booked within 48 hours" />
            <TrustItem title="Transparent timelines & deliverables" detail="Sprint-based roadmaps you can hold us to" />
            <TrustItem title="Secure, maintainable engineering" detail="Code reviews, tests, and docs included" />
            <TrustItem title="No lock-in, ever" detail="You own all IP and source code from day one" />
          </div>

          {/* Contact meta card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1.375rem',
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(255,255,255,.07)',
              borderRadius: 16,
            }}
          >
            <MetaItem icon="📧" label="Email us directly" value="hello@jentek.dev" />
            <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }} aria-hidden="true" />
            <MetaItem icon="🕐" label="Response time" value="Within 1 business day" />
            <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }} aria-hidden="true" />
            <MetaItem icon="🌍" label="We work with teams in" value="US · EU · APAC" />
          </div>
        </div>

        {/* ─── Right: form card ─── */}
        <div
          style={{
            background: 'rgba(255,255,255,.03)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 20,
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top shimmer */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(59,130,246,.4), rgba(6,182,212,.4), transparent)',
            }}
          />

          <form
            ref={formRef}
            name="jentek-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="jentek-contact" />
            <div className="hidden" aria-hidden="true">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            {/* Name + email row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.125rem' }}>
              <div>
                <FieldLabel htmlFor="contact-name">Your name</FieldLabel>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Alex Johnson"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  style={{ ...INPUT_BASE }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div>
                <FieldLabel htmlFor="contact-email">Work email</FieldLabel>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  style={{ ...INPUT_BASE }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>

            {/* Service select */}
            <div style={{ marginBottom: '1.125rem' }}>
              <FieldLabel htmlFor="contact-service">What do you need?</FieldLabel>
              <select
                id="contact-service"
                name="service"
                required
                value={form.service}
                onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                style={{ ...INPUT_BASE, appearance: 'none', cursor: 'pointer' }}
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <option value="" style={{ background: '#0A0F1E' }}>Select a service…</option>
                <option value="web" style={{ background: '#0A0F1E' }}>Web / full-stack development</option>
                <option value="cloud" style={{ background: '#0A0F1E' }}>Cloud & DevOps</option>
                <option value="mobile" style={{ background: '#0A0F1E' }}>Mobile app</option>
                <option value="ai" style={{ background: '#0A0F1E' }}>AI integration</option>
                <option value="other" style={{ background: '#0A0F1E' }}>Other / not sure yet</option>
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.375rem' }}>
              <FieldLabel htmlFor="contact-message">Tell us about your project</FieldLabel>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="What are you building? What's your timeline and budget range?"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                style={{ ...INPUT_BASE, minHeight: 130, resize: 'vertical' }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            {/* Status alerts */}
            {status === 'error' && (
              <div
                role="alert"
                style={{
                  background: 'rgba(239,68,68,.08)',
                  border: '1px solid rgba(239,68,68,.2)',
                  borderRadius: 10,
                  padding: '.75rem 1rem',
                  fontSize: '.8125rem',
                  color: '#FCA5A5',
                  marginBottom: '1rem',
                }}
              >
                {error}
              </div>
            )}
            {status === 'success' && (
              <div
                role="status"
                style={{
                  background: 'rgba(52,211,153,.08)',
                  border: '1px solid rgba(52,211,153,.2)',
                  borderRadius: 10,
                  padding: '.75rem 1rem',
                  fontSize: '.8125rem',
                  color: '#6EE7B7',
                  marginBottom: '1rem',
                }}
              >
                🎉 Message sent! We'll be in touch within one business day.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!canSubmit}
              style={{
                width: '100%',
                padding: '.875rem',
                borderRadius: 11,
                border: 'none',
                background: canSubmit
                  ? 'linear-gradient(135deg, #3B82F6, #06B6D4)'
                  : 'rgba(255,255,255,.06)',
                color: canSubmit ? '#fff' : 'rgba(240,244,255,.3)',
                fontSize: '.9375rem',
                fontWeight: 700,
                cursor: canSubmit ? 'pointer' : 'not-allowed',
                fontFamily: 'inherit',
                transition: 'all .25s',
                letterSpacing: '.01em',
              }}
              onMouseEnter={(e) => {
                if (!canSubmit) return
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {status === 'success' ? 'Sent ✓' : 'Send message →'}
            </button>

            {/* Privacy note */}
            <p
              style={{
                fontSize: '.6875rem',
                color: 'rgba(240,244,255,.3)',
                textAlign: 'center',
                marginTop: '.875rem',
                lineHeight: 1.6,
              }}
            >
              By submitting, you agree Jentek may contact you about your request.
              <br />No spam, no third-party sharing.
            </p>

            {/* Live indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                fontSize: '.75rem',
                color: 'rgba(240,244,255,.35)',
                marginTop: '1.125rem',
                justifyContent: 'center',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#34D399',
                  boxShadow: '0 0 6px #34D399',
                  animation: 'blink 2s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              Team is currently online — fast response expected
            </div>
          </form>
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