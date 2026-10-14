/**
 * Dados da demonstração de RDO.
 *
 * O clima é dado REAL, consultado no Open-Meteo em 14/10/2026 para São Paulo.
 * Não é valor de exemplo: se um engenheiro conferir a previsão, os números batem.
 * Quando a data envelhecer, atualizar aqui — ou trocar por consulta ao vivo.
 */

export const clima = {
  cidade: 'São Paulo',
  hoje: 'Chuva das 15h às 17h · 7,4 mm acumulados',
  amanha: '57,7 mm previstos',
  fonte: 'Open-Meteo · consultado em 14/10/2026',
  nota:
    'Escolhemos uma cidade com chuva real no dia, em vez de inventar o dado. A previsão de hoje em São Paulo era de 7,4 mm com pico às 16h — e amanhã, 57,7 mm.',
}

export const aviso =
  'Isto é uma demonstração do fluxo, não o sistema em funcionamento. O RDO ainda está em construção: hoje o agente monta o documento e registra a produção, mas clima, ocorrência, foto e assinatura ainda não são gravados no banco.'

export interface Passo {
  t: 'eu' | 'bot' | 'tool' | 'doc'
  txt?: string
  fonte?: string
  res?: string
}

export const passos: Passo[] = [
  { t: 'eu', txt: 'RDO de hoje: concretagem da laje do 3º pavimento, 42 m³, 8 pessoas' },
  {
    t: 'tool',
    fonte: 'weather-construction',
    res: 'Previsão da obra hoje: chuva das 15h às 17h, 7,4 mm acumulados. Pico de 1,5 mm às 16h.',
  },
  {
    t: 'tool',
    fonte: 'mcp-cronograma',
    res: 'Atividade encontrada: Concretagem da laje — 3º pav. (4.2.1) · previsto 40 m³ · término hoje.',
  },
  { t: 'bot', txt: 'Achei a atividade no cronograma. Você lançou 42 m³ e o previsto era 40 m³ — 5% acima. Sigo com 42.' },
  { t: 'bot', txt: 'A obra teve chuva das 15h às 17h. Isso paralisou o serviço?' },
  { t: 'eu', txt: 'parou 1h30, o concreto já estava lançado' },
  { t: 'doc' },
]

export interface Depois {
  titulo: string
  texto: string
  estado: 'pronto' | 'falta'
  selo: string
}

export const depois: Depois[] = [
  {
    titulo: 'O agente saber fazer RDO',
    texto:
      'A skill existe: define o que buscar, o que perguntar e o que nunca inventar. O agente já sabe conduzir a conversa.',
    estado: 'pronto',
    selo: 'pronto',
  },
  {
    titulo: 'Clima automático',
    texto:
      'Funciona hoje. Consulta a previsão pela localização da obra, sem API key, e registra a janela de chuva do dia.',
    estado: 'pronto',
    selo: 'pronto',
  },
  {
    titulo: 'Ligar à atividade do cronograma',
    texto:
      'Os servidores de domínio estão no ar e respondem. O agente localiza a atividade e compara com o previsto.',
    estado: 'pronto',
    selo: 'pronto',
  },
  {
    titulo: 'Gravar o RDO no banco',
    texto:
      'Ainda não existe. Clima, ocorrência, foto e assinatura não têm onde ser salvos — o banco guarda produção, não o documento.',
    estado: 'falta',
    selo: 'em construção',
  },
  {
    titulo: 'PDF assinável',
    texto:
      'Ainda não existe. É o formato que a fiscalização aceita, e o que transforma o registro em prova contratual.',
    estado: 'falta',
    selo: 'em construção',
  },
  {
    titulo: 'Foto e assinatura do fiscal',
    texto:
      'Dependem de coleta presencial. O agente marca como pendência — ele não resolve, e não deve fingir que resolveu.',
    estado: 'falta',
    selo: 'pendência humana',
  },
]
