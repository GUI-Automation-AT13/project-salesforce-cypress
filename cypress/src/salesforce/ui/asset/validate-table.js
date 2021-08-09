import {getJsonEntityAttributes} from '../../../core/entity-actions'
import {iterateSetToRunMap} from '../../../core/map-actions'
const detailAsset = require('../../../../fixtures/locator/asset/assets.json')

function setValidationAssetMap(asset, id) {
    const assetMap = new Map()
    assetMap.set("name", () => cy.validateTextInField(id + detailAsset.assetNameTbTxt, asset.name))
    assetMap.set("account", () => cy.validateTextInField(id + detailAsset.accountTbTxt, asset.account))
    assetMap.set("contact", () => cy.validateTextInField(id + detailAsset.contactTbTxt, asset.contact))
    assetMap.set("serial number", () => cy.validateTextInField(id + detailAsset.serialNumberTbTxt, asset["serial number"]))
    assetMap.set("install date", () => cy.validateTextInField(id + detailAsset.installDateTbTxt, asset["install date"]))
    return assetMap
}

export function validateAssetTable(asset, id) {
    const assetMap = setValidationAssetMap(asset, id)
    const assetSet = getJsonEntityAttributes(asset)
    iterateSetToRunMap(assetMap, assetSet)
}
