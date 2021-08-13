import {clickField, login} from "../../../../salesforce/ui/action";
import {createAsset} from "../../../../salesforce/ui/asset/new-asset";
import {dataTableToJson} from "../../../../support/utils/convertToJson";
import {pageTransporter} from "../../../../salesforce/ui/transporter";
import {validateAsset} from "../../../../salesforce/ui/asset/validate-asset";
const endPoint = require('../../../../fixtures/endpoint/endpoint.json')
const assets = require('../../../../fixtures/locator/asset/assets.json')

let newObject = {};

Given(/^I login to salesforce site as an admin user$/, () => {
    pageTransporter('/')
    login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
});

And(/^I navigate to "(.*?)" page$/, (valor) => {
    pageTransporter(endPoint[valor])
});

When(/^I create a new Asset with fields$/, function (dataTable) {
    clickField(assets.newAssetBtn)
    newObject = dataTableToJson(dataTable)
    createAsset(newObject)
});

Then(/^I validate all fields$/, () => {
    validateAsset(newObject)
});
