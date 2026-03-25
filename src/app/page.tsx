import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe | From $275/person',
  description: 'Custom group golf packages since 2005. Pebble Beach, Shadow Creek, Lake Tahoe, Las Vegas, Southern California. Tee times, hotels, transport — all handled. 10,000+ outings.',
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
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3010 LBJ Freeway, Suite 1550',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75234',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How far in advance should a golf group book Pebble Beach?',
          acceptedAnswer: { '@type': 'Answer', text: 'Golf groups should book Pebble Beach 12–18 months in advance. Resort guests get priority access. Group Golf Tours coordinates hotel stays and tee times simultaneously.' },
        },
        {
          '@type': 'Question',
          name: 'What size groups does Group Golf Tours handle?',
          acceptedAnswer: { '@type': 'Answer', text: 'Group Golf Tours plans trips for groups of 4 to 200 players, from small buddy trips to large corporate incentive events.' },
        },
      ],
    },
  ],
}

const destinations = [
  {
    name: 'Monterey & Pebble Beach',
    sub: 'California Coast',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    stat: '$675/round',
    note: 'Pebble Beach Golf Links',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=90',
    accent: '#2D6A4F',
  },
  {
    name: 'Lake Tahoe & Northern Nevada',
    sub: 'Sierra Nevada · 6,200 ft',
    href: '/portfolio-item/lake-tahoe-and-northern-nevada/',
    stat: 'From $275/person',
    note: 'Reno casino resort packages',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=85',
    accent: '#1B4F72',
  },
  {
    name: 'Las Vegas & Southern Nevada',
    sub: 'Desert Southwest',
    href: '/portfolio-item/las-vegas-and-southern-nevada/',
    stat: '$1,250/round',
    note: 'Shadow Creek · limo + caddie',
    img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&q=85',
    accent: '#7D6608',
  },
  {
    name: 'Southern California',
    sub: 'Year-Round Golf',
    href: '/portfolio-item/monterey-and-pebble-beach-2/',
    stat: '$2,950/person',
    note: 'Torrey Pines · PGA West',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85',
    accent: '#922B21',
  },
  {
    name: 'Somersett Golf & CC',
    sub: 'Private Club · Reno NV',
    href: '/portfolio-item/somersett-golf-country-club/',
    stat: 'From $540/person',
    note: 'Golfweek Top Private · 5,200 ft',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85',
    accent: '#1E8449',
  },
]

const testimonials = [
  {
    quote: "Best course conditions I have played all year. Driving range and putting range as well. Couldn't have asked for more.",
    name: 'Marcus Barrett',
    detail: 'Somersett Golf & CC · Google Review',
    rating: 5,
  },
  {
    quote: "Great course — one of the most challenging in the area. Always in excellent condition with fast greens and perfect fairways.",
    name: 'Michael Jory',
    detail: 'Somersett Golf & CC · Google Review',
    rating: 5,
  },
  {
    quote: "The view is top-notch and the staff are all excellent. The dinner menu is also good with steaks, seafood and pasta dishes.",
    name: 'Beau Bennett',
    detail: 'Somersett Golf & CC · Google Review',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <style>{`
        /* ─── Animations ─── */
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes kenBurns { from{transform:scale(1)} to{transform:scale(1.06)} }
        @keyframes tickerMove { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .fade-1 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .1s both }
        .fade-2 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .25s both }
        .fade-3 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .4s both }
        .fade-4 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .55s both }
        .fade-img { animation: fadeIn 1.2s ease .2s both }

        .hero-img { animation: kenBurns 18s ease-in-out infinite alternate }

        /* ─── Dest card hover ─── */
        .dc { position:relative; overflow:hidden; display:block; text-decoration:none; cursor:pointer }
        .dc-img { transition: transform .9s cubic-bezier(.22,1,.36,1) }
        .dc:hover .dc-img { transform: scale(1.07) }
        .dc-overlay { position:absolute; inset:0; opacity:0; transition:opacity .4s }
        .dc:hover .dc-overlay { opacity:1 }
        .dc-arrow { transition: transform .25s cubic-bezier(.22,1,.36,1) }
        .dc:hover .dc-arrow { transform: translateX(6px) }

        /* ─── Stat cells ─── */
        .stat-cell { transition: background .2s }
        .stat-cell:hover { background: rgba(0,0,0,.04) !important }

        /* ─── Ticker ─── */
        .ticker { display:flex; white-space:nowrap; animation: tickerMove 30s linear infinite }

        /* ─── Scroll reveal ─── */
        .sr { opacity:0; transform:translateY(20px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1) }
        .sr.on { opacity:1; transform:none }
        .sd1{transition-delay:.08s}.sd2{transition-delay:.16s}.sd3{transition-delay:.24s}
        .sd4{transition-delay:.32s}.sd5{transition-delay:.40s}

        /* ─── Service links ─── */
        .svc { display:flex; align-items:center; gap:12px; padding:16px 20px; border-bottom:1px solid rgba(0,0,0,.06); text-decoration:none; transition: all .2s }
        .svc:hover { background:#f8f5ef; padding-left:26px }
        .svc:last-child { border-bottom:none }

        /* ─── CTA band ─── */
        .cta-band { background: #1a2e1a }

        /* ─── Responsive ─── */
        @media(max-width:900px) {
          .dest-grid { grid-template-columns: 1fr !important }
          .dest-grid-side { display:none !important }
          .stats-grid { grid-template-columns: 1fr 1fr !important }
          .hero-text { max-width:100% !important }
          .two-col { grid-template-columns:1fr !important }
          .svc-cols { grid-template-columns:1fr !important }
          .test-grid { grid-template-columns:1fr !important }
        }
        @media(max-width:600px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important }
          .hero-h { font-size:clamp(42px,11vw,72px) !important }
        }
      `}</style>

      {/* ═══════════════════════════════════════
          § 1  HERO — full-bleed course photo
      ═══════════════════════════════════════ */}
      <section style={{ position:'relative', height:'92vh', minHeight:600, overflow:'hidden', display:'flex', alignItems:'flex-end' }}>

        {/* Photo */}
        <div style={{ position:'absolute', inset:0 }} className="fade-img">
          <div className="hero-img" style={{
            position:'absolute', inset:0,
            backgroundImage:`url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=2000&q=92)`,
            backgroundSize:'cover', backgroundPosition:'center 30%',
          }} />
        </div>

        {/* Gradient overlay — lighter at top, strong at bottom */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.15) 0%, rgba(0,0,0,.08) 30%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.82) 100%)' }} />

        {/* Content */}
        <div className="wrap" style={{ position:'relative', zIndex:2, paddingBottom:'clamp(52px,8vh,96px)', width:'100%' }}>
          <div className="hero-text" style={{ maxWidth:760 }}>

            <div className="fade-1" style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:20, background:'rgba(255,255,255,.12)', backdropFilter:'blur(12px)', padding:'7px 16px', border:'1px solid rgba(255,255,255,.2)' }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#D4A832', display:'inline-block', flexShrink:0 }} />
              <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(255,255,255,.9)' }}>
                20+ Years · 10,000+ Outings · Licensed NV &amp; FL
              </span>
            </div>

            <h1 className="hero-h fade-2" style={{
              fontFamily:'var(--serif)', fontSize:'clamp(48px,7.5vw,104px)',
              fontWeight:300, lineHeight:.94, letterSpacing:'-.02em',
              color:'#fff', marginBottom:28,
              textShadow:'0 2px 32px rgba(0,0,0,.3)',
            }}>
              The courses<br />
              your group<br />
              <em style={{ fontStyle:'italic', color:'#D4A832' }}>deserves.</em>
            </h1>

            <p className="fade-3" style={{
              fontSize:'clamp(15px,1.5vw,18px)', lineHeight:1.75,
              color:'rgba(255,255,255,.82)', maxWidth:480,
              marginBottom:36, fontWeight:300,
              textShadow:'0 1px 8px rgba(0,0,0,.4)',
            }}>
              Pebble Beach. Shadow Creek. Edgewood Tahoe.
              We secure the tee times, hotel blocks, and logistics
              your group can&apos;t arrange alone. One call. 20 years. Everything handled.
            </p>

            <div className="fade-4" style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <Link href="/tour-inquiry/" className="btn btn-gold" style={{ fontSize:12, padding:'14px 36px', letterSpacing:'.14em' }}>
                <span>Plan My Group Trip</span>
              </Link>
              <a href="tel:8885848232" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                padding:'14px 28px', border:'1px solid rgba(255,255,255,.45)',
                color:'#fff', textDecoration:'none',
                fontFamily:'var(--sans)', fontSize:13, fontWeight:500,
                backdropFilter:'blur(8px)', background:'rgba(255,255,255,.08)',
                transition:'all .2s',
              }}>
                888-584-8232
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          § 2  STATS BAR — cream background
      ═══════════════════════════════════════ */}
      <div style={{ background:'var(--parchment)', borderBottom:'1px solid rgba(0,0,0,.08)' }}>
        <div className="wrap stats-grid" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)' }}>
          {[
            { n:'20+', l:'Years in Business' },
            { n:'10,000+', l:'Outings Planned' },
            { n:'$275', l:'Packages From' },
            { n:'200+', l:'Courses' },
            { n:'NV + FL', l:'Licensed Seller of Travel' },
          ].map((s, i) => (
            <div key={s.n} className="stat-cell" style={{ padding:'clamp(20px,3vw,36px) clamp(12px,2vw,24px)', borderLeft:i>0?'1px solid rgba(0,0,0,.08)':'none', textAlign:'center' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(24px,3.5vw,44px)', fontWeight:300, color:'#1A1408', lineHeight:1 }}>{s.n}</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(26,20,8,.4)', marginTop:6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          § 3  INTRO COPY — editorial section
      ═══════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'clamp(72px,9vw,120px) 0' }}>
        <div className="wrap two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(40px,6vw,100px)', alignItems:'center' }}>
          <div className="sr">
            <span className="eyebrow">Who We Are</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 22px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,52px)', fontWeight:300, color:'#1A1408', lineHeight:1.08, marginBottom:24, letterSpacing:'-.02em' }}>
              We do what your<br />
              group can&apos;t do alone.
            </h2>
            <p style={{ fontSize:16, lineHeight:1.9, color:'rgba(26,20,8,.58)', marginBottom:18 }}>
              Over two decades ago, as golf&apos;s popularity soared across the U.S. and internationally,
              we recognized an opportunity to help travelers plan unforgettable golf experiences.
              Since then we&apos;ve partnered with top courses, luxury hotels, and local tourism bureaus
              to make every destination accessible and extraordinary.
            </p>
            <p style={{ fontSize:16, lineHeight:1.9, color:'rgba(26,20,8,.58)', marginBottom:36 }}>
              From Pebble Beach — where resort guests get 18-month advance tee time access —
              to Shadow Creek in Las Vegas where the green fee is $1,250/round and the limo is included,
              we secure access your group simply can&apos;t arrange independently.
            </p>
            <div style={{ display:'flex', gap:12 }}>
              <Link href="/about-us/" className="btn btn-gold"><span>Our Story</span></Link>
              <Link href="/what-we-do/" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', border:'1px solid rgba(26,20,8,.15)', color:'#1A1408', textDecoration:'none', fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', transition:'all .2s' }}>
                What We Do →
              </Link>
            </div>
          </div>

          {/* Right: feature image with overlay card */}
          <div className="sr sd2" style={{ position:'relative' }}>
            <div style={{ aspectRatio:'4/5', overflow:'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=88"
                alt="Golf group on course"
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform .9s' }}
              />
            </div>
            {/* Floating stat card */}
            <div style={{
              position:'absolute', bottom:-24, left:-24,
              background:'#1A1408', color:'var(--cream)',
              padding:'22px 28px', minWidth:200,
              boxShadow:'0 20px 60px rgba(0,0,0,.25)',
            }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:36, fontWeight:300, color:'var(--gold)', lineHeight:1 }}>$675</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(245,237,216,.45)', marginTop:6 }}>Per Round</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:12, color:'rgba(245,237,216,.65)', marginTop:4 }}>Pebble Beach Golf Links</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          § 4  DESTINATIONS
      ═══════════════════════════════════════ */}
      <section style={{ background:'var(--parchment)', padding:'clamp(72px,9vw,120px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:48 }}>
            <span className="eyebrow">Where We Play</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,56px)', fontWeight:300, color:'#1A1408', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
                Five world-class<br />golf destinations.
              </h2>
              <Link href="/destinations/" style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--copper)', textDecoration:'none' }}>
                All destinations →
              </Link>
            </div>
          </div>

          {/* Featured: Pebble Beach large + 2 beside */}
          <div className="dest-grid" style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:3, marginBottom:3 }}>

            {/* Pebble — large */}
            <Link href="/portfolio-item/monterey-and-pebble-beach/" className="dc" style={{ aspectRatio:'16/10', background:'#0D2A34' }}>
              <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[0].img})`, backgroundSize:'cover', backgroundPosition:'center 28%' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.08) 0%, rgba(0,0,0,.65) 100%)' }} />
              <div className="dc-overlay" style={{ background:'rgba(45,106,79,.25)' }} />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'clamp(20px,3vw,36px)' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.26em', textTransform:'uppercase', color:'rgba(255,255,255,.55)', marginBottom:8 }}>{destinations[0].sub}</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,3vw,38px)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:10 }}>{destinations[0].name}</div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div>
                    <span style={{ fontFamily:'var(--serif)', fontSize:28, color:'#D4A832', fontWeight:300 }}>{destinations[0].stat}</span>
                    <span style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.5)', marginLeft:8 }}>{destinations[0].note}</span>
                  </div>
                  <span className="dc-arrow" style={{ color:'#D4A832', fontSize:20 }}>→</span>
                </div>
              </div>
            </Link>

            {/* Right: Tahoe + Vegas stacked */}
            <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:3 }}>
              {[destinations[1], destinations[2]].map(d => (
                <Link key={d.href} href={d.href} className="dc" style={{ background:'#111', minHeight:200 }}>
                  <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.72) 100%)' }} />
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'20px 24px' }}>
                    <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:5 }}>{d.sub}</div>
                    <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(16px,2vw,22px)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:6 }}>{d.name}</div>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <span style={{ fontFamily:'var(--serif)', fontSize:20, color:'#D4A832' }}>{d.stat}</span>
                      <span className="dc-arrow" style={{ color:'rgba(255,255,255,.6)', fontSize:16 }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom row: SoCal + Somersett */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {[destinations[3], destinations[4]].map(d => (
              <Link key={d.href} href={d.href} className="dc" style={{ background:'#111', minHeight:220 }}>
                <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${d.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.72) 100%)' }} />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'24px 28px' }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:5 }}>{d.sub}</div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2.2vw,26px)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:6 }}>{d.name}</div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div>
                      <span style={{ fontFamily:'var(--serif)', fontSize:22, color:'#D4A832' }}>{d.stat}</span>
                      <span style={{ fontFamily:'var(--sans)', fontSize:10, color:'rgba(255,255,255,.45)', marginLeft:8 }}>{d.note}</span>
                    </div>
                    <span className="dc-arrow" style={{ color:'rgba(255,255,255,.6)', fontSize:16 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          § 5  SERVICES — clean list
      ═══════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'clamp(72px,9vw,120px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:52 }}>
            <span className="eyebrow">Full Service</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,52px)', fontWeight:300, color:'#1A1408', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
              Everything handled.<br />
              <em style={{ fontStyle:'italic', color:'var(--copper)' }}>Nothing left to chance.</em>
            </h2>
          </div>

          <div className="svc-cols" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 48px', border:'1px solid rgba(0,0,0,.07)' }}>
            {[
              { icon:'⛳', label:'Golf Courses & Tee Times', href:'/golf-courses/', note:'Priority access at 200+ courses across all destinations' },
              { icon:'🏨', label:'Hotel Reservations', href:'/hotel-reservations/', note:'Group room blocks at casino resorts and luxury properties' },
              { icon:'🚌', label:'Transportation', href:'/transportation/', note:'Airport transfers, group shuttles, hotel-to-course' },
              { icon:'🍽', label:'Dining Events & Arrangements', href:'/dining-events-and-arrangements/', note:'Award-winning restaurants, group dining pre-arranged' },
              { icon:'🛡', label:'Travel Insurance', href:'/travel-insurance/', note:'72-hour free cancellation on all standard bookings' },
              { icon:'📋', label:'Tour Packages', href:'/tour-packages/', note:'All-inclusive packages from $275/person' },
              { icon:'🗺', label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', note:'For non-golfers — scenic tours, local experiences' },
              { icon:'✅', label:'Online Registration', href:'/online-registration-system/', note:'Each group member pays individually — no spreadsheets' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="svc">
                <span style={{ fontSize:18, flexShrink:0, opacity:.7 }}>{s.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:600, color:'#1A1408' }}>{s.label}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:12, color:'rgba(26,20,8,.45)', marginTop:2 }}>{s.note}</div>
                </div>
                <span style={{ color:'var(--copper)', fontSize:14, flexShrink:0, opacity:.6 }}>→</span>
              </Link>
            ))}
          </div>

          <div className="sr" style={{ marginTop:40, textAlign:'center' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'15px 44px', fontSize:12 }}>
              <span>Start Planning Your Trip</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          § 6  SOCIAL PROOF — testimonials
      ═══════════════════════════════════════ */}
      <section style={{ background:'var(--parchment)', padding:'clamp(72px,9vw,120px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ textAlign:'center', maxWidth:560, margin:'0 auto 52px' }}>
            <span className="eyebrow">What Golfers Say</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px auto 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,3.5vw,46px)', fontWeight:300, color:'#1A1408', lineHeight:1.1, letterSpacing:'-.02em', margin:0 }}>
              Don&apos;t take our word for it.
            </h2>
          </div>

          <div className="test-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="sr" style={{
                background:'#fff', padding:'clamp(28px,3vw,40px)',
                transitionDelay:`${i * .1}s`,
              }}>
                <div style={{ display:'flex', gap:2, marginBottom:20 }}>
                  {[...Array(t.rating)].map((_, s) => (
                    <span key={s} style={{ color:'#D4A832', fontSize:16 }}>★</span>
                  ))}
                </div>
                <p style={{ fontFamily:'var(--serif)', fontSize:'clamp(16px,1.6vw,20px)', fontWeight:300, color:'#1A1408', lineHeight:1.65, marginBottom:24, fontStyle:'italic' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop:'1px solid rgba(0,0,0,.08)', paddingTop:16 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, color:'#1A1408' }}>{t.name}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:11, color:'rgba(26,20,8,.4)', marginTop:3 }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          § 7  TRIP TYPES
      ═══════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'clamp(72px,9vw,120px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:48 }}>
            <span className="eyebrow">Who We Plan For</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,52px)', fontWeight:300, color:'#1A1408', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
              Every kind of group.
            </h2>
          </div>

          <div className="two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {[
              {
                title:'Golf Buddy Trips',
                href:'/golf-buddy-trips/',
                sub:'4–24 players',
                desc:'The trip your group has talked about for years. We secure the tee times, arrange the hotel block, handle transport and dining. You just play.',
                img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=85',
                cta:'Plan a Buddy Trip',
              },
              {
                title:'Corporate & Incentive',
                href:'/corporate-and-incentive-golf-travel/',
                sub:'20–200 players',
                desc:'Your top performers deserve Pebble Beach. Events that people fight to earn their invitation to again next year. Full logistics, group rates, premium access.',
                img:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=900&q=85',
                cta:'Plan a Corporate Event',
              },
            ].map((t, i) => (
              <Link key={t.href} href={t.href} className="dc" style={{ textDecoration:'none', display:'block', background:'#111' }}>
                <div className="dc-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${t.img})`, backgroundSize:'cover', backgroundPosition:'center', opacity:.7 }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.75) 100%)' }} />
                <div style={{ position:'relative', zIndex:1, padding:'clamp(28px,4vw,52px)', minHeight:340, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:10 }}>{t.sub}</div>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(24px,3vw,38px)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:14 }}>{t.title}</h3>
                  <p style={{ fontSize:14, lineHeight:1.75, color:'rgba(255,255,255,.65)', marginBottom:22, maxWidth:400 }}>{t.desc}</p>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'#D4A832' }}>
                    {t.cta} <span className="dc-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          § 8  TICKER
      ═══════════════════════════════════════ */}
      <div style={{ background:'var(--ink)', padding:'12px 0', overflow:'hidden', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <div className="ticker">
          {[...Array(2)].map((_, r) =>
            ['Pebble Beach summer 2026 filling now',
             'Licensed Seller of Travel · NV + FL ST37472',
             '10,000+ outings executed since 2005',
             '72-hour free cancellation on all bookings',
             'Groups of 4 to 200 players',
             'Scotland · Ireland · Portugal · Spain · Mexico',
            ].map((item, i) => (
              <span key={`${r}-${i}`} style={{ display:'inline-flex', alignItems:'center', gap:20, padding:'0 36px', fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(245,237,216,.38)', flexShrink:0 }}>
                <span style={{ width:3, height:3, borderRadius:'50%', background:'var(--copper)', display:'inline-block' }} />
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          § 9  FINAL CTA — dark forest green
      ═══════════════════════════════════════ */}
      <section style={{ background:'#0F1F0F', padding:'clamp(80px,11vw,140px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=60)', backgroundSize:'cover', backgroundPosition:'center', opacity:.08 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(15,31,15,.95) 0%, rgba(15,31,15,.85) 100%)' }} />

        <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:640, margin:'0 auto' }}>
          <span style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.26em', textTransform:'uppercase', color:'rgba(212,168,50,.7)' }}>
            No obligation · Free quote within 24 hours
          </span>
          <div style={{ width:40, height:1, background:'rgba(212,168,50,.4)', margin:'16px auto 28px' }} />
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,6vw,76px)', fontWeight:300, color:'#fff', lineHeight:.95, marginBottom:24, letterSpacing:'-.025em' }}>
            Tell us where.<br />
            <em style={{ fontStyle:'italic', color:'#D4A832' }}>We&apos;ll handle the rest.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.8, color:'rgba(255,255,255,.5)', marginBottom:44, fontWeight:300 }}>
            Two minutes. Tell us destination, group size, and budget.
            A specialist calls back with a full custom itinerary —
            tee times, hotel, transport, dining, everything.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:36 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'16px 48px', fontSize:12 }}>
              <span>Start Planning Now</span>
            </Link>
            <a href="tel:8885848232" style={{ display:'inline-flex', alignItems:'center', padding:'16px 32px', border:'1px solid rgba(255,255,255,.2)', color:'rgba(255,255,255,.75)', textDecoration:'none', fontFamily:'var(--sans)', fontSize:13, fontWeight:500, transition:'all .2s', letterSpacing:'.03em' }}>
              Call 888-584-8232
            </a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'4px 18px' }}>
            {['20+ years in business','Licensed NV & FL','10,000+ outings planned','Groups 4–200+'].map(t => (
              <span key={t} style={{ fontSize:10, color:'rgba(255,255,255,.22)', letterSpacing:'.06em' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll reveal */}
      <script dangerouslySetInnerHTML={{ __html: `(function(){var io=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.12});document.querySelectorAll('.sr').forEach(function(e){io.observe(e)})})()` }} />
    </>
  )
}
