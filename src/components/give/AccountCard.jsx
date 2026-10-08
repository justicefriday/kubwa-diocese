import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function AccountCard({ fund, bank, name, number, note }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(number)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert(`Copy failed. Account number: ${number}`)
    }
  }

  return (
    <article className="flex flex-col rounded-xl border border-royal/10 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-2xl font-semibold text-royal">{fund}</h3>
      <p className="mt-1 text-sm text-ink/70">{note}</p>

      <dl className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-ink/60">Bank</dt>
          <dd className="font-medium">{bank}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink/60">Account name</dt>
          <dd className="text-right font-medium">{name}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-mist p-4">
        <span className="font-mono text-xl font-semibold tracking-wider text-royal md:text-2xl">
          {number}
        </span>
        <button
          onClick={copy}
          aria-label={`Copy ${fund} account number`}
          className="flex shrink-0 items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-midnight hover:brightness-110"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </article>
  )
}