import { stats } from '../../data/stats'
import useCounter from '../../hooks/useCounter'

function Stat({ value, label }) {
  const [ref, count] = useCounter(value)
  return (
    <div className="text-center">
      <p ref={ref} className="font-heading text-5xl font-semibold text-gold md:text-6xl">
        {count.toLocaleString()}
      </p>
      <p className="mt-2 text-sm text-ivory/80 md:text-base">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-royal px-5 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}