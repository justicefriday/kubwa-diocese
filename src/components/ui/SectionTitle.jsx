export default function SectionTitle({ eyebrow, title, light = false }) {
  return (
    <div className="mb-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className={`mt-2 text-3xl font-semibold md:text-5xl ${light ? 'text-ivory' : 'text-royal'}`}>
        {title}
      </h2>
    </div>
  )
}