import { Router } from "express";
import { feedbackRoutes } from "./feedback.routes";
import { navigationRoutes } from "./navigation.routes";
import { userRoutes } from "./user.routes";

export const router = Router();

router.use("/users", userRoutes);
router.use("/navigations", navigationRoutes);
router.use("/feedbacks", feedbackRoutes);
