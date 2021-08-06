import {pageTransporter} from '../../src/salesforce/transporter'
import {validateAssetTable} from '../../src/salesforce/asset/validate-table'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const feature = require('../../src/salesforce/api/features')
const login = require("../../src/salesforce/api/login")

describe('Create an Asset', () => {

    let token = ''
    before(async () => {
        token = await login.login()
    })

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        pageTransporter(endpoint.asset)
    })

    it.only('api data', () => {
        const asset = {
            "account": 'cuenta 13',
            "install date": '6/8/2021',
            "name": 'cuenta 3',
            "product": 'producto 2',
            "serial number": '1234'
        }
        feature.getAll("Asset", token).then((response) => {
            const array = response.body.recentItems
            for (const iterator of array) {
                if (iterator.Name === asset.name) {
                    let idAsset = iterator.Id
                    idAsset = '#'.concat(idAsset.substring(0, idAsset.length - 3))
                    validateAssetTable(asset, idAsset)
                }
            }
        })
    })
})