import { useState } from 'react'
import { Menu, X, Rocket, Home, Users, BookOpen, Server } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Chi siamo', href: '#about', icon: Users },
    { label: 'Risorse', href: '#resources', icon: BookOpen },
    { label: 'Server & Hosting', href: '#hosting', icon: Server },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Rocket className="text-cyan-400" />
            <span className="font-semibold tracking-wide text-white">NOS Game</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <item.icon size={16} />
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-fuchsia-500 text-white hover:shadow-[0_0_20px_rgba(255,106,0,0.6)] transition-shadow"
            >
              Unisciti ora
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/80">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-200 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-fuchsia-500 text-white"
              >
                Unisciti ora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
