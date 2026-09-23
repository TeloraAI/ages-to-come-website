import SignupForm from '../components/SignupForm'

const PERKS = [
  {
    title: 'The first three chapters, free',
    desc: 'Read the opening of The Age of the Unveiling before it launches: Yohanan on Patmos, the vision, and the storm that changes everything.',
  },
  {
    title: 'Exclusive lore entries',
    desc: 'Shadow History Codex entries that aren’t published on the site: deeper dives into the Divine Council theology behind the story.',
  },
  {
    title: 'Kickstarter early access',
    desc: 'Inner Circle members get first access to the Kickstarter campaign before it goes public, with early-backer rewards.',
  },
  {
    title: 'Shadow History dispatches',
    desc: 'Brian’s research notes, theological discoveries, and behind-the-scenes writing updates, sent straight to your inbox.',
  },
]

export const metadata = {
  title: 'Join the Inner Circle',
  description:
    'Get the first three chapters of The Age of the Unveiling free, plus exclusive lore and early access, by joining the Inner Circle.',
}

export default function Join() {
  return (
    <main className="day">
      <header className="wrap page-head">
        <span className="label">The Inner Circle</span>
        <h1>Read it before anyone else</h1>
        <p className="lead">The Shadow History has been unfolding since Babel. Join the list and start with the first three chapters.</p>
        <div style={{ marginTop: 28 }}>
          <SignupForm id="join" />
        </div>
      </header>

      <section className="wrap section" style={{ paddingTop: 24 }} aria-label="What members get">
        <div className="perks">
          {PERKS.map((p) => (
            <div className="perk" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
