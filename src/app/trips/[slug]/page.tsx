import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const revalidate = 3600;

interface ItineraryDay {
  day: number;
  title?: string;
  description?: string;
  courses?: string[];
}

interface TripRecapData {
  trip_name?: string;
  synopsis?: string;
  hero_image_url?: string;
  highlights?: string[];
  itinerary?: ItineraryDay[];
  price_per_person?: number;
}

interface TripRecap {
  slug: string;
  raw_data: TripRecapData;
  published: boolean;
}

async function getTrip(slug: string): Promise<TripRecap | null> {
  const supabase = createClient(
    process.env.MSG_SUPABASE_URL!,
    process.env.MSG_SUPABASE_SERVICE_KEY!
  );
  const { data, error } = await supabase
    .from("trip_recaps")
    .select("slug, raw_data, published")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error || !data) return null;
  return data as TripRecap;
}

export async function generateStaticParams() {
  const supabase = createClient(
    process.env.MSG_SUPABASE_URL!,
    process.env.MSG_SUPABASE_SERVICE_KEY!
  );
  const { data } = await supabase.from("trip_recaps").select("slug").eq("published", true);
  return (data || []).map((row: { slug: string }) => ({ slug: row.slug }));
}

export default async function TripRecapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = await getTrip(slug);
  if (!trip) notFound();

  const d = trip.raw_data;
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {d.hero_image_url && (
          <img src={d.hero_image_url} alt={d.trip_name || slug}
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-8" />
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{d.trip_name || slug}</h1>
        {d.synopsis && <p className="text-lg text-gray-700 mb-6">{d.synopsis}</p>}
        {d.price_per_person && d.price_per_person > 0 && (
          <p className="text-xl font-semibold text-green-700 mb-6">
            From \${d.price_per_person.toLocaleString()} per person
          </p>
        )}
        {d.highlights && d.highlights.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Trip Highlights</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {d.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </section>
        )}
        {d.itinerary && d.itinerary.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Itinerary</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-3 py-2 text-left">Day</th>
                    <th className="border px-3 py-2 text-left">Title</th>
                    <th className="border px-3 py-2 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {d.itinerary.map((day) => (
                    <tr key={day.day} className="even:bg-gray-50">
                      <td className="border px-3 py-2 font-medium">Day {day.day}</td>
                      <td className="border px-3 py-2">{day.title || ""}</td>
                      <td className="border px-3 py-2">
                        {day.description || ""}
                        {day.courses && day.courses.length > 0 && (
                          <span className="block text-gray-500 mt-1">Courses: {day.courses.join(", ")}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
          <p className="text-lg font-semibold mb-2">Interested in a similar trip?</p>
          <a href="/tour-inquiry/"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
            Get a Custom Quote
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
