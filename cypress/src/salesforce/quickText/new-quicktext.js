const {clickField, selectField, setField} = require('../../core/action')
const {getJsonEntityAttributes} = require('../../core/entity-actions')
const {iterateSetToRunMap} = require('../../core/map-actions')
const quickText = require('../../../fixtures/locator/quicktext/new-quicktext.json')

function insertRelatedTo(relatedToOption) {
    clickField(quickText.mergeField)
    selectField(quickText.mergeTypeSelect, relatedToOption)
}

function setChannel(channel) {
    selectField(quickText.channel, channel)
    clickField(quickText.channelRightArrow)
}

function setFunctionQuickTextMap(quickTextJson) {
    const quickTextMap = new Map()
    quickTextMap.set("name", () => setField(quickText.name, quickTextJson.name))
    quickTextMap.set("message", () => setField(quickText.message, quickTextJson.message))
    quickTextMap.set("relatedTo", () => insertRelatedTo(quickTextJson.relatedTo))
    quickTextMap.set("fieldOption", () => selectField(quickText.mergeFieldSelect, quickTextJson.fieldOption))
    quickTextMap.set("category", () => selectField(quickText.category, quickTextJson.category))
    quickTextMap.set("channel", () => setChannel(quickTextJson.channel))
    return quickTextMap
}

export function createQuickText(quickTextJson) {
    const quickTextMap = setFunctionQuickTextMap(quickTextJson)
    const quickTextSet = getJsonEntityAttributes(quickTextJson)
    iterateSetToRunMap(quickTextMap, quickTextSet)
    clickField(quickText.saveBtn)
}
