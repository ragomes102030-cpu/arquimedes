import React, { useEffect, useState } from 'react'
import { Wordmark } from './Marca'
import { baixar } from '../data/contato'

export const NAV: { label: string; href: string }[] = [
  { label: 'Agentes', href: '#agentes' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#fluxo' },
  { label: 'Perguntas', href: '#perguntas' },
]

export function useTema() {
  const [tema, setTema] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('arquimedes-tema') as 'dark' | 'light') || 'dark'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = tema
    localStorage.setItem('arquimedes-tema', tema)
  }, [tema])
  return { tema, alternar: () => setTema((t) => (t === 'dark' ? 'light' : 'dark')) }
}

export const Header: React.FC<{ tema: string; onAlternar: () => void }> = ({ tema, onAlternar }) => {
  const [aberto, setAberto] = useState(false)

  // trava o scroll do fundo enquanto o menu mobile esta aberto
  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  // fecha com Esc
  useEffect(() => {
    if (!aberto) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberto])


  return (
    <>
      <header className="hdr">
        <div className="wrap hdr-in">
          <a href="#topo" aria-label="Arquimedes — início">
            <Wordmark />
          </a>
          <nav className="nav">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <div className="hdr-actions">
            <a className="btn btn-ghost" href="#perguntas">Dúvidas</a>
            <a className="btn btn-primary" href={baixar.url} target="_blank" rel="noreferrer">Baixar</a>
            <button
              className="icon-btn"
              onClick={onAlternar}
              aria-label="Alternar tema claro e escuro"
              title="Alternar tema"
            >
              {tema === 'dark' ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
              )}
            </button>
            <button
              className="icon-btn so-mobile"
              onClick={() => setAberto(true)}
              aria-label="Abrir menu"
              aria-expanded={aberto}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="square"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/*
        A gaveta fica FORA do <header>: o header usa backdrop-filter, que cria
        bloco contentor para position:fixed. Dentro dele, a gaveta se
        posicionaria em relação ao header e empurraria a página na horizontal.
      */}
      <div className={`drawer${aberto ? ' on' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer-hd">
          <Wordmark />
          <button className="icon-btn" onClick={() => setAberto(false)} aria-label="Fechar menu">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="square"><path d="M5 5l14 14M19 5L5 19"/></svg>
          </button>
        </div>
        <nav className="drawer-nav">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setAberto(false)}>{n.label}</a>
          ))}
        </nav>
        <a className="btn btn-primary btn-lg drawer-cta" href={baixar.url} target="_blank" rel="noreferrer" onClick={() => setAberto(false)}>
          {baixar.rotulo}
        </a>
      </div>
      {aberto && <div className="drawer-veu" onClick={() => setAberto(false)} aria-hidden="true" />}
    </>
  )
}

/** Prancheta de obra: cronograma, orçamento e carimbo — o produto em uma tela. */
export const Prancheta: React.FC = () => {
  const tarefas = [
    { nome: 'Fundação', ini: 0, larg: 22, cls: 'gray' },
    { nome: 'Estrutura', ini: 18, larg: 34, cls: '' },
    { nome: 'Alvenaria', ini: 40, larg: 28, cls: '' },
    { nome: 'Instalações', ini: 56, larg: 24, cls: 'dim2' },
    { nome: 'Acabamento', ini: 74, larg: 24, cls: 'dim2' },
  ]
  return (
    <div className="prancha">
      <div className="prancha-hd">
        <b>Obra 024 · Residencial Aurora</b>
        <span className="dot"><i /><i /><i /></span>
      </div>

      <div className="prancha-body">
        <div className="prancha-col">
          <div className="p-label">
            <span>Cronograma · duração por serviço</span>
            <em>CPM</em>
          </div>
          <div className="gantt">
            {tarefas.map((t, i) => (
              <div className="g-row" key={t.nome}>
                <span>{t.nome}</span>
                <div className="g-track">
                  <div
                    className={`g-bar ${t.cls} fade`}
                    style={{
                      left: `${t.ini}%`,
                      width: `${t.larg}%`,
                      animationDelay: `${0.25 + i * 0.09}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-label" style={{ marginTop: 22 }}>
            <span>Orçamento · composição</span>
            <em>SINAPI</em>
          </div>
          <table className="tab">
            <thead>
              <tr><th>Serviço</th><th>Qtd</th><th>Total</th></tr>
            </thead>
            <tbody>
              <tr><td>Concreto usinado FCK 30</td><td>148 m³</td><td>R$ 74.220</td></tr>
              <tr><td>Aço CA-50 corte e dobra</td><td>12,4 t</td><td>R$ 96.720</td></tr>
              <tr><td>Alvenaria bloco cerâmico</td><td>842 m²</td><td>R$ 51.362</td></tr>
              <tr className="tot"><td>BDI 22,4% aplicado</td><td>—</td><td>R$ 271.900</td></tr>
            </tbody>
          </table>
        </div>

        <div className="prancha-col">
          <div className="p-label">
            <span>Curva S · avanço</span>
            <em>previsto × real</em>
          </div>
          <svg viewBox="0 0 220 132" width="100%" height="132" aria-label="Curva S de avanço físico, previsto contra realizado">
            <g stroke="currentColor" opacity="0.13">
              {[0, 1, 2, 3].map((i) => <line key={`h${i}`} x1="0" y1={8 + i * 38} x2="220" y2={8 + i * 38} />)}
              {[0, 1, 2, 3, 4, 5].map((i) => <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="122" />)}
            </g>
            {/* previsto — ciano (--arq-cyan) */}
            <path
              className="draw"
              d="M4 122 C 52 118, 78 104, 104 76 S 168 26, 216 12"
              fill="none" stroke="var(--accent)" strokeWidth="2.2" pathLength={1}
            />
            {/* realizado — azul (--arq-blue): segunda série, como no sistema dele */}
            <path
              className="draw"
              style={{ animationDelay: '.5s' }}
              d="M4 122 C 60 116, 92 96, 118 72 S 176 34, 216 22"
              fill="none" stroke="var(--accent-2)" strokeWidth="1.8" strokeDasharray="4 4" pathLength={1}
            />
            <circle cx="216" cy="12" r="3.4" fill="var(--accent)" className="fade" />
          </svg>

          <div className="p-label" style={{ marginTop: 16 }}>
            <span>Indicadores</span>
            <em>IDP · IDC</em>
          </div>
          <table className="tab">
            <tbody>
              <tr><td>Prazo (IDP)</td><td>0,94</td></tr>
              <tr><td>Custo (IDC)</td><td>1,03</td></tr>
              <tr><td>Medição acumulada</td><td>61,8%</td></tr>
              <tr className="tot"><td>Projeção de término</td><td>+11 dias</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <dl className="carimbo">
        <div><dt>Projeto</dt><dd>024/2026</dd></div>
        <div><dt>Responsável</dt><dd>Eng. titular <em>· CREA</em></dd></div>
        <div><dt>Data-base</dt><dd>Set/2026</dd></div>
        <div><dt>Revisão</dt><dd>R03</dd></div>
      </dl>
    </div>
  )
}
