// verify json web token
const jwt = require('jsonwebtoken')
const User = require('../model/user-model')
const authMiddleware=async(req,resp,next)=>{

    const token = req.header('Authorization');  //only write HEADER INSTEAD OF HEADERS
    if(!token){
        return resp.status(401).json({msg:"Unauthorized HTTP, Token not provider"})
    }
    const jwtToken = token.replace("Bearer"," ").trim()
    console.log("token from middleware",jwtToken)

    try {
        const isVerified = jwt.verify(jwtToken,process.env.jwt_secret_key)
        console.log(isVerified)
        const userData = await User.findOne({email:isVerified.email}).select({
            password:0,
        })
        console.log(userData)
        req.user = userData;
        req.token = token;
        req.userID = userData._id
        next()
    } catch (error) {
        return resp.status(401).json({msg:"Unauthorized Token"})
    }



}
module.exports = authMiddleware