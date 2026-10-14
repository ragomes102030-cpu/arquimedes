# Arquimedes — site

Site institucional do **Arquimedes**, assistente de engenharia e gestão de obras
com agentes de IA. Em português, com foco no mercado brasileiro de construção civil.

## O que é

Uma landing page de produto que apresenta os 12 agentes especializados do
Arquimedes e o que cada um entrega: orçamento com SINAPI/SEINFRA, EAP, cronograma
com caminho crítico, linha de balanço, medição, dimensionamento estrutural,
diagnóstico de patologia e terraplenagem.

## Stack

- React 18 + TypeScript
- Vite 5
- CSS escrito à mão, sem framework

## Sistema visual

A linguagem é **prancha técnica**: hairlines no lugar de sombra, canto vivo no lugar
de raio arredondado, cota com seta como separador de seção, e um carimbo de prancha
como bloco de metadados. Acento único, amarelo de instrumento topográfico.

Tokens em `src/styles.css`: `--ground`, `--sheet`, `--line`, `--ink`, `--accent`.

## Estrutura

```
src/main.tsx                raiz da aplicação
src/styles.css              tokens e estilos
src/data/conteudo.ts        agentes, recursos, fluxo e perguntas
src/components/Marca.tsx    marca (alavanca geométrica) e wordmark
src/components/Chrome.tsx   header, alternador de tema, prancheta de obra
src/components/Secoes.tsx   hero, agentes, recursos, fluxo, FAQ, CTA, rodapé
```

## Desenvolvimento

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # typecheck + bundle em dist/
npm run preview
```

Para servir na raiz de um domínio próprio:

```bash
VITE_BASE=/ npm run build
```

## Publicação

Push em `main` dispara `.github/workflows/deploy.yml`, que publica `dist/` no
GitHub Pages.

**Configuração única:** em *Settings → Pages → Build and deployment*, defina
**Source** como **GitHub Actions**.

## Licença

O motor do Arquimedes é derivado do AionUi, licenciado sob Apache-2.0. Os avisos de
licença e copyright originais permanecem no código-fonte do aplicativo.
