/// <reference types="cypress" />

describe('Trabalhando com elementos basicos', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });

    it('Usando jQuery selector', () => {
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3)')
        cy.get("[onclick*='Francisco']")
        cy.get('[onclick*=\'Francisco\']')
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input").type('Escrevendo')
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) > input").clear()
    });

    it('Usando XPath', () => {
        cy.xpath("(//input[@type='button'][@value='Clique aqui'])[1]")
        cy.xpath("//input[contains(@onclick, 'Francisco')]")
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/following-sibling::td/input[@type='button']")
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/..//input[@type='text']")
        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(.,'Doutorado')])[2]/..//input[@type='text']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']")
    });


})