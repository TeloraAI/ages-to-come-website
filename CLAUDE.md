# CLAUDE.md — The Ages to Come website
Project-specific context only. Global rules, skills, and conventions live in
`~/.claude/CLAUDE.md` and apply automatically.

## Project
**Name:** The Ages to Come — author and series website
**Context:** Book Series
**Status:** Active build (Two Realms redesign + vault content pipeline)
**One-line goal:** The home for the six-book series: books, world, characters, and lore, drawn from the vault without spoilers, plus an email list.

## Stack / Format
Next.js App Router, React, plain JavaScript, one global stylesheet (`app/globals.css`). No Tailwind or TypeScript; confirm before adding dependencies.
Python for the vault script. Vercel deploys from GitHub `TeloraAI/ages-to-come-website`; `main` is production.
Run: `npm run dev` / `npm run build`. Never build while dev is running (they share `.next`).

## Key files & folders
| Path | What it is |
|---|---|
| `app/` | Pages: home, series, world, characters, lore, about, join |
| `app/globals.css` | Two Realms tokens: daylight (visible history) and night (unseen realm) |
| `scripts/vault_sync.py` | Reads the vault and writes facts to `content/vault/` |
| `content/` | Reader-facing entries: summaries Brian has approved; only `published` ones render |
| `public/characters/` | Portrait crops from `Book 1/Art Concepts` |

Vault (read-only source): `C:\Users\salmo\OneDrive\Documents\BUSINESS\Black Diamond Creatives\PUBLISHING\AGES TO COME\Obsidian Files\The Ages to Come Vault\The Ages to Come Vault`

## Project-specific rules
- The vault is read-only. Never publish raw vault text: it holds spoilers, the Book 3 manuscript, and editor notes.
- Public copy is spoiler-free: who a character is when readers first meet them in Book 1, with no events or fates.
- Where the art sheets and the vault disagree, the vault wins; flag the mismatch to Brian.
- Daylight palette: the series, mortals, places, the author. Night palette: celestials and cosmology. Gold marks the Throne and the faithful only.
- Telora agents (Lexi, Smithy) also edit this repo. Pull first; don't discard their changes.
- Work on a branch; merging to `main` deploys.

## Skills active for this project
- `ages-to-come` — canon and continuity
- `ages-visual` — illustration tone ("historical weight, restraint")
- `writing` / `editing` — character and lore summaries

## Current focus
Two Realms redesign, Next 15 upgrade, and the vault pipeline starting with Characters.
