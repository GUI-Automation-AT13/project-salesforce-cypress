export function pageTransporter (endpoint) {
    cy.visit(Cypress.env('BASE_URL').concat(endpoint))
}
