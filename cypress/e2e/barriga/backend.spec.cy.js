/// <reference types="cypress" />

describe('Testes funcionais', () => {

    let token

    before(() => {
        cy.getToken('luciano@email.com', '123456')
            .then(tkn => {
                token = tkn
            })
    })

    beforeEach(() => {
        cy.resetRest(token)
    })

    it('Deve inserir uma conta', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { 
                Authorization: `JWT ${token}`, 
                'Content-Type': 'application/json'},
            body: {
                nome: 'Conta via rest Luciano'
            }
        }).as('response')

        cy.get('@response').then(resposta => {
            expect(resposta.status).to.be.equal(201)
            expect(resposta.body).to.have.property('id')
            expect(resposta.body).to.have.property('nome', 'Conta via rest Luciano')
        })
    })

    it('Deve alterar uma conta', () => {
        cy.getContaNyName('Conta para alterar', token)
            .then(contaId => {
                expect('contaId').not.to.be.null
                cy.request({
                    url: `/contas/${contaId}`,
                    method: 'PUT',
                    headers: { 
                        Authorization: `JWT ${token}`, 
                        'Content-Type': 'application/json'
                    },
                    body: {
                        nome: 'Conta alterada via rest Luciano'
                    }
                }).its('body.nome')
                    .should('be.equal', 'Conta alterada via rest Luciano')
            })
    })

    it('Não deve inserir uma conta com mesmo nome', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { 
                Authorization: `JWT ${token}`, 
                'Content-Type': 'application/json'},
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false
        }).as('response')

        cy.get('@response').then(resposta => {
            expect(resposta.status).to.be.equal(400)
            expect(resposta.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })

    it('Deve inserir uma movimentação', () => {
        cy.getContaNyName('Conta para movimentacoes', token)
            .then(contaId => {
                cy.inserirMovimentacao('Movimentacao Rest Luciano', '123456', contaId, token)
                    .then(resposta => {
                        expect(resposta.body).to.have.property('descricao', 'Movimentacao Rest Luciano')
                    })
        })
    })

    it('Deve verificar o saldo', () => {
        const nomeConta = 'Conta para saldo'

        cy.getSaldoConta(nomeConta, token)
            .then(saldoConta => {
                expect(saldoConta).to.be.equal('534.00')
            })
        cy.getContaNyName(nomeConta, token)
            .then(contaId => {
                cy.inserirMovimentacao('Movimentacao Rest Luciano', '1000', contaId, token)
            })
        cy.getSaldoConta(nomeConta, token)
            .then(resposta => {
                expect(resposta).to.be.equal('1534.00')
            })
    })

    it('Deve remover uma movimentação', () => {
        cy.getMovimentacaoByName('Movimentacao 1, calculo saldo', token)
        .then(movimentacaoId => {
            cy.request({
                url: `/transacoes/${movimentacaoId}`,
                method: 'DELETE',
                headers: {
                    Authorization: `JWT ${token}`,
                    'Content-Type': 'application/json'
                },
                qs: {
                    descricao: 'Movimentacao 1, calculo saldo'
                }
            })
            .then(resposta => {
                expect(resposta.status).to.be.equal(204)
            })
        })
    })

})