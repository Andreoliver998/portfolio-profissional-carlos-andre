// ── Fonte única de links sociais ─────────────────────────────────────────────
// Para alterar qualquer link, edite apenas: src/data/socialLinks.js
import { socialLinks as SOCIAL } from '../data/socialLinks.js'

// Array para o .map() do footer — alimentado pela fonte centralizada
const socialLinksArr = [
  { label: 'GitHub',    href: SOCIAL.github    },
  { label: 'LinkedIn',  href: SOCIAL.linkedin  },
  { label: 'Instagram', href: SOCIAL.instagram },
  { label: 'WhatsApp',  href: SOCIAL.whatsapp  },
]

const navLinks = [
  { label: 'Sobre',       href: '#sobre'       },
  { label: 'Projetos',    href: '#projetos'     },
  { label: 'Habilidades', href: '#habilidades'  },
  { label: 'Formação',    href: '#formacao'     },
  { label: 'Contato',     href: '#contato'      },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const whatsappCta = `${SOCIAL.whatsapp}?text=${encodeURIComponent(
    'Olá, André! Vim pelo seu portfólio e gostaria de conversar.',
  )}`

  return (
    <footer className="border-t border-[#1B2C45]/70 bg-[#060A12]">

      {/* ── Corpo principal do footer ───────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* ── Marca ─────────────────────────────────── */}
          <div>
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className="font-display font-extrabold text-xl text-[#EDF2FF]">André</span>
              <span className="font-display font-extrabold text-xl text-[#9DFF2C]">.</span>
              <span className="font-body text-sm text-[#7B9CC7] ml-1">dev</span>
            </div>
            <p className="text-sm text-[#3D5878] font-body leading-relaxed max-w-[220px]">
              Matemático · Desenvolvedor Full-Stack · Python &amp; Inteligência Artificial
            </p>

            {/* Status de disponibilidade */}
            <div className="flex items-center gap-2 mt-5">
              <span
                className="w-2 h-2 rounded-full bg-green-400 shrink-0"
                style={{ animation: 'glowPulse 2.5s ease-in-out infinite' }}
              />
              <span className="text-xs text-[#7B9CC7] font-body">
                Disponível para projetos em {year}
              </span>
            </div>
          </div>

          {/* ── Navegação rápida ─────────────────────── */}
          <div>
            <h4 className="text-xs text-[#3D5878] uppercase tracking-widest mb-4 font-body">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#7B9CC7] hover:text-[#EDF2FF] transition-colors font-body w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Redes sociais ─────────────────────────── */}
          <div>
            <h4 className="text-xs text-[#3D5878] uppercase tracking-widest mb-4 font-body">
              Redes sociais
            </h4>
            <div className="flex flex-col gap-2.5">
              {socialLinksArr.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#7B9CC7] hover:text-[#9DFF2C] transition-colors duration-200 font-body group w-fit"
                >
                  <span className="w-4 h-px bg-[#3D5878] group-hover:bg-[#9DFF2C] transition-colors duration-200" />
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA — abre WhatsApp com mensagem pré-preenchida */}
            <a
              href={whatsappCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#9DFF2C]/10 hover:bg-[#9DFF2C]/20 border border-[#9DFF2C]/25 rounded-xl text-sm text-[#9DFF2C] font-medium transition-all duration-200 font-body hover:shadow-[0_0_20px_rgba(157,255,44,0.15)]"
            >
              Fale comigo →
            </a>
          </div>

        </div>
      </div>

      {/* ── Barra de copyright ──────────────────────────── */}
      <div className="border-t border-[#1B2C45]/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#3D5878] font-body">
            © {year} Carlos André Almeida de Oliveira. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#3D5878] font-body">
            Desenvolvido com React · Vite · Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  )
}
