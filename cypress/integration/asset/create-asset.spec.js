import {clickField, goBackToAssetTable, login, refreshTable} from '../../src/salesforce/ui/action'
import {createAssetRequisites, setAssetPreRequest} from '../../src/salesforce/api/asset/create-requisites'
import {createAsset} from '../../src/salesforce/ui/asset/new-asset'
import {deleteAsset} from '../../src/salesforce/api/asset/delete-requisites'
import {pageTransporter} from '../../src/salesforce/ui/transporter'
import {setExpectedAssetJsonFromUi} from './../../src/salesforce/ui/asset/validate-table';
import {validateAsset} from '../../src/salesforce/ui/asset/validate-asset'
import {validateTableData} from '../../src/salesforce/ui/validate-tabledata'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const assets = require('../../fixtures/locator/asset/assets.json')
const apiLogin = require("../../src/salesforce/api/login")
const allAttrAsset = require('../../fixtures/features/asset/all-attributes.json')
const necessaryAttrAsset = require('../../fixtures/features/asset/necessary-attributes.json')

describe('Create an Asset', () => {

    let token = ''
    let ids = {}

    before(async () => {
        token = await apiLogin.login()
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
