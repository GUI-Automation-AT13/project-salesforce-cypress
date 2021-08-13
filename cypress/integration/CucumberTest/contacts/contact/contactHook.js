const apiLogin = require("../../../../salesforce/api/login")
let token = ''
before(() => {
    apiLogin.login().then((result) => {
        token = result.body.access_token
    })
})


 export {token}
