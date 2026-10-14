/// <reference types="cypress" />

describe('Validando Esperas', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#buttonDelay').click();

        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo')
            .type('funciona')
            .should('exist');
    })
    
    it('Deve fazer retry', () => {
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');

        //indica que na maioria dos casos retornará o mesmo objeto, mas não caso do not.exist, pois o elemento não existe.
        //cancelando assim o encadeamento dos comandos e retornando null.
        //https://docs.cypress.io/api/commands/should#Yields
        cy.get('#novoCampo')
            // .should('not.exist')
            .should('exist')
            .type('funciona');
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click();
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1');
        
        //o retry do should executa 1 comando anterior, que é o find, e não o get.
        //como os dados são carregados em momentos diferentes, o escopo do get não é recarregado no retry
        cy.get('#lista li span')
            .should('contain', 'Item 2');
    })

    it('Uso do timeout', () => {
        cy.get('#buttonDelay').click();

        //o timeout do get é o tempo que ele vai ficar tentando encontrar o elemento.
        // cy.get('#novoCampo', { timeout: 1000 })
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona');
        
        cy.get('#buttonListDOM').click();
        
        //wait forçado
        // cy.wait(5000);
        cy.get('#lista li span')
            .should('have.length', 1);
        cy.get('#lista li span')
            .should('have.length', 2);
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111');
    })

    it('Should vs Then', () => {
        cy.get('#buttonListDOM').click();
        cy.get('#buttonListDOM').then($el => {
            // console.log($el);
            expect($el).to.have.length(1);
            cy.get('#buttonList')
        });
    })
})