export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="bg-midnight px-5 py-16 text-center md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h1 className="mx-auto mt-2 max-w-4xl text-4xl font-semibold text-ivory md:text-6xl">{title}</h1>
      {text && <p className="mx-auto mt-5 max-w-2xl text-ivory/80 md:text-lg">{text}</p>}
    </section>
  )
}