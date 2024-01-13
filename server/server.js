const express = require('express')
const app = express();
const cors = require('cors')
const router = require('./router/auth-router')
const connectDb = require('./db/conn')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth",router)


const start=async()=>{
    await connectDb();
    app.listen(port,()=>{
        console.log(`server is running at: ${port}`)
    })
}
start()