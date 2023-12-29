const express = require('express')
const cors = require('cors')
const {userRouter} = require("./Routers/userRouter")
const {auth} = require('./middleware/auth.middleware');
const { connectDB } = require('./db');
const app = express()
app.use(express.json())
app.use(cors());
app.use("/user", userRouter)
 
app.get("/",auth, (req, res)=>{
    res.send({msg: "Welcome to brand wick's private route!", issue: false})
})


app.listen(8080, async()=>{
    try {
        await connectDB;
        console.log("running on 8080...")
    } catch (error) {
        console.log("error:",error.message)
    }
})