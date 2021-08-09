const {getJsonEntityAttributes} = require('../../../core/entity-actions')
const {iterateSetToRunMap} = require('../../../core/map-actions')
const quickText = require('../../../../fixtures/locator/quicktext/new-quicktext.json')

function insertRelatedTo(relatedToOption) {
    cy.clickField(quickText.mergeField)
    cy.selectField(quickText.mergeTypeSelect, relatedToOption)
}

function setChannel(channel) {
    cy.selectField(quickText.channel, channel)
    cy.clickField(quickText.channelRightArrow)
}

function setFunctionQuickTextMap(quickTextJson) {
    const quickTextMap = new Map()
    quickTextMap.set("name", () => cy.setField(quickText.name, quickTextJson.name))
    quickTextMap.set("message", () => cy.setField(quickText.message, quickTextJson.message))
    quickTextMap.set("relatedTo", () => insertRelatedTo(quickTextJson.relatedTo))
    quickTextMap.set("fieldOption", () => cy.selectField(quickText.mergeFieldSelect, quickTextJson.fieldOption))
    quickTextMap.set("category", () => cy.selectField(quickText.category, quickTextJson.category))
    quickTextMap.set("channel", () => setChannel(quickTextJson.channel))
    return quickTextMap
}

export function createQuickText(quickTextJson) {
    const quickTextMap = setFunctionQuickTextMap(quickTextJson)
    const quickTextSet = getJsonEntityAttributes(quickTextJson)
    iterateSetToRunMap(quickTextMap, quickTextSet)
    cy.clickField(quickText.saveBtn)
}
