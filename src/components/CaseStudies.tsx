export type CaseStudy = {
  title: string
  excerpt: string
  tags: string[]
  linkHref: string
}

export function CaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section id="case-studies" className="bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Delivery examples</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A quick look at the kinds of outcomes Jentek supports.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article key={c.title} className="rounded-2xl border bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-bold text-indigo-700">Featured</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={c.linkHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
                >
                  Discuss a similar project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

