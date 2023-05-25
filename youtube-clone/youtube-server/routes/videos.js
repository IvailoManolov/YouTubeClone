import express from "express"
import { addVideo, addView, deleteVideo, getVideo, randomVideo, subbed, trendVideo, updateVideo } from "../controllers/VideoController";
import { verifyToken } from "../verifyToken";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);

//update a video
router.put("/:id", verifyToken, updateVideo);

//delete a video
router.delete("/:id", verifyToken, deleteVideo);

//get a video
router.get("/find/:id", getVideo);

//Incrementing views
router.put("/view/:id", addView);

//Getting trendy videos
router.get("/trend", trendVideo);

//Getting trendy videos
router.get("/random", randomVideo);

//Getting trendy videos
router.get("/sub", verifyToken, subbed);

export default router;