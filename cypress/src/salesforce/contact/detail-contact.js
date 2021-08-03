const contact = require("../../../fixtures/locator/contact/detail-contact.json");

export function getTopName() {
  return cy.get(contact.topName);
}

export function getDetailName() {
  return cy.get(contact.detailName);
}

export function getCreatedBy() {
  cy.get(contact.createdBy);
}

export function getLastModifiedBy() {
  cy.get(contact.lastModifiedBy);
}
