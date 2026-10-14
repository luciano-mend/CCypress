// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    cy.get('#formNome').type(usuario)
    cy.get('#formSenha').type(senha, { log: false })
    cy.get('#formCadastrar').click()
})

Cypress.Commands.add('clickAlert', (locator, mensagem) => {
    cy.get(locator).click();
        
    cy.on('window:alert', msg => {
        expect(msg).to.be.equal(mensagem);
    })
})