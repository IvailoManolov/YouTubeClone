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

export const deleteUser = (req, res, next) => {

}

export const getUser = (req, res, next) => {

}

export const subscribe = (req, res, next) => {

}

export const unsubscribe = (req, res, next) => {

}

export const like = (req, res, next) => {

}

export const dislike = (req, res, next) => {

}