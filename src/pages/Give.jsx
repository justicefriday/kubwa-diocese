import { Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { give } from '../data/give'
import AccountCard from '../components/give/AccountCard'
import SectionTitle from '../components/ui/SectionTitle'

const whatsappLink =
  `https://wa.me/${give.whatsapp}?text=` +
  encodeURIComponent('Hello, I have made a payment to the Diocese of Kubwa. Please find my proof of payment.')

const button =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:brightness-110'

export default function Give() {
  return (
    <>
      <section className="bg-midnight px-5 py-16 text-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Partner With Us</p>
        <h1 className="mt-2 text-4xl font-semibold text-ivory md:text-6xl">Give</h1>
        <p className="mx-auto mt-5 max-w-2xl text-ivory/80 md:text-lg">
          Your giving helps build churches, schools, healthcare and lives across the FCT.
          Thank you for your generosity.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionTitle eyebrow="Diocesan Accounts" title="Choose a Fund" />
        <div className="grid gap-6 md:grid-cols-2">
          {give.accounts.map((account) => (
            <AccountCard key={account.fund} {...account} />
          ))}
        </div>
      </section>

      <section className="bg-mist px-5 py-16 text-center md:py-20">
        <h2 className="text-3xl font-semibold text-royal md:text-4xl">Send Proof of Payment</h2>
        <p className="mx-auto mt-3 max-w-xl">
          After giving, please send your proof of payment so we can acknowledge your gift.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className={`${button} bg-gold text-midnight`}>
            <FaWhatsapp size={20} /> WhatsApp {give.whatsappDisplay}
          </a>
          <a href={`mailto:${give.email}`} className={`${button} border border-royal text-royal`}>
            <Mail size={20} /> {give.email}
          </a>
        </div>
      </section>
    </>
  )
}