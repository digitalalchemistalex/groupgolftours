interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  img?: string
  dark?: boolean
}

export default function PageHero({ eyebrow, title, subtitle, img, dark = true }: Props) {
  const bg = img
    ? `linear-gradient(to bottom, rgba(13,26,15,0.75) 0%, rgba(13,26,15,0.5) 100%), url(${img}) center/cover no-repeat`
    : 'var(--color-dark)'
  return (
    <section style={{ background: bg, padding: '140px 0 80px', textAlign: 'center' }}>
      <div className="section-wrap" style={{ maxWidth: 760 }}>
        <p className={dark ? 'eyebrow-light' : 'eyebrow'} style={{ marginBottom: 16 }}>{eyebrow}</p>
        <div className="divider-gold-center" />
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,5vw,64px)', color: dark ? 'var(--color-cream)' : 'var(--color-dark)', marginBottom: subtitle ? 20 : 0, fontWeight: 400 }}
          dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p style={{ fontSize: 17, lineHeight: 1.8, color: dark ? 'rgba(245,240,232,0.75)' : 'var(--color-text-muted)', maxWidth: 600, margin: '0 auto' }}>{subtitle}</p>}
      </div>
    </section>
  )
}
