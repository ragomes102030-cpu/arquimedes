import React, { useEffect, useRef } from 'react'
import { agentes, recursos, fluxo, perguntas, modelos, dominios } from '../data/conteudo'
import { Prancheta } from './Chrome'
import { Marca, Alavanca } from './Marca'
import { Glifo } from './Glifos'
import { Contato } from './Contato'
import { Ecossistema, Ciclo, DuvidasEcossistema } from './Ecossistema'
import { baixar, online } from '../data/contato'

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

export const Hero: React.FC = () => (
  <section className="hero" id="topo">
    <div className="wrap hero-grid">
      <div>
        <span className="kicker"><s />Planejamento e controle de obras</span>
        <h1>
          Do orçamento no desktop à <em>medição no canteiro</em>, sem redigitar.
        </h1>
        <p className="lede">
          O Arquimedes é um ecossistema: um aplicativo desktop com 12 agentes especializados
          e uma plataforma online onde a obra vive. Os dois conversam por servidores de
          domínio — o escopo que você estrutura no desktop chega na plataforma pronto para
          a equipe acompanhar.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary btn-lg" href={online.url} target="_blank" rel="noreferrer">
            Abrir a plataforma online
          </a>
          <a className="btn btn-ghost btn-lg" href="#ecossistema">Ver como funciona</a>
        </div>
        <div className="trust">
          <span>Plataforma online no ar</span>
          <span>Desktop em preparação</span>
          <span>42 comandos de domínio ativos</span>
        </div>
      </div>
      <Prancheta />
    </div>
  </section>
)

export const Agentes: React.FC = () => {
  const ref = useRevelar()
  return (
    <section className="sec sec-tint" id="agentes" ref={ref}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="dim"><span>Agentes</span></div>
          <h2 style={{ marginTop: 22 }}>Cada agente responde por uma parte da obra.</h2>
          <p>
            Os 12 agentes vivem no <b>aplicativo desktop</b>. Não são assistentes genéricos
            com nome de pessoa: cada um domina uma disciplina, conhece a norma aplicável e
            entrega um artefato concreto — planilha, memorial, cronograma ou laudo. E cada um
            pode chamar a plataforma online pelas ferramentas de domínio.
          </p>
        </div>
        <div className="agrid rv">
          {agentes.map((a) => (
            <button className="acard" key={a.id} type="button">
              <span className="aicon">
                <Glifo id={a.id} />
              </span>
              <span className="fn">{a.funcao}</span>
              <h3>{a.nome}</h3>
              <p>{a.desc}</p>
              <ul>
                {a.entrega.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Recursos: React.FC = () => {
  const ref = useRevelar()
  return (
    <section className="sec" id="recursos" ref={ref}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="dim"><span>Recursos</span></div>
          <h2 style={{ marginTop: 22 }}>Ferramenta de obra, não brinquedo de IA.</h2>
          <p>
            O que sustenta o resultado não é o modelo — é a base de custos, o motor de
            planejamento e a capacidade de emitir arquivo que a fiscalização aceita.
          </p>
        </div>
        <div className="rgrid rv">
          {recursos.map((r) => (
            <article className="rcard" key={r.titulo}>
              <div className="top">
                <h3>{r.titulo}</h3>
                {r.dado && <span className="dado">{r.dado}</span>}
              </div>
              <span className="resumo">{r.resumo}</span>
              <p>{r.detalhe}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Fluxo: React.FC = () => {
  const ref = useRevelar()
  return (
    <section className="sec sec-tint" id="fluxo" ref={ref}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="dim"><span>Como funciona</span></div>
          <h2 style={{ marginTop: 22 }}>Quatro etapas, na ordem em que a obra acontece.</h2>
        </div>
        <div className="flow rv">
          {fluxo.map((f) => (
            <div className="step" key={f.n}>
              <span className="n">{f.n}</span>
              <h3>{f.titulo}</h3>
              <p>{f.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Perguntas: React.FC = () => (
  <section className="sec" id="perguntas">
    <div className="wrap">
      <div className="sec-hd">
        <div className="dim"><span>Perguntas frequentes</span></div>
        <h2 style={{ marginTop: 22 }}>O que costumam perguntar antes de usar.</h2>
      </div>
      <div className="faq">
        {perguntas.map((p) => (
          <details key={p.q}>
            <summary>{p.q}</summary>
            <p>{p.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export const Final: React.FC = () => (
  <section className="final" id="baixar">
    <div className="wrap">
      {/* aqui ha espaco para a alavanca completa: fulcro, peso e forca */}
      <Alavanca size={104} />
      <h2 style={{ marginTop: 26 }}>Sua próxima obra começa com o orçamento certo.</h2>
      <p>Comece pela plataforma online — ela já está no ar e não precisa instalar nada.</p>
      <div className="cta-row">
        <a className="btn btn-primary btn-lg" href={online.url} target="_blank" rel="noreferrer">{online.rotulo}</a>
        <a className="btn btn-ghost btn-lg" href="#contato">Falar com o engenheiro</a>
      </div>
      <p className="nota-baixar">
        <span className="selo-mini"><i aria-hidden="true" />{baixar.rotulo}</span>
        {baixar.nota}
      </p>
      <div className="marcas">
        {modelos.map((m) => <span key={m}>{m}</span>)}
      </div>
    </div>
  </section>
)


export const Dominios: React.FC = () => (
  <section className="sec sec-tint" style={{ paddingTop: 54, paddingBottom: 54 }}>
    <div className="wrap">
      <div className="dim"><span>Domínio coberto</span></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
        {dominios.map((d) => (
          <span
            key={d}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              color: 'var(--ink-2)',
              border: '1px solid var(--line)',
              padding: '6px 12px',
            }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  </section>
)
