export type FooterLink = { label: string; href: string }

export function Footer({
  links,
  social,
  companyName = 'Jentek',
}: {
  links: FooterLink[]
  social: { name: string; href: string; icon: 'github' | 'linkedin' | 'x' }[]
  companyName?: string
}) {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white font-extrabold">J</span>
              <span className="text-base font-bold tracking-tight text-slate-900">{companyName}</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              Software services by founder Azeem. Modern engineering, cloud delivery, and reliable outcomes.
            </p>
            <p className="mt-5 text-xs text-slate-500">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Explore</h3>
              <ul className="mt-3 space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900">Social</h3>
              <ul className="mt-3 space-y-2">
                {social.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
                      aria-label={s.name}
                    >
                      {s.icon === 'github' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.25 9.25 0 0 1 12 6.77c.85 0 1.71.12 2.51.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.97-2.35 4.85-4.58 5.11.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48 3.96-1.36 6.83-5.19 6.83-9.71C22 6.58 17.52 2 12 2Z" />
                        </svg>
                      )}
                      {s.icon === 'linkedin' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.5h-4v16ZM8.5 7.5h-4v16h4v-8.05c0-2.13.42-4.2 3.03-4.2 2.58 0 2.6 2.41 2.6 4.32v7.93h4v-9.28c0-4.55-.98-7.98-6.29-7.98-2.55 0-4.26 1.4-4.97 2.74h-.06V7.5Z" />
                        </svg>
                      )}
                      {s.icon === 'x' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M18.9 2H22l-6.77 7.74L23 22h-6.2l-4.85-6.9L5.3 22H2l7.3-8.35L1 2h6.35l4.4 6.2L18.9 2Zm-1.09 18h1.72L6.21 3.93H4.37L17.81 20Z" />
                        </svg>
                      )}
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

