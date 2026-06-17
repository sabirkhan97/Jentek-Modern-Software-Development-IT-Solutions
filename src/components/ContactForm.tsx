import { useMemo, useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const [error, setError] = useState<string>('')

  const canSubmit = useMemo(() => {
    return form.name.trim().length > 1 && isEmail(form.email) && form.message.trim().length > 5
  }, [form])

  return (
    <section id="contact" className="bg-slate-50 py-14">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Contact Jentek</h2>
            <p className="mt-3 text-slate-600">
              Tell us what you’re building. We’ll respond with next steps and a clear plan.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-0.5 h-5 w-5 rounded bg-indigo-600/10 grid place-items-center text-indigo-700 font-bold">✓</span>
                <span>Fast discovery calls</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-0.5 h-5 w-5 rounded bg-indigo-600/10 grid place-items-center text-indigo-700 font-bold">✓</span>
                <span>Transparent timelines and deliverables</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-0.5 h-5 w-5 rounded bg-indigo-600/10 grid place-items-center text-indigo-700 font-bold">✓</span>
                <span>Secure, maintainable engineering</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <form
              name="jentek-contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                const formEl = e.currentTarget
                // React-side validation to improve UX
                if (!canSubmit) {
                  e.preventDefault()
                  setStatus('error')
                  setError('Please complete all fields with valid information.')
                  return
                }
                // Let Netlify handle submission
                setStatus('idle')
                setError('')
                // If you want client-side success handling, you'd need to integrate with Netlify events.
                // For now, show success after submit attempt.
                const onSubmit = () => {
                  setStatus('success')
                }
                // best-effort: submit is immediate
                setTimeout(onSubmit, 300)
                // keep form submission
                formEl.submit()
              }}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="jentek-contact" />
              <p className="sr-only">
                This form is submitted via Netlify Forms.
              </p>

              <div className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-1 min-h-[140px] w-full resize-y rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  placeholder="What do you need help with?"
                />
              </div>

              {status === 'error' && (
                <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
                  {error}
                </div>
              )}
              {status === 'success' && (
                <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Thanks—your message has been submitted.
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 disabled:opacity-60"
                disabled={!canSubmit}
              >
                Send message
              </button>

              <p className="text-xs leading-relaxed text-slate-500">
                By submitting, you agree that Jentek may contact you about your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

