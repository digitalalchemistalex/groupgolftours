import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.groupgolftours.com'
  const pages = ['','/about-us/','/who-we-are/','/what-we-do/','/golf-buddy-trips/','/corporate-and-incentive-golf-travel/','/destinations/','/how-we-do-it/','/where-we-do-it/','/tour-inquiry/','/customer-testimonials/','/hotel-reservations/','/golf-courses/','/transportation/','/dining-events-and-arrangements/','/travel-insurance/','/site-seeing-and-non-golf-activities/','/tour-packages/','/online-registration-system/','/news/','/portfolio-item/lake-tahoe-and-northern-nevada/','/portfolio-item/las-vegas-and-southern-nevada/','/portfolio-item/monterey-and-pebble-beach/','/portfolio-item/monterey-and-pebble-beach-2/','/portfolio-item/somersett-golf-country-club/','/disclaimer/','/privacy-policy/','/cancellation-policy/','/terms-and-conditions/']
  return pages.map(p => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: p === '' ? 'weekly' : 'monthly', priority: p === '' ? 1 : p.includes('portfolio-item') ? 0.8 : 0.6 }))
}
