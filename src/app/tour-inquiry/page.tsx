import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TourInquiryForm from '@/components/TourInquiryForm'

export const metadata: Metadata = {
  title: 'Plan a Golf Trip — Tour Inquiry | Group Golf Tours',
  description: 'Tell us about your group and we\'ll build a custom golf travel package. Buddy trips, corporate events, international tours — we handle everything.',
  alternates: { canonical: 'https://www.groupgolftours.com/tour-inquiry/' },
}

export default function TourInquiry() {
  return (
    <>
      <PageHero
        eyebrow="Tour Inquiry"
        title="Let&apos;s Plan Your Perfect Golf Trip"
        subtitle="Fill out the form below and our team will build a custom package tailored to your group's preferences, budget, and destination."
      />
      <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-cream)' }}>
        <div className="section-wrap" style={{ maxWidth: 760 }}>
          <TourInquiryForm />
        </div>
      </section>
    </>
  )
}
