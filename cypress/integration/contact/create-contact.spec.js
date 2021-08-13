/// <reference types='Cypress' />

const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../salesforce/ui/transporter')
const data = require('../../fixtures/features/contact/contact.json')
const dataDuplicate = require('../../fixtures/features/contact/duplicate_record.json')
const invalidData = require('../../fixtures/features/contact/invalid_data.json')
const newContactJSON = require('../../fixtures/locator/contact/new-contact.json')
const contact = require("../../fixtures/locator/contact/contacts.json");
const apiLogin = require("../../salesforce/api/login")
const feature = require('../../salesforce/api/features')
import {createContact} from '../../salesforce/ui/contact/new-contact'
import {login} from '../../salesforce/ui/action'
import {validateContact} from '../../salesforce/ui/contact/detail-contact'

describe('test for contact feature', () => {
    let token = ''
    let accountId = ''
    let contactId = ''

    before(() => {
        apiLogin.login().then((result) => {
            token = result.body.access_token
        })
    })

    beforeEach(() => {
        pageTransporter('/')
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endPoint.contact)
        cy.clickField(contact.newContactBtn)
    })

    it.only('create contact with all fields', () => {

        const account = {
            "Name": data.accountName
        }
        const repotToContact = {
            "LastName": data.reportsTo
        }
        feature.create("Account", token, account).then((response) => {
            accountId = response.body.id
            feature.create("Contact", token, repotToContact).then((response2) => {
                contactId = response2.body.id
            })
        }).then(() => {
            createContact(data)
            validateContact(data)
        })
    });

    it('Validated Duplicate Record', () => {
        createContact(dataDuplicate)
        cy.valid_alert_field(newContactJSON.alertSelectorMessage, newContactJSON.alertMessage)
    });

    it('Validated Invalida Data', () => {
        createContact(invalidData)
        cy.valid_alert_field(newContactJSON.alertSelectorInvalidData, newContactJSON.invalidDataMessage)
    });

    after(() => {
        if (contactId !== '') {
            feature.deleteOne("Contact", token, contactId)
        }
        if (accountId !== '') {
            feature.deleteOne("Account", token, accountId)
        }
    })
})
