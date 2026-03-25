import Link from 'next/link'

/* ── Reusable cross-link blocks ─────────────────────────
   Used at the bottom of every service + destination page
   to drive contextual internal linking.
─────────────────────────────────────────────────────── */

interface LinkItem { label: string; href: string; sub?: string }

interface Props {
  title?: string
  links: LinkItem[]
  accent?: string
  bg?: string
}

export function LinkGrid({ title, links, accent = 'var(--gold)', bg = '#0A0C0A' }: Props) {
  return (
    <section style={{ background: bg, padding:'clamp(48px,6vw,72px) 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-wrap" style={{ maxWidth:'var(--max)' }}>
        {title && (
          <div style={{ marginBottom:28 }}>
            <span style={{ fontFamily:'var(--sans)', fontSize:9, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color: accent }}>{title}</span>
            <div style={{ width:36, height:1, background: accent, marginTop:12, opacity:0.7 }} />
          </div>
        )}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:'2px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              display:'block', padding:'16px 20px',
              background:'rgba(255,255,255,0.025)',
              textDecoration:'none',
              borderLeft:`2px solid transparent`,
              transition:'all 0.18s',
            }}
            className="ilink">
              <div style={{ fontFamily:'var(--sans)', fontSize:13, fontWeight:500, color:'rgba(245,237,216,0.72)', lineHeight:1.2 }}>{l.label}</div>
              {l.sub && <div style={{ fontSize:10, color:'rgba(245,237,216,0.3)', marginTop:3, letterSpacing:'0.04em' }}>{l.sub}</div>}
            </Link>
          ))}
        </div>
      </div>
      <style>{`.ilink:hover{background:rgba(255,255,255,0.05)!important;border-left-color:${accent}!important}.ilink:hover>div:first-child{color:${accent}!important}`}</style>
    </section>
  )
}

/* Destination cross-links — used on every destination page */
export function DestinationLinks({ exclude }: { exclude?: string }) {
  const all = [
    { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'From $275/person · Sierra Nevada' },
    { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250/round · Desert' },
    { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Pebble Beach $675/round · Coast' },
    { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Torrey Pines $277–$345 · Year-Round' },
    { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Private Club Access · Reno NV' },
  ]
  const filtered = exclude ? all.filter(d => !d.href.includes(exclude)) : all
  return <LinkGrid title="Also Explore" links={filtered} accent="var(--gold)" bg="#080808" />
}

/* Service cross-links — used on every service page */
export function ServiceLinks({ exclude }: { exclude?: string }) {
  const all = [
    { label:'Golf Courses & Tee Times', href:'/golf-courses/', sub:'Preferred access at 200+ courses' },
    { label:'Hotel Reservations', href:'/hotel-reservations/', sub:'Group blocks · Best rates' },
    { label:'Transportation', href:'/transportation/', sub:'Shuttles · Airport transfers' },
    { label:'Dining & Events', href:'/dining-events-and-arrangements/', sub:'Curated group dining' },
    { label:'Travel Insurance', href:'/travel-insurance/', sub:'Protect your investment' },
    { label:'Tour Packages', href:'/tour-packages/', sub:'All-inclusive from $275/person' },
    { label:'Sightseeing & Activities', href:'/site-seeing-and-non-golf-activities/', sub:'Beyond the greens' },
    { label:'Online Registration', href:'/online-registration-system/', sub:'Group management tools' },
  ]
  const filtered = exclude ? all.filter(s => !s.href.includes(exclude)) : all
  return <LinkGrid title="All Services" links={filtered} accent="var(--copper)" bg="#0A0A0A" />
}

/* Destination links for service pages — "We serve these regions" */
export function RegionLinks() {
  return (
    <LinkGrid
      title="Destinations We Serve"
      links={[
        { label:'Lake Tahoe & Northern Nevada', href:'/portfolio-item/lake-tahoe-and-northern-nevada/', sub:'From $275/person' },
        { label:'Las Vegas & Southern Nevada', href:'/portfolio-item/las-vegas-and-southern-nevada/', sub:'Shadow Creek $1,250/round' },
        { label:'Monterey & Pebble Beach', href:'/portfolio-item/monterey-and-pebble-beach/', sub:'Pebble Beach $675/round' },
        { label:'Southern California', href:'/portfolio-item/monterey-and-pebble-beach-2/', sub:'Torrey Pines · 365 days/year' },
        { label:'Somersett Golf & CC', href:'/portfolio-item/somersett-golf-country-club/', sub:'Private access · Reno NV' },
        { label:'International Destinations', href:'/destinations/', sub:'Ireland · Scotland · Portugal · Spain' },
      ]}
      accent="var(--copper)"
      bg="#0C0A08"
    />
  )
}
