const apiLogin = require('../login')
const feature = require('../features')

export function deleteContact() {
    cy.location('pathname').then((url) => {
        apiLogin.login().then((response) => {
            const idObject = url.substr(1)
            feature.deleteOne("Contact", response.body.access_token, idObject)
        })
    })
}
