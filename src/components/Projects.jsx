import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects.js'

// ── Status badge config (sem azul) ───────────────────────────────────────────
const statusStyles = {
  green:  { badge: 'bg-green-500/10 border-green-500/30 text-green-400',        dot: 'bg-green-400'   },
  yellow: { badge: 'bg-[#FB9B36]/10 border-[#FB9B36]/30 text-[#FB9B36]',        dot: 'bg-[#FB9B36]'   },
  neutral:{ badge: 'bg-white/5 border-white/10 text-[#7B9CC7]',                 dot: 'bg-[#7B9CC7]'   },
}

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.05 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function Projects() {
  const sectionRef          = useRef(null)
  const [expanded, setExpanded] = useState(null)
  useReveal(sectionRef)

  return (
    <section id="projetos" ref={sectionRef} className="py-28 bg-[#0B1220] relative overflow-hidden">

      {/* ── Glow de fundo sutil ──────────────────────────────────────── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9DFF2C]/[0.025] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FB9B36]/[0.025] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Cabeçalho ───────────────────────────────────────────────── */}
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#9DFF2C]" />
              <span className="text-sm text-[#9DFF2C] font-medium uppercase tracking-widest font-body">
                Portfólio
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#EDF2FF]">
              Projetos Principais
            </h2>
          </div>
          <p className="text-[#7B9CC7] text-sm max-w-xs font-body leading-relaxed">
            Projetos reais em produção envolvendo fintech, PDV, educação,
            automação, gestão e análise de dados.
          </p>
        </div>

        {/* ── Grid de projetos ─────────────────────────────────────────
             Mobile  : 1 coluna
             Tablet  : 2 colunas — card 0 featured (col-span-2)
             Desktop : 3 colunas iguais
        ─────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const status     = statusStyles[project.statusColor] ?? statusStyles.neutral
            const isExpanded = expanded === project.id
            // Primeiro card é "featured" no tablet (ocupa 2 colunas)
            const isFeatured = idx === 0

            return (
              <article
                key={project.id}
                className={[
                  'reveal',
                  `reveal-delay-${idx + 1}`,
                  'group relative bg-[#0F1929] border border-[#1B2C45] rounded-2xl overflow-hidden',
                  'transition-all duration-300',
                  'hover:border-[#9DFF2C]/35 hover:shadow-[0_8px_48px_rgba(157,255,44,0.07)]',
                  'hover:-translate-y-0.5',
                  project.highlight ? 'ring-1 ring-[#9DFF2C]/10' : '',
                  // featured tablet span
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : '',
                ].join(' ')}
              >
                {/* ── Barra colorida no topo ─────────────────────────── */}
                <div className={`h-[3px] bg-gradient-to-r ${project.gradient}`} />

                <div className={[
                  'p-7 flex flex-col h-full',
                  // No tablet, card featured usa layout horizontal interno
                  isFeatured ? 'md:grid md:grid-cols-2 md:gap-7 lg:flex lg:flex-col' : '',
                ].join(' ')}>

                  {/* ── Coluna esquerda (sempre visível) ──────────────── */}
                  <div className="flex flex-col">

                    {/* Cabeçalho do card */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex-1 min-w-0">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-2.5">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full border ${status.badge}`}>
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${status.dot}`} />
                            {project.status}
                          </span>
                          <span className="text-xs text-[#3D5878] font-body">{project.category}</span>
                        </div>

                        <h3 className="font-display font-bold text-xl text-[#EDF2FF] group-hover:text-white transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#7B9CC7] mt-1 font-body">{project.subtitle}</p>
                      </div>

                      {/* Número decorativo */}
                      <span className="font-display font-extrabold text-4xl text-[#1B2C45] group-hover:text-[#9DFF2C]/10 transition-colors duration-300 shrink-0 select-none leading-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Descrição */}
                    <p className="text-sm text-[#7B9CC7] leading-relaxed mb-5 font-body">
                      {project.description}
                    </p>

                    {/* Stack de tecnologias */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-white/5 border border-white/[0.07] rounded-lg text-[#7B9CC7] font-body hover:text-[#EDF2FF] hover:bg-white/10 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Coluna direita no featured / continuação normal ── */}
                  <div className="flex flex-col">

                    {/* Funcionalidades expandidas */}
                    {isExpanded && (
                      <div className="mb-5 p-4 bg-[#060A12]/70 rounded-xl border border-[#1B2C45] animate-in">
                        <p className="text-[10px] text-[#3D5878] uppercase tracking-widest mb-3 font-body">
                          Funcionalidades
                        </p>
                        <ul className="space-y-2">
                          {project.features.map(feat => (
                            <li key={feat} className="flex items-start gap-2.5">
                              <span className="text-[#9DFF2C] text-xs mt-0.5 shrink-0">▶</span>
                              <span className="text-xs text-[#7B9CC7] font-body leading-relaxed">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* ── Ações ─────────────────────────────────────────── */}
                    <div className="flex items-center gap-3 pt-5 border-t border-[#1B2C45] mt-auto">
                      <button
                        onClick={() => setExpanded(isExpanded ? null : project.id)}
                        className="text-sm text-[#9DFF2C] hover:text-[#FB9B36] font-medium transition-colors duration-200 font-body"
                      >
                        {isExpanded ? '← Menos' : 'Ver detalhes →'}
                      </button>

                      <div className="ml-auto flex gap-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#7B9CC7] hover:text-[#EDF2FF] transition-colors duration-200 font-body"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-xs bg-[#9DFF2C]/10 hover:bg-[#9DFF2C]/20 border border-[#9DFF2C]/25 rounded-lg text-[#9DFF2C] hover:text-white transition-all duration-200 font-body"
                        >
                          {project.links.demoLabel ?? 'Demo ↗'}
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
