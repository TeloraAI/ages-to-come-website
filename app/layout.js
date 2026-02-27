import './globals.css'

export const metadata = {
  title: 'The Ages to Come — The Shadow History Cycle',
  description: 'A sweeping Speculative Historical Thriller series that reveals the Shadow History of the world. Empires rise and fall — but behind them, unseen powers have been waging a far older war.',
  keywords: 'Christian fiction, speculative fiction, Divine Council, Michael Heiser, historical thriller, Brian Westad',
  openGraph: {
    title: 'The Ages to Come',
    description: 'Exile. Empire. Revelation. And the unseen war that binds them all.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.2rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(180deg, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0) 100%)',
      borderBottom: '1px solid rgba(201,168,76,0.1)',
    }}>
      <a href="/" style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '#C9A84C',
        letterSpacing: '0.1em',
        textDecoration: 'none',
      }}>
        THE AGES TO COME
      </a>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { label: 'The World', href: '/world' },
          { label: 'Characters', href: '/characters' },
          { label: 'Lore', href: '/lore' },
          { label: 'The Series', href: '/series' },
        ].map(link => (
          <a key={link.href} href={link.href} style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#A89878',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => e.target.style.color = '#C9A84C'}
          onMouseLeave={e => e.target.style.color = '#A89878'}
          >
            {link.label}
          </a>
        ))}
        <a href="/join" style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#0A0806',
          background: 'linear-gradient(135deg, #8B6914, #C9A84C)',
          padding: '0.5rem 1.2rem',
          textDecoration: 'none',
        }}>
          Join
        </a>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #2A2318',
      padding: '3rem 2rem',
      textAlign: 'center',
      background: '#12100C',
    }}>
      <p style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        color: '#6B5C42',
        textTransform: 'uppercase',
      }}>
        THE AGES TO COME © 2026 BRIAN WESTAD — THE SHADOW HISTORY CYCLE
      </p>
      <p style={{
        fontFamily: "'Crimson Pro', serif",
        fontSize: '0.9rem',
        color: '#6B5C42',
        marginTop: '0.5rem',
        fontStyle: 'italic',
      }}>
        Empires rise and fall in history — but behind them, unseen powers have been waging a far older war.
      </p>
    </footer>
  )
}
