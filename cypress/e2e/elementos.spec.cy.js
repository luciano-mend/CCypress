/// <reference types="cypress" />

describe('Trabalhando com elementos básicos', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    it('Texto', () => {
        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    })

    it('Links', () => {
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text', 'Voltou!');

        cy.reload();
        cy.get('#resultado').should('have.not.text', 'Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!');
    })

    it('Campos de texto', () => {
        cy.get('#formNome').type('Cypress Test');
        cy.get('#formNome').should('have.value', 'Cypress Test');

        cy.get('[name="elementosForm:sugestoes"]')
            .type('textarea')
            .should('have.value', 'textarea');
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('campo na tabela')
            .should('have.value', 'campo na tabela');

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123');

        cy.get('[name="elementosForm:sugestoes"]')
            .clear()
            .type('Erro{selectall}novo valor', { delay: 100 })
            .should('have.value', 'novo valor');
    })

    it('Radio button', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked');
        
        cy.get('#formSexoMasc').should('not.be.checked');

        cy.get("[name='formSexo']").should('have.length', 2);
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked');
        
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
            .should('have.length', 4)
            .should('be.checked');
        
        cy.get('#formComidaPizza')
            .should('not.be.checked');
        
        cy.get('#formComidaVegetariana')
            .should('to.be.checked');
    })

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau incompleto')
            .should('have.value', '2grauincomp');
        
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp');
        
        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8);
        
        cy.get('[data-test="dataEscolaridade"] option')
            .then($arr => {
                const values = [];
                $arr.each(function() {
                    values.push(this.innerHTML);
                })
                expect(values).to.include.members(["Superior", "Mestrado"]);
            })
    })

    it('Combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada']);

        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada']);
            expect($el.val()).to.have.length(3);
        });

        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql', ['natacao', 'Corrida', 'nada']);
    })
})