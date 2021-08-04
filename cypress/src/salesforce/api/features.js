export function getAll(feature, token) {
    const options = {
        "method": 'GET',
        "url": Cypress.env('BASE_URL') + Cypress.env('API_FEATURES') + feature,
        "headers": {
            'Accept': 'application/json',
            'Authorization': 'Bearer '.concat(token)
        }
    }
    return cy.request(options)
}

export function getOne(feature, token, idObject) {
    const options = {
        "method": 'GET',
        "url": Cypress.env('BASE_URL') + Cypress.env('API_FEATURES') + feature + '/' + idObject,
        "headers": {
            'Accept': 'application/json',
            'Authorization': 'Bearer '.concat(token)
        }
    }
    return cy.request(options)
}

export function deleteOne(feature, token, idObject) {
    const options = {
        "method": 'DELETE',
        "url": Cypress.env('BASE_URL') + Cypress.env('API_FEATURES') + feature + '/' + idObject,
        "headers": {
            'Accept': 'application/json',
            'Authorization': 'Bearer '.concat(token)
        }
    }
    return cy.request(options)
}

export function create(feature, token, jsonQuickText) {
    const options = {
        "method": 'POST',
        "url": Cypress.env('BASE_URL') + Cypress.env('API_FEATURES') + feature,
        "headers": {
            'Accept': 'application/json',
            'Authorization': 'Bearer '.concat(token)
        },
        "body": jsonQuickText
    }
    return cy.request(options)
}