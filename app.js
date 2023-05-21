const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config({path:"./config.env"})
const connectDb = require('./db/db')
const port = 5000 || process.env.PORT
const app = express()

const router =require('./route/userRoute')


//connect DB
connectDb();

app.use(express.json())
//middle ware
app.use('/api',router)

//routes


//connect app



app.listen(port, () => {
    console.log(`server is runng on port ${port}`)
})



// JWT:jsonwebToken  use to authorized

// header ke paas authorization

//payload req.body ka payload