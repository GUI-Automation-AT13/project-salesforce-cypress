import {createAssetRequisites, createEntity} from '../../src/salesforce/api/asset/create-requisites';
import {login, search} from '../../src/salesforce/ui/action'
import {deleteAsset} from '../../src/salesforce/api/asset/delete-requisites';
import {pageTransporter} from '../../src/salesforce/ui/transporter'
import {validateResults} from '../../src/salesforce/ui/validate-searh-results';
const apiLogin = require("../../src/salesforce/api/login")
const requiredAsset = require('../../fixtures/features/asset/all-table-attributes.json')

describe('Search asset', () => {
    let token = ''
    let prerequisiteIds = {}

    before(async () => {
        token = await apiLogin.login()
    })

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })

    it('should show results of searching', () => {
        const wordToSearch = requiredAsset.Name
        prerequisiteIds = createAssetRequisites(token, requiredAsset)
        createEntity("Asset", token, requiredAsset)

        search(wordToSearch)

        validateResults()
    })

    afterEach(() => {
        deleteAsset(token, prerequisiteIds)
    })
})
