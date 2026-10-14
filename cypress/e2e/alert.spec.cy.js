/// <reference types="cypress" />

describe('Trabalhando com alerts', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    it('Alert', () => {
        cy.clickAlert('#alert', 'Alert Simples');
    })

    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta');
        
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples');
        });
        cy.wrap(stub).should('have.been.calledOnce')
    })

    it('Confirm', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples');
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado');
        })
        cy.get('#confirm').click();
    })

    it('Confirm com cancelar', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples');
            return false;
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado');
        })
        cy.get('#confirm').click();
    })

    it('Prompt', () => {
        cy.window().then( win => {
            cy.stub(win, 'prompt').returns('55');
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 55?');
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D');
        })
        cy.get('#prompt').click();
    })

    it('Validar mensagens', () => {
        const stub = cy.stub().as('alerta');
        cy.on('window:alert', stub)
        cy.get('[name="formCadastrar"]').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio');
            });
        cy.get('[name="formNome"]').type('Luciano')
        cy.get('[name="formCadastrar"]').click()
            .then(() => {
                expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio');
            });
        cy.get('[data-cy="dataSobrenome"]').type('Mendonça')
        cy.get('[name="formCadastrar"]').click()
            .then(() => {
                expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio');
            });
        cy.get(':nth-child(1) > [name="formSexo"]').click()
        cy.get('[name="formCadastrar"]').click()
        cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
    })

});