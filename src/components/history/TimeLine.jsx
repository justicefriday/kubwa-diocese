import { timeline } from '../../data/history'

export default function Timeline() {
  return (
    <ol className="relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-gold md:before:left-1/2 md:before:-translate-x-1/2">
      {timeline.map(({ date, text }, i) => {
        const left = i % 2 === 0
        return (
          <li
            key={date}
            className={`relative pb-10 pl-10 last:pb-0 md:w-1/2 md:pb-12 md:pl-0 ${
              left ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
            }`}
          >
            <span
              className={`absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-royal ring-4 ring-ivory ${
                left ? 'md:left-auto md:-right-[7px]' : 'md:-left-[7px]'
              }`}
            />
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">{date}</p>
            <p className="mt-1 leading-relaxed">{text}</p>
          </li>
        )
      })}
    </ol>
  )
}