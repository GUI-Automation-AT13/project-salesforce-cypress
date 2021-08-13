const {getJsonEntityAttributes} = require('../../../support/utils/entity-actions')
const {iterateSetToRunMap} = require('../../../support/utils/map-actions')
const detailQuickText = require('../../../fixtures/locator/quicktext/detail-quicktext.json')

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

export function formJsonExpected(quickTextJson) {
    return {
        "Quick Text Name": quickTextJson.name,
        "Message": quickTextJson.message,
        "Category": quickTextJson.category || "Greetings",
        "Channel": quickTextJson.finalChannel || "Email",
        "Include in selected channels": ""
    }
}
