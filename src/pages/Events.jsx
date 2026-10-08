import { events } from '../data/events'
import PageHeader from '../components/ui/PageHeader'
import EventCard from '../components/events/EventCard'

const today = new Date()
today.setHours(0, 0, 0, 0)

const upcoming = events
  .filter((e) => new Date(`${e.date}T00:00:00`) >= today)
  .sort((a, b) => a.date.localeCompare(b.date))

export default function NewsEvents() {
  return (
    <>
      <PageHeader
        eyebrow="Stay Informed"
        title="News & Events"
        text="Announcements and upcoming events across the diocese."
      />

      <section className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h2 className="mb-8 text-3xl font-semibold text-royal md:text-4xl">Upcoming Events</h2>
        {upcoming.length ? (
          <div className="space-y-5">
            {upcoming.map((e) => <EventCard key={e.date + e.title} {...e} />)}
          </div>
        ) : (
          <p className="text-ink/70">No upcoming events at the moment. Please check back soon.</p>
        )}
      </section>
    </>
  )
}