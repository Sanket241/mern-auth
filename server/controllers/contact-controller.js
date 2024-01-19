const Contact = require('../model/contact-model')
const contactform =async (req,resp)=>{
    try{
        const response = req.body;
        await Contact.create(response)
    }catch(err){
            resp.status(5000).json({msg:"Message not delivered"})
    }
}
module.exports = contactform