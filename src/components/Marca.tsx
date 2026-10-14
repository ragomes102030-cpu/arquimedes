import React from 'react'

/**
 * Ícone do Arquimedes.
 *
 * Um "A" maciço apoiado na barra da alavanca: o ápice é o fulcro, a barra é o
 * ponto de apoio. Lido de outro jeito, é um triângulo de esquadro sobre um
 * traço de cota.
 *
 * Forma deliberadamente simples — escolhida por teste de escala, não por gosto.
 * A 16px o contador interno ainda sobrevive e o desenho não vira mancha; a
 * versão detalhada (Alavanca, abaixo) desaparece abaixo de 32px.
 */
export const Marca: React.FC<{ size?: number; className?: string }> = ({ size = 30, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
    aria-hidden="true"
    role="presentation"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 4 L61 55 H3 Z M32 21 L44 43 H20 Z"
      fill="var(--accent)"
    />
    <rect x="3" y="55" width="58" height="9" fill="var(--accent)" />
  </svg>
)

/**
 * Alavanca detalhada — a construção completa, com fulcro, peso vencido e força
 * aplicada. Uso restrito a tamanhos grandes (>= 64px); abaixo disso vira ruído.
 */
export const Alavanca: React.FC<{ size?: number; className?: string }> = ({ size = 120, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    aria-hidden="true"
    role="presentation"
  >
    <path d="M6 40 L58 22" stroke="var(--accent)" strokeWidth="4.5" strokeLinecap="square" />
    <path d="M32 40 L43 56 H21 Z" fill="var(--accent)" />
    <rect x="4" y="28" width="10" height="10" fill="var(--accent)" />
    <path d="M58 22 V10" stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="square" opacity="0.55" />
    <path
      d="M53.5 14.5 58 9.5 62.5 14.5"
      stroke="var(--accent)"
      strokeWidth="2.6"
      strokeLinecap="square"
      strokeLinejoin="round"
      opacity="0.55"
    />
  </svg>
)

export const Wordmark: React.FC<{ size?: number }> = ({ size = 30 }) => (
  <span className="brand">
    <Marca size={size} />
    <span className="brand-txt">
      <b>ARQUIMEDES</b>
      <i>engenharia &amp; obras</i>
    </span>
  </span>
)
