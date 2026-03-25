import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Group Golf Tours',
  description: 'Cancellation policy for Group Golf Tours. 72-hour free cancellation on standard bookings. Large group outings governed by individual contract.',
  alternates: { canonical: 'https://www.groupgolftours.com/cancellation-policy/' },
}

export default function CancellationPolicy() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,130px) 0', background: 'var(--parchment)' }}>
      <div className="section-wrap" style={{ maxWidth: 760 }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>Legal</span>
        <div style={{ width: 36, height: 1, background: 'var(--copper)', margin: '14px 0 24px' }} />
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 300, color: '#1A1408', marginBottom: 32 }}>Cancellation Policy</h1>
        <div style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(26,20,8,0.65)' }}>
          <p style={{ marginBottom: 20 }}>
            Zoomaway provides its clientele with a <strong style={{ color: '#1A1408' }}>72-hour cancellation policy</strong> for all its services except for large group outings which are defined by an individual contract provided to the group leader. Cancellation policies for certain clients can vary and Zoomaway will pass on the vendor&apos;s (host) cancellation policy to its customers.
          </p>
          <p style={{ marginBottom: 32 }}>
            Zoomaway (and its subsidiaries and web products) provide travel bookings and other tourism-related products. Individual and Group cancellation policies are supported and outlined in all our technology pieces and customers must agree to these policies before proceeding to finishing their transactions.
          </p>
          <div style={{ background: 'rgba(200,121,65,0.08)', border: '1px solid rgba(200,121,65,0.2)', padding: '20px 24px', marginBottom: 32 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 8 }}>Questions about your booking?</div>
            <p style={{ fontSize: 13, color: 'rgba(26,20,8,0.6)' }}>
              Contact us at{' '}
              <a href="mailto:customerservice@zoomaway.com" style={{ color: 'var(--copper)', fontWeight: 600, textDecoration: 'none' }}>customerservice@zoomaway.com</a>
              {' '}or call{' '}
              <a href="tel:8885848232" style={{ color: 'var(--copper)', fontWeight: 600, textDecoration: 'none' }}>888-584-8232</a>.
            </p>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(26,20,8,0.4)' }}>
            See also: <Link href="/terms-and-conditions/" style={{ color: 'var(--copper)', textDecoration: 'none' }}>Terms &amp; Conditions</Link> &nbsp;·&nbsp; <Link href="/privacy-policy/" style={{ color: 'var(--copper)', textDecoration: 'none' }}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
