import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { site } from '../data/site'
import { give } from '../data/give'
import { contact } from '../data/contact'
import PageHeader from '../components/ui/PageHeader'
import ContactForm from '../components/contact/ContactForm'

const details = [
  { icon: MapPin, label: 'Address', value: site.address },
  { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: give.whatsappDisplay, href: `https://wa.me/${give.whatsapp}` },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        text="We would love to hear from you. Send us a message or visit the diocesan secretariat."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20 lg:gap-16">
        <div className="space-y-6">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-royal text-gold">
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{label}</p>
                {href ? (
                  <a href={href} className="break-words font-medium text-royal hover:text-gold">{value}</a>
                ) : (
                  <p className="font-medium text-royal">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-royal text-gold">
              <Clock size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Office Hours</p>
              {contact.hours.map(([days, time]) => (
                <p key={days} className="text-royal">
                  <span className="font-medium">{days}:</span> {time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="px-5 pb-16 md:pb-24">
        <iframe
          title="Map of the Diocese of Kubwa"
          src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
          loading="lazy"
          className="mx-auto h-72 w-full max-w-7xl rounded-xl border border-royal/10 md:h-96"
        />
      </section>
    </>
  )
}