import { createError } from "../error";
import Video from "../models/Video"

export const addVideo = async (req,res,next) => {
    const newVideo = new Video({userId:req.user.id, ...req.body});

    try{
        const savedVideo = await newVideo.save();

        console.log("Video saved successfully!");

        res.status(200).json(savedVideo);
    }
    catch(err){
        console.log("Problem creating a video!");
        next(err);
    }
}

export const updateVideo = async (req,res,next) => {
    try{
        const video = await Video.findById(req.params.id);

        if(!video){
            return next(createError(404,'Video not found!'));
        }

        if(req.user.id === video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});

            res.status(200).json(updatedVideo);
        }
        
        else{
            res.status(500).json("You can update only your videos!");
        }
    }
    catch(err){
        console.log("Problem creating a video!");
        next(err);
    }
}

export const deleteVideo = async (req,res,next) => {
    try{

    }
    catch(err){
        console.log("Problem creating a video!");
        next(err);
    }
}

export const getVideo = async (req,res,next) => {
    try{

    }
    catch(err){
        console.log("Problem creating a video!");
        next(err);
    }
}
