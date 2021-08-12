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
export function setField(selector, inputText) {
    cy.get(selector).should('be.visible').type(inputText)
}

export function cleanAndSetField(selector, inputText) {
    cy.get(selector).should('be.visible').clear().type(inputText)
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

export function refreshTable() {
    cy.get("input[id*='refresh']").click()
}

export function search(wordToSearch) {
    cy.get('#phSearchInput').type(wordToSearch)
    cy.get('#phSearchButton').click()
}
