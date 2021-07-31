const quickText = require('../../../fixtures/locator/quicktext/quicktext.json')

export function newQuickText() {
    cy.get(quickText.newQuickTextBtn).click()
}