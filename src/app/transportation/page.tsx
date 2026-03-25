import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Golf Group Transportation | Airport Transfers, Course Shuttles | Group Golf Tours',
  description: 'Airport transfers, group shuttles from casino hotels to golf courses, private vehicles for corporate events. We coordinate all transportation as part of your golf package.',
  alternates: { canonical: 'https://www.groupgolftours.com/transportation/' },
}

export default function Transportation() {
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Transportation</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            From airport to<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>the first tee.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            Shadow Creek includes a private MGM limousine — that&apos;s built into the $1,250 fee. For every other destination, we coordinate group airport transfers, hotel-to-course shuttles, and inter-course transportation so no one in your group is renting cars or calling Ubers between rounds.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Include Transportation</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:2 }}>
            {[
              { icon:'✈️', t:'Airport Transfers', b:'We arrange group pickup at Reno-Tahoe (RNO), Las Vegas (LAS), Monterey (MRY), San Diego (SAN), and other regional airports. Groups arrive together, travel together.', color:'#5ED8C8' },
              { icon:'🚐', t:'Casino Hotel Shuttles', b:'Reno golf groups staying at Atlantis, Peppermill, or Silver Legacy need shuttles to courses 15–30 minutes away. We schedule group buses for morning tee times and return transport after rounds.', color:'#80C8F0' },
              { icon:'🚗', t:'Shadow Creek Limo', b:'$1,250 Shadow Creek fee includes a private MGM limousine from your hotel to the course. For larger groups, we coordinate the fleet. This is the experience — we make sure it goes perfectly.', color:'#F8C030' },
              { icon:'🚌', t:'Multi-Course Group Transport', b:'Playing Pebble Beach plus Spyglass Hill plus Spanish Bay over 3 days? We coordinate the route between properties so no one misses a tee time driving the wrong direction on 17-Mile Drive.', color:'#5ED8C8' },
              { icon:'🚙', t:'Corporate Fleet Vehicles', b:'Corporate and incentive groups often need branded transport — executive vans, coach buses, or private car service for VIPs. We source the right vehicles for the group size and occasion.', color:'#F87050' },
              { icon:'🏌️', t:'Baggage & Club Transport', b:'Traveling with 20 sets of clubs creates real logistics problems. We coordinate club storage, transport to the range, and loading between venues so no one is dragging their bag through a casino lobby.', color:'#98D060' },
            ].map(s => (
              <div key={s.t} style={{ padding:'24px', background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${s.color}55` }}>
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
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Transportation by Destination</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'RNO airport · Casino-to-course shuttles · Sierra mountain transfers' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'LAS airport · Shadow Creek limo · Strip hotel shuttles' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'MRY airport · 17-Mile Drive · Multi-course Peninsula transport' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'SAN/LAX airport · Torrey Pines · La Jolla to Palm Springs' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Reno casino hotels to Somersett · 15 min private shuttle' },
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
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Also Included in Your Package</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'We secure the times, you ride to them' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Group blocks at the hotels we shuttle from' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'Transport bundled with tee times + hotel' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Transport to group dinner reservations' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', sub:'Excursion transport for non-golfers' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/', sub:'Collect arrival details digitally' },
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
