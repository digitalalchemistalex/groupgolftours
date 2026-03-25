import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Customer Testimonials | What Groups Say | Group Golf Tours',
  description: "Read what golfers say about Group Golf Tours. 10,000+ outings over 20+ years — hear from the groups we've taken to Pebble Beach, Shadow Creek, Edgewood Tahoe, and beyond.",
  alternates: { canonical: 'https://www.groupgolftours.com/customer-testimonials/' },
}

const reviews = [
  {
    name: 'Michael Jory', date: 'August 2024', stars: 5, source: 'Google',
    destination: 'Somersett Golf & CC · Reno, NV', color: '#98D060',
    text: 'Great course! One of the most challenging courses in the area. Always in excellent condition with fast greens and perfect fairways. The course sits at an elevation of approximately 5,200 ft.',
  },
  {
    name: 'Marcus Barrett', date: 'July 2024', stars: 5, source: 'Google',
    destination: 'Somersett Golf & CC · Reno, NV', color: '#98D060',
    text: 'Best course conditions I have played all year. Driving range and putting range as well at the course. Would absolutely come back.',
  },
  {
    name: 'Beau Bennett', date: 'October 2023', stars: 5, source: 'Google',
    destination: 'Somersett Golf & CC · Reno, NV', color: '#98D060',
    text: 'I eat here 2–3 times per week and it just gets better and better. The Avocado Toast with poached eggs is awesome for breakfast. Their lunch is also good with burgers, BLTs, salads and more. The dinner menu is also good with steaks, seafood and pasta dishes. The view is top-notch and the staff are all excellent.',
  },
]

export default function Testimonials() {
  return (
    <>
      {/* Hero */}
      <section className="grain" style={{ background: '#080806', padding: 'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 65% at 60% 40%, rgba(168,72,32,0.08) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div className="section-wrap" style={{ maxWidth: 'var(--max)', position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>What Groups Say</span>
          <div style={{ width: 36, height: 1, background: 'var(--copper)', margin: '14px 0 22px' }} />
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px,6vw,80px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 20 }}>
            10,000+ trips.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Zero regrets.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.82, color: 'rgba(245,237,216,0.58)', maxWidth: 560, fontWeight: 300 }}>
            Don&apos;t take our word for it. Hear from the golfers we&apos;ve had the privilege of taking to the world&apos;s great courses — Pebble Beach, Shadow Creek, Edgewood Tahoe, and beyond.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: 'var(--parchment)', padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth: 'var(--max)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, marginBottom: 64 }}>
            {reviews.map(r => (
              <div key={r.name} style={{ background: '#FAF6EE', padding: '32px 28px', borderTop: `3px solid ${r.color}` }}>
                <div style={{ fontSize: 18, color: 'var(--gold)', marginBottom: 12, letterSpacing: 2 }}>{'★'.repeat(r.stars)}</div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: 1.8, color: '#1A1408', marginBottom: 20, fontStyle: 'italic' }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ borderTop: '1px solid rgba(26,20,8,0.1)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: '#1A1408' }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(26,20,8,0.45)', marginTop: 3 }}>{r.date} · {r.source}</div>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: r.color, textAlign: 'right', maxWidth: 140, lineHeight: 1.4 }}>{r.destination}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Note about testimonials */}
          <div style={{ background: 'rgba(200,121,65,0.08)', border: '1px solid rgba(200,121,65,0.2)', padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600, color: 'var(--copper)', marginBottom: 8 }}>A note on reviews</div>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(26,20,8,0.55)' }}>
              The reviews above are from verified Google reviews at Somersett Golf & Country Club — one of our signature Reno partner courses. Our full testimonial library spans 10,000+ outings across all destinations. We&apos;re actively collecting more. If you&apos;ve traveled with us, we&apos;d love to hear from you at <a href="mailto:customerservice@zoomaway.com" style={{ color: 'var(--copper)', fontWeight: 600 }}>customerservice@zoomaway.com</a>.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 300, color: '#1A1408', marginBottom: 28, lineHeight: 1.2 }}>
              Ready to create your own story?
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tour-inquiry/" className="btn btn-gold"><span>Plan My Trip</span></Link>
              <a href="tel:8885848232" className="btn btn-ink"><span>Call 888-584-8232</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
