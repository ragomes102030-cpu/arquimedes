import React, { useEffect } from 'react'
import './guia.css'
import { Header, useTema } from '../components/Chrome'
import { Footer, Marca } from '../components/Comum'
import { bot, exemplosCampo, passosBot, obstaculos, avisosBot, proximos } from '../data/guia'
import { contato } from '../data/contato'

const GlifoTelegram: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation">
    <path
      d="M21.5 3.5 2.8 10.9c-.9.35-.88 1.63.03 1.95l4.4 1.55 1.7 5.3c.28.87 1.4 1.1 2 .42l2.4-2.7 4.5 3.3c.7.5 1.7.13 1.9-.72l3-14.1c.2-.94-.73-1.7-1.63-1.35Z"
      stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round"
    />
    <path d="M7.2 14.4 18.4 6.9l-7.6 7.4-.5 3.3" stroke="var(--accent)" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
)

const App: React.FC = () => {
  const { tema, alternar } = useTema()

  // titulo proprio: esta pagina nao e a landing
  useEffect(() => {
    document.title = 'Guia — agente de campo no Telegram · Arquimedes'
  }, [])

  return (
    <>
      <Header tema={tema} onAlternar={alternar} prefixo="../" paginaAtual="guia" />
      <main>
        {/* cabeçalho do guia */}
        <section className="g-topo">
          <div className="wrap">
            <a className="g-volta" href="../">← voltar ao site</a>
            <div className="dim" style={{ marginTop: 26 }}><span>Guia</span></div>
            <h1>Seu agente de campo, no Telegram.</h1>
            <p className="g-lede">
              Um guia de como colocar o agente que roda no seu computador dentro do seu
              bolso — e do canto da obra. Escrito a partir da configuração real, incluindo
              os quatro problemas que aparecem no caminho e o diagnóstico de cada um.
            </p>
            <div className="g-meta">
              <span>6 passos</span>
              <span>4 obstáculos</span>
              <span>~12 min de leitura</span>
            </div>
          </div>
        </section>

        {/* por que vale */}
        <section className="g-sec">
          <div className="wrap g-narrow">
            <h2>O mesmo agente, não um bot diferente</h2>
            <p>
              A primeira coisa que confunde: não existe “configuração do bot”. O agente do
              Telegram é <b>o mesmo</b> que roda no desktop — mesma memória, mesmas skills,
              mesmos acessos. Ajustar a configuração vale nos dois lugares.
            </p>
            <p>
              Isso é vantagem e é risco. Vantagem porque você configura uma vez. Risco
              porque uma configuração pensada para a tela grande atrapalha na pequena — e é
              exatamente o terceiro obstáculo abaixo.
            </p>

            <div className="g-destaque">
              <GlifoTelegram size={26} />
              <div>
                <b>O agente já existe e está no ar</b>
                <p>
                  Você pode ver como ele se comporta antes de montar o seu:{' '}
                  <a href={bot.url} target="_blank" rel="noreferrer">{bot.usuario}</a>. Hoje o
                  acesso é restrito, mas a conversa mostra o que ele responde.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* o que ele responde */}
        <section className="g-sec g-tint">
          <div className="wrap g-narrow">
            <h2>O que ele responde no canto da obra</h2>
            <p>
              A diferença entre um assistente genérico e um agente de obra está nas
              ferramentas que ele alcança. Cada resposta abaixo vem de uma fonte concreta —
              não é o modelo inventando.
            </p>
          </div>
          <div className="wrap">
            <div className="g-conversa">
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
        </section>

        {/* o passo a passo */}
        <section className="g-sec">
          <div className="wrap g-narrow">
            <h2>Como montar o seu</h2>
            <p>
              Seis passos. O quinto é o que separa um bot que funciona de um que inventa
              resposta na frente do cliente; o sexto é o que separa um bot que funciona hoje
              de um que continua funcionando depois de reiniciar a máquina.
            </p>
          </div>
          <div className="wrap">
            <ol className="g-passos">
              {passosBot.map((p) => (
                <li className="g-passo" key={p.n}>
                  <span className="g-passo-n">{p.n}</span>
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                    {p.detalhe && <p className="g-passo-detalhe">{p.detalhe}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* obstáculos */}
        <section className="g-sec g-tint">
          <div className="wrap g-narrow">
            <h2>O que dá errado — e por quê</h2>
            <p>
              Estes quatro não são hipótese. Cada um aconteceu durante a configuração deste
              agente, e o diagnóstico saiu do log. É a parte que nenhum tutorial cobre,
              porque quase ninguém configura de verdade antes de escrever.
            </p>
          </div>
          <div className="wrap">
            <div className="g-perrengues">
              {obstaculos.map((o) => (
                <article className="g-perrengue" key={o.sintoma}>
                  <div className="g-perrengue-hd">
                    <span className="tag-sintoma">sintoma</span>
                    <h3>{o.sintoma}</h3>
                    {o.sinal && <code className="g-sinal">{o.sinal}</code>}
                  </div>
                  <dl>
                    <dt>causa</dt>
                    <dd>{o.causa}</dd>
                    <dt>conserto</dt>
                    <dd>{o.conserto}</dd>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* avisos */}
        <section className="g-sec">
          <div className="wrap g-narrow">
            <h2>Antes de começar</h2>
            <ul className="g-avisos">
              {avisosBot.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </section>

        {/* próximos passos */}
        <section className="g-sec g-tint">
          <div className="wrap g-narrow">
            <h2>Depois que o bot estiver de pé</h2>
            <p>
              Um agente que só conversa é útil. Um agente que entende de obra é o que muda o
              dia no canteiro — e para isso ele precisa alcançar os servidores de domínio.
            </p>
            <div className="g-proximos">
              {proximos.map((p) => (
                <a className="g-proximo" key={p.titulo} href={p.href}>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                  <span>{p.rotulo} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* cta */}
        <section className="g-cta">
          <div className="wrap g-narrow">
            <Marca size={34} />
            <h2>Prefere que eu configure com você?</h2>
            <p>
              A configuração sai mais rápida com o seu caso em mãos. Escreva contando o tipo
              de obra e o que você mais precisaria consultar do celular.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href={`mailto:${contato.email}?subject=${encodeURIComponent('Quero meu agente de campo no Telegram')}&body=${encodeURIComponent('Olá, Rafael.\n\nQuero configurar o agente no Telegram para acompanhar minha obra.\n\nTipo de obra:\nEquipe em campo:\nO que eu mais precisaria consultar do celular:\n\nObrigado.')}`}
            >
              Falar com o engenheiro
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
