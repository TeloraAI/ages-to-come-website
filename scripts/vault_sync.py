"""Read the Ages to Come vault and write the facts the website renders.

The vault is the source of truth and is read-only. It holds spoilers, the Book 3
manuscript, and editor notes, and this repo is public. So the file this script writes
holds only what the site renders, and only for characters with a published summary:
name, realm, portrait, appearances in published books, and a hash of the note.
Everything else (classification lines, links, unpublished books, characters not yet
summarized) stays in the report printed to your terminal. Reader-facing copy lives in
content/characters.json, written and approved by hand.

Usage:
    python scripts/vault_sync.py            # write content/vault/characters.json and report
    python scripts/vault_sync.py --check    # report only, write nothing

The report lists characters in a published book with no summary yet, and summaries whose
vault note has changed since they were approved (compared by `reviewedHash`).
"""

import argparse
import hashlib
import json
import os
import re
import sys
from pathlib import Path

VAULT = Path(os.environ.get(
    'AGES_VAULT',
    r'C:\Users\salmo\OneDrive\Documents\BUSINESS\Black Diamond Creatives\PUBLISHING'
    r'\AGES TO COME\Obsidian Files\The Ages to Come Vault\The Ages to Come Vault',
))
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'content' / 'vault' / 'characters.json'
SUMMARIES = ROOT / 'content' / 'characters.json'
SITE = ROOT / 'content' / 'site.json'
PORTRAITS = ROOT / 'public' / 'characters'

REALMS = {'Mortals': 'mortal', 'Celestials': 'celestial'}
FIELD = re.compile(r'^\*\*(?P<key>[^*:]+):\*\*\s*(?P<value>.+?)\s*$')
LINK = re.compile(r'\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]')
BOOK = re.compile(r'Book (\d) - ')
EDITOR_NOTE = re.compile(r'\s*\[(?:ADDED|CHANGED|UPDATED)[^\]]*\]')


def slugify(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')


def link_target(raw):
    # [[Book Series/Characters/Celestials/Egeria]] and [[Egeria 1]] both mean Egeria.
    name = raw.strip().split('/')[-1]
    return re.sub(r'\s+\d+$', '', name)


def plain(value):
    """A header value with links unwrapped and editor notes removed (for the report)."""
    value = EDITOR_NOTE.sub('', value)
    value = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', r'\2', value)
    value = LINK.sub(lambda m: link_target(m.group(1)), value)
    return re.sub(r'[*_]', '', value).strip(' |')


def read_character(path, realm, known):
    text = path.read_text(encoding='utf-8')
    fields = {}
    for line in text.splitlines()[:40]:
        m = FIELD.match(line.strip())
        if m:
            fields[m.group('key').strip().lower()] = m.group('value')

    # Only the book links count; parenthetical chapter notes can mention other books.
    books = sorted({int(n) for n in BOOK.findall(' '.join(LINK.findall(fields.get('books', ''))))})

    name = path.stem.replace('_', ' ')
    slug = slugify(name)
    links = []
    for raw in LINK.findall(text):
        target = slugify(link_target(raw))
        if target in known and target != slug and target not in links:
            links.append(target)

    portrait = PORTRAITS / f'{slug}.jpg'
    return {
        'slug': slug,
        'name': name,
        'realm': realm,
        'classification': plain(fields.get('classification', '')),
        'books': books,
        'links': links,
        'portrait': f'/characters/{slug}.jpg' if portrait.exists() else None,
        'sourceHash': hashlib.sha256(text.encode('utf-8')).hexdigest()[:12],
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument('--check', action='store_true', help='report only; write nothing')
    args = parser.parse_args()

    if not VAULT.exists():
        sys.exit(f'Vault not found: {VAULT}\nSet AGES_VAULT to its folder.')

    files = []
    for folder, realm in REALMS.items():
        files += [(p, realm) for p in sorted((VAULT / 'Characters' / folder).glob('*.md'))]
    known = {slugify(p.stem.replace('_', ' ')) for p, _ in files}
    for sub in ('Locations', 'Series Cosmology'):
        known |= {slugify(p.stem.replace('_', ' ')) for p in (VAULT / sub).glob('*.md')}

    characters = [read_character(p, realm, known) for p, realm in files]
    published_books = json.loads(SITE.read_text(encoding='utf-8'))['publishedBooks']
    summaries = json.loads(SUMMARIES.read_text(encoding='utf-8')) if SUMMARIES.exists() else []
    by_slug = {s['slug']: s for s in summaries}

    missing = [c for c in characters
               if c['slug'] not in by_slug and set(c['books']) & set(published_books)]
    changed = [c for c in characters
               if c['slug'] in by_slug and by_slug[c['slug']].get('reviewedHash') != c['sourceHash']]
    orphans = sorted(set(by_slug) - {c['slug'] for c in characters})

    print(f'{len(characters)} characters in the vault '
          f'({sum(c["realm"] == "mortal" for c in characters)} mortal, '
          f'{sum(c["realm"] == "celestial" for c in characters)} celestial)')
    print(f'{len(summaries)} summaries, '
          f'{sum(s.get("status") == "published" for s in summaries)} published')
    for label, items in (
        ('In a published book with no summary yet', [f"{c['name']}  ({c['classification']})" for c in missing]),
        ('Vault note changed since the summary was approved', [c['name'] for c in changed]),
        ('Summary with no vault note', orphans),
    ):
        if items:
            print(f'\n{label}:')
            for item in items:
                print(f'  - {item}')
    if changed:
        print('\nVault links, for re-checking connections:')
        for c in changed:
            print(f"  - {c['name']}: {', '.join(c['links'])}")

    if args.check:
        return
    published = {s['slug'] for s in summaries if s.get('status') == 'published'}
    public = [
        {
            'slug': c['slug'],
            'name': c['name'],
            'realm': c['realm'],
            'books': [b for b in c['books'] if b in published_books],
            'portrait': c['portrait'],
            'sourceHash': c['sourceHash'],
        }
        for c in characters
        if c['slug'] in published
    ]
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(public, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(f'\nWrote {OUT.relative_to(ROOT)} ({len(public)} published characters)')


if __name__ == '__main__':
    main()
