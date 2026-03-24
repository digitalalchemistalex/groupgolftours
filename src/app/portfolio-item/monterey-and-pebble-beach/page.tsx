import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Pebble Beach & Monterey Golf Tours | Group Golf Tours',
  description: 'Play Pebble Beach Golf Links and the iconic courses of Monterey with Group Golf Tours. Custom group packages, preferred tee times, and luxury coastal lodging.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach/' },
}

export default function MontereyPebbleBeach() {
  return <DestinationPage
    name="Monterey & Pebble Beach"
    tag="California Coast"
    heroImg="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=80"
    bestTime="April – November"
    groupSize="4 – 40 Players"
    heroCopy="Monterey and Pebble Beach represent the pinnacle of American golf. Pebble Beach Golf Links — consistently ranked the #1 public course in the United States — sits on the Monterey Peninsula with the Pacific Ocean roaring against its cliffs on nearly every hole. This is bucket-list golf at its finest. Beyond Pebble, the Peninsula is home to Spyglass Hill, Spanish Bay, Cypress Point, and Poppy Hills — a concentration of world-class courses found nowhere else in the country. Off the course, Carmel-by-the-Sea charms with galleries, wine tasting, and some of California's finest dining. The 17-Mile Drive, Big Sur, and the Monterey Bay Aquarium round out a trip that non-golfing partners will love just as much. We've been placing groups at Pebble Beach for two decades and know how to secure the tee times and rates that individual travelers simply can't access."
    highlights={[
      { icon: '🌊', title: 'World\'s Greatest Public Course', desc: 'Pebble Beach Golf Links — ranked #1 public course in America year after year. Playing here is a moment every golfer deserves.' },
      { icon: '🌁', title: '17-Mile Drive Access', desc: 'The private Pebble Beach resort sits along the legendary 17-Mile Drive. Your group gets full access to one of the most scenic stretches of coastline in the world.' },
      { icon: '🍷', title: 'Carmel & Big Sur', desc: 'World-class dining, wine country, and the dramatic scenery of Big Sur just 30 minutes south make this the ideal destination for golfers and their partners.' },
      { icon: '🏆', title: 'US Open History', desc: 'Pebble Beach has hosted 6 US Opens, most recently in 2019. Walking the same fairways as Nicklaus, Watson, and Woods is part of what makes this special.' },
    ]}
    courses={[
      { name: 'Pebble Beach Golf Links', type: 'World Top 10 — Public', highlight: 'The crown jewel of American golf. Ocean views on virtually every hole. Home of 6 US Opens. Playing here is the single most requested experience we book.' },
      { name: 'Spyglass Hill Golf Course', type: 'Resort Course', highlight: 'Begins in the forest and descends to oceanside holes — the best of both worlds on the Monterey Peninsula. Consistently ranked in America\'s top 50.' },
      { name: 'Pebble Beach Links at Spanish Bay', type: 'Links-Style', highlight: 'Co-designed by Tom Watson. A true Scottish links experience on the California coast. Famous for the bagpiper at sunset on the 18th hole.' },
      { name: 'Del Monte Golf Course', type: 'Historic Track', highlight: 'The oldest course in continuous operation west of the Mississippi River (1897). A beloved and historic complement to the Peninsula\'s championship tracks.' },
      { name: 'Poppy Hills Golf Course', type: 'Championship', highlight: 'Owned by the Northern California Golf Association. Set in the Del Monte Forest with dramatic elevation changes and tight Monterey Pine corridors.' },
      { name: 'Quail Lodge Golf Club', type: 'Resort', highlight: 'Set in the Carmel Valley with a more relaxed atmosphere than the Peninsula courses. Excellent conditions, great value, and beautiful surroundings.' },
    ]}
    areas={['Pebble Beach Golf Links','The Lodge at Pebble Beach','Spanish Bay','Spyglass Hill Golf Course','Carmel-by-the-Sea','Monterey Bay Aquarium','Cannery Row','Pacific Grove','17-Mile Drive','Point Lobos State Natural Reserve','Asilomar State Beach','Big Sur','Del Monte Golf Course','Old Fisherman\'s Wharf']}
    galleryImgs={[
      'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    ]}
    prevDest={{ name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' }}
    nextDest={{ name: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/' }}
  />
}
