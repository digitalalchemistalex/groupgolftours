import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Corporate & Incentive Golf Travel — Group Golf Tours',
  description: 'Reward your team or impress clients with a perfectly planned corporate golf event. Group Golf Tours handles every detail for corporate outings, incentive trips, and executive retreats.',
  alternates: { canonical: 'https://www.groupgolftours.com/corporate-and-incentive-golf-travel/' },
}

const offerings = [
  { title: 'Corporate Golf Outings', desc: 'Full-day or multi-day events at premier courses — tee times, scoring, catering, and awards all handled.' },
  { title: 'Incentive Travel Programs', desc: 'Reward top performers with a golf trip they&apos;ll talk about for years. Fully customized, fully managed.' },
  { title: 'Executive Retreats', desc: 'Small-group luxury experiences combining world-class golf with high-end accommodations and dining.' },
  { title: 'Client Entertainment', desc: 'Impress clients on the course with premium access and white-glove service from start to finish.' },
  { title: 'Team Building Events', desc: 'Golf scrambles, skills clinics, and competitive formats designed to bring teams together.' },
  { title: 'Contract Negotiation', desc: 'We leverage our vendor relationships to secure the best rates and terms for your event.' },
]

export default function CorporateTravel() {
  return (
    <>
      <PageHero
        eyebrow="Corporate & Incentive Golf Travel"
        title="Elevate Your Corporate<br/>Golf Experience"
        subtitle="From client entertainment to incentive programs — we plan corporate golf events that make a lasting impression."
        img="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1600&q=80"
      />

      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow">Corporate Services</p>
            <div className="divider-gold-center" />
            <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', color: 'var(--color-dark)', marginBottom: 16 }}>Everything Your Corporate Event Needs</h2>
            <p style={{ fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
              With 20+ years of experience coordinating corporate golf events, we know what it takes to deliver a seamless, impressive, and memorable experience.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
            {offerings.map(o => (
              <div key={o.title} style={{ padding: '32px 28px', background: 'var(--color-cream)', borderTop: '3px solid var(--color-gold)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--color-dark)', marginBottom: 12 }}>{o.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--color-text-muted)' }} dangerouslySetInnerHTML={{ __html: o.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(60px,6vw,80px) 0', background: 'var(--color-dark)' }}>
        <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <p className="eyebrow-light">Why Choose Us</p>
            <div className="divider-gold" />
            <h2 style={{ fontSize: 'clamp(28px,3vw,40px)', color: 'var(--color-cream)', marginBottom: 24 }}>One Partner for Everything</h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 16 }}>
              Our long-standing vendor relationships mean better course access, preferred hotel rates, and seamless coordination that would take months to arrange on your own.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 32 }}>
              From small groups to large events, we ensure your corporate golf experience is handled with professionalism and precision — every time.
            </p>
            <Link href="/tour-inquiry/" className="btn-primary">Request a Corporate Quote</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[['Site Inspections Available','We visit venues in advance so you know exactly what to expect.'],['Electronic Registration System','Manage attendees, collect info, and handle logistics digitally.'],['Staffing & On-Site Support','Our team can be on-site to ensure the day runs flawlessly.'],['Transportation Logistics','Shuttles, transfers, and group transport fully coordinated.']].map(([t,d]) => (
              <div key={t as string} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.05)', borderLeft: '2px solid var(--color-gold)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--color-cream)', marginBottom: 6 }}>{t}</div>
                <div style={{ fontSize: 13, color: 'rgba(245,240,232,0.6)', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
