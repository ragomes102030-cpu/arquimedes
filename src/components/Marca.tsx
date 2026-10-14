import React from 'react'

/**
 * Marca Arquimedes: a alavanca reduzida a construção geométrica.
 * Fulcro, barra e o peso sendo vencido — desenhado em traço técnico.
 */
export const Marca: React.FC<{ size?: number; className?: string }> = ({ size = 30, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    aria-hidden="true"
    role="presentation"
  >
    {/* esquadro de fundo */}
    <path d="M4 36V4h32" stroke="currentColor" strokeWidth="1.4" opacity="0.28" />
    {/* barra da alavanca, apoiada no fulcro */}
    <path d="M4.5 27.5 35.5 12.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    {/* fulcro */}
    <path d="M20 27.5 16.4 34h7.2L20 27.5Z" fill="currentColor" />
    {/* peso vencido, na ponta curta */}
    <rect x="3" y="22.6" width="6" height="6" fill="currentColor" opacity="0.9" />
    {/* força aplicada, na ponta longa */}
    <path d="M35.5 12.5v-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" opacity="0.6" />
    <path d="M33 7.6 35.5 5.2 38 7.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" strokeLinejoin="round" opacity="0.6" fill="none" />
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
