import React from 'react'
import './../styles.css'

/** Trechos de "obra em movimento" e "cálculos ao vivo". Cada quadro da grade
 *  se repete duas vezes dentro de um .strip que ocupa 50% do contêiner;
 *  o .bg-streams desliza -50% em loop contínuo, sem travamento.
 *
 *  Ordem: etapas da obra -> indicadores financeiros/planejamento. */
const ITEMS = [
  { name: 'Fundação',       sub: 'CPM · prazo ideal' },
  { name: 'Estrutura',      sub: 'CPM · prazo ideal' },
  { name: 'Alvenaria',      sub: 'CPM · prazo ideal' },
  { name: 'Instalações',    sub: 'CPM · prazo ideal' },
  { name: 'Acabamento',     sub: 'CPM · prazo ideal' },
  { name: 'Ponte MCP',      sub: 'Conectividade' },
  { name: 'IDP 0,94',       sub: 'Prazo ideal' },
  { name: 'IDC 1,03',       sub: 'Custo vs orçado' },
  { name: '61,8%',          sub: 'Avanço acumulado' },
  { name: '+11 dias',       sub: 'Projeção de término' },
] as const

/** Pop-ações flutuantes de engenharia: tijolos, barras, folhas de cotação. */
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  d: `${(i * 0.53 + 0.11) % 4}s`,
  dur: `${(i * 2.9 + 11) % 24}s`,
}))

export const HeroBackground: React.FC = () => {
  return (
    <div className="hero-bg">
      {/* grade de cotação moída, fundo que respira */}
      <div className="bg-grid" aria-hidden="true" />

      {/* fluxo contínuo: etapas da obra e cálculos do projeto */}
      <div className="bg-streams">
        {Array.from({ length: 2 }, (_, row) => (
          <div key={`row-${row}`} className={`bg-row ${row === 1 ? 'bg-row-second' : ''}`}>
            <div className="bg-strip">
              {ITEMS.map((it) => (
                <span key={it.name} className="item">
                  <span className="dot" aria-hidden="true" />
                  <span className="name">{it.name}</span>
                  <span className="sub">{it.sub}</span>
                </span>
              ))}
            </div>
            <div className="bg-strip">
              {ITEMS.map((it) => (
                <span key={it.name} className="item">
                  <span className="dot" aria-hidden="true" />
                  <span className="name">{it.name}</span>
                  <span className="sub">{it.sub}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* indicadores soltos, sem tocar no conteúdo */}
      <div className="bg-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="p"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.d,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>
    </div>
  )
}
