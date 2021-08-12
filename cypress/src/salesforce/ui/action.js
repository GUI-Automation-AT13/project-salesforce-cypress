export function login (username, password) {
cy.fixture("locator/login").then((loginData) => {
        cy.get(loginData.usernameTxtBox).should('be.visible').clear().type(username)
        cy.get(loginData.passwordTxtBox).should('be.visible').clear().type(password)
        cy.get(loginData.loginBtn).should('be.visible').click()
    })
}

export function obtainId () {
    return cy.location('pathname')
}
