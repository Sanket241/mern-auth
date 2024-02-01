const {z} = require("zod")
// create a object scehma

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required "})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"email must be at least 3 character "})
    .max(255,{message:"email must not be more than 255 characters"}),

    password:z
    .string({required_error:"Password is required "})
    .trim()
    .min(3,{message:"Password must be at least 10 character "})
    .max(10,{message:"Password must not be more than 20 characters"}),

})
const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required "})
    .trim()
    .min(3,{message:"Name must be at least 3 character "})
    .max(255,{message:"Name must not be more than 255 characters"}),

   
    phone:z
    .string({required_error:"Phone is required "})
    .trim()
    .min(10,{message:"Phone must be at least 10 character"})
    .max(20,{message:"Phone must not be more than 20 characters"}),

 
})
module.exports = {signupSchema,loginSchema}