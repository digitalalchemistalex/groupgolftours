import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const revalidate = 3600;

interface TripRecap {
  slug: string;
  raw_data: {
    trip_name?: string;
    synopsis?: string;
    hero_image_url?: string;
  };
}

async function getTrips(): Promise<TripRecap[]> {
  const url = process.env.MSG_SUPABASE_URL!;
  const key = process.env.MSG_SUPABASE_SERVICE_KEY!;
  const res = await fetch(
    `${url}/rest/v1/trip_recaps?select=slug,raw_data&published=eq.true&order=created_at.desc`,
    { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function TripsPage() {
  const trips = await getTrips();
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Golf Trip Recaps</h1>
        <p className="text-gray-600 mb-8">Real itineraries from Group Golf Tours trips.</p>
        {trips.length === 0 ? (
          <p className="text-gray-500">No trip recaps yet. Check back soon!</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <Link key={trip.slug} href={`/trips/${trip.slug}/`}
                className="block rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                {trip.raw_data.hero_image_url && (
                  <img src={trip.raw_data.hero_image_url} alt={trip.raw_data.trip_name || trip.slug}
                    className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-1">{trip.raw_data.trip_name || trip.slug}</h2>
                  {trip.raw_data.synopsis && (
                    <p className="text-gray-600 text-sm line-clamp-2">{trip.raw_data.synopsis}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
