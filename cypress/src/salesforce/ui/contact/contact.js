const contact = require("../../../../fixtures/locator/contact/contacts.json");

export function clickNewContactBtn() {
  cy.get(contact.newContactBtn).should("be.visible").click();
}
