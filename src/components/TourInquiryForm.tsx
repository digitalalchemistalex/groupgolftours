'use client'
import { useState } from 'react'
import Link from 'next/link'

const destinations = [
  { name: 'Pebble Beach & Monterey', sub: 'Peak dates fill 6–8 months out' },
  { name: 'Lake Tahoe & Northern Nevada', sub: 'Summer weekends go fast' },
  { name: 'Las Vegas & Southern Nevada', sub: 'Shadow Creek access is limited' },
  { name: 'Southern California', sub: 'Year-round availability' },
  { name: 'Arizona', sub: 'Scottsdale, Sedona & more' },
  { name: 'Bandon, Oregon', sub: 'Bucket-list links golf' },
  { name: 'Ireland', sub: '3–7 day international tours' },
  { name: 'Scotland', sub: 'St Andrews, Carnoustie & more' },
  { name: 'Portugal / Spain', sub: 'European golf tours' },
  { name: 'Mexico / Caribbean', sub: 'All-inclusive options' },
  { name: 'Not Sure — Help Me Decide', sub: 'Tell us your vibe and budget' },
]

const tripTypes = [
  { name: 'Golf Buddy Trip', sub: 'Annual outing, boys trip, friend group' },
  { name: 'Corporate Outing', sub: 'Client entertainment, team event' },
  { name: 'Incentive Trip', sub: 'Reward top performers' },
  { name: 'Bachelor / Celebration', sub: 'Milestone event' },
  { name: 'International Golf Tour', sub: 'Ireland, Scotland, Europe' },
  { name: 'Family Golf Trip', sub: 'Multi-generational travel' },
]

type Step = 1 | 2 | 3 | 4

export default function TourInquiryForm() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    tripType: '', destination: '', groupSize: '',
    budget: '', dates: '', flexibility: '',
    firstName: '', lastName: '', email: '', phone: '', notes: '',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const iStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px',
    border: '1px solid #d4c8b0',
    background: '#faf8f4',
    fontFamily: 'var(--sans)', fontSize: 14,
    color: 'var(--text)', outline: 'none',
    transition: 'border-color 0.2s',
  }

  const lStyle: React.CSSProperties = {
    display: 'block', fontSize: 10, fontWeight: 600,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: 'var(--text-mid)', marginBottom: 8,
  }

  const chipActive: React.CSSProperties = {
    padding: '12px 18px', border: '1px solid var(--green)',
    background: 'var(--green)', color: 'var(--cream)',
    fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500,
    cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left',
  }
  const chipInactive: React.CSSProperties = {
    ...chipActive,
    border: '1px solid var(--cream-mid)',
    background: 'var(--white)', color: 'var(--text)',
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '72px 32px' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: 32 }}>✓</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 40, color: 'var(--dark)', marginBottom: 16 }}>
          We&apos;ve Got Your Request
        </h2>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.85, color: 'var(--text-mid)', maxWidth: 440, margin: '0 auto 12px' }}>
          A golf travel specialist will reach out within 24 hours with a custom package built around your group&apos;s exact preferences.
        </p>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--text-light)', marginBottom: 36 }}>
          In the meantime, expect a confirmation to <strong>{form.email}</strong>
        </p>
        <div style={{ padding: '24px', background: 'var(--cream)', borderTop: '2px solid var(--gold)', maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Your Trip Summary</div>
          {[['Trip', form.tripType], ['Destination', form.destination], ['Group', form.groupSize], ['Budget', form.budget], ['Dates', form.dates || 'Flexible']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--cream-mid)', fontFamily: 'var(--sans)', fontSize: 13 }}>
              <span style={{ color: 'var(--text-light)' }}>{k}</span>
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--text-light)', marginTop: 28 }}>
          Prefer to talk now? <a href="tel:8885848232" style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'none' }}>Call 888-584-8232</a>
        </p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 740, margin: '0 auto' }}>
      {/* Progress */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
          {([1,2,3,4] as Step[]).map(s => (
            <div key={s} style={{ flex: 1, height: 3, background: step >= s ? 'var(--gold)' : 'var(--cream-mid)', transition: 'background 0.35s' }} />
          ))}
        </div>
        <div style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--text-light)', letterSpacing: '0.08em' }}>
          Step {step} of 4 — {['What kind of trip?', 'Where & how many?', 'When?', 'Your details'][step - 1]}
        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 1 of 4</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,4vw,40px)', color: 'var(--dark)', marginBottom: 10 }}>What kind of trip is this?</h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--text-mid)', marginBottom: 36, lineHeight: 1.7 }}>
            This tells us which specialist to connect you with. Different trip types need very different packages.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 10, marginBottom: 48 }}>
            {tripTypes.map(t => (
              <button key={t.name} style={form.tripType === t.name ? chipActive : chipInactive} onClick={() => set('tripType', t.name)}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{t.name}</div>
                <div style={{ fontSize: 11, opacity: 0.65 }}>{t.sub}</div>
              </button>
            ))}
          </div>
          <button className="btn-gold" onClick={() => form.tripType && setStep(2)} style={{ opacity: form.tripType ? 1 : 0.35 }}>
            Continue →
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 2 of 4</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,4vw,40px)', color: 'var(--dark)', marginBottom: 10 }}>Where & how many?</h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--text-mid)', marginBottom: 36, lineHeight: 1.7 }}>
            Don&apos;t worry if you&apos;re not sure — we can recommend destinations based on your group size and budget.
          </p>
          <div style={{ marginBottom: 32 }}>
            <label style={lStyle}>Destination</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {destinations.map(d => (
                <button key={d.name} onClick={() => set('destination', d.name)} style={{
                  padding: '9px 16px', border: `1px solid ${form.destination === d.name ? 'var(--green)' : 'var(--cream-mid)'}`,
                  background: form.destination === d.name ? 'var(--green)' : 'var(--white)',
                  color: form.destination === d.name ? 'var(--cream)' : 'var(--text)',
                  fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s',
                }}>
                  {d.name}
                  {form.destination === d.name && <div style={{ fontSize: 10, opacity: 0.65, marginTop: 2 }}>{d.sub}</div>}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
            <div>
              <label style={lStyle}>Group Size</label>
              <select style={iStyle} value={form.groupSize} onChange={e => set('groupSize', e.target.value)}>
                <option value="">Select...</option>
                {['2–4 players','5–8 players','9–16 players','17–24 players','25–40 players','41–80 players','80+ players'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label style={lStyle}>Budget Per Person</label>
              <select style={iStyle} value={form.budget} onChange={e => set('budget', e.target.value)}>
                <option value="">Select...</option>
                {['Under $500','$500 – $1,000','$1,000 – $2,000','$2,000 – $3,500','$3,500 – $5,000','$5,000+','Flexible / Not Sure'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => setStep(1)} style={{ ...chipInactive, padding: '14px 24px' }}>← Back</button>
            <button className="btn-gold" onClick={() => form.destination && form.groupSize && setStep(3)} style={{ opacity: form.destination && form.groupSize ? 1 : 0.35 }}>Continue →</button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 3 of 4</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,4vw,40px)', color: 'var(--dark)', marginBottom: 10 }}>When are you planning to go?</h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--text-mid)', marginBottom: 8, lineHeight: 1.7 }}>
            Approximate is fine. The earlier we know, the better the tee time access we can secure.
          </p>
          {form.destination === 'Pebble Beach & Monterey' && (
            <div className="scarcity-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>
              <span className="scarcity-dot" />
              Pebble group tee times often fill 6–8 months out
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
            <div>
              <label style={lStyle}>Preferred Dates / Month</label>
              <input style={iStyle} placeholder="e.g. October 2025 or June 12–17" value={form.dates} onChange={e => set('dates', e.target.value)} />
            </div>
            <div>
              <label style={lStyle}>Date Flexibility</label>
              <select style={iStyle} value={form.flexibility} onChange={e => set('flexibility', e.target.value)}>
                <option value="">Select...</option>
                {['Exact dates only','Flexible ± 3 days','Flexible ± 1 week','Very flexible','Not sure yet'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <label style={lStyle}>Anything Else We Should Know?</label>
            <textarea style={{ ...iStyle, minHeight: 110, resize: 'vertical' }}
              placeholder="Must-play courses, non-golf activities for partners, dietary needs, special occasions, any courses you've already played and want to skip..."
              value={form.notes} onChange={e => set('notes', e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => setStep(2)} style={{ ...chipInactive, padding: '14px 24px' }}>← Back</button>
            <button className="btn-gold" onClick={() => setStep(4)}>Continue →</button>
          </div>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Step 4 of 4 — Almost Done</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,4vw,40px)', color: 'var(--dark)', marginBottom: 10 }}>How do we reach you?</h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--text-mid)', marginBottom: 36, lineHeight: 1.7 }}>
            A specialist will follow up within 24 hours with a custom package. No pressure, no commitment — just the best options for your group.
          </p>

          {/* Trip summary */}
          <div style={{ background: 'var(--cream)', borderTop: '2px solid var(--gold)', padding: '20px 24px', marginBottom: 36 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>Your Trip Request</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[['Type', form.tripType], ['Destination', form.destination], ['Group Size', form.groupSize], ['Budget/Person', form.budget], ['Dates', form.dates || 'Flexible']].map(([k, v]) => (
                <div key={k} style={{ fontFamily: 'var(--sans)', fontSize: 13 }}>
                  <span style={{ color: 'var(--text-light)', marginRight: 6 }}>{k}:</span>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 36 }}>
            <div>
              <label style={lStyle}>First Name *</label>
              <input style={iStyle} value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="John" />
            </div>
            <div>
              <label style={lStyle}>Last Name *</label>
              <input style={iStyle} value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Smith" />
            </div>
            <div>
              <label style={lStyle}>Email Address *</label>
              <input style={iStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="john@example.com" />
            </div>
            <div>
              <label style={lStyle}>Phone Number</label>
              <input style={iStyle} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(555) 000-0000" />
            </div>
          </div>

          <p style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--text-light)', marginBottom: 28, lineHeight: 1.65 }}>
            By submitting you agree to our{' '}
            <Link href="/terms-and-conditions/" style={{ color: 'var(--green)', textDecoration: 'none' }}>Terms & Conditions</Link>
            {' '}and{' '}
            <Link href="/privacy-policy/" style={{ color: 'var(--green)', textDecoration: 'none' }}>Privacy Policy</Link>.
            We will never sell your information or spam you.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={() => setStep(3)} style={{ ...chipInactive, padding: '14px 24px' }}>← Back</button>
            <button className="btn-gold"
              onClick={() => { if (form.firstName && form.lastName && form.email) setSubmitted(true) }}
              style={{ opacity: form.firstName && form.lastName && form.email ? 1 : 0.35 }}>
              Send My Request →
            </button>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--text-light)' }}>
              or call <a href="tel:8885848232" style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'none' }}>888-584-8232</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
