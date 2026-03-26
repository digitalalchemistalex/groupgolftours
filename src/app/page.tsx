import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ServiceAccordion from '@/components/ServiceAccordion'

export const metadata: Metadata = {
  title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe | From $275/person',
  description: 'Custom group golf packages since 2005. Pebble Beach, Shadow Creek, Lake Tahoe, Las Vegas, Southern California. Tee times, hotels, transport all handled. 10,000+ outings.',
  alternates: { canonical: 'https://www.groupgolftours.com/' },
  openGraph: { title: 'Group Golf Tours — Premier Group Golf Travel', description: 'Custom group golf packages since 2005. 10,000+ outings.', url: 'https://www.groupgolftours.com/', type: 'website' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'TravelAgency', '@id': 'https://www.groupgolftours.com/#organization', name: 'Group Golf Tours', alternateName: ['Vacations on the Green', 'Prestige Golf'], url: 'https://www.groupgolftours.com', telephone: '+1-888-584-8232', email: 'customerservice@zoomaway.com', foundingDate: '2005', address: { '@type': 'PostalAddress', streetAddress: '3010 LBJ Freeway, Suite 1550', addressLocality: 'Dallas', addressRegion: 'TX', postalCode: '75234', addressCountry: 'US' } },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'How far in advance should a golf group book Pebble Beach?', acceptedAnswer: { '@type': 'Answer', text: 'Golf groups should book Pebble Beach 12 to 18 months in advance. Resort guests get priority tee time access. Group Golf Tours coordinates hotel stays and tee times simultaneously.' } },
      { '@type': 'Question', name: 'How much does Shadow Creek cost per round?', acceptedAnswer: { '@type': 'Answer', text: 'Shadow Creek costs $1,250 per player. MGM Resort hotel guests only, Monday through Thursday. Includes private limo and personal caddie.' } },
    ]},
  ],
}

const destinations = [
  { name: 'Monterey & Pebble Beach', sub: 'California Coast', href: '/portfolio-item/monterey-and-pebble-beach/', stat: '$675', statNote: 'per round', note: 'Pebble Beach Golf Links', img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=90', accent: '#3EC99E', pills: ['6× US Open', '18-Month Advance', '#1 Public Course'] },
  { name: 'Lake Tahoe & Northern Nevada', sub: 'Sierra Nevada · 6,200 ft', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', stat: '$275', statNote: 'from / person', note: 'Reno casino packages', img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=90', accent: '#5BAADF', pills: ['6,200 ft Elevation', 'Casino Hotels', 'Golf Digest Top 100'] },
  { name: 'Las Vegas & Southern Nevada', sub: 'Desert Southwest', href: '/portfolio-item/las-vegas-and-southern-nevada/', stat: '$1,250', statNote: 'per round', note: 'Shadow Creek · limo + caddie', img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&q=90', accent: '#E6BE2A', pills: ['Limo + Caddie', 'MGM Guests Only', 'Mon–Thu Only'] },
  { name: 'Southern California', sub: 'Year-Round Golf', href: '/portfolio-item/monterey-and-pebble-beach-2/', stat: '$2,950', statNote: 'per person', note: 'Torrey Pines · PGA West', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=90', accent: '#E07040', pills: ['2× US Open Host', '365 Days/Year', 'Non-Resident Access'] },
  { name: 'Somersett Golf & CC', sub: 'Private Club · Reno NV', href: '/portfolio-item/somersett-golf-country-club/', stat: '$540', statNote: 'from / person', note: 'Golfweek Top Private', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90', accent: '#72BE3E', pills: ['Golfweek Top Ranked', 'Best of Reno 2021', '5,200 ft'] },
]

const problems = [
  { icon: '🔐', title: 'Pebble Beach shuts groups out', body: 'Without a resort stay you can only book 24 hours in advance. We coordinate hotel and tee times together — giving your group the 18-month window.', course: 'Pebble Beach Golf Links', price: '$675 / round', accent: '#3EC99E' },
  { icon: '🎰', title: 'Shadow Creek is MGM-only', body: 'Available to MGM hotel guests, Mon–Thu only. Most groups find out after booking flights. We package the MGM stay with tee times, limo, and caddie.', course: 'Shadow Creek · Las Vegas', price: '$1,250 / round', accent: '#E6BE2A' },
  { icon: '🏨', title: 'Room blocks vanish fast', body: 'Late-booking groups get split across three hotels. We hold your block the day you inquire — Atlantis, Peppermill, MGM, The Lodge. Your group stays together.', course: 'All Destinations', price: 'Group rates', accent: '#5BAADF' },
  { icon: '💰', title: 'Retail pricing kills budgets', body: 'Corporate groups paying full rate for 30+ tee times burn through budget in round one. Volume relationships mean group rates on everything.', course: 'Corporate Events', price: 'Volume pricing', accent: '#E07040' },
  { icon: '⏱', title: 'Planning takes 40+ hours', body: 'Hotels. Tee times. Transport. Dining. One call, one itinerary. We handle every element simultaneously. You show up and play.', course: 'All Trip Types', price: 'One call', accent: '#72BE3E' },
  { icon: '🛡', title: 'One cancellation cascades', body: '72-hour free cancellation, travel insurance options, and 20 years of backup relationships. Every scenario handled before it becomes your problem.', course: 'All Bookings', price: '72-hr policy', accent: '#D4886A' },
]

const steps = [
  { n: '01', title: 'Tell us your trip', body: 'Destination, group size, dates, budget. One conversation or our online form. Leave blanks — we fill them based on 20 years of experience.', accent: '#3EC99E' },
  { n: '02', title: 'We build the itinerary', body: 'Tee times, hotel blocks, transport, dining, insurance — coordinated simultaneously. Hotel and tee times secured on the same call.', accent: '#5BAADF' },
  { n: '03', title: 'You approve, we book', body: 'Review every element. Adjustments until perfect. No payment until satisfied. No surprises. What you approve is what you pay.', accent: '#E6BE2A' },
  { n: '04', title: 'Everyone just plays', body: 'Each player pays through our online system. One dashboard. Zero spreadsheets. Zero chasing payments. You\'re just another golfer.', accent: '#72BE3E' },
]

const testimonials = [
  { quote: "Best course conditions I have played all year. Driving range and putting range as well. Couldn't have asked for more.", name: 'Marcus Barrett', detail: 'Somersett Golf & CC · Google Review ★★★★★' },
  { quote: "Great course — one of the most challenging in the area. Always in excellent condition with fast greens and perfect fairways.", name: 'Michael Jory', detail: 'Somersett Golf & CC · Google Review ★★★★★' },
  { quote: "The view is top-notch and the staff are all excellent. Dinner menu is good with steaks, seafood and pasta. The view is worth it alone.", name: 'Beau Bennett', detail: 'Somersett Golf & CC · Google Review ★★★★★' },
]

const services = [
  { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', note:'Priority access at 200+ courses. Resort tee times groups can\'t book independently.' },
  { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', note:'Group room blocks at casino resorts, MGM properties, The Lodge at Pebble Beach.' },
  { icon:'🚌', label:'Transportation', href:'/transportation/', note:'Airport transfers, hotel-to-course shuttles, private vehicles.' },
  { icon:'🍽', label:'Dining Events', href:'/dining-events-and-arrangements/', note:'Group dining at award-winning restaurants, pre-arranged before arrival.' },
  { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', note:'72-hour free cancellation. Trip protection against cancellations and weather.' },
  { icon:'📋', label:'Tour Packages', href:'/tour-packages/', note:'All-inclusive from $275/person. Tee times + hotel + transport bundled.' },
  { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', note:'Scenic tours, local attractions, spa. For non-golfers in the group.' },
  { icon:'✅', label:'Online Registration', href:'/online-registration-system/', note:'Each player pays individually. Zero spreadsheets, zero chasing.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <style>{`
        /* ── SCROLL REVEAL ── */
        .sr{opacity:0;transform:translateY(16px);transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1)}
        .sr.on{opacity:1;transform:none}
        .d1{transition-delay:.06s}.d2{transition-delay:.12s}.d3{transition-delay:.18s}
        .d4{transition-delay:.24s}.d5{transition-delay:.30s}.d6{transition-delay:.36s}

        /* ── SECTION LABELS ── */
        .sec-label{font-family:var(--sans);font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--copper)}
        .sec-rule{width:36px;height:2px;background:var(--copper);margin:12px 0 20px}
        .sec-h{font-family:var(--serif);font-size:clamp(28px,4vw,50px);font-weight:300;line-height:1.02;letter-spacing:-.02em;color:#1A1408;margin:0}
        .sec-h em{font-style:italic;color:rgba(26,20,8,.35)}
        .sec-label-lt{font-family:var(--sans);font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:rgba(212,168,50,.8)}
        .sec-rule-lt{width:36px;height:2px;background:rgba(212,168,50,.5);margin:12px 0 20px}
        .sec-h-lt{font-family:var(--serif);font-size:clamp(28px,4vw,50px);font-weight:300;line-height:1.02;letter-spacing:-.02em;color:#fff;margin:0}
        .sec-h-lt em{font-style:italic;color:rgba(255,255,255,.45)}

        /* ── DESTINATION CARDS ── */
        .dc{position:relative;overflow:hidden;display:block;text-decoration:none;cursor:pointer;min-height:280px}
        .dc-img{transition:transform .85s cubic-bezier(.22,1,.36,1)}
        .dc:hover .dc-img{transform:scale(1.05)}
        .dc-arr{transition:transform .22s ease}
        .dc:hover .dc-arr{transform:translateX(5px)}

        /* ── PROBLEM CARDS ── */
        .pc{background:#fff;border:1px solid #E8E4DC;padding:28px 24px;transition:transform .25s ease,box-shadow .25s ease}
        .pc:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,.08)}

        /* ── TRIP TYPE CARDS ── */
        .tc{position:relative;overflow:hidden;display:block;text-decoration:none;min-height:380px;background:#111}
        .tc-img{transition:transform .85s cubic-bezier(.22,1,.36,1)}
        .tc:hover .tc-img{transform:scale(1.04)}
        .tc-arr{transition:transform .22s ease}
        .tc:hover .tc-arr{transform:translateX(5px)}

        /* ── SERVICE ROWS ── */
        .svc{display:flex;align-items:flex-start;gap:16px;padding:18px 22px;border-bottom:1px solid #EAE6DE;text-decoration:none;transition:background .18s,padding-left .18s}
        .svc:hover{background:#F0EBE1;padding-left:30px}
        .svc:last-child{border-bottom:none}

        /* ── MOBILE DEST STRIP ── */
        .dest-mob-strip{display:none;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:3px;padding-bottom:4px}
        .dest-mob-strip::-webkit-scrollbar{display:none}
        .dest-mob-card{flex:0 0 80vw;scroll-snap-align:start;position:relative;overflow:hidden;min-height:300px;display:block;text-decoration:none}

        /* ── MOBILE ACCORDION (services) ── */
        .acc-item{border-bottom:1px solid #EAE6DE}
        .acc-head{display:flex;align-items:center;gap:14px;padding:16px 0;cursor:pointer;background:transparent;border:none;width:100%;text-align:left}
        .acc-body{overflow:hidden;transition:max-height .35s cubic-bezier(.22,1,.36,1),opacity .35s ease;max-height:0;opacity:0}
        .acc-body.open{max-height:120px;opacity:1}
        .acc-chevron{transition:transform .3s;flex-shrink:0;margin-left:auto}
        .acc-item.open .acc-chevron{transform:rotate(180deg)}

        /* ── DESKTOP / MOBILE TOGGLES ── */
        .desk-only{display:block}
        .mob-only{display:none}

        /* ── STATS BAR ── */
        .stats-bar{display:grid;grid-template-columns:repeat(5,1fr)}

        @media(max-width:900px){
          /* Stats: hide on mobile — hero intel strip covers same data */
          .stats-mob-hide{display:none!important}

          /* Problem: show only top 1 card + link on mobile */
          .pc-mob-hide{display:none!important}
          .pc-mob-show{display:block!important}
          .prob-cta-mob{display:block!important}

          /* Destinations: hide grid, show scroll strip */
          .dest-grid-wrap{display:none!important}
          .dest-mob-strip{display:flex!important}

          /* How it works: 2 col on mobile */
          .steps-grid{grid-template-columns:1fr 1fr!important}

          /* Trip types: stacked full width */
          .trip-grid{grid-template-columns:1fr!important}
          .tc{min-height:280px!important}

          /* Services: accordion on mobile, hide list */
          .svc-grid{display:none!important}
          .svc-accordion{display:block!important}

          /* CTA: phone number bigger on mobile */
          .cta-phone{font-size:18px!important;padding:18px 24px!important}

          .desk-only{display:none!important}
          .mob-only{display:block!important}
        }
        @media(max-width:540px){
          .steps-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ─── 1. HERO SLIDER — unchanged ─── */}
      <HeroSlider />

      {/* ─── 2. STATS BAR — desktop only (mobile has hero intel strip) ─── */}
      <div className="stats-mob-hide" style={{ background:'#1A1408', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
        <div className="wrap stats-bar">
          {[{n:'20+',l:'Years in Business'},{n:'10,000+',l:'Outings Planned'},{n:'$275',l:'Packages From'},{n:'200+',l:'Courses'},{n:'NV + FL',l:'Licensed Seller of Travel'}].map((s,i) => (
            <div key={s.n} style={{ padding:'clamp(18px,3vw,30px) clamp(12px,2vw,20px)', borderLeft:i>0?'1px solid rgba(255,255,255,.08)':'none', textAlign:'center' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,3vw,40px)', fontWeight:300, color:'#D4A832', lineHeight:1 }}>{s.n}</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginTop:6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. PROBLEM / VALUE PROP ───
          DESKTOP: 3-col grid of all 6 cards — authority, density, comparison
          MOBILE:  Single most urgent card (Pebble Beach) + bold CTA — one punch, one action
      ─── */}
      <section style={{ background:'#F7F3EC', padding:'clamp(56px,8vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:40 }}>
            <div className="sec-label">Why Groups Use Us</div>
            <div className="sec-rule" />
            <h2 className="sec-h" style={{ maxWidth:560 }}>
              The courses you want<br />
              <em>groups can&apos;t book alone.</em>
            </h2>
          </div>

          {/* DESKTOP: all 6 cards */}
          <div className="desk-only" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {problems.map((item, i) => (
              <div key={i} className={`pc sr d${(i%3)+1}`}>
                <div style={{ fontSize:24, marginBottom:14 }}>{item.icon}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:15, fontWeight:700, color:'#1A1408', marginBottom:10, lineHeight:1.3 }}>{item.title}</h3>
                <p style={{ fontSize:13, lineHeight:1.8, color:'rgba(26,20,8,.62)', marginBottom:18 }}>{item.body}</p>
                <div style={{ borderTop:'1px solid #E8E4DC', paddingTop:12, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, color:'rgba(26,20,8,.4)', letterSpacing:'.06em' }}>{item.course}</span>
                  <span style={{ fontFamily:'var(--serif)', fontSize:17, color:item.accent, fontWeight:300 }}>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="desk-only sr" style={{ marginTop:36, textAlign:'center' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Fix This For My Group</span></Link>
          </div>

          {/* MOBILE: hero problem card + 5 text rows + single CTA */}
          <div className="mob-only">
            {/* Lead card — most urgent problem */}
            <div className="pc" style={{ marginBottom:3, borderLeft:`3px solid ${problems[0].accent}` }}>
              <div style={{ fontSize:28, marginBottom:12 }}>{problems[0].icon}</div>
              <h3 style={{ fontFamily:'var(--sans)', fontSize:18, fontWeight:700, color:'#1A1408', marginBottom:10 }}>{problems[0].title}</h3>
              <p style={{ fontSize:15, lineHeight:1.8, color:'rgba(26,20,8,.65)', marginBottom:16 }}>{problems[0].body}</p>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid #E8E4DC', paddingTop:12 }}>
                <span style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(26,20,8,.4)' }}>{problems[0].course}</span>
                <span style={{ fontFamily:'var(--serif)', fontSize:20, color:problems[0].accent }}>{problems[0].price}</span>
              </div>
            </div>
            {/* Other 5 as compact text rows */}
            <div style={{ background:'#fff', border:'1px solid #E8E4DC', marginBottom:20 }}>
              {problems.slice(1).map((item, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 16px', borderBottom: i < 4 ? '1px solid #EAE6DE' : 'none' }}>
                  <span style={{ fontSize:16, flexShrink:0 }}>{item.icon}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408' }}>{item.title}</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:14, color:item.accent, marginTop:1 }}>{item.price}</div>
                  </div>
                  <span style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(26,20,8,.3)' }}>→</span>
                </div>
              ))}
            </div>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ display:'block', textAlign:'center', width:'100%' }}><span>Fix This For My Group</span></Link>
          </div>
        </div>
      </section>

      {/* ─── 4. DESTINATIONS ───
          DESKTOP: Pebble featured large + grid — visual authority, price anchoring
          MOBILE:  Horizontal scroll strip, 80vw cards — swipeable discovery
      ─── */}
      <section style={{ background:'#1A1408', padding:'clamp(56px,8vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:36 }}>
            <div className="sec-label-lt">Where We Play</div>
            <div className="sec-rule-lt" />
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
              <h2 className="sec-h-lt">Five destinations.<br /><em>Five distinct worlds.</em></h2>
              <Link href="/destinations/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(212,168,50,.75)', textDecoration:'none' }}>All destinations →</Link>
            </div>
          </div>

          {/* DESKTOP: editorial grid */}
          <div className="dest-grid-wrap">
            <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:3, marginBottom:3 }}>
              <Link href={destinations[0].href} className="dc" style={{ background:'#0D1A14', minHeight:460, position:'relative' }}>
                <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[0].img})`, backgroundSize:'cover', backgroundPosition:'center 28%' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 40%, rgba(0,0,0,.85) 100%)' }} />
                <div style={{ position:'absolute', top:20, left:20, display:'flex', flexDirection:'column', gap:5 }}>
                  {destinations[0].pills.map(p => (
                    <span key={p} style={{ background:'rgba(0,0,0,.6)', backdropFilter:'blur(8px)', border:'1px solid rgba(62,201,158,.3)', padding:'4px 10px', fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#3EC99E', display:'inline-block' }}>{p}</span>
                  ))}
                </div>
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'0 28px 28px' }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(62,201,158,.7)', marginBottom:6 }}>{destinations[0].sub}</div>
                  <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
                    <div>
                      <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(44px,5.5vw,80px)', fontWeight:300, color:'#3EC99E', lineHeight:.9, marginBottom:6 }}>{destinations[0].stat}</div>
                      <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.55)', marginBottom:4 }}>{destinations[0].statNote} · {destinations[0].note}</div>
                      <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,26px)', fontWeight:300, color:'#fff' }}>{destinations[0].name}</div>
                    </div>
                    <span className="dc-arr" style={{ color:'#3EC99E', fontSize:22, paddingBottom:4 }}>→</span>
                  </div>
                </div>
              </Link>
              <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:3 }}>
                {[destinations[1], destinations[2]].map(d => (
                  <Link key={d.href} href={d.href} className="dc" style={{ background:'#111', minHeight:220, position:'relative' }}>
                    <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.82))' }} />
                    <div style={{ position:'absolute', top:14, right:14 }}>
                      <span style={{ background:'rgba(0,0,0,.6)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,.15)', padding:'3px 8px', fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.75)' }}>{d.pills[0]}</span>
                    </div>
                    <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'16px 20px' }}>
                      <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:4 }}>{d.sub}</div>
                      <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(16px,1.8vw,22px)', fontWeight:300, color:'#fff', marginBottom:6 }}>{d.name}</div>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <div><span style={{ fontFamily:'var(--serif)', fontSize:22, color:d.accent }}>{d.stat}</span><span style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.45)', marginLeft:8 }}>{d.statNote}</span></div>
                        <span className="dc-arr" style={{ color:'rgba(255,255,255,.6)', fontSize:16 }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
              {[destinations[3], destinations[4]].map(d => (
                <Link key={d.href} href={d.href} className="dc" style={{ background:'#111', minHeight:240, position:'relative' }}>
                  <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.82))' }} />
                  <div style={{ position:'absolute', top:16, left:16, display:'flex', gap:5, flexWrap:'wrap' }}>
                    {d.pills.slice(0,2).map(p => (
                      <span key={p} style={{ background:'rgba(0,0,0,.6)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,.15)', padding:'3px 8px', fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.75)' }}>{p}</span>
                    ))}
                  </div>
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'20px 24px' }}>
                    <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:4 }}>{d.sub}</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,26px)', fontWeight:300, color:'#fff', marginBottom:6 }}>{d.name}</div>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <div><span style={{ fontFamily:'var(--serif)', fontSize:24, color:d.accent }}>{d.stat}</span><span style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.45)', marginLeft:8 }}>{d.statNote} · {d.note}</span></div>
                      <span className="dc-arr" style={{ color:'rgba(255,255,255,.5)', fontSize:16 }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE: swipeable 80vw cards */}
          <div className="dest-mob-strip">
            {destinations.map(d => (
              <Link key={d.href} href={d.href} className="dest-mob-card" style={{ background:'#111' }}>
                <div style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center', transition:'transform .85s cubic-bezier(.22,1,.36,1)' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.05) 0%, rgba(0,0,0,.85) 100%)' }} />
                <div style={{ position:'absolute', top:16, left:16, display:'flex', gap:5, flexWrap:'wrap' }}>
                  {d.pills.slice(0,2).map(p => (
                    <span key={p} style={{ background:'rgba(0,0,0,.65)', backdropFilter:'blur(8px)', border:`1px solid rgba(255,255,255,.15)`, padding:'4px 10px', fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.8)' }}>{p}</span>
                  ))}
                </div>
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'20px 20px' }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:`rgba(${d.accent.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')},0.75)`, marginBottom:5 }}>{d.sub}</div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:26, fontWeight:300, color:'#fff', marginBottom:4, lineHeight:1.1 }}>{d.name}</div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div>
                      <span style={{ fontFamily:'var(--serif)', fontSize:28, color:d.accent, fontWeight:300 }}>{d.stat}</span>
                      <span style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.5)', marginLeft:8 }}>{d.statNote}</span>
                    </div>
                    <span style={{ color:'rgba(255,255,255,.5)', fontSize:18 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. HOW IT WORKS ───
          DESKTOP: 4-col cards — shows full process at a glance, reassuring
          MOBILE:  Numbered vertical timeline — scannable, clear sequence
      ─── */}
      <section style={{ background:'#fff', padding:'clamp(56px,8vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:40 }}>
            <div className="sec-label">The Process</div>
            <div className="sec-rule" />
            <h2 className="sec-h">One call.<br /><em>Everything handled.</em></h2>
          </div>

          {/* DESKTOP: 4 cards */}
          <div className="desk-only steps-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:3 }}>
            {steps.map((step, i) => (
              <div key={step.n} className={`sr d${i+1}`} style={{ padding:'28px 24px', background:'#F7F3EC' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:48, fontWeight:300, color:step.accent, lineHeight:1, marginBottom:14, opacity:.6 }}>{step.n}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:15, fontWeight:700, color:'#1A1408', marginBottom:10, lineHeight:1.3 }}>{step.title}</h3>
                <p style={{ fontSize:13, lineHeight:1.82, color:'rgba(26,20,8,.6)' }}>{step.body}</p>
              </div>
            ))}
          </div>

          {/* MOBILE: compact timeline */}
          <div className="mob-only" style={{ marginBottom:28 }}>
            {steps.map((step, i) => (
              <div key={step.n} style={{ display:'flex', gap:16, paddingBottom: i < steps.length-1 ? 24 : 0, marginBottom: i < steps.length-1 ? 0 : 0, position:'relative' }}>
                {/* Line connector */}
                {i < steps.length - 1 && (
                  <div style={{ position:'absolute', left:18, top:40, bottom:0, width:1, background:'#E8E4DC' }} />
                )}
                {/* Number circle */}
                <div style={{ width:36, height:36, borderRadius:'50%', background:step.accent, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, zIndex:1 }}>
                  <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, color:'#050A05' }}>{step.n}</span>
                </div>
                <div style={{ paddingTop:6, flex:1 }}>
                  <h3 style={{ fontFamily:'var(--sans)', fontSize:15, fontWeight:700, color:'#1A1408', marginBottom:6 }}>{step.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.75, color:'rgba(26,20,8,.58)' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sr" style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Start the Process</span></Link>
            <Link href="/how-we-do-it/" style={{ display:'inline-flex', alignItems:'center', padding:'14px 24px', border:'1px solid rgba(26,20,8,.2)', color:'#1A1408', textDecoration:'none', fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase' }}>Full Process →</Link>
          </div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS — carousel on mobile (component handles both) ─── */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* ─── 7. TRIP TYPES ───
          DESKTOP: 2-col full-height photo cards — visual impact, clear choice
          MOBILE:  Stacked full-width, 280px each — touch-friendly, CTA visible
      ─── */}
      <section style={{ background:'#1A1408', padding:'clamp(56px,8vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:36 }}>
            <div className="sec-label-lt">Who We Plan For</div>
            <div className="sec-rule-lt" />
            <h2 className="sec-h-lt">Every kind of group.</h2>
          </div>
          <div className="trip-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {[
              { title:'Golf Buddy Trips', href:'/golf-buddy-trips/', sub:'4–24 Players', desc:'The trip your group has talked about for years. Tee times at courses you can\'t book independently. Hotel blocks held. Transport arranged. You just play.', img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=88', cta:'Plan a Buddy Trip', pills:['Groups 4–24','All Destinations','Flexible Budget'] },
              { title:'Corporate & Incentive', href:'/corporate-and-incentive-golf-travel/', sub:'20–200 Players', desc:'Your top performers deserve Pebble Beach — not the local muni. Events people fight to earn an invitation back to. Group rates, premium access, full logistics.', img:'https://images.unsplash.com/photo-1592919505780-303950717480?w=900&q=88', cta:'Plan a Corporate Event', pills:['Groups 20–200','Premium Access','Full Logistics'] },
            ].map(t => (
              <Link key={t.href} href={t.href} className="tc" style={{ textDecoration:'none', position:'relative' }}>
                <div className="tc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${t.img})`, backgroundSize:'cover', backgroundPosition:'center', opacity:.75 }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.82))' }} />
                <div style={{ position:'relative', zIndex:1, padding:'clamp(22px,4vw,48px)', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                  <div style={{ display:'flex', gap:6, marginBottom:14, flexWrap:'wrap' }}>
                    {t.pills.map(p => (
                      <span key={p} style={{ background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', padding:'4px 10px', fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.85)' }}>{p}</span>
                    ))}
                  </div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:7 }}>{t.sub}</div>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(20px,2.5vw,34px)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:12 }}>{t.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.75, color:'rgba(255,255,255,.62)', marginBottom:18, maxWidth:400 }}>{t.desc}</p>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#D4A832' }}>
                    {t.cta} <span className="tc-arr">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. SERVICES ───
          DESKTOP: 2-col list — scannable, comprehensive, credibility
          MOBILE:  Accordion — compact, tap to expand, no wall of text
      ─── */}
      <section style={{ background:'#fff', padding:'clamp(56px,7vw,88px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:28 }}>
            <div className="sec-label">Every Detail Handled</div>
            <div className="sec-rule" />
            <h2 className="sec-h" style={{ maxWidth:480 }}>We coordinate everything<br /><em>so you don&apos;t have to.</em></h2>
          </div>

          {/* DESKTOP: 2-col list */}
          <div className="svc-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', border:'1px solid #E8E4DC' }}>
            {services.map(s => (
              <Link key={s.href} href={s.href} className="svc">
                <span style={{ fontSize:20, flexShrink:0, opacity:.7, marginTop:1 }}>{s.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'#1A1408', marginBottom:3 }}>{s.label}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, color:'rgba(26,20,8,.55)', lineHeight:1.5 }}>{s.note}</div>
                </div>
                <span style={{ color:'var(--copper)', fontSize:14, flexShrink:0, opacity:.6, marginTop:2 }}>→</span>
              </Link>
            ))}
          </div>

          {/* MOBILE: accordion */}
          <div className="svc-accordion" style={{ display:'none' }}>
            <ServiceAccordion services={services} />
          </div>
        </div>
      </section>

      {/* ─── 9. FINAL CTA ───
          DESKTOP: centered editorial — text + two buttons
          MOBILE:  Phone number LARGE + primary button — action-first
      ─── */}
      <section style={{ background:'#0A1208', padding:'clamp(72px,11vw,140px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=60')", backgroundSize:'cover', backgroundPosition:'center', opacity:.06 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,18,8,.5), rgba(10,18,8,.97))' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:620, margin:'0 auto' }}>
          <div className="sec-label-lt" style={{ display:'inline-block' }}>No Obligation · Free Quote Within 24 Hours</div>
          <div className="sec-rule-lt" style={{ margin:'14px auto 28px' }} />
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,6vw,72px)', fontWeight:300, color:'#fff', lineHeight:.93, marginBottom:20, letterSpacing:'-.025em' }}>
            Tell us where.<br />
            <em style={{ fontStyle:'italic', color:'#D4A832' }}>We&apos;ll handle the rest.</em>
          </h2>
          <p className="desk-only" style={{ fontSize:16, lineHeight:1.85, color:'rgba(255,255,255,.55)', marginBottom:36, fontWeight:300 }}>
            Two minutes. Destination, group size, budget. A specialist calls back with a full itinerary — tee times, hotel, transport, dining, everything.
          </p>

          {/* DESKTOP buttons */}
          <div className="desk-only" style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:28 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'16px 48px', fontSize:12 }}><span>Start Planning Now</span></Link>
            <a href="tel:8885848232" className="cta-phone" style={{ display:'inline-flex', alignItems:'center', padding:'16px 28px', border:'1px solid rgba(255,255,255,.25)', color:'rgba(255,255,255,.8)', textDecoration:'none', fontFamily:'var(--sans)', fontSize:14, fontWeight:500 }}>Call 888-584-8232</a>
          </div>

          {/* MOBILE: phone first, then plan */}
          <div className="mob-only" style={{ marginBottom:20 }}>
            <a href="tel:8885848232" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, padding:'18px 24px', background:'#D4A832', color:'#060804', fontFamily:'var(--sans)', fontSize:20, fontWeight:700, letterSpacing:'.03em', textDecoration:'none', marginBottom:10, width:'100%' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 3.5A1.5 1.5 0 013.5 2h1.379a1.5 1.5 0 011.418 1.016l.956 2.867a1.5 1.5 0 01-.344 1.547l-.85.85A11.03 11.03 0 0010 11.94l.85-.85a1.5 1.5 0 011.547-.344l2.867.956A1.5 1.5 0 0116.5 13.121V14.5A1.5 1.5 0 0115 16C7.82 16 2 10.18 2 3.5 2 4.5 2 3.5 2 3.5z" stroke="#060804" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              888-584-8232
            </a>
            <Link href="/tour-inquiry/" className="btn btn-ghost" style={{ display:'block', textAlign:'center', width:'100%', padding:'15px', fontSize:12 }}><span>Or fill out our inquiry form</span></Link>
          </div>

          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'4px 20px' }}>
            {['20+ years in business','Licensed NV & FL (ST37472)','10,000+ outings planned','Groups 4–200+'].map(t => (
              <span key={t} style={{ fontSize:11, color:'rgba(255,255,255,.3)', letterSpacing:'.05em' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `(function(){var io=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.1});document.querySelectorAll('.sr').forEach(function(e){io.observe(e)})})()` }} />
    </>
  )
}
