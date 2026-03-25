import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Group Golf Tours — Custom Golf Travel Packages | USA & International',
  description: 'Group Golf Tours plans custom golf trips for buddies, corporate teams, and incentive groups. Pebble Beach, Shadow Creek, Lake Tahoe, Las Vegas, Southern California. 20+ years. 10,000+ outings.',
  alternates: { canonical: 'https://www.groupgolftours.com/' },
  openGraph: {
    title: 'Group Golf Tours — Custom Golf Travel Packages',
    description: 'Custom golf trip planning for groups, corporate events, and incentive travel. Pebble Beach to Shadow Creek — we handle every detail.',
    url: 'https://www.groupgolftours.com/',
    type: 'website',
  },
}

const regions = [
  {
    id: 'tahoe',
    name: 'Lake Tahoe & Northern Nevada',
    tag: 'Sierra Nevada',
    href: '/portfolio-item/lake-tahoe-and-northern-nevada/',
    accentColor: '#7BBFCF',
    darkColor: '#0B2218',
    stat: 'From $275/person',
    statLabel: 'Reno · TripCaddie Lowest',
    hook: 'From $275/person (1N/2R Reno) to $4,119 (5N/5R Edgewood Tahoe). 26 documented packages.',
    scarcity: 'Summer tee times fill by February',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=900&q=85',
  },
  {
    id: 'vegas',
    name: 'Las Vegas & Southern Nevada',
    tag: 'Desert Southwest',
    href: '/portfolio-item/las-vegas-and-southern-nevada/',
    accentColor: '#D4A843',
    darkColor: '#080808',
    stat: '$1,250/round',
    statLabel: 'Shadow Creek · Limo Incl.',
    hook: 'The most expensive tee time in America. We get your group on.',
    scarcity: 'Shadow Creek: Mon–Thu MGM guests only',
    img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=900&q=85',
  },
  {
    id: 'monterey',
    name: 'Monterey & Pebble Beach',
    tag: 'California Coast',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    accentColor: '#2A6B8A',
    darkColor: '#1C2B35',
    stat: '$675/round',
    statLabel: 'Pebble Beach Links',
    hook: 'Groups who try to book independently get shut out. We have preferred access.',
    scarcity: 'Book 12–18 months in advance',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=900&q=85',
  },
  {
    id: 'socal',
    name: 'Southern California',
    tag: 'Year-Round Sun',
    href: '/portfolio-item/monterey-and-pebble-beach-2/',
    accentColor: '#C4622D',
    darkColor: '#1A1610',
    stat: 'From $2,950/person',
    statLabel: '5N/4R SoCal Package',
    hook: '5-night/4-round documented packages from $2,950/person. Torrey Pines South: $277–$345/round non-resident.',
    scarcity: 'Non-resident tee times limited daily',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=85',
  },
  {
    id: 'somersett',
    name: 'Somersett Golf & CC',
    tag: 'Private Club Access',
    href: '/portfolio-item/somersett-golf-country-club/',
    accentColor: '#B87333',
    darkColor: '#131A0F',
    stat: 'From $540/person',
    statLabel: '2N/2R Private Access',
    hook: 'The only private Reno course most golfers will ever play. We get you access.',
    scarcity: 'Access by arrangement only',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
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
      description: 'Group Golf Tours plans custom golf travel packages for groups, buddy trips, and corporate events across the USA and internationally. 20+ years in business, 10,000+ outings planned.',
      areaServed: ['United States', 'Ireland', 'Scotland', 'Portugal', 'Spain', 'Mexico', 'Dominican Republic'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Golf Travel Packages',
        itemListElement: regions.map(r => ({
          '@type': 'Offer',
          name: r.name + ' Golf Packages',
          url: 'https://www.groupgolftours.com' + r.href,
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How far in advance should I book a group golf trip to Pebble Beach?',
          acceptedAnswer: { '@type': 'Answer', text: 'Groups should book Pebble Beach golf packages 12 to 18 months in advance. Resort guests can reserve tee times up to 18 months ahead, while non-guests can only book within 24 hours — making it nearly impossible to secure group slots without resort accommodation. Group Golf Tours manages this process, securing preferred tee times and resort lodging simultaneously.' },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to play Shadow Creek in Las Vegas?',
          acceptedAnswer: { '@type': 'Answer', text: 'Shadow Creek\'s green fee is $1,250 per player in 2025, making it the most expensive public tee time in the United States. Access is limited to guests of MGM Resorts properties (Monday–Thursday), with private limo transfer and caddie included. Group Golf Tours coordinates MGM resort stays and Shadow Creek tee times as part of complete Las Vegas golf packages.' },
        },
        {
          '@type': 'Question',
          name: 'What is the green fee at Pebble Beach Golf Links?',
          acceptedAnswer: { '@type': 'Answer', text: 'The green fee at Pebble Beach Golf Links is $675 per player for resort guests. Non-guests pay the same rate but can only book within 24 hours of the tee time, with no guarantee of availability. A minimum 2-night resort stay is required to book in advance. Group Golf Tours packages include preferred tee times and lodge accommodations.' },
        },
        {
          '@type': 'Question',
          name: 'What group sizes does Group Golf Tours handle?',
          acceptedAnswer: { '@type': 'Answer', text: 'Group Golf Tours handles groups from 4 players up to 200+ for corporate and incentive events. For buddy trips and small groups, packages typically run 4–24 players. Corporate and incentive events have been planned for groups exceeding 100 players across multiple courses and venues.' },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#060d08', overflow: 'hidden' }}>
        {/* Cinematic background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=90)', backgroundSize: 'cover', backgroundPosition: 'center 30%', opacity: 0.35 }} />
        {/* Gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(6,13,8,0.96) 0%, rgba(6,13,8,0.7) 55%, rgba(6,13,8,0.3) 100%)' }} />
        {/* Vertical gold line accent */}
        <div style={{ position: 'absolute', left: 'clamp(20px, 5vw, 72px)', top: '15%', bottom: '15%', width: 1, background: 'linear-gradient(to bottom, transparent 0%, var(--gold) 30%, var(--gold) 70%, transparent 100%)', opacity: 0.4 }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 760, paddingLeft: 24 }}>

            {/* Pre-headline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }} className="anim-fade-up">
              <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
              <span className="eyebrow-light">20+ Years · 10,000+ Outings Planned</span>
            </div>

            {/* Main headline */}
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(52px, 8vw, 108px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 36 }} className="anim-fade-up anim-fade-up-d1">
              Golf Trips<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Worth</em><br />
              <em style={{ fontStyle: 'italic', color: 'rgba(244,239,228,0.6)' }}>Bragging About.</em>
            </h1>

            {/* Sub */}
            <p style={{ fontSize: 18, lineHeight: 1.8, color: 'rgba(244,239,228,0.7)', maxWidth: 500, marginBottom: 48, fontWeight: 300 }} className="anim-fade-up anim-fade-up-d2">
              From Pebble Beach at $675 a round to Shadow Creek at $1,250 — we secure the tee times your group can&apos;t get on their own, then build the trip around them.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 64 }} className="anim-fade-up anim-fade-up-d3">
              <Link href="/tour-inquiry/" className="btn btn-gold">Plan My Trip</Link>
              <Link href="/destinations/" className="btn btn-ghost">See All 5 Destinations</Link>
            </div>

            {/* Trust indicators */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, paddingTop: 32, borderTop: '1px solid rgba(201,168,76,0.15)' }} className="anim-fade-up anim-fade-up-d4">
              {[
                { n: '20+', l: 'Years in Business' },
                { n: '10,000+', l: 'Outings Planned' },
                { n: '5', l: 'Signature Regions' },
                { n: 'NV + FL', l: 'Licensed Seller of Travel' },
              ].map(s => (
                <div key={s.n}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 500, color: 'var(--gold)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.4)', marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.4 }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--gold))', animation: 'pulse-gold 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ═══ THE TRIP CAPTAIN HOOK ═════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(60px,8vw,100px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="eyebrow-light">For the Trip Captain</span>
            <div className="rule rule-lg" style={{ background: 'var(--gold)', marginTop: 16 }} />
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 54px)', color: 'var(--cream)', marginBottom: 24, lineHeight: 1.1 }}>
              You&apos;re the one who makes<br />
              <em style={{ color: 'var(--gold)' }}>the impossible happen.</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'rgba(244,239,228,0.6)', marginBottom: 16 }}>
              Every golf group has one person who takes it on themselves to plan the trip everyone will talk about for years. That&apos;s you. And you already know the stakes — pick the wrong course, miss the booking window, or lose the group rate, and you never hear the end of it.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'rgba(244,239,228,0.6)', marginBottom: 36 }}>
              We&apos;ve been making Trip Captains look like legends since 2004. Tee times at courses that shut out individual bookings. Group rates at resort hotels. Transportation, dining, sightseeing — all handled. You take the credit. We do the work.
            </p>
            <Link href="/tour-inquiry/" className="btn btn-gold">Start Planning</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: '⛳', title: 'Preferred tee time access', desc: 'We hold relationships with Pebble Beach, Shadow Creek, Edgewood Tahoe, Torrey Pines and 200+ courses. Your group gets times that aren\'t publicly available.' },
              { icon: '🏨', title: 'Group room blocks', desc: 'We negotiate and hold room blocks at resort hotels — keeping your group together and saving 15–30% vs. booking individually.' },
              { icon: '📋', title: 'One point of contact', desc: 'Tee times, lodging, transportation, dining, insurance — one call, one contact, zero logistics headaches for you.' },
              { icon: '🛡️', title: '20+ years of zero disasters', desc: 'We\'ve handled 10,000+ outings. We know every cancellation policy, every backup plan, every way to protect your group\'s investment.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600, color: 'var(--cream)', marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(244,239,228,0.5)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5 REGIONS — EDITORIAL GRID ═══════════════════════ */}
      <section style={{ background: '#060d08', padding: 'clamp(60px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
            <div>
              <span className="eyebrow-light">Where We Play</span>
              <div className="rule rule-lg" style={{ background: 'var(--gold)', marginTop: 16 }} />
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,5vw,64px)', color: 'var(--cream)', lineHeight: 1.05 }}>
                Five Regions.<br />Five Distinct Worlds.
              </h2>
            </div>
            <Link href="/destinations/" className="btn btn-ghost" style={{ fontSize: 11 }}>All Destinations</Link>
          </div>

          {/* FEATURED — Pebble Beach large + Tahoe */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16, marginBottom: 16 }}>
            {regions.slice(2, 3).map(r => <RegionCard key={r.id} r={r} large />)}
            {regions.slice(0, 1).map(r => <RegionCard key={r.id} r={r} />)}
          </div>
          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {regions.slice(1, 2).map(r => <RegionCard key={r.id} r={r} />)}
            {regions.slice(3, 4).map(r => <RegionCard key={r.id} r={r} />)}
            {regions.slice(4, 5).map(r => <RegionCard key={r.id} r={r} />)}
          </div>
        </div>
      </section>

      {/* ═══ SCARCITY / REAL DATA STRIP ═══════════════════════ */}
      <section style={{ background: '#0d0d0d', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '40px 0', overflow: 'hidden' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0 }}>
          {[
            { course: 'Pebble Beach', fee: '$675', note: 'Book 12–18 months out', color: '#2A6B8A' },
            { course: 'Shadow Creek', fee: '$1,250', note: 'MGM guests only · Limo included', color: '#D4A843' },
            { course: 'Edgewood Tahoe', fee: '$350', note: '6,200 ft elevation', color: '#7BBFCF' },
            { course: 'Torrey Pines South', fee: '$345', note: '2× US Open host', color: '#C4622D' },
            { course: 'Somersett G&CC', fee: 'Private', note: 'Access by arrangement', color: '#B87333' },
          ].map((c, i) => (
            <div key={c.course} style={{ padding: '24px 28px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', textAlign: 'center' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.color, marginBottom: 8 }}>{c.course}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--cream)', lineHeight: 1, marginBottom: 6 }}>{c.fee}</div>
              <div style={{ fontSize: 11, color: 'rgba(244,239,228,0.35)', letterSpacing: '0.04em' }}>{c.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ EXPERIENCE TYPES ══════════════════════════════════ */}
      <section style={{ background: 'var(--off-white)', padding: 'clamp(60px,8vw,120px) 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
            <span className="eyebrow">Who We Plan For</span>
            <div className="rule rule-center" style={{ margin: '16px auto 20px' }} />
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,5vw,54px)', color: '#0a0a0a', lineHeight: 1.1, marginBottom: 16 }}>
              Every kind of golf group.<br />One specialist.
            </h2>
            <p style={{ fontSize: 15, color: '#5a5a5a', lineHeight: 1.8 }}>
              Whether you&apos;re 8 friends chasing a bucket-list course or a company rewarding 80 top performers — we&apos;ve done it before.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}>
            {[
              {
                title: 'Golf Buddy Trips',
                href: '/golf-buddy-trips/',
                img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
                stat: '4–24 players',
                desc: 'The trip your group has been talking about for years. We make it actually happen — tee times, flights, hotel, the works.',
                hook: '"I can\'t believe you got us on Shadow Creek."',
              },
              {
                title: 'Corporate & Incentive',
                href: '/corporate-and-incentive-golf-travel/',
                img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80',
                stat: '20–200 players',
                desc: 'Your top performers deserve Pebble Beach, not a local muni. We plan corporate golf events that make people want to earn their invite back.',
                hook: 'The ultimate reward for the people who earned it.',
              },
              {
                title: 'International Golf Tours',
                href: '/destinations/',
                img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
                stat: 'Scotland · Ireland · Portugal · Spain',
                desc: 'Links golf in Ireland and Scotland. Clifftop courses in Portugal. We handle the visa complexity, the logistics, the language barriers. You just play.',
                hook: 'Bucket-list courses on the other side of the Atlantic.',
              },
            ].map(e => (
              <Link key={e.href} href={e.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
                <div style={{ height: 220, backgroundImage: `url(${e.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{e.stat}</div>
                  </div>
                </div>
                <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, color: '#0a0a0a', lineHeight: 1.1 }}>{e.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5a5a5a', flex: 1 }}>{e.desc}</p>
                  <div style={{ fontSize: 13, fontStyle: 'italic', color: '#8a8a8a', borderLeft: '2px solid var(--gold)', paddingLeft: 12 }}>{e.hook}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: 8 }}>Plan This Trip →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY BOOK WITH US — REAL REASONS ══════════════════ */}
      <section style={{ background: '#060d08', padding: 'clamp(60px,8vw,100px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 64px' }}>
            <span className="eyebrow-light">The Honest Truth</span>
            <div className="rule rule-center" style={{ background: 'var(--gold)', marginTop: 16 }} />
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,5vw,54px)', color: 'var(--cream)', lineHeight: 1.1 }}>
              Why groups who try to<br />book this themselves fail.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {[
              {
                problem: 'Pebble Beach books out 18 months in advance.',
                solution: 'We hold preferred access. Your group gets tee times the public can\'t touch.',
                icon: '🔒',
              },
              {
                problem: 'Shadow Creek requires MGM hotel stay — Mon–Thu only.',
                solution: 'We package the MGM stay with the tee time. Groups get the limo, the caddie, the experience.',
                icon: '🚗',
              },
              {
                problem: 'Group room blocks disappear fast. Late bookers get split across 3 hotels.',
                solution: 'We hold room blocks the moment you inquire. Your group stays together.',
                icon: '🏨',
              },
              {
                problem: 'Corporate groups pay retail for 20+ tee times. It adds up fast.',
                solution: 'Our volume relationships mean group discounts on courses, hotels, and transportation.',
                icon: '💰',
              },
              {
                problem: 'One cancellation unravels the whole trip.',
                solution: '72-hour cancellation policy, travel insurance options, and 20 years of backup plans.',
                icon: '🛡️',
              },
              {
                problem: 'The Trip Captain spends 40 hours planning instead of golfing.',
                solution: 'One form. One conversation. We send you the itinerary and you show up.',
                icon: '⛳',
              },
            ].map(item => (
              <div key={item.problem} style={{ padding: '28px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderTop: '2px solid rgba(201,168,76,0.3)' }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(244,239,228,0.4)', marginBottom: 12, fontStyle: 'italic' }}>{item.problem}</div>
                <div style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(244,239,228,0.85)', fontWeight: 500 }}>{item.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(72px,10vw,140px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1400&q=70)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.95) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 680 }}>
          <span className="eyebrow-light">No obligation. No pressure.</span>
          <div className="rule rule-center" style={{ background: 'var(--gold)', marginTop: 16 }} />
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px,6vw,80px)', color: 'var(--cream)', lineHeight: 1.0, marginBottom: 24 }}>
            Tell us where.<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>We&apos;ll handle the rest.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(244,239,228,0.65)', marginBottom: 48, maxWidth: 500, margin: '0 auto 48px' }}>
            Fill out a 2-minute form. A golf travel specialist calls you back within 24 hours with a custom itinerary built around your group, your dates, and your budget.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ fontSize: 13, padding: '16px 44px' }}>Start Planning Now</Link>
            <a href="tel:8885848232" className="btn btn-ghost">Call 888-584-8232</a>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(244,239,228,0.25)', letterSpacing: '0.08em' }}>
            Licensed Seller of Travel · Nevada & Florida (ST37472) · Zoomaway Technologies Inc.
          </div>
        </div>
      </section>
    </>
  )
}

function RegionCard({ r, large }: { r: typeof regions[0], large?: boolean }) {
  return (
    <Link href={r.href} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: large ? '16/9' : '4/3', background: r.darkColor }}>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${r.img})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }} className="region-bg" />
      {/* Gradient */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${r.darkColor} 0%, ${r.darkColor}99 25%, transparent 60%)` }} />
      {/* Accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: r.accentColor }} />
      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: large ? '32px 36px' : '24px 24px' }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: r.accentColor, marginBottom: 8 }}>{r.tag}</div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: large ? 'clamp(22px,2.5vw,34px)' : 'clamp(16px,2vw,24px)', color: 'var(--cream)', fontWeight: 400, lineHeight: 1.1, marginBottom: 10 }}>{r.name}</h3>
        {large && <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(244,239,228,0.6)', marginBottom: 16, maxWidth: 340 }}>{r.hook}</p>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: large ? 28 : 22, color: r.accentColor, lineHeight: 1 }}>{r.stat}</div>
            <div style={{ fontSize: 9, color: 'rgba(244,239,228,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3 }}>{r.statLabel}</div>
          </div>
          {large && (
            <div className="scarcity-chip" style={{ borderColor: `${r.accentColor}44`, color: r.accentColor, background: `${r.accentColor}18` }}>
              ⚑ {r.scarcity}
            </div>
          )}
        </div>
      </div>
      <style>{`.region-bg:hover { transform: scale(1.04); }`}</style>
    </Link>
  )
}
