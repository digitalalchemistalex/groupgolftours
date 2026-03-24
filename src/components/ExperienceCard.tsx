'use client'
import Link from 'next/link'
import { useState } from 'react'

interface Props { title: string; desc: string; href: string; icon: string }

export default function ExperienceCard({ title, desc, href, icon }: Props) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link href={href} style={{ textDecoration: 'none', background: 'var(--color-white)', padding: '36px 32px', borderBottom: `3px solid ${hovered ? 'var(--color-gold)' : 'transparent'}`, transition: 'border-color 0.2s, transform 0.2s', display: 'block', transform: hovered ? 'translateY(-4px)' : 'translateY(0)' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--color-dark)', marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--color-text-muted)' }}>{desc}</p>
      <div style={{ marginTop: 20, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>Learn More →</div>
    </Link>
  )
}
