Cypress.Commands.add('setField', (selector, inputText) => {
    cy.get(selector).should('be.visible').type(inputText)
})

Cypress.Commands.add('clickField', (selector) => {
    cy.get(selector).should('be.visible').click()
})

Cypress.Commands.add('checkField', (selector) => {
    cy.get(selector).should('be.visible').check()
})

Cypress.Commands.add('selectField', (selector, option) => {
    cy.get(selector).should('be.visible').select(option)
})

Cypress.Commands.add('validateTextInField', (selector, fieldText) => {
    cy.get(selector).should('be.visible').should('have.text', fieldText)
})

Cypress.Commands.add('validateConteinTextInField', (selector, fieldText) => {
    cy.get(selector).should('be.visible').should('contain.text', fieldText)
})
