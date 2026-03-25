import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Sightseeing & Non-Golf Activities for Golf Groups | Group Golf Tours',
  description: 'Non-golf activities for golf groups and their partners: 17-Mile Drive, Red Rock Canyon, Hoover Dam, whale watching, wine tasting, Disneyland. We arrange it alongside your golf itinerary.',
  alternates: { canonical: 'https://www.groupgolftours.com/site-seeing-and-non-golf-activities/' },
}
export default function Sightseeing() {
  const byRegion = [
    { r:'Monterey & Pebble Beach', c:'#5ED8C8', href:'/portfolio-item/monterey-and-pebble-beach/', items:['17-Mile Drive self-guided tour','Monterey Bay Aquarium (world-class)','Carmel-by-the-Sea wine tasting','Big Sur coastal drive','Point Lobos State Reserve hike','Old Fisherman\'s Wharf seafood lunch','Cannery Row & Pacific Grove walk'] },
    { r:'Las Vegas & Southern Nevada', c:'#F8C030', href:'/portfolio-item/las-vegas-and-southern-nevada/', items:['Red Rock Canyon scenic drive','Valley of Fire State Park','Hoover Dam guided tour','Lake Mead boat tour','The Neon Museum walking tour','Grand Canyon day trip (4 hours)','Bellagio Conservatory & Botanical Gardens'] },
    { r:'Lake Tahoe & Northern Nevada', c:'#80C8F0', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', items:['Emerald Bay kayaking','Sand Harbor beach day','Virginia City historic town','Pyramid Lake scenic drive','Mt. Rose ski/hike day trip','Reno River Walk','Lake Tahoe sunset boat cruise'] },
    { r:'Southern California', c:'#F87050', href:'/portfolio-item/monterey-and-pebble-beach-2/', items:['Torrey Pines State Reserve trail','La Jolla Cove snorkeling/seals','Disneyland Resort (Anaheim)','Balboa Park & San Diego Zoo','Getty Center (free admission)','Newport Beach boat tour','Joshua Tree National Park day trip'] },
  ]
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Services · Sightseeing & Activities</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            Beyond the greens.<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>No clubs required.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:580, marginBottom:36, fontWeight:300 }}>
            Not every person in your group plays golf. Spouses, partners, and non-golfer friends need a full itinerary too — or they won&apos;t come back next year. We build the non-golf day trips, excursions, and activities into your itinerary alongside tee times, so everyone in your group has an unforgettable reason to be there.
          </p>
          <Link href="/tour-inquiry/" className="btn btn-gold"><span>Add Activities to Your Trip</span></Link>
        </div>
      </section>

      <section style={{ background:'#0A0C0A', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Activities by Destination</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:32 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:2 }}>
            {byRegion.map(r => (
              <Link key={r.r} href={r.href} style={{ textDecoration:'none', display:'block', padding:'22px 24px', background:'rgba(255,255,255,0.025)', borderLeft:`3px solid ${r.c}55`, transition:'all 0.2s' }} className="cc">
                <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:r.c, opacity:0.8, marginBottom:12 }}>{r.r}</div>
                {r.items.map(i => <div key={i} style={{ fontSize:12, color:'rgba(245,237,216,0.58)', lineHeight:2.0 }}>· {i}</div>)}
              </Link>
            ))}
          </div>
          <style>{`.cc{transition:all 0.22s}.cc:hover{transform:translateY(-2px)}`}</style>
        </div>
      </section>

      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Explore the Destinations</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'17-Mile Drive · Aquarium · Big Sur · Carmel' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Red Rock · Hoover Dam · Valley of Fire · Grand Canyon' },
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'Emerald Bay · Virginia City · Sand Harbor' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'La Jolla · Disneyland · Balboa Park · Joshua Tree' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Reno dining · Virginia City · Lake Tahoe day trip' },
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
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>Bundle with Golf</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'The golf days' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Base for both golf and activities' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', sub:'Excursion transport arranged' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Evening after the excursion' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', sub:'Activities bundled in full packages' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', sub:'Excursion cancellation protection' },
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
