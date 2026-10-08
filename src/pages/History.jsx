import { intro, vision, sections, archdeaconries, bishops } from '../data/history'
import SectionTitle from '../components/ui/SectionTitle'

const para = 'leading-relaxed md:text-lg'

export default function History() {
  return (
    <>
      <section className="bg-midnight px-5 py-16 text-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Story</p>
        <h1 className="mt-2 text-4xl font-semibold text-ivory md:text-6xl">History of the Diocese</h1>
        <p className="mx-auto mt-5 max-w-3xl text-ivory/80 md:text-lg">{intro}</p>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        {sections.map(({ title, paragraphs, quote, after, chips }) => (
          <section key={title} className="mb-12 last:mb-0 md:mb-16">
            <h2 className="mb-5 border-l-4 border-gold pl-4 text-3xl font-semibold text-royal md:text-4xl">
              {title}
            </h2>

            <div className="space-y-5">
              {paragraphs.map((p) => <p key={p.slice(0, 30)} className={para}>{p}</p>)}
            </div>

            {quote && (
              <blockquote className="my-8 rounded-r-xl border-l-4 border-gold bg-mist p-6 font-heading text-xl italic leading-snug text-royal md:p-8 md:text-3xl">
                &ldquo;{vision}&rdquo;
              </blockquote>
            )}

            {after && (
              <div className="space-y-5">
                {after.map((p) => <p key={p.slice(0, 30)} className={para}>{p}</p>)}
              </div>
            )}

            {chips && (
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {archdeaconries.map((a) => (
                  <li key={a} className="rounded-full bg-royal px-4 py-1.5 text-sm text-ivory">{a}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <section className="bg-mist px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="Our Bishops" title="Those Who Have Served" />
          <div className="grid gap-6 md:grid-cols-2">
            {bishops.map((b) => (
              <article
                key={b.name}
                className={`rounded-xl p-8 text-center ${
                  b.memorial ? 'bg-midnight text-ivory' : 'border border-royal/10 bg-white shadow-sm'
                }`}
              >
                {b.memorial && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">In Loving Memory</p>
                )}
                <h3 className={`text-2xl font-semibold ${b.memorial ? 'text-ivory' : 'text-royal'}`}>{b.name}</h3>
                <p className="mt-2 font-medium text-gold">{b.role}</p>
                <p className={b.memorial ? 'text-ivory/70' : 'text-ink/70'}>{b.tenure}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}