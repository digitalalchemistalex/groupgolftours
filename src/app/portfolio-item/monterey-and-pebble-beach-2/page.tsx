import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Southern California Golf Tours & Group Packages | Group Golf Tours',
  description: 'Golf Southern California with Group Golf Tours. Torrey Pines, La Quinta, PGA West, and more — custom group packages with luxury lodging in San Diego, Palm Springs, and LA.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach-2/' },
}

export default function SoCal() {
  return <DestinationPage
    name="Southern California"
    tag="Year-Round Sun"
    heroImg="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80"
    bestTime="Year-Round"
    groupSize="4 – 100 Players"
    heroCopy="Southern California delivers championship golf in three distinct worlds: the dramatic coastal bluffs of San Diego, the legendary desert resort courses of Palm Springs and La Quinta, and the glamour of Greater Los Angeles. Year-round sunshine means no off-season — your group can tee off in January as comfortably as July. Torrey Pines, perched above the Pacific Ocean and host to two US Opens, is among the most iconic public courses in America. An hour east, the Coachella Valley houses more golf courses per square mile than anywhere in the country — from legendary PGA West to boutique desert hideaways. Whether your group is after PGA Tour history, desert luxury, or a LA backdrop, SoCal delivers on all fronts. We know every course, every deal, and every shortcut that 20+ years in this market provides."
    highlights={[
      { icon: '☀️', title: '365 Days of Golf', desc: 'No season, no weather excuses. Southern California offers ideal golf conditions year-round, making it the most flexible destination we book.' },
      { icon: '🌊', title: 'Coastal Championship Golf', desc: 'Torrey Pines South Course — 2008 and 2021 US Open host — sits on cliffs above the Pacific in La Jolla. One of the great public courses in America.' },
      { icon: '🌴', title: 'Desert Resort Golf', desc: 'Palm Springs and La Quinta host 100+ courses in the Coachella Valley. PGA West, La Quinta Resort, and Bighorn are just the beginning.' },
      { icon: '🎬', title: 'Beyond the Course', desc: 'San Diego\'s beaches and Gaslamp Quarter, LA\'s entertainment scene, and Palm Springs\' mid-century cool give every group member something to love.' },
    ]}
    courses={[
      { name: 'Torrey Pines Golf Course', type: 'Public — US Open Host', highlight: 'Two iconic 18-hole courses on the cliffs above the Pacific Ocean in La Jolla. The South Course hosted the 2008 and 2021 US Opens. Bucket-list public golf.' },
      { name: 'PGA West Stadium Course', type: 'Resort — Pete Dye', highlight: 'Pete Dye\'s notorious Stadium Course — home of the American Express PGA Tour event. The most talked-about and feared holes in desert golf.' },
      { name: 'La Quinta Resort & Club', type: 'Mountain & Dunes Courses', highlight: 'Multiple championship courses at the iconic La Quinta Resort. The Mountain Course winds through dramatic Santa Rosa Mountain canyons.' },
      { name: 'Pelican Hill Golf Club', type: 'Resort — Newport Coast', highlight: 'Tom Fazio design with panoramic Pacific Ocean views in Newport Beach. Two 18-hole courses at one of California\'s premier ocean view resorts.' },
      { name: 'Riviera Country Club', type: 'Private — Historic', highlight: 'Known as the Riviera of the West. Home of The Genesis Invitational. One of the most storied and beautiful courses in American golf history.' },
      { name: 'Aviara Golf Club', type: 'Resort — Carlsbad', highlight: 'Arnold Palmer Signature Design in the hills above Carlsbad. Host resort course with outstanding conditioning and ocean views on the back nine.' },
    ]}
    areas={['Torrey Pines Golf Course','Riviera Country Club','Pelican Hill Golf Club','La Quinta Resort & Club','PGA West','Santa Monica Pier','Disneyland Resort','Balboa Park, San Diego','The Getty Center','Palm Springs','Joshua Tree National Park','Newport Beach','Catalina Island','San Diego Zoo']}
    galleryImgs={[
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
      'https://images.unsplash.com/photo-1538946686040-fb1c69c43af4?w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    ]}
    prevDest={{ name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' }}
  />
}
