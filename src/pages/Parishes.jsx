import { useState } from 'react'
import { Search } from 'lucide-react'
import { archdeaconries, serviceTimes } from '../data/parishes'
import PageHeader from '../components/ui/PageHeader'
import SectionTitle from '../components/ui/SectionTitle'
import ArchdeaconryCard from '../components/parishes/ArchdeaconryCard'

export default function Parishes() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const results = archdeaconries.filter(
    (a) => a.name.toLowerCase().includes(q) || a.parishes.some((p) => p.toLowerCase().includes(q))
  )

  return (
    <>
      <PageHeader
        eyebrow="Find a Church"
        title="Parishes"
        text="The diocese is organised into seventeen archdeaconries across the FCT."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="relative mx-auto mb-10 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={20} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search an archdeaconry or parish"
            aria-label="Search archdeaconries and parishes"
            className="w-full rounded-full border border-royal/20 bg-white py-3.5 pl-12 pr-5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </div>

        {results.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((a) => <ArchdeaconryCard key={a.name} {...a} />)}
          </div>
        ) : (
          <p className="text-center text-ink/70">No match for &ldquo;{query}&rdquo;.</p>
        )}
      </section>

      {serviceTimes.length > 0 && (
        <section className="bg-mist px-5 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="Worship With Us" title="Service Times" />
            <dl className="divide-y divide-royal/10 rounded-xl bg-white px-6 shadow-sm">
              {serviceTimes.map(([label, time]) => (
                <div key={label} className="flex justify-between gap-4 py-4">
                  <dt className="font-medium text-royal">{label}</dt>
                  <dd className="text-right">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </>
  )
}