import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Golf Group Dining & Events | Post-Round Group Dinners | Group Golf Tours',
  description: 'Curated dining arrangements for golf groups — award-winning restaurants, private group dinners, post-round celebrations at Carmel, Las Vegas, Lake Tahoe, and all destinations.',
  alternates: { canonical: 'https://www.groupgolftours.com/dining-events-and-arrangements/' },
}
export default function Dining() {
  const venues = [
    { r:'Carmel & Monterey', v:['The Bench at The Lodge at Pebble Beach','Stationaery at Spanish Bay','Cultura Comida y Bebida, Carmel','Club XIX at The Lodge'], c:'#5ED8C8', href:'/portfolio-item/monterey-and-pebble-beach/' },
    { r:'Las Vegas', v:['Joel Robuchon at MGM Grand','Picasso at Bellagio','CUT by Wolfgang Puck at Palazzo','The Buffet at Wynn'], c:'#F8C030', href:'/portfolio-item/las-vegas-and-southern-nevada/' },
    { r:'Lake Tahoe & Reno', v:['Moody\'s Bistro at Truckee','Manzanita at Ritz-Carlton Lake Tahoe','La Vecchia at Atlantis Casino','Charlie Palmer Steak, Reno'], c:'#80C8F0', href:'/portfolio-item/lake-tahoe-and-northern-nevada/' },
    { r:'Southern California', v:['George\'s at the Cove, La Jolla','Nobu at Hard Rock Hotel San Diego','Workshop Kitchen + Bar, Palm Springs','Farmhouse at Rancho Santa Fe'], c:'#F87050', href:'/portfolio-item/monterey-and-pebble-beach-2/' },
  ]
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Dining & Events</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            The meal that makes<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>the trip legendary.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            A group dinner after the Pebble Beach round at Club XIX overlooking the 18th green. The post-Shadow Creek evening at a Bellagio restaurant. The wine dinner in Carmel-by-the-Sea. These are the moments groups talk about for years. We handle the reservations, private room arrangements, and group menus so the evening is as seamless as the golf.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Plan Group Dining</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Dining by Destination</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:32 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:2 }}>
            {venues.map(v => (
              <Link key={v.r} href={v.href} style={{ textDecoration:'none', display:'block', padding:'22px 24px', background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${v.c}55`, transition:'all 0.2s' }} className="cc">
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:v.c, opacity:0.8, marginBottom:10 }}>{v.r}</div>
                {v.v.map(n => <div key={n} style={{ fontSize:12, color:'rgba(245,237,216,0.6)', lineHeight:1.9, borderBottom:'1px solid rgba(255,255,255,0.04)', paddingBottom:4, marginBottom:4 }}>{n}</div>)}
              </Link>
            ))}
          </div>
          <style>{`.cc{transition:all 0.22s}.cc:hover{transform:translateY(-2px)}`}</style>
        </div>
      </section>

      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Pair with the Right Destination</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Club XIX · Carmel wine country · Cannery Row seafood' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Michelin-starred restaurants · Steakhouses · Celebrity chef dining' },
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'Mountain lodge dining · Reno casino restaurants · Farm-to-table Truckee' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'La Jolla coastal seafood · Palm Springs desert cuisine' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'On-site clubhouse dining · Downtown Reno restaurants' },
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
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Complete Your Trip</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'The reason everyone is here' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Stay close to the dining' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Transport to dinner reservations' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'Dining bundled with golf' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', sub:'Day trips before dinner' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Event cancellation coverage' },
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
