const PLACES = [
  {
    name: 'Patmos',
    region: 'Aegean',
    modern: 'Patmos, Greece',
    significance:
      'Where the Apocalypse was written. Rome sent Yohanan here to be forgotten. Instead, the most comprehensive vision of celestial reality ever committed to writing was poured out on this forgotten island at the edge of the known world.',
    books: 'Book 1',
  },
  {
    name: 'Melita',
    region: 'Mediterranean',
    modern: 'Malta',
    significance:
      'Long before Rome, this was a Phoenician outpost, and that foundation runs deeper into the Shadow History than any Roman cartographer recorded. After Paul’s arrival, the powers over the island shifted and the Light took firm root. By the time of Book 1, Melita is a beacon, governed by the Arborius family, descendants of Publius himself.',
    books: 'Book 1',
  },
  {
    name: 'Ephesus',
    region: 'Roman Asia',
    modern: 'Selçuk, Turkey',
    significance:
      'The crown jewel of Roman Asia Minor, and the most heavily contested spiritual territory in the eastern empire. The Temple of Artemis was not merely a religious building. It was a territorial marker for the Elohim who claimed this city. The Way established its most significant eastern presence here, in the shadow of one of the Seven Wonders of the ancient world.',
    books: 'Book 1',
  },
  {
    name: 'Nicomedia',
    region: 'Bithynia',
    modern: 'İzmit, Turkey',
    significance:
      'The administrative capital of Bithynia and Pontus, and home to one of the most vibrant communities of the Way in the Roman world. The burning of the Nicomedian Ecclesia is one of the catalytic events of Book 1. The rebel Elohim tried to sever a node of Light. They dispersed it instead.',
    books: 'Book 1',
  },
  {
    name: 'Rome',
    region: 'Italia',
    modern: 'Rome, Italy',
    significance:
      'Rome was not an accident of geography. It was a project, conceived and carefully managed by Hostilius, the Prince of Rome in the celestial hierarchy: the most heavily contested piece of celestial ground in the western world. Every road in the narrative leads here. The question the series asks is whose eternity it ultimately serves.',
    books: 'Books 1, 3 & 5',
  },
]

export const metadata = {
  title: 'The World',
  description:
    'The places of The Ages to Come: Patmos, Melita, Ephesus, Nicomedia, and Rome, each physical ground with a celestial history beneath it.',
}

export default function World() {
  return (
    <main className="day">
      <header className="wrap page-head">
        <span className="label">The World</span>
        <h1>Contested ground</h1>
        <p className="lead">
          Every place in The Ages to Come is physical ground with a celestial history running far
          deeper than any map has recorded.
        </p>
      </header>

      <section className="wrap section" style={{ paddingTop: 0 }} aria-label="Places">
        <div className="places">
          {PLACES.map((p) => (
            <article className="place" key={p.name}>
              <div>
                <span className="label">{p.region}</span>
                <h2>{p.name}</h2>
                <p className="where">Today: {p.modern}</p>
              </div>
              <div>
                <p>{p.significance}</p>
                <p className="appears">Appears in {p.books}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
