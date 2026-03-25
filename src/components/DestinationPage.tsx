'use client'
import Link from 'next/link'
import { useState } from 'react'

export interface Course {
  name: string
  type: string
  green_fee: string
  highlight: string
  booking_note?: string
}

export interface FAQ {
  q: string
  a: string
}

interface Props {
  region: 'tahoe' | 'vegas' | 'monterey' | 'socal' | 'somersett'
  name: string
  tagline: string
  scarcityBar: string
  heroImg: string
  heroHeadline: string
  heroSub: string
  stat1: { n: string; label: string }
  stat2: { n: string; label: string }
  stat3: { n: string; label: string }
  openingCopy: string
  tripCaptainHook: string
  courses: Course[]
  highlights: { icon: string; title: string; desc: string }[]
  areas: string[]
  faqs: FAQ[]
  prevDest?: { name: string; href: string }
  nextDest?: { name: string; href: string }
}

const REGION_STYLES = {
  tahoe:     { dark: '#0B2218', mid: '#163A28', accent: '#7BBFCF', textMuted: 'rgba(168,197,188,0.7)', borderAccent: 'rgba(123,191,207,0.25)' },
  vegas:     { dark: '#080808', mid: '#111111', accent: '#D4A843', textMuted: 'rgba(138,120,96,0.8)',  borderAccent: 'rgba(212,168,67,0.25)' },
  monterey:  { dark: '#1C2B35', mid: '#253B48', accent: '#2A6B8A', textMuted: 'rgba(155,181,191,0.7)', borderAccent: 'rgba(42,107,138,0.25)' },
  socal:     { dark: '#1A1610', mid: '#2A2218', accent: '#C4622D', textMuted: 'rgba(196,168,130,0.7)', borderAccent: 'rgba(196,98,45,0.25)' },
  somersett: { dark: '#131A0F', mid: '#1E2B18', accent: '#B87333', textMuted: 'rgba(168,152,120,0.7)', borderAccent: 'rgba(184,115,51,0.25)' },
}

function CourseCard({ c, accent }: { c: Course; accent: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: '24px 24px', background: hov ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${hov ? accent + '44' : 'rgba(255,255,255,0.06)'}`, transition: 'all 0.2s', borderTop: `2px solid ${hov ? accent : 'transparent'}` }}>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 8 }}>{c.type}</div>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--cream)', marginBottom: 8, lineHeight: 1.2 }}>{c.name}</h3>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 28, color: accent, lineHeight: 1, marginBottom: 8 }}>{c.green_fee}</div>
      <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(244,239,228,0.55)', marginBottom: c.booking_note ? 12 : 0 }}>{c.highlight}</p>
      {c.booking_note && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', background: `${accent}18`, border: `1px solid ${accent}33`, fontSize: 11, fontWeight: 600, color: accent, letterSpacing: '0.06em' }}>
          ⚑ {c.booking_note}
        </div>
      )}
    </div>
  )
}

export default function DestinationPage({
  region, name, tagline, scarcityBar, heroImg, heroHeadline, heroSub,
  stat1, stat2, stat3, openingCopy, tripCaptainHook,
  courses, highlights, areas, faqs, prevDest, nextDest,
}: Props) {
  const st = REGION_STYLES[region]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristDestination',
        name: name,
        description: openingCopy.slice(0, 200),
        url: `https://www.groupgolftours.com`,
        touristType: 'Golf Travelers',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'Service',
        name: `${name} Golf Travel Packages`,
        provider: {
          '@type': 'TravelAgency',
          name: 'Group Golf Tours',
          telephone: '+1-888-584-8232',
          url: 'https://www.groupgolftours.com',
        },
        description: `Custom group golf travel packages for ${name}. Tee times, lodging, transportation, and full trip coordination.`,
        areaServed: name,
      },
    ],
  }

  return (
    <div data-region={region}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══ SCARCITY BAR ═══════════════════════════════════ */}
      <div style={{ background: `linear-gradient(90deg, ${st.dark} 0%, ${st.mid} 50%, ${st.dark} 100%)`, borderBottom: `1px solid ${st.accent}33`, padding: '10px var(--pad)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <span style={{ fontSize: 16, color: st.accent }}>⚑</span>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600, color: st.accent, letterSpacing: '0.06em' }}>{scarcityBar}</span>
        <Link href="/tour-inquiry/" style={{ fontSize: 11, fontWeight: 700, color: 'var(--cream)', textDecoration: 'underline', letterSpacing: '0.08em' }}>Secure dates →</Link>
      </div>

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'flex-end', background: st.dark, overflow: 'hidden', paddingBottom: 'clamp(48px, 7vw, 88px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center 25%', transition: 'transform 8s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${st.dark} 0%, ${st.dark}dd 20%, ${st.dark}88 50%, ${st.dark}22 100%)` }} />
        {/* Accent top line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, transparent 0%, ${st.accent} 30%, ${st.accent} 70%, transparent 100%)` }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 720 }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: st.accent }}>{tagline}</span>
              <div style={{ width: 40, height: 1, background: st.accent, margin: '16px 0 20px' }} />
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(42px, 7vw, 88px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 28 }}
                dangerouslySetInnerHTML={{ __html: heroHeadline }} />
              <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(244,239,228,0.65)', maxWidth: 520, marginBottom: 40, fontWeight: 300 }} className="speakable-intro">
                {heroSub}
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/tour-inquiry/" className="btn btn-gold">Plan This Trip</Link>
                <a href="tel:8885848232" className="btn btn-ghost">Call 888-584-8232</a>
              </div>
            </div>

            {/* Stats box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minWidth: 180 }}>
              {[stat1, stat2, stat3].map((s, i) => (
                <div key={s.label} style={{ padding: '18px 24px', background: i === 1 ? `${st.accent}22` : 'rgba(0,0,0,0.5)', border: `1px solid ${st.accent}33`, borderTop: i > 0 ? 'none' : undefined, backdropFilter: 'blur(16px)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 30, color: i === 1 ? st.accent : 'var(--cream)', lineHeight: 1, marginBottom: 4 }}>{s.n}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: i === 1 ? st.accent : 'rgba(244,239,228,0.4)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPENING COPY + TRIP CAPTAIN HOOK ══════════════ */}
      <section style={{ background: st.mid, padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 72, alignItems: 'start' }}>
          <div>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: st.accent }}>About This Destination</span>
            <div style={{ width: 40, height: 1, background: st.accent, margin: '16px 0 24px' }} />
            <p style={{ fontSize: 16, lineHeight: 1.95, color: 'rgba(244,239,228,0.75)', fontWeight: 300 }}>{openingCopy}</p>
            <Link href="/tour-inquiry/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 32, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: st.accent, textDecoration: 'none' }}>
              Request a Custom Package →
            </Link>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: st.accent }}>Why Book Through Us</span>
            <div style={{ width: 40, height: 1, background: st.accent, margin: '16px 0 24px' }} />
            <p style={{ fontSize: 16, lineHeight: 1.95, color: 'rgba(244,239,228,0.75)', fontWeight: 300, marginBottom: 32 }}>{tripCaptainHook}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {highlights.map(h => (
                <div key={h.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 16px', background: 'rgba(0,0,0,0.3)', border: `1px solid ${st.accent}22`, width: '100%' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: 'var(--cream)', marginBottom: 4 }}>{h.title}</div>
                    <div style={{ fontSize: 12, lineHeight: 1.65, color: 'rgba(244,239,228,0.5)' }}>{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED COURSES — REAL GREEN FEES ════════════ */}
      <section style={{ background: st.dark, padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
            <div>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: st.accent }}>Where You&apos;ll Play</span>
              <div style={{ width: 40, height: 1, background: st.accent, margin: '16px 0 20px' }} />
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,48px)', color: 'var(--cream)', lineHeight: 1.05 }}>Featured Courses<br /><em style={{ color: st.accent, fontStyle: 'italic' }}>& Real Green Fees</em></h2>
            </div>
            <div style={{ padding: '12px 20px', background: `${st.accent}18`, border: `1px solid ${st.accent}33` }}>
              <div style={{ fontSize: 11, color: st.accent, fontWeight: 600, letterSpacing: '0.1em' }}>Group rates available</div>
              <div style={{ fontSize: 12, color: 'rgba(244,239,228,0.5)', marginTop: 2 }}>Ask about volume discounts</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {courses.map(c => <CourseCard key={c.name} c={c} accent={st.accent} />)}
          </div>
        </div>
      </section>

      {/* ═══ AREAS + ATTRACTIONS ════════════════════════════ */}
      <section style={{ background: st.mid, padding: 'clamp(48px,6vw,80px) 0' }}>
        <div className="wrap">
          <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: st.accent }}>Around the Region</span>
          <div style={{ width: 40, height: 1, background: st.accent, margin: '16px 0 24px' }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {areas.map(a => (
              <span key={a} style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.3)', border: `1px solid ${st.accent}22`, fontSize: 12, fontWeight: 500, color: 'rgba(244,239,228,0.6)', letterSpacing: '0.02em' }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ — AEO / AI Overview bait ══════════════════ */}
      <section style={{ background: 'var(--off-white)', padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Frequently Asked Questions</span>
          <div className="rule rule-lg" style={{ marginTop: 16 }} />
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,44px)', color: '#0a0a0a', marginBottom: 40, lineHeight: 1.1 }}>
            Everything you need to know<br />before you book.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} border={i < faqs.length - 1} accent={st.accent} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ════════════════════════════════════ */}
      <section style={{ background: st.dark, padding: 'clamp(72px,10vw,120px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 640 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: st.accent }}>Ready to Go?</span>
          <div style={{ width: 40, height: 1, background: st.accent, margin: '16px auto 24px' }} />
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,5vw,64px)', color: 'var(--cream)', lineHeight: 1.0, marginBottom: 24 }}>
            Plan Your<br />
            <em style={{ color: st.accent, fontStyle: 'italic' }}>{name}</em><br />
            Golf Trip
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(244,239,228,0.6)', marginBottom: 44, maxWidth: 480, margin: '0 auto 44px' }}>
            Tell us your group size, preferred dates, and budget. We build the full package — tee times, lodging, transport, dining — and send it to you within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold" style={{ padding: '16px 44px', fontSize: 13 }}>Request Custom Package</Link>
            <a href="tel:8885848232" className="btn btn-ghost">Call 888-584-8232</a>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS: Other Destinations */}
      <section style={{ background: '#060A08', padding: 'clamp(48px,6vw,72px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-wrap" style={{ maxWidth: 'var(--max)' }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: st.accent }}>Also Explore</span>
            <div style={{ width: 36, height: 1, background: st.accent, marginTop: 10, opacity: 0.7 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 2 }}>
            {[
              { label: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/', sub: 'From $275/person · Sierra Nevada' },
              { label: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/', sub: 'Shadow Creek $1,250/round' },
              { label: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/', sub: 'Pebble Beach $675/round' },
              { label: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/', sub: 'Torrey Pines · Year-Round Golf' },
              { label: 'Somersett Golf & Country Club', href: '/portfolio-item/somersett-golf-country-club/', sub: 'Private Club · Reno NV' },
            ].filter(d => !d.href.includes(region)).map(d => (
              <Link key={d.href} href={d.href} style={{ display: 'block', padding: '14px 18px', background: 'rgba(255,255,255,0.025)', textDecoration: 'none', borderLeft: '2px solid transparent', transition: 'all 0.18s' }}
                className="dest-xl">
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'rgba(245,237,216,0.7)', lineHeight: 1.2 }}>{d.label}</div>
                <div style={{ fontSize: 10, color: 'rgba(245,237,216,0.3)', marginTop: 3 }}>{d.sub}</div>
              </Link>
            ))}
            <Link href="/destinations/" style={{ display: 'block', padding: '14px 18px', background: 'rgba(255,255,255,0.025)', textDecoration: 'none', borderLeft: '2px solid transparent', transition: 'all 0.18s' }}
              className="dest-xl">
              <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'rgba(245,237,216,0.7)' }}>International Destinations</div>
              <div style={{ fontSize: 10, color: 'rgba(245,237,216,0.3)', marginTop: 3 }}>Ireland · Scotland · Portugal · Spain</div>
            </Link>
          </div>
        </div>
        <style>{`.dest-xl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:${st.accent}!important}.dest-xl:hover>div:first-child{color:${st.accent}!important}`}</style>
      </section>

      {/* CROSS-LINKS: Services */}
      <section style={{ background: '#0A0806', padding: 'clamp(48px,6vw,72px) 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap" style={{ maxWidth: 'var(--max)' }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--copper)' }}>Everything We Handle</span>
            <div style={{ width: 36, height: 1, background: 'var(--copper)', marginTop: 10, opacity: 0.7 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 2 }}>
            {[
              { icon: '⛳', label: 'Golf Courses & Tee Times', href: '/golf-courses/', sub: 'Preferred access at 200+ courses' },
              { icon: '🏨', label: 'Hotel Reservations', href: '/hotel-reservations/', sub: 'Group blocks · Best rates' },
              { icon: '🚌', label: 'Transportation', href: '/transportation/', sub: 'Airport transfers · Shuttles' },
              { icon: '🍽', label: 'Dining & Events', href: '/dining-events-and-arrangements/', sub: 'Group dining arrangements' },
              { icon: '🛡', label: 'Travel Insurance', href: '/travel-insurance/', sub: 'Protect your investment' },
              { icon: '📋', label: 'Tour Packages', href: '/tour-packages/', sub: 'All-inclusive from $275/person' },
              { icon: '🗺', label: 'Sightseeing & Activities', href: '/site-seeing-and-non-golf-activities/', sub: 'Beyond the greens' },
              { icon: '✅', label: 'Online Registration', href: '/online-registration-system/', sub: 'Manage your group digitally' },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ display: 'flex', gap: 12, padding: '14px 18px', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', borderLeft: '2px solid transparent', transition: 'all 0.18s', alignItems: 'flex-start' }}
                className="svc-xl">
                <span style={{ fontSize: 16, flexShrink: 0, opacity: 0.75, marginTop: 1 }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500, color: 'rgba(245,237,216,0.65)', lineHeight: 1.2 }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: 'rgba(245,237,216,0.28)', marginTop: 2 }}>{s.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`.svc-xl:hover{background:rgba(255,255,255,0.05)!important;border-left-color:var(--copper)!important}.svc-xl:hover div:first-child{color:var(--copper)!important}`}</style>
      </section>

      {/* PREV/NEXT */}
      {(prevDest || nextDest) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', background: st.mid, padding: '20px var(--pad)', borderTop: `1px solid ${st.accent}22` }}>
          {prevDest ? <Link href={prevDest.href} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(244,239,228,0.5)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>← {prevDest.name}</Link> : <div />}
          {nextDest ? <Link href={nextDest.href} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(244,239,228,0.5)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{nextDest.name} →</Link> : <div />}
        </div>
      )}
    </div>
  )
}

function FAQItem({ q, a, border, accent }: { q: string; a: string; border: boolean; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: border ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600, color: '#0a0a0a', lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: 18, color: accent, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 22, fontSize: 14, lineHeight: 1.85, color: '#4a4a4a', maxWidth: 680 }}>{a}</div>
      )}
    </div>
  )
}
