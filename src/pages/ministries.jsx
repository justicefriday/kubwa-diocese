import { User, Phone } from 'lucide-react'
import { ministries } from '../data/ministries'
import PageHeader from '../components/ui/PageHeader'

export default function Ministries() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Ministries"
        text="Serving God and our communities through worship, education, healthcare and care."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map(({ title, text, head, phone }) => (
            <article key={title} className="flex flex-col rounded-xl border-t-4 border-gold bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-royal">{title}</h3>
              {text && <p className="mt-3 mb-5 leading-relaxed">{text}</p>}

              {(head || phone) && (
                <ul className="mt-auto space-y-2 border-t border-royal/10 pt-4 text-sm">
                  {head && (
                    <li className="flex items-center gap-2">
                      <User size={16} className="shrink-0 text-gold" /> {head}
                    </li>
                  )}
                  {phone && (
                    <li className="flex items-center gap-2">
                      <Phone size={16} className="shrink-0 text-gold" />
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-medium text-royal hover:text-gold">
                        {phone}
                      </a>
                    </li>
                  )}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}