import { Router } from "express";
import { container } from "tsyringe";
import { FeedbackController } from "../controllers/feedback.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const feedbackRoutes = Router();

const feedbackController = container.resolve(FeedbackController);

feedbackRoutes.post("/", ensureAuthenticated, (req, res) => {
  feedbackController.createFeedback(req, res);
});

feedbackRoutes.get("/", ensureAuthenticated, (req, res) => {
  feedbackController.listFeedbackByUser(req, res);
});
