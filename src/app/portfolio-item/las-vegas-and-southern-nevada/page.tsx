import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Las Vegas Golf Packages | Shadow Creek $1,250/Round | Group Golf Tours',
  description: 'Group golf packages in Las Vegas. Shadow Creek ($1,250/round, includes private limo + caddie), TPC Las Vegas, Cascata. From $1,275/person stay-and-play. 20+ years booking Vegas golf.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/las-vegas-and-southern-nevada/' },
  openGraph: {
    title: 'Las Vegas Golf Packages — Shadow Creek & The Best of the Desert',
    description: 'Shadow Creek: $1,250/round. MGM guests only, Mon–Thu. Limo + caddie included. We coordinate MGM hotel stays and tee times together for groups.',
    url: 'https://www.groupgolftours.com/portfolio-item/las-vegas-and-southern-nevada/',
  },
}

export default function LasVegasSouthernNevada() {
  return (
    <DestinationPage
      region="vegas"
      name="Las Vegas & Southern Nevada"
      tagline="Desert Southwest · Where Golf Meets Spectacle"
      scarcityBar="Shadow Creek tee times: Mon–Thu MGM guests only. Fri–Sat invitation only. Vegas peak golf season (Oct–May) — summer slots go first."
      heroImg="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1800&q=90"
      heroHeadline={"The most expensive<br/><em style=\"color:#D4A843\">tee time</em><br/>in America."}
      heroSub="Shadow Creek: $1,250/round. Tom Fazio masterpiece. Private limo from your MGM hotel. Personal caddie. The course Tiger, Phil, Rory, and Scottie played on national TV. We get your group access — and build the full Vegas golf experience around it."
      stat1={{ n: '$1,250', label: 'Per Round · Shadow Creek' }}
      stat2={{ n: 'Limo + Caddie', label: 'Included at Shadow Creek' }}
      stat3={{ n: 'MGM Only', label: 'Mon–Thu Hotel Guest Access' }}
      openingCopy="Las Vegas sits in the Mojave Desert at 2,000 feet elevation, blessed with 300+ days of sunshine and surrounded by world-class golf that most groups never get access to on their own. Shadow Creek is the crown jewel — a Tom Fazio masterpiece built at a reported $60 million cost in 1989, originally Steve Wynn's private club, now accessible only to MGM Resort hotel guests Monday through Thursday. The green fee is $1,250/person and includes a private limousine pickup from your MGM hotel, a personal caddie, and a round on the course where The Match has been played between golf's biggest names. Beyond Shadow Creek, TPC Las Vegas and Cascata provide resort-quality championship golf in the desert landscape. We coordinate the full experience — MGM hotel booking, Shadow Creek tee times, and any additional rounds — in one package."
      tripCaptainHook="Shadow Creek requires you to be staying at an MGM-owned property. That's Bellagio, Aria, MGM Grand, Vdara, Park MGM, Vdara, New York-New York, Luxor, Excalibur, or Mandalay Bay. Mon–Thu only for hotel guests; Fri–Sat reserved for invited guests only. Groups often don't realize they need to coordinate MGM hotel stays AND call Shadow Creek separately — we handle both simultaneously, ensuring your group has the right hotel rooms AND the tee times locked in. We also arrange the pre-round limo logistics for the whole group."
      highlights={[
        { icon: '🚗', title: 'Private limo to Shadow Creek', desc: 'Shadow Creek\'s $1,250 fee includes a private MGM limousine from your hotel to the course. For groups, we coordinate the fleet.' },
        { icon: '🎰', title: 'MGM resort expertise', desc: 'We hold preferred rates and group blocks at Bellagio, Aria, MGM Grand, and Park MGM. Shadow Creek access tied to MGM stay.' },
        { icon: '🏆', title: 'The Match venue', desc: 'Shadow Creek hosted Tiger vs. Phil, and Rory/Scheffler vs. Koepka/DeChambeau. Your group plays the same tees.' },
        { icon: '☀️', title: 'Oct–May prime season', desc: 'Las Vegas golf is best October through May when temperatures are ideal. Summer plays too, but mornings only. We time your trip right.' },
      ]}
      areas={[
        'Shadow Creek Golf Course', 'TPC Las Vegas', 'Cascata Golf Course',
        'Revere Golf Club', 'Rio Secco Golf Club', 'Wolf Creek Golf Club (Mesquite nearby)',
        'Bellagio', 'Aria Resort', 'MGM Grand', 'Park MGM', 'Vdara', 'New York-New York',
        'Las Vegas Strip', 'Fremont Street', 'Red Rock Canyon', 'Valley of Fire',
        'Hoover Dam', 'Lake Mead', 'Mount Charleston', 'Death Valley (nearby)',
      ]}
      courses={[
        { name: 'Shadow Creek Golf Course', type: 'MGM Resort · North Las Vegas', green_fee: '$1,250/round', highlight: 'The most expensive public tee time in the United States. Tom Fazio design built at $60M. Private limo and personal caddie included. Hosted Tiger vs. Phil (The Match), Rory/Scottie vs. Koepka/DeChambeau. Available Mon–Thu for MGM hotel guests only.', booking_note: 'MGM hotel stay required · Mon–Thu only' },
        { name: 'TPC Las Vegas', type: 'Resort · Las Vegas', green_fee: 'Packages from $1,275/person', highlight: 'PGA Tour quality desert design. Mesquite/St. George packages in our system from $1,275/person for 4 nights/4 rounds at Oasis Golf Club and other desert courses. Vegas-area packages anchored by TPC available.', booking_note: 'Group rates available' },
        { name: 'Cascata Golf Course', type: 'Resort · Boulder City', green_fee: 'Package pricing', highlight: 'One of the most dramatic layouts in the Southwest, with a 418-foot waterfall as its centerpiece. We package Cascata alongside Shadow Creek for multi-round Vegas golf experiences.', booking_note: 'Often paired with Shadow Creek packages' },
        { name: 'Wolf Creek Golf Club', type: 'Resort · Mesquite, NV', green_fee: 'Mesquite from $1,275/person', highlight: 'World-ranked desert course in Mesquite, 90 minutes from Vegas. Our Mesquite packages start at $1,275/person (4 nights, 4 rounds at Oasis Canyons) up to $3,420 (5 nights, 6 rounds). Popular add-on to Vegas trips.', booking_note: 'From $1,275/person Mesquite packages' },
      ]}
      faqs={[
        {
          q: 'How do you get access to Shadow Creek Golf Course in Las Vegas?',
          a: 'Shadow Creek requires a stay at an MGM Resorts-owned property in Las Vegas. Eligible hotels include Bellagio, Aria, MGM Grand, Park MGM, Vdara, New York-New York, Luxor, Excalibur, and Mandalay Bay. Tee times are available Monday through Thursday for hotel guests at $1,250/person. Friday and Saturday are reserved for invited guests only. The fee includes a private limousine from your hotel and a personal caddie.',
        },
        {
          q: 'How much does Shadow Creek cost in 2025?',
          a: 'Shadow Creek\'s green fee is $1,250 per player in 2025. This is the most expensive public tee time in the United States. The rate includes round-trip private limousine transportation from your MGM hotel, a personal caddie, and use of all Shadow Creek amenities. Caddie gratuity of $75–$100 per bag is recommended and not included in the green fee.',
        },
        {
          q: 'What are the best group golf packages in Las Vegas?',
          a: 'For groups visiting Las Vegas, we build packages combining MGM resort hotel stays with Shadow Creek and additional rounds at TPC Las Vegas or Cascata. For desert-focused groups, Mesquite packages (90 minutes from Vegas) start at $1,275/person for 4 nights and 4 rounds. Full Las Vegas packages including Shadow Creek typically run $2,000–$3,500/person depending on hotel choice and number of rounds.',
        },
        {
          q: 'What Las Vegas golf courses are best for groups?',
          a: 'Shadow Creek is the bucket-list course every serious golfer wants to play. TPC Las Vegas offers PGA Tour-caliber desert golf. Cascata features one of the most dramatic settings in American golf. Rio Secco and Revere Golf Club offer additional quality at more accessible price points. We build multi-course Vegas itineraries tailored to your group\'s budget and ambition.',
        },
      ]}
      prevDest={{ name: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/' }}
      nextDest={{ name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' }}
    />
  )
}
