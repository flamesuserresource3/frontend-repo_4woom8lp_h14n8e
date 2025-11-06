import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const demoItems = [
  {
    title: 'Aggiornamento FiveM: nuovi script ottimizzati',
    desc: 'Performance migliorate e nuove funzioni per roleplay.',
  },
  {
    title: 'Minecraft Pack: texture 4K ottimizzate',
    desc: 'Nuova release con colori neon e UI rinnovata.',
  },
  {
    title: 'Server GTA V: apertura cluster EU',
    desc: 'Ping bassissimo e protezione anti-DDoS.',
  },
]

export default function NewsSlider() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % demoItems.length), 5000)
    return () => clearTimeout(timeoutRef.current)
  }, [index])

  const prev = () => setIndex((i) => (i - 1 + demoItems.length) % demoItems.length)
  const next = () => setIndex((i) => (i + 1) % demoItems.length)

  return (
    <section id="news" className="bg-[#0a0a0a] py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ultime novità</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button aria-label="Precedente" onClick={prev} className="p-2 rounded border border-white/10 text-gray-200 hover:text-white hover:bg-white/5">
              <ChevronLeft />
            </button>
            <button aria-label="Successivo" onClick={next} className="p-2 rounded border border-white/10 text-gray-200 hover:text-white hover:bg-white/5">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_0%,rgba(0,230,255,0.12),transparent_40%)]" />

          <div className="h-48 sm:h-44 md:h-40 flex items-center">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45 }}
                  className="px-6 py-6"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{demoItems[index].title}</h3>
                  <p className="mt-2 text-gray-300">{demoItems[index].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button aria-label="Precedente" onClick={prev} className="m-3 p-2 rounded bg-black/40 text-white">
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button aria-label="Successivo" onClick={next} className="m-3 p-2 rounded bg-black/40 text-white">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
