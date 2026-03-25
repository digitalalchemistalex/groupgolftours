import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Group Golf Tours',
  description: 'Privacy policy for GroupGolfTours.com — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.groupgolftours.com/privacy-policy/' },
  robots: { index: false, follow: false },
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 36 }}>
    <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 300, color: '#1A1408', marginBottom: 12 }}>{title}</h2>
    <div style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(26,20,8,0.6)' }}>{children}</div>
  </div>
)

export default function PrivacyPolicy() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,130px) 0', background: 'var(--parchment)' }}>
      <div className="section-wrap" style={{ maxWidth: 760 }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>Legal</span>
        <div style={{ width: 36, height: 1, background: 'var(--copper)', margin: '14px 0 24px' }} />
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 300, color: '#1A1408', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: 'rgba(26,20,8,0.4)', marginBottom: 40 }}>Website: https://groupgolftours.com</p>

        <Section title="Comments">
          <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&apos;s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
        </Section>

        <Section title="Media">
          <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
        </Section>

        <Section title="Cookies">
          <p style={{ marginBottom: 12 }}>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
          <p style={{ marginBottom: 12 }}>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &ldquo;Remember Me&rdquo;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
          <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
        </Section>

        <Section title="Embedded content from other websites">
          <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
        </Section>

        <Section title="Who we share your data with">
          <p>If you request a password reset, your IP address will be included in the reset email.</p>
        </Section>

        <Section title="How long we retain your data">
          <p style={{ marginBottom: 12 }}>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
          <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
        </Section>

        <Section title="What rights you have over your data">
          <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
        </Section>

        <Section title="Where your data is sent">
          <p>Visitor comments may be checked through an automated spam detection service.</p>
        </Section>

        <p style={{ fontSize: 13, color: 'rgba(26,20,8,0.4)', marginTop: 32 }}>
          Questions? Contact us at{' '}
          <a href="mailto:customerservice@zoomaway.com" style={{ color: 'var(--copper)', textDecoration: 'none' }}>customerservice@zoomaway.com</a>
        </p>
      </div>
    </section>
  )
}
