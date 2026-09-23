'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/series', label: 'The Series' },
  { href: '/world', label: 'The World' },
  { href: '/characters', label: 'Characters' },
  { href: '/lore', label: 'Lore' },
  { href: '/about', label: 'About' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`site-nav${open ? ' open' : ''}`}>
      <div className="site-nav-inner">
        <Link href="/" className="logo">
          THE AGES TO COME
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>
        <nav aria-label="Main" style={{ display: 'contents' }}>
          <ul id="site-menu" className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/join" className="nav-cta" aria-current={pathname === '/join' ? 'page' : undefined}>
                Join
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
