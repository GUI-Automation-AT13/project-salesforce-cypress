import {clickField, login} from "../../../../src/salesforce/ui/action";
import {createAsset} from "../../../../src/salesforce/ui/asset/new-asset";
import {dataTableToJson} from "../../../../src/utils/convertToJson";
import {pageTransporter} from "../../../../src/salesforce/ui/transporter";
import {validateAsset} from "../../../../src/salesforce/ui/asset/validate-asset";
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
