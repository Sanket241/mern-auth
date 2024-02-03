const User = require('../model/user-model')
const Contact = require('../model/contact-model')
const getAlluser = async (req, resp) => {
    try {
        const users = await User.find();
        console.log(users)
        if (!users || users.length === 0) {
            return resp.status(401).json({ msg: "No user found" })
        }
        return resp.status(200).json(users);
    } catch (error) {
        resp.status(400).json({ msg: "Invalid error" })
    }
}


const getAllcontacts = async (req, resp) => {
    try {
        const contacts = await Contact.find()
        console.log(contacts)
        if (!contacts || contacts.length === 0) {
            return resp.status(401).json({ msg: "No contacts found" })
        }
       return resp.status(200).json(contacts)
    } catch (error) {
        resp.status(400).json({ msg: "Invalid error" })

    }
}



module.exports = { getAlluser, getAllcontacts }