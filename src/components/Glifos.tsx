import React from 'react'

/**
 * Glifos dos agentes — traço técnico, 24x24, grade consistente.
 * Cada agente recebe um símbolo da sua própria disciplina em vez do logo
 * repetido 12 vezes, que viraria ruído.
 */
const S = { fill: 'none', stroke: 'var(--accent)', strokeWidth: 1.7, strokeLinecap: 'square' as const }

const glifos: Record<string, React.ReactNode> = {
  // Orçamentista — planilha com total
  orcamentista: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" {...S} />
      <path d="M3.5 9.5h17M9.5 9.5v10M3.5 14.5h17" {...S} strokeWidth={1.3} />
      <path d="M14 12.5h3.5v3.5H14z" fill="var(--accent)" />
    </>
  ),
  // Planejador — barras de cronograma
  planejador: (
    <>
      <path d="M3.5 7h11M6.5 12h11M9.5 17h8" {...S} strokeWidth={2.6} />
    </>
  ),
  // Ritmista — linhas paralelas descendo em diagonal (linha de balanço)
  ritmista: (
    <>
      <path d="M3.5 5.5h17M4.5 10.5h17M5.5 15.5h17M6.5 20.5h14" {...S} strokeWidth={1.5} />
    </>
  ),
  // Estrutural — viga com armadura
  estrutural: (
    <>
      <rect x="3.5" y="7.5" width="17" height="9" {...S} />
      <path d="M6.5 10.5h11M6.5 13.5h11" {...S} strokeWidth={1.2} />
    </>
  ),
  // Patologia — fissura em zigue-zague
  patologia: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" {...S} strokeWidth={1.3} />
      <path d="M12 4.5 9 10l4 3-3 6.5" {...S} strokeWidth={1.9} />
    </>
  ),
  // Topografia — curva de nível com cota
  topografia: (
    <>
      <path d="M3.5 17.5c3-6 6 3 9-3s5-6 8-4" {...S} strokeWidth={1.8} />
      <path d="M3.5 21h17" {...S} strokeWidth={1.2} />
      <path d="M17 4.5v4M15.5 6.5h3" {...S} strokeWidth={1.4} />
    </>
  ),
  // Medições — régua com marcações
  medicoes: (
    <>
      <rect x="2.5" y="8.5" width="19" height="7" {...S} />
      <path d="M7 8.5v3M11 8.5v4M15 8.5v3M19 8.5v4" {...S} strokeWidth={1.3} />
    </>
  ),
  // Auditor — lupa sobre linha de base
  auditor: (
    <>
      <circle cx="10.5" cy="10.5" r="6" {...S} />
      <path d="M15 15l5.5 5.5" {...S} strokeWidth={2.1} />
    </>
  ),
  // Documentos — folha com dobra
  documentos: (
    <>
      <path d="M5.5 3.5h9l5 5v12h-14z" {...S} />
      <path d="M14.5 3.5v5h5" {...S} strokeWidth={1.3} />
      <path d="M8.5 13h8M8.5 16.5h5" {...S} strokeWidth={1.3} />
    </>
  ),
  // Projetos — duas camadas sobrepostas (compatibilização)
  projetos: (
    <>
      <rect x="3.5" y="7.5" width="12" height="12" {...S} />
      <path d="M8.5 4.5h12v12" {...S} strokeWidth={1.4} />
    </>
  ),
  // Suprimentos — caixa e lista
  suprimentos: (
    <>
      <path d="M3.5 8.5 12 4l8.5 4.5v8L12 21l-8.5-4.5z" {...S} />
      <path d="M3.5 8.5 12 13l8.5-4.5M12 13v8" {...S} strokeWidth={1.2} />
    </>
  ),
  // Segurança — capacete
  seguranca: (
    <>
      <path d="M3.5 16.5v-2a8.5 8.5 0 0 1 17 0v2z" {...S} />
      <path d="M9.5 7.2V3.5h5v3.7" {...S} strokeWidth={1.4} />
      <path d="M2 16.5h20" {...S} strokeWidth={2.1} />
    </>
  ),
}

export const Glifo: React.FC<{ id: string; size?: number }> = ({ id, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" role="presentation">
    {glifos[id] ?? glifos.orcamentista}
  </svg>
)
