import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | Group Golf Tours',
  description: 'Disclaimer for Group Golf Tours, a Zoomaway Technologies Inc. product.',
  alternates: { canonical: 'https://www.groupgolftours.com/disclaimer/' },
  robots: { index: false, follow: false },
}

export default function Disclaimer() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,130px) 0', background: 'var(--parchment)' }}>
      <div className="section-wrap" style={{ maxWidth: 760 }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>Legal</span>
        <div style={{ width: 36, height: 1, background: 'var(--copper)', margin: '14px 0 24px' }} />
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 300, color: '#1A1408', marginBottom: 32 }}>Disclaimer</h1>
        <div style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(26,20,8,0.65)' }}>
          <p style={{ marginBottom: 20 }}>
            Zoomaway Technologies Inc., and its subsidiaries (Zoomaway Inc. &amp; Tripsee) or operating web products (Golf the High Sierra, Group Golf Tours, Golf Graeagle, ZoomedIN) are not responsible in any way for any offensive content that is posted by users. Our products are a solicitation for business purposes and any other use of our products for personal purposes or illegal activities is strictly prohibited.
          </p>
          <p>
            Zoomaway Inc. staff will report any abuses of this program to the proper authorities. Please feel free to report any offensive material to{' '}
            <a href="mailto:sean@zoomaway.com" style={{ color: 'var(--copper)', textDecoration: 'none' }}>sean@zoomaway.com</a>{' '}
            and we will do our best to remove the content in question as soon as possible.
          </p>
        </div>
      </div>
    </section>
  )
}
