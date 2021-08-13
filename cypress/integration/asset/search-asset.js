import {clickField, login, search} from '../../salesforce/ui/action'
import {createAssetRequisites, createEntity} from '../../salesforce/api/asset/create-requisites';
import {createAsset} from '../../salesforce/ui/asset/new-asset';
import {deleteAsset} from '../../salesforce/api/asset/delete-requisites';
import {pageTransporter} from '../../salesforce/ui/transporter'
import {validateResults} from '../../salesforce/ui/validate-searh-results';
const apiLogin = require("../../salesforce/api/login")
const requiredAsset = require('../../fixtures/features/asset/all-table-attributes.json')
const necessaryAttrAsset = require('../../fixtures/features/asset/necessary-attributes.json')
const assets = require('../../fixtures/locator/asset/assets.json')
const endpoint = require('../../fixtures/endpoint/endpoint.json')

describe('Search asset', () => {
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

    it('should show results of searching', () => {
        const wordToSearch = requiredAsset.Name
        prerequisiteIds = createAssetRequisites(token, requiredAsset)

        pageTransporter(endpoint.asset)
        clickField(assets.newAssetBtn)
        createAsset(necessaryAttrAsset)

        search(wordToSearch)

        validateResults(wordToSearch)
    })

    afterEach(() => {
        deleteAsset(token, prerequisiteIds)
    })
})
