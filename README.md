# Automação de Testes com Cypress

Projeto de automação de testes end-to-end (E2E) e de API, desenvolvido com Cypress e JavaScript. A suíte valida interações com uma aplicação web de demonstração e operações da API da aplicação financeira Barriga.

## Funcionalidades cobertas

- **Formulários e elementos da interface:** preenchimento e limpeza de campos, radio buttons, checkboxes, listas de seleção, links e validação de resultados.
- **Alertas e diálogos do navegador:** validação de `alert`, `confirm` e `prompt`, incluindo confirmação, cancelamento e chamadas controladas com stubs.
- **Assincronia e retry:** espera automática por elementos, asserções com retry, escopo de busca e configuração de timeout.
- **Dados de teste:** carregamento de dados externos com fixtures e geração de cenários dinâmicos a partir de conjuntos de valores.
- **Seletores:** localização de elementos com CSS, jQuery e XPath.
- **Iframes e popups:** interação com conteúdo em frames, validação de links de destino e simulação de abertura de novas janelas.
- **Controle do tempo:** uso de `cy.clock()` e `cy.tick()` para validar comportamentos dependentes do relógio sem aguardar o tempo real.
- **Comandos reutilizáveis:** comandos customizados para fluxos da interface e chamadas à API.
- **Asserções:** validações de textos, valores, propriedades, tipos, arrays e objetos com Chai.
- **Testes de API:** autenticação, gerenciamento de contas e movimentações, validação de duplicidade e consulta de saldo.
- **Fluxos financeiros pela interface:** autenticação, criação e edição de contas, lançamento e exclusão de movimentações, consulta de extrato e validação de saldo.

## Tecnologias

- JavaScript
- Node.js
- Cypress 15
- cypress-xpath
- Chai (integrado ao Cypress)
- dayjs

## Aplicações sob teste

Os cenários usam páginas públicas de demonstração com componentes variados e a API da aplicação Barriga:

- [Página de componentes](https://wcaquino.me/cypress/componentes.html)
- [Página auxiliar de frame](https://wcaquino.me/cypress/frame.html)
- [Barriga React](https://barrigareact.wcaquino.me)
- API Barriga: `https://barrigarest.wcaquino.me`

Como a suíte depende desses serviços externos, a execução requer conexão com a internet e pode ser afetada por mudanças ou indisponibilidade das aplicações.

## Testes da API Barriga

Os testes de API estão em `cypress/e2e/barriga/backend.spec.cy.js`. Eles usam comandos reutilizáveis definidos em `cypress/support/commands.js` para obter um token de autenticação, restaurar os dados antes de cada cenário e consultar contas, movimentações e saldos.

Os cenários cobrem:

- inclusão e alteração de contas;
- rejeição de conta com nome duplicado;
- inclusão e exclusão de movimentações;
- consulta e atualização do saldo de uma conta.

As credenciais usadas atualmente estão definidas no próprio arquivo de teste. Para executar os cenários, a API Barriga precisa estar acessível e a conta de teste deve aceitar essas credenciais.

## Cenários funcionais da aplicação financeira

Os testes de interface em `cypress/e2e/barriga/funcional.spec.cy.js` simulam operações essenciais da aplicação financeira:

- login e redefinição dos dados da aplicação antes de cada cenário;
- inclusão, edição e validação de duplicidade de contas;
- inclusão de receitas e validação no extrato;
- alteração de status de movimentação e atualização do saldo;
- exclusão de movimentações.

Os fluxos usam comandos customizados separados por domínio (`Conta`, `Movimentação`, `Extrato` e `Home`) e localizadores centralizados em `cypress/support/locators.js`.

## Estrutura

```text
cypress/
├── e2e/
│   ├── barriga/
│   │   ├── backend.spec.cy.js    # Testes da API Barriga
│   │   └── funcional.spec.cy.js  # Testes funcionais pela interface
│   └── ...                       # Outros cenários E2E
├── fixtures/                     # Dados de teste
└── support/                       # Comandos, localizadores e configuração
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

Execute todos os testes em modo headless:

```bash
npx cypress run
```

Execute somente os testes de API:

```bash
npx cypress run --spec "cypress/e2e/barriga/backend.spec.cy.js"
```

## Organização dos cenários

Os testes ficam em `cypress/e2e/`, organizados por tema, incluindo `alert`, `asserts`, `elementos`, `esperar`, `fixture`, `dinamic`, `helpers`, `locators`, `iframe`, `popup`, `time` e `barriga`. Dados reutilizados ficam em `cypress/fixtures/`; comandos customizados, localizadores e configurações compartilhadas ficam em `cypress/support/`.

## Autor

**Luciano Mendonça**
