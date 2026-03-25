import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Group Golf Tours',
  description: 'Terms and Conditions for Group Golf Tours — a Zoomaway Technologies Inc. product. Last amended April 13, 2009.',
  alternates: { canonical: 'https://www.groupgolftours.com/terms-and-conditions/' },
  robots: { index: false, follow: false },
}

export default function TermsAndConditions() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,130px) 0', background: 'var(--parchment)' }}>
      <div className="section-wrap" style={{ maxWidth: 760 }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>Legal</span>
        <div style={{ width: 36, height: 1, background: 'var(--copper)', margin: '14px 0 24px' }} />
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 300, color: '#1A1408', marginBottom: 8 }}>Terms and Conditions</h1>
        <div style={{ background: 'rgba(200,121,65,0.1)', border: '1px solid rgba(200,121,65,0.25)', padding: '12px 18px', marginBottom: 32, display: 'inline-flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 16 }}>⚠️</span>
          <span style={{ fontSize: 13, color: 'rgba(26,20,8,0.6)' }}><strong style={{ color: '#1A1408' }}>Last amended: April 13, 2009.</strong> Client has been advised to update this document before public launch.</span>
        </div>

        <div style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(26,20,8,0.62)' }}>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, color: '#1A1408', marginBottom: 24 }}>Zoomaway Technologies Inc. USER AGREEMENT</p>

          <p style={{ marginBottom: 16 }}>This is a legal agreement between you (&ldquo;User&rdquo;) and Zoomaway Technologies Inc. By using this site and its services, you agree to be bound by these Terms and Conditions.</p>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 300, color: '#1A1408', margin: '28px 0 10px' }}>Eligibility</h2>
          <p style={{ marginBottom: 16 }}>You must be 18 years of age or older and a natural person to use this service.</p>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 300, color: '#1A1408', margin: '28px 0 10px' }}>Hotel Bookings</h2>
          <p style={{ marginBottom: 16 }}>No more than 8 rooms may be booked online for the same hotel and stay dates. Groups of 9 or more rooms must contact our group specialists directly at <a href="tel:8885848232" style={{ color: 'var(--copper)', textDecoration: 'none' }}>888-584-8232</a> or <a href="mailto:customerservice@zoomaway.com" style={{ color: 'var(--copper)', textDecoration: 'none' }}>customerservice@zoomaway.com</a>.</p>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 300, color: '#1A1408', margin: '28px 0 10px' }}>Fees and Payment</h2>
          <p style={{ marginBottom: 16 }}>A $25 change/cancellation fee applies for unpublished and call-center-only rates. No fee is charged on published rates. Credit cards are charged in full at the time of booking.</p>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 300, color: '#1A1408', margin: '28px 0 10px' }}>Licensing</h2>
          <p style={{ marginBottom: 16 }}>Zoomaway Technologies Inc. is a registered seller of travel in the State of Nevada. CONSUMER CLUB, INC DBA: WWW.ZOOMAWAY is registered with the State of Florida as a Seller of Travel. Registration No. ST37472.</p>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 300, color: '#1A1408', margin: '28px 0 10px' }}>Governing Law &amp; Arbitration</h2>
          <p style={{ marginBottom: 16 }}>This agreement is governed by the laws of the State of Texas. Any disputes shall be resolved in Dallas County courts or through the American Arbitration Association (AAA) or JAMS arbitration services.</p>

          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 300, color: '#1A1408', margin: '28px 0 10px' }}>Contact</h2>
          <p>
            Zoomaway Technologies Inc.<br />
            3010 LBJ Freeway, Suite 1550<br />
            Dallas, TX 75234<br />
            <a href="mailto:customerservice@zoomaway.com" style={{ color: 'var(--copper)', textDecoration: 'none' }}>customerservice@zoomaway.com</a><br />
            <a href="tel:8885848232" style={{ color: 'var(--copper)', textDecoration: 'none' }}>888-584-8232</a>
          </p>
        </div>
      </div>
    </section>
  )
}
