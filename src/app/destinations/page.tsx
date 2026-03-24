import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Golf Destinations — USA & International | Group Golf Tours',
  description: 'Explore premier golf destinations across the USA — Lake Tahoe, Las Vegas, Pebble Beach, Southern California — plus international tours to Ireland, Scotland, Portugal, Spain, Mexico and more.',
  alternates: { canonical: 'https://www.groupgolftours.com/destinations/' },
}

const usDests = [
  { name: 'Lake Tahoe & Northern Nevada', tag: 'Sierra Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80' },
  { name: 'Las Vegas & Southern Nevada', tag: 'Desert Southwest', href: '/portfolio-item/las-vegas-and-southern-nevada/', img: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=800&q=80' },
  { name: 'Monterey & Pebble Beach', tag: 'California Coast', href: '/portfolio-item/monterey-and-pebble-beach/', img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80' },
  { name: 'Southern California', tag: 'Year-Round Sun', href: '/portfolio-item/monterey-and-pebble-beach-2/', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80' },
]

const comingSoon = ['Arizona','Bandon, Oregon','Beaver Creek, Colorado','Sand Hills, Nebraska','Scottsdale','Palm Springs','Myrtle Beach']
const international = ['Ireland','Scotland','Portugal','Spain','Mexico','Dominican Republic']

export default function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where Do You Want to Play?"
        subtitle="From the Sierra Nevada to the Irish links — we plan golf travel across the USA and around the world."
        img="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=80"
      />

      {/* US Destinations */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap">
          <p className="eyebrow">United States</p>
          <div className="divider-gold" />
          <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', color: 'var(--color-dark)', marginBottom: 40 }}>Featured US Destinations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {usDests.map(d => (
              <Link key={d.href} href={d.href} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,26,15,0.85) 0%, rgba(13,26,15,0.1) 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 6 }}>{d.tag}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--color-cream)' }}>{d.name}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div style={{ marginTop: 48, padding: '32px', background: 'var(--color-cream)' }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Expanding Soon</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {comingSoon.map(d => (
                <span key={d} style={{ padding: '6px 16px', background: 'var(--color-white)', border: '1px solid var(--color-cream-dark)', fontSize: 13, color: 'var(--color-text-muted)' }}>{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-dark)' }}>
        <div className="section-wrap">
          <p className="eyebrow-light">International</p>
          <div className="divider-gold" />
          <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', color: 'var(--color-cream)', marginBottom: 20 }}>Play the World&apos;s Great Courses</h2>
          <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, maxWidth: 600, marginBottom: 40 }}>
            From the legendary links of Ireland and Scotland to the warm fairways of Portugal, Spain, Mexico, and the Dominican Republic — we plan international golf tours with full white-glove coordination.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            {international.map(d => (
              <div key={d} style={{ padding: '16px 28px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.25)', fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-cream)' }}>{d}</div>
            ))}
          </div>
          <Link href="/tour-inquiry/" className="btn-primary">Inquire About International Tours</Link>
        </div>
      </section>
    </>
  )
}
