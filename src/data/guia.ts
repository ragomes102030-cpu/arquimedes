/**
 * Conteúdo do guia do agente de campo.
 *
 * Aqui a profundidade é bem-vinda: quem abriu o guia quer aprender. Todo obstáculo
 * listado foi vivido na configuração real, com diagnóstico tirado do log.
 */

export const bot = {
  usuario: '@ArquimedesObra_bot',
  url: 'https://t.me/ArquimedesObra_bot',
}

export interface ExemploCampo {
  pergunta: string
  resposta: string
  fonte: string
}

export const exemplosCampo: ExemploCampo[] = [
  {
    pergunta: 'Qual o avanço da medição do bloco B?',
    resposta:
      'A medição do bloco B está em 61,8% acumulado. Última apuração em 12/10, período 18,4%. O serviço mais atrasado é instalação hidráulica, com 9 dias de desvio.',
    fonte: 'Plataforma Obras',
  },
  {
    pergunta: 'Chove amanhã em Sobral?',
    resposta:
      'Chuva entre 14h e 17h, acumulado de 6 mm. Janela seca das 6h às 13h — dá para concretar a laje de manhã.',
    fonte: 'Open-Meteo',
  },
  {
    pergunta: 'Quantas horas de servente no item 4.2?',
    resposta:
      'A composição de alvenaria de bloco cerâmico usa 0,42 h/m² de servente e 0,68 h/m² de pedreiro. Referência SINAPI, data-base setembro.',
    fonte: 'SINAPI · SEINFRA',
  },
  {
    pergunta: 'Cria a atividade de concretagem pra quinta.',
    resposta:
      'Atividade criada para quinta, 8h, com duração de 1 dia. Ela não está no caminho crítico — a folga é de 4 dias.',
    fonte: 'MCP cronograma',
  },
  {
    pergunta: 'Me manda o memorial do pilar 12.',
    resposta: 'Segue o memorial descritivo, revisão R03.',
    fonte: 'Seus arquivos',
  },
]

export interface PassoBot {
  n: string
  titulo: string
  texto: string
  detalhe?: string
}

export const passosBot: PassoBot[] = [
  {
    n: '01',
    titulo: 'Crie o bot no BotFather',
    texto:
      'No Telegram, procure o @BotFather e envie /newbot. Ele pede um nome de exibição e um usuário terminado em "bot", e devolve um token.',
    detalhe: 'O token é a senha do bot. Quem tiver ele controla o bot.',
  },
  {
    n: '02',
    titulo: 'Guarde o token no arquivo de credenciais',
    texto:
      'O token vai para o arquivo de credenciais da sua máquina — não em conversa, não em print, não em documento compartilhado. Se vazar, revogue no BotFather com /revoke e gere outro.',
    detalhe: 'Nunca cole o token em chat, nem para pedir ajuda.',
  },
  {
    n: '03',
    titulo: 'Ligue o canal do Telegram',
    texto:
      'Com o agente rodando na sua máquina, o canal sobe junto. A conexão aparece no log — e é no log que você confirma, não na tela do Telegram.',
    detalhe: 'A tela pode parecer normal enquanto o canal está caído.',
  },
  {
    n: '04',
    titulo: 'Aprove o seu acesso',
    texto:
      'Mande uma mensagem para o bot. Ele responde com um código de pareamento. Aprove o código e seu usuário passa a ser reconhecido.',
    detalhe: 'Por padrão o bot nega todo mundo — é a proteção correta, ele tem acesso ao seu computador.',
  },
  {
    n: '05',
    titulo: 'Teste com pergunta de engenharia',
    texto:
      'Não teste com "oi". Pergunte o que é BDI. Se a resposta vier errada, troque de modelo antes de mostrar o bot para qualquer pessoa.',
    detalhe: 'Este passo é o que separa um bot que funciona de um que inventa resposta na frente do cliente.',
  },
  {
    n: '06',
    titulo: 'Instale como serviço do sistema',
    texto:
      'Enquanto o agente roda manualmente, ele morre quando a máquina reinicia. Instalado como serviço, ele volta sozinho.',
    detalhe: 'Sem isso, o bot funciona hoje e some no próximo reboot.',
  },
]

export interface Obstaculo {
  sintoma: string
  causa: string
  conserto: string
  sinal?: string
}

export const obstaculos: Obstaculo[] = [
  {
    sintoma: 'O agente morre sozinho, e a mensagem de erro culpa o Telegram.',
    causa:
      'Muitos servidores de ferramentas configurados. Cada um que exige login interativo trava numa tentativa de autenticação que não pode completar. O processamento para de responder, e o vigilante interno derruba o processo.',
    conserto:
      'Deixe só os servidores que você usa de verdade. Desligar o vigilante não resolve — ele estava certo em derrubar; sem ele o agente ficaria travado em vez de reiniciar.',
    sinal: 'Erro de "sondagem de vitalidade" seguido de saída com código 75',
  },
  {
    sintoma: 'O bot responde que o modelo não existe mais, ou fica mudo.',
    causa:
      'Modelo gratuito com período encerrado. O provedor encerra sem avisar no painel; a informação só aparece no log.',
    conserto:
      'Teste com pergunta da sua área antes de confiar. Nem todo modelo gratuito serve: alguns inventam o significado de BDI, e erram de forma diferente a cada pergunta.',
    sinal: 'Erro 404 com "free period has ended"',
  },
  {
    sintoma: 'No celular aparece o raciocínio interno, e cada consulta vira uma mensagem.',
    causa:
      'Configuração global sobrescrevendo o padrão de celular. O agente já vem calibrado para tela pequena — desktop detalhado, celular enxuto. A configuração global fala mais alto.',
    conserto:
      'Apague as linhas globais de exibição e deixe o padrão por plataforma agir. Quase nunca o conserto é adicionar exceção: é remover o que está sombreando.',
    sinal: 'Bloco de raciocínio visível antes de cada resposta',
  },
  {
    sintoma: 'O bot ignora você completamente.',
    causa:
      'Proteção de acesso. Por padrão ele nega todo mundo, porque tem acesso ao seu computador.',
    conserto:
      'Aprovar o seu usuário uma vez. É o comportamento correto — um bot com acesso ao terminal não deve atender estranhos.',
    sinal: 'Log registra "usuário não autorizado"',
  },
]

export const avisosBot = [
  'O agente roda no seu computador. Se a máquina desligar, o bot para de responder.',
  'Ele tem os mesmos acessos do agente no computador, incluindo terminal. Trate o token como chave de casa.',
  'Enquanto você testa, o bot deve atender só o seu usuário aprovado.',
  'O mesmo agente, com a mesma memória: o que você conversa no Telegram fica no histórico dele.',
]

export interface ProximoPasso {
  titulo: string
  texto: string
  href: string
  rotulo: string
}

export const proximos: ProximoPasso[] = [
  {
    titulo: 'Conectar os servidores de obra',
    texto:
      'É o que faz o agente entender de obra em vez de só conversar. São 42 comandos de domínio: EAP, cronograma, caminho crítico, linha de balanço, medições.',
    href: '../#ecossistema',
    rotulo: 'Ver o ecossistema',
  },
  {
    titulo: 'Dar acesso à plataforma',
    texto:
      'Com a plataforma conectada, o agente responde avanço de medição e cria atividade direto do celular, sem você abrir o navegador.',
    href: '../#ecossistema',
    rotulo: 'Ver a plataforma',
  },
]
