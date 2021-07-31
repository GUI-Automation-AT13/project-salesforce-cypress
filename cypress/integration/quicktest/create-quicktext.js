const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const quickText = require('../../src/salesforce/quickText/quickText')
const newQuickText = require('../../src/salesforce/quickText/new-quicktext')
const detailQuickText = require('../../src/salesforce/quickText/detail-quicktext')

describe('test for feature Quick Text', () => {
    const name = 'Quick Text Name'
    const message = 'Message Quick Text'
    const relatedTo = 'Account Fields'
    const fieldOption = 'Account Number'
    const category = 'FAQ'
    const channel = 'Phone'
    const finalChannel = 'Email; Phone'

    beforeEach(() => {
        pageTransporter('/')
        cy.login(Cypress.env('username'), Cypress.env('password'))
    })
    it('new quickText test', () => {
        pageTransporter(endPoint.quicktext)
        quickText.newQuickText()
        newQuickText.setName(name)
        newQuickText.setMessage(message)
        newQuickText.insertMergeField(relatedTo, fieldOption)
        newQuickText.setCategory(category)
        newQuickText.setChannel(channel)
        newQuickText.clickSaveBtn()
        // asserts
        detailQuickText.getFormName().should('have.text', name)
        detailQuickText.getFormMessage().should('have.text', message)
        detailQuickText.getFormCategory().should('have.text', category)
        detailQuickText.getFormChannel().should('have.text', finalChannel)
    })
})