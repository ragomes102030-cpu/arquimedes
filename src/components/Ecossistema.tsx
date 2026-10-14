import React, { useEffect, useRef } from 'react'
import { pecas, ciclo, duvidasEcossistema, servicos } from '../data/ecossistema'
import { Glifo } from './Glifos'

function useRevelar() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 },
    )
    el.querySelectorAll('.rv').forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
  return ref
}

/** Glifos próprios das três peças do ecossistema. */
const GlifoPeca: React.FC<{ id: string; size?: number }> = ({ id, size = 30 }) => {
  const S = { fill: 'none', stroke: 'var(--accent)', strokeWidth: 1.6, strokeLinecap: 'square' as const }
  const g: Record<string, React.ReactNode> = {
    // desktop: monitor com barra de tarefas
    desktop: (
      <>
        <rect x="2.5" y="4.5" width="19" height="13" {...S} />
        <path d="M8.5 21h7M12 17.5V21M2.5 14.5h19" {...S} strokeWidth={1.2} />
      </>
    ),
    // online: nuvem com nós ligados
    online: (
      <>
        <path d="M6.5 16.5a4 4 0 0 1 .5-8 5.5 5.5 0 0 1 10.5 1.4 3.5 3.5 0 0 1-.5 6.6z" {...S} />
        <circle cx="8" cy="20.5" r="1.6" {...S} strokeWidth={1.3} />
        <circle cx="16" cy="20.5" r="1.6" {...S} strokeWidth={1.3} />
        <path d="M8 18.9v-2.4M16 18.9v-2.4" {...S} strokeWidth={1.2} />
      </>
    ),
    // ponte: dois pilares e o vão
    ponte: (
      <>
        <path d="M2.5 9.5h19M2.5 18.5h19" {...S} />
        <path d="M7 9.5v9M17 9.5v9" {...S} strokeWidth={1.4} />
        <path d="M7 13.5h10M9.5 9.5 7 13.5M14.5 9.5l2.5 4" {...S} strokeWidth={1.2} />
      </>
    ),
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" role="presentation">
      {g[id] ?? g.desktop}
    </svg>
  )
}

export const Ecossistema: React.FC = () => {
  const ref = useRevelar()
  return (
    <section className="sec sec-tint" id="ecossistema" ref={ref}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="dim"><span>O ecossistema</span></div>
          <h2 style={{ marginTop: 22 }}>Três peças. Uma obra só.</h2>
          <p>
            Não são produtos separados que por acaso têm o mesmo nome. O desktop é onde você
            planeja, a plataforma online é onde a obra vive, e os servidores MCP são a ponte
            entre os dois — o escopo atravessa sem redigitação.
          </p>
        </div>

        <div className="pecas rv">
          {pecas.map((p) => (
            <article className="peca" key={p.id} data-estado={p.estado}>
              <header className="peca-hd">
                <span className="peca-ic"><GlifoPeca id={p.id} /></span>
                <span className={`selo ${p.estado}`}>{p.notaEstado}</span>
              </header>
              <span className="peca-tipo">{p.tipo}</span>
              <h3>{p.nome}</h3>
              <p className="peca-resumo">{p.resumo}</p>
              <ul className="peca-lista">
                {p.faz.map((f) => <li key={f}>{f}</li>)}
              </ul>
              {p.url && (
                <a className="peca-link" href={p.url} target="_blank" rel="noreferrer">
                  {p.urlRotulo} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Ciclo: React.FC = () => {
  const ref = useRevelar()
  const ondeRotulo: Record<string, string> = {
    desktop: 'no desktop',
    ponte: 'pela ponte',
    online: 'na plataforma',
  }
  return (
    <section className="sec" id="ciclo" ref={ref}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="dim"><span>Como conversam</span></div>
          <h2 style={{ marginTop: 22 }}>O escopo vai e volta, sem redigitar.</h2>
          <p>
            O ciclo normal de uma obra planejada no ecossistema. Cada volta fecha mais apertada:
            o previsto encosta no realizado.
          </p>
        </div>
        <ol className="ciclo rv">
          {ciclo.map((c, i) => (
            <li className={`ciclo-item onde-${c.onde}`} key={c.titulo}>
              <span className="ciclo-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="ciclo-onde">{ondeRotulo[c.onde]}</span>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </li>
          ))}
        </ol>

        {/* o retorno fecha o laço: sem isso o texto promete ciclo e o desenho mostra reta */}
        <div className="ciclo-retorno rv" aria-hidden="true">
          <svg viewBox="0 0 1000 44" preserveAspectRatio="none" height="44" width="100%">
            <path
              d="M994 6 H6"
              fill="none" stroke="var(--accent-2)" strokeWidth="1.6"
              strokeDasharray="6 6" opacity="0.75"
            />
            <path
              d="M16 6 6 6 6 16"
              fill="none" stroke="var(--accent-2)" strokeWidth="1.6"
              strokeLinecap="square" strokeLinejoin="round" opacity="0.75"
            />
          </svg>
          <span className="ciclo-retorno-lbl">o realizado volta e o plano se refaz</span>
        </div>

        <div className="servicos rv">
          <div className="dim"><span>Serviços no ar</span></div>
          <div className="servicos-lista">
            {servicos.map((s) => (
              <a key={s.nome} href={s.url} target="_blank" rel="noreferrer" className="servico">
                <span className="servico-led" />
                <b>{s.nome}</b>
                <span className="servico-tipo">{s.tipo}</span>
              </a>
            ))}
          </div>
          <p className="servicos-nota">
            Os 42 comandos de domínio estão ativos e respondendo — não é roadmap, é o que está
            no ar agora.
          </p>
        </div>
      </div>
    </section>
  )
}

export const DuvidasEcossistema: React.FC = () => (
  <section className="sec sec-tint" id="perguntas-ecossistema">
    <div className="wrap">
      <div className="sec-hd">
        <div className="dim"><span>Sobre usar os dois</span></div>
        <h2 style={{ marginTop: 22 }}>Preciso dos dois produtos?</h2>
      </div>
      <div className="faq">
        {duvidasEcossistema.map((d) => (
          <details key={d.q}>
            <summary>{d.q}</summary>
            <p>{d.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

/** Faixa de agentes usada no rodapé das seções — reaproveita os glifos. */
export const AgentesMini: React.FC<{ ids: string[] }> = ({ ids }) => (
  <div className="agentes-mini">
    {ids.map((id) => (
      <span key={id}><Glifo id={id} size={18} /></span>
    ))}
  </div>
)
