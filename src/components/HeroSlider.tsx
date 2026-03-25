'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    id: 'monterey',
    region: 'Monterey & Pebble Beach',
    tag: 'California Coast',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    headline: 'We get your group onto',
    emphasis: 'Pebble Beach.',
    sub: 'The most coveted tee sheet in America. 18-month advance booking, resort hotel coordinated simultaneously.',
    stat: '$675', statSub: 'Per Round · Pebble Beach Golf Links',
    pills: ['6× US Open Host', '#1 Public Course USA', '18-Month Advance'],
    facts: [{ n:'$675', l:'Green fee / round' }, { n:'18mo', l:'Advance booking' }, { n:'20+', l:'Years planning' }],
    badge: 'Summer 2026 tee sheets filling now',
    img: 'https://images.unsplash.com/photo-1438012130798-5f6f12e72e9f?w=1400&q=92',
    imgPos: 'center 55%',
    panelBg: '#03140E',
    accent: '#3EC99E',
  },
  {
    id: 'tahoe',
    region: 'Lake Tahoe & Northern Nevada',
    tag: 'Sierra Nevada · 6,200 ft',
    href: '/portfolio-item/lake-tahoe-and-northern-nevada/',
    headline: 'Golf above the clouds.',
    emphasis: 'Your ball flies 10% farther.',
    sub: 'Edgewood Tahoe on the lakeshore. Casino resort hotel blocks in Reno from $99/night. 82 documented trips.',
    stat: '$275', statSub: 'From / Person · Reno Packages',
    pills: ['6,200 ft Elevation', 'Casino Hotel Blocks', 'Golf Digest Top 100'],
    facts: [{ n:'$275', l:'Cheapest package' }, { n:'82', l:'Documented trips' }, { n:'5', l:'Casino resorts' }],
    badge: 'Summer weekends book by February',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1400&q=92',
    imgPos: 'center 35%',
    panelBg: '#030E18',
    accent: '#5BAADF',
  },
  {
    id: 'vegas',
    region: 'Las Vegas & Southern Nevada',
    tag: 'Desert Southwest',
    href: '/portfolio-item/las-vegas-and-southern-nevada/',
    headline: "America's most expensive tee time.",
    emphasis: 'Shadow Creek.',
    sub: '$1,250/round. Private limo and personal caddie included. MGM hotel guests only, Monday through Thursday.',
    stat: '$1,250', statSub: 'Per Round · Shadow Creek',
    pills: ['Limo + Caddie Included', 'MGM Guests Only', 'Mon–Thu Access'],
    facts: [{ n:'$1,250', l:'Green fee / round' }, { n:'MGM', l:'Hotel required' }, { n:'4', l:'Days per week' }],
    badge: 'We package hotel + tee times together',
    img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1400&q=92',
    imgPos: 'center 45%',
    panelBg: '#120900',
    accent: '#E6BE2A',
  },
  {
    id: 'socal',
    region: 'Southern California',
    tag: 'Year-Round Golf',
    href: '/portfolio-item/monterey-and-pebble-beach-2/',
    headline: 'Torrey Pines. Pelican Hill.',
    emphasis: '365 days a year.',
    sub: '2× US Open host. Non-resident tee times limited. We secure group slots that the public simply cannot get.',
    stat: '$2,950', statSub: 'Per Person · 5-Night Package',
    pills: ['2× US Open Host', 'Year-Round Season', 'Non-Resident Access'],
    facts: [{ n:'$277', l:'Torrey Pines / round' }, { n:'365', l:'Golf days / year' }, { n:'4', l:'World-class courses' }],
    badge: 'Non-resident slots limited',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&q=92',
    imgPos: 'center 30%',
    panelBg: '#150600',
    accent: '#E07040',
  },
  {
    id: 'somersett',
    region: 'Somersett Golf & Country Club',
    tag: 'Private Club · Reno NV',
    href: '/portfolio-item/somersett-golf-country-club/',
    headline: 'Golfweek Top Private.',
    emphasis: 'Access by arrangement only.',
    sub: 'Northwest Reno. 5,200 ft elevation. 62 white sand bunkers. Voted Best of Reno 2021. Private network access.',
    stat: '$540', statSub: 'From / Person · Private Access',
    pills: ['Golfweek Top Ranked', 'Best of Reno 2021', '5,200 ft Elevation'],
    facts: [{ n:'$540', l:'Package from' }, { n:'62', l:'Sand bunkers' }, { n:'Private', l:'Club access' }],
    badge: 'Access through our network only',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=92',
    imgPos: 'center 40%',
    panelBg: '#060F03',
    accent: '#72BE3E',
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (animating || idx === active) return
    setPrev(active)
    setActive(idx)
    setAnimating(true)
    setTimeout(() => { setPrev(null); setAnimating(false) }, 800)
  }, [active, animating])

  useEffect(() => {
    const t = setInterval(() => goTo((active + 1) % slides.length), 7000)
    return () => clearInterval(t)
  }, [active, goTo])

  const s = slides[active]
  const p = prev !== null ? slides[prev] : null

  return (
    <>
      <style>{`
        @keyframes hsIn   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
        @keyframes hsImgIn{ from{opacity:.2;transform:scale(1.03)} to{opacity:1;transform:scale(1)} }
        @keyframes hsKB   { from{transform:scale(1)} to{transform:scale(1.06)} }
        @keyframes hsOut  { from{opacity:1} to{opacity:0} }
        @keyframes hsBar  { from{width:0%} to{width:100%} }

        .hs-in { animation: hsIn .8s cubic-bezier(.22,1,.36,1) both }
        .hs-photo-in  { animation: hsImgIn .6s cubic-bezier(.22,1,.36,1) both }
        .hs-photo-in-first { opacity: 1 !important; transform: none !important }
        .hs-photo-kb  { animation: hsKB 14s ease-in-out infinite alternate }
        .hs-photo-out { animation: hsOut .55s ease both }
        .hs-bar { animation: hsBar 7s linear both }

        .hs-dot {
          width: 8px; height: 8px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,.4);
          background: transparent; cursor: pointer;
          transition: all .3s; padding: 0; flex-shrink: 0;
        }
        .hs-dot.on { width: 24px; border-radius: 4px; border-color: transparent; }

        .hs-nav {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.08);
          cursor: pointer; display: flex; align-items: center;
          justify-content: center; color: #fff; font-size: 14px;
          transition: all .2s; padding: 0;
        }
        .hs-nav:hover { background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.5); }

        .hs-pill {
          display: inline-flex; align-items: center;
          padding: 5px 12px;
          border: 1px solid rgba(255,255,255,.2);
          background: rgba(255,255,255,.08);
          font-family: var(--sans); font-size: 11px; font-weight: 600;
          letter-spacing: .1em; text-transform: uppercase;
          color: rgba(255,255,255,.85); white-space: nowrap;
          border-radius: 2px;
        }

        .hs-fact-card {
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          padding: 14px 16px; text-align: center;
          backdrop-filter: blur(12px);
        }

        .hs-price-card {
          background: rgba(0,0,0,.55);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,.15);
          padding: 22px 26px;
        }

        @media(max-width:900px) {
          .hs-right { display: none !important }
          .hs-headline { font-size: clamp(36px,10vw,60px) !important }
          .hs-sub { font-size: 14px !important }
          .hs-pills { display: none !important }
        }
      `}</style>

      <section style={{ position:'relative', height:'100vh', minHeight:660, overflow:'hidden', display:'flex', background: slides[0].panelBg }}>

        {/* === PHOTO LAYERS — full width behind everything === */}
        {p && (
          <div className="hs-photo-out" style={{ position:'absolute', inset:0, zIndex:0 }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:`url(${p.img})`, backgroundSize:'cover', backgroundPosition:p.imgPos }} />
          </div>
        )}
        <div className="hs-photo-in" key={`ph-${active}`} style={{ position:'absolute', inset:0, zIndex:1 }}>
          <div className="hs-photo-kb" style={{ position:'absolute', inset:0, backgroundImage:`url(${s.img})`, backgroundSize:'cover', backgroundPosition:s.imgPos }} />
        </div>
        {/* Soft vignette — dark at edges, clear in center */}
        <div style={{ position:'absolute', inset:0, zIndex:2, background:'radial-gradient(ellipse 120% 100% at 75% 50%, rgba(0,0,0,.1) 0%, rgba(0,0,0,.35) 100%)' }} />

        {/* === LEFT PANEL — solid opaque dark, no bleed === */}
        <div
          key={`panel-${active}`}
          style={{
            position:'relative', zIndex:4,
            width:'clamp(340px,48%,620px)', flexShrink:0,
            background: s.panelBg,
            display:'flex', flexDirection:'column', justifyContent:'center',
            padding:'80px clamp(24px,4vw,60px) 100px clamp(24px,4vw,60px)',
          }}
        >
          {/* Accent left edge */}
          <div style={{ position:'absolute', left:0, top:'15%', bottom:'15%', width:3, background:`linear-gradient(to bottom, transparent, ${s.accent}, transparent)` }} />

          {/* Tag */}
          <div className="hs-in" style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20, animationDelay:'.05s' }}>
            <div style={{ width:24, height:2, background:s.accent, flexShrink:0 }} />
            <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:s.accent }}>
              {s.tag}
            </span>
          </div>

          {/* Headline */}
          <h1 className="hs-headline hs-in" style={{
            fontFamily:'var(--serif)', fontSize:'clamp(38px,4.5vw,68px)',
            fontWeight:300, lineHeight:.93, letterSpacing:'-.02em',
            color:'#fff', marginBottom:14, animationDelay:'.12s',
          }}>
            {s.headline}<br />
            <em style={{ fontStyle:'italic', color:s.accent }}>{s.emphasis}</em>
          </h1>

          {/* Sub */}
          <p className="hs-sub hs-in" style={{
            fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,.72)',
            maxWidth:380, marginBottom:24, fontWeight:300,
            animationDelay:'.22s',
          }}>
            {s.sub}
          </p>

          {/* Pills */}
          <div className="hs-pills hs-in" style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:28, animationDelay:'.3s' }}>
            {s.pills.map(pill => (
              <span key={pill} className="hs-pill">{pill}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hs-in" style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:32, animationDelay:'.38s' }}>
            <Link href="/tour-inquiry/" style={{
              display:'inline-flex', alignItems:'center', padding:'13px 28px',
              background: s.accent, color:'#050805',
              fontFamily:'var(--sans)', fontSize:11, fontWeight:700,
              letterSpacing:'.14em', textTransform:'uppercase', textDecoration:'none',
            }}>
              Plan My Trip
            </Link>
            <Link href={s.href} style={{
              display:'inline-flex', alignItems:'center', padding:'13px 20px',
              border:'1px solid rgba(255,255,255,.3)', color:'#fff',
              fontFamily:'var(--sans)', fontSize:11, fontWeight:600,
              letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none',
              background:'rgba(255,255,255,.06)',
            }}>
              Explore Region &rarr;
            </Link>
          </div>

          {/* Fact cards */}
          <div className="hs-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, animationDelay:'.44s' }}>
            {s.facts.map(f => (
              <div key={f.n} className="hs-fact-card">
                <div style={{ fontFamily:'var(--serif)', fontSize:22, fontWeight:300, color:s.accent, lineHeight:1, marginBottom:4 }}>{f.n}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.55)' }}>{f.l}</div>
              </div>
            ))}
          </div>

          {/* Nav dots + arrows */}
          <div style={{ position:'absolute', bottom:28, left:'clamp(24px,4vw,60px)', display:'flex', alignItems:'center', gap:6 }}>
            {slides.map((sl, i) => (
              <button
                key={sl.id}
                className={`hs-dot${i===active?' on':''}`}
                style={{ background: i===active ? s.accent : 'transparent' }}
                onClick={() => goTo(i)}
              />
            ))}
            <div style={{ marginLeft:12, display:'flex', gap:6 }}>
              <button className="hs-nav" onClick={() => goTo((active-1+slides.length)%slides.length)}>&#8592;</button>
              <button className="hs-nav" onClick={() => goTo((active+1)%slides.length)}>&#8594;</button>
            </div>
            <span style={{ marginLeft:16, fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.35)', letterSpacing:'.1em' }}>
              {String(active+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
            </span>
          </div>
        </div>

        {/* === RIGHT — photo shows through, price card overlay === */}
        <div style={{ flex:1, position:'relative', zIndex:3 }}>
          {/* Subtle left edge blend - soft fade only */}
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(0,0,0,.15) 0%, transparent 15%)', zIndex:1, pointerEvents:'none' }} />

          {/* Price card */}
          <div key={`card-${active}`} className="hs-in" style={{
            position:'absolute', right:36, top:'50%', transform:'translateY(-50%)',
            zIndex:4, minWidth:220, animationDelay:'.5s',
          }}>
            <div className="hs-price-card" style={{ borderTop:`3px solid ${s.accent}` }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:s.accent, marginBottom:10 }}>
                {s.tag}
              </div>
              <div style={{ fontFamily:'var(--serif)', fontSize:52, fontWeight:300, color:'#fff', lineHeight:1, marginBottom:6 }}>
                {s.stat}
              </div>
              <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.6)', marginBottom:16, lineHeight:1.4 }}>
                {s.statSub}
              </div>
              <div style={{ borderTop:'1px solid rgba(255,255,255,.12)', paddingTop:14 }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:s.accent, opacity:.85 }}>
                  &#9873;&nbsp; {s.badge}
                </div>
              </div>
            </div>

            {/* Region label */}
            <div style={{
              marginTop:8, padding:'9px 16px',
              background:'rgba(0,0,0,.5)', backdropFilter:'blur(12px)',
              border:'1px solid rgba(255,255,255,.12)',
              fontFamily:'var(--sans)', fontSize:11, fontWeight:600,
              color:'rgba(255,255,255,.75)', letterSpacing:'.06em',
            }}>
              {s.region}
            </div>
          </div>

          {/* Progress bar at bottom */}
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'rgba(255,255,255,.1)', zIndex:4 }}>
            <div key={`bar-${active}`} className="hs-bar" style={{ height:'100%', background:s.accent }} />
          </div>
        </div>

        {/* Accent top line */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${s.accent} 0%, rgba(255,255,255,.1) 60%, transparent 100%)`, zIndex:10, transition:'background 1s' }} />
      </section>
    </>
  )
}
