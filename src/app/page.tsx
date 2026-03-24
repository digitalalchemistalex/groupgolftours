import type { Metadata } from 'next'
import Link from 'next/link'
import DestinationCard from '@/components/DestinationCard'
import ExperienceCard from '@/components/ExperienceCard'
import ServiceLink from '@/components/ServiceLink'

export const metadata: Metadata = {
  title: 'Group Golf Tours — National & International Golf Travel Experts',
  description: 'Plan your perfect golf getaway with Group Golf Tours. Custom packages for buddy trips, corporate events, and group travel to Lake Tahoe, Las Vegas, Pebble Beach, Southern California, Ireland, Scotland and beyond.',
  alternates: { canonical: 'https://www.groupgolftours.com/' },
}

const destinations = [
  { name: 'Lake Tahoe & Northern Nevada', tag: 'Sierra Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80' },
  { name: 'Las Vegas & Southern Nevada', tag: 'Desert Southwest', href: '/portfolio-item/las-vegas-and-southern-nevada/', img: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=800&q=80' },
  { name: 'Monterey & Pebble Beach', tag: 'California Coast', href: '/portfolio-item/monterey-and-pebble-beach/', img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80' },
  { name: 'Southern California', tag: 'Year-Round Sun', href: '/portfolio-item/monterey-and-pebble-beach-2/', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80' },
]

const experiences = [
  { title: 'Golf Buddy Trips', desc: 'Unforgettable group getaways tailored to your crew — tee times, lodging, and everything in between.', href: '/golf-buddy-trips/', icon: '⛳' },
  { title: 'Corporate & Incentive', desc: 'Reward your team or impress clients with expertly planned corporate golf events and incentive trips.', href: '/corporate-and-incentive-golf-travel/', icon: '🏆' },
  { title: 'International Tours', desc: 'Play the legendary links of Ireland, Scotland, Portugal, Spain, and beyond with full white-glove planning.', href: '/destinations/', icon: '✈️' },
  { title: 'Custom Packages', desc: 'From budget-friendly escapes to luxury retreats — we build every itinerary around your preferences.', href: '/tour-packages/', icon: '📋' },
]

const services = [
  { label: 'Hotel Reservations', href: '/hotel-reservations/' },
  { label: 'Tee Times', href: '/golf-courses/' },
  { label: 'Transportation', href: '/transportation/' },
  { label: 'Dining & Events', href: '/dining-events-and-arrangements/' },
  { label: 'Travel Insurance', href: '/travel-insurance/' },
  { label: 'Sightseeing', href: '/site-seeing-and-non-golf-activities/' },
]

const stats = [
  { n: '20+', label: 'Years in Business' },
  { n: '10,000+', label: 'Outings Planned' },
  { n: '4+', label: 'US Destinations' },
  { n: '10+', label: 'International Destinations' },
]

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelAgency',
        '@id': 'https://www.groupgolftours.com/#organization',
        name: 'Group Golf Tours',
        alternateName: ['Vacations on the Green', 'Prestige Golf'],
        url: 'https://www.groupgolftours.com',
        telephone: '+1-888-584-8232',
        email: 'customerservice@zoomaway.com',
        address: { '@type': 'PostalAddress', streetAddress: '3010 LBJ Freeway, Suite 1550', addressLocality: 'Dallas', addressRegion: 'TX', postalCode: '75234', addressCountry: 'US' },
        description: 'Group golf travel specialists with 20+ years of experience.',
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 680, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=85) center/cover no-repeat' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,26,15,0.88) 0%, rgba(13,26,15,0.55) 60%, rgba(13,26,15,0.3) 100%)' }} />
        <div className="section-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
          <p className="eyebrow-light" style={{ marginBottom: 20 }}>Your Trusted Partner in Golf Travel</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 400, color: 'var(--color-cream)', lineHeight: 1.05, marginBottom: 28 }}>
            The World&apos;s Finest<br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Golf Experiences.</em><br />
            Perfectly Planned.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(245,240,232,0.8)', maxWidth: 520, marginBottom: 40, fontWeight: 300 }}>
            From the Sierra Nevada to the Irish links — we craft unforgettable golf travel for groups, buddies, and corporate teams. 20+ years. 10,000+ outings.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/tour-inquiry/" className="btn-primary">Plan Your Trip</Link>
            <Link href="/destinations/" className="btn-outline">Explore Destinations</Link>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.5 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-cream)', fontFamily: 'var(--font-sans)' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'var(--color-gold)' }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--color-green)', padding: '28px 0' }}>
        <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.n}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, color: 'var(--color-gold)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.65)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section style={{ padding: 'clamp(60px,8vw,120px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow">Where We Play</p>
            <div className="divider-gold-center" />
            <h2 style={{ fontSize: 'clamp(36px,5vw,56px)', color: 'var(--color-dark)', marginBottom: 16 }}>Featured Destinations</h2>
            <p style={{ fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>Premier golf regions across the US — and the world. Each destination personally vetted by our team.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {destinations.map(d => <DestinationCard key={d.href} {...d} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/destinations/" className="btn-dark">View All Destinations</Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section style={{ padding: 'clamp(60px,8vw,120px) 0', background: 'var(--color-cream)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow">How We Travel</p>
            <div className="divider-gold-center" />
            <h2 style={{ fontSize: 'clamp(36px,5vw,56px)', color: 'var(--color-dark)', marginBottom: 16 }}>Golf Travel for Every Group</h2>
            <p style={{ fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>Whether it&apos;s a weekend escape with friends or a full international corporate event — we handle every detail.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            {experiences.map(e => <ExperienceCard key={e.href} {...e} />)}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ padding: 'clamp(60px,8vw,120px) 0', background: 'var(--color-dark)' }}>
        <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 80, alignItems: 'center' }}>
          <div>
            <p className="eyebrow-light">About Group Golf Tours</p>
            <div className="divider-gold" />
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', color: 'var(--color-cream)', marginBottom: 24 }}>Two Decades of Exceptional Golf Travel</h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 16 }}>
              Over two decades ago, as golf&apos;s popularity soared across the U.S. and internationally, we recognized an opportunity to help travelers plan unforgettable golf experiences.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 32 }}>
              From iconic courses in Lake Tahoe and Northern Nevada to the legendary links of Ireland and Scotland, we&apos;ve partnered with top golf courses, luxury hotels, and local tourism bureaus to make every destination extraordinary.
            </p>
            <Link href="/about-us/" className="btn-primary">Our Story</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {services.map(s => <ServiceLink key={s.href} {...s} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-green-mid)', textAlign: 'center' }}>
        <div className="section-wrap" style={{ maxWidth: 700 }}>
          <p className="eyebrow-light">Ready to Tee Off?</p>
          <div className="divider-gold-center" />
          <h2 style={{ fontSize: 'clamp(36px,5vw,60px)', color: 'var(--color-cream)', marginBottom: 20 }}>Let&apos;s Plan Your Perfect Golf Trip</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginBottom: 40 }}>
            Tell us where you want to go, how many in your group, and what kind of experience you&apos;re after. We&apos;ll take care of everything else.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tour-inquiry/" className="btn-primary">Start Planning</Link>
            <a href="tel:8885848232" className="btn-outline">Call 888-584-8232</a>
          </div>
        </div>
      </section>
    </>
  )
}
