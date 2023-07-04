import { Router } from "express";
import { container } from "tsyringe";
import { NavigationController } from "../controllers/navigation.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const navigationRoutes = Router();

const navigationController = container.resolve(NavigationController);

navigationRoutes.post("/", ensureAuthenticated, (req, res) => {
  navigationController.createNavigation(req, res);
});

navigationRoutes.get("/", ensureAuthenticated, (req, res) => {
  navigationController.listNavigationByUser(req, res);
});
