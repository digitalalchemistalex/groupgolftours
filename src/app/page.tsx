import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

export const metadata: Metadata = {
  title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe | From $275/person',
  description: 'Custom group golf packages since 2005. Pebble Beach, Shadow Creek, Lake Tahoe, Las Vegas, Southern California. Tee times, hotels, transport all handled. 10,000+ outings planned.',
  alternates: { canonical: 'https://www.groupgolftours.com/' },
  openGraph: {
    title: 'Group Golf Tours — Premier Group Golf Travel',
    description: 'Custom group golf packages since 2005. 10,000+ outings. Pebble Beach to Shadow Creek.',
    url: 'https://www.groupgolftours.com/',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': 'https://www.groupgolftours.com/#organization',
      name: 'Group Golf Tours',
      alternateName: ['Vacations on the Green', 'Prestige Golf'],
      url: 'https://www.groupgolftours.com',
      telephone: '+1-888-584-8232',
      email: 'customerservice@zoomaway.com',
      foundingDate: '2005',
      address: { '@type': 'PostalAddress', streetAddress: '3010 LBJ Freeway, Suite 1550', addressLocality: 'Dallas', addressRegion: 'TX', postalCode: '75234', addressCountry: 'US' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How far in advance should a golf group book Pebble Beach?', acceptedAnswer: { '@type': 'Answer', text: 'Golf groups should book Pebble Beach 12 to 18 months in advance. Resort guests get priority tee time access. Group Golf Tours coordinates hotel stays and tee times simultaneously.' } },
        { '@type': 'Question', name: 'What size groups does Group Golf Tours handle?', acceptedAnswer: { '@type': 'Answer', text: 'Group Golf Tours plans trips for groups of 4 to 200 players, from small buddy trips to large corporate incentive events.' } },
        { '@type': 'Question', name: 'How much does Shadow Creek cost per round?', acceptedAnswer: { '@type': 'Answer', text: 'Shadow Creek costs $1,250 per player — the most expensive public tee time in the United States. MGM Resort hotel guests only, Monday through Thursday. Includes private limo and personal caddie.' } },
      ],
    },
  ],
}

const destinations = [
  { name: 'Monterey & Pebble Beach', sub: 'California Coast', href: '/portfolio-item/monterey-and-pebble-beach/', stat: '$675/round', note: 'Pebble Beach Golf Links', img: 'https://images.unsplash.com/photo-1438012130798-5f6f12e72e9f?w=1200&q=90', accent: '#4EC9A0' },
  { name: 'Lake Tahoe & Northern Nevada', sub: 'Sierra Nevada · 6,200 ft', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', stat: 'From $275/person', note: 'Casino resort packages', img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=85', accent: '#6BB8E8' },
  { name: 'Las Vegas & Southern Nevada', sub: 'Desert Southwest', href: '/portfolio-item/las-vegas-and-southern-nevada/', stat: '$1,250/round', note: 'Shadow Creek · limo + caddie', img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&q=85', accent: '#E8C030' },
  { name: 'Southern California', sub: 'Year-Round Golf', href: '/portfolio-item/monterey-and-pebble-beach-2/', stat: '$2,950/person', note: 'Torrey Pines · PGA West', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85', accent: '#E87850' },
  { name: 'Somersett Golf & CC', sub: 'Private Club · Reno NV', href: '/portfolio-item/somersett-golf-country-club/', stat: 'From $540/person', note: 'Golfweek Top Private · 5,200 ft', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85', accent: '#88C858' },
]

const testimonials = [
  { quote: "Best course conditions I have played all year. Driving range and putting range as well. Couldn't have asked for more.", name: 'Marcus Barrett', detail: 'Somersett Golf & CC · Google Review', rating: 5 },
  { quote: "Great course — one of the most challenging in the area. Always in excellent condition with fast greens and perfect fairways.", name: 'Michael Jory', detail: 'Somersett Golf & CC · Google Review', rating: 5 },
  { quote: "The view is top-notch and the staff are all excellent. The dinner menu is also good with steaks, seafood and pasta dishes.", name: 'Beau Bennett', detail: 'Somersett Golf & CC · Google Review', rating: 5 },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        @keyframes kenBurns { from{transform:scale(1)} to{transform:scale(1.06)} }
        .sr { opacity:0; transform:translateY(20px); transition:opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1) }
        .sr.on { opacity:1; transform:none }
        .d1{transition-delay:.07s}.d2{transition-delay:.14s}.d3{transition-delay:.21s}.d4{transition-delay:.28s}.d5{transition-delay:.35s}
        .dc { position:relative; overflow:hidden; display:block; text-decoration:none; cursor:pointer }
        .dc-img { transition:transform .9s cubic-bezier(.22,1,.36,1) }
        .dc:hover .dc-img { transform:scale(1.06) }
        .dc-arr { transition:transform .25s cubic-bezier(.22,1,.36,1) }
        .dc:hover .dc-arr { transform:translateX(6px) }
        .svc-row { display:flex; align-items:center; gap:14px; padding:16px 20px; border-bottom:1px solid rgba(0,0,0,.06); text-decoration:none; transition:all .2s }
        .svc-row:hover { background:#f8f5ef; padding-left:26px }
        .svc-row:last-child { border-bottom:none }
        .prob-card { background:#fff; border:1px solid rgba(0,0,0,.07); padding:26px 24px; transition:all .28s cubic-bezier(.22,1,.36,1) }
        .prob-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,.08) }
        @media(max-width:900px){
          .two-col{grid-template-columns:1fr!important}
          .dest-main{grid-template-columns:1fr!important;grid-template-rows:auto!important}
          .dest-bottom{grid-template-columns:1fr!important}
          .test-grid{grid-template-columns:1fr!important}
          .how-grid{grid-template-columns:1fr!important}
          .stats-grid{grid-template-columns:1fr 1fr!important}
          .prob-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:540px){
          .prob-grid{grid-template-columns:1fr!important}
          .stats-grid{grid-template-columns:1fr 1fr!important}
        }
      `}</style>

      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. STATS BAR */}
      <div style={{ background:'var(--parchment)', borderBottom:'1px solid rgba(0,0,0,.08)' }}>
        <div className="wrap stats-grid" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)' }}>
          {[{n:'20+',l:'Years in Business'},{n:'10,000+',l:'Outings Planned'},{n:'$275',l:'Packages From'},{n:'200+',l:'Courses'},{n:'NV + FL',l:'Licensed Seller of Travel'}].map((s,i) => (
            <div key={s.n} style={{ padding:'clamp(18px,3vw,32px) clamp(10px,2vw,22px)', borderLeft:i>0?'1px solid rgba(0,0,0,.08)':'none', textAlign:'center' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,3.5vw,42px)', fontWeight:300, color:'#1A1408', lineHeight:1 }}>{s.n}</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(26,20,8,.38)', marginTop:6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PROBLEM / VALUE PROP — Why you can't do this alone */}
      <section style={{ background:'#0A0C0A', padding:'clamp(72px,9vw,112px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ textAlign:'center', maxWidth:600, margin:'0 auto 52px' }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'var(--copper)' }}>Why Groups Use Us</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px auto 20px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4.5vw,52px)', fontWeight:300, color:'var(--cream)', lineHeight:1.05, letterSpacing:'-.02em', margin:0 }}>
              The courses you want<br />
              <em style={{ fontStyle:'italic', color:'var(--gold)' }}>groups can&apos;t book alone.</em>
            </h2>
          </div>

          <div className="prob-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
            {[
              { icon:'🔐', problem:'Pebble Beach requires a resort stay to book more than 24 hours in advance.', solution:'We coordinate your hotel and tee times simultaneously — giving your group the 18-month booking window the public never sees.', accent:'#4EC9A0', course:'Pebble Beach Golf Links', price:'$675/round' },
              { icon:'🎰', problem:'Shadow Creek is available to MGM hotel guests only, Mon–Thu. Most groups find out too late.', solution:'We package the MGM hotel stay with Shadow Creek tee times, limo, and caddie — the only way a group gets on this course.', accent:'#E8C030', course:'Shadow Creek · Las Vegas', price:'$1,250/round' },
              { icon:'🏨', problem:'Group room blocks disappear fast. Late-booking groups end up split across three hotels.', solution:'We hold your room block the day you inquire. Your group stays together, dines together, plays together.', accent:'#6BB8E8', course:'All Destinations', price:'Group rates' },
              { icon:'💰', problem:'Corporate groups paying retail for 30+ tee times blow through their budget on day one.', solution:'20 years of volume relationships mean group rates on courses, hotels, restaurants, and transport.', accent:'#E87850', course:'Corporate Events', price:'Volume pricing' },
              { icon:'⏱', problem:'The Trip Captain spends 40+ hours coordinating. Hotels. Tee times. Transport. Dining. Repeat.', solution:'One call. One itinerary. We handle every element simultaneously. You show up with your clubs.', accent:'#88C858', course:'All Trip Types', price:'One call' },
              { icon:'🛡', problem:'One cancellation cascades — hotels, flights, tee times all collapse at once.', solution:'72-hour free cancellation + travel insurance options + 20 years of backup relationships. Every scenario handled.', accent:'#D4886A', course:'All Bookings', price:'72-hr policy' },
            ].map((item, i) => {
              const rgb = item.accent.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')
              return (
                <div key={i} className="prob-card sr" style={{ transitionDelay:`${i*.06}s` }}>
                  <div style={{ fontSize:22, marginBottom:14 }}>{item.icon}</div>
                  <p style={{ fontSize:13, lineHeight:1.75, color:'rgba(26,20,8,.45)', fontStyle:'italic', marginBottom:14, minHeight:52 }}>{item.problem}</p>
                  <div style={{ width:28, height:1, background:`rgba(${rgb},.4)`, marginBottom:12 }} />
                  <p style={{ fontSize:13, lineHeight:1.75, color:'rgba(26,20,8,.72)', fontWeight:500, marginBottom:16 }}>{item.solution}</p>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:`rgba(${rgb},.7)` }}>{item.course}</span>
                    <span style={{ fontFamily:'var(--serif)', fontSize:17, color:item.accent, fontWeight:300 }}>{item.price}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="sr" style={{ textAlign:'center', marginTop:40 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'14px 44px', fontSize:11 }}>
              <span>Fix This For My Group</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DESTINATIONS */}
      <section style={{ background:'var(--parchment)', padding:'clamp(72px,9vw,112px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:44 }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'var(--copper)' }}>Where We Play</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,54px)', fontWeight:300, color:'#1A1408', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
                Five destinations.<br /><em style={{ fontStyle:'italic', color:'rgba(26,20,8,.35)' }}>Five distinct worlds.</em>
              </h2>
              <Link href="/destinations/" style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--copper)', textDecoration:'none' }}>
                All destinations →
              </Link>
            </div>
          </div>

          {/* Featured large + right column */}
          <div className="dest-main" style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gridTemplateRows:'480px 260px', gap:3, marginBottom:3 }}>
            <Link href="/portfolio-item/monterey-and-pebble-beach/" className="dc" style={{ background:'#0D2A34', gridRow:'1/2' }}>
              <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[0].img})`, backgroundSize:'cover', backgroundPosition:'center 28%' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(13,42,52,.05) 0%,rgba(13,42,52,0) 40%,rgba(13,42,52,.9) 100%)' }} />
              <div style={{ position:'absolute', top:20, left:20, background:'rgba(13,42,52,.8)', backdropFilter:'blur(8px)', padding:'5px 12px', border:`1px solid rgba(78,201,160,.25)` }}>
                <span style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'#4EC9A0' }}>California Coast</span>
              </div>
              {/* Fact pills */}
              <div style={{ position:'absolute', top:20, right:20, display:'flex', flexDirection:'column', gap:5, alignItems:'flex-end' }}>
                {['6× US Open Host','#1 Public Course USA','18-Month Advance'].map(p => (
                  <span key={p} style={{ background:'rgba(13,42,52,.75)', backdropFilter:'blur(8px)', border:'1px solid rgba(78,201,160,.2)', padding:'4px 10px', fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(78,201,160,.8)' }}>{p}</span>
                ))}
              </div>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'0 30px 28px' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(48px,6vw,88px)', fontWeight:300, color:'#4EC9A0', lineHeight:.9, marginBottom:8 }}>$675</div>
                <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
                  <div>
                    <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(78,201,160,.6)', marginBottom:5 }}>per round · Pebble Beach Golf Links</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,26px)', fontWeight:300, color:'var(--cream)', lineHeight:1.1 }}>Monterey &amp; Pebble Beach</div>
                  </div>
                  <span className="dc-arr" style={{ color:'#4EC9A0', fontSize:20 }}>→</span>
                </div>
              </div>
            </Link>

            <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:3 }}>
              {[destinations[1], destinations[2]].map(d => (
                <Link key={d.href} href={d.href} className="dc" style={{ background:'#111' }}>
                  <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(0,0,0,.1),rgba(0,0,0,.78))' }} />
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'18px 22px' }}>
                    <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginBottom:4 }}>{d.sub}</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(16px,2vw,22px)', fontWeight:300, color:'#fff', marginBottom:5 }}>{d.name}</div>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <div>
                        <span style={{ fontFamily:'var(--serif)', fontSize:20, color:d.accent }}>{d.stat}</span>
                        <span style={{ fontFamily:'var(--sans)', fontSize:9, color:'rgba(255,255,255,.35)', marginLeft:8 }}>{d.note}</span>
                      </div>
                      <span className="dc-arr" style={{ color:'rgba(255,255,255,.5)', fontSize:14 }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="dest-bottom" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3, gridColumn:'1/3' }}>
              {[destinations[3], destinations[4]].map(d => (
                <Link key={d.href} href={d.href} className="dc" style={{ background:'#111', minHeight:240 }}>
                  <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(0,0,0,.1),rgba(0,0,0,.78))' }} />
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'22px 26px' }}>
                    <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:4 }}>{d.sub}</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2.2vw,26px)', fontWeight:300, color:'#fff', marginBottom:6 }}>{d.name}</div>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <div>
                        <span style={{ fontFamily:'var(--serif)', fontSize:22, color:d.accent }}>{d.stat}</span>
                        <span style={{ fontFamily:'var(--sans)', fontSize:9, color:'rgba(255,255,255,.35)', marginLeft:8 }}>{d.note}</span>
                      </div>
                      <span className="dc-arr" style={{ color:'rgba(255,255,255,.5)', fontSize:14 }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section style={{ background:'#fff', padding:'clamp(72px,9vw,112px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:52 }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'var(--copper)' }}>The Process</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,52px)', fontWeight:300, color:'#1A1408', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
              One call.<br />
              <em style={{ fontStyle:'italic', color:'var(--copper)' }}>Everything handled.</em>
            </h2>
          </div>

          <div className="how-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2 }}>
            {[
              { n:'01', title:'Tell us your trip', body:'Destination, dates, group size, budget. One conversation or our inquiry form. Leave blanks — we fill them based on 20 years matching groups to the right package.', accent:'#4EC9A0' },
              { n:'02', title:'We build the itinerary', body:'Tee times, hotel blocks, transport, dining, insurance — all built around your group simultaneously. Hotel and tee times secured on the same call. The only way resort access works.', accent:'#6BB8E8' },
              { n:'03', title:'You approve, we book', body:'Review every element. Adjustments until it\'s exactly right. No payment until you\'re satisfied. No surprises. What you approve is what you pay.', accent:'#E8C030' },
              { n:'04', title:'Everyone just plays', body:'Each player registers and pays through our online system. You track everything from one dashboard. Zero spreadsheets, zero chasing payments. You\'re just another golfer.', accent:'#88C858' },
            ].map((step, i) => {
              const rgb = step.accent.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')
              return (
                <div key={step.n} className="sr" style={{ padding:'32px 28px', background:'var(--parchment)', borderLeft:`3px solid rgba(${rgb},.5)`, transitionDelay:`${i*.09}s` }}>
                  <div style={{ fontFamily:'var(--serif)', fontSize:56, fontWeight:300, color:`rgba(${rgb},.2)`, lineHeight:1, marginBottom:14 }}>{step.n}</div>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:22, fontWeight:300, color:'#1A1408', marginBottom:12, lineHeight:1.2 }}>{step.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.85, color:'rgba(26,20,8,.55)' }}>{step.body}</p>
                </div>
              )
            })}
          </div>

          <div className="sr" style={{ marginTop:40, display:'flex', gap:12, flexWrap:'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'14px 40px', fontSize:11 }}><span>Start the Process</span></Link>
            <Link href="/how-we-do-it/" style={{ display:'inline-flex', alignItems:'center', padding:'14px 24px', border:'1px solid rgba(26,20,8,.15)', color:'#1A1408', textDecoration:'none', fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase' }}>Full Process →</Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section style={{ background:'var(--parchment)', padding:'clamp(72px,9vw,112px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ textAlign:'center', maxWidth:520, margin:'0 auto 48px' }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'var(--copper)' }}>What Golfers Say</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px auto 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,3.5vw,46px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, letterSpacing:'-.02em', margin:0 }}>
              Don&apos;t take our word for it.
            </h2>
          </div>
          <div className="test-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="sr" style={{ background:'#fff', padding:'clamp(24px,3vw,36px)', transitionDelay:`${i*.1}s` }}>
                <div style={{ display:'flex', gap:2, marginBottom:18 }}>
                  {[...Array(t.rating)].map((_,s) => <span key={s} style={{ color:'#D4A832', fontSize:15 }}>★</span>)}
                </div>
                <p style={{ fontFamily:'var(--serif)', fontSize:'clamp(15px,1.6vw,20px)', fontWeight:300, color:'#1A1408', lineHeight:1.65, marginBottom:22, fontStyle:'italic' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop:'1px solid rgba(0,0,0,.07)', paddingTop:14 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408' }}>{t.name}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(26,20,8,.38)', marginTop:2 }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRIP TYPES */}
      <section style={{ background:'#fff', padding:'clamp(72px,9vw,112px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:44 }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'var(--copper)' }}>Who We Plan For</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,52px)', fontWeight:300, color:'#1A1408', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
              Every kind of group.
            </h2>
          </div>
          <div className="two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {[
              { title:'Golf Buddy Trips', href:'/golf-buddy-trips/', sub:'4–24 players', desc:'The trip your group has talked about for years. Tee times secured at courses you can\'t book independently. Hotel blocks held. Transport arranged. You just play.', img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=85', cta:'Plan a Buddy Trip' },
              { title:'Corporate & Incentive', href:'/corporate-and-incentive-golf-travel/', sub:'20–200 players', desc:'Your top performers deserve Pebble Beach — not the local muni. We plan events people fight to earn their invitation to. Group rates, premium access, full logistics.', img:'https://images.unsplash.com/photo-1592919505780-303950717480?w=900&q=85', cta:'Plan a Corporate Event' },
            ].map(t => (
              <Link key={t.href} href={t.href} className="dc" style={{ textDecoration:'none', background:'#111', minHeight:360 }}>
                <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${t.img})`, backgroundSize:'cover', backgroundPosition:'center', opacity:.7 }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(0,0,0,.1),rgba(0,0,0,.78))' }} />
                <div style={{ position:'relative', zIndex:1, padding:'clamp(24px,4vw,48px)', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginBottom:8 }}>{t.sub}</div>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,2.5vw,34px)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:12 }}>{t.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.75, color:'rgba(255,255,255,.58)', marginBottom:18, maxWidth:380 }}>{t.desc}</p>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#D4A832' }}>
                    {t.cta} <span className="dc-arr">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICES — brief supporting grid */}
      <section style={{ background:'var(--parchment)', padding:'clamp(60px,7vw,88px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:36 }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'var(--copper)' }}>Every Detail Handled</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(24px,3.5vw,44px)', fontWeight:300, color:'#1A1408', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
              We coordinate everything<br />
              <em style={{ fontStyle:'italic', color:'rgba(26,20,8,.35)' }}>so you don&apos;t have to.</em>
            </h2>
          </div>
          <div style={{ background:'#fff', border:'1px solid rgba(0,0,0,.07)', display:'grid', gridTemplateColumns:'1fr 1fr' }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', note:'Priority access at 200+ courses. Resort tee times your group can\'t book independently.' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', note:'Group room blocks at casino resorts, MGM properties, The Lodge at Pebble Beach, and 100+ more.' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', note:'Airport transfers, hotel-to-course shuttles, private vehicles. No rental cars needed.' },
              { icon:'🍽', label:'Dining Events & Arrangements', href:'/dining-events-and-arrangements/', note:'Group dining at award-winning restaurants, pre-arranged and confirmed before you arrive.' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', note:'72-hour free cancellation. Trip protection against cancellations, medical emergencies, and weather.' },
              { icon:'✅', label:'Online Registration System', href:'/online-registration-system/', note:'Each player pays individually through our system. Zero spreadsheets, zero chasing payments.' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', note:'For non-golfers in the group. Scenic tours, local attractions, spa, entertainment.' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', note:'All-inclusive packages from $275/person. Tee times + hotel + transport bundled.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="svc-row">
                <span style={{ fontSize:18, flexShrink:0, opacity:.65 }}>{s.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408', marginBottom:2 }}>{s.label}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(26,20,8,.42)', lineHeight:1.5 }}>{s.note}</div>
                </div>
                <span style={{ color:'var(--copper)', fontSize:13, opacity:.5 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section style={{ background:'#0A140A', padding:'clamp(80px,11vw,140px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=60')", backgroundSize:'cover', backgroundPosition:'center', opacity:.07 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(10,20,10,.4),rgba(10,20,10,.98))' }} />

        <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:600, margin:'0 auto' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'rgba(212,168,50,.65)' }}>No obligation · Free quote within 24 hours</span>
          <div style={{ width:40, height:1, background:'rgba(212,168,50,.35)', margin:'16px auto 28px' }} />
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,6vw,76px)', fontWeight:300, color:'#fff', lineHeight:.93, marginBottom:22, letterSpacing:'-.025em' }}>
            Tell us where.<br />
            <em style={{ fontStyle:'italic', color:'var(--gold)' }}>We&apos;ll handle the rest.</em>
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'rgba(255,255,255,.45)', marginBottom:40, fontWeight:300 }}>
            Two minutes. Destination, group size, budget. A specialist calls back with a full custom itinerary — tee times, hotel, transport, dining, everything.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:32 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'16px 48px', fontSize:12 }}><span>Start Planning Now</span></Link>
            <a href="tel:8885848232" style={{ display:'inline-flex', alignItems:'center', padding:'16px 30px', border:'1px solid rgba(255,255,255,.18)', color:'rgba(255,255,255,.65)', textDecoration:'none', fontFamily:'var(--sans)', fontSize:13, fontWeight:400 }}>Call 888-584-8232</a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'4px 18px' }}>
            {['20+ years in business','Licensed NV & FL','10,000+ outings planned','Groups 4–200+'].map(t => (
              <span key={t} style={{ fontSize:10, color:'rgba(255,255,255,.2)', letterSpacing:'.06em' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `(function(){var io=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.12});document.querySelectorAll('.sr').forEach(function(e){io.observe(e)})})()` }} />
    </>
  )
}
