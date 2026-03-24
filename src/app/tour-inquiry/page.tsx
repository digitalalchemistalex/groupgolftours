import type { Metadata } from 'next'
import TourInquiryForm from '@/components/TourInquiryForm'

export const metadata: Metadata = {
  title: 'Plan Your Golf Trip | Tour Inquiry — Group Golf Tours',
  description: 'Start planning your custom golf package with Group Golf Tours. Tell us your destination, group size, and dates — we handle the rest. 20+ years, 10,000+ outings.',
  alternates: { canonical: 'https://www.groupgolftours.com/tour-inquiry/' },
}

export default function TourInquiry() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', paddingTop: 'calc(72px + clamp(48px,6vw,80px))', paddingBottom: 'clamp(48px,6vw,80px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1400&q=70) center/cover no-repeat', opacity: 0.12 }} />
        <div className="section-wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 680 }}>
          <p className="eyebrow-light" style={{ marginBottom: 16 }}>Get Started</p>
          <div className="divider-gold-center" />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,5vw,64px)', color: 'var(--color-cream)', fontWeight: 400, marginBottom: 20 }}>
            Plan Your Perfect Golf Trip
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', maxWidth: 520, margin: '0 auto' }}>
            Answer a few quick questions and we&apos;ll build a fully custom package — tee times, lodging, transport, dining. Everything handled.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-white)' }}>
        <div className="section-wrap">
          <TourInquiryForm />
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ background: 'var(--color-cream)', padding: '48px 0', borderTop: '1px solid var(--color-cream-dark)' }}>
        <div className="section-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center' }}>
          {[
            { icon: '📞', title: 'Prefer to Call?', desc: '888-584-8232', link: 'tel:8885848232' },
            { icon: '✉️', title: 'Email Us', desc: 'customerservice@zoomaway.com', link: 'mailto:customerservice@zoomaway.com' },
            { icon: '⏱️', title: 'Response Time', desc: 'Within 24 hours guaranteed', link: null },
            { icon: '🛡️', title: 'Licensed & Insured', desc: 'Registered seller of travel — NV & FL', link: null },
          ].map(item => (
            <div key={item.title} style={{ textAlign: 'center', maxWidth: 200 }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--color-dark)', marginBottom: 6 }}>{item.title}</div>
              {item.link ? (
                <a href={item.link} style={{ fontSize: 13, color: 'var(--color-green)', fontWeight: 600, textDecoration: 'none' }}>{item.desc}</a>
              ) : (
                <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{item.desc}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
