import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Online Golf Group Registration System | Manage Attendees | Group Golf Tours',
  description: 'Simple online registration system for golf group events. Collect attendee info, manage handicaps, coordinate tee time pairings, and handle payments digitally. Groups 4–200+.',
  alternates: { canonical: 'https://www.groupgolftours.com/online-registration-system/' },
}
export default function OnlineRegistration() {
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Online Registration</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            Stop chasing<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>confirmations by email.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            Coordinating 20+ golfers means collecting handicaps, flight arrival times, dietary restrictions, roommate preferences, and payment — all by email. Our online registration system digitizes the entire process. Attendees register once, you see everything in a dashboard. No spreadsheets, no forwarded email chains.
          </p>
          <Link href="/tour-inquiry/" className="btn btn-gold"><span>Get Started</span></Link>
        </div>
      </section>

      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:2 }}>
            {[
              { icon:'📝', t:'Attendee Registration', b:'Each golfer fills out one digital form: name, handicap, arrival details, dietary needs, shirt size for corporate events, roommate preference. Collected once, shared automatically.', c:'#5ED8C8' },
              { icon:'💳', t:'Payment Collection', b:'Online payment processing for trip deposits and final balances. Individual payment links sent to each registrant — no one person fronting the trip cost for the group.', c:'#F8C030' },
              { icon:'⛳', t:'Tee Time Pairings', b:'Handicap data collected at registration feeds directly into pairing and flight generation. No manual sorting across emails to figure out who plays with whom.', c:'#80C8F0' },
              { icon:'✉️', t:'Automated Communications', b:'Automated confirmation emails, reminder sequences before departure, and itinerary delivery — all triggered from the registration system. One setup, automated execution.', c:'#F87050' },
              { icon:'📊', t:'Organizer Dashboard', b:'Trip Captain sees a real-time dashboard: who has registered, who has paid, who has outstanding items, and a complete headcount with all attendee details in one place.', c:'#98D060' },
              { icon:'📱', t:'Mobile-Friendly', b:'Attendees register on their phone in under 2 minutes. No PDF forms, no logins required to complete registration. Clean, fast, professional.', c:'#B89860' },
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

      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Use It on Any Trip</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'Casino hotel room assignments · Course pairings' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek group logistics · MGM hotel rooms' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Lodge room block management · Tee time pairings' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Multi-course trip logistics · Group coordination' },
              { label:'Corporate & Incentive Events', href:'/corporate-and-incentive-golf-travel/', sub:'Large group management · 20–200 attendees' },
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
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Other Services</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'Pairings fed from registration data' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Room assignments from registrant list' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Arrival times collected at registration' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'Package inclusions per registrant' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Insurance confirmation at registration' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Dietary needs collected in form' },
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
