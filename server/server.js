require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const authRouter = require('./router/auth-router')
const contactRoute = require('./controllers/contact-controller')
const connectDb = require('./db/conn')
const errormidlleware = require('./middlewares/error-midlleware');
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
app.use(errormidlleware) // ekdum bottom par likhna hai


const start=async()=>{
    await connectDb();
    app.listen(port,()=>{
        console.log(`server is running at: ${port}`)
    })
}
start()