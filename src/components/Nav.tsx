'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const destinations = [
  { name:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', tag:'Sierra Nevada · From $275/person', color:'#80C8F0' },
  { name:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', tag:'Desert · Shadow Creek $1,250/round', color:'#F8C030' },
  { name:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', tag:'Coast · Pebble Beach $675/round', color:'#5ED8C8' },
  { name:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', tag:'Year-Round · Torrey Pines $277–$345', color:'#F87050' },
  { name:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', tag:'Private Club · Reno NV', color:'#98D060' },
]
const services = [
  { name:'Golf Courses & Tee Times', href:'/golf-courses/', icon:'⛳' },
  { name:'Hotel Reservations', href:'/hotel-reservations/', icon:'🏨' },
  { name:'Transportation', href:'/transportation/', icon:'🚌' },
  { name:'Dining & Events', href:'/dining-events-and-arrangements/', icon:'🍽' },
  { name:'Travel Insurance', href:'/travel-insurance/', icon:'🛡' },
  { name:'Tour Packages', href:'/tour-packages/', icon:'📋' },
  { name:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', icon:'🗺' },
  { name:'Online Registration', href:'/online-registration-system/', icon:'✅' },
]
const experiences = [
  { name:'Golf Buddy Trips', href:'/golf-buddy-trips/' },
  { name:'Corporate & Incentive', href:'/corporate-and-incentive-golf-travel/' },
  { name:'All Destinations', href:'/destinations/' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', s, { passive: true })
    return () => window.removeEventListener('scroll', s)
  }, [])

  return (
    <>
      <style>{`
        .nav-link { color:rgba(245,237,216,0.72); font-family:var(--sans); font-size:12px; font-weight:500; text-decoration:none; padding:8px 14px; display:flex; align-items:center; gap:5px; transition:color 0.15s; }
        .nav-link:hover { color:var(--gold); }
        .drop-link { display:flex; align-items:flex-start; gap:12px; padding:11px 20px; text-decoration:none; transition:background 0.15s; }
        .drop-link:hover { background:rgba(255,255,255,0.04); }
        .svc-link { display:flex; align-items:center; gap:10px; padding:9px 20px; text-decoration:none; font-family:var(--sans); font-size:12px; color:rgba(245,237,216,0.72); transition:background 0.15s,color 0.15s; }
        .svc-link:hover { background:rgba(255,255,255,0.04); color:var(--gold); }
        .exp-link { display:block; padding:10px 20px; font-family:var(--sans); font-size:12px; color:rgba(245,237,216,0.72); text-decoration:none; transition:background 0.15s,color 0.15s; }
        .exp-link:hover { background:rgba(255,255,255,0.04); color:var(--gold); }
        .mob-section-toggle { display:flex; justify-content:space-between; align-items:center; padding:12px 0; font-family:var(--sans); font-size:13px; font-weight:600; color:var(--cream); cursor:pointer; border-bottom:1px solid rgba(255,255,255,0.06); background:none; border-left:none; border-right:none; border-top:none; width:100%; text-align:left; }
        .mob-sub-link { display:block; padding:9px 12px; font-family:var(--sans); font-size:12px; color:rgba(245,237,216,0.55); text-decoration:none; border-bottom:1px solid rgba(255,255,255,0.03); transition:color 0.15s; }
        .mob-sub-link:hover { color:var(--gold); }
        @media(max-width:900px){.nav-desktop{display:none!important}.nav-mob-btn{display:flex!important}}
      `}</style>

      {/* Urgency bar */}
      <div style={{ background:'var(--gold)', padding:'7px var(--pad)', textAlign:'center', fontSize:11, fontWeight:700, letterSpacing:'0.08em', color:'#0C0A08', fontFamily:'var(--sans)' }}>
        ⚑ &nbsp;Peak season tee times at Pebble Beach book 12–18 months out — Summer 2026 filling now &nbsp;·&nbsp;
        <Link href="/tour-inquiry/" style={{ color:'#0C0A08', fontWeight:800, textDecoration:'underline' }}>Secure your dates →</Link>
      </div>

      <header style={{ position:'sticky', top:0, zIndex:100, background: scrolled ? 'rgba(8,8,6,0.98)' : 'rgba(8,8,6,0.94)', backdropFilter:'blur(20px)', borderBottom:'1px solid rgba(201,168,76,0.1)', transition:'all 0.3s' }}>
        <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:62 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration:'none', display:'flex', flexDirection:'column', gap:1 }}>
            <span style={{ fontFamily:'var(--serif)', fontSize:19, fontWeight:400, color:'var(--cream)', letterSpacing:'-0.01em', lineHeight:1 }}>Group Golf Tours</span>
            <span style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(201,168,76,0.55)' }}>Vacations on the Green</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display:'flex', alignItems:'center', gap:2 }}>

            {/* Destinations dropdown */}
            <div style={{ position:'relative' }}
              onMouseEnter={() => setOpen('dest')}
              onMouseLeave={() => setOpen(null)}>
              <button style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:5 }} className="nav-link">
                Destinations
                <span style={{ fontSize:9, opacity:0.5, transform: open==='dest' ? 'rotate(180deg)' : 'none', transition:'transform 0.2s' }}>▼</span>
              </button>
              {open === 'dest' && (
                <div style={{ position:'absolute', top:'calc(100% + 6px)', left:-20, width:340, background:'#0D0C0A', border:'1px solid rgba(201,168,76,0.14)', padding:'8px 0', boxShadow:'0 24px 48px rgba(0,0,0,0.6)', zIndex:200 }}>
                  {destinations.map(d => (
                    <Link key={d.href} href={d.href} className="drop-link">
                      <div style={{ width:3, height:36, background:d.color, flexShrink:0, marginTop:1 }} />
                      <div>
                        <div style={{ fontFamily:'var(--sans)', fontSize:12, fontWeight:600, color:'var(--cream)', lineHeight:1.2 }}>{d.name}</div>
                        <div style={{ fontSize:10, color:'rgba(245,237,216,0.38)', marginTop:3, letterSpacing:'0.03em' }}>{d.tag}</div>
                      </div>
                    </Link>
                  ))}
                  <div style={{ margin:'8px 20px 4px', borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:8 }}>
                    <Link href="/destinations/" style={{ fontSize:10, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)', textDecoration:'none' }}>View All Destinations →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div style={{ position:'relative' }}
              onMouseEnter={() => setOpen('svc')}
              onMouseLeave={() => setOpen(null)}>
              <button style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:5 }} className="nav-link">
                Services
                <span style={{ fontSize:9, opacity:0.5, transform: open==='svc' ? 'rotate(180deg)' : 'none', transition:'transform 0.2s' }}>▼</span>
              </button>
              {open === 'svc' && (
                <div style={{ position:'absolute', top:'calc(100% + 6px)', left:-10, width:260, background:'#0D0C0A', border:'1px solid rgba(201,168,76,0.14)', padding:'8px 0', boxShadow:'0 24px 48px rgba(0,0,0,0.6)', zIndex:200 }}>
                  {services.map(s => (
                    <Link key={s.href} href={s.href} className="svc-link">
                      <span style={{ fontSize:14, opacity:0.8 }}>{s.icon}</span>
                      <span>{s.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Experiences dropdown */}
            <div style={{ position:'relative' }}
              onMouseEnter={() => setOpen('exp')}
              onMouseLeave={() => setOpen(null)}>
              <button style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:5 }} className="nav-link">
                Experiences
                <span style={{ fontSize:9, opacity:0.5 }}>▼</span>
              </button>
              {open === 'exp' && (
                <div style={{ position:'absolute', top:'calc(100% + 6px)', left:-10, width:220, background:'#0D0C0A', border:'1px solid rgba(201,168,76,0.14)', padding:'8px 0', boxShadow:'0 24px 48px rgba(0,0,0,0.6)', zIndex:200 }}>
                  {experiences.map(e => (
                    <Link key={e.href} href={e.href} className="exp-link">{e.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about-us/" className="nav-link">About</Link>
            <a href="tel:8885848232" style={{ fontFamily:'var(--sans)', fontSize:12, color:'rgba(245,237,216,0.4)', textDecoration:'none', padding:'8px 14px', letterSpacing:'0.03em' }}>888-584-8232</a>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ marginLeft:8, padding:'10px 22px', fontSize:10 }}>Plan My Trip</Link>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMobile(!mobile)} style={{ background:'none', border:'none', cursor:'pointer', display:'none', flexDirection:'column', gap:5, padding:'4px' }} className="nav-mob-btn">
            <span style={{ display:'block', width:22, height:1.5, background:'var(--cream)', transition:'all 0.2s', transform: mobile ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
            <span style={{ display:'block', width:22, height:1.5, background:'var(--cream)', opacity: mobile ? 0 : 1 }} />
            <span style={{ display:'block', width:22, height:1.5, background:'var(--cream)', transition:'all 0.2s', transform: mobile ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobile && (
          <div style={{ background:'#0D0C0A', borderTop:'1px solid rgba(201,168,76,0.1)', padding:'16px var(--pad) 28px', maxHeight:'80vh', overflowY:'auto' }}>

            {/* Destinations section */}
            <button className="mob-section-toggle" onClick={() => setMobileSection(mobileSection==='dest' ? null : 'dest')}>
              Destinations <span style={{ fontSize:10, opacity:0.5 }}>{mobileSection==='dest' ? '▲' : '▼'}</span>
            </button>
            {mobileSection === 'dest' && (
              <div style={{ padding:'4px 0 12px' }}>
                {destinations.map(d => (
                  <Link key={d.href} href={d.href} className="mob-sub-link" onClick={() => setMobile(false)}>
                    <span style={{ color:d.color, marginRight:6 }}>▸</span>{d.name}
                  </Link>
                ))}
                <Link href="/destinations/" className="mob-sub-link" onClick={() => setMobile(false)} style={{ color:'var(--gold)' }}>All Destinations →</Link>
              </div>
            )}

            {/* Services section */}
            <button className="mob-section-toggle" onClick={() => setMobileSection(mobileSection==='svc' ? null : 'svc')}>
              Services <span style={{ fontSize:10, opacity:0.5 }}>{mobileSection==='svc' ? '▲' : '▼'}</span>
            </button>
            {mobileSection === 'svc' && (
              <div style={{ padding:'4px 0 12px' }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="mob-sub-link" onClick={() => setMobile(false)}>
                    {s.icon} {s.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Experiences section */}
            <button className="mob-section-toggle" onClick={() => setMobileSection(mobileSection==='exp' ? null : 'exp')}>
              Experiences <span style={{ fontSize:10, opacity:0.5 }}>{mobileSection==='exp' ? '▲' : '▼'}</span>
            </button>
            {mobileSection === 'exp' && (
              <div style={{ padding:'4px 0 12px' }}>
                {experiences.map(e => (
                  <Link key={e.href} href={e.href} className="mob-sub-link" onClick={() => setMobile(false)}>{e.name}</Link>
                ))}
              </div>
            )}

            <Link href="/about-us/" className="mob-sub-link" onClick={() => setMobile(false)} style={{ display:'block', padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>About Us</Link>
            <Link href="/tour-inquiry/" className="btn btn-gold" onClick={() => setMobile(false)} style={{ display:'inline-flex', marginTop:18, padding:'13px 28px' }}>Plan My Trip</Link>
          </div>
        )}
      </header>
    </>
  )
}
