import { useState } from 'react'
import { contact } from '../../data/contact'

const field =
  'w-full rounded-lg border border-royal/20 bg-white px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30'

const messages = {
  success: ['Thank you. Your message has been sent.', 'text-green-700'],
  error: ['Something went wrong. Please try again or use WhatsApp.', 'text-red-700'],
  nokey: ['The form is not set up yet. Please use email or WhatsApp for now.', 'text-red-700'],
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error | nokey

  const submit = async (e) => {
    e.preventDefault()
    if (!contact.accessKey) return setStatus('nokey')

    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: contact.accessKey,
          subject: 'New message from the Diocese of Kubwa website',
          ...Object.fromEntries(new FormData(form)),
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error()
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-xl border border-royal/10 bg-white p-6 shadow-sm md:p-8">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-royal">Full name</label>
        <input id="name" name="name" required className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-royal">Email</label>
        <input id="email" name="email" type="email" required className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-royal">Message</label>
        <textarea id="message" name="message" rows="5" required className={field} />
      </div>

      {/* Hidden spam trap: real people never see or fill this */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

      <button
        disabled={status === 'sending'}
        className="w-full rounded-full bg-gold px-8 py-3.5 font-semibold text-midnight hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {messages[status] && (
        <p role="status" className={`text-sm font-medium ${messages[status][1]}`}>
          {messages[status][0]}
        </p>
      )}
    </form>
  )
}