import loc from './locators'

Cypress.Commands.add('acessarMenuMovimentacao', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
})

Cypress.Commands.add('inserirMovimentacao', (tipo, descricao, valor, interessado, conta, status) => {
    if (tipo === 'R') {
        cy.get(loc.MOVIMENTACAO.RECEITA).click()
    } else {
        cy.get(loc.MOVIMENTACAO.DESPESA).click()
    }
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type(descricao)
    cy.get(loc.MOVIMENTACAO.VALOR).type(valor)
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type(interessado)
    cy.get(loc.MOVIMENTACAO.CONTA).select(conta)
    if (status === 'P') {
        cy.get(loc.MOVIMENTACAO.BTN_STATUS).click()
    }
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.BTN_FECHAR_MENSAGEM_SUCESSO).click()
})