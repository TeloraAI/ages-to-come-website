'use client'
export default function Series() {
  const books = [
    {
      number: 1,
      title: "The Age of the Unveiling",
      trilogy: "Classical Trilogy",
      era: "95 AD — Roman Empire",
      status: "Completed",
      tagline: "Exile. Empire. Revelation. And the unseen war that binds them all.",
      synopsis: "The Apostle Yohanan is the last living witness, exiled on Patmos and haunted by visions of a coming storm. Joined by a young Roman nobleman and a courageous young woman, they are caught in the crosshairs of an ancient celestial feud, forced to choose between the safety of an empire and the dangerous light of the Way.",
    },
    {
      number: 2,
      title: "The Age of the Fall",
      trilogy: "Past Trilogy",
      era: "Tower of Babel to the Founding of Rome",
      status: "In Progress",
      tagline: "Before Rome fell to darkness, darkness had to fall first.",
      synopsis: "The origin story of the celestial rebellion. From the chaos of Babel to the founding of Rome, this volume reveals how Egeria rose to power, how she was betrayed by her ancient rival Hostilius, and how the seeds of a millennia-old war were planted in the foundations of human civilization.",
    },
    {
      number: 3,
      title: "The Age of the Clash",
      trilogy: "Classical Trilogy",
      era: "2nd Century AD — Roman-Parthian War",
      status: "Upcoming",
      tagline: "Two empires. One battlefield. And an alliance born in hell.",
      synopsis: "Rome turns its war machine toward Parthia. As Carolus, Amata, and Marcus flee toward Edessa, Egeria is forced into an uneasy alliance with her ancient rival Hostilius, while Niru Basamu orchestrates the downfall of his enemies from the shadows.",
    },
    {
      number: 4,
      title: "The Age of the Beasts",
      trilogy: "Past Trilogy",
      era: "Babylonian Empire through the Rise of Rome",
      status: "Upcoming",
      tagline: "Babylon. Persia. Alexander. Every empire had a master.",
      synopsis: "Niru Basamu raises Babylon to crush Assyria and exile the Hebrews. The narrative tracks the Elohim's hand through the Persian Empire, the world-altering conquests of Alexander the Great, and finally the birth of Rome — revealing the hidden architect behind every rising power.",
    },
    {
      number: 5,
      title: "The Age of the Reckoning",
      trilogy: "Classical Trilogy",
      era: "2nd Century AD — Fall of Parthia",
      status: "Upcoming",
      tagline: "Every war must end. Not every warrior survives it.",
      synopsis: "The climax of the Classical era. Rome conquers Parthia but turns its fury toward Edessa and the Secret Prince Arshok. Brennus faces his former companions as the final confrontation ignites. Niru Basamu springs his ultimate trap.",
    },
    {
      number: 6,
      title: "The Age of the Messiah",
      trilogy: "Past Trilogy",
      era: "Birth of the Messiah through the Exile of Yohanan",
      status: "Upcoming",
      tagline: "The pivot point of all history. And it happened in the dark.",
      synopsis: "The pivotal point of all history. From the birth of the Messiah to the challenge at Caesarea Philippi on Mount Hermon, the Resurrection shatters Niru Basamu's legal claim over humanity. The circle closes as Yohanan is exiled to Patmos.",
    },
  ]

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{
        padding: '5rem 2rem 3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #12100C 0%, #0A0806 100%)',
        borderBottom: '1px solid #2A2318',
      }}>
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          marginBottom: '1.5rem',
          opacity: 0.7,
        }}>
          The Shadow History Cycle
        </p>
        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          color: '#C9A84C',
          marginBottom: '1.5rem',
        }}>
          The Series
        </h1>
        <div style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          margin: '0 auto 2rem',
        }} />
        <p style={{
          fontFamily: "'Crimson Pro', serif",
          fontSize: '1.15rem',
          color: '#A89878',
          maxWidth: '600px',
          margin: '0 auto',
          fontStyle: 'italic',
        }}>
          Six books. Two interwoven trilogies. One Shadow History spanning from the Tower of Babel to the exile of the last Apostle.
        </p>
      </section>

      {/* Trilogy labels */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '3rem',
          padding: '2rem',
          background: '#12100C',
          border: '1px solid #2A2318',
        }}>
          {[
            { name: 'Classical Trilogy', books: 'Books 1, 3 & 5', desc: '1st–2nd Century AD — The early Church navigates the Roman-Parthian conflict as the shadow empire rises.' },
            { name: 'Past Trilogy', books: 'Books 2, 4 & 6', desc: 'Prehistoric to 1st Century — The ancient roots of the celestial rebellion, from Babel to the Messiah.' },
          ].map((t, i) => (
            <div key={i}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1rem',
                color: '#C9A84C',
                marginBottom: '0.3rem',
              }}>{t.name}</h3>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#6B5C42',
                textTransform: 'uppercase',
                marginBottom: '0.8rem',
              }}>{t.books}</p>
              <p style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: '0.95rem',
                color: '#A89878',
              }}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Books list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {books.map((book) => (
            <div key={book.number} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '0',
              background: '#12100C',
              border: '1px solid #2A2318',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#8B6914'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2318'}
            >
              {/* Number column */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: '1px solid #2A2318',
                padding: '2rem',
                background: book.status === 'Completed' ? 'rgba(201,168,76,0.05)' : 'transparent',
              }}>
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: book.status === 'Completed' ? '#C9A84C' : '#2A2318',
                }}>
                  {book.number}
                </span>
              </div>

              {/* Content column */}
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: book.trilogy === 'Classical Trilogy' ? '#8B6914' : '#6B5C42',
                    border: `1px solid ${book.trilogy === 'Classical Trilogy' ? '#8B6914' : '#2A2318'}`,
                    padding: '0.2rem 0.6rem',
                  }}>
                    {book.trilogy}
                  </span>
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: book.status === 'Completed' ? '#C9A84C' : book.status === 'In Progress' ? '#A89878' : '#6B5C42',
                    border: `1px solid ${book.status === 'Completed' ? '#8B6914' : '#2A2318'}`,
                    padding: '0.2rem 0.6rem',
                  }}>
                    {book.status}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  color: '#C9A84C',
                  marginBottom: '0.3rem',
                }}>
                  {book.title}
                </h3>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: '#6B5C42',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}>
                  {book.era}
                </p>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '1rem',
                  color: '#A89878',
                  fontStyle: 'italic',
                  marginBottom: '0.8rem',
                }}>
                  "{book.tagline}"
                </p>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '0.95rem',
                  color: '#6B5C42',
                  lineHeight: 1.7,
                }}>
                  {book.synopsis}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
