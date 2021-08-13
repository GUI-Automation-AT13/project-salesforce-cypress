import {createAssetRequisites, createEntity} from '../../salesforce/api/asset/create-requisites';
import {login, search} from '../../salesforce/ui/action'
import {deleteAsset} from '../../salesforce/api/asset/delete-requisites';
import {pageTransporter} from '../../salesforce/ui/transporter'
import {validateResults} from '../../salesforce/ui/validate-searh-results';
const apiLogin = require("../../salesforce/api/login")
const requiredAsset = require('../../fixtures/features/asset/all-table-attributes.json')

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
        createEntity("Asset", token, requiredAsset)
        search(wordToSearch)

        validateResults()
    })

    afterEach(() => {
        deleteAsset(token, prerequisiteIds)
    })
})
