'use client'

export default function Lore() {
  const entries = [
    {
      title: 'The Divine Council',
      category: 'Theology / Divine Council',
      aka: 'The Council of El, The Heavenly Assembly, The Sons of God',
      reference: 'Psalm 82, Deuteronomy 32:8-9, Job 1-2',
      summary: 'The governing reality behind every empire, every nation, and every geopolitical shift in human history. The Creator presided over an assembly of divine beings — the Elohim — each assigned stewardship over portions of humanity following the catastrophic rebellion at the Tower of Babel.',
    },
    {
      title: 'The Elohim',
      category: 'Theology / Divine Council',
      aka: 'Sons of God, Divine Beings, The Watchers, Gods of the Nations',
      reference: 'Deuteronomy 32:17, Psalm 82:1-6, Genesis 6:1-4',
      summary: 'Elohim is a category, not a name. It describes a class of divine beings that includes the Creator himself, the members of his heavenly council, and the rebel powers assigned to the nations. The rebel Elohim have been operating behind the thrones of human civilization since the Tower of Babel.',
    },
    {
      title: "The Mal'achim",
      category: 'Theology / Divine Council',
      aka: 'Angels, Messengers, Heavenly Warriors, The Faithful',
      reference: 'Hebrews 1:14, Daniel 10:10-13, Revelation 8:2',
      summary: "The faithful servants of Theos who operate at the boundary between the celestial and physical realms. Unlike the Elohim, the Mal'achim operate under direct commission. They do not act on their own agenda. Every intervention costs something. Every appearance in the physical realm is a calculated strategic move.",
    },
    {
      title: 'The Nephilim & The Rhihutu',
      category: 'Theology / Divine Council',
      aka: 'The Giants, The Fallen Ones, The Blood of the Watchers',
      reference: 'Genesis 6:1-4, Numbers 13:33, 1 Enoch 6-16',
      summary: 'The offspring of the Sons of God and the daughters of men. Their bloodline — diluted, scattered, and carefully tracked by the rebel Elohim across millennia — persists into the first century world. Those who carry this heritage are known as the Rhihutu. To Egeria they are not people — they are assets. Weapons forged across generations.',
    },
    {
      title: 'The Tower of Babel',
      category: 'Historical Event',
      aka: 'Babel, The Dispersion, The Division of Nations, The Disinheritance',
      reference: 'Genesis 11:1-9, Deuteronomy 32:8-9, Jubilees 10',
      summary: 'The pivot point of all human history. Not merely a story about language — but the moment that established the geopolitical and spiritual architecture of every civilization that followed. The Creator divided the nations and assigned each to divine stewards. What those stewards did with that authority is the Shadow History of the world.',
    },
  ]

  const categoryColors = {
    'Theology / Divine Council': '#1a3a4a',
    'Historical Event': '#3a2a1a',
    'Faction': '#2a1a3a',
    'Concept / Term': '#1a3a1a',
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

      <main style={{ paddingTop: '80px' }}>
        {/* Header */}
        <section style={{
          padding: '5rem 2rem 4rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #12100C 0%, #0A0806 100%)',
          borderBottom: '1px solid #2A2318',
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#E2B96F',
            marginBottom: '1.5rem',
            opacity: 0.7,
          }}>Shadow History Codex</p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#E2B96F',
            marginBottom: '1.5rem',
          }}>The Lore</h1>
          <div style={{
            width: '60px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #E2B96F, transparent)',
            margin: '0 auto 2rem',
          }} />
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.1rem',
            color: '#C4AA88',
            maxWidth: '580px',
            margin: '0 auto',
            fontStyle: 'italic',
          }}>
            The theological and historical framework behind The Ages to Come. 
            The Divine Council worldview — grounded in Scripture, 
            illuminated by scholarship, brought to life in narrative.
          </p>
        </section>

        {/* Heiser callout */}
        <section style={{
          padding: '3rem 2rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          borderBottom: '1px solid #2A2318',
        }}>
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.05rem',
            color: '#6B5C42',
            fontStyle: 'italic',
            lineHeight: 1.8,
          }}>
            The scholarly framework behind this series was most accessibly articulated 
            by the late Dr. Michael Heiser in{' '}
            <span style={{ color: '#C4AA88' }}>The Unseen Realm</span> (2015). 
            The Ages to Come serves as its narrative embodiment — 
            bringing the Divine Council worldview to life through the grit of Roman streets 
            and the quiet courage of people who chose the Way.
          </p>
        </section>

        {/* Lore Entries */}
        <section style={{
          padding: '4rem 2rem 6rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#2A2318' }}>
            {entries.map((entry, i) => (
              <div key={i} style={{
                background: '#0A0806',
                padding: '3rem',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#12100C'}
              onMouseLeave={e => e.currentTarget.style.background = '#0A0806'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                  {/* Left column */}
                  <div style={{ minWidth: '200px', flex: '0 0 200px' }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.7rem',
                      background: categoryColors[entry.category] || '#2A2318',
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.55rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#E2B96F',
                      marginBottom: '1rem',
                    }}>{entry.category}</div>

                    <h3 style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.2rem',
                      color: '#E2B96F',
                      marginBottom: '1rem',
                      lineHeight: 1.3,
                    }}>{entry.title}</h3>

                    {entry.aka && (
                      <div style={{ marginBottom: '0.8rem' }}>
                        <p style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: '0.55rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#6B5C42',
                          marginBottom: '0.3rem',
                        }}>Also Known As</p>
                        <p style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: '0.85rem',
                          color: '#A89878',
                          fontStyle: 'italic',
                        }}>{entry.aka}</p>
                      </div>
                    )}

                    {entry.reference && (
                      <div>
                        <p style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: '0.55rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#6B5C42',
                          marginBottom: '0.3rem',
                        }}>Scripture</p>
                        <p style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: '0.85rem',
                          color: '#A89878',
                        }}>{entry.reference}</p>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div style={{
                    width: '1px',
                    alignSelf: 'stretch',
                    background: '#2A2318',
                    flexShrink: 0,
                  }} />

                  {/* Right column — summary */}
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <p style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '1.05rem',
                      color: '#C4AA88',
                      lineHeight: 1.85,
                    }}>{entry.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>The Ages to Come © 2026 Brian Westad — The Shadow History Cycle</p>
        <p className="footer-sub">Empires rise and fall in history — but behind them, unseen powers have been waging a far older war.</p>
      </footer>
    </>
  )
}