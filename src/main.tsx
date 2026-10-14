import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Header, useTema } from './components/Chrome'
import { Hero, Agentes, Recursos, Fluxo, Dominios, Perguntas, Final, Footer } from './components/Secoes'
import { Contato } from './components/Contato'

function App() {
  const { tema, alternar } = useTema()
  return (
    <>
      <Header tema={tema} onAlternar={alternar} />
      <main>
        <Hero />
        <Agentes />
        <Recursos />
        <Fluxo />
        <Dominios />
        <Perguntas />
        <Contato />
        <Final />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
