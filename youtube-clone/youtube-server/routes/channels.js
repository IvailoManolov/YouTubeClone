import express from "express"
import { dislike, getUser, like, subscribe, unsubscribe, updateUser } from "../controllers/ChannelController";

const router = express.Router();

// updating a user.
router.put("/:id", updateUser);

// get a user.
router.get("/find/:id", getUser);

// subscribe a user.
router.get("/sub/:id", subscribe);

// unsubscribe a user.
router.get("/sub/:id", unsubscribe);

// like a video.
router.get("/sub/:videoId", like);

// dislike a video.
router.get("/sub/:videoId", dislike);

export default router;