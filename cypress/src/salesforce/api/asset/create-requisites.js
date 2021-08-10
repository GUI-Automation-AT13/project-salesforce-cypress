const feature = require('../features')

export function createRequisites(assetE, token) {
    let accountId = ''
    let contactId = ''
    let productId = ''
    let assetId = ''
    const ids = {}
        const account = {
            "Name": "New Account"
        }

    return feature.create("Account", token, account).then((response) => {
        accountId = response.body.id
        if (assetE.ContactId === '') {
            const contact = {
                "LastName": "Last Name of a Contact",
                "AccountId": accountId
            }
            feature.create("Contact", token, contact).then((response2) => {
                contactId = response2.body.id
                assetE.ContactId = contactId
            })
        }
        if (assetE.Product2Id === '') {
            const product = {
                "Name": "New Product"
            }
            feature.create("Product2", token, product).then((response3) => {
                productId = response3.body.id
                assetE.Product2Id = productId
                ids.product = assetE.Product2Id
            })
        }
        if (assetE.AccountId === '') {
            assetE.AccountId = accountId
            ids.account = assetE.AccountId
        }
    }).then(() => {
        feature.create("Asset", token, assetE).then((response) => {
            assetId = response.body.id
            return ids
        })
    })
}
