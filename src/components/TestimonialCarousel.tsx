'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

type Testimonial = { quote: string; name: string; detail: string }

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(0)
  const total = testimonials.length

  const next = useCallback(() => setActive(a => (a + 1) % total), [total])
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total])

  // Auto-advance every 5s
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next, paused])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    setTimeout(() => setPaused(false), 3000)
  }

  return (
    <>
      <style>{`
        @keyframes tIn  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        .t-card-in { animation: tIn .5s cubic-bezier(.22,1,.36,1) both }
        .t-dot { width:8px;height:8px;border-radius:50%;border:1.5px solid rgba(26,20,8,.25);background:transparent;cursor:pointer;transition:all .3s;padding:0;flex-shrink:0 }
        .t-dot.on { width:24px;border-radius:4px;background:#D4A832;border-color:transparent }
        .t-nav { width:38px;height:38px;border-radius:50%;border:1px solid rgba(26,20,8,.15);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;padding:0;flex-shrink:0 }
        .t-nav:hover { background:#F7F3EC;border-color:rgba(26,20,8,.3) }
        /* Mobile: single card carousel */
        @media(max-width:768px){
          .t-grid { display:none!important }
          .t-carousel { display:flex!important }
        }
        /* Desktop: 3 column grid */
        @media(min-width:769px){
          .t-grid { display:grid!important }
          .t-carousel { display:none!important }
        }
      `}</style>

      <section style={{ background:'#F7F3EC', padding:'clamp(72px,9vw,110px) 0' }}>
        <div className="wrap">
          {/* Header */}
          <div className="sr" style={{ textAlign:'center', maxWidth:500, margin:'0 auto 48px' }}>
            <div className="sec-label" style={{ display:'inline-block' }}>What Golfers Say</div>
            <div className="sec-rule" style={{ margin:'12px auto 20px' }} />
            <h2 className="sec-h">Don&apos;t take our word for it.</h2>
          </div>

          {/* ── DESKTOP: 3-column grid ── */}
          <div className="t-grid" style={{ gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background:'#fff', padding:'clamp(22px,3vw,36px)', border:'1px solid #E8E4DC' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:32, color:'#D4A832', lineHeight:1, marginBottom:16 }}>&ldquo;</div>
                <p style={{ fontFamily:'var(--serif)', fontSize:'clamp(15px,1.5vw,19px)', fontWeight:300, color:'#1A1408', lineHeight:1.7, marginBottom:22, fontStyle:'italic' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop:'1px solid #E8E4DC', paddingTop:16 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408', marginBottom:3 }}>{t.name}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(26,20,8,.5)' }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── MOBILE: single-card carousel ── */}
          <div
            className="t-carousel"
            style={{ flexDirection:'column', alignItems:'stretch' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Card */}
            <div
              key={active}
              className="t-card-in"
              style={{ background:'#fff', padding:'28px 24px', border:'1px solid #E8E4DC', marginBottom:20 }}
            >
              <div style={{ fontFamily:'var(--serif)', fontSize:36, color:'#D4A832', lineHeight:1, marginBottom:14 }}>&ldquo;</div>
              <p style={{ fontFamily:'var(--serif)', fontSize:18, fontWeight:300, color:'#1A1408', lineHeight:1.75, marginBottom:22, fontStyle:'italic' }}>
                {testimonials[active].quote}
              </p>
              <div style={{ borderTop:'1px solid #E8E4DC', paddingTop:16 }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'#1A1408', marginBottom:3 }}>{testimonials[active].name}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:12, color:'rgba(26,20,8,.5)' }}>{testimonials[active].detail}</div>
              </div>
            </div>

            {/* Controls row */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              {/* Prev / Next */}
              <div style={{ display:'flex', gap:8 }}>
                <button className="t-nav" onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 3000) }} aria-label="Previous">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="#1A1408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="t-nav" onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 3000) }} aria-label="Next">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="#1A1408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              {/* Dots */}
              <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`t-dot${i === active ? ' on' : ''}`}
                    onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 3000) }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(26,20,8,.35)', letterSpacing:'.1em' }}>
                {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
