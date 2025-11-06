import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,230,255,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,230,255,0.25)]"
        >
          WELCOME TO NOS GAME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-gray-200"
        >
          La tua community di gaming per Minecraft, GTA V & FiveM. Server, hosting, guide e un hub dove crescere insieme.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="#join"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-md font-semibold text-white bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-orange-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_25px_rgba(255,106,0,0.35)] hover:shadow-[0_0_45px_rgba(255,106,0,0.6)] transition-shadow"
          >
            Unisciti ora
            <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
