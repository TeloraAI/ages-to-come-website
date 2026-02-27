import './globals.css'

export const metadata = {
  title: 'The Ages to Come — The Shadow History Cycle',
  description: 'A sweeping Speculative Historical Thriller series that reveals the Shadow History of the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
