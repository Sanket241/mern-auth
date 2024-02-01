const User = require('../model/user-model')
const bcrypt = require('bcryptjs')
const home = async (req, resp) => {
    try {
        console.log("ROUTER")
        resp.status(200).send("HELLO")

    } catch (error) {
        console.log(error)
    }
}
const register = async (req, resp) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExsist = await User.findOne({ email: email })
        if (userExsist) {
            return resp.status(400).json({ message: "Email already exsist" })
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);
        const userCreated = await User.create({ username, email, phone, password })  //:hash_password 
        resp.status(201).json({
            msg: "Successful created",
            token: await userCreated.generateToken(),
            uerId: userCreated._id.toString(),
        })
    }
    catch (error) {
        resp.status(200).send({ msg: "page not found" })

    }
}

const login = async (req, resp) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({email})
        if (!userExist) {
            return resp.status(400).send({ message: "Invalid Credentials" })
        }
        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if (user) {
            resp.status(200).json({
                msg: "Login Successfull",
                token: await userExist.generateToken(),
                uerId: userExist._id.toString(),
            })
        } else {
            resp.status(401).json({ msg: "Invalid email and Password" })

        }

    } catch (err) {
        resp.status(500).send({ msg: "page not found" })
        // const status = 500;
        // const message = "Page Not Found"
        // const error ={
        //     status,    for login error try self
        //     message
        // }
        // console.log(error)
        // next(error)

    }
}

const user =async(req,resp)=>{
try{
const userData = req.user
console.log(userData)
return resp.status(200).json(userData)
}catch(error){
    console.log(`error from the user route ${error}`)
}
}



module.exports = { home, register, login, user }