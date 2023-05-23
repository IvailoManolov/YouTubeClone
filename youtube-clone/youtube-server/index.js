import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import channelRoute from "./routes/channels.js"
import commentRoute from "./routes/comments.js"
import videoRoute from "./routes/videos.js"
import authenticationRoute from "./routes/authentication.js"
import cookieParser from "cookie-parser"

dotenv.config();

const application = express();

const connect = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to DB");
    }
    catch(err){
        console.log(err)
    }
}

application.use(cookieParser());
application.use(express.json())

application.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";

    return res.status(status).json({
        success:false,
        status,
        message,
    })
})

application.use("/api/authentication",authenticationRoute);
application.use("/api/channels",channelRoute);
application.use("/api/comments",commentRoute);
application.use("/api/videos",videoRoute);

application.listen(8800,() => {
    console.log("Listening");
    connect();
})