import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Header, useTema } from './components/Chrome'
import { Hero, Agentes, Recursos, Dominios, Perguntas, Final } from './components/Secoes'
import { Contato } from './components/Contato'
import { Ecossistema, Ciclo } from './components/Ecossistema'
import { Agente } from './components/Agente'
import { Footer } from './components/Comum'

/**
 * Landing: convence rápido.
 *
 * O conteúdo longo saiu daqui — tutorial do agente vive em guia/, com página própria.
 * As duas FAQs viraram uma, e o "fluxo" (4 etapas) saiu porque o "ciclo" (4 passos) já
 * conta a mesma ideia. Uma landing não precisa dizer tudo: precisa dizer o suficiente
 * para a pessoa querer ir mais fundo.
 */
function App() {
  const { tema, alternar } = useTema()
  return (
    <>
      <Header tema={tema} onAlternar={alternar} />
      <main>
        <Hero />
        <Ecossistema />
        <Ciclo />
        <Agente />
        <Agentes />
        <Recursos />
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
