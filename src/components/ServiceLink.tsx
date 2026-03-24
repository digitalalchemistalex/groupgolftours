'use client'
import Link from 'next/link'
import { useState } from 'react'

interface Props { label: string; href: string }

export default function ServiceLink({ label, href }: Props) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link href={href} style={{
      display: 'flex', alignItems: 'center', padding: '16px 20px',
      background: hovered ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.04)',
      border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.15)'}`,
      textDecoration: 'none', fontSize: 13, fontWeight: 500, color: 'var(--color-cream)',
      fontFamily: 'var(--font-sans)', transition: 'background 0.2s, border-color 0.2s',
    }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {label}
    </Link>
  )
}
