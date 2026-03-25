import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe | From $275/person',
  description: 'We book Pebble Beach ($675/round, 18-month advance), Shadow Creek ($1,250/round, America\'s most expensive tee time), and 200+ US courses for golf groups. 20+ years, 10,000+ outings. From $275/person.',
  alternates: { canonical: 'https://www.groupgolftours.com/' },
  openGraph: { title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe', description: 'Tee times at courses groups can\'t book independently. From $275/person.', url: 'https://www.groupgolftours.com/', type: 'website' },
}

/* ── Region data ── */
const regions = [
  { id:'monterey', name:'Monterey & Pebble Beach', tag:'California Coast', href:'/portfolio-item/monterey-and-pebble-beach/', accent:'#5ED8C8', accentRgb:'94,216,200', bg:'#184038', stat:'$675', sub:'/round', label:'Pebble Beach Links', urgency:'Book 12–18 months out', fact:'6× US Open host · #1 public course in America', img:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1400&q=90', pos:'center 35%' },
  { id:'tahoe', name:'Lake Tahoe & Northern Nevada', tag:'Sierra Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', accent:'#80C8F0', accentRgb:'128,200,240', bg:'#181840', stat:'$275', sub:'/person', label:'Reno packages from', urgency:'Summer books by February', fact:'6,200 ft elevation · ball flies 10% farther', img:'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1400&q=85', pos:'center 40%' },
  { id:'vegas', name:'Las Vegas & Southern Nevada', tag:'Desert Southwest', href:'/portfolio-item/las-vegas-and-southern-nevada/', accent:'#F8C030', accentRgb:'248,192,48', bg:'#401800', stat:'$1,250', sub:'/round', label:"America's most expensive", urgency:'MGM guests Mon–Thu only', fact:'Shadow Creek · limo + caddie included', img:'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1400&q=85', pos:'center 50%' },
  { id:'socal', name:'Southern California', tag:'Year-Round Golf', href:'/portfolio-item/monterey-and-pebble-beach-2/', accent:'#F87050', accentRgb:'248,112,80', bg:'#3A1008', stat:'$2,950', sub:'/person', label:'5-night/4-round package', urgency:'Non-resident slots limited', fact:'Torrey Pines · 2× US Open · 365 days/year', img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&q=85', pos:'center 30%' },
  { id:'somersett', name:'Somersett Golf & Country Club', tag:'Private Club Access', href:'/portfolio-item/somersett-golf-country-club/', accent:'#98D060', accentRgb:'152,208,96', bg:'#182C14', stat:'$540', sub:'/person', label:'Private access from', urgency:'Access by arrangement only', fact:'Golfweek top private residential · 5,200 ft', img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85', pos:'center 40%' },
]

const schema = {
  '@context':'https://schema.org','@graph':[
    {'@type':'TravelAgency','@id':'https://www.groupgolftours.com/#organization',name:'Group Golf Tours',alternateName:['Vacations on the Green','Prestige Golf'],url:'https://www.groupgolftours.com',telephone:'+1-888-584-8232',email:'customerservice@zoomaway.com',address:{'@type':'PostalAddress',streetAddress:'3010 LBJ Freeway, Suite 1550',addressLocality:'Dallas',addressRegion:'TX',postalCode:'75234',addressCountry:'US'},description:'Custom golf travel packages for groups. Pebble Beach, Shadow Creek, Edgewood Tahoe, Torrey Pines. 20+ years, 10,000+ outings.',hasOfferCatalog:{'@type':'OfferCatalog',name:'Golf Travel Packages',itemListElement:regions.map(r=>({'@type':'Offer',name:r.name+' Golf Packages',url:'https://www.groupgolftours.com'+r.href}))}},
    {'@type':'FAQPage',mainEntity:[
      {'@type':'Question',name:'How far in advance should a golf group book Pebble Beach?',acceptedAnswer:{'@type':'Answer',text:'Golf groups should book Pebble Beach 12 to 18 months in advance. Lodge guests can book tee times up to 18 months ahead. Non-guests can only book within 24 hours. Group Golf Tours coordinates resort rooms and tee times simultaneously.'}},
      {'@type':'Question',name:'How much does Shadow Creek cost in Las Vegas in 2025?',acceptedAnswer:{'@type':'Answer',text:"Shadow Creek costs $1,250 per player in 2025, the most expensive public tee time in the United States. Available Monday through Thursday for MGM Resort hotel guests only. Includes private limousine and personal caddie."}},
      {'@type':'Question',name:'What are the cheapest group golf packages in Reno Nevada?',acceptedAnswer:{'@type':'Answer',text:'Group golf packages in Reno start at $275 per person for a 1-night 2-round trip at Lakeridge Golf Course. Wolf Run packages from $395 per person. Red Hawk from $499 per person for 4 nights 3 rounds.'}},
    ]},
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <style>{`
        /* ── Hero stagger ── */
        .hline{display:block;overflow:hidden;line-height:0.95}
        .hline span{display:inline-block;animation:charUp 0.95s cubic-bezier(0.22,1,0.36,1) both}
        .hline:nth-child(1) span{animation-delay:0.04s}
        .hline:nth-child(2) span{animation-delay:0.13s}
        .hline:nth-child(3) span{animation-delay:0.22s}
        .hline:nth-child(4) span{animation-delay:0.30s}
        @keyframes charUp{from{opacity:0;transform:translateY(1.05em) skewY(4deg)}to{opacity:1;transform:translateY(0) skewY(0)}}

        /* ── Mesh breathing ── */
        @keyframes meshFloat{0%,100%{transform:translate(0%,0%)}33%{transform:translate(2.5%,-2%)}66%{transform:translate(-2%,1.5%)}}
        @keyframes glowPulse{0%,100%{text-shadow:0 0 18px currentColor;opacity:0.88}50%{text-shadow:0 0 50px currentColor,0 0 90px currentColor;opacity:1}}
        .glow{animation:glowPulse 3.5s ease-in-out infinite}
        @keyframes scrollPulse{0%,100%{transform:scaleY(0.2);transform-origin:top;opacity:0}40%,60%{transform:scaleY(1);transform-origin:top;opacity:1}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        @keyframes sweepRight{from{transform:scaleX(0);transform-origin:left}to{transform:scaleX(1);transform-origin:left}}
        @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 1px currentColor}50%{box-shadow:0 0 18px currentColor,0 0 0 1px currentColor}}

        /* ── Price badges float ── */
        .pbadge{animation:floatY 5s ease-in-out infinite}
        .pbadge:nth-child(2){animation-delay:-1.8s}
        .pbadge:nth-child(3){animation-delay:-3.4s}

        /* ── Plum section — pricing ── */
        .plum-price-cell{transition:background 0.25s}
        .plum-price-cell:hover{background:rgba(255,255,255,0.06)!important}

        /* ── Saffron trip captain — dark on light ── */
        .proof-item{border-bottom:1px solid rgba(26,18,0,0.1);padding:22px 0;display:flex;gap:22px;align-items:flex-start;transition:transform 0.2s}
        .proof-item:hover{transform:translateX(4px)}
        .proof-item:last-child{border-bottom:none}

        /* ── Experience cards ── */
        .exp-card{transition:transform 0.35s cubic-bezier(0.22,1,0.36,1),box-shadow 0.35s}
        .exp-card:hover{transform:translateY(-6px);box-shadow:0 28px 60px rgba(0,0,0,0.5)}
        .exp-card-img{transition:transform 0.65s cubic-bezier(0.22,1,0.36,1)}
        .exp-card:hover .exp-card-img{transform:scale(1.06)}

        /* ── Flip card — slate section ── */
        .flip-card{animation:pulseGlow 4s ease-in-out infinite}

        /* ── CTA section corner marks ── */
        .corner-tl{position:absolute;top:24px;left:24px;width:40px;height:40px;border-top:1px solid rgba(212,168,50,0.5);border-left:1px solid rgba(212,168,50,0.5)}
        .corner-br{position:absolute;bottom:24px;right:24px;width:40px;height:40px;border-bottom:1px solid rgba(212,168,50,0.5);border-right:1px solid rgba(212,168,50,0.5)}

        /* ── Responsive ── */
        @media(max-width:768px){
          .hero-h1{font-size:clamp(48px,13.5vw,80px)!important;line-height:0.90!important}
          .hero-trust{grid-template-columns:1fr 1fr!important;gap:18px!important}
          .hero-sub{font-size:15px!important;max-width:100%!important}
          .hero-ctas{flex-direction:column!important;align-items:flex-start!important}
          .plum-grid{grid-template-columns:1fr 1fr!important}
          .plum-last{display:none!important}
          .saffron-grid{grid-template-columns:1fr!important;gap:44px!important}
          .exp-grid{grid-template-columns:1fr!important}
          .ps-grid{grid-template-columns:1fr 1fr!important;gap:10px!important}
          .cta-h{font-size:clamp(40px,12vw,64px)!important}
          .cta-btns{flex-direction:column!important;align-items:center!important}
          .badge-col{display:none!important}
          .region-section-header{flex-direction:column!important;align-items:flex-start!important}
        }
        @media(max-width:480px){
          .ps-grid{grid-template-columns:1fr!important}
          .plum-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          §1  HERO — Ink black + burning sienna mesh
              MASSIVE metallic serif, floating price tags
      ══════════════════════════════════════════════════ */}
      <section className="grain" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', background:'#0A0806', overflow:'hidden' }}>

        {/* Breathing mesh — warm amber-sienna-copper tones */}
        <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
          <div style={{ position:'absolute', width:'170%', height:'170%', top:'-35%', left:'-35%',
            background:`
              radial-gradient(ellipse 65% 55% at 20% 65%, rgba(168,72,32,0.22) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 80% 30%, rgba(64,24,0,0.32) 0%, transparent 55%),
              radial-gradient(ellipse 45% 45% at 55% 80%, rgba(61,24,64,0.18) 0%, transparent 50%),
              radial-gradient(ellipse 35% 35% at 35% 25%, rgba(200,121,65,0.10) 0%, transparent 45%)
            `,
            animation:'meshFloat 16s ease-in-out infinite' }} />
        </div>

        {/* Photo underlay */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=2000&q=90)', backgroundSize:'cover', backgroundPosition:'center 35%', opacity:0.18, zIndex:1 }} />
        {/* Directional gradient */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(112deg, rgba(10,8,6,0.98) 0%, rgba(10,8,6,0.88) 42%, rgba(10,8,6,0.45) 72%, rgba(10,8,6,0.12) 100%)', zIndex:2 }} />
        {/* Vignette bottom */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'50%', background:'linear-gradient(to top, rgba(10,8,6,0.96) 0%, transparent 100%)', zIndex:2 }} />

        {/* Decorative vertical rule — copper */}
        <div style={{ position:'absolute', left:'clamp(16px,5vw,80px)', top:'16%', bottom:'16%', width:1, background:'linear-gradient(to bottom, transparent, #C87941 28%, #C87941 72%, transparent)', opacity:0.45, zIndex:3 }} />

        {/* Floating price badges — desktop right side */}
        <div className="badge-col" style={{ position:'absolute', right:'clamp(32px,5vw,80px)', top:'18%', zIndex:5, display:'flex', flexDirection:'column', gap:14 }}>
          {[
            { label:'Pebble Beach Golf Links', price:'$675', sub:'per round', accent:'#5ED8C8', delay:'0s' },
            { label:'Shadow Creek Las Vegas', price:'$1,250', sub:'per round', accent:'#F8C030', delay:'1.8s' },
            { label:'Reno Group Packages', price:'$275', sub:'per person', accent:'#80C8F0', delay:'3.5s' },
          ].map((b,i) => (
            <div key={b.label} className="pbadge" style={{
              background:'rgba(10,8,6,0.82)', backdropFilter:'blur(20px)',
              border:`1px solid rgba(${b.accent.replace('#','').match(/.{2}/g)!.map(h=>parseInt(h,16)).join(',')},0.28)`,
              padding:'14px 20px', minWidth:196, position:'relative', overflow:'hidden',
              animationName:`floatY,fadeUp`, animationDuration:`5s,0.88s`, animationTimingFunction:`ease-in-out,cubic-bezier(0.22,1,0.36,1)`, animationFillMode:`none,both`, animationDelay:`${b.delay},${0.7+i*0.12}s`,
            }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:b.accent, opacity:0.7 }} />
              <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:b.accent, opacity:0.75, marginBottom:5 }}>{b.label}</div>
              <div style={{ fontFamily:'var(--serif)', fontSize:30, color:b.accent, lineHeight:1 }} className="glow">{b.price}</div>
              <div style={{ fontSize:10, color:'rgba(245,237,216,0.35)', marginTop:3 }}>{b.sub}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="wrap" style={{ position:'relative', zIndex:4, paddingTop:110, paddingBottom:110, width:'100%' }}>
          <div style={{ maxWidth:780, paddingLeft:'clamp(0px,2vw,28px)' }}>

            {/* Eyebrow */}
            <div className="a1" style={{ display:'flex', alignItems:'center', gap:14, marginBottom:30 }}>
              <div style={{ width:28, height:1, background:'var(--copper)', flexShrink:0, animation:'sweepRight 0.8s 0.3s both' }} />
              <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>
                20+ Years · 10,000+ Outings · Licensed NV &amp; FL
              </span>
            </div>

            {/* Headline — metallic shimmer on key words */}
            <h1 className="hero-h1" style={{ fontFamily:'var(--serif)', fontSize:'clamp(56px,8.5vw,112px)', fontWeight:300, lineHeight:0.93, letterSpacing:'-0.025em', marginBottom:36 }}>
              <span className="hline" style={{ color:'var(--cream)' }}><span>Pebble Beach.</span></span>
              <span className="hline" style={{ color:'var(--cream)' }}><span>Shadow Creek.</span></span>
              <span className="hline"><span className="metal" style={{ fontStyle:'italic' }}>Your group,</span></span>
              <span className="hline"><span className="metal" style={{ fontStyle:'italic' }}>secured.</span></span>
            </h1>

            {/* Sub copy */}
            <p className="hero-sub a3" style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.65)', maxWidth:520, marginBottom:44, fontWeight:300 }}>
              We book the tee times your group can&apos;t get alone —
              Pebble Beach at <strong style={{ color:'var(--cream)', fontWeight:600 }}>$675/round</strong> (18-month advance required),
              Shadow Creek at <strong style={{ color:'var(--cream)', fontWeight:600 }}>$1,250/round</strong> (MGM guests only, limo &amp; caddie included). One call. Everything handled.
            </p>

            {/* CTAs */}
            <div className="hero-ctas a4" style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:56 }}>
              <Link href="/tour-inquiry/" className="btn btn-gold">
                <span>Plan My Group Trip</span>
              </Link>
              <a href="tel:8885848232" className="btn btn-ghost">
                888-584-8232
              </a>
            </div>

            {/* Trust stats — copper numerals */}
            <div className="hero-trust a5" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:28, paddingTop:26, borderTop:'1px solid rgba(200,121,65,0.16)', maxWidth:560 }}>
              {[
                { n:'20+', l:'Years' },
                { n:'10K+', l:'Outings' },
                { n:'$275', l:'From / person' },
                { n:'200+', l:'Courses' },
              ].map(s => (
                <div key={s.n}>
                  <div style={{ fontFamily:'var(--serif)', fontSize:28, fontWeight:300, color:'var(--copper)', lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:10, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(245,237,216,0.28)', marginTop:4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', zIndex:5 }}>
          <div style={{ width:1, height:52, background:'var(--copper)', animation:'scrollPulse 2.2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §2  PRICING BAR — DEEP PLUM BACKGROUND
              Rose gold numbers on violet — completely
              unexpected, demands attention
      ══════════════════════════════════════════════════ */}
      <div className="grain" style={{ background:'var(--plum)', borderTop:'1px solid rgba(212,136,106,0.2)', borderBottom:'1px solid rgba(212,136,106,0.2)', position:'relative', overflow:'hidden' }}>
        {/* Subtle texture */}
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(61,24,64,0.0) 0%, rgba(212,136,106,0.04) 100%)', pointerEvents:'none' }} />
        <div className="wrap plum-grid" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', position:'relative', zIndex:1 }}>
          {[
            { course:'Pebble Beach', fee:'$675', sub:'/round', note:'18-month advance', flag:'6× US Open host', c:'#5ED8C8' },
            { course:'Shadow Creek', fee:'$1,250', sub:'/round', note:'Limo + caddie incl.', flag:"Most expensive in USA", c:'#F8C030' },
            { course:'Edgewood Tahoe', fee:'~$350', sub:'/round', note:'6,200 ft elevation', flag:'Golf Digest Top 100', c:'#80C8F0' },
            { course:'Torrey Pines S.', fee:'$277–$345', sub:'/round', note:'Non-resident rate', flag:'2× US Open host', c:'#F87050' },
            { course:'Reno From', fee:'$275', sub:'/person', note:'82 documented trips', flag:'Starter packages', c:'#98D060' },
          ].map((c,i) => (
            <div key={c.course} className="plum-price-cell" style={{ padding:'clamp(16px,2.5vw,28px) clamp(10px,1.5vw,20px)', borderLeft: i>0 ? '1px solid rgba(245,237,216,0.06)' : 'none', textAlign:'center', background:'transparent' }}>
              <div style={{ fontSize:7, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:c.c, opacity:0.72, marginBottom:6 }}>{c.course}</div>
              <div style={{ display:'flex', alignItems:'baseline', justifyContent:'center', gap:1 }}>
                <span style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2.8vw,32px)', color:c.c, lineHeight:1, textShadow:`0 0 20px rgba(${c.c.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')},0.4)` }}>{c.fee}</span>
                <span style={{ fontSize:9, color:'rgba(245,237,216,0.25)', paddingLeft:2 }}>{c.sub}</span>
              </div>
              <div style={{ fontSize:9, color:'rgba(245,237,216,0.3)', marginTop:4, letterSpacing:'0.04em' }}>{c.note}</div>
              <div style={{ fontSize:8, color:c.c, marginTop:3, fontWeight:700, opacity:0.6, letterSpacing:'0.08em' }}>{c.flag}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          §3  FIVE REGIONS — Five completely different
              visual identities. No shared template.
      ══════════════════════════════════════════════════ */}
      <section className="grain" style={{ background:'#0A0C0A', paddingTop:'clamp(72px,9vw,120px)' }}>
        <div className="wrap">
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:20, marginBottom:44 }}>
            <div>
              <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--copper)' }}>Where We Play</span>
              <div style={{ width:42, height:1, background:'var(--copper)', margin:'14px 0 18px' }} />
              <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,5.5vw,66px)', fontWeight:300, color:'var(--cream)', lineHeight:1.0, letterSpacing:'-0.02em', margin:0 }}>
                Five Regions.<br />
                <em style={{ fontStyle:'italic', color:'rgba(245,237,216,0.36)' }}>Five Distinct Worlds.</em>
              </h2>
            </div>
            <Link href="/destinations/" style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--copper)', textDecoration:'none', opacity:0.7, whiteSpace:'nowrap' }}>All destinations →</Link>
          </div>
        </div>

        {/* ── DESKTOP: 5 unique cards in asymmetric grid ── */}
        <div className="desk-only" style={{ display:'grid', gridTemplateColumns:'1.65fr 1fr', gridTemplateRows:'540px 300px', gap:8, padding:'0 8px 8px' }}>

          {/* ─── CARD 1: PEBBLE BEACH ─────────────────────
              Luxury magazine cover. Giant price dominates.
              Diagonal image split. Condé Nast Traveler.
          ─────────────────────────────────────────────── */}
          <Link href="/portfolio-item/monterey-and-pebble-beach/" style={{ textDecoration:'none', position:'relative', display:'block', overflow:'hidden', background:'#0D2A34', height:'100%' }}>
            {/* Full bleed photo — top 60% */}
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'62%', backgroundImage:'url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1400&q=92)', backgroundSize:'cover', backgroundPosition:'center 28%' }}>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(13,42,52,0.1) 0%, rgba(13,42,52,0.0) 50%, rgba(13,42,52,0.7) 85%, #0D2A34 100%)' }} />
            </div>
            {/* Diagonal cut separator */}
            <div style={{ position:'absolute', top:'55%', left:0, right:0, height:80, background:'linear-gradient(172deg, transparent 49%, #0D2A34 50%)' }} />
            {/* Bottom panel — dark teal with content */}
            <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'48%', background:'#0D2A34', padding:'0 36px 30px' }}>
              {/* Giant price — THE hero element */}
              <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(72px,8vw,108px)', fontWeight:300, color:'#5ED8C8', lineHeight:0.88, letterSpacing:'-0.04em', marginBottom:0, marginTop:-14, textShadow:'0 0 60px rgba(94,216,200,0.25)' }}>
                $675
              </div>
              <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:8 }}>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:10, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(94,216,200,0.65)', marginBottom:6 }}>per round · Pebble Beach Golf Links</div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,26px)', fontWeight:300, color:'var(--cream)', letterSpacing:'-0.01em', lineHeight:1.15 }}>Monterey &amp;<br/>Pebble Beach</div>
                </div>
                <div style={{ textAlign:'right', paddingBottom:2 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(94,216,200,0.5)', marginBottom:4 }}>6× US Open host</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:8, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(94,216,200,0.35)' }}>Book 12–18 months out</div>
                  <div style={{ marginTop:12, width:36, height:36, borderRadius:'50%', border:'1px solid rgba(94,216,200,0.4)', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:'auto', color:'#5ED8C8', fontSize:14 }}>→</div>
                </div>
              </div>
            </div>
            {/* Top-left tag */}
            <div style={{ position:'absolute', top:20, left:20, background:'rgba(13,42,52,0.8)', backdropFilter:'blur(8px)', padding:'6px 14px', border:'1px solid rgba(94,216,200,0.25)' }}>
              <span style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#5ED8C8' }}>California Coast</span>
            </div>
          </Link>

          {/* Right column: Tahoe + Vegas stacked */}
          <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:8 }}>

            {/* ─── CARD 2: LAKE TAHOE ───────────────────────
                Alpine topographic. SVG contour lines.
                Deep indigo + glacial blue. Centered layout.
                Feels like an outdoor gear brand lookbook.
            ─────────────────────────────────────────────── */}
            <Link href="/portfolio-item/lake-tahoe-and-northern-nevada/" style={{ textDecoration:'none', position:'relative', display:'block', overflow:'hidden', background:'#0E1830' }}>
              {/* Photo at low opacity */}
              <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=900&q=85)', backgroundSize:'cover', backgroundPosition:'center 35%', opacity:0.22 }} />
              {/* Topographic SVG overlay */}
              <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.18 }} viewBox="0 0 400 270" preserveAspectRatio="xMidYMid slice">
                {[20,45,72,100,130,162,196,232,268].map((r2,i) => (
                  <ellipse key={i} cx="200" cy="135" rx={r2*1.6} ry={r2} fill="none" stroke="#80C8F0" strokeWidth="0.8"/>
                ))}
                {[200,230,260].map((r2,i) => (
                  <ellipse key={`s${i}`} cx="310" cy="80" rx={r2*0.4} ry={r2*0.25} fill="none" stroke="#80C8F0" strokeWidth="0.6"/>
                ))}
              </svg>
              {/* Indigo gradient wash */}
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(14,24,48,0.85) 0%, rgba(26,32,72,0.6) 50%, rgba(14,24,48,0.9) 100%)' }} />
              {/* Centered content */}
              <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px 24px', textAlign:'center' }}>
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(128,200,240,0.6)', marginBottom:10 }}>Sierra Nevada</div>
                {/* Elevation badge — rotated */}
                <div style={{ transform:'rotate(-3deg)', border:'1px solid rgba(128,200,240,0.4)', padding:'8px 20px', marginBottom:12, display:'inline-block' }}>
                  <span style={{ fontFamily:'var(--sans)', fontSize:11, fontWeight:700, letterSpacing:'0.2em', color:'#80C8F0' }}>6,200 FT</span>
                </div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2.2vw,26px)', fontWeight:300, color:'var(--cream)', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:8 }}>
                  Lake Tahoe &amp;<br/>Northern Nevada
                </div>
                <div style={{ fontFamily:'var(--sans)', fontSize:9, color:'rgba(128,200,240,0.5)', letterSpacing:'0.1em', marginBottom:14 }}>Ball flies 10% farther at altitude</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:4, justifyContent:'center' }}>
                  <span style={{ fontFamily:'var(--serif)', fontSize:34, color:'#80C8F0', lineHeight:1, textShadow:'0 0 30px rgba(128,200,240,0.3)' }}>$275</span>
                  <span style={{ fontSize:10, color:'rgba(128,200,240,0.45)' }}>/person · reno from</span>
                </div>
              </div>
            </Link>

            {/* ─── CARD 3: LAS VEGAS ────────────────────────
                Casino / neon energy. Hard edges. No soft.
                The price in a circle like a roulette chip.
                SHADOW CREEK in marquee tracking. Ember red.
            ─────────────────────────────────────────────── */}
            <Link href="/portfolio-item/las-vegas-and-southern-nevada/" style={{ textDecoration:'none', position:'relative', display:'block', overflow:'hidden', background:'#0A0600' }}>
              {/* Very dark photo */}
              <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=900&q=85)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.15 }} />
              {/* Hard-edge gradient */}
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(145deg, #0A0600 0%, #1A0800 60%, #0A0400 100%)' }} />
              {/* Roulette circle price */}
              <div style={{ position:'absolute', top:'50%', right:24, transform:'translateY(-50%)', width:88, height:88, borderRadius:'50%', border:'1.5px solid rgba(248,192,48,0.5)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', animation:'pulseGlow 3s ease-in-out infinite' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:22, color:'#F8C030', lineHeight:1, fontWeight:300 }}>$1,250</div>
                <div style={{ fontSize:7, letterSpacing:'0.12em', color:'rgba(248,192,48,0.5)', textTransform:'uppercase', marginTop:3 }}>per round</div>
              </div>
              <div style={{ position:'absolute', inset:0, padding:'18px 20px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                {/* Marquee-style tracked title */}
                <div style={{ fontFamily:'var(--sans)', fontSize:8, fontWeight:700, letterSpacing:'0.38em', textTransform:'uppercase', color:'rgba(248,192,48,0.6)', marginBottom:10 }}>SHADOW CREEK</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(16px,1.8vw,22px)', fontWeight:300, color:'var(--cream)', lineHeight:1.15, letterSpacing:'-0.01em', maxWidth:160, marginBottom:8 }}>
                  Las Vegas &amp;<br/>Southern Nevada
                </div>
                <div style={{ width:24, height:1, background:'rgba(248,192,48,0.4)', marginBottom:8 }} />
                <div style={{ fontFamily:'var(--sans)', fontSize:8, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(248,192,48,0.4)' }}>Limo + caddie · MGM guests only</div>
              </div>
              {/* Ember red corner accent */}
              <div style={{ position:'absolute', top:0, right:0, width:0, height:0, borderStyle:'solid', borderWidth:'0 42px 42px 0', borderColor:`transparent #E84040 transparent transparent`, opacity:0.7 }} />
            </Link>
          </div>

          {/* Bottom row: SoCal + Somersett + CTA */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>

            {/* ─── CARD 4: SOUTHERN CALIFORNIA ─────────────
                Vintage travel poster. Retro art deco.
                Radiating sun lines SVG. Terracotta/citrus.
                1940s Pacific Coast poster aesthetic.
            ─────────────────────────────────────────────── */}
            <Link href="/portfolio-item/monterey-and-pebble-beach-2/" style={{ textDecoration:'none', position:'relative', display:'block', overflow:'hidden', background:'#5A1A08' }}>
              {/* Vintage poster gradient wash */}
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg, #7A2410 0%, #3A0E04 55%, #1A0800 100%)' }} />
              {/* Radiating sun lines SVG */}
              <svg style={{ position:'absolute', top:'-10%', right:'-5%', width:'70%', height:'120%', opacity:0.12 }} viewBox="0 0 200 300">
                {Array.from({length:18}, (_,i) => {
                  const angle = (i/18)*360
                  const rad = angle * Math.PI/180
                  return <line key={i} x1="170" y1="100" x2={170+Math.cos(rad)*250} y2={100+Math.sin(rad)*250} stroke="#F5C030" strokeWidth="1.5"/>
                })}
                <circle cx="170" cy="100" r="22" fill="none" stroke="#F5C030" strokeWidth="1.5"/>
              </svg>
              {/* Photo low opacity */}
              <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=85)', backgroundSize:'cover', backgroundPosition:'center 30%', opacity:0.2, mixBlendMode:'luminosity' }} />
              {/* Content */}
              <div style={{ position:'absolute', inset:0, padding:'20px 22px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:7, fontWeight:700, letterSpacing:'0.32em', textTransform:'uppercase', color:'rgba(245,192,48,0.7)', marginBottom:8 }}>Year-Round Golf</div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(17px,1.8vw,22px)', fontWeight:400, color:'#F5EDD8', lineHeight:1.1, letterSpacing:'0.01em' }}>
                    Southern<br/>California
                  </div>
                </div>
                <div>
                  {/* Retro divider wave */}
                  <svg viewBox="0 0 120 12" style={{ width:80, marginBottom:10, opacity:0.45 }}>
                    <path d="M0,6 Q15,0 30,6 Q45,12 60,6 Q75,0 90,6 Q105,12 120,6" fill="none" stroke="#F5C030" strokeWidth="1.5"/>
                  </svg>
                  <div style={{ fontFamily:'var(--sans)', fontSize:8, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(245,192,48,0.5)', marginBottom:6 }}>Torrey Pines · 2× US Open</div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
                    <span style={{ fontFamily:'var(--serif)', fontSize:28, color:'#F5C842', lineHeight:1 }}>$2,950</span>
                    <span style={{ fontSize:9, color:'rgba(245,200,66,0.45)' }}>/person</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* ─── CARD 5: SOMERSETT ────────────────────────
                Private members card. LIGHT background.
                Cream letterpress. Embossed seal. Dark type.
                Completely inverts every other card's register.
            ─────────────────────────────────────────────── */}
            <Link href="/portfolio-item/somersett-golf-country-club/" style={{ textDecoration:'none', position:'relative', display:'block', overflow:'hidden', background:'#EDE0C4' }}>
              {/* Subtle parchment texture via gradient */}
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 80% at 30% 30%, rgba(255,252,245,0.6) 0%, rgba(232,216,190,0.0) 70%)' }} />
              {/* Embossed circle seal */}
              <div style={{ position:'absolute', top:'50%', right:18, transform:'translateY(-50%)', width:72, height:72, borderRadius:'50%', border:'1px solid rgba(100,70,30,0.2)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                <div style={{ width:58, height:58, borderRadius:'50%', border:'1px solid rgba(100,70,30,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                  <div style={{ fontFamily:'var(--serif)', fontSize:8, color:'rgba(80,50,20,0.5)', textAlign:'center', letterSpacing:'0.08em', lineHeight:1.4 }}>EST<br/>2004</div>
                </div>
              </div>
              {/* Content — dark ink on cream */}
              <div style={{ position:'absolute', inset:0, padding:'20px 22px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
                    <div style={{ width:16, height:1, background:'rgba(80,50,20,0.35)' }} />
                    <div style={{ fontFamily:'var(--sans)', fontSize:7, fontWeight:700, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(120,40,24,0.7)' }}>Members Only</div>
                  </div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(15px,1.6vw,20px)', fontWeight:400, color:'#1A1008', lineHeight:1.15, letterSpacing:'-0.01em' }}>
                    Somersett Golf<br/>&amp; Country Club
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:7, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(80,50,20,0.45)', marginBottom:4 }}>Golfweek Top Private · Reno NV</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:7, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(80,50,20,0.35)', marginBottom:8 }}>5,200 ft · Private Access</div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
                    <span style={{ fontFamily:'var(--serif)', fontSize:28, color:'#8A5228', lineHeight:1 }}>$540</span>
                    <span style={{ fontSize:9, color:'rgba(100,60,20,0.5)' }}>/person</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* CTA slot — bottom right */}
          <div className="grain" style={{ background:'linear-gradient(145deg, rgba(200,121,65,0.1) 0%, rgba(61,24,64,0.2) 100%)', border:'1px solid rgba(200,121,65,0.18)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'40px 32px', textAlign:'center', gap:18, position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:18, left:18, width:36, height:36, borderTop:'1px solid rgba(200,121,65,0.4)', borderLeft:'1px solid rgba(200,121,65,0.4)' }} />
            <div style={{ position:'absolute', bottom:18, right:18, width:36, height:36, borderBottom:'1px solid rgba(200,121,65,0.4)', borderRight:'1px solid rgba(200,121,65,0.4)' }} />
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--copper)', opacity:0.8 }}>Not sure which region?</span>
            <div style={{ fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,28px)', fontWeight:300, color:'var(--cream)', lineHeight:1.15 }}>Tell us your budget.<br/>We&apos;ll find your course.</div>
            <p style={{ fontSize:13, color:'rgba(245,237,216,0.38)', lineHeight:1.65, maxWidth:220 }}>Response within 24 hrs. No commitment.</p>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'12px 28px' }}><span>Get Free Plan</span></Link>
          </div>
        </div>

        {/* ── MOBILE: 5 unique scroll cards ── */}
        <div className="mob-strip">

          {/* MOBILE CARD 1: PEBBLE BEACH — Magazine split */}
          <Link href="/portfolio-item/monterey-and-pebble-beach/" className="mob-item" style={{ textDecoration:'none', display:'block', height:420, position:'relative', overflow:'hidden', background:'#0D2A34', flexShrink:0 }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'52%', backgroundImage:'url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=700&q=88)', backgroundSize:'cover', backgroundPosition:'center 28%' }}>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 40%, #0D2A34 100%)' }} />
            </div>
            <div style={{ position:'absolute', top:14, left:14, background:'rgba(13,42,52,0.85)', backdropFilter:'blur(6px)', padding:'4px 12px', border:'1px solid rgba(94,216,200,0.3)' }}>
              <span style={{ fontSize:8, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#5ED8C8' }}>California Coast</span>
            </div>
            <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'0 20px 22px' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:64, fontWeight:300, color:'#5ED8C8', lineHeight:0.88, letterSpacing:'-0.04em', textShadow:'0 0 40px rgba(94,216,200,0.3)', marginBottom:4 }}>$675</div>
              <div style={{ fontSize:9, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(94,216,200,0.6)', marginBottom:8 }}>per round · Pebble Beach Golf Links</div>
              <div style={{ fontFamily:'var(--serif)', fontSize:20, color:'var(--cream)', fontWeight:300, lineHeight:1.15, marginBottom:6 }}>Monterey &amp; Pebble Beach</div>
              <div style={{ fontSize:10, color:'rgba(94,216,200,0.45)', letterSpacing:'0.08em' }}>6× US Open host · Book 12–18 months out →</div>
            </div>
          </Link>

          {/* MOBILE CARD 2: LAKE TAHOE — Topographic centered */}
          <Link href="/portfolio-item/lake-tahoe-and-northern-nevada/" className="mob-item" style={{ textDecoration:'none', display:'block', height:420, position:'relative', overflow:'hidden', background:'#0E1830', flexShrink:0 }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=700&q=85)', backgroundSize:'cover', backgroundPosition:'center 35%', opacity:0.2 }} />
            <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.15 }} viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice">
              {[18,42,68,96,128,164,202,244].map((r2,i) => <ellipse key={i} cx="150" cy="210" rx={r2*1.5} ry={r2} fill="none" stroke="#80C8F0" strokeWidth="0.7"/>)}
            </svg>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(14,24,48,0.82) 0%, rgba(26,32,72,0.6) 50%, rgba(14,24,48,0.88) 100%)' }} />
            <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', padding:'24px 20px' }}>
              <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(128,200,240,0.55)', marginBottom:16 }}>Sierra Nevada</div>
              <div style={{ border:'1px solid rgba(128,200,240,0.4)', padding:'8px 22px', transform:'rotate(-2deg)', marginBottom:18, display:'inline-block' }}>
                <span style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:700, letterSpacing:'0.22em', color:'#80C8F0' }}>6,200 FT</span>
              </div>
              <div style={{ fontFamily:'var(--serif)', fontSize:24, fontWeight:300, color:'var(--cream)', lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:10 }}>Lake Tahoe &amp;<br/>Northern Nevada</div>
              <div style={{ fontSize:10, color:'rgba(128,200,240,0.45)', marginBottom:18 }}>Ball flies 10% farther at altitude</div>
              <div style={{ display:'flex', alignItems:'baseline', gap:4 }}>
                <span style={{ fontFamily:'var(--serif)', fontSize:40, color:'#80C8F0', lineHeight:1, textShadow:'0 0 24px rgba(128,200,240,0.3)' }}>$275</span>
                <span style={{ fontSize:11, color:'rgba(128,200,240,0.45)' }}>/person · reno from</span>
              </div>
            </div>
          </Link>

          {/* MOBILE CARD 3: LAS VEGAS — Neon roulette */}
          <Link href="/portfolio-item/las-vegas-and-southern-nevada/" className="mob-item" style={{ textDecoration:'none', display:'block', height:420, position:'relative', overflow:'hidden', background:'#0A0600', flexShrink:0 }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=700&q=85)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.12 }} />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(145deg, #0A0600 0%, #1A0800 100%)' }} />
            {/* Big roulette circle */}
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:160, height:160, borderRadius:'50%', border:'1.5px solid rgba(248,192,48,0.35)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', animation:'pulseGlow 3s ease-in-out infinite' }}>
              <div style={{ width:138, height:138, borderRadius:'50%', border:'1px solid rgba(248,192,48,0.2)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:38, color:'#F8C030', lineHeight:0.88, fontWeight:300, textShadow:'0 0 30px rgba(248,192,48,0.4)' }}>$1,250</div>
                <div style={{ fontSize:8, letterSpacing:'0.12em', color:'rgba(248,192,48,0.5)', textTransform:'uppercase', marginTop:4 }}>per round</div>
              </div>
            </div>
            {/* Ember corner */}
            <div style={{ position:'absolute', top:0, right:0, width:0, height:0, borderStyle:'solid', borderWidth:'0 50px 50px 0', borderColor:'transparent #E84040 transparent transparent', opacity:0.6 }} />
            <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'20px 20px 24px' }}>
              <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.38em', textTransform:'uppercase', color:'rgba(248,192,48,0.55)', marginBottom:6 }}>SHADOW CREEK</div>
              <div style={{ fontFamily:'var(--serif)', fontSize:22, fontWeight:300, color:'var(--cream)', lineHeight:1.1, marginBottom:4 }}>Las Vegas &amp; Southern Nevada</div>
              <div style={{ fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(248,192,48,0.4)' }}>Limo + caddie · MGM guests Mon–Thu only →</div>
            </div>
          </Link>

          {/* MOBILE CARD 4: SOCAL — Vintage poster */}
          <Link href="/portfolio-item/monterey-and-pebble-beach-2/" className="mob-item" style={{ textDecoration:'none', display:'block', height:420, position:'relative', overflow:'hidden', background:'#5A1A08', flexShrink:0 }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg, #7A2410 0%, #3A0E04 55%, #1A0800 100%)' }} />
            <svg style={{ position:'absolute', top:'-15%', left:'50%', transform:'translateX(-50%)', width:'140%', height:'70%', opacity:0.1 }} viewBox="0 0 300 200">
              {Array.from({length:16}, (_,i) => {
                const angle = (i/16)*360; const rad=angle*Math.PI/180
                return <line key={i} x1="150" y1="100" x2={150+Math.cos(rad)*250} y2={100+Math.sin(rad)*250} stroke="#F5C030" strokeWidth="1.5"/>
              })}
              <circle cx="150" cy="100" r="28" fill="none" stroke="#F5C030" strokeWidth="1.5"/>
            </svg>
            <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=85)', backgroundSize:'cover', backgroundPosition:'center 30%', opacity:0.18, mixBlendMode:'luminosity' }} />
            <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'28px 22px 24px' }}>
              <div>
                <div style={{ fontSize:7, fontWeight:700, letterSpacing:'0.36em', textTransform:'uppercase', color:'rgba(245,200,66,0.65)', marginBottom:12 }}>Year-Round Golf</div>
                <div style={{ fontFamily:'var(--serif)', fontSize:28, fontWeight:400, color:'#F5EDD8', lineHeight:1.0, letterSpacing:'0.01em' }}>Southern<br/>California</div>
              </div>
              <div>
                <svg viewBox="0 0 120 12" style={{ width:80, marginBottom:14, opacity:0.4 }}>
                  <path d="M0,6 Q15,0 30,6 Q45,12 60,6 Q75,0 90,6 Q105,12 120,6" fill="none" stroke="#F5C030" strokeWidth="1.5"/>
                </svg>
                <div style={{ fontSize:8, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(245,192,48,0.5)', marginBottom:8 }}>Torrey Pines · 2× US Open · 365 days/yr</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
                  <span style={{ fontFamily:'var(--serif)', fontSize:36, color:'#F5C842', lineHeight:1 }}>$2,950</span>
                  <span style={{ fontSize:10, color:'rgba(245,200,66,0.45)' }}>/person · 5N/4R →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* MOBILE CARD 5: SOMERSETT — Cream members card */}
          <Link href="/portfolio-item/somersett-golf-country-club/" className="mob-item" style={{ textDecoration:'none', display:'block', height:420, position:'relative', overflow:'hidden', background:'#EDE0C4', flexShrink:0 }}>
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 80% at 25% 25%, rgba(255,252,245,0.55) 0%, transparent 70%)' }} />
            <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=85)', backgroundSize:'cover', backgroundPosition:'center 40%', opacity:0.1, mixBlendMode:'multiply' }} />
            {/* Large embossed seal */}
            <div style={{ position:'absolute', top:'50%', right:20, transform:'translateY(-50%)', width:100, height:100, borderRadius:'50%', border:'1px solid rgba(100,70,30,0.18)' }}>
              <div style={{ position:'absolute', inset:6, borderRadius:'50%', border:'1px solid rgba(100,70,30,0.12)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:9, color:'rgba(80,50,20,0.4)', textAlign:'center', letterSpacing:'0.05em', lineHeight:1.5 }}>PRIVATE<br/>CLUB<br/>EST. 2004</div>
              </div>
            </div>
            <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'28px 22px 24px' }}>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
                  <div style={{ width:18, height:1, background:'rgba(80,50,20,0.3)' }} />
                  <div style={{ fontSize:7, fontWeight:700, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(120,40,24,0.65)' }}>Members Only</div>
                  <div style={{ width:18, height:1, background:'rgba(80,50,20,0.3)' }} />
                </div>
                <div style={{ fontFamily:'var(--serif)', fontSize:24, fontWeight:400, color:'#1A1008', lineHeight:1.1, letterSpacing:'-0.01em' }}>Somersett Golf<br/>&amp; Country Club</div>
              </div>
              <div>
                <div style={{ fontSize:8, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(80,50,20,0.4)', marginBottom:4 }}>Golfweek Top Private Residential</div>
                <div style={{ fontSize:8, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(80,50,20,0.35)', marginBottom:10 }}>Reno NV · 5,200 ft elevation</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
                  <span style={{ fontFamily:'var(--serif)', fontSize:36, color:'#8A5228', lineHeight:1 }}>$540</span>
                  <span style={{ fontSize:10, color:'rgba(100,60,20,0.5)' }}>/person from →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* CTA card */}
          <Link href="/tour-inquiry/" className="mob-item" style={{ textDecoration:'none', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:420, background:'rgba(200,121,65,0.07)', border:'1px solid rgba(200,121,65,0.2)', padding:'28px 20px', textAlign:'center', gap:16, flexShrink:0 }}>
            <div style={{ fontFamily:'var(--serif)', fontSize:26, fontWeight:300, color:'var(--cream)', lineHeight:1.1 }}>Not sure?<br/>Tell us your budget.</div>
            <div style={{ fontSize:13, color:'rgba(245,237,216,0.45)', lineHeight:1.7 }}>We match you to the right region within 24 hours.</div>
            <span className="btn btn-gold" style={{ padding:'12px 24px', fontSize:11 }}><span>Get Free Plan</span></span>
          </Link>
        </div>
        <div style={{ textAlign:'center', padding:'8px 0 32px' }}>
          <span style={{ fontSize:9, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(245,237,216,0.15)' }}>← swipe to explore →</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §4  TRIP CAPTAIN — SAFFRON / TURMERIC BACKGROUND
              Dark ink text on warm gold — bold inversion
              Feels like a Hermès catalog page
      ══════════════════════════════════════════════════ */}
      <section className="grain cut-dn" style={{ background:'#C89020', padding:'clamp(80px,10vw,130px) 0', position:'relative', overflow:'hidden' }}>
        {/* Texture wash */}
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(168,72,32,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(0,0,0,0.15) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* Decorative large numeral */}
        <div style={{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-50%)', fontFamily:'var(--serif)', fontSize:'clamp(200px,25vw,380px)', fontWeight:300, color:'rgba(168,72,32,0.14)', lineHeight:1, userSelect:'none', pointerEvents:'none', letterSpacing:'-0.05em' }}>20+</div>

        <div className="wrap saffron-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center', position:'relative', zIndex:1 }}>
          <div>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(64,24,0,0.6)' }}>For the Trip Captain</span>
            <div style={{ width:40, height:1, background:'rgba(64,24,0,0.5)', margin:'14px 0 24px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,4.2vw,54px)', fontWeight:300, color:'#1A0800', lineHeight:1.08, marginBottom:22, letterSpacing:'-0.02em' }}>
              You make the<br />
              <em style={{ fontStyle:'italic', color:'rgba(64,24,0,0.85)' }}>impossible</em> happen.
            </h2>
            <p style={{ fontSize:16, lineHeight:1.95, color:'rgba(64,24,0,0.62)', marginBottom:18 }}>
              Every group has one person who takes on the trip everyone talks about for years. That&apos;s you. Miss the booking window, pick the wrong course, lose the room block — and you never hear the end of it.
            </p>
            <p style={{ fontSize:16, lineHeight:1.95, color:'rgba(64,24,0,0.62)', marginBottom:38 }}>
              Since 2004 we&apos;ve made Trip Captains look like legends. Tee times at courses the public can&apos;t touch. Room blocks held before they vanish.
              <strong style={{ color:'#1A0800', fontWeight:700 }}> You take the credit. We do the work.</strong>
            </p>
            <Link href="/tour-inquiry/" className="btn btn-ink" style={{ padding:'15px 38px' }}>
              <span>Start Planning Free</span>
            </Link>
          </div>

          {/* Numbered proof list — on warm saffron, ink text, colored left bars */}
          <div>
            {[
              { n:'01', col:'#184038', bar:'#5ED8C8', title:'Preferred tee time access', body:'Pebble Beach, Shadow Creek, Edgewood Tahoe, Torrey Pines. We hold relationships the public doesn\'t. Groups get the slots marked "unavailable."' },
              { n:'02', col:'#181840', bar:'#80C8F0', title:'Room blocks held on inquiry', body:'Atlantis, Peppermill, Eldorado, MGM. We hold group blocks the day you call — before they sell. Your group stays together.' },
              { n:'03', col:'#401800', bar:'#F8C030', title:'One contact handles everything', body:'Tee times, hotels, shuttles, dining, insurance. One call, one itinerary. No forwarded emails.' },
              { n:'04', col:'#182C14', bar:'#98D060', title:'20 years of backup plans', body:'10,000+ outings. We\'ve handled every cancellation, weather event, and overbooking. We have the backup to fix it.' },
            ].map((p,i) => (
              <div key={p.n} className="proof-item" style={{ borderBottom: i<3 ? '1px solid rgba(64,24,0,0.12)' : 'none' }}>
                <div style={{ width:4, alignSelf:'stretch', background:p.bar, borderRadius:2, flexShrink:0, opacity:0.85 }} />
                <div style={{ paddingLeft:16, flex:1 }}>
                  <div style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(64,24,0,0.45)', marginBottom:6 }}>{p.n}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'#1A0800', marginBottom:5 }}>{p.title}</div>
                  <div style={{ fontSize:13, lineHeight:1.78, color:'rgba(64,24,0,0.55)' }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §5  EXPERIENCE TYPES — TERRACOTTA SECTION
              Rich fired-clay background, cream cards
              Unexpected warmth for a golf site
      ══════════════════════════════════════════════════ */}
      <section className="grain cut-up" style={{ background:'#6A1E10', padding:'clamp(80px,10vw,130px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 70% at 15% 50%, rgba(168,40,24,0.4) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 85% 30%, rgba(61,24,0,0.5) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg, transparent, rgba(245,237,216,0.15), transparent)' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', maxWidth:560, margin:'0 auto 52px' }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(245,237,216,0.55)' }}>Who We Plan For</span>
            <div style={{ width:40, height:1, background:'rgba(245,237,216,0.35)', margin:'14px auto 20px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,5vw,52px)', fontWeight:300, color:'var(--cream)', lineHeight:1.05, letterSpacing:'-0.02em', margin:0 }}>
              Every kind of group.<br />
              <em style={{ fontStyle:'italic', color:'rgba(245,237,216,0.45)' }}>One specialist.</em>
            </h2>
          </div>
          <div className="exp-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
            {[
              { title:'Golf Buddy Trips', href:'/golf-buddy-trips/', img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=85', group:'4–24 players', desc:'The trip you\'ve talked about for years. We make it happen — secured tee times, hotel blocks, the whole experience.', pull:'"I can\'t believe you got us on Shadow Creek."', accent:'#5ED8C8', border:'#5ED8C8' },
              { title:'Corporate & Incentive', href:'/corporate-and-incentive-golf-travel/', img:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=85', group:'20–200 players', desc:'Your top performers deserve Pebble Beach, not the local muni. Events people fight to earn their invite back to.', pull:'The reward they\'ll remember all year.', accent:'#F8C030', border:'#F8C030' },
              { title:'International Tours', href:'/destinations/', img:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=85', group:'Scotland · Ireland · Portugal · Spain', desc:'Links golf in Ireland and Scotland. Clifftop courses in Portugal. We handle the logistics. You just play.', pull:'Bucket-list courses on the other side of the Atlantic.', accent:'#98D060', border:'#98D060' },
            ].map(e => (
              <Link key={e.href} href={e.href} className="exp-card rc" style={{ textDecoration:'none', display:'flex', flexDirection:'column', background:'#0E0A08', overflow:'hidden' }}>
                <div style={{ height:220, position:'relative', overflow:'hidden' }}>
                  <div className="exp-card-img rc-bg" style={{ position:'absolute', inset:0, backgroundImage:`url(${e.img})`, backgroundSize:'cover', backgroundPosition:'center' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 25%, rgba(14,10,8,0.8) 100%)' }} />
                  <div className="rc-veil" style={{ background:`radial-gradient(ellipse at 50% 100%, rgba(${e.border.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')},0.3) 0%, transparent 70%)` }} />
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${e.border}, transparent)` }} />
                  <div style={{ position:'absolute', bottom:14, left:16 }}>
                    <span style={{ fontSize:8, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:e.accent, background:'rgba(0,0,0,0.6)', padding:'3px 8px' }}>{e.group}</span>
                  </div>
                </div>
                <div style={{ padding:'22px 22px 28px', flex:1, display:'flex', flexDirection:'column', gap:11 }}>
                  <h3 style={{ fontFamily:'var(--serif)', fontSize:24, fontWeight:300, color:'var(--cream)', lineHeight:1.1, letterSpacing:'-0.01em', margin:0 }}>{e.title}</h3>
                  <p style={{ fontSize:13, lineHeight:1.8, color:'rgba(245,237,216,0.45)', flex:1, margin:0 }}>{e.desc}</p>
                  <div style={{ fontSize:13, fontStyle:'italic', color:'rgba(245,237,216,0.55)', borderLeft:`2px solid ${e.border}`, paddingLeft:12, lineHeight:1.6 }}>{e.pull}</div>
                  <div style={{ fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:e.accent, marginTop:4 }}>Plan This Trip <span className="rc-arrow">→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §6  PROBLEM / SOLUTION — DEEP SLATE BLUE
              3D flip cards — neon-pastel borders glow
              Electric lime, seafoam, amber outlines
      ══════════════════════════════════════════════════ */}
      <section className="grain" style={{ background:'#141824', padding:'clamp(80px,10vw,130px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 70% at 50% 100%, rgba(24,24,64,0.6) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', maxWidth:520, margin:'0 auto 52px' }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(245,237,216,0.45)' }}>The Honest Truth</span>
            <div style={{ width:40, height:1, background:'rgba(245,237,216,0.2)', margin:'14px auto 20px' }} />
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4.5vw,52px)', fontWeight:300, color:'var(--cream)', lineHeight:1.08, letterSpacing:'-0.02em', margin:0 }}>
              Why groups who try<br />
              <em style={{ fontStyle:'italic', color:'rgba(245,237,216,0.5)' }}>to do this themselves</em> fail.
            </h2>
            <p style={{ fontSize:12, color:'rgba(245,237,216,0.3)', marginTop:12, letterSpacing:'0.06em', fontStyle:'italic' }}>Hover each card to reveal the solution ↓</p>
          </div>

          <div className="ps-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
            {[
              { icon:'🔐', problem:'Pebble Beach requires a resort stay to book more than 24 hours in advance. Groups shut out.', solution:'We coordinate your room and tee times simultaneously. Your group gets the 18-month window the public never sees.', borderColor:'#5ED8C8', solutionBg:'rgba(24,64,56,0.9)' },
              { icon:'🚘', problem:'Shadow Creek is MGM hotel guests only, Mon–Thu. Most groups don\'t know until it\'s too late.', solution:'We package the MGM stay with Shadow Creek tee times — limo, caddie, the full experience exactly as advertised.', borderColor:'#F8C030', solutionBg:'rgba(64,40,0,0.95)' },
              { icon:'🏨', problem:'Group room blocks vanish. Late groups end up split across three hotels.', solution:'We hold your block the day you inquire. Group stays together, dines together, plays together.', borderColor:'#80C8F0', solutionBg:'rgba(24,32,64,0.95)' },
              { icon:'💸', problem:'Corporate groups pay retail for 30+ tee times. The overage destroys the budget.', solution:'Volume relationships mean group rates on every element — courses, hotels, restaurants, transport.', borderColor:'#F87050', solutionBg:'rgba(64,16,8,0.95)' },
              { icon:'🛡', problem:'One cancellation can cascade across hotels, flights, and tee times.', solution:'72-hour policy + travel insurance options + 20 years of backup relationships. We\'ve seen every scenario.', borderColor:'#98D060', solutionBg:'rgba(24,44,20,0.95)' },
              { icon:'⏱', problem:'The Trip Captain spends 40+ hours planning. Nobody gets paid for that.', solution:'One form. One call. We send you the itinerary. You show up with your clubs and play.', borderColor:'#D4886A', solutionBg:'rgba(64,24,16,0.95)' },
            ].map((item,i) => {
              const rgb = item.borderColor.replace('#','').match(/.{2}/g)!.map((h:string)=>parseInt(h,16)).join(',')
              return (
                <div key={i} className="flip" style={{ height:196 }}>
                  <div className="flip-body">
                    {/* Front */}
                    <div className="flip-f" style={{ background:'rgba(20,24,36,0.95)', border:`1px solid rgba(${rgb},0.32)`, padding:'20px 18px', display:'flex', flexDirection:'column', justifyContent:'space-between', boxShadow:`0 0 0 1px rgba(${rgb},0.12), inset 0 0 32px rgba(${rgb},0.04)`, animation:`pulseGlow 4s ${i*0.6}s ease-in-out infinite` }}>
                      <div>
                        <div style={{ fontSize:24, marginBottom:12 }}>{item.icon}</div>
                        <div style={{ fontSize:12, lineHeight:1.75, color:'rgba(245,237,216,0.5)', fontStyle:'italic' }}>{item.problem}</div>
                      </div>
                      <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:`rgba(${rgb},0.55)`, marginTop:10 }}>hover to solve →</div>
                    </div>
                    {/* Back */}
                    <div className="flip-b" style={{ background:item.solutionBg, border:`1px solid rgba(${rgb},0.4)`, padding:'20px 18px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                      <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:`rgba(${rgb},0.9)`, marginBottom:12 }}>The solution</div>
                      <div style={{ fontSize:13, lineHeight:1.82, color:'rgba(245,237,216,0.8)', fontWeight:500 }}>{item.solution}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §7  CTA — CHAMPAGNE METALLIC GRADIENT
              Huge italic serif, glowing copper type
              Decorative corner brackets
      ══════════════════════════════════════════════════ */}
      <section className="grain" style={{ background:'linear-gradient(145deg, #1A1208 0%, #0C0A06 40%, #1A0C04 70%, #0C0806 100%)', padding:'clamp(88px,12vw,156px) 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
        {/* Warm mesh */}
        <div style={{ position:'absolute', inset:0, overflow:'hidden', zIndex:0 }}>
          <div style={{ position:'absolute', width:'160%', height:'160%', top:'-30%', left:'-30%',
            background:'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,121,65,0.09) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(61,24,64,0.12) 0%, transparent 55%)',
            animation:'meshFloat 20s ease-in-out infinite' }} />
        </div>
        <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=60)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.055, zIndex:1 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(12,10,6,0.45) 0%, rgba(12,10,6,0.98) 100%)', zIndex:2 }} />

        <div className="wrap" style={{ position:'relative', zIndex:3, maxWidth:660 }}>
          {/* Corner marks */}
          <div className="corner-tl" />
          <div className="corner-br" />

          <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(200,152,64,0.7)' }}>No obligation · Response in 24 hrs</span>
          <div style={{ width:40, height:1, background:'var(--copper)', margin:'16px auto 28px' }} />
          <h2 className="cta-h" style={{ fontFamily:'var(--serif)', fontSize:'clamp(44px,8vw,88px)', fontWeight:300, color:'var(--cream)', lineHeight:0.93, marginBottom:28, letterSpacing:'-0.025em' }}>
            Tell us where.<br />
            <em className="metal glow" style={{ fontStyle:'italic' }}>We&apos;ll handle<br />the rest.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.82, color:'rgba(245,237,216,0.52)', marginBottom:48, maxWidth:480, margin:'0 auto 48px', fontWeight:300 }}>
            Two minutes. Tell us destination, group size, and budget.
            A specialist calls back with a full custom itinerary —
            tee times, hotel, transport, dining, everything.
          </p>
          <div className="cta-btns" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:40 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding:'17px 52px', fontSize:12 }}><span>Start Planning Now</span></Link>
            <a href="tel:8885848232" className="btn btn-ghost" style={{ padding:'17px 36px', fontSize:12 }}>Call 888-584-8232</a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'6px 20px' }}>
            {['Licensed Seller of Travel · NV & FL', '20+ years in business', '10,000+ outings planned', 'Groups 4–200+'].map(t => (
              <span key={t} style={{ fontSize:10, color:'rgba(245,237,216,0.2)', letterSpacing:'0.06em' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}



// deploy trigger Wed Mar 25 01:56:22 UTC 2026
