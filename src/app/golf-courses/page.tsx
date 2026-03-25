import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Golf Courses & Tee Times for Groups | Pebble Beach, Shadow Creek | Group Golf Tours',
  description: 'Preferred tee time access at Pebble Beach ($675/round), Shadow Creek ($1,250), Edgewood Tahoe, Torrey Pines, and 200+ US courses. Group rates, 20+ years of relationships.',
  alternates: { canonical: 'https://www.groupgolftours.com/golf-courses/' },
}

const courses = [
  { name:'Pebble Beach Golf Links', region:'Monterey, CA', fee:'$675/round', note:'18-month advance · Resort stay required', href:'/portfolio-item/monterey-and-pebble-beach/', color:'#5ED8C8' },
  { name:'Shadow Creek', region:'Las Vegas, NV', fee:'$1,250/round', note:'MGM guests only · Limo + caddie included', href:'/portfolio-item/las-vegas-and-southern-nevada/', color:'#F8C030' },
  { name:'Edgewood Tahoe', region:'South Lake Tahoe, CA', fee:'~$350/round', note:'6,200 ft elevation · Golf Digest Top 100', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', color:'#80C8F0' },
  { name:'Torrey Pines (South)', region:'La Jolla, CA', fee:'$277–$345/round', note:'2× US Open host · Non-resident rate', href:'/portfolio-item/monterey-and-pebble-beach-2/', color:'#F87050' },
  { name:'Spyglass Hill', region:'Pebble Beach, CA', fee:'$395/round', note:'AT&T Pro-Am rotation · 3-month advance', href:'/portfolio-item/monterey-and-pebble-beach/', color:'#5ED8C8' },
  { name:'Wolf Run / Red Hawk / ArrowCreek', region:'Reno, NV', fee:'From $275/person pkg', note:'Packages from $275/person with casino hotel', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', color:'#80C8F0' },
  { name:'Somersett Golf & CC', region:'Reno, NV', fee:'From $540/person pkg', note:'Golfweek top private residential · Access by arrangement', href:'/portfolio-item/somersett-golf-country-club/', color:'#98D060' },
  { name:'Coyote Moon / Old Greenwood', region:'Truckee, CA', fee:'From $530/person pkg', note:'Sierra mountain courses · Tahoe/Truckee packages', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', color:'#80C8F0' },
]

export default function GolfCourses() {
  return (
    <>
      <style>{`
        .cc:hover{transform:translateY(-2px);border-color:rgba(255,255,255,0.1)!important}
        .cc{transition:all 0.22s}
      `}</style>

      {/* Hero */}
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', position:'relative', overflow:'hidden', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(94,216,200,0.06) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div className="section-wrap" style={{ maxWidth:'var(--max)', position:'relative', zIndex:1 }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Golf Courses</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            The courses your<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>group can&apos;t book alone.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            Pebble Beach at $675/round requires a resort stay booked up to 18 months out. Shadow Creek at $1,250/round is MGM hotel guests only. Edgewood Tahoe. Torrey Pines South. We hold preferred relationships at 200+ courses across every destination we serve — and we secure the times your group wants.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Request Tee Times</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <div style={{ marginBottom:36 }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Signature Courses</span>
            <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10 }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:2 }}>
            {courses.map(c => (
              <Link key={c.name} href={c.href} className="cc" style={{ textDecoration:'none', display:'block', padding:'22px 24px', background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${c.color}55`, position:'relative' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:c.color, opacity:0.8, marginBottom:8 }}>{c.region}</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:20, color:'var(--cream)', fontWeight:300, lineHeight:1.15, marginBottom:10 }}>{c.name}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:6, marginBottom:6 }}>
                  <span style={{ fontFamily:'var(--serif)', fontSize:22, color:c.color, lineHeight:1 }}>{c.fee}</span>
                </div>
                <div style={{ fontSize:11, color:'rgba(245,237,216,0.35)', letterSpacing:'0.04em' }}>{c.note}</div>
                <div style={{ position:'absolute', top:20, right:20, fontSize:12, color:c.color, opacity:0.5 }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ background:'var(--parchment)', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:820 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,48px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, marginBottom:28, letterSpacing:'-0.02em' }}>
            Why groups need a specialist for tee times
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
            {[
              { t:'Pebble Beach — 18-month window', b:'Non-guests can only book 24 hours out. Groups need simultaneous resort booking + tee time reservation. We manage both in one coordinated process.' },
              { t:'Shadow Creek — hotel stay required', b:'$1,250/round is gated behind MGM Resort hotel stays, Monday–Thursday only. We package the MGM room block with the tee times — limo and caddie included.' },
              { t:'Volume relationships = access', b:'20+ years of vendor relationships means we get groups onto courses that say "fully booked" to the public. Preferred slots are held for our groups.' },
              { t:'Group rates vs. retail', b:'Booking 8–40 tee times individually costs full retail. Our volume relationships yield group rates on green fees, carts, and practice facilities.' },
            ].map(p => (
              <div key={p.t} style={{ padding:'20px 0', borderTop:'1px solid rgba(26,20,8,0.1)' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408', marginBottom:8 }}>{p.t}</div>
                <div style={{ fontSize:13, lineHeight:1.8, color:'rgba(26,20,8,0.55)' }}>{p.b}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:36 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Book Tee Times for My Group</span></Link>
          </div>
        </div>
      </section>

      {/* Cross-links: Destinations */}
      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Plan by Destination</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'Wolf Run · Red Hawk · Edgewood Tahoe · From $275/person' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250 · TPC Las Vegas · Cascata' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Pebble Beach $675 · Spyglass Hill · Spanish Bay' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Torrey Pines $277–$345 · Pelican Hill · PGA West' },
              { label:'Somersett Golf & Country Club', href:'/portfolio-item/somersett-golf-country-club/', sub:'Golfweek Top Private · Reno NV · From $540/person' },
            ].map(d => (
              <Link key={d.href} href={d.href} style={{ display:'block', padding:'14px 18px', background:'rgba(255,255,255,0.025)', textDecoration:'none', borderLeft:'2px solid transparent', transition:'all 0.18s' }} className="dest-xl">
                <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:500, color:'rgba(245,237,216,0.7)', lineHeight:1.2 }}>{d.label}</div>
                <div style={{ fontSize:10, color:'rgba(245,237,216,0.3)', marginTop:3 }}>{d.sub}</div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`.dest-xl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--gold)!important}.dest-xl:hover>div:first-child{color:var(--gold)!important}`}</style>
      </section>

      {/* Cross-links: Related services */}
      <section style={{ background:'#0A0806', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Complete Your Package</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Group blocks near every course' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Airport transfers · Course shuttles' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'Tee times + lodging bundled' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Post-round group dinners' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Protect tee time investments' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', sub:'For non-golfers in your group' },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ display:'flex', gap:12, padding:'14px 18px', background:'rgba(255,255,255,0.02)', textDecoration:'none', borderLeft:'2px solid transparent', transition:'all 0.18s', alignItems:'flex-start' }} className="svc-xl">
                <span style={{ fontSize:16, flexShrink:0, opacity:0.75 }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:12, fontWeight:500, color:'rgba(245,237,216,0.65)' }}>{s.label}</div>
                  <div style={{ fontSize:10, color:'rgba(245,237,216,0.28)', marginTop:2 }}>{s.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`.svc-xl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--copper)!important}.svc-xl:hover div:first-child{color:var(--copper)!important}`}</style>
      </section>
    </>
  )
}
