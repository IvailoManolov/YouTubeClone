import express from "express"
import { signin, signup } from "../controllers/AuthenticationController.js";

const router = express.Router();

// CREATING A USER
router.post("/signup", signup)

// // SINGING IN 
router.post("/signin", signin)

// // GOOGLE AUTHENTICATION
// router.post("/google-auth",)

export default router;