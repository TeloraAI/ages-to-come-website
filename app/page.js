import Link from 'next/link'
import Image from 'next/image'
import Horizon from './components/Horizon'
import SignupForm from './components/SignupForm'
import { mortals, celestials } from '../lib/characters'

const DOORS = [
  {
    href: '/series',
    title: 'The Series',
    sub: 'Six books, two trilogies',
    desc: 'From the Tower of Babel to the exile of Yohanan on Patmos, the saga spans millennia across two interwoven trilogies.',
  },
  {
    href: '/lore',
    title: 'The Codex',
    sub: 'The Divine Council',
    desc: 'The Elohim, the Mal’achim, and the celestial architecture behind human civilization: the framework that makes the history legible.',
  },
  {
    href: '/characters',
    title: 'Characters',
    sub: 'Mortal and celestial',
    desc: 'The Mal’achim who guard, the Elohim who rebel, and the mortals caught in the crossfire of a war that began before humanity existed.',
  },
]

const CAST = ['yohanan', 'carolus', 'amata', 'elihu', 'telora', 'egeria']

export default function Home() {
  const everyone = [...mortals, ...celestials]
  const cast = CAST.map((slug) => everyone.find((c) => c.slug === slug)).filter(Boolean)

  return (
    <main className="day">
      <section className="hero">
        <div className="wrap">
          <span className="label">Brian Westad · The Shadow History Cycle</span>
          <h1>The Ages to Come</h1>
          <p className="hero-book">Book 1: The Age of the Unveiling</p>
          <p className="tagline">Exile. Empire. Revelation. And the unseen war that binds them all.</p>
          <div className="actions">
            <Link href="/series" className="btn btn-primary">
              Discover the series
            </Link>
            <Link href="/characters" className="btn btn-ghost">
              Meet the characters
            </Link>
          </div>
          <p className="greek" lang="grc">
            ἐγὼ Ἰωάννης … ἐγενόμην ἐν τῇ νήσῳ τῇ καλουμένῃ Πάτμῳ
            <span lang="en">“I, John … was on the island called Patmos.” Revelation 1:9</span>
          </p>
        </div>
      </section>

      <Horizon note="The Shadow History of the world">
        Behind every empire that ever rose or fell, forces older than Rome have been moving.
      </Horizon>

      <section className="night">
        <div className="wrap section">
          <div className="prose narrow">
            <p className="lead" style={{ color: 'var(--text)' }}>
              The Divine Council is not metaphor. The celestial war is not allegory. The Shadow
              History is real, and it has been unfolding since the Tower of Babel.
            </p>
          </div>
          <div className="doors" style={{ marginTop: 48 }}>
            {DOORS.map((d) => (
              <Link key={d.href} href={d.href} className="door">
                <span className="label">{d.sub}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <span className="go">Enter →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Horizon dawn />

      <section className="section">
        <div className="wrap feature">
          <div>
            <span className="label">Book 1 · Complete</span>
            <h2>The Age of the Unveiling</h2>
            <p className="era">95 AD · The Roman Empire</p>
          </div>
          <div className="stack-lg">
            <blockquote>The scroll has been opened. The visions are unleashed.</blockquote>
            <p>
              The Roman Empire rules the known world. But behind the thrones of men, older powers
              are moving. Yohanan, the last living witness of the Messiah, has been exiled to
              Patmos, burdened with visions no mortal mind was meant to carry. And no empire, seen
              or unseen, will remain unshaken.
            </p>
            <div className="actions">
              <Link href="/series" className="btn btn-primary">
                About the books
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap stack-lg">
          <div className="stack">
            <span className="label">The cast</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>On Patmos, and above it</h2>
          </div>
          <div className="cast-strip">
            {cast.map((c) => (
              <Link key={c.slug} href={`/characters#${c.slug}`}>
                <Image src={c.portrait} alt={c.portraitAlt || c.name} width={400} height={500} sizes="(max-width: 800px) 30vw, 170px" />
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap stack-lg">
          <div className="stack narrow">
            <span className="label">The Inner Circle</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>Read it before anyone else</h2>
            <p className="lead">
              The first three chapters, exclusive lore entries, and Shadow History research, before
              anyone else sees them.
            </p>
          </div>
          <SignupForm id="home" />
        </div>
      </section>
    </main>
  )
}
