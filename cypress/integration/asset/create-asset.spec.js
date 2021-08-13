import {clickField, goBackToAssetTable, login, refreshTable} from '../../salesforce/ui/action'
import {createAssetRequisites, setAssetPreRequest} from '../../salesforce/api/asset/create-requisites'
import {createAsset} from '../../salesforce/ui/asset/new-asset'
import {deleteAsset} from '../../salesforce/api/asset/delete-requisites'
import {pageTransporter} from '../../salesforce/ui/transporter'
import {setExpectedAssetJsonFromUi} from '../../salesforce/ui/asset/validate-table';
import {validateAsset} from '../../salesforce/ui/asset/validate-asset'
import {validateTableData} from '../../salesforce/ui/validate-tabledata'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const assets = require('../../fixtures/locator/asset/assets.json')
const apiLogin = require("../../salesforce/api/login")
const allAttrAsset = require('../../fixtures/features/asset/all-attributes.json')
const necessaryAttrAsset = require('../../fixtures/features/asset/necessary-attributes.json')

describe('Create an Asset', () => {

    let token = ''
    let ids = {}

    before(() => {
        apiLogin.login().then((result) => {
            token = result.body.access_token
        })
    })

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endpoint.asset)
    })

    it('should create it with necessary attributes', () => {
        clickField(assets.newAssetBtn)

        const asset = setAssetPreRequest(necessaryAttrAsset)
        ids = createAssetRequisites(token, asset)
        const expectedData = setExpectedAssetJsonFromUi(necessaryAttrAsset)

        createAsset(necessaryAttrAsset)

        validateAsset(necessaryAttrAsset)

        goBackToAssetTable()

        validateTableData(necessaryAttrAsset.name).then((actualData) => {
            expect(actualData).to.deep.equal(expectedData)
        })
    })

    it('should create it with all attributes', () => {
        clickField(assets.newAssetBtn)

        const asset = setAssetPreRequest(allAttrAsset)
        ids = createAssetRequisites(token, asset)
        const expectedData = setExpectedAssetJsonFromUi(allAttrAsset)

        createAsset(allAttrAsset)

        validateAsset(allAttrAsset)

        goBackToAssetTable()

        validateTableData(necessaryAttrAsset.name).then((actualData) => {
            expect(actualData).to.deep.equal(expectedData)
        })
    })

    afterEach(() => {
        deleteAsset(token, ids)
    })
})
