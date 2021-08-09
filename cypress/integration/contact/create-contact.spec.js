/// <reference types='Cypress' />

const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const data = require('../../fixtures/features/contact/contact.json')
const dataDuplicate = require('../../fixtures/features/contact/duplicate_record.json')
const invalidData = require('../../fixtures/features/contact/invalid_data.json')
const newContactJSON = require('../../fixtures/locator/contact/new-contact.json')
const contact = require("../../fixtures/locator/contact/contacts.json");
import {createContact} from '../../src/salesforce/contact/new-contact'
import {login} from '../../src/core/action'
import {validateContact} from '../../src/salesforce/contact/detail-contact'

describe('test for contact feature', () => {
    beforeEach(() => {
        pageTransporter('/')
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endPoint.contact)
        cy.clickField(contact.newContactBtn)
    })

    it('create contact with all fields', () => {
        createContact(data)
        validateContact(data)
    });

    it('Validated Duplicate Record', () => {
        createContact(dataDuplicate)
        cy.valid_alert_field(newContactJSON.alertSelectorMessage, newContactJSON.alertMessage)
    });

    it.only('Validated Invalida Data', () => {
        createContact(invalidData)
        cy.valid_alert_field(newContactJSON.alertSelectorInvalidData, newContactJSON.invalidDataMessage)
    });
})
