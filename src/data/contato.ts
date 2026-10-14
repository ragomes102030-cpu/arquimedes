/**
 * Dados de contato e destino dos CTAs — em um lugar só.
 *
 * Enquanto não houver binário publicado, `download` aponta para o repositório,
 * que é um destino honesto. Quando o instalador existir, trocar só aqui.
 */
export const contato = {
  email: 'grafaelalexandre@gmail.com',
  /** Preencha para ligar o WhatsApp. Formato: 55 + DDD + numero, só dígitos. */
  whatsapp: '' as string,
  github: 'https://github.com/ragomes102030-cpu/arquimedes',
}

export const baixar = {
  /** Página de releases. Trocar por URL do instalador quando existir. */
  url: 'https://github.com/ragomes102030-cpu/arquimedes/releases',
  rotulo: 'Baixar o Arquimedes',
  /** Aviso honesto exibido perto do CTA enquanto não há instalador. */
  nota: 'Instalador em preparação — por enquanto, acompanhe o repositório.',
}

export const linkWhats = (texto: string) =>
  contato.whatsapp ? `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}` : ''

export const linkEmail = (assunto: string, corpo: string) =>
  `mailto:${contato.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`

/**
 * A plataforma online — o sistema em produção que o site apresenta.
 * Verificada por HTTP: /healthz e /readyz respondem, 37 tabelas.
 */
export const online = {
  url: 'https://plataforma-obras-api.onrender.com/obras',
  rotulo: 'Abrir a plataforma online',
  nota: 'Acesso por GitHub. Hoje restrito — a abertura para equipes está em construção.',
}
