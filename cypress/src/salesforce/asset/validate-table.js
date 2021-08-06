import {getJsonEntityAttributes} from '../../core/entity-actions'
import {iterateSetToRunMap} from '../../core/map-actions'
import {validateTextInField} from '../../core/action'
const detailAsset = require('../../../fixtures/locator/asset/assets.json')

function setValidationAssetMap(asset, id) {
    const assetMap = new Map()
    assetMap.set("name", () => validateTextInField(id + detailAsset.assetNameTbTxt, asset.name))
    assetMap.set("account", () => validateTextInField(id + detailAsset.accountTbTxt, asset.account))
    assetMap.set("product", () => validateTextInField(id + detailAsset.productTbTxt, asset.product))
    assetMap.set("serial number", () => validateTextInField(id + detailAsset.serialNumberTbTxt, asset["serial number"]))
    assetMap.set("install date", () => validateTextInField(id + detailAsset.installDateTbTxt, asset["install date"]))
    return assetMap
}

export function validateAssetTable(asset, id) {
    const assetMap = setValidationAssetMap(asset, id)
    const assetSet = getJsonEntityAttributes(asset)
    iterateSetToRunMap(assetMap, assetSet)
}
