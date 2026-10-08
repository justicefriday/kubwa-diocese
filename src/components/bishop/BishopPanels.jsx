import { bishop } from '../../data/bishop'

const list = 'space-y-3 leading-relaxed'
const subtitle = 'mb-3 mt-8 text-2xl font-semibold text-royal first:mt-0'

export const panels = {
  biography: () => (
    <div className="space-y-5 leading-relaxed md:text-lg">
      {bishop.biography.map((p) => (
        <p key={p.slice(0, 30)}>{p}</p>
      ))}
    </div>
  ),

  education: () => (
    <>
      <h3 className={subtitle}>Institutions</h3>
      <ul className={`${list} list-disc pl-5 marker:text-gold`}>
        {bishop.schools.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <h3 className={subtitle}>Qualifications</h3>
      <div className="flex flex-wrap gap-2">
        {bishop.qualifications.map((q) => (
          <span key={q} className="rounded-full bg-mist px-4 py-1.5 text-sm font-medium text-royal">{q}</span>
        ))}
      </div>
    </>
  ),

  ministry: () => (
    <ol className="ml-2 border-l-2 border-gold pl-6">
      {bishop.timeline.map(({ period, role }) => (
        <li key={period + role} className="relative pb-7 last:pb-0">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-royal ring-4 ring-ivory" />
          <p className="text-sm font-semibold text-gold">{period}</p>
          <p className="mt-0.5">{role}</p>
        </li>
      ))}
    </ol>
  ),

  publications: () => (
    <ul className={`${list} list-disc pl-5 marker:text-gold`}>
      {bishop.publications.map((p) => <li key={p}>{p}</li>)}
    </ul>
  ),

  family: () => (
    <>
      <p className="leading-relaxed md:text-lg">
        Bishop Duke is married to <strong>{bishop.family.spouse}</strong>. Their marriage is blessed
        with three children:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-gold">
        {bishop.family.children.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </>
  ),
}

export const tabs = [
  { id: 'biography', label: 'Biography' },
  { id: 'education', label: 'Education' },
  { id: 'ministry', label: 'Ministry' },
  { id: 'publications', label: 'Publications' },
  { id: 'family', label: 'Family' },
]