Cypress.Commands.add('login', (username, password) => {
    cy.fixture("locator/login").then((login) => {
        cy.get(login.usernameTxtBox).should('be.visible').clear().type(username)
        cy.get(login.passwordTxtBox).should('be.visible').clear().type(password)
        cy.get(login.loginBtn).should('be.visible').click()
    })
})