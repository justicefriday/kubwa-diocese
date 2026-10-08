import PageHeader from '../components/ui/PageHeader'
import MottoPillars from '../components/home/MottoPillars'
import SectionTitle from '../components/ui/SectionTitle'
import { anthem } from '../data/anthem'

function Stanza({ label, lines, chorus = false }) {
  return (
    <div className={chorus ? 'mt-8 border-l-4 border-gold pl-5 md:pl-8' : ''}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{label}</p>
      {lines.map((line) => (
        <p key={line} className="font-heading text-xl leading-relaxed text-royal md:text-3xl">
          {line}
        </p>
      ))}
    </div>
  )
}

export default function MottoAnthem() {
  return (
    <>
      <PageHeader eyebrow="Who We Are" title="Motto & Anthem" />
      <MottoPillars />

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <SectionTitle eyebrow="Diocesan Anthem" title={anthem.title} />
        <div className="rounded-xl border border-royal/10 bg-white p-6 shadow-sm md:p-12">
          <Stanza label="Verse" lines={anthem.verse} />
          <Stanza label="Chorus" lines={anthem.chorus} chorus />
        </div>
      </section>
    </>
  )
}