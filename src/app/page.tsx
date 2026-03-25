import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Group Golf Trips | Pebble Beach, Shadow Creek, Edgewood Tahoe | Group Golf Tours',
  description: 'We book Pebble Beach ($675/round, 18-month advance), Shadow Creek ($1,250/round, America\'s most expensive), and 200+ US courses for golf groups. 20+ years, 10,000+ outings. From $275/person.',
  alternates: { canonical: 'https://www.groupgolftours.com/' },
  openGraph: {
    title: 'Group Golf Tours — Pebble Beach, Shadow Creek, Edgewood Tahoe',
    description: 'We secure tee times at courses groups can\'t book independently. From $275/person Reno packages to $4,119 Edgewood Tahoe. 20+ years, 10,000+ outings.',
    url: 'https://www.groupgolftours.com/',
    type: 'website',
  },
}

const regions = [
  {
    id: 'monterey',
    name: 'Monterey & Pebble Beach',
    shortName: 'Pebble Beach',
    tag: 'California Coast',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    accentColor: '#4A9BB8',
    accentDim: '#2A6B8A',
    darkColor: '#0E1C24',
    stat: '$675',
    statSub: 'per round',
    statLabel: 'Pebble Beach Links',
    urgency: 'Book 12–18 months out',
    fact: '6× US Open host · #1 public course in America',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=90',
    position: 'center 35%',
  },
  {
    id: 'tahoe',
    name: 'Lake Tahoe & Northern Nevada',
    shortName: 'Lake Tahoe',
    tag: 'Sierra Nevada',
    href: '/portfolio-item/lake-tahoe-and-northern-nevada/',
    accentColor: '#7BBFCF',
    accentDim: '#5AA0B0',
    darkColor: '#0B2218',
    stat: '$275',
    statSub: 'per person',
    statLabel: 'Reno packages from',
    urgency: 'Summer books by February',
    fact: '6,200 ft elevation · ball flies 10% farther',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=85',
    position: 'center 40%',
  },
  {
    id: 'vegas',
    name: 'Las Vegas & Southern Nevada',
    shortName: 'Las Vegas',
    tag: 'Desert Southwest',
    href: '/portfolio-item/las-vegas-and-southern-nevada/',
    accentColor: '#E8C060',
    accentDim: '#C4A040',
    darkColor: '#0A0A08',
    stat: '$1,250',
    statSub: 'per round',
    statLabel: "America's most expensive tee time",
    urgency: 'MGM guests Mon–Thu only',
    fact: 'Shadow Creek · limo + caddie included',
    img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&q=85',
    position: 'center 50%',
  },
  {
    id: 'socal',
    name: 'Southern California',
    shortName: 'SoCal',
    tag: 'Year-Round Golf',
    href: '/portfolio-item/monterey-and-pebble-beach-2/',
    accentColor: '#E07A45',
    accentDim: '#C4622D',
    darkColor: '#1A1008',
    stat: '$277–$345',
    statSub: 'per round',
    statLabel: 'Torrey Pines South',
    urgency: 'Non-resident slots limited daily',
    fact: '2× US Open host · 365-day season',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85',
    position: 'center 30%',
  },
  {
    id: 'somersett',
    name: 'Somersett Golf & CC',
    shortName: 'Somersett',
    tag: 'Private Club Access',
    href: '/portfolio-item/somersett-golf-country-club/',
    accentColor: '#C49050',
    accentDim: '#A07030',
    darkColor: '#131208',
    stat: '$540',
    statSub: 'per person',
    statLabel: 'Private access from',
    urgency: 'Access by arrangement only',
    fact: 'Golfweek top private residential · Reno NV',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85',
    position: 'center 40%',
  },
]

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
      address: { '@type': 'PostalAddress', streetAddress: '3010 LBJ Freeway, Suite 1550', addressLocality: 'Dallas', addressRegion: 'TX', postalCode: '75234', addressCountry: 'US' },
      description: 'Group Golf Tours plans custom golf travel packages for groups, buddy trips, and corporate events. Specialists in Pebble Beach, Shadow Creek, Edgewood Tahoe, Torrey Pines, and 200+ US courses. 20+ years, 10,000+ outings.',
      areaServed: ['United States', 'Ireland', 'Scotland', 'Portugal', 'Spain', 'Mexico', 'Dominican Republic'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Golf Travel Packages',
        itemListElement: regions.map(r => ({ '@type': 'Offer', name: r.name + ' Golf Packages', url: 'https://www.groupgolftours.com' + r.href })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How far in advance should a golf group book Pebble Beach?', acceptedAnswer: { '@type': 'Answer', text: 'Golf groups should book Pebble Beach 12 to 18 months in advance. Lodge at Pebble Beach and Inn at Spanish Bay guests may reserve tee times up to 18 months ahead. Non-guests can only book within 24 hours, making it nearly impossible to secure group tee times without resort accommodation. Group Golf Tours coordinates resort rooms and tee times simultaneously for groups.' } },
        { '@type': 'Question', name: 'How much does Shadow Creek cost in Las Vegas?', acceptedAnswer: { '@type': 'Answer', text: "Shadow Creek's green fee is $1,250 per player in 2025, the most expensive public tee time in the United States. Access is limited to MGM Resorts hotel guests, Monday through Thursday only. The fee includes a private limousine from your hotel and a personal caddie. Group Golf Tours packages MGM hotel stays with Shadow Creek tee times." } },
        { '@type': 'Question', name: 'What are the cheapest group golf packages in Reno Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'The cheapest documented group golf packages in Reno, Nevada start at $275 per person for a 1-night, 2-round trip at Lakeridge Golf Course. Wolf Run packages start at $395 per person for 2 nights and 3 rounds. Red Hawk Golf Resort packages start at $499 per person for 4 nights and 3 rounds, all including Reno casino hotel accommodations.' } },
        { '@type': 'Question', name: 'What group sizes does Group Golf Tours handle?', acceptedAnswer: { '@type': 'Answer', text: 'Group Golf Tours handles golf groups from 4 players for small buddy trips up to 200+ players for corporate and incentive events. Small groups typically run 4–24 players. Corporate golf outings have been coordinated for groups exceeding 100 players across multiple courses and hotel properties.' } },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <style>{`
        /* ── HERO ── */
        .hero-word { display: inline-block; }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes scrollPulse { 0%,100% { transform: scaleY(0.3); opacity: 0; } 50% { transform: scaleY(1); opacity: 1; } }
        .fade-up-1 { animation: fadeSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .fade-up-2 { animation: fadeSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .fade-up-3 { animation: fadeSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both; }
        .fade-up-4 { animation: fadeSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.7s both; }

        /* ── REGION CARDS ── */
        .region-img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .region-card:hover .region-img { transform: scale(1.05); }
        .region-card:hover .region-arrow { transform: translateX(4px); }
        .region-arrow { transition: transform 0.2s ease; display: inline-block; }

        /* ── MOBILE SCROLL STRIP ── */
        .mobile-scroll-strip {
          display: none;
          gap: 12px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 0 var(--pad) 4px;
        }
        .mobile-scroll-strip::-webkit-scrollbar { display: none; }
        .mobile-scroll-card {
          flex: 0 0 280px;
          scroll-snap-align: start;
        }

        /* ── PRICING TICKER ── */
        .price-cell { transition: background 0.2s; }
        .price-cell:hover { background: rgba(255,255,255,0.04) !important; }

        /* ── PROBLEM/SOLUTION CARDS ── */
        .ps-card { transition: border-color 0.2s, transform 0.2s; }
        .ps-card:hover { border-color: rgba(201,168,76,0.4) !important; transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .hero-h1 { font-size: clamp(44px, 12vw, 72px) !important; }
          .hero-sub { font-size: 15px !important; }
          .hero-stats { gap: 20px !important; }
          .hero-stat-n { font-size: 24px !important; }
          .region-grid-desktop { display: none !important; }
          .mobile-scroll-strip { display: flex !important; }
          .region-section-header { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .price-strip { grid-template-columns: 1fr 1fr !important; }
          .price-strip-item-3 { display: none; }
          .trip-cap-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .exp-grid { grid-template-columns: 1fr !important; }
          .ps-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-h2 { font-size: clamp(36px, 10vw, 56px) !important; }
          .cta-btns { flex-direction: column !important; align-items: center !important; }
          .trust-bar { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .ps-grid { grid-template-columns: 1fr !important; }
          .price-strip { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .mobile-scroll-strip { display: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          HERO — FULL BLEED CINEMATIC
      ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#050C07', overflow: 'hidden' }}>
        {/* BG image */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=2000&q=90)', backgroundSize: 'cover', backgroundPosition: 'center 35%', opacity: 0.28 }} />
        {/* Directional gradient — heavier left for text legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(5,12,7,0.98) 0%, rgba(5,12,7,0.88) 45%, rgba(5,12,7,0.45) 75%, rgba(5,12,7,0.15) 100%)' }} />
        {/* Subtle vignette bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(5,12,7,0.9) 0%, transparent 100%)' }} />
        {/* Accent gold line — desktop only */}
        <div style={{ position: 'absolute', left: 'clamp(20px, 5vw, 72px)', top: '20%', bottom: '20%', width: 1, background: 'linear-gradient(to bottom, transparent, var(--gold) 25%, var(--gold) 75%, transparent)', opacity: 0.35 }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 100, paddingBottom: 100, width: '100%' }}>
          <div style={{ maxWidth: 820, paddingLeft: 'clamp(0px, 2vw, 32px)' }}>

            {/* Eyebrow */}
            <div className="fade-up-1" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <div style={{ width: 28, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                20+ Years · 10,000+ Outings · Licensed in NV &amp; FL
              </span>
            </div>

            {/* Main headline — SEO keywords embedded naturally */}
            <h1 className="hero-h1 fade-up-2" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(52px, 7.5vw, 104px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 0.93, letterSpacing: '-0.02em', marginBottom: 32 }}>
              Pebble Beach.<br />
              Shadow Creek.<br />
              <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Your group,<br />secured.</span>
            </h1>

            {/* Sub — value prop with real numbers */}
            <p className="hero-sub fade-up-3" style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(244,239,228,0.72)', maxWidth: 540, marginBottom: 44, fontWeight: 300 }}>
              We book the tee times your group can&apos;t get alone.
              Pebble Beach at&nbsp;<strong style={{ color: 'var(--cream)', fontWeight: 600 }}>$675/round</strong> — 18 months advance booking required.
              Shadow Creek at&nbsp;<strong style={{ color: 'var(--cream)', fontWeight: 600 }}>$1,250/round</strong> — MGM guests only.
              One call. We handle both.
            </p>

            {/* CTAs */}
            <div className="fade-up-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
              <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding: '15px 40px', fontSize: 12, letterSpacing: '0.14em' }}>
                Plan My Group Trip
              </Link>
              <a href="tel:8885848232" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(244,239,228,0.55)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', transition: 'all 0.2s' }}>
                <span style={{ fontSize: 16 }}>📞</span> 888-584-8232
              </a>
            </div>

            {/* Trust bar */}
            <div className="fade-up-4 trust-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingTop: 28, borderTop: '1px solid rgba(201,168,76,0.15)', maxWidth: 580 }}>
              {[
                { n: '20+', l: 'Years' },
                { n: '10K+', l: 'Outings' },
                { n: '5', l: 'Regions' },
                { n: '$275', l: 'From / person' },
              ].map(s => (
                <div key={s.n}>
                  <div className="hero-stat-n" style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 500, color: 'var(--gold)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.35)', marginTop: 5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}>
          <div style={{ width: 1, height: 52, background: 'linear-gradient(to bottom, transparent, var(--gold))', animation: 'scrollPulse 2.4s ease-in-out infinite', transformOrigin: 'top' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRICING PROOF BAR — Real numbers as credibility
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: '#0A0A0A', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="wrap price-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {[
            { course: 'Pebble Beach', fee: '$675', sub: '/round', note: '18-mo advance booking', color: '#4A9BB8', flag: '6× US Open host' },
            { course: 'Shadow Creek', fee: '$1,250', sub: '/round', note: 'Limo + caddie included', color: '#E8C060', flag: "Most expensive in America" },
            { course: 'Edgewood Tahoe', fee: '$350', sub: '/round', note: '6,200 ft elevation', color: '#7BBFCF', flag: 'Golf Digest Top 100' },
            { course: 'Torrey Pines South', fee: '$345', sub: '/round', note: '2× US Open host', color: '#E07A45', flag: 'Non-resident rate' },
            { course: 'Reno Packages', fee: '$275', sub: '/person', note: '1-night starter packages', color: '#C49050', flag: 'From (verified)' },
          ].map((c, i) => (
            <div key={c.course} className="price-cell price-strip-item" style={{
              padding: 'clamp(18px, 2.5vw, 28px) clamp(12px, 2vw, 24px)',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              textAlign: 'center',
              position: 'relative',
            }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.color, marginBottom: 6, opacity: 0.8 }}>{c.course}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 3vw, 34px)', color: 'var(--cream)', lineHeight: 1 }}>{c.fee}</span>
                <span style={{ fontSize: 11, color: 'rgba(244,239,228,0.35)', fontFamily: 'var(--sans)' }}>{c.sub}</span>
              </div>
              <div style={{ fontSize: 10, color: 'rgba(244,239,228,0.3)', marginTop: 5, letterSpacing: '0.04em' }}>{c.note}</div>
              <div style={{ fontSize: 9, color: c.color, marginTop: 4, fontWeight: 600, letterSpacing: '0.06em', opacity: 0.7 }}>{c.flag}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          5 REGIONS — DESKTOP EDITORIAL GRID + MOBILE SCROLL
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#060C08', padding: 'clamp(64px, 9vw, 120px) 0 0' }}>
        <div className="wrap">
          {/* Header */}
          <div className="region-section-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
            <div>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>Where We Play</span>
              <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '14px 0 18px' }} />
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 5vw, 60px)', color: 'var(--cream)', lineHeight: 1.0, margin: 0 }}>
                Five Regions.<br /><em style={{ fontStyle: 'italic', color: 'rgba(244,239,228,0.5)' }}>Five Distinct Worlds.</em>
              </h2>
            </div>
            <Link href="/destinations/" style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', opacity: 0.7, whiteSpace: 'nowrap' }}>
              All destinations →
            </Link>
          </div>
        </div>

        {/* ── DESKTOP GRID ── */}
        <div className="region-grid-desktop wrap" style={{ display: 'grid', gridTemplateColumns: '1.65fr 1fr', gridTemplateRows: 'auto auto', gap: 10, paddingBottom: 10 }}>
          {/* Hero card — Pebble Beach */}
          <RegionCardDesktop r={regions[0]} large />
          {/* Right column stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <RegionCardDesktop r={regions[1]} />
            <RegionCardDesktop r={regions[2]} />
          </div>
          {/* Bottom row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <RegionCardDesktop r={regions[3]} />
            <RegionCardDesktop r={regions[4]} />
          </div>
          {/* Bottom right — CTA card */}
          <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 32px', textAlign: 'center', gap: 20 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.8 }}>Not sure which region?</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--cream)', lineHeight: 1.1 }}>Tell us your budget.<br />We&apos;ll find your course.</div>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding: '13px 32px', fontSize: 11 }}>Get a Free Plan</Link>
            <div style={{ fontSize: 11, color: 'rgba(244,239,228,0.3)', lineHeight: 1.7 }}>Response within 24 hrs<br />No commitment required</div>
          </div>
        </div>

        {/* ── MOBILE HORIZONTAL SCROLL ── */}
        <div className="mobile-scroll-strip" style={{ paddingBottom: 24 }}>
          {regions.map(r => (
            <Link key={r.id} href={r.href} className="mobile-scroll-card" style={{ textDecoration: 'none', display: 'block', position: 'relative', height: 380, overflow: 'hidden', background: r.darkColor, borderRadius: 2 }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${r.img})`, backgroundSize: 'cover', backgroundPosition: r.position, opacity: 0.55 }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${r.darkColor} 0%, ${r.darkColor}CC 35%, transparent 65%)` }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: r.accentColor }} />
              {/* Urgency badge */}
              <div style={{ position: 'absolute', top: 16, right: 16, background: `${r.accentColor}22`, border: `1px solid ${r.accentColor}55`, padding: '5px 10px', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: r.accentColor, textTransform: 'uppercase' }}>
                ⚑ {r.urgency}
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 20px' }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: r.accentColor, marginBottom: 6 }}>{r.tag}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--cream)', fontWeight: 400, lineHeight: 1.15, marginBottom: 12 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(244,239,228,0.55)', lineHeight: 1.6, marginBottom: 14 }}>{r.fact}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 30, color: r.accentColor, lineHeight: 1 }}>{r.stat}</span>
                  <span style={{ fontSize: 11, color: 'rgba(244,239,228,0.4)', fontFamily: 'var(--sans)' }}>{r.statSub}</span>
                </div>
                <div style={{ fontSize: 9, color: 'rgba(244,239,228,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3 }}>{r.statLabel}</div>
              </div>
            </Link>
          ))}
          {/* Mobile CTA card */}
          <Link href="/tour-inquiry/" className="mobile-scroll-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 380, background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)', padding: '32px 24px', textAlign: 'center', gap: 16 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--cream)', lineHeight: 1.15 }}>Not sure?<br />Tell us your budget.</div>
            <div style={{ fontSize: 13, color: 'rgba(244,239,228,0.5)', lineHeight: 1.7 }}>We&apos;ll match you to the right region and course within 24 hours.</div>
            <span className="btn btn-gold" style={{ padding: '13px 28px', fontSize: 11 }}>Get Free Plan</span>
          </Link>
        </div>

        {/* Scroll hint — mobile only */}
        <div style={{ textAlign: 'center', paddingBottom: 32, paddingTop: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.2)' }}>← swipe to explore →</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRIP CAPTAIN — Identity psychology section
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#080C0A', padding: 'clamp(64px, 9vw, 112px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 60%, rgba(201,168,76,0.05) 0%, transparent 55%)' }} />
        <div className="wrap trip-cap-grid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Left — narrative */}
          <div>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>For the Trip Captain</span>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '14px 0 24px' }} />
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 52px)', color: 'var(--cream)', lineHeight: 1.1, marginBottom: 20 }}>
              You make the<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>impossible</em> happen.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'rgba(244,239,228,0.6)', marginBottom: 16 }}>
              Every group has one person who takes on the trip. That&apos;s you. Pick the wrong course, miss the booking window, lose the room block — and you never hear the end of it.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'rgba(244,239,228,0.6)', marginBottom: 36 }}>
              Since 2004 we&apos;ve been making Trip Captains look like legends.
              Tee times at courses that shut out the public. Room blocks held before they sell out.
              You take the credit. We do the work.
            </p>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding: '14px 36px', fontSize: 12 }}>
              Start Planning Free
            </Link>
          </div>

          {/* Right — numbered proof points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { n: '01', title: 'Preferred tee time access', body: 'Pebble Beach, Shadow Creek, Edgewood Tahoe, Torrey Pines — we hold relationships the public doesn\'t have. Groups get the times that are "unavailable" online.' },
              { n: '02', title: 'Room blocks held on inquiry', body: 'Atlantis, Peppermill, Eldorado, MGM properties. We hold group room blocks the day you call — before they sell out. Your group stays together.' },
              { n: '03', title: 'One contact handles everything', body: 'Tee times, hotels, shuttles, dining, insurance. One conversation. One itinerary. Zero logistics emails.' },
              { n: '04', title: '20 years of backup plans', body: '10,000+ outings. We\'ve seen every cancellation, every weather event, every overbooking. We have the backup and the relationships to fix it.' },
            ].map((p, i) => (
              <div key={p.n} style={{ display: 'flex', gap: 20, padding: '22px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--gold)', opacity: 0.5, flexShrink: 0, width: 28, paddingTop: 2 }}>{p.n}</div>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 700, color: 'var(--cream)', marginBottom: 6, letterSpacing: '-0.01em' }}>{p.title}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(244,239,228,0.48)' }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EXPERIENCE TYPES
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#F4EFE4', padding: 'clamp(64px, 9vw, 112px) 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 52px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-muted)' }}>Who We Plan For</span>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '14px auto 20px' }} />
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 5vw, 50px)', color: '#0a0a0a', lineHeight: 1.1, margin: 0 }}>
              Every kind of group.<br />One specialist.
            </h2>
          </div>
          <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              {
                title: 'Golf Buddy Trips',
                href: '/golf-buddy-trips/',
                img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=85',
                group: '4–24 players',
                desc: 'The trip you\'ve been talking about for years. We make it actually happen — tee times secured, hotels blocked, everyone on the same flight.',
                pull: '"I can\'t believe you got us on Shadow Creek."',
                accent: '#2A6B8A',
              },
              {
                title: 'Corporate & Incentive',
                href: '/corporate-and-incentive-golf-travel/',
                img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=85',
                group: '20–200 players',
                desc: 'Top performers deserve Pebble Beach, not a local muni. We plan the events that make people want to earn their invite back next year.',
                pull: 'The reward they\'ll remember — and fight to earn again.',
                accent: '#C4A040',
              },
              {
                title: 'International Tours',
                href: '/destinations/',
                img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=85',
                group: 'Scotland · Ireland · Portugal · Spain',
                desc: 'Links golf in Ireland and Scotland. Clifftop courses in Portugal. We handle the logistics, the language barriers, the cultural complexity.',
                pull: 'Bucket-list courses on the other side of the Atlantic.',
                accent: '#4A7A4A',
              },
            ].map(e => (
              <Link key={e.href} href={e.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#ffffff', overflow: 'hidden', position: 'relative' }}>
                {/* Image */}
                <div style={{ height: 200, backgroundImage: `url(${e.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.65) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 14, left: 18 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(0,0,0,0.5)', padding: '3px 8px' }}>{e.group}</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: e.accent }} />
                </div>
                {/* Body */}
                <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, color: '#0a0a0a', lineHeight: 1.1, margin: 0 }}>{e.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5a5a5a', flex: 1, margin: 0 }}>{e.desc}</p>
                  <div style={{ fontSize: 13, fontStyle: 'italic', color: '#7a7a7a', borderLeft: `2px solid ${e.accent}`, paddingLeft: 12, lineHeight: 1.6 }}>{e.pull}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: e.accent, marginTop: 4 }}>Plan This Trip →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY GROUPS FAIL — Problem/Solution with specificity
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#060C08', padding: 'clamp(64px, 9vw, 112px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 56px' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.9 }}>The Honest Truth</span>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '14px auto 20px' }} />
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4.5vw, 50px)', color: 'var(--cream)', lineHeight: 1.1, margin: 0 }}>
              Why groups who book<br />this themselves fail.
            </h2>
          </div>
          <div className="ps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: '🔒', problem: 'Pebble Beach requires a resort stay to book in advance.', solution: 'We coordinate your room and tee times at the same moment. You get the window the public never sees.', color: '#4A9BB8' },
              { icon: '🚗', problem: 'Shadow Creek is MGM hotel guests only, Mon–Thu.', solution: 'We package the MGM stay with the Shadow Creek tee time — limo, caddie, and all.', color: '#E8C060' },
              { icon: '🏨', problem: 'Group room blocks vanish. Late groups sleep in 3 different hotels.', solution: 'We hold your block the day you inquire. Your group stays together.', color: '#7BBFCF' },
              { icon: '💰', problem: 'Corporate groups pay retail for 30 tee times. The overage kills the budget.', solution: 'Volume relationships mean group rates on courses, hotels, and transportation.', color: '#C49050' },
              { icon: '🛡️', problem: 'One cancellation can unravel the entire trip.', solution: '72-hour cancellation policy + travel insurance options + 20 years of backup plans.', color: '#A0B850' },
              { icon: '⏱️', problem: 'The Trip Captain spends 40+ hours planning instead of golfing.', solution: 'One form. One call. We send you the itinerary. You show up and play.', color: '#B87060' },
            ].map(item => (
              <div key={item.problem} className="ps-card" style={{ padding: '24px 22px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderTop: `2px solid ${item.color}44` }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(244,239,228,0.35)', marginBottom: 12, fontStyle: 'italic' }}>{item.problem}</div>
                <div style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(244,239,228,0.82)', fontWeight: 500 }}>{item.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#050C07', padding: 'clamp(80px, 11vw, 148px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=70)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,12,7,0.5) 0%, rgba(5,12,7,0.97) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 660 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.8 }}>No obligation · Response in 24 hrs</span>
          <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '14px auto 24px' }} />
          <h2 className="cta-h2" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', lineHeight: 0.97, marginBottom: 24 }}>
            Tell us where.<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>We&apos;ll handle the rest.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(244,239,228,0.6)', marginBottom: 44, maxWidth: 480, margin: '0 auto 44px' }}>
            Two minutes. Tell us your destination, group size, and budget.
            A specialist calls you back with a full custom itinerary — tee times, hotel, transport, everything.
          </p>
          <div className="cta-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ fontSize: 13, padding: '17px 48px', letterSpacing: '0.12em' }}>
              Start Planning Now
            </Link>
            <a href="tel:8885848232" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '17px 32px', fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(244,239,228,0.7)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)', transition: 'all 0.2s' }}>
              Call 888-584-8232
            </a>
          </div>
          {/* Micro trust signals */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 24px' }}>
            {['Licensed Seller of Travel · NV & FL (ST37472)', '20+ years in business', '10,000+ outings planned', 'Groups from 4 to 200+'].map(t => (
              <span key={t} style={{ fontSize: 11, color: 'rgba(244,239,228,0.25)', letterSpacing: '0.04em' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Desktop region card component ── */
function RegionCardDesktop({ r, large }: { r: typeof regions[0]; large?: boolean }) {
  const h = large ? 520 : 240
  return (
    <Link href={r.href} className="region-card" style={{ textDecoration: 'none', display: 'block', position: 'relative', height: h, overflow: 'hidden', background: r.darkColor }}>
      <div className="region-img" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${r.img})`, backgroundSize: 'cover', backgroundPosition: r.position }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${r.darkColor}F0 0%, ${r.darkColor}AA 30%, transparent 65%)` }} />
      {/* Top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${r.accentColor} 0%, ${r.accentDim} 100%)` }} />
      {/* Urgency badge */}
      <div style={{ position: 'absolute', top: 16, right: 16, background: `${r.accentColor}1A`, border: `1px solid ${r.accentColor}44`, padding: '4px 10px', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: r.accentColor, textTransform: 'uppercase' }}>
        ⚑ {r.urgency}
      </div>
      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: large ? '28px 32px' : '20px 22px' }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: r.accentColor, marginBottom: 6, opacity: 0.9 }}>{r.tag}</div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: large ? 'clamp(22px, 2.2vw, 32px)' : 'clamp(16px, 1.6vw, 22px)', color: 'var(--cream)', fontWeight: 400, lineHeight: 1.1, margin: '0 0 8px' }}>{r.name}</h3>
        {large && <p style={{ fontSize: 13, color: 'rgba(244,239,228,0.55)', lineHeight: 1.65, margin: '0 0 14px', maxWidth: 360 }}>{r.fact}</p>}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: 'var(--serif)', fontSize: large ? 30 : 24, color: r.accentColor, lineHeight: 1 }}>{r.stat}</span>
          <span style={{ fontSize: 11, color: 'rgba(244,239,228,0.35)' }}>{r.statSub} · </span>
          <span style={{ fontSize: 10, color: 'rgba(244,239,228,0.3)', letterSpacing: '0.06em' }}>{r.statLabel}</span>
          <span className="region-arrow" style={{ fontSize: 14, color: r.accentColor, marginLeft: 'auto' }}>→</span>
        </div>
      </div>
    </Link>
  )
}
