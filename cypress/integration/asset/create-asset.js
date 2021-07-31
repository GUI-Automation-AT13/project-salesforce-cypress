import {clickField, selectField, setField, validateTextInField} from '../../src/core/action'
import {pageTransporter} from '../../src/salesforce/transporter'
const endpoint = require('../../fixtures/endpoint/endpoint.json')
const assets = require('../../fixtures/locator/asset/assets.json')
const newAsset = require('../../fixtures/locator/asset/new-asset.json')
const detailAsset = require('../../fixtures/locator/asset/detail-asset.json')

describe('Create an Asset', () => {

    beforeEach('navigate to salesforce login page', () => {
        pageTransporter("")
        cy.login(Cypress.env('username'), Cypress.env('password'))
        pageTransporter(endpoint.asset)
    })

    it('should create it with necessary attributes', () => {
        clickField(assets.newAssetBtn)

        setField(newAsset.nameTxtBox, 'New Asset')
        setField(newAsset.accountNameTxtBox, 'cuenta 13')

        clickField(newAsset.saveBtn)


        validateTextInField(detailAsset.nameTxt, 'New Asset')
        validateTextInField(detailAsset.accountNameTxt, 'cuenta 13')
    })

    it.only('should create it with all attributes', () => {
        clickField(assets.newAssetBtn)

        setField(newAsset.nameTxtBox, 'New Asset')
        setField(newAsset.serialNumberTxtBox, 'Serial Number')
        setField(newAsset.installDateCalendar, '28/7/2021')
        setField(newAsset.purchaseCalendar, '15/8/2021{enter}')
        setField(newAsset.usageEndDateCalendar, '30/9/2021')
        cy.get('#Quantity').clear().type('10')
        setField(newAsset.priceTxtBox, '100')
        setField(newAsset.descriptionTxtBox, 'Description')
        selectField(newAsset.statusComboBox, 'Shipped')
        clickField(newAsset.isCompetitorProduct)
        setField(newAsset.accountNameTxtBox, 'cuenta 13')
        setField(newAsset.productNameTxtBox, 'producto 2')
        setField(newAsset.contactNameTxtBox, 'contact2')

        clickField(newAsset.saveBtn)

        validateTextInField(detailAsset.nameTxt, 'New Asset')
        validateTextInField(detailAsset.accountNameTxt, 'cuenta 13')
        validateTextInField(detailAsset.productNameTxt, 'producto 2')
        validateTextInField(detailAsset.contactNameTxt, 'contact 2')
        validateTextInField(detailAsset.serialNumberTxt, 'Serial Number')
        validateTextInField(detailAsset.installDateTxt, '28/7/2021')
        validateTextInField(detailAsset.purchaseDateTxt, '15/8/2021')
        validateTextInField(detailAsset.usageEndDateTxt, '30/9/2021')
        validateTextInField(detailAsset.quantityTxt, '10,00')
        validateTextInField(detailAsset.descriptionTxt, 'Description')
        validateTextInField(detailAsset.statusTxt, 'Shipped')
        cy.get(detailAsset.competitorAssetImg).should('have.attr', 'alt', 'Checked')
    })
})