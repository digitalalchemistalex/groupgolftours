'use client'
import { useState } from 'react'

const destinations = [
  'Lake Tahoe & Northern Nevada',
  'Las Vegas & Southern Nevada',
  'Monterey & Pebble Beach',
  'Southern California',
  'Arizona',
  'Bandon, Oregon',
  'Ireland',
  'Scotland',
  'Portugal / Spain',
  'Mexico / Caribbean',
  'Not Sure — Help Me Decide',
]

const tripTypes = [
  'Golf Buddy Trip',
  'Corporate Outing',
  'Incentive Travel',
  'Bachelor / Celebration Trip',
  'International Golf Tour',
  'Family Golf Vacation',
  'Other',
]

type Step = 1 | 2 | 3 | 4

export default function TourInquiryForm() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    tripType: '',
    destination: '',
    groupSize: '',
    dates: '',
    flexibility: '',
    budget: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    // For now, log and show success — Supabase/email integration added later
    console.log('Tour inquiry:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 40px' }}>
        <div style={{ fontSize: 56, marginBottom: 24 }}>⛳</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, color: 'var(--color-dark)', marginBottom: 16 }}>
          We&apos;ve Got Your Request
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-muted)', maxWidth: 480, margin: '0 auto 32px' }}>
          One of our golf travel specialists will reach out within 24 hours to start building your custom package.
        </p>
        <div style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>
          Questions in the meantime? Call us at{' '}
          <a href="tel:8885848232" style={{ color: 'var(--color-green)', fontWeight: 600, textDecoration: 'none' }}>888-584-8232</a>
        </div>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px',
    border: '1px solid var(--color-cream-dark)',
    background: 'var(--color-white)',
    fontFamily: 'var(--font-sans)', fontSize: 14,
    color: 'var(--color-text)', outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 11, fontWeight: 600,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--color-text-muted)', marginBottom: 8,
  }

  const chipStyle = (selected: boolean): React.CSSProperties => ({
    padding: '10px 18px', border: `1px solid ${selected ? 'var(--color-green)' : 'var(--color-cream-dark)'}`,
    background: selected ? 'var(--color-green)' : 'var(--color-white)',
    color: selected ? 'var(--color-cream)' : 'var(--color-text)',
    fontSize: 13, fontWeight: 500, cursor: 'pointer',
    transition: 'all 0.15s', fontFamily: 'var(--font-sans)',
  })

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 48 }}>
        {([1, 2, 3, 4] as Step[]).map(s => (
          <div key={s} style={{ flex: 1, height: 3, background: step >= s ? 'var(--color-gold)' : 'var(--color-cream-dark)', transition: 'background 0.3s' }} />
        ))}
      </div>

      {/* STEP 1 — Trip Type */}
      {step === 1 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 1 of 4</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--color-dark)', marginBottom: 8 }}>What kind of trip is this?</h2>
          <p style={{ fontSize: 15, color: 'var(--color-text-muted)', marginBottom: 36 }}>This helps us match you with the right specialist.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
            {tripTypes.map(t => (
              <button key={t} style={chipStyle(form.tripType === t)} onClick={() => set('tripType', t)}>{t}</button>
            ))}
          </div>
          <button className="btn-primary" onClick={() => form.tripType && setStep(2)} style={{ opacity: form.tripType ? 1 : 0.4 }}>
            Continue →
          </button>
        </div>
      )}

      {/* STEP 2 — Destination + Group */}
      {step === 2 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 2 of 4</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--color-dark)', marginBottom: 8 }}>Where do you want to play?</h2>
          <p style={{ fontSize: 15, color: 'var(--color-text-muted)', marginBottom: 36 }}>Pick a destination — or let us recommend one based on your group.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
            {destinations.map(d => (
              <button key={d} style={chipStyle(form.destination === d)} onClick={() => set('destination', d)}>{d}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
            <div>
              <label style={labelStyle}>Group Size</label>
              <select style={{ ...inputStyle }} value={form.groupSize} onChange={e => set('groupSize', e.target.value)}>
                <option value="">Select...</option>
                {['2–4 players','5–8 players','9–16 players','17–24 players','25–40 players','40+ players'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Budget Per Person</label>
              <select style={{ ...inputStyle }} value={form.budget} onChange={e => set('budget', e.target.value)}>
                <option value="">Select...</option>
                {['Under $500','$500–$1,000','$1,000–$2,000','$2,000–$3,500','$3,500–$5,000','$5,000+','Flexible'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn-outline" onClick={() => setStep(1)} style={{ color: 'var(--color-text)', borderColor: 'var(--color-cream-dark)' }}>← Back</button>
            <button className="btn-primary" onClick={() => form.destination && form.groupSize && setStep(3)} style={{ opacity: form.destination && form.groupSize ? 1 : 0.4 }}>Continue →</button>
          </div>
        </div>
      )}

      {/* STEP 3 — Dates */}
      {step === 3 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 3 of 4</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--color-dark)', marginBottom: 8 }}>When are you planning to go?</h2>
          <p style={{ fontSize: 15, color: 'var(--color-text-muted)', marginBottom: 36 }}>Approximate dates are fine — we&apos;ll work around your schedule.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
            <div>
              <label style={labelStyle}>Preferred Dates / Month</label>
              <input style={inputStyle} placeholder="e.g. March 2026 or June 10–14" value={form.dates} onChange={e => set('dates', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Date Flexibility</label>
              <select style={inputStyle} value={form.flexibility} onChange={e => set('flexibility', e.target.value)}>
                <option value="">Select...</option>
                {['Exact dates only','±3 days','±1 week','Very flexible','Not sure yet'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <label style={labelStyle}>Anything else we should know?</label>
            <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }} placeholder="Special requests, must-play courses, non-golf activities for the group, dietary needs..." value={form.notes} onChange={e => set('notes', e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn-outline" onClick={() => setStep(2)} style={{ color: 'var(--color-text)', borderColor: 'var(--color-cream-dark)' }}>← Back</button>
            <button className="btn-primary" onClick={() => setStep(4)}>Continue →</button>
          </div>
        </div>
      )}

      {/* STEP 4 — Contact */}
      {step === 4 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 4 of 4</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--color-dark)', marginBottom: 8 }}>Almost there — how do we reach you?</h2>
          <p style={{ fontSize: 15, color: 'var(--color-text-muted)', marginBottom: 36 }}>A golf travel specialist will follow up within 24 hours.</p>

          {/* Summary */}
          <div style={{ background: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)', padding: '20px 24px', marginBottom: 36 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Your Trip Summary</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                ['Trip Type', form.tripType],
                ['Destination', form.destination],
                ['Group Size', form.groupSize],
                ['Budget / Person', form.budget],
                ['Dates', form.dates || 'TBD'],
              ].map(([label, val]) => (
                <div key={label}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}: </span>
                  <span style={{ fontSize: 13, color: 'var(--color-text)', fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>First Name *</label>
              <input style={inputStyle} value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="John" />
            </div>
            <div>
              <label style={labelStyle}>Last Name *</label>
              <input style={inputStyle} value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Smith" />
            </div>
            <div>
              <label style={labelStyle}>Email Address *</label>
              <input style={inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="john@example.com" />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input style={inputStyle} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(555) 000-0000" />
            </div>
          </div>

          <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 32, lineHeight: 1.6 }}>
            By submitting this form you agree to our{' '}
            <a href="/terms-and-conditions/" style={{ color: 'var(--color-green)', textDecoration: 'none' }}>Terms & Conditions</a>{' '}
            and{' '}
            <a href="/privacy-policy/" style={{ color: 'var(--color-green)', textDecoration: 'none' }}>Privacy Policy</a>.
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn-outline" onClick={() => setStep(3)} style={{ color: 'var(--color-text)', borderColor: 'var(--color-cream-dark)' }}>← Back</button>
            <button className="btn-primary"
              onClick={handleSubmit}
              style={{ opacity: form.firstName && form.lastName && form.email ? 1 : 0.4 }}>
              Submit My Request ✓
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
