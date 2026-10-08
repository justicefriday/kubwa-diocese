import { Link } from 'react-router-dom'

export default function GiveBanner() {
  return (
    <section className="bg-midnight px-5 py-16 text-center md:py-24">
      <h2 className="text-3xl font-semibold text-ivory md:text-5xl">Partner With Us in the Mission</h2>
      <p className="mx-auto mt-4 max-w-2xl text-ivory/80 md:text-lg">
        Your giving builds churches, schools, healthcare and lives across the FCT.
      </p>
      <Link
        to="/give"
        className="mt-8 inline-block rounded-full bg-gold px-10 py-4 font-semibold text-midnight hover:brightness-110"
      >
        Give Now
      </Link>
    </section>
  )
}