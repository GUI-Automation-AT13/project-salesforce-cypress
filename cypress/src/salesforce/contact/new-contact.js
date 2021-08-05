import {clickField, selectField, setField} from '../../core/action'
import {getJsonEntityAttributes} from '../../core/entity-actions'
import {iterateSetToRunMap} from '../../core/map-actions'
const newContact = require("../../../fixtures/locator/contact/new-contact.json");
// const contact = require("../../../fixtures/locator/contact/new-contact.json");

function setfunctioncontactMap(contactData) {
  const contactMap = new Map()
  contactMap.set("salutation", () => selectField(newContact.salutation, contactData.salutation))
  contactMap.set("firstName", () => setField(newContact.firstName, contactData.firstName))
  contactMap.set("lastName", () => setField(newContact.lastName, contactData.lastName))
  contactMap.set("accountName", () => setField(newContact.accountName, contactData.accountName))
  contactMap.set("birthday", () => setField(newContact.birthday, contactData.birthday.concat('{esc}')))
  contactMap.set("reportsTo", () => setField(newContact.reportsTo, contactData.reportsTo))
  contactMap.set("title", () => setField(newContact.title, contactData.title))
  contactMap.set("deparment", () => setField(newContact.deparment, contactData.deparment))
  contactMap.set("leadSource", () => selectField(newContact.leadSource, contactData.leadSource))
  contactMap.set("phone", () => setField(newContact.phone, contactData.phone))
  contactMap.set("homePhone", () => setField(newContact.homePhone, contactData.homePhone))
  contactMap.set("mobile", () => setField(newContact.mobile, contactData.mobile))
  contactMap.set("otherPhone", () => setField(newContact.otherPhone, contactData.otherPhone))
  contactMap.set("fax", () => setField(newContact.fax, contactData.fax))
  contactMap.set("email", () => setField(newContact.email, contactData.email))
  contactMap.set("assitantName", () => setField(newContact.assitantName, contactData.assitantName))
  contactMap.set("assitantPhone", () => setField(newContact.assitantPhone, contactData.assitantPhone))
  contactMap.set("mailingStreet", () => setField(newContact.mailingStreet, contactData.mailingStreet))
  contactMap.set("mailingPostalCode", () => setField(newContact.mailingPostalCode, contactData.mailingPostalCode))
  contactMap.set("mailingCity", () => setField(newContact.mailingCity, contactData.mailingCity))
  contactMap.set("mailingState", () => setField(newContact.mailingState, contactData.mailingState))
  contactMap.set("mailingCountry", () => setField(newContact.mailingCountry, contactData.mailingCountry))
  contactMap.set("otherStreet", () => setField(newContact.otherStreet, contactData.otherStreet))
  contactMap.set("otherPostalCode", () => setField(newContact.otherPostalCode, contactData.otherPostalCode))
  contactMap.set("otherCity", () => setField(newContact.otherCity, contactData.otherCity))
  contactMap.set("otherState", () => setField(newContact.otherState, contactData.otherState))
  contactMap.set("otherCountry", () => setField(newContact.otherCountry, contactData.otherCountry))
  contactMap.set("language", () => setField(newContact.language, contactData.language))
  contactMap.set("level", () => selectField(newContact.level, contactData.level))
  contactMap.set("description", () => setField(newContact.description, contactData.description))
  return contactMap
}

export function createContact(contactData) {
  const contactMap = setfunctioncontactMap(contactData)
  const contactSet = getJsonEntityAttributes(contactData)
  iterateSetToRunMap(contactMap, contactSet)
  clickField(newContact.saveBtn)
}