import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Who We Are — Group Golf Tours',
  alternates: { canonical: 'https://www.groupgolftours.com/who-we-are/' },
}

export default function WhoWeAre() {
  redirect('/about-us/')
}
