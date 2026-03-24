import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-dark)', color: 'var(--color-cream)', padding: '72px 0 32px' }}>
      <div className="section-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: 60 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Group Golf Tours</div>
            <div className="eyebrow-light" style={{ marginBottom: 16 }}>Vacations on the Green</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(245,240,232,0.65)', maxWidth: 260 }}>Your trusted partner in memorable golf travel experiences. 20+ years, 10,000+ outings planned worldwide.</p>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 13, color: 'var(--color-gold)', fontWeight: 600 }}>888-584-8232</div>
              <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.5)', marginTop: 4 }}>customerservice@zoomaway.com</div>
            </div>
          </div>
          <div>
            <div className="eyebrow-light" style={{ marginBottom: 16 }}>Destinations</div>
            {[['Lake Tahoe & N. Nevada', '/portfolio-item/lake-tahoe-and-northern-nevada/'],['Las Vegas & S. Nevada', '/portfolio-item/las-vegas-and-southern-nevada/'],['Monterey & Pebble Beach', '/portfolio-item/monterey-and-pebble-beach/'],['Southern California', '/portfolio-item/monterey-and-pebble-beach-2/'],['All Destinations', '/destinations/']].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', marginBottom: 10 }}>{label}</Link>
            ))}
          </div>
          <div>
            <div className="eyebrow-light" style={{ marginBottom: 16 }}>Experiences</div>
            {[['Golf Buddy Trips', '/golf-buddy-trips/'],['Corporate & Incentive', '/corporate-and-incentive-golf-travel/'],['Tour Packages', '/tour-packages/'],['Online Registration', '/online-registration-system/'],['Plan a Trip', '/tour-inquiry/']].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', marginBottom: 10 }}>{label}</Link>
            ))}
          </div>
          <div>
            <div className="eyebrow-light" style={{ marginBottom: 16 }}>Company</div>
            {[['About Us', '/about-us/'],['What We Do', '/what-we-do/'],['How We Do It', '/how-we-do-it/'],['Testimonials', '/customer-testimonials/'],['News', '/news/']].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', marginBottom: 10 }}>{label}</Link>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: 32, marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {['20+ Years in Business','10,000+ Outings Planned','Licensed Seller of Travel — Nevada','Registered in Florida (ST37472)','USA & International Destinations'].map(t => (
            <span key={t} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)' }}>{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: 12, color: 'rgba(245,240,232,0.35)' }}>© {new Date().getFullYear()} Group Golf Tours / Zoomaway Technologies Inc.</span>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[['Privacy Policy', '/privacy-policy/'],['Terms & Conditions', '/terms-and-conditions/'],['Cancellation Policy', '/cancellation-policy/'],['Disclaimer', '/disclaimer/']].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 12, color: 'rgba(245,240,232,0.35)', textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
