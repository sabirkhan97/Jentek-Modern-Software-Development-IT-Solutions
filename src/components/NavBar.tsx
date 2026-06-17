import { useId, useState } from 'react'

export type NavItem = { label: string; href: string }

export function NavBar({
  logoText = 'Jentek',
  menuItems,
}: {
  logoText?: string
  menuItems: NavItem[]
}) {
  const [open, setOpen] = useState(false)
  const listId = useId()

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#top"
          className="flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
          aria-label="Go to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white font-extrabold">
            J
          </span>
          <span className="text-base font-bold tracking-tight text-slate-900">
            {logoText}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
          >
            Get a quote
          </a>

          <button
            type="button"
            className="inline-flex md:hidden items-center justify-center rounded-lg border p-2 text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={open ? 'block md:hidden' : 'hidden md:hidden'}
        id={listId}
      >
        <div className="mx-auto w-full max-w-6xl px-4 pb-4">
          <ul className="grid gap-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                Get a quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

