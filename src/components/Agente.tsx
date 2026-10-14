import React, { useEffect, useRef } from 'react'
import { agenteBot, exemplosCampo } from '../data/agente'

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
  // na landing, 3 exemplos bastam; os 5 completos estao no guia
  const amostra = exemplosCampo.slice(0, 3)

  return (
    <section className="sec sec-tint" id="agente" ref={ref}>
      <div className="wrap">
        <div className="agente-grid">
          <div className="rv">
            <div className="dim"><span>Agente de campo</span></div>
            <h2 style={{ marginTop: 22 }}>Seu agente, no bolso, dentro da obra.</h2>
            <p className="sub" style={{ marginTop: 16 }}>
              O mesmo agente que roda no desktop atende no Telegram. Não é um bot diferente
              que você configura de novo: é o mesmo, com os mesmos acessos e as mesmas
              skills, respondendo de onde você estiver.
            </p>
            <div className="agente-bullets">
              <span>Consulta medição e cronograma</span>
              <span>Previsão de chuva para concretagem</span>
              <span>Recebe e envia arquivo no chat</span>
            </div>
            <div className="cta-row" style={{ marginTop: 28 }}>
              <a className="btn btn-primary" href="guia/">Ler o guia completo</a>
              <a className="btn btn-ghost" href={agenteBot.url} target="_blank" rel="noreferrer">
                Ver o agente
              </a>
            </div>
          </div>

          <div className="campo rv">
            <div className="campo-phone">
              <div className="campo-hd">
                <GlifoTelegram size={20} />
                <span>Arquimedes</span>
                <i>no Telegram</i>
              </div>
              {amostra.map((e) => (
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
        </div>
      </div>
    </section>
  )
}
