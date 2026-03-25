import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Southern California Golf Packages | Torrey Pines From $2,950/Person | Group Golf Tours',
  description: 'Southern California group golf packages. Torrey Pines South ($277–$345/round non-resident), PGA West, Pelican Hill. TripCaddie shows 5-night/4-round packages from $2,950/person.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach-2/' },
  openGraph: {
    title: 'Southern California Golf Packages — Torrey Pines, PGA West, Pelican Hill',
    description: 'Year-round championship golf in SoCal. Torrey Pines South: $277–$345/round for non-residents. 2× US Open host. Real packages from $2,950/person.',
    url: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach-2/',
  },
}

export default function SouthernCalifornia() {
  return (
    <DestinationPage
      region="socal"
      name="Southern California"
      tagline="Year-Round Sunshine · Championship Golf Every Month"
      scarcityBar="Torrey Pines non-resident tee times are limited daily — weekend slots fill weeks in advance. Prime November–April season books fastest."
      heroImg="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1800&q=90"
      heroHeadline={"365 days of<br/><em style=\"color:#C4622D\">championship golf.</em><br/>No off-season."}
      heroSub="Torrey Pines South: $277–$345/round for non-residents. 2× US Open host. PGA West — where the PGA Tour stops. Pelican Hill overlooking the Pacific. Real 5-night/4-round Southern California packages from $2,950/person in our trip system."
      stat1={{ n: '$2,950', label: 'Per Person · 5-Night/4-Round SoCal Package' }}
      stat2={{ n: '$277–$345', label: 'Torrey Pines South (Non-Resident)' }}
      stat3={{ n: '365', label: 'Days Golf Season Per Year' }}
      openingCopy="Southern California stretches 200 miles of coastline from Los Angeles to San Diego, blessed with a climate that makes championship golf possible every single day of the year. Torrey Pines Golf Course sits on coastal bluffs above the Pacific in La Jolla — a City of San Diego municipal course that has nonetheless hosted two US Opens (2008 and 2021) and the annual Farmers Insurance Open on the PGA Tour. Non-resident fees run $277–$345 for the South Course. In the desert near Palm Springs, PGA West hosts multiple Tour events and offers some of the most manicured resort golf in the country. On the Orange County coast, Pelican Hill Golf Club offers ocean views on every hole. Our TripCaddie system documents 5-night/4-round Southern California packages at $2,950/person — the benchmark for what a real group trip here costs."
      tripCaptainHook="Getting non-resident tee times at Torrey Pines as a group is genuinely difficult. The City of San Diego limits non-resident availability, prime weekend slots are restricted, and the advance booking window with the city's system is complex. We navigate this, plus we coordinate hotel blocks in La Jolla or the Gaslamp Quarter, transportation, and optional rounds at additional courses. Our SoCal packages build the full experience — from the coastal south to the desert east."
      highlights={[
        { icon: '🌊', title: 'Coastal clifftop golf', desc: 'Torrey Pines and Pelican Hill sit on Pacific cliffs. Ocean views on nearly every hole, with afternoon ocean breezes affecting ball flight.' },
        { icon: '🏜️', title: 'Desert resort golf', desc: 'PGA West, La Quinta Resort, and Coachella Valley courses offer a completely different desert golf experience, 2 hours east of San Diego.' },
        { icon: '🎬', title: 'LA to San Diego range', desc: 'From Riviera Country Club (home of the Genesis Invitational) in LA to Torrey Pines in San Diego — we build multi-stop SoCal golf tours.' },
        { icon: '☀️', title: 'No blackout dates', desc: 'Unlike every other region in our portfolio, Southern California has zero bad weather months. Winter tee times are prime season.' },
      ]}
      areas={[
        'Torrey Pines Golf Course (North & South)', 'Pelican Hill Golf Club',
        'PGA West', 'La Quinta Resort & Club', 'Mission Hills Country Club',
        'Riviera Country Club', 'Sherwood Country Club',
        'San Diego', 'La Jolla', 'Newport Beach', 'Palm Springs',
        'Balboa Park', 'Santa Monica Pier', 'Disneyland Resort',
        'Joshua Tree National Park', 'Catalina Island', 'San Diego Zoo',
        'Coachella Valley', 'Rancho Mirage', 'Indian Wells',
      ]}
      courses={[
        { name: 'Torrey Pines Golf Course — South', type: 'Municipal · La Jolla, CA', green_fee: '$277–$345/round (non-resident)', highlight: '7,765 yards. 2× US Open host (2008 Tiger Woods — broken leg win, 2021 Jon Rahm). Annual Farmers Insurance Open PGA Tour venue. Non-resident fees: $277 weekday, $345 weekend. City of San Diego limits non-resident daily slots.', booking_note: 'Non-resident slots limited · advance booking required' },
        { name: 'Torrey Pines Golf Course — North', type: 'Municipal · La Jolla, CA', green_fee: '$194–$241/round (non-resident)', highlight: 'Less intense than the South Course but still 7,258 yards. PGA Tour venue for Farmers Insurance Open. Non-resident fees $194 weekday, $241 weekend. More accessible tee times than the South Course.', booking_note: 'Better availability than South Course' },
        { name: 'Pelican Hill Golf Club', type: 'Resort · Newport Coast, CA', green_fee: 'Resort pricing', highlight: 'Two Tom Fazio-designed courses overlooking the Pacific Ocean. One of the most visually dramatic settings in American golf. Ocean North and Ocean South courses. Newport Beach luxury resort hotels adjacent.', booking_note: 'Resort packages available' },
        { name: 'PGA West', type: 'Resort · La Quinta, CA', green_fee: 'Package pricing', highlight: 'Multiple championship courses including Stadium Course (host of the American Express PGA Tour event). Pete Dye design. Attached to La Quinta Resort & Club, one of the finest golf resorts in America. Our Mesquite-adjacent packages document stays from $1,275/person.', booking_note: 'La Quinta Resort packages' },
        { name: 'Marriott\'s Shadow Ridge Golf Club', type: 'Resort · Palm Desert, CA', green_fee: 'From $1,505/person', highlight: 'Our TripCaddie system documents a 3-night/4-round Palm Springs area package at $1,505/person. Marriott Vacation Club property with resort amenities in the desert.', booking_note: 'From $1,505/person — 3N/4R package' },
      ]}
      faqs={[
        {
          q: 'How much does it cost to play Torrey Pines South Course?',
          a: 'Torrey Pines South Course costs $277 on weekdays and $345 on weekends for non-residents in 2025. San Diego city residents pay $69–$87. The South Course is a 7,765-yard US Open venue that demands a significant skill level. The North Course runs $194–$241 for non-residents and offers a more accessible experience on the same clifftop property.',
        },
        {
          q: 'What are the best golf courses in Southern California for groups?',
          a: 'For groups, Torrey Pines (North and South) in La Jolla is the top public-access option — a 2× US Open venue with ocean views at $194–$345/person. Pelican Hill in Newport Beach offers resort luxury. PGA West in La Quinta suits groups that want desert golf with attached resort amenities. For a complete SoCal tour, we build 5–7 day itineraries combining coastal and desert courses.',
        },
        {
          q: 'How much does a Southern California golf trip cost per person?',
          a: 'Our TripCaddie system documents a 5-night/4-round Southern California package at $2,950/person, which included Torrey Pines North Course rounds. Palm Springs area 3-night/4-round packages run from $1,505/person. Budget varies significantly based on hotel choice — La Jolla coastal hotels are premium; Palm Springs desert resorts offer more value per night.',
        },
        {
          q: 'Is golf in Southern California good year-round?',
          a: 'Yes — Southern California is unique among our five regions in having no true off-season. Temperatures are mild year-round along the coast. The desert (Palm Springs, La Quinta) has peak season from November through April when temperatures are ideal. Summer in the desert is extreme heat — groups visiting July–September should focus on coastal courses like Torrey Pines.',
        },
      ]}
      prevDest={{ name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' }}
      nextDest={{ name: 'Somersett Golf & CC', href: '/portfolio-item/somersett-golf-country-club/' }}
    />
  )
}
