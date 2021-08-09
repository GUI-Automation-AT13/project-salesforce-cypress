const {getJsonEntityAttributes} = require('../../../core/entity-actions')
const {iterateSetToRunMap} = require('../../../core/map-actions')
const {validateTextInField} = require('../action')
const detailQuickText = require('../../../../fixtures/locator/quicktext/detail-quicktext.json')

function setValidationQuickTextMap(quickTextJson) {
    const quickTextMap = new Map()
    quickTextMap.set("name", () => cy.validateTextInField(detailQuickText.formName, quickTextJson.name))
    quickTextMap.set("message", () => cy.validateTextInField(detailQuickText.formMessage, quickTextJson.message))
    quickTextMap.set("category", () => cy.validateTextInField(detailQuickText.formCategory, quickTextJson.category))
    quickTextMap.set("channel", () => cy.validateTextInField(detailQuickText.formChannel, quickTextJson.finalChannel))
    return quickTextMap
}

export function validateQuickText(quickTextJson) {
    const quickTextMap = setValidationQuickTextMap(quickTextJson)
    const quickTextSet = getJsonEntityAttributes(quickTextJson)
    iterateSetToRunMap(quickTextMap, quickTextSet)
}
