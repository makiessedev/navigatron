import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { FeedbackService } from "../services/feedback.service";

@injectable()
export class FeedbackController {
  constructor(
    @inject("FeedbackService") private feedbackService: FeedbackService
  ) {}

  async createFeedback(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { user_id } = request;
    const { navigation } = request.query;

    const feedbackSchema = z.object({
      message: z.string().nonempty(),
      classification: z.string().nonempty(),
    });

    const { message, classification } = feedbackSchema.parse(request.body);

    await this.feedbackService.createFeedback({
      fk_user: Number(user_id),
      fk_navigation: Number(navigation),
      message,
      classification,
    });

    return response.status(201).send();
  }

  async listFeedbackByUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { user_id } = request;

    const Feedbacks = await this.feedbackService.listFeedbackByUser(user_id);

    return response.json(Feedbacks);
  }
}
