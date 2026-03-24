import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Southern California Golf Tours | Group Golf Tours',
  description: 'Play world-class golf across Southern California with Group Golf Tours. Torrey Pines, Pelican Hill, PGA West, La Quinta and more — year-round sunshine guaranteed.',
  alternates: { canonical: 'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach-2/' },
}

export default function SoCal() {
  return <DestinationPage
    name="Southern California"
    tag="Year-Round Sun"
    heroImg="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80"
    heroCopy="Experience the vibrant charm of Southern California, where world-class golf courses meet stunning coastal landscapes and year-round sunshine. From the glamour of Los Angeles to the serene beaches of San Diego, this region offers something for every traveler. Play at legendary courses, explore cultural landmarks, or simply relax by the ocean — Southern California is the ultimate destination for unforgettable adventures on and off the greens."
    areas={['Torrey Pines Golf Course','Riviera Country Club','Pelican Hill Golf Club','La Quinta Resort & Club','PGA West','Santa Monica Pier','Disneyland Resort','Balboa Park, San Diego','The Getty Center','Palm Springs','Joshua Tree National Park','Newport Beach','Catalina Island','San Diego Zoo']}
    prevDest={{ name: 'Monterey & Pebble Beach', href: '/portfolio-item/monterey-and-pebble-beach/' }}
  />
}
