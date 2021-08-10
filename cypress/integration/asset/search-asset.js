import {createRequisites} from '../../src/salesforce/api/asset/create-requisites';
import {login} from '../../src/salesforce/ui/action'
import {pageTransporter} from '../../src/salesforce/ui/transporter'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const feature = require('../../src/salesforce/api/features')
const apiLogin = require("../../src/salesforce/api/login")

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
        const wordToSearch = 'Asset'
        const asset = {
            "Name": "Asset to search",
            "AccountId": ""
        }
        createRequisites(asset, token).then((ids) => {
            prerequisiteIds = ids
            pageTransporter(endpoint.asset)
            cy.get('#00B5e00000CF06x_refresh').click()
            cy.get('#phSearchInput').type(wordToSearch)
            cy.get('#phSearchButton').click()
            cy.reload()
            cy.get('th.dataCell > a').then((element) => {
                for (let index = 0; index < element.length; index += 1) {
                    expect(element[String(index)].innerText.toLowerCase()).to.contain(wordToSearch.toLowerCase())
                }
            })
        })
    })

    afterEach(() => {
        feature.deleteOne("Account", token, prerequisiteIds.account)
        if (prerequisiteIds.product !== undefined) {
            feature.deleteOne("Product2", token, prerequisiteIds.product)
        }
    })
})
