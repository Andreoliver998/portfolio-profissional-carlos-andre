import { useEffect, useRef } from 'react'

const differentials = [
  {
    icon: '∑',
    title: 'Raciocínio Lógico e Matemático',
    description:
      'Formação matemática aplicada à resolução de problemas técnicos complexos, análise estrutural e modelagem de sistemas com precisão e rigor.',
    border: 'hover:border-blue-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(0,112,243,0.15)]',
    accent: 'text-[#0070F3]',
  },
  {
    icon: '🎯',
    title: 'Visão Prática de Problemas Reais',
    description:
      'Capacidade de traduzir necessidades reais de negócios em soluções técnicas bem estruturadas, evitando complexidade desnecessária e entregando valor rápido.',
    border: 'hover:border-cyan-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(0,200,255,0.12)]',
    accent: 'text-cyan-400',
  },
  {
    icon: '💳',
    title: 'Experiência com Sistemas Financeiros',
    description:
      'Desenvolvimento de plataformas fintech, PDV, Open Finance e análise de dados financeiros com foco em segurança, confiabilidade e conformidade.',
    border: 'hover:border-amber-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(245,166,35,0.12)]',
    accent: 'text-amber-400',
  },
  {
    icon: '⚡',
    title: 'Domínio Full-Stack Completo',
    description:
      'Capacidade de desenvolver o ciclo completo de uma aplicação — do design de interface ao banco de dados e deploy em produção — com autonomia total.',
    border: 'hover:border-emerald-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(16,185,129,0.12)]',
    accent: 'text-emerald-400',
  },
  {
    icon: '📚',
    title: 'Aprendizado Rápido e Aplicado',
    description:
      'Habilidade de absorver novas tecnologias e aplicá-las rapidamente em projetos reais, mantendo padrões de qualidade profissional e sem curva longa.',
    border: 'hover:border-purple-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(139,92,246,0.12)]',
    accent: 'text-purple-400',
  },
  {
    icon: '📋',
    title: 'Organização e Documentação',
    description:
      'Comprometimento com código limpo, bem organizado e estruturado para ser mantido e evoluído por qualquer equipe — sem acúmulo de dívida técnica.',
    border: 'hover:border-blue-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(0,112,243,0.15)]',
    accent: 'text-blue-400',
  },
  {
    icon: '🏢',
    title: 'Foco em Soluções para Empresas',
    description:
      'Entrega de software com visão de produto, focado em eficiência operacional, escalabilidade e impacto direto no negócio, não apenas no código.',
    border: 'hover:border-cyan-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(0,200,255,0.12)]',
    accent: 'text-cyan-400',
  },
  {
    icon: '🚀',
    title: 'Deploy e Produção Real',
    description:
      'Experiência concreta com VPS, NGINX, PM2, SSL/HTTPS e monitoramento — sistemas não apenas desenvolvidos, mas efetivamente colocados e mantidos em produção.',
    border: 'hover:border-emerald-500/50',
    glow: 'hover:shadow-[0_4px_30px_rgba(16,185,129,0.12)]',
    accent: 'text-emerald-400',
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

export default function Differentials() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="diferenciais" ref={sectionRef} className="py-28 relative">

      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0070F3]/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Cabeçalho ─────────────────────────────── */}
        <div className="reveal mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#0070F3]" />
            <span className="text-sm text-[#0070F3] font-medium uppercase tracking-widest font-body">
              Diferenciais
            </span>
            <div className="w-8 h-px bg-[#0070F3]" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#EDF2FF] mb-4">
            Por que Carlos André?
          </h2>
          <p className="text-[#7B9CC7] max-w-2xl mx-auto font-body text-base">
            Conjunto de habilidades técnicas e comportamentais que me diferenciam como
            profissional de tecnologia orientado a resultados.
          </p>
        </div>

        {/* ── Grid de diferenciais ──────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentials.map((item, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${(idx % 4) + 1} p-6 bg-[#0F1929] border border-[#1B2C45] rounded-2xl transition-all duration-300 group ${item.border} ${item.glow} hover:-translate-y-1`}
            >
              {/* Ícone */}
              <div className={`font-display font-bold text-3xl mb-4 ${item.accent}`}>
                {item.icon}
              </div>

              {/* Título */}
              <h3 className="font-display font-semibold text-[15px] text-[#EDF2FF] mb-3 leading-snug group-hover:text-white transition-colors">
                {item.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-[#7B9CC7] leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
