/// <reference types="cypress" />

describe('Testes dinamicos', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    const comidas = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    comidas.forEach((comida) => {
        it(`Cadastro com comida variada: ${comida}`, () => {
            
            cy.get('#formNome').type('Luciano')
            cy.get('#formSobrenome').type('Mendonça')
            cy.get(`[value='M']`).check()
            cy.xpath(`//label[contains(., '${comida}')]/preceding-sibling::input`).click()
    
            cy.get('#formEscolaridade').select('Mestrado')
            cy.get('#formEsportes').select('Futebol')
    
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
        })
    })

    it('Deve selecionar todos usando o each', () => {
        cy.get('#formNome').type('Luciano')
        cy.get('#formSobrenome').type('Mendonça')
        cy.get(`[value='M']`).check()

        cy.get(`[name=formComidaFavorita]`).each($el => {
            if ($el.val() != 'vegetariano') {
                cy.wrap($el).click()
            }
        })

        cy.get('#formEscolaridade').select('Mestrado')
        cy.get('#formEsportes').select('Futebol')

        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
    });



});