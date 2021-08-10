const apiLogin = require('../login')
const feature = require('../features')

export function deleteQuickText() {
    cy.location('pathname').then((url) => {
        apiLogin.asyncLogin().then((response) => {
            const idObject = url.substr(1)
            feature.deleteOne("Quicktext", response.body.access_token, idObject)
        })
    })
}