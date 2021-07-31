Cypress.Commands.add('readFile', (path) => {
    return cy.fixture(path)
})