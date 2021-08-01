import {clickField, selectField, setField} from '../../core/action'
import {getJsonEntityAttributes} from '../../core/entity-actions'
import {iterateSetToRunMap} from '../../core/map-actions'
const newAsset = require('../../../fixtures/locator/asset/new-asset.json')

function setfunctionAssetMap(asset) {
    const assetMap = new Map()
    assetMap.set("name", () => setField(newAsset.nameTxtBox, asset.name))
    assetMap.set("serial number", () => setField(newAsset.serialNumberTxtBox, asset["serial number"]))
    assetMap.set("install date", () => setField(newAsset.installDateCalendar, asset["install date"]))
    assetMap.set("purchase date", () => setField(newAsset.purchaseDateCalendar, asset["purchase date"].concat('{esc}')))
    assetMap.set("usage end date", () => setField(newAsset.usageEndDateCalendar, asset["usage end date"]))
    assetMap.set("quantity", () => cy.get('#Quantity').clear().type(asset.quantity))
    assetMap.set("price", () => setField(newAsset.priceTxtBox, asset.price))
    assetMap.set("description", () => setField(newAsset.descriptionTxtBox, asset.description))
    assetMap.set("status", () => selectField(newAsset.statusComboBox, asset.status))
    assetMap.set("competitor", () => clickField(newAsset.isCompetitorProduct))
    assetMap.set("account", () => setField(newAsset.accountNameTxtBox, asset.account))
    assetMap.set("product", () => setField(newAsset.productNameTxtBox, asset.product))
    assetMap.set("contact", () => setField(newAsset.contactNameTxtBox, asset.contact))
    return assetMap
}

export function createAsset(asset) {
    const assetMap = setfunctionAssetMap(asset)
    const assetSet = getJsonEntityAttributes(asset)
    iterateSetToRunMap(assetMap, assetSet)
    clickField(newAsset.saveBtn)
}