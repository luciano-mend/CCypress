import loc from '../support/locators'

Cypress.Commands.add('acessarMenuExtrato', () => {
    cy.get(loc.MENU.EXTRATO).click()
})

Cypress.Commands.add('validarQtdItensExtrato', (quantidade) => {
    cy.get(loc.EXTRATO.QTD_ITENS_TABELA).should('have.length', quantidade)
})

Cypress.Commands.add('validarItemExtrato', (desc, valor, conta) => {
    cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO(desc, valor, conta)).should('exist')
})

Cypress.Commands.add('removerItemExtrato', (desc, valor, conta) => {
    cy.xpath(loc.EXTRATO.XP_BTN_EXCLUIR_MOVIMENTACAO(desc, valor, conta)).click()
    cy.get(loc.MENSAGEM).should('contain', 'Movimentação removida com sucesso!')
})

Cypress.Commands.add('editarStatusItemExtrato', (desc, conta) => {
    cy.xpath(loc.EXTRATO.XP_BTN_EDITAR_MOVIMENTACAO(desc, conta)).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', desc)
    cy.get(loc.MOVIMENTACAO.BTN_STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MENSAGEM).should('contain', 'Movimentação alterada com sucesso!')
    cy.get(loc.BTN_FECHAR_MENSAGEM_SUCESSO).click()
})