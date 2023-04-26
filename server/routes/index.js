import express from "express";
import userRouter from "./userRouter.js";
import routeRouter from "./routeRouter.js";

const router = express();

router.use("/user", userRouter);
router.use("/route", routeRouter);

export default router;
