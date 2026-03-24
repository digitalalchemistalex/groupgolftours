'use client'
import Link from 'next/link'
import { useState } from 'react'

interface Course { name: string; type: string; highlight: string }
interface Highlight { icon: string; title: string; desc: string }

interface Props {
  name: string
  tag: string
  heroImg: string
  heroCopy: string
  areas: string[]
  courses?: Course[]
  highlights?: Highlight[]
  bestTime?: string
  groupSize?: string
  galleryImgs?: string[]
  prevDest?: { name: string; href: string }
  nextDest?: { name: string; href: string }
}

const services = [
  { label: 'Golf Tee Times', desc: 'Preferred access and group rates at top courses in this region.', href: '/golf-courses/', icon: '⛳' },
  { label: 'Hotel Reservations', desc: 'Luxury and value accommodations blocked together for your group.', href: '/hotel-reservations/', icon: '🏨' },
  { label: 'Transportation', desc: 'Airport transfers, shuttles, and private vehicles fully arranged.', href: '/transportation/', icon: '🚐' },
  { label: 'Dining & Events', desc: 'Award-winning restaurants and curated culinary experiences.', href: '/dining-events-and-arrangements/', icon: '🍽️' },
  { label: 'Travel Insurance', desc: 'Comprehensive coverage for trip cancellations and emergencies.', href: '/travel-insurance/', icon: '🛡️' },
  { label: 'Sightseeing & Activities', desc: 'Beyond the greens — local landmarks, outdoor adventures, and more.', href: '/site-seeing-and-non-golf-activities/', icon: '🗺️' },
]

function ServiceCard({ label, desc, href, icon }: { label: string; desc: string; href: string; icon: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link href={href} style={{ textDecoration: 'none', padding: '28px 24px', background: hovered ? 'var(--color-white)' : 'rgba(255,255,255,0.6)', border: `1px solid ${hovered ? 'var(--color-gold)' : 'rgba(201,168,76,0.2)'}`, display: 'block', transition: 'all 0.2s', transform: hovered ? 'translateY(-3px)' : 'none', boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.08)' : 'none' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-dark)', marginBottom: 8 }}>{label}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-muted)' }}>{desc}</p>
      <div style={{ marginTop: 14, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>Learn More →</div>
    </Link>
  )
}

export default function DestinationPage({ name, tag, heroImg, heroCopy, areas, courses, highlights, bestTime, groupSize, galleryImgs, prevDest, nextDest }: Props) {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', height: '85vh', minHeight: 600, display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingBottom: 'clamp(48px,6vw,80px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,26,15,0.95) 0%, rgba(13,26,15,0.5) 50%, rgba(13,26,15,0.15) 100%)' }} />
        <div className="section-wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
            <div style={{ maxWidth: 680 }}>
              <p className="eyebrow-light" style={{ marginBottom: 12 }}>{tag}</p>
              <div className="divider-gold" />
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px,6vw,76px)', color: 'var(--color-cream)', fontWeight: 400, lineHeight: 1.05, marginBottom: 28 }}>{name}</h1>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/tour-inquiry/" className="btn-primary">Plan This Trip</Link>
                <a href="tel:8885848232" className="btn-outline">Call 888-584-8232</a>
              </div>
            </div>
            {/* Quick facts pill */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 200 }}>
              {bestTime && (
                <div style={{ background: 'rgba(13,26,15,0.7)', border: '1px solid rgba(201,168,76,0.3)', padding: '12px 18px', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 4 }}>Best Time to Visit</div>
                  <div style={{ fontSize: 13, color: 'var(--color-cream)', fontWeight: 500 }}>{bestTime}</div>
                </div>
              )}
              {groupSize && (
                <div style={{ background: 'rgba(13,26,15,0.7)', border: '1px solid rgba(201,168,76,0.3)', padding: '12px 18px', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 4 }}>Ideal Group Size</div>
                  <div style={{ fontSize: 13, color: 'var(--color-cream)', fontWeight: 500 }}>{groupSize}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION OVERVIEW */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 72, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">About This Destination</p>
            <div className="divider-gold" />
            <p style={{ fontSize: 17, lineHeight: 1.95, color: 'var(--color-text)', fontWeight: 300 }}>{heroCopy}</p>
            <Link href="/tour-inquiry/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 32, fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-green)', textDecoration: 'none' }}>
              Request a Custom Package →
            </Link>
          </div>
          <div>
            <p className="eyebrow">Areas & Attractions</p>
            <div className="divider-gold" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {areas.map(a => (
                <span key={a} style={{ padding: '7px 14px', background: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)', fontSize: 12, fontWeight: 500, color: 'var(--color-text)', letterSpacing: '0.02em' }}>{a}</span>
              ))}
            </div>
            {highlights && highlights.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
                {highlights.map(h => (
                  <div key={h.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{h.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--color-dark)', marginBottom: 4 }}>{h.title}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-muted)' }}>{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {galleryImgs && galleryImgs.length > 0 && (
        <section style={{ padding: '0 0 clamp(60px,8vw,100px)', background: 'var(--color-white)' }}>
          <div className="section-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 12 }}>
              {galleryImgs.map((img, i) => (
                <div key={i} style={{ aspectRatio: i === 0 ? '16/9' : '4/3', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', gridColumn: i === 0 ? 'span 2' : 'span 1' }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURED COURSES */}
      {courses && courses.length > 0 && (
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-dark)' }}>
          <div className="section-wrap">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <p className="eyebrow-light">Where You&apos;ll Play</p>
              <div className="divider-gold-center" />
              <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', color: 'var(--color-cream)' }}>Featured Golf Courses</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
              {courses.map(c => (
                <div key={c.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', padding: '28px 24px' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 10 }}>{c.type}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--color-cream)', marginBottom: 12 }}>{c.name}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(245,240,232,0.6)' }}>{c.highlight}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/golf-courses/" className="btn-outline">View All Courses</Link>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-cream)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p className="eyebrow">Everything Included</p>
            <div className="divider-gold-center" />
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', color: 'var(--color-dark)', marginBottom: 16 }}>Full-Service Golf Travel</h2>
            <p style={{ fontSize: 15, color: 'var(--color-text-muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>Every detail handled — from the first tee time to the last dinner reservation.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {services.map(s => <ServiceCard key={s.href} {...s} />)}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section style={{ background: 'var(--color-green)', padding: '40px 0' }}>
        <div className="section-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', alignItems: 'center' }}>
          {[
            { n: '20+', label: 'Years Planning Golf Trips' },
            { n: '10,000+', label: 'Groups Served' },
            { n: '100%', label: 'Custom Itineraries' },
            { n: '24/7', label: 'Concierge Support' },
          ].map(s => (
            <div key={s.n} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 500, color: 'var(--color-gold)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-dark)', textAlign: 'center' }}>
        <div className="section-wrap" style={{ maxWidth: 640 }}>
          <p className="eyebrow-light">Ready to Go?</p>
          <div className="divider-gold-center" />
          <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', color: 'var(--color-cream)', marginBottom: 20 }}>Plan Your {name} Golf Trip</h2>
          <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: 40 }}>
            Tell us your group size, preferred dates, and budget. We&apos;ll put together a fully custom package — tee times, lodging, transport, dining, all of it.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tour-inquiry/" className="btn-primary">Request a Custom Package</Link>
            <a href="tel:8885848232" className="btn-outline">Call 888-584-8232</a>
          </div>
        </div>
      </section>

      {/* PREV/NEXT NAV */}
      {(prevDest || nextDest) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--color-green-mid)', padding: '24px clamp(20px,4vw,60px)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          {prevDest ? (
            <Link href={prevDest.href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-cream)', textDecoration: 'none', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 8 }}>
              ← <span>{prevDest.name}</span>
            </Link>
          ) : <div />}
          {nextDest ? (
            <Link href={nextDest.href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-cream)', textDecoration: 'none', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>{nextDest.name}</span> →
            </Link>
          ) : <div />}
        </div>
      )}
    </>
  )
}
