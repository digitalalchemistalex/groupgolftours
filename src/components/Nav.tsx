'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const destinations = [
  { name: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/' },
  { name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' },
  { name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' },
  { name: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/' },
  { name: 'View All Destinations', href: '/destinations/' },
]

const experiences = [
  { name: 'Golf Buddy Trips', href: '/golf-buddy-trips/' },
  { name: 'Corporate & Incentive Travel', href: '/corporate-and-incentive-golf-travel/' },
  { name: 'Tour Packages', href: '/tour-packages/' },
]

const services = [
  { name: 'Golf Courses', href: '/golf-courses/' },
  { name: 'Hotel Reservations', href: '/hotel-reservations/' },
  { name: 'Transportation', href: '/transportation/' },
  { name: 'Dining & Events', href: '/dining-events-and-arrangements/' },
  { name: 'Travel Insurance', href: '/travel-insurance/' },
  { name: 'Sightseeing & Activities', href: '/site-seeing-and-non-golf-activities/' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,26,15,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="section-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, color: 'var(--color-cream)', letterSpacing: '-0.01em' }}>Group Golf Tours</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginTop: 2 }}>Vacations on the Green</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden-mobile">
          {[
            { label: 'Destinations', items: destinations },
            { label: 'Experiences', items: experiences },
            { label: 'Services', items: services },
          ].map(({ label, items }) => (
            <div key={label} style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown(label)}
              onMouseLeave={() => setActiveDropdown(null)}>
              <button style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
                letterSpacing: '0.04em', color: 'var(--color-cream)',
                padding: '8px 14px', transition: 'color 0.2s',
              }}>
                {label}
              </button>
              {activeDropdown === label && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, minWidth: 240,
                  background: 'var(--color-dark)', border: '1px solid rgba(201,168,76,0.2)',
                  padding: '8px 0', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                }}>
                  {items.map(item => (
                    <Link key={item.href} href={item.href} style={{
                      display: 'block', padding: '10px 20px',
                      fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-cream)',
                      textDecoration: 'none', transition: 'color 0.15s, padding-left 0.15s',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--color-gold)'; (e.target as HTMLElement).style.paddingLeft = '24px' }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--color-cream)'; (e.target as HTMLElement).style.paddingLeft = '20px' }}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/about-us/" style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--color-cream)', textDecoration: 'none', padding: '8px 14px' }}>About</Link>
          <Link href="/tour-inquiry/" className="btn-primary" style={{ marginLeft: 8, padding: '10px 24px' }}>Plan a Trip</Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }} className="show-mobile">
          <div style={{ width: 24, height: 2, background: 'var(--color-cream)', marginBottom: 5, transition: 'all 0.2s' }} />
          <div style={{ width: 24, height: 2, background: 'var(--color-cream)', marginBottom: 5 }} />
          <div style={{ width: 24, height: 2, background: 'var(--color-cream)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: 'var(--color-dark)', padding: '20px', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
          {[...destinations, ...experiences, ...services].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{
              display: 'block', padding: '12px 0', fontFamily: 'var(--font-sans)', fontSize: 14,
              color: 'var(--color-cream)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>{item.name}</Link>
          ))}
          <Link href="/tour-inquiry/" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>Plan a Trip</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </header>
  )
}
