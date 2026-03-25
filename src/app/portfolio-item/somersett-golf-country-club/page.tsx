import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Somersett Golf & Country Club | Private Reno Golf Access | Group Golf Tours',
  description: 'Somersett Golf & Country Club — Golfweek Top Private Residential Course. 5,200 ft elevation. 62 bunkers, 7 lakes, Peavine Mountain backdrop. Private access for groups through Group Golf Tours.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/somersett-golf-country-club/' },
  openGraph: {
    title: 'Somersett Golf & Country Club — Reno\'s Private Gem',
    description: 'Golfweek Top Private Residential Course. Most groups never get on this course. We get you access. From $540/person with Reno casino hotel stay.',
    url: 'https://www.groupgolftours.com/portfolio-item/somersett-golf-country-club/',
  },
}

export default function SomersettGolfCountryClub() {
  return (
    <DestinationPage
      region="somersett"
      name="Somersett Golf & Country Club"
      tagline="Northwest Reno · The Private Course Most Golfers Never Play"
      scarcityBar="Somersett is a private club — access requires coordination through our network. Group windows are limited. Inquire early for summer slots."
      heroImg="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=90"
      heroHeadline={"Reno's finest<br/><em style=\"color:#B87333\">private course.</em><br/>We get you on."}
      heroSub="Golfweek-ranked Top Private Residential Course. 5,200 ft elevation in the Sierra Nevada foothills. 62 white sand bunkers, 7 lakes, Peavine Mountain views, bluegrass fairways. Most golfers who visit Reno never play here. Our network gets your group access."
      stat1={{ n: 'From $540', label: 'Per Person · 2-Night/2-Round Package' }}
      stat2={{ n: '5,200 ft', label: 'Elevation · Extra Distance' }}
      stat3={{ n: 'Private', label: 'Golfweek Top Residential' }}
      openingCopy="Somersett Golf and Country Club sits in the foothills of the Sierra Nevada in Northwest Reno, backed against Peavine Mountain with views across the valley floor toward the eastern Sierra. At approximately 5,200 feet elevation, the thin air adds 6–10% distance to every shot. The course features 62 white sand bunkers, seven lakes, and significant elevation changes across bluegrass fairways. It has been ranked among Golfweek's top private residential courses and voted Best of Reno by the Reno Gazette-Journal. From four tee options: Sierra Tees (7,252 yards), Truckee Tees (6,393 yards), Peavine Tees (5,912 yards), and Rose Tees (5,216 yards) — there's a challenge level for every player in your group. Access is by arrangement only, through our established network."
      tripCaptainHook="Somersett is a private country club. Members don't just hand out access, and there's no tee time booking website. The way groups play here is through long-standing relationships with the club — which we have. Our 2-night/2-round Reno packages that include Somersett start at $540/person, pairing the private course with a Reno casino hotel stay. Your group gets to play the course most Reno visitors never see. That's the kind of thing Trip Captains get remembered for."
      highlights={[
        { icon: '⛰️', title: 'Peavine Mountain backdrop', desc: '5,200 ft elevation with dramatic Sierra Nevada views. The ball carries farther than at sea level — groups consistently report unexpected extra distance.' },
        { icon: '🔒', title: 'Private club access', desc: 'Most groups visiting Reno never get on this course. Our network relationships make it possible. Access is by arrangement through Group Golf Tours.' },
        { icon: '🏌️', title: '62 bunkers · 7 lakes', desc: 'The course demands accuracy. Bluegrass fairways, white sand bunkers, and water on 7 holes create a strategic challenge that rewards skilled players.' },
        { icon: '🎰', title: '15 min from casino strip', desc: 'Somersett is 15 minutes from Downtown Reno and 21 minutes from the Peppermill and Atlantis casinos. Groups combine private golf with casino resort lodging.' },
      ]}
      areas={[
        'Somersett Golf & Country Club', '2019 Championship Trail, Reno NV 89523',
        'Peavine Mountain', 'Northwest Reno',
        'Downtown Reno (15 min)', 'Peppermill & Atlantis Casinos (21 min)',
        'Truckee, CA (35 min)', 'Carson City, NV (43 min)',
        'Lake Tahoe (45 min)', 'Graeagle, CA (71 min)',
        'Other Reno Courses: Wolf Run, Lakeridge, Red Hawk, ArrowCreek',
      ]}
      courses={[
        { name: 'Somersett Golf and Country Club', type: 'Private Country Club · NW Reno', green_fee: 'From $540/person', highlight: 'Golfweek Top Private Residential Course. Voted Best of Reno 2021 by Reno Gazette-Journal. 62 white sand bunkers, 7 lakes, 4 tee options (5,216–7,252 yards). Bluegrass fairways, Peavine Mountain backdrop. Access through Group Golf Tours network only. 2-night/2-round Reno packages from $540/person.', booking_note: 'Private — access by arrangement only' },
        { name: 'Wolf Run Golf Club', type: 'Public · Reno', green_fee: 'From $395/person', highlight: 'Often paired with Somersett for multi-round Reno packages. 2-night/3-round packages from $395/person. Consistently top-rated public course in Reno.', booking_note: 'Paired with Somersett packages' },
        { name: 'ArrowCreek Golf Club', type: 'Semi-Private · Reno', green_fee: 'From $459/person', highlight: 'Another Reno premium option for groups who want variety. Legend Course and Challenge Course. Can be combined with Somersett access for multi-day Reno golf experiences.', booking_note: 'From $459/person packages' },
        { name: 'Red Hawk Golf Resort', type: 'Resort · Reno', green_fee: 'From $499/person', highlight: 'Full resort property with Hills Course and Lakes Course. 4-night/3-round packages from $499/person. Good option for groups who want resort amenities alongside private course access.', booking_note: 'From $499/person packages' },
      ]}
      faqs={[
        {
          q: 'How do you get access to Somersett Golf and Country Club in Reno?',
          a: 'Somersett Golf and Country Club is a private country club with no public tee time booking. Access requires a member guest or pre-arranged relationship with the club. Group Golf Tours has established network access at Somersett and coordinates group rounds as part of Reno golf packages. Our 2-night/2-round packages including Somersett start at $540/person when combined with Reno casino hotel accommodations.',
        },
        {
          q: 'What makes Somersett Golf Club special compared to other Reno courses?',
          a: 'Somersett sits at approximately 5,200 feet elevation against the Sierra Nevada foothills, offering dramatic mountain views and extra ball carry due to thin air. The course features 62 white sand bunkers, 7 lakes, and significant elevation changes across bluegrass fairways. Golfweek has ranked it among the top private residential courses nationally, and it was voted Best of Reno by the Reno Gazette-Journal. The private club atmosphere means uncrowded rounds with excellent pace of play.',
        },
        {
          q: 'How far is Somersett Golf Club from Reno casino hotels?',
          a: 'Somersett Golf and Country Club is 15 minutes from Downtown Reno, 21 minutes from the Peppermill and Atlantis casinos, 35 minutes from Truckee, CA, and 45 minutes from Lake Tahoe. Most Reno golf groups stay at casino resort hotels (Peppermill, Atlantis, Eldorado, Silver Legacy) and we arrange group transportation to Somersett.',
        },
        {
          q: 'What is the yardage at Somersett Golf Club?',
          a: 'Somersett offers four tee options: Sierra Tees at 7,252 yards, Truckee Tees at 6,393 yards, Peavine Tees at 5,912 yards, and Rose Tees at 5,216 yards. The course rating from the Sierra Tees is challenging for scratch players. The multiple tee options make it suitable for groups with a mix of handicap levels.',
        },
      ]}
      prevDest={{ name: 'Southern California', href: '/portfolio-item/monterey-and-pebble-beach-2/' }}
      nextDest={{ name: 'Lake Tahoe & Northern Nevada', href: '/portfolio-item/lake-tahoe-and-northern-nevada/' }}
    />
  )
}
