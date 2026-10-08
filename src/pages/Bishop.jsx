import { useState } from 'react'
import { bishop } from '../data/bishop'
import Tabs from '../components/ui/Tabs'
import { panels, tabs } from '../components/bishop/BishopPanels'

export default function Bishop() {
  const [active, setActive] = useState('biography')
  const Panel = panels[active]

  return (
    <>
      <section className="bg-midnight px-5 py-16 text-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Shepherd</p>
        <h1 className="mx-auto mt-2 max-w-4xl text-3xl font-semibold text-ivory sm:text-4xl md:text-6xl">
          {bishop.name}
        </h1>
        <p className="mt-3 text-ivory/80 md:text-lg">{bishop.title}</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[320px_1fr] md:py-20 lg:grid-cols-[380px_1fr] lg:gap-16">
        {/* Left column: portrait and quick facts */}
        <aside className="md:sticky md:top-28 md:self-start">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-xl border-4 border-gold bg-royal md:max-w-none">
            <img
              src={bishop.photo}
              alt={bishop.name}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>

          <dl className="mx-auto mt-6 max-w-sm divide-y divide-royal/10 rounded-xl bg-mist px-5 py-2 text-sm md:max-w-none">
            {bishop.facts.map(([label, value]) => (
              <div key={label} className="py-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gold">{label}</dt>
                <dd className="mt-0.5 font-medium text-royal">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        {/* Right column: tabs */}
        <div className="min-w-0">
          <Tabs tabs={tabs} active={active} onChange={setActive} />
          <div className="pt-8">
            <Panel />
          </div>
        </div>
      </section>
    </>
  )
}