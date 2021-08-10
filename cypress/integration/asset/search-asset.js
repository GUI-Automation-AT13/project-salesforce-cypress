import {login} from '../../src/salesforce/ui/action'
import {pageTransporter} from '../../src/salesforce/ui/transporter'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const feature = require('../../src/salesforce/api/features')
const apiLogin = require("../../src/salesforce/api/login")

describe('Search asset', () => {
    let token = ''
    let accountId = ''
    let assetId = ''

    before(async () => {
        token = await apiLogin.login()
    })

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("/")
        login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })

    it('should show results of searching', () => {
        const wordToSearch = 'nombre'

        const account = {
            "Name": "Account"
        }
        feature.create("Account", token, account).then((response) => {
            accountId = response.body.id
            cy.log("1.- creando account")
        }).then(() => {
            const asset = {
                "Name": "nombre 10",
                "AccountId": accountId
            }
            feature.create("Asset", token, asset).then((response) => {
                assetId = response.body.id
                cy.log("2.- creando asset")
            })
        }).then(() => {
            cy.wait(2000)
            pageTransporter(endpoint.asset)
            cy.log("3.- llegando al endpoint")
            cy.get('#phSearchInput').type(wordToSearch)
            cy.get('#phSearchButton').click()
            cy.log("4.- buscando palabra")
            cy.get('th.dataCell > a').then((element) => {
                cy.log("5.- buscando elementos encontrados")
                for (let index = 0; index < element.length; index += 1) {
                    expect(element[String(index)].innerText.toLowerCase()).to.contain(wordToSearch)
                }
            })
        })
    })

    afterEach(() => {
        if (accountId !== '') {
            feature.deleteOne("Account", token, accountId)
        }
    })
})
