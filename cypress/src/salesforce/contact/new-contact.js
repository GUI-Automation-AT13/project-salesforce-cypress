import {clickField, selectField, setField} from '../../core/action'
import {getJsonEntityAttributes} from '../../core/entity-actions'
import {iterateSetToRunMap} from '../../core/map-actions'
const newContact = require("../../../fixtures/locator/contact/new-contact.json");

function setfunctioncontactMap(contactData) {
  const contactMap = new Map()
  contactMap.set("salutation", () => cy.selectField(newContact.salutation, contactData.salutation))
  contactMap.set("firstName", () => cy.setField(newContact.firstName, contactData.firstName))
  contactMap.set("lastName", () => cy.setField(newContact.lastName, contactData.lastName))
  contactMap.set("accountName", () => cy.setField(newContact.accountName, contactData.accountName))
  contactMap.set("birthday", () => cy.setField(newContact.birthday, contactData.birthday.concat('{esc}')))
  contactMap.set("reportsTo", () => cy.setField(newContact.reportsTo, contactData.reportsTo))
  contactMap.set("title", () => cy.setField(newContact.title, contactData.title))
  contactMap.set("deparment", () => cy.setField(newContact.deparment, contactData.deparment))
  contactMap.set("leadSource", () => cy.selectField(newContact.leadSource, contactData.leadSource))
  contactMap.set("phone", () => cy.setField(newContact.phone, contactData.phone))
  contactMap.set("homePhone", () => cy.setField(newContact.homePhone, contactData.homePhone))
  contactMap.set("mobile", () => cy.setField(newContact.mobile, contactData.mobile))
  contactMap.set("otherPhone", () => cy.setField(newContact.otherPhone, contactData.otherPhone))
  contactMap.set("fax", () => cy.setField(newContact.fax, contactData.fax))
  contactMap.set("email", () => cy.setField(newContact.email, contactData.email))
  contactMap.set("assitantName", () => cy.setField(newContact.assitantName, contactData.assitantName))
  contactMap.set("assitantPhone", () => cy.setField(newContact.assitantPhone, contactData.assitantPhone))
  contactMap.set("mailingStreet", () => cy.setField(newContact.mailingStreet, contactData.mailingStreet))
  contactMap.set("mailingPostalCode", () => cy.setField(newContact.mailingPostalCode, contactData.mailingPostalCode))
  contactMap.set("mailingCity", () => cy.setField(newContact.mailingCity, contactData.mailingCity))
  contactMap.set("mailingState", () => cy.setField(newContact.mailingState, contactData.mailingState))
  contactMap.set("mailingCountry", () => cy.setField(newContact.mailingCountry, contactData.mailingCountry))
  contactMap.set("otherStreet", () => cy.setField(newContact.otherStreet, contactData.otherStreet))
  contactMap.set("otherPostalCode", () => cy.setField(newContact.otherPostalCode, contactData.otherPostalCode))
  contactMap.set("otherCity", () => cy.setField(newContact.otherCity, contactData.otherCity))
  contactMap.set("otherState", () => cy.setField(newContact.otherState, contactData.otherState))
  contactMap.set("otherCountry", () => cy.setField(newContact.otherCountry, contactData.otherCountry))
  contactMap.set("language", () => cy.setField(newContact.language, contactData.language))
  contactMap.set("level", () => cy.selectField(newContact.level, contactData.level))
  contactMap.set("description", () => cy.setField(newContact.description, contactData.description))
  return contactMap
}

export function createContact(contactData) {
  const contactMap = setfunctioncontactMap(contactData)
  const contactSet = getJsonEntityAttributes(contactData)
  iterateSetToRunMap(contactMap, contactSet)
  cy.clickField(newContact.saveBtn)
}
