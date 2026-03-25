'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const nav = {
  destinations: [
    { name: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', tag: 'Sierra Nevada', color: '#7BBFCF' },
    { name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/', tag: 'Desert Southwest', color: '#D4A843' },
    { name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/', tag: 'California Coast', color: '#2A6B8A' },
    { name: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/', tag: 'Year-Round Golf', color: '#C4622D' },
    { name: 'Somersett Golf & Country Club', href: '/portfolio-item/somersett-golf-country-club/', tag: 'Private Club Access', color: '#B87333' },
  ],
  experiences: [
    { name: 'Golf Buddy Trips', href: '/golf-buddy-trips/' },
    { name: 'Corporate & Incentive', href: '/corporate-and-incentive-golf-travel/' },
    { name: 'Tour Packages', href: '/tour-packages/' },
    { name: 'All Destinations', href: '/destinations/' },
  ],
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', s, { passive: true })
    return () => window.removeEventListener('scroll', s)
  }, [])

  return (
    <>
      <style>{`
        .nav-drop-link { display: flex; align-items: center; gap: 12px; padding: 12px 20px; text-decoration: none; transition: background 0.15s; }
        .nav-drop-link:hover { background: rgba(255,255,255,0.04); }
        .nav-exp-link { display: block; padding: 11px 20px; font-family: var(--sans); font-size: 13px; color: var(--cream); text-decoration: none; transition: background 0.15s, color 0.15s; }
        .nav-exp-link:hover { background: rgba(255,255,255,0.04); color: var(--gold); }
        @media (max-width: 900px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: flex !important; } }
      `}</style>

      {/* URGENCY BAR */}
      <div className="urgency-bar" style={{ fontSize: 11 }}>
        ⚑ &nbsp; Peak season tee times at Pebble Beach book 12–18 months out — Summer 2026 slots are filling now &nbsp;·&nbsp;
        <a href="/tour-inquiry/" style={{ color: '#0a0a0a', fontWeight: 700, textDecoration: 'underline' }}>Secure your dates</a>
      </div>

      {/* MAIN NAV */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        transition: 'all 0.3s',
      }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* LOGO */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500, color: 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1 }}>
              Group Golf Tours
            </span>
            <span className="eyebrow-light" style={{ fontSize: 8, letterSpacing: '0.2em' }}>Vacations on the Green</span>
          </Link>

          {/* DESKTOP */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
            {/* Destinations dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpen('dest')}
              onMouseLeave={() => setOpen(null)}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: open === 'dest' ? 'var(--gold)' : 'var(--cream)', padding: '8px 14px', transition: 'color 0.15s', display: 'flex', alignItems: 'center', gap: 5 }}>
                Destinations
                <span style={{ fontSize: 9, opacity: 0.6, transform: open === 'dest' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
              </button>
              {open === 'dest' && (
                <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: -20, width: 320, background: '#0d0d0d', border: '1px solid rgba(201,168,76,0.15)', padding: '8px 0', boxShadow: '0 24px 48px rgba(0,0,0,0.6)' }}>
                  {nav.destinations.map(d => (
                    <Link key={d.href} href={d.href} className="nav-drop-link">
                      <div style={{ width: 3, height: 32, background: d.color, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'var(--cream)', lineHeight: 1.2 }}>{d.name}</div>
                        <div style={{ fontSize: 10, color: d.color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3 }}>{d.tag}</div>
                      </div>
                    </Link>
                  ))}
                  <div style={{ margin: '8px 20px 4px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 8 }}>
                    <Link href="/destinations/" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>View All Destinations →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Experiences dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setOpen('exp')}
              onMouseLeave={() => setOpen(null)}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: open === 'exp' ? 'var(--gold)' : 'var(--cream)', padding: '8px 14px', transition: 'color 0.15s', display: 'flex', alignItems: 'center', gap: 5 }}>
                Experiences
                <span style={{ fontSize: 9, opacity: 0.6 }}>▼</span>
              </button>
              {open === 'exp' && (
                <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: -10, width: 220, background: '#0d0d0d', border: '1px solid rgba(201,168,76,0.15)', padding: '8px 0', boxShadow: '0 24px 48px rgba(0,0,0,0.6)' }}>
                  {nav.experiences.map(e => (
                    <Link key={e.href} href={e.href} className="nav-exp-link">{e.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about-us/" style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'var(--cream)', textDecoration: 'none', padding: '8px 14px' }}>About</Link>
            <a href="tel:8885848232" style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', padding: '8px 14px', letterSpacing: '0.03em' }}>888-584-8232</a>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ marginLeft: 8, padding: '11px 24px', fontSize: 11 }}>Plan My Trip</Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setMobile(!mobile)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5 }} className="nav-mobile-btn">
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--cream)', transition: 'all 0.2s', transform: mobile ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--cream)', opacity: mobile ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--cream)', transition: 'all 0.2s', transform: mobile ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobile && (
          <div style={{ background: '#0d0d0d', borderTop: '1px solid rgba(201,168,76,0.12)', padding: '24px var(--pad) 32px' }}>
            <div className="eyebrow-light" style={{ marginBottom: 12 }}>Destinations</div>
            {nav.destinations.map(d => (
              <Link key={d.href} href={d.href} onClick={() => setMobile(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ width: 2, height: 20, background: d.color }} />
                <span style={{ fontSize: 14, color: 'var(--cream)', fontFamily: 'var(--sans)' }}>{d.name}</span>
              </Link>
            ))}
            <div style={{ marginTop: 20 }}>
              {nav.experiences.map(e => (
                <Link key={e.href} href={e.href} onClick={() => setMobile(false)} style={{ display: 'block', padding: '10px 0', fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)', fontFamily: 'var(--sans)' }}>{e.name}</Link>
              ))}
            </div>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ marginTop: 24, display: 'inline-flex' }}>Plan My Trip</Link>
          </div>
        )}
      </header>
    </>
  )
}
