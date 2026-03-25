import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Golf Buddy Trips | Group Golf Packages 4–24 Players | Group Golf Tours',
  description: 'Golf buddy trip planning for groups of 4–24 players. Secured tee times at Pebble Beach, Shadow Creek, Lake Tahoe, and Las Vegas. Hotel blocks, transport, dining. 20+ years.',
  alternates: { canonical: 'https://www.groupgolftours.com/golf-buddy-trips/' },
}

export default function GolfBuddyTrips() {
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 55% 55% at 80% 50%, rgba(94,216,200,0.06) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div className="section-wrap" style={{ maxWidth:'var(--max)', position:'relative', zIndex:1 }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Experiences · Golf Buddy Trips</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            The trip your group<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>has been talking about.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            There&apos;s nothing like hitting the fairways with your favorite group of golf buddies, creating unforgettable memories both on and off the course. Our Golf Buddy Trips are designed to take the stress out of planning and deliver the ultimate group golf experience — whether it&apos;s a weekend at a renowned destination or an adventurous journey to a bucket-list course.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Plan My Buddy Trip</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background:'var(--parchment)', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:820 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,4vw,44px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, marginBottom:32, letterSpacing:'-0.02em' }}>
            You play the golf. We handle everything else.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
            {[
              { n:'01', t:'Tell us where + when', b:'Fill out a 2-minute inquiry form. Destination preference, group size (4–24 players), preferred dates, and budget range. That\'s all we need to start.' },
              { n:'02', t:'We build the itinerary', b:'We secure tee times at your chosen courses (including courses that say "unavailable" to the public), hold hotel room blocks, and price out transportation and dining.' },
              { n:'03', t:'You approve and we book', b:'You review the itinerary and pricing. Once approved, we book everything simultaneously — courses, hotel, transport, dining — in one coordinated process.' },
              { n:'04', t:'You show up and play', b:'We send the complete itinerary to your group. Everyone knows where to be and when. You focus on the game and the camaraderie. We handle any last-minute logistics.' },
            ].map(p => (
              <div key={p.n} style={{ display:'flex', gap:16, padding:'20px 0', borderTop:'1px solid rgba(26,20,8,0.08)' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:13, color:'var(--copper)', opacity:0.7, flexShrink:0, width:24, paddingTop:2 }}>{p.n}</div>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408', marginBottom:6 }}>{p.t}</div>
                  <div style={{ fontSize:13, lineHeight:1.78, color:'rgba(26,20,8,0.55)' }}>{p.b}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/tour-inquiry/" className="btn btn-gold" style={{ marginTop:36, display:'inline-flex' }}><span>Start Planning</span></Link>
        </div>
      </section>

      {/* Popular destinations for buddy trips */}
      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Popular Buddy Trip Destinations</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'From $275/person · Casino hotels · 6 courses' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250 · Entertainment after rounds' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Pebble Beach $675 · Bucket-list round' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Torrey Pines + ocean views + year-round golf' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Private Reno course · Groups rarely get on' },
              { label:'All Destinations', href:'/destinations/', sub:'Ireland · Scotland · Portugal · Spain · Arizona' },
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

      {/* Services for buddy trips */}
      <section style={{ background:'#0A0806', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Everything Included</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'Preferred access at 200+ courses' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Group stays together' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Airport pickups + course shuttles' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Post-round group dinners' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'Bundles from $275/person' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Protect your trip deposits' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', sub:'For non-golf days' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/', sub:'Collect group info digitally' },
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

      {/* Also see Corporate */}
      <section style={{ background:'#080C08', padding:'clamp(32px,4vw,48px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)', display:'flex', gap:24, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:600, color:'var(--cream)', marginBottom:4 }}>Planning a corporate golf event instead?</div>
            <div style={{ fontSize:12, color:'rgba(245,237,216,0.4)' }}>20–200 players · Incentive travel · Executive groups</div>
          </div>
          <Link href="/corporate-and-incentive-golf-travel/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--gold)', textDecoration:'none', whiteSpace:'nowrap' }}>
            Corporate & Incentive Travel →
          </Link>
        </div>
      </section>
    </>
  )
}
