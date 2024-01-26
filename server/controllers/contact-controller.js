const Contact = require('../model/contact-model')
const contactform =async (req,resp)=>{
    try{
        const response = req.body;
        await Contact.create(response)
        resp.status(200).json({msg:"Message delivered"})
    }catch(err){
        resp.status(400).json({msg:"Message not delivered"})
    }
}
module.exports = contactform