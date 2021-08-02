export function setField(selector, inputText) {
    cy.get(selector).type(inputText)
}

export function clickField(selector) {
    cy.get(selector).click()
}

export function checkField(selector) {
    cy.get(selector).check()
}

export function selectField(selector, option) {
    cy.get(selector).select(option)
}

export function validateTextInField(selector, fieldText) {
    cy.get(selector).should('have.text', fieldText)
}
