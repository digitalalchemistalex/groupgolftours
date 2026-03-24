import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Golf Buddy Trips — Group Golf Getaways',
  description: 'Plan the ultimate golf buddy trip with Group Golf Tours. We handle tee times, lodging, transportation, and activities for groups of all sizes across the USA and internationally.',
  alternates: { canonical: 'https://www.groupgolftours.com/golf-buddy-trips/' },
}

export default function GolfBuddyTrips() {
  return (
    <>
      <PageHero
        eyebrow="Golf Buddy Trips"
        title="The Ultimate Group<br/>Golf Getaway"
        subtitle="Nothing beats hitting the fairways with your crew. We take the stress out of planning so you can focus on the game — and the good times."
        img="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      />

      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 80, alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Built for Groups</p>
            <div className="divider-gold" />
            <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', color: 'var(--color-dark)', marginBottom: 24 }}>Your Trip, Your Way</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--color-text-muted)', marginBottom: 20 }}>
              There&apos;s nothing like hitting the fairways with your favorite group of golf buddies, creating unforgettable memories both on and off the course. Our Golf Buddy Trips are designed to take the stress out of planning and deliver the ultimate group golf experience.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--color-text-muted)', marginBottom: 32 }}>
              Whether it&apos;s a weekend getaway to a renowned golf destination or an adventurous journey to a bucket-list course, we tailor every detail to match your group&apos;s preferences, style, and budget.
            </p>
            <Link href="/tour-inquiry/" className="btn-primary">Plan Your Buddy Trip</Link>
          </div>
          <div>
            {[
              ['Tee Times at World-Class Courses', 'Preferred access and group rates at premier courses across all our destinations.'],
              ['Lodging Coordinated for Your Group', 'From budget-friendly hotels to luxury resorts — rooms blocked together, not scattered.'],
              ['Transportation Handled', 'Airport transfers, shuttles between courses, and group transport throughout your stay.'],
              ['Activities Beyond the Course', 'Dining reservations, sightseeing, nightlife, and non-golf activities for the whole crew.'],
              ['One Point of Contact', 'No juggling vendors. One call handles everything from arrival to departure.'],
            ].map(([title, desc]) => (
              <div key={title as string} style={{ display: 'flex', gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid var(--color-cream-dark)' }}>
                <div style={{ width: 32, height: 32, minWidth: 32, background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                  <span style={{ color: 'var(--color-dark)', fontSize: 14, fontWeight: 700 }}>✓</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--color-dark)', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-muted)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(60px,6vw,80px) 0', background: 'var(--color-dark)', textAlign: 'center' }}>
        <div className="section-wrap" style={{ maxWidth: 640 }}>
          <p className="eyebrow-light">Group Sizes Welcome</p>
          <div className="divider-gold-center" />
          <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', color: 'var(--color-cream)', marginBottom: 20 }}>From Foursomes to Full Tournaments</h2>
          <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
            Whether you&apos;re a group of 4 or 40, we handle groups of any size with the same level of care and detail.
          </p>
          <Link href="/tour-inquiry/" className="btn-primary">Get Started</Link>
        </div>
      </section>
    </>
  )
}
