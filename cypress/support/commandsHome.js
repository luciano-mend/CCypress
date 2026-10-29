import loc from '../support/locators'

Cypress.Commands.add('acessarMenuHome', () => {
    cy.get(loc.MENU.HOME).click()
})

Cypress.Commands.add('validarSaldoConta', (conta, valor) => {
    cy.xpath(loc.HOME.XP_SALDO_CONTA(conta)).should('contain', valor)
})