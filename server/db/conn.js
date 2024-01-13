// const userSchemas = new mongoose.Schema({

// })
// const Userproduct = new mongoose.model('Users',userSchemas);
// module.exports = Userproduct;
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Dashboard_mern'

const connectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log("DB Connect")
    } catch (error) {
        console.error("error")
        process.exit(0)
    }
}
module.exports=connectDB