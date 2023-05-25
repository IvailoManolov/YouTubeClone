import Channel from "../models/Channel";

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

}

export const subscribe = async (req, res, next) => {

}

export const unsubscribe = async (req, res, next) => {

}

export const like = async (req, res, next) => {

}

export const dislike = async (req, res, next) => {

}