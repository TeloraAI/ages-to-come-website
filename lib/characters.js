import vault from '../content/vault/characters.json'
import summaries from '../content/characters.json'
import site from '../content/site.json'

// Books readers can buy or read (content/site.json, shared with scripts/vault_sync.py).
// Appearances in later books stay hidden: showing that a character is in Book 3 would tell
// readers they survive Book 1.
export const PUBLISHED_BOOKS = site.publishedBooks

const facts = Object.fromEntries(vault.map((c) => [c.slug, c]))

// A character renders only with an approved summary marked "published". Everything a reader
// sees comes from content/characters.json; the vault supplies realm, books, and portrait.
export const characters = summaries
  .filter((s) => s.status === 'published' && facts[s.slug])
  .map((s) => {
    const f = facts[s.slug]
    return {
      ...s,
      name: f.name,
      realm: f.realm,
      portrait: f.portrait,
      books: f.books.filter((b) => PUBLISHED_BOOKS.includes(b)),
    }
  })

const bySlug = Object.fromEntries(characters.map((c) => [c.slug, c]))

// Connections to characters that aren't published yet are dropped rather than linked to nothing.
export function connectionsOf(character) {
  return character.connections.map((slug) => bySlug[slug]).filter(Boolean)
}

export const mortals = characters.filter((c) => c.realm === 'mortal')
export const celestials = characters.filter((c) => c.realm === 'celestial')
