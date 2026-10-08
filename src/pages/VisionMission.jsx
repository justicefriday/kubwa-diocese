import PageHeader from '../components/ui/PageHeader'
import { vision, mission } from '../data/vision'

export default function VisionMission() {
  return (
    <>
      <PageHeader eyebrow="Who We Are" title="Vision & Mission" />

      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Vision</h2>
        <blockquote className="mt-5 font-heading text-2xl italic leading-snug text-royal md:text-4xl">
          &ldquo;{vision}&rdquo;
        </blockquote>
      </section>

      {mission && (
        <section className="bg-mist px-5 py-16 text-center md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Mission</h2>
            <p className="mt-5 font-heading text-2xl leading-snug text-royal md:text-4xl">{mission}</p>
          </div>
        </section>
      )}
    </>
  )
}