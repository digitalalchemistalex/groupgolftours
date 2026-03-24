import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
export const metadata: Metadata = { title: 'Somersett Golf & Country Club — Reno, Nevada | Group Golf Tours', description: 'Play Somersett Golf & Country Club in Northwest Reno — ranked Top Private Residential Course by Golfweek. 62 bunkers, 7 lakes, 5,200ft elevation, Bluegrass fairways.', alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/somersett-golf-country-club/' } }
export default function Somersett() {
  return (<>
    <PageHero eyebrow="Featured Course" title="Somersett Golf &amp;<br/>Country Club" subtitle="Northwest Reno&apos;s premier private golf experience — ranked among the top private residential courses in the nation." img="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=80" />
    <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
      <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 72 }}>
        <div>
          <p className="eyebrow">About the Course</p>
          <div className="divider-gold" />
          <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--color-text)', marginBottom: 20 }}>Somersett Golf and Country Club is nestled against Peavine Mountain opposite the eastern slopes of the Sierra Nevada in Northwest Reno. Elevated well above the valley floor, breathtaking vistas abound as you navigate 62 white sand bunkers, seven lakes, and dramatic elevation changes while playing this gorgeously-designed private golf course.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
            {[['Elevation','~5,200 ft'],['Bunkers','62 White Sand'],['Lakes','7'],['Fairways','Bluegrass']].map(([label, val]) => (
              <div key={label} style={{ padding: '16px', background: 'var(--color-cream)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--color-gold)', marginBottom: 4 }}>{val}</div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Tee Options</p>
          <div className="divider-gold" />
          {[['Sierra Tees','7,252 yds'],['Truckee Tees','6,393 yds'],['Peavine Tees','5,912 yds'],['Rose Tees','5,216 yds']].map(([tee, yards]) => (
            <div key={tee} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--color-cream-dark)' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--color-dark)' }}>{tee}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-muted)' }}>{yards}</span>
            </div>
          ))}
          <div style={{ marginTop: 32 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Location & Distance</p>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>2019 Championship Trail, Reno, NV 89523<br />15 min from Downtown Reno · 21 min from Peppermill &amp; Atlantis · 35 min from Truckee · 43 min from Carson City · 73 min from Stateline</p>
          </div>
          <div style={{ marginTop: 32, padding: '16px 20px', background: 'var(--color-dark)', borderLeft: '3px solid var(--color-gold)' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 6 }}>Awards</p>
            <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.8)', lineHeight: 1.7 }}>Ranked &ldquo;Top Private Residential Course&rdquo; by Golfweek<br />Voted Best of Reno 2021 — Reno Gazette Journal</p>
          </div>
        </div>
      </div>
    </section>
    <section style={{ padding: '60px 0', background: 'var(--color-dark)', textAlign: 'center' }}>
      <div className="section-wrap" style={{ maxWidth: 560 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--color-cream)', marginBottom: 16 }}>Play Somersett With Us</h2>
        <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, marginBottom: 32 }}>Include Somersett in your Lake Tahoe / Northern Nevada golf trip. We handle tee times, lodging, and full group coordination.</p>
        <Link href="/tour-inquiry/" className="btn-primary">Plan This Trip</Link>
      </div>
    </section>
  </>)
}
