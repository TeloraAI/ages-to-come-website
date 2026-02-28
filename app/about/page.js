'use client'

export default function About() {
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

        {/* HEADER */}
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
          }}>Brian Westad</h1>
          <div style={{
            width: '60px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #E2B96F, transparent)',
            margin: '0 auto 2rem',
          }} />
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.15rem',
            color: '#C4AA88',
            maxWidth: '580px',
            margin: '0 auto',
            fontStyle: 'italic',
          }}>
            Author. Scholar. Mariner. The man who spent years on the world's 
            oceans asking why empires rise and fall — and who found the answer 
            hidden in plain sight in the ancient texts.
          </p>
        </section>

        {/* ORIGIN STORY */}
        <section style={{
          padding: '6rem 2rem',
          maxWidth: '780px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#E2B96F',
            marginBottom: '2rem',
            opacity: 0.6,
          }}>The Journey</p>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.2rem',
            color: '#E8DFC8',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}>
            Before The Ages to Come, there were the ships.
          </p>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.1rem',
            color: '#C4AA88',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}>
            Brian Westad spent years working as a ship agent — a profession that 
            took him across the globe, onto tankers in the Arctic, through the Panama Canal, 
            and into ports that most people only see on maps. It is a world of tides and 
            manifests, of vessels that dwarf cathedrals, of vast stretches of open water 
            where the noise of ordinary life falls away and the deeper questions have room 
            to surface.
          </p>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.1rem',
            color: '#C4AA88',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}>
            It was in those spaces — on the bridge of a tanker somewhere above the Arctic 
            Circle, in the slow passage through the Panama Canal, in the waiting rooms of 
            port authorities in cities whose names most people cannot place — that the 
            questions that would eventually become The Ages to Come began to take shape. 
            Why do empires rise? Why do they fall? What are the forces that actually move 
            history — not the forces that appear in textbooks, but the ones operating 
            beneath the surface, pulling strings that no official record ever captures?
          </p>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.1rem',
            color: '#C4AA88',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}>
            Those questions led Brian from the maritime world to the academic one — 
            and eventually to a Master of Arts in Science and Religion from Biola University, 
            where his fascination with the intersection of ancient text, history, and 
            unseen reality found its scholarly home. It also led him to study Hebrew 
            under the late Dr. Michael Heiser — one of the most important biblical scholars 
            of the last generation and the man whose work on the Divine Council worldview 
            gave Brian the theological framework he had been searching for without knowing 
            its name.
          </p>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: '1.1rem',
            color: '#C4AA88',
            lineHeight: 1.9,
          }}>
            The series that emerged from that journey is The Ages to Come — 
            seventeen years in the making, six books in scope, and one animating conviction: 
            that the Shadow History of the world is not a metaphor. It is the most 
            important history never taught in schools. And it deserves to be told 
            as the story it actually is.
          </p>
        </section>

        {/* DIVIDER */}
        <div style={{
          width: '120px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #2A2318, transparent)',
          margin: '0 auto',
        }} />

        {/* SCHOLARSHIP */}
        <section style={{
          padding: '6rem 2rem',
          maxWidth: '780px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#E2B96F',
            marginBottom: '2rem',
            opacity: 0.6,
          }}>The Scholarship</p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            background: '#2A2318',
            marginBottom: '3rem',
          }}>
            {[
              {
                title: 'M.A. in Science and Religion',
                institution: 'Biola University',
                desc: "A rigorous academic grounding in the intersection of ancient worldview, biblical theology, and the philosophy of history — the scholarly foundation beneath every chapter of The Ages to Come.",
              },
              {
                title: 'Hebrew Studies under Dr. Michael Heiser',
                institution: 'Personal Study',
                desc: "Brian had the rare privilege of studying Hebrew under Dr. Michael Heiser — the scholar whose landmark work The Unseen Realm (2015) brought the Divine Council worldview into accessible, mainstream theological conversation. That relationship shaped the series at its deepest level.",
              },
              {
                title: 'Discovery Institute',
                institution: 'Current Role',
                desc: "Brian currently works at the Discovery Institute, where his engagement with questions of design, intelligence, and the nature of reality continues to inform his understanding of the world the series inhabits.",
              },
              {
                title: 'Maritime Career',
                institution: 'Ship Agent — Global',
                desc: "Years working as a ship agent across the globe — Arctic tankers, the Panama Canal, international ports — gave Brian both a firsthand understanding of the ancient Mediterranean world his characters inhabit and the long stretches of open water where the deepest questions demand answers.",
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#0A0806',
                padding: '2rem 2.5rem',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#12100C'}
              onMouseLeave={e => e.currentTarget.style.background = '#0A0806'}
              >
                <h4 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.95rem',
                  color: '#E2B96F',
                  marginBottom: '0.3rem',
                }}>{item.title}</h4>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#6B5C42',
                  marginBottom: '0.8rem',
                }}>{item.institution}</p>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '1rem',
                  color: '#A89878',
                  lineHeight: 1.75,
                  margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{
          width: '120px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #2A2318, transparent)',
          margin: '0 auto',
        }} />

        {/* THE MISSION */}
        <section style={{
          padding: '6rem 2rem',
          background: '#12100C',
          borderTop: '1px solid #2A2318',
          borderBottom: '1px solid #2A2318',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#E2B96F',
              marginBottom: '2rem',
              opacity: 0.6,
            }}>The Mission</p>

            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              color: '#E2B96F',
              marginBottom: '2rem',
              lineHeight: 1.3,
            }}>
              Theology Too Important<br />to Leave in the Classroom
            </h2>

            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.15rem',
              color: '#C4AA88',
              lineHeight: 1.9,
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            }}>
              Dr. Michael Heiser spent his career making the Divine Council worldview 
              accessible to people who had never heard the phrase. He believed — 
              and Brian believes — that the biblical picture of a cosmos populated 
              by divine beings, contested territories, and a celestial war behind 
              human history is not fringe theology. It is the text, read honestly.
            </p>

            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: '1.15rem',
              color: '#C4AA88',
              lineHeight: 1.9,
              marginBottom: '3rem',
            }}>
              The Ages to Come is the narrative embodiment of that conviction. 
              Not a textbook. Not a sermon. A story — told with the full weight 
              of the scholarship behind it and the full freedom of fiction in front of it. 
              Because some truths land harder in narrative than they ever could in argument. 
              And this truth has been waiting for its story for a very long time.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/lore" style={{
                display: 'inline-block',
                padding: '0.9rem 2.5rem',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0A0806',
                background: 'linear-gradient(135deg, #8B6914, #E2B96F)',
                textDecoration: 'none',
              }}>Explore the Theology</a>
              <a href="/join" style={{
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
              }}>Join the Inner Circle</a>
            </div>
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