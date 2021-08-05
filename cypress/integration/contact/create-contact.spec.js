/// <reference types='Cypress' />

const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const data = require('../../fixtures/features/contact/contact.json')
const dataDuplicate = require('../../fixtures/features/contact/duplicate_record.json')
const invalidData = require('../../fixtures/features/contact/invalid_data.json')
const newContactJSON = require('../../fixtures/locator/contact/new-contact.json')
const contact = require("../../fixtures/locator/contact/contacts.json");
import {clickField} from '../../src/core/action'
import {createContact} from '../../src/salesforce/contact/new-contact'
import {validateContact} from '../../src/salesforce/contact/detail-contact'

describe('test for contact feature', () => {
    beforeEach(() => {
        pageTransporter('/')
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endPoint.contact)
        clickField(contact.newContactBtn)
    })

    // beforeEach(() => {
    //     clickField(contact.newContactBtn)
    // })

    // afterEach(() => {
    //     pageTransporter(endPoint.contact)
    // })

    it('create contact with all fields', () => {
        createContact(data)
        validateContact(data)
        // pageTransporter(endPoint.contact)
    });

    it.only('Validated Duplicate Record', () => {
        createContact(dataDuplicate)
        cy.valid_alert_field(newContactJSON.alertSelectorMessage, newContactJSON.alertMessage)
        // clickField(newContactJSON.cancelBtn)
        // pageTransporter(endPoint.contact)
    });

    it.only('Validated Invalida Data', () => {
        createContact(invalidData)
        cy.valid_alert_field(newContactJSON.alertSelectorInvalidData, newContactJSON.invalidDataMessage)
        // clickField(newContactJSON.cancelBtn)
        // pageTransporter(endPoint.contact)
    });
})
