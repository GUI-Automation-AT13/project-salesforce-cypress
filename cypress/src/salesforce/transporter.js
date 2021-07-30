export function pageTransporter (endpoint) {
    cy.visit(Cypress.config().baseUrl.concat(endpoint))
}