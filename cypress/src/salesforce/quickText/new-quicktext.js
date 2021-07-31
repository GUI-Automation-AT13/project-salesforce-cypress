const quickText = require('../../../fixtures/locator/quicktext/new-quicktext.json')

export function setName(name) {
    cy.get(quickText.name).type(name)
}

export function setMessage(message) {
    cy.get(quickText.message).type(message)
}

export function insertMergeField(relatedToOption, fieldOption) {
    cy.get(quickText.mergeField).click()
    cy.get(quickText.mergeTypeSelect).select(relatedToOption)
    cy.get(quickText.mergeFieldSelect).should('be.visible').select(fieldOption)
}

export function setCategory(category) {
    cy.get(quickText.category).select(category)
}

export function setChannel(channel) {
    cy.get(quickText.channel).select(channel)
    cy.get(quickText.channelRightArrow).click()
}

export function clickSaveBtn() {
    cy.get(quickText.saveBtn).click()
}