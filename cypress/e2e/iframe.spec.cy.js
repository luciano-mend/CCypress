/// <reference types="cypress" />

describe('Trabalhando com iFrames', () => {

    it('Deve preencher campo de texto dentro do iframe', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body');
            cy.wrap(body).find('#tfield')
                .type('campo preenchido')
                .should('have.value', 'campo preenchido');
        })
    });

    it('Deve testar frame diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html');
        cy.get('#otherButton').click();
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!');
        })
    });
})