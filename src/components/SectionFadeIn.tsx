import { type ReactNode } from 'react'

export function SectionFadeIn({
  children,
  className = '',
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  return (
    <div
      className={`bb-section-fadein ${className}`}
      style={{ ['--bb-delay' as string]: `${delayMs}ms` }}

    >
      {children}
    </div>
  )
}

