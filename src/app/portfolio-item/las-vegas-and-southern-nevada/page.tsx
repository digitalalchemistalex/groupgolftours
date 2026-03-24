import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Las Vegas & Southern Nevada Golf Tours | Group Golf Tours',
  description: 'Play Southern Nevada\'s finest golf courses with Group Golf Tours. Championship courses, luxury resorts, and the energy of Las Vegas — all seamlessly planned.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/las-vegas-and-southern-nevada/' },
}

export default function LasVegas() {
  return <DestinationPage
    name="Las Vegas & Southern Nevada"
    tag="Desert Southwest"
    heroImg="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&q=80"
    heroCopy="From the dazzling lights of the Las Vegas Strip to the breathtaking landscapes of the Mojave Desert, Southern Nevada offers a unique blend of excitement and serenity. Experience world-class entertainment, luxurious resorts, and vibrant nightlife in Las Vegas, or explore natural wonders like Red Rock Canyon, Valley of Fire, and the Hoover Dam. Whether you're seeking adventure, relaxation, or unforgettable memories, this region has it all."
    areas={['Las Vegas Strip','Fremont Street Experience','Red Rock Canyon National Conservation Area','Valley of Fire State Park','Hoover Dam','Lake Mead National Recreation Area','The Neon Museum','Bellagio Conservatory & Botanical Gardens','The Mob Museum','Seven Magic Mountains','Mount Charleston','Springs Preserve','Boulder City','Death Valley National Park','Ethel M Chocolate Factory']}
    prevDest={{ name: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/' }}
    nextDest={{ name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' }}
  />
}
