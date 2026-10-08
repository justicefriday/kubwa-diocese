import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { slides } from '../../data/slides'

const arrow =
  'absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-gold/60 text-gold transition hover:bg-gold hover:text-midnight md:grid'

export default function HeroCarousel() {
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }))
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [autoplay.current])
  const [active, setActive] = useState(0)

  // Keep `active` in sync so the correct dot is highlighted
  useEffect(() => {
    if (!embla) return
    const update = () => setActive(embla.selectedScrollSnap())
    embla.on('select', update)
    return () => embla.off('select', update)
  }, [embla])

  return (
    <section className="relative" aria-roledescription="carousel" aria-label="Featured">
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((s) => (
            <div key={s.title} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative flex min-h-[70vh] items-center bg-linear-to-br from-midnight via-royal to-royal md:min-h-[80vh]">
                {s.image && (
                  <>
                    <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-midnight/70" />
                  </>
                )}

                <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-12">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
                    {s.eyebrow}
                  </p>
                  <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-ivory sm:text-5xl md:text-7xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base text-ivory/80 md:text-lg">{s.text}</p>
                  <Link
                    to={s.cta.to}
                    className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-midnight hover:brightness-110"
                  >
                    {s.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => embla?.scrollPrev()} aria-label="Previous slide" className={`left-4 ${arrow}`}>
        <ChevronLeft />
      </button>
      <button onClick={() => embla?.scrollNext()} aria-label="Next slide" className={`right-4 ${arrow}`}>
        <ChevronRight />
      </button>

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === active ? 'w-8 bg-gold' : 'w-2.5 bg-ivory/50'}`}
          />
        ))}
      </div>
    </section>
  )
}