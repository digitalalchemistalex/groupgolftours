import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Lake Tahoe & Northern Nevada Golf Tours | Group Golf Tours',
  description: 'Plan your Lake Tahoe and Northern Nevada golf trip with Group Golf Tours. Stunning Sierra Nevada courses, luxury lodging, and seamless group coordination.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/lake-tahoe-and-northern-nevada/' },
}

export default function LakeTahoe() {
  return <DestinationPage
    name="Lake Tahoe & Northern Nevada"
    tag="Sierra Nevada"
    heroImg="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=80"
    heroCopy="Nestled in the heart of the Sierra Nevada, Lake Tahoe and Northern Nevada offer a captivating blend of natural beauty, outdoor adventure, and cultural charm. From the crystal-clear waters of Lake Tahoe to the rugged landscapes of the Great Basin, this region invites you to explore breathtaking scenery, world-class recreation, and vibrant local communities. Whether you're seeking thrilling ski slopes, serene hiking trails, or charming mountain towns, you'll find endless reasons to fall in love with this unforgettable destination."
    areas={['Emerald Bay State Park','Heavenly Mountain Resort','Sand Harbor','Kings Beach','Zephyr Cove','Northstar California Resort','Donner Memorial State Park','Reno','Virginia City','Pyramid Lake','Carson City','Elko','Great Basin National Park','Black Rock Desert']}
    nextDest={{ name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' }}
  />
}
