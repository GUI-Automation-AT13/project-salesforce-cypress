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
  contactMap.set("topName", () => cy.validateConteinTextInField(detailContact.topName, fullName))
  contactMap.set("detailName", () => cy.validateConteinTextInField(detailContact.detailName, fullName))
  contactMap.set("createdBy", () => cy.validateConteinTextInField(detailContact.createdBy, createdBy))
  contactMap.set("contact", () => cy.validateConteinTextInField(detailContact.lastModifiedBy, createdBy))
  return contactMap
}

export function validateContact(Contact) {
  const contactMap = setValidationContactMap(Contact)
  const ContactSet = getJsonEntityAttributes(Contact)
  iterateSetToRunMap(contactMap, ContactSet)
}

export function deleteContact() {
  cy.clickField(detailContact.deleteBtn)
  // cy.on("window:confirm", (str) => {
  //   expect(str).to.equal("Are you sure?");
  // });
}