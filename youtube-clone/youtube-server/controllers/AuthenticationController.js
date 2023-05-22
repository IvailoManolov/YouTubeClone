import mongoose from "mongoose"
import Channel from "../models/Channel.js"
import bcrypt from "bcrypt"
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPass = bcrypt.hashSync(req.body.password,salt);

        const newChannel = new Channel({...req.body, password : hashedPass });

        await newChannel.save();
        
        res.status(200).send("Channel has been created!");
    }catch(err){
        console.log("Failed creating a user!")
        next(err)
    }
}

export const signin = async (req, res, next) => {
    try{
        const channel = await Channel.findOne({name : req.body.name});

        if(!channel){
            return next(createError(404,"User not found!"));
        }

    }catch(err){
        console.log("Failed finding a user!")
        next(err)
    }
}