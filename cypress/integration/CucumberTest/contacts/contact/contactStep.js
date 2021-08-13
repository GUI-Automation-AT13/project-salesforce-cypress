/// <reference types="Cypress" />

import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
const endPoint = require('../../../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../../../salesforce/ui/transporter')
const contact = require("../../../../fixtures/locator/contact/contacts.json");
const {dataTableToJson} = require('../../../../support/utils/convertToJson')
import {createContact} from '../../../../salesforce/ui/contact/new-contact'
import {login} from '../../../../salesforce/ui/action'
import {token} from './contactHook'
import {validateContact} from '../../../../salesforce/ui/contact/detail-contact'
const feature = require('../../../../salesforce/api/features')

let newObject = '';
let idObject = ''

Given(/^I login to salesforce site as an admin user$/, () => {
    pageTransporter('/')
    login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
});

And(/^I navigate to "(.*?)" page$/, (valor) => {
    pageTransporter(endPoint[valor])
});

When(/^I create a new Contact with fields$/, function (dataTable) {
    cy.clickField(contact.newContactBtn)
    newObject = dataTableToJson(dataTable)
    createContact(newObject)
});

Then(/^I validate all fields$/, () => {
    validateContact(newObject)
    cy.location('pathname').then((url) => {
        idObject = url.substr(1)
    })
});

And(/^I delete "(.*?)"$/, (valor) => {
    feature.deleteOne(valor, token, idObject)
});
