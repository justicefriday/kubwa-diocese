import { MapPin, Clock } from 'lucide-react'

export default function EventCard({ date, title, place, time }) {
  const d = new Date(`${date}T00:00:00`)
  const day = d.getDate()
  const month = d.toLocaleDateString('en-GB', { month: 'short' })
  const full = d.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <article className="flex gap-5 rounded-xl border border-royal/10 bg-white p-5 shadow-sm md:p-6">
      <time dateTime={date} className="grid h-20 w-20 shrink-0 place-content-center rounded-lg bg-royal text-center">
        <span className="font-heading text-3xl font-semibold leading-none text-gold">{day}</span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-ivory">{month}</span>
      </time>

      <div className="min-w-0">
        <h3 className="text-2xl font-semibold text-royal">{title}</h3>
        <p className="mt-1 text-sm text-ink/70">{full}</p>
        <ul className="mt-3 space-y-1 text-sm">
          <li className="flex items-center gap-2"><MapPin size={16} className="shrink-0 text-gold" /> {place}</li>
          {time && <li className="flex items-center gap-2"><Clock size={16} className="shrink-0 text-gold" /> {time}</li>}
        </ul>
      </div>
    </article>
  )
}