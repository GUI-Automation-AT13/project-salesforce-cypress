/// <reference types='Cypress' />

const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const contact = require('../../src/salesforce/contact/contact')
const newContact = require('../../src/salesforce/contact/new-contact')
const data = require('../../fixtures/features/contact.json')
const newContactJSON = require('../../fixtures/locator/contact/new-contact.json')
import {createContact} from '../../src/salesforce/contact/new-contact'
import {validateContact} from '../../src/salesforce/contact/detail-contact'

describe('test for contact feature', () => {
    beforeEach(() => {
        pageTransporter('/')
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endPoint.contact)
        contact.clickNewContactBtn()
    })

    it.only('titleTest', () => {
        createContact(data)
        validateContact(data)
        pageTransporter(endPoint.contact)
    });

    it('Validated Duplicate Record', () => {
        pageTransporter(endPoint.contact)
        contact.clickNewContactBtn()
        newContact.addContactFirstName(data.firstName)
        newContact.addContactLastName(data.lastName)
        newContact.addContactTitle(data.title)
        newContact.addContactPhone(data.phone)
        newContact.addContactEmail(data.email)
        newContact.addContactMailingStreet(data.mailingStreet)
        newContact.addContactMailingPostalCode(data.mailingPostalCode)
        newContact.addContactMailingCity(data.mailingCity)
        newContact.clickSaveButton()
        cy.valid_alert_field(newContactJSON.alertSelectorMessage, newContactJSON.alertMessage)
    });

    it('Validated Invalida Data', () => {
        pageTransporter(endPoint.contact)
        contact.clickNewContactBtn()
        newContact.addContactFirstName(data.firstName)
        newContact.addContactLastName(data.lastName)
        newContact.addContactAccountName(data.badAccountName)
        newContact.addContactReportsTo(data.badReportsTo)
        newContact.clickSaveButton()
        cy.valid_alert_field(newContactJSON.alertSelectorInvalidData, newContactJSON.invalidDataMessage)
    });
})
