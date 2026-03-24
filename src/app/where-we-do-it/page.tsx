import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
export const metadata: Metadata = { title: 'Where We Do It — Destinations | Group Golf Tours', alternates: { canonical: 'https://www.groupgolftours.com/where-we-do-it/' } }
export default function WhereWeDoIt() { redirect('/destinations/') }
