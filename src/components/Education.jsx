import { useEffect, useRef } from 'react'

const educationItems = [
  {
    degree: 'Matemática',
    institution: 'Formação Acadêmica',
    period: 'Concluído',
    description:
      'Base sólida em raciocínio lógico, análise matemática, modelagem e resolução de problemas complexos — fundamentos essenciais para engenharia de software e ciência de dados.',
    tags: ['Álgebra Linear', 'Cálculo', 'Estatística', 'Lógica Matemática'],
    icon: '∑',
    accentClass: 'text-blue-400',
    bgClass:     'bg-blue-500/10',
    borderClass: 'border-blue-500/40',
    badgeClass:  'bg-blue-500/10 border-blue-500/30 text-blue-400',
    dotClass:    'bg-blue-500',
  },
  {
    degree: 'Engenharia de Software',
    institution: 'Formação Técnica Especializada',
    period: 'Em andamento',
    description:
      'Fundamentos avançados de desenvolvimento de sistemas, arquitetura de software, padrões de projeto, testes, metodologias ágeis e construção de produtos digitais escaláveis.',
    tags: ['SOLID', 'Clean Architecture', 'Design Patterns', 'Agile / Scrum'],
    icon: '⚙',
    accentClass: 'text-cyan-400',
    bgClass:     'bg-cyan-500/10',
    borderClass: 'border-cyan-500/40',
    badgeClass:  'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    dotClass:    'bg-cyan-400',
  },
  {
    degree: 'Especialização em Inteligência Artificial',
    institution: 'Formação Complementar Avançada',
    period: 'Em andamento',
    description:
      'Estudo de algoritmos de aprendizado de máquina, integração de modelos de linguagem (LLMs), automação inteligente e desenvolvimento de sistemas que ampliam a tomada de decisão.',
    tags: ['Machine Learning', 'LLMs', 'OpenAI API', 'Automação com IA'],
    icon: '🧠',
    accentClass: 'text-purple-400',
    bgClass:     'bg-purple-500/10',
    borderClass: 'border-purple-500/40',
    badgeClass:  'bg-purple-500/10 border-purple-500/30 text-purple-400',
    dotClass:    'bg-purple-400',
  },
  {
    degree: 'Desenvolvimento Web, Python & Infraestrutura',
    institution: 'Estudos Contínuos & Projetos Práticos',
    period: 'Contínuo',
    description:
      'Formação prática e contínua através de projetos reais em produção, cursos especializados e construção de sistemas fullstack — abrangendo frontend, backend, dados e DevOps.',
    tags: ['React', 'Node.js', 'Python', 'VPS / Linux', 'MongoDB'],
    icon: '🚀',
    accentClass: 'text-amber-400',
    bgClass:     'bg-amber-500/10',
    borderClass: 'border-amber-500/40',
    badgeClass:  'bg-amber-500/10 border-amber-500/30 text-amber-400',
    dotClass:    'bg-amber-400',
  },
]

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

export default function Education() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="formacao" ref={sectionRef} className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Cabeçalho ─────────────────────────────── */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#0070F3]" />
            <span className="text-sm text-[#0070F3] font-medium uppercase tracking-widest font-body">
              Formação
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#EDF2FF]">
            Trajetória Acadêmica
          </h2>
          <p className="mt-4 text-[#7B9CC7] max-w-xl text-base font-body">
            Uma base sólida em matemática, engenharia e prática contínua por meio de
            projetos reais em produção.
          </p>
        </div>

        {/* ── Timeline ──────────────────────────────── */}
        <div className="relative">

          {/* Linha vertical decorativa */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-[#0070F3] via-[#1B2C45] to-transparent" />

          <div className="space-y-5">
            {educationItems.map((item, idx) => (
              <div
                key={idx}
                className={`reveal reveal-delay-${idx + 1} relative md:pl-24`}
              >
                {/* Ponto na linha do tempo */}
                <div
                  className={`hidden md:flex absolute left-4 top-7 w-8 h-8 rounded-full ${item.bgClass} border-2 ${item.borderClass} items-center justify-center z-10`}
                >
                  <span className={`font-display font-bold text-sm ${item.accentClass}`}>
                    {typeof item.icon === 'string' && item.icon.length <= 2 ? item.icon : '●'}
                  </span>
                </div>

                {/* Card */}
                <div className="p-7 bg-[#0F1929] border border-[#1B2C45] rounded-2xl hover:border-[#0070F3]/30 transition-all duration-300 card-hover group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#EDF2FF] group-hover:text-white transition-colors">
                        {item.degree}
                      </h3>
                      <p className={`text-sm font-medium mt-1 ${item.accentClass} font-body`}>
                        {item.institution}
                      </p>
                    </div>
                    <span className={`shrink-0 self-start px-3 py-1 text-xs rounded-full border font-medium ${item.badgeClass} font-body`}>
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#7B9CC7] leading-relaxed mb-5 font-body">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-[#7B9CC7] font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
