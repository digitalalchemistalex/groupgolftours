import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Golf Tour Packages | From $275/Person All-Inclusive | Group Golf Tours',
  description: 'All-inclusive golf tour packages from $275/person. Tee times + hotel + transport + dining coordinated. 82 documented packages from Reno to Pebble Beach. 20+ years.',
  alternates: { canonical: 'https://www.groupgolftours.com/tour-packages/' },
}
export default function TourPackages() {
  const packages = [
    { name:'Reno Starter', price:'$275', sub:'/person', nights:'1 night', rounds:'2 rounds', course:'Lakeridge Golf Course', hotel:'Reno Casino Hotel', players:'Groups 4+', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', color:'#80C8F0' },
    { name:'Reno Golf Weekend', price:'$395–$499', sub:'/person', nights:'2–4 nights', rounds:'2–3 rounds', course:'Wolf Run or Red Hawk', hotel:'Reno Casino Resort', players:'Groups 4–24', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', color:'#80C8F0' },
    { name:'Tahoe / Truckee', price:'$449–$1,362', sub:'/person', nights:'2–5 nights', rounds:'2–5 rounds', course:'Incline Village · Coyote Moon · Edgewood', hotel:'Mountain Lodge or Tahoe Resort', players:'Groups 4–24', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', color:'#5ED8C8' },
    { name:'Graeagle Golf Escape', price:'$379–$1,310', sub:'/person', nights:'2–4 nights', rounds:'2–4 rounds', course:'Grizzly Ranch · Whitehawk Ranch', hotel:'Plumas Pines Resort Townhomes', players:'Groups 8–24', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', color:'#98D060' },
    { name:'Mesquite / St. George', price:'$1,275–$3,420', sub:'/person', nights:'3–5 nights', rounds:'3–8 rounds', course:'Oasis Golf · The Ledges · Wolf Creek', hotel:'Oasis Resort', players:'Groups 4–32', href:'/portfolio-item/las-vegas-and-southern-nevada/', color:'#F8C030' },
    { name:'Southern California', price:'$2,950', sub:'/person', nights:'5 nights', rounds:'4 rounds', course:'Torrey Pines North Course', hotel:'La Jolla Area Hotel', players:'Groups 4–16', href:'/portfolio-item/monterey-and-pebble-beach-2/', color:'#F87050' },
  ]
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Tour Packages</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            82 documented packages.<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>One form to start.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            From a $275/person Reno starter (1 night, 2 rounds at Lakeridge) to a $4,119/person Edgewood Tahoe stay-and-play (5 nights, 5 rounds). Our TripCaddie system documents 82 real, verified packages with actual tee times, hotel properties, and confirmed pricing. Tell us your budget and group size — we build around what&apos;s real.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Request Package Quote</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Sample Package Pricing</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:8 }} />
          <p style={{ fontSize:12, color:'rgba(245,237,216,0.35)', marginBottom:32, letterSpacing:'0.04em', fontStyle:'italic' }}>All prices per person, based on documented real packages from our TripCaddie system</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:2 }}>
            {packages.map(p => (
              <Link key={p.name} href={p.href} style={{ textDecoration:'none', display:'block', padding:'22px 24px', background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${p.color}55`, transition:'all 0.2s' }} className="cc">
                <div style={{ display:'flex', alignItems:'baseline', gap:3, marginBottom:8 }}>
                  <span style={{ fontFamily:'var(--serif)', fontSize:32, color:p.color, lineHeight:1 }}>{p.price}</span>
                  <span style={{ fontSize:11, color:'rgba(245,237,216,0.35)' }}>{p.sub}</span>
                </div>
                <div style={{ fontFamily:'var(--serif)', fontSize:18, color:'var(--cream)', fontWeight:300, marginBottom:10 }}>{p.name}</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, fontSize:11, color:'rgba(245,237,216,0.45)', letterSpacing:'0.03em' }}>
                  <div>⏱ {p.nights}</div><div>⛳ {p.rounds}</div>
                  <div style={{ gridColumn:'1/-1' }}>🏌️ {p.course}</div>
                  <div style={{ gridColumn:'1/-1' }}>🏨 {p.hotel}</div>
                  <div style={{ gridColumn:'1/-1' }}>👥 {p.players}</div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`.cc{transition:all 0.22s}.cc:hover{transform:translateY(-2px)}`}</style>
        </div>
      </section>

      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Browse All Destinations</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'82 packages · $275–$4,119/person' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250 · Mesquite $1,275–$3,420' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Pebble $675/round · Bayonet from $880/person' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Torrey Pines packages from $2,950/person' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Private access from $540/person' },
            ].map(d => (
              <Link key={d.href} href={d.href} style={{ display:'block', padding:'14px 18px', background:'rgba(255,255,255,0.025)', textDecoration:'none', borderLeft:'2px solid transparent', transition:'all 0.18s' }} className="dxl">
                <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:500, color:'rgba(245,237,216,0.7)', lineHeight:1.2 }}>{d.label}</div>
                <div style={{ fontSize:10, color:'rgba(245,237,216,0.3)', marginTop:3 }}>{d.sub}</div>
              </Link>
            ))}
          </div>
          <style>{`.dxl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--gold)!important}.dxl:hover>div:first-child{color:var(--gold)!important}`}</style>
        </div>
      </section>

      <section style={{ background:'#0A0806', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>What&apos;s Included</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'Preferred access bundled in every package' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Group blocks coordinated with tee times' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Airport transfers + course shuttles' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Add group dining to any package' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Protect your package investment' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', sub:'Non-golf days arranged on request' },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ display:'flex', gap:12, padding:'14px 18px', background:'rgba(255,255,255,0.02)', textDecoration:'none', borderLeft:'2px solid transparent', transition:'all 0.18s', alignItems:'flex-start' }} className="sxl">
                <span style={{ fontSize:16, flexShrink:0, opacity:0.75 }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:12, fontWeight:500, color:'rgba(245,237,216,0.65)' }}>{s.label}</div>
                  <div style={{ fontSize:10, color:'rgba(245,237,216,0.28)', marginTop:2 }}>{s.sub}</div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`.sxl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--copper)!important}.sxl:hover div:first-child{color:var(--copper)!important}`}</style>
        </div>
      </section>
    </>
  )
}
