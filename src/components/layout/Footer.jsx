import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa6'
import { site } from '../../data/site'

const icons = { facebook: FaFacebookF, youtube: FaYoutube, instagram: FaInstagram }

const quickLinks = [
  { label: 'History', to: '/about/history' },
  { label: 'The Bishop', to: '/bishop' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Parishes', to: '/parishes' },
  { label: 'News & Events', to: '/news-events' },
  { label: 'Give', to: '/give' },
]

const heading = 'mb-4 font-heading text-xl font-semibold text-gold'

export default function Footer() {
  return (
    <footer className="bg-midnight text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        {/* About */}
        <div>
          <img src={site.logo} alt="Diocese logo" className="h-16 w-auto rounded bg-ivory p-1.5" />
          <p className="mt-4 text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-2 text-sm font-semibold text-gold">{site.motto}</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className={heading}>Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={heading}>Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" /> {site.address}
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-gold" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-gold">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">{site.email}</a>
            </li>
          </ul>
<div className="mt-5 flex gap-3">
  {site.socials.map(({ label, href, icon }) => {
    const Icon = icons[icon]
    return (
      <a
        key={label}
        href={href}
        aria-label={label}
        className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-gold transition hover:bg-gold hover:text-midnight"
      >
        <Icon size={18} />
      </a>
    )
  })}
</div>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/50">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}