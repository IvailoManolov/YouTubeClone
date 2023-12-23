import Channel from "../models/Channel.js";
import Video from "../models/Video.js";

export const updateUser = async (req, res, next) => {

    if(req.params.id === req.user.id) {
        try {
            const updatedChannel = await Channel.findByIdAndUpdate(req.params.id, {
                $set : req.body
            },{new:true});

            res.status(200).json(updatedChannel);
        }
        catch(err) {
            next(err)
        }
    }
    else {
        return next(createError(403,"You can update only your account!"));
    }
}

export const deleteUser = async (req, res, next) => {
    if(req.params.id === req.user.id) {
        try {
            const updatedChannel = await Channel.findByIdAndDelete(req.params.id)

            res.status(200).json("User has been deleted");
        }
        catch(err) {
            next(err)
        }
    }
    else {
        return next(createError(403,"You can delete only your account!"));
    }
}

export const getUser = async (req, res, next) => {
    try{
        const channel = Channel.findById(req.params.id);
        res.status(200).json(channel);
    }
    catch(err){
        console.log("Channel not found!");
        next(err)
    }
}

export const subscribe = async (req, res, next) => {
    try{
        await Channel.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers:req.params.id}
        })

        await Channel.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1}
        })

        res.status(200).json("Subscription successfull.");
    }
    catch(err){
        console.log("Subscription unsuccessfull");
        next(err)
    }
}

export const unsubscribe = async (req, res, next) => {
    try{
        await Channel.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        })

        await Channel.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1}
        })
        res.status(200).json("Unsubscription successfull.");
    }
    catch(err){
        console.log("Unsubscription unsuccessfull.");
        next(err)
    }
}

export const like = async (req, res, next) => {
    try{
        const id = req.user.id;
        const videoId = req.params.videoId;

        // Add the user to the likes array
        // And remove it from the dislikes array, since we liked the video.
        await Video.findByIdAndUpdate(videoId,{
            $addToSet : {likes:id},
            $pull: {dislikes:id}
        })
        res.status(200).json("The video has been liked.")
    }
    catch(err){
        next(err)
    }
}

export const dislike = async (req, res, next) => {
    try {
        const id = req.user.id;
        const videoId = req.params.id;

        // Add the user id to the dislikes array,
        // And remove it from the likes array, since we have disliked the video.
        await Video.findByIdAndUpdate(videoId,{
            $addToSet : {dislikes:id},
            $pull : {likes:id}
        })

        res.status(200).json("The video has been disliked.")
    }
    catch(err){
        next(err)
    }
}