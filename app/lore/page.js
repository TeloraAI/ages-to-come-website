const ENTRIES = [
  {
    title: 'The Divine Council',
    category: 'Theology',
    aka: 'The Council of El, the Heavenly Assembly, the Sons of God',
    reference: 'Psalm 82; Deuteronomy 32:8–9; Job 1–2',
    summary:
      'The governing reality behind every empire, every nation, and every geopolitical shift in human history. The Creator presided over an assembly of divine beings, the Elohim, each assigned stewardship over portions of humanity after the catastrophic rebellion at the Tower of Babel.',
  },
  {
    title: 'The Elohim',
    category: 'Theology',
    aka: 'Sons of God, divine beings, the gods of the nations',
    reference: 'Deuteronomy 32:17; Psalm 82:1–6; Genesis 6:1–4',
    summary:
      'Elohim is a category, not a name. It describes a class of divine beings that includes the Creator himself, the members of his heavenly council, and the rebel powers assigned to the nations. The rebel Elohim have been operating behind the thrones of human civilization since the Tower of Babel.',
  },
  {
    title: 'The Mal’achim',
    category: 'Theology',
    aka: 'Angels, messengers, heavenly warriors, the faithful',
    reference: 'Hebrews 1:14; Daniel 10:10–13; Revelation 8:2',
    summary:
      'The faithful servants of Theos who work at the boundary between the celestial and physical realms. Unlike the Elohim, the Mal’achim act under direct commission, never on their own agenda. Every intervention costs something. Every appearance in the physical realm is a calculated move.',
  },
  {
    title: 'The Nephilim & the Rhihutu',
    category: 'Theology',
    aka: 'The giants, the fallen ones, the blood of the Watchers',
    reference: 'Genesis 6:1–4; Numbers 13:33; 1 Enoch 6–16',
    summary:
      'The offspring of the sons of God and the daughters of men. Their bloodline, diluted, scattered, and carefully tracked by the rebel Elohim across millennia, persists into the first-century world. Those who carry it are known as the Rhihutu. To Egeria they are not people but assets: weapons forged across generations.',
  },
  {
    title: 'The Tower of Babel',
    category: 'Historical event',
    aka: 'Babel, the Dispersion, the Division of Nations, the Disinheritance',
    reference: 'Genesis 11:1–9; Deuteronomy 32:8–9; Jubilees 10',
    summary:
      'The pivot point of human history. Not merely a story about language, but the moment that set the geopolitical and spiritual architecture of every civilization that followed. The Creator divided the nations and assigned each to divine stewards. What those stewards did with that authority is the Shadow History of the world.',
  },
]

export const metadata = {
  title: 'Lore',
  description:
    'The Shadow History Codex: the Divine Council worldview behind The Ages to Come, grounded in Scripture and the scholarship of Dr. Michael Heiser.',
}

export default function Lore() {
  return (
    <main className="night night-page">
      <header className="wrap page-head">
        <span className="label">Shadow History Codex</span>
        <h1>The Lore</h1>
        <p className="lead">
          The theological and historical framework behind The Ages to Come: the Divine Council
          worldview, grounded in Scripture, illuminated by scholarship, and brought to life in
          narrative.
        </p>
      </header>

      <section className="wrap" aria-label="About the framework">
        <p className="source-note">
          The scholarly framework behind this series was most accessibly set out by the late Dr.
          Michael Heiser in <cite>The Unseen Realm</cite> (2015). The Ages to Come is its narrative
          embodiment, bringing the Divine Council worldview to life through the grit of Roman
          streets and the quiet courage of people who chose the Way.
        </p>
      </section>

      <section className="wrap section" aria-label="Codex entries">
        <div className="codex">
          {ENTRIES.map((e) => (
            <article className="entry" key={e.title}>
              <div>
                <span className="label">{e.category}</span>
                <h2 style={{ marginTop: 6 }}>{e.title}</h2>
                <dl>
                  <div>
                    <dt>Also known as</dt>
                    <dd>{e.aka}</dd>
                  </div>
                  <div>
                    <dt>Scripture</dt>
                    <dd>{e.reference}</dd>
                  </div>
                </dl>
              </div>
              <p>{e.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
