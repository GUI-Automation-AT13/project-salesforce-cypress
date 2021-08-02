const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const quickText = require('../../src/salesforce/quickText/quickText')
const newQuickText = require('../../src/salesforce/quickText/new-quicktext')
const detailQuickText = require('../../src/salesforce/quickText/detail-quicktext')
const dataQuickText = require('../../fixtures/features/quicktext.json')

describe('test for feature Quick Text', () => {
    beforeEach(() => {
        pageTransporter('/')
        cy.login(Cypress.env('username'), Cypress.env('password'))
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
    })
})
