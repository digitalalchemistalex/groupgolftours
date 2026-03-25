import Link from 'next/link'

const col1 = [
  { label: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/' },
  { label: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' },
  { label: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' },
  { label: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/' },
  { label: 'Somersett Golf & CC', href: '/portfolio-item/somersett-golf-country-club/' },
  { label: 'All Destinations', href: '/destinations/' },
]
const col2 = [
  { label: 'Golf Courses & Tee Times', href: '/golf-courses/' },
  { label: 'Hotel Reservations', href: '/hotel-reservations/' },
  { label: 'Transportation', href: '/transportation/' },
  { label: 'Dining & Events', href: '/dining-events-and-arrangements/' },
  { label: 'Travel Insurance', href: '/travel-insurance/' },
  { label: 'Tour Packages', href: '/tour-packages/' },
  { label: 'Sightseeing & Activities', href: '/site-seeing-and-non-golf-activities/' },
  { label: 'Online Registration', href: '/online-registration-system/' },
]
const col3 = [
  { label: 'Golf Buddy Trips', href: '/golf-buddy-trips/' },
  { label: 'Corporate & Incentive Travel', href: '/corporate-and-incentive-golf-travel/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Who We Are', href: '/who-we-are/' },
  { label: 'What We Do', href: '/what-we-do/' },
  { label: 'How We Do It', href: '/how-we-do-it/' },
  { label: 'Customer Testimonials', href: '/customer-testimonials/' },
  { label: 'News', href: '/news/' },
]
const col4 = [
  { label: 'Plan My Trip', href: '/tour-inquiry/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Cancellation Policy', href: '/cancellation-policy/' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .fl { color:rgba(244,239,228,0.42); text-decoration:none; font-size:13px; line-height:2.1; font-family:var(--sans); transition:color 0.15s; display:block; }
        .fl:hover { color:var(--gold); }
        .fcol-head { font-family:var(--sans); font-size:9px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--gold); margin-bottom:14px; display:block; }
      `}</style>
      <footer style={{ background:'#080808', color:'var(--cream)', padding:'clamp(64px,8vw,100px) 0 0', borderTop:'1px solid rgba(201,168,76,0.1)' }}>

        {/* Trust stats bar */}
        <div style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', paddingBottom:48, marginBottom:48 }}>
          <div className="wrap" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:28, textAlign:'center' }}>
            {[
              { n:'20+', l:'Years in Business' },
              { n:'10,000+', l:'Outings Planned' },
              { n:'5', l:'Signature Regions' },
              { n:'NV + FL', l:'Licensed Seller of Travel' },
            ].map(s => (
              <div key={s.n}>
                <div style={{ fontFamily:'var(--serif)', fontSize:34, color:'var(--gold)', lineHeight:1, marginBottom:6 }}>{s.n}</div>
                <div style={{ fontSize:10, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(244,239,228,0.28)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-column link grid */}
        <div className="wrap" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(170px,1fr))', gap:44, paddingBottom:64 }}>
          {/* Brand column */}
          <div>
            <div style={{ fontFamily:'var(--serif)', fontSize:22, color:'var(--cream)', marginBottom:6 }}>Group Golf Tours</div>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:18 }}>Vacations on the Green</div>
            <p style={{ fontSize:13, lineHeight:1.8, color:'rgba(244,239,228,0.38)', marginBottom:18 }}>
              Custom golf travel packages for groups, buddy trips, and corporate events. 20+ years planning unforgettable outings.
            </p>
            <a href="tel:8885848232" style={{ display:'block', fontSize:16, fontWeight:600, color:'var(--gold)', textDecoration:'none', marginBottom:6, fontFamily:'var(--sans)' }}>888-584-8232</a>
            <a href="mailto:customerservice@zoomaway.com" className="fl" style={{ fontSize:12 }}>customerservice@zoomaway.com</a>
          </div>

          {/* Destinations */}
          <div>
            <span className="fcol-head">Destinations</span>
            {col1.map(l => <Link key={l.href} href={l.href} className="fl">{l.label}</Link>)}
          </div>

          {/* Services */}
          <div>
            <span className="fcol-head">Services</span>
            {col2.map(l => <Link key={l.href} href={l.href} className="fl">{l.label}</Link>)}
          </div>

          {/* Experiences + Company */}
          <div>
            <span className="fcol-head">Experiences</span>
            {col3.map(l => <Link key={l.href} href={l.href} className="fl">{l.label}</Link>)}
            <div style={{ marginTop:20 }}>
              <span className="fcol-head">Legal</span>
              {col4.map(l => <Link key={l.href} href={l.href} className="fl">{l.label}</Link>)}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', padding:'22px var(--pad)', display:'flex', flexWrap:'wrap', gap:16, justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontSize:12, color:'rgba(244,239,228,0.22)' }}>
            © {new Date().getFullYear()} Zoomaway Technologies Inc. · Group Golf Tours · Vacations on the Green · Prestige Golf
          </div>
          <div style={{ fontSize:11, color:'rgba(244,239,228,0.18)' }}>
            Licensed Seller of Travel · Nevada · Florida (ST37472) · Dallas, TX
          </div>
        </div>
      </footer>
    </>
  )
}
