import type { Metadata } from 'next'
import Link from 'next/link'
import TourInquiryForm from '@/components/TourInquiryForm'

export const metadata: Metadata = {
  title: 'Plan Your Group Golf Trip | Free Custom Quote | Group Golf Tours',
  description: 'Start planning your group golf trip. Tell us your destination, group size, and budget — we build a fully custom package in 24 hours. Tee times, hotels, transport, dining. 20+ years, 10,000+ outings.',
  alternates: { canonical: 'https://www.groupgolftours.com/tour-inquiry/' },
  openGraph: {
    title: 'Plan Your Group Golf Trip | Free Custom Quote',
    description: 'Custom golf packages built around your group. Pebble Beach, Shadow Creek, Lake Tahoe, Las Vegas and beyond. Free quote within 24 hours.',
    url: 'https://www.groupgolftours.com/tour-inquiry/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Golf Tour Inquiry — Group Golf Tours',
  url: 'https://www.groupgolftours.com/tour-inquiry/',
  description: 'Request a custom group golf package. Groups 4–200. Free quote within 24 hours.',
  mainEntity: {
    '@type': 'ContactPoint',
    telephone: '+1-888-584-8232',
    contactType: 'sales',
    contactOption: 'TollFree',
    areaServed: 'US',
    availableLanguage: 'English',
  },
}

export default function TourInquiry() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="grain" style={{ background: '#080806', padding: 'clamp(96px,12vw,160px) 0 clamp(64px,8vw,100px)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 30% 50%, rgba(168,72,32,0.14) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 80% 30%, rgba(61,24,64,0.1) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div className="section-wrap" style={{ maxWidth: 'var(--max)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 28, height: 1, background: 'var(--copper)' }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>Free Custom Quote · 24hr Response</span>
              </div>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px,6vw,76px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 24 }}>
                Tell us where.<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>We handle<br />the rest.</em>
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(245,237,216,0.58)', maxWidth: 460, marginBottom: 36, fontWeight: 300 }}>
                Two minutes. Tell us destination, group size, and budget. A specialist builds a fully custom itinerary — tee times, hotel, transport, dining, insurance — and calls back within 24 hours.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, paddingTop: 28, borderTop: '1px solid rgba(200,121,65,0.15)', maxWidth: 420 }}>
                {[
                  { n: '10,000+', l: 'Outings Planned' },
                  { n: '20+', l: 'Years Experience' },
                  { n: '24hr', l: 'Response Guaranteed' },
                  { n: '4–200', l: 'Group Sizes' },
                ].map(s => (
                  <div key={s.n}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--copper)', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.28)', marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '⛳', title: 'Tee times others can\'t get', body: 'Pebble Beach (18-month advance), Shadow Creek (MGM guests only), Edgewood Tahoe — we hold relationships the public doesn\'t.' },
                { icon: '🏨', title: 'Hotel blocks held on inquiry', body: 'Atlantis, Peppermill, MGM properties, The Lodge at Pebble Beach. We hold your rooms the day you call — before they sell.' },
                { icon: '📋', title: 'One contact, one invoice', body: 'Tee times, hotels, shuttles, dining, insurance. One call, one itinerary. No forwarded emails, no chasing vendors.' },
                { icon: '🛡', title: 'Licensed & fully protected', body: 'Registered Seller of Travel — Nevada + Florida (ST37472). 72-hour free cancellation. Your deposit is protected.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, padding: '16px 20px', background: 'rgba(255,255,255,0.025)', borderLeft: '2px solid rgba(200,121,65,0.3)' }}>
                  <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: 'var(--cream)', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(245,237,216,0.45)', lineHeight: 1.65 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: 'clamp(64px,9vw,112px) 0', background: 'var(--parchment)' }}>
        <div className="section-wrap" style={{ maxWidth: 'var(--max)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'clamp(40px,5vw,80px)', alignItems: 'start' }}>
            <div>
              <TourInquiryForm />
            </div>
            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 88 }}>
              {/* Contact direct */}
              <div style={{ background: 'var(--ink)', padding: '28px 24px' }}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>Prefer to Talk Now?</div>
                <a href="tel:8885848232" style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--cream)', textDecoration: 'none', marginBottom: 6, lineHeight: 1 }}>888-584-8232</a>
                <div style={{ fontSize: 12, color: 'rgba(245,237,216,0.45)', marginBottom: 16 }}>Mon–Fri 8am–6pm PT · Sat 9am–3pm</div>
                <a href="mailto:customerservice@zoomaway.com" style={{ display: 'block', fontSize: 12, color: 'var(--gold)', textDecoration: 'none' }}>customerservice@zoomaway.com</a>
              </div>
              {/* What happens next */}
              <div style={{ background: '#F5F0E6', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 16 }}>What Happens Next</div>
                {[
                  { n: '01', t: 'You submit this form', b: 'Takes 2 minutes. No commitment.' },
                  { n: '02', t: 'Specialist reviews within 24hrs', b: 'We match you to the right package and expert.' },
                  { n: '03', t: 'You get a custom itinerary', b: 'Tee times, hotel, transport, dining — fully built.' },
                  { n: '04', t: 'Approve and we book everything', b: 'No payment until you\'re happy with the plan.' },
                ].map(step => (
                  <div key={step.n} style={{ display: 'flex', gap: 14, paddingBottom: 14, marginBottom: 14, borderBottom: '1px solid rgba(26,20,8,0.1)' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--copper)', lineHeight: 1, flexShrink: 0, minWidth: 28 }}>{step.n}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600, color: '#1A1408', marginBottom: 3 }}>{step.t}</div>
                      <div style={{ fontSize: 11, color: 'rgba(26,20,8,0.5)', lineHeight: 1.5 }}>{step.b}</div>
                    </div>
                  </div>
                ))}
                <div style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
                  <div style={{ display: 'flex', gap: 14 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--copper)', lineHeight: 1, flexShrink: 0, minWidth: 28 }}>05</div>
                    <div>
                      <div style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600, color: '#1A1408', marginBottom: 3 }}>You play. We manage.</div>
                      <div style={{ fontSize: 11, color: 'rgba(26,20,8,0.5)', lineHeight: 1.5 }}>The organiser becomes just another golfer on day one.</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Trust badges */}
              <div style={{ background: 'var(--ink)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  '✓  Licensed Seller of Travel — NV + FL ST37472',
                  '✓  72-hour free cancellation on all bookings',
                  '✓  No payment until itinerary is approved',
                  '✓  Response within 24 hours — from a real person',
                ].map(t => (
                  <div key={t} style={{ fontSize: 11, color: 'rgba(245,237,216,0.55)', lineHeight: 1.5 }}>{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations quick links */}
      <section style={{ background: '#0A0806', padding: 'clamp(48px,6vw,72px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth: 'var(--max)' }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)' }}>Popular Destinations</span>
          <div style={{ width: 36, height: 1, background: 'var(--gold)', marginTop: 10, marginBottom: 22 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 2 }}>
            {[
              { label: 'Pebble Beach & Monterey', href: '/portfolio-item/monterey-and-pebble-beach/', note: '$675/round · Book 12–18 months out' },
              { label: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', note: 'From $275/person · Reno packages' },
              { label: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/', note: 'Shadow Creek $1,250 · MGM guests only' },
              { label: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/', note: 'Torrey Pines · Year-round golf' },
              { label: 'Somersett Golf & CC', href: '/portfolio-item/somersett-golf-country-club/', note: 'Private club access · Reno NV' },
            ].map(d => (
              <Link key={d.href} href={d.href} style={{ display: 'block', padding: '14px 18px', background: 'rgba(255,255,255,0.025)', textDecoration: 'none', borderLeft: '2px solid transparent', transition: 'all 0.18s' }} className="dxl">
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'rgba(245,237,216,0.7)' }}>{d.label}</div>
                <div style={{ fontSize: 10, color: 'rgba(245,237,216,0.3)', marginTop: 3 }}>{d.note}</div>
              </Link>
            ))}
          </div>
          <style>{`.dxl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--gold)!important}.dxl:hover>div:first-child{color:var(--gold)!important}`}</style>
        </div>
      </section>
    </>
  )
}
