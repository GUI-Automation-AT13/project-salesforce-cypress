import {createRequisites} from './../../src/salesforce/api/asset/create-requisites';
import {login} from '../../src/salesforce/ui/action'
import {pageTransporter} from '../../src/salesforce/ui/transporter'
import {validateTableData} from '../../src/salesforce/ui/validate-tabledata'
const apiLogin = require("../../src/salesforce/api/login")
const feature = require('../../src/salesforce/api/features')
const endpoint = require('../../fixtures/endpoint/endpoint.json')

describe('Validate the information of an Asset from a table', () => {

    let token = ''
    let prerequisiteIds = {}

    before(async () => {
        token = await apiLogin.login()
    })

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        /* pageTransporter(endpoint.asset) */
    })

    it('should validate the information from a table', () => {
        const expectedData = {
            "Account Name": "New Account",
            "Asset Name": "cuenta 4",
            "Contact Name": "Last Name of a Contact",
            "Install Date": "6/8/2021",
            "Product Name": "New Product",
            "Serial Number": "1234"
        }
        const requiredAsset = {
            "AccountId": "",
            "Name": expectedData["Asset Name"],
            "ContactId": "",
            "InstallDate": "2021-08-06",
            "Product2Id": "",
            "SerialNumber": "1234"
        }
        const requiredAttr = expectedData["Asset Name"]
        createRequisites(requiredAsset, token).then((ids) => {
            prerequisiteIds = ids
            pageTransporter(endpoint.asset)
            cy.get('#00B5e00000CF06x_refresh').click()
        }).then(() => {
            validateTableData(requiredAttr).then((actualData) => {
                expect(actualData).to.deep.equal(expectedData)
            })
        })
    })

    afterEach(() => {
        feature.deleteOne("Account", token, prerequisiteIds.account)
        if (prerequisiteIds.product !== undefined) {
            feature.deleteOne("Product2", token, prerequisiteIds.product)
        }
    })
})
