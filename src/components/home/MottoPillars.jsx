import { Cross, HandHelping, Flame } from 'lucide-react'
import { motto } from '../../data/motto'
import SectionTitle from '../ui/SectionTitle'

const icons = { cross: Cross, hands: HandHelping, flame: Flame }

export default function MottoPillars() {
  return (
    <section className="bg-midnight px-5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Our Motto" title="Faith · Diligence · Sacrifice" light />

        <div className="grid gap-6 md:grid-cols-3">
          {motto.map(({ title, text, icon }) => {
            const Icon = icons[icon]
            return (
              <div
                key={title}
                className="rounded-xl border border-gold/30 bg-royal/40 p-8 text-center transition hover:border-gold"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold text-gold">
                  <Icon size={28} />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-gold">{title}</h3>
                <p className="mt-2 text-ivory/80">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}