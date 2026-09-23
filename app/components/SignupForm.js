'use client'

import { useState } from 'react'

// Posts to /api/join. It only reports success when the server confirms the email was stored.
export default function SignupForm({ id = 'signup', button = 'Join the Inner Circle' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | ok | err
  const [message, setMessage] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'That didn’t go through. Try again in a moment.')
      setStatus('ok')
      setMessage(data.message || 'You’re in. Watch your inbox for the first dispatch.')
      setEmail('')
    } catch (err) {
      setStatus('err')
      setMessage(err.message)
    }
  }

  return (
    <form className="signup" onSubmit={onSubmit} aria-label="Join the Inner Circle">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div className="signup-row">
        <input
          id={`${id}-email`}
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : button}
        </button>
      </div>
      {message ? (
        <p className={`signup-msg ${status === 'ok' ? 'ok' : 'err'}`} role={status === 'err' ? 'alert' : 'status'}>
          {message}
        </p>
      ) : null}
      <small>No spam. Only the Shadow History.</small>
    </form>
  )
}
