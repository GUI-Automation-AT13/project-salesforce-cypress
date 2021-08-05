const quickText = require('../../../fixtures/locator/quicktext/quicktext.json')

export function newQuickText() {
    cy.get(quickText.newQuickTextBtn).click()
}

export function findNameFromTable(idQuickText) {
    return cy.get(quickText.findNameFromTable.replace('%s', idQuickText)).should("be.visible")
}
