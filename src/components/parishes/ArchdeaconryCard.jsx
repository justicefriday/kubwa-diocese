import { ExternalLink } from 'lucide-react'

export default function ArchdeaconryCard({ name, url, parishes }) {
  return (
    <article className="rounded-xl border border-royal/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-md">
      <h3 className="text-2xl font-semibold text-royal">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-gold"
          >
            {name}
            <ExternalLink size={16} className="shrink-0" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          name
        )}
      </h3>
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">Archdeaconry</p>

      {parishes.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm marker:text-gold">
          {parishes.map((p) => <li key={p}>{p}</li>)}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-ink/60">Parish list coming soon.</p>
      )}
    </article>
  )
}