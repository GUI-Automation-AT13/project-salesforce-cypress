import {login} from '../../src/core/action'
import {pageTransporter} from '../../src/salesforce/transporter'
import {validateTableData} from '../../src/salesforce/validate-tabledata'
const endpoint = require('../../fixtures/endpoint/endpoint.json')

describe('Create an Asset', () => {

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endpoint.asset)
    })

    it('should validate the information from a table', () => {
        const expectedData = {
            "Account Name": "cuenta 13",
            "Asset Name": "cuenta 3",
            "Contact Name": "contact 2",
            "Install Date": "6/8/2021",
            "Product Name": "producto 2",
            "Serial Number": "1234"
        }
        const requiredAttr = expectedData["Asset Name"]

        validateTableData(requiredAttr).then((actualData) => {
            expect(actualData).to.deep.equal(expectedData)
        })
    })
})
