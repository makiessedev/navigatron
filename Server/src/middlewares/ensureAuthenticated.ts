import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserService } from "../services/user.service";
import { Database } from "../util/database";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 404);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      `${process.env.JWT_SECRET}`
    ) as IPayload;

    const database = new Database();
    const userService = new UserService(database);

    const user = await userService.findUserById(user_id);

    if (!user) {
      throw new AppError("User does not exists!");
    }

    request.user_id = `${user.id}`;

    next();
  } catch (error) {
    throw new AppError("Invalid token!");
  }
}
