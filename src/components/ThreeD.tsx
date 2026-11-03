import React from 'react'
import './../styles.css'

const COLS = 3
const ROWS = 3

/** Grid de placas técnicas em 3D: orbita, sobe/borda e brilho que caminha.
 *  Leve e percutente sem gastar bateria. `prefers-reduced-motion` é aplicado
 *  globalmente no CSS (animações caem para `none`). */
export const ThreeD: React.FC = () => {
  return (
    <div className="three-d">
      <div className="three-d-stage">
        <div className="turn">
          {Array.from({ length: ROWS }, (_, r) => (
            <div key={`row-${r}`} className="row">
              {Array.from({ length: COLS }, (_, c) => {
                const depth = (2.5 - c) * 45 + (1.5 - r) * 20
                const angle = c * 20 - 20
                return (
                  <div
                    key={`card-${c}-${r}`}
                    className="card"
                    style={{
                      transform: `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${depth}px)`,
                      animation: 'rise 1.2s ease-out both',
                      animationDelay: `${c * 0.08 + r * 0.06}s`,
                    }}
                  >
                    <span className="chip" />
                    <span className="chip" style={{ transform: `translateZ(-${18}px)` }} />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="shine" />
      <div className="shine light" style={{ top: '55%', left: '50%', width: 340, height: 90, borderRadius: '60%', transform: 'translate(-50%,-50%)', opacity: .55 }} />
    </div>
  )
}
