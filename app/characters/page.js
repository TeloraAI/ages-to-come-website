import CharacterCard from '../components/CharacterCard'
import Horizon from '../components/Horizon'
import { mortals, celestials } from '../../lib/characters'

export const metadata = {
  title: 'Characters',
  description:
    'The mortals of Patmos and Rome, and the celestial beings of the Divine Council who move behind them, as readers first meet them in Book 1.',
}

export default function Characters() {
  return (
    <main className="day">
      <header className="wrap page-head">
        <span className="label">Characters</span>
        <h1>Mortal and celestial</h1>
        <p className="lead">
          Every name here was caught in a war that began before humanity existed. Each is described
          as readers first meet them in Book 1, with nothing given away.
        </p>
        <nav className="realm-tabs" aria-label="Jump to a realm">
          <a href="#mortals">Mortals · {mortals.length}</a>
          <a href="#celestials">Celestials · {celestials.length}</a>
        </nav>
      </header>

      <section className="wrap section" style={{ paddingTop: 16 }} id="mortals" aria-labelledby="mortals-h">
        <h2 id="mortals-h" className="sr-only">Mortals</h2>
        <div className="cards">
          {mortals.map((c) => (
            <CharacterCard key={c.slug} character={c} />
          ))}
        </div>
      </section>

      <Horizon note="The unseen realm">
        Heralds, sentinels, and those who left their post. Their war shaped every empire above.
      </Horizon>

      <section className="night" id="celestials" aria-labelledby="celestials-h">
        <div className="wrap section">
          <h2 id="celestials-h" className="sr-only">Celestials</h2>
          <div className={`cards${celestials.length === 4 ? ' cards-four' : ''}`}>
            {celestials.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
          <p className="note" style={{ marginTop: 40 }}>
            Links marked ✦ cross between the realms. More of the cast arrives as the books do.
          </p>
        </div>
      </section>
    </main>
  )
}
