import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Golf Travel News & Tips | Group Golf Tours Blog',
  description: 'Golf travel tips, destination guides, course reviews, and planning advice from Group Golf Tours. 20+ years of expertise on Pebble Beach, Shadow Creek, Lake Tahoe, Las Vegas, Scotland, and Ireland.',
  alternates: { canonical: 'https://www.groupgolftours.com/news/' },
  openGraph: {
    title: 'Golf Travel News & Tips | Group Golf Tours',
    description: 'Expert golf travel advice from specialists with 20+ years and 10,000+ outings.',
    url: 'https://www.groupgolftours.com/news/',
  },
}

const featuredTopics = [
  {
    title: 'How Far in Advance Should You Book Pebble Beach?',
    excerpt: "Groups need 12–18 months lead time for Pebble Beach Golf Links. Here's exactly how the reservation system works — and why resort guests get preference.",
    tag: 'Destination Guide', tagColor: '#5ED8C8',
    href: '/portfolio-item/monterey-and-pebble-beach/',
    meta: 'Pebble Beach · Planning',
  },
  {
    title: 'Shadow Creek Las Vegas: The Complete Group Guide',
    excerpt: "At $1,250 per round with limo and caddie included, Shadow Creek is America's most expensive tee time. Here's who can access it and how to book.",
    tag: 'Course Guide', tagColor: '#F8C030',
    href: '/portfolio-item/las-vegas-and-southern-nevada/',
    meta: 'Las Vegas · Shadow Creek',
  },
  {
    title: 'Golf at Altitude: Lake Tahoe & Reno Group Packages from $275',
    excerpt: "At 6,200 feet your ball flies 8–10% farther. Here's why Edgewood Tahoe, Coyote Moon, and Reno casino packages make for exceptional group golf.",
    tag: 'Destination Guide', tagColor: '#80C8F0',
    href: '/portfolio-item/lake-tahoe-and-northern-nevada/',
    meta: 'Lake Tahoe · Reno',
  },
  {
    title: 'Corporate Golf Incentive Trips: What Actually Works',
    excerpt: "After 10,000+ outings, we know which elements make a corporate golf event memorable — and which ones get cut from next year's budget. A frank guide.",
    tag: 'Planning Tips', tagColor: '#F87050',
    href: '/corporate-and-incentive-golf-travel/',
    meta: 'Corporate · Incentive',
  },
  {
    title: 'Scotland vs Ireland: Which Should Your Group Play First?',
    excerpt: "Turnberry, St Andrews, Ballybunion, Royal Portrush. Both countries have iconic links. Here's how to choose — and what each costs for a group of 12.",
    tag: 'International', tagColor: '#98D060',
    href: '/destinations/',
    meta: 'Scotland · Ireland',
  },
  {
    title: "The Trip Captain's Guide to Group Golf Planning",
    excerpt: 'The one person who organises the trip always misses half the fun. This guide covers how to hand off the logistics — and actually play.',
    tag: 'Planning Tips', tagColor: '#D4A832',
    href: '/golf-buddy-trips/',
    meta: 'Buddy Trips · Planning',
  },
]

export default function News() {
  return (
    <>
      {/* Hero */}
      <section className="grain" style={{ background: '#080806', padding: 'clamp(80px,10vw,130px) 0 clamp(60px,8vw,100px)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 55% at 75% 45%, rgba(61,24,64,0.1) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div className="section-wrap" style={{ maxWidth: 'var(--max)', position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--copper)' }}>Golf Travel Intelligence</span>
          <div style={{ width: 36, height: 1, background: 'var(--copper)', margin: '14px 0 22px' }} />
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px,6vw,80px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 20 }}>
            News &amp; Travel Guides
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.82, color: 'rgba(245,237,216,0.58)', maxWidth: 540, fontWeight: 300 }}>
            20+ years of expertise. Practical guides on booking, destinations, pricing, and group planning — from specialists who have executed 10,000+ outings.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section style={{ background: 'var(--parchment)', padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="section-wrap" style={{ maxWidth: 'var(--max)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 20, marginBottom: 64 }}>
            {featuredTopics.map(article => (
              <Link key={article.title} href={article.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#FAF6EE', borderTop: `3px solid ${article.tagColor}`, padding: '28px 24px', transition: 'transform 0.2s, box-shadow 0.2s' }} className="article-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: article.tagColor, background: `${article.tagColor}18`, padding: '3px 10px' }}>{article.tag}</span>
                  <span style={{ fontSize: 10, color: 'rgba(26,20,8,0.35)', letterSpacing: '0.06em' }}>{article.meta}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,2vw,22px)', fontWeight: 300, color: '#1A1408', lineHeight: 1.25, marginBottom: 12 }}>{article.title}</h2>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(26,20,8,0.55)', flex: 1, marginBottom: 16 }}>{article.excerpt}</p>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: article.tagColor }}>Read Guide →</div>
              </Link>
            ))}
          </div>
          <style>{`.article-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(26,20,8,0.1)}`}</style>

          {/* Coming soon note */}
          <div style={{ background: 'rgba(200,121,65,0.08)', border: '1px solid rgba(200,121,65,0.2)', padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 8 }}>More stories coming</div>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(26,20,8,0.55)' }}>
              New destination guides, course reviews, and planning tips are added regularly. In the meantime, our specialists can answer any question about any destination directly — call <a href="tel:8885848232" style={{ color: 'var(--copper)', fontWeight: 600, textDecoration: 'none' }}>888-584-8232</a> or use the inquiry form below.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/tour-inquiry/" className="btn btn-gold"><span>Plan My Trip</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
