import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 3600;

interface TripRecap {
  slug: string;
  raw_data: {
    trip_name?: string;
    synopsis?: string;
    hero_image_url?: string;
    published_at?: string;
  };
}

async function getTrips(): Promise<TripRecap[]> {
  const supabase = createClient(
    process.env.MSG_SUPABASE_URL!,
    process.env.MSG_SUPABASE_SERVICE_KEY!
  );
  const { data, error } = await supabase
    .from("trip_recaps")
    .select("slug, raw_data")
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data as TripRecap[]) || [];
}

export default async function TripsPage() {
  const trips = await getTrips();
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Golf Trip Recaps</h1>
        <p className="text-gray-600 mb-8">
          Real itineraries and highlights from {SITE.name} golf trips.
        </p>
        {trips.length === 0 ? (
          <p className="text-gray-500">No trip recaps yet. Check back soon!</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <Link
                key={trip.slug}
                href={`/trips/${trip.slug}/`}
                className="block rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              >
                {trip.raw_data.hero_image_url && (
                  <img
                    src={trip.raw_data.hero_image_url}
                    alt={trip.raw_data.trip_name || trip.slug}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-1">
                    {trip.raw_data.trip_name || trip.slug}
                  </h2>
                  {trip.raw_data.synopsis && (
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {trip.raw_data.synopsis}
                    </p>
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
