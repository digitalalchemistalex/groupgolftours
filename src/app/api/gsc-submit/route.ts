import { NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';

const CRON_SECRET = process.env.CRON_SECRET;
const SA_KEY_JSON = process.env.MSG_GSC_SA_KEY;

const URLS = [
  'https://www.groupgolftours.com/',
  'https://www.groupgolftours.com/about-us/',
  'https://www.groupgolftours.com/who-we-are/',
  'https://www.groupgolftours.com/what-we-do/',
  'https://www.groupgolftours.com/golf-buddy-trips/',
  'https://www.groupgolftours.com/corporate-and-incentive-golf-travel/',
  'https://www.groupgolftours.com/destinations/',
  'https://www.groupgolftours.com/how-we-do-it/',
  'https://www.groupgolftours.com/where-we-do-it/',
  'https://www.groupgolftours.com/tour-inquiry/',
  'https://www.groupgolftours.com/customer-testimonials/',
  'https://www.groupgolftours.com/hotel-reservations/',
  'https://www.groupgolftours.com/golf-courses/',
  'https://www.groupgolftours.com/transportation/',
  'https://www.groupgolftours.com/dining-events-and-arrangements/',
  'https://www.groupgolftours.com/travel-insurance/',
  'https://www.groupgolftours.com/site-seeing-and-non-golf-activities/',
  'https://www.groupgolftours.com/tour-packages/',
  'https://www.groupgolftours.com/online-registration-system/',
  'https://www.groupgolftours.com/news/',
  'https://www.groupgolftours.com/portfolio-item/lake-tahoe-and-northern-nevada/',
  'https://www.groupgolftours.com/portfolio-item/las-vegas-and-southern-nevada/',
  'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach/',
  'https://www.groupgolftours.com/portfolio-item/monterey-and-pebble-beach-2/',
  'https://www.groupgolftours.com/portfolio-item/somersett-golf-country-club/',
  'https://www.groupgolftours.com/disclaimer/',
  'https://www.groupgolftours.com/privacy-policy/',
  'https://www.groupgolftours.com/cancellation-policy/',
  'https://www.groupgolftours.com/terms-and-conditions/',
];

export async function POST(request: Request) {
  const auth = request.headers.get('x-cron-auth');
  if (auth !== CRON_SECRET) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  if (!SA_KEY_JSON) {
    return NextResponse.json({ error: 'MSG_GSC_SA_KEY not set' }, { status: 500 });
  }

  const keyFile = JSON.parse(SA_KEY_JSON);
  const googleAuth = new GoogleAuth({
    credentials: keyFile,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });
  const client = await googleAuth.getClient();
  const token = await client.getAccessToken();
  const accessToken = token.token;

  const results: { url: string; status: number }[] = [];
  for (const url of URLS) {
    const res = await fetch(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ url, type: 'URL_UPDATED' }),
      }
    );
    results.push({ url, status: res.status });
  }

  const ok = results.filter((r) => r.status === 200).length;
  const failed = results.filter((r) => r.status !== 200);
  return NextResponse.json({ submitted: ok, failed, total: URLS.length });
}
