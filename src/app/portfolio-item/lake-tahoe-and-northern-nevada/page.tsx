import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Lake Tahoe & Northern Nevada Golf Tours | Group Golf Tours',
  description: 'Golf Lake Tahoe and Northern Nevada with Group Golf Tours. Sierra Nevada mountain courses, luxury lodging at elevation, and seamless group coordination. 20+ years experience.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/lake-tahoe-and-northern-nevada/' },
}

export default function LakeTahoe() {
  return <DestinationPage
    name="Lake Tahoe & Northern Nevada"
    tag="Sierra Nevada"
    heroImg="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=80"
    bestTime="May – October"
    groupSize="4 – 80 Players"
    heroCopy="Nestled in the heart of the Sierra Nevada, Lake Tahoe and Northern Nevada offer a captivating blend of natural beauty, world-class golf, and mountain adventure. Courses here sit at 5,000–7,000 feet elevation — the air is thinner, the ball flies farther, and the views are unlike anywhere else in American golf. From the crystal-clear waters of Lake Tahoe to the vibrant casino corridor of Reno and the rugged charm of Virginia City, this region rewards golfers who want more than just a round. We've been sending groups here for over two decades and know every course, every lodge, and every hidden gem worth your time."
    highlights={[
      { icon: '⛰️', title: 'Elevation Golf', desc: 'Courses at 5,000–7,000 ft elevation — ball flies 10–15% farther and mountain conditions create a genuinely unique game.' },
      { icon: '🏔️', title: 'Sierra Nevada Scenery', desc: 'Dramatic backdrops of granite peaks, alpine meadows, and the iconic blue of Lake Tahoe framing every fairway.' },
      { icon: '🎲', title: 'Reno Entertainment', desc: 'World-class casino resorts, restaurants, and nightlife in the Biggest Little City make this ideal for groups who want it all.' },
      { icon: '🌲', title: 'Year-Round Access', desc: 'Golf season runs May through October. Shoulder months offer cooler conditions and lower rates with full course availability.' },
    ]}
    courses={[
      { name: 'Somersett Golf & Country Club', type: 'Private Country Club', highlight: 'Ranked top private residential course by Golfweek. 62 white sand bunkers, 7 lakes, bluegrass fairways at 5,200 ft. 12 minutes from Downtown Reno.' },
      { name: 'Edgewood Tahoe Resort', type: 'Resort Course', highlight: 'One of the most scenic courses in North America, sitting directly on the south shore of Lake Tahoe. Host of the American Century Championship.' },
      { name: 'Montreux Golf & Country Club', type: 'Championship Course', highlight: 'Jack Nicklaus Signature Design carved through the Sierra Nevada foothills. Former PGA Tour host. Consistently ranked among Nevada\'s finest.' },
      { name: 'Graeagle Meadows', type: 'Mountain Golf', highlight: 'Classic mountain track in the picturesque Graeagle Valley. Relaxed pace, stunning views, and one of the most beloved layouts in the Sierra.' },
      { name: 'Whitehawk Ranch', type: 'Links-Style', highlight: 'Carved through the rolling farmlands and pines of the Mohawk Valley. Thoughtful design with natural hazards and memorable holes throughout.' },
      { name: 'Dragon at Gold Mountain', type: 'Resort Course', highlight: 'Robin Nelson design winding through pristine Feather River Canyon forest. One of California\'s hidden gems for serious golfers.' },
    ]}
    areas={['Emerald Bay State Park','Heavenly Mountain Resort','Sand Harbor','Kings Beach','Zephyr Cove','Northstar California Resort','Donner Memorial State Park','Reno','Virginia City','Pyramid Lake','Carson City','Elko','Great Basin National Park','Black Rock Desert']}
    galleryImgs={[
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    ]}
    nextDest={{ name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' }}
  />
}
