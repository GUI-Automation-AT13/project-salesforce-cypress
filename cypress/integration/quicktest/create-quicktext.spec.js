const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const quickText = require('../../src/salesforce/quickText/quickText')
const {createQuickText} = require('../../src/salesforce/quickText/new-quicktext')
const dataQuickText = require('../../fixtures/features/quicktext.json')
const login = require("../../src/salesforce/api/login");
const {getCurrentDate} = require('../../src/utils/formatDate')
const {validateQuickText} = require("../../src/salesforce/quickText/validate-quicktext");
const feature = require('../../src/salesforce/api/features')
describe('test for feature Quick Text', () => {
    let idObject = ''
    let token = ''
    let actualDate = ''
    let originalName = ''
    before(async () => {
        token = await login.login()
        originalName = dataQuickText.name
    })
    beforeEach(() => {
        actualDate = getCurrentDate()
        dataQuickText.name = originalName + actualDate
        pageTransporter('/')
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endPoint.quicktext)
        quickText.newQuickText()
    })
    it('new quickText with only just parameters required', () => {
        delete dataQuickText.relatedTo
        delete dataQuickText.fieldOption
        delete dataQuickText.category
        delete dataQuickText.channel
        createQuickText(dataQuickText)
        validateQuickText(dataQuickText)
        // Obtain id of the new QuickText
        cy.location('pathname').then((url) => {
            idObject = url.substr(1)
            // Assert name in the home feature
            pageTransporter(endPoint.quicktext)
            quickText.findNameFromTable(idObject).should('have.text', dataQuickText.name)
        })
    })
    it('new quickText with all parameters', () => {
        createQuickText(dataQuickText)
        validateQuickText(dataQuickText)
        // Obtain id of the new QuickText
        cy.location('pathname').then((url) => {
            idObject = url.substr(1)
            // Assert name in the home feature
            pageTransporter(endPoint.quicktext)
            quickText.findNameFromTable(idObject).should('have.text', dataQuickText.name)
        })
    })
    afterEach(() => {
        feature.deleteOne("Quicktext", token, idObject)
        pageTransporter(endPoint.quicktext)
    })
})
