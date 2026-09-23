const BOOKS = [
  {
    number: 1,
    title: 'The Age of the Unveiling',
    trilogy: 'Classical',
    era: '95 AD · Roman Empire',
    status: 'Complete',
    tagline: 'Exile. Empire. Revelation. And the unseen war that binds them all.',
    synopsis:
      'The Apostle Yohanan is the last living witness, exiled on Patmos and haunted by visions of a coming storm. Joined by a young Roman nobleman and a courageous young woman, they are caught in the crosshairs of an ancient celestial feud, forced to choose between the safety of an empire and the dangerous light of the Way.',
  },
  {
    number: 2,
    title: 'The Age of the Fall',
    trilogy: 'Past',
    era: 'Tower of Babel to the founding of Rome',
    status: 'In progress',
    tagline: 'Before Rome fell to darkness, darkness had to fall first.',
    synopsis:
      'The origin story of the celestial rebellion. From the chaos of Babel to the founding of Rome, this volume reveals how Egeria rose to power, how she was betrayed by her ancient rival Hostilius, and how the seeds of a millennia-old war were planted in the foundations of human civilization.',
  },
  {
    number: 3,
    title: 'The Age of the Clash',
    trilogy: 'Classical',
    era: '2nd century AD · Roman–Parthian War',
    status: 'Upcoming',
    tagline: 'Two empires. One battlefield. And an alliance born in hell.',
    synopsis:
      'Rome turns its war machine toward Parthia. As Carolus, Amata, and Marcus flee toward Edessa, Egeria is forced into an uneasy alliance with her ancient rival Hostilius, while Niru Basamu orchestrates the downfall of his enemies from the shadows.',
  },
  {
    number: 4,
    title: 'The Age of the Beasts',
    trilogy: 'Past',
    era: 'Babylonian Empire through the rise of Rome',
    status: 'Upcoming',
    tagline: 'Babylon. Persia. Alexander. Every empire had a master.',
    synopsis:
      'Niru Basamu raises Babylon to crush Assyria and exile the Hebrews. The narrative tracks the Elohim’s hand through the Persian Empire, the world-altering conquests of Alexander the Great, and finally the birth of Rome, revealing the hidden architect behind every rising power.',
  },
  {
    number: 5,
    title: 'The Age of the Reckoning',
    trilogy: 'Classical',
    era: '2nd century AD · Fall of Parthia',
    status: 'Upcoming',
    tagline: 'Every war must end. Not every warrior survives it.',
    synopsis:
      'The climax of the Classical era. Rome conquers Parthia but turns its fury toward Edessa and the Secret Prince Arshok. Brennus faces his former companions as the final confrontation ignites. Niru Basamu springs his ultimate trap.',
  },
  {
    number: 6,
    title: 'The Age of the Messiah',
    trilogy: 'Past',
    era: 'Birth of the Messiah through the exile of Yohanan',
    status: 'Upcoming',
    tagline: 'The pivot point of all history. And it happened in the dark.',
    synopsis:
      'From the birth of the Messiah to the challenge at Caesarea Philippi on Mount Hermon, the Resurrection shatters Niru Basamu’s legal claim over humanity. The circle closes as Yohanan is exiled to Patmos.',
  },
]

export const metadata = {
  title: 'The Series',
  description:
    'Six books, two interwoven trilogies: the Classical Trilogy in the 1st–2nd century Roman world, and the Past Trilogy from Babel to the Messiah.',
}

export default function Series() {
  return (
    <main className="day">
      <header className="wrap page-head">
        <span className="label">The Series</span>
        <h1>Six books, two trilogies</h1>
        <p className="lead">
          One Shadow History, from the Tower of Babel to the exile of the last apostle, told in two
          trilogies that answer each other.
        </p>
      </header>

      <section className="wrap" aria-label="The two trilogies">
        <div className="trilogies">
          <div className="trilogy">
            <span className="label">Books 1, 3 &amp; 5</span>
            <h2>The Classical Trilogy</h2>
            <p>1st–2nd century AD. The early Church navigates the Roman–Parthian conflict as the shadow empire rises.</p>
          </div>
          <div className="trilogy">
            <span className="label">Books 2, 4 &amp; 6</span>
            <h2>The Past Trilogy</h2>
            <p>Prehistory to the 1st century. The ancient roots of the celestial rebellion, from Babel to the Messiah.</p>
          </div>
        </div>
      </section>

      <section className="wrap section" aria-label="The books">
        <ol className="books">
          {BOOKS.map((b) => (
            <li className="book" key={b.number}>
              <span className="book-num" aria-hidden="true">
                {b.number}
              </span>
              <div className="stack">
                <div className="book-meta">
                  <span className="sr-only">Book {b.number}. </span>
                  <span>{b.trilogy} Trilogy</span>
                  <span>{b.era}</span>
                  <span className={`status${b.status === 'Complete' ? ' status-complete' : ''}`}>{b.status}</span>
                </div>
                <h2>{b.title}</h2>
                <p className="tag">“{b.tagline}”</p>
                <p className="synopsis">{b.synopsis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
