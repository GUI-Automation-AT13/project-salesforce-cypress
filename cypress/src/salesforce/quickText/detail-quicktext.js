const quickText = require('../../../fixtures/locator/quicktext/detail-quicktext.json')

export function getFormName() {
    return cy.get(quickText.formName)
}
export function getFormMessage() {
    return cy.get(quickText.formMessage)
}
export function getFormCategory() {
    return cy.get(quickText.formCategory)
}
export function getFormChannel() {
    return cy.get(quickText.formChannel)
}