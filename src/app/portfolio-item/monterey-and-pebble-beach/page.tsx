import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Pebble Beach & Monterey Golf Packages | $675/Round | Group Golf Tours',
  description: 'Group golf packages at Pebble Beach Golf Links ($675/round), Spyglass Hill, Spanish Bay. Groups must book 12–18 months in advance. We secure tee times groups cannot get independently.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach/' },
  openGraph: {
    title: 'Pebble Beach Group Golf Packages — $675/Round, 18-Month Advance Booking',
    description: 'Pebble Beach Groups can\'t book independently without a resort stay. We coordinate lodge rooms + tee times together. $675/round, 6× US Open host.',
    url: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach/',
  },
}

export default function MontereyPebbleBeach() {
  return (
    <DestinationPage
      region="monterey"
      name="Monterey & Pebble Beach"
      tagline="California Coast · The Pinnacle of American Golf"
      scarcityBar="Pebble Beach: minimum 2-night resort stay required to book in advance. Groups that wait lose their window. Summer 2026 is actively filling now."
      heroImg="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1800&q=90"
      heroHeadline={"Pebble Beach.<br/><em style=\"color:#2A6B8A\">The course every</em><br/>golfer must play."}
      heroSub="$675/round. Ranked #1 public course in America. 6× US Open host. To book in advance, you must stay at the resort — with a minimum 2-night requirement. Groups who try to book independently get paired with strangers or shut out entirely. We secure your rooms and tee times together."
      stat1={{ n: '$675', label: 'Per Round · Pebble Beach Links' }}
      stat2={{ n: '18 months', label: 'Advance Booking Window' }}
      stat3={{ n: '6×', label: 'US Open Host Course' }}
      openingCopy="Pebble Beach Golf Links opened in 1919 on the cliffs of the Monterey Peninsula, where the Pacific Ocean crashes against the rocks on virtually every hole. It has hosted six US Open Championships — Watson's chip-in at 17 in 1982, Tiger's 15-shot dominance in 2000, and Jon Rahm's 2021 victory. The current green fee is $675/person for resort guests. Non-guests can only book within 24 hours of their round, with essentially no chance of securing multiple consecutive tee times for a group. The only way to guarantee your group plays together is to stay at The Lodge at Pebble Beach or The Inn at Spanish Bay — which allows booking up to 18 months in advance — and a minimum 2-night stay is required. We coordinate the resort reservation and tee times simultaneously, ensuring your group gets the dates you want."
      tripCaptainHook="Here's the problem groups face every time: to book Pebble Beach tee times more than 24 hours in advance, you need a resort stay. Resort room rates run $1,027–$8,500+ per night. You need to negotiate a group room block, confirm the minimum stay requirement, and then immediately lock tee times before they go — all at the same time. We've done this for groups ranging from 4 to 40+ players. We hold preferred access at Pebble Beach Resorts and book rooms and tee times in a single coordinated process."
      highlights={[
        { icon: '🌊', title: 'Groups play together', desc: 'We secure consecutive tee times so every player in your group tees off together — not split across random strangers.' },
        { icon: '🏨', title: 'Resort access unlocked', desc: 'Lodge at Pebble Beach and Inn at Spanish Bay guests get 18-month advance booking. We coordinate rooms and tee times simultaneously.' },
        { icon: '⛳', title: 'Peninsula course circuit', desc: 'Pebble Beach, Spyglass Hill, Spanish Bay, Del Monte — we build multi-course Monterey Peninsula itineraries for groups who want more than one bucket-list round.' },
        { icon: '🦞', title: 'Carmel & Cannery Row dining', desc: 'Post-round, Carmel-by-the-Sea and Cannery Row offer world-class dining. We book group dinners alongside tee times.' },
      ]}
      areas={[
        'Pebble Beach Golf Links', 'Spyglass Hill Golf Course', 'The Links at Spanish Bay',
        'Del Monte Golf Course', 'Bayonet Golf Course',
        'The Lodge at Pebble Beach', 'The Inn at Spanish Bay', 'Casa Palmero',
        'Carmel-by-the-Sea', '17-Mile Drive', 'Monterey Bay Aquarium',
        'Cannery Row', 'Pacific Grove', 'Big Sur', 'Point Lobos State Reserve',
        'Old Fisherman\'s Wharf', 'Asilomar State Beach',
      ]}
      courses={[
        { name: 'Pebble Beach Golf Links', type: 'Public Resort · Pebble Beach, CA', green_fee: '$675/round', highlight: '#1 public course in America. 6× US Open host. Watson\'s chip-in, Tiger\'s 2000 dominance, Rahm\'s 2021 victory. All played on this course. Minimum 2-night resort stay required to book in advance. Non-guests: 24-hour window only.', booking_note: 'Book 12–18 months out · resort stay required' },
        { name: 'Spyglass Hill Golf Course', type: 'Resort · Pebble Beach, CA', green_fee: '$395/round', highlight: 'Ranked among America\'s 100 greatest courses. Begins in the Del Monte Forest with wooded holes, then opens to ocean views. Part of the AT&T Pebble Beach Pro-Am rotation. Resort guests can book up to 3 months in advance.', booking_note: 'Book 3 months in advance (non-guests ok)' },
        { name: 'The Links at Spanish Bay', type: 'Resort · Pebble Beach, CA', green_fee: '$325/round', highlight: 'Links-style Scottish design on the Pacific. Bag pipes play at sunset. Lodge at Spanish Bay is the anchor hotel for this course — often a more accessible price point than The Lodge at Pebble Beach while still unlocking Pebble tee time access.', booking_note: 'Spanish Bay stay unlocks Pebble Beach access' },
        { name: 'Bayonet Golf Course', type: 'Public · Seaside, CA', green_fee: 'Packages from $880/person', highlight: 'Our TripCaddie system shows 3-night/3-round Bayonet packages from $880/person and $1,069/person for groups. Military heritage course, challenging and scenic. Great complement to a Pebble Beach stay.', booking_note: 'From $880/person packages' },
        { name: 'Del Monte Golf Course', type: 'Public · Monterey, CA', green_fee: 'Budget alternative', highlight: 'The oldest operating golf course west of the Mississippi (1897). Budget-friendly round in Monterey for groups who want to warm up before tackling Pebble Beach. $50–$100/round.', booking_note: 'Budget warm-up option' },
      ]}
      faqs={[
        {
          q: 'How far in advance should groups book Pebble Beach tee times?',
          a: 'Groups should start planning their Pebble Beach trip 12–18 months in advance. Lodge at Pebble Beach and Inn at Spanish Bay guests can book tee times up to 18 months ahead. Casa Palmero guests get 12 months advance access. Non-guests can only book within 24 hours — making it impossible to secure group tee times without a resort stay. Group Golf Tours manages resort reservations and tee times together in one coordinated booking process.',
        },
        {
          q: 'What does it cost to play Pebble Beach Golf Links?',
          a: 'Pebble Beach Golf Links costs $675 per player for resort guests. Non-guests pay the same rate but must call within 24 hours. A minimum 2-night stay is required at The Lodge, The Inn at Spanish Bay, or Casa Palmero to book in advance. Resort room rates range from approximately $1,027 to $8,500+ per night depending on season and room type.',
        },
        {
          q: 'Can a golf group book Pebble Beach without staying at the resort?',
          a: 'Technically yes, but only by calling within 24 hours of the desired tee time — and there is essentially no chance of securing multiple consecutive foursomes for a group on this basis. The only practical way to guarantee your group plays together at Pebble Beach is to book resort accommodations, which unlocks advance tee time booking. Group Golf Tours handles this process and has preferred access at Pebble Beach Resorts.',
        },
        {
          q: 'What other golf courses are near Pebble Beach?',
          a: 'The Monterey Peninsula offers Spyglass Hill ($395/round), The Links at Spanish Bay ($325/round), Del Monte Golf Course (the oldest course in the West), and Bayonet Golf Course. Multi-course packages for groups typically combine Pebble Beach with 1–2 additional Peninsula courses over a 3–5 night stay. We build these itineraries regularly.',
        },
      ]}
      prevDest={{ name: 'Las Vegas & Southern Nevada', href: '/portfolio-item/las-vegas-and-southern-nevada/' }}
      nextDest={{ name: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/' }}
    />
  )
}
