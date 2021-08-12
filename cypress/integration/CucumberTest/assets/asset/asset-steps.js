import {login} from "../../../../src/salesforce/ui/action";
import {pageTransporter} from "../../../../src/salesforce/ui/transporter";

let newObject = {};

Given(/^I login to salesforce site as an admin user$/, async () => {
    pageTransporter('/')
    login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
});

And(/^I navigate to "(.*?)" page$/, (valor) => {
    pageTransporter(endPoint[valor])
});

When(/^I create a new Asset with fields$/, function (dataTable) {
});

Then(/^I validate all fields$/, () => {
});
