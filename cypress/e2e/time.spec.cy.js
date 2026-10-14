/// <reference types="cypress" />

describe('Testes dinamicos', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    it('Voltando ao passado', () => {
        const data = new Date(2020, 2, 16, 8, 0o0, 50)
        cy.clock(data.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '16/03/2020, 08:00:50')
    })

    it('Avançando para o futuro', () => {
        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('eql', '0')
        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('eql', '5000')
        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('eql', '10000')
    })

});