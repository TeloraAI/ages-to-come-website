import './globals.css'

export const metadata = {
  title: 'The Ages to Come — The Shadow History Cycle',
  description: 'A sweeping Speculative Historical Thriller series that reveals the Shadow History of the world. Empires rise and fall — but behind them, unseen powers have been waging a far older war.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}