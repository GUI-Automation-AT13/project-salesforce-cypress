const feature = require('../features')

export function createEntity(featureName, token, entity) {
    let entityId = ''
    return feature.create(featureName, token, entity).then((response) => {
        entityId = response.body.id
        return entityId
    })
}
export function createAccount(token, accountName) {
    const account = {
        "Name": accountName
    }
    return createEntity("Account", token, account)
}

export function createProduct(token, accountName) {
    const product = {
        "Name": accountName
    }
    return createEntity("Product2", token, product)
}

export function createContact(token, contactName, accountId) {
    const contact = {
        "Lastname": contactName,
        "AccountId": accountId
    }
    return createEntity("Contact", token, contact)
}

export function createAssetRequisites(token, asset) {
    const ids = {}
    let accountName = asset.AccountId
    if (accountName === undefined) {
        accountName = "New account by defect"
    }
    createAccount(token, accountName).then((id) => {
        ids.account = id
        if (asset.AccountId !== undefined) {
            asset.AccountId = id
        }
        if (asset.ContactId !== undefined) {
            createContact(token, asset.ContactId, ids.account).then((contactId) => {
                asset.ContactId = contactId
            })
        }
    })
    if (asset.Product2Id !== undefined) {
        createProduct(token, asset.Product2Id).then((id) => {
            ids.product = id
            asset.Product2Id = id
        })
    }
    return ids
}

export function setAssetPreRequest(entryAsset) {
    const asset = {}
    if (entryAsset.account !== undefined) {
        asset.AccountId = entryAsset.account
    }
    if (entryAsset.contact !== undefined) {
        asset.ContactId = entryAsset.contact
    }
    if (entryAsset.product !== undefined) {
        asset.Product2Id = entryAsset.product
    }
    return asset
}
