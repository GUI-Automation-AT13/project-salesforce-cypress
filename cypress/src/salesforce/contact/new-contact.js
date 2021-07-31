const contact = require("../../../fixtures/locator/contact/new-contact.json");
export class ContactForm {
    addContactSalutation(salutation) {
      cy.get(contact.salutation).should("be.visible").select(salutation);
    }
  
    addContactFirstName(firstName) {
      cy.get(contact.firstName).should("be.visible").type(firstName);
    }
  
    addContactLastName(lastName) {
      cy.get(contact.lastName).should("be.visible").type(lastName);
    }
  
    addContactBirthday(birthday) {
      cy.get(contact.birthday).should("be.visible").type(birthday);
    }
  
    addContactTitle(title) {
      cy.get(contact.title).should("be.visible").type(title);
    }
  
    addContactDeparment(deparment) {
      cy.get(contact.deparment).should("be.visible").type(deparment);
    }
  
    addContactLeadSource(leadSource) {
      cy.get(contact.leadSource).should("be.visible").select(leadSource);
    }
  
    addContactPhone(phone) {
      cy.get(contact.phone).should("be.visible").type(phone);
    }
  
    addContactHomePhone(homePhone) {
      cy.get(contact.homePhone).should("be.visible").type(homePhone);
    }
  
    addContactMobile(mobile) {
      cy.get(contact.mobile).should("be.visible").type(mobile);
    }
  
    addContactOtherPhone(otherPhone) {
      cy.get(contact.otherPhone).should("be.visible").type(otherPhone);
    }
  
    addContactFax(fax) {
      cy.get(contact.fax).should("be.visible").type(fax);
    }
  
    addContactEmail(email) {
      cy.get(contact.email).should("be.visible").type(email);
    }
  
    addContactAssitantName(assitantName) {
      cy.get(contact.assitantName).should("be.visible").type(assitantName);
    }
  
    addContactAssitantPhone(assitantPhone) {
      cy.get(contact.assitantPhone).should("be.visible").type(assitantPhone);
    }
    addContactMailingStreet(mailingStreet) {
      cy.get(contact.mailingStreet).should("be.visible").type(mailingStreet);
    }
  
    addContactMailingPostalCode(mailingPostalCode) {
      cy.get(contact.mailingPostalCode).should("be.visible").type(mailingPostalCode);
    }
  
    addContactMailingCity(mailingCity) {
      cy.get(contact.mailingCity).should("be.visible").type(mailingCity);
    }
  
    addContactMailingState(mailingState) {
      cy.get(contact.mailingState).should("be.visible").type(mailingState);
    }
  
    addContactMailingCountry(mailingCountry) {
      cy.get(contact.mailingCountry).should("be.visible").type(mailingCountry);
    }
  
    addContactOtherStreet(otherStreet) {
      cy.get(contact.otherStreet).should("be.visible").type(otherStreet);
    }
  
    addContactOtherPostalCode(otherPostalCode) {
      cy.get(contact.otherPostalCode).should("be.visible").type(otherPostalCode);
    }
  
    addContactOtherCity(otherCity) {
      cy.get(contact.otherCity).should("be.visible").type(otherCity);
    }
  
    addContactOtherState(otherState) {
      cy.get(contact.otherState).should("be.visible").type(otherState);
    }
  
    addContactOtherCountry(otherCountry) {
      cy.get(contact.otherCountry).should("be.visible").type(otherCountry);
    }
  
    addContactLanguage(language) {
      cy.get(contact.language).should("be.visible").type(language);
    }
  
    addContactLevel(level) {
      cy.get(contact.level).should("be.visible").select(level);
    }
  
    addContactDescription(description) {
      cy.get(contact.description).should("be.visible").type(description);
    }
  
    clickSaveButton() {
      cy.get(contact.saveBtn).should("be.visible").click();
    }
  }
  // export function addContactSalutation(salutation) {
  //   cy.get("#name_salutationcon2").should("be.visible").select(salutation);
  // }
  
  // export function addContactFirstName(firstName) {
  //   cy.get("#name_firstcon2").should("be.visible").type(firstName);
  // }
  
  // export function addContactLastName(lastName) {
  //   cy.get("#name_lastcon2").should("be.visible").type(lastName);
  // }
  
  // export function addContactBirthday(birthday) {
  //   cy.get("#con7").should("be.visible").type(birthday);
  // }
  
  // export function addContactTitle(title) {
  //   cy.get("#con5").should("be.visible").type(title);
  // }
  
  // export function addContactDeparment(deparment) {
  //   cy.get("#con6").should("be.visible").type(deparment);
  // }
  
  // export function addContactLeadSource(leadSource) {
  //   cy.get("#con9").should("be.visible").select(leadSource);
  // }
  
  // export function addContactPhone(phone) {
  //   cy.get("#con10").should("be.visible").type(phone);
  // }
  
  // export function addContactHomePhone(homePhone) {
  //   cy.get("#con13").should("be.visible").type(homePhone);
  // }
  
  // export function addContactMobile(mobile) {
  //   cy.get("#con12").should("be.visible").type(mobile);
  // }
  
  // export function addContactOtherPhone(otherPhone) {
  //   cy.get("#con14").should("be.visible").type(otherPhone);
  // }
  
  // export function addContactFax(fax) {
  //   cy.get("#con11").should("be.visible").type(fax);
  // }
  
  // export function addContactEmail(email) {
  //   cy.get("#con15").should("be.visible").type(email);
  // }
  
  // export function addContactAssitantName(assitantName) {
  //   cy.get("#con16").should("be.visible").type(assitantName);
  // }
  
  // export function addContactAssitantPhone(assitantPhone) {
  //   cy.get("#con17").should("be.visible").type(assitantPhone);
  // }
  // export function addContactMailingStreet(mailingStreet) {
  //   cy.get("#con19street").should("be.visible").type(mailingStreet);
  // }
  
  // export function addContactMailingPostalCode(mailingPostalCode) {
  //   cy.get("#con19zip").should("be.visible").type(mailingPostalCode);
  // }
  
  // export function addContactMailingCity(mailingCity) {
  //   cy.get("#con19city").should("be.visible").type(mailingCity);
  // }
  
  // export function addContactMailingState(mailingState) {
  //   cy.get("#con19state").should("be.visible").type(mailingState);
  // }
  
  // export function addContactMailingCountry(mailingCountry) {
  //   cy.get("#con19country").should("be.visible").type(mailingCountry);
  // }
  
  // export function addContactOtherStreet(otherStreet) {
  //   cy.get("#con18street").should("be.visible").type(otherStreet);
  // }
  
  // export function addContactOtherPostalCode(otherPostalCode) {
  //   cy.get("#con18zip").should("be.visible").type(otherPostalCode);
  // }
  
  // export function addContactOtherCity(otherCity) {
  //   cy.get("#con18city").should("be.visible").type(otherCity);
  // }
  
  // export function addContactOtherState(otherState) {
  //   cy.get("#con18state").should("be.visible").type(otherState);
  // }
  
  // export function addContactOtherCountry(otherCountry) {
  //   cy.get("#con18country").should("be.visible").type(otherCountry);
  // }
  
  // export function addContactLanguage(language) {
  //   cy.get("#00N5e00000KkjUz").should("be.visible").type(language);
  // }
  
  // export function addContactLevel(level) {
  //   cy.get("#00N5e00000KkjV0").should("be.visible").select(level);
  // }
  
  // export function addContactDescription(description) {
  //   cy.get("#con20").should("be.visible").type(description);
  // }
  
  // export function clickSaveButton() {
  //   cy.get("td[id='bottomButtonRow'] input[title='Save']")
  //     .should("be.visible")
  //     .click();
  // }
  
  // cy.get('#con4').should('be.visible').type('Gonzales')
  // cy.get('#con8').should('be.visible').type('30/7/2021')
  