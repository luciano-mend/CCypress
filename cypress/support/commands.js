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

import loc from './locators'

Cypress.Commands.add('clickAlert', (locator, mensagem) => {
    cy.get(locator).click();
        
    cy.on('window:alert', msg => {
        expect(msg).to.be.equal(mensagem);
    })
})

Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://barrigareact.wcaquino.me')
    cy.get(loc.LOGIN.USER).type(usuario)
    cy.get(loc.LOGIN.PASSWORD).type(senha, { log: false })
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MENSAGEM).should('contain', 'Bem vindo, ')
    cy.get('.toast-info > .toast-close-button').click()
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
    cy.get(loc.MENSAGEM).should('contain', 'Dados resetados')
    cy.get(loc.BTN_FECHAR_MENSAGEM_SUCESSO).click()
})