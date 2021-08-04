import {clickField} from '../../src/core/action'
import {createAsset} from '../../src/salesforce/asset/new-asset'
import {pageTransporter} from '../../src/salesforce/transporter'
import {validateAsset} from '../../src/salesforce/asset/validate-asset'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const assets = require('../../fixtures/locator/asset/assets.json')

describe('Create an Asset', () => {

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endpoint.asset)
        clickField(assets.newAssetBtn)
    })

    it('should create it with necessary attributes', () => {
        const asset = {
            "account": 'cuenta 13',
            "name": 'New Asset'
        }
        createAsset(asset)

        validateAsset(asset)
    })

    it('should create it with all attributes', () => {
        const asset = {
            "account": 'cuenta 13',
            "competitor": true,
            "description": 'Description',
            "install date": '28/7/2021',
            "name": 'New Asset',
            "price": '100',
            "product": 'producto 2',
            "purchase date": '15/8/2021',
            "quantity": '10,00',
            "serial number": 'Serial Number',
            "status": 'Shipped',
            "usage end date": '30/9/2021'
        }
        createAsset(asset)

        validateAsset(asset)
    })
})
