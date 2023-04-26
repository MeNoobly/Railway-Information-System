import express from "express";
import routeController from "../controllers/routeController.js";

const router = express();

router.get("/", routeController.getRoutes);
router.get("/:id", routeController.getOneRoutes);
router.post("/", routeController.postRoutes);

export default router;
