import { motion } from 'framer-motion'
import { Server, BookOpen, Users } from 'lucide-react'

const features = [
  {
    title: 'Server & Hosting',
    desc: 'Infrastruttura ottimizzata per Minecraft, GTA V e FiveM. Performance, sicurezza e supporto premium.',
    Icon: Server,
    color: 'from-orange-500 to-fuchsia-500',
  },
  {
    title: 'Guide & Risorse',
    desc: 'Tutorial, datapack, texture pack e script. Tutto ciò che ti serve per creare e modificare.',
    Icon: BookOpen,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Community & Eventi',
    desc: 'Eventi, tornei e un server Discord super attivo per crescere con altri gamer.',
    Icon: Users,
    color: 'from-fuchsia-500 to-cyan-400',
  },
]

export default function WhatWeDo() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Cosa facciamo</h2>
          <p className="mt-3 text-gray-300">Strumenti e servizi per la tua esperienza di gioco, dallo start al livello pro.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ title, desc, Icon, color }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${color}`} />
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white shadow-[0_0_20px_rgba(255,106,0,0.4)]`}> 
                  <Icon />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="mt-2 text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="mt-6">
                <a href="#resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">Scopri di più →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
