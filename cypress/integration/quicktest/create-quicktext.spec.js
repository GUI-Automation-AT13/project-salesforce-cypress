const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const quickText = require('../../src/salesforce/quickText/quickText')
const newQuickText = require('../../src/salesforce/quickText/new-quicktext')
const detailQuickText = require('../../src/salesforce/quickText/detail-quicktext')
const dataQuickText = require('../../fixtures/features/quicktext.json')
const feature = require('../../src/salesforce/api/features')
const login = require("../../src/salesforce/api/login");

describe('test for feature Quick Text', () => {
    let idObject = ''
    let token = ''
    before(async () => {
        token = await login.login()
    })
    beforeEach(() => {
        pageTransporter('/')
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })
    it('new quickText test', () => {
        pageTransporter(endPoint.quicktext)
        quickText.newQuickText()
        newQuickText.setName(dataQuickText.name)
        newQuickText.setMessage(dataQuickText.message)
        newQuickText.insertMergeField(dataQuickText.relatedTo, dataQuickText.fieldOption)
        newQuickText.setCategory(dataQuickText.category)
        newQuickText.setChannel(dataQuickText.channel)
        newQuickText.clickSaveBtn()
        // asserts
        detailQuickText.getFormName().should('have.text', dataQuickText.name)
        detailQuickText.getFormMessage().should('have.text', dataQuickText.message)
        detailQuickText.getFormCategory().should('have.text', dataQuickText.category)
        detailQuickText.getFormChannel().should('have.text', dataQuickText.finalChannel)
        // Obtain id of the new QuickText
        cy.location('pathname').then((url) => {
            idObject = url.substr(1)
        })
        pageTransporter(endPoint.quicktext)
    })
    afterEach(() => {
        feature.deleteOne("Quicktext", token, idObject)
    })
})
