import { useEffect, useRef } from 'react'
import { skillCategories } from '../data/skills.js'

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.06 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function Skills() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="habilidades" ref={sectionRef} className="py-20 relative">

      {/* Decoração de fundo sutil */}
      <div className="absolute inset-0 dot-bg pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Cabeçalho ─────────────────────────────── */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#0070F3]" />
            <span className="text-sm text-[#0070F3] font-medium uppercase tracking-widest font-body">
              Stack técnica
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#EDF2FF]">
            Habilidades Técnicas
          </h2>
          <p className="mt-4 text-[#7B9CC7] max-w-xl text-base font-body">
            Ferramentas e tecnologias que uso no dia a dia para construir sistemas
            completos — do banco de dados à interface do usuário.
          </p>
        </div>

        {/* ── Grid de categorias ────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`reveal reveal-delay-${(idx % 3) + 1} p-6 bg-[#0F1929] border border-[#1B2C45] rounded-2xl hover:border-[#0070F3]/35 transition-all duration-300 card-hover group`}
            >
              {/* Header da categoria */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${cat.bgClass} border ${cat.borderClass} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className={`font-display font-bold text-base ${cat.accentClass}`}>
                  {cat.title}
                </h3>
              </div>

              {/* Tags das skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-xs rounded-lg border ${cat.tagClass} font-medium font-body transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Banner extra: mentalidade de engenheiro ── */}
        <div className="reveal mt-10 p-8 bg-gradient-to-r from-[#0070F3]/10 to-[#00C8FF]/5 border border-[#0070F3]/25 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-4xl">🧠</div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-[#EDF2FF] mb-2">
                Mentalidade de Engenharia
              </h3>
              <p className="text-sm text-[#7B9CC7] font-body leading-relaxed">
                Além das tecnologias, aplico princípios de{' '}
                <span className="text-[#EDF2FF] font-medium">Clean Architecture</span>,{' '}
                <span className="text-[#EDF2FF] font-medium">SOLID</span>,{' '}
                <span className="text-[#EDF2FF] font-medium">modularização</span> e{' '}
                <span className="text-[#EDF2FF] font-medium">segurança por padrão</span> em todos os
                projetos — garantindo código sustentável, escalável e fácil de manter em produção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
