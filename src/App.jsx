import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WhatWeDo from './components/WhatWeDo'
import NewsSlider from './components/NewsSlider'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <WhatWeDo />

      <section id="resources" className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Risorse & Guide</h2>
            <p className="mt-3 text-gray-300">Datapack Minecraft, texture pack e script FiveM selezionati dalla community.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Minecraft Datapack – Neon Ores', tag: 'Minecraft' },
              { title: 'Texture Pack – UI Futuristica 4K', tag: 'Minecraft' },
              { title: 'FiveM – Script Economy Pro', tag: 'FiveM' },
            ].map((item) => (
              <div key={item.title} className="group rounded-xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition-colors">
                <div className="text-xs uppercase tracking-wider text-cyan-400">{item.tag}</div>
                <div className="mt-2 font-semibold">{item.title}</div>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300">Download</a>
                  <a href="#" className="text-sm text-gray-400 group-hover:text-gray-300">Scopri di più →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsSlider />

      <section id="hosting" className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Server & Hosting</h2>
            <p className="mt-3 text-gray-300">Starter, Pro ed Enterprise con supporto tecnico dedicato.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Starter Pack', price: '€8/mese', features: ['1 Server', 'RAM 4GB', 'Backup settimanale'] },
              { name: 'Pro Pack', price: '€18/mese', features: ['3 Server', 'RAM 12GB', 'Backup giornaliero'] },
              { name: 'Enterprise', price: 'Contattaci', features: ['Cluster dedicato', 'SLA 99.9%', 'Supporto 24/7'] },
            ].map((p, i) => (
              <div key={p.name} className="rounded-xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-transparent hover:shadow-[0_0_30px_rgba(0,230,255,0.15)] transition">
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="mt-2 text-cyan-400 font-bold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href="#join" className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-fuchsia-500 text-white font-medium">Prenota</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="bg-[#0a0a0a] py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center">Entra nella Community</h3>
          <p className="mt-3 text-gray-300 text-center">Unisciti al nostro Discord per eventi, risorse e supporto diretto.</p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Nome" />
            <input type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email" />
            <button type="submit" className="px-4 py-3 rounded-md bg-gradient-to-r from-orange-500 to-fuchsia-500 font-semibold">Unisciti ora</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
