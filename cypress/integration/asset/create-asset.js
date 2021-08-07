import {createAsset} from '../../src/salesforce/asset/new-asset'
import {login} from '../../src/core/action'
import {pageTransporter} from '../../src/salesforce/transporter'
import {validateAsset} from '../../src/salesforce/asset/validate-asset'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const assets = require('../../fixtures/locator/asset/assets.json')

const feature = require('../../src/salesforce/api/features')
const apiLogin = require("../../src/salesforce/api/login")
const allAttrAsset = require('../../fixtures/features/asset/all-attributes.json')
const necessaryAttrAsset = require('../../fixtures/features/asset/necessary-attributes.json')

describe('Create an Asset', () => {

    let token = ''
    let accountId = ''
    let contactId = ''
    let productId = ''
    before(async () => {
        token = await apiLogin.login()
    })

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endpoint.asset)
        cy.clickField(assets.newAssetBtn)
    })

    it('should create it with necessary attributes', () => {
        const asset = necessaryAttrAsset
        const account = {
            "Name": asset.account
        }
        feature.create("Account", token, account).then((response) => {
            accountId = response.body.id
        }).then(() => {
        createAsset(asset)

        validateAsset(asset)
        })
    })

    it('should create it with all attributes', () => {
        const asset = allAttrAsset
        const account = {
            "Name": asset.account
        }
        const product = {
            "Name": asset.product
        }
        feature.create("Account", token, account).then((response) => {
            accountId = response.body.id
            const contact = {
                "LastName": asset.contact,
                "AccountId": accountId
            }
            feature.create("Contact", token, contact).then((response2) => {
                contactId = response2.body.id
            })
            feature.create("Product2", token, product).then((response3) => {
                productId = response3.body.id
            })
        }).then(() => {

        createAsset(asset)

        validateAsset(asset)
        })
    })

    afterEach(() => {
        if (contactId !== '') {
            feature.deleteOne("Contact", token, contactId)
        }
        if (accountId !== '') {
            feature.deleteOne("Account", token, accountId)
        }
        if (productId !== '') {
            feature.deleteOne("Product2", token, productId)
        }
    })
})
