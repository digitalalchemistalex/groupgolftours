import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Lake Tahoe & Northern Nevada Golf Packages | From $275/person | Group Golf Tours',
  description: 'Group golf packages in Lake Tahoe, Reno & Northern Nevada from $275/person. Edgewood Tahoe, Wolf Run, Lakeridge, ArrowCreek. Tee times + lodging + transport. 20+ years planning.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/lake-tahoe-and-northern-nevada/' },
  openGraph: {
    title: 'Lake Tahoe & Northern Nevada Golf Packages | From $275/person',
    description: 'Real group golf packages from $275/person. Edgewood Tahoe at 6,200 ft. Reno casino hotels from $99/night. We coordinate tee times + lodging in one call.',
    url: 'https://www.groupgolftours.com/portfolio-item/lake-tahoe-and-northern-nevada/',
  },
}

export default function LakeTahoeNorthernNevada() {
  return (
    <DestinationPage
      region="tahoe"
      name="Lake Tahoe & Northern Nevada"
      tagline="Sierra Nevada · Golf at Altitude"
      scarcityBar="Edgewood Tahoe peak season (July–Aug) books out by February. Reno casino hotel blocks fill fast for summer weekends."
      heroImg="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1800&q=90"
      heroHeadline={"Golf at 6,200 ft.<br/><em style=\"color:#7BBFCF\">Your ball flies</em><br/>10% farther."}
      heroSub="From $275/person for a 1-night/2-round Reno package to $4,119 for a luxury 5-night/5-round Edgewood Tahoe experience — we build the trip around your group's budget. 82 real trips in our system. Tee times, casino hotels, mountain lodges, all coordinated."
      stat1={{ n: 'From $275', label: 'Per Person · Reno Packages' }}
      stat2={{ n: '$1,362', label: 'Per Person · Edgewood Tahoe Stay & Play' }}
      stat3={{ n: '6,200 ft', label: 'Edgewood Tahoe Elevation' }}
      openingCopy="Lake Tahoe and Northern Nevada offer a range of golf experiences unmatched in the American West. In Reno, you get world-class casino resort hotels at budget-friendly rates and courses like Wolf Run, Lakeridge, ArrowCreek, Somersett, and Red Hawk — all within 20 minutes of the Strip. Move up into the Sierra Nevada and you hit Incline Village, Coyote Moon, Old Greenwood, and Gray's Crossing around Truckee. At the South Shore, Edgewood Tahoe sits directly on the lakeshore at 6,200 feet elevation — where the air is thin, the fairways are immaculate, and every shot carries farther than it would at sea level. We've planned trips here for 20+ years. Our lowest documented group package for this region is $275/person."
      tripCaptainHook="Booking a group in Reno-Tahoe yourself means cold-calling 4 casino hotels for room blocks, separately booking tee times at 3–4 courses, and hoping availability lines up. It rarely does. We hold preferred blocks at Atlantis, Peppermill, Eldorado, Silver Legacy, and Caesars, and we coordinate tee times simultaneously. Your group stays together, plays together, and you make one call. We've done this 82+ documented times for this region alone."
      highlights={[
        { icon: '🎰', title: 'Casino resort room blocks', desc: 'Atlantis, Peppermill, Eldorado, Silver Legacy — we hold group blocks year-round. Rooms from $99/night with resort amenities.' },
        { icon: '⛰️', title: 'Altitude advantage', desc: 'Golf above 6,000 ft means 6–10% more carry distance. Your 200-yard 6-iron becomes a 215-yard shot. Groups love it.' },
        { icon: '🏌️', title: 'Course variety at every budget', desc: 'From Lakeridge at $275/person packages up to Edgewood Tahoe at $4,119 — we match the course to your group\'s budget.' },
        { icon: '🚌', title: 'Casino-to-course shuttles', desc: 'We arrange group shuttles from casino hotels to all major courses. No rental cars, no logistics stress.' },
      ]}
      areas={[
        'Edgewood Tahoe', 'Wolf Run Golf Club', 'Lakeridge Golf Course', 'ArrowCreek (Legend & Challenge)',
        'Somersett Golf & Country Club', 'Red Hawk Golf Resort', 'Old Greenwood', "Gray's Crossing",
        'Coyote Moon', 'Incline Village Championship', 'Northstar Golf', 'Tahoe Donner',
        'Atlantis Casino Resort', 'Peppermill Resort', 'Eldorado Hotel Casino', 'Silver Legacy / Caesars',
        'Lake Tahoe', 'Reno', 'Truckee', 'Incline Village', 'Zephyr Cove', 'Carson City',
      ]}
      courses={[
        { name: 'Lakeridge Golf Course', type: 'Public · Reno', green_fee: 'From $275/person', highlight: 'Our most affordable documented Reno group package — 1 night, 2 rounds at Lakeridge staying in Reno. Great entry point for budget-conscious groups.', booking_note: 'Packages from $275/person' },
        { name: 'Wolf Run Golf Club', type: 'Public · Reno', green_fee: 'From $395/person', highlight: '2 nights, 3 rounds packages from $395/person documented in our trip database. Consistently rated one of the top public tracks in Reno.', booking_note: 'Multiple package tiers available' },
        { name: 'Red Hawk Golf Resort', type: 'Public · Reno', green_fee: 'From $499/person', highlight: 'Hills Course and Lakes Course. Packages from $499 (4 nights, 3 rounds) to $977 (5 nights, 4 rounds). Full resort amenities.', booking_note: 'From $499/person packages' },
        { name: 'ArrowCreek Golf Club', type: 'Semi-Private · Reno', green_fee: 'From $459/person', highlight: 'Legend Course and Challenge Course. 2-night/3-round packages from $459. One of Reno\'s most scenic elevated layouts.', booking_note: 'From $459/person' },
        { name: 'Edgewood Tahoe Golf Course', type: 'Resort · South Lake Tahoe', green_fee: 'From $1,362/person', highlight: 'On the shore of Lake Tahoe at 6,200 ft. Home of the American Century Championship celebrity tournament. 4-night/3-round packages from $1,362 up to 5-night/5-round luxury at $4,119/person.', booking_note: 'Book 60+ days advance — lodge guests preferred' },
        { name: "Coyote Moon / Old Greenwood / Gray's Crossing", type: 'Resort · Truckee Area', green_fee: 'From $530/person', highlight: 'Three of the finest mountain courses in the Sierra. Old Greenwood packages from $530 (2N/2R). Coyote Moon 2-night/3-round packages from $713. Gray\'s Crossing 4-night stay-and-play from $2,220.', booking_note: 'Multiple lodging options at Old Greenwood' },
        { name: 'Somersett Golf & Country Club', type: 'Private · NW Reno', green_fee: 'From $540/person', highlight: 'Golfweek top-ranked private residential course. Access by arrangement through our network. 2-night/2-round packages from $540/person.', booking_note: 'Private — access through Group Golf Tours only' },
      ]}
      faqs={[
        {
          q: 'What is the cheapest group golf package in Reno?',
          a: 'Our lowest documented Reno group golf package is $275/person for a 1-night, 2-round trip at Lakeridge Golf Course. Reno casino hotel rates are low enough that short 1–2 night packages with multiple rounds are very achievable at budget-friendly per-person prices. Wolf Run 2-night/3-round packages start at $395/person.',
        },
        {
          q: 'How much does a Lake Tahoe golf package cost?',
          a: 'Lake Tahoe and Truckee-area golf packages range from $449/person (4 nights, 3 rounds at Incline Village) to $4,119/person (5 nights, 5 rounds including Edgewood Tahoe stay-and-play). The most popular range for groups is $700–$1,500/person for 3–4 nights with 3–4 rounds. Edgewood Tahoe stay-and-play packages start at $1,362/person for 4 nights/3 rounds.',
        },
        {
          q: 'What casino hotels in Reno work best for golf groups?',
          a: 'We regularly book golf groups at Atlantis Casino Resort, Peppermill Resort, Eldorado (Caesars), Silver Legacy, and Grand Sierra Resort. All offer group room blocks, on-site dining and entertainment, and easy 15–25 minute drives to the top Reno courses. Casino hotel rates for group blocks typically run $99–$189/night depending on season.',
        },
        {
          q: 'How far is Reno from Lake Tahoe and Truckee courses?',
          a: 'Reno casino hotels are 30–45 minutes from Truckee-area courses (Old Greenwood, Gray\'s Crossing, Coyote Moon) and 45–60 minutes from the South Shore (Edgewood Tahoe). We arrange group shuttle buses from casino hotels to all major Sierra courses, eliminating the need for rental cars.',
        },
        {
          q: 'What is Edgewood Tahoe Golf Course green fee?',
          a: 'Edgewood Tahoe\'s green fee for non-lodge guests runs approximately $300–$350/round. Lodge guests have preferred tee time access booked up to 60 days in advance. Our stay-and-play packages start at $1,362/person for 4 nights/3 rounds including lodging at The Lodge at Edgewood Tahoe or nearby properties.',
        },
      ]}
      prevDest={{ name: 'Somersett G&CC', href: '/portfolio-item/somersett-golf-country-club/' }}
      nextDest={{ name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' }}
    />
  )
}
