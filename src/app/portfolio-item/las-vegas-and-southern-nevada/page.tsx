import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Las Vegas Golf Tours & Group Packages | Group Golf Tours',
  description: 'Golf Las Vegas with Group Golf Tours. Championship desert courses, luxury resort stays on the Strip, and world-class entertainment for your golf group. Custom packages available.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/las-vegas-and-southern-nevada/' },
}

export default function LasVegas() {
  return <DestinationPage
    name="Las Vegas & Southern Nevada"
    tag="Desert Southwest"
    heroImg="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&q=80"
    bestTime="October – April"
    groupSize="4 – 200 Players"
    heroCopy="From the dazzling lights of the Las Vegas Strip to the breathtaking Mojave Desert landscape, Southern Nevada delivers a golf experience unlike anywhere else on earth. Championship desert courses wind through dramatic red rock terrain, with fairways framed by Joshua trees, canyon walls, and mountain backdrops. After the round, world-class resort hotels, Michelin-starred restaurants, and legendary nightlife put the exclamation point on any group golf trip. This is the destination that converts non-golfers into believers — there's genuinely something for everyone. We've been coordinating Vegas golf groups for over 20 years and know how to get your group the best tee times, the best rates, and the best experience the city has to offer."
    highlights={[
      { icon: '🏜️', title: 'Desert Championship Golf', desc: 'Dramatic desert layouts carved through canyons and lava fields — visually stunning and genuinely challenging at every skill level.' },
      { icon: '🎰', title: 'World-Class Resorts', desc: 'Stay and play packages at luxury Strip resorts. Golf, entertainment, fine dining, and nightlife all in one seamless experience.' },
      { icon: '🌅', title: 'Perfect Winter Golf', desc: 'October through April offers ideal temperatures in the mid-60s to 70s while the rest of the country is frozen. Peak season for group travel.' },
      { icon: '👥', title: 'Groups of Any Size', desc: 'Vegas handles large groups better than anywhere. We regularly coordinate outings from 8 to 200 players across multiple courses and venues.' },
    ]}
    courses={[
      { name: 'Shadow Creek', type: 'World Top 50', highlight: 'Tom Fazio masterpiece — arguably the finest resort course in America. Meticulously maintained. Exclusive access arranged through our relationships.' },
      { name: 'TPC Las Vegas', type: 'PGA Tour Venue', highlight: 'Former PGA Tour host with classic desert design. Outstanding conditions year-round and a bucket-list tick for any serious golfer.' },
      { name: 'Cascata Golf Club', type: 'Luxury Resort', highlight: 'Rees Jones design in the foothills of Boulder City. Jaw-dropping waterfall feature at the entrance and one of the most dramatic layouts in Nevada.' },
      { name: 'Wolf Creek Golf Club', type: 'Mesquite Desert', highlight: 'Consistently ranked among America\'s best public courses. Carved through red rock desert north of Las Vegas with unforgettable elevation changes.' },
      { name: 'Reflection Bay Golf Club', type: 'Lake Las Vegas', highlight: 'Jack Nicklaus Signature Design on the shores of Lake Las Vegas. Dramatic water features, resort amenities, and stunning desert mountain views.' },
      { name: 'Rio Secco Golf Club', type: 'Championship', highlight: 'Rees Jones design in the foothills with dramatic canyon holes. Home of the Butch Harmon School of Golf. Challenging and memorable.' },
    ]}
    areas={['Las Vegas Strip','Fremont Street Experience','Red Rock Canyon National Conservation Area','Valley of Fire State Park','Hoover Dam','Lake Mead National Recreation Area','The Neon Museum','Bellagio Conservatory & Botanical Gardens','The Mob Museum','Seven Magic Mountains','Mount Charleston','Springs Preserve','Boulder City','Death Valley National Park','Ethel M Chocolate Factory']}
    galleryImgs={[
      'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
      'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=800&q=80',
    ]}
    prevDest={{ name: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/' }}
    nextDest={{ name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' }}
  />
}
