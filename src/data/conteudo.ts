export interface Agente {
  id: string
  nome: string
  funcao: string
  desc: string
  entrega: string[]
}

/** Agentes especializados, alinhados aos servidores MCP e skills já operacionais. */
export const agentes: Agente[] = [
  {
    id: 'orcamentista',
    nome: 'Orçamentista',
    funcao: 'Custos e quantitativos',
    desc: 'Levanta quantitativos a partir do projeto e monta orçamento com composições SINAPI e SEINFRA. Aplica BDI, encargos sociais e desoneração conforme o regime da obra.',
    entrega: ['Planilha orçamentária', 'Curva ABC de insumos', 'Memória de cálculo'],
  },
  {
    id: 'planejador',
    nome: 'Planejador',
    funcao: 'EAP e cronograma',
    desc: 'Estrutura a EAP até o nível executivo, encadeia dependências e calcula o caminho crítico. Gera baseline para comparar previsto contra realizado.',
    entrega: ['EAP dicionarizada', 'Cronograma CPM', 'Curva S'],
  },
  {
    id: 'ritmista',
    nome: 'Ritmista',
    funcao: 'Linha de balanço',
    desc: 'Aplica LOB para obras verticais e repetitivas. Balanceia ritmos entre frentes de serviço e dimensiona equipes por pavimento.',
    entrega: ['Linha de balanço', 'Balanceamento de equipes', 'Detecção de interferência'],
  },
  {
    id: 'estrutural',
    nome: 'Estrutural',
    funcao: 'Dimensionamento',
    desc: 'Verifica elementos em concreto armado e estrutura metálica conforme NBR. Confere armaduras, flechas e estados limites, e emite memorial de cálculo.',
    entrega: ['Memorial de cálculo', 'Detalhamento de armadura', 'Verificações NBR'],
  },
  {
    id: 'patologia',
    nome: 'Patologia',
    funcao: 'Diagnóstico de manifestações',
    desc: 'Identifica fissuras, infiltrações, eflorescência e desagregação. Correlaciona o sintoma com a causa provável e indica a técnica de recuperação.',
    entrega: ['Laudo de vistoria', 'Matriz causa-efeito', 'Plano de recuperação'],
  },
  {
    id: 'topografia',
    nome: 'Topografia',
    funcao: 'Levantamento e terraplenagem',
    desc: 'Processa levantamento planialtimétrico, calcula volumes de corte e aterro e verifica a compensação de massas do terreno.',
    entrega: ['Cálculo de volumes', 'Compensação de massas', 'Caderno de campo'],
  },
  {
    id: 'medicoes',
    nome: 'Medições',
    funcao: 'Avanço físico-financeiro',
    desc: 'Apura medição por período, cruza avanço físico com desembolso e projeta a data de conclusão no ritmo corrente.',
    entrega: ['Boletim de medição', 'Avanço físico-financeiro', 'Projeção de término'],
  },
  {
    id: 'auditor',
    nome: 'Auditor',
    funcao: 'Prazo, custo e conformidade',
    desc: 'Audita o pacote do projeto procurando inconsistência entre orçamento, cronograma e escopo. Aponta serviço sem dono e pacote sem critério de aceite.',
    entrega: ['Relatório de auditoria', 'Pacotes sem dono', 'Desvios prazo-custo'],
  },
  {
    id: 'documentos',
    nome: 'Documentos',
    funcao: 'Memoriais e especificações',
    desc: 'Redige memorial descritivo, especificação técnica e caderno de encargos. Mantém coerência entre o que foi orçado e o que foi especificado.',
    entrega: ['Memorial descritivo', 'Caderno de encargos', 'Especificações'],
  },
  {
    id: 'projetos',
    nome: 'Projetos',
    funcao: 'Compatibilização',
    desc: 'Compatibiliza arquitetura, estrutura e instalações. Aponta interferência entre disciplinas antes de virar retrabalho no canteiro.',
    entrega: ['Relatório de interferências', 'Controle de revisões', 'Prancha consolidada'],
  },
  {
    id: 'suprimentos',
    nome: 'Suprimentos',
    funcao: 'Insumos e cotação',
    desc: 'Extrai a lista de insumos do orçamento, agrupa por criticidade e prazo de entrega, e apoia a cotação com fornecedores.',
    entrega: ['Lista de insumos', 'Mapa de cotação', 'Cronograma de compras'],
  },
  {
    id: 'seguranca',
    nome: 'Segurança',
    funcao: 'NR-18 e canteiro',
    desc: 'Estrutura o PGR da obra, gera checklists de canteiro e verifica conformidade com as normas regulamentadoras aplicáveis.',
    entrega: ['PGR', 'Checklist de canteiro', 'Matriz de risco'],
  },
]

export interface Recurso {
  titulo: string
  resumo: string
  detalhe: string
  dado?: string
}

export const recursos: Recurso[] = [
  {
    titulo: 'Base de custos brasileira',
    resumo: 'SINAPI e SEINFRA',
    detalhe:
      'Composições, insumos e coeficientes das tabelas de referência, com data-base e desoneração. O orçamento sai rastreável até a composição de origem, não como número solto.',
    dado: 'SINAPI · SEINFRA',
  },
  {
    titulo: 'Motor de planejamento',
    resumo: 'EAP, CPM e LOB',
    detalhe:
      'Estrutura analítica com regra 100%, caminho crítico com folgas, baseline para comparação e linha de balanço para obra vertical. Três servidores dedicados cuidando de cada parte.',
    dado: '3 servidores MCP',
  },
  {
    titulo: 'Arquivos nativos',
    resumo: 'Excel, Word, PDF e prancha',
    detalhe:
      'A planilha orçamentária, o memorial e o cronograma saem como arquivo real, com fórmula viva e formatação profissional. Pronto para enviar ao cliente ou à fiscalização.',
    dado: '.xlsx · .docx · .pdf',
  },
  {
    titulo: 'Roda na sua máquina',
    resumo: 'Dados não saem do escritório',
    detalhe:
      'O Arquimedes executa localmente e chama o modelo que você escolher, direto, sem intermediário. Projeto, orçamento e proposta ficam no seu computador.',
    dado: 'local-first',
  },
  {
    titulo: 'Controle remoto',
    resumo: 'Telegram e WhatsApp',
    detalhe:
      'Pergunte o avanço da medição do canteiro pelo celular. Os agentes continuam rodando no computador do escritório enquanto você está em campo.',
    dado: 'do canteiro',
  },
  {
    titulo: 'Rotinas agendadas',
    resumo: 'Relatório e medição no automático',
    detalhe:
      'Relatório semanal de avanço toda segunda, consolidação de medição todo fim de mês, verificação de prazo toda madrugada. Configura uma vez e segue.',
    dado: 'cron',
  },
]

export interface FluxoPasso {
  n: string
  titulo: string
  texto: string
}

export const fluxo: FluxoPasso[] = [
  {
    n: '01',
    titulo: 'Entre com o projeto',
    texto:
      'Traga a planta, a planilha antiga ou só o escopo descrito. O Arquimedes lê o que você tem e identifica o que falta antes de começar.',
  },
  {
    n: '02',
    titulo: 'Estruture o escopo',
    texto:
      'A EAP é montada até o nível executivo, com dicionário e critério de aceite. Cada pacote ganha dono e unidade de medição.',
  },
  {
    n: '03',
    titulo: 'Orce e planeje',
    texto:
      'Quantitativo, composição, BDI e encargos de um lado. Duração, dependência, caminho crítico e equipe do outro. Os dois conversam entre si.',
  },
  {
    n: '04',
    titulo: 'Acompanhe a obra',
    texto:
      'Medição apurada, avanço físico contra desembolso, desvio sinalizado e projeção de término atualizada a cada período.',
  },
]

export interface Pergunta { q: string; a: string }

export const perguntas: Pergunta[] = [
  {
    q: 'Preciso dos dois produtos?',
    a: 'Não. A plataforma online funciona sozinha — quem só precisa planejar e acompanhar pelo navegador usa ela e pronto. O desktop entra quando você quer os agentes trabalhando junto: orçamento assistido, geração de planilha e memorial, análise de projeto. E quem usa os dois ganha o ciclo completo, com o escopo indo e voltando sem redigitação.',
  },
  {
    q: 'Como os dois conversam?',
    a: 'Por três servidores de domínio — EAP, cronograma e Gantt/LOB — que estão no ar e respondendo. Eles expõem 42 comandos que falam a linguagem da obra: criar nó de EAP, encadear dependência, calcular caminho crítico, dimensionar equipe. O agente chama esses comandos em vez de você preencher formulário.',
  },
  {
    q: 'O que o Arquimedes faz na prática?',
    a: 'Ele cobre o ciclo de gestão da obra: estrutura o escopo em EAP, levanta quantitativo, monta o orçamento com SINAPI ou SEINFRA, encadeia o cronograma com caminho crítico, apura medição e acompanha o avanço físico-financeiro. Também entra no técnico, com dimensionamento estrutural, diagnóstico de patologia e cálculo de terraplenagem.',
  },
  {
    q: 'Serve para obra pequena ou só para obra grande?',
    a: 'Serve para as duas. Uma reforma residencial usa o orçamentista e o planejador e para por aí. Uma obra vertical com pavimentos repetidos aproveita a linha de balanço e o balanceamento de equipes. Os agentes são ligados conforme a necessidade, não vem tudo ligado de uma vez.',
  },
  {
    q: 'De onde vêm os preços?',
    a: 'Das tabelas de referência SINAPI e SEINFRA, com data-base explícita e desoneração conforme o regime da obra. Você também pode carregar a sua própria tabela de custos e usar a sua composição onde ela for mais representativa que a referência pública.',
  },
  {
    q: 'O que sai no final? Planilha ou relatório?',
    a: 'Arquivo nativo, editável. A planilha orçamentária sai em Excel com fórmula viva, o memorial e o caderno de encargos em Word, o cronograma e a curva S em Excel e PDF. Nada de exportar um bloco de texto que você vai ter que redigitar.',
  },
  {
    q: 'Meus dados de obra ficam onde?',
    a: 'No seu computador. O agente roda localmente e se conecta direto ao provedor de modelo que você escolher, sem passar por servidor intermediário. Orçamento, proposta e projeto não saem da sua máquina por conta própria — e o que você publica para a plataforma fica na conta da obra, para a equipe acessar. Você decide o que sobe.',
  },
  {
    q: 'Preciso saber programar?',
    a: 'Não. Você conversa com os agentes em português, do mesmo jeito que passaria a tarefa para um colega de escritório. Quem quiser estender encontra os servidores MCP e as skills abertos para configurar.',
  },
  {
    q: 'Consigo usar com o que já tenho instalado?',
    a: 'Sim. O Arquimedes detecta o que já está na máquina e reaproveita, sem reinstalar nem sobrescrever configuração existente. Se você já usa algum assistente de código, ele continua funcionando como está.',
  },
  {
    q: 'É gratuito?',
    a: 'O motor é aberto, sob licença Apache-2.0, e roda em Windows, macOS e Linux. Você paga apenas o consumo do modelo de IA que escolher conectar — que pode inclusive ser um modelo local, sem custo por uso.',
  },
]

export const modelos = [
  'OpenAI', 'Anthropic', 'Google', 'DeepSeek', 'Qwen', 'Mistral',
  'Meta Llama', 'Groq', 'OpenRouter', 'modelo local',
]

export const dominios = [
  'Orçamento', 'EAP', 'Cronograma', 'Caminho crítico', 'Curva S',
  'Linha de balanço', 'Medição', 'Concreto armado', 'Estrutura metálica',
  'Patologia', 'Terraplenagem', 'Compatibilização', 'NR-18', 'BDI',
]
