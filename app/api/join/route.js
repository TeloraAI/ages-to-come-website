import { NextResponse } from 'next/server'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Email signup. Set FORMSPREE_ID (or WAITLIST_WEBHOOK_URL) in Vercel to start collecting.
// With neither set, it says so instead of pretending the email was saved.
export async function POST(request) {
  const { email } = await request.json().catch(() => ({}))
  if (!email || !EMAIL.test(String(email).trim())) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }
  const payload = { email: String(email).trim(), source: 'ages-to-come-website' }

  try {
    if (process.env.FORMSPREE_ID) {
      const res = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Formspree ${res.status}`)
    } else if (process.env.WAITLIST_WEBHOOK_URL) {
      const res = await fetch(process.env.WAITLIST_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Webhook ${res.status}`)
    } else {
      return NextResponse.json(
        { error: 'Signups open soon. The list isn’t collecting emails yet, so please check back.' },
        { status: 503 },
      )
    }
  } catch (err) {
    console.error('join failed', err.message)
    return NextResponse.json({ error: 'That didn’t go through. Try again in a moment.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true, message: 'You’re in. Watch your inbox for the first dispatch.' })
}
