export default function Tabs({ tabs, active, onChange }) {
  return (
    <div role="tablist" className="flex gap-2 overflow-x-auto border-b border-royal/15 pb-px">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          role="tab"
          aria-selected={active === id}
          onClick={() => onChange(id)}
          className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition md:text-base ${
            active === id
              ? 'border-gold text-royal'
              : 'border-transparent text-ink/60 hover:text-royal'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}