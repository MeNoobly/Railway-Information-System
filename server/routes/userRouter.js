import express from "express";
import userController from "../controllers/userController.js";

const router = express();

router.get("/auth", userController.check);

export default router;
