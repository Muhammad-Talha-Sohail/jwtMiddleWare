const jwt = require('jsonwebtoken')

const secretKey = "Talha"

const jwtAuth={
    sign(payload)
    {
        const token =jwt.sign(payload,secretKey)
        return token
    }
}

module.exports=jwtAuth;