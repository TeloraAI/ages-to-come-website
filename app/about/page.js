import Link from 'next/link'

const CREDS = [
  {
    title: 'M.A. in Science and Religion',
    where: 'Biola University',
    desc: 'An academic grounding in the intersection of ancient worldview, biblical theology, and the philosophy of history: the scholarly foundation beneath every chapter.',
  },
  {
    title: 'Hebrew under Dr. Michael Heiser',
    where: 'Personal study',
    desc: 'Brian studied Hebrew under Dr. Michael Heiser, whose landmark The Unseen Realm (2015) brought the Divine Council worldview into mainstream theological conversation. That relationship shaped the series at its deepest level.',
  },
  {
    title: 'Discovery Institute',
    where: 'Current role',
    desc: 'Brian works at the Discovery Institute, where questions of design, intelligence, and the nature of reality continue to inform the world the series inhabits.',
  },
  {
    title: 'Ship agent',
    where: 'Maritime career',
    desc: 'Years on Arctic tankers, through the Panama Canal, and in international ports gave Brian a firsthand feel for the sea-bound world his characters inhabit.',
  },
]

export const metadata = {
  title: 'About Brian Westad',
  description:
    'Brian Westad: ship agent, scholar, and author of The Ages to Come, shaped by years at sea and study under Dr. Michael Heiser.',
}

export default function About() {
  return (
    <main className="day">
      <header className="wrap page-head">
        <span className="label">The author</span>
        <h1>Brian Westad</h1>
        <p className="lead">
          Author, scholar, mariner. He spent years on the world’s oceans asking why empires rise
          and fall, and found the answer hidden in plain sight in the ancient texts.
        </p>
      </header>

      <section className="wrap section" style={{ paddingTop: 16 }}>
        <div className="prose">
          <span className="label">The journey</span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)' }}>Before the books, there were the ships.</h2>
          <p>
            Brian spent years working as a ship agent, a profession that took him across the globe,
            onto tankers in the Arctic, through the Panama Canal, and into ports most people only
            see on maps. It is a world of tides and manifests, of vessels that dwarf cathedrals, of
            long stretches of open water where the noise of ordinary life falls away and the deeper
            questions have room to surface.
          </p>
          <p>
            On the bridge of a tanker above the Arctic Circle, in the slow passage through the
            Panama Canal, in the waiting rooms of port authorities in cities whose names most people
            cannot place, the questions that would become The Ages to Come began to take shape. Why
            do empires rise? Why do they fall? What forces actually move history: not the ones in
            textbooks, but the ones beneath the surface that no official record captures?
          </p>
          <p>
            Those questions led him from the maritime world to the academic one, to a Master of Arts
            in Science and Religion from Biola University, and to studying Hebrew under the late
            Dr. Michael Heiser, whose work on the Divine Council worldview gave Brian the framework
            he had been searching for without knowing its name.
          </p>
          <p>
            The series that came out of that journey is seventeen years in the making, six books in
            scope, and driven by one conviction: that the Shadow History of the world is not a
            metaphor. It is the most important history never taught in schools, and it deserves to
            be told as the story it actually is.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap stack-lg">
          <span className="label">The scholarship</span>
          <div className="creds">
            {CREDS.map((c) => (
              <div className="cred" key={c.title}>
                <span className="label">{c.where}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="prose">
          <span className="label">The mission</span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)' }}>Theology too important to leave in the classroom</h2>
          <p>
            Dr. Michael Heiser spent his career making the Divine Council worldview accessible to
            people who had never heard the phrase. He believed, and Brian believes, that the biblical
            picture of a cosmos populated by divine beings, contested territories, and a celestial
            war behind human history is not fringe theology. It is the text, read honestly.
          </p>
          <p>
            The Ages to Come is the narrative embodiment of that conviction. Not a textbook. Not a
            sermon. A story, told with the full weight of the scholarship behind it and the full
            freedom of fiction in front of it, because some truths land harder in narrative than
            they ever could in argument.
          </p>
          <div className="actions" style={{ marginTop: 8 }}>
            <Link href="/lore" className="btn btn-primary">
              Explore the theology
            </Link>
            <Link href="/join" className="btn btn-ghost">
              Join the Inner Circle
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
