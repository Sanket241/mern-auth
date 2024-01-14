const mongoose = require('mongoose')
const url = process.env.url;

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