/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'
import '../../support/commandsMovimentacao'
import '../../support/commandsExtrato'
import '../../support/commandsHome'

describe('Testes funcionais', () => {

    beforeEach(() => {
        cy.login('luciano@email.com', '123456')
        cy.resetApp()
        cy.get(loc.MENU.HOME).click()
    })

    it('Deve inserir uma conta', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta inserida funcional')
        cy.get(loc.MENSAGEM).should('contain', 'Conta inserida com sucesso!')
    })

    it('Deve alterar uma conta', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR('Conta para alterar')).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta EDITADA funcional', { delay: 25 })
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MENSAGEM).should('contain', 'Conta atualizada com sucesso!')
    })

    it('Não deve inserir uma conta com mesmo nome', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
        cy.get(loc.MENSAGEM).should('contain', 'code 400')
    })

    it('Deve inserir uma movimentação', () => {
        cy.acessarMenuMovimentacao()
        cy.inserirMovimentacao('R', 'Receita de teste', '2000', 'Interessado teste', 'Conta para movimentacoes', 'P')
        cy.get(loc.MENSAGEM).should('contain', 'Movimentação inserida com sucesso!')
        cy.validarQtdItensExtrato(7)
        cy.validarItemExtrato('Receita de teste', '2.000,00', 'Conta para movimentacoes')
    })

    it('Deve verificar o saldo', () => {
        cy.acessarMenuHome()
        cy.validarSaldoConta('Conta para saldo', '534,00')

        cy.acessarMenuExtrato()
        cy.editarStatusItemExtrato('Movimentacao 1, calculo saldo', 'Conta para saldo')

        cy.acessarMenuHome()
        cy.validarSaldoConta('Conta para saldo', '4.034,00')
    })

    it('Deve remover uma movimentação', () => {
        cy.acessarMenuExtrato()
        cy.removerItemExtrato('Movimentacao para exclusao', '1.500,00', 'Conta para movimentacoes')
    })

})