import {clickField, login} from '../../src/salesforce/ui/action'
import {createAssetRequisites, setAssetPreRequest} from '../../src/salesforce/api/asset/create-requisites'
import {createAsset} from '../../src/salesforce/ui/asset/new-asset'
import {deleteAsset} from '../../src/salesforce/api/asset/delete-requisites'
import {pageTransporter} from '../../src/salesforce/ui/transporter'
import {validateAsset} from '../../src/salesforce/ui/asset/validate-asset'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const assets = require('../../fixtures/locator/asset/assets.json')

const feature = require('../../src/salesforce/api/features')
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

        createAsset(necessaryAttrAsset)

        validateAsset(necessaryAttrAsset)
    })

    it('should create it with all attributes', () => {
        clickField(assets.newAssetBtn)

        const asset = setAssetPreRequest(allAttrAsset)
        ids = createAssetRequisites(token, asset)

        createAsset(allAttrAsset)

        validateAsset(allAttrAsset)
    })

    afterEach(() => {
        deleteAsset(token, ids)
    })
})
