import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="site-footer night">
      <div className="wrap">
        <p className="title">The Ages to Come</p>
        <p>Empires rise and fall in history, but behind them, unseen powers have been waging a far older war.</p>
        <ul className="footer-links">
          <li><Link href="/series">The Series</Link></li>
          <li><Link href="/world">The World</Link></li>
          <li><Link href="/characters">Characters</Link></li>
          <li><Link href="/lore">Lore</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/join">Join</Link></li>
        </ul>
        <p>© {new Date().getFullYear()} Brian Westad · The Shadow History Cycle</p>
      </div>
    </footer>
  )
}
