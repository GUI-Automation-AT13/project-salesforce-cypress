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
