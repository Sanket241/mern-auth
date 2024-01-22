const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

})
userSchema.pre("save", async function (next) {
    const user =this;
    if(!user.isModified('password')){
        next();
    }
    try{
        //agar password modified hua hai yaaaaa password create hua hai
        // this.password = await bcrypt.hash(this.password, 12)
        const saltRound = 12;
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password = hash_password;
        
    }
    catch(error){
        console.log(error)
    }
})

//compare the password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.password)
};


//json web token
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.admin,
        },
        process.env.jwt_secret_key,{
            expiresIn:'1d',
        }
        )
    }catch(error){
        console.log(error)
    }
}
const User = new mongoose.model('User', userSchema);
module.exports = User;