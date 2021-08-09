/// <reference types="Cypress" />

import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
const endPoint = require('../../../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../../../src/salesforce/transporter')
const contact = require("../../../../fixtures/locator/contact/contacts.json");
const {dataTableToJson} = require('../../../../src/utils/convertToJson')
import {createContact} from '../../../../src/salesforce/contact/new-contact'
import {login} from '../../../../src/core/action'
import {validateContact , deleteContact} from '../../../../src/salesforce/contact/detail-contact'

let newObject;

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
    // deleteContact()
});
