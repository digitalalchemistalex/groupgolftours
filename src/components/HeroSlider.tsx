'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// months: 1=peak 0.6=shoulder 0.2=off
const slides = [
  {
    id: 'monterey',
    region: 'Monterey & Pebble Beach',
    tag: 'California Coast',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    headline: 'We get your group onto',
    emphasis: 'Pebble Beach.',
    sub: 'The most coveted tee sheet in America. 18-month advance booking, resort hotel coordinated simultaneously.',
    pills: ['6× US Open Host', '#1 Public Course USA', 'Resort Guests Only'],
    facts: [{ n:'$675', l:'Green fee / round' }, { n:'18mo', l:'Advance booking' }, { n:'72', l:'Holes available' }],
    package: { label:'Sample Package', nights:3, rounds:2, price:'$1,895', note:'per person · incl. hotel' },
    booking: { label:'Books out', value:'12–18 months', urgency:0.92, tip:'Peak summer slots gone by January' },
    season: [.4,.5,.7,.8,1,1,1,.9,.8,.7,.5,.4],
    nonGolf: 'Big Sur · 17-Mile Drive · Carmel-by-the-Sea',
    courses: ['Pebble Beach GL','Spyglass Hill','Spanish Bay','Del Monte'],
    badge: 'Summer 2026 tee sheets filling now',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=92',
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
    pills: ['6,200 ft Elevation', 'Casino Hotel Blocks', 'Golf Digest Top 100'],
    facts: [{ n:'$275', l:'From / person' }, { n:'+10%', l:'Ball distance gain' }, { n:'82', l:'Trips documented' }],
    package: { label:'Sample Package', nights:2, rounds:2, price:'$595', note:'per person · casino hotel' },
    booking: { label:'Books out', value:'4–6 months', urgency:0.55, tip:'Summer weekends gone by February' },
    season: [.1,.1,.2,.4,.7,.9,1,1,.8,.5,.2,.1],
    nonGolf: 'Lake Tahoe · Virginia City · Pyramid Lake',
    courses: ['Edgewood Tahoe','Lakeridge','Wolf Run','ArrowCreek'],
    badge: 'Summer weekends book by February',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=92',
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
    pills: ['Limo + Caddie Incl.', 'MGM Guests Only', 'Mon–Thu Only'],
    facts: [{ n:'$1,250', l:'Green fee / round' }, { n:'Limo', l:'Private transfer' }, { n:'1', l:'Caddie per player' }],
    package: { label:'Sample Package', nights:3, rounds:1, price:'$2,200', note:'per person · MGM hotel incl.' },
    booking: { label:'Books out', value:'2–3 months', urgency:0.35, tip:'We bundle MGM stay + tee time together' },
    season: [1,1,.9,.7,.3,.1,.1,.2,.5,.8,1,1],
    nonGolf: 'Las Vegas Strip · Red Rock Canyon · Hoover Dam',
    courses: ['Shadow Creek','Bali Hai','TPC Las Vegas','Reflection Bay'],
    badge: 'We package hotel and tee times together',
    img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1600&q=92',
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
    sub: '2× US Open host. Non-resident tee times limited. We secure group slots the public simply cannot get.',
    pills: ['2× US Open Host', 'Year-Round Season', 'Non-Resident Access'],
    facts: [{ n:'$277', l:'Torrey Pines fee' }, { n:'365', l:'Golf days / year' }, { n:'4', l:'Top-ranked courses' }],
    package: { label:'Sample Package', nights:5, rounds:3, price:'$2,950', note:'per person · all inclusive' },
    booking: { label:'Books out', value:'6–9 months', urgency:0.65, tip:'Non-resident slots strictly limited' },
    season: [.9,.9,1,1,1,.9,.8,.8,.9,1,1,.9],
    nonGolf: 'Santa Monica · San Diego Zoo · Disneyland',
    courses: ['Torrey Pines','Pelican Hill','PGA West','La Quinta Resort'],
    badge: 'Non-resident slots limited',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=92',
    imgPos: 'center 30%',
    panelBg: '#150600',
    accent: '#E07040',
  },
  {
    id: 'somersett',
    region: 'Somersett Golf & CC',
    tag: 'Private Club · Reno NV',
    href: '/portfolio-item/somersett-golf-country-club/',
    headline: 'Golfweek Top Private.',
    emphasis: 'Access by arrangement only.',
    sub: 'Northwest Reno. 5,200 ft elevation. 62 white sand bunkers. 7 lakes. Voted Best of Reno 2021.',
    pills: ['Golfweek Top Ranked', 'Best of Reno 2021', 'Private Network Only'],
    facts: [{ n:'5,200', l:'Ft elevation' }, { n:'7,252', l:'Max yards' }, { n:'62', l:'Sand bunkers' }],
    package: { label:'Sample Package', nights:2, rounds:1, price:'$540', note:'per person · private access' },
    booking: { label:'Access', value:'Network only', urgency:0.80, tip:'Cannot be booked independently' },
    season: [.1,.1,.2,.5,.8,1,1,.9,.7,.4,.2,.1],
    nonGolf: 'Downtown Reno · Lake Tahoe 45 min · Truckee',
    courses: ['Somersett G&CC','Wolf Run','ArrowCreek','Lakeridge'],
    badge: 'Access through our network only',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=92',
    imgPos: 'center 40%',
    panelBg: '#060F03',
    accent: '#72BE3E',
  },
]

const MONTHS = ['J','F','M','A','M','J','J','A','S','O','N','D']
const NOW_MONTH = new Date().getMonth() // 0-indexed

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [paused, setPaused] = useState(false)
  const pauseTimer = typeof window !== 'undefined' ? { current: null as ReturnType<typeof setTimeout> | null } : { current: null }
  const stripRef = typeof window !== 'undefined' ? { current: null as HTMLDivElement | null } : { current: null }
  const stripPaused = typeof window !== 'undefined' ? { current: false } : { current: false }

  // Auto-scroll the intel strip slowly
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    let frame: number
    let pos = 0
    const speed = 0.4 // px per frame — slow drift
    const scroll = () => {
      if (!stripPaused.current && strip) {
        pos += speed
        if (pos >= strip.scrollWidth / 2) pos = 0
        strip.scrollLeft = pos
      }
      frame = requestAnimationFrame(scroll)
    }
    frame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(frame)
  }, [active])

  useEffect(() => { setMounted(true) }, [])

  const pauseAndResume = () => {
    setPaused(true)
    if (pauseTimer.current) clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setPaused(false), 5000)
  }

  const goTo = useCallback((idx: number) => {
    if (animating || idx === active) return
    setPrev(active)
    setActive(idx)
    setAnimating(true)
    setTimeout(() => { setPrev(null); setAnimating(false) }, 800)
  }, [active, animating])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => goTo((active + 1) % slides.length), 7000)
    return () => clearInterval(t)
  }, [active, goTo, paused])

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
        @keyframes urgencyFill { from{width:0} to{width:var(--uw)} }
        @keyframes swipeHint { 0%{transform:translateX(0);opacity:.7} 60%{transform:translateX(10px);opacity:1} 100%{transform:translateX(0);opacity:.7} }
        @keyframes glowDrift { 0%{transform:translateX(-30%) translateY(0) scale(1);opacity:.5} 33%{transform:translateX(10%) translateY(-20%) scale(1.15);opacity:.7} 66%{transform:translateX(50%) translateY(10%) scale(.9);opacity:.5} 100%{transform:translateX(-30%) translateY(0) scale(1);opacity:.5} }
        @keyframes glowDrift2 { 0%{transform:translateX(60%) translateY(10%) scale(1);opacity:.4} 40%{transform:translateX(10%) translateY(-15%) scale(1.2);opacity:.6} 100%{transform:translateX(60%) translateY(10%) scale(1);opacity:.4} }
        @keyframes stripScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .hs-strip-glow1 { position:absolute;inset:0;pointer-events:none;z-index:0;border-radius:50%;filter:blur(32px);animation:glowDrift 7s ease-in-out infinite }
        .hs-strip-glow2 { position:absolute;inset:0;pointer-events:none;z-index:0;border-radius:50%;filter:blur(28px);animation:glowDrift2 9s ease-in-out infinite }
        .hs-strip-inner { display:flex;transition:none }
        .hs-strip-inner.scrolling { animation:none }
        @keyframes fadeInOut { 0%,100%{opacity:0} 20%,80%{opacity:1} }
        .hs-swipe-hint { animation: swipeHint 1.8s ease-in-out 1.2s 3 both }

        .hs-in      { animation: hsIn    .75s cubic-bezier(.22,1,.36,1) both }
        .hs-img-in  { animation: hsImgIn .7s ease both }
        .hs-img-kb  { animation: hsKB 14s ease-in-out infinite alternate }
        .hs-img-out { animation: hsOut .55s ease both }
        .hs-bar     { animation: hsBar 7s linear both }

        .hs-dot { width:8px;height:8px;border-radius:50%;border:1.5px solid rgba(255,255,255,.4);background:transparent;cursor:pointer;transition:all .3s;padding:0;flex-shrink:0 }
        .hs-dot.on { width:24px;border-radius:4px;border-color:transparent }
        .hs-nav { width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;transition:all .2s;padding:0 }
        .hs-nav:hover { background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.5) }

        .hs-pill { display:inline-flex;align-items:center;padding:4px 11px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);border-radius:2px }

        /* Intel card on right */
        .hs-intel { background:rgba(0,0,0,.72);backdrop-filter:blur(28px);border:1px solid rgba(255,255,255,.12) }

        /* Season dots */
        .hs-season-dot { width:14px;height:14px;border-radius:50%;flex-shrink:0;transition:transform .2s }
        .hs-season-dot.now { outline:2px solid #fff;outline-offset:2px }

        /* Urgency bar */
        .hs-urgency-fill { height:100%;border-radius:2px;animation:urgencyFill .9s .6s cubic-bezier(.22,1,.36,1) both }

        /* Course list */
        .hs-course { display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.07) }
        .hs-course:last-child { border-bottom:none }

        /* Region strip */
        .hs-region-strip { position:absolute;bottom:0;left:0;right:0;z-index:20;display:flex;height:92px }
        .hs-region-item { flex:1;position:relative;overflow:hidden;cursor:pointer;border:none;padding:0;background:transparent;border-right:1px solid rgba(255,255,255,.08);transition:flex .5s cubic-bezier(.22,1,.36,1) }
        .hs-region-item:last-child { border-right:none }
        .hs-region-item.active { flex:2.2 }
        .hs-region-bg { position:absolute;inset:0;background-size:cover;background-position:center;transition:transform .7s cubic-bezier(.22,1,.36,1),filter .4s;filter:brightness(.38) saturate(.5) }
        .hs-region-item.active .hs-region-bg { filter:brightness(.52) saturate(.75);transform:scale(1.04) }
        .hs-region-item:hover:not(.active) .hs-region-bg { filter:brightness(.45) saturate(.65);transform:scale(1.02) }
        .hs-region-overlay { position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8) 0%,rgba(0,0,0,.15) 70%,transparent 100%) }
        .hs-region-bar { position:absolute;bottom:0;left:0;right:0;height:2px;transition:background .35s,height .35s }
        .hs-region-item.active .hs-region-bar { height:3px }
        .hs-region-content { position:relative;z-index:2;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding:0 14px 11px }
        .hs-region-item.active .hs-region-content { padding:0 18px 13px }
        .hs-region-label { font-family:var(--sans);font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .3s }
        .hs-region-stat { font-family:var(--serif);font-weight:300;white-space:nowrap;transition:all .3s;font-size:14px;color:rgba(255,255,255,.55) }
        .hs-region-item.active .hs-region-stat { font-size:17px }
        .hs-region-num { position:absolute;top:9px;right:11px;font-family:var(--sans);font-size:9px;font-weight:700;color:rgba(255,255,255,.25);letter-spacing:.06em;opacity:0;transition:opacity .3s }
        .hs-region-item.active .hs-region-num { opacity:1 }

        @media(max-width:900px){
          .hs-right{display:none!important}
          .hs-headline{font-size:clamp(26px,7.5vw,44px)!important}
          .hs-pills{display:none!important}
          .hs-mob-strip{display:flex!important}
          .hs-mob-wrap{display:block!important;position:absolute!important}
          .hs-fact-cards{display:none!important}
          .hs-dots-row{display:none!important}
          .hs-section{height:auto!important;min-height:0!important}
          .hs-left{height:auto!important;min-height:0!important;padding-top:72px!important;padding-bottom:228px!important}
        }
        @media(min-width:901px){
          .hs-mob-strip{display:none!important}
        }
        @media(max-width:680px){
          .hs-region-strip{height:56px}
          .hs-region-label{font-size:8px}
          .hs-region-stat{font-size:11px!important}
          .hs-region-item.active .hs-region-stat{font-size:13px!important}
        }
        /* Mobile intel strip */
        .hs-mob-strip {
          position:absolute; left:0; right:0; bottom:58px; z-index:15;
          display:none;
          overflow-x:auto; overflow-y:hidden;
          scroll-snap-type:x mandatory;
          -webkit-overflow-scrolling:touch;
          scrollbar-width:none;
          touch-action:pan-x;
          gap:2px; padding:0 0;
          background:rgba(0,0,0,.72);
          backdrop-filter:blur(16px);
          border-top:1px solid rgba(255,255,255,.12);
          border-bottom:1px solid rgba(255,255,255,.08);
          height:72px;
        }
        @media(max-width:900px){
          .hs-mob-strip {
            position:absolute;
            bottom:58px;
          }
        }
        .hs-mob-strip::-webkit-scrollbar{display:none}
        .hs-mob-card {
          flex:0 0 auto; scroll-snap-align:start;
          padding:10px 14px; min-width:140px;
          border-right:1px solid rgba(255,255,255,.08);
          display:flex; flex-direction:column; justify-content:center; gap:3px;
        }
        .hs-mob-card:last-child{border-right:none}
        .hs-mob-label {
          font-family:var(--sans); font-size:8px; font-weight:700;
          letter-spacing:.14em; text-transform:uppercase;
          color:rgba(255,255,255,.4);
        }
        .hs-mob-val {
          font-family:var(--serif); font-size:20px; font-weight:300; line-height:1;
        }
        .hs-mob-sub {
          font-family:var(--sans); font-size:9px; color:rgba(255,255,255,.45); line-height:1.3;
        }
      `}</style>

      <section style={{ display:'flex', height:'100vh', minHeight:680, overflow:'hidden', position:'relative' }} className="hs-section" onMouseEnter={pauseAndResume} onTouchStart={pauseAndResume}>

        {/* ── LEFT PANEL ── */}
        <div className="hs-left" style={{
          width:'clamp(320px,46%,580px)', flexShrink:0,
          background: s.panelBg,
          display:'flex', flexDirection:'column', justifyContent:'center',
          padding:'clamp(48px,7vh,72px) clamp(18px,4vw,56px) clamp(160px,22vh,200px)',
          position:'relative',
        }}>
          {/* Accent left strip */}
          <div style={{ position:'absolute', left:0, top:'12%', bottom:'12%', width:3, background:`linear-gradient(to bottom,transparent,${s.accent},transparent)` }} />

          {/* Tag */}
          <div className={mounted?'hs-in':''} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18, animationDelay:'.04s' }}>
            <div style={{ width:22, height:2, background:s.accent, flexShrink:0 }} />
            <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:s.accent }}>{s.tag}</span>
          </div>

          {/* Headline */}
          <h1 className={`hs-headline${mounted?' hs-in':''}`} style={{ fontFamily:'var(--serif)', fontSize:'clamp(34px,4vw,62px)', fontWeight:300, lineHeight:.93, letterSpacing:'-.02em', color:'#fff', marginBottom:13, animationDelay:'.11s' }}>
            {s.headline}<br />
            <em style={{ fontStyle:'italic', color:s.accent }}>{s.emphasis}</em>
          </h1>

          {/* Sub */}
          <p className={mounted?'hs-in':''} style={{ fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,.7)', maxWidth:360, marginBottom:18, fontWeight:300, animationDelay:'.19s' }}>
            {s.sub}
          </p>

          {/* Pills */}
          <div className={`hs-pills${mounted?' hs-in':''}`} style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:22, animationDelay:'.26s' }}>
            {s.pills.map(pill => <span key={pill} className="hs-pill">{pill}</span>)}
          </div>

          {/* CTAs */}
          <div className={mounted?'hs-in':''} style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:24, animationDelay:'.32s' }}>
            <Link href="/tour-inquiry/" style={{ display:'inline-flex', alignItems:'center', padding:'12px 24px', background:s.accent, color:'#050805', fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', textDecoration:'none' }}>
              Plan My Trip
            </Link>
            <Link href={s.href} style={{ display:'inline-flex', alignItems:'center', padding:'12px 18px', border:'1px solid rgba(255,255,255,.28)', color:'#fff', fontFamily:'var(--sans)', fontSize:11, fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', background:'rgba(255,255,255,.06)' }}>
              Explore Region &rarr;
            </Link>
          </div>

          {/* ── ENRICHED FACT CARDS ── */}
          <div className={mounted?'hs-in':''} style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, animationDelay:'.38s' }}>
            {s.facts.map(f => (
              <div key={f.n} style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)', padding:'12px 14px', textAlign:'center' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:21, fontWeight:300, color:s.accent, lineHeight:1, marginBottom:3 }}>{f.n}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.13em', textTransform:'uppercase', color:'rgba(255,255,255,.5)' }}>{f.l}</div>
              </div>
            ))}
          </div>

          {/* Nav dots + arrows */}
          <div className="hs-dots-row" style={{ position:'absolute', bottom:104, left:'clamp(22px,4vw,56px)', display:'flex', alignItems:'center', gap:6 }}>
            {slides.map((sl, i) => (
              <button key={sl.id} className={`hs-dot${i===active?' on':''}`} style={{ background:i===active?s.accent:'transparent' }} onClick={() => { goTo(i); pauseAndResume() }} />
            ))}
            <div style={{ marginLeft:10, display:'flex', gap:6 }}>
              <button className="hs-nav" onClick={() => { goTo((active-1+slides.length)%slides.length); pauseAndResume() }}><svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M9 2L4 7l5 5' stroke='white' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg></button>
              <button className="hs-nav" onClick={() => { goTo((active+1)%slides.length); pauseAndResume() }}><svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M5 2l5 5-5 5' stroke='white' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg></button>
            </div>
            <span style={{ marginLeft:12, fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.3)', letterSpacing:'.1em' }}>
              {String(active+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
            </span>
          </div>
        </div>

        {/* ── RIGHT PANEL — photo + intel card ── */}
        <div className="hs-right" style={{ flex:1, position:'relative', overflow:'hidden' }}>

          {/* Outgoing photo */}
          {p && (
            <div className="hs-img-out" style={{ position:'absolute', inset:0, zIndex:1 }}>
              <div style={{ position:'absolute', inset:0, backgroundImage:`url(${p.img})`, backgroundSize:'cover', backgroundPosition:p.imgPos }} />
            </div>
          )}

          {/* Active photo */}
          <div className={mounted && prev !== null ? 'hs-img-in' : ''} key={`ph-${active}`} style={{ position:'absolute', inset:0, zIndex:2 }}>
            <div className="hs-img-kb" style={{ position:'absolute', inset:0, backgroundImage:`url(${s.img})`, backgroundSize:'cover', backgroundPosition:s.imgPos }} />
          </div>

          {/* Gradient overlays */}
          <div style={{ position:'absolute', inset:0, zIndex:3, pointerEvents:'none', background:'linear-gradient(90deg,rgba(0,0,0,.42) 0%,rgba(0,0,0,.08) 22%,transparent 50%)' }} />
          <div style={{ position:'absolute', inset:0, zIndex:3, pointerEvents:'none', background:'linear-gradient(to bottom,rgba(0,0,0,.18) 0%,transparent 35%,rgba(0,0,0,.55) 100%)' }} />

          {/* ── INTEL CARD ── */}
          <div className={mounted?'hs-in':''} key={`intel-${active}`} style={{ position:'absolute', right:20, top:16, bottom:100, zIndex:5, width:'min(210px, calc(100% - 24px))', animationDelay:'.45s', display:'flex', flexDirection:'column', gap:2, overflow:'hidden' }}>

            {/* Price block */}
            <div className="hs-intel" style={{ borderTop:`3px solid ${s.accent}`, padding:'12px 14px 10px', flexShrink:0 }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:s.accent, marginBottom:8 }}>{s.tag}</div>
              <div style={{ fontFamily:'var(--serif)', fontSize:34, fontWeight:300, color:'#fff', lineHeight:1, marginBottom:3 }}>{s.facts[0].n}</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.6)', marginBottom:14, lineHeight:1.4 }}>{s.facts[0].l}</div>

              {/* Sample package */}
              <div style={{ background:'rgba(255,255,255,.06)', border:`1px solid rgba(255,255,255,.1)`, padding:'8px 10px', marginBottom:8 }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:5 }}>{s.package.label}</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <div>
                    <span style={{ fontFamily:'var(--serif)', fontSize:18, color:s.accent, fontWeight:300 }}>{s.package.price}</span>
                    <div style={{ fontFamily:'var(--sans)', fontSize:9, color:'rgba(255,255,255,.4)', marginTop:2 }}>{s.package.note}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontFamily:'var(--sans)', fontSize:9, color:'rgba(255,255,255,.55)', fontWeight:600 }}>{s.package.nights}N · {s.package.rounds}R</div>
                    <div style={{ fontFamily:'var(--sans)', fontSize:8, color:'rgba(255,255,255,.3)', marginTop:2 }}>nights · rounds</div>
                  </div>
                </div>
              </div>

              {/* Booking urgency bar */}
              <div style={{ marginBottom:10 }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                  <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.5)' }}>{s.booking.label}</span>
                  <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, color:s.accent }}>{s.booking.value}</span>
                </div>
                <div style={{ height:4, background:'rgba(255,255,255,.1)', borderRadius:2, overflow:'hidden' }}>
                  <div
                    key={`urgency-${active}`}
                    className="hs-urgency-fill"
                    style={{ background:`linear-gradient(90deg,${s.accent},rgba(255,255,255,.6))`, '--uw':`${s.booking.urgency*100}%` } as React.CSSProperties}
                  />
                </div>
                <div style={{ fontFamily:'var(--sans)', fontSize:9, color:'rgba(255,255,255,.35)', marginTop:4, lineHeight:1.4 }}>{s.booking.tip}</div>
              </div>

              {/* Badge */}
              <div style={{ borderTop:'1px solid rgba(255,255,255,.1)', paddingTop:10 }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:s.accent, opacity:.9 }}>
                  &#9873;&nbsp; {s.badge}
                </div>
              </div>
            </div>

            {/* Season strip */}
            <div className="hs-intel" style={{ padding:'10px 12px', flexShrink:0 }}>
              {/* Header */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                <span style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.4)' }}>Best Season</span>
                <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, color:s.accent }}>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][NOW_MONTH]}
                </span>
              </div>
              {/* ROW 1: bars — fixed 32px height, bars anchor to bottom via flex align-items:flex-end */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gap:2, height:24, alignItems:'flex-end', marginBottom:3 }}>
                {s.season.map((v, i) => {
                  const hex = s.accent.replace('#','')
                  const [r,g,b] = [0,2,4].map(o => parseInt(hex.slice(o,o+2),16))
                  return (
                    <div key={i} style={{
                      width:'100%',
                      height: Math.round(v * 20) + 3,
                      borderRadius:2,
                      background: v >= 0.8 ? s.accent : v >= 0.45 ? `rgba(${r},${g},${b},.5)` : 'rgba(255,255,255,.18)',
                      boxShadow: i === NOW_MONTH ? '0 0 0 1.5px #fff' : 'none',
                    }} />
                  )
                })}
              </div>
              {/* ROW 2: month labels — fixed 12px height, always visible, never clipped */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gap:2, height:11 }}>
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'center', height:11 }}>
                    <span style={{
                      fontFamily:'var(--sans)', fontSize:8, lineHeight:1, display:'block',
                      fontWeight: i === NOW_MONTH ? 800 : 400,
                      color: i === NOW_MONTH ? s.accent : s.season[i] >= 0.8 ? 'rgba(255,255,255,.72)' : 'rgba(255,255,255,.35)',
                    }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses + non-golf */}
            <div className="hs-intel" style={{ padding:'10px 14px' }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:8 }}>Courses We Book</div>
              {s.courses.map((c,i) => (
                <div key={c} className="hs-course" style={{ padding:'4px 0' }}>
                  <div style={{ width:5, height:5, borderRadius:'50%', background: i===0 ? s.accent : 'rgba(255,255,255,.25)', flexShrink:0 }} />
                  <span style={{ fontFamily:'var(--sans)', fontSize:10, color: i===0 ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.5)', fontWeight: i===0 ? 600 : 400 }}>{c}</span>
                </div>
              ))}
              <div style={{ marginTop:10, paddingTop:10, borderTop:'1px solid rgba(255,255,255,.07)' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.3)', marginBottom:4 }}>Non-Golf</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.5)', lineHeight:1.5 }}>{s.nonGolf}</div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'rgba(255,255,255,.08)', zIndex:5 }}>
            <div key={`bar-${active}`} className="hs-bar" style={{ height:'100%', background:s.accent }} />
          </div>
        </div>

        {/* Top accent line */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${s.accent},rgba(255,255,255,.1) 60%,transparent)`, zIndex:10, transition:'background 1s' }} />

        {/* ── MOBILE INTEL STRIP ── */}
        <div style={{ position:'absolute', left:0, right:0, bottom:52, zIndex:15, display:'none' }} className="hs-mob-wrap">
          {/* Swipe hint label */}
          <div style={{
            position:'absolute', right:0, top:0, bottom:0, width:56, zIndex:2, pointerEvents:'none',
            background:'linear-gradient(90deg, transparent, rgba(0,0,0,.85))',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <div className="hs-swipe-hint" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 7h6M7 4l3 3-3 3" stroke="rgba(255,255,255,.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontFamily:'var(--sans)', fontSize:7, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.5)' }}>swipe</span>
            </div>
          </div>
        <div
          className="hs-mob-strip"
          key={`mob-${active}`}
          ref={(el) => { stripRef.current = el }}
          onTouchStart={() => { stripPaused.current = true }}
          onTouchEnd={() => { setTimeout(() => { stripPaused.current = false }, 3000) }}
          onMouseEnter={() => { stripPaused.current = true }}
          onMouseLeave={() => { stripPaused.current = false }}
        >
          {/* Ambient glow blobs */}
          <div className="hs-strip-glow1" style={{ width:'120px', height:'60px', background:s.accent, left:'10%', top:'-20%', opacity:.18 }} />
          <div className="hs-strip-glow2" style={{ width:'100px', height:'50px', background:s.accent, right:'20%', top:'-10%', opacity:.12 }} />
          {/* Price */}
          <div className="hs-mob-card">
            <div className="hs-mob-label">{s.tag}</div>
            <div className="hs-mob-val" style={{ color:s.accent }}>{s.facts[0].n}</div>
            <div className="hs-mob-sub">{s.facts[0].l}</div>
          </div>
          {/* Package */}
          <div className="hs-mob-card">
            <div className="hs-mob-label">Package</div>
            <div className="hs-mob-val" style={{ color:s.accent }}>{s.package.price}</div>
            <div className="hs-mob-sub">{s.package.nights}N · {s.package.rounds}R · {s.package.note.split('·')[0].trim()}</div>
          </div>
          {/* Booking */}
          <div className="hs-mob-card" style={{ minWidth:160 }}>
            <div className="hs-mob-label">Books out</div>
            <div className="hs-mob-val" style={{ color:s.accent, fontSize:16 }}>{s.booking.value}</div>
            <div className="hs-mob-sub">{s.booking.tip}</div>
          </div>
          {/* Season */}
          <div className="hs-mob-card" style={{ minWidth:170 }}>
            <div className="hs-mob-label" style={{ marginBottom:5 }}>Best Season</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gap:1.5, height:20, alignItems:'flex-end', marginBottom:3 }}>
              {s.season.map((v, i) => {
                const hex = s.accent.replace('#','')
                const [r,g,b] = [0,2,4].map(o => parseInt(hex.slice(o,o+2),16))
                return (
                  <div key={i} style={{
                    width:'100%', height: Math.round(v*16)+2, borderRadius:1.5,
                    background: v>=0.8 ? s.accent : v>=0.45 ? `rgba(${r},${g},${b},.5)` : 'rgba(255,255,255,.18)',
                    boxShadow: i===NOW_MONTH ? '0 0 0 1px #fff' : 'none',
                  }} />
                )
              })}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gap:1.5 }}>
              {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m,i) => (
                <div key={i} style={{ textAlign:'center' }}>
                  <span style={{ fontFamily:'var(--sans)', fontSize:7, color: i===NOW_MONTH ? s.accent : s.season[i]>=0.8 ? 'rgba(255,255,255,.65)' : 'rgba(255,255,255,.3)', fontWeight: i===NOW_MONTH?800:400 }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Courses */}
          <div className="hs-mob-card" style={{ minWidth:150 }}>
            <div className="hs-mob-label" style={{ marginBottom:5 }}>Courses</div>
            {s.courses.slice(0,3).map((c,i) => (
              <div key={c} style={{ display:'flex', alignItems:'center', gap:6, padding:'2px 0' }}>
                <div style={{ width:4, height:4, borderRadius:'50%', background: i===0?s.accent:'rgba(255,255,255,.25)', flexShrink:0 }} />
                <span style={{ fontFamily:'var(--sans)', fontSize:9, color: i===0?'rgba(255,255,255,.85)':'rgba(255,255,255,.45)', fontWeight:i===0?600:400 }}>{c}</span>
              </div>
            ))}
          </div>
          {/* Non-golf */}
          <div className="hs-mob-card" style={{ minWidth:150 }}>
            <div className="hs-mob-label" style={{ marginBottom:5 }}>Non-Golf</div>
            <div className="hs-mob-sub" style={{ lineHeight:1.6, whiteSpace:'normal' }}>{s.nonGolf}</div>
          </div>
        </div>
        </div>

        {/* ── REGION ANCHOR STRIP ── */}
        <div className="hs-region-strip">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              className={`hs-region-item${i===active?' active':''}`}
              onClick={() => { goTo(i); pauseAndResume() }}
              aria-label={sl.region}
            >
              <div className="hs-region-bg" style={{ backgroundImage:`url(${sl.img})` }} />
              <div className="hs-region-overlay" />
              <div className="hs-region-bar" style={{ background: i===active ? sl.accent : 'rgba(255,255,255,.12)' }} />
              <div className="hs-region-num">{String(i+1).padStart(2,'0')}</div>
              <div className="hs-region-content">
                <div style={{ display:'flex', alignItems:'center', gap:4, marginBottom:2 }}>
                  <div className="hs-region-label" style={{ color: i===active ? sl.accent : 'rgba(255,255,255,.75)' }}>{sl.region}</div>
                  {i !== active && <span style={{ fontSize:8, color:'rgba(255,255,255,.3)', fontFamily:'var(--sans)', letterSpacing:'.08em' }}>tap</span>}
                </div>
                <div className="hs-region-stat" style={{ color: i===active ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.45)' }}>
                  {sl.package.price} <span style={{ fontSize:'.75em', opacity:.65 }}>{sl.package.note.split('·')[0].trim()}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
