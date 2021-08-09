const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/ui/transporter')
const quickText = require('../../src/salesforce/ui/quickText/quickText')
const {createQuickText} = require('../../src/salesforce/ui/quickText/new-quicktext')
const {validateQuickText} = require("../../src/salesforce/ui/quickText/validate-quicktext");
const jsonDataQuickTextAllParams = require('../../fixtures/features/quicktext/all-params.json')
const jsonDataQuickTextJustParamsRequired = require('../../fixtures/features/quicktext/params-required.json')
const {login} = require("../../src/salesforce/ui/action");
const apiLogin = require("../../src/salesforce/api/login");
const {getCurrentDate} = require('../../src/utils/formatDate')
const feature = require('../../src/salesforce/api/features')
describe('test for feature Quick Text', () => {
    let idObject = ''
    let token = ''
    let actualDate = ''
    let originalName = ''
    before(async () => {
        token = await apiLogin.login()
        originalName = jsonDataQuickTextAllParams.name
    })
    beforeEach(() => {
        actualDate = getCurrentDate()
        pageTransporter('/')
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })
    it('new quickText with only just parameters required', () => {
        jsonDataQuickTextJustParamsRequired.name = originalName + actualDate
        pageTransporter(endPoint.quicktext)
        quickText.newQuickText()
        createQuickText(jsonDataQuickTextJustParamsRequired)
        validateQuickText(jsonDataQuickTextJustParamsRequired)
        // Obtain id of the new QuickText
        cy.location('pathname').then((url) => {
            idObject = url.substr(1)
            // Assert name in the home feature
            pageTransporter(endPoint.quicktext)
            quickText.findNameFromTable(idObject).should('have.text', jsonDataQuickTextJustParamsRequired.name)
        })
    })
    it('new quickText with all parameters', () => {
        jsonDataQuickTextAllParams.name = originalName + actualDate
        pageTransporter(endPoint.quicktext)
        quickText.newQuickText()
        createQuickText(jsonDataQuickTextAllParams)
        validateQuickText(jsonDataQuickTextAllParams)
        // Obtain id of the new QuickText
        cy.location('pathname').then((url) => {
            idObject = url.substr(1)
            // Assert name in the home feature
            pageTransporter(endPoint.quicktext)
            quickText.findNameFromTable(idObject).should('have.text', jsonDataQuickTextAllParams.name)
        })
    })
    afterEach(() => {
        feature.deleteOne("Quicktext", token, idObject)
        pageTransporter(endPoint.quicktext)
    })
})
