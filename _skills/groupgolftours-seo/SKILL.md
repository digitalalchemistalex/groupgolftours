---
name: groupgolftours-seo
description: >
  SEO, AEO, and schema markup strategy for GroupGolfTours.com.
  Read before creating or modifying ANY page, adding metadata, writing copy,
  or working on search visibility for this site.
  Trigger on: SEO, meta, schema, title, description, canonical, sitemap,
  structured data, AEO, AI search, rich results, page copy, any new page creation,
  any content update on groupgolftours.com.
---

# GroupGolfTours.com — SEO & AEO Skill

**Read `groupgolftours-site` first for content source of truth.**

---

## Core SEO Rules

### URL Slugs — NEVER CHANGE
All URLs must match the original WordPress site EXACTLY. Google has indexed these.
```
/about-us/
/who-we-are/
/what-we-do/
/golf-buddy-trips/
/corporate-and-incentive-golf-travel/
/where-we-do-it/
/how-we-do-it/
/customer-testimonials/
/destinations/
/portfolio-item/lake-tahoe-and-northern-nevada/
/portfolio-item/las-vegas-and-southern-nevada/
/portfolio-item/monterey-and-pebble-beach/
/portfolio-item/monterey-and-pebble-beach-2/       ← SoCal — keep this confusing slug
/portfolio-item/somersett-golf-country-club/
/hotel-reservations/
/golf-courses/
/travel-insurance/
/transportation/
/tour-packages/
/dining-events-and-arrangements/
/site-seeing-and-non-golf-activities/
/online-registration-system/
/tour-inquiry/
/news/
/disclaimer/
/privacy-policy/
/cancellation-policy/
/terms-and-conditions/
```

### Meta Titles — Pattern
```
[Specific Topic] | Group Golf Tours — [Destination or Service]
```
Examples:
- `Pebble Beach Golf Packages | Group Golf Tours — Monterey & Coastal California`
- `Group Golf Travel Planning | Group Golf Tours — Est. 2005`
- `Golf Buddy Trips | Group Golf Tours — Tee Times, Hotels & Transport`

Max 60 characters. Include primary keyword in first 30 chars.

### Meta Descriptions — Pattern
```
[Primary benefit]. [Proof point — 10,000+ outings / 20 years / licensed]. [CTA].
```
Examples:
- `Play Pebble Beach with your group. 20 years of access at courses that don't take cold calls. Free custom quote in 24 hours.`
- `Group golf trips fully planned — tee times, hotels, transport, dining. 10,000+ outings since 2005. Licensed in NV + FL.`

Max 155 characters. Include phone 888-584-8232 on key conversion pages.

---

## Schema Markup — Per Page Type

### Homepage
```typescript
export function generateHomepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://groupgolftours.com/#organization",
        "name": "Group Golf Tours",
        "alternateName": ["Vacations on the Green", "Prestige Golf"],
        "url": "https://groupgolftours.com",
        "telephone": "+18885848232",
        "email": "customerservice@zoomaway.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3010 LBJ Freeway, Suite 1550",
          "addressLocality": "Dallas",
          "addressRegion": "TX",
          "postalCode": "75234",
          "addressCountry": "US"
        },
        "foundingDate": "2005",
        "description": "Group golf travel specialists since 2005. Tee times, hotels, transport, dining and insurance for groups of 4–200.",
        "areaServed": ["United States", "Ireland", "Scotland", "Portugal", "Spain", "Mexico", "Dominican Republic"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Golf Tour Packages"
        },
        "sameAs": ["https://www.facebook.com/golfthehighsierra/"]
      },
      {
        "@type": "WebSite",
        "@id": "https://groupgolftours.com/#website",
        "url": "https://groupgolftours.com",
        "name": "Group Golf Tours",
        "publisher": { "@id": "https://groupgolftours.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://groupgolftours.com/destinations?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }
}
```

### Destination Pages
```typescript
export function generateDestinationSchema(destination: {
  name: string
  url: string
  description: string
  areas: string[]
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristDestination", "TouristAttraction"],
        "@id": `https://groupgolftours.com${destination.url}#destination`,
        "name": destination.name,
        "description": destination.description,
        "url": `https://groupgolftours.com${destination.url}`,
        "containsPlace": destination.areas.map(area => ({
          "@type": "Place",
          "name": area
        })),
        "touristType": ["Golf Traveler", "Group Traveler", "Sports Tourism"],
        "offers": {
          "@type": "Offer",
          "seller": { "@id": "https://groupgolftours.com/#organization" },
          "description": `Group golf packages to ${destination.name}`,
          "url": `https://groupgolftours.com${destination.url}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://groupgolftours.com" },
          { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://groupgolftours.com/destinations/" },
          { "@type": "ListItem", "position": 3, "name": destination.name }
        ]
      }
    ]
  }
}
```

### Service Pages
```typescript
export function generateServiceSchema(service: {
  name: string
  url: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://groupgolftours.com${service.url}#service`,
        "name": service.name,
        "description": service.description,
        "provider": { "@id": "https://groupgolftours.com/#organization" },
        "serviceType": "Golf Travel Service",
        "areaServed": "United States",
        "url": `https://groupgolftours.com${service.url}`
      }
    ]
  }
}
```

### Tour Inquiry / Contact Page
```typescript
export function generateInquirySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Golf Tour Inquiry — Group Golf Tours",
    "url": "https://groupgolftours.com/tour-inquiry/",
    "description": "Request a custom golf tour package. Groups 4–200. Free quote within 24 hours.",
    "mainEntity": {
      "@type": "ContactPoint",
      "telephone": "+18885848232",
      "contactType": "sales",
      "contactOption": "TollFree",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  }
}
```

### Blog / News Posts
```typescript
export function generateBlogPostSchema(post: {
  title: string
  url: string
  description: string
  datePublished: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "url": `https://groupgolftours.com/news/${post.url}`,
    "datePublished": post.datePublished,
    "author": { "@id": "https://groupgolftours.com/#organization" },
    "publisher": { "@id": "https://groupgolftours.com/#organization" },
    "image": post.image
      ? { "@type": "ImageObject", "url": `https://groupgolftours.com${post.image}` }
      : undefined,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://groupgolftours.com/news/${post.url}`
    }
  }
}
```

---

## Metadata Pattern (Next.js App Router)

### Page-level metadata (server components only)
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pebble Beach Golf Packages | Group Golf Tours',
  description: 'Play Pebble Beach with your group. 20 years of access. Free quote in 24 hours.',
  openGraph: {
    title: 'Pebble Beach Golf Packages | Group Golf Tours',
    description: 'Play Pebble Beach with your group. 20 years of access. Free quote in 24 hours.',
    url: 'https://groupgolftours.com/portfolio-item/monterey-and-pebble-beach/',
    siteName: 'Group Golf Tours',
    type: 'website',
    images: [
      {
        url: 'https://groupgolftours.com/images/og/pebble-beach.jpg',  // absolute URL — REQUIRED
        width: 1200,
        height: 630,
        alt: 'Pebble Beach Golf Links — Group Golf Tours'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pebble Beach Golf Packages | Group Golf Tours',
    description: 'Play Pebble Beach with your group. 20 years of access.',
    images: ['https://groupgolftours.com/images/og/pebble-beach.jpg']
  },
  alternates: {
    canonical: 'https://groupgolftours.com/portfolio-item/monterey-and-pebble-beach/'
  },
  robots: {
    index: true,
    follow: true
  }
}
```

### Root layout defaults
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://groupgolftours.com'),
  title: {
    default: 'Group Golf Tours — Premier Group Golf Travel Since 2005',
    template: '%s | Group Golf Tours'
  },
  description: 'Group golf travel specialists since 2005. Tee times, hotels, transport, dining and insurance for groups of 4–200. Licensed in Nevada + Florida.',
  openGraph: {
    siteName: 'Group Golf Tours',
    type: 'website',
    locale: 'en_US'
  },
  robots: { index: true, follow: true },
  verification: {
    // google: 'TBD — add after Google Search Console setup'
  }
}
```

---

## Sitemap

### next.config.js sitemap setup
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://groupgolftours.com'
  
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/tour-inquiry/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/tour-packages/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/destinations/`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/portfolio-item/monterey-and-pebble-beach/`, priority: 0.8 },
    { url: `${baseUrl}/portfolio-item/lake-tahoe-and-northern-nevada/`, priority: 0.8 },
    { url: `${baseUrl}/portfolio-item/las-vegas-and-southern-nevada/`, priority: 0.8 },
    { url: `${baseUrl}/portfolio-item/monterey-and-pebble-beach-2/`, priority: 0.8 },
    { url: `${baseUrl}/portfolio-item/somersett-golf-country-club/`, priority: 0.7 },
    { url: `${baseUrl}/golf-buddy-trips/`, priority: 0.8 },
    { url: `${baseUrl}/corporate-and-incentive-golf-travel/`, priority: 0.8 },
    { url: `${baseUrl}/hotel-reservations/`, priority: 0.7 },
    { url: `${baseUrl}/golf-courses/`, priority: 0.7 },
    { url: `${baseUrl}/travel-insurance/`, priority: 0.6 },
    { url: `${baseUrl}/transportation/`, priority: 0.6 },
    { url: `${baseUrl}/dining-events-and-arrangements/`, priority: 0.6 },
    { url: `${baseUrl}/site-seeing-and-non-golf-activities/`, priority: 0.6 },
    { url: `${baseUrl}/online-registration-system/`, priority: 0.6 },
    { url: `${baseUrl}/about-us/`, priority: 0.5 },
    { url: `${baseUrl}/who-we-are/`, priority: 0.5 },
    { url: `${baseUrl}/what-we-do/`, priority: 0.5 },
    { url: `${baseUrl}/how-we-do-it/`, priority: 0.5 },
    { url: `${baseUrl}/where-we-do-it/`, priority: 0.5 },
    { url: `${baseUrl}/news/`, priority: 0.6 },
    { url: `${baseUrl}/customer-testimonials/`, priority: 0.4 },
    { url: `${baseUrl}/disclaimer/`, priority: 0.2, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/privacy-policy/`, priority: 0.2, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/cancellation-policy/`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms-and-conditions/`, priority: 0.2, changeFrequency: 'yearly' as const },
  ]
  
  return staticPages.map(p => ({
    ...p,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency ?? 'monthly'
  }))
}
```

---

## AEO — AI Search Optimization

### llms.txt (root of site)
```
# Group Golf Tours

> Premier group golf travel specialists since 2005. Tee times, hotels, transport, dining and insurance for groups of 4–200 players.

## Company
- Licensed Seller of Travel: Nevada + Florida (ST37472)
- Founded: 2005 | Dallas, TX
- Contact: 888-584-8232 | customerservice@zoomaway.com
- 10,000+ group outings executed

## Destinations
- Lake Tahoe & Northern Nevada: /portfolio-item/lake-tahoe-and-northern-nevada/
- Las Vegas & Southern Nevada: /portfolio-item/las-vegas-and-southern-nevada/
- Monterey & Pebble Beach: /portfolio-item/monterey-and-pebble-beach/
- Southern California: /portfolio-item/monterey-and-pebble-beach-2/
- International (Scotland, Ireland, Portugal, Spain, Mexico, Dominican Republic)

## Services
- Tee Times: /golf-courses/
- Hotel Reservations: /hotel-reservations/
- Transportation: /transportation/
- Dining Events: /dining-events-and-arrangements/
- Travel Insurance: /travel-insurance/
- Tour Packages: /tour-packages/
- Online Registration: /online-registration-system/

## Trip Types
- Golf Buddy Trips: /golf-buddy-trips/
- Corporate & Incentive: /corporate-and-incentive-golf-travel/

## Policies
- Cancellation: 72-hour free cancellation on all standard bookings
- Terms: /terms-and-conditions/
- Privacy: /privacy-policy/
```

### SEO Copy Principles
1. **State facts precisely** — "10,000+ outings" not "thousands of trips"
2. **Include credentials in body copy** — "Licensed Seller of Travel in Nevada and Florida (ST37472)"
3. **Name courses explicitly** — "Pebble Beach Golf Links, Spyglass Hill, Torrey Pines" — AI indexes proper nouns
4. **Answer questions directly** — "Groups of 4 to 200 players" not "groups of all sizes"
5. **Include phone number on conversion pages** — 888-584-8232
6. **Use FAQ sections on every service/destination page** — feeds AI overviews

---

## FAQ Pattern (add to every service + destination page)
```typescript
const faqs = [
  {
    question: "What size groups does Group Golf Tours handle?",
    answer: "Group Golf Tours plans trips for groups of 4 to 200 players. Small buddy trips and large corporate events are both handled with the same level of service."
  },
  {
    question: "How far in advance should I book a group golf trip?",
    answer: "For peak summer destinations like Pebble Beach, Lake Tahoe and Bandon Dunes, booking 6–12 months in advance is recommended. International destinations like Scotland and Ireland often require 12–18 months lead time."
  }
  // Add 3–5 page-specific questions per page
]
```

---

## Known SEO Issues to Avoid
1. OG image URLs must be absolute (e.g., `https://groupgolftours.com/images/og/...`) — relative paths silently fail
2. Client components cannot export `metadata` — use server page components for metadata
3. Do not duplicate meta descriptions across pages — every page needs unique content
4. The SoCal URL `/portfolio-item/monterey-and-pebble-beach-2/` looks like a duplicate of Monterey — add clear canonical and unique title/description to differentiate
