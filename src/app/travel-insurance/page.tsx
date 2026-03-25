import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Golf Trip Travel Insurance | Protect Pebble Beach Deposits | Group Golf Tours',
  description: 'Travel insurance for golf group trips. Protect tee time deposits at Pebble Beach, hotel blocks, and flight investments against cancellations, medical emergencies, and weather disruptions.',
  alternates: { canonical: 'https://www.groupgolftours.com/travel-insurance/' },
}

export default function TravelInsurance() {
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Travel Insurance</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            Protect a<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>$675/round investment.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            A Pebble Beach group trip for 16 players involves $10,800+ in tee time deposits alone — before hotel, flights, or transport. One medical emergency, one family cancellation, one winter storm closing 17-Mile Drive. Travel insurance is not optional on a trip this size. We help groups choose the right coverage for their trip value, group size, and destination.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Ask About Coverage</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
          </div>
        </div>
      </section>

      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>What Gets Protected</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:32 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:2 }}>
            {[
              { icon:'🔐', t:'Tee Time Deposit Protection', b:'Non-refundable deposits at Pebble Beach, Shadow Creek, Edgewood Tahoe, and other premium courses are often $200–$675/person. Insurance reimburses these deposits on covered cancellations.', color:'#5ED8C8' },
              { icon:'🏨', t:'Hotel Block Protection', b:'Group hotel blocks involve non-refundable deposits, especially at casino resorts. A single cancellation mid-trip shouldn\'t leave your group eating the room cost.', color:'#80C8F0' },
              { icon:'✈️', t:'Flight & Trip Cancellation', b:'If the trip cancels due to covered reasons — illness, weather, family emergency — trip cancellation coverage reimburses prepaid, non-refundable expenses including flights.', color:'#F8C030' },
              { icon:'🏥', t:'Medical & Emergency Evacuation', b:'A medical emergency in remote locations (Graeagle, CA; Scottish Highlands; Bandon Dunes coastal) can cost $15,000+ without insurance. Emergency evacuation coverage is essential on international tours.', color:'#F87050' },
              { icon:'🌧', t:'Weather & Force Majeure', b:'Coastal fog at Pebble Beach, desert flash floods in Las Vegas, Sierra snowstorms at Lake Tahoe — golf trips are weather-dependent. Course closure coverage protects against acts of nature.', color:'#98D060' },
              { icon:'💼', t:'Lost Clubs & Luggage', b:'Traveling with $3,000 custom clubs and a week\'s worth of golf gear? Baggage coverage reimburses for lost, stolen, or damaged equipment. Golf-specific policies cover clubs up to $3,000 per set.', color:'#B89860' },
            ].map(s => (
              <div key={s.t} style={{ padding:'24px', background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${s.color}55` }}>
                <div style={{ fontSize:22, marginBottom:10 }}>{s.icon}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'var(--cream)', marginBottom:10 }}>{s.t}</div>
                <div style={{ fontSize:13, lineHeight:1.8, color:'rgba(245,237,216,0.48)' }}>{s.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'var(--parchment)', padding:'clamp(48px,6vw,72px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:760 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,4vw,44px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, marginBottom:20, letterSpacing:'-0.02em' }}>
            Our 72-hour cancellation policy
          </h2>
          <p style={{ fontSize:15, lineHeight:1.88, color:'rgba(26,20,8,0.62)', marginBottom:16 }}>
            Zoomaway provides a 72-hour cancellation window on most services. For large group outings, a separate contract governs cancellation terms specific to your booking. For certain vendors (courses, hotels) we pass on the vendor&apos;s own cancellation policy directly to you.
          </p>
          <p style={{ fontSize:15, lineHeight:1.88, color:'rgba(26,20,8,0.62)', marginBottom:24 }}>
            Travel insurance provides protection beyond the 72-hour window for covered reasons — illness, injury, weather events, and other qualifying circumstances. We strongly recommend insurance for any trip with non-refundable deposits over $500/person.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span style={{color:'#120C04'}}>Ask About Coverage</span></Link>
            <Link href="/cancellation-policy/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(26,20,8,0.5)', textDecoration:'none', padding:'14px 0', alignSelf:'center' }}>Read Our Cancellation Policy →</Link>
          </div>
        </div>
      </section>

      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Insurance by Destination</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'Sierra weather · Elevation access · From $275/person packages' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250/round deposits · MGM hotel blocks' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Coastal fog · $675/round Pebble deposits · 18-month lead time' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'$2,950/person packages · Year-round weather generally mild' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Private access deposits · Reno NV' },
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
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'What insurance protects' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Group blocks to insure' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'All-inclusive packages' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Trip logistics covered' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Event deposits protected' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/', sub:'Collect insurance confirmation' },
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
