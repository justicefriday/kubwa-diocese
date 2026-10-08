import { useEffect, useRef, useState } from 'react'

export default function useCounter(end, duration = 1500) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect() // run once only

      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // starts fast, slows down
        setValue(Math.round(end * eased))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return [ref, value]
}