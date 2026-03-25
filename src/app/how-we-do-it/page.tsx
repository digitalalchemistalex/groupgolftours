import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How We Do It — Group Golf Process | Group Golf Tours',
  description: 'From your first inquiry to your final round — how Group Golf Tours plans and executes perfect golf trips. 20+ years refined into a 5-step process.',
  alternates: { canonical: 'https://www.groupgolftours.com/how-we-do-it/' },
  openGraph: {
    title: 'How Group Golf Tours Plans Your Trip',
    description: 'One call. Custom itinerary in 24 hours. Tee times, hotels, transport, dining — all handled. Here\'s exactly how it works.',
    url: 'https://www.groupgolftours.com/how-we-do-it/',
  },
}

const steps = [
  {
    n: '01', color: '#5ED8C8',
    title: 'You tell us your dream trip',
    desc: 'Destination, dates, group size, budget. One conversation is all we need. Leave blanks — we fill them in based on 20 years of matching groups to the right package.',
    detail: 'Use our inquiry form or call 888-584-8232. A specialist picks up — not a call centre.',
  },
  {
    n: '02', color: '#F8C030',
    title: 'We build a custom itinerary',
    desc: 'Tee times, hotel blocks, transport schedule, dining reservations, travel insurance — all built around your group specifically. Not a template off a shelf.',
    detail: 'We coordinate vendors simultaneously. Your hotel block and tee times are secured on the same call — which is how resort access at Pebble Beach actually works.',
  },
  {
    n: '03', color: '#80C8F0',
    title: 'You approve. We book.',
    desc: 'We present your full custom itinerary. Review every element. Adjustments made until it\'s exactly right. No payment until you\'re satisfied with the plan.',
    detail: 'No surprises. No hidden costs added at booking. What you approve is what you pay.',
  },
  {
    n: '04', color: '#98D060',
    title: 'Members register individually',
    desc: 'Each player in your group registers and pays through our online system. You track everything from one dashboard. Zero spreadsheets, zero chasing payments.',
    detail: 'The organiser stops being the group accountant and starts being just another golfer.',
  },
  {
    n: '05', color: '#F87050',
    title: 'You focus on the game',
    desc: 'We\'re on-call throughout. Any issue is handled before you notice it. Any change is managed without the group feeling a thing. You play. We manage.',
    detail: 'This is how it was always supposed to work.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Plan a Group Golf Trip with Group Golf Tours',
  description: '5-step process for planning a fully custom group golf trip — tee times, hotels, transport, dining and insurance all coordinated.',
  step: steps.map(s => ({
    '@type': 'HowToStep',
    name: s.title,
    text: s.desc,
  })),
}

export default function HowWeDoIt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="grain" style={{ background: '#080806', padding: 'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 70% 40%, rgba(200,121,65,0.08) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div className="section-wrap" style={{ maxWidth: 'var(--max)', position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>Our Process</span>
          <div style={{ width: 36, height: 1, background: 'var(--copper)', margin: '14px 0 22px' }} />
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px,6vw,80px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 20 }}>
            Simple for you.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Complex for us.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.82, color: 'rgba(245,237,216,0.58)', maxWidth: 580, fontWeight: 300 }}>
            One call. Behind that simplicity is 20 years of vendor relationships, course negotiations, and logistical precision — all invisible to you by design.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: 'var(--parchment)', padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth: 860 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', gap: 'clamp(24px,4vw,52px)', paddingBottom: 'clamp(36px,5vw,56px)', marginBottom: 'clamp(36px,5vw,56px)', borderBottom: i < steps.length - 1 ? '1px solid rgba(26,20,8,0.1)' : 'none' }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(52px,7vw,80px)', fontWeight: 300, color: s.color, lineHeight: 1, opacity: 0.9 }}>{s.n}</div>
              </div>
              <div style={{ flex: 1, paddingTop: 8 }}>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 300, color: '#1A1408', marginBottom: 14, lineHeight: 1.15 }}>{s.title}</h2>
                <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(26,20,8,0.62)', marginBottom: 12 }}>{s.desc}</p>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(26,20,8,0.4)', fontStyle: 'italic', borderLeft: `2px solid ${s.color}`, paddingLeft: 14 }}>{s.detail}</p>
              </div>
            </div>
          ))}
          <div style={{ paddingTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Start the Process</span></Link>
            <a href="tel:8885848232" className="btn btn-ink"><span>Call 888-584-8232</span></a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: '#0A0806', padding: 'clamp(48px,6vw,72px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth: 'var(--max)' }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)' }}>Everything We Handle</span>
          <div style={{ width: 36, height: 1, background: 'var(--gold)', marginTop: 10, marginBottom: 22 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 2 }}>
            {[
              { icon: '⛳', label: 'Tee Times', href: '/golf-courses/', note: 'Priority access at 200+ courses' },
              { icon: '🏨', label: 'Hotel Reservations', href: '/hotel-reservations/', note: 'Group room blocks negotiated' },
              { icon: '🚌', label: 'Transportation', href: '/transportation/', note: 'Airport transfers + shuttles' },
              { icon: '🍽', label: 'Dining & Events', href: '/dining-events-and-arrangements/', note: 'Award-winning restaurants' },
              { icon: '🛡', label: 'Travel Insurance', href: '/travel-insurance/', note: '72-hour free cancellation' },
              { icon: '✅', label: 'Online Registration', href: '/online-registration-system/', note: 'Members pay individually' },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ display: 'flex', gap: 12, padding: '14px 18px', background: 'rgba(255,255,255,0.025)', textDecoration: 'none', borderLeft: '2px solid transparent', transition: 'all 0.18s', alignItems: 'flex-start' }} className="sxl">
                <span style={{ fontSize: 18, flexShrink: 0, opacity: 0.75 }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'rgba(245,237,216,0.7)' }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: 'rgba(245,237,216,0.3)', marginTop: 2 }}>{s.note}</div>
                </div>
              </Link>
            ))}
          </div>
          <style>{\`.sxl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--copper)!important}.sxl:hover div:first-child{color:var(--copper)!important}\`}</style>
        </div>
      </section>
    </>
  )
}
