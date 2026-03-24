import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Golf Travel News & Tips — Group Golf Tours', description: 'Golf travel tips, destination guides, and industry news from Group Golf Tours.', alternates: { canonical: 'https://www.groupgolftours.com/news/' } }
export default function News() {
  return (<>
    <PageHero eyebrow="News & Updates" title="Golf Travel Tips &<br/>Destination Guides" subtitle="Insights, trip ideas, and updates from the Group Golf Tours team." />
    <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-cream)', textAlign: 'center' }}>
      <div className="section-wrap" style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 32 }}>New posts coming soon. In the meantime, reach out to our team directly for destination advice and trip ideas.</p>
        <Link href="/tour-inquiry/" className="btn-primary">Plan Your Next Trip</Link>
      </div>
    </section>
  </>)
}
