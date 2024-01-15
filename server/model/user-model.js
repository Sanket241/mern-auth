const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

})
userSchema.pre("save", async function (next) {
    const user =this;
    if(!user.isModified("password")){
        next();
    }
    try{
        //agar password modified hua hai yaaaaa password create hua hai
        // this.password = await bcrypt.hash(this.password, 12)
        const saltRound = 12;
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password = hash_password;
        next();
    }
    catch(error){
        console.log(error)
    }
    next()
})
const User = new mongoose.model('User', userSchema);
module.exports = User;