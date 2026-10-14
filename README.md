# Automação de Testes E2E com Cypress

Projeto de automação de testes end-to-end (E2E) desenvolvido com Cypress e JavaScript. A suíte valida interações e comportamentos de uma aplicação web de demonstração, incluindo formulários, elementos da interface e recursos do navegador.

## Funcionalidades cobertas

- **Formulários e elementos da interface:** preenchimento e limpeza de campos, radio buttons, checkboxes, listas de seleção, links e validação de resultados.
- **Alertas e diálogos do navegador:** validação de `alert`, `confirm` e `prompt`, incluindo confirmação, cancelamento e chamadas controladas com stubs.
- **Assincronia e retry:** espera automática por elementos, asserções com retry, escopo de busca e configuração de timeout.
- **Dados de teste:** carregamento de dados externos com fixtures e geração de cenários dinâmicos a partir de conjuntos de valores.
- **Seletores:** localização de elementos com CSS, jQuery e XPath.
- **Iframes e popups:** interação com conteúdo em frames, validação de links de destino e simulação de abertura de novas janelas.
- **Controle do tempo:** uso de `cy.clock()` e `cy.tick()` para validar comportamentos dependentes do relógio sem aguardar o tempo real.
- **Comandos reutilizáveis:** comandos customizados para executar fluxos de cadastro e validar alertas.
- **Asserções:** validações de textos, valores, propriedades, tipos, arrays e objetos com Chai.

## Tecnologias

- JavaScript
- Node.js
- Cypress 15
- cypress-xpath
- Chai (integrado ao Cypress)

## Aplicação sob teste

Os cenários usam páginas públicas de demonstração com componentes variados:

- [Página de componentes](https://wcaquino.me/cypress/componentes.html)
- [Página auxiliar de frame](https://wcaquino.me/cypress/frame.html)

Como a suíte depende dessas páginas externas, a execução requer conexão com a internet e pode ser afetada por mudanças ou indisponibilidade do site.

## Estrutura

```text
cypress/
├── e2e/          # Cenários E2E organizados por recurso
├── fixtures/     # Dados de teste, incluindo userData.json
└── support/      # Comandos customizados e configuração de suporte
cypress.config.js
package.json
```

## Executar localmente

Requisitos: Node.js e npm instalados.

Instale as dependências:

```bash
npm install
```

Abra o Cypress em modo interativo:

```bash
npx cypress open
```

Execute a suíte em modo headless:

```bash
npx cypress run
```

## Organização dos cenários

Os testes estão em `cypress/e2e/`, separados por tema: `alert`, `asserts`, `elementos`, `esperar`, `fixture`, `dinamic`, `helpers`, `locators`, `iframe`, `popup` e `time`. Dados reutilizados pelos testes ficam em `cypress/fixtures/`; comandos customizados e configurações compartilhadas ficam em `cypress/support/`.

## Autor

**Luciano Mendonça**
