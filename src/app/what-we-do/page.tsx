import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'What We Do — Custom Golf Travel Planning',
  description: 'Group Golf Tours specializes in custom golf travel packages — tee times, lodging, transportation, dining, and more. US and international destinations.',
  alternates: { canonical: 'https://www.groupgolftours.com/what-we-do/' },
}

const usDests = ['Lake Tahoe','Northern Nevada','Las Vegas','Monterey','Pebble Beach','Southern California','Arizona','Bandon, Oregon','Beaver Creek, Colorado','Sand Hills, Nebraska']
const intlDests = ['Mexico','Dominican Republic','Portugal','Spain','Ireland','Scotland']
const services = [
  { label: 'Golf Courses & Tee Times', href: '/golf-courses/', desc: 'Access to premier courses globally with preferred tee time booking.' },
  { label: 'Transportation', href: '/transportation/', desc: 'Airport transfers, group shuttles, and private vehicles.' },
  { label: 'Dining Events & Arrangements', href: '/dining-events-and-arrangements/', desc: 'Award-winning restaurants and curated culinary experiences.' },
  { label: 'Sightseeing & Activities', href: '/site-seeing-and-non-golf-activities/', desc: 'Beyond the greens — cultural landmarks, outdoor adventures, and more.' },
  { label: 'Travel Insurance', href: '/travel-insurance/', desc: 'Comprehensive coverage for trip cancellations and medical emergencies.' },
  { label: 'Group Packages', href: '/tour-packages/', desc: 'All-inclusive packages built around your group size and budget.' },
  { label: 'Hotel Reservations', href: '/hotel-reservations/', desc: 'Luxury accommodations at preferred rates near top courses.' },
  { label: 'Online Registration System', href: '/online-registration-system/', desc: 'Simple group management and attendee coordination tools.' },
]

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Complete Golf Travel,<br/>Start to Finish"
        subtitle="We handle every detail so you can focus on the game. From tee times and lodging to dining and transportation — all coordinated under one roof."
        img="https://images.unsplash.com/photo-1543369985-f9c0e80d0418?w=1600&q=80"
      />

      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-text)', marginBottom: 24 }}>
            We specialize in creating exceptional golf travel experiences for individuals and groups, offering tailored packages to some of the most sought-after golf destinations in the U.S. and around the world. With over two decades of experience, we&apos;ve built a trusted network of partnerships with top golf courses, luxury accommodations, and local tourism experts.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-text)', marginBottom: 40 }}>
            From budget-friendly trips to luxurious golf escapes, we handle all the details — customizing your itinerary, booking tee times, coordinating lodging, and ensuring every aspect of your trip is perfectly aligned with your preferences.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: 'var(--color-cream)' }}>
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 48 }}>
            <div>
              <p className="eyebrow">US Destinations</p>
              <div className="divider-gold" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {usDests.map(d => (
                  <span key={d} style={{ padding: '6px 14px', background: 'var(--color-white)', border: '1px solid var(--color-cream-dark)', fontSize: 13, color: 'var(--color-text)', borderRadius: 2 }}>{d}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">International</p>
              <div className="divider-gold" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {intlDests.map(d => (
                  <span key={d} style={{ padding: '6px 14px', background: 'var(--color-dark)', border: '1px solid rgba(201,168,76,0.2)', fontSize: 13, color: 'var(--color-cream)', borderRadius: 2 }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow">Our Services</p>
            <div className="divider-gold-center" />
            <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', color: 'var(--color-dark)' }}>Everything Your Trip Needs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {services.map(s => (
              <Link key={s.href} href={s.href} style={{ textDecoration: 'none', padding: '28px 28px', background: 'var(--color-cream)', borderLeft: '3px solid var(--color-gold)', display: 'block' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-dark)', marginBottom: 8 }}>{s.label}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-muted)' }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--color-dark)', textAlign: 'center' }}>
        <div className="section-wrap" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', color: 'var(--color-cream)', marginBottom: 20 }}>Ready to Start Planning?</h2>
          <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, marginBottom: 32 }}>Tell us about your group and we&apos;ll build a custom itinerary around your needs.</p>
          <Link href="/tour-inquiry/" className="btn-primary">Get a Custom Quote</Link>
        </div>
      </section>
    </>
  )
}
