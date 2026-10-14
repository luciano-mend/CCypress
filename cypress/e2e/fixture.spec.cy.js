/// <reference types="cypress" />

describe('Trabalhando com fixture', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });

    it('Usando fixture', () => {
        cy.fixture('userData').then((usuario) => {
            cy.get('#formNome').type(usuario.nome)
            cy.get('#formSobrenome').type(usuario.sobreNome)
            cy.get(`[value='${usuario.sexo}']`).check()
            
            for (let i = 0; i < usuario.comida.length; i++) {
                cy.get(`[name=formComidaFavorita][value=${usuario.comida[i]}]`).click()
            }

            cy.get('#formEscolaridade').select(usuario.escolaridade)
            cy.get('#formEsportes').select(usuario.esportes)
        })
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
    });
});