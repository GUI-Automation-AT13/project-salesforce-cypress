import {createAssetRequisites, createEntity, createRequisites} from '../../salesforce/api/asset/create-requisites';
import {login, refreshTable} from '../../salesforce/ui/action'
import {deleteAsset} from '../../salesforce/api/asset/delete-requisites';
import {pageTransporter} from '../../salesforce/ui/transporter'
import {setExpectedAssetJson} from '../../salesforce/ui/asset/validate-table';
import {validateTableData} from '../../salesforce/ui/validate-tabledata'
const apiLogin = require("../../salesforce/api/login")
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const requiredAsset = require('../../fixtures/features/asset/all-table-attributes.json')

describe('Validate the information of an Asset from a table', () => {

    let token = ''
    let prerequisiteIds = {}

    before(() => {
        apiLogin.login().then((result) => {
            token = result.body.access_token
        })
    })


    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })

    it('should validate the information from a table', () => {
        const expectedData = setExpectedAssetJson(requiredAsset)
        const requiredAttr = requiredAsset.Name
        prerequisiteIds = createAssetRequisites(token, requiredAsset)
        createEntity("Asset", token, requiredAsset)

        pageTransporter(endpoint.asset)
        refreshTable()

        validateTableData(requiredAttr).then((actualData) => {
            expect(actualData).to.deep.equal(expectedData)
        })
    })

    afterEach(() => {
        deleteAsset(token, prerequisiteIds)
    })
})
