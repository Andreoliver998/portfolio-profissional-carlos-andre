import { useEffect, useRef, useState } from 'react'
import githubIcon from '../assets/social/github.svg'
import gmailIcon from '../assets/social/gmail.svg'
import linkedinIcon from '../assets/social/linkedin.svg'
import whatsappIcon from '../assets/social/whatsapp.png'

// ── Constantes de contato ─────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "98985343385"

const contactLinks = [
  {
    icon: gmailIcon,
    label: 'E-mail',
    value: 'andre@paytech.app.br',
    detail: 'Respondido em até 24h',
    href: 'mailto:andre@paytech.app.br',
  },
  {
    icon: linkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/andré-oliver',
    detail: 'Conexão profissional',
    href: 'https://www.linkedin.com/in/andr%C3%A9-oliver-1bb173187',
  },
  {
    icon: githubIcon,
    label: 'GitHub',
    value: 'github.com/Andreoliver998',
    detail: 'Projetos e repositórios',
    href: 'https://github.com/Andreoliver998',
  },
  {
    icon: whatsappIcon,
    label: 'WhatsApp',
    value: '+55 (98) 9 XXXX-XXXX',
    detail: 'Contato direto e rápido',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
]

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting)
            entry.target.querySelectorAll('.reveal').forEach(el =>
              el.classList.add('visible'),
            )
        }),
      { threshold: 0.06 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError]     = useState('')
  const [opening, setOpening] = useState(false)
  useReveal(sectionRef)

  const handleChange = e => {
    setError('')
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Por favor, preencha todos os campos antes de enviar.')
      return
    }

    const messageText =
`Olá, André! Vim pelo seu portfólio profissional.

Nome: ${form.name}
E-mail: ${form.email}
Assunto: ${form.subject}

Mensagem:
${form.message}

Origem: Portfólio profissional — andre.paytech.app.br`

    const encoded     = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`

    setOpening(true)
    window.open(whatsappUrl, '_blank')

    setTimeout(() => {
      setOpening(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 2500)
  }

  return (
    <section id="contato" ref={sectionRef} className="py-28 bg-[#0B1220] relative overflow-hidden">

      {/* ── Glow de fundo ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#9DFF2C]/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#9DFF2C]/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Cabeçalho ─────────────────────────────────────────────────── */}
        <div className="reveal mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#9DFF2C]" />
            <span className="text-sm text-[#9DFF2C] font-medium uppercase tracking-widest font-body">
              Contato
            </span>
            <div className="w-8 h-px bg-[#9DFF2C]" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#EDF2FF] mb-4">
            Vamos Construir Algo Juntos?
          </h2>
          <p className="text-[#7B9CC7] max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Estou aberto a{' '}
            <span className="text-[#EDF2FF] font-medium">oportunidades</span>,{' '}
            <span className="text-[#EDF2FF] font-medium">parcerias</span>,{' '}
            <span className="text-[#EDF2FF] font-medium">projetos freelancers</span> e
            conexões profissionais na área de tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Cards de contato ─────────────────────────────────────────── */}
          <div className="space-y-3">
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${idx + 1} flex items-center gap-4 p-5 bg-[#0F1929] border border-[#1B2C45] rounded-xl hover:border-[#9DFF2C]/40 transition-all duration-250 group hover:-translate-y-0.5 hover:shadow-[0_4px_32px_rgba(157,255,44,0.08)]`}
              >
                {/* Ícone */}
                <div className="w-12 h-12 rounded-xl bg-[#9DFF2C]/10 border border-[#9DFF2C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#9DFF2C]/20 transition-colors duration-250 overflow-hidden">
                  <img
                    src={link.icon}
                    alt={`${link.label} icon`}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-[#3D5878] uppercase tracking-widest mb-0.5 font-body">
                    {link.label}
                  </div>
                  <div className="text-[#EDF2FF] font-medium truncate font-body text-sm">
                    {link.value}
                  </div>
                  <div className="text-xs text-[#7B9CC7] mt-0.5 font-body">
                    {link.detail}
                  </div>
                </div>

                <span className="text-[#3D5878] group-hover:text-[#9DFF2C] transition-colors duration-250 text-lg">
                  →
                </span>
              </a>
            ))}

            {/* Card de localização */}
            <div className="reveal reveal-delay-5 p-5 bg-[#0F1929] border border-[#1B2C45] rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <div className="text-sm font-medium text-[#EDF2FF] font-body">
                    Paulino Neves — Maranhão, Brasil
                  </div>
                  <div className="text-xs text-[#7B9CC7] font-body mt-0.5">
                    Disponível para trabalho remoto e oportunidades nacionais
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Formulário WhatsApp ───────────────────────────────────────── */}
          <div className="reveal reveal-delay-2">
            <div className="p-8 bg-[#0F1929] border border-[#1B2C45] rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-display font-bold text-xl text-[#EDF2FF]">
                  Envie uma mensagem
                </h3>
                <span className="text-xs px-2 py-1 bg-[#9DFF2C]/10 border border-[#9DFF2C]/25 text-[#9DFF2C] rounded-lg font-body tracking-wide">
                  via WhatsApp
                </span>
              </div>

              {/* Erro de validação */}
              {error && (
                <div className="mb-5 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-sm text-red-400 font-body flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs text-[#7B9CC7] mb-2 font-body uppercase tracking-wider">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-[#060A12] border border-[#1B2C45] rounded-xl text-[#EDF2FF] placeholder-[#3D5878] focus:outline-none focus:border-[#9DFF2C]/50 focus:ring-1 focus:ring-[#9DFF2C]/20 transition-all duration-200 text-sm font-body"
                    />
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className="block text-xs text-[#7B9CC7] mb-2 font-body uppercase tracking-wider">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@exemplo.com"
                      className="w-full px-4 py-3 bg-[#060A12] border border-[#1B2C45] rounded-xl text-[#EDF2FF] placeholder-[#3D5878] focus:outline-none focus:border-[#9DFF2C]/50 focus:ring-1 focus:ring-[#9DFF2C]/20 transition-all duration-200 text-sm font-body"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-xs text-[#7B9CC7] mb-2 font-body uppercase tracking-wider">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Ex: Proposta de projeto, Oportunidade de emprego..."
                    className="w-full px-4 py-3 bg-[#060A12] border border-[#1B2C45] rounded-xl text-[#EDF2FF] placeholder-[#3D5878] focus:outline-none focus:border-[#9DFF2C]/50 focus:ring-1 focus:ring-[#9DFF2C]/20 transition-all duration-200 text-sm font-body"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs text-[#7B9CC7] mb-2 font-body uppercase tracking-wider">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto, oportunidade ou proposta..."
                    className="w-full px-4 py-3 bg-[#060A12] border border-[#1B2C45] rounded-xl text-[#EDF2FF] placeholder-[#3D5878] focus:outline-none focus:border-[#9DFF2C]/50 focus:ring-1 focus:ring-[#9DFF2C]/20 transition-all duration-200 text-sm font-body resize-none"
                  />
                </div>

                {/* ── Botão Premium PayTech ──────────────────────────────── */}
                <button
                  type="submit"
                  disabled={opening}
                  className="
                    relative w-full py-4 overflow-hidden
                    bg-[#9DFF2C] text-[#080D06]
                    font-bold text-sm tracking-widest uppercase
                    rounded-xl font-body
                    transition-all duration-300
                    hover:bg-[#FB9B36] hover:text-[#0A0A0A]
                    hover:shadow-[0_0_48px_rgba(251,155,54,0.45)]
                    active:scale-[0.98]
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#9DFF2C] disabled:hover:shadow-none
                  "
                >
                  {/* Shimmer de hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full pointer-events-none"
                  />

                  {opening ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Abrindo WhatsApp...
                    </span>
                  ) : (
                    'Enviar Mensagem →'
                  )}
                </button>

                <p className="text-center text-xs text-[#3D5878] font-body">
                  Você será redirecionado para o WhatsApp com a mensagem já preenchida
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
