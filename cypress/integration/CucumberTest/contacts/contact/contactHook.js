const apiLogin = require("../../../../src/salesforce/api/login")
let token = ''
before(async () => {
    token = await apiLogin.login()
})

 export {token}