import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'Group Golf Tours — National & International Golf Travel Experts', template: '%s | Group Golf Tours' },
  description: 'Group Golf Tours specializes in custom golf travel packages for groups, buddies, and corporate events. 20+ years, 10,000+ outings. Lake Tahoe, Las Vegas, Pebble Beach, Southern California, Ireland, Scotland and more.',
  metadataBase: new URL('https://www.groupgolftours.com'),
  openGraph: {
    siteName: 'Group Golf Tours',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
