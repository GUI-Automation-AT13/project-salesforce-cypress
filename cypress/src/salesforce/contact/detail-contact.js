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

export function getUrl() {
  let url = cy.url();
  cy.log(url);
  cy.log(cy.url());
  let url2 = cy.location("pathname");
  cy.log(cy.location("pathname"));
}
