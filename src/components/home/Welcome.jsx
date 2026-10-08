import { Link } from 'react-router-dom'
import { MapPin, Clock, HandHeart, Phone } from 'lucide-react'
import { quickLinks } from '../../data/quickLinks'

const icons = { parish: MapPin, times: Clock, give: HandHeart, contact: Phone }

export default function Welcome() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Welcome</p>
        <h1 className="mt-2 text-3xl font-semibold text-royal md:text-5xl">
          A Community of Faith in the Heart of the FCT
        </h1>
        <p className="mt-5 text-base leading-relaxed md:text-lg">
          The Diocese of Kubwa is a family of worshipping communities, committed to proclaiming
          God&apos;s kingdom through worship, education, healthcare and service.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {quickLinks.map(({ label, to, icon }) => {
          const Icon = icons[icon]
          return (
            <Link
              key={label}
              to={to}
              className="group flex flex-col items-center gap-3 rounded-xl border border-royal/10 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-md md:p-8"
            >
              <Icon className="text-gold" size={32} />
              <span className="text-sm font-medium text-royal md:text-base">{label}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}