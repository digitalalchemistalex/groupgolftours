'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    id: 'monterey',
    region: 'Monterey & Pebble Beach',
    tag: 'California Coast',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    headline: ['We get your', 'group onto'],
    emphasis: 'Pebble Beach.',
    sub: 'The most coveted tee sheet in America. 18-month advance booking, resort hotel coordinated simultaneously. Groups of 4 to 200.',
    stat: '$675', statLabel: 'per round',
    badge: 'Book 12-18 months out',
    img: 'https://images.unsplash.com/photo-1438012130798-5f6f12e72e9f?w=1600&q=90',
    imgPos: 'center 55%',
    accent: '#5EC8A8', accentRgb: '94,200,168',
    bg: 'linear-gradient(90deg, #041A12 0%, #082010 60%, rgba(4,26,18,0) 100%)',
    overlay: 'rgba(4,26,18,0.38)',
  },
  {
    id: 'tahoe',
    region: 'Lake Tahoe & Northern Nevada',
    tag: 'Sierra Nevada',
    href: '/portfolio-item/lake-tahoe-and-northern-nevada/',
    headline: ['Golf at 6,200 ft.', 'Your ball flies'],
    emphasis: '10% farther.',
    sub: 'Edgewood Tahoe on the lakeshore. Casino resort hotel blocks in Reno. Packages from $275/person. 82 documented trips.',
    stat: '$275', statLabel: 'from / person',
    badge: 'Summer books by February',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=90',
    imgPos: 'center 40%',
    accent: '#7BB8E8', accentRgb: '123,184,232',
    bg: 'linear-gradient(90deg, #04101A 0%, #081520 60%, rgba(4,16,26,0) 100%)',
    overlay: 'rgba(4,16,26,0.42)',
  },
  {
    id: 'vegas',
    region: 'Las Vegas & Southern Nevada',
    tag: 'Desert Southwest',
    href: '/portfolio-item/las-vegas-and-southern-nevada/',
    headline: ["America's most", 'expensive tee time.'],
    emphasis: 'Shadow Creek.',
    sub: '$1,250/round. Limo and caddie included. MGM hotel guests only, Mon-Thu. We package the stay and tee times together.',
    stat: '$1,250', statLabel: 'per round',
    badge: 'MGM guests only',
    img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1600&q=90',
    imgPos: 'center 50%',
    accent: '#E8C030', accentRgb: '232,192,48',
    bg: 'linear-gradient(90deg, #140C00 0%, #1A1000 60%, rgba(20,12,0,0) 100%)',
    overlay: 'rgba(20,12,0,0.45)',
  },
  {
    id: 'socal',
    region: 'Southern California',
    tag: 'Year-Round Golf',
    href: '/portfolio-item/monterey-and-pebble-beach-2/',
    headline: ['Torrey Pines.', 'Pelican Hill.'],
    emphasis: '365 days a year.',
    sub: '2x US Open host. Non-resident tee times limited. We secure group slots at SoCal courses the public cannot touch.',
    stat: '$2,950', statLabel: 'per person',
    badge: 'Non-resident slots limited',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=90',
    imgPos: 'center 30%',
    accent: '#E87850', accentRgb: '232,120,80',
    bg: 'linear-gradient(90deg, #180800 0%, #200E04 60%, rgba(24,8,0,0) 100%)',
    overlay: 'rgba(24,8,0,0.42)',
  },
  {
    id: 'somersett',
    region: 'Somersett Golf & Country Club',
    tag: 'Private Club Access',
    href: '/portfolio-item/somersett-golf-country-club/',
    headline: ['Golfweek Top Private.', 'Access by'],
    emphasis: 'arrangement only.',
    sub: 'Northwest Reno. 5,200 ft elevation. 62 white sand bunkers. Voted Best of Reno 2021. Private access through our network.',
    stat: '$540', statLabel: 'from / person',
    badge: 'Private - invite only',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=90',
    imgPos: 'center 40%',
    accent: '#88C858', accentRgb: '136,200,88',
    bg: 'linear-gradient(90deg, #081404 0%, #0C1A08 60%, rgba(8,20,4,0) 100%)',
    overlay: 'rgba(8,20,4,0.38)',
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
    setTimeout(() => { setPrev(null); setAnimating(false) }, 900)
  }, [active, animating])

  useEffect(() => {
    const t = setInterval(() => goTo((active + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [active, goTo])

  const s = slides[active]
  const p = prev !== null ? slides[prev] : null

  return (
    <>
      <style>{`
        @keyframes heroIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        @keyframes imgIn  { from{opacity:0;transform:scale(1.04)} to{opacity:1;transform:scale(1)} }
        @keyframes imgKB  { from{transform:scale(1)} to{transform:scale(1.07)} }
        @keyframes imgOut { from{opacity:1} to{opacity:0} }
        @keyframes barGrow { from{width:0%} to{width:100%} }
        .hs-in  { animation: heroIn .85s cubic-bezier(.22,1,.36,1) both }
        .hs-photo-in  { animation: imgIn .9s cubic-bezier(.22,1,.36,1) both }
        .hs-photo-kb  { animation: imgKB 12s ease-in-out infinite alternate }
        .hs-photo-out { animation: imgOut .6s ease both }
        .hs-bar { height:3px; border-radius:1px; animation: barGrow 6s linear both }
        .hs-dot { width:8px; height:8px; border-radius:50%; cursor:pointer; transition:all .3s; border:1.5px solid rgba(255,255,255,.35); background:transparent; flex-shrink:0; padding:0 }
        .hs-dot.on { width:28px; border-radius:4px; border-color:transparent }
        .hs-arrow { width:42px; height:42px; border-radius:50%; border:1px solid rgba(255,255,255,.2); background:rgba(0,0,0,.3); backdrop-filter:blur(8px); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .25s; color:#fff; font-size:15px; padding:0 }
        .hs-arrow:hover { background:rgba(255,255,255,.12); border-color:rgba(255,255,255,.4) }
        .hs-card { background:rgba(4,8,4,.88); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,.1); border-top:3px solid; padding:18px 24px; min-width:200px; transition:transform .3s }
        .hs-card:hover { transform:translateY(-3px) }
        @media(max-width:768px){ .hs-right{display:none!important} .hs-h1{font-size:clamp(38px,11vw,64px)!important} .hs-sub{display:none!important} }
      `}</style>

      <section style={{ position:'relative', height:'100vh', minHeight:640, overflow:'hidden' }}>

        {/* Outgoing photo */}
        {p && (
          <div className="hs-photo-out" style={{ position:'absolute', inset:0, zIndex:0 }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:`url(${p.img})`, backgroundSize:'cover', backgroundPosition:p.imgPos }} />
            <div style={{ position:'absolute', inset:0, background:p.overlay }} />
          </div>
        )}

        {/* Active photo */}
        <div className="hs-photo-in" key={`ph-${active}`} style={{ position:'absolute', inset:0, zIndex:1 }}>
          <div className="hs-photo-kb" style={{ position:'absolute', inset:0, backgroundImage:`url(${s.img})`, backgroundSize:'cover', backgroundPosition:s.imgPos }} />
          <div style={{ position:'absolute', inset:0, background:s.overlay }} />
        </div>

        {/* Grid overlay */}
        <div style={{ position:'absolute', inset:0, zIndex:2, display:'grid', gridTemplateColumns:'52% 1fr' }}>

          {/* LEFT PANEL */}
          <div key={`cp-${active}`} style={{ background:s.bg, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 clamp(20px,4vw,72px) 90px clamp(20px,5vw,72px)', position:'relative' }}>

            <div className="hs-in" style={{ animationDelay:'.05s', display:'flex', alignItems:'center', gap:10, marginBottom:22 }}>
              <div style={{ width:28, height:1.5, background:s.accent }} />
              <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.26em', textTransform:'uppercase', color:s.accent, opacity:.9 }}>{s.tag}</span>
            </div>

            <h1 className="hs-h1 hs-in" style={{ fontFamily:'var(--serif)', fontSize:'clamp(40px,5.5vw,78px)', fontWeight:300, lineHeight:.93, letterSpacing:'-.022em', color:'#fff', marginBottom:16, animationDelay:'.14s' }}>
              {s.headline.map((line, i) => <span key={i} style={{ display:'block' }}>{line}</span>)}
              <em style={{ fontStyle:'italic', color:s.accent, display:'block' }}>{s.emphasis}</em>
            </h1>

            <p className="hs-sub hs-in" style={{ fontSize:14, lineHeight:1.85, color:'rgba(255,255,255,.5)', maxWidth:320, marginBottom:30, fontWeight:300, animationDelay:'.24s' }}>{s.sub}</p>

            <div className="hs-in" style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:28, animationDelay:'.32s' }}>
              <Link href="/tour-inquiry/" style={{ display:'inline-flex', alignItems:'center', padding:'12px 26px', background:s.accent, color:'#050A05', fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', textDecoration:'none', transition:'all .25s' }}>
                Plan My Trip
              </Link>
              <Link href={s.href} style={{ display:'inline-flex', alignItems:'center', padding:'12px 20px', border:`1px solid rgba(${s.accentRgb},.3)`, color:s.accent, fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', textDecoration:'none', background:'rgba(0,0,0,.2)' }}>
                Explore &rarr;
              </Link>
            </div>

            <div className="hs-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', borderTop:'1px solid rgba(255,255,255,.07)', paddingTop:18, animationDelay:'.4s' }}>
              {[{n:'20+',l:'Years'},{n:'10K+',l:'Outings'},{n:'$275',l:'From/Person'}].map((st, i) => (
                <div key={st.n} style={{ paddingRight:i<2?16:0, paddingLeft:i>0?16:0, borderRight:i<2?'1px solid rgba(255,255,255,.07)':'none' }}>
                  <div style={{ fontFamily:'var(--serif)', fontSize:20, fontWeight:300, color:s.accent, lineHeight:1 }}>{st.n}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(255,255,255,.28)', marginTop:3 }}>{st.l}</div>
                </div>
              ))}
            </div>

            {/* Dots + arrows */}
            <div style={{ position:'absolute', bottom:28, left:'clamp(20px,5vw,72px)', display:'flex', alignItems:'center', gap:6 }}>
              {slides.map((sl, i) => (
                <button key={sl.id} className={`hs-dot${i===active?' on':''}`} style={{ background:i===active?s.accent:'transparent' }} onClick={() => goTo(i)} />
              ))}
              <div style={{ marginLeft:10, display:'flex', gap:6 }}>
                <button className="hs-arrow" onClick={() => goTo((active-1+slides.length)%slides.length)}>&#8592;</button>
                <button className="hs-arrow" onClick={() => goTo((active+1)%slides.length)}>&#8594;</button>
              </div>
            </div>
          </div>

          {/* RIGHT BLEED */}
          <div className="hs-right" style={{ position:'relative' }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(4,8,4,.8) 0%, rgba(4,8,4,.15) 30%, transparent 55%)', zIndex:1 }} />

            {/* Region badge */}
            <div key={`bg-${active}`} className="hs-in" style={{ position:'absolute', top:32, right:28, zIndex:3, background:`rgba(${s.accentRgb},.1)`, border:`1px solid rgba(${s.accentRgb},.35)`, padding:'7px 14px', fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:s.accent, animationDelay:'.5s', backdropFilter:'blur(8px)' }}>
              {s.region}
            </div>

            {/* Price card */}
            <div key={`cd-${active}`} className="hs-in" style={{ position:'absolute', right:28, bottom:100, zIndex:3, animationDelay:'.35s' }}>
              <div className="hs-card" style={{ borderTopColor:s.accent }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:`rgba(${s.accentRgb},.6)`, marginBottom:8 }}>{s.tag}</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:48, fontWeight:300, color:s.accent, lineHeight:1 }}>{s.stat}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.35)', marginTop:6 }}>{s.statLabel}</div>
              </div>
              <div style={{ marginTop:8, padding:'8px 14px', background:`rgba(${s.accentRgb},.08)`, border:`1px solid rgba(${s.accentRgb},.25)`, fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:`rgba(${s.accentRgb},.85)` }}>
                &#9873;&nbsp; {s.badge}
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:`rgba(${s.accentRgb},.15)`, zIndex:3 }}>
              <div key={`bar-${active}`} className="hs-bar" style={{ background:s.accent }} />
            </div>
          </div>
        </div>

        {/* Gold top rule */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${s.accent} 0%, rgba(${s.accentRgb},.3) 50%, transparent 100%)`, zIndex:10, transition:'background .9s' }} />

        {/* Slide counter */}
        <div style={{ position:'absolute', bottom:32, right:28, zIndex:5, fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.28)', letterSpacing:'.12em' }}>
          {String(active+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
        </div>
      </section>
    </>
  )
}
