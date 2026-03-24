import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Customer Testimonials — Group Golf Tours', description: 'Read what golfers say about Group Golf Tours. 20+ years and 10,000+ outings — hear from the groups we\'ve taken to the world\'s great courses.', alternates: { canonical: 'https://www.groupgolftours.com/customer-testimonials/' } }
const reviews = [
  { name: 'Michael Jory', date: 'Aug 2024', stars: 5, text: 'Great course! One of the most challenging courses in the area. Always in excellent condition with fast greens and perfect fairways. The course sits at an elevation of approximately 5,200 ft.' },
  { name: 'Marcus Barrett', date: 'Jul 2024', stars: 5, text: 'Best course conditions I have played all year. Driving range and putting range as well at the course.' },
  { name: 'Beau Bennett', date: 'Oct 2023', stars: 5, text: 'I eat here 2-3 times per week and it just gets better and better. The Avocado Toast with poached eggs is awesome for breakfast. The dinner menu is also good with steaks, seafood and pasta dishes. The view is top-notch and the staff are excellent.' },
]
export default function Testimonials() {
  return (<>
    <PageHero eyebrow="What Our Clients Say" title="10,000+ Happy Groups<br/>Can&apos;t Be Wrong" subtitle="Don&apos;t take our word for it — hear from the golfers we&apos;ve had the privilege of taking to the world&apos;s great courses." />
    <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-cream)' }}>
      <div className="section-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>
          {reviews.map(r => (
            <div key={r.name} style={{ background: 'var(--color-white)', padding: '32px 28px', borderTop: '3px solid var(--color-gold)' }}>
              <div style={{ fontSize: 20, color: 'var(--color-gold)', marginBottom: 12 }}>{'★'.repeat(r.stars)}</div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text)', marginBottom: 20, fontStyle: 'italic' }}>&ldquo;{r.text}&rdquo;</p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--color-dark)', fontWeight: 500 }}>{r.name}</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>{r.date} · Google Review</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <p style={{ fontSize: 16, color: 'var(--color-text-muted)', marginBottom: 24 }}>Ready to join thousands of satisfied golfers?</p>
          <Link href="/tour-inquiry/" className="btn-primary">Plan Your Trip</Link>
        </div>
      </div>
    </section>
  </>)
}
