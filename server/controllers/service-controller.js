const Service = require('../model/service-model')
const services=async(req,resp)=>{
try{
const response = await Service.find();
if(!response){
    resp.status(400).json({msg:"Not found"})
    return;

}
resp.status(200).json({msg:response})

}catch(error){
console.log(error)
}
}
module.exports = services