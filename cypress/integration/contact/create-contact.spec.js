/// <reference types='Cypress' />

const endPoint = require('../../fixtures/endpoint/endpoint.json')
const {pageTransporter} = require('../../src/salesforce/transporter')
const contact = require('../../src/salesforce/contact/contact')
const newContact = require('../../src/salesforce/contact/new-contact')
const detailContact = require('../../src/salesforce/contact/detail-contact')



describe('test for contact feature', () => {

    let time = 1000

    beforeEach(()=>{
        pageTransporter('/')
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.fixture('features/contact').then(function(data){
            globalThis.data=data
        })
    })

    it('titleTest', () => {
        pageTransporter('/'+endPoint.contact)
        contact.clickNewContactBtn()
        newContact.addContactSalutation(data.salutation)
        newContact.addContactFirstName(data.firstName)
        newContact.addContactLastName(data.lastName)
        newContact.addContactTitle(data.title)
        newContact.addContactDeparment(data.deparment)
        newContact.addContactBirthday(data.birthday)
        newContact.addContactLeadSource(data.leadSource)
        newContact.addContactPhone(data.phone)
        newContact.addContactHomePhone(data.homePhone)
        newContact.addContactMobile(data.mobile)
        newContact.addContactOtherPhone(data.otherPhone)
        newContact.addContactFax(data.fax)
        newContact.addContactEmail(data.email)
        newContact.addContactAssitantName(data.assitantName)
        newContact.addContactAssitantPhone(data.assitantPhone)
        newContact.addContactMailingStreet(data.mailingStreet)
        newContact.addContactMailingPostalCode(data.mailingPostalCode)
        newContact.addContactMailingCity(data.mailingCity)
        newContact.addContactMailingState(data.mailingState)
        newContact.addContactMailingCountry(data.mailingCountry)
        newContact.addContactOtherStreet(data.otherStreet)
        newContact.addContactOtherPostalCode(data.otherPostalCode)
        newContact.addContactOtherCity(data.otherCity)
        newContact.addContactOtherState(data.otherState)
        newContact.addContactOtherCountry(data.otherCountry)
        newContact.addContactLanguage(data.language)
        newContact.addContactLevel(data.level)
        newContact.addContactDescription(data.description)
        newContact.clickSaveButton()
        let fullName = data.salutation+' '+data.firstName+" "+data.lastName 
        detailContact.getTopName().should('contain.text', fullName)
        detailContact.getDetailName().should('contain.text', fullName)
        detailContact.getUrl()
        pageTransporter(endPoint.contact)
    });
})