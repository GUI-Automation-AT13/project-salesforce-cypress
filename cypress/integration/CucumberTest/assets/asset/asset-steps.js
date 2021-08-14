import {clickField, login} from "../../../../salesforce/ui/action";
import {createAssetRequisites, setAssetPreRequest} from "../../../../salesforce/api/asset/create-requisites";
import {createAsset} from "../../../../salesforce/ui/asset/new-asset";
import {dataTableToJson} from "../../../../support/utils/convertToJson";
import {deleteAsset} from "../../../../salesforce/api/asset/delete-requisites";
import {pageTransporter} from "../../../../salesforce/ui/transporter";
import {validateAsset} from "../../../../salesforce/ui/asset/validate-asset";
const endPoint = require('../../../../fixtures/endpoint/endpoint.json')
const assets = require('../../../../fixtures/locator/asset/assets.json')
const apiLogin = require("../../../../salesforce/api/login")

let newObject = {};
let ids = {}
let token = ''

Given(/^I login to salesforce site as an admin user$/, () => {
    apiLogin.login().then((result) => {
        token = result.body.access_token
    })
    pageTransporter('/')
    login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
});

And(/^I navigate to "(.*?)" page$/, (valor) => {
    pageTransporter(endPoint[valor])
});

When(/^I create a new Asset with fields$/, function (dataTable) {
    clickField(assets.newAssetBtn)
    newObject = dataTableToJson(dataTable)

    const asset = setAssetPreRequest(newObject)
    ids = createAssetRequisites(token, asset)

    createAsset(newObject)
});

Then(/^I validate all fields$/, () => {
    validateAsset(newObject)
    deleteAsset(token, ids)
});
