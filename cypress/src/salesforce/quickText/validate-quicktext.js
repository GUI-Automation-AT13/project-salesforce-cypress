const {getJsonEntityAttributes} = require('../../core/entity-actions')
const {iterateSetToRunMap} = require('../../core/map-actions')
const {validateTextInField} = require('../../core/action')
const detailQuickText = require('../../../fixtures/locator/quickText/detail-quickText.json')

function setValidationQuickTextMap(quickTextJson) {
    const quickTextMap = new Map()
    quickTextMap.set("name", () => validateTextInField(detailQuickText.formName, quickTextJson.name))
    quickTextMap.set("message", () => validateTextInField(detailQuickText.formMessage, quickTextJson.message))
    quickTextMap.set("category", () => validateTextInField(detailQuickText.formCategory, quickTextJson.category))
    quickTextMap.set("channel", () => validateTextInField(detailQuickText.formChannel, quickTextJson.finalChannel))
    return quickTextMap
}

export function validateQuickText(quickTextJson) {
    const quickTextMap = setValidationQuickTextMap(quickTextJson)
    const quickTextSet = getJsonEntityAttributes(quickTextJson)
    iterateSetToRunMap(quickTextMap, quickTextSet)
}
