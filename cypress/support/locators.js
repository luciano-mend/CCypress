const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test="menu-movimentacao"]',
        HOME: '[data-test="menu-home"]',
        EXTRATO: '[data-test="menu-extrato"]'
    },
    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: (conta) => `//td[.='${conta}']/..//i[@class='far fa-edit']`,
        XP_NOME_CONTA: (nomeConta) => `//td[.='${nomeConta}']`
    },
    MOVIMENTACAO: {
        RECEITA: '[data-test="tipo-receita"]',
        DESPESA: '[data-test="tipo-despesa"]',
        DESCRICAO: '#descricao',
        VALOR: '[data-test="valor"]',
        INTERESSADO: '#envolvido',
        CONTA: '[data-test="conta"]',
        BTN_STATUS: '[data-test="status"]',
        BTN_SALVAR: '.btn-primary'
    },
    EXTRATO: {
        QTD_ITENS_TABELA: '.list-group > li',
        XP_BUSCA_ELEMENTO: (desc, valor, conta) => `//span[.='${desc}']/../small[contains(text(),'${valor}')]/../following-sibling::div/small[.='${conta}']`,
        XP_BTN_EXCLUIR_MOVIMENTACAO: (descricao, valor, conta) => `//span[contains(text(),'${descricao}')]/../small[contains(text(),'${valor}')]/../following-sibling::div//small[contains(text(),'${conta}')]/../../following-sibling::div/a[2]`,
        XP_BTN_EDITAR_MOVIMENTACAO: (descricao, conta) => `//span[contains(text(),'${descricao}')]/../following-sibling::div//small[contains(text(),'${conta}')]/../../following-sibling::div/a[1]`
    },
    HOME: {
        XP_SALDO_CONTA: (conta) => `//td[contains(text(),'${conta}')]/following-sibling::td`,
    },
    MENSAGEM : '.toast-message',
    BTN_FECHAR_MENSAGEM_SUCESSO: '.toast-success > .toast-close-button'
}

export default locators;