import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate & Incentive Golf Travel | 20–200 Players | Group Golf Tours',
  description: 'Corporate golf events and incentive travel for 20–200 players. Pebble Beach, Shadow Creek, Edgewood Tahoe. Group rates, full logistics coordination. 20+ years of corporate events.',
  alternates: { canonical: 'https://www.groupgolftours.com/corporate-and-incentive-golf-travel/' },
}

export default function CorporateIncentiveGolf() {
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 60% at 85% 40%, rgba(248,192,48,0.06) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div className="section-wrap" style={{ maxWidth:'var(--max)', position:'relative', zIndex:1 }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Experiences · Corporate & Incentive</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            Pebble Beach.<br />
            <em style={{ fontStyle:'italic', color:'var(--gold)' }}>The reward they<br />fight to earn back.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            Your top performers deserve Pebble Beach, not the local muni. Corporate golf incentive trips create the kind of memories that drive performance all year. We plan events for 20 to 200+ players — coordinating multiple courses, resort hotel blocks, branded transport, award dinners, and registration systems so your team just shows up and plays.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Plan Corporate Event</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      {/* Corporate-specific services */}
      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Corporate Event Services</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:32 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', t:'Multi-Course Scheduling', b:'Corporate events often play different courses each day. We coordinate simultaneous tee times at multiple venues — Pebble Beach on day one, Spyglass Hill on day two — and manage the logistics between properties.', c:'#5ED8C8' },
              { icon:'🏨', t:'Large Group Hotel Blocks', b:'Corporate events with 50–200 attendees require hotel blocks large enough to keep the group together. We hold preferred blocks at Pebble Beach resorts, MGM properties, and Reno casino resorts well in advance.', c:'#F8C030' },
              { icon:'🏆', t:'Awards & Recognition Events', b:'Post-round award ceremonies, branded merchandise, longest drive contests, closest-to-pin prizes. We integrate the competitive programming into your event alongside the golf scheduling.', c:'#80C8F0' },
              { icon:'🍽', t:'Group Dining & Award Dinners', b:'From the post-round cocktail hour to the formal awards dinner at Club XIX overlooking the Pebble Beach 18th green — we coordinate the full dining program for your event.', c:'#F87050' },
              { icon:'✅', t:'Digital Registration System', b:'Online registration for every attendee: handicap collection, dietary restrictions, shirt sizes, arrival details. Payment collected individually — no one person fronting costs for 80 players.', c:'#98D060' },
              { icon:'💰', t:'Volume Group Rates', b:'Booking 30–100+ tee times commands volume pricing not available to individual bookers. Our long-term relationships at premium courses yield group rates that make the budget work.', c:'#B89860' },
            ].map(s => (
              <div key={s.t} style={{ padding:'24px', background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${s.c}55` }}>
                <div style={{ fontSize:24, marginBottom:12 }}>{s.icon}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'var(--cream)', marginBottom:10 }}>{s.t}</div>
                <div style={{ fontSize:13, lineHeight:1.8, color:'rgba(245,237,216,0.48)' }}>{s.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best corporate destinations */}
      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Top Corporate Destinations</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'The prestige destination · $675/round · Book 18 months out' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250 + Vegas entertainment · Groups 20–200' },
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'Casino hotels for large groups · Multi-course options · From $275pp' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Torrey Pines · Pelican Hill · Year-round scheduling' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Private access · Exclusive corporate event feel · Reno NV' },
              { label:'All Destinations', href:'/destinations/', sub:'International: Scotland · Ireland · Portugal · Spain' },
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

      {/* All services */}
      <section style={{ background:'#0A0806', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Full Service Package</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'Group rates · Multi-course coordination' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Large group blocks at premium properties' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Fleet vehicles · Corporate branded transport' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Award dinners · Group celebrations' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Protect large-scale event investments' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'All-inclusive corporate packages' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', sub:'Non-golf spouse/partner programs' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/', sub:'Digital registration for 20–200 attendees' },
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

      {/* See also buddy trips */}
      <section style={{ background:'#080C08', padding:'clamp(32px,4vw,48px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)', display:'flex', gap:24, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:600, color:'var(--cream)', marginBottom:4 }}>Planning a smaller group buddy trip instead?</div>
            <div style={{ fontSize:12, color:'rgba(245,237,216,0.4)' }}>4–24 players · Weekend getaways · Bucket-list rounds</div>
          </div>
          <Link href="/golf-buddy-trips/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--gold)', textDecoration:'none', whiteSpace:'nowrap' }}>
            Golf Buddy Trips →
          </Link>
        </div>
      </section>
    </>
  )
}
