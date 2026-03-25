import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Group Hotel Reservations | Casino Hotels, Resort Blocks | Group Golf Tours',
  description: 'Group room blocks at Atlantis, Peppermill, MGM properties, The Lodge at Pebble Beach, and 100+ resort hotels. Rooms held together, group rates, 20+ years of relationships.',
  alternates: { canonical: 'https://www.groupgolftours.com/hotel-reservations/' },
}

export default function HotelReservations() {
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', position:'relative', overflow:'hidden', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(128,200,240,0.06) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div className="section-wrap" style={{ maxWidth:'var(--max)', position:'relative', zIndex:1 }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Hotel Reservations</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            Your group stays<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>together.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            Groups that book hotels independently get split across three properties. We hold room blocks the day you inquire — at Atlantis, Peppermill, Eldorado, Silver Legacy, MGM Grand, Bellagio, The Lodge at Pebble Beach, and resort properties at every destination we serve. Up to 8 rooms online; for larger groups, our specialists handle everything directly.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Reserve Hotel Block</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      {/* Partner hotels by region */}
      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Hotels by Region</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:32 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:16 }}>
            {[
              { region:'Reno / Northern Nevada', color:'#80C8F0', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', hotels:'Atlantis Casino Resort · Peppermill Resort · Eldorado Hotel Casino · Silver Legacy (Caesars) · Grand Sierra Resort', note:'Casino resort room blocks from $99/night. 15–25 min to all major Reno courses.' },
              { region:'Las Vegas (MGM Tier)', color:'#F8C030', href:'/portfolio-item/las-vegas-and-southern-nevada/', hotels:'Bellagio · Aria Resort · MGM Grand · Park MGM · Vdara · New York-New York · Mandalay Bay · Luxor', note:'MGM property stays required for Shadow Creek access Mon–Thu. We coordinate rooms + tee times simultaneously.' },
              { region:'Monterey & Pebble Beach', color:'#5ED8C8', href:'/portfolio-item/monterey-and-pebble-beach/', hotels:'The Lodge at Pebble Beach · Inn at Spanish Bay · Casa Palmero · Carmel Valley Ranch', note:'Resort stay unlocks 18-month advance Pebble Beach tee time booking. Minimum 2-night stay required.' },
              { region:'Southern California', color:'#F87050', href:'/portfolio-item/monterey-and-pebble-beach-2/', hotels:'La Valencia Hotel La Jolla · Torrey Pines Lodge · La Quinta Resort · Marriott Palm Desert', note:'Coastal La Jolla hotels 5 min from Torrey Pines. Palm Springs desert resorts for PGA West groups.' },
              { region:'Lake Tahoe / Truckee', color:'#80C8F0', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', hotels:'Old Greenwood Lodge · Northstar Village · Cedar House Sport Hotel · Hyatt Regency Lake Tahoe', note:'Mountain lodge properties 5–20 min from Coyote Moon, Old Greenwood, and Gray\'s Crossing.' },
            ].map(r => (
              <Link key={r.region} href={r.href} style={{ textDecoration:'none', display:'block', background:'rgba(255,255,255,0.025)', padding:'22px', borderLeft:`3px solid ${r.color}55`, transition:'all 0.2s' }} className="cc">
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:r.color, opacity:0.8, marginBottom:8 }}>{r.region}</div>
                <div style={{ fontSize:12, color:'rgba(245,237,216,0.65)', lineHeight:1.7, marginBottom:10 }}>{r.hotels}</div>
                <div style={{ fontSize:11, color:'rgba(245,237,216,0.35)', lineHeight:1.6, fontStyle:'italic' }}>{r.note}</div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`.cc{transition:all 0.22s}.cc:hover{transform:translateY(-2px)}`}</style>
      </section>

      {/* Why block early */}
      <section style={{ background:'var(--parchment)', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:820 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,48px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, marginBottom:28, letterSpacing:'-0.02em' }}>
            Why early hotel coordination matters
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
            {[
              { t:'Pebble Beach: tee time access is tied to your hotel', b:'The Lodge at Pebble Beach and Inn at Spanish Bay guests get 18-month advance tee time access. There is no other way to guarantee group times at Pebble Beach. We coordinate both on the same call.' },
              { t:'Shadow Creek: MGM hotel required', b:'Shadow Creek access is exclusively for guests of MGM Resorts properties. We package your MGM hotel block with Shadow Creek tee times in one booking — the only way groups get on this course.' },
              { t:'Room blocks hold your group together', b:'Late-booking groups get rooms at different hotels. We hold preferred group blocks at our partner properties the day you inquire. Your group arrives together, stays together, plays together.' },
              { t:'Group rates vs. booking individually', b:'Booking 8–30 hotel rooms individually at peak rates costs significantly more. Our long-term volume relationships yield preferred group rates not available on Expedia or direct booking.' },
            ].map(p => (
              <div key={p.t} style={{ padding:'20px 0', borderTop:'1px solid rgba(26,20,8,0.1)' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408', marginBottom:8 }}>{p.t}</div>
                <div style={{ fontSize:13, lineHeight:1.8, color:'rgba(26,20,8,0.55)' }}>{p.b}</div>
              </div>
            ))}
          </div>
          <Link href="/tour-inquiry/" className="btn btn-gold" style={{ marginTop:36, display:'inline-flex' }}><span>Reserve Hotel Block</span></Link>
        </div>
      </section>

      {/* Destination links */}
      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Browse by Destination</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'Casino resorts from $99/night · Group blocks' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'MGM properties · Shadow Creek access' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'The Lodge · Spanish Bay · 18-mo tee time access' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'La Jolla coastal · Palm Springs desert' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Reno casino hotels + private course access' },
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

      {/* Related services */}
      <section style={{ background:'#0A0806', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Complete Your Package</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'Preferred access at 200+ courses' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Hotel-to-course shuttles' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'Hotel + tee times bundled' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Group dining arrangements' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Protect hotel deposits' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/', sub:'Manage room assignments' },
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
