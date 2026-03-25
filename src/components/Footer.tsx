import Link from 'next/link'

const col1 = [
  { label: 'Lake Tahoe & Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/' },
  { label: 'Las Vegas & Southern NV', href: '/portfolio-item/las-vegas-and-southern-nevada/' },
  { label: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' },
  { label: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/' },
  { label: 'Somersett Golf & CC', href: '/portfolio-item/somersett-golf-country-club/' },
  { label: 'All Destinations', href: '/destinations/' },
]
const col2 = [
  { label: 'Golf Buddy Trips', href: '/golf-buddy-trips/' },
  { label: 'Corporate & Incentive', href: '/corporate-and-incentive-golf-travel/' },
  { label: 'Tour Packages', href: '/tour-packages/' },
  { label: 'Hotel Reservations', href: '/hotel-reservations/' },
  { label: 'Golf Courses', href: '/golf-courses/' },
  { label: 'Transportation', href: '/transportation/' },
  { label: 'Travel Insurance', href: '/travel-insurance/' },
  { label: 'Tour Inquiry', href: '/tour-inquiry/' },
]
const col3 = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Who We Are', href: '/who-we-are/' },
  { label: 'What We Do', href: '/what-we-do/' },
  { label: 'How We Do It', href: '/how-we-do-it/' },
  { label: 'Customer Testimonials', href: '/customer-testimonials/' },
  { label: 'News', href: '/news/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Cancellation Policy', href: '/cancellation-policy/' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link { color: rgba(244,239,228,0.45); text-decoration: none; font-size: 13px; line-height: 2; font-family: var(--sans); transition: color 0.15s; }
        .footer-link:hover { color: var(--gold); }
      `}</style>
      <footer style={{ background: '#080808', color: 'var(--cream)', padding: 'clamp(64px,8vw,100px) 0 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        
        {/* Trust bar */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 48, marginBottom: 48 }}>
          <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
            {[
              { n: '20+', l: 'Years in Business' },
              { n: '10,000+', l: 'Outings Planned' },
              { n: '5', l: 'Signature Regions' },
              { n: 'NV + FL', l: 'Licensed Seller of Travel' },
            ].map(s => (
              <div key={s.n}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 36, color: 'var(--gold)', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.3)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, paddingBottom: 64 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--cream)', marginBottom: 8 }}>Group Golf Tours</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Vacations on the Green</div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(244,239,228,0.4)', marginBottom: 20 }}>
              Planning extraordinary golf experiences for individuals, groups, and corporate events since 2004.
            </p>
            <a href="tel:8885848232" style={{ display: 'block', fontSize: 16, fontWeight: 600, color: 'var(--gold)', textDecoration: 'none', marginBottom: 8, fontFamily: 'var(--sans)' }}>
              888-584-8232
            </a>
            <a href="mailto:customerservice@zoomaway.com" className="footer-link" style={{ fontSize: 12 }}>
              customerservice@zoomaway.com
            </a>
          </div>

          {/* Destinations */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Destinations</div>
            {col1.map(l => <div key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></div>)}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Services</div>
            {col2.map(l => <div key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></div>)}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Company</div>
            {col3.map(l => <div key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></div>)}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px var(--pad)', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 12, color: 'rgba(244,239,228,0.25)' }}>
            © {new Date().getFullYear()} Zoomaway Technologies Inc. · Group Golf Tours · Vacations on the Green · Prestige Golf
          </div>
          <div style={{ fontSize: 11, color: 'rgba(244,239,228,0.2)', letterSpacing: '0.04em' }}>
            Licensed Seller of Travel · State of Nevada · Florida (ST37472) · Governing Law: State of Texas
          </div>
        </div>
      </footer>
    </>
  )
}
