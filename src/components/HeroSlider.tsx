'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  { id:'monterey', region:'Monterey & Pebble Beach', tag:'California Coast', href:'/portfolio-item/monterey-and-pebble-beach/', headline:'We get your group onto', emphasis:'Pebble Beach.', sub:'The most coveted tee sheet in America. 18-month advance booking, resort hotel coordinated simultaneously.', stat:'$675', statSub:'Per Round · Pebble Beach Golf Links', pills:['6x US Open Host','#1 Public Course USA','18-Month Advance'], facts:[{n:'$675',l:'Green fee'},{n:'18mo',l:'Advance booking'},{n:'20+',l:'Years planning'}], badge:'Summer 2026 tee sheets filling now', img:'https://images.unsplash.com/photo-1438012130798-5f6f12e72e9f?w=1600&q=92', imgPos:'center 55%', panelBg:'#03140E', accent:'#3EC99E' },
  { id:'tahoe', region:'Lake Tahoe & Northern Nevada', tag:'Sierra Nevada · 6,200 ft', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', headline:'Golf above the clouds.', emphasis:'Your ball flies 10% farther.', sub:'Edgewood Tahoe on the lakeshore. Casino resort hotel blocks in Reno from $99/night. 82 documented trips.', stat:'$275', statSub:'From / Person · Reno Packages', pills:['6,200 ft Elevation','Casino Hotel Blocks','Golf Digest Top 100'], facts:[{n:'$275',l:'Cheapest pkg'},{n:'82',l:'Documented trips'},{n:'5',l:'Casino resorts'}], badge:'Summer weekends book by February', img:'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=92', imgPos:'center 35%', panelBg:'#030E18', accent:'#5BAADF' },
  { id:'vegas', region:'Las Vegas & Southern Nevada', tag:'Desert Southwest', href:'/portfolio-item/las-vegas-and-southern-nevada/', headline:"America's most expensive tee time.", emphasis:'Shadow Creek.', sub:'$1,250/round. Private limo and personal caddie included. MGM hotel guests only, Monday through Thursday.', stat:'$1,250', statSub:'Per Round · Shadow Creek', pills:['Limo + Caddie Incl.','MGM Guests Only','Mon-Thu Access'], facts:[{n:'$1,250',l:'Green fee'},{n:'MGM',l:'Hotel required'},{n:'4',l:'Days/week'}], badge:'We package hotel and tee times together', img:'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1600&q=92', imgPos:'center 45%', panelBg:'#120900', accent:'#E6BE2A' },
  { id:'socal', region:'Southern California', tag:'Year-Round Golf', href:'/portfolio-item/monterey-and-pebble-beach-2/', headline:'Torrey Pines. Pelican Hill.', emphasis:'365 days a year.', sub:'2x US Open host. Non-resident tee times limited. We secure group slots the public cannot get.', stat:'$2,950', statSub:'Per Person · 5-Night Package', pills:['2x US Open Host','365 Days/Year','Non-Resident Access'], facts:[{n:'$277',l:'Torrey Pines'},{n:'365',l:'Golf days/yr'},{n:'4',l:'World courses'}], badge:'Non-resident slots limited', img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=92', imgPos:'center 30%', panelBg:'#150600', accent:'#E07040' },
  { id:'somersett', region:'Somersett Golf & CC', tag:'Private Club · Reno NV', href:'/portfolio-item/somersett-golf-country-club/', headline:'Golfweek Top Private.', emphasis:'Access by arrangement only.', sub:'Northwest Reno. 5,200 ft elevation. 62 white sand bunkers. Voted Best of Reno 2021.', stat:'$540', statSub:'From / Person · Private Access', pills:['Golfweek Top Ranked','Best of Reno 2021','5,200 ft'], facts:[{n:'$540',l:'Package from'},{n:'62',l:'Sand bunkers'},{n:'Private',l:'Club access'}], badge:'Access through our network only', img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=92', imgPos:'center 40%', panelBg:'#060F03', accent:'#72BE3E' },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

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
        @keyframes hsIn    { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
        @keyframes hsImgIn { from{opacity:0} to{opacity:1} }
        @keyframes hsKB    { from{transform:scale(1)} to{transform:scale(1.06)} }
        @keyframes hsOut   { from{opacity:1} to{opacity:0} }
        @keyframes hsBar   { from{width:0%} to{width:100%} }
        .hs-in         { animation: hsIn    .75s cubic-bezier(.22,1,.36,1) both }
        .hs-img-in     { animation: hsImgIn .7s  ease both }
        .hs-img-kb     { animation: hsKB   14s   ease-in-out infinite alternate }
        .hs-img-out    { animation: hsOut   .55s  ease both }
        .hs-bar        { animation: hsBar    7s   linear both }
        .hs-dot { width:8px;height:8px;border-radius:50%;border:1.5px solid rgba(255,255,255,.4);background:transparent;cursor:pointer;transition:all .3s;padding:0;flex-shrink:0 }
        .hs-dot.on { width:24px;border-radius:4px;border-color:transparent }
        .hs-nav { width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;transition:all .2s;padding:0 }
        .hs-nav:hover { background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.5) }
        .hs-pill { display:inline-flex;align-items:center;padding:5px 12px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.1);font-family:var(--sans);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.9);border-radius:2px }
        .hs-fact { background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);padding:14px 16px;text-align:center }
        .hs-card { background:rgba(0,0,0,.6);backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,.15);padding:22px 26px }
        @media(max-width:900px){.hs-right{display:none!important}.hs-headline{font-size:clamp(34px,9vw,56px)!important}.hs-pills{display:none!important}}
      `}</style>

      <section style={{ display:'flex', height:'100vh', minHeight:660, overflow:'hidden' }}>

        {/* LEFT — solid dark panel with all text content */}
        <div style={{
          width:'clamp(320px,46%,600px)', flexShrink:0,
          background: s.panelBg,
          display:'flex', flexDirection:'column', justifyContent:'center',
          padding:'80px clamp(24px,4vw,60px) 100px',
          position:'relative',
        }}>
          {/* Accent left strip */}
          <div style={{ position:'absolute', left:0, top:'15%', bottom:'15%', width:3, background:`linear-gradient(to bottom, transparent, ${s.accent}, transparent)` }} />

          {/* Tag */}
          <div className={mounted ? 'hs-in' : ''} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20, animationDelay:'.05s' }}>
            <div style={{ width:24, height:2, background:s.accent, flexShrink:0 }} />
            <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:s.accent }}>{s.tag}</span>
          </div>

          {/* Headline */}
          <h1 className={`hs-headline${mounted ? ' hs-in' : ''}`} style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,4.2vw,64px)', fontWeight:300, lineHeight:.93, letterSpacing:'-.02em', color:'#fff', marginBottom:14, animationDelay:'.12s' }}>
            {s.headline}<br />
            <em style={{ fontStyle:'italic', color:s.accent }}>{s.emphasis}</em>
          </h1>

          {/* Sub */}
          <p className={mounted ? 'hs-in' : ''} style={{ fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,.72)', maxWidth:380, marginBottom:22, fontWeight:300, animationDelay:'.2s' }}>
            {s.sub}
          </p>

          {/* Pills */}
          <div className={`hs-pills${mounted ? ' hs-in' : ''}`} style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:26, animationDelay:'.28s' }}>
            {s.pills.map(pill => <span key={pill} className="hs-pill">{pill}</span>)}
          </div>

          {/* CTAs */}
          <div className={mounted ? 'hs-in' : ''} style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:28, animationDelay:'.35s' }}>
            <Link href="/tour-inquiry/" style={{ display:'inline-flex', alignItems:'center', padding:'12px 26px', background:s.accent, color:'#050805', fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', textDecoration:'none' }}>
              Plan My Trip
            </Link>
            <Link href={s.href} style={{ display:'inline-flex', alignItems:'center', padding:'12px 20px', border:'1px solid rgba(255,255,255,.3)', color:'#fff', fontFamily:'var(--sans)', fontSize:11, fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', background:'rgba(255,255,255,.06)' }}>
              Explore Region &rarr;
            </Link>
          </div>

          {/* Fact cards */}
          <div className={mounted ? 'hs-in' : ''} style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, animationDelay:'.42s' }}>
            {s.facts.map(f => (
              <div key={f.n} className="hs-fact">
                <div style={{ fontFamily:'var(--serif)', fontSize:22, fontWeight:300, color:s.accent, lineHeight:1, marginBottom:4 }}>{f.n}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.13em', textTransform:'uppercase', color:'rgba(255,255,255,.55)' }}>{f.l}</div>
              </div>
            ))}
          </div>

          {/* Dots + arrows */}
          <div style={{ position:'absolute', bottom:28, left:'clamp(24px,4vw,60px)', display:'flex', alignItems:'center', gap:6 }}>
            {slides.map((sl, i) => (
              <button key={sl.id} className={`hs-dot${i===active?' on':''}`} style={{ background: i===active ? s.accent : 'transparent' }} onClick={() => goTo(i)} />
            ))}
            <div style={{ marginLeft:12, display:'flex', gap:6 }}>
              <button className="hs-nav" onClick={() => goTo((active-1+slides.length)%slides.length)}>&#8592;</button>
              <button className="hs-nav" onClick={() => goTo((active+1)%slides.length)}>&#8594;</button>
            </div>
            <span style={{ marginLeft:14, fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.35)', letterSpacing:'.1em' }}>
              {String(active+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
            </span>
          </div>
        </div>

        {/* RIGHT — photo panel, photo lives here */}
        <div className="hs-right" style={{ flex:1, position:'relative', overflow:'hidden' }}>

          {/* Outgoing photo (fades out on transition) */}
          {p && (
            <div className="hs-img-out" style={{ position:'absolute', inset:0, zIndex:1 }}>
              <div style={{ position:'absolute', inset:0, backgroundImage:`url(${p.img})`, backgroundSize:'cover', backgroundPosition:p.imgPos }} />
            </div>
          )}

          {/* Active photo — no animation on first load (mounted=false), smooth fade on transitions */}
          <div
            className={mounted && prev !== null ? 'hs-img-in' : ''}
            key={`ph-${active}`}
            style={{ position:'absolute', inset:0, zIndex:2 }}
          >
            <div
              className="hs-img-kb"
              style={{ position:'absolute', inset:0, backgroundImage:`url(${s.img})`, backgroundSize:'cover', backgroundPosition:s.imgPos }}
            />
          </div>

          {/* Gradient overlays on top of photo */}
          <div style={{ position:'absolute', inset:0, zIndex:3, pointerEvents:'none',
            background:'linear-gradient(90deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.1) 20%, rgba(0,0,0,0) 50%)'
          }} />
          <div style={{ position:'absolute', inset:0, zIndex:3, pointerEvents:'none',
            background:'linear-gradient(to bottom, rgba(0,0,0,.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,.5) 100%)'
          }} />

          {/* Price card */}
          <div className={mounted ? 'hs-in' : ''} key={`card-${active}`} style={{ position:'absolute', right:36, top:'50%', transform:'translateY(-50%)', zIndex:5, minWidth:220, animationDelay:'.5s' }}>
            <div className="hs-card" style={{ borderTop:`3px solid ${s.accent}` }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:s.accent, marginBottom:10 }}>{s.tag}</div>
              <div style={{ fontFamily:'var(--serif)', fontSize:52, fontWeight:300, color:'#fff', lineHeight:1, marginBottom:6 }}>{s.stat}</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.65)', marginBottom:16, lineHeight:1.4 }}>{s.statSub}</div>
              <div style={{ borderTop:'1px solid rgba(255,255,255,.12)', paddingTop:14 }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:s.accent, opacity:.9 }}>
                  &#9873;&nbsp; {s.badge}
                </div>
              </div>
            </div>
            <div style={{ marginTop:8, padding:'9px 16px', background:'rgba(0,0,0,.55)', backdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,.12)', fontFamily:'var(--sans)', fontSize:11, fontWeight:600, color:'rgba(255,255,255,.78)', letterSpacing:'.05em' }}>
              {s.region}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'rgba(255,255,255,.1)', zIndex:5 }}>
            <div key={`bar-${active}`} className="hs-bar" style={{ height:'100%', background:s.accent }} />
          </div>
        </div>

        {/* Top accent line */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${s.accent}, rgba(255,255,255,.1) 60%, transparent)`, zIndex:10, transition:'background 1s' }} />
      </section>
    </>
  )
}
