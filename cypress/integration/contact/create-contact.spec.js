/// <reference types='Cypress' />
const endPoint = require('../../fixtures/endpoint/endpoint.json')
const pageTransporter = require('../../src/salesforce/transporter')
const contact = require('../../src/salesforce/contact/contact')
const newContact = require('../../src/salesforce/contact/new-contact')


describe('test for contact feature', () => {

    let time = 1000

    beforeEach(()=>{
        pageTransporter('/')
        cy.login(Cypress.env('username'),Cypress.env('password'))
    })

    it('titleTest', () => {
        cy.get('locator');
    });
})