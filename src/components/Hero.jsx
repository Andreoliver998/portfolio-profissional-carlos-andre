import { useEffect, useRef } from 'react'
import { socialLinks } from '../data/socialLinks.js'

// Estatísticas de destaque no Hero
const stats = [
  { value: '4+',   label: 'Projetos em produção' },
  { value: '15+',  label: 'Tecnologias dominadas' },
  { value: '100%', label: 'Comprometimento' },
]

// Tags de papel que flutuam no card visual
const floatingBadges = [
  { text: '⚡ React + Node.js',   color: 'text-[#00C8FF]', border: 'border-[#0070F3]/40', delay: '0s',    top: '8%',   right: '8%'  },
  { text: '🐍 Python & Data',     color: 'text-[#7B9CC7]', border: 'border-white/15',     delay: '1.2s',  bottom: '20%', right: '4%'  },
  { text: '🤖 AI Integration',    color: 'text-[#7B9CC7]', border: 'border-white/15',     delay: '0.6s',  top: '28%',  left: '4%'   },
  { text: '📊 Dashboards',        color: 'text-[#F5A623]', border: 'border-[#F5A623]/30', delay: '1.8s',  bottom: '8%', left: '8%'  },
]

// Barras de habilidade dentro do card
const skillBars = [
  { label: 'Frontend', pct: 88 },
  { label: 'Backend',  pct: 85 },
  { label: 'Python / Data', pct: 80 },
  { label: 'IA & APIs', pct: 75 },
]

export default function Hero() {
  const heroRef = useRef(null)

  // Parallax sutil no orbe de fundo ao mover o mouse
  useEffect(() => {
    const handleMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY, currentTarget } = e
      const { width, height } = currentTarget.getBoundingClientRect()
      const xPct = (clientX / width  - 0.5) * 20
      const yPct = (clientY / height - 0.5) * 20
      heroRef.current.style.setProperty('--orb-x', `${xPct}px`)
      heroRef.current.style.setProperty('--orb-y', `${yPct}px`)
    }
    const el = heroRef.current?.parentElement
    el?.addEventListener('mousemove', handleMove)
    return () => el?.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">

      {/* ── Orbes de fundo ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#0070F3] blur-[120px]"
          style={{ opacity: 0.07, animation: 'glowPulse 5s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-[#00C8FF] blur-[100px]"
          style={{ opacity: 0.05, animation: 'glowPulse 6s ease-in-out infinite 1.5s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Coluna Esquerda: Conteúdo ─────────────── */}
          <div ref={heroRef}>

            {/* Badge de disponibilidade */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#0070F3]/10 border border-[#0070F3]/30 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00C8FF]" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
              <span className="text-sm text-[#00C8FF] font-medium tracking-wide">
                Disponível para projetos e oportunidades
              </span>
            </div>

            {/* Nome principal */}
            <h1 className="font-display font-extrabold leading-[1.05] mb-6">
              <span className="block text-5xl md:text-6xl lg:text-7xl text-[#EDF2FF]">
                Carlos André
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl gradient-text mt-1">
                Oliveira
              </span>
            </h1>

            {/* Tags de papel profissional */}
            <div className="flex flex-wrap gap-2 mb-7">
              {['Matemático', 'Full-Stack Dev', 'Python', 'Dados & IA'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-[#7B9CC7] font-body"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Descrição */}
            <p className="text-lg text-[#7B9CC7] leading-relaxed max-w-[520px] mb-10 font-body">
              Desenvolvo soluções digitais, sistemas web, plataformas financeiras, dashboards e
              automações com foco em{' '}
              <span className="text-[#EDF2FF] font-medium">
                eficiência, organização e impacto real
              </span>{' '}
              para empresas e profissionais.
            </p>

            {/* Botões de ação */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#projetos"
                className="px-7 py-3.5 bg-[#0070F3] hover:bg-[#0055CC] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,112,243,0.5)] hover:-translate-y-0.5 active:scale-95 text-sm"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-[#EDF2FF] font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-sm"
              >
                Entrar em Contato
              </a>
              <div className="flex gap-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl text-[#7B9CC7] hover:text-[#EDF2FF] transition-all duration-200 text-sm font-medium"
                >
                  GitHub ↗
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl text-[#7B9CC7] hover:text-[#EDF2FF] transition-all duration-200 text-sm font-medium"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="flex gap-8 border-t border-[#1B2C45]/60 pt-8">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl gradient-text">{stat.value}</div>
                  <div className="text-xs text-[#7B9CC7] mt-0.5 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Coluna Direita: Card Visual ───────────── */}
          <div className="hidden lg:flex justify-center items-center">
            <HeroCard />
          </div>
        </div>
      </div>

      {/* ── Indicador de Scroll ───────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'floatY 2.5s ease-in-out infinite' }}>
        <span className="text-[10px] text-[#3D5878] uppercase tracking-widest font-body">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#3D5878] to-transparent" />
      </div>
    </section>
  )
}

/* ─── Card Visual no lado direito do Hero ─────────────── */
function HeroCard() {
  return (
    <div className="relative w-[460px] h-[500px]">

      {/* Card central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[260px]">
        <div className="p-6 bg-[#0F1929]/90 backdrop-blur-xl border border-[#0070F3]/30 rounded-2xl shadow-[0_0_60px_rgba(0,112,243,0.2)]">

          {/* Avatar + nome */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0070F3] to-[#00C8FF] flex items-center justify-center font-display font-bold text-white text-sm shadow-[0_0_16px_rgba(0,112,243,0.5)]">
              CA
            </div>
            <div>
              <div className="text-sm font-semibold text-[#EDF2FF] font-display">Carlos André</div>
              <div className="text-xs text-[#7B9CC7] font-body">Full-Stack Developer</div>
            </div>
          </div>

          {/* Barras de habilidade */}
          <div className="space-y-3">
            {skillBars.map(skill => (
              <div key={skill.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#7B9CC7] font-body">{skill.label}</span>
                  <span className="text-[#0070F3] font-medium font-body">{skill.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0070F3] to-[#00C8FF] rounded-full"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges flutuantes */}
      {floatingBadges.map((badge, i) => (
        <div
          key={i}
          className={`absolute px-3.5 py-2 bg-[#0F1929]/90 border ${badge.border} rounded-full text-xs ${badge.color} font-medium font-body backdrop-blur-sm z-20`}
          style={{
            animation: `floatY ${5 + i * 0.8}s ease-in-out infinite`,
            animationDelay: badge.delay,
            top: badge.top,
            bottom: badge.bottom,
            left: badge.left,
            right: badge.right,
          }}
        >
          {badge.text}
        </div>
      ))}

      {/* Círculos decorativos */}
      <div
        className="absolute inset-8 rounded-full border border-[#0070F3]/10"
        style={{ animation: 'spinSlow 30s linear infinite' }}
      />
      <div className="absolute inset-4 rounded-full border border-white/[0.03]" />
    </div>
  )
}
