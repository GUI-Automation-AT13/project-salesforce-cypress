import {clickField, selectField, setField} from '../../core/action'
import {getJsonEntityAttributes} from '../../core/entity-actions'
import {iterateSetToRunMap} from '../../core/map-actions'
const newContact = require("../../../fixtures/locator/contact/new-contact.json");
const contact = require("../../../fixtures/locator/contact/new-contact.json");

export function addContactSalutation(salutation) {
  cy.get(contact.salutation).should("be.visible").select(salutation);
}

export function addContactFirstName(firstName) {
  cy.get(contact.firstName).should("be.visible").type(firstName);
}

export function addContactLastName(lastName) {
  cy.get(contact.lastName).should("be.visible").type(lastName);
}

export function addContactBirthday(birthday) {
  cy.get(contact.birthday).should("be.visible").type(birthday).type("{esc}");
}

export function addContactTitle(title) {
  cy.get(contact.title).should("be.visible").type(title);
}

export function addContactDeparment(deparment) {
  cy.get(contact.deparment).should("be.visible").type(deparment);
}

export function addContactLeadSource(leadSource) {
  cy.get(contact.leadSource).should("be.visible").select(leadSource);
}

export function addContactPhone(phone) {
  cy.get(contact.phone).should("be.visible").type(phone);
}

export function addContactHomePhone(homePhone) {
  cy.get(contact.homePhone).should("be.visible").type(homePhone);
}

export function addContactMobile(mobile) {
  cy.get(contact.mobile).should("be.visible").type(mobile);
}

export function addContactOtherPhone(otherPhone) {
  cy.get(contact.otherPhone).should("be.visible").type(otherPhone);
}

export function addContactFax(fax) {
  cy.get(contact.fax).should("be.visible").type(fax);
}

export function addContactEmail(email) {
  cy.get(contact.email).should("be.visible").type(email);
}

export function addContactAssitantName(assitantName) {
  cy.get(contact.assitantName).should("be.visible").type(assitantName);
}

export function addContactAssitantPhone(assitantPhone) {
  cy.get(contact.assitantPhone).should("be.visible").type(assitantPhone);
}
export function addContactMailingStreet(mailingStreet) {
  cy.get(contact.mailingStreet).should("be.visible").type(mailingStreet);
}

export function addContactMailingPostalCode(mailingPostalCode) {
  cy.get(contact.mailingPostalCode).should("be.visible").type(mailingPostalCode);
}

export function addContactMailingCity(mailingCity) {
  cy.get(contact.mailingCity).should("be.visible").type(mailingCity);
}

export function addContactMailingState(mailingState) {
  cy.get(contact.mailingState).should("be.visible").type(mailingState);
}

export function addContactMailingCountry(mailingCountry) {
  cy.get(contact.mailingCountry).should("be.visible").type(mailingCountry);
}

export function addContactOtherStreet(otherStreet) {
  cy.get(contact.otherStreet).should("be.visible").type(otherStreet);
}

export function addContactOtherPostalCode(otherPostalCode) {
  cy.get(contact.otherPostalCode).should("be.visible").type(otherPostalCode);
}

export function addContactOtherCity(otherCity) {
  cy.get(contact.otherCity).should("be.visible").type(otherCity);
}

export function addContactOtherState(otherState) {
  cy.get(contact.otherState).should("be.visible").type(otherState);
}

export function addContactOtherCountry(otherCountry) {
  cy.get(contact.otherCountry).should("be.visible").type(otherCountry);
}

export function addContactLanguage(language) {
  cy.get(contact.language).should("be.visible").type(language);
}

export function addContactLevel(level) {
  cy.get(contact.level).should("be.visible").select(level);
}

export function addContactDescription(description) {
  cy.get(contact.description).should("be.visible").type(description);
}

export function clickSaveButton() {
  cy.get(contact.saveBtn).should("be.visible").click();
}

export function addContactAccountName(accountName) {
  cy.get(contact.accountName).should("be.visible").type(accountName);
}

export function addContactReportsTo(reportsTo) {
  cy.get(contact.reportsTo).should("be.visible").type(reportsTo);
}

function setfunctioncontactMap(contactData) {
  const contactMap = new Map()
  contactMap.set("salutation", () => selectField(newContact.salutation, contactData.salutation))
  contactMap.set("firstName", () => setField(newContact.firstName, contactData.firstName))
  contactMap.set("lastName", () => setField(newContact.lastName, contactData.lastName))
  contactMap.set("birthday", () => setField(newContact.birthday, contactData.birthday.concat('{esc}')))
  contactMap.set("title", () => setField(newContact.title, contactData.title))
  contactMap.set("deparment", () => setField(newContact.deparment, contactData.deparment))
  contactMap.set("leadSource", () => selectField(newContact.leadSource, contactData.leadSource))
  contactMap.set("phone", () => setField(newContact.phone, contactData.phone))
  contactMap.set("homePhone", () => setField(newContact.homePhone, contactData.homePhone))
  contactMap.set("mobile", () => setField(newContact.mobile, contactData.mobile))
  contactMap.set("otherPhone", () => setField(newContact.otherPhone, contact.otherPhone))
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