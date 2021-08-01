import {getJsonEntityAttributes} from '../../core/entity-actions'
import {iterateSetToRunMap} from '../../core/map-actions'
import {validateTextInField} from '../../core/action'
const detailAsset = require('../../../fixtures/locator/asset/detail-asset.json')

function setValidationAssetMap(asset) {
    const assetMap = new Map()
    assetMap.set("name", () => validateTextInField(detailAsset.nameTxt, asset.name))
    assetMap.set("account", () => validateTextInField(detailAsset.accountNameTxt, asset.account))
    assetMap.set("product", () => validateTextInField(detailAsset.productNameTxt, asset.product))
    assetMap.set("contact", () => validateTextInField(detailAsset.contactNameTxt, asset.contact))
    assetMap.set("serial number", () => validateTextInField(detailAsset.serialNumberTxt, asset["serial number"]))
    assetMap.set("install date", () => validateTextInField(detailAsset.installDateTxt, asset["install date"]))
    assetMap.set("purchase date", () => validateTextInField(detailAsset.purchaseDateTxt, asset["purchase date"]))
    assetMap.set("usage end date", () => validateTextInField(detailAsset.usageEndDateTxt, asset["usage end date"]))
    assetMap.set("quantity", () => validateTextInField(detailAsset.quantityTxt, asset.quantity))
    assetMap.set("description", () => validateTextInField(detailAsset.descriptionTxt, asset.description))
    assetMap.set("status", () => validateTextInField(detailAsset.statusTxt, asset.status))
    assetMap.set("competitor", () => cy.get(detailAsset.competitorAssetImg).should('have.attr', 'alt', 'Checked'))
    return assetMap
}

export function validateAsset(asset) {
    const assetMap = setValidationAssetMap(asset)
    const assetSet = getJsonEntityAttributes(asset)
    iterateSetToRunMap(assetMap, assetSet)
}