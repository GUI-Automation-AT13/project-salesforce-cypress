/// <reference types="Cypress" />

const {And, Given, Then, When} = require('cypress-cucumber-preprocessor/steps')
const endPoint = require('../../../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../../../src/salesforce/ui/transporter')
const {dataTableToJson} = require('../../../../src/utils/convertToJson')
const {createQuickText} = require('../../../../src/salesforce/ui/quickText/new-quicktext')
const {login} = require('../../../../src/salesforce/ui/action')
const {validateQuickText} = require('../../../../src/salesforce/ui/quickText/validate-quicktext')
const quickText = require('../../../../src/salesforce/ui/quickText/quickText')
const {deleteQuickText} = require('../../../../src/salesforce/api/quicktext/delete-quicktext')

let newObject = '';

Given(/^I login to salesforce site as an admin user$/, async () => {
    pageTransporter('/')
    login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
});

And(/^I navigate to "(.*?)" page$/, (valor) => {
    pageTransporter(endPoint[valor])
});

When(/^I create a new QuickText with fields$/, function (dataTable) {
    quickText.newQuickText()
    newObject = dataTableToJson(dataTable)
    createQuickText(newObject)
});

Then(/^I validate all fields$/, () => {
    validateQuickText(newObject)
    deleteQuickText()
});
