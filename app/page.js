export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0A0806',
      color: '#C9A84C',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(2rem, 6vw, 5rem)',
        marginBottom: '1rem',
        letterSpacing: '0.1em',
      }}>
        THE AGES TO COME
      </h1>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.2rem',
        color: '#A89878',
        fontStyle: 'italic',
        marginBottom: '2rem',
      }}>
        The Shadow History Cycle — Coming Soon
      </p>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1rem',
        color: '#6B5C42',
        maxWidth: '500px',
        lineHeight: 1.8,
      }}>
        Empires rise and fall in history — but behind them, 
        unseen powers have been waging a far older war.
      </p>
    </main>
  )
}
