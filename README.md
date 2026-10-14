# Curso Cypress

Projeto desenvolvido para estudo e pratica de automacao de testes end-to-end com Cypress.

O objetivo deste repositorio e registrar a evolucao dos estudos em Cypress, mantendo um historico de commits organizado e demonstrando, de forma progressiva, tecnicas importantes para automacao de testes web.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress
- cypress-xpath
- Chai Assertions

## Aplicacao utilizada nos testes

Os cenarios automatizados utilizam a pagina publica de componentes criada pelo professor Wladimir Aquino:

```text
https://wcaquino.me/cypress/componentes.html
```

Alguns cenarios tambem utilizam a pagina auxiliar de frame:

```text
https://wcaquino.me/cypress/frame.html
```

Essas paginas possuem elementos HTML variados, permitindo praticar interacoes, validacoes, esperas, iframes, popups e comportamentos assincronos comuns em testes end-to-end.

## Estrutura do projeto

```text
curso-cypress/
  cypress/
    e2e/
      alert.spec.cy.js
      asserts.spec.cy.js
      dinamic.spec.cy.js
      elementos.spec.cy.js
      esperar.spec.cy.js
      fixture.spec.cy.js
      helpers.spec.cy.js
      iframe.spec.cy.js
      locators.spec.cy.js
      popup.spec.cy.js
      time.spec.cy.js
    fixtures/
      example.json
      userData.json
    support/
      commands.js
      e2e.js
  cypress.config.js
  package.json
  README.md
```

## Conteudos abordados

### Alerts, confirms e prompts

Arquivo: `cypress/e2e/alert.spec.cy.js`

Estudos sobre interacoes com caixas nativas do navegador:

- validacao de `alert`;
- uso de `cy.on('window:alert')`;
- mock de alert com `cy.stub`;
- validacao de chamadas com alias;
- validacao de `confirm`;
- simulacao de confirmacao e cancelamento;
- mock de `prompt` com retorno controlado;
- validacao de mensagens obrigatorias em formulario;
- verificacao da ordem de chamadas do stub com `getCall`.

### Assercoes

Arquivo: `cypress/e2e/asserts.spec.cy.js`

Estudos sobre assercoes utilizando a sintaxe do Chai integrada ao Cypress:

- igualdade simples;
- mensagens customizadas em asserts;
- validacao de valores booleanos;
- validacao de valores `null` e `undefined`;
- comparacao de objetos;
- uso de `deep.equal`;
- validacao de propriedades;
- validacao de arrays;
- validacao de tipos;
- validacao de strings;
- uso de expressoes regulares;
- comparacoes numericas;
- validacao de valores aproximados com `closeTo`.

### Elementos basicos

Arquivo: `cypress/e2e/elementos.spec.cy.js`

Estudos sobre interacao com elementos comuns de uma pagina web:

- busca de elementos com `cy.get`;
- validacao de textos;
- clique em links;
- recarregamento da pagina com `cy.reload`;
- preenchimento de campos de texto;
- limpeza de campos com `clear`;
- uso de teclas especiais no `type`;
- interacao com radio buttons;
- interacao com checkboxes;
- clique multiplo com `{ multiple: true }`;
- selecao de opcoes em combo simples;
- selecao de multiplas opcoes em combo multiplo;
- validacao de valores selecionados;
- uso de seletores CSS;
- uso de atributos voltados para testes, como `data-cy`, `data-test` e `data-testid`.

### Esperas e retry

Arquivo: `cypress/e2e/esperar.spec.cy.js`

Estudos sobre o comportamento assincrono do Cypress e sua capacidade de retry automatico:

- espera automatica por elementos;
- validacao de existencia e nao existencia;
- retry automatico de comandos e assercoes;
- uso de `find` em elementos encadeados;
- escopo de busca em comandos encadeados;
- timeout em comandos como `cy.get`;
- comparacao entre espera implicita e espera fixa;
- risco do uso desnecessario de `cy.wait`;
- retry em interacoes de clique;
- diferenca entre `should` e `then`.

### Helpers do Cypress

Arquivo: `cypress/e2e/helpers.spec.cy.js`

Estudos sobre comandos auxiliares do Cypress para manipular valores, objetos, promessas, funcoes e elementos:

- uso de `cy.wrap` com objetos;
- uso de `cy.wrap` com elementos;
- uso de `cy.wrap` com promises;
- acesso a propriedades com `its`;
- acesso a propriedades aninhadas;
- uso de `invoke` para executar funcoes;
- alteracao de valores via `invoke`;
- chamada de metodos do navegador, como `window.alert`;
- manipulacao de HTML via `invoke`.

### Testes dinamicos

Arquivo: `cypress/e2e/dinamic.spec.cy.js`

Estudos sobre a geracao de cenarios e a iteracao sobre elementos:

- criacao de testes para diferentes opcoes de comida a partir de um array;
- iteracao sobre elementos com `each`;
- uso de `cy.wrap` para interagir com cada elemento encontrado.

### Dados de teste com fixtures

Arquivo: `cypress/e2e/fixture.spec.cy.js`

Estudo sobre a leitura de dados externos ao teste com `cy.fixture`. O arquivo
`cypress/fixtures/userData.json` fornece os valores usados no preenchimento do
formulario, incluindo nome, sobrenome, sexo, comidas, escolaridade e esporte.

### Seletores jQuery e XPath

Arquivo: `cypress/e2e/locators.spec.cy.js`

Exemplos de localizacao de elementos usando seletores jQuery e expressoes XPath.
O suporte ao XPath e carregado em `cypress/support/e2e.js` por meio do pacote
`cypress-xpath`.

### Controle do tempo

Arquivo: `cypress/e2e/time.spec.cy.js`

Estudos sobre o controle do relogio do navegador em testes:

- definicao de uma data inicial com `cy.clock`;
- avancos controlados do tempo com `cy.tick`;
- validacao de valores dependentes do horario sem esperas reais.

### iFrames

Arquivo: `cypress/e2e/iframe.spec.cy.js`

Estudos sobre acesso e interacao com conteudo dentro de iframes:

- acesso ao conteudo interno de um iframe;
- uso de `contents()` para obter o documento do frame;
- busca do `body` dentro do iframe;
- uso de `cy.wrap` para voltar ao fluxo de comandos do Cypress;
- preenchimento e validacao de campos dentro do iframe;
- teste direto da pagina carregada pelo frame;
- validacao de alert disparado dentro do contexto testado.

### Popups e novas janelas

Arquivo: `cypress/e2e/popup.spec.cy.js`

Estudos sobre estrategias para testar popups e links que abrem novas janelas:

- teste direto da pagina aberta pelo popup;
- validacao de alert em pagina auxiliar;
- uso de `cy.window`;
- stub do metodo `window.open`;
- validacao de invocacao de popup;
- checagem da URL de destino pelo atributo `href`;
- acesso dinamico ao destino de um link;
- remocao do atributo `target` para abrir o popup na mesma aba;
- preenchimento de campos na pagina de destino.

### Comandos customizados

Arquivo: `cypress/support/commands.js`

O arquivo registra os comandos `cy.login(usuario, senha)` e
`cy.clickAlert(locator, mensagem)`, reutilizaveis nos testes. O arquivo
`cypress/support/e2e.js` carrega esses comandos e o plugin XPath, alem de
configurar a prioridade dos seletores sugeridos pelo Cypress.

## Configuracao atual

Arquivo: `cypress.config.js`

Configuracoes presentes no projeto:

- `projectId` configurado;
- `allowCypressEnv` desabilitado;
- configuracao de testes end-to-end;
- ponto de extensao `setupNodeEvents`;
- comentario de estudo sobre `defaultCommandTimeout`.

## Como executar o projeto

Instale as dependencias:

```bash
npm install
```

Abra o Cypress em modo interativo:

```bash
npx cypress open
```

Execute os testes em modo headless:

```bash
npx cypress run
```

## Status do projeto

Projeto em evolucao, criado com foco em aprendizado, pratica continua e construcao de portfolio em QA Automation.

## Proximas evolucoes previstas

- organizar cenarios por funcionalidade;
- adicionar testes com interceptacao de requisicoes;
- configurar execucao em pipeline de CI;
- gerar relatorios de execucao;
- documentar boas praticas adotadas ao longo da evolucao.

## Autor

Projeto desenvolvido por Luciano Mendonca durante estudos de automacao de testes com Cypress.
