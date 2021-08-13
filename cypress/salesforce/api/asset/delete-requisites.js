const feature = require('../features')

export function deleteAsset(token, ids) {
    if (ids.account !== undefined) {
        feature.deleteOne("Account", token, ids.account)
    }
    if (ids.product !== undefined) {
        feature.deleteOne("Product2", token, ids.product)
    }
}
