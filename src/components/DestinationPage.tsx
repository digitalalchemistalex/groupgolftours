import Link from 'next/link'

interface Props {
  name: string
  tag: string
  heroImg: string
  heroCopy: string
  areas: string[]
  prevDest?: { name: string; href: string }
  nextDest?: { name: string; href: string }
}

const services = [
  { label: 'Golf Tee Times', desc: 'Preferred access and group rates at top courses in this region.', href: '/golf-courses/' },
  { label: 'Hotel Reservations', desc: 'Luxury and value accommodations blocked together for your group.', href: '/hotel-reservations/' },
  { label: 'Transportation', desc: 'Airport transfers, shuttles, and private vehicles fully arranged.', href: '/transportation/' },
  { label: 'Dining & Events', desc: 'Award-winning restaurants and curated culinary experiences.', href: '/dining-events-and-arrangements/' },
  { label: 'Travel Insurance', desc: 'Comprehensive coverage for trip cancellations and emergencies.', href: '/travel-insurance/' },
  { label: 'Sightseeing & Activities', desc: 'Beyond the greens — local landmarks, outdoor adventures, and more.', href: '/site-seeing-and-non-golf-activities/' },
]

export default function DestinationPage({ name, tag, heroImg, heroCopy, areas, prevDest, nextDest }: Props) {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '70vh', minHeight: 520, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,26,15,0.85) 0%, rgba(13,26,15,0.4) 100%)' }} />
        <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow-light" style={{ marginBottom: 16 }}>{tag}</p>
          <div className="divider-gold" />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px,6vw,72px)', color: 'var(--color-cream)', fontWeight: 400, maxWidth: 720, marginBottom: 24 }}>{name}</h1>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/tour-inquiry/" className="btn-primary">Plan This Trip</Link>
            <a href="tel:8885848232" className="btn-outline">Call 888-584-8232</a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 72, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">About This Destination</p>
            <div className="divider-gold" />
            <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-text)' }}>{heroCopy}</p>
          </div>
          <div>
            <p className="eyebrow">Areas & Attractions</p>
            <div className="divider-gold" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {areas.map(a => (
                <span key={a} style={{ padding: '6px 14px', background: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)', fontSize: 13, color: 'var(--color-text)' }}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-cream)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow">What&apos;s Included</p>
            <div className="divider-gold-center" />
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', color: 'var(--color-dark)' }}>Full-Service Golf Travel</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {services.map(s => (
              <Link key={s.href} href={s.href} style={{ textDecoration: 'none', padding: '24px 24px', background: 'var(--color-white)', borderBottom: '2px solid var(--color-gold)', display: 'block' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--color-dark)', marginBottom: 8 }}>{s.label}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-muted)' }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--color-dark)', textAlign: 'center' }}>
        <div className="section-wrap" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', color: 'var(--color-cream)', marginBottom: 16 }}>Ready to Play {name}?</h2>
          <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, marginBottom: 32 }}>Fill out our inquiry form and we&apos;ll build a custom package for your group.</p>
          <Link href="/tour-inquiry/" className="btn-primary">Start Planning</Link>
        </div>
      </section>

      {/* Prev/Next nav */}
      {(prevDest || nextDest) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--color-green)', padding: '20px clamp(20px,4vw,60px)' }}>
          {prevDest ? <Link href={prevDest.href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-cream)', textDecoration: 'none', letterSpacing: '0.06em' }}>← {prevDest.name}</Link> : <div />}
          {nextDest ? <Link href={nextDest.href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-cream)', textDecoration: 'none', letterSpacing: '0.06em' }}>{nextDest.name} →</Link> : <div />}
        </div>
      )}
    </>
  )
}
