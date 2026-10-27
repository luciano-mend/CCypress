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
import dayjs from 'dayjs';

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

Cypress.Commands.add('getToken', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: usuario,
            senha: senha,
            redirecionar: false
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
        })
})

Cypress.Commands.add('resetRest', (token) => {
    cy.request({
        method: 'GET',
        url: '/reset',
        headers: {
            Authorization: `JWT ${token}`,
            'Content-Type': 'application/json'
        }
    }).its('status').should('be.equal', 200)
})

Cypress.Commands.add('getContaNyName', (descricao, token) => {
    cy.request({
            url: '/contas',
            headers: { 
                Authorization: `JWT ${token}`, 
                'Content-Type': 'application/json'
            },
            qs: {
                nome: descricao
            }
        }).then(resposta => {
            expect(resposta.body).not.to.be.null
            return resposta.body[0].id
        })
})

Cypress.Commands.add('inserirMovimentacao', (descricao, valor, contaId, token) => {
    cy.request({
        url: '/transacoes',
        method: 'POST',
        headers: { 
            Authorization: `JWT ${token}`, 
            'Content-Type': 'application/json'},
        body: {
            conta_id: `${contaId}`,
            data_pagamento: dayjs().add(1, 'day').format('DD/MM/YYYY'),
            data_transacao: dayjs().format('DD/MM/YYYY'),
            descricao: descricao,
            envolvido: "Interessado",
            status: true,
            tipo: "REC",
            valor: valor
        }
    }).then(resposta => {
        expect(resposta.status).to.be.equal(201)
        return resposta
    })
})

Cypress.Commands.add('getSaldoConta', (nomeConta, token) => {
    return cy.request({
            url: '/saldo',
            method: 'GET',
            headers: {
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .its('body')
        .then(resposta => {
            let saldoConta
            resposta.forEach(conta => {
                if (conta.conta === nomeConta) {
                    expect(conta.saldo).not.to.be.null
                    saldoConta = conta.saldo
                }
            })
            return saldoConta
        })

})

Cypress.Commands.add('getMovimentacaoByName', (nomeMovimentacao, token) => {
    return cy.request({
            url: '/transacoes',
            method: 'GET',
            headers: {
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            qs: {
                descricao: nomeMovimentacao
            }
        })
        .then(resposta => {
            expect(resposta.body).to.have.length.greaterThan(0)
            expect(resposta.body[0].id).to.exist
            return resposta.body[0].id
        })

})

