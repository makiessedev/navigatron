import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { NavigationService } from "../services/navigation.service";

@injectable()
export class NavigationController {
  constructor(
    @inject("NavigationService") private navigationService: NavigationService
  ) {}

  async createNavigation(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { user_id } = request;

    const navigationSchema = z.object({
      origin: z.string().nonempty(),
      destiny: z.string().nonempty(),
      duration: z.string(),
    });

    const { origin, destiny, duration } = navigationSchema.parse(
      request.body
    );

    await this.navigationService.createNavigation({
      fk_user: Number(user_id),
      origin,
      destiny,
      duration,
    });

    return response.status(201).send();
  }

  async listNavigationByUser(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    const navigations = await this.navigationService.listNavigationByUser(user_id);

    return response.json(navigations)
  }
}
