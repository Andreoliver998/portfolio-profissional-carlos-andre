import { useEffect, useRef } from 'react'

const highlights = [
  { icon: '⚡', value: '4+',    label: 'Sistemas em produção'  },
  { icon: '🛠️', value: '15+',   label: 'Tecnologias dominadas' },
  { icon: '📐', value: 'Sólida', label: 'Base matemática'       },
  { icon: '🎯', value: '100%',  label: 'Foco em resultados'    },
]

const areasTags = [
  'Matemática Aplicada', 'Engenharia de Software',
  'APIs REST', 'Open Finance', 'Machine Learning',
  'Análise Quantitativa', 'Sistemas Financeiros',
]

// Hook reutilizável para animações de scroll
function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.08 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="sobre" ref={sectionRef} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Cabeçalho da seção ────────────────────── */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#0070F3]" />
            <span className="text-sm text-[#0070F3] font-medium uppercase tracking-widest font-body">
              Sobre mim
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#EDF2FF]">
            Quem é Carlos André?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Texto principal ───────────────────── */}
          <div className="space-y-6">
            <p className="reveal reveal-delay-1 text-[17px] text-[#7B9CC7] leading-relaxed font-body">
              Sou{' '}
              <span className="text-[#EDF2FF] font-medium">
                Matemático e Desenvolvedor Full-Stack
              </span>
              , com formação em Engenharia de Software e especialização em Inteligência Artificial.
              Tenho experiência prática no desenvolvimento de sistemas web, plataformas
              financeiras, dashboards e automações voltadas para organização, análise de dados e
              tomada de decisão estratégica.
            </p>

            <p className="reveal reveal-delay-2 text-[17px] text-[#7B9CC7] leading-relaxed font-body">
              Minha trajetória une{' '}
              <span className="text-[#EDF2FF] font-medium">raciocínio matemático rigoroso</span>{' '}
              com visão prática de problemas reais e desenvolvimento de software profissional.
              Busco criar soluções úteis, bem estruturadas e preparadas para crescer — sempre
              com foco em{' '}
              <span className="text-[#EDF2FF] font-medium">
                clareza, desempenho, segurança e experiência do usuário.
              </span>
            </p>

            <p className="reveal reveal-delay-3 text-[17px] text-[#7B9CC7] leading-relaxed font-body">
              Também tenho vivência prática em áreas operacionais e técnicas, o que fortalece
              minha visão sobre processos, produtividade, gestão e resolução de problemas no
              mundo real — transformando necessidades de negócio em produtos digitais funcionais
              e de alto valor.
            </p>

            {/* Tags de áreas de expertise */}
            <div className="reveal reveal-delay-4 pt-3">
              <p className="text-xs text-[#3D5878] uppercase tracking-widest mb-3 font-body">
                Áreas de expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {areasTags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm bg-[#0070F3]/10 border border-[#0070F3]/20 text-[#0070F3] rounded-lg font-medium font-body hover:bg-[#0070F3]/20 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Grid de destaques numéricos ────────── */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal reveal-delay-${i + 1} p-6 bg-[#0F1929] border border-[#1B2C45] rounded-2xl hover:border-[#0070F3]/40 transition-all duration-300 card-hover group`}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="font-display font-bold text-3xl gradient-text mb-1.5">
                    {item.value}
                  </div>
                  <div className="text-sm text-[#7B9CC7] font-body">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Card de localização */}
            <div className="reveal reveal-delay-5 p-5 bg-[#0F1929] border border-[#1B2C45] rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0070F3]/10 border border-[#0070F3]/20 flex items-center justify-center text-xl shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-xs text-[#3D5878] uppercase tracking-wider mb-0.5 font-body">
                    Localização
                  </div>
                  <div className="font-medium text-[#EDF2FF] font-body">
                    Paulino Neves — Maranhão, Brasil
                  </div>
                  <div className="text-xs text-[#7B9CC7] mt-0.5 font-body">
                    Disponível para trabalho remoto
                  </div>
                </div>
              </div>
            </div>

            {/* Card de status */}
            <div className="reveal reveal-delay-6 p-5 bg-[#0F1929] border border-[#1B2C45] rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
                  <span className="text-sm font-medium text-[#EDF2FF] font-body">
                    Disponível para novas oportunidades
                  </span>
                </div>
                <span className="text-xs text-[#3D5878] font-body">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
