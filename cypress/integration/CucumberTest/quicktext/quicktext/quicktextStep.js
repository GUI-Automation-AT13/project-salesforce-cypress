/// <reference types="Cypress" />

const {And, Given, Then, When} = require('cypress-cucumber-preprocessor/steps')
const endPoint = require('../../../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../../../salesforce/ui/transporter')
const {dataTableToJson} = require('../../../../support/utils/convertToJson')
const {createQuickText} = require('../../../../salesforce/ui/quickText/new-quicktext')
const {login} = require('../../../../salesforce/ui/action')
const {validateQuickText} = require('../../../../salesforce/ui/quickText/validate-quicktext')
const quickText = require('../../../../salesforce/ui/quickText/quickText')
const {deleteQuickText} = require('../../../../salesforce/api/quicktext/delete-quicktext')

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
