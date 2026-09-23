'use client'

import { useState } from 'react'

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={menuOpen ? 'nav-open' : ''}>
      <a href="/" className="logo" onClick={closeMenu}>
        THE AGES TO COME
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-nav-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
      <ul id="site-nav-menu" className="nav-links">
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="/series" onClick={closeMenu}>The Series</a></li>
        <li><a href="/world" onClick={closeMenu}>The World</a></li>
        <li><a href="/characters" onClick={closeMenu}>Characters</a></li>
        <li><a href="/lore" onClick={closeMenu}>Lore</a></li>
        <li><a href="/about" onClick={closeMenu}>About</a></li>
        <li><a href="/join" className="nav-cta" onClick={closeMenu}>Join</a></li>
      </ul>
    </nav>
  )
}