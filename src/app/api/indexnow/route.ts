import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'c9b3d7e2f5a1c8b4d6e9f2a5c3b8d1e4';
const HOST = 'www.groupgolftours.com';

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/about-us/`,
  `https://${HOST}/who-we-are/`,
  `https://${HOST}/what-we-do/`,
  `https://${HOST}/golf-buddy-trips/`,
  `https://${HOST}/corporate-and-incentive-golf-travel/`,
  `https://${HOST}/destinations/`,
  `https://${HOST}/how-we-do-it/`,
  `https://${HOST}/where-we-do-it/`,
  `https://${HOST}/tour-inquiry/`,
  `https://${HOST}/customer-testimonials/`,
  `https://${HOST}/hotel-reservations/`,
  `https://${HOST}/golf-courses/`,
  `https://${HOST}/transportation/`,
  `https://${HOST}/dining-events-and-arrangements/`,
  `https://${HOST}/travel-insurance/`,
  `https://${HOST}/site-seeing-and-non-golf-activities/`,
  `https://${HOST}/tour-packages/`,
  `https://${HOST}/online-registration-system/`,
  `https://${HOST}/news/`,
  `https://${HOST}/portfolio-item/lake-tahoe-and-northern-nevada/`,
  `https://${HOST}/portfolio-item/las-vegas-and-southern-nevada/`,
  `https://${HOST}/portfolio-item/monterey-and-pebble-beach/`,
  `https://${HOST}/portfolio-item/monterey-and-pebble-beach-2/`,
  `https://${HOST}/portfolio-item/somersett-golf-country-club/`,
  `https://${HOST}/disclaimer/`,
  `https://${HOST}/privacy-policy/`,
  `https://${HOST}/cancellation-policy/`,
  `https://${HOST}/terms-and-conditions/`,
];

export async function GET() {
  return NextResponse.json({ key: INDEXNOW_KEY, urls: URLS.length });
}

export async function POST(request: Request) {
  const auth = request.headers.get('x-indexnow-auth');
  if (auth !== INDEXNOW_KEY) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: URLS,
    }),
  });

  return NextResponse.json({ submitted: URLS.length, status: res.status });
}
