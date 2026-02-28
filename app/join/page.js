'use client'

import { useState } from 'react'

export default function Join() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <>
      <nav>
        <a href="/" className="logo">THE AGES TO COME</a>
        <ul className="nav-links">
          <li><a href="/series">The Series</a></li>
          <li><a href="/world">The World</a></li>
          <li><a href="/characters">Characters</a></li>
          <li><a href="/lore">Lore</a></li>
          <li><a href="/join" className="nav-cta">Join</a></li>
        </ul>
      </nav>

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0A0806 0%, #12100C 50%, #0A0806 100%)',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Atmospheric glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,105,20,0.07) 0%, transparent 70%)
          `,
          pointerEvents: 'none',
        }} />

        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          border: '1px solid rgba(201,168,76,0.04)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px', height: '400px',
          border: '1px solid rgba(201,168,76,0.06)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '620px',
          width: '100%',
          textAlign: 'center',
        }}>
          {!submitted ? (
            <>
              {/* Eyebrow */}
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.65rem',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#E2B96F',
                marginBottom: '2rem',
                opacity: 0.7,
              }}>The Shadow History Cycle</p>

              {/* Title */}
              <h1 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#E2B96F',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}>Join the<br />Inner Circle</h1>

              {/* Divider */}
              <div style={{
                width: '60px', height: '1px',
                background: 'linear-gradient(90deg, transparent, #E2B96F, transparent)',
                margin: '2rem auto',
              }} />

              {/* What you get */}
              <p style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '1.15rem',
                color: '#C4AA88',
                fontStyle: 'italic',
                lineHeight: 1.85,
                marginBottom: '3rem',
              }}>
                The Shadow History has been unfolding since Babel. 
                Now you can read it before anyone else.
              </p>

              {/* Benefits */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                background: '#2A2318',
                marginBottom: '3rem',
                textAlign: 'left',
              }}>
                {[
                  {
                    icon: '✦',
                    title: 'First Three Chapters Free',
                    desc: 'Read the opening of The Age of the Unveiling before it launches — Yohanan on Patmos, the vision, and the storm that changes everything.',
                  },
                  {
                    icon: '◈',
                    title: 'Exclusive Lore Entries',
                    desc: 'Receive Shadow History Codex entries not published on the site — deeper dives into the Divine Council theology behind the narrative.',
                  },
                  {
                    icon: '⚔',
                    title: 'Kickstarter Early Access',
                    desc: 'Inner Circle members get first access to the Kickstarter campaign — before it goes public — with exclusive early-backer rewards.',
                  },
                  {
                    icon: '✉',
                    title: 'Shadow History Dispatches',
                    desc: "Brian's research notes, theological discoveries, and behind-the-scenes writing updates — delivered directly to your inbox.",
                  },
                ].map((benefit, i) => (
                  <div key={i} style={{
                    background: '#0A0806',
                    padding: '1.8rem 2rem',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#12100C'}
                  onMouseLeave={e => e.currentTarget.style.background = '#0A0806'}
                  >
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.9rem',
                      color: '#E2B96F',
                      opacity: 0.5,
                      marginTop: '0.2rem',
                      flexShrink: 0,
                    }}>{benefit.icon}</span>
                    <div>
                      <h4 style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '0.85rem',
                        color: '#E2B96F',
                        marginBottom: '0.4rem',
                        letterSpacing: '0.05em',
                      }}>{benefit.title}</h4>
                      <p style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: '0.95rem',
                        color: '#6B5C42',
                        lineHeight: 1.7,
                        margin: 0,
                      }}>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'flex',
                  gap: '0',
                  marginBottom: '1rem',
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    style={{
                      flex: 1,
                      padding: '1.1rem 1.5rem',
                      background: '#1C1810',
                      border: '1px solid #2A2318',
                      borderRight: 'none',
                      color: '#E8DFC8',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                  />
                  <button type="submit" style={{
                    padding: '1.1rem 2rem',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#0A0806',
                    background: 'linear-gradient(135deg, #8B6914, #E2B96F)',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                  }}>
                    Enter the Circle
                  </button>
                </div>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '0.85rem',
                  color: '#6B5C42',
                  fontStyle: 'italic',
                }}>
                  No spam. No noise. Only the Shadow History.
                </p>
              </form>
            </>
          ) : (
            /* Success state */
            <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
              <div style={{
                fontSize: '2rem',
                color: '#E2B96F',
                opacity: 0.4,
                marginBottom: '2rem',
              }}>✦</div>

              <h1 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: '#E2B96F',
                marginBottom: '1.5rem',
                lineHeight: 1.2,
              }}>You're In.</h1>

              <div style={{
                width: '60px', height: '1px',
                background: 'linear-gradient(90deg, transparent, #E2B96F, transparent)',
                margin: '0 auto 2rem',
              }} />

              <p style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '1.2rem',
                color: '#C4AA88',
                fontStyle: 'italic',
                lineHeight: 1.85,
                marginBottom: '2.5rem',
              }}>
                Welcome to the Inner Circle. The Shadow History 
                has been waiting for you. Check your inbox — 
                the first dispatch is on its way.
              </p>

              <a href="/" style={{
                display: 'inline-block',
                padding: '0.9rem 2.5rem',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E2B96F',
                border: '1px solid rgba(226,185,111,0.35)',
                textDecoration: 'none',
              }}>
                Return to the World
              </a>
            </div>
          )}
        </div>
      </main>

      <footer>
        <p>The Ages to Come © 2026 Brian Westad — The Shadow History Cycle</p>
        <p className="footer-sub">Empires rise and fall in history — but behind them, unseen powers have been waging a far older war.</p>
      </footer>
    </>
  )
}