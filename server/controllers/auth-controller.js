const User = require('../model/user-model')

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
            return resp.status(400).json({ msg: "Email already exsist" })
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);
        const usercreated = await User.create({ username, email, phone, password})  //:hash_password 
        resp.status(201).json({msg: usercreated })
    } 
    catch (error) {
        resp.status(200).send({ msg: "page not found" })

    }
}

// const login = async (req, resp) => {
//     try {
//         console.log("LOGIN")
//         resp.status(200).send("LOGIN")
//     } catch (error) {
//         resp.status(200).send({ msg: "page not found" })

//     }
// }
module.exports = { home, register }