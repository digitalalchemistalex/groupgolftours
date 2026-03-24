import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About Us — 20+ Years of Group Golf Travel',
  description: 'Group Golf Tours has planned 10,000+ golf outings across the USA and internationally. Meet our team and learn how we became the trusted name in group golf travel.',
  alternates: { canonical: 'https://www.groupgolftours.com/about-us/' },
}

export default function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="About Group Golf Tours"
        title="Two Decades of Exceptional<br/>Golf Travel"
        subtitle="From the Sierra Nevada to the links of Ireland — we&apos;ve been planning unforgettable golf experiences since the early 2000s."
        img="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=80"
      />

      {/* Story */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow">Our Story</p>
          <div className="divider-gold" />
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-text)', marginBottom: 24 }}>
            Over two decades ago, as golf&apos;s popularity soared in regions across the U.S. and internationally, we recognized an opportunity to help travelers plan unforgettable golf experiences. From iconic courses in Lake Tahoe and Northern Nevada to the breathtaking greens of Ireland and Scotland, we&apos;ve partnered with top golf courses, luxury hotels, and local tourism bureaus to make every destination accessible and extraordinary.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-text)', marginBottom: 24 }}>
            Our offerings include renowned destinations such as Las Vegas, Monterey, Pebble Beach, Southern California, and Arizona, along with hidden gems like Beaver Creek, Colorado and Sand Hills, Nebraska. For those seeking international adventures, we provide curated golf packages to Mexico, the Dominican Republic, Portugal, Spain, Ireland, and Scotland.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-text)', marginBottom: 40 }}>
            Through golf shows, online marketing, and dedicated customer service, we&apos;ve built a reputation as the go-to source for individual and group golf trips. With over 10,000 outings planned, we&apos;re trusted by golfers around the world for our reliability, personalized service, and expert planning.
          </p>
          <Link href="/tour-inquiry/" className="btn-primary">Plan Your Next Trip</Link>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--color-dark)', padding: '60px 0' }}>
        <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 32, textAlign: 'center' }}>
          {[['20+','Years in Business'],['10,000+','Outings Planned'],['15+','US Destinations'],['10+','International Destinations'],['2','Licensed States']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 44, fontWeight: 400, color: 'var(--color-gold)' }}>{n}</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.55)', marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-cream)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow">The Team</p>
            <div className="divider-gold-center" />
            <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', color: 'var(--color-dark)' }}>Meet the People Behind Your Trip</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40 }}>
            {[
              { name: 'Mike Milligan', role: 'Director of Sales, Zoomaway Inc.', bio: 'Mike brings decades of golf and travel industry experience to Group Golf Tours. With a background spanning tournament sales at Tahoe Mountain Club, sports marketing, and founding TripSee.Travel, Mike has an unmatched network across the golf world. His passion for the game and commitment to exceptional client experiences has been the backbone of 10,000+ successful outings.' },
              { name: 'Mike Eskuchen', role: 'General Manager, Operations', bio: 'Mike Eskuchen brings deep hospitality and golf management expertise to every trip we plan. His career spans roles as Director of Sales at Duncan Golf Management, Sales Manager and Tournament Coordinator at The Resort at Red Hawk, and Assistant Golf Professional at La Quinta Resort. His operational precision ensures every detail of your trip is executed flawlessly.' },
            ].map(p => (
              <div key={p.name} style={{ background: 'var(--color-white)', padding: '40px 36px' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--color-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--color-gold)', fontWeight: 500 }}>{p.name.split(' ').map(w => w[0]).join('')}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, color: 'var(--color-dark)', marginBottom: 4 }}>{p.name}</h3>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 16 }}>{p.role}</p>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-muted)' }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ padding: '48px 0', background: 'var(--color-green)' }}>
        <div className="section-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'center' }}>
          {['Licensed Seller of Travel — Nevada','Registered in Florida (ST37472)','20+ Years Experience','10,000+ Outings Planned','USA & International Destinations'].map(t => (
            <span key={t} style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.7)' }}>✓ {t}</span>
          ))}
        </div>
      </section>
    </>
  )
}
