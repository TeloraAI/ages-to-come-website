'use client'

export default function Characters() {
  const characters = [
    {
      name: 'Yohanan',
      type: 'Mortal',
      allegiance: 'Theos / The Way',
      role: 'The last living witness of the Messiah — exiled on Patmos',
      bio: 'Yohanan has outlived everyone. Every companion, every fellow witness, every person who looked the Messiah in the eye. On Patmos, stripped of everything Rome could take, he receives the Apocalypse — the most comprehensive vision of celestial reality ever committed to writing.',
      tag: 'Apostle',
    },
    {
      name: 'Carolus',
      type: 'Mortal',
      allegiance: 'Theos / The Way',
      role: 'Roman nobleman whose journey from imperial privilege to radical faith anchors the story',
      bio: 'Born into everything Rome promised its best citizens. Trained to build. To order and master the world. His encounter with Yohanan on Patmos does not convert him instantly — it unsettles him completely. And an unsettled Carolus is more dangerous to the shadow empire than a believing one.',
      tag: 'Protagonist',
    },
    {
      name: 'Amata',
      type: 'Mortal',
      allegiance: 'Theos / The Way',
      role: 'The moral compass of the mortal cast',
      bio: 'Amata enters the story as a victim — taken, displaced, reduced to property in the brutal accounting of the Roman world. What the Roman world did not anticipate is what she does with that. She sees people accurately. She sees situations accurately. In a world manipulated by celestial beings, that gift is more valuable than any sword.',
      tag: 'Protagonist',
    },
    {
      name: 'Marcus',
      type: 'Nephilim / Rhihutu',
      allegiance: 'Theos / The Way',
      role: 'The living proof that grace is stronger than blood',
      bio: 'Marcus carries the blood of the Nephilim through an unbroken line stretching back to Babel. Egeria has been aware of him since before he was born — to her, he is a weapon forged across generations, bound by a shadow chain he cannot see. What she cannot account for is Telora. And the moment the chain is severed.',
      tag: 'Protagonist',
    },
    {
      name: 'Brennus Curtius',
      type: 'Mortal',
      allegiance: 'Rebel Elohim',
      role: "Niru Basamu's long-cultivated human agent",
      bio: 'Charming, intelligent, disciplined, and genuinely capable of warmth — which makes him more dangerous than cruelty ever could. He looked at what was being offered and said yes. Not out of ignorance. Not out of desperation. Out of a cold, clear-eyed calculation that the shadow empire offered him something the Way could not — certainty.',
      tag: 'Antagonist',
    },
    {
      name: 'Telora',
      type: "Mal'achim",
      allegiance: 'Theos / The Way',
      role: 'Guardian Mal\'ach assigned to protect the bearers of the Apocalypse scroll',
      bio: "One of the faithful Mal'achim — a celestial messenger and warrior operating under the direct authority of Theos. Neither fully visible to mortals nor fully absent from their world. It is Telora who severs the shadow chain binding Marcus — an act that costs more than mortals will ever know.",
      tag: "Mal'achim",
    },
    {
      name: 'Elihu',
      type: "Mal'achim",
      allegiance: 'Theos / The Way',
      role: 'Elder Mal\'ach — the voice of wisdom and ancient knowledge',
      bio: "Where Telora is the sword, Elihu is the counsel. Ancient even by celestial reckoning, Elihu carries the weight of having witnessed every age of human history — from the chaos of Babel to the exile of Yohanan. He understands the rebel Elohim not as abstractions but as former companions whose fall he watched in real time.",
      tag: "Mal'achim",
    },
    {
      name: 'Egeria',
      type: 'Elohim',
      allegiance: 'Rebel Elohim',
      role: 'Fallen Elohim and primary celestial antagonist of the Classical Trilogy',
      bio: 'Once a member of the Divine Council in good standing, her fall was not born of blind ambition but of betrayal. She has spent millennia building her shadow empire within Rome, whispering through its emperors and senators. Her tragedy is that she is not entirely wrong about the world. She simply cannot bring herself to believe in anything beyond it.',
      tag: 'Elohim',
    },
    {
      name: 'Niru Basamu',
      type: 'Elohim',
      allegiance: 'Rebel Elohim',
      role: 'The supreme celestial strategist — the power behind every throne from Babylon to Parthia',
      bio: 'If Egeria is the face of the rebellion, Niru Basamu is its spine. Patient beyond mortal comprehension, he has been executing a single strategy since the Tower of Babel. Every empire that has risen and fallen has been a move on his board. He does not recruit human agents out of desperation — he cultivates them over generations.',
      tag: 'Elohim',
    },
  ]

  const tagColors = {
    'Apostle': '#8B6914',
    'Protagonist': '#1a4a1a',
    'Antagonist': '#4a1a1a',
    "Mal'achim": '#1a3a4a',
    'Elohim': '#3a1a4a',
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
          }}>Characters</h1>
          <div style={{
            width: '60px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #E2B96F, transparent)',
            margin: '0 auto 2rem',
          }} />
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.1rem',
            color: '#C4AA88',
            maxWidth: '550px',
            margin: '0 auto',
            fontStyle: 'italic',
          }}>
            Mortal and celestial. Faithful and rebel. Ancient and young. 
            Every character in the Shadow History has a role — whether they chose it or not.
          </p>
        </section>

        {/* Characters Grid */}
        <section style={{
          padding: '4rem 2rem 6rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1px',
            background: '#2A2318',
          }}>
            {characters.map((char, i) => (
              <div key={i} style={{
                background: '#0A0806',
                padding: '2.5rem',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#12100C'}
              onMouseLeave={e => e.currentTarget.style.background = '#0A0806'}
              >
                {/* Tag */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.7rem',
                  background: tagColors[char.tag] || '#2A2318',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.58rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#E2B96F',
                  marginBottom: '1.5rem',
                }}>{char.tag}</div>

                {/* Name */}
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.4rem',
                  color: '#E2B96F',
                  marginBottom: '0.3rem',
                }}>{char.name}</h3>

                {/* Type & Allegiance */}
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#6B5C42',
                  marginBottom: '0.2rem',
                }}>{char.type}</p>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: char.allegiance.includes('Rebel') ? '#8B3a3a' : '#3a6B3a',
                  marginBottom: '1.2rem',
                }}>{char.allegiance}</p>

                {/* Divider */}
                <div style={{
                  width: '40px', height: '1px',
                  background: '#2A2318',
                  marginBottom: '1.2rem',
                }} />

                {/* Role */}
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '0.95rem',
                  color: '#C4AA88',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  lineHeight: 1.6,
                }}>{char.role}</p>

                {/* Bio */}
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '0.9rem',
                  color: '#6B5C42',
                  lineHeight: 1.75,
                }}>{char.bio}</p>
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