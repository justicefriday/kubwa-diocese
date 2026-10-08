import { Link } from 'react-router-dom'

export default function BishopPreview() {
  return (
    <section className="bg-mist px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Portrait: put the photo at public/images/bishop.jpg */}
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-xl border-4 border-gold bg-royal md:max-w-none">
          <img
            src="/images/bishop.jpg"
            alt="The Rt. Rev'd Dr. Duke T. Akamisoko"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Shepherd</p>
          <h2 className="mt-2 text-3xl font-semibold text-royal md:text-5xl">
            The Rt. Rev&apos;d Dr. Duke T. Akamisoko
          </h2>
          <p className="mt-1 font-medium text-ink/70">Bishop, Diocese of Kubwa</p>
          <p className="mt-5 leading-relaxed md:text-lg">
            Ordained in 1991, Bishop Duke served in the dioceses of Lokoja, Kebbi and Abuja before
            becoming Bishop of Zonkwa in 2005. He was elected Bishop of Kubwa in January 2009 and
            enthroned on 15 February 2009 as the diocese&apos;s second Bishop.
          </p>
          <Link
            to="/bishop"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-midnight hover:brightness-110"
          >
            Read Full Profile
          </Link>
        </div>
      </div>
    </section>
  )
}