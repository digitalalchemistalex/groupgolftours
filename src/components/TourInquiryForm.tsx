'use client'
import { useState } from 'react'

const inputStyle = { width: '100%', padding: '12px 16px', border: '1px solid #d4c9b4', background: 'var(--color-white)', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-text)', outline: 'none' }
const labelStyle = { display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', marginBottom: 8 }

export default function TourInquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: '80px 40px', background: 'var(--color-white)' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 48, color: 'var(--color-gold)', marginBottom: 16 }}>✓</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--color-dark)', marginBottom: 16 }}>We&apos;ve Got It!</h2>
      <p style={{ fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8 }}>Our team will review your request and be in touch within 24 hours with a custom package. In the meantime, feel free to call us at <strong>888-584-8232</strong>.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} style={{ background: 'var(--color-white)', padding: 'clamp(32px,4vw,56px)' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--color-dark)', marginBottom: 8 }}>Tell Us About Your Trip</h2>
      <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 40, lineHeight: 1.7 }}>Planning your next golf getaway has never been easier. Whether it&apos;s a buddy trip, corporate event, or family vacation — we&apos;re here to make it seamless.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div><label style={labelStyle}>First Name *</label><input required style={inputStyle} placeholder="John" /></div>
        <div><label style={labelStyle}>Last Name *</label><input required style={inputStyle} placeholder="Smith" /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div><label style={labelStyle}>Email *</label><input required type="email" style={inputStyle} placeholder="john@email.com" /></div>
        <div><label style={labelStyle}>Phone</label><input type="tel" style={inputStyle} placeholder="(555) 000-0000" /></div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Destination of Interest</label>
        <select style={{ ...inputStyle, appearance: 'none' }}>
          <option value="">Select a destination...</option>
          <option>Lake Tahoe & Northern Nevada</option>
          <option>Las Vegas & Southern Nevada</option>
          <option>Monterey & Pebble Beach</option>
          <option>Southern California</option>
          <option>Arizona</option>
          <option>International — Ireland</option>
          <option>International — Scotland</option>
          <option>International — Portugal / Spain</option>
          <option>International — Mexico / Caribbean</option>
          <option>Not sure — help me choose</option>
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>Trip Type</label>
          <select style={{ ...inputStyle, appearance: 'none' }}>
            <option>Golf Buddy Trip</option>
            <option>Corporate / Incentive</option>
            <option>Family Vacation</option>
            <option>International Tour</option>
            <option>Other</option>
          </select>
        </div>
        <div><label style={labelStyle}>Group Size</label><input style={inputStyle} placeholder="e.g. 12 golfers" /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div><label style={labelStyle}>Preferred Travel Dates</label><input type="text" style={inputStyle} placeholder="e.g. June 2025" /></div>
        <div><label style={labelStyle}>Approximate Budget</label><input style={inputStyle} placeholder="e.g. $500/person" /></div>
      </div>
      <div style={{ marginBottom: 32 }}>
        <label style={labelStyle}>Additional Details</label>
        <textarea style={{ ...inputStyle, height: 120, resize: 'vertical' }} placeholder="Tell us anything else — specific courses, accommodation preferences, non-golf activities..." />
      </div>
      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14 }} disabled={loading}>
        {loading ? 'Sending...' : 'Submit Inquiry'}
      </button>
      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 16, textAlign: 'center' }}>
        Or call us directly: <a href="tel:8885848232" style={{ color: 'var(--color-gold)', fontWeight: 600 }}>888-584-8232</a> | <a href="mailto:customerservice@zoomaway.com" style={{ color: 'var(--color-gold)', fontWeight: 600 }}>customerservice@zoomaway.com</a>
      </p>
    </form>
  )
}
