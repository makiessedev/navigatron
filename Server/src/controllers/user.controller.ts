import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";
import { z } from "zod";

import { UserService } from "../services/user.service";

@injectable()
export class UserController {
  constructor(@inject("UserService") private userService: UserService) {}

  async createAccount(request: Request, response: Response): Promise<Response> {
    const userSchema = z.object({
      email: z.string().email(),
      password: z.string().nonempty(),
    });

    const { email, password } = userSchema.parse(request.body);

    await this.userService.create({ email, password });

    return response.status(201).send();
  }

  async authenticate(request: Request, response: Response): Promise<Response> {
    const authSchema = z.object({
      email: z.string().email(),
      password: z.string().nonempty(),
    });

    const { email, password } = authSchema.parse(request.body);

    const token = await this.userService.authenticate({ email, password });

    return response.json(token);
  }
}
