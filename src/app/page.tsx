import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe | From $275/person',
  description: 'We book Pebble Beach ($675/round, 18-month advance), Shadow Creek ($1,250/round), and 200+ US courses for golf groups. 20+ years, 10,000+ outings. From $275/person.',
  alternates: { canonical: 'https://www.groupgolftours.com/' },
  openGraph: {
    title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe',
    description: 'Tee times at courses groups can\'t book independently. From $275/person.',
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
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3010 LBJ Freeway, Suite 1550',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75234',
        addressCountry: 'US',
      },
      description: 'Custom golf travel packages for groups. Pebble Beach, Shadow Creek, Edgewood Tahoe, Torrey Pines. 20+ years, 10,000+ outings.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How far in advance should a golf group book Pebble Beach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Golf groups should book Pebble Beach 12 to 18 months in advance. Lodge guests can book tee times up to 18 months ahead. Group Golf Tours coordinates resort rooms and tee times simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does Shadow Creek cost per round?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shadow Creek costs $1,250 per player, the most expensive public tee time in the United States. Available Monday through Thursday for MGM Resort hotel guests only. Includes private limousine and personal caddie.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the cheapest group golf packages from Group Golf Tours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Group golf packages start at $275 per person for a 1-night 2-round trip at Lakeridge Golf Course in Reno. Wolf Run packages from $395 per person.',
          },
        },
      ],
    },
  ],
}

const destinations = [
  {
    id: 'monterey',
    name: 'Monterey & Pebble Beach',
    tag: 'California Coast',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    accent: '#5ED8C8',
    accentRgb: '94,216,200',
    stat: '$675',
    sub: '/round',
    label: 'Pebble Beach Links',
    fact: '6× US Open host · #1 public course in America',
    urgency: 'Book 12–18 months out',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1400&q=90',
    pos: 'center 35%',
    featured: true,
  },
  {
    id: 'tahoe',
    name: 'Lake Tahoe & Northern Nevada',
    tag: 'Sierra Nevada',
    href: '/portfolio-item/lake-tahoe-and-northern-nevada/',
    accent: '#80C8F0',
    accentRgb: '128,200,240',
    stat: '$275',
    sub: '/person',
    label: 'Reno packages from',
    fact: '6,200 ft elevation · ball flies 10% farther',
    urgency: 'Summer books by February',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1400&q=85',
    pos: 'center 40%',
    featured: false,
  },
  {
    id: 'vegas',
    name: 'Las Vegas & Southern Nevada',
    tag: 'Desert Southwest',
    href: '/portfolio-item/las-vegas-and-southern-nevada/',
    accent: '#F8C030',
    accentRgb: '248,192,48',
    stat: '$1,250',
    sub: '/round',
    label: "America's most expensive",
    fact: 'Shadow Creek · limo + caddie included',
    urgency: 'MGM guests Mon–Thu only',
    img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1400&q=85',
    pos: 'center 50%',
    featured: false,
  },
  {
    id: 'socal',
    name: 'Southern California',
    tag: 'Year-Round Golf',
    href: '/portfolio-item/monterey-and-pebble-beach-2/',
    accent: '#F87050',
    accentRgb: '248,112,80',
    stat: '$2,950',
    sub: '/person',
    label: '5-night/4-round package',
    fact: 'Torrey Pines · 2× US Open · 365 days/year',
    urgency: 'Non-resident slots limited',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&q=85',
    pos: 'center 30%',
    featured: false,
  },
  {
    id: 'somersett',
    name: 'Somersett Golf & CC',
    tag: 'Private Club · Reno',
    href: '/portfolio-item/somersett-golf-country-club/',
    accent: '#98D060',
    accentRgb: '152,208,96',
    stat: '$540',
    sub: '/person',
    label: 'Private access from',
    fact: 'Golfweek top private residential · 5,200 ft',
    urgency: 'Access by arrangement only',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85',
    pos: 'center 40%',
    featured: false,
  },
]

const services = [
  { icon: '⛳', label: 'Tee Times', href: '/golf-courses/', note: 'Priority access · 200+ courses' },
  { icon: '🏨', label: 'Hotels', href: '/hotel-reservations/', note: 'Group blocks · negotiated rates' },
  { icon: '🚌', label: 'Transport', href: '/transportation/', note: 'Airport transfers · shuttles' },
  { icon: '🍽', label: 'Dining', href: '/dining-events-and-arrangements/', note: 'Award-winning · pre-arranged' },
  { icon: '🛡', label: 'Insurance', href: '/travel-insurance/', note: '72-hr free cancellation' },
  { icon: '📋', label: 'Packages', href: '/tour-packages/', note: 'All-in from $275/person' },
  { icon: '🗺', label: 'Activities', href: '/site-seeing-and-non-golf-activities/', note: 'Non-golfers welcome' },
  { icon: '✅', label: 'Registration', href: '/online-registration-system/', note: 'Members pay individually' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <style>{`
        /* Hero animations */
        @keyframes charUp { from{opacity:0;transform:translateY(1em) skewY(4deg)} to{opacity:1;transform:none} }
        @keyframes meshFloat { 0%,100%{transform:translate(0,0)} 33%{transform:translate(2%,-2%)} 66%{transform:translate(-2%,1.5%)} }
        @keyframes glowPulse { 0%,100%{text-shadow:0 0 18px currentColor;opacity:.88} 50%{text-shadow:0 0 50px currentColor,0 0 90px currentColor;opacity:1} }
        @keyframes scrollPulse { 0%,100%{transform:scaleY(.2);transform-origin:top;opacity:0} 40%,60%{transform:scaleY(1);transform-origin:top;opacity:1} }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes sweepRight { from{transform:scaleX(0);transform-origin:left} to{transform:scaleX(1);transform-origin:left} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes tickerScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .hline { display:block; overflow:hidden; line-height:0.95 }
        .hline span { display:inline-block; animation:charUp .95s cubic-bezier(.22,1,.36,1) both }
        .hline:nth-child(1) span { animation-delay:.04s }
        .hline:nth-child(2) span { animation-delay:.13s }
        .hline:nth-child(3) span { animation-delay:.22s }
        .hline:nth-child(4) span { animation-delay:.30s }

        .glow { animation:glowPulse 3.5s ease-in-out infinite }
        .mesh { animation:meshFloat 16s ease-in-out infinite }
        .float-badge { animation:floatY 5s ease-in-out infinite }
        .float-badge:nth-child(2) { animation-delay:-1.8s }
        .float-badge:nth-child(3) { animation-delay:-3.4s }

        /* Destination cards */
        .dest-card-img { transition:transform .78s cubic-bezier(.22,1,.36,1) }
        .dest-card:hover .dest-card-img { transform:scale(1.06) }
        .dest-card-bar { transform:scaleX(0); transform-origin:left; transition:transform .48s cubic-bezier(.22,1,.36,1) }
        .dest-card:hover .dest-card-bar { transform:scaleX(1) }
        .dest-card-arrow { display:inline-block; transition:transform .22s }
        .dest-card:hover .dest-card-arrow { transform:translateX(6px) }

        /* Service cards */
        .srv-card { transition:all .28s cubic-bezier(.22,1,.36,1) }
        .srv-card:hover { transform:translateY(-4px) }

        /* Flip cards */
        .flip { perspective:900px; cursor:pointer }
        .flip-body { position:relative; width:100%; height:100%; transform-style:preserve-3d; transition:transform .64s cubic-bezier(.22,1,.36,1) }
        .flip:hover .flip-body { transform:rotateY(180deg) }
        .flip-f,.flip-b { position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden }
        .flip-b { transform:rotateY(180deg) }

        /* Ticker */
        .ticker-inner { display:flex; white-space:nowrap; animation:tickerScroll 28s linear infinite }

        /* Scroll reveal */
        .sr { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1) }
        .sr.on { opacity:1; transform:none }
        .d1{transition-delay:.07s}.d2{transition-delay:.14s}.d3{transition-delay:.21s}
        .d4{transition-delay:.28s}.d5{transition-delay:.35s}.d6{transition-delay:.42s}
        .d7{transition-delay:.49s}.d8{transition-delay:.56s}

        /* Corner marks */
        .corner-tl{position:absolute;top:24px;left:24px;width:40px;height:40px;border-top:1px solid rgba(212,168,50,.5);border-left:1px solid rgba(212,168,50,.5)}
        .corner-br{position:absolute;bottom:24px;right:24px;width:40px;height:40px;border-bottom:1px solid rgba(212,168,50,.5);border-right:1px solid rgba(212,168,50,.5)}

        /* Responsive */
        @media(max-width:768px){
          .hero-h1{font-size:clamp(48px,13.5vw,80px)!important;line-height:.90!important}
          .hero-badges{display:none!important}
          .hero-trust{grid-template-columns:1fr 1fr!important}
          .dest-grid-main{grid-template-columns:1fr!important;grid-template-rows:auto!important}
          .dest-grid-bottom{grid-template-columns:1fr!important}
          .dest-featured{min-height:320px!important}
          .saffron-grid{grid-template-columns:1fr!important;gap:44px!important}
          .exp-grid{grid-template-columns:1fr!important}
          .ps-grid{grid-template-columns:1fr 1fr!important}
          .srv-grid{grid-template-columns:1fr 1fr!important}
          .cta-grid{grid-template-columns:1fr!important}
          .cta-h{font-size:clamp(40px,12vw,64px)!important}
          .flip{height:auto!important}
          .flip-body{transform:none!important;transform-style:flat;position:relative;height:auto}
          .flip-f,.flip-b{position:relative;inset:auto;backface-visibility:visible;-webkit-backface-visibility:visible}
          .flip-b{transform:none;border-top:1px solid rgba(255,255,255,.1)}
        }
        @media(max-width:480px){
          .ps-grid{grid-template-columns:1fr!important}
          .srv-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ══ §1 HERO ══ */}
      <section
        className="grain"
        style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', background:'#0A0806', overflow:'hidden' }}
      >
        {/* Breathing mesh */}
        <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
          <div className="mesh" style={{
            position:'absolute', width:'170%', height:'170%', top:'-35%', left:'-35%',
            background:`radial-gradient(ellipse 65% 55% at 20% 65%, rgba(168,72,32,.22) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 80% 30%, rgba(64,24,0,.32) 0%, transparent 55%),
              radial-gradient(ellipse 45% 45% at 55% 80%, rgba(61,24,64,.18) 0%, transparent 50%),
              radial-gradient(ellipse 35% 35% at 35% 25%, rgba(200,121,65,.10) 0%, transparent 45%)`,
          }} />
        </div>

        {/* Photo underlay */}
        <div style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[0].img})`, backgroundSize:'cover', backgroundPosition:'center 35%', opacity:.18, zIndex:1 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(112deg,rgba(10,8,6,.98) 0%,rgba(10,8,6,.88) 42%,rgba(10,8,6,.45) 72%,rgba(10,8,6,.12) 100%)', zIndex:2 }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'50%', background:'linear-gradient(to top,rgba(10,8,6,.96) 0%,transparent 100%)', zIndex:2 }} />

        {/* Copper rule */}
        <div style={{ position:'absolute', left:'clamp(16px,5vw,80px)', top:'16%', bottom:'16%', width:1, background:'linear-gradient(to bottom,transparent,#C87941 28%,#C87941 72%,transparent)', opacity:.45, zIndex:3, animation:'sweepRight .8s .5s both' }} />

        {/* Floating price badges */}
        <div className="hero-badges" style={{ position:'absolute', right:'clamp(32px,5vw,80px)', top:'18%', zIndex:5, display:'flex', flexDirection:'column', gap:14 }}>
          {[
            { label:'Pebble Beach Golf Links', price:'$675', sub:'per round', accent:'#5ED8C8' },
            { label:'Shadow Creek Las Vegas', price:'$1,250', sub:'per round', accent:'#F8C030' },
            { label:'Reno Group Packages', price:'$275', sub:'per person', accent:'#80C8F0' },
          ].map((b, i) => (
            <div key={b.label} className="float-badge" style={{
              background:'rgba(10,8,6,.82)', backdropFilter:'blur(20px)',
              border:`1px solid rgba(${b.accent.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')}, .28)`,
              padding:'14px 20px', minWidth:196, position:'relative', overflow:'hidden',
              animation:`floatY 5s ${i*1.8}s ease-in-out infinite`,
            }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:b.accent, opacity:.7 }} />
              <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:b.accent, opacity:.75, marginBottom:5 }}>{b.label}</div>
              <div className="glow" style={{ fontFamily:'var(--serif)', fontSize:30, color:b.accent, lineHeight:1 }}>{b.price}</div>
              <div style={{ fontSize:10, color:'rgba(245,237,216,.35)', marginTop:3 }}>{b.sub}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="wrap" style={{ position:'relative', zIndex:4, paddingTop:110, paddingBottom:110, width:'100%' }}>
          <div style={{ maxWidth:780, paddingLeft:'clamp(0px,2vw,28px)' }}>

            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:30, animation:'fadeUp .8s .3s both' }}>
              <div style={{ width:28, height:1, background:'var(--copper)', flexShrink:0, animation:'sweepRight .8s .3s both' }} />
              <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'var(--copper)' }}>
                20+ Years · 10,000+ Outings · Licensed NV &amp; FL
              </span>
            </div>

            <h1 className="hero-h1" style={{ fontFamily:'var(--serif)', fontSize:'clamp(56px,8.5vw,112px)', fontWeight:300, lineHeight:.93, letterSpacing:'-.025em', marginBottom:36 }}>
              <span className="hline" style={{ color:'var(--cream)' }}><span>Pebble Beach.</span></span>
              <span className="hline" style={{ color:'var(--cream)' }}><span>Shadow Creek.</span></span>
              <span className="hline"><span className="metal glow" style={{ fontStyle:'italic' }}>Your group,</span></span>
              <span className="hline"><span className="metal glow" style={{ fontStyle:'italic' }}>secured.</span></span>
            </h1>

            <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,.65)', maxWidth:520, marginBottom:44, fontWeight:300, animation:'fadeUp .8s .5s both' }}>
              We book the tee times your group can&apos;t get alone —
              Pebble Beach at <strong style={{ color:'var(--cream)', fontWeight:600 }}>$675/round</strong> (18-month advance required),
              Shadow Creek at <strong style={{ color:'var(--cream)', fontWeight:600 }}>$1,250/round</strong> (MGM guests only, limo &amp; caddie included).
              One call. Everything handled.
            </p>

            <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:56, animation:'fadeUp .8s .6s both' }}>
              <Link href="/tour-inquiry/" className="btn btn-gold"><span>Plan My Group Trip</span></Link>
              <a href="tel:8885848232" className="btn btn-ghost">888-584-8232</a>
            </div>

            <div className="hero-trust" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:28, paddingTop:26, borderTop:'1px solid rgba(200,121,65,.16)', maxWidth:560, animation:'fadeUp .8s .7s both' }}>
              {[{n:'20+',l:'Years'},{n:'10K+',l:'Outings'},{n:'$275',l:'From / person'},{n:'200+',l:'Courses'}].map(s => (
                <div key={s.n}>
                  <div style={{ fontFamily:'var(--serif)', fontSize:28, fontWeight:300, color:'var(--copper)', lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:10, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(245,237,216,.28)', marginTop:4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', zIndex:5 }}>
          <div style={{ width:1, height:52, background:'var(--copper)', animation:'scrollPulse 2.2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ══ §2 PRICING BAR ══ */}
      <div className="grain" style={{ background:'var(--plum)', borderTop:'1px solid rgba(212,136,106,.2)', borderBottom:'1px solid rgba(212,136,106,.2)', overflow:'hidden' }}>
        <div className="wrap" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)' }}>
          {[
            { course:'Pebble Beach', fee:'$675', sub:'/round', note:'18-month advance', flag:'6× US Open host', c:'#5ED8C8' },
            { course:'Shadow Creek', fee:'$1,250', sub:'/round', note:'Limo + caddie incl.', flag:"Most expensive in USA", c:'#F8C030' },
            { course:'Edgewood Tahoe', fee:'~$350', sub:'/round', note:'6,200 ft elevation', flag:'Golf Digest Top 100', c:'#80C8F0' },
            { course:'Torrey Pines S.', fee:'$277–$345', sub:'/round', note:'Non-resident rate', flag:'2× US Open host', c:'#F87050' },
            { course:'Reno From', fee:'$275', sub:'/person', note:'82 documented trips', flag:'Starter packages', c:'#98D060' },
          ].map((c, i) => (
            <div key={c.course} style={{ padding:'clamp(16px,2.5vw,28px) clamp(10px,1.5vw,20px)', borderLeft:i>0?'1px solid rgba(245,237,216,.06)':'none', textAlign:'center' }}>
              <div style={{ fontSize:7, fontWeight:700, letterSpacing:'.24em', textTransform:'uppercase', color:c.c, opacity:.72, marginBottom:6 }}>{c.course}</div>
              <div style={{ display:'flex', alignItems:'baseline', justifyContent:'center', gap:1 }}>
                <span style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2.8vw,32px)', color:c.c, lineHeight:1 }}>{c.fee}</span>
                <span style={{ fontSize:9, color:'rgba(245,237,216,.25)', paddingLeft:2 }}>{c.sub}</span>
              </div>
              <div style={{ fontSize:9, color:'rgba(245,237,216,.3)', marginTop:4 }}>{c.note}</div>
              <div style={{ fontSize:8, color:c.c, marginTop:3, fontWeight:700, opacity:.6, letterSpacing:'.08em' }}>{c.flag}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ §3 TICKER ══ */}
      <div style={{ background:'#060402', borderBottom:'1px solid rgba(255,255,255,.04)', padding:'10px 0', overflow:'hidden' }}>
        <div className="ticker-inner">
          {[...Array(2)].map((_, rep) => (
            ['Pebble Beach summer tee sheets filling now',
             'Scotland & Ireland 2026 tours available',
             'Licensed Seller of Travel · NV + FL ST37472',
             '10,000+ outings executed since 2005',
             '72-hour free cancellation on all bookings',
             'Groups 4–200 · one call handles everything',
            ].map((item, i) => (
              <span key={`${rep}-${i}`} style={{ display:'inline-flex', alignItems:'center', gap:16, padding:'0 40px', fontSize:11, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(245,237,216,.35)', flexShrink:0 }}>
                <span style={{ width:4, height:4, borderRadius:'50%', background:'var(--copper)', flexShrink:0, display:'inline-block' }} />
                {item}
              </span>
            ))
          ))}
        </div>
      </div>

      {/* ══ §4 DESTINATIONS ══ */}
      <section className="grain" style={{ background:'#0A0C0A', paddingTop:'clamp(72px,9vw,120px)' }}>
        <div className="wrap">
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:20, marginBottom:44 }}>
            <div className="sr">
              <span className="eyebrow">Where We Play</span>
              <div style={{ width:42, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,5.5vw,66px)', fontWeight:300, color:'var(--cream)', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
                Five Regions.<br />
                <em style={{ fontStyle:'italic', color:'rgba(245,237,216,.36)' }}>Five Distinct Worlds.</em>
              </h2>
            </div>
            <Link href="/destinations/" style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--copper)', textDecoration:'none', opacity:.7, whiteSpace:'nowrap' }}>
              All destinations →
            </Link>
          </div>
        </div>

        {/* Destination grid */}
        <div className="dest-grid-main" style={{ display:'grid', gridTemplateColumns:'1.65fr 1fr', gridTemplateRows:'540px 300px', gap:8, padding:'0 8px' }}>

          {/* Pebble Beach — featured */}
          <Link href="/portfolio-item/monterey-and-pebble-beach/" className="dest-card" style={{ textDecoration:'none', display:'block', background:'#0D2A34', gridRow:'1/2', position:'relative', overflow:'hidden', cursor:'pointer' }}>
            <div className="dest-card-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[0].img})`, backgroundSize:'cover', backgroundPosition:destinations[0].pos }} />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(13,42,52,.1) 0%,rgba(13,42,52,0) 40%,rgba(13,42,52,.85) 100%)' }} />
            <div style={{ position:'absolute', top:20, left:20, background:'rgba(13,42,52,.8)', backdropFilter:'blur(8px)', padding:'6px 14px', border:'1px solid rgba(94,216,200,.25)' }}>
              <span style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'#5ED8C8' }}>California Coast</span>
            </div>
            <div className="dest-card-bar" style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'#5ED8C8' }} />
            <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'0 36px 36px' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(60px,7vw,100px)', fontWeight:300, color:'#5ED8C8', lineHeight:.88, letterSpacing:'-.04em', marginBottom:8 }}>$675</div>
              <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(94,216,200,.65)', marginBottom:6 }}>per round · Pebble Beach Golf Links</div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,26px)', fontWeight:300, color:'var(--cream)', letterSpacing:'-.01em', lineHeight:1.15 }}>Monterey &amp;<br />Pebble Beach</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(94,216,200,.5)', marginBottom:4 }}>6× US Open host</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:8, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(94,216,200,.35)' }}>Book 12–18 months out</div>
                  <div className="dest-card-arrow" style={{ marginTop:12, display:'inline-flex', alignItems:'center', justifyContent:'center', width:36, height:36, borderRadius:'50%', border:'1px solid rgba(94,216,200,.4)', color:'#5ED8C8', fontSize:14 }}>→</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Right column */}
          <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:8 }}>
            {/* Tahoe */}
            <Link href="/portfolio-item/lake-tahoe-and-northern-nevada/" className="dest-card" style={{ textDecoration:'none', display:'block', background:'#0E1830', position:'relative', overflow:'hidden' }}>
              <div className="dest-card-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[1].img})`, backgroundSize:'cover', backgroundPosition:destinations[1].pos, opacity:.25 }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(14,24,48,.85) 0%,rgba(26,32,72,.6) 50%,rgba(14,24,48,.9) 100%)' }} />
              <div className="dest-card-bar" style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'#80C8F0' }} />
              <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px 24px', textAlign:'center' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'rgba(128,200,240,.6)', marginBottom:10 }}>Sierra Nevada</div>
                <div style={{ transform:'rotate(-3deg)', border:'1px solid rgba(128,200,240,.4)', padding:'8px 20px', marginBottom:12, display:'inline-block' }}>
                  <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'.2em', color:'#80C8F0' }}>6,200 FT</span>
                </div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2.2vw,26px)', fontWeight:300, color:'var(--cream)', lineHeight:1.1, letterSpacing:'-.02em', marginBottom:8 }}>Lake Tahoe &amp;<br />Northern Nevada</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:4, justifyContent:'center' }}>
                  <span style={{ fontFamily:'var(--serif)', fontSize:34, color:'#80C8F0', lineHeight:1 }}>$275</span>
                  <span style={{ fontSize:10, color:'rgba(128,200,240,.45)' }}>/person from</span>
                </div>
                <div className="dest-card-arrow" style={{ marginTop:10, fontSize:9, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'#80C8F0' }}>Explore →</div>
              </div>
            </Link>

            {/* Vegas */}
            <Link href="/portfolio-item/las-vegas-and-southern-nevada/" className="dest-card" style={{ textDecoration:'none', display:'block', background:'#0A0600', position:'relative', overflow:'hidden' }}>
              <div className="dest-card-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[2].img})`, backgroundSize:'cover', backgroundPosition:destinations[2].pos, opacity:.15 }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(145deg,#0A0600 0%,#1A0800 60%,#0A0400 100%)' }} />
              <div className="dest-card-bar" style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'#F8C030' }} />
              <div style={{ position:'absolute', top:'50%', right:24, transform:'translateY(-50%)', width:88, height:88, borderRadius:'50%', border:'1.5px solid rgba(248,192,48,.5)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:22, color:'#F8C030', lineHeight:1, fontWeight:300 }}>$1,250</div>
                <div style={{ fontSize:7, letterSpacing:'.12em', color:'rgba(248,192,48,.5)', textTransform:'uppercase', marginTop:3 }}>per round</div>
              </div>
              <div style={{ position:'absolute', inset:0, padding:'18px 20px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'.38em', textTransform:'uppercase', color:'rgba(248,192,48,.6)', marginBottom:10 }}>SHADOW CREEK</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(16px,1.8vw,22px)', fontWeight:300, color:'var(--cream)', lineHeight:1.15, maxWidth:160, marginBottom:8 }}>Las Vegas &amp;<br />Southern Nevada</div>
                <div style={{ width:24, height:1, background:'rgba(248,192,48,.4)', marginBottom:8 }} />
                <div style={{ fontFamily:'var(--sans)', fontSize:8, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(248,192,48,.4)' }}>Limo + caddie · MGM guests only</div>
                <div className="dest-card-arrow" style={{ marginTop:10, fontSize:9, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#F8C030' }}>Explore →</div>
              </div>
            </Link>
          </div>

          {/* Bottom row */}
          <div className="dest-grid-bottom" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, gridColumn:'1/3' }}>

            {/* SoCal */}
            <Link href="/portfolio-item/monterey-and-pebble-beach-2/" className="dest-card" style={{ textDecoration:'none', display:'block', background:'#5A1A08', position:'relative', overflow:'hidden', minHeight:280 }}>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,#7A2410 0%,#3A0E04 55%,#1A0800 100%)' }} />
              <div className="dest-card-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[3].img})`, backgroundSize:'cover', backgroundPosition:destinations[3].pos, opacity:.2, mixBlendMode:'luminosity' }} />
              <div className="dest-card-bar" style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'#F87050' }} />
              <div style={{ position:'absolute', inset:0, padding:'24px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:7, fontWeight:700, letterSpacing:'.32em', textTransform:'uppercase', color:'rgba(245,192,48,.7)', marginBottom:8 }}>Year-Round Golf</div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(20px,2.2vw,28px)', fontWeight:400, color:'#F5EDD8', lineHeight:1.0 }}>Southern<br />California</div>
                </div>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:8, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(245,192,48,.5)', marginBottom:6 }}>Torrey Pines · 2× US Open</div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
                    <span style={{ fontFamily:'var(--serif)', fontSize:32, color:'#F5C842', lineHeight:1 }}>$2,950</span>
                    <span style={{ fontSize:9, color:'rgba(245,200,66,.45)' }}>/person</span>
                  </div>
                  <div className="dest-card-arrow" style={{ marginTop:8, fontSize:9, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#F5C842' }}>Explore →</div>
                </div>
              </div>
            </Link>

            {/* Somersett */}
            <Link href="/portfolio-item/somersett-golf-country-club/" className="dest-card" style={{ textDecoration:'none', display:'block', background:'#EDE0C4', position:'relative', overflow:'hidden', minHeight:280 }}>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 80% at 30% 30%,rgba(255,252,245,.6) 0%,rgba(232,216,190,0) 70%)' }} />
              <div className="dest-card-img" style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[4].img})`, backgroundSize:'cover', backgroundPosition:destinations[4].pos, opacity:.12, mixBlendMode:'multiply' }} />
              <div className="dest-card-bar" style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'#8A5228' }} />
              <div style={{ position:'absolute', inset:0, padding:'24px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
                    <div style={{ width:16, height:1, background:'rgba(80,50,20,.35)' }} />
                    <div style={{ fontFamily:'var(--sans)', fontSize:7, fontWeight:700, letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(120,40,24,.7)' }}>Members Only</div>
                  </div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,1.8vw,24px)', fontWeight:400, color:'#1A1008', lineHeight:1.15 }}>Somersett Golf<br />&amp; Country Club</div>
                </div>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:7, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(80,50,20,.4)', marginBottom:4 }}>Golfweek Top Private · Reno NV</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:7, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(80,50,20,.35)', marginBottom:8 }}>5,200 ft · Private Access</div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
                    <span style={{ fontFamily:'var(--serif)', fontSize:32, color:'#8A5228', lineHeight:1 }}>$540</span>
                    <span style={{ fontSize:9, color:'rgba(100,60,20,.5)' }}>/person</span>
                  </div>
                  <div className="dest-card-arrow" style={{ marginTop:8, fontSize:9, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#8A5228' }}>Explore →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA below grid */}
        <div className="wrap" style={{ paddingTop:12, paddingBottom:8 }}>
          <div className="grain sr" style={{ background:'linear-gradient(145deg,rgba(200,121,65,.08) 0%,rgba(61,24,64,.15) 100%)', border:'1px solid rgba(200,121,65,.15)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'28px 40px', gap:24, flexWrap:'wrap' }}>
            <div>
              <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(20px,2.5vw,30px)', fontWeight:300, color:'var(--cream)', lineHeight:1.1 }}>Not sure which region? Tell us your budget.</div>
              <div style={{ fontSize:13, color:'rgba(245,237,216,.38)', marginTop:6 }}>We match you to the right destination within 24 hours. No commitment.</div>
            </div>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ whiteSpace:'nowrap', padding:'14px 36px' }}><span>Get Free Plan →</span></Link>
          </div>
        </div>
      </section>

      {/* ══ §5 FOR THE TRIP CAPTAIN ══ */}
      <section className="grain cut-dn" style={{ background:'#C89020', padding:'clamp(80px,10vw,130px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 80% at 80% 50%,rgba(168,72,32,.2) 0%,transparent 60%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-50%)', fontFamily:'var(--serif)', fontSize:'clamp(200px,25vw,380px)', fontWeight:300, color:'rgba(168,72,32,.14)', lineHeight:1, userSelect:'none', pointerEvents:'none', letterSpacing:'-.05em' }}>20+</div>

        <div className="wrap saffron-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center', position:'relative', zIndex:1 }}>
          <div className="sr">
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'rgba(64,24,0,.6)' }}>For the Trip Captain</span>
            <div style={{ width:40, height:1, background:'rgba(64,24,0,.5)', margin:'14px 0 24px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,4.2vw,54px)', fontWeight:300, color:'#1A0800', lineHeight:1.08, marginBottom:22, letterSpacing:'-.02em' }}>
              You make the<br />
              <em style={{ fontStyle:'italic', color:'rgba(64,24,0,.85)' }}>impossible</em> happen.
            </h2>
            <p style={{ fontSize:16, lineHeight:1.95, color:'rgba(64,24,0,.62)', marginBottom:18 }}>
              Every group has one person who takes on the trip everyone talks about for years.
              Miss the booking window, pick the wrong course, lose the room block — and you never hear the end of it.
            </p>
            <p style={{ fontSize:16, lineHeight:1.95, color:'rgba(64,24,0,.62)', marginBottom:38 }}>
              Since 2005 we&apos;ve made Trip Captains look like legends. Tee times at courses the public can&apos;t touch.
              Room blocks held before they vanish. <strong style={{ color:'#1A0800', fontWeight:700 }}>You take the credit. We do the work.</strong>
            </p>
            <Link href="/tour-inquiry/" className="btn btn-ink" style={{ padding:'15px 38px' }}>
              <span>Start Planning Free</span>
            </Link>
          </div>

          <div>
            {[
              { n:'01', bar:'#5ED8C8', title:'Preferred tee time access', body:'Pebble Beach, Shadow Creek, Edgewood Tahoe, Torrey Pines. We hold relationships the public doesn\'t. Groups get the slots marked "unavailable."' },
              { n:'02', bar:'#80C8F0', title:'Room blocks held on inquiry', body:'Atlantis, Peppermill, Eldorado, MGM. We hold group blocks the day you call — before they sell. Your group stays together.' },
              { n:'03', bar:'#F8C030', title:'One contact handles everything', body:'Tee times, hotels, shuttles, dining, insurance. One call, one itinerary. No forwarded emails, no spreadsheets.' },
              { n:'04', bar:'#98D060', title:'20 years of backup plans', body:'10,000+ outings. We\'ve handled every cancellation, weather event, and overbooking. We have the backup.' },
            ].map((p, i) => (
              <div key={p.n} className="sr" style={{ display:'flex', gap:16, padding:'20px 0', borderBottom:i<3?'1px solid rgba(64,24,0,.12)':'none', transition:'transform .2s', cursor:'default' }}>
                <div style={{ width:4, alignSelf:'stretch', background:p.bar, borderRadius:2, flexShrink:0 }} />
                <div style={{ paddingLeft:12, flex:1 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(64,24,0,.45)', marginBottom:6 }}>{p.n}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'#1A0800', marginBottom:5 }}>{p.title}</div>
                  <div style={{ fontSize:13, lineHeight:1.78, color:'rgba(64,24,0,.55)' }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §6 SERVICES ══ */}
      <section className="grain" style={{ background:'#080808', padding:'clamp(72px,9vw,112px) 0', borderTop:'1px solid rgba(255,255,255,.04)' }}>
        <div className="wrap">
          <div className="sr" style={{ marginBottom:48 }}>
            <span className="eyebrow-light">Full Service</span>
            <div style={{ width:40, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4.5vw,56px)', fontWeight:300, color:'var(--cream)', lineHeight:1.0, letterSpacing:'-.02em', margin:0 }}>
              Everything handled.<br />
              <em style={{ fontStyle:'italic', color:'rgba(245,237,216,.38)' }}>Nothing left to chance.</em>
            </h2>
          </div>
          <div className="srv-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2 }}>
            {services.map((s, i) => (
              <Link key={s.href} href={s.href} className="srv-card sr" style={{
                display:'flex', gap:14, padding:'20px 18px',
                background:'rgba(255,255,255,.025)',
                textDecoration:'none',
                borderLeft:'2px solid transparent',
                alignItems:'flex-start',
                transitionDelay:`${i * 0.06}s`,
              }}>
                <span style={{ fontSize:20, flexShrink:0, opacity:.75 }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:600, color:'rgba(245,237,216,.8)', marginBottom:4 }}>{s.label}</div>
                  <div style={{ fontSize:11, color:'rgba(245,237,216,.3)', lineHeight:1.5 }}>{s.note}</div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`.srv-card:hover{background:rgba(255,255,255,.05)!important;border-left-color:var(--copper)!important}.srv-card:hover div:first-child{color:var(--copper)!important}`}</style>
        </div>
      </section>

      {/* ══ §7 PROBLEM / SOLUTION FLIP CARDS ══ */}
      <section className="grain" style={{ background:'#141824', padding:'clamp(72px,9vw,112px) 0' }}>
        <div className="wrap">
          <div className="sr" style={{ textAlign:'center', maxWidth:520, margin:'0 auto 52px' }}>
            <span className="eyebrow-light">The Honest Truth</span>
            <div style={{ width:40, height:1, background:'rgba(245,237,216,.2)', margin:'14px auto 20px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4.5vw,52px)', fontWeight:300, color:'var(--cream)', lineHeight:1.08, margin:0, letterSpacing:'-.02em' }}>
              Why groups who try<br />
              <em style={{ fontStyle:'italic', color:'rgba(245,237,216,.5)' }}>to do this themselves</em> fail.
            </h2>
            <p style={{ fontSize:12, color:'rgba(245,237,216,.3)', marginTop:12, letterSpacing:'.06em', fontStyle:'italic' }}>Hover each card to see the solution</p>
          </div>

          <div className="ps-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
            {[
              { icon:'🔐', problem:'Pebble Beach requires a resort stay to book more than 24 hours in advance. Groups shut out.', solution:'We coordinate your room and tee times simultaneously. Your group gets the 18-month window.', borderColor:'#5ED8C8', solutionBg:'rgba(24,64,56,.9)' },
              { icon:'🚘', problem:'Shadow Creek is MGM hotel guests only, Mon–Thu. Most groups don\'t know until it\'s too late.', solution:'We package the MGM stay with Shadow Creek tee times — limo, caddie, the full experience.', borderColor:'#F8C030', solutionBg:'rgba(64,40,0,.95)' },
              { icon:'🏨', problem:'Group room blocks vanish. Late groups end up split across three hotels.', solution:'We hold your block the day you inquire. Group stays together, dines together, plays together.', borderColor:'#80C8F0', solutionBg:'rgba(24,32,64,.95)' },
              { icon:'💸', problem:'Corporate groups pay retail for 30+ tee times. The overage destroys the budget.', solution:'Volume relationships mean group rates on every element — courses, hotels, transport.', borderColor:'#F87050', solutionBg:'rgba(64,16,8,.95)' },
              { icon:'🛡', problem:'One cancellation can cascade across hotels, flights, and tee times.', solution:'72-hour policy + travel insurance + 20 years of backup relationships. Every scenario covered.', borderColor:'#98D060', solutionBg:'rgba(24,44,20,.95)' },
              { icon:'⏱', problem:'The Trip Captain spends 40+ hours planning. Nobody gets paid for that.', solution:'One form. One call. We send you the itinerary. You show up with your clubs and play.', borderColor:'#D4886A', solutionBg:'rgba(64,24,16,.95)' },
            ].map((item, i) => {
              const rgb = item.borderColor.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')
              return (
                <div key={i} className="flip" style={{ height:196 }}>
                  <div className="flip-body">
                    <div className="flip-f" style={{ background:'rgba(20,24,36,.95)', border:`1px solid rgba(${rgb},.32)`, padding:'20px 18px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                      <div>
                        <div style={{ fontSize:24, marginBottom:12 }}>{item.icon}</div>
                        <div style={{ fontSize:12, lineHeight:1.75, color:'rgba(245,237,216,.5)', fontStyle:'italic' }}>{item.problem}</div>
                      </div>
                      <div style={{ fontSize:8, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:`rgba(${rgb},.55)`, marginTop:10 }}>hover to solve →</div>
                    </div>
                    <div className="flip-b" style={{ background:item.solutionBg, border:`1px solid rgba(${rgb},.4)`, padding:'20px 18px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                      <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:`rgba(${rgb},.9)`, marginBottom:12 }}>The solution</div>
                      <div style={{ fontSize:13, lineHeight:1.82, color:'rgba(245,237,216,.8)', fontWeight:500 }}>{item.solution}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ §8 FINAL CTA ══ */}
      <section className="grain" style={{ background:'linear-gradient(145deg,#1A1208 0%,#0C0A06 40%,#1A0C04 70%,#0C0806 100%)', padding:'clamp(88px,12vw,156px) 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`url(${destinations[1].img})`, backgroundSize:'cover', backgroundPosition:'center', opacity:.055, zIndex:1 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(12,10,6,.45) 0%,rgba(12,10,6,.98) 100%)', zIndex:2 }} />

        <div className="wrap" style={{ position:'relative', zIndex:3, maxWidth:660 }}>
          <div className="corner-tl" />
          <div className="corner-br" />

          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'rgba(200,152,64,.7)' }}>No obligation · Response in 24 hrs</span>
          <div style={{ width:40, height:1, background:'var(--copper)', margin:'16px auto 28px' }} />
          <h2 className="cta-h" style={{ fontFamily:'var(--serif)', fontSize:'clamp(44px,8vw,88px)', fontWeight:300, color:'var(--cream)', lineHeight:.93, marginBottom:28, letterSpacing:'-.025em' }}>
            Tell us where.<br />
            <em className="metal glow" style={{ fontStyle:'italic' }}>We&apos;ll handle<br />the rest.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,.52)', marginBottom:48, maxWidth:480, margin:'0 auto 48px', fontWeight:300 }}>
            Two minutes. Tell us destination, group size, and budget.
            A specialist calls back with a full custom itinerary —
            tee times, hotel, transport, dining, everything.
          </p>
          <div className="cta-grid" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:40 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'17px 52px', fontSize:12 }}><span>Start Planning Now</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost" style={{ padding:'17px 36px', fontSize:12 }}>Call 888-584-8232</a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'6px 20px' }}>
            {['Licensed Seller of Travel · NV & FL','20+ years in business','10,000+ outings planned','Groups 4–200+'].map(t => (
              <span key={t} style={{ fontSize:10, color:'rgba(245,237,216,.2)', letterSpacing:'.06em' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll reveal script */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('on'); });
          },{threshold:0.1});
          document.querySelectorAll('.sr').forEach(function(el){ io.observe(el); });
        })();
      `}} />
    </>
  )
}
