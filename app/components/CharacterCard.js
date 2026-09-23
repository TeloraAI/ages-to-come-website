import Image from 'next/image'
import { connectionsOf } from '../../lib/characters'

const ALLEGIANCE = { faithful: 'Faithful to the Throne', fallen: 'Fallen' }

export default function CharacterCard({ character: c }) {
  const links = connectionsOf(c)
  return (
    <article className={`card${c.allegiance ? ` ${c.allegiance}` : ''}`} id={c.slug}>
      {c.portrait ? (
        <Image
          className="portrait"
          src={c.portrait}
          alt={c.portraitAlt || c.name}
          width={400}
          height={500}
          sizes="(max-width: 600px) 92vw, 280px"
        />
      ) : (
        <div className="portrait-empty" aria-hidden="true">
          {c.name[0]}
        </div>
      )}
      <div className="card-body">
        {c.allegiance ? <span className="allegiance">{ALLEGIANCE[c.allegiance]}</span> : null}
        <h3>{c.name}</h3>
        <p className="epithet">{c.epithet}</p>
        <dl className="facts">
          {c.facts.map((f) => (
            <div key={f.label} style={{ display: 'contents' }}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
          {c.books.length ? (
            <>
              <dt>Appears</dt>
              <dd>{c.books.map((b) => `Book ${b}`).join(', ')}</dd>
            </>
          ) : null}
        </dl>
        <p className="blurb">{c.blurb}</p>
        {links.length ? (
          <div className="links" aria-label={`Connected to ${c.name}`}>
            {links.map((l) => (
              <a key={l.slug} href={`#${l.slug}`} className={l.realm !== c.realm ? 'cross' : undefined}>
                {l.name}
                {l.realm !== c.realm ? <span aria-hidden="true"> ✦</span> : null}
                {l.realm !== c.realm ? <span className="sr-only"> ({l.realm})</span> : null}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
