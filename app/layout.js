import { EB_Garamond, Marcellus, Marcellus_SC } from 'next/font/google'
import './globals.css'
import SiteNav from './components/SiteNav'
import SiteFooter from './components/SiteFooter'

const display = Marcellus({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
const caps = Marcellus_SC({ weight: '400', subsets: ['latin'], variable: '--font-caps', display: 'swap' })
const body = EB_Garamond({
  subsets: ['latin', 'greek'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'The Ages to Come — The Shadow History Cycle',
    template: '%s — The Ages to Come',
  },
  description:
    'A six-book historical series by Brian Westad. Empires rise and fall in history, but behind them, unseen powers have been waging a far older war.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${caps.variable} ${body.variable}`}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
