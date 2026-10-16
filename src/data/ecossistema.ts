/**
 * O ecossistema Arquimedes — três peças que conversam entre si.
 *
 * Tudo aqui é verificável: as URLs dos serviços foram checadas por HTTP.
 * Não descrever integração que não existe — se uma peça cair, tirar do ar
 * em vez de deixar a promessa no texto.
 */

export interface Peca {
  id: string
  nome: string
  tipo: string
  resumo: string
  faz: string[]
  url?: string
  urlRotulo?: string
  estado: 'disponivel' | 'em-construcao'
  notaEstado?: string
}

export const pecas: Peca[] = [
  {
    id: 'desktop',
    nome: 'Arquimedes',
    tipo: 'Aplicativo desktop',
    resumo:
      'Roda na sua máquina. É onde o engenheiro trabalha o dia a dia: conversa com os agentes, monta orçamento, mexe na planilha, gera memorial. Seus dados e seus projetos ficam no seu computador.',
    faz: [
      '12 agentes especializados por disciplina',
      'Orçamento com SINAPI e SEINFRA',
      'EAP, cronograma e linha de balanço',
      'Excel, Word e PDF nativos',
      'Funciona offline, com modelo local ou na nuvem',
    ],
    url: 'https://github.com/ragomes102030-cpu/arquimedes/releases',
    urlRotulo: 'Acompanhar o repositório',
    estado: 'em-construcao',
    notaEstado: 'Em preparação',
  },
  {
    id: 'online',
    nome: 'Plataforma Obras',
    tipo: 'Sistema online',
    resumo:
      'Onde a obra vive e a equipe acompanha. EAP, cronograma, medições e suprimentos num só lugar, acessível de qualquer máquina — do escritório, do canteiro ou de casa.',
    faz: [
      'EAP e cronograma com caminho crítico',
      'Linha de balanço e balanceamento de equipes',
      'Medições e avanço físico-financeiro',
      'Suprimentos e catálogo de preços',
      'Entrada pelo GitHub',
    ],
    url: 'https://plataforma-obras.dockhosting.dev/obras',
    urlRotulo: 'Abrir a plataforma',
    estado: 'disponivel',
    notaEstado: 'No ar, em construção ativa',
  },
  {
    id: 'ponte',
    nome: 'MCP',
    tipo: 'A ponte',
    resumo:
      'Três servidores de domínio ligam o desktop à plataforma. O agente fala a linguagem da obra — não a linguagem da API — e por isso consegue criar EAP, encadear dependência e calcular caminho crítico direto.',
    faz: [
      '23 ferramentas de EAP',
      '13 ferramentas de cronograma e CPM',
      '6 ferramentas de Gantt e linha de balanço',
      'Um comando no desktop, a plataforma atualiza',
    ],
    url: 'https://github.com/ragomes102030-cpu/plataforma-obras',
    urlRotulo: 'Ver os servidores',
    estado: 'disponivel',
    notaEstado: '42 ferramentas ativas',
  },
]

export interface PassoEcossistema {
  titulo: string
  texto: string
  onde: 'desktop' | 'ponte' | 'online'
}

export const ciclo: PassoEcossistema[] = [
  {
    onde: 'desktop',
    titulo: 'Planeje no desktop',
    texto:
      'Você estrutura a EAP, levanta o quantitativo e fecha o orçamento conversando com os agentes. É aqui que o engenheiro pensa a obra.',
  },
  {
    onde: 'ponte',
    titulo: 'Publique pela ponte',
    texto:
      'Os servidores MCP levam escopo, atividades e dependências para a plataforma. Sem redigitar, sem exportar planilha e subir de novo.',
  },
  {
    onde: 'online',
    titulo: 'Acompanhe na plataforma',
    texto:
      'A equipe apura medição, registra o avanço e consulta o cronograma. O caminho crítico e a curva S ficam vivos, de qualquer máquina.',
  },
  {
    onde: 'desktop',
    titulo: 'Volte para o desktop',
    texto:
      'O realizado volta como dado. Você compara previsto contra real, refaz o plano e a plataforma recebe a nova versão.',
  },
]

export const duvidasEcossistema = [
  {
    q: 'Preciso dos dois produtos?',
    a: 'Não. A plataforma online funciona sozinha — quem só precisa planejar e acompanhar pelo navegador usa ela e pronto. O desktop entra quando você quer os agentes trabalhando junto: orçamento assistido, geração de planilha e memorial, análise de projeto. E quem usa os dois ganha o ciclo completo, com o escopo indo e voltando sem redigitação.',
  },
  {
    q: 'Como os dois conversam?',
    a: 'Por três servidores MCP — EAP, cronograma e Gantt/LOB — que estão no ar e respondem. Eles expõem 42 ferramentas que falam a linguagem da obra: criar nó de EAP, encadear dependência, calcular caminho crítico, dimensionar equipe. O agente do desktop chama essas ferramentas em vez de você preencher formulário.',
  },
  {
    q: 'Meus dados ficam onde?',
    a: 'O projeto que você abre no desktop fica no seu computador. O que você publica para a plataforma fica na conta da obra, para a equipe acessar. Você decide o que sobe — não é sincronização automática de tudo.',
  },
  {
    q: 'A plataforma online é para a equipe ou para mim?',
    a: 'Para os dois, com papéis diferentes. Você planeja e revisa; a equipe apura medição e registra avanço no canteiro, pelo celular. Hoje o acesso é por GitHub e está restrito — a abertura para equipes está em construção.',
  },
  {
    q: 'Consigo usar o sistema online sem o desktop?',
    a: 'Sim, e é o caminho mais rápido para começar. A plataforma sozinha já cobre EAP, cronograma, caminho crítico, linha de balanço, medições e suprimentos. O desktop é o passo seguinte, para quem quer os agentes no fluxo.',
  },
]

/** Serviços verificados por HTTP — a lista do que está realmente no ar. */
export const servicos = [
  { nome: 'Plataforma Obras', url: 'https://plataforma-obras.dockhosting.dev', tipo: 'app + API' },
  { nome: 'MCP EAP', url: 'https://mcp-eap-server.onrender.com/mcp', tipo: '23 ferramentas' },
  { nome: 'MCP Cronograma', url: 'https://mcp-cronograma-server.onrender.com/mcp', tipo: '13 ferramentas' },
  { nome: 'MCP Gantt / LOB', url: 'https://mcp-gantt-lob-server.onrender.com/mcp', tipo: '6 ferramentas' },
]
