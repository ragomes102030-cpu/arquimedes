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
  /** Enquanto não houver binário, isto é status, não ação. Ver `emConstrucao`. */
  url: 'https://github.com/ragomes102030-cpu/arquimedes/releases',
  rotulo: 'Desktop em preparação',
  /** Quando true, a interface mostra status em vez de botão que leva a lugar nenhum. */
  emConstrucao: true,
  /** Aviso honesto exibido perto do CTA enquanto não há instalador. */
  nota: 'O instalador do desktop ainda não está publicado. A plataforma online já funciona, e o agente de campo atende no Telegram.',
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
  url: 'https://plataforma-obras.dockhosting.dev/obras',
  rotulo: 'Abrir a plataforma online',
  nota: 'Acesso por GitHub. Hoje restrito — a abertura para equipes está em construção.',
}
