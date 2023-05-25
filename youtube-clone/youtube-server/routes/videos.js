import express from "express"
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/VideoController";
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

export default router;