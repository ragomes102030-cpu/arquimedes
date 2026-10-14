/**
 * A seção do agente no Telegram.
 *
 * Todo obstáculo listado aqui foi vivido na configuração real, com log —
 * não é lista de teoria. Se um item deixar de valer (o produto mudar), tirar
 * da lista em vez de deixar promessa velha no ar.
 */

export const agenteBot = {
  nome: '@ArquimedesObra_bot',
  url: 'https://t.me/ArquimedesObra_bot',
}

/** O que o agente responde do canto da obra. */
export interface ExemploCampo {
  pergunta: string
  resposta: string
  fonte: string
}

export const exemplosCampo: ExemploCampo[] = [
  {
    pergunta: 'Qual o avanço da medição do bloco B?',
    resposta: 'Consulta a plataforma e devolve o percentual do período, com a data da última medição apurada.',
    fonte: 'Plataforma Obras',
  },
  {
    pergunta: 'Chove amanhã em Sobral?',
    resposta: 'Previsão por hora, com janela seca sugerida para concretagem. Sem API key, direto da fonte pública.',
    fonte: 'Open-Meteo',
  },
  {
    pergunta: 'Quantas horas de servente no item 4.2?',
    resposta: 'Abre a composição do serviço e mostra o coeficiente, com a data-base do catálogo.',
    fonte: 'SINAPI · SEINFRA',
  },
  {
    pergunta: 'Cria a atividade de concretagem pra quinta.',
    resposta: 'Grava a atividade no cronograma com duração e dependência, e devolve o impacto no caminho crítico.',
    fonte: 'MCP cronograma',
  },
  {
    pergunta: 'Me manda o memorial do pilar 12.',
    resposta: 'Devolve o arquivo no chat — o mesmo documento que está no seu computador.',
    fonte: 'Seus arquivos',
  },
]

/** Os obstáculos reais, na ordem em que aparecem. */
export interface Obstaculo {
  sintoma: string
  causa: string
  conserto: string
}

export const obstaculos: Obstaculo[] = [
  {
    sintoma: 'O gateway morre sozinho e a mensagem de erro culpa o Telegram.',
    causa:
      'Muitos servidores MCP configurados. Cada um que exige login interativo trava numa tentativa de autenticação que não pode completar, o processamento para de responder, e o vigilante interno derruba o processo com código 75.',
    conserto:
      'Deixe só os servidores que você usa. Desligar o vigilante não resolve — ele estava certo em derrubar.',
  },
  {
    sintoma: 'O bot responde que não existe mais, ou fica mudo.',
    causa:
      'Modelo gratuito expirado. O provedor encerra o período sem avisar no seu painel, e a mensagem só aparece no log.',
    conserto:
      'Teste com uma pergunta da sua área antes de confiar. Nem todo modelo gratuito serve: alguns inventam o significado de BDI.',
  },
  {
    sintoma: 'No celular aparece o raciocínio interno e cada consulta vira mensagem.',
    causa:
      'Configuração global sobrescrevendo o padrão de celular. O agente já vem calibrado para tela pequena — a sua configuração é que fala mais alto.',
    conserto:
      'Apague as linhas globais e deixe o padrão por plataforma agir. Quase nunca o conserto é adicionar exceção: é remover o que está sombreando.',
  },
  {
    sintoma: 'O bot ignora você completamente.',
    causa: 'Proteção de acesso. Por padrão ele nega todo mundo, porque tem acesso ao seu computador.',
    conserto:
      'Aprovar o seu usuário uma vez. É o comportamento correto — um bot com acesso ao terminal não deve atender estranhos.',
  },
]

export interface PassoBot {
  n: string
  titulo: string
  texto: string
}

export const passosBot: PassoBot[] = [
  {
    n: '01',
    titulo: 'Crie o bot',
    texto:
      'No Telegram, fale com o @BotFather e peça um bot novo. Ele devolve um token — é a senha do bot, guarde como senha.',
  },
  {
    n: '02',
    titulo: 'Guarde o token com segurança',
    texto:
      'O token vai para o arquivo de credenciais da sua máquina, nunca em conversa, nunca em print. Se vazar, revogue no BotFather e gere outro.',
  },
  {
    n: '03',
    titulo: 'Ligue o canal e conecte',
    texto:
      'Com o agente rodando na sua máquina, o canal do Telegram sobe junto. A conexão aparece no log — e é ali que você confirma, não na tela.',
  },
  {
    n: '04',
    titulo: 'Aprove o seu acesso',
    texto:
      'Mande uma mensagem para o bot: ele devolve um código de pareamento. Aprove o código e seu usuário passa a ser reconhecido.',
  },
  {
    n: '05',
    titulo: 'Teste com pergunta de engenharia',
    texto:
      'Não teste com "oi". Pergunte o que é BDI. Se a resposta vier errada, troque de modelo antes de mostrar para qualquer pessoa.',
  },
]

export const avisosBot = [
  'O agente roda no seu computador. Se a máquina desligar, o bot para de responder.',
  'Para ele sobreviver a um reinício, precisa ser instalado como serviço do sistema.',
  'Hoje o bot atende só o seu usuário aprovado — é assim que deve ser enquanto você testa.',
  'Ele tem os mesmos acessos do agente no computador, incluindo terminal. Trate o token como chave de casa.',
]
