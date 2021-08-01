export function getJsonEntityAttributes(jsonEntity) {
    const entitySet = new Set()
    for (const attribute in jsonEntity) {
        if (Object.hasOwnProperty.call(jsonEntity, attribute)) {
            entitySet.add(attribute)
        }
    }
    return entitySet
}