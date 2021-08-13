import {clickField, selectField, setField} from '../action'
import {getJsonEntityAttributes} from '../../../support/utils/entity-actions'
import {iterateSetToRunMap} from '../../../support/utils/map-actions'
const newAsset = require('../../../fixtures/locator/asset/new-asset.json')

function setfunctionAssetMap(asset) {
    const assetMap = new Map()
    assetMap.set("name", () => cy.setField(newAsset.nameTxtBox, asset.name))
    assetMap.set("serial number", () => cy.setField(newAsset.serialNumberTxtBox, asset["serial number"]))
    assetMap.set("install date", () => cy.setField(newAsset.installDateCalendar, asset["install date"]))
    assetMap.set("purchase date", () => cy.setField(newAsset.purchaseDateCalendar, asset["purchase date"].concat('{esc}')))
    assetMap.set("usage end date", () => cy.setField(newAsset.usageEndDateCalendar, asset["usage end date"]))
    assetMap.set("quantity", () => cy.get('#Quantity').clear().type(asset.quantity))
    assetMap.set("price", () => cy.setField(newAsset.priceTxtBox, asset.price))
    assetMap.set("description", () => cy.setField(newAsset.descriptionTxtBox, asset.description))
    assetMap.set("status", () => cy.selectField(newAsset.statusComboBox, asset.status))
    assetMap.set("competitor", () => cy.clickField(newAsset.isCompetitorProduct))
    assetMap.set("account", () => cy.setField(newAsset.accountNameTxtBox, asset.account))
    assetMap.set("product", () => cy.setField(newAsset.productNameTxtBox, asset.product))
    assetMap.set("contact", () => cy.setField(newAsset.contactNameTxtBox, asset.contact))
    return assetMap
}

export function createAsset(asset) {
    const assetMap = setfunctionAssetMap(asset)
    const assetSet = getJsonEntityAttributes(asset)
    iterateSetToRunMap(assetMap, assetSet)
    cy.clickField(newAsset.saveBtn)
}
