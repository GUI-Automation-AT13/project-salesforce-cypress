export function setField(selector, inputText) {
    cy.get(selector).should('be.visible').type(inputText)
}

export function clickField(selector) {
    cy.get(selector).should('be.visible').click()
}

export function checkField(selector) {
    cy.get(selector).should('be.visible').check()
}

export function selectField(selector, option) {
    cy.get(selector).should('be.visible').select(option)
}

export function validateTextInField(selector, fieldText) {
    cy.get(selector).should('be.visible').should('have.text', fieldText)
}

export function validateConteinTextInField(selector, fieldText) {
    cy.get(selector).should('be.visible').should('contain.text', fieldText)
}
