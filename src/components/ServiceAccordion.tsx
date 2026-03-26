'use client'
import { useState } from 'react'
import Link from 'next/link'

type Service = { icon: string; label: string; href: string; note: string }

export default function ServiceAccordion({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ border:'1px solid #E8E4DC' }}>
      {services.map((s, i) => (
        <div key={s.href} style={{ background:'#fff', borderBottom: i < services.length-1 ? '1px solid #EAE6DE' : 'none' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 16px', background:'transparent', border:'none', width:'100%', textAlign:'left', cursor:'pointer' }}
          >
            <span style={{ fontSize:18, flexShrink:0 }}>{s.icon}</span>
            <span style={{ fontFamily:'var(--sans)', fontSize:14, fontWeight:700, color:'#1A1408', flex:1 }}>{s.label}</span>
            <svg style={{ transition:'transform .3s', transform: open===i ? 'rotate(180deg)' : 'none', flexShrink:0 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 5l4 4 4-4" stroke="#C87941" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open === i && (
            <div style={{ padding:'0 16px 14px 48px', fontFamily:'var(--sans)', fontSize:13, color:'rgba(26,20,8,.58)', lineHeight:1.6 }}>
              {s.note}{' '}
              <Link href={s.href} style={{ color:'var(--copper)', fontWeight:700, textDecoration:'none' }}>Learn more →</Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
