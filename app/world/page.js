'use client'

export default function World() {
  const locations = [
    {
      name: 'Patmos',
      region: 'Mediterranean',
      modern: 'Patmos, Greece',
      significance: 'Where the Apocalypse was written. Rome sent Yohanan here to be forgotten. Instead, the most comprehensive vision of celestial reality ever committed to writing was poured out on this forgotten island at the edge of the known world.',
      books: 'Book 1: The Age of the Unveiling',
    },
    {
      name: 'Melita (Malta)',
      region: 'Mediterranean',
      modern: 'Malta',
      significance: "Long before Rome, this was a Phoenician outpost — and that Phoenician foundation runs deeper into the Shadow History than any Roman cartographer recorded. After Paul's arrival, the supernatural powers shifted and the Light took firm root. By the time of Book 1, Melita is a beacon — governed by the Arborius family, descendants of Publius himself.",
      books: 'Book 1: The Age of the Unveiling',
    },
    {
      name: 'Ephesus',
      region: 'Roman Empire',
      modern: 'Selçuk, Turkey',
      significance: "The crown jewel of Roman Asia Minor — and the most heavily contested spiritual territory in the eastern empire. The Temple of Artemis was not merely a religious building. It was a territorial marker for the Elohim who claimed this city. The Way established its most significant eastern presence here — in the shadow of one of the Seven Wonders of the Ancient World.",
      books: 'Book 1: The Age of the Unveiling',
    },
    {
      name: 'Nicomedia',
      region: 'Roman Empire',
      modern: 'İzmit, Turkey',
      significance: 'The administrative capital of Bithynia and Pontus — and home to one of the most vibrant communities of the Way in the Roman world. The burning of the Nicomedian Ecclesia is one of the catalytic events of Book 1. The rebel Elohim tried to sever a node of Light. They dispersed it instead.',
      books: 'Book 1: The Age of the Unveiling',
    },
    {
      name: 'Rome',
      region: 'Roman Empire',
      modern: 'Rome, Italy',
      significance: "Rome was not an accident of geography. It was a project — conceived and carefully managed by Hostilius, the Prince of Rome in the celestial hierarchy. The most heavily contested piece of celestial real estate in the western world. Every road in the narrative leads here. The question The Ages to Come asks is — whose eternity does it ultimately serve?",
      books: 'Books 1, 3 & 5',
    },
  ]

  const regionColors = {
    'Mediterranean': '#1a3a2a',
    'Roman Empire': '#3a1a1a',
    'Celestial Realm': '#1a1a3a',
    'The Levant': '#2a2a1a',
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
          }}>The Shadow History Cycle</p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#E2B96F',
            marginBottom: '1.5rem',
          }}>The World</h1>
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
            Every location in The Ages to Come is a contested territory — 
            physical ground with a celestial history that runs far deeper 
            than any map has ever recorded.
          </p>
        </section>

        {/* Locations */}
        <section style={{
          padding: '4rem 2rem 6rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1px',
            background: '#2A2318',
          }}>
            {locations.map((loc, i) => (
              <div key={i} style={{
                background: '#0A0806',
                padding: '2.5rem',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#12100C'}
              onMouseLeave={e => e.currentTarget.style.background = '#0A0806'}
              >
                {/* Region tag */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.7rem',
                  background: regionColors[loc.region] || '#2A2318',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#E2B96F',
                  marginBottom: '1.5rem',
                }}>{loc.region}</div>

                {/* Name */}
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.4rem',
                  color: '#E2B96F',
                  marginBottom: '0.3rem',
                }}>{loc.name}</h3>

                {/* Modern name */}
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#6B5C42',
                  marginBottom: '1.5rem',
                }}>{loc.modern}</p>

                {/* Divider */}
                <div style={{
                  width: '40px', height: '1px',
                  background: '#2A2318',
                  marginBottom: '1.5rem',
                }} />

                {/* Significance */}
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '1rem',
                  color: '#C4AA88',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}>{loc.significance}</p>

                {/* Appears in */}
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6B5C42',
                }}>Appears in — <span style={{ color: '#A89878' }}>{loc.books}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Shadow History note */}
        <section style={{
          padding: '5rem 2rem',
          background: '#12100C',
          borderTop: '1px solid #2A2318',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              color: '#E2B96F',
              marginBottom: '1.5rem',
            }}>Every Location Has Two Histories</h2>
            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.1rem',
              color: '#C4AA88',
              lineHeight: 1.9,
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}>
              The history taught in schools — and the Shadow History beneath it. 
              The emperors and generals are real. The battles and borders are real. 
              But behind every throne, every temple, and every road, 
              the Elohim have been making moves that no historian has recorded 
              and no archaeologist has excavated.
            </p>
            <a href="/lore" style={{
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
            }}>Explore the Lore</a>
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