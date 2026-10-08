import { Link } from 'react-router-dom'
import { historyTeaser } from '../../data/historyTeaser'
import SectionTitle from '../ui/SectionTitle'

export default function HistoryTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <SectionTitle eyebrow="Our History" title="A Young Diocese, Growing Fast" />
      <p className="mx-auto -mt-4 mb-12 max-w-3xl text-center md:text-lg">
        Created from the Diocese of Abuja, the Missionary Diocese of Kubwa began with six
        archdeaconries and has grown to seventeen.
      </p>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {historyTeaser.map(({ year, text }) => (
          <div key={year} className="border-t-2 border-gold pt-4">
            <p className="font-heading text-4xl font-semibold text-royal md:text-5xl">{year}</p>
            <p className="mt-2 text-sm md:text-base">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/about/history"
          className="inline-block rounded-full border border-royal px-8 py-3.5 font-semibold text-royal transition hover:bg-royal hover:text-ivory"
        >
          Read Our History
        </Link>
      </div>
    </section>
  )
}