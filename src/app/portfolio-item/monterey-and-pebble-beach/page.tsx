import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Monterey & Pebble Beach Golf Tours | Group Golf Tours',
  description: 'Experience iconic Pebble Beach Golf Links and Monterey\'s legendary coastal courses with Group Golf Tours. World-class play, breathtaking views, luxury stays.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach/' },
}

export default function Monterey() {
  return <DestinationPage
    name="Monterey & Pebble Beach"
    tag="California Coast"
    heroImg="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=80"
    heroCopy="Discover the perfect blend of natural beauty and legendary golf in Monterey and Pebble Beach. Renowned for its stunning coastal scenery, world-famous golf courses, and charming seaside towns, this destination offers an unforgettable escape. From the iconic 17-Mile Drive to the pristine fairways of Pebble Beach Golf Links, every moment here is a celebration of elegance and excellence."
    areas={['Pebble Beach Golf Links','The Lodge at Pebble Beach','Spanish Bay','Spyglass Hill Golf Course','Carmel-by-the-Sea','Monterey Bay Aquarium','Cannery Row','Pacific Grove','17-Mile Drive','Point Lobos State Natural Reserve','Asilomar State Beach','Big Sur','Del Monte Golf Course','Old Fisherman\'s Wharf Monterey']}
    prevDest={{ name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' }}
    nextDest={{ name: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/' }}
  />
}
