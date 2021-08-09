import {getJsonEntityAttributes} from '../../../core/entity-actions'
import {iterateSetToRunMap} from '../../../core/map-actions'
import {validateTextInField} from '../action'
const detailAsset = require('../../../../fixtures/locator/asset/detail-asset.json')

function setValidationAssetMap(asset) {
    const assetMap = new Map()
    assetMap.set("name", () => cy.validateTextInField(detailAsset.nameTxt, asset.name))
    assetMap.set("account", () => cy.validateTextInField(detailAsset.accountNameTxt, asset.account))
    assetMap.set("product", () => cy.validateTextInField(detailAsset.productNameTxt, asset.product))
    assetMap.set("contact", () => cy.validateTextInField(detailAsset.contactNameTxt, asset.contact))
    assetMap.set("serial number", () => cy.validateTextInField(detailAsset.serialNumberTxt, asset["serial number"]))
    assetMap.set("install date", () => cy.validateTextInField(detailAsset.installDateTxt, asset["install date"]))
    assetMap.set("purchase date", () => cy.validateTextInField(detailAsset.purchaseDateTxt, asset["purchase date"]))
    assetMap.set("usage end date", () => cy.validateTextInField(detailAsset.usageEndDateTxt, asset["usage end date"]))
    assetMap.set("quantity", () => cy.validateTextInField(detailAsset.quantityTxt, asset.quantity))
    assetMap.set("description", () => cy.validateTextInField(detailAsset.descriptionTxt, asset.description))
    assetMap.set("status", () => cy.validateTextInField(detailAsset.statusTxt, asset.status))
    assetMap.set("competitor", () => cy.get(detailAsset.competitorAssetImg).should('have.attr', 'alt', 'Checked'))
    return assetMap
}

export function validateAsset(asset) {
    const assetMap = setValidationAssetMap(asset)
    const assetSet = getJsonEntityAttributes(asset)
    iterateSetToRunMap(assetMap, assetSet)
}
