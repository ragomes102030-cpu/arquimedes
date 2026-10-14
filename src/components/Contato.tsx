import React from 'react'
import { contato, baixar, linkWhats, linkEmail } from '../data/contato'
import { Marca } from './Marca'

/**
 * Bloco de contato. O WhatsApp só aparece se estiver configurado — nada de
 * botão que não leva a lugar nenhum.
 */
export const Contato: React.FC = () => {
  const zap = linkWhats('Olá! Vi o site do Arquimedes e quero saber mais sobre a ferramenta.')
  const mail = linkEmail(
    'Arquimedes — quero saber mais',
    'Olá, Rafael.\n\nVi o site do Arquimedes e gostaria de entender melhor como aplicar na minha obra.\n\nObra/empresa:\nTipo de obra:\nPrincipal dificuldade hoje:\n\nObrigado.',
  )

  return (
    <section className="sec sec-tint" id="contato">
      <div className="wrap">
        <div className="sec-hd">
          <div className="dim"><span>Contato</span></div>
          <h2 style={{ marginTop: 22 }}>Fale direto com quem construiu.</h2>
          <p>
            Dúvida técnica, proposta de implantação ou sugestão de agente —
            a mensagem chega direto para o engenheiro responsável, não para um funil de vendas.
          </p>
        </div>

        <div className="contato-grid">
          {zap && (
            <a className="contato-card destaque" href={zap} target="_blank" rel="noreferrer">
              <span className="cc-ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="square">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5Z" />
                  <path d="M8.8 9.2c0 3 2.4 5.4 5.4 5.4" strokeWidth="1.4" />
                </svg>
              </span>
              <b>WhatsApp</b>
              <span className="cc-sub">Resposta mais rápida</span>
            </a>
          )}

          <a className="contato-card" href={mail}>
            <span className="cc-ic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="square">
                <rect x="3" y="5" width="18" height="14" />
                <path d="m3 6.5 9 6.5 9-6.5" />
              </svg>
            </span>
            <b>E-mail</b>
            <span className="cc-sub">{contato.email}</span>
          </a>

          <a className="contato-card" href={contato.github} target="_blank" rel="noreferrer">
            <span className="cc-ic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="square">
                <path d="M9 19c-4.5 1.4-4.5-2.5-6.3-3M15.3 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.4s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C7.3 3.2 6.3 3.5 6.3 3.5a4.5 4.5 0 0 0-.1 3.4A4.8 4.8 0 0 0 4.9 10c0 4.8 2.9 5.9 5.7 6.2-.6.6-.6 1.2-.5 2V22" />
              </svg>
            </span>
            <b>Repositório</b>
            <span className="cc-sub">Código e acompanhamento</span>
          </a>
        </div>

        <div className="contato-nota">
          <Marca size={20} />
          <p>
            O Arquimedes está em desenvolvimento ativo. Se você tem uma obra em andamento e quer
            testar, escreva contando o tipo de obra — isso ajuda a priorizar os agentes certos.
          </p>
        </div>
      </div>
    </section>
  )
}

export const notaDownload = baixar.nota
