const detailContact = require("../../../../fixtures/locator/contact/detail-contact.json");
import {getJsonEntityAttributes} from '../../../core/entity-actions'
import {iterateSetToRunMap} from '../../../core/map-actions'
const {getCurrentDate} = require('../../../utils/formatDate')
const {createContactName} = require('../../../utils/formContactName')

function setValidationContactMap(contactData) {
  const contactMap = new Map()
  const createdBy = getCurrentDate()
  const fullName = createContactName(contactData.salutation, contactData.firstName, contactData.lastName)
  contactMap.set("topName", () => cy.validateConteinTextInField(detailContact.topName, fullName))
  contactMap.set("detailName", () => cy.validateConteinTextInField(detailContact.detailName, fullName))
  contactMap.set("createdBy", () => cy.validateConteinTextInField(detailContact.createdBy, createdBy))
  contactMap.set("contact", () => cy.validateConteinTextInField(detailContact.lastModifiedBy, createdBy))
  return contactMap
}

export function validateContact(contactData) {
  const contactMap = setValidationContactMap(contactData)
  const ContactSet = getJsonEntityAttributes(contactData)
  iterateSetToRunMap(contactMap, ContactSet)
}
