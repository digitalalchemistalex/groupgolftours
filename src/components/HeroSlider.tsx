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
        @keyframes urgencyFill { from{width:0} to{width:var(--uw)} }

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
          .hs-headline{font-size:clamp(32px,9vw,54px)!important}
          .hs-pills{display:none!important}
        }
        @media(max-width:680px){
          .hs-region-strip{height:64px}
          .hs-region-label{font-size:8px}
          .hs-region-stat{font-size:12px!important}
          .hs-region-item.active .hs-region-stat{font-size:14px!important}
        }
      `}</style>

      <section style={{ display:'flex', height:'100vh', minHeight:680, overflow:'hidden', position:'relative' }}>

        {/* ── LEFT PANEL ── */}
        <div style={{
          width:'clamp(320px,46%,580px)', flexShrink:0,
          background: s.panelBg,
          display:'flex', flexDirection:'column', justifyContent:'center',
          padding:'72px clamp(22px,4vw,56px) 110px',
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
          <div style={{ position:'absolute', bottom:104, left:'clamp(22px,4vw,56px)', display:'flex', alignItems:'center', gap:6 }}>
            {slides.map((sl, i) => (
              <button key={sl.id} className={`hs-dot${i===active?' on':''}`} style={{ background:i===active?s.accent:'transparent' }} onClick={() => goTo(i)} />
            ))}
            <div style={{ marginLeft:10, display:'flex', gap:6 }}>
              <button className="hs-nav" onClick={() => goTo((active-1+slides.length)%slides.length)}>&#8592;</button>
              <button className="hs-nav" onClick={() => goTo((active+1)%slides.length)}>&#8594;</button>
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
          <div className={mounted?'hs-in':''} key={`intel-${active}`} style={{ position:'absolute', right:28, top:'50%', transform:'translateY(-48%)', zIndex:5, width:230, animationDelay:'.45s' }}>

            {/* Price block */}
            <div className="hs-intel" style={{ borderTop:`3px solid ${s.accent}`, padding:'18px 20px 14px', marginBottom:2 }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:s.accent, marginBottom:8 }}>{s.tag}</div>
              <div style={{ fontFamily:'var(--serif)', fontSize:48, fontWeight:300, color:'#fff', lineHeight:1, marginBottom:4 }}>{s.stat}</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.6)', marginBottom:14, lineHeight:1.4 }}>{s.facts[0].l}</div>

              {/* Sample package */}
              <div style={{ background:'rgba(255,255,255,.06)', border:`1px solid rgba(255,255,255,.1)`, padding:'10px 12px', marginBottom:12 }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:5 }}>{s.package.label}</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <div>
                    <span style={{ fontFamily:'var(--serif)', fontSize:22, color:s.accent, fontWeight:300 }}>{s.package.price}</span>
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
            <div className="hs-intel" style={{ padding:'12px 16px', marginBottom:2 }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:8 }}>Best Season</div>
              <div style={{ display:'flex', gap:3, alignItems:'center' }}>
                {s.season.map((v, i) => (
                  <div
                    key={i}
                    className={`hs-season-dot${i===NOW_MONTH?' now':''}`}
                    title={MONTHS[i]}
                    style={{
                      width:12, height: Math.max(4, v * 22),
                      borderRadius:2,
                      background: v >= 0.8 ? s.accent : v >= 0.5 ? `rgba(${s.accent.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')},0.45)` : 'rgba(255,255,255,.15)',
                      flexShrink:0,
                    }}
                  />
                ))}
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', marginTop:4 }}>
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m,i) => (
                  <span key={i} style={{ fontFamily:'var(--sans)', fontSize:7, color: i===NOW_MONTH ? s.accent : 'rgba(255,255,255,.25)', fontWeight: i===NOW_MONTH ? 700 : 400 }}>{m}</span>
                ))}
              </div>
            </div>

            {/* Courses + non-golf */}
            <div className="hs-intel" style={{ padding:'12px 16px' }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:8 }}>Courses We Book</div>
              {s.courses.map((c,i) => (
                <div key={c} className="hs-course">
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

        {/* ── REGION ANCHOR STRIP ── */}
        <div className="hs-region-strip">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              className={`hs-region-item${i===active?' active':''}`}
              onClick={() => goTo(i)}
              aria-label={sl.region}
            >
              <div className="hs-region-bg" style={{ backgroundImage:`url(${sl.img})` }} />
              <div className="hs-region-overlay" />
              <div className="hs-region-bar" style={{ background: i===active ? sl.accent : 'rgba(255,255,255,.12)' }} />
              <div className="hs-region-num">{String(i+1).padStart(2,'0')}</div>
              <div className="hs-region-content">
                <div className="hs-region-label" style={{ color: i===active ? sl.accent : 'rgba(255,255,255,.75)' }}>{sl.region}</div>
                <div className="hs-region-stat" style={{ color: i===active ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.45)' }}>
                  {sl.stat} <span style={{ fontSize:'.75em', opacity:.65 }}>{sl.package.note.split('·')[0].trim()}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
