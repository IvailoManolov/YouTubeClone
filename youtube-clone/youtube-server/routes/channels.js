import express from "express"
import { dislike, getUser, like, subscribe, unsubscribe, updateUser } from "../controllers/ChannelController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// updating a user.
router.put("/:id", verifyToken, updateUser);

// get a user.
router.get("/find/:id", getUser);

// subscribe a user.
router.put("/sub/:id", verifyToken, subscribe);

// unsubscribe a user.
router.put("/unsub/:id", verifyToken, unsubscribe);

// like a video.
router.put("/like/:videoId", verifyToken, like);

// dislike a video.
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;