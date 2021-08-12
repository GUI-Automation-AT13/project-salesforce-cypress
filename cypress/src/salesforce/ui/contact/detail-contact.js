const detailContact = require("../../../../fixtures/locator/contact/detail-contact.json");
const {getCurrentDate} = require('../../../utils/formatDate')
const {createContactName} = require('../../../utils/formContactName')

export function validateContact(contactData) {
  const createdBy = getCurrentDate().substring(0, 15)
  const fullName = createContactName(contactData.salutation, contactData.firstName, contactData.lastName)
  cy.validateConteinTextInField(detailContact.topName, fullName)
  cy.validateConteinTextInField(detailContact.detailName, fullName)
  cy.validateConteinTextInField(detailContact.createdBy, createdBy)
  cy.validateConteinTextInField(detailContact.lastModifiedBy, createdBy)
}
