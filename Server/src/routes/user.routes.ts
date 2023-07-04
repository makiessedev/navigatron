import { container } from 'tsyringe';
import { Router } from "express";

import { UserController } from "../controllers/user.controller";

export const userRoutes = Router();

const userController = container.resolve(UserController);

userRoutes.post("/", (req, res) => userController.createAccount(req, res));

userRoutes.post("/authenticate", (req, res) =>
  userController.authenticate(req, res)
);
