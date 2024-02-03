require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const authRouter = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const connectDb = require('./db/conn')
const errormidlleware = require('./middlewares/error-midlleware');
const serviseRoute = require('./router/service-router')
const adminRoute = require('./router/admin-router')
const port = process.env.PORT || 5000;

// const corsOption={
//     origin:"http://localhost:5173/",
//     methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
//     Credential:true,
// }
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRouter)
app.use("/api/form",contactRoute)
app.use("/api/data",serviseRoute)
app.use("/api/admin",adminRoute)
app.use(errormidlleware) // ekdum bottom par likhna hai


const start=async()=>{
    await connectDb();
    app.listen(port,()=>{
        console.log(`server is running at: ${port}`)
    })
}
start()