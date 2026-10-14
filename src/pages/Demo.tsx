import React, { useEffect, useState, useRef } from 'react'
import './demo.css'
import { Header, useTema } from '../components/Chrome'
import { Footer } from '../components/Comum'
import { passos, aviso, depois, clima } from '../data/demo'

const App: React.FC = () => {
  const { tema, alternar } = useTema()
  const [i, setI] = useState(0)
  const [ocupado, setOcupado] = useState(false)
  const [auto, setAuto] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = 'Demonstração — RDO pelo Telegram · Arquimedes'
  }, [])

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
  }, [i])

  // "ver tudo": avança sozinho
  useEffect(() => {
    if (!auto) return
    if (i >= passos.length) { setAuto(false); return }
    const t = setTimeout(() => setI((v) => v + 1), 900)
    return () => clearTimeout(t)
  }, [auto, i])

  const avancar = async () => {
    if (i >= passos.length || ocupado) return
    const p = passos[i]
    setOcupado(true)
    if (p.t === 'tool') {
      await new Promise((r) => setTimeout(r, 850))
    }
    setI((v) => v + 1)
    setOcupado(false)
  }

  const reiniciar = () => { setI(0); setAuto(false) }
  const verTudo = () => { setI(0); setAuto(true) }
  const fim = i >= passos.length
  const visiveis = passos.slice(0, i)

  return (
    <>
      <Header tema={tema} onAlternar={alternar} prefixo="../" paginaAtual="demo" />
      <main>
        <section className="d-topo">
          <div className="wrap">
            <a className="g-volta" href="../">← voltar ao site</a>
            <div className="dim" style={{ marginTop: 26 }}><span>Demonstração</span></div>
            <h1>O RDO nascendo de uma conversa.</h1>
            <p className="d-lede">
              No canto da obra, o engenheiro não preenche formulário: ele conta o que
              aconteceu. O agente estrutura, busca o que é público e devolve o documento.
            </p>

            {/* aviso honesto, no topo e visível */}
            <div className="d-aviso">
              <span className="d-aviso-tag">atenção</span>
              <p>{aviso}</p>
            </div>
          </div>
        </section>

        <section className="d-sec">
          <div className="wrap d-grid">
            {/* a conversa */}
            <div>
              <div className="d-controles">
                <span className="d-cont">passo {i} de {passos.length}</span>
                <div className="d-barra"><i style={{ width: `${(100 * i) / passos.length}%` }} /></div>
              </div>

              <div className="d-fone">
                <div className="d-fone-hd">
                  <span className="d-av">A</span>
                  <span>
                    <b>Arquimedes</b>
                    <i>agente de campo · Obra 024 · {clima.cidade}</i>
                  </span>
                </div>
                <div className="d-chat" ref={chatRef}>
                  {visiveis.length === 0 && (
                    <p className="d-vazio">Clique em <b>Avançar</b> para ver a conversa acontecer.</p>
                  )}
                  {visiveis.map((p, k) => {
                    if (p.t === 'tool') {
                      return (
                        <div className="d-msg bot" key={k}>
                          {p.res}
                          <span className="d-tool">via {p.fonte}</span>
                        </div>
                      )
                    }
                    if (p.t === 'doc') return <Doc key={k} />
                    return <div className={`d-msg ${p.t === 'eu' ? 'eu' : 'bot'}`} key={k}>{p.txt}</div>
                  })}
                  {ocupado && (
                    <div className="d-msg pensa">
                      consultando <span className="d-pts"><i /><i /><i /></span>
                    </div>
                  )}
                </div>
              </div>

              <div className="d-acoes">
                <button className="btn btn-primary" onClick={avancar} disabled={fim || ocupado}>
                  {fim ? 'RDO gerado' : 'Avançar'}
                </button>
                <button className="btn btn-ghost" onClick={verTudo} disabled={auto}>Ver tudo</button>
                <button className="btn btn-ghost" onClick={reiniciar}>Reiniciar</button>
              </div>
            </div>

            {/* o que a demonstração mostra */}
            <aside className="d-lado">
              <h2>O que ela mostra</h2>
              <ol className="d-lista">
                <li>
                  <b>O clima entra sozinho.</b> O agente busca a previsão da obra — você não
                  digita. É a linha que todo RDO de papel deixa em branco ou erra.
                </li>
                <li>
                  <b>Ele confere contra o plano.</b> 42 m³ lançados contra 40 previstos. É onde
                  o diário deixa de ser formulário e vira controle.
                </li>
                <li>
                  <b>Ele pergunta o que não sabe.</b> A chuva é dado; se paralisou o serviço é
                  decisão do engenheiro. O agente não inventa.
                </li>
                <li>
                  <b>Ele avisa o que vem.</b> Amanhã são 57,7 mm — e a cura do concreto nas
                  primeiras 24 h pede proteção.
                </li>
              </ol>

              <div className="d-clima">
                <div className="dim"><span>Clima desta demonstração</span></div>
                <p>{clima.nota}</p>
                <dl>
                  <dt>Hoje</dt><dd>{clima.hoje}</dd>
                  <dt>Amanhã</dt><dd>{clima.amanha}</dd>
                  <dt>Fonte</dt><dd>{clima.fonte}</dd>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section className="d-sec d-tint">
          <div className="wrap d-narrow">
            <h2>O que ainda falta para isso ser produto</h2>
            <p>
              A demonstração mostra o desenho da experiência. O sistema está em construção —
              e vale ser específico sobre o que já existe e o que não existe.
            </p>
            <div className="d-depois">
              {depois.map((d) => (
                <div className={`d-item ${d.estado}`} key={d.titulo}>
                  <span className={`d-selo ${d.estado}`}>{d.selo}</span>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const Doc: React.FC = () => (
  <div className="d-doc">
    <div className="d-doc-hd">RDO 024/2026 — 14/10/2026 <em>rascunho</em></div>
    <dl>
      <dt>Serviço</dt><dd>Concretagem da laje — 3º pav. (4.2.1)</dd>
      <dt>Executado</dt><dd>42 m³</dd>
      <dt>Equipe</dt><dd>8 pessoas</dd>
      <dt>Clima</dt><dd className="auto">Chuva 15h–17h · 7,4 mm · automático</dd>
      <dt>Ocorrência</dt><dd>Paralisação de 1h30 por chuva</dd>
      <dt>Foto</dt><dd className="pend">pendente</dd>
      <dt>Fiscal</dt><dd className="pend">assinatura pendente</dd>
    </dl>
    <div className="d-doc-alerta">
      <b>Alerta:</b> amanhã a previsão é de 57,7 mm. A cura do concreto nas primeiras 24 h
      pede proteção — vale checar a próxima etapa.
    </div>
  </div>
)

export default App
