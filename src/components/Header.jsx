import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Início',      href: '#home' },
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Projetos',    href: '#projetos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Formação',    href: '#formacao' },
  { label: 'Contato',     href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  // Detecta scroll para mudar o estilo do header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060A12]/90 backdrop-blur-xl border-b border-[#1B2C45]/70 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────── */}
        <a href="#home" className="flex items-center gap-0.5 group">
          <span className="font-display font-extrabold text-lg text-[#EDF2FF] tracking-tight">
            Carlos André
          </span>
          <span className="font-display font-extrabold text-lg text-[#9DFF2C]">.</span>
          <span className="font-body text-sm text-[#7B9CC7] ml-1 font-normal group-hover:text-[#EDF2FF] transition-colors">
            dev
          </span>
        </a>

        {/* ── Desktop Nav ───────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-[#7B9CC7] hover:text-[#EDF2FF] transition-colors rounded-lg hover:bg-white/5 font-body"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── CTA Button ────────────────────────────────── */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="px-5 py-2.5 text-sm font-semibold bg-[#9DFF2C] hover:bg-[#FB9B36] text-[#080D06] rounded-xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(251,155,54,0.45)] active:scale-95"
          >
            Entrar em Contato
          </a>
        </div>

        {/* ── Mobile Hamburger ──────────────────────────── */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden p-2 rounded-lg text-[#7B9CC7] hover:text-[#EDF2FF] hover:bg-white/5 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu ───────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1B2C45]/60 bg-[#060A12]/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm text-[#7B9CC7] hover:text-[#EDF2FF] hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-3 px-5 py-3 text-sm font-semibold bg-[#9DFF2C] hover:bg-[#FB9B36] text-[#080D06] rounded-xl text-center transition-colors duration-300"
            >
              Entrar em Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
