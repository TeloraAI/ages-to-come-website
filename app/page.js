'use client'

import { useState } from 'react'

export default function Home() {
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
      <main>
        {/* HERO */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #0A0806 0%, #12100C 50%, #0A0806 100%)',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,105,20,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 20% 60%, rgba(139,26,26,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 80% 30%, rgba(201,168,76,0.04) 0%, transparent 60%)
            `,
          }} />

          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px', height: '700px',
            border: '1px solid rgba(201,168,76,0.04)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '450px', height: '450px',
            border: '1px solid rgba(201,168,76,0.06)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '2rem',
            paddingTop: 'calc(4.5rem + env(safe-area-inset-top))',
            maxWidth: '900px',
            animation: 'fadeInUp 1s ease forwards',
          }}>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.68rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '2.5rem',
              opacity: 0.7,
            }}>
              Brian Westad — The Shadow History Cycle
            </p>

            <h1 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(3rem, 9vw, 7.5rem)',
              fontWeight: 900,
              color: '#C9A84C',
              lineHeight: 0.95,
              letterSpacing: '0.06em',
              marginBottom: '2rem',
              textShadow: '0 0 100px rgba(201,168,76,0.25)',
            }}>
              THE AGES<br />TO COME
            </h1>

            <div style={{
              width: '100px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              margin: '0 auto 2.5rem',
            }} />

            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              color: '#A89878',
              fontStyle: 'italic',
              marginBottom: '0.8rem',
              letterSpacing: '0.02em',
            }}>
              Book 1: The Age of the Unveiling
            </p>

            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
              color: '#6B5C42',
              marginBottom: '3.5rem',
              letterSpacing: '0.06em',
            }}>
              Exile. Empire. Revelation.<br />
              And the unseen war that binds them all.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/series" style={{
                display: 'inline-block',
                padding: '1rem 2.8rem',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0A0806',
                background: 'linear-gradient(135deg, #8B6914, #C9A84C)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}>
                Discover the Series
              </a>
              <a href="/world" style={{
                display: 'inline-block',
                padding: '1rem 2.8rem',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.35)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}>
                Enter the World
              </a>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem',
            opacity: 0.35,
          }}>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.58rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#C9A84C',
            }}>Scroll</p>
            <div style={{
              width: '1px',
              height: '50px',
              background: 'linear-gradient(180deg, #C9A84C, transparent)',
            }} />
          </div>
        </section>

        {/* HOOK */}
        <section style={{
          padding: '7rem 2rem',
          maxWidth: '780px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '2.5rem',
            opacity: 0.6,
          }}>
            The Shadow History of the World
          </p>
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
            color: '#E8DFC8',
            lineHeight: 1.85,
            fontStyle: 'italic',
            marginBottom: '2.5rem',
          }}>
            Behind every empire that ever rose or fell, behind every throne 
            and every conquest, forces older than Rome have been moving. 
            The Divine Council is not metaphor. The celestial war is not allegory. 
            The Shadow History is real — and it has been unfolding since the Tower of Babel.
          </p>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            margin: '0 auto',
          }} />
        </section>

        {/* THREE PILLARS */}
        <section style={{
          padding: '2rem 2rem 7rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: '#2A2318',
          }}>
            {[
              {
                symbol: '✦',
                title: 'The World',
                sub: 'Shadow History Codex',
                desc: "Explore the Divine Council worldview — the Elohim, the Mal'achim, and the celestial architecture behind human civilization. The theological framework that makes history legible.",
                href: '/world',
              },
              {
                symbol: '⚔',
                title: 'The Series',
                sub: 'Six Books. Two Trilogies.',
                desc: 'From the Tower of Babel to the exile of Yohanan on Patmos, the Ages to Come saga spans millennia of Shadow History across two interwoven trilogies.',
                href: '/series',
              },
              {
                symbol: '◈',
                title: 'Characters',
                sub: 'Mortal & Celestial',
                desc: "Meet the Mal'achim who guard, the Elohim who rebel, and the mortals caught in the crossfire of a war that began before humanity existed.",
                href: '/characters',
              },
            ].map((p, i) => (
              <a key={i} href={p.href} style={{
                display: 'block',
                background: '#12100C',
                padding: '3.5rem 2.5rem',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1C1810'}
              onMouseLeave={e => e.currentTarget.style.background = '#12100C'}
              >
                <div style={{
                  fontSize: '1.2rem',
                  color: '#C9A84C',
                  marginBottom: '2rem',
                  opacity: 0.5,
                }}>{p.symbol}</div>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.25rem',
                  color: '#C9A84C',
                  marginBottom: '0.4rem',
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#6B5C42',
                  marginBottom: '1.5rem',
                }}>{p.sub}</p>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '1rem',
                  color: '#A89878',
                  lineHeight: 1.75,
                }}>{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* BOOK 1 FEATURE */}
        <section style={{
          padding: '7rem 2rem',
          background: '#12100C',
          borderTop: '1px solid #2A2318',
          borderBottom: '1px solid #2A2318',
        }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.62rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '2rem',
              opacity: 0.6,
            }}>Book 1 — Now Available</p>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              color: '#C9A84C',
              marginBottom: '2rem',
            }}>The Age of the Unveiling</h2>
            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.15rem',
              color: '#A89878',
              lineHeight: 1.95,
              marginBottom: '3rem',
              fontStyle: 'italic',
            }}>
              The year is 95 AD. The Roman Empire rules the known world. 
              But behind the thrones of men, older powers are moving. 
              Yohanan — the last living witness of the Messiah — has been exiled to Patmos, 
              burdened with visions no mortal mind was meant to carry. 
              The scroll has been opened. The visions are unleashed. 
              And no empire — seen or unseen — will remain unshaken.
            </p>
            <a href="/series" style={{
              display: 'inline-block',
              padding: '1rem 2.8rem',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#0A0806',
              background: 'linear-gradient(135deg, #8B6914, #C9A84C)',
              textDecoration: 'none',
            }}>Read the Story</a>
          </div>
        </section>

        {/* EMAIL SIGNUP */}
        <section style={{
          padding: '7rem 2rem',
          maxWidth: '580px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            color: '#C9A84C',
            marginBottom: '1rem',
          }}>Join the Inner Circle</h2>
          {!submitted ? (
            <>
              <p style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '1.1rem',
                color: '#A89878',
                marginBottom: '2.5rem',
                fontStyle: 'italic',
              }}>
                Receive the first three chapters, exclusive lore entries, 
                and Shadow History research — before anyone else sees them.
              </p>
              <form onSubmit={handleSubmit} style={{ maxWidth: '460px', margin: '0 auto' }}>
                <div className="email-signup-row">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    style={{
                      padding: '1rem 1.5rem',
                      background: '#1C1810',
                      border: '1px solid #2A2318',
                      color: '#E8DFC8',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                  />
                  <button type="submit" style={{
                    padding: '1rem 1.8rem',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#0A0806',
                    background: 'linear-gradient(135deg, #8B6914, #C9A84C)',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}>Enter</button>
                </div>
              </form>
            </>
          ) : (
            <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
              <div style={{
                fontSize: '1.5rem',
                color: '#E2B96F',
                opacity: 0.4,
                marginBottom: '1.5rem',
              }}>✦</div>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: '#E2B96F',
                marginBottom: '1rem',
              }}>You're In.</h3>
              <p style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '1.1rem',
                color: '#C4AA88',
                fontStyle: 'italic',
                lineHeight: 1.85,
              }}>
                Welcome to the Inner Circle. Check your inbox — the first dispatch is on its way.
              </p>
            </div>
          )}
        </section>
      </main>

    </>
  )
}