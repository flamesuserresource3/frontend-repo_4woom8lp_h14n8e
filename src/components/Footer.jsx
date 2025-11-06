import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-white">NOS Game</h4>
          <p className="mt-2 text-gray-400 text-sm">Community gaming per Minecraft, GTA V & FiveM. Hosting, risorse, eventi e tanto altro.</p>
        </div>
        <div className="text-gray-300 text-sm">
          <div className="font-medium text-white mb-3">Menu rapido</div>
          <ul className="space-y-2">
            <li><a className="hover:text-white" href="#resources">Risorse</a></li>
            <li><a className="hover:text-white" href="#hosting">Server & Hosting</a></li>
            <li><a className="hover:text-white" href="#news">Novità</a></li>
            <li><a className="hover:text-white" href="#join">Unisciti</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-white mb-3">Seguici</div>
          <div className="flex items-center gap-3 text-gray-300">
            <a href="#" aria-label="Discord" className="hover:text-white"><DiscordLogoIcon /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-gray-400 text-xs">
        © 2025–2026 NOS Media™. Tutti i diritti riservati.
      </div>
    </footer>
  )
}
