import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { site } from '../../data/site'
import { nav } from '../../data/nav'

const desktopLink = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium hover:text-gold ${isActive ? 'text-gold' : 'text-royal'}`

function Logo() {
  return (
     <Link to="/" aria-label="Home">
      <img src={site.logo} alt="Diocese logo" className="h-12 w-auto md:h-14" />
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu when the page changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Stop the page behind the menu from scrolling
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-royal/10 bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Logo />

          {/* Desktop menu */}
          <nav className="hidden items-center lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-royal hover:text-gold">
                    {item.label} <ChevronDown size={14} />
                  </button>
                  <div className="invisible absolute left-0 top-full w-52 rounded-lg border border-royal/10 bg-ivory py-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <NavLink key={c.to} to={c.to} className="block px-4 py-2 text-sm text-royal hover:bg-mist">
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className={desktopLink}>
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/give"
              className="ml-3 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-midnight hover:brightness-110"
            >
              Give
            </Link>
          </nav>

          {/* Hamburger (hidden on large screens) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center text-royal lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile panel: a sibling of the header, NOT inside it */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-midnight text-ivory lg:hidden">
          <div className="flex h-20 shrink-0 items-center justify-between bg-ivory px-5">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center text-royal"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pb-10" aria-label="Mobile">
            {nav.map((item) =>
              item.children ? (
                <details key={item.label} className="group border-b border-ivory/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg">
                    {item.label}
                    <ChevronDown size={18} className="transition group-open:rotate-180" />
                  </summary>
                  <div className="pb-3 pl-4">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} className="block py-2.5 text-ivory/80">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link key={item.to} to={item.to} className="block border-b border-ivory/10 py-4 text-lg">
                  {item.label}
                </Link>
              )
            )}
            <Link to="/give" className="mt-8 block rounded-full bg-gold py-3.5 text-center font-semibold text-midnight">
              Give
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}