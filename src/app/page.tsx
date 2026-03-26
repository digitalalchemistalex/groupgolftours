import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import TestimonialCarousel from '@/components/TestimonialCarousel'

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
  { name: 'Monterey & Pebble Beach', sub: 'California Coast', href: '/portfolio-item/monterey-and-pebble-beach/', stat: '$675', statNote: 'per round', note: 'Pebble Beach Golf Links', img: 'https://images.unsplash.com/photo-1438012130798-5f6f12e72e9f?w=1200&q=90', accent: '#3EC99E', pills: ['6× US Open', '18-Month Advance', '#1 Public Course'] },
  { name: 'Lake Tahoe & Northern Nevada', sub: 'Sierra Nevada · 6,200 ft', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', stat: '$275', statNote: 'from / person', note: 'Reno casino packages', img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=90', accent: '#5BAADF', pills: ['6,200 ft Elevation', 'Casino Hotels', 'Golf Digest Top 100'] },
  { name: 'Las Vegas & Southern Nevada', sub: 'Desert Southwest', href: '/portfolio-item/las-vegas-and-southern-nevada/', stat: '$1,250', statNote: 'per round', note: 'Shadow Creek · limo + caddie', img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&q=90', accent: '#E6BE2A', pills: ['Limo + Caddie', 'MGM Guests Only', 'Mon–Thu Only'] },
  { name: 'Southern California', sub: 'Year-Round Golf', href: '/portfolio-item/monterey-and-pebble-beach-2/', stat: '$2,950', statNote: 'per person', note: 'Torrey Pines · PGA West', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=90', accent: '#E07040', pills: ['2× US Open Host', '365 Days/Year', 'Non-Resident Access'] },
  { name: 'Somersett Golf & CC', sub: 'Private Club · Reno NV', href: '/portfolio-item/somersett-golf-country-club/', stat: '$540', statNote: 'from / person', note: 'Golfweek Top Private', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90', accent: '#72BE3E', pills: ['Golfweek Top Ranked', 'Best of Reno 2021', '5,200 ft'] },
]

const problems = [
  { icon: '🔐', title: 'Pebble Beach shuts groups out', body: 'Without a resort stay you can only book 24 hours in advance. Every prime slot is taken. We coordinate your hotel and tee times together — giving your group the 18-month window.', course: 'Pebble Beach Golf Links', price: '$675 / round', accent: '#3EC99E' },
  { icon: '🎰', title: 'Shadow Creek is MGM-only', body: 'Available to MGM hotel guests, Monday through Thursday. Most groups find out after they\'ve already booked flights. We package the MGM stay with tee times, limo, and caddie.', course: 'Shadow Creek · Las Vegas', price: '$1,250 / round', accent: '#E6BE2A' },
  { icon: '🏨', title: 'Room blocks vanish fast', body: 'Late-booking groups get split across three hotels. We hold your block the day you inquire — at Atlantis, Peppermill, MGM, The Lodge at Pebble Beach. Your group stays together.', course: 'All Destinations', price: 'Group rates', accent: '#5BAADF' },
  { icon: '💰', title: 'Retail pricing kills budgets', body: 'Corporate groups paying full rate for 30+ tee times burn through budget before the first round. Twenty years of volume relationships mean group rates on everything.', course: 'Corporate Events', price: 'Volume pricing', accent: '#E07040' },
  { icon: '⏱', title: 'Planning takes 40+ hours', body: 'Hotels. Tee times. Transport. Dining. Deposits. One call, one itinerary. We handle every element simultaneously. You show up with your clubs and play.', course: 'All Trip Types', price: 'One call', accent: '#72BE3E' },
  { icon: '🛡', title: 'One cancellation cascades', body: 'Flights cancel, weather hits, a player gets sick. Everything falls apart at once. 72-hour free cancellation, travel insurance options, and 20 years of backup relationships.', course: 'All Bookings', price: '72-hr policy', accent: '#D4886A' },
]

const steps = [
  { n: '01', title: 'Tell us your trip', body: 'Destination, group size, dates, budget. One conversation or our online form. Leave blanks — we fill them based on 20 years matching groups to the right experience.', accent: '#3EC99E' },
  { n: '02', title: 'We build the itinerary', body: 'Tee times, hotel blocks, transport, dining, insurance — all coordinated simultaneously. Hotel and tee times secured on the same call. That\'s how resort access actually works.', accent: '#5BAADF' },
  { n: '03', title: 'You approve, we book', body: 'Review every element. Adjustments until it\'s exactly right. No payment until you\'re satisfied. No surprises, no hidden fees. What you approve is exactly what you pay.', accent: '#E6BE2A' },
  { n: '04', title: 'Everyone just shows up and plays', body: 'Each player registers and pays through our online system. You track everything from one dashboard. Zero spreadsheets, zero chasing payments. You\'re just another golfer.', accent: '#72BE3E' },
]

const testimonials = [
  { quote: "Best course conditions I have played all year. Driving range and putting range as well. Couldn't have asked for more.", name: 'Marcus Barrett', detail: 'Somersett Golf & CC · Google Review ★★★★★' },
  { quote: "Great course — one of the most challenging in the area. Always in excellent condition with fast greens and perfect fairways.", name: 'Michael Jory', detail: 'Somersett Golf & CC · Google Review ★★★★★' },
  { quote: "The view is top-notch and the staff are all excellent. Dinner menu is good with steaks, seafood and pasta. The view is worth it alone.", name: 'Beau Bennett', detail: 'Somersett Golf & CC · Google Review ★★★★★' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }

        /* Scroll reveal */
        .sr { opacity:0; transform:translateY(16px); transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1) }
        .sr.on { opacity:1; transform:none }
        .d1{transition-delay:.06s}.d2{transition-delay:.12s}.d3{transition-delay:.18s}
        .d4{transition-delay:.24s}.d5{transition-delay:.30s}.d6{transition-delay:.36s}

        /* Destination cards */
        .dc { position:relative; overflow:hidden; display:block; text-decoration:none; cursor:pointer; min-height:280px }
        .dc-img { transition:transform .85s cubic-bezier(.22,1,.36,1) }
        .dc:hover .dc-img { transform:scale(1.05) }
        .dc-arr { transition:transform .22s ease }
        .dc:hover .dc-arr { transform:translateX(5px) }

        /* Problem cards */
        .pc { background:#fff; border:1px solid #E8E4DC; padding:28px 24px; transition: transform .25s ease, box-shadow .25s ease }
        .pc:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(0,0,0,.08) }

        /* Step cards */
        .sc { padding:32px 28px; background:#F7F3EC; }

        /* Service rows */
        .svc { display:flex; align-items:flex-start; gap:16px; padding:18px 22px; border-bottom:1px solid #EAE6DE; text-decoration:none; transition:background .18s, padding-left .18s }
        .svc:hover { background:#F0EBE1; padding-left:30px; }
        .svc:last-child { border-bottom:none }

        /* Trip type cards */
        .tc { position:relative; overflow:hidden; display:block; text-decoration:none; min-height:380px; background:#111 }
        .tc-img { transition:transform .85s cubic-bezier(.22,1,.36,1) }
        .tc:hover .tc-img { transform:scale(1.04) }
        .tc-arr { transition:transform .22s ease }
        .tc:hover .tc-arr { transform:translateX(5px) }

        /* Section label */
        .sec-label { font-family:var(--sans); font-size:11px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--copper) }
        .sec-rule { width:36px; height:2px; background:var(--copper); margin:12px 0 20px }
        .sec-h { font-family:var(--serif); font-size:clamp(28px,4vw,50px); font-weight:300; line-height:1.02; letter-spacing:-.02em; color:#1A1408; margin:0 }
        .sec-h em { font-style:italic; color:rgba(26,20,8,.35) }

        /* Light section labels on dark bg */
        .sec-label-lt { font-family:var(--sans); font-size:11px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:rgba(212,168,50,.8) }
        .sec-rule-lt { width:36px; height:2px; background:rgba(212,168,50,.5); margin:12px 0 20px }
        .sec-h-lt { font-family:var(--serif); font-size:clamp(28px,4vw,50px); font-weight:300; line-height:1.02; letter-spacing:-.02em; color:#fff; margin:0 }
        .sec-h-lt em { font-style:italic; color:rgba(255,255,255,.45) }

        @media(max-width:900px) {
          .two-col { grid-template-columns:1fr !important }
          .three-col { grid-template-columns:1fr 1fr !important }
          .four-col { grid-template-columns:1fr 1fr !important }
          .dest-r { display:none !important }
          .dest-main { grid-template-columns:1fr !important }
          .dest-bot { grid-template-columns:1fr !important }
          .dest-main .dc { min-height:320px !important }
          .dest-bot .dc { min-height:260px !important }
          .stats-bar { grid-template-columns:1fr 1fr !important; gap:0 !important; max-width:100% !important; padding:0 !important }
        }
        @media(max-width:540px) {
          .three-col { grid-template-columns:1fr !important }
          .four-col { grid-template-columns:1fr !important }
        }
      `}</style>

      {/* ─── 1. HERO SLIDER ─── */}
      <HeroSlider />

      {/* ─── 2. STATS BAR ─── */}
      <div style={{ background:'#1A1408', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
        <div className="stats-bar" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)' }}>
          {[{n:'20+',l:'Years in Business'},{n:'10,000+',l:'Outings Planned'},{n:'$275',l:'Packages From'},{n:'200+',l:'Courses'},{n:'NV + FL',l:'Licensed Seller of Travel'}].map((s,i) => (
            <div key={s.n} style={{ padding:'clamp(18px,3vw,30px) clamp(12px,2vw,20px)', borderLeft:i>0?'1px solid rgba(255,255,255,.08)':'none', borderBottom:'1px solid rgba(255,255,255,.08)', textAlign:'center' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,3vw,40px)', fontWeight:300, color:'#D4A832', lineHeight:1 }}>{s.n}</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginTop:6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. PROBLEM / VALUE PROP ─── */}
      <section style={{ background:'#F7F3EC', padding:'clamp(72px,9vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:48 }}>
            <div className="sec-label">Why Groups Use Us</div>
            <div className="sec-rule" />
            <h2 className="sec-h" style={{ maxWidth:560 }}>
              The courses you want<br />
              <em>groups can&apos;t book alone.</em>
            </h2>
          </div>

          <div className="three-col" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {problems.map((item, i) => (
              <div key={i} className={`pc sr d${i+1}`}>
                <div style={{ fontSize:24, marginBottom:16 }}>{item.icon}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:16, fontWeight:700, color:'#1A1408', marginBottom:12, lineHeight:1.3 }}>{item.title}</h3>
                <p style={{ fontSize:14, lineHeight:1.8, color:'rgba(26,20,8,.62)', marginBottom:20 }}>{item.body}</p>
                <div style={{ borderTop:'1px solid #E8E4DC', paddingTop:14, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:600, color:'rgba(26,20,8,.45)', letterSpacing:'.06em' }}>{item.course}</span>
                  <span style={{ fontFamily:'var(--serif)', fontSize:18, color:item.accent, fontWeight:300 }}>{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sr" style={{ marginTop:40, textAlign:'center' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Fix This For My Group</span></Link>
          </div>
        </div>
      </section>

      {/* ─── 4. DESTINATIONS ─── */}
      <section style={{ background:'#1A1408', padding:'clamp(72px,9vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:40 }}>
            <div className="sec-label-lt">Where We Play</div>
            <div className="sec-rule-lt" />
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
              <h2 className="sec-h-lt">Five destinations.<br /><em>Five distinct worlds.</em></h2>
              <Link href="/destinations/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(212,168,50,.75)', textDecoration:'none' }}>All destinations →</Link>
            </div>
          </div>

          {/* Featured + right col */}
          <div className="dest-main" style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:3, marginBottom:3 }}>
            {/* Pebble — large featured */}
            <Link href={destinations[0].href} className="dc" style={{ background:'#0D1A14', minHeight:460, position:'relative' }}>
              <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[0].img})`, backgroundSize:'cover', backgroundPosition:'center 28%' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.15) 40%, rgba(0,0,0,.82) 100%)' }} />
              {/* Fact pills */}
              <div style={{ position:'absolute', top:20, left:20, display:'flex', flexDirection:'column', gap:5 }}>
                {destinations[0].pills.map(p => (
                  <span key={p} style={{ background:'rgba(0,0,0,.6)', backdropFilter:'blur(8px)', border:`1px solid rgba(62,201,158,.3)`, padding:'4px 10px', fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#3EC99E', display:'inline-block' }}>{p}</span>
                ))}
              </div>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'0 28px 28px' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(62,201,158,.7)', marginBottom:6 }}>{destinations[0].sub}</div>
                <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
                  <div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(44px,5.5vw,80px)', fontWeight:300, color:'#3EC99E', lineHeight:.9, marginBottom:6 }}>{destinations[0].stat}</div>
                    <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(255,255,255,.55)', marginBottom:4 }}>{destinations[0].statNote} · {destinations[0].note}</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,26px)', fontWeight:300, color:'#fff', lineHeight:1.1 }}>{destinations[0].name}</div>
                  </div>
                  <span className="dc-arr" style={{ color:'#3EC99E', fontSize:22, paddingBottom:4 }}>→</span>
                </div>
              </div>
            </Link>

            {/* Right: Tahoe + Vegas stacked */}
            <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:3 }}>
              {[destinations[1], destinations[2]].map(d => (
                <Link key={d.href} href={d.href} className="dc" style={{ background:'#111', minHeight:220, position:'relative' }}>
                  <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.8) 100%)' }} />
                  {/* Pills */}
                  <div style={{ position:'absolute', top:14, right:14 }}>
                    <span style={{ background:'rgba(0,0,0,.6)', backdropFilter:'blur(8px)', border:`1px solid rgba(255,255,255,.15)`, padding:'3px 8px', fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.75)' }}>{d.pills[0]}</span>
                  </div>
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'16px 20px' }}>
                    <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:4 }}>{d.sub}</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(16px,1.8vw,22px)', fontWeight:300, color:'#fff', marginBottom:6 }}>{d.name}</div>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <div>
                        <span style={{ fontFamily:'var(--serif)', fontSize:22, color:d.accent, fontWeight:300 }}>{d.stat}</span>
                        <span style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.45)', marginLeft:8 }}>{d.statNote}</span>
                      </div>
                      <span className="dc-arr" style={{ color:'rgba(255,255,255,.6)', fontSize:16 }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom row: SoCal + Somersett */}
          <div className="dest-bot" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {[destinations[3], destinations[4]].map(d => (
              <Link key={d.href} href={d.href} className="dc" style={{ background:'#111', minHeight:240, position:'relative' }}>
                <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.8) 100%)' }} />
                <div style={{ position:'absolute', top:16, left:16, display:'flex', gap:5, flexWrap:'wrap' }}>
                  {d.pills.slice(0,2).map(p => (
                    <span key={p} style={{ background:'rgba(0,0,0,.6)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,.15)', padding:'3px 8px', fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.75)' }}>{p}</span>
                  ))}
                </div>
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'20px 24px' }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:4 }}>{d.sub}</div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,26px)', fontWeight:300, color:'#fff', marginBottom:6 }}>{d.name}</div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div>
                      <span style={{ fontFamily:'var(--serif)', fontSize:24, color:d.accent, fontWeight:300 }}>{d.stat}</span>
                      <span style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.45)', marginLeft:8 }}>{d.statNote} · {d.note}</span>
                    </div>
                    <span className="dc-arr" style={{ color:'rgba(255,255,255,.5)', fontSize:16 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. HOW IT WORKS ─── */}
      <section style={{ background:'#fff', padding:'clamp(72px,9vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:48 }}>
            <div className="sec-label">The Process</div>
            <div className="sec-rule" />
            <h2 className="sec-h">One call.<br /><em>Everything handled.</em></h2>
          </div>
          <div className="four-col" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:3 }}>
            {steps.map((step, i) => (
              <div key={step.n} className={`sc sr d${i+1}`}>
                <div style={{ fontFamily:'var(--serif)', fontSize:52, fontWeight:300, color:step.accent, lineHeight:1, marginBottom:16, opacity:.6 }}>{step.n}</div>
                <h3 style={{ fontFamily:'var(--sans)', fontSize:16, fontWeight:700, color:'#1A1408', marginBottom:12, lineHeight:1.3 }}>{step.title}</h3>
                <p style={{ fontSize:14, lineHeight:1.82, color:'rgba(26,20,8,.6)' }}>{step.body}</p>
              </div>
            ))}
          </div>
          <div className="sr" style={{ marginTop:36, display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Start the Process</span></Link>
            <Link href="/how-we-do-it/" style={{ display:'inline-flex', alignItems:'center', padding:'14px 24px', border:'1px solid rgba(26,20,8,.2)', color:'#1A1408', textDecoration:'none', fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase' }}>Full Process →</Link>
          </div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS ─── */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* ─── 7. TRIP TYPES ─── */}
      <section style={{ background:'#1A1408', padding:'clamp(72px,9vw,110px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:44 }}>
            <div className="sec-label-lt">Who We Plan For</div>
            <div className="sec-rule-lt" />
            <h2 className="sec-h-lt">Every kind of group.</h2>
          </div>
          <div className="two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {[
              { title:'Golf Buddy Trips', href:'/golf-buddy-trips/', sub:'4–24 Players', desc:'The trip your group has talked about for years. Tee times at courses you can\'t book independently. Hotel blocks held. Transport arranged. You just play.', img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=88', cta:'Plan a Buddy Trip', pills:['Groups 4–24','All Destinations','Flexible Budget'] },
              { title:'Corporate & Incentive', href:'/corporate-and-incentive-golf-travel/', sub:'20–200 Players', desc:'Your top performers deserve Pebble Beach — not the local muni. Events people fight to earn an invitation back to. Group rates, premium access, full logistics.', img:'https://images.unsplash.com/photo-1592919505780-303950717480?w=900&q=88', cta:'Plan a Corporate Event', pills:['Groups 20–200','Premium Access','Full Logistics'] },
            ].map(t => (
              <Link key={t.href} href={t.href} className="tc" style={{ textDecoration:'none', background:'#111', position:'relative' }}>
                <div className="tc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${t.img})`, backgroundSize:'cover', backgroundPosition:'center', opacity:.75 }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.82) 100%)' }} />
                <div style={{ position:'relative', zIndex:1, padding:'clamp(24px,4vw,48px)', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                  <div style={{ display:'flex', gap:6, marginBottom:16, flexWrap:'wrap' }}>
                    {t.pills.map(p => (
                      <span key={p} style={{ background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', padding:'4px 10px', fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.85)' }}>{p}</span>
                    ))}
                  </div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginBottom:8 }}>{t.sub}</div>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,2.5vw,34px)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:14 }}>{t.title}</h3>
                  <p style={{ fontSize:14, lineHeight:1.78, color:'rgba(255,255,255,.65)', marginBottom:20, maxWidth:400 }}>{t.desc}</p>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#D4A832' }}>
                    {t.cta} <span className="tc-arr">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. SERVICES ─── */}
      <section style={{ background:'#fff', padding:'clamp(60px,7vw,88px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:32 }}>
            <div className="sec-label">Every Detail Handled</div>
            <div className="sec-rule" />
            <h2 className="sec-h" style={{ maxWidth:480 }}>We coordinate everything<br /><em>so you don&apos;t have to.</em></h2>
          </div>
          <div className="two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', border:'1px solid #E8E4DC' }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', note:'Priority access at 200+ courses. Resort tee times groups can\'t book independently.' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', note:'Group room blocks at casino resorts, MGM properties, The Lodge at Pebble Beach.' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', note:'Airport transfers, hotel-to-course shuttles, private vehicles. No rental cars needed.' },
              { icon:'🍽', label:'Dining Events & Arrangements', href:'/dining-events-and-arrangements/', note:'Group dining at award-winning restaurants, pre-arranged and confirmed before arrival.' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', note:'72-hour free cancellation. Trip protection against cancellations and weather events.' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', note:'All-inclusive packages from $275/person. Tee times + hotel + transport bundled.' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', note:'For non-golfers in the group. Scenic tours, local attractions, spa, entertainment.' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/', note:'Each player pays individually. Zero spreadsheets, zero chasing payments.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="svc">
                <span style={{ fontSize:20, flexShrink:0, opacity:.7, marginTop:1 }}>{s.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'#1A1408', marginBottom:4 }}>{s.label}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, color:'rgba(26,20,8,.55)', lineHeight:1.55 }}>{s.note}</div>
                </div>
                <span style={{ color:'var(--copper)', fontSize:14, flexShrink:0, opacity:.6, marginTop:2 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA ─── */}
      <section style={{ background:'#0A1208', padding:'clamp(88px,12vw,150px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=60')", backgroundSize:'cover', backgroundPosition:'center', opacity:.06 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,18,8,.5), rgba(10,18,8,.97))' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:620, margin:'0 auto' }}>
          <div className="sec-label-lt" style={{ display:'inline-block' }}>No Obligation · Free Quote Within 24 Hours</div>
          <div className="sec-rule-lt" style={{ margin:'14px auto 28px' }} />
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(38px,6vw,74px)', fontWeight:300, color:'#fff', lineHeight:.93, marginBottom:22, letterSpacing:'-.025em' }}>
            Tell us where.<br />
            <em style={{ fontStyle:'italic', color:'#D4A832' }}>We&apos;ll handle the rest.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.85, color:'rgba(255,255,255,.6)', marginBottom:40, fontWeight:300 }}>
            Two minutes. Destination, group size, budget. A specialist calls back with a full custom itinerary — tee times, hotel, transport, dining, everything.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:32 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'16px 48px', fontSize:12 }}><span>Start Planning Now</span></Link>
            <a href="tel:8885848232" style={{ display:'inline-flex', alignItems:'center', padding:'16px 28px', border:'1px solid rgba(255,255,255,.25)', color:'rgba(255,255,255,.8)', textDecoration:'none', fontFamily:'var(--sans)', fontSize:14, fontWeight:500, transition:'all .2s' }}>Call 888-584-8232</a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'4px 20px' }}>
            {['20+ years in business','Licensed NV & FL (ST37472)','10,000+ outings planned','Groups 4–200+'].map(t => (
              <span key={t} style={{ fontSize:12, color:'rgba(255,255,255,.35)', letterSpacing:'.05em' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `(function(){var io=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.1});document.querySelectorAll('.sr').forEach(function(e){io.observe(e)})})()` }} />
    </>
  )
}
