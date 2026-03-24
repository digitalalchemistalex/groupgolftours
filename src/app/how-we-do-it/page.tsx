import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
export const metadata: Metadata = { title: 'How We Do It — Our Process | Group Golf Tours', description: 'From your first inquiry to your final round — here\'s how Group Golf Tours plans and executes a perfect golf trip for your group.', alternates: { canonical: 'https://www.groupgolftours.com/how-we-do-it/' } }
const steps = [
  { n: '01', title: 'Submit Your Inquiry', desc: 'Tell us your destination, group size, dates, and budget. We ask the right questions upfront to build the right package.' },
  { n: '02', title: 'We Build Your Package', desc: 'Our team leverages 20+ years of vendor relationships to secure courses, accommodations, transportation, and dining — all negotiated for your group.' },
  { n: '03', title: 'You Review & Confirm', desc: 'We present your custom itinerary for review. Adjustments are made until everything is exactly right.' },
  { n: '04', title: 'We Handle All Logistics', desc: 'From confirmation emails to day-of coordination — our team manages every detail so your group doesn\'t have to.' },
  { n: '05', title: 'You Just Show Up & Play', desc: 'Arrive at your destination knowing everything is handled. Tee off, enjoy, and leave the rest to us.' },
]
export default function HowWeDoIt() {
  return (<>
    <PageHero eyebrow="How We Do It" title="From Inquiry to<br/>First Tee in 5 Steps" subtitle="We&apos;ve refined our process over 20+ years so you get the best trip with the least amount of effort." />
    <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
      <div className="section-wrap" style={{ maxWidth: 800 }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ display: 'flex', gap: 32, marginBottom: 48, paddingBottom: 48, borderBottom: i < steps.length - 1 ? '1px solid var(--color-cream-dark)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 56, fontWeight: 300, color: 'var(--color-gold)', lineHeight: 1, minWidth: 72 }}>{s.n}</div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, color: 'var(--color-dark)', marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-muted)' }}>{s.desc}</p>
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/tour-inquiry/" className="btn-primary">Start Your Trip</Link>
        </div>
      </div>
    </section>
  </>)
}
