const options = {
    "method": 'POST',
    "url": Cypress.env('API_LOGIN'),
    "headers": {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    "body": {
        "client_id": Cypress.env('CLIENT_ID'),
        "client_secret": Cypress.env('CLIENT_SECRET'),
        "grant_type": 'password',
        "password": Cypress.env('PASSWORD'),
        "username": Cypress.env('USERNAME')
    }
}
export async function login() {
    const result = await cy.request(options)
    return result.body.access_token
}

export function asyncLogin() {
    return cy.request(options)
}