---
name: groupgolftours-site
description: >
  Master skill for GroupGolfTours.com — a Next.js rebuild of groupgolftours.com for Zoomaway Technologies Inc.
  Read this skill BEFORE any work on this project. Covers full architecture, content source of truth,
  page inventory, brand identity, credentials, design system, and known gotchas.
  Trigger on: GroupGolfTours, groupgolftours.com, group golf tours, golf tour website, Zoomaway golf,
  Prestige Golf, Vacations on the Green, Sean Zoomaway, Mike Milligan golf, Next.js golf site,
  any page build or content work for this project.
---

# GroupGolfTours.com — Master Skill

**ALWAYS read this skill before ANY work on this project.**
**ALWAYS read `groupgolftours-deploy` before any code push.**
**ALWAYS read `groupgolftours-seo` before any page creation or content update.**

---

## Business Identity

| Field | Value |
|-------|-------|
| Brand name | Group Golf Tours |
| Also known as | Vacations on the Green / Prestige Golf |
| Phone | 888-584-8232 |
| Parent company | Zoomaway Technologies Inc. |
| Contact email | customerservice@Zoomaway.com / sean@zoomaway.com |
| Address | 3010 LBJ Freeway, Suite 1550, Dallas, TX 75234 |
| Registered seller of travel | Nevada + Florida (ST37472) |
| Governing law | State of Texas, Dallas County |
| Sibling sites | golfthehighsierra.com, golfgraeagle.com, mesquitestgeorgegolftours.com |
| Facebook | https://www.facebook.com/golfthehighsierra/ |
| Years in business | 20+ |
| Outings planned | 10,000+ |

---

## Stack

| Item | Value |
|------|-------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript strict mode |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Repo | digitalalchemistalex/groupgolftours (see deploy skill for token) |
| CMS | None — static content in components + MDX for blog |
| Forms | Native Next.js API routes → email via nodemailer or Resend |
| Analytics | TBD |

---

## Brand & Design System

### Names — Use All Three Correctly
- **Domain / company:** Group Golf Tours
- **Hero/marketing copy:** Prestige Golf (used in hero sliders)
- **Welcome/conversion copy:** Vacations on the Green
- Never mix them randomly — each has a specific context

### Color Palette
```css
--bg:       #F2EDE4  /* warm sand — page background */
--cream:    #FAF7F2  /* section fills */
--ink:      #0E1208  /* primary text */
--green:    #1A3D1F  /* dark forest — primary brand */
--green2:   #2D6335  /* mid green — hover states */
--sage:     #8AAF7A  /* light green — accents, eyebrows */
--rust:     #C44B1B  /* rust orange — CTAs, highlights */
--gold:     #D4A843  /* gold — italic accents */
--muted:    #6B6B5A  /* body text secondary */
--rule:     rgba(14,18,8,0.12) /* borders */
```

### Typography
- **Display / Headlines:** Bebas Neue — all caps, tracking 2px
- **Italic / Pull quotes:** Instrument Serif italic
- **Body / UI:** DM Sans 300/400/500
- Import: `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500`

### Button Style
- Primary CTA: `background: var(--rust)` + `clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)`
- Breathing glow animation on all CTAs: `border: 1.5px solid #FCD34D` + breathe keyframe
- Ghost: `background: transparent` + `border: 1px solid var(--rule)`

### Animations
```css
@keyframes breathe {
  0%,100% { box-shadow: 0 0 8px 1px rgba(252,211,77,0.2), 0 2px 16px rgba(0,0,0,0.18); }
  50%      { box-shadow: 0 0 24px 6px rgba(252,211,77,0.55), 0 2px 28px rgba(0,0,0,0.28); }
}
@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
```
- Scroll reveal: IntersectionObserver → add `.on` class → `opacity: 0; transform: translateY(28px)` → `opacity: 1; transform: none`
- Stagger delays: `.d1` through `.d8` (0.07s increments)

### Pills / Tags
- All pills: `clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)`
- Font: 9px, 700 weight, letter-spacing 2px, text-transform uppercase

---

## Content Source of Truth

**All content lives in `/mnt/project/groupgolftours-content.md`**
Zero fabrication. Every fact must come from this file.

### Known Content Gaps (DO NOT FABRICATE)
1. Mike Milligan bio — lorem ipsum on live site. Mark as `{BIO_PLACEHOLDER}`
2. Mike Eskuchen bio — lorem ipsum on live site. Mark as `{BIO_PLACEHOLDER}`
3. Customer testimonials — live site is empty. Use placeholder cards.
4. Corporate & Incentive Golf Travel page content — 500 error on scrape
5. How We Do It page — errored during scrape
6. Real tour pricing — none published
7. Somersett POV copy — actually describes Whitehawk Ranch (copy error on live site — flag to client, do NOT fix without approval)

---

## Page Inventory (62 pages total)

### Core Pages (URL must be preserved exactly for SEO)
| Page | URL |
|------|-----|
| Homepage | / |
| About Us | /about-us/ |
| Who We Are | /who-we-are/ |
| What We Do | /what-we-do/ |
| Golf Buddy Trips | /golf-buddy-trips/ |
| Corporate & Incentive Golf Travel | /corporate-and-incentive-golf-travel/ |
| Where We Do It | /where-we-do-it/ |
| How We Do It | /how-we-do-it/ |
| Customer Testimonials | /customer-testimonials/ |
| Destinations | /destinations/ |
| Tour Inquiry | /tour-inquiry/ |
| News | /news/ |

### Destination Pages
| Page | URL |
|------|-----|
| Lake Tahoe & Northern Nevada | /portfolio-item/lake-tahoe-and-northern-nevada/ |
| Las Vegas & Southern Nevada | /portfolio-item/las-vegas-and-southern-nevada/ |
| Monterey & Pebble Beach | /portfolio-item/monterey-and-pebble-beach/ |
| Southern California | /portfolio-item/monterey-and-pebble-beach-2/ |
| Somersett Golf & Country Club | /portfolio-item/somersett-golf-country-club/ |

⚠️ `/portfolio-item/monterey-and-pebble-beach-2/` = Southern California. Confusing slug — MUST be preserved for SEO.

### Service Pages
| Page | URL |
|------|-----|
| Hotel Reservations | /hotel-reservations/ |
| Golf Courses | /golf-courses/ |
| Travel Insurance | /travel-insurance/ |
| Transportation | /transportation/ |
| Tour Packages | /tour-packages/ |
| Dining Events & Arrangements | /dining-events-and-arrangements/ |
| Site Seeing & Non-Golf Activities | /site-seeing-and-non-golf-activities/ |
| Online Registration System | /online-registration-system/ |

### Policy Pages
| Page | URL |
|------|-----|
| Disclaimer | /disclaimer/ |
| Privacy Policy | /privacy-policy/ |
| Cancellation Policy | /cancellation-policy/ |
| Terms and Conditions | /terms-and-conditions/ |

---

## File Structure

```
groupgolftours/
├── app/
│   ├── layout.tsx                    # Root layout — fonts, metadata defaults
│   ├── page.tsx                      # Homepage
│   ├── about-us/page.tsx
│   ├── who-we-are/page.tsx
│   ├── what-we-do/page.tsx
│   ├── golf-buddy-trips/page.tsx
│   ├── corporate-and-incentive-golf-travel/page.tsx
│   ├── where-we-do-it/page.tsx
│   ├── how-we-do-it/page.tsx
│   ├── customer-testimonials/page.tsx
│   ├── destinations/page.tsx
│   ├── tour-inquiry/page.tsx
│   ├── news/
│   │   ├── page.tsx                  # Blog index
│   │   └── [slug]/page.tsx           # Blog post
│   ├── portfolio-item/
│   │   ├── lake-tahoe-and-northern-nevada/page.tsx
│   │   ├── las-vegas-and-southern-nevada/page.tsx
│   │   ├── monterey-and-pebble-beach/page.tsx
│   │   ├── monterey-and-pebble-beach-2/page.tsx   # SoCal — keep this slug
│   │   └── somersett-golf-country-club/page.tsx
│   ├── hotel-reservations/page.tsx
│   ├── golf-courses/page.tsx
│   ├── travel-insurance/page.tsx
│   ├── transportation/page.tsx
│   ├── tour-packages/page.tsx
│   ├── dining-events-and-arrangements/page.tsx
│   ├── site-seeing-and-non-golf-activities/page.tsx
│   ├── online-registration-system/page.tsx
│   ├── disclaimer/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── cancellation-policy/page.tsx
│   ├── terms-and-conditions/page.tsx
│   └── api/
│       ├── inquiry/route.ts          # Tour inquiry form submission
│       └── sitemap/route.ts
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── Marquee.tsx
│   ├── ui/
│   │   ├── Button.tsx                # Clip-path CTA button + breathe glow
│   │   ├── Pill.tsx                  # Clip-path pill tag
│   │   ├── ScrollReveal.tsx          # IntersectionObserver wrapper
│   │   └── HeroBadge.tsx             # Live pulse badge
│   ├── sections/
│   │   ├── HeroSplit.tsx             # Split hero — used on most pages
│   │   ├── DestinationStrip.tsx      # Horizontal destination cards
│   │   ├── ServicesGrid.tsx          # 8-card services grid
│   │   ├── HowItWorks.tsx            # Split + steps
│   │   ├── Testimonials.tsx          # 3-card grid
│   │   ├── CTABand.tsx               # Full-width dark CTA with form
│   │   ├── TrustStrip.tsx            # 4 trust items
│   │   └── Marquee.tsx               # Scrolling ticker
│   └── forms/
│       └── InquiryForm.tsx
├── lib/
│   ├── schema.ts                     # JSON-LD generators per page type
│   └── content.ts                    # Typed content constants
├── public/
│   ├── images/                       # Client photos go here
│   └── fonts/                        # Self-host if needed
├── styles/
│   └── globals.css                   # CSS variables, keyframes, base
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Key Technical Rules

### TypeScript Strict Mode
- ALL Supabase returns must be null-checked before access
- No `any` types — define interfaces for all data shapes
- `'use client'` must be first line of any client component (before imports)
- Client components cannot export `metadata`

### SEO — CRITICAL
- Every page needs unique `<title>` and `<meta description>`
- All destination and service pages need LocalBusiness + TouristAttraction schema
- URL slugs must match the original WordPress URLs EXACTLY (no redirects initially)
- See `groupgolftours-seo` skill for full schema patterns

### Images
- Client photos: drop into `/public/images/` — replace placeholder `<div>` components
- Until real photos arrive: use semantic color blocks with text — NO Unsplash URLs in production code
- All images need `alt` text from content file

### Forms
- Tour Inquiry form: POST to `/api/inquiry` → sends email to customerservice@Zoomaway.com
- No payment processing on this site — inquiry only

---

## Destinations — Key Facts

### Lake Tahoe & Northern Nevada
- Areas: Emerald Bay, Heavenly, Sand Harbor, Kings Beach, Zephyr Cove, Northstar, Reno, Virginia City, Carson City
- Somersett Golf & Country Club: 2019 Championship Trail, Reno NV 89523 | 5,200ft elevation | 62 bunkers | 7 lakes

### Las Vegas & Southern Nevada
- Areas: Las Vegas Strip, Fremont Street, Red Rock Canyon, Valley of Fire, Hoover Dam, Lake Mead, Mount Charleston

### Monterey & Pebble Beach
- Areas: Pebble Beach Golf Links, Lodge at Pebble Beach, Spanish Bay, Spyglass Hill, Carmel-by-the-Sea, 17-Mile Drive, Big Sur

### Southern California
- Courses: Torrey Pines, Riviera Country Club, Pelican Hill, La Quinta Resort, PGA West
- Areas: Santa Monica, Disneyland, Balboa Park, Palm Springs, Joshua Tree, Newport Beach

### International
- Mexico, Dominican Republic, Portugal, Spain, Ireland, Scotland

---

## Policies (Verbatim — Do Not Paraphrase)

### Cancellation
"Zoomaway provides its clientele with a 72-hour cancellation policy for all its services except for large group outings which are defined by an individual contract provided to the group leader."

### Terms Last Amended
April 13, 2009 — FLAG TO CLIENT before launch, needs update.

### Privacy Policy
Currently WordPress default boilerplate — FLAG TO CLIENT before launch.

---

## Pre-Launch Checklist (Flag to Client)

- [ ] Mike Milligan real bio
- [ ] Mike Eskuchen real bio
- [ ] Real customer testimonials
- [ ] Corporate & Incentive page content
- [ ] How We Do It page content
- [ ] Real course/destination photography
- [ ] Update Terms & Conditions (last amended 2009)
- [ ] Replace WordPress boilerplate Privacy Policy
- [ ] Somersett POV copy error (describes Whitehawk Ranch) — confirm fix or keep

---

## Lessons Learned

1. Three brand names (Group Golf Tours / Prestige Golf / Vacations on the Green) are used in specific contexts — never mix randomly
2. SoCal slug `/portfolio-item/monterey-and-pebble-beach-2/` looks wrong but is correct — preserve it
3. Somersett description actually describes Whitehawk Ranch — known error, needs client decision
4. Terms & Conditions last amended 2009 — must flag before launch
5. No pricing on site — inquiry-only model
