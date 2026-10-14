import React from 'react'
import { Marca } from './Marca'

export { Marca }

/** Links do rodapé — as duas páginas compartilham. */
export const RODAPE: { label: string; href: string }[] = [
  { label: 'Ecossistema', href: 'index.html#ecossistema' },
  { label: 'Demonstração', href: 'demo/' },
  { label: 'Agente de campo', href: 'guia/' },
  { label: 'Agentes', href: 'index.html#agentes' },
  { label: 'Recursos', href: 'index.html#recursos' },
  { label: 'Perguntas', href: 'index.html#perguntas' },
  { label: 'Contato', href: 'index.html#contato' },
]

export const Footer: React.FC = () => (
  <footer>
    <div className="wrap foot">
      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Marca size={22} />
        <span>Arquimedes · engenharia &amp; obras</span>
      </span>
      <nav className="foot-links">
        {RODAPE.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <span>Motor aberto · licença Apache-2.0</span>
    </div>
  </footer>
)
