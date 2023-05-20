import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const application = express()
const connect = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err)
    }
}

application.listen(8800,() => {
    console.log("Listening")
    connect()
})