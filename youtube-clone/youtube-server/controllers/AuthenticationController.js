import mongoose from "mongoose"
import Channel from "../models/Channel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
            console.log("No such user found!");
            return next(createError(404,"User not found!"));
        }

        const isPassCorrect = await bcrypt.compare(req.body.password, channel.password);

        if(!isPassCorrect){
            console.log("Password incorrect!");
            return next(createError(400,"Wrong credentials!"));
        }

        const token = jwt.sign({id : channel._id}, process.env.JWT);

        const {password, ...others} = channel._doc;

        res.cookie("access_token", token, {
            httpOnly:true
        })
        .status(200)
        .json(others)

    }catch(err){
        console.log("Failed finding a user!")
        next(err)
    }
}

export const googleAuth = async(req,res,next) => {
    try{
        const user = await Channel.findOne({email:req.body.email});

        // Already registered. Send cookie.
        if(user){
            const token = jwt.sign({id:user._id}, process.env.JWT);

            res.cookie("access_token", token, {
                httpOnly:true
            })
            .status(200)
            .json(user._doc);
        }

        else{
            const newUser = new Channel({...req.body, fromGoogle:true});

            const savedUser = await newUser.save();

            const token = jwt.sign({id:savedUser._id}, process.env.JWT);

            res.cookie("access_token", token, {
                httpOnly:true
            })
            .status(200)
            .json(savedUser._doc);
        }

    }catch(err){
        console.log("Problem with Google Auth");
        next(err);
    }
}