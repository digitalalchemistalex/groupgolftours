'use client'
import Link from 'next/link'

interface Props { name: string; tag: string; href: string; img: string }

export default function DestinationCard({ name, tag, href, img }: Props) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '4/3', background: '#1a3d1f' }}>
      <div className="dest-img" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,26,15,0.85) 0%, rgba(13,26,15,0.1) 60%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24 }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 6 }}>{tag}</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--color-cream)', fontWeight: 500 }}>{name}</div>
      </div>
      <style>{`.dest-img:hover { transform: scale(1.05); }`}</style>
    </Link>
  )
}
