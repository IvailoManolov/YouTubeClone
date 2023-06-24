import express from "express"
import { dislike, getUser, like, subscribe, unsubscribe, updateUser } from "../controllers/ChannelController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// updating a user.
router.put("/:id", verifyToken, updateUser);

// get a user.
router.get("/find/:id", getUser);

// subscribe a user.
router.get("/sub/:id", verifyToken, subscribe);

// unsubscribe a user.
router.get("/sub/:id", verifyToken, unsubscribe);

// like a video.
router.get("/sub/:videoId", verifyToken, like);

// dislike a video.
router.get("/sub/:videoId", verifyToken, dislike);

export default router;