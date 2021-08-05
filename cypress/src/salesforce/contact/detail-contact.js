const contact = require("../../../fixtures/locator/contact/detail-contact.json");
const detailContact = require("../../../fixtures/locator/contact/detail-contact.json");
import {getJsonEntityAttributes} from '../../core/entity-actions'
import {iterateSetToRunMap} from '../../core/map-actions'
import {validateConteinTextInField} from '../../core/action'
const {getCurrentDate} = require('../../utils/formatDate')

function setValidationContactMap(contactData) {
  const contactMap = new Map()
  const createdBy = getCurrentDate()
  const fullName = contactData.salutation.concat(' ').concat(contactData.firstName).concat(" ").concat(contactData.lastName)
  contactMap.set("topName", () => validateConteinTextInField(detailContact.topName, fullName))
  contactMap.set("detailName", () => validateConteinTextInField(detailContact.detailName, fullName))
  contactMap.set("createdBy", () => validateConteinTextInField(detailContact.createdBy, createdBy))
  contactMap.set("contact", () => validateConteinTextInField(detailContact.lastModifiedBy, createdBy))
  return contactMap
}

export function validateContact(Contact) {
  const contactMap = setValidationContactMap(Contact)
  const ContactSet = getJsonEntityAttributes(Contact)
  iterateSetToRunMap(contactMap, ContactSet)
}
