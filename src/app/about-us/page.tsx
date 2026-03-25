import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Group Golf Tours | 20+ Years, 10,000+ Outings | Zoomaway Technologies',
  description: 'Group Golf Tours has planned 10,000+ golf outings over 20+ years. A Zoomaway Technologies company, licensed seller of travel in Nevada and Florida. Our team: Mike Milligan and Mike Eskuchen.',
  alternates: { canonical: 'https://www.groupgolftours.com/about-us/' },
}

export default function AboutUs() {
  return (
    <>
      <section style={{ background:'#080C08', padding:'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom:'1px solid rgba(255,255,255,0.05)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 50% 60% at 20% 60%, rgba(200,121,65,0.06) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div className="section-wrap" style={{ maxWidth:'var(--max)', position:'relative', zIndex:1 }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Company</span>
          <div style={{ width:36, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
          <h1 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,80px)', fontWeight:300, color:'var(--cream)', lineHeight:0.95, letterSpacing:'-0.025em', marginBottom:24 }}>
            20+ years.<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>10,000+ outings.</em>
          </h1>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.62)', maxWidth:620, fontWeight:300 }}>
            Over two decades ago, as golf&apos;s popularity soared across the U.S. and internationally, we recognized an opportunity to help travelers plan unforgettable golf experiences. From iconic courses in Lake Tahoe and Northern Nevada to the breathtaking greens of Ireland and Scotland, we&apos;ve partnered with top golf courses, luxury hotels, and local tourism bureaus to make every destination accessible and extraordinary.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ background:'var(--parchment)', padding:'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth:820 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48 }}>
            <div>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(24px,3vw,38px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:20 }}>What we do</h2>
              <p style={{ fontSize:15, lineHeight:1.88, color:'rgba(26,20,8,0.6)', marginBottom:16 }}>
                We specialize in creating exceptional golf travel experiences for individuals and groups, offering tailored packages to some of the most sought-after destinations in the U.S. and internationally.
              </p>
              <p style={{ fontSize:15, lineHeight:1.88, color:'rgba(26,20,8,0.6)', marginBottom:24 }}>
                Our offerings include Las Vegas, Monterey, Pebble Beach, Southern California, and Arizona, along with hidden gems like Beaver Creek, Colorado and Sand Hills, Nebraska. For international adventures: Mexico, the Dominican Republic, Portugal, Spain, Ireland, and Scotland.
              </p>
              <Link href="/what-we-do/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--copper)', textDecoration:'none' }}>What We Do →</Link>
            </div>
            <div>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(24px,3vw,38px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:20 }}>Who we are</h2>
              <p style={{ fontSize:15, lineHeight:1.88, color:'rgba(26,20,8,0.6)', marginBottom:16 }}>
                Group Golf Tours is a brand of Zoomaway Technologies Inc., based in Dallas, Texas. We are a registered seller of travel in the State of Nevada and the State of Florida (Registration No. ST37472).
              </p>
              <p style={{ fontSize:15, lineHeight:1.88, color:'rgba(26,20,8,0.6)', marginBottom:24 }}>
                Through golf shows, online marketing, and dedicated customer service, we&apos;ve built a reputation as the go-to source for individual and group golf trips. Our team: Mike Milligan and Mike Eskuchen.
              </p>
              <Link href="/who-we-are/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--copper)', textDecoration:'none' }}>Who We Are →</Link>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, marginTop:52, paddingTop:36, borderTop:'1px solid rgba(26,20,8,0.1)' }}>
            {[
              { n:'20+', l:'Years in business' },
              { n:'10,000+', l:'Outings planned' },
              { n:'5', l:'Signature regions' },
              { n:'NV + FL', l:'Licensed seller of travel' },
            ].map(s => (
              <div key={s.n}>
                <div style={{ fontFamily:'var(--serif)', fontSize:34, color:'var(--copper)', lineHeight:1, marginBottom:6 }}>{s.n}</div>
                <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(26,20,8,0.4)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations we serve */}
      <section style={{ background:'#060A08', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)' }}>Where We Plan</span>
          <div style={{ width:36, height:1, background:'var(--gold)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:2 }}>
            {[
              { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'From $275/person · Sierra Nevada' },
              { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250/round' },
              { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Pebble Beach $675/round · Coast' },
              { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Torrey Pines $277–$345 · Year-Round' },
              { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Private Club · Reno NV' },
              { label:'All Destinations', href:'/destinations/', sub:'International: Ireland · Scotland · Portugal' },
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

      {/* Services */}
      <section style={{ background:'#0A0806', padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--copper)' }}>How We Help</span>
          <div style={{ width:36, height:1, background:'var(--copper)', marginTop:10, marginBottom:22 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:2 }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/' },
              { icon:'🚌', label:'Transportation', href:'/transportation/' },
              { icon:'🍽', label:'Dining & Events', href:'/dining-events-and-arrangements/' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/' },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ display:'flex', gap:10, padding:'12px 16px', background:'rgba(255,255,255,0.02)', textDecoration:'none', borderLeft:'2px solid transparent', transition:'all 0.18s', alignItems:'center' }} className="sxl">
                <span style={{ fontSize:15, opacity:0.7 }}>{s.icon}</span>
                <span style={{ fontFamily:'var(--sans)', fontSize:12, fontWeight:500, color:'rgba(245,237,216,0.62)' }}>{s.label}</span>
              </Link>
            ))}
          </div>
          <style>{`.sxl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--copper)!important}.sxl:hover span:last-child{color:var(--copper)!important}`}</style>
          <div style={{ marginTop:28 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Plan My Trip</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
