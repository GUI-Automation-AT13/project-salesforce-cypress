const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/ui/transporter')
const quickText = require('../../src/salesforce/ui/quickText/quickText')
const {createQuickText} = require('../../src/salesforce/ui/quickText/new-quicktext')
const {validateQuickText, formJsonExpected} = require("../../src/salesforce/ui/quickText/validate-quicktext");
const jsonDataQuickTextAllParams = require('../../fixtures/features/quicktext/all-params.json')
const jsonDataQuickTextJustParamsRequired = require('../../fixtures/features/quicktext/params-required.json')
const {login, obtainId} = require("../../src/salesforce/ui/action");
const apiLogin = require("../../src/salesforce/api/login");
const {getCurrentDate} = require('../../src/utils/formatDate')
const feature = require('../../src/salesforce/api/features')
const {validateTableData} = require("../../src/salesforce/ui/validate-tabledata");
describe('test for feature Quick Text', () => {
    let idObject = ''
    let token = ''
    let actualDate = ''
    let originalName = ''
    before(() => {
        apiLogin.login().then((result) => {
            token = result.body.access_token
        })
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
        obtainId().then((url) => {
            idObject = url.substr(1)
        })
        pageTransporter(endPoint.quicktext)
        validateTableData(jsonDataQuickTextJustParamsRequired.name).then((actualData) => {
            const expectedData = formJsonExpected(jsonDataQuickTextJustParamsRequired)
            expect(actualData).to.deep.equal(expectedData)
        })
    })
    it('new quickText with all parameters', () => {
        jsonDataQuickTextAllParams.name = originalName + actualDate
        pageTransporter(endPoint.quicktext)
        quickText.newQuickText()
        createQuickText(jsonDataQuickTextAllParams)
        validateQuickText(jsonDataQuickTextAllParams)
        obtainId().then((url) => {
            idObject = url.substr(1)
        })
        pageTransporter(endPoint.quicktext)
        validateTableData(jsonDataQuickTextAllParams.name).then((actualData) => {
            const expectedData = formJsonExpected(jsonDataQuickTextAllParams)
            expect(actualData).to.deep.equal(expectedData)
        })
    })
    afterEach(() => {
        feature.deleteOne("Quicktext", token, idObject)
        pageTransporter(endPoint.quicktext)
    })
})
