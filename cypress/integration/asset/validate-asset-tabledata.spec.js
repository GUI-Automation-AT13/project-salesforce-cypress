import {createAssetRequisites, createEntity, createRequisites} from './../../src/salesforce/api/asset/create-requisites';
import {login, refreshTable} from '../../src/salesforce/ui/action'
import {deleteAsset} from '../../src/salesforce/api/asset/delete-requisites';
import {pageTransporter} from '../../src/salesforce/ui/transporter'
import {setExpectedAssetJson} from '../../src/salesforce/ui/asset/validate-table';
import {validateTableData} from '../../src/salesforce/ui/validate-tabledata'
const apiLogin = require("../../src/salesforce/api/login")
const feature = require('../../src/salesforce/api/features')
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const requiredAsset = require('../../fixtures/features/asset/all-table-attributes.json')

describe('Validate the information of an Asset from a table', () => {

    let token = ''
    let prerequisiteIds = {}

    before(async () => {
        token = await apiLogin.login()
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
