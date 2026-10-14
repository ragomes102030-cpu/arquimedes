import React, { useEffect, useRef } from 'react'
import { agenteBot, exemplosCampo, obstaculos, passosBot, avisosBot } from '../data/agente'
import { contato } from '../data/contato'

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

/** Glifo do Telegram, em traço técnico como o resto. */
const GlifoTelegram: React.FC<{ size?: number }> = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation">
    <path
      d="M21.5 3.5 2.8 10.9c-.9.35-.88 1.63.03 1.95l4.4 1.55 1.7 5.3c.28.87 1.4 1.1 2 .42l2.4-2.7 4.5 3.3c.7.5 1.7.13 1.9-.72l3-14.1c.2-.94-.73-1.7-1.63-1.35Z"
      stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round"
    />
    <path d="M7.2 14.4 18.4 6.9l-7.6 7.4-.5 3.3" stroke="var(--accent)" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
)

export const Agente: React.FC = () => {
  const ref = useRevelar()
  return (
    <section className="sec sec-tint" id="agente" ref={ref}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="dim"><span>Agente de campo</span></div>
          <h2 style={{ marginTop: 22 }}>Seu agente, no bolso, dentro da obra.</h2>
          <p>
            O mesmo agente que roda no desktop atende no Telegram. Não é um bot diferente
            que você precisa configurar de novo: é o mesmo, com os mesmos acessos e as mesmas
            skills, respondendo de onde você estiver.
          </p>
        </div>

        {/* o que ele responde no canto da obra */}
        <div className="campo rv">
          <div className="campo-phone">
            <div className="campo-hd">
              <GlifoTelegram size={20} />
              <span>Arquimedes</span>
              <i>no Telegram</i>
            </div>
            {exemplosCampo.map((e) => (
              <div className="bolha-par" key={e.pergunta}>
                <div className="bolha user">{e.pergunta}</div>
                <div className="bolha bot">
                  {e.resposta}
                  <span className="bolha-fonte">{e.fonte}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* o passo a passo */}
        <div className="sec-hd rv" style={{ marginTop: 64, marginBottom: 30 }}>
          <h3 style={{ fontSize: '1.3rem' }}>Como você tem o seu</h3>
          <p style={{ marginTop: 12 }}>
            Cinco passos. O último é o que separa um bot que funciona de um que inventa
            resposta na frente do cliente.
          </p>
        </div>
        <ol className="passos rv">
          {passosBot.map((p) => (
            <li className="passo" key={p.n}>
              <span className="passo-n">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>

        {/* os obstáculos reais */}
        <div className="sec-hd rv" style={{ marginTop: 64, marginBottom: 30 }}>
          <h3 style={{ fontSize: '1.3rem' }}>O que dá errado — e por quê</h3>
          <p style={{ marginTop: 12 }}>
            Estes quatro não são hipótese. Cada um aconteceu durante a configuração deste
            agente, e o diagnóstico saiu do log, não do manual.
          </p>
        </div>
        <div className="perrengues rv">
          {obstaculos.map((o) => (
            <article className="perrengue" key={o.sintoma}>
              <div className="perrengue-sintoma">
                <span className="tag-sintoma">sintoma</span>
                <p>{o.sintoma}</p>
              </div>
              <div className="perrengue-corpo">
                <dl>
                  <dt>causa</dt>
                  <dd>{o.causa}</dd>
                  <dt>conserto</dt>
                  <dd>{o.conserto}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>

        {/* avisos honestos */}
        <div className="avisos rv">
          <div className="dim"><span>Antes de começar</span></div>
          <ul>
            {avisosBot.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>

        <div className="agente-cta rv">
          <div>
            <h3>Quer o seu agente de campo?</h3>
            <p>
              Escreva contando o tipo de obra. A configuração do agente no Telegram é
              feita junto com a do sistema, e sai mais rápido com o seu caso em mãos.
            </p>
          </div>
          <a
            className="btn btn-primary btn-lg"
            href={`mailto:${contato.email}?subject=${encodeURIComponent('Quero meu agente de campo no Telegram')}&body=${encodeURIComponent('Olá, Rafael.\n\nQuero configurar o agente no Telegram para acompanhar minha obra.\n\nTipo de obra:\nEquipe em campo:\nO que eu mais precisaria consultar do celular:\n\nObrigado.')}`}
          >
            Falar com o engenheiro
          </a>
        </div>
      </div>
    </section>
  )
}
